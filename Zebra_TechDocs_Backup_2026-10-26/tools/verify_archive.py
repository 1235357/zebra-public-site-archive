#!/usr/bin/env python3
"""Read-only byte-for-byte verification of Zebra archive trees against a Git commit."""
import argparse
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import subprocess
import sys

ROOTS = ("Zebra_Forum_Backup_2026-10-26", "Zebra_TechDocs_Backup_2026-10-26")


def git(gitdir, *args):
    proc = subprocess.run(["git", "--git-dir=" + str(gitdir), *args], stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=False)
    if proc.returncode:
        raise RuntimeError("git " + " ".join(args) + ": " + proc.stderr.decode("utf-8", "replace").strip())
    return proc.stdout


def verify(worktree, gitdir, ref):
    worktree = Path(worktree).resolve(strict=True)
    gitdir = Path(gitdir).resolve(strict=True)
    commit = git(gitdir, "rev-parse", "--verify", ref + "^{commit}").decode().strip()
    fmt = git(gitdir, "rev-parse", "--show-object-format").decode().strip()
    if fmt not in ("sha1", "sha256"):
        raise RuntimeError("unsupported Git object format: " + fmt)
    raw = git(gitdir, "ls-tree", "-r", "-z", "--full-tree", commit, "--", *ROOTS)
    expected = {}
    errors = []
    for record in raw.split(b"\0"):
        if not record:
            continue
        metadata, filename = record.split(b"\t", 1)
        mode, kind, oid = metadata.decode("ascii").split(" ")
        name = filename.decode("utf-8", "strict")
        path = PurePosixPath(name)
        if path.is_absolute() or ".." in path.parts or not path.parts or path.parts[0] not in ROOTS:
            errors.append("unsafe_tree_path:" + name)
        elif kind != "blob" or mode not in ("100644", "100755"):
            errors.append("unsupported_git_mode:" + name + ":" + mode)
        elif name in expected:
            errors.append("duplicate_tree_path:" + name)
        else:
            expected[name] = oid
    for root in ROOTS:
        if not any(name.startswith(root + "/") for name in expected):
            errors.append("missing_or_empty_git_root:" + root)
    actual = {}
    for root in ROOTS:
        base = worktree / root
        if base.is_symlink() or not base.is_dir():
            errors.append("missing_or_unsafe_local_root:" + root)
            continue
        for directory, dirs, files in os.walk(base, topdown=True, followlinks=False, onerror=lambda e: errors.append("walk_error:" + str(e))):
            for dirname in dirs[:]:
                entry = Path(directory) / dirname
                if entry.is_symlink():
                    errors.append("symlink_directory:" + str(entry.relative_to(worktree)))
                    dirs.remove(dirname)
            for filename in files:
                entry = Path(directory) / filename
                name = entry.relative_to(worktree).as_posix()
                if entry.is_symlink() or not entry.is_file():
                    errors.append("not_regular_file:" + name)
                elif name in actual:
                    errors.append("duplicate_local_path:" + name)
                else:
                    actual[name] = entry
    expected_set = set(expected)
    actual_set = set(actual)
    missing = sorted(expected_set - actual_set)
    extra = sorted(actual_set - expected_set)
    mismatch = []
    for name in sorted(expected_set & actual_set):
        path = actual[name]
        try:
            before = path.stat()
            digest = hashlib.new(fmt)
            digest.update(b"blob " + str(before.st_size).encode("ascii") + b"\0")
            with path.open("rb") as stream:
                for chunk in iter(lambda: stream.read(1024 * 1024), b""):
                    digest.update(chunk)
            after = path.stat()
            if (before.st_size, before.st_mtime_ns) != (after.st_size, after.st_mtime_ns):
                errors.append("changed_during_read:" + name)
            elif digest.hexdigest() != expected[name]:
                mismatch.append(name)
        except OSError as exc:
            errors.append("read_error:" + name + ":" + str(exc))
    return {"commit": commit, "object_format": fmt, "roots": list(ROOTS), "git_files": len(expected), "local_files": len(actual), "missing": missing, "extra": extra, "content_mismatch": mismatch, "errors": errors, "ok": not (missing or extra or mismatch or errors), "limits": "Local working tree vs Git commit only; no proof of remote synchronization, source coverage, or whole-site completeness."}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--work-tree", required=True)
    parser.add_argument("--git-dir", required=True)
    parser.add_argument("--commit", required=True, help="explicit commit/ref to resolve and report")
    args = parser.parse_args()
    try:
        result = verify(args.work_tree, args.git_dir, args.commit)
        print(json.dumps(result, ensure_ascii=False, indent=2))
        return 0 if result["ok"] else 1
    except (ValueError, RuntimeError, OSError, UnicodeError) as exc:
        print(json.dumps({"ok": False, "fatal": str(exc)}, ensure_ascii=False), file=sys.stderr)
        return 2


if __name__ == "__main__":
    sys.exit(main())

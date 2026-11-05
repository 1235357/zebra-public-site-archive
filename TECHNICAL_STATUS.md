# Technical status and evidence boundaries

Companion detail for reviewers who want the counts, methods, and unresolved checks behind the short project overview. Status date: November 5, 2026 UTC. This document distinguishes source snapshots, locally checked processing, exploratory observations, and planned validation. Publishing documentation does not imply new model or device runs.

## What has changed since the published November 2 materials?

The table summarizes continuation checked locally through November 5. Each result must be read with its corresponding evidence and review record; documentation publication alone does not establish technical acceptance.

| Workstream | Observed result | Remaining limit |
| --- | --- | --- |
| Offline question extraction | 2,886 archived captures produced 2,854 unique admitted question records after 31 quarantined captures and one duplicate. | These are local snapshot-processing counts, not live forum coverage or a final software-only dataset. |
| Material-gap audit | 187 questions have at least one code, media, attachment, or structure flag. | Flags can overlap; the absence of a flag does not prove completeness. |
| Initial development set | Eight case packets; seven retain recoverable original-question structure. | ET40 original question bytes remain missing. No case is established as materially complete. |
| Documentation crosswalk | Eight cases map to 12 official source URLs through 57 metadata joins: 10 prior rendered line ranges and 47 short fragments. | The joins are not 57 full sections, semantic proof, historical snapshots, or an accuracy score. |
| Reproducibility | The eight-case crosswalk passed 26 tests in normal Python and 26 under optimization; independent review reproduced its four outputs. | This verifies deterministic metadata processing, not the resolution of technical cases. |
| Exploratory model observations | One TC21 question has captured outputs from directly observed Pro and Medium selections, plus one recovered historical response, using the same expanded visible input. | The historical response's original mode is unknown; the selector displayed Instant only when read back. Exact backend versions and complete isolation are unverified. |
| Case analysis | WT5400 decoder settings and a Xamarin manifest question have updated local analysis drafts. | Neither has a confirmed device fix or client acceptance; new drafts still need language and publication review. |

**No quantitative model ranking is claimed.** The observations are small, exploratory, and unblinded. Current UI labels are not exact backend model identifiers. DeepSeek, a fresh verified Instant trial, unseen-set scoring, and device validation remain **NOT_RUN** for the planned controlled comparison.

## Selected cases: what can be reviewed now?

### WT5400 decoder configuration

The archived question reports decoder switches remaining enabled in the DataWedge profile UI after a configuration attempt. That observation must not be rewritten as proof that the disabled barcode types were still decoded.

The local analysis separates the unresolved device behavior from a documentation review item: the current DataWedge 13.0 `ENUMERATE_SCANNERS` prose and example describe different return actions, payload forms, and field types. Technical review is needed to determine the applicable contract and compatibility conditions. This discrepancy is not established as the cause of the reported configuration problem.

Next evidence: scanner identity and selected target, exact sample revision and request, correlated command result, saved configuration, and separate observed decoding behavior. No device changes or tests have been performed.

### Xamarin Android manifest structure

The archived question places `queries` inside `uses-permission`; the current Android reference places `queries` directly under `manifest`. Moving it alone can leave an unnamed permission wrapper. In the XML fixture, the structural candidate removes that empty wrapper. Applying a change to a real project would separately require preserving its other valid declarations; no complete project was modified or verified here.

Three explicitly labeled XML fixtures and 14 tests in each Python mode check the narrow structural issue. They do not compile Xamarin, merge a real manifest, or demonstrate scanner connectivity. The initial connection failure and the later build error remain distinct problems.

Next evidence: exact build-tool versions, `targetSdk`/`compileSdk`, a minimal project, the merged manifest, build logs, and an authorized device run. A comparable runnable baseline is necessary before claiming runtime improvement.

The analysis drafts require technical and language review before external delivery. An archived original question is a source, not a substitute link for an analysis report. After publication is verified, review emails should link directly to the current case-analysis files.

## How the evaluation will work

1. **Freeze a case.** Retain the original question, source URL, capture date, product and version facts, missing materials, and a content digest. Keep replies and later analyst answers out of the baseline input.
2. **Freeze the evidence.** Select official documentation with an explicit version and applicability record. Record whether a source is a complete capture, a rendered range, or a short excerpt. A hash checks byte consistency, not publisher identity or technical correctness.
3. **Run matched conditions.** Supply the same question and document bytes to each condition. Capture the exact visible prompt, output, date, mode or model identifier, tool settings, errors, and unknown parameters. Treat ChatGPT UI conditions and direct API conditions as distinct interfaces, each with potential confounders.
4. **Evaluate separately.** Use a rubric for source support, version applicability, uncertainty, useful clarification, and unsupported claims. Keep development examples separate from genuinely unseen evaluation cases. Use repeated trials and report failures before making aggregate claims.
5. **Review the case.** Separate documentation review, model-answer review, device validation, and client acceptance. A useful research finding can identify an unresolved question without claiming a fix.

### What the lab API needs to provide

Local DeepSeek inference access is one prerequisite. A usable comparison also needs an approved network route, request/response schema, exact checkpoint and serving-runtime information, context and output limits, rate/concurrency limits, and permitted data handling. Secret credentials must not be committed to either repository. No new API access or credential has been created as part of this documentation work.

The first controlled run should use public-source material whose use is approved. Restricted meeting transcripts or client material are not automatically eligible inputs.

## Tooling by stage

| Stage | Needed capability | Current state |
| --- | --- | --- |
| Source preparation | Existing HTML snapshots; bounded Python parsing; deduplication; missing-material queue | Offline processing implemented and checked locally; daily live coverage not verified. |
| Evidence preparation | Versioned official references; capture receipts; digest manifests; case-to-source metadata | Eight-case local crosswalk available with explicit scope limits. |
| Baseline observation | Authorized ChatGPT project; recorded mode and visible inputs/outputs | Limited exploratory TC21 observations exist; controlled comparison pending. |
| API comparison | Authorized lab endpoint; model/runtime identity; matched input adapter | DeepSeek **NOT_RUN**; access and configuration facts still needed. |
| Evaluation | Frozen rubric; held-out questions; reproducible scoring; reviewer evidence | Controlled quantitative evaluation pending. |
| Demonstration | Evidence-linked UI; separate current/historical results; exportable report | Existing published static example; newer implementation remains separate. |
| Review and delivery | Editable draw.io diagrams; current case reports; verified exact file links; language review | Language review and publication are checked independently of the research results. |

## Repository layout and maintenance

- `Zebra_Forum_Backup_2026-10-26/`: forum snapshot, provenance, resource queues, and coverage records. Snapshot date is not a freshness guarantee.
- `Zebra_TechDocs_Backup_2026-10-26/`: TechDocs snapshot and local coverage/resource inventories. Preserve the version and capture boundaries when reusing it.
- `faculty-checkin-2026-11-02/`: the earlier full structured report and static demo.
- `faculty-simple-2026-11-02/`: the earlier simplified example and meeting slides.

Use stable entry points for current progress, selected cases, dataset/evaluation manifests, and editable diagrams. Existing dated source records remain historical evidence; the current entry point should explain what supersedes them.

The companion draw.io file contains two editable pages: **Research pipeline** and **Repository and review flow**. They distinguish published snapshots, locally verified processing, exploratory observations, and pending work. The README links to these files within the same directory layout. Their companion SVGs are previews, not proof of a diagrams.net import/edit/save round trip.

## Review and release checks

- Verify each factual claim against its underlying record, not an older progress summary.
- Include the evidence needed for the new case analyses and count summaries; do not publish a newer headline without its supporting material.
- Keep customer transcripts, private correspondence, credentials, and restricted derivatives out of this public repository.
- Confirm every email hyperlink opens the intended analysis or progress file and is accessible to its recipient.
- Preserve exact commit references for evidence. Check current branch state before changing the project entry point.
- Record tests, language review, publication, hosted behavior, and acceptance separately. Use **NOT_RUN** when execution did not occur.

This is an unofficial educational research project. Public source availability does not, by itself, establish permission to redistribute or Zebra endorsement.

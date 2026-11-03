# DataWedge dataset v0.2

## Purpose and contents

This fixed set tests whether a retriever finds version-appropriate official evidence and whether a narrow answer baseline abstains when a forum report lacks enough facts. It contains 12 questions: 3 condensed questions from the team's archived Zebra Developer Portal pages and 9 document-derived or evidence-gap controls. The evidence corpus has 8 short, manually curated paraphrases from version-pinned Zebra TechDocs pages. The forum is a source of questions and reported behavior, never ground truth for product behavior.

## Files and annotation fields

- `cases.json`: `id`, `question`, `origin`, `expected` label, and `mustCite` passage IDs. Real forum cases also carry `forumReport` and a pinned `forumSnapshot` URL.
- `corpus.json`: passage ID, page title, DataWedge documentation version, URL, section, and paraphrased text.
- `run.mjs`: local BM25 top-3 retrieval, fixed answer rules, schema checks, and result generation.
- `results.json` and `results.md`: a reproducible run, per-case ranked passages, answer, citations and checks.

`supported` means the official passage supports the narrow proposition in the question. `contradicted` means the official passage says the opposite. `insufficient_evidence` means the cited documentation cannot establish the requested device-specific outcome or root cause. A `mustCite` passage can still be required for an insufficient-evidence case: it supplies the boundary of what is documented. An empty `mustCite` means there is no known decisive passage in this small corpus.

## Provenance and version checks

- [DataWedge 15.0 SET_CONFIG](https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/): main bundle, plugin array, CONFIG_MODE, result codes, full-profile boundary and device-specific scanner note.
- [DataWedge 6.6 SET_CONFIG](https://techdocs.zebra.com/datawedge/6-6/guide/api/setconfig/): explicit introduction of single-action multi-plugin support in 6.6; 6.5 and earlier require separate actions. This is the source for `DW-Q02` rather than a presumed version history on the 15.0 page.
- [DataWedge 15.0 Programmer's Guide](https://techdocs.zebra.com/datawedge/15-0/guide/programmers-guides/dw-programming/): SET_CONFIG use and installed-version check via Get Version Info.
- Forum snapshots: [`00476`](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/Zebra_Forum_Backup_2026-10-26/threads/00476.html), [`00129`](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/Zebra_Forum_Backup_2026-10-26/threads/00129.html), [`00383`](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/Zebra_Forum_Backup_2026-10-26/threads/00383.html).

The official pages were checked on 2026-11-02. The corpus stores paraphrases rather than copied pages and does not cover all TechDocs. `DW-FORUM-00129` includes a code-level hypothesis: the posted Kotlin appears to modify `baseConfig` while sending a different, empty bundle. That observation is not a verified device diagnosis. `DW-FORUM-00383` reports a SUCCESS code and failed scanning; the root cause is unknown.

## How to read the results

Retrieval passes when every `mustCite` ID is in the top three. Label match compares the baseline status with the annotated label. Neither measures answer wording or generalization. The answer rules contain question-specific patterns, so the 12/12 label match is a regression check for this small fixed set, **not** an estimate of model or system accuracy. The three forum cases are not a representative sample. No Zebra device was tested. A useful next evaluation needs more independently annotated forum questions, a larger official-document index, and a baseline that does not use case-specific rules.

The customer SPR scope spreadsheet is not included. Its listed DataWedge SPR IDs are excluded from positive ground truth; this dataset does not infer that any particular forum report is an accepted or excluded SPR.

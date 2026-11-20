# DataWedge official-document retrieval experiment

Run from this directory with Node.js 22+:

```powershell
node run.mjs
```

This is an independent addition beside the existing synthetic failure lab. It uses a small, manually checked evidence corpus from version-pinned Zebra TechDocs pages, ranks passages with BM25, and writes `results.json` and `results.md`. No API key or package install is needed. The question set is frozen in `cases.json`. See [DATASET.md](DATASET.md) for provenance, labels, and evaluation limits. The output is a retrieval-grounded, rule-based answer, not an LLM evaluation.

The program does not scrape TechDocs during a run. Evidence records contain concise paraphrases and source URLs, not a complete page mirror. The referenced official sections were checked on 2026-11-02. Verify linked sections before treating any result as a customer-facing conclusion. Three `DW-FORUM-*` cases are based on actual archived Zebra Developer Portal questions from the team's GitHub repository. Their phrasing is condensed, and reported malfunctions are not treated as official findings. Device behavior and reported failures require an installed-version check and device reproduction.

The SPR scope file was read from Cathy's October 26 email. Its 24 rows include DataWedge SPR-57765, SPR-54588, SPR-54412 and SPR-53230. They are excluded from positive ground truth. The file itself is not copied into this public-document experiment.

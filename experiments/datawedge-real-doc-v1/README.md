# DataWedge official-document retrieval experiment

Run from this directory with Node.js 22+:

```powershell
node run.mjs
```

This is an independent addition beside the existing synthetic failure lab. It uses a small, manually checked evidence corpus from version-pinned Zebra TechDocs pages, ranks passages with BM25, and writes `results.json` and `results.md`. No API key or package install is needed. The question set is frozen in `cases.json`. The output is a retrieval-grounded, rule-based answer, not an LLM evaluation.

The program does not scrape TechDocs during a run: outbound access was unavailable in this environment. Evidence records therefore contain concise paraphrases and source URLs, not a complete page mirror. Verify linked sections before treating any result as a customer-facing conclusion. `DW-FORUM-00476` is based on an actual archived Zebra Developer Portal question from the team's GitHub repository. Its phrasing is condensed, and the user's reported malfunction is not treated as an official finding. Device behavior and reported failures require an installed-version check and device reproduction.

The SPR scope file was read from Cathy's October 26 email. Its 24 rows include DataWedge SPR-57765, SPR-54588, SPR-54412 and SPR-53230. They are excluded from positive ground truth. The file itself is not copied into this public-document experiment.

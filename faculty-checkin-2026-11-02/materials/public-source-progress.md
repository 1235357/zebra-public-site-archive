# Public-source progress note — 2 November 2026

## Research goal
Trace real enterprise-mobile software questions to versioned official documentation, document what is supported and what remains unclear, and provide reviewable candidate improvements without inventing missing technical facts.

## Evidence and finding

The 6.8 finding below is separate from the 15.0 source in the static report.
DataWedge 6.8's [Soft Scan Trigger](https://techdocs.zebra.com/datawedge/6-8/guide/api/softscantrigger/) result-code prose names `RECEIVE_RESULT`, while its generic result example uses `SEND_RESULT`. Its [Intent Result Codes guide](https://techdocs.zebra.com/datawedge/6-8/guide/api/resultinfo/) has the same prose/example inconsistency. Suggestion for Zebra review: verify intended behavior for the applicable API and version, then align the prose and example. This is a documentation-consistency candidate, not a verified runtime defect or a confirmed fix. The case does not establish an installed version.

## Prototype and limits
The static `demo/` connects one public-question paraphrase, one versioned DataWedge source review and seven requirements into an exportable local report. One requirement has partial documentation evidence; six have not been reviewed in this report. This is not a real model run, independent accuracy score, browser/device compatibility check or customer/course acceptance.

A separate [online workbench](https://zebra-techdocs-practicum-git-dev-d2-externa-00ca74-spartina-dev.vercel.app/#research=WEB-DOCS-PILOT-01) displays two recorded observational conditions for a public paraphrase. Exact model version and complete tool isolation are unknown; results are not a controlled comparison.

Next: independently evaluate actual case/source applicability and remaining requirements, capture real model inputs/outputs and tool evidence when authorized, and request technical review of the parameter discrepancy. Do not characterize a search miss as proof of absence.

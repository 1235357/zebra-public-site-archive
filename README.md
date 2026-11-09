# Zebra software questions and documentation

Developers use Zebra devices to scan barcodes and run business applications. When something goes wrong, they often have to piece together forum discussions, documentation, and details about their device and software version. A plausible answer may still leave them unsure what to try next.

**Our goal is to turn real developer questions into clear, evidence-backed case analyses.** We want to show what the official documentation explains, what information is missing, and what needs an expert's judgment. We will then compare how different models answer the same question using the same documentation.

## Current review preview · November 9, 2026

[Open the browser-based case review preview](https://zebra-techdocs-practicum-git-dev-mobile-evi-2f8350-spartina-dev.vercel.app/mobile-evidence/).

This development preview presents two software-question analyses with official-source references, version boundaries, proposed documentation edits, and missing-evidence checklists:

- **TC26 Xamarin scanning:** review the scanner lifecycle and the information needed to distinguish initialization, event handling, and scan ownership. The proposed checklist is not a confirmed diagnosis or device fix.
- **DataWedge 8.1 MultiBarcode:** review the reported version against documented feature availability and device-family/licensing conditions. The proposed compatibility table does not establish a licensing failure or product defect.

Start with a case, inspect its evidence and limitations, then review the proposed documentation improvement. These are review candidates, not approved replacements for Zebra documentation. A complete original-page annotation and revised-page comparison remains a separate deliverable.

The preview page has been opened in a browser. Its exact deployed commit and a permanent project domain have not yet been independently confirmed. This branch-preview address is therefore **not a verified permanent project homepage**. The November 2 materials below remain historical examples.

**Still pending:** controlled model comparisons, independent unseen-case scoring, real-device validation, and client acceptance. Opening the review UI does not establish any of these results. Grammarly review of this November 9 update is **NOT_RUN**.

## Earlier work through November 5

Our first deliverable is a short case report showing the question, relevant official passages, missing information, and a specific request for Zebra review. We have prepared eight development cases and identified twelve official sources; some original materials and version details remain incomplete. Some cases still lack original text, images, or attachments, so the collection is not yet a complete benchmark.

Two recent local analyses show the kind of result we want to produce:

- **WT5400 barcode settings:** a developer reported that unwanted barcode types still appeared enabled in the settings screen. We separated that observation from actual scanning behavior and identified differences between an official API description and its example. This gives Zebra a specific documentation question to review; it does not establish the cause of the reported behavior.
- **Xamarin app configuration:** a developer's Android manifest put a declaration in the wrong place. Local XML checks support a limited structural correction. The original scanner connection problem still needs a real build and a device test.

We have also captured early model responses for one question. Those observations help refine the experiment, but they are not enough to rank the models. The November 9 preview above provides newer review candidates; the archived links below retain their original scope.

## Try the existing example

The November 2 demonstration follows a simple path: a developer asks whether a web app can control scanning, we check an official guide, and we show what is supported and what remains unanswered.

- **Open the example:** follow the [demo instructions](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/faculty-simple-2026-11-02/README.md) and use the [HTML entry file](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/faculty-simple-2026-11-02/demo/index.html) from the downloaded demo folder. It is a saved example, not live AI.
- **See the explanation:** the [four-slide PDF](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/faculty-simple-2026-11-02/materials/Forge_Touchbase_2026-11-02.pdf) introduces that earlier demonstration.
- **Read an earlier finding:** the [November 2 progress note](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/faculty-checkin-2026-11-02/materials/public-source-progress.md) describes a separate DataWedge documentation inconsistency for review.

These are dated, published materials. A GitHub HTML file displays source code; the instructions explain how to open the demo locally.

## What we will do next

1. Complete the selected cases and connect each claim to the relevant documentation, product version, and missing evidence.
2. Compare ChatGPT conditions and the lab's DeepSeek model using the same questions and documents. Record the actual answers and settings, then assess source support, useful clarification, and unsupported claims.
3. Put the resulting case reports into a simple review interface so the professor and Zebra reviewers can comment on specific findings.

The project follows **real question → official evidence → model response → reviewed case report**. See the [research workflow](diagrams/research-pipeline.preview.svg), the [repository and review flow](diagrams/repo-review.preview.svg), or the [editable draw.io source](diagrams/zebra-research-architecture.drawio). Controlled model comparison and device validation remain work to be completed.

## Where the professor can help

- Confirm whether these cases and the proposed review criteria address the right questions for the project.
- Help us obtain authorized access to the lab's DeepSeek endpoint, its exact model/version, a request example, usage limits, and the permitted data scope. API access enables testing; these details make the comparison interpretable.
- Identify who can review the documentation questions and what evidence would make the case reports useful to Zebra.

## For a closer look

The [technical status](TECHNICAL_STATUS.md) gives detailed counts, methods, and remaining checks.

The [structured report behind the earlier example](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/faculty-checkin-2026-11-02/demo/report.json) preserves its requirements and open questions. The [archive scope](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/Zebra_Forum_Backup_2026-10-26/README.txt) and [coverage record](https://github.com/1235357/zebra-public-site-archive/blob/5a825ae81fc931334401c4de1b3c67217d64e0d2/Zebra_Forum_Backup_2026-10-26/BACKUP_COVERAGE.json) explain what the forum snapshot includes and misses.

This public repository holds research materials; application development is kept separately in the private `zebra-techdocs-practicum` repository. The November 9 preview is listed separately from local work recorded through November 5 and the archived November 2 demonstration and slides. No confirmed device fix, complete forum coverage, or client acceptance is claimed.

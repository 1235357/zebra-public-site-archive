# Zebra software questions and documentation

Developers use Zebra devices to scan barcodes and run business applications. When something goes wrong, they often have to piece together forum discussions, documentation, and details about their device and software version. A plausible answer may still leave them unsure what to try next.

**Our goal is to turn real developer questions into clear, evidence-backed case analyses.** We want to show what the official documentation explains, what information is missing, and what needs an expert's judgment. We will then compare how different models answer the same question using the same documentation.

## Project website · November 13, 2026

[Open the project website](https://zebra-techdocs-practicum.vercel.app/).

The website opens directly to a case table, without a sidebar. 7 public cases · 7 complete articles, no excerpt links · Proposals, not approved fixes. No internal customer tickets. This selected subset is not the complete collected dataset or a complete TechDocs mirror.

[EHS 2.8 revision proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/ehs28-revised.html#linkremoval): official EHS 2.8 settings article retrieved on 13 November 2026. This is not the October archive. Only E1 is added; original code examples are unchanged. The reported device version remains unverified. The existing link-removal subsection already identifies the configuration entry and redeployment step.

[SET_CONFIG 13.0 revision proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/sc13-revised.html#plugin_configbundle): official DataWedge 13.0 SET_CONFIG article retrieved on 13 November 2026. This is not the truncated October latest archive. Only S1 is added; original code examples are unchanged. The reported device version remains unverified. The reference already defines both settings. This addition brings their combined effect into one nearby explanation.

The revised pages show deletions, replacements, and additions in place, with numbered explanations and source links. Import I3 proposes a result-mode replacement while preserving the import-specific receiver. Notify N4 adds two result-request extras and explains the remaining receiver requirement. OEMinfo O1 separates service configuration from actual query outcomes. These changes are documentation proposals, not verified device repairs.

[Download CSV](https://zebra-techdocs-practicum.vercel.app/document-reader/zebra-cases.csv) or [download XLSX](https://zebra-techdocs-practicum.vercel.app/document-reader/zebra-cases.xlsx). Both exports were downloaded through the live website and matched the reviewed files exactly. Each contains seven case rows and 19 columns; the workbook contains 28 hyperlinks.

The [independent methods report](https://zebra-techdocs-practicum.vercel.app/document-reader/methods.html), currently in Chinese, separates completed source review and software checks from unperformed model, device, and reader comparisons. It is not a model ranking or proof of customer acceptance. The older two-case report remains historical evidence, not the overall methods report.

The November 13 release passed 562 Python tests, with 10 existing skips, and 115 frontend tests. Independent review and Grammarly review of the new English prose were completed. The live table, Import replacement, Notify additions, OEMinfo illustrations, methods link, and downloads were checked. No internal customer tickets were published. Controlled model comparison, device validation, reader evaluation, and cross-framework integration remain unfinished.

## Earlier work through November 5

Our first deliverable is a short case report showing the question, relevant official passages, missing information, and a specific request for Zebra review. We have prepared eight development cases and identified twelve official sources; some original materials and version details remain incomplete. Some cases still lack original text, images, or attachments, so the collection is not yet a complete benchmark.

Two recent local analyses show the kind of result we want to produce:

- **WT5400 barcode settings:** a developer reported that unwanted barcode types still appeared enabled in the settings screen. We separated that observation from actual scanning behavior and identified differences between an official API description and its example. This gives Zebra a specific documentation question to review; it does not establish the cause of the reported behavior.
- **Xamarin app configuration:** a developer's Android manifest put a declaration in the wrong place. Local XML checks support a limited structural correction. The original scanner connection problem still needs a real build and a device test.

We have also captured early model responses for one question. Those observations help refine the experiment, but they are not enough to rank the models. The newer case-analysis drafts are being prepared for review and are not yet published at the links below.

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

This public repository holds research materials; application development is kept separately in the private `zebra-techdocs-practicum` repository. The progress above includes local work through November 5, while the linked demonstration and slides are from November 2. No confirmed device fix, complete forum coverage, or client acceptance is claimed.

# Zebra software questions and documentation

Developers use Zebra devices to scan barcodes and run business applications. When something goes wrong, they often have to piece together forum discussions, documentation, and details about their device and software version. A plausible answer may still leave them unsure what to try next.

**Our goal is to turn real developer questions into clear, evidence-backed case analyses.** We want to show what the official documentation explains, what information is missing, and what needs an expert's judgment. We will then compare how different models answer the same question using the same documentation.

## Project website · November 19, 2026

[Open the project website](https://zebra-techdocs-practicum.vercel.app/).

The English-only project homepage opens directly to a six-column case table modeled on the SPR worksheet, without a sidebar. Eighteen published cases link directly to documentation revision previews. These proposals are for client review, not approved fixes. No internal customer tickets are displayed. This selected subset is not the complete collected dataset or a complete TechDocs mirror.

[EMDK Setup 9.0 revision proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/emdk-setup9/index.html#package-version): adds guidance distinguishing the product release, Visual Studio extension, and NuGet package version. It does not assert compatibility or availability from other feeds.

[EMDK for Android 11.0 Basic Scanning revision proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/emdk-scanning11/index.html#barcode-lifecycle-reference): adds a link beside the tutorial-only warning to the same-version scanner lifecycle guidance. The preview preserves all 22 captured code elements and three original screenshots. It does not establish why the reported device restarted.

[StageNow 5.4 File Manager proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/stagenow-filemgr54/index.html#target-uri): corrects the upload input rule to say remote destination URI, not source-file URI. File naming interaction and installed-device behavior remain unverified.

[DataWedge 15.0 RFID Input proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/datawedge-rfid15/index.html#rfid-rssi-reporting): explains that the numeric RSSI post-filter and the Tag Reporting switch describe different settings. It does not infer a new API parameter or a device-level limitation.

[DataWedge 15.0 Intent Output proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/datawedge-intent15/index.html#broadcast-receiver-scope): cross-references Android's runtime receiver policy where relevant, while retaining the original foreground-delay and package/signature guidance. It does not diagnose the reported application failure.

[DataWedge 13.0 Keystroke Output proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/datawedge-keystroke13/index.html#startup-input-readiness): distinguishes the active profile and app text-input readiness from delay settings before diagnosing startup behavior. The updated Methods report shows the six evidence-input replays separately from model or device verification.

[EMDK for Xamarin 7.0 NFC SAM proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/emdk-xamarin-sam7/index.html#sam-version-note): clarifies the difference between the documentation edition, sample package declaration, and installed device runtime, without attributing the reported exception to a particular cause.

[StageNow 5.11 Wi-Fi Manager proxy proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/stagenow-wifi511/index.html#proxy-scope-verification): distinguishes a per-network proxy, a global proxy, and removing a saved network. No device outcome or supported proxy-only change to the reported network was verified.

[Enterprise Browser 3.0 Intent callback proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/eb-intent30/index.html#datawedge-callback-example): puts the existing DataWedge receiving sample beside the callback description, distinguishing listener return, callback execution, and payload handling without assigning a cause to the reported failure.

[DataWedge 15.0 Soft Scan Trigger revision proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/soft-scan-trigger15/index.html#resultcodes): repairs the link from Result Codes to the result-handling example. It leaves the API, warnings, and code samples unchanged and does not diagnose the related forum symptom.

[OEMinfo Caller Signature revision proposal](https://zebra-techdocs-practicum.vercel.app/#doc=oeminfo-tc-review&section=caller-signature-not-device-serial): distinguishes the app certificate used for authorization from the device serial query. The full article offers marked, clean, and original views. The reported TC20 value and runtime remain unverified.

[EHS 2.8 revision proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/ehs28-revised.html#linkremoval): official EHS 2.8 settings article retrieved on 13 November 2026. This is not the October archive. Only E1 is added; original code examples are unchanged. The reported device version remains unverified. The existing link-removal subsection already identifies the configuration entry and redeployment step.

[SET_CONFIG 13.0 revision proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/sc13-revised.html#plugin_configbundle): official DataWedge 13.0 SET_CONFIG article retrieved on 13 November 2026. This is not the truncated October latest archive. Only S1 is added; original code examples are unchanged. The reported device version remains unverified. The reference already defines both settings. This addition brings their combined effect into one nearby explanation.

The revised pages show deletions, replacements, and additions in place, with numbered explanations and source links. Import I3 proposes a result-mode replacement while preserving the import-specific receiver. Notify N4 adds two result-request extras and explains the remaining receiver requirement. OEMinfo O1 separates service configuration from actual query outcomes. These changes are documentation proposals, not verified device repairs.

[Download CSV](https://zebra-techdocs-practicum.vercel.app/document-reader/zebra-cases.csv) or [download XLSX](https://zebra-techdocs-practicum.vercel.app/document-reader/zebra-cases.xlsx). Both exports were downloaded through the live website and matched the reviewed files exactly. Each contains fifteen case rows and 19 columns; the workbook contains 60 hyperlinks and no formula cells.

The [independent methods report](https://zebra-techdocs-practicum.vercel.app/document-reader/methods.html), now in English, separates completed source review and software checks from unperformed model, device, and reader comparisons. It is not a model ranking or proof of customer acceptance. The older two-case report remains historical evidence, not the overall methods report.

In the November 19 release, 567 Python tests passed and 10 were skipped; 155 JavaScript tests passed. Independent review and production browser verification covered both new article anchors, the repaired example jump, the EMDK article images, and both table downloads. The new article previews preserve the documentation body within a review layout, not the entire original site shell.

The previous November 13 release passed 562 Python tests, with 10 existing skips, and 115 frontend tests. Independent review and Grammarly review of the new English prose were completed. The live table, Import replacement, Notify additions, OEMinfo illustrations, methods link, and downloads were checked. No internal customer tickets were published. Controlled model comparison, device validation, reader evaluation, and cross-framework integration remain unfinished.

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

[DataWedge 15.0 scanner status FAQ proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/dw15-faq/index.html#scanner-status-vs-decode-outcome): distinguishes scanner readiness from per-scan decode outcomes and links the version-matched Intent Output reference.

[DataWedge 11.3 Intent Result Codes proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/dw11-result/index.html#command-status-and-result-details): distinguishes command result status, optional details, and scan output beside the existing example.

[DataWedge 14.0 RFID Input proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/dw14-rfid/index.html#read-bank-vs-prefilter-bank): distinguishes the memory bank read from the one used to match a pre-filter pattern.

[EMDK for Android 11.0 RS6100 proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/emdk11-rs6100/index.html#rs6100-device-enumeration): links the supported scanner list to the documented enumeration overload without inventing a named identifier.

[DataWedge 11.2 Workflow Input proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/dw112-workflow/index.html#image-capture-versus-free-form-ocr): distinguishes image capture from the Free-Form OCR feature introduced in 11.4.

[DataWedge 8.1 MultiBarcode licensing proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/dw81-licensing/index.html#license-and-build-specific-menu): separates the Professional-series license requirement from the configuration menu and the 8.1.45 label change.

[EMDK for Android 7.4 EC30 SmartCradle proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/emdk74-cradle/index.html#callback-power-and-removal): separates command callback status and Android external-power events from physical removal without claiming a supported device-removal event.

[DataWedge 8.2 RFID Input proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/dw82-rfid/index.html#configuration-versus-rfid-output): gives separate checks for device/reader, effective profile and RFID intent delivery. The production table has 26 proposed revisions pending Zebra review, with matching CSV and XLSX downloads.

Latest review snapshot (r28, 2026-11-19): the [English case table](https://zebra-techdocs-practicum.vercel.app/) still contains 26 proposed revisions. A targeted image-privacy correction was applied to the [Enterprise Home Screen 2.8 review](https://zebra-techdocs-practicum.vercel.app/document-reader/ehs28-revised.html#linkremoval) and a legacy mirror asset. Use the r28 offline review package in place of r27. The production table and both downloads were verified against the same release. No device behavior or customer approval is asserted.

Latest customer review snapshot (r29, 2026-11-19): [27 proposed revisions](https://zebra-techdocs-practicum.vercel.app/). The new [OEMConfig 13.5 Power Configuration proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/oemconfig135-power/index.html#payload-value-type) clarifies the string type for the Mode choice and separates stored restrictions from processing evidence. The captured scope is the complete Power Configuration section, not the full schema. The English table, CSV and XLSX were checked against the same release. Use the latest r29 offline review package; prior media privacy corrections remain in effect. Neither device reproduction nor customer acceptance is asserted.

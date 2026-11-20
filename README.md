# Zebra software questions and documentation

Developers use Zebra devices to scan barcodes and run business applications. When something goes wrong, they often have to piece together forum discussions, documentation, and details about their device and software version. A plausible answer may still leave them unsure what to try next.

**Our goal is to turn real developer questions into clear, evidence-backed case analyses.** We want to show what the official documentation explains, what information is missing, and what needs an expert's judgment. We will then compare how different models answer the same question using the same documentation.

## Project website · November 19, 2026

[Open the project website](https://zebra-techdocs-practicum.vercel.app/).

[Compare the four evidence-discovery approaches](https://zebra-techdocs-practicum.vercel.app/document-reader/methods.html#two-case-source-discovery). This methods appendix uses two known development cases, not a blind model or device evaluation.

[Three-case evidence-routing replay](https://zebra-techdocs-practicum.vercel.app/document-reader/methods.html#version-filter-route-replay) (r57 report update). The report compares version filtering and first-neighbor substitution on preselected document editions. This methods update did not change case rows or downloads.

Current case-data release (r61, November 20, 2026 UTC): 56 English review cases. [DataWedge 6.2: Intent Output](https://zebra-techdocs-practicum.vercel.app/document-reader/dw62-intent-receiver/index.html#receiving-app-intent-filter) corrects which app declares the intent filter and separates a test broadcast from scan delivery. The original XML, illustration, and receiver foreground flag explanation remain. The edit does not identify the cause of the reported device behavior.

Previous case-data release (r60, November 19, 2026): 55 English review cases. [Enterprise Browser 5.6: Access from web pages](https://zebra-techdocs-practicum.vercel.app/document-reader/eb56-api-runtime/index.html#eb-runtime-boundary) distinguishes hosting the JavaScript module from providing the native Enterprise Browser runtime. It preserves the original examples and links to the same-edition compatibility matrix without proposing a detector or claiming camera support in a different browser.

Previous case-data release (r59, November 19, 2026): 54 English review cases. [MX FileMgr: File Action](https://zebra-techdocs-practicum.vercel.app/document-reader/mx154-filemgr/index.html#sftp-workflow-edition) keeps the existing SFTP warning and adds a note separating SourceURI and SourceURI2, the MX 15.4 protocol requirement, and the unresolved scope of the larger-than-2-GB workflow. It does not prescribe a protocol switch or diagnose a device.

Previous case-data release (r58, November 19, 2026): 53 English review cases. [DataWedge 11.3 Profiles](https://zebra-techdocs-practicum.vercel.app/document-reader/dw113-launcher/index.html#launcher-active-profile) adds a check inside the Launcher entry: verify the foreground activity, read the active Profile, and inspect its output settings. The four profile entries, the original diagram, and the configuration table remain intact. This does not diagnose the reporter's device or recommend a reset.

Previous case-data release (r56, November 19, 2026): 52 English review cases. [StageNow 5.8 Troubleshooting](https://zebra-techdocs-practicum.vercel.app/document-reader/stagenow58-dsd/index.html#dsd-xpert-step) adds an Xpert Mode DSD diagnostic entry before the separate plug-in deletion section. It preserves the adjacent source and masks the example address. It does not recommend a repair or infer a cause.

Previous release (r55, November 19, 2026): 51 English review cases. [Enterprise Browser 3.3 Feature Demo](https://zebra-techdocs-practicum.vercel.app/document-reader/eb33-featuredemo/index.html#enable-versus-start) distinguishes Enable in step 4 from the soft trigger in step 5. It preserves the test barcode and points to the official example for the unbundled result illustration. It does not diagnose the reported CC600 behavior.

Previous release (r54, November 19, 2026): 50 English review cases. [DataWedge 8.2 Intent Output](https://zebra-techdocs-practicum.vercel.app/document-reader/dw82-gs1-intent/index.html#gs1-datamatrix-label-type) adds the version-matched GS1 DataMatrix decoder condition beside the label_type field. The original section and examples remain intact. The edit does not infer Code 128, FNC1 byte behavior, or the reporter's device settings.

Previous release (r53, November 19, 2026): 49 English review cases. [Enterprise Home Screen 8.0](https://zebra-techdocs-practicum.vercel.app/document-reader/ehs8-settings/index.html#admin-mode-settings-scope) distinguishes Admin Mode, panel restrictions and app availability without recommending a policy change. The static section excerpt preserves the policy values and original diagram; omitted examples are disclosed.

Previous release (r52, November 19, 2026): 48 English review cases. [Enterprise Browser Battery API](https://zebra-techdocs-practicum.vercel.app/document-reader/eb34-battery/index.html#smart-battery-status-example) distinguishes the existing batteryStatus icon example from smartBatteryStatus and asks Zebra to confirm the invocation forms. The original article, three code blocks and four diagrams remain available; no device behavior or invocation was validated.

Previous release (r51, November 19, 2026): 47 English review cases. [EMDK for Android 11.0 Basic Scanning, Step 2](https://zebra-techdocs-practicum.vercel.app/document-reader/emdk-scanning11/index.html#debug-vs-release-scanner-startup) distinguishes initialization and trigger checks across debug and packaged builds, and points to the documented manifest declarations without assigning a cause.

Previous release (r50, November 19, 2026): 46 English review cases. [StageNow 5.6 Smart Profiles, Section II step 3](https://zebra-techdocs-practicum.vercel.app/document-reader/stagenow56-smartprofiles/index.html#smart-profile-plus-error) adds a Zebra support link next to the Plus control used to create a Smart Profile. It does not diagnose the reported workstation. Seven screenshots have masks and two staging-barcode illustrations were not republished.

Previous release (r49, November 19, 2026): 45 English review cases. [EMDK for Android 7.0 SDK dependency](https://zebra-techdocs-practicum.vercel.app/document-reader/emdk70-dependency/index.html#check-sdk-dependency-repository) cross-references later repository-migration guidance beside the unchanged dependency declaration and original screenshots. It does not promise that an older EMDK binary is available from another repository or diagnose the reported build failure.

Previous release (r48, November 19, 2026): 44 English review cases. [DataWedge 15.0 Get Profiles List](https://zebra-techdocs-practicum.vercel.app/document-reader/dw15-profiles-list/index.html#profiles-list-result-receiver) moves the same-edition receiver registration reference next to the example, distinguishes the query result from barcode Intent Output, and preserves both original code blocks. It does not diagnose the reported Ionic bridge behavior.

Previous release (r47, November 19, 2026): 43 English review cases. [DataWedge 13.0 scanner decoder readback](https://zebra-techdocs-practicum.vercel.app/document-reader/sc13-revised.html#verify-decoder-settings) adds a version-matched configuration verification step alongside the existing scanner support warning. It does not diagnose or resolve the reported WT5400 behavior.

Previous release (r46, November 19, 2026): 42 English review cases. [DataWedge 13.0 SET_CONFIG](https://zebra-techdocs-practicum.vercel.app/document-reader/sc13-revised.html#set-config-multiple-plugin-bundles) explains that multiple plug-in Bundles are placed in one list under one PLUGIN_CONFIG key, preserving the original examples and earlier revision. [RFID Xamarin 2.0.2.82](https://zebra-techdocs-practicum.vercel.app/document-reader/rfid-xamarin-trigger/index.html#trigger-mode-not-data-delivery) distinguishes trigger mode from app-side barcode delivery. Neither report is diagnosed, and installed releases remain unverified.

Previous release (r45, November 19, 2026): 40 English cases. [EMDK for Xamarin 7.0 scanner tutorial](https://zebra-techdocs-practicum.vercel.app/document-reader/xamarin70-scanner/index.html#scanner-enable-readiness) clarifies successful enablement and idle/no-pending-read conditions beside unchanged examples. The archive report is not diagnosed. The [separate methods report](https://zebra-techdocs-practicum.vercel.app/document-reader/methods.html#ehs-cross-reference-replay) now includes the EHS two-passage development replay, not a measured model/device comparison.

Previous release (r44, November 19, 2026): 39 English cases. [Enterprise Home Screen 4.0 Wireless Information](https://zebra-techdocs-practicum.vercel.app/document-reader/ehs40-wireless/index.html#wireless-info-not-wifi-settings) distinguishes display of connection details from access to Android Wi-Fi Settings. Original, marked and clean static previews preserve the full About article; device behavior is not asserted.

Previous review snapshot (r43, November 19, 2026): the English case table and both downloads contained 38 review cases. [Enterprise Browser 1.7 ButtonBar1](https://zebra-techdocs-practicum.vercel.app/document-reader/eb17-buttonbar/index.html#buttonbar1-javascript-case) corrects the JavaScript template spelling while preserving the uppercase HTML META identifier and the complete static article body. This is not a device reproduction or verified fix.

Previous review snapshot (r42, November 19, 2026): [StageNow 5.22 status-query example](https://zebra-techdocs-practicum.vercel.app/document-reader/stagenow522-nav/index.html#navigation-bar-query-output-review) now flags a discrepancy between the documented input and output while preserving both code samples and the Android 11+ query limitation. This is an evidence gap beside the earlier [Enable Navigation Bar correction](https://zebra-techdocs-practicum.vercel.app/document-reader/stagenow522-nav/index.html#navigation-bar-example-parameter), not a separate case or a verified device fix. At r42 the 37-row table and downloads were unchanged.

The English-only project homepage opens directly to a six-column case table modeled on the SPR worksheet, without a sidebar. Forty-five published cases link directly to documentation revision previews. These proposals are for client review, not approved fixes. No internal customer tickets are displayed. This selected subset is not the complete collected dataset or a complete TechDocs mirror.

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

[SET_CONFIG 13.0 revision proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/sc13-revised.html#plugin_configbundle): official DataWedge 13.0 SET_CONFIG article retrieved on 13 November 2026. This is not the truncated October latest archive. The earlier S1 anchor remains; later case-specific additions appear separately and original code examples are unchanged. The reported device version remains unverified. The reference already defines both settings. This addition brings their combined effect into one nearby explanation.

The revised pages show deletions, replacements, and additions in place, with numbered explanations and source links. Import I3 proposes a result-mode replacement while preserving the import-specific receiver. Notify N4 adds two result-request extras and explains the remaining receiver requirement. OEMinfo O1 separates service configuration from actual query outcomes. These changes are documentation proposals, not verified device repairs.

[EMDK for Xamarin 8.0 UI Manager proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/xamarin80-uimgr/index.html#device-policy-vs-field-focus): distinguishes the device setting for an active physical keyboard from soft keyboard behavior on individual Android fields and from dismissing an already visible keyboard. The original option table is unchanged. No .NET MAUI or device behavior is claimed as verified.

[Enterprise Browser 1.6 Printer App proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/eb16-printer/index.html#select-printer-in-app): separates address-filtered discovery, Enterprise Browser printer ID lookup and successful connection. It explains when an app selection prompt can be avoided without promising unattended Android pairing.

[OEMinfo touch-mode snapshot proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/oeminfo-properties/index.html#touch-mode-snapshot) and [SIM EID field proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/oeminfo-properties/index.html#sim-eid-provider-fields) have different case IDs and share one static article. The first distinguishes published values from live readback; the second points to EID fields already documented, without promising an endpoint or slot for an unverified installation. The release masks a visible local example path and omits embedded illustration metadata.

[Enterprise Browser 5.6 RhoFile proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/eb56-rhofile/index.html#android-scoped-storage-paths) distinguishes a legacy shared path from the two paths listed for Enterprise Browser JavaScript file I/O. It addresses one storage workstream in a seven-part discussion. Chrome support, device behavior, and arbitrary cross-app access are not asserted.

The same case now includes a [DataWedge 15.0 Switch to Profile proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/dw15-switch-profile/index.html#association-vs-temporary-activation) and a [seven-question evidence index](https://zebra-techdocs-practicum.vercel.app/document-reader/eb56-rhofile/provenance.html#workstreams). Static association, temporary activation and input-mode switching are separate. The seven questions map to one stable record; missing hardware, browser and version evidence remains explicit.

The [StageNow 5.22 navigation example revision](https://zebra-techdocs-practicum.vercel.app/document-reader/stagenow522-nav/index.html#navigation-bar-example-parameter) changes one XML parameter name in the same umbrella case. The Android 13 activity-restart warning and the Android 11+ MX query limitation are preserved; device recovery and viewport behavior were not tested.

[Download CSV](https://zebra-techdocs-practicum.vercel.app/document-reader/zebra-cases.csv) or [download XLSX](https://zebra-techdocs-practicum.vercel.app/document-reader/zebra-cases.xlsx). Both exports were downloaded through the live website and matched the reviewed files exactly. In r61, each contains 56 case rows and 19 columns; the workbook contains 224 hyperlinks and no formula cells.

The [five-case methods comparison](https://zebra-techdocs-practicum.vercel.app/document-reader/methods.html#five-case-evidence) reports fixed-budget evidence retrieval against a manually labeled reference; those results are not model or device accuracy. The [independent methods report](https://zebra-techdocs-practicum.vercel.app/document-reader/methods.html), now in English, separates completed source review and software checks from unperformed model, device, and reader comparisons. It is not a model ranking or proof of customer acceptance. The older two-case report remains historical evidence, not the overall methods report.

In the November 19 release, 567 Python tests passed and 10 were skipped; 155 JavaScript tests passed. Independent review and production browser verification covered both new article anchors, the repaired example jump, the EMDK article images, and both table downloads. The new article previews preserve the documentation body within a review layout, not the entire original site shell.

The previous November 13 release passed 562 Python tests, with 10 existing skips, and 115 frontend tests. Independent review and Grammarly review of the new English prose were completed. The live table, Import replacement, Notify additions, OEMinfo illustrations, methods link, and downloads were checked. No internal customer tickets were published. Controlled model comparison, device validation, reader evaluation, and cross-framework integration remain unfinished.

The r35 release passed 604 Python tests (10 skipped) and 156 JavaScript tests; independently checked all manifest files, the new review anchor, and the matching live CSV and XLSX. The new static review mirrors the full article body, not its SmartDocs behavior or shell.

The r36 release passed 606 Python tests (10 skipped) and 156 JavaScript tests. Independent review checked all 611 pinned files and both source illustrations. Illustration pixels are unchanged; ancillary metadata is omitted. Browser downloads were re-parsed and matched the release data.

The r37 two-case batch passed 608 Python tests (10 skipped) and 156 JavaScript tests; independent checks verified all 617 pinned files, both anchors, legacy routes and sanitized image replacements.

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

Historical customer review snapshot (r29, 2026-11-19): [27 proposed revisions](https://zebra-techdocs-practicum.vercel.app/). The new [OEMConfig 13.5 Power Configuration proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/oemconfig135-power/index.html#payload-value-type) clarifies the string type for the Mode choice and separates stored restrictions from processing evidence. The captured scope is the complete Power Configuration section, not the full schema. The English table, CSV and XLSX were checked against the same release. Use the latest r29 offline review package; prior media privacy corrections remain in effect. Neither device reproduction nor customer acceptance is asserted.

Previous review snapshot (r30, 2026-11-19): [28 proposed revisions](https://zebra-techdocs-practicum.vercel.app/). The new [EMDK 7.3 Barcode sample proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/emdk73-barcode/index.html#arming-before-trigger) distinguishes choosing the hardware trigger mode from submitting an asynchronous read. The archived article body, SSI prerequisite, warning and screenshot placements are preserved; one example barcode value is masked. Both online exports match this release. Use the latest offline review package. Device behavior and customer acceptance remain unverified.

Previous review snapshot (r31, 2026-11-19): [29 proposed revisions](https://zebra-techdocs-practicum.vercel.app/). The [archived StageNow 3.2 UI Manager proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/stagenow32-lki/index.html#lki-version-scope) removes misleading cross-device wording and points to the 3.3 (MX 9.0) release history while keeping the MC93-only requirement. Original, marked, and clean views retain all 28 article tables. This does not establish how the reported MC2200 indicator can be configured. The live CSV and XLSX match the new review version.

Previous review snapshot (r32, 2026-11-19): [30 proposed revisions or review cases](https://zebra-techdocs-practicum.vercel.app/). The [StageNow 3.2 Virtual Keyboard Show/Hide proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/stagenow32-lki/index.html#keyboard-visibility-vs-picker) corrects two option descriptions mistakenly referring to the notification panel's Gear icon. Linked to a separate public question, it uses the existing UI Manager mirror and retains the original view and the earlier LKI anchor. It does not assert that the keyboard-picker icon can be hidden on the reported device. Both public exports match r32.

Previous review snapshot (r33, 2026-11-19): [31 proposed documentation revisions](https://zebra-techdocs-practicum.vercel.app/). The [DataWedge 7.3 Scanner Input Plug-in proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/dw73-suspend/index.html#suspend-result-vs-status) adds guidance for comparing a suspend command result to the active profile's separate scanner-state notification. It preserves all six code blocks and does not diagnose the reported TC21 or promise a time to transition. Both exports match r33.

Latest review snapshot (r34, 2026-11-19): [32 proposed documentation revisions](https://zebra-techdocs-practicum.vercel.app/). The [EMDK 13.0 Basic Scanning tutorial proposal](https://zebra-techdocs-practicum.vercel.app/document-reader/emdk13-et51ce/index.html#terminal-model-build-runtime) adds a device, Android build, and EMDK runtime check and replaces a stale 6.10 link with the same-edition programming guide. It preserves 22 code blocks and reuses three verified screenshots. It does not establish the reporter's specific compatibility or device failure. Both online exports match r34.

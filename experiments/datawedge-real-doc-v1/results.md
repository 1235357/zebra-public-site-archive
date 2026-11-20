# DataWedge retrieval experiment

Run: 2026-11-03T00:36:48.384Z

Corpus: 8 curated official-document passages; full-page ingestion and hardware tests pending.

Fixed cases: 12 (3 real forum case); gold passage in top 3: 11/11; label match: 12/12; abstentions: 5. These are small-set checks, not general accuracy.

## DW-Q01: Can SET_CONFIG configure BARCODE input and INTENT output plugins in one intent on DataWedge 15.0?
Expected: supported; retrieved: DW15-PG-1 (7.437), DW15-SET-1 (5.942), DW15-SET-3 (3.015)
Answer: Yes. DataWedge 15.0 documents multiple PLUGIN_CONFIG bundles in one SET_CONFIG intent; BARCODE and INTENT are documented plugin names. This establishes API support, not success on an untested device.
Status: supported
Sources: DW15-SET-1 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (SET_CONFIG / main bundle and PLUGIN_CONFIG BUNDLE)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q02: Can DataWedge 6.5 configure multiple plugins with one SET_CONFIG intent?
Expected: contradicted; retrieved: DW15-PG-1 (5.999), DW66-SET-1 (4.625), DW15-SET-3 (4.582)
Answer: No. The DataWedge 6.6 guide says multi-plugin configuration in one SET_CONFIG action began in 6.6; 6.5 and below require separate actions.
Status: contradicted
Sources: DW66-SET-1 DataWedge 6.6 https://techdocs.zebra.com/datawedge/6-6/guide/api/setconfig/ (SET_CONFIG introduction and PLUGIN_CONFIG notes)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q03: Does a single SET_CONFIG intent configure a full profile including APP_LIST on DataWedge 7.1?
Expected: supported; retrieved: DW15-SET-3 (13.826), DW15-PG-1 (4.939), DW15-SET-1 (3.952)
Answer: Yes, for the documented full-profile multi-module configuration. The official guide dates this support, including APP_LIST, to DataWedge 7.1.
Status: supported
Sources: DW15-SET-3 DataWedge 15.0 documentation, historical feature boundary https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (Set configuration for multiple modules (full profile) in a single intent)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q04: Why did SET_CONFIG fail on my TC device after an Android upgrade?
Expected: insufficient_evidence; retrieved: DW15-SET-6 (2.84), DW15-PG-2 (1.478), DW66-SET-1 (1.063)
Answer: Official excerpts do not establish the cause. Record the installed DataWedge version, device/Android version, profile, intent payload and result code; reproduce before concluding.
Status: insufficient_evidence
Sources: None
Retrieval: not_applicable; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-FORUM-00476: DataWedge SET_CONFIG is broken: why were multiple PLUGIN_CONFIG bundles ignored when sent in one intent, and was the documentation wrong?
Expected: insufficient_evidence; retrieved: DW66-SET-1 (6.64), DW15-SET-1 (6.289), DW15-SET-3 (3.358)
Answer: The official DataWedge 15.0 documentation describes multiple PLUGIN_CONFIG bundles in one SET_CONFIG intent. That establishes documented API support, but does not identify why this poster's request was ignored or prove a documentation error. The installed DataWedge version, complete payload/result handling and device reproduction need review.
Status: insufficient_evidence
Sources: DW15-SET-1 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (SET_CONFIG / main bundle and PLUGIN_CONFIG BUNDLE)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q05: On DataWedge 15.0, does SET_CONFIG OVERWRITE preserve unspecified settings in an existing profile?
Expected: contradicted; retrieved: DW15-SET-4 (5.74), DW15-SET-6 (2.476), DW15-SET-3 (2.422)
Answer: No. On DataWedge 15.0, OVERWRITE resets all existing profile options to defaults before applying the supplied settings.
Status: contradicted
Sources: DW15-SET-4 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (MAIN BUNDLE / CONFIG_MODE)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q06: Does SET_CONFIG UPDATE require the named profile to already exist on DataWedge 15.0?
Expected: supported; retrieved: DW15-SET-4 (5.325), DW66-SET-1 (3.947), DW15-SET-5 (3.381)
Answer: Yes. DataWedge 15.0 requires the named profile to exist for CONFIG_MODE UPDATE.
Status: supported
Sources: DW15-SET-4 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (MAIN BUNDLE / CONFIG_MODE)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q07: On DataWedge 15.0, can SET_CONFIG report PARAMETER_INVALID for an invalid parameter, and what extras request a result?
Expected: supported; retrieved: DW15-SET-5 (9.24), DW66-SET-1 (2.153), DW15-SET-6 (1.958)
Answer: Yes. The DataWedge 15.0 SET_CONFIG guide lists PARAMETER_INVALID for empty, null or invalid parameters. Include SEND_RESULT and COMMAND_IDENTIFIER to request a result.
Status: supported
Sources: DW15-SET-5 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (Result Codes)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q08: Which API can an app use to check the installed DataWedge version before relying on a feature?
Expected: supported; retrieved: DW15-PG-2 (13.813), DW66-SET-1 (3.319), DW15-SET-3 (1.886)
Answer: Use the Get Version Info API to read the installed DataWedge version before relying on version-specific features.
Status: supported
Sources: DW15-PG-2 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/programmers-guides/dw-programming/ (DataWedge API Basics / Check version information)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q09: Does the DataWedge 15.0 SET_CONFIG page prove that my unspecified Zebra scanner supports every decode parameter?
Expected: insufficient_evidence; retrieved: DW15-SET-6 (12.059), DW15-SET-5 (3.845), DW66-SET-1 (2.153)
Answer: No device-specific conclusion follows from the general SET_CONFIG page. Decode parameter support varies by scanner; check the device Integrator Guide and installed version.
Status: insufficient_evidence
Sources: DW15-SET-6 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (Scanner Input Parameters)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-FORUM-00129: Why does a Kotlin TC21 app create a DataWedge profile but not apply its SET_CONFIG options when the posted code mutates baseConfig inside a new Bundle passed as the extra?
Expected: insufficient_evidence; retrieved: DW15-SET-4 (8.696), DW15-SET-1 (6.524), DW15-SET-5 (6.34)
Answer: The posted code appears to modify baseConfig while passing a separate new Bundle as the SET_CONFIG extra. The official API requires configuration fields in the main bundle sent with the intent. This is a code-level hypothesis, not a verified device diagnosis; inspect the actual payload and result code.
Status: insufficient_evidence
Sources: DW15-SET-1 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (SET_CONFIG / main bundle and PLUGIN_CONFIG BUNDLE)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-FORUM-00383: Why does SET_CONFIG return SUCCESS for decoder changes in a .NET MAUI app but scanning then fails on the user's device?
Expected: insufficient_evidence; retrieved: DW15-SET-6 (4.656), DW15-SET-5 (3.845), DW15-PG-1 (3.395)
Answer: A reported SUCCESS result does not establish that the selected scanner supports every decoder setting or that the intended profile is active. The official page says decode parameter support varies by device. Check the model-specific guide, active profile and installed version before diagnosing the failure.
Status: insufficient_evidence
Sources: DW15-SET-6 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (Scanner Input Parameters)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

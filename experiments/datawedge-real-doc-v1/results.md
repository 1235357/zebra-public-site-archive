# DataWedge retrieval experiment

Run: 2026-11-03T00:21:19.828Z

Corpus: 5 curated official-document passages; full-page ingestion and hardware tests pending.

## DW-Q01: Can SET_CONFIG configure BARCODE input and INTENT output plugins in one intent on DataWedge 15.0?
Expected: supported; retrieved: DW15-PG-1 (5.112), DW15-SET-1 (4.85), DW15-SET-2 (2.551)
Answer: Yes. DataWedge 15.0 documents multiple PLUGIN_CONFIG bundles in one SET_CONFIG intent; BARCODE and INTENT are documented plugin names. This establishes API support, not success on an untested device.
Status: supported
Sources: DW15-SET-1 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (SET_CONFIG / main bundle and PLUGIN_CONFIG BUNDLE)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q02: Can DataWedge 6.5 configure multiple plugins with one SET_CONFIG intent?
Expected: contradicted; retrieved: DW15-SET-2 (4.306), DW15-PG-1 (3.474), DW15-SET-1 (2.314)
Answer: No. The official version history says multi-plugin configuration in one SET_CONFIG action began in DataWedge 6.6; 6.5 and below require separate actions.
Status: contradicted
Sources: DW15-SET-2 DataWedge 15.0 documentation, historical feature boundary https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (Version History)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q03: Does a single SET_CONFIG intent configure a full profile including APP_LIST on DataWedge 7.1?
Expected: supported; retrieved: DW15-SET-3 (10.856), DW15-PG-1 (3.529), DW15-SET-1 (2.837)
Answer: Yes, for the documented full-profile multi-module configuration. The official guide dates this support, including APP_LIST, to DataWedge 7.1.
Status: supported
Sources: DW15-SET-3 DataWedge 15.0 documentation, historical feature boundary https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (Set configuration for multiple modules (full profile) in a single intent)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-Q04: Why did SET_CONFIG fail on my TC device after an Android upgrade?
Expected: insufficient_evidence; retrieved: DW15-SET-1 (0.914), DW15-SET-2 (0.817), DW15-PG-1 (0.644)
Answer: Official excerpts do not establish the cause. Record the installed DataWedge version, device/Android version, profile, intent payload and result code; reproduce before concluding.
Status: insufficient_evidence
Sources: None
Retrieval: not_applicable; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

## DW-FORUM-00476: DataWedge SET_CONFIG is broken: why were multiple PLUGIN_CONFIG bundles ignored when sent in one intent, and was the documentation wrong?
Expected: insufficient_evidence; retrieved: DW15-SET-2 (5.174), DW15-SET-1 (4.256), DW15-PG-1 (1.891)
Answer: The official DataWedge 15.0 documentation describes multiple PLUGIN_CONFIG bundles in one SET_CONFIG intent. That establishes documented API support, but does not identify why this poster's request was ignored or prove a documentation error. The installed DataWedge version, complete payload/result handling and device reproduction need review.
Status: insufficient_evidence
Sources: DW15-SET-1 DataWedge 15.0 https://techdocs.zebra.com/datawedge/15-0/guide/api/setconfig/ (SET_CONFIG / main bundle and PLUGIN_CONFIG BUNDLE)
Retrieval: pass; answer: pass
Caveat: Evidence is a curated official-document excerpt; runtime device behavior is untested.

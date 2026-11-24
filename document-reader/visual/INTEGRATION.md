# Contextual visual guidance — deployable static module

This directory is a **copy-ready integration**, not a new documentation database or a change to the r62 release. It is staged in the public archive because the actual Vercel application repository `1235357/zebra-techdocs-practicum` is not accessible through the current GitHub connection. No claim of deployment or access to that private source.

## Install in the existing site

Copy the seven HTML/JS runtime files in this directory into the private site's existing static directory that serves `/document-reader/visual/`. No server dependencies, build step, model credentials, or external media fetch are needed for the offline experience. The reader retains its existing case table, article versions, original source and revisions.

In the existing `/document-reader/dw62-intent-receiver/index.html` page, add a link next to the relevant original/revised passage:

```html
<a href="../visual/visual-companion.html?reader=dw62-intent-receiver">
  Explain with an interactive diagram and short video
</a>
```

On the existing document-reader index, add one entry if desired:

```html
<a href="visual/answer-guidance.html">Ask &amp; Guide — contextual diagrams and videos</a>
```

The two visual pages share the same portable modules. The historical question goes from the companion to the **same-site** Ask & Guide path. The reader link goes back to the team's existing article. Do not import customer SPR records, duplicate the catalog, replace original articles, or expose a campus API on the public site. The private site maintainer must confirm actual static routing and deployment. A production CSP must allow same-site scripts and the local blob image/video needed by the player; don't loosen a campus server's frame protections.

## Tomorrow's demo — one real case, 90 seconds

1. Start with the team's [DataWedge 6.2 Intent Output reader](https://zebra-techdocs-practicum.vercel.app/document-reader/dw62-intent-receiver/index.html#receiving-app-intent-filter). The archived developer report says the ADB test reached the app but the configured scan broadcasts did not. Do not claim the cause is established.
2. Select the contextual visual companion. Click the ADB and DataWedge paths. The user sees why the test and actual scan delivery are distinct and can inspect the public report.
3. Choose **Create short video** to render a captioned local clip from the same explanation. Use the already verified [QA sample](https://github.com/Tmkbs/zebra-evidence-framework/actions/runs/45357108392) (artifact contextual-video-preview) if real-time encoding is inconvenient. It is an authored conceptual explainer, not recorded hardware.
4. Continue in Ask & Guide. Show that the historical installed version is separate from the applicable document edition; the user must confirm version and official evidence. Optionally choose Learn DataWedge Profiles for a product-concept walkthrough and links to relevant original media.
5. End with the distinction: the reader improves documents to help users find answers; the visual guidance explains the concept and collects context for better AI answers. No measured reduction in support demand is claimed.

## Verified source

Runtime modules were copied from `Tmkbs/zebra-evidence-framework` commit `147b61d802726542cb858a17e5520ef7c089f92a`. Only navigation was adapted for same-site hosting. Source project PR #17 passed complete offline regression, actual Chromium interactions and 1280x720 WebM encode/decode/playback. The team-side copy has its own QA workflow and must pass before deployment. Existing r62 57-case count is unchanged. No OpenAI API, private customer material, or live inference is used.

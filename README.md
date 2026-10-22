# Ads Asaan

A practical Google Search Ads learning app in Roman Urdu and English. Independent educational project; not affiliated with Google.

## Run

Requires Node.js 20 or later. No installation or build step needed.

```sh
npm start
# http://127.0.0.1:4173
npm test
```

For static hosting, run `npm run prepare-media` and publish the `dist/` directory. Hash routes work without server rewrites. `npm start` downloads the attributed Google Help animation if it is absent; no Google Ads account is needed. The GitHub source includes the downloader rather than duplicating the third-party binary. The hosted package and source ZIP include the fetched animation.

## Included through v0.9

- 42 introductory bilingual lessons across 14 chapters, with checks and activities.
- Three fictional business contexts: local AC repair, ecommerce shoes and B2B accounting.
- Search-term decisions, ad builder, campaign plan/export and diagnosis labs.
- Guided campaign, tracking and optimization missions with 15 decisions per business; progress is saved separately for each business.
- A labelled tracking playground for invalid submissions, success-only triggers, repeated events and simplified deduplication. It runs no live Google tags and sends no customer data.
- Twelve calculation drills with hints, numeric answer checking and worked solutions; three business contexts yield 36 saved drill completions.
- Forecast, contribution, break-even, metrics and budget calculators with zero/invalid input handling.
- Browser-local progress, JSON backups and restore, glossary and official source library.
- Official Google animation and click-to-load YouTube tutorials. Illustrations are clearly labelled.
- Three implementation workbooks with 23 self-verified steps: campaign setup, manual GTM measurement and weekly optimization. These guide implementation but do not control or verify a live account.
- Expanded campaign plans for location options, language, network choice, schedules, audience mode, tracking status and AI controls, plus context-sensitive plan review.
- Campaign/ad autosave, per-business launch checklists and migration of older progress backups. Clearing a field stays cleared when navigating back.
- Three complete fictional campaign cases connect a business brief, CRM/measurement evidence, calculation checks, strategy decisions, an assumption model and an exportable action plan. All case data is labelled fictional.
- Seven source-linked official videos, including conversion measurement, website tracking and tag ID tutorials; relevant lessons include video links.

## Content status

Primary platform sources reviewed on 20 October 2026. Examples and sample business numbers are fictional teaching examples, not market benchmarks. Platform features, labels and account availability vary; always verify the linked documentation and your actual account.

This is a working first edition, not a finished professional course. Five original interface crops with bilingual clickable explanations are available at #screens. Remaining: complete workflow-by-workflow current account screenshots, Roman Urdu recordings/captions, permission-based real case studies, live account verification and deeper consent/advanced experiment exercises, expert review and beginner usability testing. Other campaign modules are future work. The app shows this status in its coverage library.

All campaign actions are simulated. The app has no Google Ads API connection and cannot create spending, verify live tracking, grant Google certification or guarantee results. Quiz completion is not proof of professional mastery.

## Data and privacy

Progress and fictional drafts are saved in this browser's localStorage. They do not sync between devices. Download a JSON backup to transfer progress. Avoid entering real sensitive client information. Google Fonts loads external font assets; video embeds only load when the learner clicks Play. YouTube privacy-enhanced embeds may still communicate with Google when loaded.

## Media attribution

`dist/assets/ai-max-official.gif`: original Google Help animation, © Google, from https://support.google.com/google-ads/answer/15910366 . Included for educational illustration; no ownership of Google media is claimed. Linked/embedded Google videos remain hosted on YouTube. Media capture/publication date is not asserted to be the current review date.

## Technical approach

Buildless HTML/CSS/JavaScript; no framework or runtime dependencies. `dist/content.js` contains bilingual content, business examples, glossary and source mapping. `dist/app.js` contains navigation, exercises and calculators. `check.cjs` performs route, content and calculation regression checks; browser testing is still required for user interactions and layout.

## Original interface captures (v0.5)

`dist/assets/google-ads/*.png`: five original Google Ads UI crops captured on 20 October 2026, © Google. Account-identifying headers and private details were excluded at capture time. No UI pixels were reconstructed. The overlays are separate interactive HTML annotations. The initial objective/type chooser was canceled without creating or launching a campaign. These limited account views do not cover the full workflow. `dist/screens.js` records paths, bilingual annotations and capture provenance; screenshots are educational and account layouts may vary.

## Guided Search setup (v0.6)

`#journey` connects 14 planning steps from outcome/measurement to a first review. Three fictional business contexts provide specific examples, decision checks, editable autosaved outputs, a break-even calculation and exportable plan. Progress and outputs are per business and included in existing schema-1 progress backups. This is a teaching interface, not a Google UI replica, original screenshot for every step, live account verification or launch authorization. The existing five original crops are linked only where relevant; missing full workflow captures and Roman Urdu recordings remain listed. Dedicated RSA documentation is used for current RSA limits rather than older text-ad instructions in the generic creation guide.

Current bidding notes explicitly distinguish the June 2026 label transition (Google Help 10353027) from the 17 August 2026 target-based bidding change (Google Help 17061251). Both were checked on 20 October 2026. Targets are not represented as per-conversion hard caps or guaranteed results.

## Measurement and troubleshooting clinic (v0.7)

`#clinic` provides three fictional event traces (form, purchase, calls) and eight evidence-led fault cases. Learners change event rules, repeat protection, duplicate action sources and purchase-value mapping, then compare emitted events with a known fixture. The call fixture deliberately distinguishes a matching total from correct event semantics. Transaction repeat suppression is per action; form/call repeat protection is a simplified app-side guard. This is not Google attribution/counting/consent emulation. Phone measurement eligibility must be verified by country/account.

Fault cases cover zero serving, disapproval, broken forms, lead quality, duplicate conversions, attribution/debug differences, incorrect values and conversion delay. Recovery notes autosave, export and survive schema-1 backups. Original screenshots and live tag verification are not claimed for these exercises. Current Google Help references were reviewed on 20 October 2026. Roman Urdu recordings, full original workflow captures, permission-based real cases and expert/beginner review remain incomplete.

## Optimization and scaling (v0.8)

`#optimize` adds six decision exercises (lag, lead quality, blended averages, small samples, test isolation and marginal economics), a capacity-aware added-spend model and an editable experiment plan. Business-specific decisions, assumptions and plans autosave and survive backups. The model compares the existing fictional case contribution with added contribution; a profitable total can still include an unprofitable budget increase. Fractional customers represent expected values. The model excludes auction/demand feedback, fixed overhead, taxes, refunds, repeat value and causal incrementality.

The experiment checklist covers hypothesis, change, primary metric/baseline, guardrail, evidence, lag/readout timing, split, owner and rollback. It does not calculate sample size or certify significance, causal impact or readiness for a live experiment. It creates no live experiment and changes no real budget.

## RSA and keyword studio (v0.9)

`#studio` provides 15 headline fields, four descriptions, two display paths, final URL, live length checks, position pins and deterministic sample combinations. Optional H3/D2 can be hidden. Samples are illustrative and do not predict Google serving, eligibility, Ad Strength or approval. The advanced draft copies the old three-headline/two-description draft only when first created; it then saves independently. Character counts cover English/Roman Urdu with a CJK double-width approximation; verify other scripts/emoji in the actual Google editor.

The keyword workshop adds a research worksheet, syntax/match-type explanation, a five-query negative/scope fixture and eight intent decisions per business. Literal negative broad/phrase/exact logic deliberately excludes close-variant expansion. Tokenization and fixture scope are simplified; it does not emulate Google semantic matching or certify the whole account. Volumes and live Planner data are not fetched. Drafts, pins, research and decisions autosave per business and are included in schema-1 backups and export files. All query metrics are fictional.

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

## Included in v0.2

- 42 introductory bilingual lessons across 14 chapters, with checks and activities.
- Three fictional business contexts: local AC repair, ecommerce shoes and B2B accounting.
- Search-term decisions, ad builder, campaign plan/export and diagnosis labs.
- Guided campaign, tracking and optimization missions with 15 decisions per business; progress is saved separately for each business.
- A labelled tracking playground for invalid submissions, success-only triggers, repeated events and simplified deduplication. It runs no live Google tags and sends no customer data.
- Twelve calculation drills with hints, numeric answer checking and worked solutions; three business contexts yield 36 saved drill completions.
- Forecast, contribution, break-even, metrics and budget calculators with zero/invalid input handling.
- Browser-local progress, JSON backups and restore, glossary and official source library.
- Official Google animation and click-to-load YouTube tutorials. Illustrations are clearly labelled.

## Content status

Primary platform sources reviewed on 20 October 2026. Examples and sample business numbers are fictional teaching examples, not market benchmarks. Platform features, labels and account availability vary; always verify the linked documentation and your actual account.

This is a working first edition, not a finished professional course. Remaining: workflow-by-workflow current demo-account screenshots, Roman Urdu recordings/captions, permission-based real case studies, deeper tracking implementation and advanced exercises, expert review and beginner usability testing. Other campaign modules are future work. The app shows this status in its coverage library.

All campaign actions are simulated. The app has no Google Ads API connection and cannot create spending, verify live tracking, grant Google certification or guarantee results. Quiz completion is not proof of professional mastery.

## Data and privacy

Progress and fictional drafts are saved in this browser's localStorage. They do not sync between devices. Download a JSON backup to transfer progress. Avoid entering real sensitive client information. Google Fonts loads external font assets; video embeds only load when the learner clicks Play. YouTube privacy-enhanced embeds may still communicate with Google when loaded.

## Media attribution

`dist/assets/ai-max-official.gif`: original Google Help animation, © Google, from https://support.google.com/google-ads/answer/15910366 . Included for educational illustration; no ownership of Google media is claimed. Linked/embedded Google videos remain hosted on YouTube. Media capture/publication date is not asserted to be the current review date.

## Technical approach

Buildless HTML/CSS/JavaScript; no framework or runtime dependencies. `dist/content.js` contains bilingual content, business examples, glossary and source mapping. `dist/app.js` contains navigation, exercises and calculators. `check.cjs` performs route, content and calculation regression checks; browser testing is still required for user interactions and layout.

# Estes Media - AI Visibility Audit

Vite + React landing page for the free AI Visibility Audit offer.

```bash
pnpm install
pnpm dev        # http://localhost:8080
pnpm build      # production build into dist/
pnpm test
```

## Performance notes

The page is a paid-traffic landing page, so the load path is deliberately kept
thin. A few things are easy to undo by accident:

**Third-party tags belong in `src/hooks/useMarketingScripts.ts`, not in
`index.html`.** GTM, Google Ads, the Meta pixel and HubSpot are injected after
first paint — on the first user interaction, on `requestIdleCallback`, or after
a 4s cap, whichever comes first. Pasting a new tag straight into `index.html`
puts several hundred KB of JavaScript back onto the critical path. Add it to the
hook instead, and add a `dns-prefetch` for its host in `index.html`.

**The form posts with plain `fetch`** (`src/lib/submitLead.ts`) rather than
`@supabase/supabase-js`. The SDK cost ~110 KB gzipped for a single POST to the
`submit-form` edge function, which runs with `verify_jwt = false`. Reinstalling
the SDK for this one call is not worth it.

**Images are stored at the size they render.** `pnpm assets` runs
`scripts/optimize-images.js`, which re-encodes `src/assets` to webp capped at a
per-file max width (roughly 2x the largest CSS size it is displayed at). Drop a
new image in, add it to the `MAX_WIDTH` map, and run `pnpm assets`. Every `<img>`
carries explicit `width`/`height` so nothing shifts as it loads.

**Fonts are self-hosted from `public/fonts`,** latin subset only, copied out of
`@fontsource` by `scripts/copy-fonts.js` (runs on `prebuild`). They live under
stable paths so `index.html` can preload them. Importing the `@fontsource` CSS
instead would ship every subset and delay font discovery until the stylesheet
parses.

## Known follow-up

`index.html` sets `og:image` / `twitter:image` to a relative `/og-image.webp`,
and there is no `<link rel="canonical">`. Both want the production domain to be
absolute — worth filling in once the deploy URL is final.

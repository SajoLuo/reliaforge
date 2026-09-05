# Design QA

## Target

- Approved direction: `Geist Grid`, based on the selected Image Gen reference.
- Product position: a plugin-based operations platform. Developers provide Python services as
  plugins; the platform manages loading, dependencies, configuration, authentication, and lifecycle.
- Real console asset: `docs/public/console-preview.png` (2560 x 1600, lossless PNG).
- Social preview asset: `docs/public/og-preview.png` (1200 x 630, lossless PNG).

## Comparison

The approved reference and implementation retain the same hierarchy: compact navigation, a short
product proposition, two primary actions, a real console preview, and a four-column value band.

Two visible mismatches found in the first comparison were fixed before the final capture:

- The proposition wrapped into an extra line; its width and responsive type scale were corrected.
- The console preview was too small and visually flat; the desktop split and preview dimensions
  were brought closer to the approved composition.

Default pill buttons, rounded feature cards, gradients, glow effects, and heavy elevation were also
removed so VitePress follows the selected hairline-based system.

An independent release review then made three non-structural corrections:

- Darkened the light-theme tertiary text token from `#757d78` to `#69716c`; its worst relevant
  surface pairing is now 4.59:1 instead of 4.09:1.
- Removed redundant navbar selectors without changing the default VitePress theme boundary.
- Extended locale-parity detection to cover home-frontmatter structure and the real-preview
  destination, with a regression test.

The approved reference and final layout were re-inspected together in
`%TEMP%/reliaforge-site-design-comparison-review.png`. The fixes above do not alter geometry,
content hierarchy, preview cropping, or responsive composition.

The positioning and product copy were reviewed again after the public release candidate was
deployed. The refresh made three content-level corrections:

- Made plugin delivery, reuse of shared platform capabilities, and team conventions the primary
  story; implementation details remain supporting evidence.
- Made service plugins the main subject, with runbooks as one example. The console manages plugin
  status and lifecycle; users access each service through its own API or author-provided interface.
- Clarified failure handling: malformed manifests and dependency graphs prevent backend startup.
  After metadata validation, an individual code load failure leaves unrelated plugins available.

The previous preview was a compressed 957 x 667 JPEG stored with a `.png` extension. It was
replaced with a real 2560 x 1600 PNG captured from the public demo, plus a dedicated 1200 x 630
social preview. Both now use fresh screenshots of the local production demo build with the updated
console copy; the social viewport includes both plugin rows without cropping them.

## Browser verification

- English and Simplified Chinese desktop: composition, copy hierarchy, CTA destinations,
  product-preview link, search, locale menu, and navigation verified at 1440 CSS pixels.
- English and Simplified Chinese mobile: localized hero, preview, value band, and CTA destinations
  verified at 390 CSS pixels with no horizontal overflow.
- Preview sharpness: the 2560 x 1600 source renders at 895 x 559 on desktop and 340 x 213 on
  mobile, preserving more than 2x source resolution in both layouts.
- Dark theme: the native appearance switch changed the document to `color-scheme: dark`; the final
  page remained 1425/1425 with no horizontal overflow.
- Mobile navigation, corresponding locale routes, guide reloads, and both locale roots passed the
  Playwright suite.
- Browser console errors: none.
- Accessibility: visible focus styling is retained, the real preview has localized alt text and an
  accessible link name, and the brand/button color pairs meet AA contrast.

## Engineering verification

- TypeScript and ESLint: passed.
- Markdown lint: passed (31 files).
- Unit tests: passed (10).
- Locale parity: passed.
- VitePress production build: passed.
- Playwright: 12 passed, 2 expected project-specific skips.
- Open-source hygiene and exact binary allowlist: passed.
- Dependency audit: 0 vulnerabilities.
- `git diff --check`: passed.

## Positioning verification on 2026-09-05

- Rebuilt the console and site locally after the positioning and bilingual copy changes.
- Refreshed both PNG previews from the console's production demo build.
- Checked English and Chinese pages at desktop and mobile widths in light and dark themes.
- Shortened the Chinese hero's second line after the mobile capture put its final character on
  a separate line.
- Confirmed no horizontal overflow or page exceptions, and no API requests from the demo.
- The generated-plugin service passed the running, stopped, and restarted API check; the console
  also passed its catalog and restart journeys against the real local backend.

## Plain-language verification on 2026-09-05

- Replaced abstract onboarding and framework-specific demo copy with concrete actions and results.
- Regenerated both preview assets from the current local production demo build.
- Verified both languages and themes at 1440, 390, and 320 CSS pixels: no horizontal overflow or
  page exceptions. Visually inspected the English desktop and Chinese narrow/mobile compositions.
- Kept the demo heading short enough for narrow screens without an isolated final character.
- Checked links to the localized plugin tutorial and confirmed that corresponding Chinese source
  links resolve. Locale parity still rejects links to the wrong document.
- The backend tutorial's copied files passed real HTTP checks for success, unknown service,
  invalid parameters, stopping, and restarting.

final result: passed

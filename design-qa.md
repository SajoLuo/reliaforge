# Design QA

## Target

- Approved direction: `Geist Grid`, based on the selected Image Gen reference.
- Final same-viewport capture: `reliaforge-site-final-same-viewport.png`.
- Real console asset:
  `docs/public/console-preview.png`

## Comparison

The approved reference and final implementation were reviewed together at effectively the same
viewport (1487 x 1058 reference, 1473 x 1047 browser capture). The implementation retains the
reference hierarchy: compact navigation, three-line proposition, two primary actions, a real
console preview, and a four-column value band.

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

## Browser verification

- English desktop: final composition, CTA destinations, product-preview link, search, locale menu,
  and navigation verified.
- Simplified Chinese mobile: localized hero and CTA destinations verified at 390 CSS pixels; page
  width remained 375/375 with no horizontal overflow.
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
- Unit tests: passed (9).
- Locale parity: passed.
- VitePress production build: passed.
- Playwright: 12 passed, 2 expected project-specific skips.
- Open-source hygiene and exact binary allowlist: passed.
- Dependency audit: 0 vulnerabilities.
- `git diff --check`: passed.

final result: passed

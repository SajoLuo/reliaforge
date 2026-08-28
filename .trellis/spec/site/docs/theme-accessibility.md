# Theme and accessibility

## Current contract

`docs/.vitepress/config.mts` uses the default VitePress theme and owns navigation, sidebar, search,
metadata, and edit links. `docs/.vitepress/theme/index.ts` extends that theme with `custom.css` and
one frontmatter-driven `home-hero-image` slot for the real console preview. The reviewed brand mark
and console/social preview are PNG assets in `docs/public/` and are covered by the exact binary
allowlist.

## Rules

- Prefer VitePress theme configuration and Markdown before adding a custom Vue component.
- Keep the product preview in the default home layout through the existing `heroPreview`
  frontmatter contract. Do not replace the documentation theme with a custom application shell.
- Keep custom CSS token-based through VitePress variables. Define both light and dark behavior where
  a token changes meaning.
- Use neutral surfaces, hairline separators, small radii, minimal elevation, and one accessible
  green accent. Do not add gradients, glow effects, pill buttons, or rounded feature-card grids.
- Preserve visible keyboard focus and default semantic headings, links, buttons, and landmarks.
- Give informative images an accessible title/description or alt text; decorative effects must not
  carry meaning.
- Keep English and Chinese home frontmatter structurally aligned, including `heroPreview`, actions,
  and feature order.
- Keep the landing page usable at 320 CSS pixels without page-level horizontal scrolling.
- Respect reduced-motion behavior supplied by the default theme; do not add required animation.
- A primary CTA must name its destination or action rather than use vague text.
- Use VitePress built-in locales and the default locale menu. English remains unprefixed, Chinese
  uses `/zh/`, and switching languages must preserve the corresponding page.
- Localize navigation, sidebar, search, outline, edit, pagination, 404, accessibility, and theme
  labels. Emit `en-US` or `zh-CN` on the document root and never redirect by browser language.

## Avoid

- Replacing the documentation theme with a general application shell.
- Inline styles in Markdown or components.
- Palette values scattered outside `custom.css`.
- Navigation that is available only through hover or pointer input.
- Replacing the reviewed real console capture with fabricated UI artwork.

## Verification

`tests/site.spec.ts` covers primary actions, guide navigation, both locale roots, direct reloads,
corresponding-page language switches, localized theme chrome, desktop layout, and the mobile menu.
Run the browser suite after any theme, navigation, locale, or landing-page change. For visual work,
also compare a browser capture against the approved reference at the same viewport and verify light,
dark, desktop, and mobile states before declaring the design passed.

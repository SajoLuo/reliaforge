# Theme and accessibility

## Current contract

`docs/.vitepress/config.mts` uses the default VitePress theme and owns navigation, sidebar, search,
metadata, and edit links. `docs/.vitepress/theme/index.ts` extends that theme only by importing
`custom.css`. The brand mark and social preview are text-only SVG assets in `docs/public/`.

## Rules

- Prefer VitePress theme configuration and Markdown before adding a custom Vue component.
- Keep custom CSS token-based through VitePress variables. Define both light and dark behavior where
  a token changes meaning.
- Preserve visible keyboard focus and default semantic headings, links, buttons, and landmarks.
- Give informative images an accessible title/description or alt text; decorative effects must not
  carry meaning.
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

## Verification

`tests/site.spec.ts` covers primary actions, guide navigation, both locale roots, direct reloads,
corresponding-page language switches, localized theme chrome, desktop layout, and the mobile menu.
Run the browser suite after any theme, navigation, locale, or landing-page change.

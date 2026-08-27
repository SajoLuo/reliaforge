# Content ownership

## Current contract

The repository map is defined in `docs/reference/repositories.md`:

- `docs/` owns project positioning, getting started flow, cross-repository architecture, security
  overview, compatibility overview, and roadmap.
- `reliaforge-backend/docs/` owns detailed runtime and plugin contracts.
- `reliaforge-frontend/docs/` owns console development and API-consumer contracts.

Orientation pages such as `docs/guide/plugin-development.md` summarize the entry path and link to
the backend's canonical guide. They do not mirror it.

## Rules

- Verify technical claims against the current public code, tests, or repository-local docs.
- Prefer a stable public GitHub link over copied detailed prose.
- Keep the landing page focused on product boundary and first actions; put explanations in guide or
  reference pages.
- Maintain English at the root and Simplified Chinese under `docs/zh/` as complete document trees.
- Add, move, or remove corresponding English and Chinese pages together. Keep routes, heading levels,
  code blocks, technical identifiers, and public destinations structurally equivalent.
- Translate prose as full documents. Keep commands, API paths, plugin IDs, schema keys, capability
  names, and code examples canonical.
- Treat roadmap items as evidence-gated possibilities unless code and release evidence already exist.
- Never imply that the hosted demo has a backend or that ReliaForge sandboxes untrusted plugins.

## Avoid

- Copying another repository's detailed API, manifest, or testing guide.
- Describing planned features as available.
- Adding internal deployment knowledge, private URLs, production data, or credentials.
- Introducing a CMS or cross-repository build to solve ordinary Markdown ownership.

## Verification

- Run `npm run build` to catch internal dead links.
- Run `npm run check:i18n` to prove both locale trees have matching routes and technical structure.
- Check outbound source/demo links in `tests/site.spec.ts`.
- Run `npm run check:hygiene` for every content change.

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

- Position ReliaForge as a plugin-based operations platform. Developers package and provide their
  own services through plugins. Runbooks are one possible plugin service, not the platform's
  defining abstraction or a required built-in execution model.
- Distinguish platform lifecycle controls, plugin HTTP APIs, and shared Python capabilities.
  Explain the current directory-based onboarding path; do not imply a marketplace, online upload,
  generic business-action console, or code hot reload.

- Verify technical claims against the current public code, tests, or repository-local docs.
- Write for an SRE trying to understand, deploy, or operate the current release. Lead with the
  answer or next action, use familiar operational terms, and explain ReliaForge-specific names on
  first use.
- Describe the product as it exists now. Omit extraction history, rejected alternatives, internal
  predecessors, and compatibility statements about formats that are not part of this project.
- State a limitation only when it prevents a likely mistake, unsafe deployment, false success, or
  unsupported operation.
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

## Reader checks

- Start onboarding with a concrete tool and show the files to edit, a request, its response, and
  how to check failure. Link to the backend's runnable example instead of mirroring its code.
- Avoid repeating the platform/plugin/runbook distinction on every page. Explain a distinction
  where the reader needs it to act correctly.
- Keep framework names and runtime internals out of the home page and demo notice unless they
  help the reader make a decision. A failed status read must not claim the plugin is down.

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

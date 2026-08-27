# Contributing

Thank you for helping improve ReliaForge.

## Choose the owning repository

- Project positioning, cross-project docs, and site behavior belong here.
- Runtime, API, plugin scaffold, and backend contracts belong in `reliaforge-backend`.
- Console components, API adapters, and demo behavior belong in `reliaforge-frontend`.

Search existing issues before opening a new one. Keep a proposal focused and explain the concrete
operator or plugin-author problem it solves.

## Development flow

1. Fork the owning repository and create a short-lived branch.
2. Read its `AGENTS.md`, repository-local `.trellis/spec/`, and contributor documentation.
3. Add or update tests with the behavior change.
4. Run the repository's complete verification commands.
5. Open a pull request that explains scope, evidence, and any deliberate non-goals.

For this site, use the commands in [README.md](README.md). Do not copy detailed documents from the
backend or frontend; update the canonical repository and keep this site's orientation link accurate.

## Public content

Use neutral examples and public URLs. Never commit credentials, private endpoints, production data,
local environment files, screenshots containing user data, or third-party material without a
compatible license.

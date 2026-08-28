# Project site development

This layer owns the VitePress landing page, cross-project guide, public information architecture,
and GitHub Pages workflow.

## Read order

1. [Content ownership](./content-ownership.md) for deciding where a claim belongs.
2. [Theme and accessibility](./theme-accessibility.md) for navigation, visual, or interaction work.
3. [Deployment](./deployment.md) for dependencies, build scripts, routing, or workflow changes.

## Pre-development checklist

- Identify whether the change is cross-project documentation or belongs beside backend/frontend
  code.
- Check the current public source or test that supports every technical claim.
- Search existing pages before adding a new concept or navigation item.
- Preserve the root custom-domain base and static-hosting contract.
- Preserve English at the root and the complete Simplified Chinese mirror under `/zh/`.
- Plan desktop and mobile proof for any user-visible change.

## Quality check

```bash
npm run typecheck
npm run lint
npm run test:unit
npm run check:i18n
npm run build
npm run test:e2e
npm run check:hygiene
npm audit --audit-level=high
```

Also inspect the generated site under the configured base path and verify every primary external
link against its live public target.

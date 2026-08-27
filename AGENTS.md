# Contributor guidance

Before changing this repository, read `.trellis/spec/site/docs/index.md` and the topic files it
routes to.

This repository owns the ReliaForge landing page, cross-project documentation, and GitHub Pages
deployment. Runtime behavior belongs in `reliaforge-backend`; console behavior belongs in
`reliaforge-frontend`. Update the owning repository instead of copying its implementation contract
here.

Keep examples neutral, public-safe, and source-backed. Run the full verification commands in
`README.md` before proposing a change.

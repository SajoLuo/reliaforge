# Repository ownership

ReliaForge uses three repositories so code, documentation, and deployable artifacts have clear
owners without a monorepo or cross-repository build.

| Repository | Owns | Does not own |
| --- | --- | --- |
| [`reliaforge`](https://github.com/SajoLuo/reliaforge) | Project landing page, cross-project guide, roadmap, site deployment | Runtime or console source |
| [`reliaforge-backend`](https://github.com/SajoLuo/reliaforge-backend) | Python runtime, API, examples, scaffold, detailed plugin/runtime docs | Hosted website or React UI |
| [`reliaforge-frontend`](https://github.com/SajoLuo/reliaforge-frontend) | React console, API adapters, UI tests, hosted read-only demo | Runtime lifecycle policy |

## Documentation rule

Cross-project concepts live here. Detailed code conventions and implementation contracts stay beside
the code they describe. This site summarizes and links to those documents rather than copying them.

## Trellis rule

Each repository owns a small `.trellis/spec/` tree grounded in its actual source and tests. There is
no shared spec repository or generated registry. A convention is shared only after more than one
project demonstrates the same stable requirement.

## Release rule

Backend and frontend releases remain independently versioned. Updating this site or the hosted demo
does not imply that a Python or npm package has been published. Repository tags and GitHub Releases
remain the source of release history.

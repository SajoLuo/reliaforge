# Roadmap

ReliaForge develops the shared platform for hosting operations services as plugins. Plugin authors
choose their services and how users interact with them. The platform currently provides:

- plugin discovery, dependency checks, and ordered startup;
- start, stop, restart, and health reporting;
- environment-based plugin settings;
- read-only status APIs and authenticated management operations;
- two example plugins and a plugin scaffold;
- an optional React console and read-only online demo.

## Next priorities

- document packaging, installation, and upgrade steps for independently developed service plugins;
- let deployments select which plugins to load, including whether to load the examples;
- make each plugin's API and usage instructions easier to find from the console;
- record who requested each lifecycle operation and its result in structured logs;
- publish a verified single-process deployment example and run frontend release checks against a
  matching backend version.

To discuss a concrete change, open an issue in the repository that owns it:

- [backend issues](https://github.com/SajoLuo/reliaforge-backend/issues);
- [frontend issues](https://github.com/SajoLuo/reliaforge-frontend/issues);
- [site and cross-project issues](https://github.com/SajoLuo/reliaforge/issues).

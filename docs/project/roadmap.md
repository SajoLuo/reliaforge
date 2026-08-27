# Roadmap

ReliaForge grows from real plugin and operator needs, not from a checklist of platform features.

## Available now

- typed manifest discovery and complete-graph validation;
- deterministic dependency ordering and lifecycle management;
- provider-owned services and local failure-isolating events;
- Python Settings as the source of public configuration shape;
- read-only health/catalog APIs and authenticated lifecycle operations;
- two neutral example plugins and a copyable scaffold;
- optional generic React console;
- hosted read-only console demo and public project documentation.

## Likely next

- author a third-party plugin from the public scaffold and use its friction to improve the contract;
- document deployment recipes from real, reproducible environments;
- refine API and plugin compatibility policy from actual external usage;
- improve contributor examples and failure diagnostics without adding hidden infrastructure.

## Evidence-gated ideas

These are possibilities, not commitments:

- richer plugin-owned UI extension points;
- an isolated execution boundary for selected workloads;
- a durable event or job integration owned by an explicit adapter;
- a discoverable plugin index;
- one-click cloud development environments.

Each idea needs a concrete use case, clear ownership, failure semantics, security analysis, and tests
before it enters the implementation plan.

## Intentionally absent

ReliaForge does not currently promise a hosted multi-tenant service, built-in monitoring database,
alerting suite, durable workflow engine, untrusted-code sandbox, or plugin marketplace.

Open a focused issue in the repository that owns a proposal:

- [backend issues](https://github.com/SajoLuo/reliaforge-backend/issues);
- [frontend issues](https://github.com/SajoLuo/reliaforge-frontend/issues);
- [site and cross-project issues](https://github.com/SajoLuo/reliaforge/issues).

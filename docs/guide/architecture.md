# Architecture

ReliaForge separates platform orchestration from plugin domain logic and keeps browser behavior
downstream of backend-owned contracts.

```text
React console (optional)
  -> typed API adapter
  -> versioned management API
       -> plugin manager
            -> manifest loader
            -> dependency resolver
            -> lifecycle state machine
            -> plugin records and health snapshots
            -> controlled plugin context
                 -> provider-owned services
                 -> failure-isolating event delivery
       -> plugin routers -> plugin services
```

## Discovery and isolation

Discovery reads every manifest before executing extension code. Once the complete graph is valid,
entry points are imported in dependency order. Import or construction failures become stable,
secret-safe load records. Dependents are blocked while unrelated branches and the management plane
remain visible.

## Runtime ownership

The manager owns lifecycle transitions and provides each plugin a scoped context. That context owns
service registrations and event subscriptions, so stop and failure cleanup do not remove resources
belonging to another plugin.

Initialization and startup are deadline-bounded. Health checks read in-memory state and must not
repair or probe external systems. The event bus is local and failure-isolating; it is not a durable
workflow queue.

## HTTP boundary

The platform exposes liveness, readiness, status, catalog, detail, and lifecycle endpoints. Public
reads do not perform repair writes. Plugin-owned routes and lifecycle changes share one management
authentication boundary that plugin manifests cannot disable.

The optional web console follows this flow:

```text
Page -> feature hook -> typed API facade -> selected adapter
                                      ├─ HTTP in a real deployment
                                      └─ static snapshots in the hosted demo
```

Both adapters use the same domain types and runtime response validation. The demo adapter changes
only the source of data, not pages, routing semantics, or lifecycle policy.

## Deployment shape

A production console should be served from the same trusted boundary as the backend or behind a
reverse proxy that authenticates the operator and injects server-side identity. The browser stores
no management secret and sends no cross-origin credentials by default.

See the backend's detailed
[architecture document](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/architecture.md)
for runtime invariants and failure behavior.

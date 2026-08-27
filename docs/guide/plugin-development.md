# Develop a plugin

The backend owns the normative plugin contract. This page gives the shortest safe path into that
contract; keep the detailed backend guide open while implementing a real plugin.

## Start from the scaffold

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
```

The generated directory includes a manifest, plugin class, settings, service, router, models, and a
focused test. Keep those responsibilities separate.

## Declare the public contract

A manifest describes identity and compatibility without importing Python code:

```json
{
  "id": "sample_tool",
  "name": "Sample Tool",
  "version": "0.1.0",
  "description": "A neutral example capability.",
  "api_version": "v1",
  "entrypoint": "plugin:Plugin",
  "dependencies": [],
  "capabilities": ["sample_tool.message"],
  "frontend": { "category": "Examples" }
}
```

Plugin IDs use lowercase snake case. Dependencies are objects with an ID and accepted SemVer range.
Capabilities are unique dotted names. Settings schema and lifecycle actions are runtime-derived and
must not be handwritten into the manifest.

## Keep layers narrow

- The plugin class coordinates lifecycle hooks and context-owned resources.
- The service contains domain behavior and does not import FastAPI.
- The router validates and translates HTTP concerns.
- The settings class declares environment-backed configuration once.
- Tests prove lifecycle cleanup, health behavior, routes, and capability contracts.

## Respect runtime boundaries

- Move blocking work into a bounded execution domain with an explicit timeout.
- Keep health checks synchronous, side-effect-free snapshots.
- Resolve another plugin through a caller-owned protocol instead of importing its implementation.
- Treat events as local notifications, not a durable queue.
- Use `SecretStr` for secret inputs and never include them in defaults, logs, schemas, or errors.

Read the complete
[plugin development contract](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/plugin-development.md)
and use the bundled
[`demo`](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/demo) and
[`runbook`](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/runbook)
plugins as executable examples.

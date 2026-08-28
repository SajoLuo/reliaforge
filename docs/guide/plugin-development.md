# Develop a plugin

Start with the backend scaffold, then replace its example service with your operations task.

## Generate the files

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
```

The command creates `manifest.json`, a plugin class, settings, service, API router, models, and a
focused test.

## Describe the plugin

`manifest.json` tells ReliaForge what to load and what the plugin provides:

```json
{
  "id": "sample_tool",
  "name": "Sample Tool",
  "version": "0.1.0",
  "description": "Returns a sample message.",
  "api_version": "v1",
  "entrypoint": "plugin:Plugin",
  "dependencies": [],
  "capabilities": ["sample_tool.message"],
  "frontend": { "category": "Examples" }
}
```

Plugin IDs use lowercase snake case. Dependencies contain a plugin ID and an accepted SemVer range.
Capabilities are unique dotted names for services that other plugins can request. Define
configuration fields in the Python settings class, not in this file.

## Put code in the right place

- The plugin class starts and stops the plugin.
- The service performs the operations task and does not import FastAPI.
- The router validates HTTP input and calls the service.
- The settings class reads environment-based configuration.
- Tests cover startup, cleanup, health, API routes, and shared services.

Move blocking work off the event loop and give it a timeout. Keep health checks fast and free of
side effects. Use `SecretStr` for secrets and never put secret values in defaults, logs, schemas, or
errors.

The backend's complete
[plugin development guide](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/plugin-development.md)
documents every supported field and hook. The bundled
[`demo`](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/demo) and
[`runbook`](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/runbook)
plugins are working examples.

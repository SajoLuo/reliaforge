# Architecture

ReliaForge hosts Python services as plugins in one backend process. The platform manages loading,
dependencies, configuration, authentication, and lifecycle. Each plugin implements its service and
API; the optional React console manages plugin status and start and stop controls.

```text
React console -> management API -> plugin manager
                                       -> loads and starts plugins
                                       -> stops plugins and reads health
API clients   -> plugin API routes -> plugin service code
```

## Loading plugins

The backend reads every `manifest.json` before importing plugin code. It checks IDs, versions,
missing dependencies, and dependency cycles, then imports valid plugins in dependency order.

Invalid manifests or dependency graphs prevent the backend from starting. After validation, if a
plugin's code cannot load, the backend records a safe error and blocks plugins that depend on it.
Unrelated plugins and the management API remain available.

## Starting and stopping plugins

The plugin manager owns every state change. Each plugin receives a context for the services and
event subscriptions it creates. The plugin's stop hook releases its own clients and background work,
including after incomplete initialization. The platform then removes its service registrations and
event subscriptions.

Initialization and startup have time limits. Health checks return an in-memory snapshot and must
not repair or probe external systems. Events stay inside the process and are not a durable job
queue.

## API and console

The backend exposes liveness, readiness, platform status, plugin details, health, and lifecycle
operations. Read endpoints do not change plugin state. Plugin routes and lifecycle operations use
the same management authentication.

The console has two data sources:

```text
Page -> hook -> API client -> HTTP backend
                         \-> saved demo data
```

The online demo uses saved data and has no write actions. A normal deployment uses the HTTP backend.

## Production deployment

For production, serve the console and backend through a trusted reverse proxy that authenticates
users. Use the same protocol, host, and port for both where possible. If they use different origins,
also configure the allowed browser origins. Keep management secrets on the server.

See the backend's detailed
[architecture document](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/architecture.md)
for state transitions and failure handling.

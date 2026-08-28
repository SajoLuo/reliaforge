# Architecture

ReliaForge runs several Python plugins behind one backend. The optional React console calls that
backend; it does not make lifecycle decisions itself.

```text
React console (optional)
  -> management API
       -> plugin manager
            -> reads plugin metadata
            -> checks dependencies
            -> starts and stops plugins
            -> records status and health
       -> plugin API routes
```

## Loading plugins

The backend reads every `manifest.json` before importing plugin code. It checks IDs, versions,
missing dependencies, and dependency cycles, then imports valid plugins in dependency order.

If a plugin cannot load, the backend records a safe error and blocks plugins that depend on it.
Unrelated plugins and the management API remain available.

## Starting and stopping plugins

The plugin manager owns every state change. Each plugin receives a context for the services and
event subscriptions it creates. When a plugin stops or fails, ReliaForge removes only that plugin's
resources.

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

Serve the console and backend from the same trusted origin when possible. Otherwise, place both
behind a reverse proxy that authenticates the operator. Keep management secrets on the server, not
in browser build variables.

See the backend's detailed
[architecture document](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/architecture.md)
for state transitions and failure handling.

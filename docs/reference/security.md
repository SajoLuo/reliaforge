# Security model

ReliaForge separates public observation from privileged management and fails closed when the
production trust boundary is incomplete.

## What is public

Process probes, platform status, plugin catalog, and plugin detail are read-only, in-memory views.
They do not repair state or expose plugin setting values. Public schema output describes shape only;
secret values and secret defaults are excluded.

## What is protected

Every plugin-owned route and lifecycle operation uses the platform management-auth dependency. A
plugin manifest cannot opt out. `available_actions` is a presentation hint from current runtime
state, not authorization; every request is authenticated and revalidated.

## Development mode

Anonymous management is accepted only in an explicit development or test environment bound to a
loopback address. CORS permits exact configured origins and rejects wildcards. This mode is for a
local trusted workstation, not a shared deployment.

## Production proxy mode

Production requires all of the following:

- a trusted direct-peer network that is narrower than an all-address range;
- an operator identity header accepted only from that peer;
- a strong shared secret between the proxy and backend;
- server configuration that preserves the direct TCP peer for validation.

Interactive API documentation is disabled in production. Invalid or incomplete proxy configuration
prevents startup rather than silently enabling anonymous management.

## Browser boundary

The frontend stores no API secret and sends no cross-origin credentials. Build variables are public
assets. A production proxy authenticates the operator and injects identity on the server side.

The [online demo](https://demo.reliaforge.dev/) has no backend, sends no management
request, and exposes no lifecycle actions.

## Plugin trust

Plugins are trusted in-process extensions. Manifests, contexts, deadlines, and cleanup provide
engineering boundaries, not hostile-code isolation. Do not load unreviewed plugins as though they
were sandboxed.

Report suspected vulnerabilities privately according to each repository's `SECURITY.md` rather than
opening a public issue with exploit details.

# Security model

ReliaForge lets anyone read status by default, but requires authentication for operations that can
change plugin state.

## Read-only endpoints

Liveness, readiness, platform status, plugin lists, and plugin details read current in-memory state.
They do not repair plugins or return configuration values. Configuration schemas show field names
and types but omit secret values and secret defaults.

## Protected operations

Plugin API routes and start, stop, and restart operations use the backend's management
authentication. `available_actions` tells the console what makes sense for the current state; it is
not permission to perform the action. The backend authenticates and checks every request again.

## Local development

Anonymous management is available only in development or test mode while the backend is bound to a
loopback address. Configure exact CORS origins. Use this mode on a trusted workstation, not on a
shared server.

## Production proxy authentication

Production requires:

- a trusted proxy network with a limited address range;
- an operator identity header accepted only from that proxy;
- a strong shared secret between the proxy and backend;
- network configuration that preserves the proxy's direct TCP address.

The backend refuses to start when this configuration is incomplete. Interactive API documentation
is disabled in production.

## Browser and plugin trust

The frontend stores no management secret. Browser build variables are public. A production proxy
authenticates the operator and adds identity on the server.

Plugins run as trusted Python code inside the backend process. Review a plugin before installing it;
ReliaForge does not isolate malicious plugin code.

The [online demo](https://demo.reliaforge.dev/) has no backend and sends no management requests.
Report suspected vulnerabilities privately using the repository's `SECURITY.md`.

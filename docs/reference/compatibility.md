# Compatibility and versioning

ReliaForge starts with a deliberately small public compatibility surface.

## Plugin API version

The initial runtime accepts `api_version: "v1"`. Unsupported versions are rejected during manifest
validation before entry-point import.

## Plugin dependencies

Dependencies use an object containing a plugin ID and accepted SemVer range. The complete graph is
validated for missing providers, incompatible versions, and cycles before imports begin.

Provider plugin SemVer is the capability compatibility boundary. Service registrations do not carry
a second independent version.

## Management API

The console consumes `/api/v1`. Runtime response parsers reject unknown lifecycle states, health
states, actions, or malformed summaries at the browser boundary. Backend model and frontend parser
changes should land together and pass the cross-repository contract check.

## Settings

Plugin settings use the canonical `RELIAFORGE_<PLUGIN_ID>_` prefix and `__` nested delimiter. Restart
reconstructs settings for the already loaded plugin; it does not reload Python source or a manifest
from disk.

## No legacy plugin promise

The public project began with the current manifest, dependency, capability, and Settings contracts.
It does not carry compatibility shims for earlier private plugin formats. Compatibility is added only
for a published public contract with real adopters and an explicit migration path.

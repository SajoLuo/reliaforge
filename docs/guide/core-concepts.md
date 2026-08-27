# Core concepts

ReliaForge keeps a small set of contracts explicit so a plugin workspace remains inspectable as it
grows.

## Manifest before import

Every plugin starts with `manifest.json`. ReliaForge validates all identities, API versions,
dependencies, version ranges, cycles, and capability owners before importing any plugin entry point.
One invalid branch can be isolated without hiding independent, valid plugins.

## Lifecycle state and health are different

Lifecycle state answers what the runtime has done:

```text
discover -> validate -> initialize -> start -> stop
```

Health answers whether a loaded plugin is currently healthy, degraded, in error, or stopped. A
plugin never changes lifecycle state to `degraded`; that condition belongs to its side-effect-free
health snapshot.

## Capabilities, not implementation imports

A provider registers a dotted capability such as `demo.greeting`. A consumer declares the provider
dependency and resolves the service through a caller-owned runtime protocol. Plugins do not import
one another's internal modules.

This preserves three useful properties:

- the manifest dependency graph remains authoritative;
- a consumer depends on behavior rather than a concrete class;
- provider cleanup can remove only resources that provider owns.

## Settings have one source

Each plugin may declare a Python `PluginSettings` subclass. The runtime validates environment input,
injects one settings instance, and derives the public JSON schema shown by the console. Secret values
are excluded from catalog responses and error messages.

## Actions are server-owned

Catalog records include `available_actions`. The runtime derives this list from the actual instance,
state, dependencies, and active dependents. Clients render it but never infer lifecycle transitions
or treat it as authorization.

The hosted demo supplies an empty list for every plugin. That is why it contains no start, stop, or
restart controls without maintaining a second UI policy.

## In-process extensions, not a sandbox

Plugins are trusted Python extensions inside one process. ReliaForge provides ownership, validation,
timeouts, and cleanup boundaries, but it is not a security sandbox for untrusted code.

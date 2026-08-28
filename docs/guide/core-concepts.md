# Core concepts

These five ideas explain how ReliaForge runs plugins.

## A metadata file describes each plugin

Every plugin has a `manifest.json` with its ID, version, dependencies, services, and Python entry
point. ReliaForge checks all metadata before it imports plugin code. A broken plugin and anything
that depends on it are reported without hiding unrelated plugins.

## Run state and health answer different questions

Run state tells you what ReliaForge has done:

```text
discover -> validate -> initialize -> start -> stop
```

Health tells you whether a loaded plugin is healthy, degraded, in error, or stopped. Health checks
read current in-memory state; they do not repair external systems.

## Plugins share named services

A plugin can publish a service under a name such as `demo.greeting`. Another plugin lists that
provider as a dependency and asks ReliaForge for the service. It does not import the provider's
private Python modules.

## One settings class defines configuration

A plugin's Python `PluginSettings` class reads environment variables and defines the configuration
fields shown in the console. Secret values and secret defaults are not returned by catalog APIs.

## The backend decides which actions are available

Each plugin record returned by the management list and detail APIs includes `available_actions`.
The backend calculates this list from the plugin's current state and dependencies. The console
displays the list; the API still authenticates and checks every request when an operator clicks an
action.

Plugins run as trusted Python code inside the backend process. Only install plugins you have
reviewed.

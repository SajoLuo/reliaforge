# Core concepts

ReliaForge runs Python operations tools as plugins. Developers supply the tools; the platform loads
them, checks dependencies, reads configuration, and manages their start and stop operations.

## What is a plugin?

A plugin is a directory containing Python code and a `manifest.json` file. The file gives
ReliaForge the plugin's name, version, entry point, and dependencies.

The code can provide a query API, collect data in the background, or run a runbook service. The
author decides what it does. The [plugin tutorial](./plugin-development.md) shows how to turn a
Python function into an API your team can call.

## What happens when I start it?

The backend checks the plugin's settings, prepares its resources, and calls its startup code.
Dependencies must be running first. Stopping it calls the author's cleanup code, such as closing
clients and ending background tasks.

The console shows two kinds of status:

| Status | What it tells you |
| --- | --- |
| Run state | Whether the plugin is running, stopped, or has encountered an error |
| Health | Whether the running service reports a problem; a running plugin can report degraded health |

Starting a plugin makes its service available. To perform a query or another business operation,
call the service's API.

## How do I use its service?

Each plugin defines its own API under `/api/v1/plugins/{plugin_id}`. Follow the author's usage
instructions for its endpoints, parameters, and responses. In local development, you can also
browse the APIs at `http://127.0.0.1:8000/api/v1/docs`.

The console shows plugin status and start and stop controls. A plugin's business interface is
provided by its author.

## How do plugins work together?

A plugin can share a Python service with other plugins. For example, `demo` shares
`demo.greeting`; the bundled `runbook` plugin uses it to build a text preview.

The provider lists the service name in `capabilities`. A consumer lists the provider in
`dependencies` before requesting the service. These fields describe cooperation between plugins;
HTTP endpoints are defined in the plugin's router.

## Where do I configure a plugin?

Set the plugin's environment variables before starting the backend. Its `PluginSettings` class
defines the accepted fields. For example, the generated `sample_tool` reads its message from
`RELIAFORGE_SAMPLE_TOOL_MESSAGE`.

The console shows field definitions, including types and defaults, rather than current values.
Secret values and secret defaults are omitted. See the backend's
[configuration examples](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/plugin-development.md)
when adding settings to your own plugin.

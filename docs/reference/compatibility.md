# Versions and API

This page lists the version rules used by the current release.

## Plugin API

Set `api_version` to `"v1"` in `manifest.json`. The backend rejects other values before it imports
the plugin's Python entry point.

## Plugin dependencies

Each dependency contains a plugin ID and an accepted SemVer range. Before importing plugins, the
backend checks for missing providers, incompatible versions, and dependency cycles.

The provider plugin's SemVer describes the version of the services it publishes.

## Management API

The console uses `/api/v1`. When an API response changes, update the backend model and frontend
parser together, then run the cross-repository API check.

## Settings and restart

Plugin environment variables use the `RELIAFORGE_<PLUGIN_ID>_` prefix and `__` for nested fields.
Restart reads settings again for the loaded plugin. Restart the backend process after changing
Python source or `manifest.json`.

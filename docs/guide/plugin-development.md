# Develop a plugin

Start with a Python function your team needs, then give it an API through ReliaForge. The backend's
[step-by-step tutorial](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/plugin-development.md)
uses a function that looks up a service's owning team. It includes complete files you can copy.

## What you will build

After following the tutorial, you can call:

```bash
curl "http://127.0.0.1:8000/api/v1/plugins/sample_tool/owner?service_name=payments"
```

The response is:

```json
{"service": "payments", "team": "payments-ops"}
```

The example uses two preset records so you can try it locally without connecting another system.

## Which files do I change?

First follow [Getting started](./getting-started.md) to generate `sample_tool`. Then:

| Step | File or setting | What to do |
| --- | --- | --- |
| Add your function | `ownership.py` | Put the team lookup function here |
| Add an API | `router.py` | Read the query parameter, call the function, and return JSON |
| Load the plugin | `RELIAFORGE_PLUGIN_PATHS` | Point to the parent directory and restart the backend |
| Share it with users | The plugin's `README.md` | Give them the URL, parameters, responses, and authentication instructions |

The generated plugin already handles startup and shutdown. You can keep those files for this
example. See the [complete tutorial and runtime rules](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/plugin-development.md)
for the code and for what changes when a tool owns clients or background tasks.

## How do I know it works?

Check the successful lookup, an unknown service, and the endpoint after stopping the plugin. They
should return HTTP `200`, `404`, and `503`. Starting it again should restore the successful lookup.

In local development, open `http://127.0.0.1:8000/api/v1/docs` to find and try the new endpoint.
The console shows the plugin's status and start and stop controls.

## Share the plugin

Give the deployment maintainer the plugin directory, its Python dependency requirements, and a
README. The maintainer installs those requirements, adds the directory to the backend's plugin
search paths, and restarts the backend. The README should explain how users authenticate before
calling the API in that deployment.

The bundled [demo](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/demo) and
[runbook](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/runbook) plugins
also show how one plugin can call another plugin's shared Python service.

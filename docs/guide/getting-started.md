# Getting started

This guide takes you from a clean checkout to a running ReliaForge instance, two working example
plugins, and a scaffold for your first plugin. If you only want to see the interface, open the
[hosted demo](https://demo.reliaforge.dev/) instead.

## Requirements

- Python 3.11 or newer for the backend;
- Node.js 20 or newer and npm 10 or newer for frontend development;
- Git.

## 1. Start the backend

Clone the backend and create an isolated environment:

```bash
git clone https://github.com/SajoLuo/reliaforge-backend.git
cd reliaforge-backend
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -e ".[dev]"
cp .env.example .env
reliaforge
```

On Windows PowerShell, activate the environment with `.venv\Scripts\Activate.ps1`.

The development server binds to `127.0.0.1` by default.

## 2. Check what the platform loaded

Keep the backend running. In another terminal, query its status, plugin list, and example APIs:

```bash
curl http://127.0.0.1:8000/api/v1/status
curl http://127.0.0.1:8000/api/v1/plugins
curl http://127.0.0.1:8000/api/v1/plugins/demo/greeting
curl http://127.0.0.1:8000/api/v1/plugins/runbook/preview
```

The first two requests show backend status and loaded plugins. The other requests call the plugins'
own services: `demo` returns a greeting, and `runbook` returns a text preview using that greeting.
They demonstrate two services and a dependency; neither runs external commands or changes systems.

## 3. Create a plugin from the scaffold

Stop the backend with Ctrl+C, then generate and load a plugin:

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
RELIAFORGE_PLUGIN_PATHS=./local-plugins reliaforge
```

In PowerShell, replace the last line with:

```powershell
$env:RELIAFORGE_PLUGIN_PATHS = "./local-plugins"
reliaforge
```

The command creates `local-plugins/sample_tool/`. The path variable points to `local-plugins`,
the directory containing your plugins.

Keep this backend running and call the new plugin from the other terminal:

```bash
curl --fail http://127.0.0.1:8000/api/v1/plugins/sample_tool/message
```

Expected response:

```json
{"message": "Generated plugin is running", "plugin_id": "sample_tool"}
```

You now have a working plugin. Next, follow [Develop a plugin](./plugin-development.md) to add a
function that looks up a service's owning team and an API that calls it.

## 4. Add the console when you need it

Open another terminal in the parent of `reliaforge-backend`, then run:

```bash
git clone https://github.com/SajoLuo/reliaforge-frontend.git
cd reliaforge-frontend
cp .env.example .env
npm ci
npm run dev
```

Open `http://127.0.0.1:5530` to see the plugin list. Browser configuration is visible to visitors;
keep API keys and proxy secrets in the backend or proxy.

## 5. Choose your next step

| Experience | Data source | Can start or stop plugins | Best for |
| --- | --- | --- | --- |
| [Hosted demo](https://demo.reliaforge.dev/) | Saved example data | No | Looking around before installing anything |
| Local development | Your local Python process | Yes, in development mode | Building and testing plugins |
| Production deployment | Your team's backend | Yes, after authentication | Running the team's plugins |

Before a production deployment, read the [security model](../reference/security.md) and
[console deployment](./deploying-console.md) guidance.

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
reliaforge
```

On Windows PowerShell, activate the environment with `.venv\Scripts\Activate.ps1`.

The development server binds to `127.0.0.1` by default.

## 2. Check what the platform loaded

Query the backend, plugin list, and the two bundled examples:

```bash
curl http://127.0.0.1:8000/api/v1/status
curl http://127.0.0.1:8000/api/v1/plugins
curl http://127.0.0.1:8000/api/v1/plugins/demo/greeting
curl http://127.0.0.1:8000/api/v1/plugins/runbook/preview
```

The first two requests show whether the backend started and which plugins loaded. The remaining
requests call a greeting plugin and a runbook-preview plugin. These examples perform no network,
database, filesystem, or command side effects.

## 3. Create a plugin from the scaffold

Use the scaffold rather than copying an example by hand:

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
RELIAFORGE_PLUGIN_PATHS=./local-plugins reliaforge
```

The scaffold creates the metadata file, settings, start and stop hooks, router, service, models, and
tests. `RELIAFORGE_PLUGIN_PATHS` tells the backend where to find your
local plugin without copying it into the ReliaForge source tree.

Continue with [Develop a plugin](./plugin-development.md) when you are ready to replace the starter
behavior with a real operations task.

## 4. Add the console when you need it

In another terminal:

```bash
git clone https://github.com/SajoLuo/reliaforge-frontend.git
cd reliaforge-frontend
cp .env.example .env
npm ci
npm run dev
```

Open `http://127.0.0.1:5530`. The console is optional and works through the backend API. Anything
injected into the browser build can be read by users, so never put API keys or proxy secrets there.

## 5. Choose your next step

| Experience | Data source | Can start or stop plugins | Best for |
| --- | --- | --- | --- |
| [Hosted demo](https://demo.reliaforge.dev/) | Saved example data | No | Looking around before installing anything |
| Local development | Your local Python process | Yes, in development mode | Building and testing plugins |
| Production deployment | Your approved backend | Yes, behind management authentication | Running the team's plugins |

Before a production deployment, read the [security model](../reference/security.md) and
[console deployment](./deploying-console.md) guidance.

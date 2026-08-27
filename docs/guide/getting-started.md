# Getting started

ReliaForge is split into a Python runtime and an optional React console. Start with the backend to
exercise real plugin discovery and lifecycle behavior; open the hosted demo when you only want to
inspect the interface.

## Requirements

- Python 3.11 or newer for the backend;
- Node.js 20 or newer and npm 10 or newer for frontend development;
- Git.

## Run the backend

Clone the public runtime and create an isolated environment:

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

The development server binds to `127.0.0.1` by default. Inspect the runtime and catalog:

```bash
curl http://127.0.0.1:8000/api/v1/status
curl http://127.0.0.1:8000/api/v1/plugins
curl http://127.0.0.1:8000/api/v1/plugins/demo/greeting
curl http://127.0.0.1:8000/api/v1/plugins/runbook/preview
```

The bundled examples perform no network, database, filesystem, or command side effects.

## Create a plugin

Use the scaffold rather than copying an example by hand:

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
RELIAFORGE_PLUGIN_PATHS=./local-plugins reliaforge
```

The generated package follows the same manifest, settings, lifecycle, router, and test boundaries as
the bundled examples. Continue with [Develop a plugin](./plugin-development.md).

## Run the optional console

In another terminal:

```bash
git clone https://github.com/SajoLuo/reliaforge-frontend.git
cd reliaforge-frontend
cp .env.example .env
npm ci
npm run dev
```

Open `http://127.0.0.1:5530`. Build-time browser variables are public and must never contain API
keys or proxy secrets.

## Choose the right experience

| Experience | Backend | Lifecycle writes | Purpose |
| --- | --- | --- | --- |
| [Hosted demo](https://sajoluo.github.io/reliaforge-frontend/) | Static snapshots | No | Explore the real console immediately |
| Local development | Local Python process | Development-only boundary | Build and test plugins |
| Production deployment | Trusted server-side boundary | Authenticated and revalidated | Operate an approved plugin workspace |

Before a production deployment, read the [security model](../reference/security.md) and
[console deployment](./deploying-console.md) guidance.

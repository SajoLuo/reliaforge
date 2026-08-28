# Deploy the console

The React console is optional. It reads plugin status from the backend and sends authenticated
start, stop, and restart requests.

## Local development

Copy the example configuration and start the development server:

```bash
cp .env.example .env
npm ci
npm run dev
```

Set `VITE_RELIAFORGE_API_URL` to the backend origin when the frontend and backend use different
origins. The frontend appends `/api/v1`. If the variable is absent, it calls same-origin `/api/v1`.

Add the exact frontend origin to the backend CORS allowlist for local development.

## Production build

```bash
npm ci
npm run build
```

Serve the generated static files from the origin root. Configure the web server to return
`index.html` for application routes, proxy `/api/v1` to the backend, and authenticate management
requests on the server.

Never put API keys or shared secrets in a `VITE_*` variable. Those values are included in public
browser files.

## Read-only demo build

```bash
npm run build:demo
```

This build uses hash routes and saved example data. It is the build used by
`demo.reliaforge.dev`; it has no backend and cannot prove that lifecycle operations work.

## Production authentication

In proxy authentication mode, the backend accepts operator identity only from a configured trusted
peer that also supplies the shared proxy secret. An invalid production configuration prevents the
backend from starting.

Read the [security model](../reference/security.md) before exposing the console. Frontend build and
test commands are in the
[frontend repository](https://github.com/SajoLuo/reliaforge-frontend).

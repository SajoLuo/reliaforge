# Deploy the console

The React console is optional. It consumes public catalog/status reads and authenticated lifecycle
writes but does not carry an operator credential of its own.

## Local cross-origin development

Copy the example environment file and set the backend origin:

```bash
cp .env.example .env
npm ci
npm run dev
```

The only supported browser build variable is `VITE_RELIAFORGE_API_URL`. The frontend appends
`/api/v1`; when the variable is absent it uses same-origin `/api/v1`.

The backend CORS allowlist must contain the exact development frontend origin. Wildcards are
rejected, and production should use a same-origin reverse-proxy boundary instead.

## Normal production build

```bash
npm ci
npm run build
```

The normal artifact assumes origin-root hosting and uses browser history routing. A reverse proxy
should serve the static files, route application navigation to `index.html`, proxy `/api/v1`, and
authenticate management requests on the server side.

Do not place a shared secret or API key in a `VITE_*` variable. Vite embeds those values into public
browser assets.

## Hosted read-only demo build

The frontend repository also owns a separate build:

```bash
npm run build:demo
```

That artifact targets `/reliaforge-frontend/`, uses hash routing, and selects validated static data.
It is designed for GitHub Pages and must never be used as evidence that lifecycle writes or a backend
deployment are working.

## Production trust boundary

The backend's proxy authentication mode requires a trusted direct peer, an injected operator identity,
and a strong shared secret held by the server-side proxy. Invalid production configuration prevents
startup. See [Security model](../reference/security.md) before exposing a console.

Frontend-specific contribution and verification commands remain in the
[frontend repository](https://github.com/SajoLuo/reliaforge-frontend).

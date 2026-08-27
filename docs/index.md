---
layout: home

hero:
  name: ReliaForge
  text: Small plugins. Clear boundaries.
  tagline: Build inspectable operations tooling on a typed Python runtime, then manage it through an optional, generic web console.
  image:
    src: /mark.svg
    alt: ReliaForge
  actions:
    - theme: brand
      text: Explore the demo
      link: https://sajoluo.github.io/reliaforge-frontend/
    - theme: alt
      text: Read the guide
      link: /guide/getting-started
    - theme: alt
      text: Backend source
      link: https://github.com/SajoLuo/reliaforge-backend
    - theme: alt
      text: Frontend source
      link: https://github.com/SajoLuo/reliaforge-frontend

features:
  - icon: 🧩
    title: Manifest-first plugins
    details: Identity, dependencies, capabilities, and compatibility are validated before plugin code is imported.
  - icon: 🔁
    title: Explicit lifecycle
    details: Initialization, start, health, stop, and dependency ordering stay visible and testable.
  - icon: 🧭
    title: Generic console
    details: The optional React UI discovers plugins from the API instead of carrying a hard-coded business catalog.
  - icon: 🔐
    title: Deliberate trust boundary
    details: Public reads stay separate from authenticated management actions, and the browser holds no management secret.
  - icon: 🧰
    title: Typed extension points
    details: Python Settings, capability protocols, and versioned API models make plugin contracts inspectable.
  - icon: 🪶
    title: Intentionally small
    details: No bundled monitoring stack, durable queue, plugin marketplace, or hidden infrastructure dependency.
---

<section class="home-section">

## A platform, not a preselected tool catalog

ReliaForge supplies the runtime contracts that small operations plugins usually rebuild: discovery,
dependency validation, lifecycle management, typed settings, health snapshots, service sharing, and
a versioned management API. Your plugins supply the domain behavior.

<div class="boundary-grid">
  <div class="boundary-card"><strong>Backend</strong>Python runtime, manifests, dependency graph, lifecycle, API, and plugin scaffold.</div>
  <div class="boundary-card"><strong>Frontend</strong>An optional catalog and detail console generated from backend-owned contracts.</div>
  <div class="boundary-card"><strong>Your plugins</strong>Focused capabilities and routes that remain independently understandable.</div>
</div>

</section>

<section class="home-section">

## Try the real interface safely

The [online demo](https://sajoluo.github.io/reliaforge-frontend/) runs the production React interface
against validated static snapshots of ReliaForge's two neutral example plugins. It is clearly
read-only, sends no management API requests, and does not pretend to execute lifecycle transitions.

For the complete runtime, follow the [local quick start](./guide/getting-started.md).

</section>

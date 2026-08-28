---
layout: home

hero:
  name: Open-source tools for SRE teams
  text: Turn scripts into<br>managed plugins.
  tagline: Run Python scripts and runbooks behind one backend. ReliaForge loads them, starts dependencies in order, reports health, and gives operators one place to inspect and control them.
  image:
    src: /console-preview.png
    alt: ReliaForge console showing plugin status and health
  actions:
    - theme: brand
      text: Try the demo
      link: https://demo.reliaforge.dev/
    - theme: alt
      text: Get started
      link: /guide/getting-started

heroPreview:
  src: /console-preview.png
  alt: ReliaForge console showing plugin status and health
  href: https://demo.reliaforge.dev/
  label: Open the read-only ReliaForge demo

features:
  - title: Start with a working structure
    details: Generate a plugin with settings, health checks, API routes, lifecycle hooks, and tests already in place.
  - title: Know what is running
    details: See which plugins loaded, whether they are healthy, what they depend on, and which actions are currently available.
  - title: Keep failures contained
    details: A broken plugin blocks its dependents while unrelated plugins and the management API stay available.
  - title: Add tools without adding services
    details: Put several small operations tools behind one Python backend and one optional console.
---

<section class="home-section">

<p class="section-kicker">WHY RELIAFORGE</p>

## Stop rebuilding the same operations service

Small internal tools often need the same supporting code: configuration, health checks, dependency
handling, authentication, start and stop controls, and a UI. ReliaForge provides that shared code.
Each plugin contains the operation your team needs.

<div class="boundary-grid">
  <div class="boundary-card"><strong>Backend</strong>Loads plugins, checks dependencies, manages start and stop, and exposes the API.</div>
  <div class="boundary-card"><strong>Plugin</strong>Contains one operations task, its settings, API routes, health check, and tests.</div>
  <div class="boundary-card"><strong>Console</strong>Shows current status and the actions the backend allows.</div>
</div>

</section>

<section class="home-section home-demo">

<p class="section-kicker">SEE IT FIRST</p>

## Explore the console before installing anything

The [online demo](https://demo.reliaforge.dev/) shows the production React interface with saved data
from two example plugins. It has no backend and cannot start or stop plugins. Follow the
[local quick start](./guide/getting-started.md) when you want to try those operations.

</section>

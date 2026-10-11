<p align="center"><img src="./banner.svg" alt="ModelPulse — Your AI. In sight." width="100%"></p>

<h1 align="center">ModelPulse</h1>
<p align="center"><a href="./README.md">中文</a> | <strong>English</strong></p>
<p align="center"><strong>See every pulse of your AI.</strong><br>A modular, real-time LLM monitoring workspace designed for Windows.</p>
<p align="center">
  <img src="https://img.shields.io/badge/Windows-10%20%2F%2011-627650?style=flat-square" alt="Windows">
  <img src="https://img.shields.io/badge/Desktop-Planned-a1b783?style=flat-square" alt="Desktop app planned">
  <img src="https://img.shields.io/badge/Website-Live-627650?style=flat-square" alt="Website live">
</p>
<p align="center"><a href="https://modelpulse.grandgoose64.chatgpt.site/">Visit the website ↗</a> · <a href="#a-modular-workspace-built-around-you">Modular widgets</a> · <a href="#floating-windows-that-follow-your-work">Floating windows</a> · <a href="#development-roadmap">Roadmap</a></p>

> **Project status:** This repository contains the live marketing website and interactive demos. The native desktop application is still in the planning stage; no installer is available. All metrics, charts, and product interfaces shown are conceptual demos using sample data.

## Everything in view

ModelPulse aims to bring model usage information from different platforms into one lightweight, clear, customizable Windows workspace. From token usage and generation speed to cost estimates and context usage, it helps you understand each call at a glance.

<p align="center"><img src="./preview.png" alt="Concept preview of the ModelPulse dashboard and floating widget" width="100%"><br><sub>Product concept · Sample data · The final desktop implementation may change</sub></p>

| Usage | Performance | Cost | Status |
| :--- | :--- | :--- | :--- |
| Input / output tokens and cumulative usage | Generation speed and request duration | Estimates based on available usage and pricing | Model, connection, and context information |

These are planned capabilities. Data availability depends on the platform and integration method.

## A modular workspace built around you

**Combine the information you need. Shape the interface around the way you work.**

- **Mix and match:** Add token, speed, cost, context, and other widgets as needed.
- **Independent settings:** Configure each widget's data source, content, and appearance.
- **Layout presets:** Save different monitoring views for coding, writing, and analysis.
- **Room to grow:** A shared widget model will support future metrics and integrations.

The website already includes interactive demos for selecting and reordering widgets and switching between workflow presets.

## Floating windows that follow your work

Bring essential widgets onto your desktop and keep the information you care about in sight.

| Planned capability | Experience |
| :--- | :--- |
| Always on top, movable, and resizable | Place your monitor wherever it works best |
| Compact / expanded views | Switch between simple readings and more detail |
| Opacity and light / dark appearance | Fit different desktops and work environments |
| Click-through mode | View metrics with less interference with your work |
| Multiple displays and DPI scaling | Keep widgets clear across screens |
| Shortcuts, tray controls, and startup settings | Quickly bring up your workspace |

The website demonstrates compact and expanded views, opacity, and light / dark appearance. System features such as always-on-top and click-through behavior will be implemented in the native application.

## Every number has a source

Clear data provenance is a core design principle.

| Source | Presentation |
| :--- | :--- |
| Explicit API or client reports | Label as reported data and retain its source |
| Tokenizer calculations | Clearly label as estimates |
| Inferences from available information | Explain the basis and limitations |
| Unavailable data | Show as unavailable; never fabricate readings |

Cumulative tokens are not the same as current context usage. Cost estimates are not actual bills. The plan prioritizes local processing and storage, with clear data management options.

### Integration directions

Planned integrations include direct API calls, an optional local proxy, accessible logs or reports from official clients, and local tokenizer estimates. Platform support will be announced after implementation and validation.

## Current progress

- [x] Minimal marketing website with public access
- [x] Responsive layout, mobile navigation, and FAQ
- [x] Widget selection, reordering, and workflow demos
- [x] Floating window appearance and opacity demo
- [x] Animated charts, scroll animations, and reduced-motion support
- [ ] Native Windows desktop application
- [ ] Real data integrations, persistence, and pricing rules
- [ ] Installer, updates, and release workflow

## Preview the website locally

With Node.js installed, run:

```sh
git clone https://github.com/Xiaoheixu/ModelPulse.git
cd ModelPulse
node server.cjs
```

Open the [local preview](http://127.0.0.1:4173) in your browser. The website uses plain HTML, CSS, and JavaScript; no npm dependencies are required.

```text
ModelPulse/
├── index.html      Page content and interactive structure
├── style.css       Responsive styles and animations
├── app.js          Demo data and page interactions
├── server.cjs      Local preview server
├── banner.svg      README brand banner
├── preview.png     Product concept preview
├── README.md       Chinese introduction and roadmap
└── README.en.md    English introduction and roadmap
```

## Development roadmap

The desktop application is planned in the following stages. This roadmap does not indicate completed work or promise release dates.

1. **Foundation:** Windows application framework and layered architecture.
2. **Core models:** Sessions, metrics, data sources, and storage.
3. **Widget system:** Independent settings and composable monitoring views.
4. **Floating windows:** Always-on-top behavior, sizing, opacity, and desktop interaction.
5. **Layout editor:** Compose, save, and reuse workspaces.
6. **Real APIs:** Usage, request duration, and pricing rules.
7. **Local proxy:** An optional entry point for observing requests.
8. **Client integrations:** Validate access methods against each platform's capabilities.
9. **Release and polish:** Testing, performance, installation, and updates.

<details>
<summary><strong>Planned desktop technology stack</strong></summary>

- C#, WinUI 3, and a compatible .NET version
- MVVM and Generic Host service management
- SQLite for local storage
- HttpClient and an optional YARP proxy
- JSON configuration, structured logging, and appropriate automated tests

Core logic will be separate from the UI, with the main window and floating windows sharing the same metric state.

</details>

## Join the discussion

Share use cases, widget ideas, or website issues through [Issues](https://github.com/Xiaoheixu/ModelPulse/issues). Remove API keys and sensitive logs before reporting integration problems.

---

<p align="center"><strong>Your AI. In sight.</strong><br><sub>Native desktop app planned · Website live</sub><br><a href="https://modelpulse.grandgoose64.chatgpt.site/">ModelPulse website ↗</a></p>

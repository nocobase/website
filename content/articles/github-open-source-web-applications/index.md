Over the past few weeks, we’ve shared several popular GitHub collections featuring the most-starred open source projects—and they’ve received tons of likes and bookmarks. Many developers asked us to cover more categories, and we’re happy to continue the series.

Some of our previous lists include:

* [Top 40 Open-source Developer Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 Fastest-Growing Open-Source Low-Code Projects on GitHub in 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [Top 11 Open-source CRM Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
* [Top 11 Open-Source Admin Dashboard Projects on GitHub](https://www.nocobase.com/en/blog/top-11-open-source-admin-dashboard-projects-on-github)

In this post, we’re focusing on **Web Applications**. We searched through the [web-application](https://github.com/topics/web-application) and [web-app](https://github.com/topics/web-app) GitHub topics, and picked projects with **over 10,000 stars** and a clear use case. These include platforms for publishing, data visualization, low-code app building, and more.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. →[ Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---



To help you quickly understand and evaluate each project, we’ve broken down the analysis into three simple parts:

* **What it does** – What problem does the project solve, and who is it for?
* **How to use it** – Is it easy to deploy and test?
* **How it’s built** – What’s the tech stack, and is it easy to extend or learn from?

If you’re new to web development or looking for tools that can speed up your workflow, check out this beginner-friendly guide we published earlier:

[Discover Top Tools: Accelerate Web Application Development](https://www.nocobase.com/en/blog/web-application-development)

Now, let’s dive into 7 open source web apps that really stand out.

## No.1: [Ghost](https://ghost.org/)

![Ghost](https://static-docs.nocobase.com/1-9uy667.PNG)

GitHub：https://github.com/TryGhost/Ghost

GitHub Star：49.8k

License：[MIT](https://github.com/TryGhost/Ghost?tab=MIT-1-ov-file#)

### What it does

* **Professional publishing platform**: Ideal for blogs, newsletters, and long-form content, with a rich text editor and media manager.
* **Memberships and paid subscriptions**: Gate content and monetize via Stripe-powered subscriptions.
* **Built-in email marketing**: Turn posts into newsletters and engage your audience directly.

### How to use it

Official Docker images and CLI tools are available. Easily deploy on a VPS, services like DigitalOcean, or choose Ghost(Pro) for a managed setup.

### How it’s built

Back end: Node.js + Express

Front end: Handlebars templating

Default database: SQLite, configurable to MySQL/PostgreSQL. Theme and API development supported.

## No.2: [Dash](https://plotly.com/dash/)

![dash](https://static-docs.nocobase.com/2-oghcze.png)

GitHub：https://github.com/plotly/dash

GitHub Star：23.3k

License：[MIT](https://github.com/plotly/dash?tab=MIT-1-ov-file#)

Data Apps & Dashboards for Python. No JavaScript Required.

### What it does

* **Interactive apps with zero JavaScript**: Build complex dashboards using pure Python.
* **Full analytics-to-app pipeline**: Turn data insights into usable internal or public-facing tools.
* **Rich community components**: Backed by Plotly and React; includes charts, filters, tables, and more.

### How to use it

Dash apps run in any Python environment, deployable via Flask, Docker, Heroku, Render, and others.

### How it’s built

Python (Flask) + React, connected via JSON bridge for UI interaction. Clean architecture suited for prototyping or production.

## No.3: [Wasp](https://wasp.sh/)

![wasp](https://static-docs.nocobase.com/4-twi7vk.png)

GitHub：https://github.com/wasp-lang/wasp

GitHub Star：17.3k

License：[MIT](https://github.com/wasp-lang/wasp#)

### What it does

* **Define full-stack apps with a DSL**: Describe pages, routes, auth flows in Wasp's own syntax.
* **Batteries-included stack**: Uses React, Node.js, Prisma, and PostgreSQL by default.
* **Built-in user management**: Auth and roles are generated with minimal code.

### How to use it

Supports local and cloud deployment (e.g., Railway, Render). Wasp CLI handles dev, build, and DB migrations.

### How it’s built

DSL → generates React (frontend) + Node.js/Prisma (backend). Architecture separates concerns cleanly.

## No.4: [NocoBase](https://www.nocobase.com/)

![nocobase](https://static-docs.nocobase.com/5-rfm0yb.png)

GitHub：https://github.com/nocobase/nocobase

GitHub Star：16.1k

License：[AGPL-3.0](https://github.com/nocobase/nocobase/blob/main/LICENSE-AGPL.txt)

### What it does

* **Plugin-based low-code framework**: Every core function (data modeling, access control, workflows, UI, etc.) is a plugin. Enable, disable, or extend as needed.
* **Data-model driven**: Visually create and relate tables, define business models, and integrate external APIs or databases.
* **Enterprise-ready features**: Role-based permissions, approval flows, field-level controls—ideal for building custom CRMs, HR, ERP systems.

### How to use it

Supports Docker one-click deployment or local development. Comprehensive docs and a growing developer community.

### How it’s built

Front end: React + Umi + Ant Design

Back end: Node.js (Koa) + Sequelize

The plugin system extends across both layers.

## No.5: [DocsGPT](https://app.docsgpt.cloud/)

![DocsGPT](https://static-docs.nocobase.com/6-i32r0j.png)

GitHub：https://github.com/arc53/DocsGPT

GitHub Star：15.9k

License：[MIT](https://github.com/arc53/DocsGPT?tab=MIT-1-ov-file#)

### What it does

* **AI-powered document Q&A**: Semantic search + GPT chat on your own document set.
* **Supports private/internal docs**: Great for tech support or internal knowledge base.
* **Model and vector DB flexibility**: Compatible with various LLMs and embedding models.

### How to use it

Runs locally or via Docker. Includes model server, embedding pipeline, and a UI—easy to self-host.

### How it’s built

Frontend: Next.js

Backend: FastAPI + FAISS + LLM

APIs coordinate front-back communication.

## No.6: [marimo](https://marimo.io/)

![marimo](https://static-docs.nocobase.com/7-xpsq5j.png)

GitHub：https://github.com/marimo-team/marimo

GitHub Star：14.3k

License：[Apache-2.0](https://github.com/marimo-team/marimo?tab=Apache-2.0-1-ov-file#)

### What it does

* **Interactive Python notebooks reimagined**: Combines Markdown, code, charts, and variable bindings.
* **Better maintainability**: Clearer file structure and version control.
* **Live variable updates**: Designed for frontend-like experiences in a Python environment.

### How to use it

Install via `pip`, run a local server. Can also be hosted remotely for team access.

### How it’s built

Python backend with WebSocket support. Frontend is a modern single-page app.

## No.7: [Revel](http://revel.github.io/)

![revel](https://static-docs.nocobase.com/8-shwsvk.png)

GitHub：https://github.com/revel/revel

GitHub Star：13.2k

License：[MIT](https://github.com/revel/revel?tab=MIT-1-ov-file#)

### What it does

* **Full-stack framework for Go** – Built-in routing, MVC, sessions, validation, and caching.
* **Rails-like DX for Go devs** – Includes hot reload and dev tools.
* **Multi-environment support** – Development, test, and production configurations built in.

### How to use it

Uses Go's tooling for build and deployment. Docker- and CI/CD-friendly. CLI included.

### How it’s built

Built on Go's native HTTP server. MVC pattern with extensible plugin/template system.

## Summary

These 7 open source web applications stand out not just for their popularity, but for solving real problems with clean architectures and strong community support. Here’s a quick recap:

* **Ghost** – A modern CMS for content creation and monetization
* **Dash** – Build interactive data apps in Python with no JS
* **Wasp** – Define full-stack apps using a simple DSL
* **NocoBase** – A plugin-driven low-code platform for enterprise apps
* **DocsGPT** – A local AI assistant for your documentation
* **marimo** – A modern alternative to Jupyter for interactive Python apps
* **Revel** – A full-featured web framework for Go developers

If any of these projects caught your attention, give them a star, try a local deploy, or share your thoughts in the comments. We’ll keep sharing handpicked open source projects—stay tuned for more!

**Related reading:**

* [Top 40 Open-source Developer Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 Fastest-Growing Open-Source Low-Code Projects on GitHub in 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [Top 11 Open-source CRM Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
* [Top 11 Open-Source Admin Dashboard Projects on GitHub](https://www.nocobase.com/en/blog/top-11-open-source-admin-dashboard-projects-on-github)
* [Top 10 Open-source Workflows Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/top-10-open-source-workflows-projects-with-the-most-github-stars)
* [Top 4 Open-source App Builder Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/app-builder-tools)

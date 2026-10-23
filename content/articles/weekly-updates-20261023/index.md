Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.31

*Release date: 2026-10-23*

### 🚀 Improvements

- **[server]** Allow the snowflake worker id to be rebound while the application is running. ([#11076](https://github.com/nocobase/nocobase/pull/11076)) by @2013xile
- **[Workflow]** Improved workflow execution detail performance by loading only the latest job per node and loading node history on demand with cursor pagination and lightweight fields. ([#11094](https://github.com/nocobase/nocobase/pull/11094)) by @mytharcher

### 🐛 Bug Fixes

- **[AI employees]**
  - Fixed embedding response encoding compatibility with Qwen/DashScope endpoints to prevent document and query vector dimension mismatches. Previously affected knowledge bases require re-vectorization. ([#11074](https://github.com/nocobase/nocobase/pull/11074)) by @cgyrock
  - Fixed the page freeze when opening the UI Editor while an AI employee button is hidden by a linkage rule ([#11100](https://github.com/nocobase/nocobase/pull/11100)) by @hongboji

### v2.2.30

*Release date: 2026-10-22*

### 🐛 Bug Fixes

- **[cli-v1]** Fixed NocoBase CLI initialization failing with a missing chokidar module during fresh production installations. ([#11083](https://github.com/nocobase/nocobase/pull/11083)) by @cgyrock

### v2.2.29

*Release date: 2026-10-21*

### 🐛 Bug Fixes

- **[client-v2]**
  - Fix vertical alignment of sequence inputs in v2 filter forms. ([#11044](https://github.com/nocobase/nocobase/pull/11044)) by @katherinehhh
  - Fixed disabled styling of relation fields controlled by linkage rules in v2 mobile forms. ([#11036](https://github.com/nocobase/nocobase/pull/11036)) by @katherinehhh
- **[UI layout]** Fix the issue where mobile pages hidden from the menu could not be opened from links ([#10641](https://github.com/nocobase/nocobase/pull/10641)) by @zhangzhonghe
- **[Block: Tree]** Fixed v2 tree block action buttons disappearing after a browser refresh. ([#11038](https://github.com/nocobase/nocobase/pull/11038)) by @katherinehhh

### v2.2.28

*Release date: 2026-10-19*

### 🐛 Bug Fixes

- **[app]** Fix `APP_CLIENT_ENTRY_MODE` redirects not working in dev mode when `APP_PUBLIC_PATH` is not `/`. ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn
- **[evaluators]** Fixed a math.js expression sandbox escape in workflow calculation nodes by upgrading mathjs. ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher
- **[server]** Fixed the plugin dependency compatibility check for Axios 1.20.x. ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji
- **[Flow engine]** Fixed unresolved Liquid variables in Markdown for non-admin roles. ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust
- **[UI layout]** Fixed incorrect route permission check states and unintended loss of existing V1 permissions when saving permissions in V2. ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh
- **[Workflow]** Fixed missing loop-item fields in scope-variable selectors for nested workflow loops. ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher

### v2.2.27

*Release date: 2026-10-16*

### 🐛 Bug Fixes

- **[client-v2]** Fix swipe-back / browser back exiting the app after link action navigation in the v2 (mobile) client ([#10963](https://github.com/nocobase/nocobase/pull/10963)) by @katherinehhh

### v2.2.26

*Release date: 2026-10-15*

### 🐛 Bug Fixes

- **[server]** Fix duplicate snowflake primary keys after an application reload ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile
- **[Workflow]** Fixed incorrect workflow enabled and executed status checks when KingBase returns boolean and execution count fields as strings. ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher
- **[Data source manager]** Fixed v2 relation field configuration to allow entering a new foreign key name or selecting an existing field. ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.18

*Release date: 2026-10-22*

### 🐛 Bug Fixes

- **[cli-v1]** Fixed NocoBase CLI initialization failing with a missing chokidar module during fresh production installations. ([#11083](https://github.com/nocobase/nocobase/pull/11083)) by @cgyrock

### v2.3.0-beta.17

*Release date: 2026-10-21*

### 🐛 Bug Fixes

- **[client-v2]**
  - Fix vertical alignment of sequence inputs in v2 filter forms. ([#11044](https://github.com/nocobase/nocobase/pull/11044)) by @katherinehhh
  - Fixed disabled styling of relation fields controlled by linkage rules in v2 mobile forms. ([#11036](https://github.com/nocobase/nocobase/pull/11036)) by @katherinehhh
- **[Block: Tree]** Fixed v2 tree block action buttons disappearing after a browser refresh. ([#11038](https://github.com/nocobase/nocobase/pull/11038)) by @katherinehhh
- **[UI layout]** Fix the issue where mobile pages hidden from the menu could not be opened from links ([#10641](https://github.com/nocobase/nocobase/pull/10641)) by @zhangzhonghe

### v2.3.0-beta.16

*Release date: 2026-10-19*

### 🐛 Bug Fixes

- **[app]** Fix `APP_CLIENT_ENTRY_MODE` redirects not working in dev mode when `APP_PUBLIC_PATH` is not `/`. ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn
- **[server]**
  - Fix duplicate snowflake primary keys after an application reload ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile
  - Fixed the plugin dependency compatibility check for Axios 1.20.x. ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji
- **[client-v2]** Fix swipe-back / browser back exiting the app after link action navigation in the v2 (mobile) client ([#10963](https://github.com/nocobase/nocobase/pull/10963)) by @katherinehhh
- **[evaluators]** Fixed a math.js expression sandbox escape in workflow calculation nodes by upgrading mathjs. ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher
- **[Data source manager]** Fixed v2 relation field configuration to allow entering a new foreign key name or selecting an existing field. ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh
- **[Workflow]**
  - Fixed missing loop-item fields in scope-variable selectors for nested workflow loops. ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher
  - Fixed incorrect workflow enabled and executed status checks when KingBase returns boolean and execution count fields as strings. ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher
- **[Flow engine]** Fixed unresolved Liquid variables in Markdown for non-admin roles. ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust
- **[UI layout]** Fixed incorrect route permission check states and unintended loss of existing V1 permissions when saving permissions in V2. ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.12

*Release date: 2026-10-22*

### 🐛 Bug Fixes

- **[cli-v1]** Fixed NocoBase CLI initialization failing with a missing chokidar module during fresh production installations. ([#11083](https://github.com/nocobase/nocobase/pull/11083)) by @cgyrock
- **[evaluators]** Fixed a math.js expression sandbox escape in workflow calculation nodes by upgrading mathjs. ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher
- **[server]** Fixed the plugin dependency compatibility check for Axios 1.20.x. ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji
- **[client-v2]**
  - Fixed disabled styling of relation fields controlled by linkage rules in v2 mobile forms. ([#11036](https://github.com/nocobase/nocobase/pull/11036)) by @katherinehhh
  - Fix vertical alignment of sequence inputs in v2 filter forms. ([#11044](https://github.com/nocobase/nocobase/pull/11044)) by @katherinehhh
  - Fix swipe-back / browser back exiting the app after link action navigation in the v2 (mobile) client ([#10963](https://github.com/nocobase/nocobase/pull/10963)) by @katherinehhh
- **[app]** Fix `APP_CLIENT_ENTRY_MODE` redirects not working in dev mode when `APP_PUBLIC_PATH` is not `/`. ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn
- **[undefined]** The docs sitemap no longer lists duplicate cross-module pages whose canonical URL points elsewhere. ([#10954](https://github.com/nocobase/nocobase/pull/10954)) by @Molunerfinn
- **[Flow engine]** Fixed unresolved Liquid variables in Markdown for non-admin roles. ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust
- **[Workflow]** Fixed missing loop-item fields in scope-variable selectors for nested workflow loops. ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher
- **[UI layout]**
  - Fixed incorrect route permission check states and unintended loss of existing V1 permissions when saving permissions in V2. ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh
  - Fix the issue where mobile pages hidden from the menu could not be opened from links ([#10641](https://github.com/nocobase/nocobase/pull/10641)) by @zhangzhonghe
- **[Block: Tree]** Fixed v2 tree block action buttons disappearing after a browser refresh. ([#11038](https://github.com/nocobase/nocobase/pull/11038)) by @katherinehhh

### v2.4.0-alpha.11

*Release date: 2026-10-16*

### 🐛 Bug Fixes

- **[server]**

  - Fix duplicate snowflake primary keys after an application reload ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile
  - Fix validation and scoping of the application name resolved from a request in the gateway. ([#10548](https://github.com/nocobase/nocobase/pull/10548)) by @2013xile
- **[client-v2]** Fixed attachment previews and editor popover visibility in v2 approval form subtables. ([#10586](https://github.com/nocobase/nocobase/pull/10586)) by @mytharcher
- **[Data source manager]** Fixed v2 relation field configuration to allow entering a new foreign key name or selecting an existing field. ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh
- **[Workflow]** Fixed incorrect workflow enabled and executed status checks when KingBase returns boolean and execution count fields as strings. ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher
- **[AI employees]** AI conversations now send a stable conversation-specific prompt cache key in both OpenAI API modes, allowing compatible gateways to maintain channel affinity. ([#10788](https://github.com/nocobase/nocobase/pull/10788)) by @cgyrock

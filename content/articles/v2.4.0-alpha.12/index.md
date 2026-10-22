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


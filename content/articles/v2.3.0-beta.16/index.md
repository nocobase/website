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


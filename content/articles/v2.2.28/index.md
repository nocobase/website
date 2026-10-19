### 🐛 Bug Fixes

- **[app]** Fix `APP_CLIENT_ENTRY_MODE` redirects not working in dev mode when `APP_PUBLIC_PATH` is not `/`. ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn

- **[evaluators]** Fixed a math.js expression sandbox escape in workflow calculation nodes by upgrading mathjs. ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher

- **[server]** Fixed the plugin dependency compatibility check for Axios 1.20.x. ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji

- **[Flow engine]** Fixed unresolved Liquid variables in Markdown for non-admin roles. ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust

- **[UI layout]** Fixed incorrect route permission check states and unintended loss of existing V1 permissions when saving permissions in V2. ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh

- **[Workflow]** Fixed missing loop-item fields in scope-variable selectors for nested workflow loops. ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher


### 🎉 New Features

- **[undefined]** Improved managed app and plugin management in the CLI, including appPath-aware environment handling, plugin import, licensed plugin sync, and related documentation updates. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
Reference: [CLI docs](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Quickstart](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Block: Gantt]** Added an option for Gantt blocks to focus on today by default when opened ([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx

- **[IdP: OAuth]** Added foundation support for app single sign-on in multi-app deployments ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile

- **[App SSO]** Added an App SSO plugin for automatic sign-in between applications by @2013xile

- **[Multi-space]** Added client v2 support for the multi-space plugin, including space switching and space management. by @jiannx

- **[App supervisor]** Added App SSO settings for sub applications by @2013xile

### 🚀 Improvements

- **[server]** The modern client is now served under `/v/` instead of `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn

- **[ai]** Upgrade `xlsx` version to avoid security issues ([#9675](https://github.com/nocobase/nocobase/pull/9675)) by @mytharcher

- **[Multi-keyword filter]** Migrate multi keyword filter into client v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust

- **[Workflow]** Removed workflow history transaction coupling from workflow execution. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher

- **[UI templates]** Migrate UI templates to client v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust

- **[Departments]** Added a v2 settings page for managing departments, department members, and user department assignments. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx

- **[Auth: SAML 2.0]** SAML/CAS signin redirects now follow the modern client prefix. by @Molunerfinn

- **[Action: Import records Pro]** Upgrade `xlsx` version to avoid security issues by @mytharcher

- **[Workflow: Subflow]** Removed workflow history transaction coupling from subflow workflow instructions. by @mytharcher

- **[Auth: OIDC]** OIDC signin redirect now follows the modern client prefix. by @Molunerfinn

- **[Workflow: Approval]** Removed workflow history transaction coupling from approval workflow instructions. by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where hidden linked fields still kept old values ([#9687](https://github.com/nocobase/nocobase/pull/9687)) by @zhangzhonghe

  - Fix the error when saving a tree relation field in a referenced form template ([#9643](https://github.com/nocobase/nocobase/pull/9643)) by @zhangzhonghe

- **[client-v2]**
  - Fixed v2 table columns becoming invisible when the custom column width is set to 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh

  - Adjusted all relation field selectors to limit association fields to a maximum of two levels ([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx

- **[Action: Import records]** Fixed imported records receiving duplicate sort values ([#9684](https://github.com/nocobase/nocobase/pull/9684)) by @2013xile

- **[Flow engine]** Fixed an issue where converting a reference template block to copy would result in an error. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) by @gchust

- **[Collection: SQL]**
  - Blocked SQL Collection access to sensitive PostgreSQL metadata ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile

  - Blocked SQL Collection access to sensitive PostgreSQL metadata ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile

- **[Workflow]** Fixed duplicate workflow execution dispatch under concurrent workers. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) by @mytharcher

- **[Block: Map]** Fixed detail views so map fields keep their original values when switching between text and map display modes ([#9653](https://github.com/nocobase/nocobase/pull/9653)) by @hongboji

- **[Workflow: Custom action event]** Fixed the workflow trigger action missing from the workbench action panel button list. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh

- **[AI employees]**
  - Workflow AI employee nodes can use the default model ([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock

  - Hid raw LLM provider errors from frontend messages. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) by @cgyrock

- **[Data source manager]** Fixed multi-space field localization in v2 data source manager. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx

- **[Data source: REST API]** Fixed REST API data source plugin declaration build failures caused by mismatched data source manager client-v2 type declarations. by @katherinehhh

- **[Password policy]** Fix sign-in failures masking the real error with "argument #1 unsupported type undefined" when the underlying error has no status code. by @Molunerfinn

- **[Workflow: Approval]** Fix the issue where custom field titles are not shown in approval form details by @zhangzhonghe


### 🎉 New Features

- **[cli]** Add dynamic api command compatibility guards ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos

- **[client-v2]**
  - Support embedded v2 pages and public form v2 pages ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe

  - Rewrite the client-v2 Plugin manager page into a responsive card-based UI with category filter, search, enable/disable/remove, Bulk enable, and a plugin detail modal; also make the client-v1 Plugin manager page responsive on narrow screens. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn

- **[Workflow]**
  - Add timeout control for workflows, support to automatically abort time-outed execution if timeout option is set ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher

  - Added an administrator API to rerun started workflow executions from the head or a specified node. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

- **[Block: Gantt]** Added v2 support for the Gantt block. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx

- **[Workflow: Webhook]** Add 408 response status for timed-out webhook workflow (sync mode) by @mytharcher

- **[Workflow: Subflow]** Support timeout setting in workflow by @mytharcher

- **[Auth: OIDC]** Migrate `plugin-auth-oidc` to v2 admin; sign-in button, admin settings form, and SSO auto-redirect now work under v2. by @Molunerfinn

- **[Workflow: Approval]** Support timeout setting in workflow by @mytharcher

- **[Auth: LDAP]** Add v2 client entry so the LDAP authenticator renders its sign-in form and admin settings on v2 apps. by @Molunerfinn

### 🚀 Improvements

- **[client-v2]**
  - add v2 table row selection setting ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh

  - support action panel action colors ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh

  - Remove the Hidden option from menu configuration ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe

- **[client]** Remove the Hidden option from menu item settings ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

- **[cli]** streamline app upgrade flow ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos

- **[AI employees]** Improved the LLM Base URL field so it can use global-scope variables in create and edit forms. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock

- **[IP restriction]** Add a v2 client for the IP restriction plugin. by @Molunerfinn

### 🐛 Bug Fixes

- **[flow-engine]**
  - Fixed the incorrect ui log level. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust

  - Fix unstable cascading menus when typing in search boxes ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe

  - Fixed an issue where table action linkage rules would execute incorrectly after a form was successfully submitted in a popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust

- **[ai]** Pinned LangChain dependencies to stable versions to prevent Ollama tool execution failures and avoid affected upstream releases ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock

- **[client-v2]**
  - Fix the sub-app sign-in tabs rendering raw translation templates, and prevent the v2 authentication-method edit drawer from dropping field values on submit. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn

  - Improve plugin manager page performance by using CSS line-clamp instead of antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn

- **[client]**
  - fix preserve time format for v2 time fields ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh

  - fix sync hidden state for subform linkage ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh

  - increase scan input image upload limit ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh

  - fix sync mobile date picker popup value ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh

  - Fix page tabs disappearing after switching menus ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe

  - fix issue where subtable in subform could not add a second row ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh

  - increase scan input image upload limit ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh

  - fix sync mobile date picker popup value ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh

  - fix issue where subtable in subform could not add a second row ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh

  - fix preserve time format for v2 time fields ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh

- **[Collection: Tree]** Fix the error caused by circular parent-child data in tree collections ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe

- **[Workflow: Custom action event]**
  - Fixed custom action table buttons with multiple records context incorrectly allowing custom context workflows to be selected. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher

  - Filter custom action workflow binding options by the current block collection. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher

- **[File manager]**
  - Improved PDF preview failure messages and documented CORS requirements for external storage. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
Reference: [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Improved PDF preview failure messages and documented CORS requirements for external storage. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
Reference: [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Fixed Unicode filename normalization during file uploads to avoid generating object keys with control characters. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher

- **[AI: Knowledge base]** Pinned LangChain dependencies to stable versions to prevent Ollama tool execution failures and avoid affected upstream releases by @cgyrock

- **[Template print]** Fixed template print PDF conversion errors not being returned to the client correctly by @jiannx


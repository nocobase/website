### 🎉 New Features

- **[client-v2]**
  - support field value assignment in submit form actions ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh

  - Support embedded v2 pages and public form v2 pages ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe

  - Add a Security menu and the Token policy settings page to the v2 admin; user-center now supports Change password. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn

  - Rewrite the client-v2 Plugin manager page into a responsive card-based UI with category filter, search, enable/disable/remove, Bulk enable, and a plugin detail modal; also make the client-v1 Plugin manager page responsive on narrow screens. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn

- **[cli]**
  - Add dynamic api command compatibility guards ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos

  - support basic auth ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos

- **[Office File Previewer]** Migrate the Office file preview plugin to the v2 (FlowEngine) client. ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn

- **[Workflow]**
  - Add timeout control for workflows, support to automatically abort time-outed execution if timeout option is set ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher

  - Added an administrator API to rerun started workflow executions from the head or a specified node. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

- **[IdP: OAuth]** Added foundation support for app single sign-on in multi-app deployments ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile

- **[Block: Gantt]** Added v2 support for the Gantt block. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx

- **[App SSO]** Added an App SSO plugin for automatic sign-in between applications by @2013xile

- **[Password policy]** Migrate plugin-password-policy to the client-v2 admin shell with the Password policy / Locked users settings pages and client-side rule enforcement on the user-center change-password form. by @Molunerfinn

- **[Workflow: Webhook]** Add 408 response status for timed-out webhook workflow (sync mode) by @mytharcher

- **[Workflow: Subflow]** Support timeout setting in workflow by @mytharcher

- **[Auth: OIDC]** Migrate `plugin-auth-oidc` to v2 admin; sign-in button, admin settings form, and SSO auto-redirect now work under v2. by @Molunerfinn

- **[Workflow: Approval]** Support timeout setting in workflow by @mytharcher

- **[App supervisor]** Added App SSO settings for sub applications by @2013xile

- **[Auth: LDAP]** Add v2 client entry so the LDAP authenticator renders its sign-in form and admin settings on v2 apps. by @Molunerfinn

### 🚀 Improvements

- **[client-v2]**
  - add v2 table row selection setting ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh

  - support action panel action colors ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh

  - Remove the Hidden option from menu configuration ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe

- **[client]** Remove the Hidden option from menu item settings ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

- **[cli]** streamline app upgrade flow ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos

- **[Notification manager]** Migrate the notification-related plugins to v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn

- **[AI employees]** Improved the LLM Base URL field so it can use global-scope variables in create and edit forms. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock

- **[Workflow]** Refactor workflow async-node availability checks ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher

- **[Data visualization]** Added client v2 support for chart blocks. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx

- **[IP restriction]** Add a v2 client for the IP restriction plugin. by @Molunerfinn

### 🐛 Bug Fixes

- **[client]**
  - Fix the badge width in the top navigation bar ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe

  - increase scan input image upload limit ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh

  - Fix page tabs disappearing after switching menus ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe

  - fix issue where subtable in subform could not add a second row ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh

  - fix preserve time format for v2 time fields ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh

  - fix sync mobile date picker popup value ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh

  - fix sync hidden state for subform linkage ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh

  - fix preserve time format for v2 time fields ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh

  - fix issue where subtable in subform could not add a second row ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh

  - fix sync mobile date picker popup value ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh

  - increase scan input image upload limit ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh

- **[flow-engine]**
  - Fixed the incorrect ui log level. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust

  - Fix unstable cascading menus when typing in search boxes ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe

  - Fixed an issue where table action linkage rules would execute incorrectly after a form was successfully submitted in a popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust

- **[ai]** Pinned LangChain dependencies to stable versions to prevent Ollama tool execution failures and avoid affected upstream releases ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock

- **[client-v2]**
  - Fix the sub-app sign-in tabs rendering raw translation templates, and prevent the v2 authentication-method edit drawer from dropping field values on submit. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn

  - Improve plugin manager page performance by using CSS line-clamp instead of antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn

  - Fixed browser language metadata so the app page follows the selected application language instead of being marked as English. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn

- **[build]**
  - Text assets in server builds are now copied as files instead of being converted into JavaScript modules. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn

  - Fixed plugin server obfuscation output to avoid browser globals in Node.js runtime bundles. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn

- **[Block: Gantt]** Fixed the v2 gantt shared folder path and added zebra striping. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx

- **[License settings]** Added client-v2 support for license settings and commercial license injection. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx

- **[Workflow: Custom action event]**
  - Fix duplicate Trigger workflow options in v2 block action menus ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe

  - Filter custom action workflow binding options by the current block collection. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher

  - Fixed custom action table buttons with multiple records context incorrectly allowing custom context workflows to be selected. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher

- **[Collection: Tree]** Fix the error caused by circular parent-child data in tree collections ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe

- **[File manager]**
  - Improved PDF preview failure messages and documented CORS requirements for external storage. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
Reference: [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Improved PDF preview failure messages and documented CORS requirements for external storage. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
Reference: [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Safely render PDF previews with PDF.js instead of iframe-based raw PDF rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher

  - Fixed Unicode filename normalization during file uploads to avoid generating object keys with control characters. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher

- **[AI employees]**
  - Fixed AI shortcut buttons getting an empty block context after referenced table blocks are removed. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock

  - fixed incorrect description of the tool name in the work context prompt ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock

- **[Workflow: Manual node]** Fixed temporary saves for manual workflow tasks not persisting submitted form values. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher

- **[plugin-commercial]** Added client-v2 commercial license components and topbar license status entry. by @jiannx

- **[AI: Knowledge base]** Pinned LangChain dependencies to stable versions to prevent Ollama tool execution failures and avoid affected upstream releases by @cgyrock

- **[Migration manager]** Fix PostgreSQL migration diffs so child inherited columns are not dropped when a local column becomes inherited. by @hongboji

- **[Template print]** Fixed template print PDF conversion errors not being returned to the client correctly by @jiannx

- **[Auth: OIDC]** Fixed token leakage when SSO login callbacks receive an external redirect URL by @2013xile

- **[Workflow: Approval]**
  - Fix the issue where `jobs:resume` API is not supported by approval node by @mytharcher

  - Fixed approval withdraw to update submitted business data while respecting source collection update permissions. by @mytharcher

  - Fixed stale approval todos when approval workflows are terminated by non-approval node failures. by @mytharcher


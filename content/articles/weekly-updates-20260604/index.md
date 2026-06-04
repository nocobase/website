Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/en/blog/v2.0.61)

*Release date: 2026-06-03*

### 🚀 Improvements

- **[client]** Enhanced autocomplete support for some built-in RunJS functions. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[undefined]** Updated the Embed NocoBase documentation for the open-source plugin. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  Reference: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Bug Fixes

- **[flow-engine]**

  - Fixed the issue where the page got stuck when setting field values for a subform. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - Fixed an issue where the popup displayed outdated UI data after toggling the UI configuration mode switch. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
- **[client]**

  - Fixed incorrect record action linkage rule behavior in table blocks. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - Fixed the issue where selected relation field data was not displayed on mobile. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - Fixed the issue where fields became read-only when shown again after being hidden by linkage rules. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** Fixed the nginx template to serve `.mjs` assets with the JavaScript MIME type. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** Fixed an issue where importing numeric password values could fail. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[AI employees]** Fixed AI provider base URL validation. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
- **[Flow engine]**

  - Fixed an issue where dragging popup tabs to reorder them did not work. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - Fixed an issue where modifying a block after duplicating its template could inadvertently affect the original block’s content. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[Notification: In-app message]** Fixed an SQL injection risk in the in-app notification channel timestamp filter. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[License settings]** Fixed the issue where the license settings page could hang for a long time when the pkg login check was slow or unreachable. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Workflow: JavaScript]** Clarified that Workflow JavaScript module support mode is unsafe and not a permission boundary. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  Reference: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** Fixed incomplete permissions on first login when a union role was the default role. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[File manager]** Fixed local file storage path validation to prevent unsafe paths from escaping the configured storage root. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Password policy]** Fixed an issue where password policy validation could fail for numeric password values. by @2013xile

### [v2.0.60](https://www.nocobase.com/en/blog/v2.0.60)

*Release date: 2026-05-29*

### 🚀 Improvements

- **[AI employees]** Improved the LLM Base URL field so it can use global-scope variables in create and edit forms. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock

### 🐛 Bug Fixes

- **[client]** Fix the badge width in the top navigation bar ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[AI employees]** Fixed AI shortcut buttons getting an empty block context after referenced table blocks are removed. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[Migration manager]** Fix PostgreSQL migration diffs so child inherited columns are not dropped when a local column becomes inherited. by @hongboji

### [v2.0.59](https://www.nocobase.com/en/blog/v2.0.59)

*Release date: 2026-05-28*

### 🐛 Bug Fixes

* **[ai]** Pinned LangChain dependencies to stable versions to prevent Ollama model tool call failures and avoid affected upstream releases. ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
* **[flow-engine]** Fixed the incorrect frontend log level. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
* **[Collection: Tree]** Fixed unclear error messages when queries failed due to circular parent-child relationships in tree data. ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
* **[AI: Knowledge base]** Pinned LangChain dependencies to stable versions to prevent Ollama model tool call failures and avoid affected upstream releases. by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/en/blog/v2.1.0-beta.44)

*Release date: 2026-06-03*

### 🚀 Improvements

- **[Workflow: Approval]** Adjusted validation rules for approval trigger and node configurations to ensure UI-related fields exist. by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fixed the issue where selected relation field data was not displayed on mobile. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
- **[client-v2]**

  - Fixed menu linkage rule save errors. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - Fixed excessive spacing above blocks on v2 pages. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
- **[flow-engine]** Fixed the issue where the page got stuck when setting field values for a subform. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
- **[AI employees]**

  - Fixed AI provider base URL validation. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
  - Fixed `ctx.get` errors in AI employee workflow nodes. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
- **[Notification: In-app message]** Fixed an SQL injection risk in the in-app notification channel timestamp filter. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[Action: Duplicate record]** Fixed the issue where the button state was not reset when duplicate record submission failed. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[Calendar]** Fixed the issue where calendar event colors were not rendered from the configured color field in v2 pages. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
- **[Flow engine]**

  - Fixed an issue where modifying a block after duplicating its template could inadvertently affect the original block’s content. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
  - Fixed an issue where dragging popup tabs to reorder them did not work. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/en/blog/v2.1.0-beta.43)

*Release date: 2026-06-02*

### 🎉 New Features

- **[client-v2]** Add `TypedVariableInput` so v2 email plugin's SMTP port and secure mode fields can accept either a typed constant or a `{{ $env.X }}` variable. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn
- **[Access control]** Migrated the Users and Roles & Permissions settings pages to v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 Improvements

- **[undefined]** Update the Embed NocoBase documentation for the open source plugin ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  Reference: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Enhanced autocomplete support for some built-in RunJS functions. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[cli]** improve init and self update guidance ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos

### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where blocks may incorrectly show as deleted after refreshing the page ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe
  - Fixed incorrect record action linkage rule behavior in table block. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - （linkage rule） fix fields becoming readonly when shown after being hidden ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** Fix nginx template to serve `.mjs` assets with JavaScript MIME type. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** Fixed an issue where importing numeric password values could fail ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[flow-engine]**

  - Fixed an issue where the popup displayed outdated UI data after toggling the UI configuration mode switch. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
  - Fix the issue where field search is cleared when hovering over association fields ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe
- **[client-v2]** preserve assign field values ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh
- **[File manager]** Fixed local file storage path validation to prevent unsafe paths from escaping the configured storage root. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Block: Gantt]** Improved gantt tooltip placement to avoid covering task bars and aligned task labels consistently inside and outside bars ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx
- **[Access control]** Fixed incomplete permissions on first login when union role is the default ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[License settings]** Fixed the license settings page hanging for a long time when the pkg login check is slow or unreachable ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Workflow: JavaScript]** Clarify that Workflow JavaScript module support mode is unsafe and not a permission boundary ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  Reference: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Password policy]** Fixed an issue where password policy validation could fail for numeric password values by @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/en/blog/v2.1.0-beta.40)

*Release date: 2026-05-30*

### 🎉 New Features

- **[client-v2]** Support field value assignment in submit form actions ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
- **[Office File Previewer]** Migrate the Office file preview plugin to the v2 (FlowEngine) client. ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn

### 🚀 Improvements

- **[Notification manager]** Migrate the notification-related plugins to v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn

### 🐛 Bug Fixes

- **[client]** Fix the badge width in the top navigation bar ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[Block: Gantt]** Fixed the v2 gantt shared folder path and added zebra striping. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[License settings]** Added client-v2 support for license settings and commercial license injection. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[Workflow: Custom action event]** Fix duplicate Trigger workflow options in v2 block action menus ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
- **[AI employees]** Fixed AI shortcut buttons getting an empty block context after referenced table blocks are removed. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[plugin-commercial]** Added client-v2 commercial license components and topbar license status entry. by @jiannx
- **[Migration manager]** Fix PostgreSQL migration diffs so child inherited columns are not dropped when a local column becomes inherited. by @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/en/blog/v2.1.0-beta.38)

*Release date: 2026-05-29*

### 🎉 New Features

- **[cli]** Add dynamic API command compatibility guards ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
- **[client-v2]**

  - Support embedded v2 pages and public form v2 pages ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - Rewrite the client-v2 Plugin manager page into a responsive card-based UI with category filter, search, enable/disable/remove, Bulk enable, and a plugin detail modal; also make the client-v1 Plugin manager page responsive on narrow screens. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
- **[Workflow]**

  - Add timeout control for workflows, support to automatically abort timed-out execution if timeout option is set ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
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

  - Fixed the incorrect frontend log level. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/en/blog/v2.1.0-alpha.45)

*Release date: 2026-05-29*

### 🎉 New Features

- **[client-v2]**

  - Support field value assignment in submit form actions ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
  - Support embedded v2 pages and public form v2 pages ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - Add a Security menu and the Token policy settings page to the v2 admin; user-center now supports Change password. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
  - Rewrite the client-v2 Plugin manager page into a responsive card-based UI with category filter, search, enable/disable/remove, Bulk enable, and a plugin detail modal; also make the client-v1 Plugin manager page responsive on narrow screens. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
- **[cli]**

  - Add dynamic API command compatibility guards ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
  - Support basic authentication ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
- **[Office File Previewer]** Migrate the Office file preview plugin to the v2 (FlowEngine) client. ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn
- **[Workflow]**

  - Add timeout control for workflows, support to automatically abort timed-out execution if timeout option is set ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
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

  - Fixed the incorrect frontend log level. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
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

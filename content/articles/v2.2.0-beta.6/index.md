### 🎉 New Features

- **[cli]** Support install hook scripts ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos
- **[UI layout]** Add support for mobile layout ([#9641](https://github.com/nocobase/nocobase/pull/9641)) by @zhangzhonghe
- **[Backup manager]** Support backup and restore for KingBase as the primary database ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
- **[Multi-portal]** Add Multi-Portal plugin by @zhangzhonghe
- **[Migration manager]** Support migrations for KingBase as the primary database. by @2013xile

### 🚀 Improvements

- **[client-v2]**

  - Show field-level validation rules as read-only inherited rules in UI field validation settings. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh
  - Add override value option for field value settings. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust
- **[undefined]** Improved AI knowledge base retrieval and documentation. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
- **[Flow engine]**

  - Added the current block to the user context by default when building AI employees using the Flow Surface API. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust
  - Open runjs browser globals. ([#9841](https://github.com/nocobase/nocobase/pull/9841)) by @gchust
- **[Workflow]** Stabilize update options test ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
- **[Access control]** Aligned the v2 Users & Permissions settings pages with v1 behavior, including pagination totals, department tree behavior, selected styles, and internal permissions-panel scrolling. ([#9810](https://github.com/nocobase/nocobase/pull/9810)) by @jiannx
- **[Backup manager]** Tables whose collection `dataCategory` is marked as `'runtime'` are now excluded from backups automatically. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[AI: Knowledge base]** Improved AI knowledge base document segmentation, segment management, hit tests, and document workflow node support. by @cgyrock

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed block did not refresh after blocks settings updated. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust
  - Fixed custom action workflow trigger buttons sending custom context JSON under an extra `values` property or as a serialized string. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher
  - Fixed an issue where configuring an association field value as a fixed value or default value would not take effect. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust
  - Fixed an issue where event flows on sub-table columns would execute incorrectly. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  - remove unexpected updateAssociationValues from association fields ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  - Fixed an issue where form submission would show incorrect message when a subform contained a sub-table. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
- **[ai]**

  - Fixed incompatible LangChain dependency resolutions for AI plugins. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
  - Locked `@langchain/openai` to patch-level updates for AI packages. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
- **[app]** Ignore unrelated currentScript when inferring plugin public path ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos
- **[auth]** Encrypted password data is no longer included in sign-in status responses ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile
- **[Block: Gantt]** Fixed Gantt task popup template settings not applying or clearing correctly. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx
- **[Action: Print]** Fixed v2 detail block printing so empty detail blocks no longer print the whole page. ([#9832](https://github.com/nocobase/nocobase/pull/9832)) by @katherinehhh
- **[UI templates]** Fixed incorrect default context for ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust
- **[File manager]** Fixed 404 errors when uploading files to attachment URL fields in external data sources ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[Action: Custom request]** Fixed V2 custom request actions showing an extra error when request settings are not configured. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
- **[Workflow]** Fixed workflow dispatcher recovery after unexpected dispatch errors. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
- **[AI employees]** Fixed AI employee shortcut task triggers so attachments from the current work context are included when running a task from the shortcut profile. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
- **[Data source: External NocoBase]** Proxy NocoBase external data source file upload and storage actions by upload data source by @2013xile
- **[AI: Knowledge base]**

  - Fixed incompatible LangChain dependency resolutions for the AI knowledge base plugin. by @cgyrock
  - Fixed unclear failures when enabling the AI knowledge base plugin without the AI plugin available. by @cgyrock
- **[Multi-space]** Fixed authentication recovery requests being blocked by stale multi-space headers. by @jiannx
- **[Workflow: Subflow]** Fixed asynchronous subflows so parent workflows can resume after worker restart or in-memory event mapping loss. by @mytharcher
- **[Workflow: Approval]** Fix the issue where related approvals do not load or refresh correctly by @zhangzhonghe
- **[App supervisor]** Fixed a crash when remote WebSocket proxy responses fail by @2013xile

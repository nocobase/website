### 🎉 New Features

- **[Backup manager]** Support backup and restore for KingBase as the primary database ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
- **[Migration manager]** Support migrations for KingBase as the primary database. by @2013xile

### 🚀 Improvements

- **[AI: Knowledge base]** Improved AI knowledge base retrieval and documentation. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
- **[cli]** Add env config schema version ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
- **[Workflow]** Stabilize update options test ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
- **[File manager]** Improved PDF previews: cross-origin PDF files now use the browser-native viewer, while same-origin PDF files continue to use PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher
- **[Backup manager]** Tables whose collection `dataCategory` is marked as `'runtime'` are now automatically excluded from backups. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[AI: Knowledge base]** Improved AI knowledge base document segmentation, segment management, hit tests, and document workflow node support. by @cgyrock

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed an issue where form submission would show an incorrect message when a subform contained a sub-table. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
  - Fixed an issue where event flows on sub-table columns would execute incorrectly. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  - Removed unexpected `updateAssociationValues` from association fields ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  - Fixed untranslated Yes/No options in v2 filter form checkbox dropdowns. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  - Fixed the issue where event flow settings could not be updated after saving a block as a template. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  - Fixed incorrect display and format settings when v2 table association title fields use time, date-only, or datetime fields. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
- **[Workflow]** Fixed workflow dispatcher recovery after unexpected dispatch errors. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
- **[File manager]** Fixed 404 errors when uploading files to attachment URL fields in external data sources ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[Action: Custom request]** Fixed V2 custom request actions showing an unnecessary error when request settings are not configured. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
- **[AI employees]**

  - Fixed an issue where AI employees could not correctly fill sub-table data. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust
  - Fixed AI employee shortcut task triggers so that attachments from the current work context are included when running a task from the shortcut profile. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
- **[Workflow: Custom action event]** Fixed action panel v2 trigger workflow buttons showing success and sending a request when no workflow is bound. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
- **[Flow engine]** Fixed an issue where current record forms and details in popup could contain incorrect data when built by AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
- **[Async task manager]** Fixed async task file download errors when the task id is missing from `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
- **[Data source: External NocoBase]** Proxy NocoBase external data source file upload and storage actions by upload data source by @2013xile
- **[Multi-space]** Fixed permission errors when space managers add users without access to the user email field. by @jiannx
- **[Workflow: Subflow]** Fixed asynchronous subflows so that parent workflows can resume after worker restart or in-memory event mapping loss. by @mytharcher
- **[App supervisor]** Fixed a crash when remote WebSocket proxy responses fail by @2013xile

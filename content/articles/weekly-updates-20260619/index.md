Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.9](https://www.nocobase.com/en/blog/v2.1.9)

*Release date: 2026-06-20*

### 🚀 Improvements

- **[client-v2]** Add override value option for field value settings. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed custom action workflow trigger buttons sending custom context JSON under an extra `values` property or as a serialized string. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher
  - Fixed an issue where configuring an association field value as a fixed value or default value would not take effect. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust
- **[auth]** Encrypted password data is no longer included in sign-in status responses ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile
- **[app]** Ignore unrelated currentScript when inferring plugin public path ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos
- **[UI templates]** Fixed incorrect default context for ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust

### [v2.1.8](https://www.nocobase.com/en/blog/v2.1.8)

*Release date: 2026-06-18*

### 🐛 Bug Fixes

- **[ai]**

  - Locked `@langchain/openai` to patch-level updates for AI packages. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
  - Fixed incompatible LangChain dependency resolution for AI plugins. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
- **[AI: Knowledge base]**

  - Fixed unclear error messages when enabling the AI knowledge base plugin without the AI plugin available. by @cgyrock
  - Fixed incompatible LangChain dependency resolution for the AI knowledge base plugin. by @cgyrock

### [v2.1.7](https://www.nocobase.com/en/blog/v2.1.7)

*Release date: 2026-06-18*

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

### [v2.1.5](https://www.nocobase.com/en/blog/v2.1.5)

*Release date: 2026-06-15*

### 🎉 New Features

- **[Workflow: Mailer node]** Added support for sending attachments in workflow mailer nodes. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

### 🚀 Improvements

- **[client-v2]** Relation field column data scopes in form subtables now support current item variables. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
- **[undefined]** Unified the Chinese documentation name of the version control plugin as “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
- **[File manager]** Added selectable text support to PDF previews in the file manager for PDFs with embedded text. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
- **[Action: Bulk edit]** Optimized the loading method for v2 action plugins and kept the order of migrated action buttons stable. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
- **[Version control]** Changed the Chinese display name of the version control plugin to “版本控制”. by @cgyrock

### 🐛 Bug Fixes

- **[cli-v1]** Fixed an error when running `yarn dev` after upgrading projects created with create-nocobase-app from 2.0 to 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
- **[client-v2]** Fixed the issue where migration progress did not show the dedicated progress view. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
- **[flow-engine]** Fixed Vietnamese and Chinese IME input issues in v2 single-line text and multiline text fields. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
- **[server]** Fixed unsafe plugin name handling in `pm:enable` to prevent local file inclusion risks during plugin resolution. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
- **[File manager]** Fixed PDF preview failures caused by abnormal pdf.js worker module loading. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
- **[Block: Kanban]** Fixed the issue where opening Calendar, Gantt, and Kanban blocks outside edit mode unexpectedly persisted hidden popup actions and repeatedly sent delete requests. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
- **[Action: Export records Pro]** Improved processing mode settings and explanatory prompts for v2 Import/Export Pro. by @katherinehhh
- **[Migration manager]** Fixed possible failures when importing large migration data files. by @2013xile
- **[Template print]** Rejected unsupported template file types before template printing starts. by @2013xile

### [v2.1.4](https://www.nocobase.com/en/blog/v2.1.4)

*Release date: 2026-06-13*

### 🚀 Improvements

- **[Workflow]** Improved the workflow metadata editing experience by supporting description editing in the details popup and automatically filling source workflow metadata when duplicating workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher

### 🐛 Bug Fixes

- **[Action: Import records]** Changed uploaded import files to disk storage to reduce memory pressure during large data imports. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[Backup manager]** Fixed a security issue where unsafe PostgreSQL schema names could be accepted during backup restoration. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[Workflow]**

  - Fixed workflow timeout handling so aborted executions and their pending tasks can be updated atomically. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - Fixed the issue where the workflow’s last updated by field was not updated after workflow node changes. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[Action: Import records Pro]** Avoided parsing large files in the request node before Pro import creates an async task. by @mytharcher
- **[Version control]** Adjusted the position of the version control top shortcut entry so it appears next to the UI editor in both legacy and v2 admin layouts. by @cgyrock

### [v2.1.3](https://www.nocobase.com/en/blog/v2.1.3)

*Release date: 2026-06-12*

### 🚀 Improvements

- **[cli]**
  - normalize app compat build versions ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - support updating skills to a specified version ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos

### 🐛 Bug Fixes

- **[client]** Fixed the issue where fields in horizontal subforms are too narrow to display data ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[Data source manager]**

  - Fixed the blank edit field drawer caused by repeated rerenders on the v1 external data source Configure fields page. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - Fixed an issue where deleting the active collection category in the v1 data source manager could leave the All collections tab empty. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[Async task manager]** Fixed incorrect request IDs in async task worker logs ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[Workflow: SQL node]** Fixed SQL workflow legacy template-variable migration being skipped for some beta-version users. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[AI employees]**

  - Fixed loss of message configuration in workflow LLM nodes. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
  - Fixed an issue where attachments pasted into the AI employee dialog could not be removed. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
- **[Block: Kanban]** Fixed URL support for calendar and related popups. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[Workflow: Approval]** Fixed the issue where related data is not displayed in v2 approval forms by @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/en/blog/v2.1.2)

*Release date: 2026-06-12*

### 🎉 New Features

- **[AI employees]** Added an external vector store configuration form for AI knowledge bases. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[AI: Knowledge base]** Added an external vector store configuration form for AI knowledge bases. by @cgyrock

### 🚀 Improvements

- **[undefined]**

  - Added a version control scenario to the AI builder quick start ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    Reference: [AI Builder Quick Start](https://docs.nocobase.com/en/ai-builder)
  - Improved the version control documentation with AI Builder automatic revision guidance. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
- **[cli]** clarify init setup wording ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[Action: Import records]** Improved import and async task error dialogs so long error messages can be fully read without breaking the layout. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[Action: Import records Pro]** Improved import dialogs so long error messages remain readable and v2 processing mode can be selected directly from the settings menu. by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]** Fixed the issue where v2 pages could keep loading after signing in ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]** require Node.js 22 for nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[File manager]** Fix PDF previews missing CJK/CID font text after switching to pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/en/blog/v2.2.0-beta.5)

*Release date: 2026-06-16*

### 🚀 Improvements

* **[cli]** Added schema version records for env configuration. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
* **[File manager]** Improved PDF previews: cross-origin PDF files now use the browser-native preview, while same-origin PDF files continue to be rendered with PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher

### 🐛 Bug Fixes

* **[client-v2]**
  * Fixed the issue where event flow settings could no longer be modified after a block was converted into a template. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  * Fixed the issue where checkbox dropdown options in v2 filter forms did not display translated text. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  * Fixed incorrect display and format settings when the title field of a v2 table relation field used a time, date, or datetime field. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
* **[Flow engine]** Fixed incorrect data in current record forms and detail data inside popups during AI building. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
* **[Workflow: Custom action event]** Fixed the issue where action panel v2 trigger workflow buttons still showed success and sent requests when no workflow was bound. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
* **[AI employees]** Fixed the issue where AI employees could not correctly fill sub-table data. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/en/blog/v2.2.0-beta.3)

*Release date: 2026-06-15*

### 🎉 New Features

* **[Workflow: Mailer node]** Added support for sending attachments in workflow mailer nodes. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher
* **[Workflow]** Added support for database transaction scopes in workflows. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
  Reference: [Database transactions](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Database transaction node]** Added a database transaction workflow node plugin. by @mytharcher

### 🚀 Improvements

* **[client-v2]** Relation field columns in form subtables now support current item variables in data scopes. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
* **[undefined]** Unified the Chinese documentation name of the Version control plugin as “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
* **[File manager]** Added selectable text support to PDF previews in File manager for PDFs with embedded text. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
* **[Users]** Improved the layout of the v2 Users and Permissions pages and optimized department tree behavior. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
* **[Action: Bulk edit]** Optimized how v2 action plugins are loaded and kept the order of migrated action buttons stable. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
* **[Version control]** Renamed the Chinese display name of the Version control plugin to “版本控制”. by @cgyrock

### 🐛 Bug Fixes

* **[cli-v1]** Fixed an error when running `<span>yarn dev</span>` after upgrading projects created with create-nocobase-app from 2.0 to 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
* **[flow-engine]** Fixed Vietnamese and Chinese IME input issues in v2 single-line text and multiline text fields. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
* **[client-v2]** Fixed the issue where migration progress did not display the dedicated progress view. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
* **[server]** Fixed unsafe plugin name handling in `<span>pm:enable</span>` to avoid local file inclusion risks during plugin resolution. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
* **[Async task manager]** Fixed database query errors caused by missing `<span>filterByTk</span>` when downloading async task files. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
* **[File manager]** Fixed PDF preview failures caused by abnormal loading of the pdf.js worker module. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
* **[Block: Kanban]** Fixed the issue where opening Calendar, Gantt, and Kanban blocks in non-edit mode unexpectedly persisted hidden popup actions and repeatedly sent delete requests. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
* **[Action: Export records Pro]** Improved the processing mode settings and help text for v2 Import/Export Pro. by @katherinehhh
* **[Multi-space]** Fixed the issue where space administrators could not add space users when they did not have permission for the user email field. by @jiannx
* **[Migration manager]** Fixed possible failures when importing large migration data files. by @2013xile
* **[Template print]** Rejected unsupported template file types before template printing starts. by @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/en/blog/v2.2.0-beta.2)

*Release date: 2026-06-13**

### 🎉 New Features

- **[AI employees]** Added an external vector store configuration form for AI knowledge bases. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[AI: Knowledge base]** Added an external vector store configuration form for AI knowledge bases. by @cgyrock
- **[Email manager]** Migrated the Email manager client to v2. by @jiannx

### 🚀 Improvements

- **[cli]**

  - Optimized compatibility checks for different version number formats. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - Added support for updating skills to a specified version. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos
  - Improved the wording of initialization setup prompts. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[undefined]**

  - Added a version control conversation scenario to the AI Builder overview page. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    Reference: [AI Builder Quick Start](https://docs.nocobase.com/en/ai-builder)
  - Improved version control documentation with notes on automatic version saving in AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
    Reference: [Version control](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** Improved the workflow metadata editing experience by supporting description editing in the details popup and automatically filling source workflow metadata when duplicating workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher
- **[Action: Import records]** Improved import and async task error detail dialogs so long error messages can be fully viewed without breaking the layout. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[Translation test tool]** Added a client-v2 settings page for the translation test tool. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx
- **[Action: Import records Pro]** Improved import dialogs so long error messages can be fully viewed, and processing mode can be selected directly from the v2 settings menu. by @katherinehhh

### 🐛 Bug Fixes

- **[client]** Fixed the issue where fields in horizontal subforms were too narrow to display data. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[client-v2]** Fixed the issue where v2 pages could keep loading after signing in. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]** Added Node.js version detection for the nb runtime environment. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[Action: Import records]** Changed uploaded import files to disk storage to reduce memory pressure during large data imports. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[Async task manager]** Fixed incorrect request IDs in async task worker logs. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[Workflow]**

  - Fixed workflow timeout handling so aborted executions and their pending tasks can be updated atomically. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - Fixed the issue where the workflow’s last updated by field was not updated after workflow node changes. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[Data source manager]**

  - Fixed the blank field edit drawer caused by repeated rerenders on the v1 external data source Configure fields page. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - Fixed the issue where deleting the current collection category in the v1 data source manager could leave the All collections tab empty. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[Backup manager]** Fixed a security issue where unsafe PostgreSQL schema names could be accepted during backup restoration. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[Workflow: SQL node]** Fixed the issue where SQL workflow legacy template variable migration was skipped for some beta-version users. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[Block: Kanban]** Fixed URL support for Calendar and other popups. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[AI employees]**

  - Fixed the issue where attachments pasted into the AI employee dialog could not be removed. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
  - Fixed loss of message configuration in workflow LLM nodes. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
- **[File manager]** Fixed missing Chinese/CID font text in some PDF previews after switching to pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher
- **[API documentation]** Fixed the build failure of the API documentation plugin declaration file. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh
- **[Action: Import records Pro]** Avoided parsing large files in the request node before Pro import creates an async task. by @mytharcher
- **[Version control]** Adjusted the position of the version control top shortcut entry so it appears next to the UI editor in both legacy and v2 admin layouts. by @cgyrock
- **[Workflow: Approval]** Fixed the issue where related data was not displayed in v2 approval forms. by @zhangzhonghe

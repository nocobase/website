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

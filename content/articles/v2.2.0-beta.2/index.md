### 🎉 New Features

- **[AI employees]**
  - Added an external vector store configuration form for AI knowledge bases. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock

  - Added an external vector store configuration form for AI knowledge bases. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock

- **[AI: Knowledge base]** Added an external vector store configuration form for AI knowledge bases. by @cgyrock

- **[Email manager]** Migrated the email manager client to v2. by @jiannx

### 🚀 Improvements

- **[cli]**
  - normalize app compat build versions ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos

  - support updating skills to a specified version ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos

  - clarify init setup wording ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos

- **[undefined]**
  - Add a version control scenario to the AI builder quick start ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
Reference: [AI Builder Quick Start](https://docs.nocobase.com/en/ai-builder)
  - Improved the version control documentation with AI Builder automatic revision guidance. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock

- **[Workflow]** Improved workflow metadata editing by allowing descriptions to be edited from the details modal and pre-filling duplicate workflow metadata. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher

- **[Action: Import records]** Improved import and async task error dialogs so long error messages can be fully read without breaking the layout. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh

- **[Locale tester]** Added a client v2 settings page for the locale tester. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx

- **[Action: Import records Pro]** Improved import dialogs so long error messages remain readable and v2 processing mode can be selected directly from the settings menu. by @katherinehhh

### 🐛 Bug Fixes

- **[client]** Fix the issue where fields in horizontal subforms are too narrow to display data ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe

- **[client-v2]** Fix the issue where v2 pages could keep loading after signing in ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe

- **[cli]** require Node.js 22 for nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos

- **[Action: Import records]** Store import uploads on disk to reduce memory pressure during large imports. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher

- **[Async task manager]** Fixed incorrect request IDs in async task worker logs ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile

- **[Workflow]**
  - Fixed workflow timeout handling so aborted executions and their pending jobs are updated atomically. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher

  - Fixed workflow last modifier tracking after workflow nodes are changed. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher

- **[Data source manager]**
  - Fixed the blank edit field drawer caused by repeated rerenders on the v1 external data source Configure fields page. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh

  - Fixed an issue where deleting the active collection category in the v1 data source manager could leave the All collections tab empty. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh

- **[Backup manager]** Fixed a security issue where unsafe PostgreSQL schema names could be accepted during backup restore ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile

- **[Workflow: SQL node]** Fixed SQL workflow legacy template-variable migration being skipped for some beta-version users. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher

- **[Block: Kanban]** Fixed URL support for calendar and related popups. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx

- **[AI employees]**
  - Fixed an issue where attachments pasted into the AI employee dialog could not be removed. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock

  - Fixed loss of message configuration in workflow LLM nodes. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock

- **[File manager]** Fix PDF previews missing CJK/CID font text after switching to pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher

- **[API documentation]** Fixed the API documentation package declaration build failure. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh

- **[Action: Import records Pro]** Avoid parsing large pro import files on the request node before async task creation. by @mytharcher

- **[Version control]** Adjusted the Version control topbar shortcut to appear next to the UI editor in both legacy and v2 admin layouts. by @cgyrock

- **[Workflow: Approval]** Fix the issue where related data is not displayed in v2 approval forms by @zhangzhonghe


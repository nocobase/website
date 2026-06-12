### 🚀 Improvements

- **[cli]**
  - normalize app compat build versions ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos

  - support updating skills to a specified version ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos

### 🐛 Bug Fixes

- **[client]** Fix the issue where fields in horizontal subforms are too narrow to display data ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe

- **[Data source manager]**
  - Fixed the blank edit field drawer caused by repeated rerenders on the v1 external data source Configure fields page. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh

  - Fixed an issue where deleting the active collection category in the v1 data source manager could leave the All collections tab empty. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh

- **[Async task manager]** Fixed incorrect request IDs in async task worker logs ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile

- **[Workflow: SQL node]** Fixed SQL workflow legacy template-variable migration being skipped for some beta-version users. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher

- **[AI employees]**
  - Fixed loss of message configuration in workflow LLM nodes. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock

  - Fixed an issue where attachments pasted into the AI employee dialog could not be removed. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock

- **[Block: Kanban]** Fixed URL support for calendar and related popups. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx

- **[Workflow: Approval]** Fix the issue where related data is not displayed in v2 approval forms by @zhangzhonghe


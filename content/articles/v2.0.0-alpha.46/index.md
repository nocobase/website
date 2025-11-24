### 🚀 Improvements

- **[flow-engine]** Support switch flow model class dynamically ([#7952](https://github.com/nocobase/nocobase/pull/7952)) by @gchust

- **[AI employees]** AI employee plugin add upgrade hook ([#7951](https://github.com/nocobase/nocobase/pull/7951)) by @heziqiang

- **[Async task manager]** Enhanced error messages for asynchronous tasks to provide users with specific reasons for task failures ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher

- **[Workflow: Approval]**
  - Make payload of manually executing (or triggering by sub-flow node) compatible with record or primary key. Avoid consistency issue in trigger context. by @mytharcher

  - Reduce associations to load in approval popup, to provide better performance by @mytharcher

  - Fix variable select in AssigneeSelect, limit only PK or FK of users collection could be selected by @mytharcher

### 🐛 Bug Fixes

- **[client]** fix auto-wrap text fields in detail block when content exceeds width ([#7955](https://github.com/nocobase/nocobase/pull/7955)) by @katherinehhh

- **[Async task manager]** Add migration rule for `asyncTasks` collection, avoid async tasks records to be migrated ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher

- **[File manager]** fix  upload files to specified storage instead of default storage ([#7947](https://github.com/nocobase/nocobase/pull/7947)) by @katherinehhh

- **[Workflow: Approval]** Fix language file by @mytharcher


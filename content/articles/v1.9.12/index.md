### 🚀 Improvements

- **[client]** Add loading state for update record and destroy record action button, avoid duplicated requests ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher

- **[Async task manager]** Enhanced error messages for asynchronous tasks to provide users with specific reasons for task failures ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher

- **[Action: Import records Pro]** Enhanced error messages for asynchronous tasks to provide users with specific reasons for task failures by @mytharcher

- **[Workflow: Approval]**
  - Fix variable select in AssigneeSelect, limit only PK or FK of users collection could be selected by @mytharcher

  - Reduce associations to load in approval popup, to provide better performance by @mytharcher

  - Make payload of manually executing (or triggering by sub-flow node) compatible with record or primary key. Avoid consistency issue in trigger context. by @mytharcher

### 🐛 Bug Fixes

- **[Async task manager]** Add migration rule for `asyncTasks` collection, avoid async tasks records to be migrated ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher

- **[Workflow: Approval]** Fix language file by @mytharcher


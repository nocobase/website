### 🎉 New Features

- **[IdP: OAuth]** Add a new IdP: OAuth plugin to enable MCP services to authenticate via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile

- **[AI employees]** Scheduled cleanup of AI conversation checkpoint data. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock

- **[App supervisor]** Support filtering in the application list<br />Add confirmation dialogs for start and stop actions<br />Sort application status entries by environment name by @2013xile

### 🚀 Improvements

- **[server]** improve pm add logic ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos

- **[client]** Support showing confirm message before closing popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust

- **[undefined]** Add a dedicated client-v2 entry and build it independently with rsbuild while keeping v1 unchanged. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn

- **[Workflow]**
  - Fix the issue where gracefully shutdown not drain all events ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher

  - Add filter executions list ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher

- **[Async task manager]** async tasks are added to support workers in post error messages ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

- **[Workflow: Approval]** Avoid to configure approvers' UI when no collection configured in trigger by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - fix the issue where non-administrators cannot clear associated field values ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx

  - Fixed the issue where the “Select record” popup in the subtable failed to load correctly when opened the second time. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust

- **[resourcer]** Prevent the `filterByTk` parameter array from being automatically converted into an object when it exceeds 100 items ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile

- **[server]** Fix the issue where lifecycle events sent by worker cause serving app stops ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher

- **[Data source manager]** Fixed issue that collection created by AI employee always missing `createBy` and `updateBy` fields ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock

- **[AI employees]**
  - Fix issue with specified URL for LLM service not taking effect in text embedding model calls. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock

  - Fixed potential undefined variable errors in AI plugin upgrade migration scripts. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock

- **[Action: Import records Pro]**
  - Fix the issue where columns more than ~30 cause importing error, due to stream has been read duplicately by @mytharcher

  - Fix the issue where error thrown when import in sync mode by @mytharcher

  - Fix `beforeStop` event on sub app not fired by @mytharcher

  - Fix the issue where async tasks do not end after an error occurs in async import by @cgyrock

  - Fix lazy import caused SES error by @mytharcher

- **[Template print]** Fix sql collection printing error by @jiannx

- **[Workflow: Approval]** Fix concurrency issue when add assignee by @mytharcher

- **[Email manager]** Fixed page error when the email does not exist by @jiannx

- **[Migration manager]** Fixed the issue where the migration is interrupted due to an error caused by the target environment not having the new table created during the upload migration process. by @Andrew1989Y


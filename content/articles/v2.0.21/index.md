### 🚀 Improvements

- **[Workflow]** Add filter executions list ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher

- **[Workflow: Approval]** Avoid to configure approvers' UI when no collection configured in trigger by @mytharcher

### 🐛 Bug Fixes

- **[resourcer]** Prevent the `filterByTk` parameter array from being automatically converted into an object when it exceeds 100 items ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile

- **[client]** fix the issue where non-administrators cannot clear associated field values ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx

- **[Action: Import records Pro]**
  - Fix the issue where error thrown when import in sync mode by @mytharcher

  - Fix the issue where columns more than ~30 cause importing error, due to stream has been read duplicately by @mytharcher

- **[Workflow: Approval]** Fix concurrency issue when add assignee by @mytharcher


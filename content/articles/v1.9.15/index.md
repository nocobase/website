### 🐛 Bug Fixes

- **[client]**
  - Avoid error thrown when open default value settings ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher

  - resolve error when adding child records in association tree table block ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh

- **[Departments]** Fix the issue where department associated fields could not be edited ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang

- **[Collection: Tree]** Fix path table update failures caused by incorrect tree parent-field lookup ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile

- **[Collection field: Many to many (array)]** Fixed the issue where the m2m array field in the subtable could not be updated ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock

- **[Workflow: Approval]**
  - Fix no applicant data in context of execution after user re-submitted by @mytharcher

  - Fix the issue where comment in job result is null after user submit approval with comment by @mytharcher


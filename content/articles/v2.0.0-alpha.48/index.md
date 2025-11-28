### 🎉 New Features

- **[Block: Map]** add 2.0 map block ([#7944](https://github.com/nocobase/nocobase/pull/7944)) by @katherinehhh

- **[Auth: OIDC]** Support automatic redirection to the SSO URL when unauthenticated by @heziqiang

### 🐛 Bug Fixes

- **[client]**
  - Avoid error thrown when open default value settings ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher

  - resolve error when adding child records in association tree table block ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh

  - fix display issue when the markdown field is ellipsized in HTML mode ([#7994](https://github.com/nocobase/nocobase/pull/7994)) by @katherinehhh

  - fix incomplete search results in cascade selector ([#7990](https://github.com/nocobase/nocobase/pull/7990)) by @katherinehhh

  - Fix the issue where the page tab state and route do not correspond ([#7991](https://github.com/nocobase/nocobase/pull/7991)) by @zhangzhonghe

  - fix remote remote select not showing correct label for non-object value ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh

- **[database]** Fix: remove UTC processing in time conversion for time-only fields to prevent timezone-induced shifts. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu

- **[Workflow]**
  - Fix the issue where prepared executions not send to queue before stop ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher

  - Fix the issue where some workflow tasks menu not displaying ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher

  - Fix the issue where task link to error page ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher

- **[Data visualization]** Filter fields settings for external data source collections do not display specific properties ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile

- **[Data source manager]** Fixed data source password updating failure when database password is changed ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock

- **[Action: Import records]** Fixed the issue when importing data in tree table ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock

- **[Workflow: Manual node]** Fix the issue where manual tasks count is not correct ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher

- **[Workflow: Approval]**
  - Fix no applicant data in context of execution after user re-submitted by @mytharcher

  - Fix the issue where comment in job result is null after user submit approval with comment by @mytharcher


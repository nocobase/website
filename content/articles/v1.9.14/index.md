### 🎉 New Features

- **[Auth: OIDC]** Support automatic redirection to the SSO URL when unauthenticated by @heziqiang

### 🚀 Improvements

- **[client]** Use triple brackets (`{{{` and `}}}`) for variables in message content, to avoid variables been escaped by Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher

- **[Collection field: Markdown(Vditor)]** adjust vditor fullscreen content width ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

### 🐛 Bug Fixes

- **[database]** Fix: remove UTC processing in time conversion for time-only fields to prevent timezone-induced shifts. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu

- **[client]** fix remote remote select not showing correct label for non-object value ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh

- **[Workflow]**
  - Fix the issue where prepared executions not send to queue before stop ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher

  - Fix the issue where task link to error page ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher

  - Fix the issue where some workflow tasks menu not displaying ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher

  - Fix tasks count not showing caused by provider misused ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher

- **[Workflow: Manual node]** Fix the issue where manual tasks count is not correct ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher

- **[Data visualization]**
  - Filter fields settings for external data source collections do not display specific properties ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile

  - Resolve issue where chart query did not support ACL data scope ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile

- **[Data source manager]** Fixed data source password updating failure when database password is changed ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock

- **[Action: Import records]** Fixed the issue when importing data in tree table ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock


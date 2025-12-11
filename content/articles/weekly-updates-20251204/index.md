Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860-djgsxo.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.19](https://www.nocobase.com/en/blog/v1.9.19)

*Release date: 2025-12-04*

### 🐛 Bug Fixes

- **[Workflow: Approval]**
  - Fix the issue when list approvals OOM happens by @mytharcher
  - Fix the issue where the approver pop-up window does not display a title by @zhangzhonghe

### [v1.9.18](https://www.nocobase.com/en/blog/v1.9.18)

*Release date: 2025-12-04*

### 🐛 Bug Fixes

- **[Action: Import records]** Imported fields do not match the fields set in ACLsettings ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile
- **[Workflow]** Fix the issue where execution page throw error when jobs on node is undefined ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher
- **[Access control]** Add middleware for permission checks on association operations for external data source ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile
- **[Workflow: Approval]**

  - Fix the issue of permission error thrown when load record related approvals on detail drawer by @mytharcher
  - Fix the issue where approval records are not included in job result in return branch by @mytharcher
  - Fix the issue where process is incorrect when branching with order and countersign by @mytharcher

### [v1.9.17](https://www.nocobase.com/en/blog/v1.9.17)

*Release date: 2025-12-02*

### 🐛 Bug Fixes

- **[client]** Fix the flickering issue of the linkage rule dropdown select box ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe
- **[acl]** Fix an issue where ACL meta info is incorrect when external data-source permission scopes use current-user related variables ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile
- **[Theme editor]** Enable theme switcher on mobile devices ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe
- **[Multi-app manager]** Log level settings not applied to sub applications ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile

### [v1.9.16](https://www.nocobase.com/en/blog/v1.9.16)

*Release date: 2025-12-02*

### 🎉 New Features

- **[Data source: REST API]** add `error message transformer` options in restful api data source configuration by @cgyrock

### 🚀 Improvements

- **[client]**

  - show collapsed options on hover in Select component ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh
  - optimize validation messages for subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh
- **[Workflow]** Add "main" data source context for UserSelect, in order to provide a more common component which could be used in other place ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher
- **[Workflow: Approval]** Use common component to reduce duplicated code by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix lazy load bug in Variable.Input, which will cause variable options menu re-render incorrectly ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher
- **[Action: Import records]** Fix the issue where error thrown when field in importing xlsx has `null` value ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher
- **[Workflow]** Fix the issue where queue closed before messages publishing ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher
- **[Workflow: Subflow]** Fix the issue workflow selected displaying "N/A" when workflow count is larger than 200 by @mytharcher
- **[Workflow: Approval]**

  - Fix permission issue when get `approvalRecords.reassignee` due to `RemoteSelect` changed by @mytharcher
  - Fix the issue where print action not works when refresh page with modal opened by @mytharcher

### [v1.9.15](https://www.nocobase.com/en/blog/v1.9.15)

*Release date: 2025-11-28*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.50](https://www.nocobase.com/en/blog/v2.0.0-alpha.50)

*Release date: 2025-12-02*

### 🚀 Improvements

- **[client]**

  - support allow Multiple setting in attachment upload component ([#8052](https://github.com/nocobase/nocobase/pull/8052)) by @katherinehhh
  - show collapsed options on hover in Select component ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh
  - show collapsed options on hover in  Select component ([#8030](https://github.com/nocobase/nocobase/pull/8030)) by @katherinehhh
- **[AI employees]** add missing provider field to the Add LLM form ([#8049](https://github.com/nocobase/nocobase/pull/8049)) by @heziqiang
- **[Workflow]** Add "main" data source context for UserSelect, in order to provide a more common component which could be used in other place ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Fix issue where N/A is displayed after disabling allowMultiple in many-to-many association record select ([#8050](https://github.com/nocobase/nocobase/pull/8050)) by @katherinehhh
  - Fix the flickering issue of the linkage rule dropdown select box ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe
  - Fixed an issue where switching a date field to a time field in filter action caused a rendering error. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) by @gchust
  - Fixed an issue where the current record menu appeared when adding a comment block. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) by @gchust
  - Fix failed to delete record in record picker block ([#8023](https://github.com/nocobase/nocobase/pull/8023)) by @katherinehhh
  - Fixed an issue where the default style of the JS field in the detail block was incorrect. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) by @gchust
  - fix  tree table block cannot expand child nodes ([#8011](https://github.com/nocobase/nocobase/pull/8011)) by @katherinehhh
  - fix subtable column drag not working ([#8026](https://github.com/nocobase/nocobase/pull/8026)) by @katherinehhh
  - fix subtable column width not applied ([#8027](https://github.com/nocobase/nocobase/pull/8027)) by @katherinehhh
  - Resolved an issue causing errors when loading data for association fields in popup windows, ensuring smoother data display and functionality. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) by @gchust
  - fix markdown display field popover style issue ([#8012](https://github.com/nocobase/nocobase/pull/8012)) by @katherinehhh
  - Fixed an issue where the default titles of the edit and create new action popups were incorrect. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) by @gchust
  - Fix lazy load bug in Variable.Input, which will cause variable options menu re-render incorrectly ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher
  - Fixed an issue where the current popup record variable could not be correctly resolved in popup opened by association field. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) by @gchust
- **[acl]** Fix an issue where ACL meta info is incorrect when external data-source permission scopes use current-user related variables ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile
- **[flow-engine]**

  - fix comment record fails to save after editing ([#8035](https://github.com/nocobase/nocobase/pull/8035)) by @katherinehhh
  - Fixed an issue where data blocks did not refresh when closing a popup by clicking the form submit button inside the popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) by @gchust
- **[Theme editor]** Enable theme switcher on mobile devices ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe
- **[Multi-app manager (deprecated)]** Log level settings not applied to sub applications ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile
- **[Data source manager]** Fix errors when updating passwords for external data sources ([#8024](https://github.com/nocobase/nocobase/pull/8024)) by @cgyrock
- **[Action: Import records]** Fix the issue where error thrown when field in importing xlsx has `null` value ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher
- **[Workflow]** Fix the issue where queue closed before messages publishing ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher
- **[Comments]**

  - Fix failed to delete record in comment block by @katherinehhh
  - Fix show warning when comment block is used on non-comment collection by @katherinehhh
- **[Multi-space]** Mobile devices support space switching by @jiannx
- **[Workflow: Subflow]** Fix the issue workflow selected displaying "N/A" when workflow count is larger than 200 by @mytharcher
- **[Workflow: Approval]**

  - Fix error thrown when create approval information block by @mytharcher
  - Add migration to avoid duplicated record error when add index by @mytharcher
  - Fix the issue where print action not works when refresh page with modal opened by @mytharcher

### [v2.0.0-alpha.49](https://www.nocobase.com/en/blog/v2.0.0-alpha.49)

*Release date: 2025-11-29*

### 🎉 New Features

- **[Workflow: Approval]** Allow to choose whether to show snapshot or latest record in the approval process UI by @mytharcher

### 🚀 Improvements

- **[client]** optimize validation messages for subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh
- **[Telemetry: Prometheus]** Upgrade `@opentelemetry/exporter-prometheus` by @2013xile
- **[Action: Import records Pro]** Enhanced error messages for asynchronous tasks to provide users with specific reasons for task failures by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]** Fixed an issue where the current record variable could not be correctly triggered for resoving in the details block. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) by @gchust
- **[client]** Fix table block selection and deletion issues for composite keys ([#7978](https://github.com/nocobase/nocobase/pull/7978)) by @katherinehhh
- **[Action: Export records]** fix missing system fields in exportable field list ([#8002](https://github.com/nocobase/nocobase/pull/8002)) by @katherinehhh
- **[Collection: Tree]** Fix path table update failures caused by incorrect tree parent-field lookup ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile
- **[Collection field: Many to many (array)]** Fixed the issue where the m2m array field in the subtable could not be updated ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock
- **[Departments]** Fix the issue where department associated fields could not be edited ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang
- **[Workflow: Approval]** Fix permission issue when get `approvalRecords.reassignee` due to `RemoteSelect` changed by @mytharcher

### [v2.0.0-alpha.48](https://www.nocobase.com/en/blog/v2.0.0-alpha.48)

*Release date: 2025-11-28*

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

### 🎉 New Features

- **[Collection field: Sequence]** Automatically update sequence fields after data migration ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

- **[Data source: REST API]** add `error message transformer` options in restful api data source configuration by @cgyrock

- **[Auth: OIDC]** Support automatic redirection to the SSO URL when unauthenticated by @heziqiang

### 🚀 Improvements

- **[auth]** Fix [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile

- **[client]**
  - show collapsed options on hover in Select component ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh

  - optimize validation messages for subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh

  - Add loading state for update record and destroy record action button, avoid duplicated requests ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher

  - Use triple brackets (`{{{` and `}}}`) for variables in message content, to avoid variables been escaped by Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher

- **[Action: Import records]** allow selecting ID for import fields ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh

- **[Workflow]** Add "main" data source context for UserSelect, in order to provide a more common component which could be used in other place ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher

- **[Collection field: Markdown(Vditor)]** adjust vditor fullscreen content width ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

- **[Async task manager]** Enhanced error messages for asynchronous tasks to provide users with specific reasons for task failures ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher

- **[Action: Import records Pro]** Enhanced error messages for asynchronous tasks to provide users with specific reasons for task failures by @mytharcher

- **[Workflow: Approval]**
  - Fix variable select in AssigneeSelect, limit only PK or FK of users collection could be selected by @mytharcher

  - Use common component to reduce duplicated code by @mytharcher

  - Make payload of manually executing (or triggering by sub-flow node) compatible with record or primary key. Avoid consistency issue in trigger context. by @mytharcher

  - Reduce associations to load in approval popup, to provide better performance by @mytharcher

- **[Audit logs]** Update the unique identifier field to `text` to prevent identifier length overflow during bulk edits by @2013xile

- **[Migration manager]** Automatically update sequence fields after data migration by @cgyrock

### 🐛 Bug Fixes

- **[server]** Fixed an issue where triggered workflows were not added to the processing queue after importing data, ensuring that workflows run as expected immediately post-import ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher

- **[acl]** Fix an issue where ACL meta info is incorrect when external data-source permission scopes use current-user related variables ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile

- **[client]**
  - Fix lazy load bug in Variable.Input, which will cause variable options menu re-render incorrectly ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher

  - resolve error when adding child records in association tree table block ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh

  - Fix the flickering issue of the linkage rule dropdown select box ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe

  - Avoid error thrown when open default value settings ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher

  - Fix routing issues when using an Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe

  - fix remote remote select not showing correct label for non-object value ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh

- **[database]** Fix: remove UTC processing in time conversion for time-only fields to prevent timezone-induced shifts. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu

- **[Action: Import records]**
  - Imported fields do not match the fields set in ACLsettings ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile

  - Fix the issue where error thrown when field in importing xlsx has `null` value ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher

  - Fixed the issue when importing data in tree table ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock

- **[Workflow]**
  - Fix the issue where execution page throw error when jobs on node is undefined ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher

  - Fix the issue where error thrown in execution canvas when node is deleted ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher

  - Fix the issue where queue closed before messages publishing ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher

  - Fix the issue where prepared executions not send to queue before stop ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher

  - Fix the issue where some workflow tasks menu not displaying ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher

  - Fix the issue where task link to error page ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher

  - Fix tasks count not showing caused by provider misused ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher

- **[Multi-app manager]** Log level settings not applied to sub applications ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile

- **[Access control]** Add middleware for permission checks on association operations for external data source ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile

- **[Collection field: Many to many (array)]** Fixed the issue where the m2m array field in the subtable could not be updated ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock

- **[Theme editor]** Enable theme switcher on mobile devices ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe

- **[Data visualization]**
  - Filter fields settings for external data source collections do not display specific properties ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile

  - Resolve issue where chart query did not support ACL data scope ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile

- **[Collection: Tree]** Fix path table update failures caused by incorrect tree parent-field lookup ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile

- **[Workflow: Manual node]** Fix the issue where manual tasks count is not correct ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher

- **[Async task manager]** Add migration rule for `asyncTasks` collection, avoid async tasks records to be migrated ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher

- **[Data source manager]** Fixed data source password updating failure when database password is changed ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock

- **[Departments]** Fix the issue where department associated fields could not be edited ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang

- **[Workflow: Subflow]** Fix the issue workflow selected displaying "N/A" when workflow count is larger than 200 by @mytharcher

- **[Workflow: Approval]**
  - Fix language file by @mytharcher

  - Fix the issue where approval records are not included in job result in return branch by @mytharcher

  - Fix the issue where no data when loading related approvals with ACL scope variables by @mytharcher

  - Fix permission issue when get `approvalRecords.reassignee` due to `RemoteSelect` changed by @mytharcher

  - Fix the issue where print action not works when refresh page with modal opened by @mytharcher

  - Add migration to avoid duplicated record error when add index by @mytharcher

  - Fix the issue where process is incorrect when branching with order and countersign by @mytharcher

  - Fix the issue where comment in job result is null after user submit approval with comment by @mytharcher

  - Fix no applicant data in context of execution after user re-submitted by @mytharcher

  - Fix the issue of permission error thrown when load record related approvals on detail drawer by @mytharcher

  - Fix the issue where the approver pop-up window does not display a title by @zhangzhonghe

  - Fix the issue where error thrown when load related approval in union only role mode by @mytharcher

  - Fix the issue when list approvals OOM happens by @mytharcher


Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/en/blog/v1.9.24)

*Release date: 2025-12-09*

### 🐛 Bug Fixes

- **[client]** Fix the issue where `RemoteSelect` component incorrectly loading record when value is null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher
- **[Collection field: Sequence]** Improve the robustness of the plugin-field-sequence when handling the repair command ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock
- **[Notification: Email]** fix email notification connection limitation ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

### [v1.9.23](https://www.nocobase.com/en/blog/v1.9.23)

*Release date: 2025-12-09*

### 🚀 Improvements

- **[auth]** Fix [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
- **[Action: Import records]** allow selecting ID for import fields ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh

### 🐛 Bug Fixes

- **[server]** Fixed an issue where triggered workflows were not added to the processing queue after importing data, ensuring that workflows run as expected immediately post-import ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher

### [v1.9.21](https://www.nocobase.com/en/blog/v1.9.21)

*Release date: 2025-12-07*

### 🚀 Improvements

- **[Audit logs]** Update the unique identifier field to `text` to prevent identifier length overflow during bulk edits by @2013xile

### 🐛 Bug Fixes

- **[Workflow: Approval]** Fix the issue where no data when loading related approvals with ACL scope variables by @mytharcher

### [v1.9.20](https://www.nocobase.com/en/blog/v1.9.20)

*Release date: 2025-12-05*

### 🎉 New Features

- **[Collection field: Sequence]** Automatically update sequence fields after data migration ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 Improvements

- **[Migration manager]** Automatically update sequence fields after data migration by @cgyrock

### 🐛 Bug Fixes

- **[Workflow]** Fix the issue where error thrown in execution canvas when node is deleted ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
- **[Workflow: Approval]** Fix the issue where error thrown when load related approval in union only role mode by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/en/blog/v1.9.0-beta.18)

*Release date: 2025-12-09*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/en/blog/v2.0.0-alpha.52)

*Release date: 2025-12-07*

### 🎉 New Features

- **[client]** add support for add/select/disassociate settings in to-many subform ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh
- **[Data source: REST API]** add `error message transformer` options in restful api data source configuration by @cgyrock

### 🚀 Improvements

- **[auth]** Fix [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
- **[Action: Import records]**

  - allow selecting ID for import fields ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh
  - allow selecting ID for import fields ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh
- **[Workflow: Approval]** Change API to get single approval item, and simplify code by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - fix prevent child disabled state from blocking relation field selection ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh
  - Fix the issue where `RemoteSelect` component incorrectly loading record when value is null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher
  - Fixed an issue where the UI component width was inconsistent when selecting “Past” or “Next” for date filter fields. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust
  - Fixed an issue where default field labels in filter form block could not be correctly translated in multiple languages. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust
  - Fixed an issue where the title and description styles of JS block was inconsistent with other blocks. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust
  - fix nested subtable in subform not displaying data ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh
  - fix  long text field tooltip line break issue ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh
  - Fixed an issue where the selectable data for association fields in filter form block was incorrect. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust
  - Fixed an issue where the selectable options were not fully listed when using the “is any of” or “is none of” operators for option-based field filtering. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust
  - Fixed an issue where custom fields configurations in filter form were not correctly pre-filled and some settings did not take effect. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust
  - Fixed an issue where clearing the between time filter values and triggering the filter again caused an error. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust
  - Fixed an issue where number field value was not correctly pre-filled in filter action. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust
  - Fixed an issue where some field operators in filter forms failed to filter data correctly. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust
  - Fixed an issue where filtering on Checkbox fields did not take effect. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust
- **[flow-engine]**

  - fix: incorrect conversion when using integer type as enum options ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos
  - Fix toggleable sub-model menu items failing when `useModel` is omitted by inferring it from `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe
- **[server]** Fixed an issue where triggered workflows were not added to the processing queue after importing data, ensuring that workflows run as expected immediately post-import ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher
- **[Notification: Email]** fix email notification connection limitation ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx
- **[Collection field: Formula]** Fixed an issue where formula fields in filter action and filter form block could not type input values. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust
- **[Multi-space]** Fix the creation of other fields in the system collection by @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/en/blog/v2.0.0-alpha.51)

*Release date: 2025-12-07*

### 🎉 New Features

- **[client]**

  - Support customizing global styles in the theme editor ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo
  - Support setting default sorting rule in detail block ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh
  - Support setting data type for Number field (options: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos
- **[Collection field: Sequence]** Automatically update sequence fields after data migration ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 Improvements

- **[client]**

  - fix subtable pagination jump after row removal and add support for column validation rules ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh
  - adjust large field display in editable subtable ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh
  - support ellipsis for overflowing JSON field content ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh
- **[flow-engine]**

  - Add useCache option to FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe
  - Add `removeModelWithSubModels` method to recursively remove model and its sub-models ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe
- **[Block: GridCard]** add row count config to grid card and replace pageSize with automatic calculation ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh
- **[Audit logs]** Update the unique identifier field to `text` to prevent identifier length overflow during bulk edits by @2013xile
- **[Migration manager]** Automatically update sequence fields after data migration by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where the configured fields from a removed block were not deleted from the filter block. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust
  - fix extra space gap when button is hidden in non-configuration mode ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh
  - Fixed an issue where the reset button text in filter form block could not be modified. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust
  - Fixed an issue where the field input did not support multiple values when using the\$in / \$notIn operators for filtering fields. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust
  - Fixed an issue where newly added data blocks did not automatically appear in the field menu of the filter form block. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust
  - The configuration menu for association fields in filter forms should not display the quick-create option. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust
  - fix association subtable data issue in List block ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh
  - fix numeric field validation rules from collection settings not applied ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh
  - Fixed an issue where fields in filter forms were restricted by backend validation rules for fields. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust
  - json field quick edit issue ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh
  - fix large field display issue in subtable edit ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh
  - fix quick create throws error when allowMultiple is disabled in association record select ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh
  - fix  json field should be submitted as an object ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh
  - Fixed an issue where the enter key could not be used to trigger the filter action. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust
- **[flow-engine]**

  - Fixed an issue where configuration options from the previous component remained visible in the menu after switching field components. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust
  - Move useEffect before conditional return in FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe
  - Fixed an issue where unsupported association fields appeared in filter operation fields. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust
- **[acl]** fix: acl.allow executed too early ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos
- **[File manager]**

  - Fix incorrect sub-detail data display in List and Grid Card blocks ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh
  - Fix attachment field not displayed correctly in readPretty subtable ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh
- **[Workflow]**

  - Fix the issue where error thrown in execution canvas when node is deleted ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
  - Fix the issue where execution page throw error when jobs on node is undefined ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher
- **[Collection field: Formula]** Fixed an issue where formula fields could not be added to filter form block. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust
- **[Block: Action panel]** optimize style in List layout of action panel block ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh
- **[AI employees]**

  - Resolve issue where datasource role name was not compiled ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang
  - Fixed an issue where some current record fields could not be displayed in the variable selection component. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust
- **[Action: Import records]** Imported fields do not match the fields set in ACLsettings ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile
- **[Access control]** Add middleware for permission checks on association operations for external data source ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile
- **[Workflow: Approval]**

  - Fix the issue where no data when loading related approvals with ACL scope variables by @mytharcher
  - Fix the issue filled data disappeared in assignee's form by @mytharcher
  - Fix the issue of permission error thrown when load record related approvals on detail drawer by @mytharcher
  - Fix the issue where process is incorrect when branching with order and countersign by @mytharcher
  - Fix the issue when list approvals OOM happens by @mytharcher
  - Fix the issue where approval records are not included in job result in return branch by @mytharcher
  - Fix the issue where the approver pop-up window does not display a title by @zhangzhonghe
  - Fix the issue where error thrown when load related approval in union only role mode by @mytharcher
- **[Email manager]**

  - Handling abnormal data by @jiannx
  - not synchronizing gmail scheduled status by @jiannx

Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/en/blog/v1.9.14)

*Release date: 2025-11-27*

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

### [v1.9.13](https://www.nocobase.com/en/blog/v1.9.13)

*Release date: 2025-11-25*

### 🐛 Bug Fixes

- **[client]** Fix routing issues when using an Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe

### [v1.9.12](https://www.nocobase.com/en/blog/v1.9.12)

*Release date: 2025-11-24*

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

### [v1.9.11](https://www.nocobase.com/en/blog/v1.9.11)

*Release date: 2025-11-24*

### 🐛 Bug Fixes

- **[client]** Fix field interface showing many-to-one instead of one-to-one for belongsTo in external data source configuration ([#7936](https://github.com/nocobase/nocobase/pull/7936)) by @cgyrock
- **[Workflow]** Fixed the issue where updating the task count would unintentionally reset the state of forms being filled out ([#7937](https://github.com/nocobase/nocobase/pull/7937)) by @mytharcher
- **[Collection field: Many to many (array)]** Fix M2M (array) field issues when creating/updating related data ([#7926](https://github.com/nocobase/nocobase/pull/7926)) by @cgyrock

### [v1.9.10](https://www.nocobase.com/en/blog/v1.9.10)

*Release date: 2025-11-20*

### 🚀 Improvements

- **[Access control]** Reduce the default permissions for the member role ([#7921](https://github.com/nocobase/nocobase/pull/7921)) by @2013xile
- **[Data visualization]** Added Russian language support for plugin interfaces. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) by @sembaev-a-a
- **[Workflow: Webhook]** Add icon for response node type by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix error: Can't resolve 'antd-mobile' and Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe
- **[Access control]** Support data-scope restrictions for association operations. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) by @2013xile
- **[Data source: Main]** Fix the issue where a newly added one-to-many field cannot be selected as a foreign key before restarting the application. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/en/blog/v1.9.0-beta.17)

*Release date: 2025-11-21*

### 🚀 Improvements

- **[database]** Add the `multipleStatements` option to the MariaDB connection instance to support invoking multiple statements in a single query ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher
- **[Access control]**

  - Reduce the default permissions for the member role ([#7921](https://github.com/nocobase/nocobase/pull/7921)) by @2013xile
  - Optimize permission control logic for association field operations ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
- **[Data visualization]** Added Russian language support for plugin interfaces. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) by @sembaev-a-a
- **[Workflow]** Support data block in workflow to use consolidate detail settings menu ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher
- **[Workflow: Webhook]** Add icon for response node type by @mytharcher
- **[Workflow: JavaScript]** Fix a security vulnerability caused by upper-level functions being passed into the execution environment, preventing exploitation that could grant access to the upper execution context by @mytharcher
- **[Auth: OIDC]** Increase the request timeout by @2013xile
- **[Workflow: Approval]** Add notification for delegated and added assignee by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Fix field interface showing many-to-one instead of one-to-one for belongsTo in external data source configuration ([#7936](https://github.com/nocobase/nocobase/pull/7936)) by @cgyrock
  - Fix error: Can't resolve 'antd-mobile' and Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe
  - Fix the issue where duplicated templates do not appear, which is caused by dragging and then deleting a referenced template ([#7847](https://github.com/nocobase/nocobase/pull/7847)) by @zhangzhonghe
  - Fix the issue where the linkage rule for the approval form is not working ([#7858](https://github.com/nocobase/nocobase/pull/7858)) by @zhangzhonghe
  - fix empty next page issue in simple pagination detail block ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
  - Fix "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
- **[server]**

  - Fix an issue in service-splitting mode where unsubscribed queue messages could not be published ([#7875](https://github.com/nocobase/nocobase/pull/7875)) by @mytharcher
  - Isolate Pub-Sub channel by app name ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
  - Fix an issue where, after enabling service-splitting mode, worker processes sending messages through the message queue would cause errors ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
- **[utils]** Enable object merging in intersect strategy ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
- **[database]** Incorrect index field detection when field names use snake_case style ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
- **[Collection field: Many to many (array)]** Fix M2M (array) field issues when creating/updating related data ([#7926](https://github.com/nocobase/nocobase/pull/7926)) by @cgyrock
- **[Data source: Main]** Fix the issue where a newly added one-to-many field cannot be selected as a foreign key before restarting the application. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) by @cgyrock
- **[Workflow]**

  - Fixed the issue where updating the task count would unintentionally reset the state of forms being filled out ([#7937](https://github.com/nocobase/nocobase/pull/7937)) by @mytharcher
  - Use eventQueue instead of the shared backgroundJob to prevent the shared queue from being incorrectly consumed in service-splitting mode ([#7871](https://github.com/nocobase/nocobase/pull/7871)) by @mytharcher
  - Fix the issue where the workflow plugin still consumes the queue event when it is not in worker mode under the service splitting mode ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
  - Fix the error caused by listening to non-existent external data source events ([#7855](https://github.com/nocobase/nocobase/pull/7855)) by @mytharcher
  - Fix an issue where, in service-splitting mode, manually executing a workflow containing an interrupt node would remain stuck in a pending status ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
  - Add `workflowId` as identity data for logs of workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
  - Resolved an issue where the workflow dispatcher in cluster mode failed to correctly identify idle states, which could lead to unnecessary queue event consuming before plugin is ready ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
- **[Access control]**

  - Support data-scope restrictions for association operations. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) by @2013xile
  - Issue of association operation snippets are not taking effects ([#7876](https://github.com/nocobase/nocobase/pull/7876)) by @2013xile
- **[Workflow: Manual node]** Fix namespace of locale language should use, to show correct content of translation ([#7877](https://github.com/nocobase/nocobase/pull/7877)) by @mytharcher
- **[Users]** Incorrect index refresh when field names use snake_case style ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile
- **[Mobile (deprecated)]** Fix the issue where the date field default value popup on mobile cannot select a date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe
- **[Workflow: Custom variable]** Fix error thrown when no config in variable node by @mytharcher
- **[Workflow: Custom action event]** Fix the error caused by listening to non-existent external data source events by @mytharcher
- **[Template print]** parse the variables in the filter by @jiannx
- **[Data visualization: ECharts]** Fix the issue where the Label type configuration in Echarts options does not take effect. by @heziqiang
- **[Workflow: Approval]**

  - Fix the date format on the approval list cards in the to-do center to display the complete date and time by @mytharcher
  - Fix the issue where the page size of loading notification channel is not big enough, and cause the list is not completed loaded by @mytharcher
  - Fix a performance issue that occurred when querying the list of approval records during approval submission by @mytharcher
  - Fix an issue where main collection fields were not excluded when reloading association data by @mytharcher
  - Fix an issue where race conditions occurring during concurrent approval processing by multiple approvers could cause a workflow node to execute more than once by @mytharcher
  - Creating approval nodes in parallel branches is no longer supported to avoid issues caused by process status by @mytharcher
  - Fix the issue where the linkage rule for the approval form is not working by @zhangzhonghe
  - Fix error thrown when duplicate approval workflow by @mytharcher
- **[Email manager]**

  - add sync logs by @jiannx
  - sync microsoft mail read status without timestamp by @jiannx
  - collection mailMessages add indexes by @jiannx
  - add migration for indexex by @jiannx
  - Fix the issue of reserved images and synchronization in outlook by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/en/blog/v2.0.0-alpha.47)

*Release date: 2025-11-26*

### 🚀 Improvements

- **[client]**

  - Support initializing selected filter fields in chart query ([#7933](https://github.com/nocobase/nocobase/pull/7933)) by @heziqiang
  - Use triple brackets (`{{{` and `}}}`) for variables in message content, to avoid variables been escaped by Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher
  - Add loading state for update record and destroy record action button, avoid duplicated requests ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher
- **[Collection field: Markdown(Vditor)]** adjust vditor fullscreen content width ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where opening the detail block in the popup for non-ID relationship fields caused an error. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) by @gchust
  - Fixed an issue where association data failed to load correctly in the popup for non-ID relationship fields. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) by @gchust
  - Fix routing issues when using an Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe
  - fix issue with invalid precision setting for numeric field format ([#7967](https://github.com/nocobase/nocobase/pull/7967)) by @katherinehhh
  - Fix the incorrect typing in the new 2.0 page ([#7945](https://github.com/nocobase/nocobase/pull/7945)) by @zhangzhonghe
  - fix the issue where the filter value is not cleared when clicking the Reset button ([#7966](https://github.com/nocobase/nocobase/pull/7966)) by @zhangzhonghe
- **[Workflow]** Fix tasks count not showing caused by provider misused ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher
- **[Data visualization]** Resolve issue where chart query did not support ACL data scope ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile
- **[Block: Reference]** Fixed an issue where quoting a block would remove the quoted block from the original page. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) by @gchust
- **[AI employees]** Fix issue when ai generating SQL output ([#7956](https://github.com/nocobase/nocobase/pull/7956)) by @heziqiang
- **[Template print]** fix fail to add template in record template print operation by @katherinehhh

### [v2.0.0-alpha.46](https://www.nocobase.com/en/blog/v2.0.0-alpha.46)

*Release date: 2025-11-24*

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

### [v2.0.0-alpha.45](https://www.nocobase.com/en/blog/v2.0.0-alpha.45)

*Release date: 2025-11-21*

### 🎉 New Features

- **[client]** support column field sorting in table ([#7900](https://github.com/nocobase/nocobase/pull/7900)) by @katherinehhh
- **[Workflow]** Add "Multi-conditions" node, provide the flow control like `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** fix error thrown when clearing value in multi-level cascade ([#7943](https://github.com/nocobase/nocobase/pull/7943)) by @katherinehhh
- **[Data visualization]** Fix issue where chart block not updating after save ([#7920](https://github.com/nocobase/nocobase/pull/7920)) by @heziqiang
- **[Template print]** fix  template print action error in detail block by @katherinehhh

### [v2.0.0-alpha.44](https://www.nocobase.com/en/blog/v2.0.0-alpha.44)

*Release date: 2025-11-21*

### 🎉 New Features

- **[client]**

  - add quick-create support to association field select ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh
  - support cascade selector for tree collection association field ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh
- **[Telemetry]** Add new plugin: Telemetry, an OpenTelemetry-based telemetry plugin providing CPU, memory, and HTTP request metrics with HTTP export support by @2013xile

### 🚀 Improvements

- **[telemetry]** Support controlling which metrics are exported ([#7938](https://github.com/nocobase/nocobase/pull/7938)) by @2013xile
- **[Async task manager]** Async tasks for sub applications should start only the target sub applications in Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) by @2013xile

### 🐛 Bug Fixes

- **[client]**

  - remove tree-table action from non-tree-collection block ([#7931](https://github.com/nocobase/nocobase/pull/7931)) by @katherinehhh
  - Fix field interface showing many-to-one instead of one-to-one for belongsTo in external data source configuration ([#7936](https://github.com/nocobase/nocobase/pull/7936)) by @cgyrock
- **[flow-engine]** Fix the issue of misaligned toolbar icon display in the details block button ([#7929](https://github.com/nocobase/nocobase/pull/7929)) by @zhangzhonghe
- **[Workflow]** Fixed the issue where updating the task count would unintentionally reset the state of forms being filled out ([#7937](https://github.com/nocobase/nocobase/pull/7937)) by @mytharcher
- **[Collection field: Many to many (array)]** Fix M2M (array) field issues when creating/updating related data ([#7926](https://github.com/nocobase/nocobase/pull/7926)) by @cgyrock
- **[Action: Import records Pro]** fix issue where uploader modification of import options has no effect by @katherinehhh

### [v2.0.0-alpha.43](https://www.nocobase.com/en/blog/v2.0.0-alpha.43)

*Release date: 2025-11-20*

### 🚀 Improvements

- **[Data visualization]** Added Russian language support for plugin interfaces. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) by @sembaev-a-a
- **[Access control]** Reduce the default permissions for the member role ([#7921](https://github.com/nocobase/nocobase/pull/7921)) by @2013xile
- **[Workflow: Webhook]** Add icon for response node type by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix error: Can't resolve 'antd-mobile' and Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe
- **[flow-engine]** Fixed the issue where opening the table block's quick edit form caused an error. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) by @gchust
- **[Flow engine]** Ensure record variables always return full records when used together with their individual fields. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) by @gchust
- **[Data source: Main]** Fix the issue where a newly added one-to-many field cannot be selected as a foreign key before restarting the application. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) by @cgyrock
- **[Access control]** Support data-scope restrictions for association operations. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) by @2013xile

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


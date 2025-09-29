### 🎉 New Features

- **[Workflow: Approval]** Support to return to any nodes in approval process by @mytharcher

### 🚀 Improvements

- **[client]** Remove the ellipsis popover from file list ([#7479](https://github.com/nocobase/nocobase/pull/7479)) by @mytharcher

- **[server]** Use standard system logger for message queue ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher

- **[database]** Optimized list API count query to reduce resource consumption. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) by @aaaaaajie

- **[Notification: In-app message]** Support configuring the auto-close delay for in-app message notifications ([#7472](https://github.com/nocobase/nocobase/pull/7472)) by @mytharcher

- **[Workflow]**
  - Optimize the workflow preparation process to support using preloaded node data ([#7476](https://github.com/nocobase/nocobase/pull/7476)) by @mytharcher

  - Optimize the query performance for retrieving queueing execution by using separate fields and indexes ([#7448](https://github.com/nocobase/nocobase/pull/7448)) by @mytharcher

  - Adjust the workflow variable API to support presetting an additional variable list ([#7439](https://github.com/nocobase/nocobase/pull/7439)) by @mytharcher

- **[Workflow: notification node]** Support to test the node of notification ([#7470](https://github.com/nocobase/nocobase/pull/7470)) by @mytharcher

- **[Workflow: Approval]**
  - Support using approval-related variables in custom notifications by @mytharcher

  - Support updating the approval status after the end node terminates the execution by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - incorrect 'not empty' check for numeric fields in linkage rule ([#7477](https://github.com/nocobase/nocobase/pull/7477)) by @katherinehhh

  - association field render error when switched to tag component in edit form block ([#7468](https://github.com/nocobase/nocobase/pull/7468)) by @katherinehhh

  - readonly select/multiselect/date/richtext still editable on public form ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh

  - time limit issue when selected date equals minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) by @katherinehhh

  - required validation not working for attachment fields in subtable ([#7431](https://github.com/nocobase/nocobase/pull/7431)) by @katherinehhh

  - Fix an issue where, in certain scenarios, editing a record in the mobile record picker popup causes an error ([#7444](https://github.com/nocobase/nocobase/pull/7444)) by @zhangzhonghe

- **[undefined]** Fixed issue with filtering by date field only in MySQL external source ([#7422](https://github.com/nocobase/nocobase/pull/7422)) by @aaaaaajie

- **[database]**
  - Fixed a MySQL syntax error that occurred when loading more in-app messages. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) by @aaaaaajie

  - Fixed precision issue for exported Number fields ([#7421](https://github.com/nocobase/nocobase/pull/7421)) by @aaaaaajie

- **[Mobile]** mobile date field without timezone not showing date time correctly ([#7473](https://github.com/nocobase/nocobase/pull/7473)) by @katherinehhh

- **[Public forms]** public form field default value not applied when using variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) by @katherinehhh

- **[Collection: Tree]** Remove database events related to the collection after deleting a tree collection ([#7459](https://github.com/nocobase/nocobase/pull/7459)) by @2013xile

- **[File manager]** Fix the error when editing the `storage` field in the file collection. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) by @mytharcher

- **[Action: Import records]**
  - Fix incorrect row number displayed when duplicate data is imported ([#7440](https://github.com/nocobase/nocobase/pull/7440)) by @aaaaaajie

  - Fixed an issue where import failed when the table primary key was a single-line text ([#7416](https://github.com/nocobase/nocobase/pull/7416)) by @aaaaaajie

- **[Workflow]**
  - Complete the options for automatically deleting workflow execution status ([#7436](https://github.com/nocobase/nocobase/pull/7436)) by @mytharcher

  - Fix the issue where the detail popup was not displayed due to an incorrect route configuration in the tasks center ([#7452](https://github.com/nocobase/nocobase/pull/7452)) by @mytharcher

  - Fix issues related to the mobile menu in the workflow tasks ([#7419](https://github.com/nocobase/nocobase/pull/7419)) by @mytharcher

- **[Workflow: Parallel node]** Fix the issue where incorrect status determination in parallel branch nodes under the "Run all branch" mode caused premature completion ([#7445](https://github.com/nocobase/nocobase/pull/7445)) by @mytharcher

- **[Action: Import records Pro]** Fixed unexpected update result when using string primary key in xlsx import. by @aaaaaajie

- **[Workflow: Custom action event]** Fix the issue where custom action events cannot be manually executed immediately after initialization by @mytharcher

- **[Workflow: Subflow]** Fix the issue of subprocesses being resumed and executed multiple times by @mytharcher

- **[Workflow: Approval]**
  - Fix the issue where the status text in the approval completion notification was not translated by @mytharcher

  - For users who are not the current approver, the corresponding view button in the process flow table will not be displayed by @mytharcher

  - Add the status variable for custom templates in approval completion notifications by @mytharcher


### 🎉 New Features

- **[Data visualization]** add AI employee for configuring chart ([#7815](https://github.com/nocobase/nocobase/pull/7815)) by @heziqiang

### 🚀 Improvements

- **[flow-engine]**
  - Support listening flow models tree change event in flow engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) by @gchust

  - improve current record variable resolving, make opening dialog faster ([#7895](https://github.com/nocobase/nocobase/pull/7895)) by @gchust

  - Optimized the API structure of third-party libraries in the runjs context and added support for the Antd icon library. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) by @gchust

- **[database]** Refactored the field encryption plugin to enhance security, supporting application key generation and rotation, and per-field encryption keys. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) by @cgyrock

- **[Collection field: Encryption]** Optimized field encryption plugin to support data retrieval with independent IVs by @cgyrock

### 🐛 Bug Fixes

- **[client]**
  - Fixed the issue where hidden blocks still occupied space on the page. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) by @gchust

  - Fix the issue where the reset button in the filter button clears default conditions ([#7903](https://github.com/nocobase/nocobase/pull/7903)) by @zhangzhonghe

  - fix incorrect permission check for subform fields in new forms ([#7902](https://github.com/nocobase/nocobase/pull/7902)) by @katherinehhh

- **[server]** Fix an issue in service-splitting mode where unsubscribed queue messages could not be published ([#7875](https://github.com/nocobase/nocobase/pull/7875)) by @mytharcher

- **[Workflow]**
  - Fix the error caused by listening to non-existent external data source events ([#7855](https://github.com/nocobase/nocobase/pull/7855)) by @mytharcher

  - Use eventQueue instead of the shared backgroundJob to prevent the shared queue from being incorrectly consumed in service-splitting mode ([#7871](https://github.com/nocobase/nocobase/pull/7871)) by @mytharcher

- **[Workflow: Manual node]** Fix namespace of locale language should use, to show correct content of translation ([#7877](https://github.com/nocobase/nocobase/pull/7877)) by @mytharcher

- **[Access control]** Issue of association operation snippets are not taking effects ([#7876](https://github.com/nocobase/nocobase/pull/7876)) by @2013xile

- **[Workflow: Custom action event]** Fix the error caused by listening to non-existent external data source events by @mytharcher

- **[Comments]** fix  issue when quoted comments in comment block fail to display by @katherinehhh

- **[Template print]** parse the variables in the filter by @jiannx

- **[Workflow: Approval]** Fix an issue where race conditions occurring during concurrent approval processing by multiple approvers could cause a workflow node to execute more than once by @mytharcher


Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.8](https://www.nocobase.com/en/blog/v1.9.8)

*Release date: 2025-11-19*

### 🐛 Bug Fixes

- **[Workflow: Custom action event]** Fix the error caused by listening to non-existent external data source events by @mytharcher
- **[Template print]** parse the variables in the filter by @jiannx
- **[Workflow: Approval]** Fix an issue where race conditions occurring during concurrent approval processing by multiple approvers could cause a workflow node to execute more than once by @mytharcher

### [v1.9.7](https://www.nocobase.com/en/blog/v1.9.7)

*Release date: 2025-11-18*

### 🐛 Bug Fixes

- **[client]** Fix the issue where the linkage rule for the approval form is not working ([#7858](https://github.com/nocobase/nocobase/pull/7858)) by @zhangzhonghe
- **[server]** Fix an issue in service-splitting mode where unsubscribed queue messages could not be published ([#7875](https://github.com/nocobase/nocobase/pull/7875)) by @mytharcher
- **[Workflow]**

  - Fix the error caused by listening to non-existent external data source events ([#7855](https://github.com/nocobase/nocobase/pull/7855)) by @mytharcher
  - Use eventQueue instead of the shared backgroundJob to prevent the shared queue from being incorrectly consumed in service-splitting mode ([#7871](https://github.com/nocobase/nocobase/pull/7871)) by @mytharcher
- **[Workflow: Manual node]** Fix namespace of locale language should use, to show correct content of translation ([#7877](https://github.com/nocobase/nocobase/pull/7877)) by @mytharcher
- **[Access control]** Issue of association operation snippets are not taking effects ([#7876](https://github.com/nocobase/nocobase/pull/7876)) by @2013xile
- **[Workflow: Approval]**

  - Fix the issue where the page size of loading notification channel is not big enough, and cause the list is not completed loaded by @mytharcher
  - Fix the issue where the linkage rule for the approval form is not working by @zhangzhonghe
  - Fix the date format on the approval list cards in the to-do center to display the complete date and time by @mytharcher
  - Fix a performance issue that occurred when querying the list of approval records during approval submission by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.42](https://www.nocobase.com/en/blog/v2.0.0-alpha.42)

*Release date: 2025-11-19*

### 🐛 Bug Fixes

- **[client]** Fixed an issue where the title and description were not displayed in the JS block. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) by @gchust

### [v2.0.0-alpha.41](https://www.nocobase.com/en/blog/v2.0.0-alpha.41)

*Release date: 2025-11-19*

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

### [v2.0.0-alpha.40](https://www.nocobase.com/en/blog/v2.0.0-alpha.40)

*Release date: 2025-11-18*

### 🚀 Improvements

- **[flow-engine]** Optimize the toolbar style to prevent icons from being obscured ([#7883](https://github.com/nocobase/nocobase/pull/7883)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[flow-engine]** Fixed the issue where ACL permission data is not reloaded after logout and login. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) by @gchust
- **[client]** fix issues in form item setting ([#7867](https://github.com/nocobase/nocobase/pull/7867)) by @katherinehhh
- **[Data visualization]** Use sql resource debug mode only during chart preview ([#7893](https://github.com/nocobase/nocobase/pull/7893)) by @heziqiang
- **[Multi-space]** multi-space associated users by @jiannx
- **[Workflow: Approval]**

  - Fix the issue where the page size of loading notification channel is not big enough, and cause the list is not completed loaded by @mytharcher
  - Fix a performance issue that occurred when querying the list of approval records during approval submission by @mytharcher
  - Fix the date format on the approval list cards in the to-do center to display the complete date and time by @mytharcher

### [v2.0.0-alpha.39](https://www.nocobase.com/en/blog/v2.0.0-alpha.39)

*Release date: 2025-11-17*

### 🚀 Improvements

- **[client]** Adapt Components for Mobile Devices ([#7870](https://github.com/nocobase/nocobase/pull/7870)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**

  - Fixed the issue the default JS field configuration did not use the display mode setting. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) by @gchust
  - Fix the issue where duplicated templates do not appear, which is caused by dragging and then deleting a referenced template ([#7847](https://github.com/nocobase/nocobase/pull/7847)) by @zhangzhonghe
  - Fixed the issue about not be able to set default value of date field in filter form block model. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) by @gchust
  - Fix the issue where the linkage rule for the approval form is not working ([#7858](https://github.com/nocobase/nocobase/pull/7858)) by @zhangzhonghe
  - Fixed the issue quick edit operations in the table block do not update data correctly. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) by @gchust
  - Fix issue where the rich text field cannot input default value and the multi-select field default value cannot select multiple options. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) by @gchust
- **[Multi-app manager (deprecated)]** After a sub application stops, publish a synchronization message to notify other nodes to stop the corresponding sub application ([#7849](https://github.com/nocobase/nocobase/pull/7849)) by @2013xile
- **[Workflow: Approval]** Fix the issue where the linkage rule for the approval form is not working by @zhangzhonghe
- **[Email manager]** ShadowHtml refresh error by @jiannx

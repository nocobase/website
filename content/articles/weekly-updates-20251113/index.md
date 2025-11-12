Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/en/blog/v1.9.6)

*Release date: 2025-11-12*

### 🐛 Bug Fixes

- **[client]** Fix the issue where duplicated templates do not appear, which is caused by dragging and then deleting a referenced template ([#7847](https://github.com/nocobase/nocobase/pull/7847)) by @zhangzhonghe
- **[utils]** Enable object merging in intersect strategy ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
- **[Data visualization: ECharts]** fix issue with ECharts config labelType by @heziqiang
- **[Email manager]** sync microsoft mail read status without timestamp by @jiannx

### [v1.9.5](https://www.nocobase.com/en/blog/v1.9.5)

*Release date: 2025-11-10*

### 🐛 Bug Fixes

- **[Workflow: Approval]** Fix an issue where main collection fields were not excluded when reloading association data by @mytharcher
- **[Email manager]** Fix the issue of reserved images and synchronization in outlook by @jiannx

### [v1.9.4](https://www.nocobase.com/en/blog/v1.9.4)

*Release date: 2025-11-10*

### 🚀 Improvements

- **[Access control]** Optimize permission control logic for association field operations ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
- **[Workflow: JavaScript]** Fix a security vulnerability caused by upper-level functions being passed into the execution environment, preventing exploitation that could grant access to the upper execution context by @mytharcher
- **[Auth: OIDC]** Increase the request timeout by @2013xile

### 🐛 Bug Fixes

- **[server]** Fix an issue where, after enabling service-splitting mode, worker processes sending messages through the message queue would cause errors ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
- **[client]** fix empty next page issue in simple pagination detail block ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
- **[Workflow]**

  - Add `workflowId` as identity data for logs of workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
  - Fix the issue where the workflow plugin still consumes the queue event when it is not in worker mode under the service splitting mode ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
- **[Users]** Incorrect index refresh when field names use snake_case style ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile
- **[Workflow: Custom variable]** Fix error thrown when no config in variable node by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/en/blog/v2.0.0-alpha.38)

*Release date: 2025-11-12*

### 🎉 New Features

- **[client]** Support dragging for table column actions ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe
- **[Data visualization]** add chart SQL datasource ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

### 🚀 Improvements

- **[client]** Added support for the Day.js library in the RunJS scripting context, enabling easier date and time manipulations. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

### 🐛 Bug Fixes

- **[utils]**

  - Fix the "Invalid filter item type" error on the filter button ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe
  - Enable object merging in intersect strategy ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
  - Fix the 'Unrecognized operation' error in the event flow ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe
- **[client]**

  - Fixed an issue where the linkage rules for row action buttons in a table block were not re-executed after the row data was updated, ensuring the rules are now properly reapplied when changes occur. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust
  - Fixed the errors when preview code in code editor if the code contains jsx syntax ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust
- **[undefined]** Fix the issue of incorrect styling on the plugin documentation homepage in dark mode. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust
- **[File manager]** fix table block field configuration issues ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh
- **[AI employees]** Hide AI employee chat button on v1 pages ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock
- **[Data visualization: ECharts]** fix issue with ECharts config labelType by @heziqiang
- **[Email manager]**

  - fix draft bugs by @jiannx
  - sync microsoft mail read status without timestamp by @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/en/blog/v2.0.0-alpha.37)

*Release date: 2025-11-11*

### 🚀 Improvements

- **[client]**

  - add page info version to flow engine context ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust
  - enhance Markdown Editor ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh
  - adapt to tableoid field in 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh
- **[Data visualization]** update alert tips and events code template annotations ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang
- **[Access control]** Optimize permission control logic for association field operations ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
- **[Auth: OIDC]** Increase the request timeout by @2013xile

### 🐛 Bug Fixes

- **[server]** Fix an issue where, after enabling service-splitting mode, worker processes sending messages through the message queue would cause errors ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
- **[client]**

  - current collection variable should not be selectable from filter component's variable selector ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust
  - Fix the error 'value.replace is not a function' in the filter form relationship field ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe
  - Fix incorrect parameters in the onChange callback ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe
- **[flow-engine]** Fix the issue where changes to the event flow would only take effect after refreshing the page. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust
- **[Workflow]** Fix the issue where the workflow plugin still consumes the queue event when it is not in worker mode under the service splitting mode ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
- **[Workflow: Approval]** Fix an issue where main collection fields were not excluded when reloading association data by @mytharcher
- **[Email manager]** Fix the issue of reserved images and synchronization in outlook by @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/en/blog/v2.0.0-alpha.36)

*Release date: 2025-11-10*

### 🚀 Improvements

- **[flow-engine]** Optimize the toolbar styles for page tabs ([#7795](https://github.com/nocobase/nocobase/pull/7795)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[flow-engine]**

  - Fixed an issue where variables in subform association fields were not correctly resolved when the field was modified via the user interface. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) by @gchust
  - error in edit form for multi-primary key records ([#7798](https://github.com/nocobase/nocobase/pull/7798)) by @gchust
  - Fixed an issue where certain configurations for the "Open View" action were not applied, ensuring the action now works as intended for all specified configurations. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) by @gchust
- **[client]**

  - Fix collection selector field unable to select collection correctly ([#7794](https://github.com/nocobase/nocobase/pull/7794)) by @katherinehhh
  - can't hide table block's actions column ([#7804](https://github.com/nocobase/nocobase/pull/7804)) by @gchust
  - support selecting whole variable object in AI employee's prompt ([#7791](https://github.com/nocobase/nocobase/pull/7791)) by @gchust
- **[Users]** Incorrect index refresh when field names use snake_case style ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/en/blog/v2.0.0-alpha.35)

*Release date: 2025-11-06*

### 🚀 Improvements

- **[flow-engine]** support delayed operation in flow model ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust
- **[Workflow: JavaScript]** Fix a security vulnerability caused by upper-level functions being passed into the execution environment, preventing exploitation that could grant access to the upper execution context by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - fix empty next page issue in simple pagination detail block ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
  - fix  table action and jsColumn width not applied ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh
  - block's data scope is not working if set by page event flow ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust
- **[Workflow]** Add `workflowId` as identity data for logs of workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
- **[Workflow: Custom variable]** Fix error thrown when no config in variable node by @mytharcher
- **[Email manager]** collection mailMessages add indexes by @jiannx

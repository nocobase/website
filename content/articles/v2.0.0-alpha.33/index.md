### 🎉 New Features

- **[client]** add pagination support to sub table ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

### 🚀 Improvements

- **[undefined]** update the English documentation of the chart plugin ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang

- **[telemetry]** Add telemetry metrics for number of online sub-applications, etc ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile

- **[Workflow]** Support data block in workflow to use consolidate detail settings menu ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher

- **[Multi-app manager (deprecated)]** Enabled asynchronous startup for sub-applications using a queue ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile

- **[Data visualization]** add chart data time format options ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang

- **[Workflow: Approval]** Add notification for delegated and added assignee by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where the labels of enum types in variable-related components were not displayed in the correct language. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust

  - Fix missing required field indicator after setting frontend validation ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh

  - fix issue with clearing non-timezone date in edit form ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh

  - Fix required field validation for linkage rules ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe

  - resolve Invalid Date issue when deleting Specified Date in filte… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh

  - Fix required validation failure for Markdown Vditor field ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh

  - Add data scope configuration for relationship fields in filter forms ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe

  - fix time format issue in subtable fields ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh

- **[flow-engine]**
  - when the field filter value is set to false, the request with data scope is incorrect ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust

  - can't resolve subform current object variable's association field value ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust

  - fix: resolve page request parameter issue after deleting data on last page ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh

- **[server]** Isolate Pub-Sub channel by app name ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher

- **[Block: GridCard]** fix data duplication issue between list and grid card block ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh

- **[Multi-app manager (deprecated)]** Incorrect collection for sub-application status metric ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile

- **[Workflow]**
  - Resolved an issue where the workflow dispatcher in cluster mode failed to correctly identify idle states, which could lead to unnecessary queue event consuming before plugin is ready ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher

  - Fix an issue where, in service-splitting mode, manually executing a workflow containing an interrupt node would remain stuck in a pending status ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher

- **[Workflow: Approval]**
  - Fix error thrown when duplicate approval workflow by @mytharcher

  - Creating approval nodes in parallel branches is no longer supported to avoid issues caused by process status by @mytharcher

- **[Email manager]**
  - add sync logs by @jiannx

  - add migration for indexex by @jiannx


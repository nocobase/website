### 🎉 New Features

- **[test]** add process level concurrency control for base task manager ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock

- **[AI employees]** Support Gemini-3 model with function-calling thought signature ([#8377](https://github.com/nocobase/nocobase/pull/8377)) by @heziqiang

### 🚀 Improvements

- **[flow-engine]** Add `rowOrder` to GridModel to ensure consistent row ordering ([#8371](https://github.com/nocobase/nocobase/pull/8371)) by @zhangzhonghe

- **[AI employees]**
  - Support custom editing and auto-updating of system prompts ([#8378](https://github.com/nocobase/nocobase/pull/8378)) by @heziqiang

  - Improve AI error handling for LLM services and models ([#8351](https://github.com/nocobase/nocobase/pull/8351)) by @heziqiang

- **[File manager]** Add request options for fetching OSS file on server side if additional parameters or headers are needed ([#8372](https://github.com/nocobase/nocobase/pull/8372)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where an association field could still open a popup after switching from the record picker component to the select component. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) by @gchust

  - Fixed the issue where linkage rules have not been rerun after change pagination for details block, edit form block and list block. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) by @gchust

  - Fixed an issue where configured sub-table/sub-form's fields would not display during back-and-forth switching of field components. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) by @gchust

- **[logger]** Fix extra error information being discarded when printing system logs ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock

- **[Block: template (deprecated)]** Fixed an issue where the edit page for inherited templates (v1) could not be accessed. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) by @gchust

- **[Workflow]**
  - Add instance ID to the Snowflake ID of jobs, to avoid ID conflict issue under cluster mode ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher

  - Fix linkage rule issue in workflow CC node detail block ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe

  - Fix the issue where execution page crash when workflow deleted ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher

- **[Access control]** Fix an issue where data source is incorrectly resolved when processing permissions for association fields ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile

- **[Data source: REST API]** Add fault-tolerant for request context, to avoid error thrown when method is not in context by @mytharcher


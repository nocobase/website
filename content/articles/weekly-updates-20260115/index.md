Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/en/blog/v1.9.36)

*Release date:2026-01-10*

### 🚀 Improvements

- **[client]** Improve plugin manager list render performance by changing to native webkit css for text ellipsis ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

### 🐛 Bug Fixes

- **[File manager]** Fix the issue where file URL generated incorrectly for files uploaded to S3 storage ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
- **[File storage: S3(Pro)]** Fix the issue where file renaming mode not works by @mytharcher
- **[Workflow: Approval]** Fix value block not displays caused by missing `ValueBlock.Result` component by @mytharcher

### [v1.9.35](https://www.nocobase.com/en/blog/v1.9.35)

*Release date:2026-01-09*

### 🚀 Improvements

- **[Workflow: Approval]** Simplify parameters in query, and improve performance by @mytharcher

### 🐛 Bug Fixes

- **[Workflow: Webhook]** Fix the issue where 404 error thrown when post to webhook URL in sub-app by @mytharcher

### [v1.9.34](https://www.nocobase.com/en/blog/v1.9.34)

*Release date:2026-01-08*

### 🚀 Improvements

- **[Access control]** Improve permission checks when modifying nested association fields ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 Bug Fixes

- **[client]**

  - fix association fields from external data sources not loading association data in form blocks ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
  - Fix the issue where association fields are not correct in `FilterAction` component ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
- **[logger]** Fix extra error information being discarded when printing system logs ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
- **[Workflow: Loop node]** Fix the issue where failed node in condition branch cannot pass status to upper branching node ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
- **[Data source: Main]** View collection metadata should include source field options ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
- **[Workflow]**

  - Fix linkage rule issue in workflow CC node detail block ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  - Add instance ID to the Snowflake ID of jobs, to avoid ID conflict issue under cluster mode ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
  - Fix the issue where execution page crash when workflow deleted ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
- **[Action: Import records]** Fix incorrect error message when a  unique constraint error is triggered during async XLSX import ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
- **[Access control]**

  - Allow association fields to associate using the target keys ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
  - Fix an issue where data source is incorrectly resolved when processing permissions for association fields ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
- **[Data source: REST API]** Add fault-tolerant for request context, to avoid error thrown when method is not in context by @mytharcher
- **[Action: Export records Pro]** Fix error when sub-applications execute async import/export tasks while the main application does not enable the import/export pro plugin by @cgyrock
- **[Workflow: Approval]** Fix the issue where filter fields not work correctly in tasks center by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/en/blog/v2.0.0-beta.10)

*Release date:2026-01-14*

### 🚀 Improvements

- **[client]** Support specify when to run event flow. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
- **[AI employees]**

  - Optimize AI entry button ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  - Hide builder ai in entry list.<br/> Optimize LLM integration flow.<br/> Update docs about ai model gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
- **[Notification: In-app message]** Fix performance issue when sending in-app messages to large number of users ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - 数字组件不显示值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos
  - fix cascading select data not cleared after successful submission in create form ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - fix issue with submit button where skip required validation does not work when confirmation is enabled ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  - resolve issue with submit button appearing in the file selection popup of one-to-one association field ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  - fix resolve issue where layout setting in grid card block does not take effect ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  - fix prevent assignment when Chinese characters are entered in number field ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
- **[Collection field: Many to many (array)]** Fix error when appending second-level many-to-many(array) relations in association queries ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
- **[Multi-space]**

  - Related space when adding associated data by @jiannx
  - Space selector color follows theme by @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/en/blog/v2.0.0-beta.9)

*Release date:2026-01-12*

### 🚀 Improvements

- **[client]** Improve plugin manager list render performance by changing to native webkit css for text ellipsis ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

### 🐛 Bug Fixes

- **[File manager]** Fix the issue where file URL generated incorrectly for files uploaded to S3 storage ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
- **[Workflow]** Fix the issue where schema ID is not updated in duplicated node ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher
- **[File storage: S3(Pro)]** Fix the issue where file renaming mode not works by @mytharcher
- **[Template print]** Fix obscured configuration template pop-up issue by @zhangzhonghe
- **[Workflow: Approval]** Fix value block not displays caused by missing `ValueBlock.Result` component by @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/en/blog/v2.0.0-beta.8)

*Release date:2026-01-09*

### 🚀 Improvements

- **[cli]** support CDN base URL configuration via env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) by @chenos
- **[AI employees]** Support Anthropic and Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) by @heziqiang

### 🐛 Bug Fixes

- **[client]** fix refine logic for optional targetKey ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
- **[Workflow: Approval]** Fix the issue where incorrect record was loaded caused by wrong parameters by @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/en/blog/v2.0.0-beta.7)

*Release date:2026-01-09*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/en/blog/v2.0.0-alpha.64)

*Release date:2026-01-08*

### 🎉 New Features

- **[AI employees]** Support Gemini-3 model with function-calling thought signature ([#8377](https://github.com/nocobase/nocobase/pull/8377)) by @heziqiang

### 🚀 Improvements

- **[AI employees]**

  - Improve AI error handling for LLM services and models ([#8351](https://github.com/nocobase/nocobase/pull/8351)) by @heziqiang
  - Support custom editing and auto-updating of system prompts ([#8378](https://github.com/nocobase/nocobase/pull/8378)) by @heziqiang
- **[File manager]** Add request options for fetching OSS file on server side if additional parameters or headers are needed ([#8372](https://github.com/nocobase/nocobase/pull/8372)) by @mytharcher

### 🐛 Bug Fixes

- **[logger]** Fix extra error information being discarded when printing system logs ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
- **[client]**

  - Fixed an issue where an association field could still open a popup after switching from the record picker component to the select component. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) by @gchust
  - Fixed the issue where linkage rules have not been rerun after change pagination for details block, edit form block and list block. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) by @gchust
  - Fixed an issue where configured sub-table/sub-form's fields would not display during back-and-forth switching of field components. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) by @gchust
- **[Workflow]**

  - Fix linkage rule issue in workflow CC node detail block ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  - Fix the issue where execution page crash when workflow deleted ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
- **[Access control]** Fix an issue where data source is incorrectly resolved when processing permissions for association fields ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile

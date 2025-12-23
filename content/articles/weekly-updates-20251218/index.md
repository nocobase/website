Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/en/blog/v1.9.27)

*Release date:2025-12-17*

### 🚀 Improvements

- **[server]** Add fault tolerance when missing app instances cause errors while fetching app maintaining messages ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
- **[Error handler]** Do not expose raw database error messages on SQL syntax errors, to avoid revealing the database type ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
- **[Workflow]** Support to use legacy config to create new in duplicated workflow ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

### 🐛 Bug Fixes

- **[Workflow]** Fix the issue where the only one record show in record list to be manually execute ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
- **[Collection: Connect to foreign data (FDW)]** Fix trigger errors when connecting to tables with uppercase names by @2013xile
- **[Workflow: Approval]** Fix the issue where status of unrelated approval records are incorrectly changed to `UNPROCESSED` by approve action by @mytharcher

### [v1.9.26](https://www.nocobase.com/en/blog/v1.9.26)

*Release date:2025-12-16*

### 🚀 Improvements

- **[acl]** Support `acl.registerSnippet` API to merge snippet configuration ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
- **[Access control]** Disallow assigning the root role to users ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 Bug Fixes

- **[License settings]**

  - fix plugin-license ts build exception ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  - license optimization and addition of prompt information ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
- **[File manager]** Fix the issue where previewing `.txt` file on OSS got wrong charset ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
- **[Action: Import records]** Synchronously wait for the `afterCreate` events triggered by the import to finish. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
- **[Collection: Connect to foreign data (FDW)]** Fix issue where loading fails for tables with uppercase names by @2013xile
- **[Data source: External SQL Server]** Fix issues where the `encrypt` and `trustServerCertificate` options are not available by @2013xile

### [v1.9.25](https://www.nocobase.com/en/blog/v1.9.25)

*Release date:2025-12-12*

### 🚀 Improvements

- **[Workflow]**
  - Add fault-tolerant logic for data missing in the processor preparation, to avoid execution hang ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  - Use lazy load for association data on workflow canvas to improve performance ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher

### 🐛 Bug Fixes

- **[acl]** Fix the issue where the API `acl.can` return `null` when role is `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
- **[Workflow: Manual node]** Fix the issue manual todo list is using incorrect API ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
- **[HTTP request encryption]** Use brackets for array format in qs parsing by @chenos
- **[Workflow: Approval]** Fix the issue where error thrown when cancel a execution when its workflow is deleted by @mytharcher
- **[Migration manager]** Fix an issue where line breaks in data were lost during migration. by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/en/blog/v2.0.0-alpha.55)

*Release date:2025-12-17*

### 🚀 Improvements

- **[server]** Add fault tolerance when missing app instances cause errors while fetching app maintaining messages ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
- **[Block: List]** add Link button for Table, List, and Grid Card blocks ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh

### 🐛 Bug Fixes

- **[client]** Fix an issue where selecting “No” for a checkbox filter still applied the “Yes” filter. ([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust
- **[Migration manager]** Fix missing migration description and set the current time as the default by @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/en/blog/v2.0.0-alpha.54)

*Release date:2025-12-17*

### 🎉 New Features

- **[client]** When creating colletion, the preset id field type can be changed ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock

### 🚀 Improvements

- **[client]**

  - change table column width to use selectable options ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh
  - improve recordPicker styles with maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh
  - optimize configuration options (Blocks, Fields, Actions) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh
- **[Error handler]** Do not expose raw database error messages on SQL syntax errors, to avoid revealing the database type ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
- **[Block: Map]** support text overflow ellipsis for map field in text display mode ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh
- **[Workflow]** Support to use legacy config to create new in duplicated workflow ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher
- **[Access control]** Disallow assigning the root role to users ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 Bug Fixes

- **[client]**

  - fix submit button not shown in create form when role has create permission ([#8190](https://github.com/nocobase/nocobase/pull/8190)) by @katherinehhh
  - prevent existing subtable/subform data from being cleared when submitting without selecting any items ([#8172](https://github.com/nocobase/nocobase/pull/8172)) by @katherinehhh
  - prevent Data scope setting from appearing in create form configuration ([#8176](https://github.com/nocobase/nocobase/pull/8176)) by @katherinehhh
  - Failed to save the tab event flow ([#8168](https://github.com/nocobase/nocobase/pull/8168)) by @chenos
  - remove extra spacing after tab is hidden ([#8167](https://github.com/nocobase/nocobase/pull/8167)) by @chenos
  - fix incorrect filtering of selected options in the association record select ([#8151](https://github.com/nocobase/nocobase/pull/8151)) by @katherinehhh
  - Fix rendering issue of tableoid field in form block ([#8177](https://github.com/nocobase/nocobase/pull/8177)) by @katherinehhh
- **[server]**

  - Update license-kit to the latest version ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx
  - Support Snowflake ID (53-bit) fields for external data sources ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile
- **[Block: Map]** fix incorrect map zoom level after menu switch ([#8193](https://github.com/nocobase/nocobase/pull/8193)) by @katherinehhh
- **[Workflow]** Fix the issue where the only one record show in record list to be manually execute ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
- **[Data visualization]** Resolve issue about SQL mode select external data source; <br/>Resolve issue about chart block loading state during data fetch;  <br/> Resolve issue about empty chart block cancel configure; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) by @heziqiang
- **[AI employees]** Resolve issue about ai message line break ([#8096](https://github.com/nocobase/nocobase/pull/8096)) by @heziqiang
- **[License settings]**

  - fix plugin-license ts build exception ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  - license optimization and addition of prompt information ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
- **[File manager]** Fix the issue where previewing `.txt` file on OSS got wrong charset ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
- **[Data source: External SQL Server]** Fix issues where the `encrypt` and `trustServerCertificate` options are not available by @2013xile
- **[Collection: Connect to foreign data (FDW)]** Fix issue where loading fails for tables with uppercase names by @2013xile
- **[Workflow: Approval]** Fix the issue where status of unrelated approval records are incorrectly changed to `UNPROCESSED` by approve action by @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/en/blog/v2.0.0-alpha.53)

*Release date:2025-12-12*

### 🚀 Improvements

- **[acl]** Support `acl.registerSnippet` API to merge snippet configuration ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
- **[client]** support number formatting for percentage fields ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh
- **[flow-engine]** support hide step configuration menu dynamically ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust
- **[Block: GridCard]** Optimize Grid Card block styles for a more compact layout ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh
- **[AI employees]** Enabled editing functionality for built-in AI assistant system prompts.<br/>Optimized the system prompt for the Nathan AI assistant.<br/>Fixed an issue with the server failing to read static files. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang
- **[Workflow]**

  - Add fault-tolerant logic for data missing in the processor preparation, to avoid execution hang ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  - Use lazy load for association data on workflow canvas to improve performance ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher
- **[Collection field: Markdown(Vditor)]** Disable variable parsing in Markdown field by default in readPretty mode ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh

### 🐛 Bug Fixes

- **[flow-engine]** Fix incorrect file download for attachments ([#8154](https://github.com/nocobase/nocobase/pull/8154)) by @katherinehhh
- **[client]**

  - fix association field dropdown being disabled when options field exists ([#8153](https://github.com/nocobase/nocobase/pull/8153)) by @katherinehhh
  - Fixed an issue where entering Chinese text cleared existing options when using multi-select operators on single-select field in filter form block. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) by @gchust
  - Fixed an issue where switching label fields caused popup configurations to be lost. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) by @gchust
- **[acl]** Fix the issue where the API `acl.can` return `null` when role is `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
- **[database]** `filterByTk` now supports arrays when querying collections with multiple filter target keys ([#7986](https://github.com/nocobase/nocobase/pull/7986)) by @chenos
- **[Action: Import records]** Synchronously wait for the `afterCreate` events triggered by the import to finish. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
- **[Collection field: Sequence]** Improve the robustness of the plugin-field-sequence when handling the repair command ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock
- **[Workflow: Manual node]** Fix the issue manual todo list is using incorrect API ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
- **[HTTP request encryption]** Use brackets for array format in qs parsing by @chenos
- **[Workflow: Approval]** Fix the issue where error thrown when cancel a execution when its workflow is deleted by @mytharcher
- **[Migration manager]** Fix an issue where line breaks in data were lost during migration. by @cgyrock

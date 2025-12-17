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


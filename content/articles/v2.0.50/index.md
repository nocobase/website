### 🎉 New Features

- **[client]** add associate and dissociate actions to association block ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh

- **[Text copy]** support "Display copy button" option for read-only text field ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 Improvements

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

- **[client]** Allow to assign field value for sequence field ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]** Fixed untranslated data table field validation messages in v2 flow forms ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx

- **[client]**
  - Fixed `Hidden (reserved value)` fields in form blocks so they remain visible in UI Editor mode, and restored value input support for assigning them in Field assignment ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx

  - Fix incorrect download filenames for AttachmentURL fields when file metadata is missing. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher

  - Fixed the v2 table bulk workflow trigger so row selection stays consistent after redirecting between tabs and rows can be selected again after returning ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx

  - Fix filter forms that could not collapse ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe

  - Fix the issue where v1 subtable linkage rules incorrectly change required field styles ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe

  - fix incorrect data rendering in grid card block after update and refresh ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh

  - fix required option field in subtable not validated correctly on first selection in mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh

  - Fix the issue where URL query parameter variables become invalid after switching cached pages ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe

  - fix adapt DividerItem to theme in v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh

  - fix hide quick create option for association select field in v2 subtable ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh

  - Fixed linkage rules have not been rerun after form values change. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust

  - Fix the error when filtering scalar fields with custom multi-select filters ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe

- **[server]** validate plugin package names before filesystem operations ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos

- **[Data source manager]** prevent editing and deletion of all records in custom scope permissions for external data sources ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh

- **[Data source: Main]** Fixed imported database tables using the wrong prefixed table name when a table prefix is enabled ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile

- **[Notification: In-app message]** Fixed an issue where the in-app message list did not refresh after receiving realtime notifications ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher

- **[Block: Kanban]** fix prevent single-word wrapping in long text field of v1 kanban block ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh

- **[Collection field: Formula]** fix formula field in v2 subtable not triggered to auto-calculate ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh


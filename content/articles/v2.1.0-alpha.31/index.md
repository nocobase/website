### 🎉 New Features

- **[client]** add associate and dissociate actions to association block ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh

- **[Text copy]** support "Display copy button" option for read-only text field ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

- **[AI employees]** Workflow AI employee node supports loading files from attachment fields. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock

- **[Data visualization]** Add client-v2 support for block plugins ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 Improvements

- **[client]** Allow to assign field value for sequence field ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

- **[Block: Kanban]** Improved v2 detail field spacing consistency and made kanban card and column spacing better adapt to theme settings. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx

- **[Workflow: Approval]** Fix required validation behavior for approval forms by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**
  - Fix filter forms that could not collapse ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe

  - Fixed the v2 table bulk workflow trigger so row selection stays consistent after redirecting between tabs and rows can be selected again after returning ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx

  - Fixed `Hidden (reserved value)` fields in form blocks so they remain visible in UI Editor mode, and restored value input support for assigning them in Field assignment ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx

  - fix adapt DividerItem to theme in v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh

  - Fix incorrect download filenames for AttachmentURL fields when file metadata is missing. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher

  - Fix the error when filtering scalar fields with custom multi-select filters ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe

  - Fixed linkage rules have not been rerun after form values change. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust

  - Fix the issue where v1 subtable linkage rules incorrectly change required field styles ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe

  - fix incorrect data rendering in grid card block after update and refresh ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh

  - fix required option field in subtable not validated correctly on first selection in mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh

  - fix hide quick create option for association select field in v2 subtable ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh

  - Fix the issue where URL query parameter variables become invalid after switching cached pages ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe

- **[flow-engine]** Fixed untranslated data table field validation messages in v2 flow forms ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx

- **[server]**
  - Fixed sub-application OAuth discovery requests being routed as main-app requests ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile

  - validate plugin package names before filesystem operations ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos

- **[client-v2]**
  - Fixed error when selecting association fields in field settings. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust

  - Fix the issue where a 404 page flashes after the app starts ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe

  - Fix the v2 page block drag placeholder and drop position issues ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe

  - Fix the issue where some v2 pages fail to load remote plugins ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe

- **[undefined]** Fix dead links in translated documentation and enable dead-link detection by default in the docs build. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn

- **[Notification: In-app message]** Fixed an issue where the in-app message list did not refresh after receiving realtime notifications ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher

- **[Data source manager]** prevent editing and deletion of all records in custom scope permissions for external data sources ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh

- **[AI: MCP server]** Fixed MCP server packaging so runtime dependencies are included ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile

- **[Data source: Main]** Fixed imported database tables using the wrong prefixed table name when a table prefix is enabled ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile

- **[Flow engine]** Fixed an issue where blocks generated by AI could not be converted from reference templates back to duplicate templates. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust

- **[AI employees]**
  - Fix AI employee node reading associations field attachment error in workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock

  - Fix workflow AI employee node not ending properly after tool assignment. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock

- **[Action: Custom request]** upgrade koa to v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos

- **[Block: Kanban]**
  - Improved Kanban card compact styling and optimized quick-create popup template selection. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx

  - fix prevent single-word wrapping in long text field of v1 kanban block ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh

- **[Collection field: Formula]** fix formula field in v2 subtable not triggered to auto-calculate ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh

- **[Action: Import records Pro]** Fix the issue where duplicated check on date field always fails by @mytharcher

- **[Password policy]** Fixed an issue where permanently locked users could sign in after a service restart by @2013xile

- **[Workflow: Approval]** Fix the issue where the select record drawer is obscured in approval workflow configuration by @zhangzhonghe

- **[Email manager]** Fixed the mail identities title display by @jiannx

- **[Backup manager]** fix pg schema adaption by @Andrew1989Y


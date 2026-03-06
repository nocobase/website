### 🎉 New Features

- **[Workflow: Custom action event]** Support custom context data for passing variables to custom action trigger in sub-flow ([#8758](https://github.com/nocobase/nocobase/pull/8758)) by @mytharcher

### 🚀 Improvements

- **[client]** Show a prompt message when no data is available for the Edit Form block or the Details block. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) by @gchust

- **[flow-engine]** Fixed an issue where new runjs code would parse variable expressions before execution. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) by @gchust

### 🐛 Bug Fixes

- **[client]**
  - Fix popup link navigation being reverted after view close ([#8752](https://github.com/nocobase/nocobase/pull/8752)) by @zhangzhonghe

  - Disabled adding blocks for many-to-many (array) associatied records to prevent errors. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) by @gchust

  - Fixed an issue where the original data block did not refresh after editing data in the association field popup. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) by @gchust

  - Fix tab clipping and ensure minimum tab width in design mode ([#8771](https://github.com/nocobase/nocobase/pull/8771)) by @zhangzhonghe

  - Fix validation for linkage-hidden required fields in config mode ([#8773](https://github.com/nocobase/nocobase/pull/8773)) by @zhangzhonghe

  - Fix delayed UI updates for subtable column hide toggle and consecutive column deletion ([#8755](https://github.com/nocobase/nocobase/pull/8755)) by @zhangzhonghe

  - fix two required verifications appear in the update record form ([#8761](https://github.com/nocobase/nocobase/pull/8761)) by @jiannx

- **[database]**
  - Fixed missing 'Simple Pagination' option in collection`s view template. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) by @cgyrock

  - The precision validation rule for numeric fields is not taking effect ([#8768](https://github.com/nocobase/nocobase/pull/8768)) by @2013xile

- **[undefined]** Fixed an issue where, after upgrading, the system prompted that plugin-block-reference could not be found. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) by @gchust

- **[Action: Export records]** Fixed the issue where numeric type fields in excel files displayed as strings ([#8774](https://github.com/nocobase/nocobase/pull/8774)) by @cgyrock

- **[Block: List]** Fixed an issue where list block fields could not use the current record variable. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) by @gchust

- **[Workflow]** Fix the issue where node drag placeholder incorrectly showing when dragging blocks in approval node ([#8763](https://github.com/nocobase/nocobase/pull/8763)) by @mytharcher

- **[UI templates]**
  - Fixed an issue where reusing the current record block template for details block and edit form block could cause data to fail to load correctly. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) by @gchust

  - Fixed an issue where changes to props made in a template block’s event flow did not take effect. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) by @gchust

- **[Data source: Main]**
  - Updating the default value of a JSON field does not take effect ([#8767](https://github.com/nocobase/nocobase/pull/8767)) by @2013xile

  - Fields synchronization error ([#8766](https://github.com/nocobase/nocobase/pull/8766)) by @2013xile

- **[AI employees]**
  - Fixed issues that dashscope/deepseek/kimi can not read uploaded document files. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) by @cgyrock

  - Fixed tool call error when using deepseek reasoning model. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) by @cgyrock

- **[Multi-space]** Fix the space permission error when creating data with the primary key by @jiannx


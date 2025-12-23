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


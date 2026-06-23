### 🎉 New Features

- **[ai]** Added support for using current user variables in remote MCP client URLs and headers. ([#9828](https://github.com/nocobase/nocobase/pull/9828)) by @cgyrock

- **[cli]** support install hook scripts ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos

### 🚀 Improvements

- **[client-v2]** Show field-level validation rules as read-only inherited rules in UI field validation settings. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh

- **[Flow engine]** Added the current block to the user context by default when building AI employees using the Flow Surface API. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust

### 🐛 Bug Fixes

- **[client-v2]** Fixed block did not refresh after blocks settings updated. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust

- **[Workflow: Custom action event]**
  - Fixed custom-context trigger workflow actions so frontend variables in request payloads are resolved before submission in v2 action buttons ([#9853](https://github.com/nocobase/nocobase/pull/9853)) by @mytharcher

  - Fixed the v2 custom action workflow binding selector so enabled workflows are filtered with boolean values and can be listed correctly. ([#9865](https://github.com/nocobase/nocobase/pull/9865)) by @mytharcher

- **[Block: Gantt]** Fixed Gantt task popup template settings not applying or clearing correctly. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx

- **[Workflow: Approval]**
  - Fixed approval action node validation to allow `null` for `applyDetail` or `approvalUid` and skip processing unless a string reference is provided by @mytharcher

  - Fix the issue where related approvals do not load or refresh correctly by @zhangzhonghe


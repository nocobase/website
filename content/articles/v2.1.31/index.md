### 🚀 Improvements

- **[Workflow]** Improved workflow pending task handling by persisting start, resume, and rerun tasks in the event queue. ([#9846](https://github.com/nocobase/nocobase/pull/9846)) by @mytharcher

### 🐛 Bug Fixes

- **[ai]** Improved document loading reliability with clearer password-protected PDF errors and timeout handling. ([#10172](https://github.com/nocobase/nocobase/pull/10172)) by @cgyrock

- **[flow-engine]** Fix v2 table quick edit visibility for record-scoped and field-scoped update permissions. ([#10182](https://github.com/nocobase/nocobase/pull/10182)) by @katherinehhh

- **[AI employees]**
  - Fixed the Operator variable selector in AI employee workflow nodes so nested variables can be expanded, and removed the Null option from the required field. ([#10167](https://github.com/nocobase/nocobase/pull/10167)) by @cgyrock

  - Fixed AI employee shortcuts losing block context when starting a new conversation from an existing conversation ([#10169](https://github.com/nocobase/nocobase/pull/10169)) by @cgyrock

  - Fixed AI form context not using customized form item labels ([#10168](https://github.com/nocobase/nocobase/pull/10168)) by @cgyrock

- **[AI: Knowledge base]** Improved AI knowledge-base document processing with clearer PDF errors, upload size validation, timeout protection, and correct segment-list pagination. by @cgyrock

- **[Workflow: Approval]** Fix missing field templates in approval configuration when UI Editor is off by @zhangzhonghe


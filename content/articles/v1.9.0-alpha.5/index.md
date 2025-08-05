### 🎉 New Features

- **[client]** Added "Auto focus" option for Input, TextArea, URL, and InputNumber components that automatically focuses the input field during initial page rendering when enabled ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe

- **[Auth: SAML 2.0]** Add signature-related configuration options by @2013xile

### 🚀 Improvements

- **[Workflow: JavaScript]** Change cache to app cache to avoid bugs in cluster mode by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where variable raw strings are submitted with the form ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe

  - Fix tooltip shows [object Object] on hover in action panel ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh

  - When using variables to set field default values in filter forms, if the variable value is empty, the input box will display the original variable string ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe

- **[undefined]** Add new plugin to preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher

- **[Collection: Tree]** Fix the path synchronization logic of tree collections ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu

- **[Office File Previewer]** Support `.docx`, `.xlsx` and `.pptx` file with only URL to be previewed ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher

- **[Workflow: Dynamic calculation node]** Fix legacy API caused error ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher

- **[Workflow: Approval]** Add task title for added and delegated items by @mytharcher

- **[Email manager]** Supports the same email for multiple people by @jiannx


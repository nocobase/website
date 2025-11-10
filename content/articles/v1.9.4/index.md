### 🚀 Improvements

- **[Access control]** Optimize permission control logic for association field operations ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile

- **[Workflow: JavaScript]** Fix a security vulnerability caused by upper-level functions being passed into the execution environment, preventing exploitation that could grant access to the upper execution context by @mytharcher

- **[Auth: OIDC]** Increase the request timeout by @2013xile

### 🐛 Bug Fixes

- **[server]** Fix an issue where, after enabling service-splitting mode, worker processes sending messages through the message queue would cause errors ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher

- **[client]** fix empty next page issue in simple pagination detail block ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh

- **[Workflow]**
  - Add `workflowId` as identity data for logs of workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher

  - Fix the issue where the workflow plugin still consumes the queue event when it is not in worker mode under the service splitting mode ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher

- **[Users]** Incorrect index refresh when field names use snake_case style ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile

- **[Workflow: Custom variable]** Fix error thrown when no config in variable node by @mytharcher


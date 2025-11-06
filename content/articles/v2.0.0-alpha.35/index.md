### 🚀 Improvements

- **[flow-engine]** support delayed operation in flow model ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust

- **[Workflow: JavaScript]** Fix a security vulnerability caused by upper-level functions being passed into the execution environment, preventing exploitation that could grant access to the upper execution context by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - fix empty next page issue in simple pagination detail block ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh

  - fix  table action and jsColumn width not applied ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh

  - block's data scope is not working if set by page event flow ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust

- **[Workflow]** Add `workflowId` as identity data for logs of workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher

- **[Workflow: Custom variable]** Fix error thrown when no config in variable node by @mytharcher

- **[Email manager]** collection mailMessages add indexes by @jiannx


### 🎉 New Features

- **[Workflow]** Added an administrator API to rerun started workflow executions from the head or a specified node. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

### 🚀 Improvements

- **[client]** Remove the Hidden option from menu item settings ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**
  - fix sync mobile date picker popup value ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh

  - fix preserve time format for v2 time fields ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh

  - increase scan input image upload limit ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh

  - fix sync hidden state for subform linkage ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh

  - fix issue where subtable in subform could not add a second row ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh

  - Fix page tabs disappearing after switching menus ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe

- **[flow-engine]** Fixed an issue where table action linkage rules would execute incorrectly after a form was successfully submitted in a popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust

- **[Workflow: Custom action event]** Fixed custom action table buttons with multiple records context incorrectly allowing custom context workflows to be selected. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher

- **[File manager]**
  - Fixed Unicode filename normalization during file uploads to avoid generating object keys with control characters. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher

  - Improved PDF preview failure messages and documented CORS requirements for external storage. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
Reference: [File Preview](docs/docs/en/file-manager/file-preview/index.md)

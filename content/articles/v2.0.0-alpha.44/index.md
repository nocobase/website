### 🎉 New Features

- **[client]**
  - add quick-create support to association field select ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh

  - support cascade selector for tree collection association field ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh

- **[Telemetry]** Add new plugin: Telemetry, an OpenTelemetry-based telemetry plugin providing CPU, memory, and HTTP request metrics with HTTP export support by @2013xile

### 🚀 Improvements

- **[telemetry]** Support controlling which metrics are exported ([#7938](https://github.com/nocobase/nocobase/pull/7938)) by @2013xile

- **[Async task manager]** Async tasks for sub applications should start only the target sub applications in Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) by @2013xile

### 🐛 Bug Fixes

- **[client]**
  - remove tree-table action from non-tree-collection block ([#7931](https://github.com/nocobase/nocobase/pull/7931)) by @katherinehhh

  - Fix field interface showing many-to-one instead of one-to-one for belongsTo in external data source configuration ([#7936](https://github.com/nocobase/nocobase/pull/7936)) by @cgyrock

- **[flow-engine]** Fix the issue of misaligned toolbar icon display in the details block button ([#7929](https://github.com/nocobase/nocobase/pull/7929)) by @zhangzhonghe

- **[Workflow]** Fixed the issue where updating the task count would unintentionally reset the state of forms being filled out ([#7937](https://github.com/nocobase/nocobase/pull/7937)) by @mytharcher

- **[Collection field: Many to many (array)]** Fix M2M (array) field issues when creating/updating related data ([#7926](https://github.com/nocobase/nocobase/pull/7926)) by @cgyrock

- **[Action: Import records Pro]** fix issue where uploader modification of import options has no effect by @katherinehhh


### 🎉 New Features

- **[Workflow: Approval]** Allow to choose whether to show snapshot or latest record in the approval process UI by @mytharcher

### 🚀 Improvements

- **[client]** optimize validation messages for subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh

- **[Telemetry: Prometheus]** Upgrade `@opentelemetry/exporter-prometheus` by @2013xile

- **[Action: Import records Pro]** Enhanced error messages for asynchronous tasks to provide users with specific reasons for task failures by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]** Fixed an issue where the current record variable could not be correctly triggered for resoving in the details block. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) by @gchust

- **[client]** Fix table block selection and deletion issues for composite keys ([#7978](https://github.com/nocobase/nocobase/pull/7978)) by @katherinehhh

- **[Action: Export records]** fix missing system fields in exportable field list ([#8002](https://github.com/nocobase/nocobase/pull/8002)) by @katherinehhh

- **[Collection: Tree]** Fix path table update failures caused by incorrect tree parent-field lookup ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile

- **[Collection field: Many to many (array)]** Fixed the issue where the m2m array field in the subtable could not be updated ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock

- **[Departments]** Fix the issue where department associated fields could not be edited ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang

- **[Workflow: Approval]** Fix permission issue when get `approvalRecords.reassignee` due to `RemoteSelect` changed by @mytharcher


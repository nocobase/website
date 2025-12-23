### 🎉 New Features

- **[Data source: REST API]** add `error message transformer` options in restful api data source configuration by @cgyrock

### 🚀 Improvements

- **[client]**
  - show collapsed options on hover in Select component ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh

  - optimize validation messages for subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh

- **[Workflow]** Add "main" data source context for UserSelect, in order to provide a more common component which could be used in other place ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher

- **[Workflow: Approval]** Use common component to reduce duplicated code by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix lazy load bug in Variable.Input, which will cause variable options menu re-render incorrectly ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher

- **[Action: Import records]** Fix the issue where error thrown when field in importing xlsx has `null` value ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher

- **[Workflow]** Fix the issue where queue closed before messages publishing ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher

- **[Workflow: Subflow]** Fix the issue workflow selected displaying "N/A" when workflow count is larger than 200 by @mytharcher

- **[Workflow: Approval]**
  - Fix permission issue when get `approvalRecords.reassignee` due to `RemoteSelect` changed by @mytharcher

  - Fix the issue where print action not works when refresh page with modal opened by @mytharcher


### 🎉 New Features

- **[Data source: Main]** Support displaying plugin-defined tables in the main data source. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie

- **[Workflow: date calculation node]** Support to test run node by @mytharcher

### 🚀 Improvements

- **[client]** Color Picker: Add four recommended colors ([#7226](https://github.com/nocobase/nocobase/pull/7226)) by @zhangzhonghe

- **[Workflow]** Make comparison compatible for date values ([#7237](https://github.com/nocobase/nocobase/pull/7237)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - style rules not working on table action column ([#7225](https://github.com/nocobase/nocobase/pull/7225)) by @katherinehhh

  - Avoid non-association fields to be selected in appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) by @mytharcher

  - Fix error: Can't resolve 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) by @zhangzhonghe

  - When deleting a menu, the corresponding data in the uiSchemas table is not deleted ([#7232](https://github.com/nocobase/nocobase/pull/7232)) by @zhangzhonghe

- **[database]** Fixed error when enabling simple pagination for external data source tables ([#7222](https://github.com/nocobase/nocobase/pull/7222)) by @aaaaaajie

- **[Collection field: Sort]** missing sort field selection when duplicating records ([#7116](https://github.com/nocobase/nocobase/pull/7116)) by @katherinehhh

- **[Workflow: Subflow]** Fix error thrown when recall signal arrive but pending execution is not on current instance by @mytharcher

- **[Workflow: Approval]**
  - Fix multiple levels of associations when submit approval by @mytharcher

  - Add fault tolerance for deleted approval in record list by @mytharcher

- **[Email manager]** email message list optimal performance by @jiannx


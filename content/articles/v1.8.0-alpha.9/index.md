### 🎉 New Features

- **[client]** Support the BIT field in SQL Server for external data sources. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie

- **[Data source: External SQL Server]** 支持外部数据源中的 SQL Server BIT 字段 by @aaaaaajie

- **[Workflow: Approval]** Add approval records variable to node result by @mytharcher

### 🚀 Improvements

- **[client]** Auto-hide grid card block action bar when empty ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe

- **[Verification]** Remove verifier options from the response of the `verifiers:listByUser` API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

- **[Workflow]** Adjust API of `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher

- **[Workflow: Pre-action event]** Adjust variable api by @mytharcher

- **[Workflow: Approval]** Adjust variable API by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Table column text alignment function is not working ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe

  - Assign field values: Unable to clear data for relation fields ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe

  - Use independent variable scope for each field ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher

  - style condition on subtable column fields not applied correctly ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh

  - Filtering through relationship collection fields in filter forms is invalid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe

  - URL query parameter variables not working in public form field default value ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh

  - required validation message in subtable persists when switching page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh

  - Error when clicking filter button ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe

- **[database]** support association updates in updateOrCreate and firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos

- **[Workflow]**
  - Fix stats cascade deleted by non-current workflow version ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher

  - Fix incorrectly executed checking on big integer number ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher

  - Fix incorrectly executed checking on big integer number ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher

- **[Action: Import records]** Resolve login failure issue after batch import of usernames and passwords ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie

- **[Collection field: Many to many (array)]** Updating a many to many (array) field throws an error when the `updatedBy` field is present ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile

- **[File manager]** Fix attachments field can not be updated in approval process ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher

- **[Public forms]** Public forms: Fix unauthorized access issue on form submission ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

- **[Collection field: Sequence]** Fix string based bigint sequence calculation ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher

- **[Workflow: Approval]**
  - Use comparison instead of implicit logic to avoid type issues by @mytharcher

  - Only participants can view (get) detail of approval by @mytharcher

- **[Email manager]** email deletion error by @jiannx


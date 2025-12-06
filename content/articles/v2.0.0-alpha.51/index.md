### 🎉 New Features

- **[client]**
  - Support customizing global styles in the theme editor ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo

  - support setting default sorting rule in detail block ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh

  - Support setting data type for Number field (options: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos

- **[Collection field: Sequence]** Automatically update sequence fields after data migration ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 Improvements

- **[client]**
  - fix subtable pagination jump after row removal and add support for column validation rules ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh

  - adjust large field display in editable subtable ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh

  - support ellipsis for overflowing JSON field content ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh

- **[flow-engine]**
  - Add useCache option to FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe

  - Add `removeModelWithSubModels` method to recursively remove model and its sub-models ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe

- **[Block: GridCard]** add row count config to grid card and replace pageSize with automatic calculation ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh

- **[Audit logs]** Update the unique identifier field to `text` to prevent identifier length overflow during bulk edits by @2013xile

- **[Migration manager]** Automatically update sequence fields after data migration by @cgyrock

### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where the configured fields from a removed block were not deleted from the filter block. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust

  - fix extra space gap when button is hidden in non-configuration mode ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh

  - Fixed an issue where the reset button text in filter form block could not be modified. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust

  - Fixed an issue where the field input did not support multiple values when using the $in or $notIn operators for filtering fields. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust

  - Fixed an issue where newly added data blocks did not automatically appear in the field menu of the filter form block. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust

  - The configuration menu for association fields in filter forms should not display the quick-create option. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust

  - fix association subtable data issue in List block ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh

  - fix numeric field validation rules from collection settings not applied ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh

  - Fixed an issue where fields in filter forms were restricted by backend validation rules for fields. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust

  - json field quick edit issue ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh

  - fix large field display issue in subtable edit ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh

  - fix quick create throws error when allowMultiple is disabled in association record select ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh

  - fix  json field should be submitted as an object ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh

  - Fixed an issue where the enter key could not be used to trigger the filter action. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust

- **[flow-engine]**
  - Fixed an issue where configuration options from the previous component remained visible in the menu after switching field components. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust

  - Move useEffect before conditional return in FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe

  - Fixed an issue where unsupported association fields appeared in filter operation fields. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust

- **[acl]** fix: acl.allow executed too early ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos

- **[File manager]**
  - Fix incorrect sub-detail data display in List and Grid Card blocks ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh

  - Fix attachment field not displayed correctly in readPretty subtable ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh

- **[Workflow]**
  - Fix the issue where error thrown in execution canvas when node is deleted ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher

  - Fix the issue where execution page throw error when jobs on node is undefined ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher

- **[Collection field: Formula]** Fixed an issue where formula fields could not be added to filter form block. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust

- **[Block: Action panel]** optimize style in List layout of action panel block ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh

- **[AI employees]**
  - Resolve issue where datasource role name was not compiled ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang

  - Fixed an issue where some current record fields could not be displayed in the variable selection component. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust

- **[Action: Import records]** Imported fields do not match the fields set in ACLsettings ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile

- **[Access control]** Add middleware for permission checks on association operations for external data source ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile

- **[Workflow: Approval]**
  - Fix the issue where no data when loading related approvals with ACL scope variables by @mytharcher

  - Fix the issue filled data disappeared in assignee's form by @mytharcher

  - Fix the issue of permission error thrown when load record related approvals on detail drawer by @mytharcher

  - Fix the issue where process is incorrect when branching with order and countersign by @mytharcher

  - Fix the issue when list approvals OOM happens by @mytharcher

  - Fix the issue where approval records are not included in job result in return branch by @mytharcher

  - Fix the issue where the approver pop-up window does not display a title by @zhangzhonghe

  - Fix the issue where error thrown when load related approval in union only role mode by @mytharcher

- **[Email manager]**
  - Handling abnormal data by @jiannx

  - not synchronizing gmail scheduled status by @jiannx


### 🎉 New Features

- **[client]** add support for add/select/disassociate settings in to-many subform ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh

- **[Data source: REST API]** add `error message transformer` options in restful api data source configuration by @cgyrock

### 🚀 Improvements

- **[auth]** Fix [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile

- **[Action: Import records]**
  - allow selecting ID for import fields ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh

  - allow selecting ID for import fields ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh

- **[Workflow: Approval]** Change API to get single approval item, and simplify code by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - fix prevent child disabled state from blocking relation field selection ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh

  - Fix the issue where `RemoteSelect` component incorrectly loading record when value is null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher

  - Fixed an issue where the UI component width was inconsistent when selecting “Past” or “Next” for date filter fields. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust

  - Fixed an issue where default field labels in filter form block could not be correctly translated in multiple languages. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust

  - Fixed an issue where the title and description styles of JS block was inconsistent with other blocks. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust

  - fix nested subtable in subform not displaying data ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh

  - fix  long text field tooltip line break issue ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh

  - Fixed an issue where the selectable data for association fields in filter form block was incorrect. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust

  - Fixed an issue where the selectable options were not fully listed when using the “is any of” or “is none of” operators for option-based field filtering. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust

  - Fixed an issue where custom fields configurations in filter form were not correctly pre-filled and some settings did not take effect. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust

  - Fixed an issue where clearing the between time filter values and triggering the filter again caused an error. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust

  - Fixed an issue where number field value was not correctly pre-filled in filter action. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust

  - Fixed an issue where some field operators in filter forms failed to filter data correctly. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust

  - Fixed an issue where filtering on Checkbox fields did not take effect. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust

- **[flow-engine]**
  - fix: incorrect conversion when using integer type as enum options ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos

  - Fix toggleable sub-model menu items failing when `useModel` is omitted by inferring it from `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe

- **[server]** Fixed an issue where triggered workflows were not added to the processing queue after importing data, ensuring that workflows run as expected immediately post-import ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher

- **[Notification: Email]** fix email notification connection limitation ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

- **[Collection field: Formula]** Fixed an issue where formula fields in filter action and filter form block could not type input values. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust

- **[Multi-space]** Fix the creation of other fields in the system collection by @jiannx


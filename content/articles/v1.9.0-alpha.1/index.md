### 🎉 New Features

- **[server]** Add event queue to process messages in queue ([#6819](https://github.com/nocobase/nocobase/pull/6819)) by @mytharcher

### 🚀 Improvements

- **[Workflow]** Move common components to base plugin ([#7140](https://github.com/nocobase/nocobase/pull/7140)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - After field changes, data scopes that depend on this field should automatically clear selected values ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe

  - Fix the issue where setting table column width is ineffective ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe

  - Fixed an error that occurred when saving a one-to-one relationship in a configuration field. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie

  - Fix the error issue with filter forms in the Duplicate button popup ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe

- **[undefined]** Fix e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher

- **[File manager]**
  - Fix build error due to ESM package ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher

  - Fix mimetype detect ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher

- **[Public forms]** fix issue where Date Only field failed to select date in public form. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh

- **[Calendar]** set default week start day to 'monday' in calendar block ([#7171](https://github.com/nocobase/nocobase/pull/7171)) by @katherinehhh

- **[Workflow: Manual node]** Fix incorrectly importing variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) by @mytharcher

- **[Workflow]** Fix the issue where multiple left swipes are required to return to the previous page on mobile devices ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe

- **[Workflow: Approval]**
  - Fix update association when submit by @mytharcher

  - Fix error thrown when approval deleted by @mytharcher

  - Fix associations not loaded after withdrawn by @mytharcher

- **[Email manager]**
  - after selecting rows, set "Read" and "unread" by @jiannx

  - submail content cannot be filtered by @jiannx


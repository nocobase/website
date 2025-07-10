### 🐛 Bug Fixes

- **[client]**
  - After field changes, data scopes that depend on this field should automatically clear selected values ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe

  - Fix the issue where setting table column width is ineffective ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe

  - Fix the error issue with filter forms in the Duplicate button popup ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe

  - Fixed an error that occurred when saving a one-to-one relationship in a configuration field. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie

- **[undefined]** Fix e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher

- **[File manager]**
  - Fix mimetype detect ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher

  - Fix build error due to ESM package ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher

- **[Public forms]** fix issue where Date Only field failed to select date in public form. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh

- **[Workflow]** Fix the issue where multiple left swipes are required to return to the previous page on mobile devices ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe

- **[Data visualization]** Table pagination issue ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile

- **[Workflow: Approval]**
  - Fix associations not loaded after withdrawn by @mytharcher

  - Remove transaction of patching schema due to timeout by @mytharcher

  - Fix error thrown when approval deleted by @mytharcher

  - Fix update association when submit by @mytharcher


### 🎉 New Features

- **[client]** support variables in secondary confirmation title and content ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh

- **[Template print]**
  - Support for dynamic images and barcode rendering in document templates. by @sheldon66

  - Feature: Support `{ label, value }` Select options in template printing. by @sheldon66

- **[Block: Tree]** filter tree block support linkage rule by @katherinehhh

- **[Data visualization: ECharts]** Add "Y-Axis inverse" setting for bar charts by @2013xile

### 🚀 Improvements

- **[client]** optimize subtable add button style and align paginator on the  same row ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh

- **[File manager]** Add OSS timeout option default to 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher

- **[Password policy]** Change default password expiration to never expire by @2013xile

### 🐛 Bug Fixes

- **[database]**
  - Fix test cases ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher

  - Avoid error thrown when data type is not string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher

- **[client]**
  - when variable selection requires async loading, the last selected menu is lost. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust

  - Fix the issue where one-to-many field sub-fields cannot be selected as filtering options in filter forms ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe

  - issue with configuring linkage rules in subform (popup) within subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh

  - multiple error messages displayed when validation rule is violated in form fields ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh

  - association field not submitting data when displaying field from related collection ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) by @katherinehhh

- **[Authentication]** Disallow changing authenticator name ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile

- **[Action: Custom request]** custom request response set to variable not displaying correctly ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh


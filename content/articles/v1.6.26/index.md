### 🎉 New Features

- **[Block: iframe]** Iframe block supports configuring the allow attribute ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe

- **[Template print]** Feature: Support `{ label, value }` Select options in template printing. by @sheldon66

### 🐛 Bug Fixes

- **[client]**
  - In nested subpages, the block list is not displayed when hovering the mouse over the "Add block" button ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe

  - When the relation field component of the filter form is changed to a data selector, there is no "Allow multiple selection" configuration item ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe

  - multiple error messages displayed when validation rule is violated in form fields ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh

  - issue with configuring linkage rules in subform (popup) within subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh

  - Fix the issue where one-to-many field sub-fields cannot be selected as filtering options in filter forms ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe

  - subtable pagination bar style issue in read-only mode ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh

  - Table selector in the filter form, abnormal style ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe

- **[database]**
  - Fix belongs-to association not loaded in appends when foreign key is bigInt under MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher

  - Fix test cases ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher

- **[Collection field: Attachment(URL)]** attachment (URL) fields should not allow value configuration in linkage rule ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh

- **[Workflow: Custom action event]** triggered workflow action linkage issue by @katherinehhh


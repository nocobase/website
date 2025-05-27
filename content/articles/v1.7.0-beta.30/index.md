### 🐛 Bug Fixes

- **[client]**
  - When the relation field component of the filter form is changed to a data selector, there is no "Allow multiple selection" configuration item ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe

  - Table selector in the filter form, abnormal style ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe

  - In nested subpages, the block list is not displayed when hovering the mouse over the "Add block" button ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe

  - multiple association field failed to submit when showing fields from association collection ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh

  - unable to drag other buttons onto the duplicate button ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh

  - subtable pagination bar style issue in read-only mode ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh

- **[database]** Fix belongs-to association not loaded in appends when foreign key is bigInt under MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher

- **[Collection field: Attachment(URL)]** attachment (URL) fields should not allow value configuration in linkage rule ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh


### 🚀 Improvements

- **[client]**
  - Support filling input fields via QR code scanning ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh

  - support localization for Markdown block content ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh

  - Prohibit moving a group menu into itself ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe

- **[Collection field: Many to many (array)]** Permission-related errors when displaying many-to-many(many) fields in ​data tables. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie

- **[Calendar]** support setting week start day in calendar block ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh

- **[Collection field: Markdown(Vditor)]** support image click-to-zoom in Markdown (Vditor) preview mode ([#7024](https://github.com/nocobase/nocobase/pull/7024)) by @katherinehhh

### 🐛 Bug Fixes

- **[client]**
  - auto-closing issue when configuring fields in the secondary popup form ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh

  - Fix fields not displaying in block templates caused by duplicate API requests ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe

  - auto-closing issue when configuring fields in the secondary popup form ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh

  - Filter form validation rules cause the filter button to become ineffective ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe

  - auto-closing issue when configuring fields in the secondary popup form ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh

  - select field options not working in filter form linkage rules ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh

  - Unable to clear the required field indicator of sub-table using linkage rules ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe

  - Fix the filter block parameter error issue ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe

  - Fix the issue where current user data is empty ([#7016](https://github.com/nocobase/nocobase/pull/7016)) by @zhangzhonghe

  - Current object variable is invalid in linkage rules ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe

  - Resolved an issue where block failed to read view data from external data sources. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie

  - Use independent variable scope for each field ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher

- **[Data visualization]**
  - incorrect display of between date field in chart filter ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh

  - Checkbox group fields in charts should display labels instead of raw values ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile

- **[Action: Import records]**
  - Fixed xlsx import to restrict textarea fields from accepting non-string formatted data ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie

  - Fix child table import failurewhen relational fields are involved ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie

  - Fixed errors occurring during batch editing when importing XLSX tree table data ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie

- **[API documentation]** non-NocoBase official plugins fail to display API documentation ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt

- **[Workflow]**
  - Fix `toJSON()` caused error in schedule trigger ([#7037](https://github.com/nocobase/nocobase/pull/7037)) by @mytharcher

  - Fix error thrown in manual execute action when trigger not configured correctly ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher

  - Fix UI error when workflow not exists ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher

  - Fix collection event on create or update mode not triggering when create without changed field ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher

- **[Mobile]** Optimize mobile popup lag issues ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe

- **[Data source manager]** Remove database dependency for possibleTypes, enforce API-driven configuration ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie

- **[Action: Export records Pro]** Fix the error that occurs when exporting attachments with conditions. by @aaaaaajie


### 🎉 New Features

- **[Audit logs]** Add the environment variable `AUDIT_LOGGER_TRANSPORT` to control the audit log output method by @2013xile

### 🚀 Improvements

- **[client]** Prohibit moving a group menu into itself ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe

- **[Calendar]** support setting week start day in calendar block ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh

- **[Collection field: Markdown(Vditor)]** support image click-to-zoom in Markdown (Vditor) preview mode ([#7024](https://github.com/nocobase/nocobase/pull/7024)) by @katherinehhh

- **[Collection field: Many to many (array)]** Permission-related errors when displaying many-to-many(many) fields in ​data tables. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie

- **[Comments]** support pagination in comment block by @katherinehhh

### 🐛 Bug Fixes

- **[client]**
  - auto-closing issue when configuring fields in the secondary popup form ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh

  - Fix the issue where linkage rules cause infinite loop ([#7050](https://github.com/nocobase/nocobase/pull/7050)) by @zhangzhonghe

  - auto-closing issue when configuring fields in the secondary popup form ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh

  - Fix upload size hint ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher

  - Fix: use optional chaining to safely reject requests in APIClient when handler may be undefined ([#7054](https://github.com/nocobase/nocobase/pull/7054)) by @sheldon66

  - auto-closing issue when configuring fields in the secondary popup form ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh

  - Fix fields not displaying in block templates caused by duplicate API requests ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe

  - select field options not working in filter form linkage rules ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh

  - Filter form validation rules cause the filter button to become ineffective ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe

  - Unable to clear the required field indicator of sub-table using linkage rules ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe

  - Fix the filter block parameter error issue ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe

  - Resolved an issue where block failed to read view data from external data sources. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie

  - Use independent variable scope for each field ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher

  - Current object variable is invalid in linkage rules ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe

- **[database]** fix: add missing creator and updater fields in import xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie

- **[undefined]** Remove database dependency for possibleTypes, enforce API-driven configuration by @aaaaaajie

- **[Action: Import records]**
  - Fixed xlsx import to restrict textarea fields from accepting non-string formatted data ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie

  - Fix child table import failurewhen relational fields are involved ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie

  - Fixed errors occurring during batch editing when importing XLSX tree table data ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie

- **[Data visualization]**
  - incorrect display of between date field in chart filter ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh

  - Checkbox group fields in charts should display labels instead of raw values ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile

- **[API documentation]** non-NocoBase official plugins fail to display API documentation ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt

- **[Workflow]**
  - Fix `toJSON()` caused error in schedule trigger ([#7037](https://github.com/nocobase/nocobase/pull/7037)) by @mytharcher

  - Fix error thrown in manual execute action when trigger not configured correctly ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher

  - Fix UI error when workflow not exists ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher

  - Fix collection event on create or update mode not triggering when create without changed field ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher

- **[Data source manager]** Remove database dependency for possibleTypes, enforce API-driven configuration ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie

- **[Mobile]** Optimize mobile popup lag issues ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe

- **[Action: Export records Pro]** Fix the error that occurs when exporting attachments with conditions. by @aaaaaajie

- **[Workflow: JavaScript]** Fix require for relative path by @mytharcher

- **[Template print]** Fix permission parsing bug and add data not found check. by @sheldon66

- **[Workflow: Approval]**
  - To avoid undefined field error by @mytharcher

  - Fix error thrown when workflow deleted by @mytharcher

  - Fix trigger variables by @mytharcher

  - Reload file association from snapshot to avoid URL expires by @mytharcher

  - Fix API error when refresh detail page by @mytharcher

- **[WeCom]** Add check for callback path in gateway middleware by @2013xile


### 🎉 New Features

- **[Audit logs]** Add the environment variable `AUDIT_LOGGER_TRANSPORT` to control the audit log output method by @2013xile

### 🚀 Improvements

- **[Calendar]** support setting week start day in calendar block ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh

- **[Collection field: Many to many (array)]** Permission-related errors when displaying many-to-many(many) fields in ​data tables. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie

### 🐛 Bug Fixes

- **[client]**
  - auto-closing issue when configuring fields in the secondary popup form ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh

  - select field options not working in filter form linkage rules ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh

  - Filter form validation rules cause the filter button to become ineffective ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe

  - Fix fields not displaying in block templates caused by duplicate API requests ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe

- **[Action: Import records]** Fix child table import failurewhen relational fields are involved ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie

- **[Data visualization]** Checkbox group fields in charts should display labels instead of raw values ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile

- **[Workflow]** Fix error thrown in manual execute action when trigger not configured correctly ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher

- **[Workflow: Approval]**
  - To avoid undefined field error by @mytharcher

  - Fix API error when refresh detail page by @mytharcher

- **[WeCom]** Add check for callback path in gateway middleware by @2013xile


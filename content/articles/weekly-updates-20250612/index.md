Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.8](https://www.nocobase.com/en/blog/v1.7.8)

*Release date: 2025-06-10*

#### 🎉 New Features

- **[Audit logs]** Add the environment variable `AUDIT_LOGGER_TRANSPORT` to control the audit log output method by @2013xile

#### 🚀 Improvements

- **[Calendar]** support setting week start day in calendar block ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh
- **[Collection field: Many to many (array)]** Permission-related errors when displaying many-to-many(many) fields in data tables. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie

#### 🐛 Bug Fixes

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

### [v1.7.6](https://www.nocobase.com/en/blog/v1.7.6)

*Release date: 2025-06-09*

#### 🚀 Improvements

- **[client]** Prohibit moving a group menu into itself ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[client]**

  - Resolved an issue where block failed to read view data from external data sources. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie
  - Fix the filter block parameter error issue ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe
  - Current object variable is invalid in linkage rules ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe
  - Unable to clear the required field indicator of sub-table using linkage rules ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe
- **[undefined]** Remove database dependency for possibleTypes, enforce API-driven configuration by @aaaaaajie
- **[Mobile]** Optimize mobile popup lag issues ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe
- **[Data source manager]** Remove database dependency for possibleTypes, enforce API-driven configuration ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie
- **[Action: Import records]** Fixed errors occurring during batch editing when importing XLSX tree table data ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie
- **[Workflow]** Fix UI error when workflow not exists ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher
- **[Workflow: JavaScript]** Fix require for relative path by @mytharcher
- **[Workflow: Approval]**

  - Fix error thrown when workflow deleted by @mytharcher
  - Reload file association from snapshot to avoid URL expires by @mytharcher
  - Fix trigger variables by @mytharcher

### [v1.7.5](https://www.nocobase.com/en/blog/v1.7.5)

*Release date: 2025-06-07*

#### 🐛 Bug Fixes

- **[client]** Use independent variable scope for each field ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
- **[database]** fix: add missing creator and updater fields in import xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie
- **[Workflow]** Fix collection event on create or update mode not triggering when create without changed field ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher
- **[Action: Export records Pro]** Fix the error that occurs when exporting attachments with conditions. by @aaaaaajie

### [v1.7.4](https://www.nocobase.com/en/blog/v1.7.4)

*Release date: 2025-06-07*

#### 🐛 Bug Fixes

- **[client]**

  - Association fields shows sub-table and sub-form on hover in read-pretty mode ([#7002](https://github.com/nocobase/nocobase/pull/7002)) by @zhangzhonghe
  - markdown block linkage rules not working when triggered by popup action ([#7007](https://github.com/nocobase/nocobase/pull/7007)) by @katherinehhh
- **[Localization]** Resolve error caused by empty texts ([#7010](https://github.com/nocobase/nocobase/pull/7010)) by @2013xile
- **[Async task manager]** Fixed multiple execution issue during async import ([#7006](https://github.com/nocobase/nocobase/pull/7006)) by @aaaaaajie
- **[Action: Export records Pro]** Fixed multiple execution issue during async import by @aaaaaajie
- **[Workflow: Approval]** Fix delegated approval can not continue when approved by others by @mytharcher

### [v1.7.3](https://www.nocobase.com/en/blog/v1.7.3)

*Release date: 2025-06-06*

#### 🚀 Improvements

- **[Workflow]** Support to filter more fields of workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**
  - switching page in subtable of detail block within modal triggers unsaved changes warning ([#7004](https://github.com/nocobase/nocobase/pull/7004)) by @katherinehhh
  - missing field title when setting a variable in the assignment component ([#7001](https://github.com/nocobase/nocobase/pull/7001)) by @katherinehhh
  - field style linkage rules not working ([#7003](https://github.com/nocobase/nocobase/pull/7003)) by @katherinehhh

### [v1.7.2](https://www.nocobase.com/en/blog/v1.7.2)

*Release date: 2025-06-05*

#### 🚀 Improvements

- **[Action: Batch edit]** Use `filterByTk` instead of `filter` under selected mode ([#6994](https://github.com/nocobase/nocobase/pull/6994)) by @mytharcher
- **[Action: Import records Pro]** Optimze performance issues when processing large XLSX files (high-row/column datasets), preventing system crashes or freezes. by @aaaaaajie

#### 🐛 Bug Fixes

- **[client]**

  - missing field title in assignedField component ([#6987](https://github.com/nocobase/nocobase/pull/6987)) by @katherinehhh
  - The last menu item cannot be selected in the move menu list ([#6997](https://github.com/nocobase/nocobase/pull/6997)) by @zhangzhonghe
- **[Workflow]**

  - Fix filter not updated when switching categories tabs ([#6989](https://github.com/nocobase/nocobase/pull/6989)) by @mytharcher
  - Fix workflow stats not auto created ([#6993](https://github.com/nocobase/nocobase/pull/6993)) by @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.3](https://www.nocobase.com/en/blog/v1.8.0-beta.3)

*Release date: 2025-06-04*


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.2](https://www.nocobase.com/en/blog/v1.8.0-alpha.2)

*Release date: 2025-06-04*

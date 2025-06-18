Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/en/blog/v1.7.14)

*Release date: 2025-06-18*

#### 🚀 Improvements

- **[client]** Auto-hide grid card block action bar when empty ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe
- **[Verification]** Remove verifier options from the response of the `verifiers:listByUser` API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

#### 🐛 Bug Fixes

- **[database]** support association updates in updateOrCreate and firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos
- **[client]**

  - URL query parameter variables not working in public form field default value ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh
  - style condition on subtable column fields not applied correctly ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh
  - Filtering through relationship collection fields in filter forms is invalid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe
- **[Collection field: Many to many (array)]** Updating a many to many (array) field throws an error when the `updatedBy` field is present ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile
- **[Public forms]** Public forms: Fix unauthorized access issue on form submission ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

### [v1.7.13](https://www.nocobase.com/en/blog/v1.7.13)

*Release date: 2025-06-17*

#### 🚀 Improvements

- **[client]** Logo container width adapts to content type (fixed 168px for images, auto width for text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038
- **[Workflow: Approval]** Add extra field option for re-assignees list by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - required validation message in subtable persists when switching page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh
  - decimal point lost after switching amount component from mask to inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh
  - incorrect Markdown (Vditor) rendering in subtable ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh
- **[Collection field: Sequence]** Fix string based bigint sequence calculation ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher
- **[Backup manager]** unknow command error when restoring MySQL backups on windows platform by @gchust

### [v1.7.12](https://www.nocobase.com/en/blog/v1.7.12)

*Release date: 2025-06-16*

#### 🚀 Improvements

- **[client]** add "empty" and "not empty" options to checkbox field linkage rules ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh

#### 🐛 Bug Fixes

- **[client]** After creating the reverse relation field, the option "Create reverse relation field in the target data table" in the association field settings was not checked. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie
- **[Data source manager]** Scope changes now take effect immediately for all related roles. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie
- **[Access control]** Fixed an issue where the app blocked entry when no default role existed ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie
- **[Workflow: Custom action event]** Fix variable of redirect url not parsed by @mytharcher

### [v1.7.11](https://www.nocobase.com/en/blog/v1.7.11)

*Release date: 2025-06-15*

#### 🎉 New Features

- **[Text copy]** Support one-click copying of text field content ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[client]**

  - association field selector does not clear selected data after submission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh
  - Fix upload size hint ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher
- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos
- **[Workflow: Loop node]** Fix loop branch runs when condition not satisfied ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher
- **[Workflow: Approval]**

  - Fix todo stats not updated when execution canceled by @mytharcher
  - Fix trigger variable when filter by type by @mytharcher

### [v1.7.10](https://www.nocobase.com/en/blog/v1.7.10)

*Release date: 2025-06-12*

#### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where linkage rules cause infinite loop ([#7050](https://github.com/nocobase/nocobase/pull/7050)) by @zhangzhonghe
  - Fix: use optional chaining to safely reject requests in APIClient when handler may be undefined ([#7054](https://github.com/nocobase/nocobase/pull/7054)) by @sheldon66
  - auto-closing issue when configuring fields in the secondary popup form ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh
- **[Data visualization]** incorrect display of between date field in chart filter ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh
- **[API documentation]** non-NocoBase official plugins fail to display API documentation ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt
- **[Action: Import records]** Fixed xlsx import to restrict textarea fields from accepting non-string formatted data ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/en/blog/v1.8.0-beta.9)

*Release date: 2025-06-18*

#### 🚀 Improvements

- **[client]**

  - Auto-hide grid card block action bar when empty ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe
  - Logo container width adapts to content type (fixed 168px for images, auto width for text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038
- **[Verification]** Remove verifier options from the response of the `verifiers:listByUser` API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

#### 🐛 Bug Fixes

- **[client]**

  - required validation message in subtable persists when switching page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh
  - style condition on subtable column fields not applied correctly ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh
  - decimal point lost after switching amount component from mask to inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh
  - URL query parameter variables not working in public form field default value ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh
  - Filtering through relationship collection fields in filter forms is invalid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe
  - incorrect Markdown (Vditor) rendering in subtable ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh
- **[database]** support association updates in updateOrCreate and firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos
- **[Collection field: Many to many (array)]** Updating a many to many (array) field throws an error when the `updatedBy` field is present ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile
- **[Collection field: Sequence]** Fix string based bigint sequence calculation ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher
- **[Public forms]** Public forms: Fix unauthorized access issue on form submission ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/en/blog/v1.8.0-beta.8)

*Release date: 2025-06-16*

#### 🚀 Improvements

- **[client]** add "empty" and "not empty" options to checkbox field linkage rules ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh
- **[Workflow: Approval]** Add extra field option for re-assignees list by @mytharcher

#### 🐛 Bug Fixes

- **[Backup manager]** unknow command error when restoring MySQL backups on windows platform by @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/en/blog/v1.8.0-beta.7)

*Release date: 2025-06-15*

#### 🎉 New Features

- **[Text copy]** Support one-click copying of text field content ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos
- **[client]**

  - association field selector does not clear selected data after submission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh
  - After creating the reverse relation field, the option "Create reverse relation field in the target data table" in the association field settings was not checked. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie
- **[Access control]** Fixed an issue where the app blocked entry when no default role existed ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie
- **[Workflow: Loop node]** Fix loop branch runs when condition not satisfied ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher
- **[Data source manager]** Scope changes now take effect immediately for all related roles. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie
- **[Workflow: Custom action event]** Fix variable of redirect url not parsed by @mytharcher
- **[Workflow: Approval]**

  - Fix trigger variable when filter by type by @mytharcher
  - Fix todo stats not updated when execution canceled by @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/en/blog/v1.8.0-beta.6)

*Release date: 2025-06-12*

#### 🎉 New Features

- **[Audit logs]** Add the environment variable `AUDIT_LOGGER_TRANSPORT` to control the audit log output method by @2013xile

#### 🚀 Improvements

- **[client]** Prohibit moving a group menu into itself ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe
- **[Calendar]** support setting week start day in calendar block ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh
- **[Collection field: Markdown(Vditor)]** support image click-to-zoom in Markdown (Vditor) preview mode ([#7024](https://github.com/nocobase/nocobase/pull/7024)) by @katherinehhh
- **[Collection field: Many to many (array)]** Permission-related errors when displaying many-to-many(many) fields in data tables. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie
- **[Comments]** support pagination in comment block by @katherinehhh

#### 🐛 Bug Fixes

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/en/blog/v1.8.0-alpha.8)

*Release date: 2025-06-17*

#### 🎉 New Features

- **[Text copy]** Support one-click copying of text field content ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe
- **[Email manager]** support delete email by @jiannx

#### 🚀 Improvements

- **[client]**

  - add "empty" and "not empty" options to checkbox field linkage rules ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh
  - Logo container width adapts to content type (fixed 168px for images, auto width for text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038
- **[Async task manager]** Improve performance of task creation during export ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie
- **[Workflow: Approval]** Add extra field option for re-assignees list by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - decimal point lost after switching amount component from mask to inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh
  - incorrect Markdown (Vditor) rendering in subtable ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh
  - After creating the reverse relation field, the option "Create reverse relation field in the target data table" in the association field settings was not checked. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie
  - association field selector does not clear selected data after submission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh
- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos
- **[Access control]** Fixed an issue where the app blocked entry when no default role existed ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie
- **[Data source manager]** Scope changes now take effect immediately for all related roles. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie
- **[Workflow: Loop node]** Fix loop branch runs when condition not satisfied ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher
- **[Workflow: Custom action event]** Fix variable of redirect url not parsed by @mytharcher
- **[Workflow: Approval]** Fix todo stats not updated when execution canceled by @mytharcher
- **[Email manager]** email delete failed by @jiannx
- **[Backup manager]** unknow command error when restoring MySQL backups on windows platform by @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/en/blog/v1.8.0-alpha.7)

*Release date: 2025-06-13*

#### 🎉 New Features

- **[Email manager]** support email sync interval setting by @jiannx

#### 🐛 Bug Fixes

- **[database]** make eq operator for string fields compatible with number type ([#7062](https://github.com/nocobase/nocobase/pull/7062)) by @chenos
- **[client]** Fix upload size hint ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher
- **[Workflow: Approval]** Fix trigger variable when filter by type by @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/en/blog/v1.8.0-alpha.5)

*Release date: 2025-06-12*

#### 🚀 Improvements

- **[client]**

  - Support filling input fields via QR code scanning ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh
  - support localization for Markdown block content ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh
  - Prohibit moving a group menu into itself ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe
- **[Collection field: Many to many (array)]** Permission-related errors when displaying many-to-many(many) fields in data tables. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie
- **[Calendar]** support setting week start day in calendar block ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh
- **[Collection field: Markdown(Vditor)]** support image click-to-zoom in Markdown (Vditor) preview mode ([#7024](https://github.com/nocobase/nocobase/pull/7024)) by @katherinehhh

#### 🐛 Bug Fixes

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

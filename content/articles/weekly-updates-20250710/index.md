Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**This week we released [NocoBase 1.8.0](https://www.nocobase.com/en/blog/nocobase-1-8-0), with improved authentication, support for custom stats variables, upgraded email management, and optimized workflow and mobile interaction.**

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/en/blog/v1.8.1)

*Release date: 2025-07-09*

#### 🐛 Bug Fixes

- **[client]**

  - The checkbox field display is incorrect in the association field collection within the form ([#7176](https://github.com/nocobase/nocobase/pull/7176)) by @zhangzhonghe
  - Fix the issue where clicking buttons cannot open popups ([#7180](https://github.com/nocobase/nocobase/pull/7180)) by @zhangzhonghe
- **[Workflow: Manual node]** Fix error thrown when use variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) by @mytharcher
- **[Template print]** add migration script to rootDataType field by @jiannx
- **[Workflow: Approval]** Fix approved branch not run when no assignee by @mytharcher

### [v1.7.20](https://www.nocobase.com/en/blog/v1.7.20)

*Release date: 2025-07-07*

#### 🐛 Bug Fixes

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

### [v1.7.19](https://www.nocobase.com/en/blog/v1.7.19)

*Release date: 2025-07-03*

#### 🚀 Improvements

- **[database]** Support to add pool options from env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher
- **[Workflow]**

  - Improve executions list load performance by excepting JSON field ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher
  - Add log API for node testing ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher
- **[Multi-app manager]** add filter support to multi-app management ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh
- **[Workflow: Approval]** Change time to absolute in timeline by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Setting field displayName in connected view had no effect ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie
  - background color style issue  in subtable on detail block ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh
  - Workflow manual node UI configuration: linkage rules cannot select Current form variables ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe
  - association field default value overrides existing data in sub-table ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh
  - markdown did not reflect changes in real-time when referencing $nForm variables ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh
  - Fault tolerance for settings based on 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher
- **[utils]** filtering issue on DateOnly or Datetime (without time zone) using Exact day variable ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh
- **[Workflow]** Fix error thrown by cycling import ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher
- **[Password policy]** Support permanently locking user accounts by @2013xile
- **[Workflow: Subflow]** Fix issue in cluster mode by @mytharcher
- **[Workflow: Approval]**

  - Remove non-filterable fields from filter by @mytharcher
  - Add form layout settings by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/en/blog/v1.9.0-beta.1)

*Release date: 2025-07-07*

#### 🎉 New Features

- **[server]** Add event queue to process messages in queue ([#6819](https://github.com/nocobase/nocobase/pull/6819)) by @mytharcher

#### 🚀 Improvements

- **[Workflow]** Move common components to base plugin ([#7140](https://github.com/nocobase/nocobase/pull/7140)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - After field changes, data scopes that depend on this field should automatically clear selected values ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe
  - Fix the issue where setting table column width is ineffective ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe
  - Fix the error issue with filter forms in the Duplicate button popup ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe
  - Fixed an error that occurred when saving a one-to-one relationship in a configuration field. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie
- **[undefined]** Fix e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher
- **[Calendar]** set default week start day to 'monday' in calendar block ([#7171](https://github.com/nocobase/nocobase/pull/7171)) by @katherinehhh
- **[Workflow]** Fix the issue where multiple left swipes are required to return to the previous page on mobile devices ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe
- **[File manager]**

  - Fix build error due to ESM package ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher
  - Fix mimetype detect ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher
- **[Workflow: Manual node]** Fix incorrectly importing variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) by @mytharcher
- **[Public forms]** fix issue where Date Only field failed to select date in public form. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh
- **[Workflow: Approval]**

  - Remove transaction of patching schema due to timeout by @mytharcher
  - Fix associations not loaded after withdrawn by @mytharcher
  - Fix error thrown when approval deleted by @mytharcher
  - Fix update association when submit by @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/en/blog/v1.8.0-beta.13)

*Release date: 2025-07-03*

#### 🎉 New Features

- **[client]**

  - Support the BIT field in SQL Server for external data sources. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie
  - Support custom aggregation variables ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
    Reference: [Custom variables](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** support commercial authorization ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx
- **[Data source manager]** ✨ Support on-demand loading of collections from external data sources ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie
- **[License settings]** add license setting and validate license before downloading plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) by @jiannx
- **[Authentication]** Support the "Forgot Password" function ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
  Reference: [Forgot password](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Action: Batch update]** Support refreshing data in other data blocks after updating data in a block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe
- **[Data source: External SQL Server]**

  - Added support for SQL Server BIT field in external data sources by @aaaaaajie
  - Support on-demand loading of collections from external data sources by @aaaaaajie
- **[Custom variables]** Support custom aggregation variables by @zhangzhonghe
  Reference: [Custom variables](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Email manager]**

  - support delete email by @jiannx
  - support email sync interval setting by @jiannx
  - support mass sending by @jiannx

#### 🚀 Improvements

- **[client]**

  - Support filling input fields via QR code scanning ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh
  - Determine whether to display the mobile components based on device type rather than page width ([#6611](https://github.com/nocobase/nocobase/pull/6611)) by @zhangzhonghe
  - support localization for Markdown block content ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh
  - Determine whether to display the mobile layout based on device type rather than page width ([#6600](https://github.com/nocobase/nocobase/pull/6600)) by @zhangzhonghe
- **[Async task manager]** Improve performance of task creation during export ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie
- **[Mobile]** Adapt the style of the notification pop-up for mobile devices ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe
- **[Email manager]**

  - support separate reply and forwarding of emails within the same subject by @jiannx
  - schema implement then email send and support ai by @jiannx
  - supports the default sending value in pop-up, supports fuzzy search for recipients, and fixes problems by @jiannx
  - complete mass sending function by @jiannx
  - functional improvement and problem fix by @jiannx

#### 🐛 Bug Fixes

- **[cli]**

  - Adjust the license copy when installing the plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx
  - undefined error in download plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx
- **[client]**

  - After clearing the badge value, the UI is not updated ([#7055](https://github.com/nocobase/nocobase/pull/7055)) by @zhangzhonghe
  - Error when clicking filter button ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe
  - Fix the issue where current user data is empty ([#7016](https://github.com/nocobase/nocobase/pull/7016)) by @zhangzhonghe
  - The content displayed incorrectly on pages opened through popup links ([#6990](https://github.com/nocobase/nocobase/pull/6990)) by @zhangzhonghe
  - Pass other props to Variable.Input component. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66
  - Save as template action will be failed if containing association field ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
- **[database]** make eq operator for string fields compatible with number type ([#7062](https://github.com/nocobase/nocobase/pull/7062)) by @chenos
- **[build]** fix the client runtime error in plugin-workflow-javascript, process undefine error ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx
- **[Data visualization]** Table pagination issue ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[Data source manager]** Fixed an issue where the combination of on-demand data source loading and table prefix configuration caused a “ConnectionManager.getConnection was called after the connection manager was closed” error. ([#7150](https://github.com/nocobase/nocobase/pull/7150)) by @aaaaaajie
- **[plugin-service-platform]** adjust license text by @jiannx
- **[Custom variables]** After clearing the badge value, the UI is not updated by @zhangzhonghe
- **[Email manager]**

  - attachment does not display by @jiannx
  - email deletion error by @jiannx
  - email delete failed by @jiannx
  - setting pop-up not to display by @jiannx
  - the reply drawer is not visible by @jiannx
  - recipient fuzzy search supports associated fields by @jiannx
  - add the "id" field to the mailmessagelabelsMailmessages by @jiannx
  - mail fuzzy search to make unique filters by @jiannx
  - multiple primary keys for table "mailmessagelabels_mailmessages" by @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/en/blog/v1.8.0-beta.12)

*Release date: 2025-07-03*

#### 🚀 Improvements

- **[database]** Support to add pool options from env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher
- **[Workflow]**

  - Improve executions list load performance by excepting JSON field ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher
  - Add log API for node testing ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher
- **[Multi-app manager]** add filter support to multi-app management ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh
- **[Workflow: Approval]** Change time to absolute in timeline by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - markdown did not reflect changes in real-time when referencing $nForm variables ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh
  - background color style issue  in subtable on detail block ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh
  - Workflow manual node UI configuration: linkage rules cannot select Current form variables ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe
  - Setting field displayName in connected view had no effect ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie
  - association field default value overrides existing data in sub-table ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh
  - Fault tolerance for settings based on 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher
- **[utils]** filtering issue on DateOnly or Datetime (without time zone) using Exact day variable ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh
- **[Workflow]** Fix error thrown by cycling import ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher
- **[Password policy]** Support permanently locking user accounts by @2013xile
- **[Workflow: Subflow]** Fix issue in cluster mode by @mytharcher
- **[Workflow: Approval]**

  - Remove non-filterable fields from filter by @mytharcher
  - Add form layout settings by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Release date: 2025-07-07*

#### 🎉 New Features

- **[server]** Add event queue to process messages in queue ([#6819](https://github.com/nocobase/nocobase/pull/6819)) by @mytharcher

#### 🚀 Improvements

- **[Workflow]** Move common components to base plugin ([#7140](https://github.com/nocobase/nocobase/pull/7140)) by @mytharcher

#### 🐛 Bug Fixes

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

### [v1.8.0-alpha.14](https://www.nocobase.com/en/blog/v1.8.0-alpha.14)

*Release date: 2025-07-04*

#### 🐛 Bug Fixes

- **[Workflow: Approval]** Remove transaction of patching schema due to timeout by @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/en/blog/v1.8.0-alpha.13)

*Release date: 2025-07-03*

#### 🚀 Improvements

- **[Email manager]** support separate reply and forwarding of emails within the same subject by @jiannx

#### 🐛 Bug Fixes

- **[client]**

  - background color style issue  in subtable on detail block ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh
  - markdown did not reflect changes in real-time when referencing $nForm variables ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh
- **[Data visualization]** Table pagination issue ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[Data source manager]** Fixed an issue where the combination of on-demand data source loading and table prefix configuration caused a “ConnectionManager.getConnection was called after the connection manager was closed” error. ([#7150](https://github.com/nocobase/nocobase/pull/7150)) by @aaaaaajie

Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/en/blog/v1.8.22)

*Release date: 2025-08-27*

#### 🐛 Bug Fixes

- **[Workflow]** Fix the issue where the detail popup was not displayed due to an incorrect route configuration in the tasks center ([#7452](https://github.com/nocobase/nocobase/pull/7452)) by @mytharcher

### [v1.8.21](https://www.nocobase.com/en/blog/v1.8.21)

*Release date: 2025-08-26*

#### 🐛 Bug Fixes

- **[File manager]** Fix the error when editing the `storage` field in the file collection. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) by @mytharcher
- **[Workflow: Parallel node]** Fix the issue where incorrect status determination in parallel branch nodes under the "Run all branch" mode caused premature completion ([#7445](https://github.com/nocobase/nocobase/pull/7445)) by @mytharcher
- **[Workflow: Approval]** Add the status variable for custom templates in approval completion notifications by @mytharcher

### [v1.8.20](https://www.nocobase.com/en/blog/v1.8.20)

*Release date: 2025-08-25*

#### 🚀 Improvements

- **[Workflow]** Adjust the workflow variable API to support presetting an additional variable list ([#7439](https://github.com/nocobase/nocobase/pull/7439)) by @mytharcher
- **[Workflow: Approval]**

  - Support using approval-related variables in custom notifications by @mytharcher
  - Support updating the approval status after the end node terminates the execution by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Fix an issue where, in certain scenarios, editing a record in the mobile record picker popup causes an error ([#7444](https://github.com/nocobase/nocobase/pull/7444)) by @zhangzhonghe
  - required validation not working for attachment fields in subtable ([#7431](https://github.com/nocobase/nocobase/pull/7431)) by @katherinehhh
  - Fix the issue where the icon was displayed incorrectly when the URL in the attachment URL field contained query parameters ([#7432](https://github.com/nocobase/nocobase/pull/7432)) by @mytharcher
- **[database]**

  - Fixed a MySQL syntax error that occurred when loading more in-app messages. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) by @aaaaaajie
  - Fixed precision issue for exported Number fields ([#7421](https://github.com/nocobase/nocobase/pull/7421)) by @aaaaaajie
- **[undefined]** Fixed issue with filtering by date field only in MySQL external source ([#7422](https://github.com/nocobase/nocobase/pull/7422)) by @aaaaaajie
- **[Action: Import records]** Fixed an issue where import failed when the table primary key was a single-line text ([#7416](https://github.com/nocobase/nocobase/pull/7416)) by @aaaaaajie
- **[Workflow]**

  - Complete the options for automatically deleting workflow execution status ([#7436](https://github.com/nocobase/nocobase/pull/7436)) by @mytharcher
  - Fix issues related to the mobile menu in the workflow tasks ([#7419](https://github.com/nocobase/nocobase/pull/7419)) by @mytharcher
- **[Action: Import records Pro]** Fixed unexpected update result when using string primary key in xlsx import. by @aaaaaajie

### [v1.8.19](https://www.nocobase.com/en/blog/v1.8.19)

*Release date: 2025-08-22*

#### 🎉 New Features

- **[Workflow: Approval]** Add inline template type for notification configuration by @mytharcher

#### 🚀 Improvements

- **[client]** Support displaying icons identified by strings in the Select component when in read-only mode ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher
- **[database]** Optimized ACL Meta query performance ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie
- **[Mobile]** Optimize the mobile popup component ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[database]** Fixed issue where Postgres external table reads included views from other schemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) by @aaaaaajie
- **[Block: template]** Resolved an issue where mail blocks were not visible when placed inside an inherited template block ([#7430](https://github.com/nocobase/nocobase/pull/7430)) by @gchust
- **[Action: Import records Pro]** Disallow assigning relation fields during import duplicate detection. by @aaaaaajie
- **[Workflow: Approval]** Fix the issue where the user list was empty during countersigning by @mytharcher
- **[Migration manager]** Skip the `\restrict` and `\unrestrict` commands generated by the latest pg_dump when creating migration files to resolve restore errors. by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.6](https://www.nocobase.com/en/blog/v1.9.0-beta.6)

*Release date: 2025-08-22*

#### 🎉 New Features

- **[client]** Added "Auto focus" option for Input, TextArea, URL, and InputNumber components that automatically focuses the input field during initial page rendering when enabled ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe
- **[Async task manager]** Support to split async task services by env and event queue ([#7241](https://github.com/nocobase/nocobase/pull/7241)) by @mytharcher
- **[Office File Previewer]** Support to preview Office files via Microsoft live preview ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher
- **[Auth: SAML 2.0]** Add signature-related configuration options by @2013xile
- **[Workflow: Approval]**

  - Add inline template type for notification configuration by @mytharcher
  - Support to use consistent task title for all approval nodes in same workflow by @mytharcher

#### 🚀 Improvements

- **[database]** Optimized ACL Meta query performance ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie
- **[client]**

  - Support displaying icons identified by strings in the Select component when in read-only mode ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher
  - add "day before yesterday" date variable support ([#7359](https://github.com/nocobase/nocobase/pull/7359)) by @katherinehhh
  - Optimize performance when switching popup tabs ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe
  - Do not automatically close menu after selection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612
- **[Mobile]** Optimize the mobile popup component ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe
- **[Workflow]**

  - Updated the node selection menu to display options in a two-column layout for improving information density and allowing users to view more options at once ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher
  - Fix unstable test case ([#7349](https://github.com/nocobase/nocobase/pull/7349)) by @mytharcher
  - Show normal title when disabled ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher
  - Reduce jobs amount to load when preparing execution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher
- **[License settings]** In the license settings, copy the latest Instance ID each time ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx
- **[Authentication]** Removed the token parameter from the URL after a successful sign-in ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile
- **[Notification: In-app message]**

  - Remove SQL logs output via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile
  - Change in-app message from SSE to WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher
- **[Office File Previewer]** Add support for previewing `.odt` file ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher
- **[Action: Import records Pro]** Support to split import / export services by env and event queue by @mytharcher
- **[Workflow: JavaScript]** Change cache to app cache to avoid bugs in cluster mode by @mytharcher
- **[Template print]** support field m2m array by @jiannx
- **[Backup manager]** improve performance for mysql database backup operation by @gchust
- **[Auth: DingTalk]** In the DingTalk client, set the navigation bar title to an empty string instead of displaying “Loading…” by @2013xile
- **[Migration manager]** Support to split migration service by env and event queue by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where the icon was displayed incorrectly when the URL in the attachment URL field contained query parameters ([#7432](https://github.com/nocobase/nocobase/pull/7432)) by @mytharcher
  - treat number 0 as empty during linkage rule empty validation ([#7404](https://github.com/nocobase/nocobase/pull/7404)) by @katherinehhh
  - Fix text of link button breaking line ([#7406](https://github.com/nocobase/nocobase/pull/7406)) by @mytharcher
  - Fix the issue where multi-column form layout doesn't convert to single-column layout on mobile devices ([#7355](https://github.com/nocobase/nocobase/pull/7355)) by @zhangzhonghe
  - Fix bulk delete collections error ([#7345](https://github.com/nocobase/nocobase/pull/7345)) by @aaaaaajie
  - Fixed issue where previously saved data scope was not preselected when configuring permissions individually. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) by @aaaaaajie
  - Fix the issue where variable raw strings are submitted with the form ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe
  - When using variables to set field default values in filter forms, if the variable value is empty, the input box will display the original variable string ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe
  - Fix tooltip shows [object Object] on hover in action panel ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh
  - Fix infinite loop issue when parsing field default values ([#7301](https://github.com/nocobase/nocobase/pull/7301)) by @zhangzhonghe
  - Fix file preview item on null url ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher
  - Fix issue where tree table cannot be expanded ([#7309](https://github.com/nocobase/nocobase/pull/7309)) by @zhangzhonghe
  - Add full URL to local file when previewing ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher
  - Fix unexpected behavior in table row drag and drop sorting ([#6959](https://github.com/nocobase/nocobase/pull/6959)) by @ChimingLiu
  - date field display issue  in association field data selector popup of filter form ([#7290](https://github.com/nocobase/nocobase/pull/7290)) by @katherinehhh
- **[database]** Fixed issue where Postgres external table reads included views from other schemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) by @aaaaaajie
- **[server]** Some requests lack `ctx.action`, causing errors in the audit log middleware ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile
- **[undefined]** Add new plugin to preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher
- **[utils]** incorrect timezone handling for parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh
- **[Block: template]** Resolved an issue where mail blocks were not visible when placed inside an inherited template block ([#7430](https://github.com/nocobase/nocobase/pull/7430)) by @gchust
- **[Mobile]**

  - incorrect display format of date field on mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) by @katherinehhh
  - Fix the issue where the form submission data in the mobile approval dialog is incorrect ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe
  - Resolved an issue where the date picker on mobile devices displayed incorrectly when date range limits were applied ([#7362](https://github.com/nocobase/nocobase/pull/7362)) by @katherinehhh
- **[Workflow]**

  - Fix error thrown and form data disappeared when edit workflow category ([#7408](https://github.com/nocobase/nocobase/pull/7408)) by @mytharcher
  - Fix the translation of the page title in the workflow tasks center ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher
  - Refactor the "Add Node" menu and fix the workflow canvas rendering performance issues it caused ([#7363](https://github.com/nocobase/nocobase/pull/7363)) by @mytharcher
  - Fix the issue of incorrect filter conditions when retrieving a single to-do item ([#7366](https://github.com/nocobase/nocobase/pull/7366)) by @mytharcher
  - Fix the issue of keyword matching in the field select ([#7356](https://github.com/nocobase/nocobase/pull/7356)) by @mytharcher
  - Avoid error thrown caused by publishing to event queue when stopping ([#7348](https://github.com/nocobase/nocobase/pull/7348)) by @mytharcher
  - Fix `undefined` result when processor exit ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher
  - Fix BigInt ID issue in MySQL when save job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) by @mytharcher
- **[Workflow: mailer node]** Fix the issue where the email node might not resume execution properly ([#7409](https://github.com/nocobase/nocobase/pull/7409)) by @mytharcher
- **[Office File Previewer]**

  - Fix error thrown when upload file to attachment URL field ([#7405](https://github.com/nocobase/nocobase/pull/7405)) by @mytharcher
  - Support `.docx`, `.xlsx` and `.pptx` file with only URL to be previewed ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher
- **[File manager]**

  - Remove the hint for the file upload size limit ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher
  - Add `storageId` field to file collection to support permission configuration ([#7351](https://github.com/nocobase/nocobase/pull/7351)) by @mytharcher
  - Fix storage field permission ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher
- **[Notification: In-app message]**

  - Fix translations ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher
  - Fix the issue where in-site messages were received but not displayed in a popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) by @mytharcher
- **[Calendar]** calendar event item tooltip showing [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh
- **[Collection field: Formula]** Fix the issue where formula input could not pass validation due to variable type ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher
- **[Workflow: Parallel node]** Fix parallel node suspend after resume under MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) by @mytharcher
- **[Workflow: CC]** Fix blocks can not be removed ([#7338](https://github.com/nocobase/nocobase/pull/7338)) by @mytharcher
- **[Data visualization]** date variable issue in default value of date field in chart filter block ([#7291](https://github.com/nocobase/nocobase/pull/7291)) by @katherinehhh
- **[Collection: Tree]** Fix the path synchronization logic of tree collections ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu
- **[Workflow: HTTP request node]** Fix racing condition bug ([#7310](https://github.com/nocobase/nocobase/pull/7310)) by @mytharcher
- **[Workflow: Dynamic calculation node]** Fix legacy API caused error ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher
- **[Action: Export records]** Fixed incorrect formatting of nested relational fields when exporting to Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) by @aaaaaajie
- **[Action: Import records Pro]** Disallow assigning relation fields during import duplicate detection. by @aaaaaajie
- **[Data source: External SQL Server]** Fix inconsistent storage format for MSSQL datetime (without time zone) fields from external data sources by @aaaaaajie
- **[Workflow: Custom action event]** Clear the selected rows after successfully triggering actions on multiple records by @mytharcher
- **[Workflow: Subflow]** Fix flow suspended by @mytharcher
- **[Template print]** Printing of radio-select fields in multiple lines of data by @jiannx
- **[File storage: S3(Pro)]**

  - Fix the issue where the IAM authentication method could not be used to upload files by @mytharcher
  - Deprecate problematic parameter `attachmentField` by @mytharcher
- **[Workflow: Approval]**

  - Fix the issue where loading external data source data in approval records resulted in a 404 error by @mytharcher
  - Add task title for added and delegated items by @mytharcher
  - Fix error thrown from assignee select inside external datasource by @mytharcher
  - Fix the issue where the user list was empty during countersigning by @mytharcher
  - Fix update associations when submit draft by @mytharcher
  - Fix linkage rules not works in approval original detail block by @mytharcher
- **[Backup manager]** large file backups could show “successful” before actually finishing by @gchust
- **[Migration manager]** Skip the `\restrict` and `\unrestrict` commands generated by the latest pg_dump when creating migration files to resolve restore errors. by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.12](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Release date: 2025-08-22*

#### 🎉 New Features

- **[client]** Support field validation rule ([#7297](https://github.com/nocobase/nocobase/pull/7297)) by @aaaaaajie
- **[Workflow: Approval]**

  - Add inline template type for notification configuration by @mytharcher
  - Support to use consistent task title for all approval nodes in same workflow by @mytharcher

#### 🚀 Improvements

- **[database]** Optimized ACL Meta query performance ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie
- **[client]** Support displaying icons identified by strings in the Select component when in read-only mode ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher
- **[Mobile]** Optimize the mobile popup component ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe
- **[Workflow]** Updated the node selection menu to display options in a two-column layout for improving information density and allowing users to view more options at once ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher
- **[License settings]** In the license settings, copy the latest Instance ID each time ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx
- **[Notification: In-app message]** Remove SQL logs output via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile
- **[Authentication]** Removed the token parameter from the URL after a successful sign-in ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile
- **[Template print]** support field m2m array by @jiannx

#### 🐛 Bug Fixes

- **[database]** Fixed issue where Postgres external table reads included views from other schemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) by @aaaaaajie
- **[client]**

  - treat number 0 as empty during linkage rule empty validation ([#7404](https://github.com/nocobase/nocobase/pull/7404)) by @katherinehhh
  - Fix an issue where the "Column settings" button loads columns from the table inside the modal dialog ([#7385](https://github.com/nocobase/nocobase/pull/7385)) by @kerwin612
  - Fix text of link button breaking line ([#7406](https://github.com/nocobase/nocobase/pull/7406)) by @mytharcher
- **[server]** Some requests lack `ctx.action`, causing errors in the audit log middleware ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile
- **[Block: template]** Resolved an issue where mail blocks were not visible when placed inside an inherited template block ([#7430](https://github.com/nocobase/nocobase/pull/7430)) by @gchust
- **[Workflow: mailer node]** Fix the issue where the email node might not resume execution properly ([#7409](https://github.com/nocobase/nocobase/pull/7409)) by @mytharcher
- **[Mobile]**

  - incorrect display format of date field on mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) by @katherinehhh
  - Fix the issue where the form submission data in the mobile approval dialog is incorrect ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe
- **[Workflow]**

  - Fix error thrown and form data disappeared when edit workflow category ([#7408](https://github.com/nocobase/nocobase/pull/7408)) by @mytharcher
  - Fix the translation of the page title in the workflow tasks center ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher
- **[Office File Previewer]** Fix error thrown when upload file to attachment URL field ([#7405](https://github.com/nocobase/nocobase/pull/7405)) by @mytharcher
- **[Notification: In-app message]** Fix translations ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher
- **[Collection field: Formula]** Fix the issue where formula input could not pass validation due to variable type ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher
- **[File manager]** Remove the hint for the file upload size limit ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher
- **[Calendar]** calendar event item tooltip showing [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh
- **[Action: Import records Pro]** Disallow assigning relation fields during import duplicate detection. by @aaaaaajie
- **[Workflow: Custom action event]** Clear the selected rows after successfully triggering actions on multiple records by @mytharcher
- **[Template print]** Printing of radio-select fields in multiple lines of data by @jiannx
- **[File storage: S3(Pro)]**

  - Deprecate problematic parameter `attachmentField` by @mytharcher
  - Fix the issue where the IAM authentication method could not be used to upload files by @mytharcher
- **[Workflow: Approval]**

  - Fix the issue where loading external data source data in approval records resulted in a 404 error by @mytharcher
  - Fix the issue where the user list was empty during countersigning by @mytharcher
- **[Backup manager]** large file backups could show “successful” before actually finishing by @gchust
- **[Migration manager]** Skip the `\restrict` and `\unrestrict` commands generated by the latest pg_dump when creating migration files to resolve restore errors. by @2013xile

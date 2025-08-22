### 🎉 New Features

- **[client]** Support field validation rule ([#7297](https://github.com/nocobase/nocobase/pull/7297)) by @aaaaaajie

- **[Workflow: Approval]**
  - Add inline template type for notification configuration by @mytharcher

  - Support to use consistent task title for all approval nodes in same workflow by @mytharcher

### 🚀 Improvements

- **[database]** Optimized ACL Meta query performance ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie

- **[client]** Support displaying icons identified by strings in the Select component when in read-only mode ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher

- **[Mobile]** Optimize the mobile popup component ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe

- **[Workflow]** Updated the node selection menu to display options in a two-column layout for improving information density and allowing users to view more options at once ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher

- **[License settings]** In the license settings, copy the latest Instance ID each time ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx

- **[Notification: In-app message]** Remove SQL logs output via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile

- **[Authentication]** Removed the token parameter from the URL after a successful sign-in ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile

- **[Template print]** support field m2m array by @jiannx

### 🐛 Bug Fixes

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


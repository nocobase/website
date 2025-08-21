Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/en/blog/v1.8.18)

*Release date: 2025-08-19*

#### 🚀 Improvements

- **[Workflow]** Updated the node selection menu to display options in a two-column layout for improving information density and allowing users to view more options at once ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher
- **[License settings]** In the license settings, copy the latest Instance ID each time ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx

#### 🐛 Bug Fixes

- **[client]**

  - treat number 0 as empty during linkage rule empty validation ([#7404](https://github.com/nocobase/nocobase/pull/7404)) by @katherinehhh
  - Fix text of link button breaking line ([#7406](https://github.com/nocobase/nocobase/pull/7406)) by @mytharcher
- **[Mobile]** incorrect display format of date field on mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) by @katherinehhh
- **[Office File Previewer]** Fix error thrown when upload file to attachment URL field ([#7405](https://github.com/nocobase/nocobase/pull/7405)) by @mytharcher
- **[Workflow]** Fix error thrown and form data disappeared when edit workflow category ([#7408](https://github.com/nocobase/nocobase/pull/7408)) by @mytharcher
- **[Workflow: mailer node]** Fix the issue where the email node might not resume execution properly ([#7409](https://github.com/nocobase/nocobase/pull/7409)) by @mytharcher
- **[Workflow: Custom action event]** Clear the selected rows after successfully triggering actions on multiple records by @mytharcher
- **[Template print]** Printing of radio-select fields in multiple lines of data by @jiannx
- **[Workflow: Approval]** Fix the issue where loading external data source data in approval records resulted in a 404 error by @mytharcher

### [v1.8.17](https://www.nocobase.com/en/blog/v1.8.17)

*Release date: 2025-08-15*

#### 🎉 New Features

- **[Workflow: Approval]** Support to use consistent task title for all approval nodes in same workflow by @mytharcher

#### 🚀 Improvements

- **[Authentication]** Removed the token parameter from the URL after a successful sign-in ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile
- **[Template print]** support field m2m array by @jiannx

#### 🐛 Bug Fixes

- **[Mobile]** Fix the issue where the form submission data in the mobile approval dialog is incorrect ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe
- **[Workflow]** Fix the translation of the page title in the workflow tasks center ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher
- **[Calendar]** calendar event item tooltip showing [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh
- **[Notification: In-app message]** Fix translations ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher
- **[File manager]** Remove the hint for the file upload size limit ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher
- **[File storage: S3(Pro)]**

  - Deprecate problematic parameter `attachmentField` by @mytharcher
  - Fix the issue where the IAM authentication method could not be used to upload files by @mytharcher

### [v1.8.16](https://www.nocobase.com/en/blog/v1.8.16)

*Release date: 2025-08-14*

#### 🚀 Improvements

- **[Notification: In-app message]** Remove SQL logs output via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile

#### 🐛 Bug Fixes

- **[server]** Some requests lack `ctx.action`, causing errors in the audit log middleware ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile
- **[Collection field: Formula]** Fix the issue where formula input could not pass validation due to variable type ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher
- **[Backup manager]** large file backups could show “successful” before actually finishing by @gchust

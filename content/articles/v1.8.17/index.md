### 🎉 New Features

- **[Workflow: Approval]** Support to use consistent task title for all approval nodes in same workflow by @mytharcher

### 🚀 Improvements

- **[Authentication]** Removed the token parameter from the URL after a successful sign-in ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile

- **[Template print]** support field m2m array by @jiannx

### 🐛 Bug Fixes

- **[Mobile]** Fix the issue where the form submission data in the mobile approval dialog is incorrect ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe

- **[Workflow]** Fix the translation of the page title in the workflow tasks center ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher

- **[Calendar]** calendar event item tooltip showing [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh

- **[Notification: In-app message]** Fix translations ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher

- **[File manager]** Remove the hint for the file upload size limit ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher

- **[File storage: S3(Pro)]**
  - Deprecate problematic parameter `attachmentField` by @mytharcher

  - Fix the issue where the IAM authentication method could not be used to upload files by @mytharcher


### 🚀 Improvements

- **[client]** In order to get more accurate MIME type of file, use `mime` package to detect MIME type of file in client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher

- **[Workflow]**
  - Support to limit the maximum number of nodes in a workflow through environment variables ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher

  - Add `keepBranch` option when deleting node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher

- **[Workflow: Loop node]** Support to limit the maximum number of cycles for loop nodes through environment variables ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher

- **[Workflow: Approval]** Add print button to detail popup in custom approval blocks by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where images did not display correctly when both rotated and scaled during preview ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher

  - Fix the issue where missing dynamic properties in the `AssignedField` component caused file upload errors in "Create record" or "Update record" nodes ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher

- **[Public forms]** Fix the issue where the upload rules for file fields in public forms were incorrect ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher

- **[Calendar]** fix data query issue caused by unique identifier in calendar block ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh

- **[Auth: LDAP]** Fix LDAP bind failure with non-ASCII (UTF-8) DNs in Active Directory by @2013xile


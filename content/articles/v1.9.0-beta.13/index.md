### 🚀 Improvements

- **[client]** In order to get more accurate MIME type of file, use `mime` package to detect MIME type of file in client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher

- **[Data source: Main]** Refactor the localization logic for error messages, and handle within the error-handling plugin ([#7582](https://github.com/nocobase/nocobase/pull/7582)) by @2013xile

- **[Workflow]** Add `keepBranch` option when deleting node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher

- **[Workflow: Approval]** Refactor branch configuration to adapt to kernel changes by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - fix error when clearing date field in filter block ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh

  - fix subtable default value not working in edit form drawer ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh

  - Fix the issue where images did not display correctly when both rotated and scaled during preview ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher

  - Fix the issue of tab icon pop-ups being obscured ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe

- **[database]** Fix error thrown when operator `$in` meets `null` value ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher

- **[Data source: Main]** Fix the issue where metadata was not synchronized across multiple nodes after creating a reverse association field ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher

- **[Workflow: Approval]**
  - Fix the issue of migration script errors due to non-existent tables when the application is not installed by @mytharcher

  - Fix the issue of Snowflake ID not being generated due to skipped hooks by @mytharcher

- **[Auth: LDAP]** Fix LDAP bind failure with non-ASCII (UTF-8) DNs in Active Directory by @2013xile


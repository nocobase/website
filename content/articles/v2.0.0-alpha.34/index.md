### 🚀 Improvements

- **[database]** Add the `multipleStatements` option to the MariaDB connection instance to support invoking multiple statements in a single query ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]** Fixed an issue where the action buttons in the table block did not update correctly after switching pages, ensuring their functionality matches the current page's data. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust

- **[client]**
  - Fix "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe

  - fix association field title field ellipsis not applied ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh

  - update record action's linkage rule is not working ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust

- **[database]** Incorrect index field detection when field names use snake_case style ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile

- **[Mobile (deprecated)]** Fix the issue where the date field default value popup on mobile cannot select a date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe


### 🎉 New Features

- **[client]** Supports using "Table selected records" variable in m2m array fields ([#5974](https://github.com/nocobase/nocobase/pull/5974)) by @2013xile

### 🚀 Improvements

- **[undefined]** Enable theme plugin by default ([#5957](https://github.com/nocobase/nocobase/pull/5957)) by @zhangzhonghe

- **[Data source: Main]** Added name conflict validation to prevent users from creating Collections with the same name as system Collections ([#5962](https://github.com/nocobase/nocobase/pull/5962)) by @chareice

- **[Workflow]** Avoid to misuse date range variables in most place unless filter component ([#5954](https://github.com/nocobase/nocobase/pull/5954)) by @mytharcher

### 🐛 Bug Fixes

- **[database]**
  - Fixed an issue in destory action where filterByTk with filter parameter could not delete data ([#5976](https://github.com/nocobase/nocobase/pull/5976)) by @chareice

  - the firstOrCreate and updateOrCreate methods of the repository lose context ([#5973](https://github.com/nocobase/nocobase/pull/5973)) by @chenos

- **[client]**
  - Fix  issue  when adding a one-to-one relationship field in the form ([#5975](https://github.com/nocobase/nocobase/pull/5975)) by @katherinehhh

  - Fix issue with field assignment in subtable when re-select data after deleting data ([#5958](https://github.com/nocobase/nocobase/pull/5958)) by @katherinehhh

  - Fix the table block error caused by data containing fields named 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) by @zhangzhonghe

- **[Data source: Main]** Fix legacy support issues with the unixTimestamp field. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) by @chareice

- **[Workflow]** Fix sub-details block throwing error in manual node UI configuration ([#5953](https://github.com/nocobase/nocobase/pull/5953)) by @mytharcher


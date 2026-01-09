### 🚀 Improvements

- **[Access control]** Improve permission checks when modifying nested association fields ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 Bug Fixes

- **[client]**
  - fix association fields from external data sources not loading association data in form blocks ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh

  - Fix the issue where association fields are not correct in `FilterAction` component ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher

- **[logger]** Fix extra error information being discarded when printing system logs ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock

- **[Workflow: Loop node]** Fix the issue where failed node in condition branch cannot pass status to upper branching node ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher

- **[Data source: Main]** View collection metadata should include source field options ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile

- **[Workflow]**
  - Fix linkage rule issue in workflow CC node detail block ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe

  - Add instance ID to the Snowflake ID of jobs, to avoid ID conflict issue under cluster mode ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher

  - Fix the issue where execution page crash when workflow deleted ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher

- **[Action: Import records]** Fix incorrect error message when a  unique constraint error is triggered during async XLSX import ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock

- **[Access control]**
  - Allow association fields to associate using the target keys ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile

  - Fix an issue where data source is incorrectly resolved when processing permissions for association fields ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile

- **[Data source: REST API]** Add fault-tolerant for request context, to avoid error thrown when method is not in context by @mytharcher

- **[Action: Export records Pro]** Fix error when sub-applications execute async import/export tasks while the main application does not enable the import/export pro plugin by @cgyrock

- **[Workflow: Approval]** Fix the issue where filter fields not work correctly in tasks center by @mytharcher


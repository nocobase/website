### 🎉 New Features

- **[AI employees]** Update AI chatbox user prompt ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where CollectionField component not render in DefaultValue component ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher

  - Fixed an issue where the data block did not refresh when switching menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust

- **[flow-engine]** Fixed an issue where ctx.exit could not terminate the execution of user-defined event flows. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust

- **[database]** Fix field custom regular check failure in v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx

- **[server]** Resolve cache issue by appending hash to assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos

- **[Access control]** Database instance used when setting ACL metadata is incorrect ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile

- **[AI employees]**
  - Fixed ai employee chat error while knowledge base enabled ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock

  - Fixed AI data source configuration rendering issue. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock

- **[Flow engine]** fix sql destroy error ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos

- **[Workflow: Custom action event]** Fix the issue where custom action workflow hangs when execute as sub-flow ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher

- **[Workflow: Approval]**
  - Fix the issue where query result not showing caused by nodes filtered by type by @mytharcher

  - Add missed parameter to avoid associations not updated when submit new approval by @mytharcher

  - Fix the issue where error throw when execute approval workflow manually by @mytharcher

  - Fix error thrown caused by value of `dataAfter` missing when added or delegated by @mytharcher

  - Fix ACL issue where association value should not be create or update when user has no permission by @mytharcher

  - Sanitize association values in approval actions, to avoid any data manipulation beyond permission by @mytharcher

  - Fix the issue where appends parameter filtering by ACL by @mytharcher


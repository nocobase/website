### 🎉 New Features

- **[Workflow]** Add new system variables in workflow, including `instanceId` and `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

### 🚀 Improvements

- **[client]** use select for operation column width configuration ([#8218](https://github.com/nocobase/nocobase/pull/8218)) by @katherinehhh
- **[AI employees]** Fix AI employee not responding on first edit submission<br/>Delete unnecessary built-in AI employee “Avery Form Assistant”<br/>Add default initial role permissions for built-in AI employees<br/>Improve AI employee error handling and output behavior<br/>Add support for AI to access modal context variables<br/>Add support for external data sources for AI<br/>Fix incorrect conversation truncation when AI processes large data volumes ([#8191](https://github.com/nocobase/nocobase/pull/8191)) by @heziqiang
- **[Workflow]**

  - Add original workflow instance to duplicate API ([#8225](https://github.com/nocobase/nocobase/pull/8225)) by @mytharcher
  - Improve description of `changed` field in collection event ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher
- **[Async task manager]** Improved error handling during cleanup tasks by adding exception-catching mechanisms to prevent application crashes ([#8215](https://github.com/nocobase/nocobase/pull/8215)) by @mytharcher
- **[Block: Action panel]** improve display of hidden blocks, actions, and fields in configuration mode ([#8174](https://github.com/nocobase/nocobase/pull/8174)) by @katherinehhh
- **[UI templates]** Added UI templates plugin, providing the ability to reuse block templates and popup templates. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) by @gchust
- **[Action: Export records Pro]** import pro& export pro action support permission control by @katherinehhh
- **[Workflow: Approval]** Update `approval.data` to latest version of the approving record when execution end, to match "Latest" record show mode by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]**

  - fix permission check issue for add child records in tree table ([#8240](https://github.com/nocobase/nocobase/pull/8240)) by @katherinehhh
  - Fixed an issue where some block popup record-related variables were displayed incorrectly. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) by @gchust
  - Fixed the issue where actions or tabs added after dragging actions or tabs do not display. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) by @gchust
  - permission check issue in external data sources ([#8221](https://github.com/nocobase/nocobase/pull/8221)) by @katherinehhh
  - fix  external data source actions being hidden despite having permission ([#8217](https://github.com/nocobase/nocobase/pull/8217)) by @katherinehhh
- **[client]**

  - Handle empty linkage rules to prevent errors ([#8239](https://github.com/nocobase/nocobase/pull/8239)) by @zhangzhonghe
  - Fixed the issue where the table block's operation column could not be removed. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) by @gchust
  - Fixed the issue where preview execution wrote compiled JSX output back to stepParams, causing saved source code to be rewritten. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) by @gchust
  - Fix S3 Pro attachment upload error and improve file preview ([#8211](https://github.com/nocobase/nocobase/pull/8211)) by @katherinehhh
- **[cli]** license-kit is compatible with the case where DB_PASSWORD is empty ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx
- **[database]** Fix date field query inconsistency between main and external data sources ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock
- **[Collection field: Sequence]** Fixed an error when the field-sequence repair command encounters a non-existent collection in the current environment. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock
- **[Workflow: Manual node]** Fix the issue where error thrown when cancel execution of deleted workflow ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher
- **[UI templates]** Fix an error where opening an association field popup would incorrectly use a non-association field popup template. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) by @gchust
- **[Departments]** Fix an issue where aggregate search cannot locate users ([#8222](https://github.com/nocobase/nocobase/pull/8222)) by @2013xile
- **[Collection field: Many to many (array)]** Fix an issue where many-to-many (array) fields cannot be created when the target key type is Snowflake ID (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) by @2013xile
- **[License settings]** Fix the abnormal display of the licensed plugin ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx
- **[Action: Import records]** Fix the issue where row index in error message is always 1 when error thrown in import action ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher
- **[Template print]** Fix  template print request not working with external data sources by @katherinehhh
- **[Workflow: Approval]**

  - Fix duplicated rollback of same transaction by @mytharcher
  - Fix the issue where approving makes association to creating new record by @mytharcher
  - Fix the issue where approving makes to-many association to creating new records by @mytharcher

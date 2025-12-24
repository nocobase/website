### 🎉 New Features

- **[Workflow]** Add new system variables in workflow, including `instanceId` and `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix stack overflow caused by infinite loop in display association fields lazy loading ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe

- **[Action: Import records]** Fix the issue where row index in error message is always 1 when error thrown in import action ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher

- **[Workflow: Manual node]** Fix the issue where error thrown when cancel execution of deleted workflow ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher

- **[Collection field: Sequence]** Fixed an error when the field-sequence repair command encounters a non-existent collection in the current environment. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock

- **[Action: Import records Pro]** Fix unique check logic which will throw error when the value of unique field is null by @mytharcher

- **[Workflow: Approval]** Fix duplicated rollback of same transaction by @mytharcher


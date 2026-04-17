### 🎉 New Features

- **[client]** add js variables to event flow ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx

### 🚀 Improvements

- **[client]** support setting field styles through runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx

- **[flow-engine]** Improve schema validation for ui building api. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust

- **[Workflow: Pre-action event]** Add validation rules for triggers and nodes ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher

- **[Workflow]** Add variable for page size parameter ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher

- **[Workflow: Webhook]** Add validation for creating trigger / node API by @mytharcher

- **[Workflow: Subflow]**
  - Add validation for creating node API by @mytharcher

  - Add defensive logic to avoid workflow hangs when exception occurs by @mytharcher

- **[Workflow: Approval]** Add validation for trigger / node API by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fixed the exception when adding child nodes to the tree table in the pop-up window ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx

- **[server]** Avoid to handle sync-message after app stopped ([#8940](https://github.com/nocobase/nocobase/pull/8940)) by @mytharcher

- **[Action: Export records]** Limit import and export configuration of multi-layer related fields ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx

- **[Data visualization]** fixed the abnormal data statistics of the root role chart after enabling the space plugin ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx

- **[Action: Import records]** fixed the problem of import failure after opening plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx

- **[Workflow: JavaScript]** Fix security issues ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher

- **[AI employees]** Adjust the gap between the tool card components in the AI Conversation ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock

- **[Flow engine]** Remove legacy event copied from uiSchema repository to avoid error thrown when triggering ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher

- **[Authentication]** fix acl to support custom state filtering parameters ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx

- **[Action: Import records Pro]** limit import and export configuration of multi-layer related fields by @jiannx

- **[Email manager]** Fixed signature being overwritten when using templates by @jiannx


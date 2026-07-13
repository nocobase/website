### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed other column content showing through fixed v2 table columns when quick edit is enabled. ([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh

  - Fixed v2 scan input camera preview layout issues on iOS Chrome. ([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh

- **[app]** Fixed Redis cache configuration ignoring the dedicated cache URL ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile

- **[Action: Batch edit]** Fixed Markdown editor initialization failure when a V2 form includes a `process` field. ([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh

- **[AI employees]** Fixed AI attachment handling to avoid trusting client-provided file paths or URLs. ([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock

- **[Workflow]** Fixed manual workflow execution returning an error when a valid request does not start an execution. ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher

- **[Redis worker ID allocator]**
  - Improved Redis worker ID isolation and failure diagnostics by @2013xile

  - Restored standalone startup without Redis worker ID configuration by @2013xile

- **[Workflow: Approval]** Filter approval file associations by current user ownership when the temporary switch is enabled. by @mytharcher


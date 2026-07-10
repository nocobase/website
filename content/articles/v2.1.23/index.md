### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed v2 ScanInput recognition for Safari QR images selected from the upload path. ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh

  - Fixed client runtime asset base URL normalization when `__webpack_public_path__` is injected without a trailing slash, and added coverage for that edge case. ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos

  - Fixed an issue where button linkage rule states in table blocks could become polluted after pagination. ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust

- **[app]** Fix lazy-loaded assets using an external script URL when `CDN_BASE_URL` is empty. ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn

- **[flow-engine]** Fixed an issue where overriding ctx.api in a JS block could cause a Maximum call stack size exceeded error. ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust

- **[Workflow: Delay node]** Prevented delay nodes from accepting numeric durations less than 1 through the API ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher

- **[Form drafts]** Fixed form drafts disappearing after consecutive page refreshes ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust

- **[Data source: Main]** Prevented invalid many-to-many relationship field configurations from being saved ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile

- **[Collection: Tree]** Fixed tree path collection creation to avoid passing internal field model metadata into collection options. ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock

- **[Workflow]** Fixed subflow nodes remaining pending when the child workflow fails before creating an execution record ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher

- **[Flow engine]**
  - Fixed an issue where using a local AI agent to configure linkage rules could trigger rendering errors. ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust

  - Fixed popup record variables failing to resolve from external NocoBase data sources ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust

- **[Template print]** Fixed template print permission checks so hidden fields and records outside the current role's view scope are not rendered. by @jiannx

- **[Workflow: Approval]**
  - Allow string type of assignee ID to be added by @mytharcher

  - Fix approval form fields becoming single-column in print preview by @zhangzhonghe

  - Fix the issue where fields in disabled approval subtables can still be edited by @zhangzhonghe


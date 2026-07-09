### 🎉 New Features

- **[AI employees]**
  - Add OrcaRouter as an LLM provider ([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

  - Added structured AI usage records for usage statistics ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile

- **[Workflow: Approval]** Add approval initiation and todo blocks for v2 pages by @zhangzhonghe

### 🚀 Improvements

- **[client-v2]**
  - Refactor Markdown Vditor into a unified plugin-backed Markdown engine with compatibility bridges for existing Markdown block and Vditor field plugins. ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh

  - Refactor Markdown Vditor into a unified plugin-backed Markdown engine with compatibility bridges for existing Markdown block and Vditor field plugins. ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh

- **[AI employees]** Improved AI employee web search to reduce unnecessary model reasoning and better use provider-specific thinking controls. ([#9996](https://github.com/nocobase/nocobase/pull/9996)) by @cgyrock

- **[Data visualization]** Improved chart event scripts so custom event handlers can clean up safely ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile

- **[Workflow]** Remove arithmetic operators for condition node ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

- **[Data source manager]** Hide deprecated v2 main data source collection templates from the create collection menu. ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh

- **[Block: Comment]** Improved comment submit actions and fixed related comment/user form submission issues. ([#10002](https://github.com/nocobase/nocobase/pull/10002)) by @jiannx

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed client runtime asset base URL normalization when `__webpack_public_path__` is injected without a trailing slash, and added coverage for that edge case. ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos

  - Fixed v2 ScanInput recognition for Safari QR images selected from the upload path. ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh

  - Fix association fields showing the default operator setting in filter forms ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe

  - Fix mobile popup spacing for table quick edit and select fields ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe

  - Fixed an issue where Quick Edit could fail to switch dropdown options when navigating between pages. ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust

  - Fixed Vditor asset loading in production by resolving plugin CDN paths from the effective webpack public path. ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos

  - Fixed stale linkage field states when switching records in runtime edit popups. ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh

  - Fixed an issue where association field default values in filter forms could not be cleared. ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust

  - Fixed an issue where v2 workflow assigned fields could still be edited in read-only executed workflow versions. ([#10014](https://github.com/nocobase/nocobase/pull/10014)) by @katherinehhh

- **[cli]** Fixed NocoBase CLI default value issues for image registry fallback, built-in database images, env info display, and prompt initialization. ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos

- **[flow-engine]** Fixed an issue where popup configuration became inconsistent when toggling design modes. ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust

- **[Collection: Tree]** Fixed tree path collection creation to avoid passing internal field model metadata into collection options. ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock

- **[Public forms]** Fix the issue where public forms can still be configured when UI Editor is off ([#10036](https://github.com/nocobase/nocobase/pull/10036)) by @zhangzhonghe

- **[Flow engine]** Fixed an issue where using a local AI agent to configure linkage rules could trigger rendering errors. ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust

- **[Authentication]** Fix the issue where reset password links open the sign-in page ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe

- **[Data visualization]** Fixed chart click interactions that could stop working after chart rerendering ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile

- **[Workflow]**
  - Fixed workflow v2 condition operands to stay on one row by default and wrap correctly when selected variable paths are too long. ([#10033](https://github.com/nocobase/nocobase/pull/10033)) by @Molunerfinn

  - Fix untranslated workflow result labels and oversized CC configuration dialogs ([#9977](https://github.com/nocobase/nocobase/pull/9977)) by @zhangzhonghe

  - Fix display and detail loading issues in the workflow v2 task center ([#10001](https://github.com/nocobase/nocobase/pull/10001)) by @zhangzhonghe

- **[Data source manager]** Hide the historical attachment field interface from the V2 data table Add field menu. ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh

- **[File manager]**
  - Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
Reference: [Local storage](https://docs.nocobase.com/file-manager/storage/local), [Security guide](https://docs.nocobase.com/security/guide)
  - Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
Reference: [Local storage](docs/docs/en/file-manager/storage/local.md), [Security guide](docs/docs/en/security/guide.md)
  - Fixed missing Attachment field interface in v2 data table management, and fixed image upload preflight checks for public form file relationship fields. ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh

- **[Embed NocoBase]** Fixed an issue where tokens could be polluted when embedding NocoBase pages. ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust

- **[AI employees]** Fix unnecessary login-required requests on V2 public form pages ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe

- **[AI: Knowledge base]** Added an overwrite option for AI knowledge base workflow document creation, allowing workflows to replace existing documents with the same key. by @cgyrock

- **[Data source: External MariaDB]** Fix Add all collections toggle in MySQL, MSSQL, and MariaDB external data source settings. by @katherinehhh

- **[plugin-service-platform]** Disabled the service platform plugin download endpoint. by @jiannx

- **[Workflow: Subflow]** Fixed workflow title search in the subflow node configuration selector. by @mytharcher

- **[Migration manager]** Fixed an issue where migration could leave an app stuck on the repair screen by @2013xile

- **[Workflow: Approval]**
  - Fix approval assignee sorting and hide unsupported legacy configuration entries by @zhangzhonghe

  - Fix the error when configuring approval workflow conditions by @zhangzhonghe

  - Fix missing processed approval details in v2 task detail popups by @zhangzhonghe

  - Fix approval task form and action issues in the workflow v2 task center by @zhangzhonghe

- **[App supervisor]** Fixed app JWT secret isolation so main app tokens are no longer accepted by sub apps after an independent secret is enabled by @2013xile


### 🎉 New Features

- **[AI employees]**
  - Add OrcaRouter as an LLM provider ([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

  - Added structured AI usage records for usage statistics ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile

### 🚀 Improvements

- **[Workflow]** Remove arithmetic operators for condition node ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

- **[Data visualization]** Improved chart event scripts so custom event handlers can clean up safely ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile

- **[Data source manager]** Hide deprecated v2 main data source collection templates from the create collection menu. ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]**
  - Fix association fields showing the default operator setting in filter forms ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe

  - Fix mobile popup spacing for table quick edit and select fields ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe

  - Fixed an issue where association field default values in filter forms could not be cleared. ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust

  - Fixed stale linkage field states when switching records in runtime edit popups. ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh

  - Fixed an issue where Quick Edit could fail to switch dropdown options when navigating between pages. ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust

  - Fixed Vditor asset loading in production by resolving plugin CDN paths from the effective webpack public path. ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos

- **[cli]** Fixed NocoBase CLI default value issues for image registry fallback, built-in database images, env info display, and prompt initialization. ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos

- **[flow-engine]** Fixed an issue where popup configuration became inconsistent when toggling design modes. ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust

- **[Data visualization]** Fixed chart click interactions that could stop working after chart rerendering ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile

- **[AI employees]** Fix unnecessary login-required requests on V2 public form pages ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe

- **[Authentication]** Fix the issue where reset password links open the sign-in page ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe

- **[Data source manager]** Hide the historical attachment field interface from the V2 data table Add field menu. ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh

- **[File manager]**
  - Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
Reference: [Local storage](https://docs.nocobase.com/file-manager/storage/local), [Security guide](https://docs.nocobase.com/security/guide)
  - Fixed missing Attachment field interface in v2 data table management, and fixed image upload preflight checks for public form file relationship fields. ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh

- **[Embed NocoBase]** Fixed an issue where tokens could be polluted when embedding NocoBase pages. ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust

- **[Data source: External MariaDB]** Fix Add all collections toggle in MySQL, MSSQL, and MariaDB external data source settings. by @katherinehhh

- **[Migration manager]** Fixed an issue where migration could leave an app stuck on the repair screen by @2013xile

- **[App supervisor]** Fixed app JWT secret isolation so main app tokens are no longer accepted by sub apps after an independent secret is enabled by @2013xile


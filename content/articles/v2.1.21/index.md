### 🎉 New Features

- **[AI employees]** Add OrcaRouter as an LLM provider ([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

### 🚀 Improvements

- **[Workflow]** Remove arithmetic operators for condition node ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed stale linkage field states when switching records in runtime edit popups. ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh

  - Fixed an issue where association field default values in filter forms could not be cleared. ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust

- **[File manager]**
  - Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
Reference: [Local storage](https://docs.nocobase.com/file-manager/storage/local), [Security guide](https://docs.nocobase.com/security/guide)
  - Fixed missing Attachment field interface in v2 data table management, and fixed image upload preflight checks for public form file relationship fields. ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh

- **[Data source manager]** Hide the historical attachment field interface from the V2 data table Add field menu. ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh

- **[Data visualization]** Fixed chart click interactions that could stop working after chart rerendering ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile

- **[Migration manager]** Fixed an issue where migration could leave an app stuck on the repair screen by @2013xile

- **[App supervisor]** Fixed app JWT secret isolation so main app tokens are no longer accepted by sub apps after an independent secret is enabled by @2013xile


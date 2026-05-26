### 🎉 New Features

- **[client-v2]** Add a Security menu and the Token policy settings page to the v2 admin; user-center now supports Change password. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn

- **[cli]** support basic auth ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos

- **[Password policy]** Migrate plugin-password-policy to the client-v2 admin shell with the Password policy / Locked users settings pages and client-side rule enforcement on the user-center change-password form. by @Molunerfinn

### 🚀 Improvements

- **[Data visualization]** Added client v2 support for chart blocks. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx

- **[Workflow]** Refactor workflow async-node availability checks ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher

### 🐛 Bug Fixes

- **[build]**
  - Text assets in server builds are now copied as files instead of being converted into JavaScript modules. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn

  - Fixed plugin server obfuscation output to avoid browser globals in Node.js runtime bundles. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn

- **[client-v2]** Fixed browser language metadata so the app page follows the selected application language instead of being marked as English. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn

- **[File manager]** Safely render PDF previews with PDF.js instead of iframe-based raw PDF rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher

- **[AI employees]** fixed incorrect description of the tool name in the work context prompt ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock

- **[Workflow: Manual node]** Fixed temporary saves for manual workflow tasks not persisting submitted form values. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher

- **[Auth: OIDC]** Fixed token leakage when SSO login callbacks receive an external redirect URL by @2013xile

- **[Workflow: Approval]**
  - Fixed approval withdraw to update submitted business data while respecting source collection update permissions. by @mytharcher

  - Fix the issue where `jobs:resume` API is not supported by approval node by @mytharcher

  - Fix duplicate approval record indexes when delegates happen concurrently on the same approval job. by @mytharcher

  - Fixed stale approval todos when approval workflows are terminated by non-approval node failures. by @mytharcher


### 🐛 Bug Fixes

- **[build]** Fixed plugin server obfuscation output to avoid browser globals in Node.js runtime bundles. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn

- **[Workflow: Manual node]** Fixed temporary saves for manual workflow tasks not persisting submitted form values. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher

- **[AI employees]** fixed incorrect description of the tool name in the work context prompt ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock

- **[File manager]** Safely render PDF previews with PDF.js instead of iframe-based raw PDF rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher

- **[Auth: OIDC]** Fixed token leakage when SSO login callbacks receive an external redirect URL by @2013xile

- **[Workflow: Approval]**
  - Fix the issue where `jobs:resume` API is not supported by approval node by @mytharcher

  - Fixed approval withdraw to update submitted business data while respecting source collection update permissions. by @mytharcher

  - Fixed stale approval todos when approval workflows are terminated by non-approval node failures. by @mytharcher


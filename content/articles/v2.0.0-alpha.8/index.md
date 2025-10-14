### 🎉 New Features

- **[AI employees]** Improve web search function of plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) by @cgyrock

### 🚀 Improvements

- **[client]** In order to get more accurate MIME type of file, use `mime` package to detect MIME type of file in client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher

- **[flow-engine]**
  - support popup variable ([#7583](https://github.com/nocobase/nocobase/pull/7583)) by @gchust

  - Enhance the code editing experience with richer snippets and context-aware code completions for various scenarios ([#7559](https://github.com/nocobase/nocobase/pull/7559)) by @gchust

  - Standardized automatic workflows to be consistently triggered by the "beforeRender" event, ensuring predictable and unified operation across processes. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) by @gchust

- **[Workflow]** Add `keepBranch` option when deleting node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher

- **[Data visualization]** Expand chart types; Optimize UI and interactive experience. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) by @heziqiang

- **[Workflow: Approval]** Refactor branch configuration to adapt to kernel changes by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix abnormal page display issues when switching table pagination ([#7572](https://github.com/nocobase/nocobase/pull/7572)) by @zhangzhonghe

  - Can't configure assign field value for `Update` and `Bulk update` action ([#7565](https://github.com/nocobase/nocobase/pull/7565)) by @gchust

  - Fix the issue where images did not display correctly when both rotated and scaled during preview ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher

- **[Workflow: Approval]** Fix the issue of migration script errors due to non-existent tables when the application is not installed by @mytharcher

- **[Auth: LDAP]** Fix LDAP bind failure with non-ASCII (UTF-8) DNs in Active Directory by @2013xile


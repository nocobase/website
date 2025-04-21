### 🎉 New Features

- **[acl]** Support user role union ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie

- **[client]**
  - support the extension of preset fields in collections ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh

  - Support extending frontend filter operators ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh

- **[Verification]** Support user binding of various verification types, such as SMS and TOTP authenticators, and identity verification in required scenarios. Enable development and extension of verification methods. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
Reference: [Verification](https://docs.nocobase.com/handbook/verification)
- **[Calendar]** Support for the extension of optional fields for Kanban, Calendar, and Formula Field plugins ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh

- **[Block: template]** Add `Block: template` plugin, providing template support for blocks based on inheritance mechanism. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust

- **[plugin-demo-platform]** Set skipAuthCheck of "/new" route to true. by @sheldon66

- **[Two-factor authentication (2FA)]** New plugins: Two-factor authentication and Verification: TOTP authenticator by @2013xile
Reference: [Two-factor authentication (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verification: TOTP authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Improvements

- **[client]**
  - Add skipAuthCheck to router.add to prevent redirecting to login on public pages. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66

  - Upgrade ant design related dependencies to 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) by @gchust

- **[utils]** Desktop page adaptation for mobile devices ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe

- **[Public forms]** set public form page title to the configured title upon creation ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh

- **[File manager]**
  - add backend code to generate file preview url ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx

  - Change storage type api and add plugin api ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher

- **[Block: template]** Support save data block as block template from page ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust

- **[Workflow]** Move bind workflow settings to plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - table row button drag-and-drop issue ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh

  - Unable to use 'Current User' variable when adding a link page ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe

  - Relational field's data range linkage is not effective ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe

  - Remove the 'Allow multiple selection' option from dropdown single-select fields in filter forms ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe

  - `yarn doc` command error ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust

  - missing fields in the linkage rule configuration ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh

  - Content is not fully displayed in mobile browsers ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe

  - When using the '$anyOf' operator, the linkage rule is invalid ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe

  - incorrect formatting of time field in filter form ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh

  - Input style not correct for form default value setting ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust

- **[utils]** Known 'desktop responsive' bug ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe

- **[acl]** Fixed the issue where relationship fields are not displayed under the role union. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie

- **[Collection: Tree]** Migration issue for plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile

- **[Action: Custom request]** Unable to download UTF-8 encoded files ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile

- **[Variables and secrets]** Buttons have not been shown in create new variables drawer ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust

- **[WEB client]** Replace all instances of ctx.state.currentRole (single role) with ctx.state.currentRoles (supports multiple roles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie

- **[Access control]**
  - Error when data scope is set to own data and the table lacks a creator field. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie

  - Fixed switching roles does not take effect. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie

- **[Block: template]**
  - Save as template option has not been shown in page data block ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust

  - Save as template incorrect behavior in mobile client ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust

  - Require login when accessing public form ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust

- **[Auth: API keys]** API keys plugin role list removal union ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie

- **[Block: Multi-step form]** the submit button has the same color in its default and highlighted by @jiannx

- **[Workflow: Approval]** Style issue with the 'Apply new' popup dialog by @zhangzhonghe


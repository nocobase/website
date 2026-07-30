### 🎉 New Features

- **[app]** Client V2 settings now open in a standalone `/settings` page while Client V1 remains unchanged ([#10187](https://github.com/nocobase/nocobase/pull/10187)) by @zhangzhonghe

- **[Portal manager]** Settings center now opens on the portal gallery, with grouped top-level navigation, nested sidebar menus and a neutral theme ([#10196](https://github.com/nocobase/nocobase/pull/10196)) by @Albert-mah

- **[Access control]** <!-- [Title](link) --> ([#10193](https://github.com/nocobase/nocobase/pull/10193)) by @2013xile

- **[AI employees]** Added an embeddable AI chat box block that supports scoped conversations, AI employee tasks, and shared chat runtime behavior. ([#10125](https://github.com/nocobase/nocobase/pull/10125)) by @cgyrock

### 🚀 Improvements

- **[undefined]** Improved documentation site search: results are now grouped by section with visible headings and paths, more relevant pages rank first, and plugin metadata pages are sorted last. ([#10185](https://github.com/nocobase/nocobase/pull/10185)) by @Molunerfinn

- **[Authentication]** <!-- [Title](link) --> ([#10207](https://github.com/nocobase/nocobase/pull/10207)) by @2013xile

- **[AI employees]**
  - Simplified AI knowledge base vector configuration ([#10178](https://github.com/nocobase/nocobase/pull/10178)) by @cgyrock

  - Improved AI employee reliability across validation, data permissions, record context, attachments, workflow tasks, conversation recovery, and coding editor lifecycle handling. ([#10162](https://github.com/nocobase/nocobase/pull/10162)) by @cgyrock

- **[Workflow]** Workflow tasks can now be filtered and navigated by workflow, with per-workflow pending counts ([#10173](https://github.com/nocobase/nocobase/pull/10173)) by @mytharcher

- **[Auth: SAML 2.0]**
  - <!-- [Title](link) --> by @2013xile

  - <!-- [Title](link) --> by @2013xile

- **[Auth: CAS]** <!-- [Title](link) --> by @2013xile

- **[AI: Knowledge base]** Vector database and embedding settings can now be configured directly for each AI knowledge base by @cgyrock

- **[Auth: OIDC]**
  - <!-- [Title](link) --> by @2013xile

  - <!-- [Title](link) --> by @2013xile

  - <!-- [Title](link) --> by @2013xile

- **[Workflow: Approval]** Approval application and todo tasks can now be filtered by workflow with per-workflow pending counts by @mytharcher

- **[WeCom]**
  - <!-- [Title](link) --> by @2013xile

  - <!-- [Title](link) --> by @2013xile

  - <!-- [Title](link) --> by @2013xile

- **[DingTalk]**
  - <!-- [Title](link) --> by @2013xile

  - <!-- [Title](link) --> by @2013xile

  - <!-- [Title](link) --> by @2013xile

- **[Auth: LDAP]**
  - <!-- [Title](link) --> by @2013xile

  - <!-- [Title](link) --> by @2013xile

### 🐛 Bug Fixes

- **[client-v2]**
  - Fix JSON field save validation errors after reloading v2 forms. ([#10206](https://github.com/nocobase/nocobase/pull/10206)) by @katherinehhh

  - Fixed table action buttons remaining disabled after their linkage rule is disabled or removed. ([#10186](https://github.com/nocobase/nocobase/pull/10186)) by @hongboji

- **[cli]**
  - Fix the Settings page failing to load after deploying extracted frontend assets ([#10205](https://github.com/nocobase/nocobase/pull/10205)) by @zhangzhonghe

  - <!-- [Title](link) --> ([#10198](https://github.com/nocobase/nocobase/pull/10198)) by @2013xile

- **[Portal manager]** Fix portals with an empty type not appearing in Client V2 ([#10212](https://github.com/nocobase/nocobase/pull/10212)) by @zhangzhonghe

- **[Workflow]**
  - Fixed workflow executions becoming blocked while saving a large number of jobs in one database operation ([#10204](https://github.com/nocobase/nocobase/pull/10204)) by @mytharcher

  - Fixed workflow canvas version dropdown not showing versions beyond the first 20. ([#10190](https://github.com/nocobase/nocobase/pull/10190)) by @mytharcher

- **[Backup manager]** Validate the maximum backup retention count and display save errors. ([#10189](https://github.com/nocobase/nocobase/pull/10189)) by @katherinehhh

- **[AI employees]** AI employee chat now validates attachment count and combined size before upload ([#10195](https://github.com/nocobase/nocobase/pull/10195)) by @cgyrock

- **[Data source manager]** Enable searching relation target collections and target keys in the v2 data source manager. ([#10194](https://github.com/nocobase/nocobase/pull/10194)) by @katherinehhh

- **[Collection field: Markdown(Vditor)]**
  - Fixed Markdown Vditor upload test expectations and mock isolation. ([#10200](https://github.com/nocobase/nocobase/pull/10200)) by @katherinehhh

  - Fixed Markdown Vditor permanent URL upload test coverage. ([#10202](https://github.com/nocobase/nocobase/pull/10202)) by @katherinehhh

- **[Variables and secrets]** Fixed missing error feedback when submitting duplicate variables in the v2 Variables and secrets settings page. ([#10181](https://github.com/nocobase/nocobase/pull/10181)) by @katherinehhh

- **[Version control]** Fixed version-control shortcuts becoming inactive after opening settings and improved shortcut preview, save, reset, and navigation behavior by @cgyrock

- **[Migration manager]** Fixed duplicate migration creation on repeated submission and improved v2 migration log and process drawer display. by @katherinehhh


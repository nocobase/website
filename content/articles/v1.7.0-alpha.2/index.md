### 🎉 New Features

- **[client]**
  - Cascade Selection Component Add Data Scope Setting ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

  - table block support hiding the index column (default visible) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh

  - support configuring selectable field options in linkage rules ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh

  - support date scope (min/max) configuration for time fields in linkage rules ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh

- **[acl]** Support user role union ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie

- **[Block: Action panel]** support line break for action title in action panel ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

- **[plugin-demo-platform]** Set skipAuthCheck of "/new" route to true. by @sheldon66

- **[WeCom]** Allows setting a custom tooltip for the sign-in button by @2013xile

### 🚀 Improvements

- **[utils]**
  - Move `md5` to utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

  - Desktop page adaptation for mobile devices ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe

- **[client]** Add skipAuthCheck to router.add to prevent redirecting to login on public pages. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66

- **[Data visualization]** Replace deprecated `x-designer` with `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

### 🐛 Bug Fixes

- **[client]**
  - In the tree block, when unchecked, the data in the data block is not being cleared ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe

  - Fix special character in image URL caused not showing ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher

  - incorrect page number when adding data after subtable page size change ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh

  - Content is not fully displayed in mobile browsers ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe

  - The logo style is inconsistent with the previous one ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe

  - date field range selection excludes the max date ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh

  - When using the '$anyOf' operator, the linkage rule is invalid ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe

  - multi-select field value changes and option loss when deleting subtable records ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh

  - Data not updating in popup windows opened via Link buttons ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe

- **[acl]** Fixed the issue where relationship fields are not displayed under the role union. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie

- **[File manager]**
  - Unable to delete files stored in S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos

  - Fix a few issues of file manager ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher

- **[Workflow]** Remove bind workflow settings button from data picker ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher

- **[Workflow: Manual node]**
  - Fix error thrown in migration ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher

  - Change version limit of migration to `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

  - Fix migration which missed table prefix and schema logic ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

- **[Access control]**
  - Fixed switching roles does not take effect. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie

  - Error when data scope is set to own data and the table lacks a creator field. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie

- **[WEB client]** Replace all instances of ctx.state.currentRole (single role) with ctx.state.currentRoles (supports multiple roles). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie

- **[Action: Batch edit]** Fix workflow can not be triggered in bulk edit submission ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher

- **[Data source manager]** switching data source in role management does not load corresponding collections ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh

- **[Data visualization]** Removed fields appear when adding custom filter fields ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile

- **[Notification: In-app message]**
  - Differentiate the in-app message list background color from the message cards to enhance visual hierarchy and readability. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

  - Avoid wrong receivers configuration query all users ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66

- **[Action: Custom request]** custom request server-side permission validation error ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh

- **[Auth: API keys]** API keys plugin role list removal union ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie

- **[Block: template]** Save as template incorrect behavior in mobile client ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust

- **[Workflow: Custom action event]** Remove `only` in E2E test case by @mytharcher

- **[File storage: S3(Pro)]** Resolve issue with inaccessible S3 Pro signed URLs by @chenos

- **[Workflow: Approval]**
  - Avoid page crash when no applicant in approval process table by @mytharcher

  - Fix association data not showing in approval form by @mytharcher

  - Fix error thrown when approve on external data source by @mytharcher


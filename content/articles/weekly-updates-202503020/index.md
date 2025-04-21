Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/en/blog/v1.6.2)

*Release date: 2025-03-12*

#### 🐛 Bug Fixes

- **[client]** date field range selection excludes the max date ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
- **[Notification: In-app message]** Avoid wrong receivers configuration query all users ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
- **[Workflow: Manual node]**

  - Fix migration which missed table prefix and schema logic ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher
  - Change version limit of migration to `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

### [v1.6.3](https://www.nocobase.com/en/blog/v1.6.3)

*Release date: 2025-03-14*

#### 🎉 New Features

- **[WeCom]** Allows setting a custom tooltip for the sign-in button by @2013xile

#### 🐛 Bug Fixes

- **[client]**

  - Fix special character in image URL caused not showing ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
  - incorrect page number when adding data after subtable page size change ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - The logo style is inconsistent with the previous one ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
- **[Workflow: Manual node]** Fix error thrown in migration ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
- **[Data visualization]** Removed fields appear when adding custom filter fields ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[File manager]** Fix a few issues of file manager ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[Action: Custom request]** custom request server-side permission validation error ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[Data source manager]** switching data source in role management does not load corresponding collections ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[Action: Batch edit]** Fix workflow can not be triggered in bulk edit submission ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[Workflow: Custom action event]** Remove `only` in E2E test case by @mytharcher
- **[Workflow: Approval]**

  - Fix association data not showing in approval form by @mytharcher
  - Fix error thrown when approve on external data source by @mytharcher

### [v1.6.4](https://www.nocobase.com/en/blog/v1.6.4)

*Release date: 2025-03-15*

#### 🎉 New Features

- **[client]** Cascade Selection Component Add Data Scope Setting ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

#### 🚀 Improvements

- **[utils]** Move `md5` to utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]** In the tree block, when unchecked, the data in the data block is not being cleared ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
- **[File manager]** Unable to delete files stored in S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
- **[Workflow]** Remove bind workflow settings button from data picker ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[File storage: S3(Pro)]** Resolve issue with inaccessible S3 Pro signed URLs by @chenos
- **[Workflow: Approval]** Avoid page crash when no applicant in approval process table by @mytharcher

### [v1.6.5](https://www.nocobase.com/en/blog/v1.6.5)

*Release date: 2025-03-17*

#### 🚀 Improvements

- **[File manager]** Simplify file URL generating logic and API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[File storage: S3(Pro)]** Change to a simple way to generate file URL by @mytharcher
- **[Backup manager]** Allow restore backup between pre release and release version of the same version by @gchust

#### 🐛 Bug Fixes

- **[client]**

  - rich text field not clearing data on submission ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - The color of the icons in the upper right corner of the page does not change with the theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - Clicking the reset button on the filter form cannot clear the filtering conditions of the grid card block ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[Workflow: Manual node]**

  - Fix migration ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - Change migration name to ensure rerun ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - Fix workflow title field in filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - Fix migration error when id column is not exists ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
  - Avoid collection synchronized from fields ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
- **[Workflow: Aggregate node]** Fix round on null result ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[Workflow]** Don't count tasks when workflow deleted ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[Backup manager]** Not able to start server when missing default backup settings by @gchust
- **[Workflow: Approval]**

  - Fix file association field error in process form by @mytharcher
  - Fix tasks count based on hooks by @mytharcher

### [v1.6.6](https://www.nocobase.com/en/blog/v1.6.6)

*Release date: 2025-03-18*

#### 🎉 New Features

- **[client]** support long text fields as title fields for association field ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[Workflow: Aggregate node]** Support to configure precision for aggregation result ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🚀 Improvements

- **[File storage: S3(Pro)]** Change the text 'Access URL Base' to 'Base URL' by @zhangzhonghe

#### 🐛 Bug Fixes

- **[evaluators]** Revert round decimal places to 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[File manager]** encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[Data source: Main]** Unable to create a MySQL view. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[Workflow]** Fix legacy tasks count after workflow deleted ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[Embed NocoBase]** Page displays blank by @zhangzhonghe
- **[Backup manager]**

  - Upload files have not been restored when creating sub-app from backup template by @gchust
  - MySQL database restore failure caused by GTID set overlap by @gchust
- **[Workflow: Approval]**

  - Change returned approval as todo by @mytharcher
  - Fix action button missed in process table by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/en/blog/v1.7.0-beta.2)

*Release date: 2025-03-13*

#### 🎉 New Features

- **[client]**

  - table block support hiding the index column (default visible) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - support configuring selectable field options in linkage rules ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - support date scope (min/max) configuration for time fields in linkage rules ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh
- **[Block: Action panel]** support line break for action title in action panel ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

#### 🐛 Bug Fixes

- **[client]**

  - incorrect page number when adding data after subtable page size change ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - The logo style is inconsistent with the previous one ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
  - multi-select field value changes and option loss when deleting subtable records ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
  - date field range selection excludes the max date ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
  - When using the '$anyOf' operator, the linkage rule is invalid ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - Data not updating in popup windows opened via Link buttons ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
- **[Action: Batch edit]** Fix workflow can not be triggered in bulk edit submission ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[Data visualization]** Removed fields appear when adding custom filter fields ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[Data source manager]** switching data source in role management does not load corresponding collections ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[Action: Custom request]** custom request server-side permission validation error ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[File manager]** Fix a few issues of file manager ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[Notification: In-app message]**

  - Avoid wrong receivers configuration query all users ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
  - Differentiate the in-app message list background color from the message cards to enhance visual hierarchy and readability. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66
- **[Workflow: Manual node]**

  - Change version limit of migration to `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher
  - Fix migration which missed table prefix and schema logic ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/en/blog/v1.7.0-beta.3)

*Release date: 2025-03-14*

#### 🎉 New Features

- **[WeCom]** Allows setting a custom tooltip for the sign-in button by @2013xile

#### 🚀 Improvements

- **[Data visualization]** Replace deprecated `x-designer` with `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

#### 🐛 Bug Fixes

- **[client]** Fix special character in image URL caused not showing ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
- **[Workflow: Manual node]** Fix error thrown in migration ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
- **[Workflow: Custom action event]** Remove `only` in E2E test case by @mytharcher
- **[Workflow: Approval]**

  - Fix error thrown when approve on external data source by @mytharcher
  - Fix association data not showing in approval form by @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/en/blog/v1.7.0-beta.4)

*Release date: 2025-03-15*

#### 🎉 New Features

- **[client]** Cascade Selection Component Add Data Scope Setting ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

#### 🚀 Improvements

- **[utils]** Move `md5` to utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]** In the tree block, when unchecked, the data in the data block is not being cleared ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
- **[File manager]** Unable to delete files stored in S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
- **[Workflow]** Remove bind workflow settings button from data picker ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[File storage: S3(Pro)]** Resolve issue with inaccessible S3 Pro signed URLs by @chenos
- **[Workflow: Approval]** Avoid page crash when no applicant in approval process table by @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/en/blog/v1.7.0-beta.5)

*Release date: 2025-03-18*

#### 🎉 New Features

- **[client]** Support inline table actions with icon-only mode, show action name on hover ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

#### 🚀 Improvements

- **[File manager]** Simplify file URL generating logic and API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[File storage: S3(Pro)]**

  - Change the text 'Access URL Base' to 'Base URL' by @zhangzhonghe
  - Change to a simple way to generate file URL by @mytharcher
- **[Backup manager]** Allow restore backup between pre release and release version of the same version by @gchust

#### 🐛 Bug Fixes

- **[client]**

  - The color of the icons in the upper right corner of the page does not change with the theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - rich text field not clearing data on submission ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - Clicking the reset button on the filter form cannot clear the filtering conditions of the grid card block ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[Workflow: Manual node]**

  - Fix migration ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - Change migration name to ensure rerun ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - Fix workflow title field in filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - Avoid collection synchronized from fields ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
  - Fix migration error when id column is not exists ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
- **[Workflow]** Don't count tasks when workflow deleted ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[Workflow: Aggregate node]** Fix round on null result ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[Embed NocoBase]** Page displays blank by @zhangzhonghe
- **[Backup manager]** Not able to start server when missing default backup settings by @gchust
- **[Workflow: Approval]**

  - Fix file association field error in process form by @mytharcher
  - Fix tasks count based on hooks by @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/en/blog/v1.7.0-beta.6)

*Release date: 2025-03-19*

#### 🎉 New Features

- **[client]** support long text fields as title fields for association field ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[Workflow: Aggregate node]** Support to configure precision for aggregation result ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🐛 Bug Fixes

- **[evaluators]** Revert round decimal places to 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[Workflow]** Fix legacy tasks count after workflow deleted ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[Data source: Main]** Unable to create a MySQL view. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[File manager]** encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[Backup manager]**

  - MySQL database restore failure caused by GTID set overlap by @gchust
  - Upload files have not been restored when creating sub-app from backup template by @gchust
- **[Workflow: Approval]**

  - Fix action button missed in process table by @mytharcher
  - Change returned approval as todo by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/en/blog/v1.7.0-alpha.2)

*Release date: 2025-03-15*

#### 🎉 New Features

- **[client]**

  - Cascade Selection Component Add Data Scope Setting ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038
  - table block support hiding the index column (default visible) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - support configuring selectable field options in linkage rules ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - support date scope (min/max) configuration for time fields in linkage rules ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh
- **[acl]** Support user role union ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie
- **[Block: Action panel]** support line break for action title in action panel ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh
- **[plugin-demo-platform]** Set skipAuthCheck of "/new" route to true. by @sheldon66
- **[WeCom]** Allows setting a custom tooltip for the sign-in button by @2013xile

#### 🚀 Improvements

- **[utils]**

  - Move `md5` to utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher
  - Desktop page adaptation for mobile devices ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe
- **[client]** Add skipAuthCheck to router.add to prevent redirecting to login on public pages. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66
- **[Data visualization]** Replace deprecated `x-designer` with `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

#### 🐛 Bug Fixes

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

### [v1.7.0-alpha.3](https://www.nocobase.com/en/blog/v1.7.0-alpha.3)

*Release date: 2025-03-18*

#### 🎉 New Features

- **[client]** Support inline table actions with icon-only mode, show action name on hover ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

#### 🚀 Improvements

- **[File manager]** Simplify file URL generating logic and API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[File storage: S3(Pro)]**

  - Change the text 'Access URL Base' to 'Base URL' by @zhangzhonghe
  - Change to a simple way to generate file URL by @mytharcher
- **[Backup manager]** Allow restore backup between pre release and release version of the same version by @gchust

#### 🐛 Bug Fixes

- **[client]**

  - missing fields in the linkage rule configuration ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh
  - The color of the icons in the upper right corner of the page does not change with the theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - rich text field not clearing data on submission ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - Input style not correct for form default value setting ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust
  - Clicking the reset button on the filter form cannot clear the filtering conditions of the grid card block ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[Workflow: Manual node]**

  - Change migration name to ensure rerun ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - Fix migration ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - Fix workflow title field in filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - Fix migration error when id column is not exists ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
  - Avoid collection synchronized from fields ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
- **[Workflow]** Don't count tasks when workflow deleted ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[Variables and secrets]** Buttons have not been shown in create new variables drawer ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust
- **[Workflow: Aggregate node]** Fix round on null result ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[Embed NocoBase]** Page displays blank by @zhangzhonghe
- **[Backup manager]** Not able to start server when missing default backup settings by @gchust
- **[Workflow: Approval]**

  - Fix file association field error in process form by @mytharcher
  - Fix tasks count based on hooks by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)

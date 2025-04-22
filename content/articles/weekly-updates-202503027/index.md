Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/en/blog/v1.6.7)

*Release date: 2025-03-20*

#### 🚀 Improvements

- **[Workflow: mailer node]** Add secure field config description. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[Notification: Email]** Add secure field config description. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[Calendar]** Calendar plugin with optional settings to enable or disable quick event creation ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

#### 🐛 Bug Fixes

- **[client]** time field submission error in Chinese locale (invalid input syntax for type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
- **[File manager]** Unable to access files stored in COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
- **[Block: Map]** secret key fields not triggering validation in map management ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[WEB client]** The path in the route management table is different from the actual path ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe
- **[Action: Export records Pro]** Unable to export attachments by @chenos
- **[Workflow: Approval]**

  - Fix null user caused crash by @mytharcher
  - Fix error thrown when add query node result by @mytharcher

### [v1.6.8](https://www.nocobase.com/en/blog/v1.6.8)

*Release date: 2025-03-22*

#### 🐛 Bug Fixes

- **[server]** The upgrade command may cause workflow errors ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[client]** the height of the subtable in the form is set along with the form height ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
- **[Authentication]**

  - X-Authenticator missing ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
  - Trim authenticator options ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
- **[Block: Map]** map block key management issue causing request failures due to invisible characters ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
- **[Backup manager]** Restoration may cause workflow execution errors by @gchust
- **[WeCom]** Resolve environment variables and secrets when retrieving notification configuration. by @2013xile

### [v1.6.9](https://www.nocobase.com/en/blog/v1.6.9)

*Release date: 2025-03-23*

#### 🐛 Bug Fixes

- **[client]** action button transparency causing setting display issue on hover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh

### [v1.6.10](https://www.nocobase.com/en/blog/v1.6.10)

*Release date: 2025-03-25*

#### 🐛 Bug Fixes

- **[client]**

  - Unable to use 'Current User' variable when adding a link page ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - 字段赋值对字段进行“空值”赋值无效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
  - `yarn doc` command error ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - Remove the 'Allow multiple selection' option from dropdown single-select fields in filter forms ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - Relational field's data range linkage is not effective ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
- **[Collection: Tree]** Migration issue for plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[Action: Custom request]** Unable to download UTF-8 encoded files ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/en/blog/v1.7.0-beta.7)

*Release date: 2025-03-19*

#### 🚀 Improvements

- **[Calendar]** Calendar plugin with optional settings to enable or disable quick event creation ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

#### 🐛 Bug Fixes

- **[client]**

  - add chi ld button not displaying icon-only mode ([#6504](https://github.com/nocobase/nocobase/pull/6504)) by @katherinehhh
  - linkage rule field default hidden with retained value not working ([#6503](https://github.com/nocobase/nocobase/pull/6503)) by @katherinehhh
- **[Block: Action panel]** layout issue in mobile action panel after hiding buttons due to permission control ([#6502](https://github.com/nocobase/nocobase/pull/6502)) by @katherinehhh
- **[WEB client]** The path in the route management table is different from the actual path ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/en/blog/v1.7.0-beta.8)

*Release date: 2025-03-23*

#### 🎉 New Features

- **[client]** Support field Style settings for font-size, font-weight, and font-style ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh
- **[Variables and secrets]** support environment variables in link button URL ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh

#### 🚀 Improvements

- **[client]** support fuzzy matching for fields selected in filter button ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh
- **[Workflow: mailer node]** Add secure field config description. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[WEB client]** add secondary confirmation prompt for Clear Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh
- **[Notification: Email]** Add secure field config description. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[Email manager]** support reauthorize & auto select the account when sending an email by @jiannx

#### 🐛 Bug Fixes

- **[server]** The upgrade command may cause workflow errors ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[client]**

  - the height of the subtable in the form is set along with the form height ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
  - time field submission error in Chinese locale (invalid input syntax for type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
  - action button transparency causing setting display issue on hover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh
- **[Authentication]**

  - Trim authenticator options ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
  - X-Authenticator missing ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
- **[Block: Map]**

  - map block key management issue causing request failures due to invisible characters ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
  - secret key fields not triggering validation in map management ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[File manager]** Unable to access files stored in COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
- **[Action: Export records Pro]** Unable to export attachments by @chenos
- **[Backup manager]** Restoration may cause workflow execution errors by @gchust
- **[WeCom]** Resolve environment variables and secrets when retrieving notification configuration. by @2013xile
- **[Workflow: Approval]**

  - Fix process table error when job deleted by @mytharcher
  - Fix error thrown when add query node result by @mytharcher
  - Fix null user caused crash by @mytharcher

### [v1.7.0-beta.9](https://www.nocobase.com/en/blog/v1.7.0-beta.9)

*Release date: 2025-03-25*

#### 🎉 New Features

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

#### 🚀 Improvements

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

#### 🐛 Bug Fixes

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/en/blog/v1.7.0-alpha.4)

*Release date: 2025-03-23*

#### 🎉 New Features

- **[client]**

  - support long text fields as title fields for association field ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
  - Support field Style settings for font-size, font-weight, and font-style ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh
- **[Variables and secrets]** support environment variables in link button URL ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh
- **[Workflow: Aggregate node]** Support to configure precision for aggregation result ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🚀 Improvements

- **[client]** support fuzzy matching for fields selected in filter button ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh
- **[Notification: Email]** Add secure field config description. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[Workflow: mailer node]** Add secure field config description. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[Calendar]** Calendar plugin with optional settings to enable or disable quick event creation ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038
- **[WEB client]** add secondary confirmation prompt for Clear Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh
- **[Email manager]** support reauthorize & auto select the account when sending an email by @jiannx

#### 🐛 Bug Fixes

- **[client]**

  - action button transparency causing setting display issue on hover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh
  - time field submission error in Chinese locale (invalid input syntax for type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
  - the height of the subtable in the form is set along with the form height ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
  - linkage rule field default hidden with retained value not working ([#6503](https://github.com/nocobase/nocobase/pull/6503)) by @katherinehhh
  - add chi ld button not displaying icon-only mode ([#6504](https://github.com/nocobase/nocobase/pull/6504)) by @katherinehhh
- **[server]** The upgrade command may cause workflow errors ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[utils]** Known 'desktop responsive' bug ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe
- **[evaluators]** Revert round decimal places to 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[Authentication]**

  - Trim authenticator options ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
  - X-Authenticator missing ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
- **[Block: Map]**

  - map block key management issue causing request failures due to invisible characters ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
  - secret key fields not triggering validation in map management ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[File manager]**

  - Unable to access files stored in COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
  - encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[WEB client]** The path in the route management table is different from the actual path ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe
- **[Block: Action panel]** layout issue in mobile action panel after hiding buttons due to permission control ([#6502](https://github.com/nocobase/nocobase/pull/6502)) by @katherinehhh
- **[Data source: Main]** Unable to create a MySQL view. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[Workflow]** Fix legacy tasks count after workflow deleted ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[Action: Export records Pro]** Unable to export attachments by @chenos
- **[Backup manager]**

  - Upload files have not been restored when creating sub-app from backup template by @gchust
  - Restoration may cause workflow execution errors by @gchust
  - MySQL database restore failure caused by GTID set overlap by @gchust
- **[WeCom]** Resolve environment variables and secrets when retrieving notification configuration. by @2013xile
- **[Workflow: Approval]**

  - Fix process table error when job deleted by @mytharcher
  - Change returned approval as todo by @mytharcher
  - Fix error thrown when add query node result by @mytharcher
  - Fix action button missed in process table by @mytharcher
  - Style issue with the 'Apply new' popup dialog by @zhangzhonghe

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)

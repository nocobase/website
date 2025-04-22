Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**This week we released [NocoBase 1.6.0 version](https://www.nocobase.com/en/blog/nocobase-1-6-0), which brings cluster mode deployment, security policy optimization, migration Managercore optimizations,  and many other new features.**

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/en/blog/v1.5.21)

*Release date: 2025-03-05*

#### 🚀 Improvements

- **[Workflow]** Lazy load job result for better performance ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher
- **[Workflow: Aggregate node]** Add round process for aggregated number based on double type ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - subform components not aligning with main form when label is hidden ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - association block not rendering in popup within collection  inheritance ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - Fix error thrown when creating file collection ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
- **[Workflow]** Fix acl for getting job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher

### [v1.5.22](https://www.nocobase.com/en/blog/v1.5.22)

*Release date: 2025-03-06*

#### 🚀 Improvements

- **[client]** Add debounce handling to buttons ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038

#### 🐛 Bug Fixes

- **[database]** Fix error when retrieving relation collection records if the source key in relation fields is a numeric string ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile

### [v1.5.23](https://www.nocobase.com/en/blog/v1.5.23)

*Release date: 2025-03-06*

#### 🐛 Bug Fixes

- **[client]**
  - timezone-related issue causing one hour less in date picker ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - missing sortable setting for inherited collection fields ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh

### [v1.5.24](https://www.nocobase.com/en/blog/v1.5.24)

*Release date: 2025-03-07*

#### 🎉 New Features

- **[Data visualization]** Support NULLS sorting in chart queries ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile

#### 🚀 Improvements

- **[Workflow]** Allow skip to trigger collection workflow in database event ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher

#### 🐛 Bug Fixes

- **[Action: Import records Pro]** Use additional option to determine whether to trigger workflow or not by @mytharcher
- **[Action: Export records Pro]** pro export action missing sort params by @katherinehhh

### [v1.5.25](https://www.nocobase.com/en/blog/v1.5.25)

*Release date: 2025-03-09*

#### 🐛 Bug Fixes

- **[server]** Incorrect browser cache after running `yarn start` command ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[Workflow: Approval]** Avoid wrong assignees configuration query all users by @mytharcher
- **[WeCom]** fix login prompt link and dingtalk login error by @chenzhizdt

### [v1.6.1](https://www.nocobase.com/en/blog/v1.6.1)

*Release date: 2025-03-11*

#### 🐛 Bug Fixes

- **[client]**

  - When using the '$anyOf' operator, the linkage rule is invalid ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - Data not updating in popup windows opened via Link buttons ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
  - multi-select field value changes and option loss when deleting subtable records ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
- **[Notification: In-app message]** Differentiate the in-app message list background color from the message cards to enhance visual hierarchy and readability. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/en/blog/v1.6.0-beta.17)

*Release date: 2025-03-07*

#### 🎉 New Features

- **[client]** Add tooltip configuration to menu item and table headers ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038
- **[Data visualization]** Support NULLS sorting in chart queries ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile
- **[AI integration]** New plugin: AI integration ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
  Reference: [AI integration](https://docs.nocobase.com/handbook/ai/service)
- **[AI integration (EE)]** New plugin: AI integration (EE) by @2013xile
  Reference: [AI integration](https://docs.nocobase.com/handbook/ai/service)

#### 🚀 Improvements

- **[client]**

  - Add debounce handling to buttons ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038
  - Make the menu responsive to screen width ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe
- **[Workflow]** Allow skip to trigger collection workflow in database event ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher
- **[Workflow: Aggregate node]** Add round process for aggregated number based on double type ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher
- **[Action: Import records Pro]** support advanced options in Pro import button by @katherinehhh
- **[Workflow: JavaScript]** Support to require package from absolute path by @mytharcher
- **[File storage: S3(Pro)]** try reload storages if not find the storage by @jiannx

#### 🐛 Bug Fixes

- **[client]**

  - Menu title custom translation is invalid ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe
  - timezone-related issue causing one hour less in date picker ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - missing sortable setting for inherited collection fields ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh
  - attachment field storage setting dropdown not displaying options ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh
  - subform components not aligning with main form when label is hidden ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - association block not rendering in popup within collection  inheritance ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - resolve scrollbar issue when opening page tab with full-height block ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh
  - Fix error thrown when creating file collection ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
- **[database]** Fix error when retrieving relation collection records if the source key in relation fields is a numeric string ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile
- **[WEB client]**

  - Adding tab pages in route management table does not take effect ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe
  - After adding a page to the route table, the page appears blank ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe
- **[Users]**

  - "No permissions" error when users without user management permissions view their own profile ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile
  - "No permissions" error when updating system settings in user management ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile
- **[Access control]** In the permission management table, the tab page name is empty ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe
- **[AI integration]** Issue where the default `baseURL` for LLM provider is `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile
- **[Workflow]** Fix acl for getting job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher
- **[Workflow: Custom action event]** Fix locale and collection modifiable after executed by @mytharcher
- **[Action: Import records Pro]** Use additional option to determine whether to trigger workflow or not by @mytharcher
- **[Action: Export records Pro]** pro export action missing sort params by @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/en/blog/v1.6.0-beta.18)

*Release date: 2025-03-10*

#### 🚀 Improvements

- **[Auth: API keys]** Add token security config test for API key authentication. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66

#### 🐛 Bug Fixes

- **[server]** Incorrect browser cache after running `yarn start` command ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[auth]** Handle non-existent user with 401 error and update locale messages ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66
- **[WEB client]** The page is blank after switching roles ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie
- **[Theme editor]** theme switching fails after multiple consecutive switches ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh
- **[Workflow: Approval]**

  - Fix order param when add assignee by @mytharcher
  - Avoid wrong assignees configuration query all users by @mytharcher
- **[WeCom]** fix login prompt link and dingtalk login error by @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/en/blog/v1.7.0-beta.1)

*Release date: 2025-03-11*

#### 🎉 New Features

- **[client]** compatible with historical button access control settings ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh
- **[Workflow: Post-action event]** Support to use end node to determine status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher
- **[Workflow: Response message]** Support to be used in action trigger by @mytharcher

#### 🚀 Improvements

- **[Workflow]** Fix API 401 when not logged in ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher
- **[Workflow: Manual node]** Adjust workflow task center UI ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher
- **[Email manager]** Use same element structure and style in global for toolbar button by @mytharcher
- **[Workflow: Approval]** Adjust task center UI by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Unable to move the page into a group ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe
  - Deep-level menus are not displaying icon ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe
  - FormDrawer theme context issue ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh
- **[Workflow: Manual node]** Avoid conflict on unique key ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher
- **[Data source manager]** error when editing fields in external data source ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh
- **[Authentication]** User has no roles should redirect error message page. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66
- **[Workflow: Custom action event]** missing linkage rule configuration for 'Trigger Workflow' button by @katherinehhh
- **[Backup manager]** Missing encryption key data during backup restoration by @gchust
- **[Workflow: Approval]** Avoid conflict on unique key by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/en/blog/v1.6.0-alpha.30)

*Release date: 2025-03-07*

#### 🎉 New Features

- **[client]**

  - Add tooltip configuration to menu item and table headers ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038
  - time field support time format ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh
- **[Data visualization]** Support NULLS sorting in chart queries ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile
- **[AI integration]** New plugin: AI integration ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
  Reference: [AI integration](https://docs.nocobase.com/handbook/ai/service)
- **[Verification]** Support user binding of various verification types, such as SMS and TOTP authenticators, and identity verification in required scenarios. Enable development and extension of verification methods. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
  Reference: [Verification](https://docs.nocobase.com/handbook/verification)
- **[AI integration (EE)]** New plugin: AI integration (EE) by @2013xile
  Reference: [AI integration](https://docs.nocobase.com/handbook/ai/service)
- **[Two-factor authentication (2FA)]** New plugins: Two-factor authentication and Verification: TOTP authenticator by @2013xile
  Reference: [Two-factor authentication (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verification: TOTP authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Improvements

- **[client]**

  - Add debounce handling to buttons ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038
  - Make the menu responsive to screen width ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe
- **[server]** Upgrade koa to 2.15.4; upgrade @koa/cors to 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile
- **[Workflow]**

  - Allow skip to trigger collection workflow in database event ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher
  - Lazy load job result for better performance ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher
- **[Block: template]** Support save data block as block template from page ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust
- **[Workflow: Aggregate node]** Add round process for aggregated number based on double type ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher
- **[Action: Import records Pro]** support advanced options in Pro import button by @katherinehhh
- **[Workflow: JavaScript]** Support to require package from absolute path by @mytharcher
- **[File storage: S3(Pro)]** try reload storages if not find the storage by @jiannx

#### 🐛 Bug Fixes

- **[client]**

  - Menu title custom translation is invalid ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe
  - missing sortable setting for inherited collection fields ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh
  - incorrect formatting of time field in filter form ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh
  - timezone-related issue causing one hour less in date picker ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - attachment field storage setting dropdown not displaying options ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh
  - subform components not aligning with main form when label is hidden ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - Fix error thrown when creating file collection ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
  - resolve scrollbar issue when opening page tab with full-height block ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh
  - Pages with custom favicon briefly flash the NocoBase favicon during loading ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
  - association block not rendering in popup within collection  inheritance ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - add new button appears on hover in association field read-only mode ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[auth]** Avoid renewing the token during WebSocket authorization. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66
- **[database]** Fix error when retrieving relation collection records if the source key in relation fields is a numeric string ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile
- **[WEB client]**

  - After adding a page to the route table, the page appears blank ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe
  - Adding tab pages in route management table does not take effect ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe
- **[Access control]** In the permission management table, the tab page name is empty ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe
- **[Users]**

  - "No permissions" error when users without user management permissions view their own profile ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile
  - "No permissions" error when updating system settings in user management ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile
  - An error UI briefly flashes when the user permission management table loads for the first time ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe
- **[AI integration]** Issue where the default `baseURL` for LLM provider is `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile
- **[Workflow]** Fix acl for getting job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher
- **[Block: Map]** Configuration settings for map field are missing/not visible ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[Mobile]** Page error: Cannot read properties of null (reading 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe
- **[Block: Action panel]** Setting the height of the action panel is invalid ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe
- **[Workflow: Custom action event]**

  - Fix locale and collection modifiable after executed by @mytharcher
  - Fix migration for legacy buttons bound with custom action workflow by @mytharcher
- **[Custom brand]** Pages with custom favicon briefly flash the NocoBase favicon during loading by @zhangzhonghe
- **[Action: Import records Pro]**

  - Use additional option to determine whether to trigger workflow or not by @mytharcher
  - association block import button duplicate record detection shows no data in field dropdown by @katherinehhh
- **[Action: Export records Pro]**

  - pro export action missing sort params by @katherinehhh
  - remove 'add block' option in export attachment button settings by @katherinehhh
- **[Template print]** Restore from local failed when action template print and backup manager plugins were both enabled by @gchust
- **[Workflow: Approval]**

  - Fix migration for legacy blocks by @mytharcher
  - Fix `.toJSON()` caused error by @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Release date: 2025-03-11*

#### 🎉 New Features

- **[client]** compatible with historical button access control settings ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh
- **[Workflow: Response message]** Support to be used in action trigger by @mytharcher

#### 🚀 Improvements

- **[Auth: API keys]** Add token security config test for API key authentication. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66
- **[Workflow: Manual node]** Adjust workflow task center UI ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher

#### 🐛 Bug Fixes

- **[server]** Incorrect browser cache after running `yarn start` command ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[client]**

  - FormDrawer theme context issue ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh
  - When using the '$anyOf' operator, the linkage rule is invalid ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe
- **[auth]** Handle non-existent user with 401 error and update locale messages ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66
- **[Block: template]** Save as template option has not been shown in page data block ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust
- **[Workflow: Manual node]** Avoid conflict on unique key ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher
- **[Data source manager]** error when editing fields in external data source ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh
- **[Theme editor]** theme switching fails after multiple consecutive switches ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh
- **[WEB client]** The page is blank after switching roles ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie
- **[Workflow: Approval]**

  - Avoid wrong assignees configuration query all users by @mytharcher
  - Fix order param when add assignee by @mytharcher
- **[WeCom]** fix login prompt link and dingtalk login error by @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/en/blog/v1.7.0-alpha.1)

*Release date: 2025-03-11*

#### 🎉 New Features

- **[Workflow: Post-action event]** Support to use end node to determine status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher

#### 🚀 Improvements

- **[Workflow]** Fix API 401 when not logged in ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher
- **[Email manager]** Use same element structure and style in global for toolbar button by @mytharcher
- **[Workflow: Approval]** Adjust task center UI by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Unable to move the page into a group ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe
  - Deep-level menus are not displaying icon ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe
- **[Authentication]** User has no roles should redirect error message page. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66
- **[Workflow: Custom action event]** missing linkage rule configuration for 'Trigger Workflow' button by @katherinehhh
- **[Backup manager]** Missing encryption key data during backup restoration by @gchust
- **[Workflow: Approval]** Avoid conflict on unique key by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)

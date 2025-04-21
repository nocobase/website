### 🎉 New Features

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
### 🚀 Improvements

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

### 🐛 Bug Fixes

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


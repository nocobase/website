### 🎉 New Features

- **[client]** Add tooltip configuration to menu item and table headers ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038

- **[Data visualization]** Support NULLS sorting in chart queries ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile

- **[AI integration]** New plugin: AI integration ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
Reference: [AI integration](https://docs.nocobase.com/handbook/ai/service)
- **[AI integration (EE)]** New plugin: AI integration (EE) by @2013xile
Reference: [AI integration](https://docs.nocobase.com/handbook/ai/service)
### 🚀 Improvements

- **[client]**
  - Add debounce handling to buttons ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038

  - Make the menu responsive to screen width ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe

- **[Workflow]** Allow skip to trigger collection workflow in database event ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher

- **[Workflow: Aggregate node]** Add round process for aggregated number based on double type ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

- **[Action: Import records Pro]** support advanced options in Pro import button by @katherinehhh

- **[Workflow: JavaScript]** Support to require package from absolute path by @mytharcher

- **[File storage: S3(Pro)]** try reload storages if not find the storage by @jiannx

### 🐛 Bug Fixes

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


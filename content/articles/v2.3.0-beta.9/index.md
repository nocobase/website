### 🚀 Improvements

- **[utils]** Added an option to block server-side requests and redirects to literal IP addresses ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile

- **[client-v2]** Improve V2 form QR scanning reliability on iOS. ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

- **[WeCom]** Improved type safety and unified the notification recipient selector in the WeCom plugin. by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]**
  - Hide unsupported built-in date variables from workflow create and update field assignments. ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher

  - Fix full-page reloads when opening settings pages ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe

  - Fixed the v2 Update record field settings failing after an assigned field was deleted. ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh

  - Show the standard deleted-field warning for historical V2 field assignments. ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh

  - Fix interrupted option value input for custom radio and checkbox fields in filter forms ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe

  - Support displaying to-many association fields as read-only subtables in client v2 forms. ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh

  - Fix nested association fields rendering blank in V2 forms when the parent relation uses dropdown selection. ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh

  - Fixed the inverse relationship type being editable in v2 field configuration. ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh

  - Fix filter forms not collapsing on mobile ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe

- **[server]** Fixed misleading preparing status when a subapp deployment environment is unavailable ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile

- **[cli]** Restrict legacy local upload URLs to signed-in users by default, with an opt-in compatibility switch for public access. ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher

- **[Workflow: Delay node]** Fixed delay duration variable validation and report invalid resolved values instead of waiting unexpectedly. ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher

- **[Data source manager]**
  - Fixed the inverse-field option not remaining selected when editing a v2 relation field. ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh

  - Added current user and current role variable selection to v2 permission data scopes ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx

- **[Notification: In-app message]** Allow all workflow variable types in in-app notification titles and detail links. ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher

- **[Access control]** Fix role permissions so selecting a deeply nested menu also selects all parent menus ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe

- **[Block: Kanban]** Fixed an issue where newly created records were not immediately visible in the Kanban block. ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar

- **[File manager]** Prevent file redirects from reusing expired signed storage URLs. ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher

- **[Flow engine]** Fixed non-admin variable resolution in form linkage rules, referenced templates, and scripts. ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust

- **[Workflow: Approval]** Fix approval cards showing outdated content after saving an edited draft by @zhangzhonghe

- **[App supervisor]** Fixed subapp access failures after rolling updates or deployment environment changes by @2013xile


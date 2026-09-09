### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed the v2 Update record field settings failing after an assigned field was deleted. ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh

  - Show the standard deleted-field warning for historical V2 field assignments. ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh

  - Fix filter forms not collapsing on mobile ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe

  - Support displaying to-many association fields as read-only subtables in client v2 forms. ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh

  - Fix nested association fields rendering blank in V2 forms when the parent relation uses dropdown selection. ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh

  - Fixed the inverse relationship type being editable in v2 field configuration. ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh

  - Fix interrupted option value input for custom radio and checkbox fields in filter forms ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe

  - Fix full-page reloads when opening settings pages ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe

- **[cli]** Restrict legacy local upload URLs to signed-in users by default, with an opt-in compatibility switch for public access. ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher

- **[Data source manager]** Fixed the inverse-field option not remaining selected when editing a v2 relation field. ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh

- **[Flow engine]** Fixed non-admin variable resolution in form linkage rules, referenced templates, and scripts. ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust

- **[Access control]** Fix role permissions so selecting a deeply nested menu also selects all parent menus ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe

- **[Block: Kanban]** Fixed an issue where newly created records were not immediately visible in the Kanban block. ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar

- **[Workflow: Approval]** Fix approval cards showing outdated content after saving an edited draft by @zhangzhonghe


### 🚀 Improvements

- **[utils]** Added an option to block server-side requests and redirects to literal IP addresses ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile

- **[client-v2]** Improve V2 form QR scanning reliability on iOS. ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

### 🐛 Bug Fixes

- **[server]**
  - Prevent secret environment variable exposure in custom request URLs ([#10503](https://github.com/nocobase/nocobase/pull/10503)) by @2013xile

  - Fixed misleading preparing status when a subapp deployment environment is unavailable ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile

- **[client-v2]**
  - Fixed the issue where variables nested deeper than three levels cannot be used in workflow query node conditions ([#10494](https://github.com/nocobase/nocobase/pull/10494)) by @mytharcher

  - Fix filter forms not collapsing on mobile ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe

  - Fix interrupted option value input for custom radio and checkbox fields in filter forms ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe

  - Fixed the v2 Update record field settings failing after an assigned field was deleted. ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh

  - Fix full-page reloads when opening settings pages ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe

  - Hide unsupported built-in date variables from workflow create and update field assignments. ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher

  - Show the standard deleted-field warning for historical V2 field assignments. ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh

- **[AI employees]** Fixed AI employee data query tools returning no records when the collection's role permission uses a data scope based on the current user ([#10501](https://github.com/nocobase/nocobase/pull/10501)) by @cgyrock

- **[Office File Previewer]** Fixed the issue with incorrect URLs being used for Office file previews ([#10496](https://github.com/nocobase/nocobase/pull/10496)) by @mytharcher

- **[Workflow: Delay node]** Fixed delay duration variable validation and report invalid resolved values instead of waiting unexpectedly. ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher

- **[Workflow]** Fix workflow list loading parameters under MySQL 8.3+ ([#10486](https://github.com/nocobase/nocobase/pull/10486)) by @mytharcher

- **[Access control]** Fix role permissions so selecting a deeply nested menu also selects all parent menus ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe

- **[Data source manager]** Fixed the inverse-field option not remaining selected when editing a v2 relation field. ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh

- **[Flow engine]** Fixed non-admin variable resolution in form linkage rules, referenced templates, and scripts. ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust

- **[Workflow: Approval]** Fix approval cards showing outdated content after saving an edited draft by @zhangzhonghe

- **[App supervisor]** Fixed subapp access failures after rolling updates or deployment environment changes by @2013xile


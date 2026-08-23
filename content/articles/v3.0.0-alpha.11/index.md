### 🎉 New Features

- **[AI employees]** Added configurable automatic or on-demand knowledge-base retrieval for AI employees, with role-based knowledge-base access filtering. ([#10362](https://github.com/nocobase/nocobase/pull/10362)) by @cgyrock

- **[AI: Knowledge base]** Added role-based read-only and read/write permissions for knowledge-base management, including creator ownership and read-only management views. by @cgyrock

- **[Multi-space]** Added search to space switchers and space management in both v1 and v2 by @jiannx

- **[Email manager]** Email synchronization now uses recoverable background jobs with status history and safer full-resync cleanup, including Gmail Spam and Trash. by @jiannx

### 🚀 Improvements

- **[DingTalk]** Complete DingTalk client v2 support, including Stream synchronization, notification configuration, and automatic login improvements. by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed a false DatePicker missing-component error in v2 table filters. ([#10392](https://github.com/nocobase/nocobase/pull/10392)) by @katherinehhh

  - Fixed an error that prevented filter conditions from being cleared in workflow settings. ([#10388](https://github.com/nocobase/nocobase/pull/10388)) by @Molunerfinn

  - Fixed relationship picker labels when association form values contain only a related record ID. ([#10386](https://github.com/nocobase/nocobase/pull/10386)) by @cgyrock

  - Fixed false missing-component console errors when opening v2 table filters. ([#10389](https://github.com/nocobase/nocobase/pull/10389)) by @katherinehhh

- **[app]** Added runtime polyfills for modern JavaScript APIs in supported older browsers ([#10385](https://github.com/nocobase/nocobase/pull/10385)) by @mytharcher

- **[flow-engine]** Fix issue where RunJS resource create actions could not create associated sub-table records ([#10355](https://github.com/nocobase/nocobase/pull/10355)) by @gchust

- **[undefined]** Fixed customized external database field display names being reset when selected tables are reloaded by @cgyrock

- **[Data source manager]** Fixed customized external database field display names being reset when a data source is submitted or its selected tables are changed ([#10387](https://github.com/nocobase/nocobase/pull/10387)) by @cgyrock

- **[AI employees]** Fix V2 Import drag-and-drop being blocked by the AI attachment overlay. ([#10384](https://github.com/nocobase/nocobase/pull/10384)) by @katherinehhh

- **[Data source: External PostgreSQL]** Automatically load collections when editing an external relational data source in client v2. by @katherinehhh

- **[Action: Import records Pro]** Fixed asynchronous imports not respecting field-level import permissions by @mytharcher

- **[Action: Export records Pro]** Fix export errors when using complex filters with the Export Pro plugin by @zhangzhonghe

- **[Workflow: Approval]**
  - Fixed approval workflows configured to return to any previous approval node only allowing the nearest upstream node by @mytharcher

  - Fixed related approval blocks failing to load on Client V2 record detail pages by @mytharcher

- **[App supervisor]** Fixed Kingbase connections when creating supervised applications by @2013xile

- **[DingTalk]** Fixed DingTalk internal auto-login retaining the previous user's session after switching accounts. by @chenzhizdt


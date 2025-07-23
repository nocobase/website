### 🎉 New Features

- **[Workflow: Parallel node]** Add "All settled" mode for parallel node ([#7263](https://github.com/nocobase/nocobase/pull/7263)) by @mytharcher

- **[Redis queue adapter]** Add Redis adapter for event queue by @mytharcher

### 🚀 Improvements

- **[server]** Make concurrent memory queue available when processing items not full ([#7267](https://github.com/nocobase/nocobase/pull/7267)) by @mytharcher

- **[database]** Automatically activates simple pagination when dataset exceeds a threshold ([#7227](https://github.com/nocobase/nocobase/pull/7227)) by @aaaaaajie

- **[Workflow: Manual node]** storePopupContext supports saving default context ([#7264](https://github.com/nocobase/nocobase/pull/7264)) by @zhangzhonghe

- **[Redis queue adapter]** Make concurrent queue available when processing items not full for Redis adapter by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - missing current object variable in sub-table linkage rules ([#7266](https://github.com/nocobase/nocobase/pull/7266)) by @katherinehhh

  - Data selector title field setting is invalid ([#7251](https://github.com/nocobase/nocobase/pull/7251)) by @zhangzhonghe

  - Fix issue where Markdown fields were not rendered correctly in the detail view. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) by @aaaaaajie

  - After field changes, the association fields that depend on this field have not cleared their values ([#7262](https://github.com/nocobase/nocobase/pull/7262)) by @zhangzhonghe

  - display issue when deprecated date variables are used in date fields of historical data ([#7253](https://github.com/nocobase/nocobase/pull/7253)) by @katherinehhh

- **[database]**
  - Resolve auto simple pagination failure caused by table naming convention. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) by @aaaaaajie

  - Fixed failure when exporting large datasets from PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) by @aaaaaajie

  - Fix issue where default primary key sorting causes list loading failure when using MSSQL external data source in table block. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) by @aaaaaajie

- **[auth]** Fix the issue where an empty `secret` in sub-application configuration prevents sign-in ([#7239](https://github.com/nocobase/nocobase/pull/7239)) by @2013xile

- **[Data source manager]** Fixed preserve external datasource attributes in collection configuration ([#7249](https://github.com/nocobase/nocobase/pull/7249)) by @aaaaaajie

- **[Action: Batch edit]** Unable to perform bulk edit and bulk update in data selector ([#7250](https://github.com/nocobase/nocobase/pull/7250)) by @zhangzhonghe

- **[Workflow]** Fix wrong version of dependency ([#7258](https://github.com/nocobase/nocobase/pull/7258)) by @mytharcher

- **[Data source: External Oracle]** Fixed preserve external datasource attributes in collection configuration by @aaaaaajie

- **[Workflow: Approval]** The Link button's URL points to a popup on the current page, but clicking it shows a 404 error by @zhangzhonghe

- **[Email manager]** the messages and labes relationship collection is exceptional under mysql by @jiannx


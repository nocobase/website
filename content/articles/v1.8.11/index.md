### 🎉 New Features

- **[Office File Previewer]** Support to preview Office files via Microsoft live preview ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher

### 🚀 Improvements

- **[client]** Do not automatically close menu after selection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612

- **[Notification: In-app message]** Change in-app message from SSE to WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher

- **[Workflow]** Reduce jobs amount to load when preparing execution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher

- **[Auth: DingTalk]** In the DingTalk client, set the navigation bar title to an empty string instead of displaying “Loading…” by @2013xile

### 🐛 Bug Fixes

- **[client]**
  - Fix issue where tree table cannot be expanded ([#7309](https://github.com/nocobase/nocobase/pull/7309)) by @zhangzhonghe

  - Fix unexpected behavior in table row drag and drop sorting ([#6959](https://github.com/nocobase/nocobase/pull/6959)) by @ChimingLiu

  - Fix infinite loop issue when parsing field default values ([#7301](https://github.com/nocobase/nocobase/pull/7301)) by @zhangzhonghe

  - 修复筛选表单中关系字段配置数据选择器时弹窗内日期字段展示异常的问题 ([#7290](https://github.com/nocobase/nocobase/pull/7290)) by @katherinehhh

- **[Workflow: HTTP request node]** Fix racing condition bug ([#7310](https://github.com/nocobase/nocobase/pull/7310)) by @mytharcher

- **[Workflow]** Fix BigInt ID issue in MySQL when save job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) by @mytharcher

- **[Action: Export records]** Fixed incorrect formatting of nested relational fields when exporting to Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) by @aaaaaajie

- **[Data source: External SQL Server]** Fix inconsistent storage format for MSSQL datetime (without time zone) fields from external data sources by @aaaaaajie

- **[Workflow: Approval]** Fix error thrown from assignee select inside external datasource by @mytharcher


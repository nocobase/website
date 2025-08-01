Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.11](https://www.nocobase.com/en/blog/v1.8.11)

*Release date: 2025-07-31*

#### 🎉 New Features

- **[Office File Previewer]** Support to preview Office files via Microsoft live preview ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher

#### 🚀 Improvements

- **[client]** Do not automatically close menu after selection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612
- **[Notification: In-app message]** Change in-app message from SSE to WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher
- **[Workflow]** Reduce jobs amount to load when preparing execution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher
- **[Auth: DingTalk]** In the DingTalk client, set the navigation bar title to an empty string instead of displaying “Loading…” by @2013xile

#### 🐛 Bug Fixes

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.4](https://www.nocobase.com/en/blog/v1.9.0-alpha.4)

*Release date: 2025-08-01*

#### 🎉 New Features

- **[server]** Support configuring request body size limit via environment variable ([#7273](https://github.com/nocobase/nocobase/pull/7273)) by @aaaaaajie
- **[client]** Table blocks support adding a 'Column settings' button to configure column order and visibility ([#7204](https://github.com/nocobase/nocobase/pull/7204)) by @kerwin612
- **[Office File Previewer]** Support to preview Office files via Microsoft live preview ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher
- **[Data source: Main]**

  - support reading tables from main data source ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie
- **[Workflow: Parallel node]** Add "All settled" mode for parallel node ([#7263](https://github.com/nocobase/nocobase/pull/7263)) by @mytharcher
- **[Auth: SAML 2.0]** Support automatic redirection to the SSO URL when the user is unauthenticated by @2013xile
- **[Redis queue adapter]** Add Redis adapter for event queue by @mytharcher

#### 🚀 Improvements

- **[client]** Do not automatically close menu after selection ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612
- **[server]** Make concurrent memory queue available when processing items not full ([#7267](https://github.com/nocobase/nocobase/pull/7267)) by @mytharcher
- **[database]** Automatically activates simple pagination when dataset exceeds a threshold ([#7227](https://github.com/nocobase/nocobase/pull/7227)) by @aaaaaajie
- **[Notification: In-app message]** Change in-app message from SSE to WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher
- **[Workflow]**

  - Reduce jobs amount to load when preparing execution ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher
  - Add json type constant for test variable ([#7274](https://github.com/nocobase/nocobase/pull/7274)) by @mytharcher
- **[AI integration]** Remove `await` for invoking `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) by @mytharcher
- **[Workflow: Manual node]** storePopupContext supports saving default context ([#7264](https://github.com/nocobase/nocobase/pull/7264)) by @zhangzhonghe
- **[Workflow: JSON calculation]** Make JSON query node testable by @mytharcher
- **[Redis queue adapter]** Make concurrent queue available when processing items not full for Redis adapter by @mytharcher
- **[Auth: DingTalk]** In the DingTalk client, set the navigation bar title to an empty string instead of displaying “Loading…” by @2013xile

#### 🐛 Bug Fixes

- **[utils]** incorrect timezone handling for parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh
- **[client]**

  - Fix file preview item on null url ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher
  - Add full URL to local file when previewing ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher
  - Fix issue where tree table cannot be expanded ([#7309](https://github.com/nocobase/nocobase/pull/7309)) by @zhangzhonghe
  - Fix unexpected behavior in table row drag and drop sorting ([#6959](https://github.com/nocobase/nocobase/pull/6959)) by @ChimingLiu
  - Fix infinite loop issue when parsing field default values ([#7301](https://github.com/nocobase/nocobase/pull/7301)) by @zhangzhonghe
  - date field display issue  in association field data selector popup of filter form ([#7290](https://github.com/nocobase/nocobase/pull/7290)) by @katherinehhh
  - fuzzy search not working in select association field when using formula as title field ([#7280](https://github.com/nocobase/nocobase/pull/7280)) by @katherinehhh
  - missing current object variable in sub-table linkage rules ([#7266](https://github.com/nocobase/nocobase/pull/7266)) by @katherinehhh
  - Fix issue where Markdown fields were not rendered correctly in the detail view. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) by @aaaaaajie
  - After field changes, the association fields that depend on this field have not cleared their values ([#7262](https://github.com/nocobase/nocobase/pull/7262)) by @zhangzhonghe
  - display issue when deprecated date variables are used in date fields of historical data ([#7253](https://github.com/nocobase/nocobase/pull/7253)) by @katherinehhh
  - Data selector title field setting is invalid ([#7251](https://github.com/nocobase/nocobase/pull/7251)) by @zhangzhonghe
- **[database]**

  - Resolve auto simple pagination failure caused by table naming convention. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) by @aaaaaajie
  - Fixed failure when exporting large datasets from PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) by @aaaaaajie
  - Fix issue where default primary key sorting causes list loading failure when using MSSQL external data source in table block. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) by @aaaaaajie
- **[auth]** Fix the issue where an empty `secret` in sub-application configuration prevents sign-in ([#7239](https://github.com/nocobase/nocobase/pull/7239)) by @2013xile
- **[File manager]** Fix storage field permission ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher
- **[Workflow]**

  - Fix `undefined` result when processor exit ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher
  - Fix BigInt ID issue in MySQL when save job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) by @mytharcher
  - Fix wrong version of dependency ([#7258](https://github.com/nocobase/nocobase/pull/7258)) by @mytharcher
- **[Workflow: HTTP request node]** Fix racing condition bug ([#7310](https://github.com/nocobase/nocobase/pull/7310)) by @mytharcher
- **[Action: Export records]** Fixed incorrect formatting of nested relational fields when exporting to Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) by @aaaaaajie
- **[Data source manager]** Fixed preserve external datasource attributes in collection configuration ([#7249](https://github.com/nocobase/nocobase/pull/7249)) by @aaaaaajie
- **[Action: Batch edit]** Unable to perform bulk edit and bulk update in data selector ([#7250](https://github.com/nocobase/nocobase/pull/7250)) by @zhangzhonghe
- **[Data source: External Oracle]** Fixed preserve external datasource attributes in collection configuration by @aaaaaajie
- **[Data source: External SQL Server]** Fix inconsistent storage format for MSSQL datetime (without time zone) fields from external data sources by @aaaaaajie
- **[Workflow: Subflow]** Fix flow suspended by @mytharcher
- **[Workflow: Approval]**

  - Fix error thrown from assignee select inside external datasource by @mytharcher
  - The Link button's URL points to a popup on the current page, but clicking it shows a 404 error by @zhangzhonghe
- **[Email manager]**

  - add rawId field for performance optimization by @jiannx
  - ref attribute in html causes rendering exception by @jiannx
  - the messages and labes relationship collection is exceptional under mysql by @jiannx

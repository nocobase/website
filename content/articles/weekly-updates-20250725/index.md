Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/en/blog/v1.8.10)

*Release date: 2025-07-24*

#### 🎉 New Features

* **[Auth: SAML 2.0]** Support automatic redirection to the SSO URL when the user is unauthenticated by @2013xile
* **[server]** Support configuring request body size limit via environment variable ([#7273](https://github.com/nocobase/nocobase/pull/7273)) by @aaaaaajie
* **[Workflow: Parallel node]** Add "All settled" mode for parallel node ([#7263](https://github.com/nocobase/nocobase/pull/7263)) by @mytharcher
* **[Redis queue adapter]** Add Redis adapter for event queue by @mytharcher

#### 🚀 Improvements

* **[Workflow]** Add json type constant for test variable ([#7274](https://github.com/nocobase/nocobase/pull/7274)) by @mytharcher
* **[AI integration]** Remove `await` for invoking `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) by @mytharcher
* **[Workflow: JSON calculation]** Make JSON query node testable by @mytharcher
* **[server]** Make concurrent memory queue available when processing items not full ([#7267](https://github.com/nocobase/nocobase/pull/7267)) by @mytharcher
* **[database]** Automatically activates simple pagination when dataset exceeds a threshold ([#7227](https://github.com/nocobase/nocobase/pull/7227)) by @aaaaaajie
* **[Workflow: Manual node]** storePopupContext supports saving default context ([#7264](https://github.com/nocobase/nocobase/pull/7264)) by @zhangzhonghe
* **[Redis queue adapter]** Make concurrent queue available when processing items not full for Redis adapter by @mytharcher

#### 🐛 Bug Fixes

* **[client]**
  * fuzzy search not working in select association field when using formula as title field ([#7280](https://github.com/nocobase/nocobase/pull/7280)) by @katherinehhh
  * missing current object variable in sub-table linkage rules ([#7266](https://github.com/nocobase/nocobase/pull/7266)) by @katherinehhh
  * Data selector title field setting is invalid ([#7251](https://github.com/nocobase/nocobase/pull/7251)) by @zhangzhonghe
  * Fix issue where Markdown fields were not rendered correctly in the detail view. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) by @aaaaaajie
  * After field changes, the association fields that depend on this field have not cleared their values ([#7262](https://github.com/nocobase/nocobase/pull/7262)) by @zhangzhonghe
  * display issue when deprecated date variables are used in date fields of historical data ([#7253](https://github.com/nocobase/nocobase/pull/7253)) by @katherinehhh
* **[database]**
  * Resolve auto simple pagination failure caused by table naming convention. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) by @aaaaaajie
  * Fixed failure when exporting large datasets from PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) by @aaaaaajie
  * Fix issue where default primary key sorting causes list loading failure when using MSSQL external data source in table block. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) by @aaaaaajie
* **[auth]** Fix the issue where an empty `secret` in sub-application configuration prevents sign-in ([#7239](https://github.com/nocobase/nocobase/pull/7239)) by @2013xile
* **[Data source manager]** Fixed preserve external datasource attributes in collection configuration ([#7249](https://github.com/nocobase/nocobase/pull/7249)) by @aaaaaajie
* **[Action: Batch edit]** Unable to perform bulk edit and bulk update in data selector ([#7250](https://github.com/nocobase/nocobase/pull/7250)) by @zhangzhonghe
* **[Workflow]** Fix wrong version of dependency ([#7258](https://github.com/nocobase/nocobase/pull/7258)) by @mytharcher
* **[Data source: External Oracle]** Fixed preserve external datasource attributes in collection configuration by @aaaaaajie
* **[Workflow: Approval]** The Link button's URL points to a popup on the current page, but clicking it shows a 404 error by @zhangzhonghe
* **[Email manager]** the messages and labes relationship collection is exceptional under mysql by @jiannx

### [v1.8.7](https://www.nocobase.com/en/blog/v1.8.7)

*Release date: 2025-07-18*

#### 🎉 New Features

- **[Workflow: date calculation node]** Support to test run node by @mytharcher

#### 🚀 Improvements

- **[client]** Color Picker: Add four recommended colors ([#7226](https://github.com/nocobase/nocobase/pull/7226)) by @zhangzhonghe
- **[Workflow]** Make comparison compatible for date values ([#7237](https://github.com/nocobase/nocobase/pull/7237)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - style rules not working on table action column ([#7225](https://github.com/nocobase/nocobase/pull/7225)) by @katherinehhh
  - When deleting a menu, the corresponding data in the uiSchemas table is not deleted ([#7232](https://github.com/nocobase/nocobase/pull/7232)) by @zhangzhonghe
  - Avoid non-association fields to be selected in appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) by @mytharcher
- **[Workflow: Subflow]** Fix error thrown when recall signal arrive but pending execution is not on current instance by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/en/blog/v1.9.0-alpha.3)

*Release date: 2025-07-18*

#### 🎉 New Features

- **[Data source: Main]** Support displaying plugin-defined tables in the main data source. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie
- **[Workflow: date calculation node]** Support to test run node by @mytharcher

#### 🚀 Improvements

- **[client]** Color Picker: Add four recommended colors ([#7226](https://github.com/nocobase/nocobase/pull/7226)) by @zhangzhonghe
- **[Workflow]** Make comparison compatible for date values ([#7237](https://github.com/nocobase/nocobase/pull/7237)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - style rules not working on table action column ([#7225](https://github.com/nocobase/nocobase/pull/7225)) by @katherinehhh
  - Avoid non-association fields to be selected in appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) by @mytharcher
  - Fix error: Can't resolve 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) by @zhangzhonghe
  - When deleting a menu, the corresponding data in the uiSchemas table is not deleted ([#7232](https://github.com/nocobase/nocobase/pull/7232)) by @zhangzhonghe
- **[database]** Fixed error when enabling simple pagination for external data source tables ([#7222](https://github.com/nocobase/nocobase/pull/7222)) by @aaaaaajie
- **[Collection field: Sort]** missing sort field selection when duplicating records ([#7116](https://github.com/nocobase/nocobase/pull/7116)) by @katherinehhh
- **[Workflow: Subflow]** Fix error thrown when recall signal arrive but pending execution is not on current instance by @mytharcher
- **[Workflow: Approval]**

  - Fix multiple levels of associations when submit approval by @mytharcher
  - Add fault tolerance for deleted approval in record list by @mytharcher
- **[Email manager]** email message list optimal performance by @jiannx

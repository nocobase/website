Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.37

*Release date: 2026-08-08*

### 🎉 New Features

- **[client-v2]** Add Date variables and optional formatted output to V2 field-value editors. ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix missing and incorrectly resolved `Current popup` parent record variables in v2 popup-subtable add-new and edit dialogs. ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh
  - Fixed parent item variables resolving to the wrong level when assigning association field values in sub-tables. ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust
  - Fix the cancel button language in mobile selection lists ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe
- **[data-source-manager]** Fixed formula fields being converted to number fields after synchronizing fields from the database ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile
- **[database]** Fixed migration packages omitting many-to-many through-table data after an application restart ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock
- **[Backup manager]** Fix duplicate backups from async exports ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust
- **[AI employees]** AI employee actions now support linkage rules for conditional visibility in v2 forms. ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx
- **[Data source: External NocoBase]** Fixed external NocoBase files and attachment fields failing to load in AI workflows by @2013xile
- **[Migration manager]** Fixed many-to-many through-table migration data after application restarts and classified migration rules as system data by @cgyrock
- **[Workflow: Approval]** Fix approval comment default values when using RunJS by @zhangzhonghe
- **[App supervisor]** Prevented app creation with database identifiers that do not start with an English letter or contain unsupported characters. by @hongboji

### v2.1.36

*Release date: 2026-08-05*

### 🐛 Bug Fixes

- **[Data source manager]** Prevented clearing a field interface directly from the Configure fields table. ([#10288](https://github.com/nocobase/nocobase/pull/10288)) by @hongboji
- **[Auth: LDAP]** Fixed LDAP login when a user DN mixes UTF-8 escapes with escaped syntax characters such as commas. by @hongboji

### v2.1.35

*Release date: 2026-08-05*

### 🚀 Improvements

- **[Workflow: HTTP request node]** Fix unstable test cases ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher
- **[Action: Batch update]** Support configurable after-success behavior for v2 Update record and Bulk update actions. ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh
- **[Action: Export records]** Add field search to v2 import and export action settings. ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh
- **[Action: Export records Pro]** Add field search to v2 Import Pro and Export Pro action settings. by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]** Fix missing Current record variables in v2 JS column event-flow conditions. ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh
- **[database]** Fixed MSSQL queries failing when filtering to-many relations with pagination and sorting by a root collection field ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock
- **[data-source-manager]** Fixed external data source table synchronization leaving removed collections registered in the database manager ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock
- **[Workflow: JavaScript]** Fixed JavaScript workflow Workers not exiting after scripts returned or asynchronous workflows timed out ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher
- **[Collection field: Sequence]** Fixed duplicate automatic sequence values after migration when multiple records share the latest creation time ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher
- **[Data source: External SQL Server]** N/A — regression test coverage only by @cgyrock
- **[AI: Knowledge base]** Fixed PGVector knowledge base searches consuming unused PostgreSQL pool connections and creating duplicate pools for different vector tables. by @cgyrock
- **[Data source: External MySQL]** Fixed previously selected external database tables disappearing after adding new tables. by @cgyrock
- **[Workflow: Approval]**

  - Fix missing field values in approval sub-tables by @zhangzhonghe
  - Allow approval comments to use configurable default values by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v3.0.0-alpha.7

*Release date: 2026-08-06*

### 🎉 New Features

- **[client-v2]** Support using the standalone Settings application as the default app entry. ([#10267](https://github.com/nocobase/nocobase/pull/10267)) by @katherinehhh
- **[AI employees]**

  - AI employees can now be assigned skills from the employee settings page. Skills are built from plugins. ([#10237](https://github.com/nocobase/nocobase/pull/10237)) by @cgyrock
  - Added Portal-scoped AI conversations and unread counts. ([#10266](https://github.com/nocobase/nocobase/pull/10266)) by @cgyrock
- **[Portal manager]** Updated init defaults so non-latest installs use the modern client entry and seed the default AI, admin, and mobile portals; the CLI can now save and update the client entry mode. ([#10281](https://github.com/nocobase/nocobase/pull/10281)) by @chenos

### 🚀 Improvements

- **[Action: Batch update]** Support configurable after-success behavior for v2 Update record and Bulk update actions. ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh
- **[Action: Export records]** Add field search to v2 import and export action settings. ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh
- **[Action: Export records Pro]** Add field search to v2 Import Pro and Export Pro action settings. by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix missing spacing in workflow approval configuration dialogs ([#10276](https://github.com/nocobase/nocobase/pull/10276)) by @zhangzhonghe
  - Fix missing Current record variables in v2 JS column event-flow conditions. ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh
  - Hide the maintenance dialog and retry button while the application is upgrading ([#10250](https://github.com/nocobase/nocobase/pull/10250)) by @zhangzhonghe
  - Prevent long table content from widening columns and wrap it automatically ([#10259](https://github.com/nocobase/nocobase/pull/10259)) by @zhangzhonghe
- **[database]** Fixed MSSQL queries failing when filtering to-many relations with pagination and sorting by a root collection field ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock
- **[data-source-manager]** Fixed external data source table synchronization leaving removed collections registered in the database manager ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock
- **[Localization]** Fixed a crash when opening Localization settings with the Lina AI assistant entry. ([#10293](https://github.com/nocobase/nocobase/pull/10293)) by @cgyrock
- **[Data source manager]** Prevented clearing a field interface directly from the Configure fields table. ([#10288](https://github.com/nocobase/nocobase/pull/10288)) by @hongboji
- **[Backup manager]** Prevent repeated V2 backup restore submissions while a restore request is in progress. ([#10262](https://github.com/nocobase/nocobase/pull/10262)) by @katherinehhh
- **[File manager]** Fixed shared attachments such as the system logo not loading for authenticated member users ([#10268](https://github.com/nocobase/nocobase/pull/10268)) by @mytharcher
- **[AI employees]** Fixed the AI employee entry not appearing in non-default portals. ([#10260](https://github.com/nocobase/nocobase/pull/10260)) by @cgyrock
- **[Data source: External MySQL]** Fixed previously selected external database tables disappearing after adding new tables. by @cgyrock
- **[AI: Knowledge base]** Fixed PGVector knowledge base searches consuming unused PostgreSQL pool connections and creating duplicate pools for different vector tables. by @cgyrock
- **[Data source: External SQL Server]** N/A — regression test coverage only by @cgyrock
- **[Workflow: Approval]**

  - Fix missing field values in approval sub-tables by @zhangzhonghe
  - Fix approval comment default values when using RunJS by @zhangzhonghe
  - Allow approval comments to use configurable default values by @zhangzhonghe
- **[App supervisor]** Prevented app creation with database identifiers that do not start with an English letter or contain unsupported characters. by @hongboji
- **[Auth: LDAP]** Fixed LDAP login when a user DN mixes UTF-8 escapes with escaped syntax characters such as commas. by @hongboji

### v3.0.0-alpha.6

*Release date: 2026-08-03*

### 🚀 Improvements

- **[Workflow: HTTP request node]** Fix unstable test cases ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher

### 🐛 Bug Fixes

- **[auth]** Fixed occasional `Invalid CSRF token` errors on API requests in cross-origin deployments ([#10245](https://github.com/nocobase/nocobase/pull/10245)) by @mytharcher
- **[Portal manager]** Fix device icon and long title display on Portal cards ([#10248](https://github.com/nocobase/nocobase/pull/10248)) by @zhangzhonghe
- **[Collection field: Sequence]** Fixed duplicate automatic sequence values after migration when multiple records share the latest creation time ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher
- **[Workflow: JavaScript]** Fixed JavaScript workflow Workers not exiting after scripts returned or asynchronous workflows timed out ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher

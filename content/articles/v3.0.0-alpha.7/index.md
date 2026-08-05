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


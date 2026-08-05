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


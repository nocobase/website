### 🎉 New Features

- **[client-v2]** Add Date variables and optional formatted output to V2 field-value editors. ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh

- **[AI employees]**
  - AI employees can now be assigned skills from the employee settings page. Skills are built from plugins. ([#10237](https://github.com/nocobase/nocobase/pull/10237)) by @cgyrock

  - Added UI navigation for supported LLM service CLI commands, including provider preselection when creating a service. ([#10210](https://github.com/nocobase/nocobase/pull/10210)) by @cgyrock

- **[Multi-space]** Added default-space configuration so newly created users automatically join the selected default space. by @jiannx

- **[AI: Knowledge base]** Added UI navigation for creating and editing vector databases from CLI commands, with provider preselection for new databases. by @cgyrock

### 🚀 Improvements

- **[undefined]** Clarified the default JavaScript Worker concurrency behavior and when to configure a concurrency limit ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
Reference: [JavaScript node](https://docs.nocobase.com/workflow/nodes/javascript)
- **[Workflow: JavaScript]** JavaScript workflow nodes now queue asynchronous Worker execution and limit per-process Worker concurrency to reduce resource spikes. ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher

- **[Action: Export records]** Add field search to v2 import and export action settings. ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh

- **[Action: Batch update]** Support configurable after-success behavior for v2 Update record and Bulk update actions. ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh

- **[Workflow: HTTP request node]** Fix unstable test cases ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher

- **[Workflow]** Workflow create and update nodes now support combining text with variables when assigning string and text fields ([#10238](https://github.com/nocobase/nocobase/pull/10238)) by @mytharcher

- **[Action: Export records Pro]** Add field search to v2 Import Pro and Export Pro action settings. by @katherinehhh

- **[AI: Knowledge base]** Aligned the vector database list styling with other settings tables by @cgyrock

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed Kanban column quick create records not inheriting the selected group value ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx

  - Fix missing and incorrectly resolved `Current popup` parent record variables in v2 popup-subtable add-new and edit dialogs. ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh

  - Fixed parent item variables resolving to the wrong level when assigning association field values in sub-tables. ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust

  - Fix the cancel button language in mobile selection lists ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe

  - Fix missing Current record variables in v2 JS column event-flow conditions. ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh

- **[database]**
  - Fixed migration packages omitting many-to-many through-table data after an application restart ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock

  - Fixed MSSQL queries failing when filtering to-many relations with pagination and sorting by a root collection field ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock

- **[data-source-manager]**
  - Fixed formula fields being converted to number fields after synchronizing fields from the database ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile

  - Fixed external data source table synchronization leaving removed collections registered in the database manager ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock

- **[auth]** Fixed occasional `Invalid CSRF token` errors on API requests in cross-origin deployments ([#10245](https://github.com/nocobase/nocobase/pull/10245)) by @mytharcher

- **[Block: Tree]** Fixed Tree block searches showing placeholder nodes when no business-field records matched ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx

- **[Block: Gantt]** Fixed custom record colors not being applied to short Gantt task bars ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx

- **[Flow engine]**
  - Fixed incorrect variable resolution for form field values ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust

  - Fixed popup record variables and association blocks for custom non-Sequelize data sources ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust

- **[Backup manager]**
  - Prevent repeated V2 backup restore submissions while a restore request is in progress. ([#10262](https://github.com/nocobase/nocobase/pull/10262)) by @katherinehhh

  - Fix duplicate backups from async exports ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust

- **[Data source manager]** Prevented clearing a field interface directly from the Configure fields table. ([#10288](https://github.com/nocobase/nocobase/pull/10288)) by @hongboji

- **[File manager]**
  - Fixed file downloads failing after previewing cross-origin images when browser cache entries lack CORS response headers ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
Reference: [File Preview](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/en/file-manager/file-preview/index.md) / [Aliyun OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/en/file-manager/storage/aliyun-oss.md)
  - Fixed shared attachments such as the system logo not loading for authenticated member users ([#10268](https://github.com/nocobase/nocobase/pull/10268)) by @mytharcher

- **[Collection field: Sequence]** Fixed duplicate automatic sequence values after migration when multiple records share the latest creation time ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher

- **[AI employees]**
  - Fixed the untranslated Settings tab in the AI plugin's client-v2 settings pages ([#10234](https://github.com/nocobase/nocobase/pull/10234)) by @cgyrock

  - AI employee actions now support linkage rules for conditional visibility in v2 forms. ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx

- **[UI templates]** Fix the issue where table blocks load data after returning to a page with empty filters ([#9890](https://github.com/nocobase/nocobase/pull/9890)) by @zhangzhonghe

- **[Localization]** Fixed a crash when opening Localization settings with the Lina AI assistant entry. ([#10293](https://github.com/nocobase/nocobase/pull/10293)) by @cgyrock

- **[Workflow]** Fixed an issue where manually executing a workflow with `autoRevision=0` could still create a new revision. ([#10243](https://github.com/nocobase/nocobase/pull/10243)) by @mytharcher

- **[Workflow: JavaScript]** Fixed JavaScript workflow Workers not exiting after scripts returned or asynchronous workflows timed out ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher

- **[Data source: External NocoBase]** Fixed external NocoBase files and attachment fields failing to load in AI workflows by @2013xile

- **[Data source: External SQL Server]** N/A — regression test coverage only by @cgyrock

- **[Data source: External MySQL]** Fixed previously selected external database tables disappearing after adding new tables. by @cgyrock

- **[AI: Knowledge base]** Fixed PGVector knowledge base searches consuming unused PostgreSQL pool connections and creating duplicate pools for different vector tables. by @cgyrock

- **[Migration manager]** Fixed many-to-many through-table migration data after application restarts and classified migration rules as system data by @cgyrock

- **[Template print]**
  - N/A — this PR records a fix target but contains no shipped behavior change. by @hongboji

  - Fixed unwanted spacing between Latin and East Asian text in PDF files generated from DOCX templates. by @jiannx

- **[Workflow: Approval]**
  - Fix missing external data source fields in approval views by @zhangzhonghe

  - Fix missing field values in approval sub-tables by @zhangzhonghe

  - Fix approval comment default values when using RunJS by @zhangzhonghe

  - Fix the issue where removed one-to-many relation records cannot be selected again in approval forms by @zhangzhonghe

  - Allow approval comments to use configurable default values by @zhangzhonghe

- **[App supervisor]** Prevented app creation with database identifiers that do not start with an English letter or contain unsupported characters. by @hongboji

- **[DingTalk]** Fixed DingTalk notification channels losing the selected authenticator when saved from the v2 channel form by @jiannx

- **[Auth: LDAP]** Fixed LDAP login when a user DN mixes UTF-8 escapes with escaped syntax characters such as commas. by @hongboji


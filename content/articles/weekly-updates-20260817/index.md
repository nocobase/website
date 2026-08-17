Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.41

*Release date: 2026-08-16*

### 🚀 Improvements

- **[lock-manager]** Added renewable local lock leases and ensured try-acquired locks are released safely across reuse and errors ([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx
- **[Redis lock adapter]** Added renewable Redis lock leases and made reusable lock handles release safely during contention and errors by @jiannx

### 🐛 Bug Fixes

- **[File manager]** Fix the extra submit step when selecting an existing file in a single-value field ([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe
- **[Collection field: Markdown(Vditor)]** Fix Markdown HTML previews in v2 details blocks under dark themes. ([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh
- **[Collection field: Encryption]** Fixed bulk import failing with `model.changed is not a function` when the collection contains an encryption field by @cgyrock
- **[Workflow: Webhook]** Fixed a 400 error when manually executing a webhook workflow without request headers by @mytharcher

### v2.1.40

*Release date: 2026-08-14*

### 🚀 Improvements

- **[Block: Tree]** Tree filter blocks now support configurable default sorting. ([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix filter forms refreshing automatically in UI edit mode ([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe
  - Use Cascader by default for tree-structured relation fields in v2 filter forms ([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe
  - Fix mobile single-select relation fields not clearing when the selected record is tapped again ([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe
  - Fix the issue where China region fields cannot be added directly to filter forms ([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe
  - Fix JS items incorrectly appearing in form field linkage rule actions ([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust
- **[Workflow: JSON calculation]** Fixed JSON Query jobs losing structured parser errors and displaying `[object Object]` ([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher
- **[Action: Export records]**

  - Fixed a page crash when sorting an edited relation field in Export V2. ([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh
  - Fix table export errors after filtering by multiple relation fields ([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe
- **[Block: Kanban]** Fixed configured content disappearing after reopening a kanban card's detail drawer ([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx
- **[File manager]** Fixed video previews not updating when switching between files ([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher
- **[Action: Import records Pro]**

  - Fixed asynchronously imported records not being associated with the current space by @jiannx
  - Clarified import results by showing the number of newly created records separately from updated records by @mytharcher
- **[Workflow: Approval]**

  - Fix inconsistent subtable column widths in approval details by @zhangzhonghe
  - Add data scope filtering to Client V2 related approval blocks by @zhangzhonghe

### v2.1.39

*Release date: 2026-08-11*

### 🐛 Bug Fixes

- **[client-v2]** Fixed an issue where ctx.form.submit could not correctly submit form data. ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
- **[database]** Fixed prefix indexes on camel-case fields when underscored database naming is enabled ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
- **[Action: Duplicate record]** Improve direct duplication failure feedback in v2 without duplicate API error messages. ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
- **[Record history]** Improved record history write performance for collections with large snapshot tables by @2013xile
- **[Workflow: Approval]** Fix the issue where removed one-to-many relation records cannot be selected again in approval forms by @zhangzhonghe

### v2.1.38

*Release date: 2026-08-10*

### 🚀 Improvements

- **[undefined]** Clarified the default JavaScript Worker concurrency behavior and when to configure a concurrency limit ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
  Reference: [JavaScript node](https://docs.nocobase.com/workflow/nodes/javascript)
- **[Workflow: JavaScript]** JavaScript workflow nodes now queue asynchronous Worker execution and limit per-process Worker concurrency to reduce resource spikes. ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher

### 🐛 Bug Fixes

- **[Flow engine]**

  - Fixed popup record variables and association blocks for custom non-Sequelize data sources ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust
  - Fixed incorrect variable resolution for form field values ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust
- **[File manager]** Fixed file downloads failing after previewing cross-origin images when browser cache entries lack CORS response headers ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
  Reference: [File Preview](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/en/file-manager/file-preview/index.md) / [Aliyun OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/en/file-manager/storage/aliyun-oss.md)

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.17

*Release date: 2026-08-10*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v3.0.0-alpha.9

*Release date: 2026-08-11*

### 🚀 Improvements

- **[cli]** `nb api resource create` now accepts a JSON array for `--values` to create multiple records in a single request. ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
  Reference: [nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/en/api/cli/api/resource/create.md)

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix incorrect editing and display of large decimal values in V2 fields. ([#10330](https://github.com/nocobase/nocobase/pull/10330)) by @katherinehhh
  - Fixed an issue where ctx.form.submit could not correctly submit form data. ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
  - Automatically redirect to an accessible Settings tab when the current tab is unavailable ([#10332](https://github.com/nocobase/nocobase/pull/10332)) by @zhangzhonghe
  - Fixed Kanban column quick create records not inheriting the selected group value ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx
  - Redirect users without Settings access to the first available page ([#10331](https://github.com/nocobase/nocobase/pull/10331)) by @zhangzhonghe
- **[database]** Fixed prefix indexes on camel-case fields when underscored database naming is enabled ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
- **[Block: Gantt]** Fixed custom record colors not being applied to short Gantt task bars ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx
- **[Block: Tree]** Fixed Tree block searches showing placeholder nodes when no business-field records matched ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx
- **[Action: Duplicate record]** Improve direct duplication failure feedback in v2 without duplicate API error messages. ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
- **[Record history]** Improved record history write performance for collections with large snapshot tables by @2013xile
- **[Workflow: Approval]**

  - Fix missing return scope options in Client V2 approval forms by @zhangzhonghe
  - Fix the issue where removed one-to-many relation records cannot be selected again in approval forms by @zhangzhonghe
- **[DingTalk]** Fixed DingTalk notification channels losing the selected authenticator when saved from the v2 channel form by @jiannx

### v3.0.0-alpha.8

*Release date: 2026-08-10*

### 🎉 New Features

- **[client-v2]** Add Date variables and optional formatted output to V2 field-value editors. ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh
- **[Portal manager]** Show an access denied message when users do not have permission to access a Portal ([#10275](https://github.com/nocobase/nocobase/pull/10275)) by @zhangzhonghe
- **[Connect coding agent]** Copy a ready-to-paste prompt from an AI Portal card to connect a coding agent to the instance by @Albert-mah

### 🚀 Improvements

- **[undefined]**

  - Clarified the default JavaScript Worker concurrency behavior and when to configure a concurrency limit ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
    Reference: [JavaScript node](https://docs.nocobase.com/workflow/nodes/javascript)
  - Add a model selection guide with evaluation dimensions and a color-coded model comparison table. ([#10295](https://github.com/nocobase/nocobase/pull/10295)) by @Charls-Wu
- **[cli]** fix: incorrect author identity in nb portal push commits ([#10315](https://github.com/nocobase/nocobase/pull/10315)) by @gchust
- **[Portal manager]**

  - Improve Portal access check efficiency ([#10302](https://github.com/nocobase/nocobase/pull/10302)) by @zhangzhonghe
  - Show a concise placeholder when Portal access cannot be configured directly ([#10301](https://github.com/nocobase/nocobase/pull/10301)) by @zhangzhonghe
- **[Workflow: JavaScript]** JavaScript workflow nodes now queue asynchronous Worker execution and limit per-process Worker concurrency to reduce resource spikes. ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher
- **[Verification]** Add a refresh button to the Verification settings list ([#10299](https://github.com/nocobase/nocobase/pull/10299)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[client-v2]**

  - Show loading feedback when enabling or disabling plugins ([#10310](https://github.com/nocobase/nocobase/pull/10310)) by @zhangzhonghe
  - Hide the retry button while the app is running a command ([#10290](https://github.com/nocobase/nocobase/pull/10290)) by @zhangzhonghe
  - Fix the cancel button language in mobile selection lists ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe
  - Fixed parent item variables resolving to the wrong level when assigning association field values in sub-tables. ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust
  - Fix missing and incorrectly resolved `Current popup` parent record variables in v2 popup-subtable add-new and edit dialogs. ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh
- **[database]** Fixed migration packages omitting many-to-many through-table data after an application restart ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock
- **[data-source-manager]** Fixed formula fields being converted to number fields after synchronizing fields from the database ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile
- **[undefined]** fix the issue unable to create portal from local ([#10304](https://github.com/nocobase/nocobase/pull/10304)) by @gchust
- **[Flow engine]**

  - Fixed incorrect variable resolution for form field values ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust
  - Fixed popup record variables and association blocks for custom non-Sequelize data sources ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust
- **[AI employees]**

  - Fixed the AI employee chat entry briefly appearing while a page is loading or redirecting. ([#10309](https://github.com/nocobase/nocobase/pull/10309)) by @cgyrock
  - AI employee actions now support linkage rules for conditional visibility in v2 forms. ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx
- **[File manager]** Fixed file downloads failing after previewing cross-origin images when browser cache entries lack CORS response headers ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
  Reference: [File Preview](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/en/file-manager/file-preview/index.md) / [Aliyun OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/en/file-manager/storage/aliyun-oss.md)
- **[Action: Batch edit]** Corrected built-in plugin documentation to show that these plugins are enabled by default ([#10314](https://github.com/nocobase/nocobase/pull/10314)) by @hongboji
- **[Portal manager]**

  - Fix compatibility issues when older AI Portals check access permissions ([#10307](https://github.com/nocobase/nocobase/pull/10307)) by @zhangzhonghe
  - Fix incorrect Portal URLs when the name is x or v ([#10305](https://github.com/nocobase/nocobase/pull/10305)) by @zhangzhonghe
  - Keep Portal titles unchanged in role permissions ([#10291](https://github.com/nocobase/nocobase/pull/10291)) by @zhangzhonghe
- **[Backup manager]** Fix duplicate backups from async exports ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust
- **[Workflow]** Disable workflow execution mode selection until a trigger type is selected. ([#10296](https://github.com/nocobase/nocobase/pull/10296)) by @Molunerfinn
- **[Data source: External NocoBase]** Fixed external NocoBase files and attachment fields failing to load in AI workflows by @2013xile
- **[Migration manager]** Fixed many-to-many through-table migration data after application restarts and classified migration rules as system data by @cgyrock
- **[Workflow: Approval]**

  - Fix approval application cards not showing submitted content immediately by @zhangzhonghe
  - Align the V2 approval message template page with the V1 layout and actions by @zhangzhonghe

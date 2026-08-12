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
- **[Template print]** N/A — this PR records a fix target but contains no shipped behavior change. by @hongboji
- **[Workflow: Approval]**

  - Fix approval application cards not showing submitted content immediately by @zhangzhonghe
  - Align the V2 approval message template page with the V1 layout and actions by @zhangzhonghe

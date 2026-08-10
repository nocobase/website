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

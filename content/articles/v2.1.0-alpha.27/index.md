### 🎉 New Features

- **[cli]** Add release command in API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y

- **[undefined]** Add Indonesian and Vietnamese documentation. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn

- **[server]** AI employees can search bundled documentation with Bash commands ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile

- **[AI employees]** LLM provider now supports the Xiaomi MIMO platform ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock

- **[Migration manager]** Add some APIs for nocobase cli by @Andrew1989Y

- **[Backup manager]** Add some APIs for nocobase cli by @Andrew1989Y

### 🚀 Improvements

- **[flow-engine]** Improve block drag layout behavior on v2 pages ([#9264](https://github.com/nocobase/nocobase/pull/9264)) by @zhangzhonghe

- **[undefined]**
  - Align Spanish, Portuguese, Russian, and German documentation with the English source. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn

  - Sync French documentation with the Chinese source. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn

- **[AI employees]**
  - Improved Nathan's RunJS editing tools and reduced lag during long AI chat conversations ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile

  - AI employee category adjustment ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock

- **[Block: Kanban]**
  - Reduced the default kanban column width. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx

  - Improved Calendar and Kanban block creation settings. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx

- **[Workflow: Approval]** Mark association show mode loading from DB as legacy by @mytharcher

### 🐛 Bug Fixes

- **[undefined]**
  - Fix the dependency-and-build workflow so standalone pro plugin checkout failures break CI instead of silently skipping build coverage. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn

  - Fix bloated translation files and align cross-language documentation structure. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn

- **[client-v2]** Fix the issue where `RemoteSelect` not rendering in configuration of bind workflow ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher

- **[flow-engine]** Fixed an issue where system-hidden fields could be selected in form-related variable. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust

- **[ai]** Fix missing category field setup during AI employee registration ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock

- **[client]**
  - Fixed an issue where JS field cells in v2 table blocks could appear blank after filtering or refreshing table data. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx

  - Fix the issue where filter form fields disappear after reopening a popup record selector ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe

  - Preserve null values for empty Data scope variable dependencies in v2 forms. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx

  - rerun JS column rendering when row data changes ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx

- **[database]** Fixed an issue where SQL Server external data source datetime filters could fail ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile

- **[AI employees]**
  - Fix the issue where the action button AI employee list displays developer employees ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock

  - Fix AI employee deepSeek V4 integration error ([#9275](https://github.com/nocobase/nocobase/pull/9275)) by @cgyrock

- **[Block: Gantt]** Add a Gantt block setting to enable drag to reschedule. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx

- **[Block: Tree]** Fix the abnormal display of filter block nodes ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx

- **[Action: Import records]** Fix the issue where failed row index in importing records is not correct ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher

- **[Block: Kanban]** Fixed repeated display of field configuration floating layer ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx

- **[Action: Export records Pro]** Fix the issue where auto mode not works by @mytharcher

- **[Migration manager]** Fix `migration:create` returning `taskId` from the async task record. by @Andrew1989Y

- **[Workflow: Approval]**
  - Fix approval execute timing so `latestExecutionId` is synced after approval commit by @mytharcher

  - Fix type error by @mytharcher


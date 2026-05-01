### 🎉 New Features

- **[AI employees]** LLM provider now supports the Xiaomi MIMO platform ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock

### 🚀 Improvements

- **[flow-engine]** Improve block drag layout behavior on v2 pages ([#9264](https://github.com/nocobase/nocobase/pull/9264)) by @zhangzhonghe

- **[AI employees]** AI employee category adjustment ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock

- **[Workflow: Approval]** Mark association show mode loading from DB as legacy by @mytharcher

### 🐛 Bug Fixes

- **[database]** Fixed an issue where SQL Server external data source datetime filters could fail ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile

- **[client]**
  - Preserve null values for empty Data scope variable dependencies in v2 forms. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx

  - rerun JS column rendering when row data changes ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx

  - Fix the issue where filter form fields disappear after reopening a popup record selector ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe

  - Fixed an issue where JS field cells in v2 table blocks could appear blank after filtering or refreshing table data. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx

- **[flow-engine]** Fixed an issue where system-hidden fields could be selected in form-related variable. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust

- **[Action: Import records]** Fix the issue where failed row index in importing records is not correct ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher

- **[Block: Gantt]** Add a Gantt block setting to enable drag to reschedule. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx

- **[AI employees]** Fix AI employee deepSeek V4 integration error ([#9275](https://github.com/nocobase/nocobase/pull/9275)) by @cgyrock

- **[Action: Export records Pro]** Fix the issue where auto mode not works by @mytharcher

- **[Workflow: Approval]**
  - Fix type error by @mytharcher

  - Fix approval execute timing so `latestExecutionId` is synced after approval commit by @mytharcher


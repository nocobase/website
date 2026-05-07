Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/en/blog/v2.0.49)

*Release date: 2026-05-06*

### 🚀 Improvements

- **[undefined]** Add Feishu failure notification for manual release workflows ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn

### 🐛 Bug Fixes

- **[Data source: Main]** Prevent crash when fields is undefined during collection loading ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI templates]** Fixed an issue where the popup template list failed to correctly load available templates. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[AI employees]** Fix the issue of occasional errors when AI employee use the DeepSeek v4 model ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
- **[File manager]** Improved preview file download error handling ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
- **[Workflow: Approval]** Fix the issue where filter and other query parameters now work in API of listing available approval workflows by @mytharcher

### [v2.0.48](https://www.nocobase.com/en/blog/v2.0.48)

*Release date: 2026-05-04*

### 🐛 Bug Fixes

- **[AI employees]** Fix the issue where the action button AI employee list displays developer employees ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
- **[Workflow: Approval]**

  - Fix the issue where file in original application no reloaded by @mytharcher
  - Support to parse some client variables in approval actions by @mytharcher

### [v2.0.47](https://www.nocobase.com/en/blog/v2.0.47)

*Release date: 2026-05-01*

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

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/en/blog/v2.1.0-beta.25)

*Release date: 2026-05-06*

### 🎉 New Features

- **[cli]** Add release command in API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
- **[undefined]** Add Indonesian and Vietnamese documentation. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
- **[AI employees]** LLM provider now supports the Xiaomi MIMO platform ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock
- **[Migration manager]** Add some APIs for nocobase cli by @Andrew1989Y
- **[Backup manager]** Add some APIs for nocobase cli by @Andrew1989Y

### 🚀 Improvements

- **[undefined]**

  - Add Feishu failure notification for manual release workflows([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
  - Align Spanish, Portuguese, Russian, and German documentation with the English source. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn
  - Sync French documentation with the Chinese source. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn
- **[IdP: OAuth]** OAuth sessions now use the same expiration settings as the system token policy ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile
- **[Block: Kanban]**

  - Reduced the default kanban column width. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx
  - Improved Calendar and Kanban block creation settings. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx
- **[AI employees]** AI employee category adjustment ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock
- **[Workflow: Approval]** Mark association show mode loading from DB as legacy by @mytharcher

### 🐛 Bug Fixes

- **[undefined]**

  - Fix the dependency-and-build workflow so standalone pro plugin checkout failures break CI instead of silently skipping build coverage. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn
  - Fix bloated translation files and align cross-language documentation structure. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn
- **[cli]** Fixed CLI boolean options so they can be disabled with negated flags ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
- **[client-v2]**

  - Fixed remote plugin loading so plugin URLs that already end with `.js` are not resolved to duplicate `.js.js` paths. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
  - Fix the issue where `RemoteSelect` not rendering in configuration of bind workflow ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher
- **[ai]** Fix missing category field setup during AI employee registration ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock
- **[flow-engine]** Fixed an issue where system-hidden fields could be selected in form-related variable. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust
- **[client]**

  - Fixed an issue where JS field cells in v2 table blocks could appear blank after filtering or refreshing table data. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx
  - Preserve null values for empty Data scope variable dependencies in v2 forms. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx
  - Fix the issue where filter form fields disappear after reopening a popup record selector ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe
  - rerun JS column rendering when row data changes ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx
- **[database]** Fixed an issue where SQL Server external data source datetime filters could fail ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile
- **[AI employees]**

  - Fix the issue of occasional errors when AI employee use the DeepSeek v4 model ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  - Fix the issue where the workflow AI employee node  clears skills after switching AI employees ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
  - Fix the issue where the action button AI employee list displays developer employees ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
- **[Data source: Main]** Prevent crash when fields is undefined during collection loading ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI templates]** Fixed an issue where the popup template list failed to correctly load available templates. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[File manager]** Improved preview file download error handling ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
- **[Block: Tree]** Fix the abnormal display of filter block nodes ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx
- **[Block: Gantt]** Add a Gantt block setting to enable drag to reschedule. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx
- **[Block: Kanban]** Fixed repeated display of field configuration floating layer ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx
- **[Action: Import records]** Fix the issue where failed row index in importing records is not correct ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher
- **[Action: Export records Pro]** Fix the issue where auto mode not works by @mytharcher
- **[Migration manager]** Fix `migration:create` returning `taskId` from the async task record. by @Andrew1989Y
- **[Workflow: Approval]**

  - Fix the issue where filter and other query parameters now work in API of listing available approval workflows by @mytharcher
  - Fix the issue where file in original application no reloaded by @mytharcher
  - Fix type error by @mytharcher
  - Support to parse some client variables in approval actions by @mytharcher
  - Fix approval execute timing so `latestExecutionId` is synced after approval commit by @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Release date: 2026-05-06*

### 🚀 Improvements

- **[undefined]** Add Feishu failure notification for manual release workflows ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
- **[IdP: OAuth]** OAuth sessions now use the same expiration settings as the system token policy ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile

### 🐛 Bug Fixes

- **[client-v2]** Fixed remote plugin loading so plugin URLs that already end with `.js` are not resolved to duplicate `.js.js` paths. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
- **[cli]** Fixed CLI boolean options so they can be disabled with negated flags ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
- **[AI employees]**

  - Fix the issue of occasional errors when AI employee use the DeepSeek v4 model ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  - Fix the issue where the workflow AI employee node  clears skills after switching AI employees ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
- **[Data source: Main]** Prevent crash when fields is undefined during collection loading ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI templates]** Fixed an issue where the popup template list failed to correctly load available templates. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[Block: Kanban]** Fixed kanban associated blocks using unresolved runtime resource params in popup or secondary-page contexts. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
- **[Workflow: Approval]** Fix the issue where filter and other query parameters now work in API of listing available approval workflows by @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/en/blog/v2.1.0-alpha.29)

*Release date: 2026-05-04*

### 🐛 Bug Fixes

- **[File manager]** Improved preview file download error handling ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
- **[Workflow: Approval]** Support to parse some client variables in approval actions by @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/en/blog/v2.1.0-alpha.28)

*Release date: 2026-05-04*

### 🐛 Bug Fixes

- **[Workflow: Approval]** Fix the issue where file in original application no reloaded by @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/en/blog/v2.1.0-alpha.27)

*Release date: 2026-05-03*

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

### 🎉 New Features

- **[Calendar]** calendar block v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx

- **[AI employees]** Improve AI employees' ability to parse uploaded documents ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

- **[Block: Tree]** Add tree filter block ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx

- **[Email manager]** gmail supports sending emails with aliases by @jiannx

### 🚀 Improvements

- **[undefined]**
  - Add Arabic translation for guide section and navigation ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane

  - Sync translated environment-variable and cluster-mode docs with the latest Chinese updates. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher

  - Add Arabic translation for documentation homepage ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765

  - Added TOC consistency across localized READMEs ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765

  - Add Table of Contents to French README ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane

  - Docs: add Arabic translation for get-started introduction pages ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765

- **[logger]** Add `referer` information to request logs ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile

- **[client]** add form required verification switch ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx

- **[database]** Optimize repository count queries by only enabling distinct when includes are present. ([#9094](https://github.com/nocobase/nocobase/pull/9094)) by @mytharcher

- **[Departments]** Display the `parentId` foreign key field of department collection in the UI ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile

- **[AI employees]** After AI employee block selection, fill form attachment into upload area ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock

- **[Workflow: Manual node]** Use `simplePagination` on workflow tasks related collections for better list performance ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher

- **[Workflow: Approval]** Use `simplePagination` on `approvals` and `approvalRecords` collection for better list performance by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where updating sub-table values through field assignment would result in data contamination. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust

  - Fix the oversized height and width of tabs in page configuration mode ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe

  - Fixed an issue where the association field component was incorrect in the field value settings. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust

  - Fixed the optional options of single-select fields in field rule configuration are empty ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx

  - Fixed incorrect default value settings for sub table in form. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust

  - fix subtable adds many-to-many field error ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx

  - Fixed an issue where the record pickup popup from a sub-table’s selection button could not correctly resolve parent item variable values. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust

- **[data-source-manager]**
  - Fixed an issue where sequence fields could be changed to string after database synchronization ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile

  - Fixed file collection field sync removing `preview` field ([#9129](https://github.com/nocobase/nocobase/pull/9129)) by @2013xile

- **[database]** Fixed SQL injection risks in recursive tree eager loading and scoped sort initialization ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile

- **[undefined]** Fix render error in custom resource block when resource does not exist ([#9095](https://github.com/nocobase/nocobase/pull/9095)) by @Molunerfinn

- **[utils]** Add security control for server HTTP request sending, to avoid possible SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
Reference: [Environment variables](https://docs.nocobase.com/get-started/installation/env)
- **[flow-engine]**
  - Fixed the problem that many-to-one fields from external data sources cannot be added in the table block ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx

  - Fix the random observer error when page visibility changes ([#9067](https://github.com/nocobase/nocobase/pull/9067)) by @zhangzhonghe

- **[Data source: Main]** Fixed field sync from database for connected views when the collection name differs from the database view name ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile

- **[File manager]** Return null when preview URL is missing ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765

- **[Departments]**
  - Fixed missing or stale main department values after saving user departments ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile

  - Fixed department lists in department management not following the `sort` field order ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile

- **[Workflow: JavaScript]** Fix security issue of script executing in `node:vm` mode ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

- **[Collection: SQL]** Fixed missing SQL validation on SQL collection updates ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile

- **[Data visualization]** Fixed chart block sorting to use aliased measures and dimensions in aggregated queries ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile

- **[Notification: In-app message]** Fix the issue where receiver select component works not correctly ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher

- **[AI employees]** Fix the issue where the baseURL settings of google-gen-ai's LLM service does not take effect ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock

- **[Notification manager]** Optimize in-app notification sending performance in workflow scenarios ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher

- **[Access control]** Fixed an issue where clearing relation values with an empty array could fail under ACL ([#9059](https://github.com/nocobase/nocobase/pull/9059)) by @2013xile

- **[Collection field: Code]** Correct the UI interface of the code fields ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile

- **[Email manager]** Remove form closing prompt after email is sent successfully by @jiannx


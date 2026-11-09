Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://nocode.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.41

*Release date: 2026-11-08*

### 🚀 Improvements

- **[Departments]** Added a schema-only migration option for departments and department-role bindings, allowing existing target records to be preserved. ([#11343](https://github.com/nocobase/nocobase/pull/11343)) by @zhouyanliang

### 🐛 Bug Fixes

- **[client-v2]** Fixed partial-text search when using string-valued formula fields as labels in v2 association dropdowns and cascaders. ([#11370](https://github.com/nocobase/nocobase/pull/11370)) by @hongboji
- **[File manager]** Fixed blank PDF previews caused by missing JPEG2000 image decoder resources in the v2 file manager. ([#11308](https://github.com/nocobase/nocobase/pull/11308)) by @mytharcher

### v2.2.40

*Release date: 2026-11-04*

### 🐛 Bug Fixes

- **[File manager]** Fixed audio previews continuing to play the previously opened file when switching attachments or reopening the preview for another file ([#11328](https://github.com/nocobase/nocobase/pull/11328)) by @zhouyanliang
- **[Backup manager]** Fixed missing feedback during large backup downloads by using short-lived links and native browser downloads. ([#11324](https://github.com/nocobase/nocobase/pull/11324)) by @gchust

### v2.2.39

*Release date: 2026-11-04*

### 🐛 Bug Fixes

- **[Data source manager]** Fixed external data source collection filtering returning no results when multiple conditions target the same field. ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang
- **[Auth: API keys]** Fixed API keys gaining permissions from the creator’s other roles when the system uses roles union only. API keys now retain their assigned role’s permissions and data scopes. ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang
- **[Workflow]** Fixed password fields being unavailable for assignment in workflow v2 Create record and Update record nodes. ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang
- **[Notification manager]** Fixed workflow notification nodes being unable to find or select notification channels beyond the first page. ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang
- **[AI employees]** Fixed AI employees reporting interrupted tool execution when reading JavaScript block content ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.21

*Release date: 2026-11-08*

### 🚀 Improvements

- **[Departments]** Added a schema-only migration option for departments and department-role bindings, allowing existing target records to be preserved. ([#11343](https://github.com/nocobase/nocobase/pull/11343)) by @zhouyanliang

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed the mobile topbar covering profile and password forms after opening them on narrow screens in the legacy and v2 clients. ([#11347](https://github.com/nocobase/nocobase/pull/11347)) by @zhouyanliang
  - Fixed partial-text search when using string-valued formula fields as labels in v2 association dropdowns and cascaders. ([#11370](https://github.com/nocobase/nocobase/pull/11370)) by @hongboji
- **[Backup manager]** Fixed missing feedback during large backup downloads by using short-lived links and native browser downloads. ([#11324](https://github.com/nocobase/nocobase/pull/11324)) by @gchust
- **[File manager]**
  - Fixed blank PDF previews caused by missing JPEG2000 image decoder resources in the v2 file manager. ([#11308](https://github.com/nocobase/nocobase/pull/11308)) by @mytharcher
  - Fixed audio previews continuing to play the previously opened file when switching attachments or reopening the preview for another file ([#11328](https://github.com/nocobase/nocobase/pull/11328)) by @zhouyanliang
- **[Notification manager]** Fixed workflow notification nodes being unable to find or select notification channels beyond the first page. ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang
- **[Data source manager]** Fixed external data source collection filtering returning no results when multiple conditions target the same field. ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang
- **[Workflow]** Fixed password fields being unavailable for assignment in workflow v2 Create record and Update record nodes. ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang
- **[AI employees]** Fixed AI employees reporting interrupted tool execution when reading JavaScript block content ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang
- **[Auth: API keys]** Fixed API keys gaining permissions from the creator’s other roles when the system uses roles union only. API keys now retain their assigned role’s permissions and data scopes. ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang

### v2.3.0-beta.20

*Release date: 2026-11-03*

### 🐛 Bug Fixes

- **[Collection: SQL]** Fixed the SQL collection preview crashing when a query returns JSON or JSONB objects and arrays ([#11265](https://github.com/nocobase/nocobase/pull/11265)) by @hongboji
- **[Record history]** Fixed record history blocks still requesting history data after form submit when the block is hidden or the current role has no permission to view it by @hongboji
- **[Data source: External Oracle]** Fixed Oracle external data sources failing to create records when a table primary key is defined as an IDENTITY column, because the primary key and auto-increment attributes were not detected during table sync by @hongboji
- **[Feishu / Lark]** Fix Feishu message templates saving without effect: message fields were bound outside the template column and silently dropped by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.17

*Release date: 2026-11-08*

### 🚀 Improvements

- **[Departments]** Added a schema-only migration option for departments and department-role bindings, allowing existing target records to be preserved. ([#11343](https://github.com/nocobase/nocobase/pull/11343)) by @zhouyanliang

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed partial-text search when using string-valued formula fields as labels in v2 association dropdowns and cascaders. ([#11370](https://github.com/nocobase/nocobase/pull/11370)) by @hongboji
  - Fixed the mobile topbar covering profile and password forms after opening them on narrow screens in the legacy and v2 clients. ([#11347](https://github.com/nocobase/nocobase/pull/11347)) by @zhouyanliang
- **[Notification manager]** Fixed workflow notification nodes being unable to find or select notification channels beyond the first page. ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang
- **[Data source manager]** Fixed external data source collection filtering returning no results when multiple conditions target the same field. ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang
- **[File manager]**
  - Fixed blank PDF previews caused by missing JPEG2000 image decoder resources in the v2 file manager. ([#11308](https://github.com/nocobase/nocobase/pull/11308)) by @mytharcher
  - Fixed audio previews continuing to play the previously opened file when switching attachments or reopening the preview for another file ([#11328](https://github.com/nocobase/nocobase/pull/11328)) by @zhouyanliang
- **[Auth: API keys]** Fixed API keys gaining permissions from the creator’s other roles when the system uses roles union only. API keys now retain their assigned role’s permissions and data scopes. ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang
- **[Workflow]** Fixed password fields being unavailable for assignment in workflow v2 Create record and Update record nodes. ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang
- **[AI employees]** Fixed AI employees reporting interrupted tool execution when reading JavaScript block content ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang
- **[Backup manager]** Fixed missing feedback during large backup downloads by using short-lived links and native browser downloads. ([#11324](https://github.com/nocobase/nocobase/pull/11324)) by @gchust

### v2.4.0-alpha.16

*Release date: 2026-11-03*

### 🐛 Bug Fixes

- **[Collection: SQL]** Fixed the SQL collection preview crashing when a query returns JSON or JSONB objects and arrays ([#11265](https://github.com/nocobase/nocobase/pull/11265)) by @hongboji
- **[Record history]** Fixed record history blocks still requesting history data after form submit when the block is hidden or the current role has no permission to view it by @hongboji
- **[Data source: External Oracle]** Fixed Oracle external data sources failing to create records when a table primary key is defined as an IDENTITY column, because the primary key and auto-increment attributes were not detected during table sync by @hongboji
- **[Feishu / Lark]** Fix Feishu message templates saving without effect: message fields were bound outside the template column and silently dropped by @chenzhizdt

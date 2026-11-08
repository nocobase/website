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

- **[Auth: API keys]** Fixed API keys gaining permissions from the creator's other roles when the system uses roles union only. API keys now retain their assigned role's permissions and data scopes. ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang

- **[Workflow]** Fixed password fields being unavailable for assignment in workflow v2 Create record and Update record nodes. ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang

- **[AI employees]** Fixed AI employees reporting interrupted tool execution when reading JavaScript block content ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang

- **[Backup manager]** Fixed missing feedback during large backup downloads by using short-lived links and native browser downloads. ([#11324](https://github.com/nocobase/nocobase/pull/11324)) by @gchust


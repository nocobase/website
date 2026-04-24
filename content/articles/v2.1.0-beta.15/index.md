### 🎉 New Features

- **[Block: Kanban]** kanban block v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) by @jiannx

- **[Auth: OIDC]** mapping attribute support custom fields by @chenzhizdt

- **[DingTalk]** DingTalk: notifications, in-DingTalk auto login, and user sync. by @chenzhizdt

### 🚀 Improvements

- **[build]** Knowledge base supports batch uploading files via ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) by @cgyrock

- **[ai]** AI employee and knowledge base now support additional file types for upload (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) by @cgyrock

- **[Workflow]** Improve execution list performance ([#9214](https://github.com/nocobase/nocobase/pull/9214)) by @mytharcher

- **[AI: Knowledge base]** Knowledge base supports batch uploading files via ZIP by @cgyrock

- **[Workflow: Approval]** Add indexes on approval records columns to improve performance on list and submit actions by @mytharcher

### 🐛 Bug Fixes

- **[database]** Fixed an issue where decimal fields with validation could reject valid numeric input ([#9204](https://github.com/nocobase/nocobase/pull/9204)) by @2013xile

- **[client]**
  - Fix the issue where the Add tab button is too close to the right edge ([#9177](https://github.com/nocobase/nocobase/pull/9177)) by @zhangzhonghe

  - Fixed popup relation blocks and popup record variables using the wrong record identifier when collections use a non-primary unique key ([#9191](https://github.com/nocobase/nocobase/pull/9191)) by @2013xile

  - Fixed the issue where default value will not take effect after creating record. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) by @gchust

- **[data-source-manager]**
  - Fixed nullable field sync ([#9189](https://github.com/nocobase/nocobase/pull/9189)) by @2013xile

  - Fix for percentage fields being reset to numeric ​​when resynchronizing external data sources ([#9178](https://github.com/nocobase/nocobase/pull/9178)) by @jiannx

- **[AI employees]**
  - Fix the issue of missing URL field values for attachments in AI employee form selections. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) by @cgyrock

  - Fix issue where AI employees cannot fill relation field values in forms. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) by @cgyrock

- **[Users]** Fixed dynamically configured fields in Edit profile not loading the latest user data ([#9205](https://github.com/nocobase/nocobase/pull/9205)) by @2013xile

- **[Calendar]** not register calendar actions to other blocks ([#9200](https://github.com/nocobase/nocobase/pull/9200)) by @jiannx

- **[Departments]** Fixed an issue where repeated department synchronization could not update department sort order ([#9173](https://github.com/nocobase/nocobase/pull/9173)) by @2013xile

- **[Workflow: JavaScript]** Fix security issue of script executing in `node:vm` mode ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

- **[Data source manager]** Fixed an issue where grouped sorting on external data source sort fields could not be cleared ([#9203](https://github.com/nocobase/nocobase/pull/9203)) by @2013xile

- **[Multi-space]** Fixed the error of not finding collection in space permission verification by @jiannx

- **[AI: Knowledge base]** Fix issue where vector database is not synced when deleting knowledge base documents. by @cgyrock

- **[Workflow: Approval]** Fix approval reassignee search to query users beyond the first 200 candidates by @zhangzhonghe

- **[WeCom]** Fixed missing department order when synchronizing departments from WeCom by @2013xile


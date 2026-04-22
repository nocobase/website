### 🎉 New Features

- **[Auth: OIDC]** mapping attribute support custom fields by @chenzhizdt

- **[DingTalk]** DingTalk: notifications, in-DingTalk auto login, and user sync. by @chenzhizdt

### 🚀 Improvements

- **[ai]** AI employee and knowledge base now support additional file types for upload (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) by @cgyrock

- **[undefined]** Add Arabic translation for guide section and navigation ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane

### 🐛 Bug Fixes

- **[data-source-manager]** Fix for percentage fields being reset to numeric ​​when resynchronizing external data sources ([#9178](https://github.com/nocobase/nocobase/pull/9178)) by @jiannx

- **[client]**
  - Fixed the issue where default value will not take effect after creating record. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) by @gchust

  - Fix the issue where the Add tab button is too close to the right edge ([#9177](https://github.com/nocobase/nocobase/pull/9177)) by @zhangzhonghe

- **[Departments]** Fixed an issue where repeated department synchronization could not update department sort order ([#9173](https://github.com/nocobase/nocobase/pull/9173)) by @2013xile

- **[Data source: Main]** Fixed field sync from database for connected views when the collection name differs from the database view name ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile

- **[Workflow: JavaScript]** Fix security issue of script executing in `node:vm` mode ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

- **[AI: Knowledge base]** Fix issue where vector database is not synced when deleting knowledge base documents. by @cgyrock

- **[WeCom]** Fixed missing department order when synchronizing departments from WeCom by @2013xile


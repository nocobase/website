### 🐛 Bug Fixes

- **[Data source manager]** Fixed external data source collection filtering returning no results when multiple conditions target the same field. ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang

- **[Auth: API keys]** Fixed API keys gaining permissions from the creator's other roles when the system uses roles union only. API keys now retain their assigned role's permissions and data scopes. ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang

- **[Workflow]** Fixed password fields being unavailable for assignment in workflow v2 Create record and Update record nodes. ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang

- **[Notification manager]** Fixed workflow notification nodes being unable to find or select notification channels beyond the first page. ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang

- **[AI employees]** Fixed AI employees reporting interrupted tool execution when reading JavaScript block content ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang


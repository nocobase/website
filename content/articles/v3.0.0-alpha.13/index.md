### 🐛 Bug Fixes

- **[client-v2]** Fix a render error when switching a v2 association field to popup record selection. ([#10419](https://github.com/nocobase/nocobase/pull/10419)) by @katherinehhh

- **[Workflow]**
  - Fix schedule workflows in static mode running one more time after `endsOn` ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera

  - Improve workflow task detail handling on mobile by using a full-width Drawer and responsive task-center presentation. ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher

  - Optimized pending workflow job recovery by adding a composite index on job status and ID. ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher

- **[Public forms]** Fix duplicate Submit actions in V2 regular form configuration when Public Forms is enabled. ([#10417](https://github.com/nocobase/nocobase/pull/10417)) by @katherinehhh

- **[Notification manager]** Fix workflow user recipient variables displaying `Variable parsing failed` and unify user selectors across workflow nodes. ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher

- **[AI LLM: GigaChat]** Fixed an application startup error on iOS 15.6 and earlier when the GigaChat AI provider is enabled ([#10418](https://github.com/nocobase/nocobase/pull/10418)) by @cgyrock

- **[AI: Knowledge base]** Fixed AI employees incorrectly reporting no knowledge-base access for root users by @hongboji

- **[Multi-space]** File and preview links from space-scoped file collections now retain the active space context, preventing incorrect 404 responses when users open them. by @jiannx

- **[Workflow: Approval]**
  - Adapted approval task details and remote forms to narrow mobile viewports. by @mytharcher

  - Fixed the approval trigger-variable form not rendering for subflow nodes on v1 workflow pages. by @mytharcher

  - Fix approval assignee variables displaying `Variable parsing failed` and reuse the shared workflow user selector. by @mytharcher

- **[WeCom]** Fixed WeCom automatic login lifecycle and notification form compatibility in client-v2. by @chenzhizdt

- **[DingTalk]** Fixed an issue where DingTalk Stream mode synchronization sources could not be submitted in the v1 client. by @chenzhizdt


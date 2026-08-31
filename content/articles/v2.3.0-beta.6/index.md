### 🐛 Bug Fixes

- **[Workflow]**
  - Optimized pending workflow job recovery by adding a composite index on job status and ID. ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher

  - Fix schedule workflows in static mode running one more time after `endsOn` ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera

  - Improve workflow task detail handling on mobile by using a full-width Drawer and responsive task-center presentation. ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher

- **[Notification manager]** Fix workflow user recipient variables displaying `Variable parsing failed` and unify user selectors across workflow nodes. ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher

- **[Workflow: Approval]**
  - Fix approval assignee variables displaying `Variable parsing failed` and reuse the shared workflow user selector. by @mytharcher

  - Adapted approval task details and remote forms to narrow mobile viewports. by @mytharcher

- **[DingTalk]** Fixed an issue where DingTalk Stream mode synchronization sources could not be submitted in the v1 client. by @chenzhizdt


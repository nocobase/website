### 🚀 Improvements

- **[cli]** `nb api resource create` now accepts a JSON array for `--values` to create multiple records in a single request. ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
Reference: [nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/en/api/cli/api/resource/create.md)
### 🐛 Bug Fixes

- **[client-v2]**
  - Fix incorrect editing and display of large decimal values in V2 fields. ([#10330](https://github.com/nocobase/nocobase/pull/10330)) by @katherinehhh

  - Fixed an issue where ctx.form.submit could not correctly submit form data. ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust

  - Automatically redirect to an accessible Settings tab when the current tab is unavailable ([#10332](https://github.com/nocobase/nocobase/pull/10332)) by @zhangzhonghe

  - Fixed Kanban column quick create records not inheriting the selected group value ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx

  - Redirect users without Settings access to the first available page ([#10331](https://github.com/nocobase/nocobase/pull/10331)) by @zhangzhonghe

- **[database]** Fixed prefix indexes on camel-case fields when underscored database naming is enabled ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile

- **[Block: Gantt]** Fixed custom record colors not being applied to short Gantt task bars ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx

- **[Block: Tree]** Fixed Tree block searches showing placeholder nodes when no business-field records matched ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx

- **[Action: Duplicate record]** Improve direct duplication failure feedback in v2 without duplicate API error messages. ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh

- **[Record history]** Improved record history write performance for collections with large snapshot tables by @2013xile

- **[Workflow: Approval]**
  - Fix missing return scope options in Client V2 approval forms by @zhangzhonghe

  - Fix the issue where removed one-to-many relation records cannot be selected again in approval forms by @zhangzhonghe

- **[DingTalk]** Fixed DingTalk notification channels losing the selected authenticator when saved from the v2 channel form by @jiannx


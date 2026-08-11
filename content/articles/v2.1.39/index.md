### 🐛 Bug Fixes

- **[client-v2]** Fixed an issue where ctx.form.submit could not correctly submit form data. ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust

- **[database]** Fixed prefix indexes on camel-case fields when underscored database naming is enabled ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile

- **[Action: Duplicate record]** Improve direct duplication failure feedback in v2 without duplicate API error messages. ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh

- **[Record history]** Improved record history write performance for collections with large snapshot tables by @2013xile

- **[Workflow: Approval]** Fix the issue where removed one-to-many relation records cannot be selected again in approval forms by @zhangzhonghe


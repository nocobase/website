### 🐛 修复

- **[client-v2]** 修复 ctx.form.submit 无法正确提交表单数据的问题。 ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust

- **[database]** 修复启用数据库下划线命名时驼峰字段前缀索引创建失败的问题 ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile

- **[操作：复制记录]** 优化 v2 直接复制失败提示，避免重复显示 API 错误信息。 ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh

- **[历史记录]** 提升大规模快照表场景下的历史记录写入性能 by @2013xile

- **[工作流：审批]** 修复审批表单中删除一对多关系记录后无法重新选择的问题 by @zhangzhonghe


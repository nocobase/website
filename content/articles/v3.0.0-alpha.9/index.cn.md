### 🚀 优化

- **[cli]** `nb api resource create` 的 `--values` 支持传 JSON 数组，一次请求创建多条记录。 ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
参考文档：[nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/cn/api/cli/api/resource/create.md)
### 🐛 修复

- **[client-v2]**
  - 修复 V2 字段编辑和显示超大 decimal 数值不正确的问题。 ([#10330](https://github.com/nocobase/nocobase/pull/10330)) by @katherinehhh

  - 修复 ctx.form.submit 无法正确提交表单数据的问题。 ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust

  - 当前 Settings 页签无权限时自动跳转到可访问页签 ([#10332](https://github.com/nocobase/nocobase/pull/10332)) by @zhangzhonghe

  - 修复看板列快捷创建记录时未继承所选分组值的问题 ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx

  - 无设置权限时跳转到首个可访问页面 ([#10331](https://github.com/nocobase/nocobase/pull/10331)) by @zhangzhonghe

- **[database]** 修复启用数据库下划线命名时驼峰字段前缀索引创建失败的问题 ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile

- **[区块：甘特图]** 修复甘特图短任务条未使用记录自定义颜色的问题 ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx

- **[区块：树]** 修复 Tree 区块搜索无匹配业务字段记录时仍显示占位节点的问题 ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx

- **[操作：复制记录]** 优化 v2 直接复制失败提示，避免重复显示 API 错误信息。 ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh

- **[历史记录]** 提升大规模快照表场景下的历史记录写入性能 by @2013xile

- **[工作流：审批]**
  - 修复 Client V2 审批表单返回范围选项不显示的问题 by @zhangzhonghe

  - 修复审批表单中删除一对多关系记录后无法重新选择的问题 by @zhangzhonghe

- **[钉钉]** 修复在 v2 渠道表单中保存钉钉通知渠道时丢失所选认证器的问题 by @jiannx


### 🐛 修复

- **[数据表: SQL]** 修复 SQL 表预览在查询结果包含 JSON/JSONB 对象或数组时渲染崩溃的问题 ([#11265](https://github.com/nocobase/nocobase/pull/11265)) by @hongboji

- **[历史记录]** 修复历史记录区块在隐藏或当前角色无查看权限时，表单提交后仍会请求历史数据的问题 by @hongboji

- **[数据源：外部 Oracle]** 修复外部 Oracle 数据源的表主键为 IDENTITY 列时，表同步未识别主键与自增属性、导致新增记录提示主键不能为空的问题 by @hongboji

- **[飞书 / Lark]** 修复飞书消息模板保存不生效：消息字段绑定在模板列之外，保存时被静默丢弃 by @chenzhizdt


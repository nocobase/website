### 🎉 新特性

- **[AI 员工]** 支持在子表格弹窗中添加 AI 员工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile

- **[AI: MCP 服务器]** 新增 MCP 服务器插件，支持通过 MCP 搭建 NocoBase 系统并支持业务流程。 ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile

### 🚀 优化

- **[undefined]** README.zh-CN.md ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 修复

- **[database]** 修复服务端日期字段校验问题 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile

- **[client]**
  - 修复外部数据源下连接数据区块时不显示可连接字段的问题 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe

  - 修复添加数据区块及刷新页面时会触发两次刷新的问题。 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust

  - 修复部分字段的默认值刷新页面后不生效的问题。 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust

  - 修复表格区块高度无效 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx

- **[本地化]**
  - localizationTexts:missing 接口权限异常 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx

  - 页面非编辑状态不提交未找到的词条 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx

- **[表单草稿]** 修复多次打开弹窗时表单草稿数据丢失的问题。 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust

- **[UI 模板]** 修复编辑表单区块和详情区块模板报错的问题。 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust

- **[AI: 知识库]** 防止使用中的向量库，向量存储被删除 by @cgyrock

- **[操作：导入记录 Pro]** 修复导入配置中重复依据字段无法多选 by @jiannx

- **[邮件管理]** 回复和回复全部的收件人调整，修复表格字段添加异常等问题 by @jiannx

- **[迁移管理]** 修复系统表再自定义规则无法选中问题 by @cgyrock


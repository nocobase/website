### 🚀 优化

- **[client]** 增强部分 runjs 内置函数的自动补全。 ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust

- **[undefined]** 更新嵌入 NocoBase 插件的开源版使用说明 ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
参考文档：[嵌入 NocoBase](https://docs.nocobase.com/cn/integration/embed/)
### 🐛 修复

- **[flow-engine]**
  - 修复为子表单设置字段值时页面卡死的问题。 ([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust

  - 修复切换 UI 配置模式开关后弹窗内部存在旧 UI 数据的问题。 ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust

- **[client]**
  - 修复表格行操作联动规则不正确的问题。 ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust

  - 修复移动端关系字段选择数据后不显示的问题 ([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe

  - 修复v2 表单切换字段显示状态后字段变为只读的问题 ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh

- **[cli]** 修复 nginx 模板，使 `.mjs` 静态资源以 JavaScript MIME 类型返回。 ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher

- **[database]** 修复导入纯数字密码值可能失败的问题 ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile

- **[AI 员工]** 修复 AI 提供商 base URL 校验问题。 ([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock

- **[前端流引擎]**
  - 修复弹窗标签页拖动调整位置不生效的问题。 ([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust

  - 修复复制模板后修改区块内容可能会影响原始区块内容的问题。 ([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust

- **[通知：站内信]** 修复站内消息频道时间戳过滤条件中的 SQL 注入风险。 ([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher

- **[授权设置]** 修复许可证设置页面在 pkg 登录检查缓慢或不可达时长时间卡住的问题 ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji

- **[工作流：JavaScript 节点]** 明确工作流 JavaScript 模块支持模式为非安全模式，不能作为权限边界 ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
参考文档：[工作流 JavaScript 节点](docs/docs/cn/workflow/nodes/javascript.md)
- **[权限控制]** 修复联合角色作为默认角色时首次登录权限不完整的问题 ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile

- **[文件管理器]** 修复本地文件存储路径校验，阻止不安全路径逃逸出配置的存储根目录。 ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher

- **[密码策略]** 修复密码策略校验纯数字密码值时可能失败的问题 by @2013xile


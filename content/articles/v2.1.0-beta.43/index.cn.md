### 🎉 新特性

- **[client-v2]** 新增 `TypedVariableInput` 组件，让邮件插件 v2 的 SMTP 端口和安全模式等字段既能填类型化常量，也能填 `{{ $env.X }}` 变量。 ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn

- **[权限控制]** 将用户与角色权限设置页迁移到 v2。 ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 优化

- **[undefined]** 更新嵌入 NocoBase 插件的开源版使用说明 ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
参考文档：[嵌入 NocoBase](https://docs.nocobase.com/cn/integration/embed/)
- **[client]** 增强部分 runjs 内置函数的自动补全。 ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust

- **[cli]** 优化 CLI 更新策略 ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos

### 🐛 修复

- **[client]**
  - 修复刷新页面后区块偶现误提示数据表已删除的问题 ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe

  - 修复表格行操作联动规则不正确的问题。 ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust

  - 修复v2 表单切换字段显示状态后字段变为只读的问题 ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh

- **[cli]** 修复 nginx 模板，使 `.mjs` 静态资源以 JavaScript MIME 类型返回。 ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher

- **[database]** 修复导入纯数字密码值可能失败的问题 ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile

- **[flow-engine]**
  - 修复切换 UI 配置模式开关后弹窗内部存在旧 UI 数据的问题。 ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust

  - 修复鼠标移到关联字段分组时字段搜索内容被清空的问题 ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe

- **[client-v2]** 修复批量更新操作字段赋值配置异常问题 ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh

- **[文件管理器]** 修复本地文件存储路径校验，阻止不安全路径逃逸出配置的存储根目录。 ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher

- **[区块：甘特图]** 优化甘特图提示框位置，避免遮挡任务条，并统一任务名称在任务条内外的对齐方式 ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx

- **[权限控制]** 修复联合角色作为默认角色时首次登录权限不完整的问题 ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile

- **[授权设置]** 修复许可证设置页面在 pkg 登录检查缓慢或不可达时长时间卡住的问题 ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji

- **[工作流：JavaScript 节点]** 明确工作流 JavaScript 模块支持模式为非安全模式，不能作为权限边界 ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
参考文档：[工作流 JavaScript 节点](docs/docs/cn/workflow/nodes/javascript.md)
- **[密码策略]** 修复密码策略校验纯数字密码值时可能失败的问题 by @2013xile


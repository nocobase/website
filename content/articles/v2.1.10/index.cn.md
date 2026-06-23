### 🎉 新特性

- **[ai]** 支持在远程 MCP 客户端的 URL 和请求头中使用当前用户变量。 ([#9828](https://github.com/nocobase/nocobase/pull/9828)) by @cgyrock

- **[cli]** nb init 支持 --hook-script ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos

### 🚀 优化

- **[client-v2]** 在 UI 字段验证设置中以只读继承规则的形式展示字段级验证规则。 ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh

- **[前端流引擎]** 利用 flowsurface api 搭建 AI 员工时默认将当前区块添加至用户上下文中。 ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust

### 🐛 修复

- **[client-v2]** 修复更改区块配置后界面不刷新的问题。 ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust

- **[工作流：自定义操作事件]**
  - 修复 v2 触发工作流按钮在自定义上下文请求体提交前未解析前端变量的问题 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) by @mytharcher

  - 修复 v2 自定义操作绑定工作流选择器的过滤请求，保证启用状态使用布尔值过滤并能正确列出工作流。 ([#9865](https://github.com/nocobase/nocobase/pull/9865)) by @mytharcher

- **[区块：甘特图]** 修复甘特图任务弹窗模板设置无法正确生效或清空的问题。 ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx

- **[工作流：审批]**
  - 修复审批动作节点校验：`applyDetail` 或 `approvalUid` 允许传入 `null`，仅在提供字符串引用时才进行处理 by @mytharcher

  - 修复相关审批首次不加载或刷新后时间线不更新的问题 by @zhangzhonghe


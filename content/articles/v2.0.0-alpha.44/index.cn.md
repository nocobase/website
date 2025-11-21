### 🎉 新特性

- **[client]**
  - 为关系字段下拉选择器增加快捷新增能力 ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh

  - 支持树表关系字段使用级联选择器 ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh

- **[遥测]** 新增插件：遥测，基于 OpenTelemetry 的应用遥测插件，内置 CPU、内存、HTTP 请求等指标，并支持通过 HTTP 导出 by @2013xile

### 🚀 优化

- **[telemetry]** 支持控制需要上报的指标 ([#7938](https://github.com/nocobase/nocobase/pull/7938)) by @2013xile

- **[异步任务管理器]** 在子应用中执行异步任务时，异步进程只启动对应的子应用 ([#7927](https://github.com/nocobase/nocobase/pull/7927)) by @2013xile

### 🐛 修复

- **[client]**
  - 修复树表按钮显示在非树表区块中的问题 ([#7931](https://github.com/nocobase/nocobase/pull/7931)) by @katherinehhh

  - 修复外部数据源配置 belongsTo 字段时，field interface 显示为 many to one 而非 one to one 的问题 ([#7936](https://github.com/nocobase/nocobase/pull/7936)) by @cgyrock

- **[flow-engine]** 修复详情区块按钮的工具栏图标显示错位的问题 ([#7929](https://github.com/nocobase/nocobase/pull/7929)) by @zhangzhonghe

- **[工作流]** 修复了更新待办数量时意外导致填写中的表单状态被重置的问题 ([#7937](https://github.com/nocobase/nocobase/pull/7937)) by @mytharcher

- **[数据表字段：多对多 (数组)]** 修复多对多（数组）字段在新增/修改关联数据时的异常行为 ([#7926](https://github.com/nocobase/nocobase/pull/7926)) by @cgyrock

- **[操作：导入记录 Pro]** 修复导入pro操作允许上传时修改导入选项不生效的问题 by @katherinehhh


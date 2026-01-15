### 🚀 优化

- **[evaluators]** 升级 math.js 包的版本以支持更多函数 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher

- **[通知：站内信]** 修复当发送站内信至大量用户时的性能问题 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 修复

- **[client]**
  - 修复新建表单中级联组件成功提交数据后，级联组件数据未清空 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh

  - 为操作按钮的 schema 增加容错，避免点击后页面崩溃 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher

  - 修复提交按钮同时设置二次确认和跳过必填校验时跳过必填校验不生效的问题 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh

- **[数据表字段：多对多 (数组)]** 修复关联查询时append的二级关联表是多对多（数组）时报错的问题 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock

- **[工作流]** 修复复制工作流之后节点配置中的界面配置 ID 未被更新的问题 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher


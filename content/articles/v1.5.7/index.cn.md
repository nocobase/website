### 🚀 优化

- **[通知：站内信]** 移除 SSE 连接重试的控制台错误日志。 ([#6205](https://github.com/nocobase/nocobase/pull/6205)) by @sheldon66

### 🐛 修复

- **[client]**
  - 关系数据快捷创建操作的弹窗中组件缺少拖动设置项 ([#6201](https://github.com/nocobase/nocobase/pull/6201)) by @katherinehhh

  - 数值格式化精度设置未生效 ([#6202](https://github.com/nocobase/nocobase/pull/6202)) by @katherinehhh

  - 修复在表单中，清空某个关系字段后，然后点击提交，这个关系字段没有被清空的问题 ([#5540](https://github.com/nocobase/nocobase/pull/5540)) by @zhangzhonghe

  - 提交数据后，区块不刷新 ([#6206](https://github.com/nocobase/nocobase/pull/6206)) by @zhangzhonghe

  - 关系字段清空后，范围联动的关系字段UI数据显示清空但提交时值依然存在 ([#6207](https://github.com/nocobase/nocobase/pull/6207)) by @katherinehhh

  - 表格中无编辑权限的行记录仍显示编辑操作 ([#6204](https://github.com/nocobase/nocobase/pull/6204)) by @katherinehhh

- **[数据表字段：排序]** 修复排序字段类型在外部数据源未注册的问题 ([#6212](https://github.com/nocobase/nocobase/pull/6212)) by @mytharcher

- **[用户认证]** WebSocket 认证问题 ([#6209](https://github.com/nocobase/nocobase/pull/6209)) by @2013xile

- **[数据表字段：附件（URL）]** 修复 hook 中弃用的请求地址 by @mytharcher


### 🚀 优化

- **[auth]** 支持在用户名中使用 `.` ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile

- **[client]** 表格列提示信息和分组标题支持本地化 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh

- **[工作流：人工处理节点]** 支持查看和继续执行已停用工作流中的人工待办任务 ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher

- **[日历]** 支持日历区块表头多语言显示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh

- **[主题编辑器]** 新增对侧边菜单栏的颜色配置 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu

- **[Redis 消息队列适配器]** 在 Redis 消息队列适配器中使用标准的系统日志 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复按钮的图标配置弹窗被遮挡的问题 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe

  - 修复菜单的图标配置弹窗被遮挡的问题 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe

  - 修复 Popover 组件被遮挡的问题 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe

- **[通知：站内信]**
  - 修复通知链接解析错误的问题 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher

  - 修复打开通知弹窗不展示最近消息的问题 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher

- **[工作流]**
  - 修复潜在的工作流日志缓存报错问题 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher

  - 修复工作流后台任务队列订阅逻辑不正确导致执行消息处理异常的问题 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher

- **[数据源：REST API]** 修复 REST API URL 验证规则 by @katherinehhh

- **[HTTP 请求加密]** 修复请求参数不支持原生 URLSearchParams 类型的问题 by @mytharcher

- **[模板打印]** 支持省市区字段 by @jiannx

- **[工作流：审批]**
  - 修复审批处理表单中公式字段不自动变化的问题 by @mytharcher

  - 修复删除外部数据源数据时报错的问题 by @mytharcher


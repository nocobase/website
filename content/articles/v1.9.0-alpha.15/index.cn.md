### 🚀 优化

- **[auth]** 支持在用户名中使用 `.` ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile

- **[server]** 在消息队列中使用标准的系统日志 ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher

- **[snowflake-id]** 将主键为自增 ID 且不具备唯一标识的系统表的 ID 修改为 53 位的类雪花算法 ID ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile

- **[日历]** 支持日历区块表头多语言显示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh

- **[工作流：人工处理节点]** 支持查看和继续执行已停用工作流中的人工待办任务 ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher

- **[主题编辑器]** 新增对侧边菜单栏的颜色配置 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu

- **[Redis 消息队列适配器]** 在 Redis 消息队列适配器中使用标准的系统日志 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复按钮的图标配置弹窗被遮挡的问题 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe

  - 修复 Popover 组件被遮挡的问题 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe

  - 修复公开表单 select/多选/日期/富文本在只读时仍可编辑的问题 ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh

- **[工作流]**
  - 修复工作流后台任务队列订阅逻辑不正确导致执行消息处理异常的问题 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher

  - 修复潜在的工作流日志缓存报错问题 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher

- **[通知：站内信]** 修复通知链接解析错误的问题 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher

- **[数据源：REST API]** 修复 REST API URL 验证规则 by @katherinehhh

- **[HTTP 请求加密]** 修复请求参数不支持原生 URLSearchParams 类型的问题 by @mytharcher

- **[模板打印]** 支持省市区字段 by @jiannx

- **[邮件管理]** 主题乱码 by @jiannx


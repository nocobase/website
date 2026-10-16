### 🐛 修复

- **[server]**
  - 修复应用 reload 后雪花主键重复的问题 ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile

  - 修复网关对请求中应用名称的校验与状态隔离。 ([#10548](https://github.com/nocobase/nocobase/pull/10548)) by @2013xile

- **[client-v2]** 修复 v2 审批表单子表格中附件无法预览及编辑弹层被遮挡的问题。 ([#10586](https://github.com/nocobase/nocobase/pull/10586)) by @mytharcher

- **[数据源管理]** 修复 v2 关系字段配置中外键无法手动输入的问题，支持输入新名称或选择已有字段。 ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh

- **[工作流]** 修复 KingBase 将启用状态和执行次数返回为字符串时，工作流启用状态及是否已执行的判断错误。 ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher

- **[AI 员工]** AI 对话现在会在 OpenAI 两种 API 模式下传递稳定的会话级提示词缓存键，便于兼容网关保持渠道亲和。 ([#10788](https://github.com/nocobase/nocobase/pull/10788)) by @cgyrock


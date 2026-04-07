### 🚀 优化

- **[undefined]** 为 README 添加目录 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765

### 🐛 修复

- **[client]**

  - 子表格关系字段保存不成功 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  - 字段的子表单不显示数据 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  - 修复 ctx.request 无法覆盖 Authorization 头信息。 ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
- **[server]** 对分发应用状态增加服务模式的检查，以避免非服务模式的实例更新应用状态 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
- **[AI 员工]**

  - 修复在 Dashscope 上使用用 deepseek 或 minmax 模型报错问题 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
  - 修复中断 AI 员工推理过程会导致服务崩溃的问题 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
- **[工作流：HTTP 请求节点]** 清理工作流 HTTP 请求节点的结果结构，避免暴露请求配置；新节点默认仅返回响应数据，并为失败请求增加调试日志。 ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
- **[数据表字段：排序]** 修复 field-sort 插件在 scopeKey 未定义时导致的崩溃问题 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
- **[区块：网格卡片]** 修复网格卡片刷新时按钮未刷新问题 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
- **[工作流：审批]**

  - 为删除的工作流增加容错，避免待办列表加载报错 by @mytharcher
  - 为缺失“提交轮次”数据增加容错 by @mytharcher

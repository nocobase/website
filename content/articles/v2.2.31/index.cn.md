### 🚀 优化

- **[server]** 支持应用运行期间重新绑定雪花 workerId。 ([#11076](https://github.com/nocobase/nocobase/pull/11076)) by @2013xile

- **[工作流]** 优化工作流执行详情性能：首屏仅加载各节点最新 Job，节点执行记录按需游标分页加载，并精简列表字段。 ([#11094](https://github.com/nocobase/nocobase/pull/11094)) by @mytharcher

### 🐛 修复

- **[AI 员工]**
  - 修复 Qwen/DashScope Endpoint 的向量响应编码兼容问题，避免文档与查询向量维度不一致。此前受影响的知识库需重新向量化。 ([#11074](https://github.com/nocobase/nocobase/pull/11074)) by @cgyrock

  - 修复了 AI 员工按钮被联动规则隐藏后，开启页面配置时页面卡死的问题 ([#11100](https://github.com/nocobase/nocobase/pull/11100)) by @hongboji
参考文档：[flow-model.md](https://github.com/nocobase/nocobase/blob/fix/plugin-ai-hidden-ai-employee-freeze/packages/core/client/docs/zh-CN/api/flow-engine/flow-model.md#L176-L181)

### 🚀 优化

- **[工作流]** 改进工作流 pending 任务处理，将启动、继续和重跑任务持久化到事件队列中。 ([#9846](https://github.com/nocobase/nocobase/pull/9846)) by @mytharcher

### 🐛 修复

- **[ai]** 改进文档加载可靠性，为加密 PDF 提供清晰错误提示并增加超时处理。 ([#10172](https://github.com/nocobase/nocobase/pull/10172)) by @cgyrock

- **[flow-engine]** 修复 v2 表格快捷编辑未按记录级和字段级更新权限控制显示的问题。 ([#10182](https://github.com/nocobase/nocobase/pull/10182)) by @katherinehhh

- **[AI 员工]**
  - 修复 AI Employee 工作流节点中 Operator 变量选择器的二级菜单无法展开问题，并移除必填字段中的 Null 选项。 ([#10167](https://github.com/nocobase/nocobase/pull/10167)) by @cgyrock

  - 修复在已有会话中启动新会话时 AI 员工快捷方式丢失区块上下文的问题 ([#10169](https://github.com/nocobase/nocobase/pull/10169)) by @cgyrock

  - 修复 AI 表单上下文未使用表单项自定义标签的问题 ([#10168](https://github.com/nocobase/nocobase/pull/10168)) by @cgyrock

- **[AI: 知识库]** 改进 AI 知识库文档处理，提供更清晰的 PDF 错误提示、上传大小校验、超时保护和正确的分段列表分页。 by @cgyrock

- **[工作流：审批]** 修复关闭 UI Editor 时审批配置缺少字段模板的问题 by @zhangzhonghe


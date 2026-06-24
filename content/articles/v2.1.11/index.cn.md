### 🚀 优化

- **[备份管理器]** 修复版本控制按选中数据表备份时，包含视图或相关数据库对象后还原失败的问题。 ([#9827](https://github.com/nocobase/nocobase/pull/9827)) by @cgyrock

### 🐛 修复

- **[flow-engine]**
  - 修复拖拽字段后区块工具栏可能不重新显示的问题 ([#9848](https://github.com/nocobase/nocobase/pull/9848)) by @zhangzhonghe

  - 修复调整字段宽度时详情弹窗异常关闭的问题 ([#9850](https://github.com/nocobase/nocobase/pull/9850)) by @zhangzhonghe

- **[client-v2]**
  - 修复筛选表单无法给显示关联表字段赋值的问题 ([#9875](https://github.com/nocobase/nocobase/pull/9875)) by @zhangzhonghe

  - 修复联合角色在 v2 版本中无法被变量正确解析的问题。 ([#9611](https://github.com/nocobase/nocobase/pull/9611)) by @gchust

- **[ai]** 支持在依赖当前用户的 MCP 配置中使用 NocoBase 请求变量，并避免用户态 MCP 连接失败影响 AI 员工正常对话。 ([#9888](https://github.com/nocobase/nocobase/pull/9888)) by @cgyrock

- **[cli]** source dev 依赖优化 ([#9882](https://github.com/nocobase/nocobase/pull/9882)) by @chenos

- **[UI 模板]** 修复关系字段区块模板无法被使用的问题。 ([#9406](https://github.com/nocobase/nocobase/pull/9406)) by @gchust

- **[AI: 知识库]** 修复 AI 知识库文档表格和命中测试结果卡片在窄屏或长文件名场景下内容溢出的问题。 by @cgyrock

- **[版本控制]** 修复版本控制按选中数据表备份时，包含视图或相关数据库对象后还原失败的问题。 by @cgyrock

- **[多空间]** 修复空间设置页面只能加载前 20 条空间记录的问题。 by @jiannx


### 🚀 优化

- **[undefined]** 改进 AI Agent 安装指南，防止 Agent 绕过 `--ui` 可视化向导，并支持自动检测 Node 版本管理工具。 ([#9243](https://github.com/nocobase/nocobase/pull/9243)) by @Molunerfinn

- **[AI 员工]**
  - 调整 AI 员工节点的技能 / 工具配置交互 ([#9232](https://github.com/nocobase/nocobase/pull/9232)) by @cgyrock

  - 移除LLM服务配置中的推荐模型 ([#9228](https://github.com/nocobase/nocobase/pull/9228)) by @cgyrock

- **[工作流：JavaScript 节点]** 将 Docker 镜像、CI 工作流和工作流 JavaScript 沙箱依赖升级为兼容 Node.js 22。 ([#9245](https://github.com/nocobase/nocobase/pull/9245)) by @Molunerfinn

### 🐛 修复

- **[undefined]** 修复文档站语言切换器生成错误 URL（如 `/cn/es/` 而非 `/es/`）的问题。 ([#9233](https://github.com/nocobase/nocobase/pull/9233)) by @Molunerfinn

- **[AI 员工]**
  - 修复获取 AI 员工列表接口报错问题 ([#9241](https://github.com/nocobase/nocobase/pull/9241)) by @cgyrock

  - 优化 Atlas 的任务分配策略，并让 Viz 在报告类请求中使用业务报告工作流 ([#9229](https://github.com/nocobase/nocobase/pull/9229)) by @2013xile


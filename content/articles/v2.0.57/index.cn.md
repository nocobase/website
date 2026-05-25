### 🐛 修复

- **[build]** 修复插件服务端混淆产物在 Node.js 运行时注入浏览器全局变量的问题。 ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn

- **[工作流：人工处理节点]** 修复工作流人工任务暂存后未持久化已填写表单内容的问题。 ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher

- **[AI 员工]** 修复表格上下文提示词中错误的数据查询工具名称 ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock

- **[文件管理器]** 使用 PDF.js 安全渲染 PDF 预览，避免通过 iframe 直接加载原始 PDF。 ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher

- **[认证：OIDC]** 修复 SSO 登录回调收到外部跳转地址时可能泄露 Token 的问题 by @2013xile

- **[工作流：审批]**
  - 修复 `jobs:resume` 接口未被审批节点支持的问题 by @mytharcher

  - 修复审批撤回时提交的业务数据更新，并遵循业务表更新权限控制。 by @mytharcher

  - 修复审批流因非审批节点失败终止后，审批待办记录和统计数字悬空的问题。 by @mytharcher


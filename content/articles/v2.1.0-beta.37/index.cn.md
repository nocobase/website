### 🎉 新特性

- **[client-v2]** v2 admin 新增「安全」父菜单和「Token 策略」设置页；用户中心支持「修改密码」。 ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn

- **[cli]** 支持 basic auth ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos

- **[密码策略]** 将密码策略插件迁移到新的 client-v2 管理后台，提供密码策略与已锁定用户两个设置页，并在用户中心的修改密码表单中接入客户端密码规则校验。 by @Molunerfinn

### 🚀 优化

- **[数据可视化]** 图表区块支持 client v2。 ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx

- **[工作流]** 重构工作流异步节点可用性检查 ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher

### 🐛 修复

- **[build]**
  - 服务端构建中的文本资源现在会作为文件复制，不再被转换成 JavaScript 模块。 ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn

  - 修复插件服务端混淆产物在 Node.js 运行时注入浏览器全局变量的问题。 ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn

- **[client-v2]** 修复页面语言元信息，使应用页面跟随当前应用语言，而不是固定标记为英文。 ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn

- **[文件管理器]** 使用 PDF.js 安全渲染 PDF 预览，避免通过 iframe 直接加载原始 PDF。 ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher

- **[AI 员工]** 修复表格上下文提示词中错误的数据查询工具名称 ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock

- **[工作流：人工处理节点]** 修复工作流人工任务暂存后未持久化已填写表单内容的问题。 ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher

- **[认证：OIDC]** 修复 SSO 登录回调收到外部跳转地址时可能泄露 Token 的问题 by @2013xile

- **[工作流：审批]**
  - 修复审批撤回时提交的业务数据更新，并遵循业务表更新权限控制。 by @mytharcher

  - 修复 `jobs:resume` 接口未被审批节点支持的问题 by @mytharcher

  - 修复同一审批任务并发转签时审批记录索引重复的问题。 by @mytharcher

  - 修复审批流因非审批节点失败终止后，审批待办记录和统计数字悬空的问题。 by @mytharcher


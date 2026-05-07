### 🚀 优化

- **[undefined]** 为手动发布工作流添加飞书失败通知 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
- **[IdP: OAuth]** OAuth 会话有效期现在与系统 Token 策略保持一致 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile

### 🐛 修复

- **[client-v2]** 修复远程插件加载时已带 `.js` 后缀的插件 URL 被错误解析成重复 `.js.js` 路径的问题。 ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
- **[cli]** 修复 CLI 布尔选项无法通过否定参数关闭的问题 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
- **[AI 员工]**

  - 修复 AI 员工使用 deepseek v4 模型偶现报错问题 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  - 修复工作流 AI 员工节点切换 AI 员工后会清空技能的问题 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
- **[数据源：主数据库]** 防止在集合加载期间 fields 未定义时发生崩溃 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI 模板]** 修复弹窗模板列表没有正确加载可用模板的问题。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[区块：看板]** 修复弹窗或二级页面中关联看板区块使用未解析运行时资源参数的问题。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
- **[工作流：审批]** 修复查看可发起的审批列表 API 中，筛选和其他查询参数不起作用的问题 by @mytharcher

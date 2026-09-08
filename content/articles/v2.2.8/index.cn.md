### 🚀 优化

- **[企业微信]** 优化企业微信插件的类型安全，并统一通知接收人选择控件。 by @chenzhizdt

### 🐛 修复

- **[server]** 修复应用在未部署的环境中被意外启动的问题 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile

- **[通知：站内信]** 允许在站内信通知的标题和详情链接中使用所有类型的工作流变量。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher

- **[文件管理器]** 防止文件重定向复用已过期的存储签名 URL。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher

- **[数据源管理]** 为 v2 权限数据范围新增当前用户和当前角色变量选择 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx

- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流节点超时时可能错误中止工作流、未遵循“出现异常时继续执行”配置的问题。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher

- **[AI 员工]** 修复 AI 员工的知识库提示词缺少检索内容占位符时可能重复查询知识库的问题，并在保存配置时提供明确的校验引导。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock

- **[AI: 知识库]** 修复 AI 知识库的 PGVector 连接测试、ZIP 导入结果展示、文档分段配置继承，以及 Chunk overlap 参数校验问题。 by @cgyrock

- **[应用监管器]** 修复应用管理接口响应泄漏子应用身份认证密钥的问题 by @2013xile

- **[钉钉]** 统一钉钉通知的接收人选择控件。 by @chenzhizdt


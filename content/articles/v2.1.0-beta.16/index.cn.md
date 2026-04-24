### 🎉 新特性

- **[undefined]** 新增 CI 工作流，自动检查缺失的 `plugin-*` peerDependencies 并执行构建，支持在 PR 中发送检查报告评论。 ([#9058](https://github.com/nocobase/nocobase/pull/9058)) by @Molunerfinn
- **[cli-v1]** 重构 storage path 变量 ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos
- **[cli]** 重构 nocobase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos
- **[flow-engine]** 为 FlowEngine 新增 `getSubclassesOfAsync` 方法，通过 `registerModelLoaders` 的 `extends` 字段支持发现异步注册的 model class。 ([#9065](https://github.com/nocobase/nocobase/pull/9065)) by @Molunerfinn
- **[工作流]**

  - 为节点创建增加用于检查的 API ([#9207](https://github.com/nocobase/nocobase/pull/9207)) by @mytharcher
  - 为节点任务增加日志字段，以支持某些节点调试时展示日志内容 ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher
- **[AI 员工]**

  - 工作流新增 AI 员工节点 ([#9025](https://github.com/nocobase/nocobase/pull/9025)) by @cgyrock
  - 为 AI 员工新增数据聚合查询工具与业务分析报告工具 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile
  - 为 AI 员工添加调用 sub agents 的能力 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock
  - AI 员工增加 SKILLS 能力 ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock
- **[认证：API 密钥]** 添加 `pm list` 和 `generate-api-key` 命令 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos
- **[AI: MCP 服务器]**

  - 提供通用的数据表查询接口，支持通过 MCP 调用 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile
  - 新增 MCP 服务器插件，支持通过 MCP 搭建 NocoBase 系统并支持业务流程。 ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile
- **[数据源管理]** 支持按需加载 MCP 工具 ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile
- **[IdP: OAuth]** 新增 IdP: OAuth 插件，支持 MCP 服务通过 OAuth 认证 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile

### 🚀 优化

- **[cli]**

  - 为请求日志和审计日志增加 CLI 请求来源标记 ([#9223](https://github.com/nocobase/nocobase/pull/9223)) by @2013xile
  - 优化生成式 API CLI 的帮助输出和 ACL 命令分组 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile
  - 优化 `nb api` 在运行时引导失败时的帮助降级表现，并统一警告信息样式 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile
- **[server]** 完善插件管理相关的 Swagger API 文档 ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile
- **[database]** 修复 AI 业务报告生成与数据查询行为，避免错误图表输出、时间处理不正确以及遗漏多数据源分析的问题 ([#9078](https://github.com/nocobase/nocobase/pull/9078)) by @2013xile
- **[build]**

  - App client 生产构建现在改为使用 Rsbuild，同时新增构建 profiling 与 declaration 调度优化，便于定位并降低构建瓶颈。 ([#8963](https://github.com/nocobase/nocobase/pull/8963)) by @Molunerfinn
  - 将 `@nocobase/build` 中的 client 构建流程从 Vite 迁移到 Rsbuild。 ([#8932](https://github.com/nocobase/nocobase/pull/8932)) by @Molunerfinn
- **[client]** 重构 admin 布局设置与应用入口为模型宿主架构并补充 v1 v2 兼容性保障 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) by @zhangzhonghe
- **[flow-engine]**

  - 增强页面搭建相关的api的schema验证。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
  - 增强页面搭建相关的api的schema验证。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[app]** 为 client-v1 增加基于 Rsbuild 的开发工作流，并保持本地插件开发与当前 `/v2/` 环境兼容 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn
- **[undefined]** 在保持 v1 不变的前提下，新增 client-v2 独立入口，并使用 rsbuild 独立打包。 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn
- **[权限控制]** 为权限管理 Skill 增加新的 API 适配 AI 模式 ([#9198](https://github.com/nocobase/nocobase/pull/9198)) by @Andrew1989Y
- **[工作流：自定义操作事件]** 为针对记录（单条和多条）触发模式增加权限控制 ([#9125](https://github.com/nocobase/nocobase/pull/9125)) by @mytharcher
- **[前端流引擎]** 新增 UI 搭建相关的 api。 ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust
- **[工作流：操作前事件]** 为触发器和节点增加验证规则 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
- **[工作流]** 为所有触发器和节点增加验证规则 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher
- **[工作流：Webhook 触发器]** 为创建触发器和节点的 API 增加验证处理 by @mytharcher
- **[工作流：子流程]** 为新增节点 API 增加验证处理 by @mytharcher
- **[工作流：审批]**

  - 为创建审批节点增加类型验证 by @mytharcher
  - 为触发器和节点 API 增加验证处理 by @mytharcher

### 🐛 修复

- **[client]**

  - 关系字段隐藏排序开关 ([#9220](https://github.com/nocobase/nocobase/pull/9220)) by @jiannx
  - 修复切换菜单后页面标题没有更新的问题 ([#8864](https://github.com/nocobase/nocobase/pull/8864)) by @zhangzhonghe
- **[cli]** 修复 Windows 上 CLI OAuth 登录可能因授权链接过长而失败的问题 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile
- **[test]** 修复了插件构建对 `big.js` 这类带点号包名的处理，使其服务端依赖能够正确打包到 `dist/node_modules`。 ([#8953](https://github.com/nocobase/nocobase/pull/8953)) by @Molunerfinn
- **[server]** 支持按 hostname 获取受理应用 ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile
- **[工作流：聚合查询节点]** 修复聚合节点由于错误的验证规则无法保存的问题 ([#9208](https://github.com/nocobase/nocobase/pull/9208)) by @mytharcher
- **[AI 员工]**

  - 修复 AI 员工节点日志记录异常问题 ([#9180](https://github.com/nocobase/nocobase/pull/9180)) by @cgyrock
  - 修复 ACL 导致聚合查询排序丢失的问题 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile
  - 修复 AI 员工对话中异常消息不显示问题 ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock
  - 修复 AI 员工无法使用 skills 的问题 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock
  - 修复禁用 getSkill 工具后大模型仍然尝试加载技能的问题 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock
  - 修复 core 包中 ai 模块无法通过的测试用例 ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock
- **[工作流：JavaScript 节点]** 修复配置 JavaScript 节点时的报错 ([#9169](https://github.com/nocobase/nocobase/pull/9169)) by @mytharcher
- **[IdP: OAuth]**

  - 修复服务重启后 OAuth 客户端注册和令牌刷新失败的问题 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile
  - 修复普通 API 请求的 OAuth 访问 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile
  - 修复子应用中 MCP OAuth 登录后跳转错误的问题 ([#9015](https://github.com/nocobase/nocobase/pull/9015)) by @2013xile
- **[工作流：循环节点]** 修复工作流节点的验证规则 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher
- **[权限控制]** 更新权限管理的 swagger 文档，增强 MCP 服务 ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y
- **[工作流：邮件发送节点]** 修复可使用变量的字段的验证规则 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher
- **[工作流]**

  - 修复条件节点错误的验证规则 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher
  - 修复数据表触发器的触发模式不能设置为“新增或更新”的问题 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher
- **[数据源管理]** 优化 MCP 工具命名；精简冗余的接口输出结果，避免消耗大量的 AI 对话上下文 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile
- **[AI: MCP 服务器]**

  - 修复 Swagger 生成的 MCP 工具在输入 schema 含有 `null` 类型或 `nullable` 标记时无法通过 OpenAI 工具校验的问题 ([#8994](https://github.com/nocobase/nocobase/pull/8994)) by @2013xile
  - 修复 MCP 通用 CRUD 工具因透传无关请求头导致的鉴权不匹配问题 ([#8983](https://github.com/nocobase/nocobase/pull/8983)) by @2013xile

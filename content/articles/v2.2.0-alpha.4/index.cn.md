### 🎉 新特性

- **[区块：评论]**
  - 优化评论区块设置，支持数据范围、默认排序、下拉选择分页大小、可选跳转最后一页，以及基于标量字段的归属字段配置。 ([#9954](https://github.com/nocobase/nocobase/pull/9954)) by @jiannx

  - 新增评论区块。 ([#9916](https://github.com/nocobase/nocobase/pull/9916)) by @jiannx

- **[AI 员工]** 新增 Mistral AI 作为 AI 服务的大语言模型供应商。 ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock

- **[历史记录]** 为记录历史插件新增 client v2 支持。 by @jiannx

### 🚀 优化

- **[cli]** 支持手动生成 Nginx/Caddy 代理配置，允许 Docker 部署不内置 Nginx 运行，并统一代理与 CDN 相关的运行时配置。 ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos

- **[工作流：JavaScript 节点]** 调整 v2 工作流请求节点和邮件节点配置字段，使其布局和附件变量选择行为与旧版保持一致。 ([#9952](https://github.com/nocobase/nocobase/pull/9952)) by @jiannx

- **[UI 布局]** 优化 v2 移动端标签栏，标签过多时可横向滚动，避免图标重叠。 ([#9949](https://github.com/nocobase/nocobase/pull/9949)) by @katherinehhh

- **[工作流：聚合查询节点]** 优化 v2 工作流更新节点和聚合查询节点的字段选择逻辑，并修复聚合查询节点关联数据表选择的切换异常。 ([#9938](https://github.com/nocobase/nocobase/pull/9938)) by @katherinehhh

- **[区块：评论]** 将新的评论区块插件加入 NocoBase 预设，并将旧评论插件标记为废弃。 ([#9936](https://github.com/nocobase/nocobase/pull/9936)) by @jiannx

- **[日志]** 为 client v2 运行时添加日志设置页面。 ([#9933](https://github.com/nocobase/nocobase/pull/9933)) by @jiannx

- **[HTTP 请求加密]** 新增 HTTP 请求加密插件的 v2 客户端支持，确保 v2 客户端中的查询参数继续被加密。 by @jiannx

- **[工作流：数据库事务节点]** 优化 v2 工作流数据库事务节点布局，使分支标签和提交标记拥有更合适的间距。 by @katherinehhh

### 🐛 修复

- **[flow-engine]** 修复切换用户后 ctx.auth.user 值不变的问题。 ([#9964](https://github.com/nocobase/nocobase/pull/9964)) by @gchust

- **[client-v2]**
  - 修复工作流手动执行后自动创建新版本的跳转问题，确保旧版和新版界面都会打开正确的工作流页面。 ([#9955](https://github.com/nocobase/nocobase/pull/9955)) by @Molunerfinn

  - 修复表格日期时间列在分页或刷新后丢失已配置时分秒显示的问题。 ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh

  - 修复关系字段下拉选择中已选标题过长时显示挤压选择框的问题，过长文本会以省略号展示。 ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh

  - 修复 V2 管理端进入没有可用子菜单页面的分组时显示 404 的问题。 ([#9932](https://github.com/nocobase/nocobase/pull/9932)) by @katherinehhh

- **[undefined]** 修复非中文版本的版本控制文档不显示专业版标签的问题。 ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock

- **[AI 员工]**
  - 修复清空自定义 Base URL 后，LLM 提供商无法回退到默认 Base URL 的问题。 ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock

  - 修复工作流 AI 员工任务连续调用工具达到图递归限制后执行失败的问题。 ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock

- **[操作：自定义请求]** 修复自定义请求允许运行时选项覆盖已保存请求目标的问题。 ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher

- **[移动端（已废弃）]** 修复移动端页面和公开表单在移动设备上无法滚动的问题 ([#9898](https://github.com/nocobase/nocobase/pull/9898)) by @zhangzhonghe

- **[通知管理]** 修复 CC 配置中显示错误工作流变量的问题 ([#9937](https://github.com/nocobase/nocobase/pull/9937)) by @zhangzhonghe

- **[工作流]**
  - 修复 workflow 画布在跨 bundle 场景下的 Context 不一致问题，确保旧版工作流页面中的分支和一些变量选择能正常工作。 ([#9951](https://github.com/nocobase/nocobase/pull/9951)) by @Molunerfinn

  - 修复迁移到 client v2 的部分问题 ([#9929](https://github.com/nocobase/nocobase/pull/9929)) by @mytharcher

  - 修复 v2 工作流中无法配置站内信内容的问题 ([#9885](https://github.com/nocobase/nocobase/pull/9885)) by @zhangzhonghe

- **[数据源管理]** 修复 v2 数据表字段管理中，模板保护字段仍可删除，以及继承字段展示、查看和重写行为与 v1 不一致的问题。 ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh

- **[用户认证]** 修复 v2 子应用中 SSO 登录后跳转地址错误的问题 ([#9927](https://github.com/nocobase/nocobase/pull/9927)) by @2013xile

- **[用户]** 移除“用户和权限”新增用户表单中的默认密码。 ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx

- **[前端流引擎]** 修复 flow surfaces api 无法正确创建移动端页面的问题。 ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust

- **[应用单点登录]** 修复 v2 子应用中 App SSO 登录后跳转地址错误的问题 by @2013xile

- **[AI: 知识库]** 修复版本控制和知识库文档列表在内容较长或视口高度不足时的布局溢出问题。 by @cgyrock

- **[数据源：外部 NocoBase]** 修复 NocoBase 外部数据源在连接配置包含运行时对象时加载失败的问题 by @2013xile

- **[迁移管理]** 修复迁移 MySQL 非 ASCII 内容时可能出现乱码的问题 by @2013xile

- **[历史记录]** 修复启用记录历史后外部 NocoBase 数据源加载失败的问题 by @2013xile

- **[工作流：审批]**
  - 修复打开抄送节点配置时报错的问题 by @zhangzhonghe

  - 修复审批节点添加 Original application content 区块时报错的问题 by @zhangzhonghe

  - 修复审批数据表出现在区块数据源列表中的问题 by @zhangzhonghe

  - 修复迁移到 client v2 引入的问题 by @mytharcher

- **[应用监管器]**
  - 修复子应用访问链接丢失 v2 路径的问题 by @2013xile

  - 修复 Client V2 应用监管 Applications 标签页注册错误 by @2013xile


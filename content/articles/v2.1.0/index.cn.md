### 🎉 新特性

- **[undefined]**

  - 新增顶层 proxy 命令，支持 nginx 和 caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) by @chenos
  - 完善了 CLI 中托管应用与插件管理能力，包括基于 appPath 的环境处理、插件导入、授权插件同步，以及相关文档更新。 ([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
    参考文档：[CLI 文档](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/cn/API/cli), [快速开始](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/cn/quickstart)
  - 新增 AI 员工：本地化工程师 Lina, 辅助完成本地化翻译 ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
    参考文档：[本地化管理](https://docs.nocobase.com/cn/system-management/localization)<br />[Lina：本地化工程师](https://docs.nocobase.com/cn/ai-employees/built-in/lina)<br>[使用 Lina 和本地 HY-MT1.5-1.8B 翻译本地化词条](https://docs.nocobase.com/cn/ai-employees/scenarios/localization-hy-mt)
  - 新增印尼语和越南语文档。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
  - 新增 CI 工作流，自动检查缺失的 `plugin-*` peerDependencies 并执行构建，支持在 PR 中发送检查报告评论。 ([#9058](https://github.com/nocobase/nocobase/pull/9058)) by @Molunerfinn
- **[client-v2]**

  - 支持文本字段使用扫码录入 ([#9599](https://github.com/nocobase/nocobase/pull/9599)) by @katherinehhh
  - 新增 `TypedVariableInput` 组件，让邮件插件 v2 的 SMTP 端口和安全模式等字段既能填类型化常量，也能填 `{{ $env.X }}` 变量。 ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn
  - 支持表单的提交操作配置字段赋值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
  - 支持嵌入 v2 页面和公开表单 v2 页面 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - client-v2 插件管理页面重写为响应式卡片布局，支持分类过滤、搜索、启用/禁用/删除、批量启用以及插件详情弹窗；同时为 client-v1 的插件管理页面补充窄屏响应式布局。 ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
  - v2 admin 新增「安全」父菜单和「Token 策略」设置页；用户中心支持「修改密码」。 ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
- **[cli]**

  - 添加 API 命令的兼容规则 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
  - 支持 Basic 认证 ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
  - 添加 backup create 和  backup restore 命令 ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
  - 增加发布相关命令 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
  - 重构 nocobase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos
- **[client]**

  - 页面菜单项支持配置联动规则 ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe
  - 事件流添加 JS 变量 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx
  - 新增 JS item 操作 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
- **[flow-engine]**

  - 将 `plugin-environment-variables` 迁移到 client-v2，提供基于 React 的设置页与全局注册的 `$env` 运行时变量；为 `plugin-file-manager` 新增 client-v2 入口，提供基于 React 的存储配置页面以及基于 FlowModel 的上传字段、上传动作和预览能力。 ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn
  - 为 FlowEngine 新增 `getSubclassesOfAsync` 方法，通过 `registerModelLoaders` 的 `extends` 字段支持发现异步注册的 model class。 ([#9065](https://github.com/nocobase/nocobase/pull/9065)) by @Molunerfinn
- **[server]** AI 员工可以通过 Bash 命令检索内置文档 ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
- **[cli-v1]** 重构 storage path 变量 ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos
- **[异步任务管理器]** 为异步任务管理器顶部栏入口增加 v2 客户端支持。 ([#9707](https://github.com/nocobase/nocobase/pull/9707)) by @jiannx
- **[备份管理器]**

  - 为备份管理器插件新增 v2 客户端运行时支持。 ([#9712](https://github.com/nocobase/nocobase/pull/9712)) by @katherinehhh
  - 适配新增的版本管理插件 ([#9563](https://github.com/nocobase/nocobase/pull/9563)) by @cgyrock
- **[区块：甘特图]**

  - 为甘特图区块新增默认定位到今天的配置项 ([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx
  - 新增甘特图区块 v2 支持。 ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx
- **[权限控制]** 将用户与角色权限设置页迁移到 v2。 ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx
- **[Office 文件预览]** 将 Office 文件预览插件迁移到 v2（FlowEngine）版本。 ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn
- **[工作流]**

  - 为工作流增加超时控制，设置了超时选项后，运行时间超长的工作流将被自动终止 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
  - 为工作流增加创建人和更新人字段 ([#9217](https://github.com/nocobase/nocobase/pull/9217)) by @mytharcher
  - 为节点创建增加用于检查的 API ([#9207](https://github.com/nocobase/nocobase/pull/9207)) by @mytharcher
  - 为节点任务增加日志字段，以支持某些节点调试时展示日志内容 ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher
- **[IdP: OAuth]**

  - 增加多应用部署中的应用单点登录基础能力 ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile
  - 新增 IdP: OAuth 插件，支持 MCP 服务通过 OAuth 认证 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile
- **[主题编辑器]** 主题编辑器现已支持 v2 界面 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
- **[区块：看板]**

  - 为看板插件增加 client-v2 支持 ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx
  - 看板区块 v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) by @jiannx
- **[Markdown]** Markdown 区块支持 client-v2 ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
- **[区块：列表]** 列表区块支持 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx
- **[日历]**

  - 日历插件新增 client-v2 支持。 ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
  - 日历区块 v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx
- **[区块：树]**

  - 为树筛选区块新增 client-v2 支持。 ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx
  - 新增树筛选区块 ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx
- **[AI 员工]**

  - 工作流 AI 员工节点支持从附件字段加载文件 ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
  - 工作流新增 AI 员工节点 ([#9025](https://github.com/nocobase/nocobase/pull/9025)) by @cgyrock
  - 为 AI 员工新增数据聚合查询工具与业务分析报告工具 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile
  - 为 AI 员工添加调用 sub agents 的能力 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock
  - AI 员工增加 SKILLS 能力 ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock
- **[数据可视化]** 新增区块插件的 client-v2 支持 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe
- **[认证：API 密钥]** 添加 `pm list` 和 `generate-API-key` 命令 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos
- **[AI: MCP 服务器]**

  - 提供通用的数据表查询接口，支持通过 MCP 调用 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile
  - 新增 MCP 服务器插件，支持通过 MCP 搭建 NocoBase 系统并支持业务流程。 ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile
- **[数据源管理]** 支持按需加载 MCP 工具 ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile
- **[数据表字段：代码]** 编码字段支持 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) by @jiannx
- **[数据源：外部 NocoBase]** 新增数据源插件：外部 NocoBase by @2013xile
- **[多空间]** 为多空间插件新增 client-v2 支持，包括空间切换和空间管理。 by @jiannx
- **[应用单点登录]** 新增用于应用之间自动登录的 App SSO 插件 by @2013xile
- **[版本管理]** 新增版本管理插件 by @cgyrock
- **[双因素身份认证 (2FA)]** 新版客户端现在可以绑定、验证和配置 TOTP 与两步验证。 by @Molunerfinn
- **[密码策略]** 将密码策略插件迁移到新的 client-v2 管理后台，提供密码策略与已锁定用户两个设置页，并在用户中心的修改密码表单中接入客户端密码规则校验。 by @Molunerfinn
- **[工作流：Webhook 触发器]** 为超时的 Webhook 工作流（同步模式）增加 408 响应状态 by @mytharcher
- **[工作流：子流程]** 支持工作流的超时配置 by @mytharcher
- **[迁移管理]** 新增 NocoBase CLI 专用 API by @Andrew1989Y
- **[文件存储：S3 (Pro)]** 支持在 v2 文件管理器中通过 S3 Pro 存储上传文件。 by @Molunerfinn
- **[认证：OIDC]** 迁移 `plugin-auth-oidc` 到 v2 admin，登录按钮、管理员设置表单和自动 SSO 跳转在 v2 下可用。 by @Molunerfinn
- **[工作流：审批]**

  - 支持工作流的超时配置 by @mytharcher
  - 支持删除审批草稿 by @mytharcher
- **[邮件管理]** gmail 支持邮件别名发送 by @jiannx
- **[应用监管器]** 新增子应用的 App SSO 配置 by @2013xile
- **[认证：LDAP]** 新增 v2 客户端入口，使 LDAP 认证器在 v2 应用中可正常渲染登录表单和管理设置。 by @Molunerfinn

### 🚀 优化

- **[undefined]**

  - nb cli 支持 session 级 current env ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos
  - 西班牙语、葡萄牙语、俄语、德语文档对齐英文文档。 ([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn
  - 同步法语文档与中文文档。 ([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn
  - 更新 AI 文档的 NocoBase 版本要求为 >= 2.1.0-beta.20，并推荐升级到 beta 最新版本。 ([#9252](https://github.com/nocobase/nocobase/pull/9252)) by @Molunerfinn
  - 改进 AI Agent 安装指南，防止 Agent 绕过 `--ui` 可视化向导，并支持自动检测 Node 版本管理工具。 ([#9243](https://github.com/nocobase/nocobase/pull/9243)) by @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) by @Molunerfinn
  - 在保持 v1 不变的前提下，新增 client-v2 独立入口，并使用 rsbuild 独立打包。 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn
- **[client-v2]**

  - 支持在 v2 弹窗选择关系字段中关闭多选。 ([#9730](https://github.com/nocobase/nocobase/pull/9730)) by @katherinehhh
  - 优化 v2 页面中已配置外部数据源的区块在数据源被禁用后的渲染，避免渲染报错，并在 UI 配置状态下显示更清晰的占位提示。 ([#9699](https://github.com/nocobase/nocobase/pull/9699)) by @katherinehhh
  - v2 表格区块新增启用行选择设置项 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh
  - 支持 v2 操作面板操作颜色配置 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh
  - 移除菜单配置中的隐藏选项 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe
  - v2 布局中过滤掉 v1 的菜单，只显示 v2 菜单 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
  - 将 client-v2 从 client-v1 中分离出来，且不再依赖 client-v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) by @zhangzhonghe
- **[server]**

  - 新版客户端的访问路径由 `/v2/` 调整为 `/v/`。 ([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn
  - 完善插件管理相关的 Swagger API 文档 ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile
- **[cli]**

  - 优化 CLI 更新策略 ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos
  - 优化 app upgrade 流程 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos
  - 改进 env auth 流程 ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
  - 将 NocoBase CLI 的安装与管理交互流程迁移到 Inquirer，改进提示体验，并修复相关的安装、技能管理和 Docker 运行时问题。 ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
  - 为请求日志和审计日志增加 CLI 请求来源标记 ([#9223](https://github.com/nocobase/nocobase/pull/9223)) by @2013xile
  - 优化生成式 API CLI 的帮助输出和 ACL 命令分组 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile
  - 优化 `nb API` 在运行时引导失败时的帮助降级表现，并统一警告信息样式 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile
- **[client]**

  - 将 Application v1 中的 JSonLogic 迁移到 BaseApplication ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
  - 支持通过 runJS 设置字段样式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
  - 重构 admin 布局设置与应用入口为模型宿主架构并补充 v1 v2 兼容性保障 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) by @zhangzhonghe
- **[build]**

  - 补充了 `deleteServerFiles` 的回归测试，确保在 Windows 和 POSIX 路径场景下不会误删 `client` 和 `client-v2` 构建产物。 ([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn
  - App client 生产构建现在改为使用 Rsbuild，同时新增构建 profiling 与 declaration 调度优化，便于定位并降低构建瓶颈。 ([#8963](https://github.com/nocobase/nocobase/pull/8963)) by @Molunerfinn
  - 将 `@nocobase/build` 中的 client 构建流程从 Vite 迁移到 Rsbuild。 ([#8932](https://github.com/nocobase/nocobase/pull/8932)) by @Molunerfinn
- **[database]** 修复 AI 业务报告生成与数据查询行为，避免错误图表输出、时间处理不正确以及遗漏多数据源分析的问题 ([#9078](https://github.com/nocobase/nocobase/pull/9078)) by @2013xile
- **[flow-engine]**

  - 增强页面搭建相关的API的schema验证。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[app]** 为 client-v1 增加基于 Rsbuild 的开发工作流，并保持本地插件开发与当前 `/v2/` 环境兼容 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn
- **[变量和密钥]** 环境变量（`$env`）现在在 v1 运行时能被基于 flow-engine 的变量选择器选取。 ([#9728](https://github.com/nocobase/nocobase/pull/9728)) by @Molunerfinn
- **[数据源管理]**

  - 新增数据源权限管理的 client-v2 实现，并统一相关权限选择抽屉的交互和布局。 ([#9706](https://github.com/nocobase/nocobase/pull/9706)) by @jiannx
  - 优化数据建模接口，支持用 AI 创建评论表，配置外部数据源的关系字段，配置字段验证规则 ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
- **[数据表：连接外部数据（FDW）]** 改进 V2 数据表模板与 V1 的一致性，包括 SQL 确认、外部数据库服务管理和模板表单顺序。 ([#9711](https://github.com/nocobase/nocobase/pull/9711)) by @katherinehhh
- **[多关键词筛选]** 迁移多关键词筛选至 client-v2。 ([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust
- **[工作流]**

  - 移除工作流执行历史与业务事务的耦合。 ([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher
  - 重构工作流异步节点可用性检查 ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher
  - 为所有触发器和节点增加验证规则 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher
- **[UI 模板]** 将 UI 模板迁移至 client-v2。 ([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust
- **[部门]** 新增 v2 版部门设置页面，用于管理部门、部门成员和用户所属部门。 ([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx
- **[通知管理]** 通知管理相关插件迁移 v2 的版本。 ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn
- **[数据可视化]** 图表区块支持 client-v2。 ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
- **[验证]** 为「验证」插件新增 v2 客户端（管理设置页、用户中心入口、短信验证码表单等）。 ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
- **[用户认证]**

  - 自定义品牌设置现在可以在 v2 客户端中正常生效 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
  - 实现 client-v2 中的认证设置页，并提供可复用的表格、变量输入与表单基础组件。 ([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
- **[区块：地图]** 为地图插件新增 v2 客户端支持。 ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
- **[本地化]** 优化 Lina 本地化翻译任务，支持翻译范围、参考语言配置和快捷编辑 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
- **[工作流：自定义操作事件]**

  - 将 block-workbench 和 workflow-custom-action-trigger 插件迁移到 client-v2，并同步其操作面板模型与二维码扫描流程。 ([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
  - 为针对记录（单条和多条）触发模式增加权限控制 ([#9125](https://github.com/nocobase/nocobase/pull/9125)) by @mytharcher
- **[区块：iframe]** 新增 iframe 区块的 v2 支持。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx
- **[区块：网格卡片]** 更新网格卡片插件支持 client-v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
- **[AI 员工]**

  - AI 员工并行会话交互与性能优化 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock
  - AI 员工支持多个会话并行处理 ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock
  - 优化 Nathan 的 RunJS 编辑工具，并减少长 AI 对话中的卡顿 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile
  - 更新 AI 员工快捷任务配置使用和工作流 AI 员工节点配置相同的技能设置组件 ([#9246](https://github.com/nocobase/nocobase/pull/9246)) by @cgyrock
  - 调整 AI 员工节点的技能 / 工具配置交互 ([#9232](https://github.com/nocobase/nocobase/pull/9232)) by @cgyrock
  - 更新 AI 对话 user prompt 功能 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
  - 更新 AI 对话 user prompt 功能 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
- **[文件管理器]** 第三方存储插件现在可以在 v2 的文件管理器设置页注册自定义的存储类型表单。 ([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn
- **[区块：看板]**

  - 优化 v2 详情字段间距一致性，并使看板卡片和列间距更好地适配主题设置。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
  - 调整看板默认列宽。 ([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx
  - 优化日历和看板区块的创建配置。 ([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx
- **[IdP: OAuth]** OAuth 会话有效期现在与系统 Token 策略保持一致 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile
- **[权限控制]** 为权限管理 Skill 增加新的 API 适配 AI 模式 ([#9198](https://github.com/nocobase/nocobase/pull/9198)) by @Andrew1989Y
- **[前端流引擎]** 新增 UI 搭建相关的 API。 ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust
- **[操作：自定义请求]**

  - 添加自定义请求的操作按钮 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx
  - 事件流支持自定义请求 ([#8749](https://github.com/nocobase/nocobase/pull/8749)) by @jiannx
- **[工作流：操作前事件]** 为触发器和节点增加验证规则 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
- **[数据表字段：中国行政区划]** 中国行政区划字段 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
- **[认证：SAML 2.0]**

  - SAML/CAS 登录跳转改为跟随新版客户端前缀。 by @Molunerfinn
  - 为 CAS 和 SAML 认证插件补齐 client-v2 入口，使其能在 v2 登录页和认证器后台设置中正常使用。 by @Molunerfinn
- **[IP 限制]** 新增 IP 限制插件的 v2 版本。 by @Molunerfinn
- **[自定义品牌]** 自定义品牌设置现已支持 v2 客户端 by @zhangzhonghe
- **[工作流：Webhook 触发器]** 为创建触发器和节点的 API 增加验证处理 by @mytharcher
- **[工作流：子流程]**

  - 移除子流程工作流指令中的执行历史事务耦合。 by @mytharcher
  - 为新增节点 API 增加验证处理 by @mytharcher
- **[模板打印]** 更新打印模板数据表元数据，用于版本控制备份分类。 by @cgyrock
- **[认证：OIDC]** OIDC 登录跳转改为跟随新版客户端前缀。 by @Molunerfinn
- **[历史记录]** 更新记录历史数据表元数据，用于版本控制备份分类。 by @cgyrock
- **[工作流：审批]**

  - 为审批节点增加 `async` 类型标识，以适配工作流画布新增节点的新 API by @mytharcher
  - 移除审批工作流指令中的执行历史事务耦合。 by @mytharcher
  - 为创建审批节点增加类型验证 by @mytharcher
  - 更新审批流数据表元数据，用于版本控制备份分类。 by @cgyrock
  - 为触发器和节点 API 增加验证处理 by @mytharcher
  - 调整审批触发器和节点配置的验证规则，确保 UI 相关字段存在 by @mytharcher
- **[审计日志]** 更新审计日志数据表元数据，用于版本控制备份分类。 by @cgyrock
- **[邮件管理]** 更新邮件管理数据表元数据，用于版本控制备份分类。 by @cgyrock
- **[应用监管器]** 更新应用监控数据表元数据，用于版本控制备份分类。 by @cgyrock

### 🐛 修复

- **[undefined]**

  - 对齐 Nginx 配置路径 ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
  - 修复多语言文档中的死链，并默认开启文档构建时的死链检测。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
  - 修复依赖与构建校验流水线，避免独立 pro 插件 checkout 失败时被静默跳过而导致构建覆盖缺失。 ([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn
  - 修复翻译膨胀文件，对齐多语言文档结构。 ([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn
  - 修复文档站语言切换器生成错误 URL（如 `/cn/es/` 而非 `/es/`）的问题。 ([#9233](https://github.com/nocobase/nocobase/pull/9233)) by @Molunerfinn
- **[client-v2]**

  - 修复 client-v2 阅读态 JSON 字段对象值显示为空的问题。 ([#9714](https://github.com/nocobase/nocobase/pull/9714)) by @katherinehhh
  - 修复 V2 选项字段在本地化环境下错误翻译普通选项标签的问题。 ([#9708](https://github.com/nocobase/nocobase/pull/9708)) by @katherinehhh
  - 修复 v2 表格自定义列宽设置为 0 时列不可见的问题。 ([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh
  - 调整所有关系字段选择，限制最多两层的关联字段 ([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx
  - 修复菜单联动规则保存报错的问题 ([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - 修复 v2 页面区块上方间距过大的问题 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
  - 修复批量更新操作字段赋值配置异常问题 ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh
  - 修复子应用登录页标签直接显示翻译模板的问题，并避免 v2 认证方式编辑抽屉在提交的时候可能遗漏字段的问题。 ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn
  - 通过使用 CSS line-clamp 替代 antd Typography 的 ellipsis 测量，优化插件管理页面的性能。 ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn
  - 修复页面语言元信息，使应用页面跟随当前应用语言，而不是固定标记为英文。 ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
  - 修复 dnd-kit 依赖注册不一致的问题。 ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
  - 修复看板插件 v2 路由因客户端未提供 dnd-kit 依赖而加载失败的问题。 ([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
  - v2 公共 Table 组件默认展示分页数量选择器，行为对齐 v1。 ([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
  - 修复表格中关系字段标题字段选项列表为空的问题 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
  - v2 布局中过滤 v1 菜单后保留空分组 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
  - 修复启用插件弹窗后方页面变空白的问题 ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe
  - 修复 v1 后台页面在生产构建下引用 v2 插件模块时崩溃的问题。 ([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn
  - 修复字段值配置中选择关系字段报错的问题。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  - 修复应用启动后会闪一下 404 页面的问题 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
  - 修复部分 v2 页面加载远程插件失败的问题 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
  - 修复 v2 页面区块拖拽时占位高亮和落点错误的问题 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
  - 修复远程插件加载时已带 `.JS` 后缀的插件 URL 被错误解析成重复 `.JS.JS` 路径的问题。 ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
  - 修复触发工作流按钮无法配置绑定工作流的问题 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher
- **[client]**

  - 修复刷新页面后区块偶现误提示数据表已删除的问题 ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe
  - 修复 v2 子表单中子表格无法添加第二条数据的问题 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 修复 v2 时间字段格式设置后不生效问题 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 提高 v1扫描输入组件文件上传上限 到 10 MB ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - 修复 v2 移动端日期弹窗使用当前时间而不是表单值的问题 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 修复开发模式下已构建 storage 插件依赖本地源码插件命名导出时加载失败的问题。 ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  - 修复系统设置提交后页面显示为空的问题 ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe
  - 关联字段的选择弹框中过滤非必要的可选区块 ([#9224](https://github.com/nocobase/nocobase/pull/9224)) by @jiannx
  - 修复切换菜单后页面标题没有更新的问题 ([#8864](https://github.com/nocobase/nocobase/pull/8864)) by @zhangzhonghe
- **[flow-engine]**

  - 修复鼠标移到关联字段分组时字段搜索内容被清空的问题 ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe
  - 修复搜索框输入时级联菜单不稳定的问题 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe
  - 修复控制台不正确的错误日志信息。 ([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
  - 修复子模型菜单中关系字段子菜单状态不稳定的问题 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
  - 添加设置表单控件和详情控件的JS片段 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx
- **[build]**

  - 服务端构建中的文本资源现在会作为文件复制，不再被转换成 JavaScript 模块。 ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  - 修复 v1 client 构建在引用其他插件 `/client-v2` 入口时报错的问题。 ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
- **[cli-v1]**

  - 修复 create-nocobase-app 项目的开发启动问题，复用已发布应用壳并支持本地插件开发。 ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
  - 修复通过 create-nocobase-app 创建的应用在开发启动时因 app-dev 客户端路径解析错误导致构建失败的问题。 ([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn
- **[server]**

  - 修复子应用 OAuth 发现请求被错误路由为主应用请求的问题 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
  - 支持按 hostname 获取受理应用 ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile
- **[cli]**

  - 修复 CLI 布尔选项无法通过否定参数关闭的问题 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
  - 修复 Windows 上 CLI OAuth 登录可能因授权链接过长而失败的问题 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile
- **[ai]** 修复 AI 员工注册时缺少 category 字段设置的问题 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock
- **[test]** 修复了插件构建对 `big.JS` 这类带点号包名的处理，使其服务端依赖能够正确打包到 `dist/node_modules`。 ([#8953](https://github.com/nocobase/nocobase/pull/8953)) by @Molunerfinn
- **[日历]**

  - 修复 v2 日历区块详情弹窗中无法添加详情和编辑区块的问题 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) by @jiannx
  - 修复 v2 页面中日历事件未按配置的颜色字段显示颜色的问题。 ([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
  - 修复日历更多事项面板中事项 hover 时未显示手型光标的问题 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
  - 不将日历操作注册到其他块 ([#9200](https://github.com/nocobase/nocobase/pull/9200)) by @jiannx
- **[AI 员工]**

  - 优化 AI 员工数据查询提示词，引导其先加载所需技能再使用查询工具。 ([#9725](https://github.com/nocobase/nocobase/pull/9725)) by @cgyrock
  - 修复 client-v2 图表设置中缺少 Dara 助手按钮的问题。 ([#9696](https://github.com/nocobase/nocobase/pull/9696)) by @cgyrock
  - 工作流 AI 员工节点可使用默认模型 ([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock
  - 修复工作流 AI 员工节点调用`ctx.get`报错问题 ([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
  - 修复 AI 员工使用只读知识库时报错问题 ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
  - 修复工具调用流式事件被拆分时，AI 工具调用卡片无法即时显示的问题 ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
  - 修复工作流 AI 员工节点指定的操作人角色权限不生效问题 ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  - 修复 AI 插件启动失败问题 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
  - 修复工作流 AI 员工节点指定使用工具后无法正常结束节点调用 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
  - 修复工作流 AI 员工节点读取关系字段附件报错问题 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  - 修复工作流 AI 员工节点切换 AI 员工后会清空技能的问题 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
  - 修复 AI 员工快捷任务渲染报错问题 ([#9267](https://github.com/nocobase/nocobase/pull/9267)) by @cgyrock
  - 修复获取 AI 员工列表接口报错问题 ([#9241](https://github.com/nocobase/nocobase/pull/9241)) by @cgyrock
  - 优化 Atlas 的任务分配策略，并让 Viz 在报告类请求中使用业务报告工作流 ([#9229](https://github.com/nocobase/nocobase/pull/9229)) by @2013xile
  - 工作流 AI 员工节点交互 UI调整及Bug 修复 ([#9213](https://github.com/nocobase/nocobase/pull/9213)) by @cgyrock
  - 修复 AI 员工节点日志记录异常问题 ([#9180](https://github.com/nocobase/nocobase/pull/9180)) by @cgyrock
  - 修复 ACL 导致聚合查询排序丢失的问题 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile
  - 修复 AI 员工对话中异常消息不显示问题 ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock
  - 修复 AI 员工无法使用 skills的问题 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock
  - 修复禁用 getSkill工具后大模型仍然尝试加载技能的问题 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock
  - 修复 core 包中 ai 模块无法通过的测试用例 ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock
- **[数据源管理]**

  - 修复 v2 数据源字段配置抽屉修改标题字段后，关闭再打开仍显示旧标题字段的问题。 ([#9720](https://github.com/nocobase/nocobase/pull/9720)) by @katherinehhh
  - 改进 V2 数据源管理中数据表、字段、同步和加载数据表操作失败时的错误提示。 ([#9710](https://github.com/nocobase/nocobase/pull/9710)) by @katherinehhh
  - 修复 v2 数据源管理中多空间字段的本地化显示问题。 ([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx
  - 优化 MCP 工具命名；精简冗余的接口输出结果，避免消耗大量的 AI 对话上下文 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile
- **[区块：地图]** 修复启用地图插件后，v2 数据源管理的添加字段菜单中缺少地图几何字段的问题。 ([#9715](https://github.com/nocobase/nocobase/pull/9715)) by @katherinehhh
- **[数据表: SQL]** 禁止 SQL 数据表访问敏感的 PostgreSQL 元数据 ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile
- **[工作流：自定义操作事件]**

  - 修复工作台操作面板按钮列表中缺少触发工作流操作的问题。 ([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh
  - 修复 v2 区块操作菜单重复显示触发工作流的问题 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
  - 自定义操作事件绑定工作流时按当前区块数据表过滤可选工作流。 ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher
- **[操作：复制记录]** 修复复制操作提交失败未重置按钮状态的问题 ([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[区块：甘特图]**

  - 优化甘特图提示框位置，避免遮挡任务条，并统一任务名称在任务条内外的对齐方式 ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx
  - 修复 v2 甘特图 shared 文件夹路径，并添加斑马纹。 ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[授权设置]**

  - 新增授权设置的 client-v2 支持，并支持商业授权逻辑注入 client-v2 插件入口。 ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
  - 解决依赖软链接问题 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos
- **[文件管理器]** 优化 PDF 预览失败提示，并补充外部存储 CORS 配置说明。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
  参考文档：[文件预览](docs/docs/cn/file-manager/file-preview/index.md)
- **[区块：iframe]** 修复 iframe 设置区块高度后内容未撑满区块的问题 ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
- **[操作：导出记录]** 修复数据表关系字段较多时导出按钮的字段配置点击卡顿的问题 ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
- **[本地化]** 修复 AI 翻译任务中内建词条参考翻译的取值问题 ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
- **[用户认证]** 修复 WebSocket 鉴权 token 关联到未加载或缺失的 authType 时，服务进程崩溃的问题。 ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
- **[工作流：JavaScript 节点]**

  - 修复生产构建中工作流 JavaScript 节点 QuickJS 运行时包加载失败的问题。 ([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
  - 修复配置 JavaScript 节点时的报错 ([#9169](https://github.com/nocobase/nocobase/pull/9169)) by @mytharcher
- **[Markdown]** 修复 v2 Markdown 区块报错的问题 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe
- **[区块：树]**

  - 优化树筛选区块设置，并修复不支持的关联记录入口、标题字段缺失提示以及关闭搜索后的重置行为。 ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx
  - 修复筛选区块节点显示异常 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx
- **[移动端（已废弃）]** 修复移动端消息弹窗无法关闭和滑动的问题 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
- **[AI: MCP 服务器]**

  - 修复 MCP 服务器打包时运行时依赖未包含的问题 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
  - 修复 MCP 通用 CRUD 工具因透传无关请求头导致的鉴权不匹配问题 ([#8983](https://github.com/nocobase/nocobase/pull/8983)) by @2013xile
  - 修复 Swagger 生成的 MCP 工具在输入 schema 含有 `null` 类型或 `nullable` 标记时无法通过 OpenAI 工具校验的问题 ([#8994](https://github.com/nocobase/nocobase/pull/8994)) by @2013xile
- **[前端流引擎]** 修复 AI 搭建的区块转换成引用模板后无法再转换成复制模板。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
- **[区块：看板]**

  - 优化看板卡片紧凑样式，优化快速创建弹窗模板选择。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  - 修复弹窗或二级页面中关联看板区块使用未解析运行时资源参数的问题。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
  - 修复字段配置浮层重复显示 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx
- **[操作：自定义请求]** 升级 koa 到 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
- **[数据可视化]** 修复流程页面中图表查询配置字段下拉为空的问题 ([#9276](https://github.com/nocobase/nocobase/pull/9276)) by @2013xile
- **[IdP: OAuth]**

  - 修复 OAuth CLI 登录失败的问题，并限制动态注册只能使用本地回调地址 ([#9248](https://github.com/nocobase/nocobase/pull/9248)) by @2013xile
  - 修复服务重启后 OAuth 客户端注册和令牌刷新失败的问题 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile
  - 修复普通 API 请求的 OAuth 访问 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile
  - 修复子应用中 MCP OAuth 登录后跳转错误的问题 ([#9015](https://github.com/nocobase/nocobase/pull/9015)) by @2013xile
- **[工作流：聚合查询节点]** 修复聚合节点由于错误的验证规则无法保存的问题 ([#9208](https://github.com/nocobase/nocobase/pull/9208)) by @mytharcher
- **[工作流：循环节点]** 修复工作流节点的验证规则 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher
- **[权限控制]** 更新权限管理的 swagger 文档，增强 MCP 服务 ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y
- **[工作流：邮件发送节点]** 修复可使用变量的字段的验证规则 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher
- **[工作流]**

  - 修复条件节点错误的验证规则 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher
  - 修复数据表触发器的触发模式不能设置为“新增或更新”的问题 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher
- **[密码策略]** 修复登录失败时真实错误被 "argument #1 unsupported type undefined" 覆盖的问题（当底层错误没有状态码时）。 by @Molunerfinn
- **[数据源：REST API]** 修复数据源管理器 client-v2 类型声明不一致时，REST API 数据源插件声明构建失败的问题。 by @katherinehhh
- **[plugin-commercial]** 新增商业授权的 client-v2 组件和顶部授权状态入口。 by @jiannx
- **[认证：SAML 2.0]** 修复 SAML 自动重定向拦截器在每次页面跳转时重复请求导致应用闪屏、抽屉被重复打开的问题。 by @Molunerfinn
- **[工作流：Webhook 触发器]** 修复由于验证规则导致创建响应节点失败的问题 by @mytharcher
- **[迁移管理]** 修复 migration:create 从异步任务记录中返回 taskId 的问题。 by @Andrew1989Y
- **[模板打印]** 修复模板打印 PDF 转换报错未正确返回到前端的问题 by @jiannx
- **[邮件管理]**

  - 邮件发送后不显示关闭确认 by @jiannx
  - 修复邮箱别名标题显示问题 by @jiannx

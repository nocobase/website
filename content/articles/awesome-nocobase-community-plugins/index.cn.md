从 NocoBase 诞生的第一天起，我们就坚定地选择了插件化架构。

这种架构让 NocoBase 具备更强的灵活性和扩展能力，开发者可以根据不同业务需求持续添加新的功能，而无需修改核心系统。

随着 AI 编程工具的发展，插件开发正在变得更加简单。借助 Claude Code、Codex、Cursor 等工具，以及 [NocoBase 提供的 AI 插件开发能力](https://docs.nocobase.com/cn/ai-dev)，更多开发者可以快速创建自己的插件。

现在，你可以在 [Awesome NocoBase](https://github.com/nocobase/awesome-nocobase) 中寻找社区插件，也可以分享自己开发的扩展，共同建设 NocoBase 插件生态。

![Frame 94-ojy7ci.jpg](https://static-docs.nocobase.com/Frame%2094-ojy7ci.jpg)

## 已收录的社区插件

目前，[Awesome NocoBase](https://github.com/nocobase/awesome-nocobase) 已经收录了一批由社区开发者创建的插件。这些插件来自不同开发者在真实项目中的实践，有的解决通用需求，有的扩展 NocoBase 的基础能力，也有的针对特定业务场景提供解决方案。

### [NocoBase Hooks](https://github.com/Bunnarin/nocobase-plugin-hooks)

**作者：**[Bunnarin](https://github.com/Bunnarin)

NocoBase Hooks 提供了一套类似 PocketBase `pb_hooks` 的扩展方式。开发者可以直接在 `storage/hooks/` 目录中编写服务端扩展，并使用数据库事件、中间件、自定义 API、ACL 和日志等 NocoBase 能力。它还支持自动加载、开发环境热重载、TypeScript 和独立依赖管理。

### [Global Search 全局搜索](https://github.com/trumanharry/nocobase-globalsearch-plugin)

**作者：**[trumanharry](https://github.com/trumanharry)

Global Search 为 NocoBase 管理界面增加跨数据表的全局搜索入口，适合同时管理客户、订单、项目和联系人等多类数据的系统。

### [Office File Previewer 文件预览](https://github.com/OneTwoSmall/nocobase-custom-plugins/tree/main/plugins/%40nocobase/plugin-file-previewer-office)

**作者：**[OneTwoSmall](https://github.com/OneTwoSmall)

Office File Previewer 为 NocoBase 提供更灵活的文件预览能力，支持 Office 文档及其他文件格式的多种预览方式。

对于知识库、合同管理、档案管理和内部文件系统等场景，用户可以直接在 NocoBase 页面中查看文件内容，减少下载文件和切换应用的操作。

### [Enhanced Table Block 增强表格](https://github.com/OneTwoSmall/nocobase-custom-plugins/tree/main/plugins/%40nocobase/plugin-enhanced-table-block)

**作者：**[OneTwoSmall](https://github.com/OneTwoSmall)

Enhanced Table Block 对 NocoBase 的表格区块进行了扩展，提供更丰富的数据展示与操作能力。

它适合报表、库存、订单和财务数据等依赖表格操作的场景，让用户能够用更接近电子表格的方式查看和处理数据。

### [Auth: Email 邮件验证码登录](https://github.com/OneTwoSmall/nocobase-custom-plugins/tree/main/plugins/%40nocobase/plugin-auth-email)

**作者：**[OneTwoSmall](https://github.com/OneTwoSmall)

支持通过邮件验证码进行身份认证。

### [Custom Login Page 自定义登录界面](https://github.com/taichuy/nocobase-plugin-login-lite)

**作者：**[JAVA-LW](https://github.com/JAVA-LW)

Custom Login Page 允许管理员直接在后台配置 NocoBase 登录页面的主题、样式和展示效果。

它适合需要统一企业品牌形象，或者希望为客户、员工和合作伙伴提供独立登录入口的项目。

### [Block: Tabs 区块：标签页](https://github.com/vokylin/plugin-block-tabs)

**作者：**[zoudeming-vk](https://github.com/zoudeming-vk)

Block: Tabs 提供了标签页区块，可以将多个 NocoBase 区块组织在同一个标签页界面中。

对于信息较多的详情页和管理页面，它可以减少页面滚动，将相关内容按照不同标签分组展示，让页面结构更加清晰。

### [Watermark 水印](https://github.com/fengwenkai168/nocobase-plugin/)

**作者：**[fengwenkai168](https://github.com/fengwenkai168)

Watermark 可以在 NocoBase 页面上添加半透明水印，并显示当前登录用户的信息。

管理员还可以调整水印文字、透明度和字号。它适合合同、客户资料和内部敏感数据等需要降低截图泄露风险的场景。

### [Role Switcher 角色切换](https://github.com/michaelxmn/plugin-role-switcher)

**作者：**[michaelxmn](https://github.com/michaelxmn)

Role Switcher 在顶部导航栏中增加了快捷角色切换入口。

对于同时拥有多个角色的用户，以及需要反复测试不同权限配置的管理员和开发者来说，它可以让角色切换更直观、更快捷。

### [Per-User Column Settings 用户个性化列设置](https://github.com/Albert-mah/nocobase-plugin-user-columns)

**作者：**[Albert-mah](https://github.com/Albert-mah)

Per-User Column Settings 允许每位用户分别保存自己的表格列设置。

用户可以按照个人习惯显示或隐藏字段、拖拽调整顺序、固定列和修改列宽，同时不会影响其他用户看到的页面配置。它尤其适合字段较多、不同角色关注信息不同的业务系统。

### [Field Sequence Pro 自动编码增强](https://github.com/ericto888/nocobase-plugin-field-sequence-pro)

**作者：**[ericto888](https://github.com/ericto888)

Field Sequence Pro 在官方自动编码字段基础上进行了扩展，增加表单变量取值、值映射字典和多维度隔离计数三项能力，同时保留原有自动编码功能。

它适合订单编号、合同编号、业务流水号等需要根据不同规则生成唯一编码的业务场景。

### [HTTP Error Handler 全局错误处理](https://github.com/Albert-mah/plugin-http-error-handler)

**作者：**[Albert-mahmahuantest](https://github.com/Albert-mah)

HTTP Error Handler 为 NocoBase 提供全局 4xx/5xx 错误处理能力。

管理员可以通过 JS 表达式配置错误处理规则，将未处理的 API 错误展示为自定义错误页面，或自动跳转到指定页面。它适合需要统一错误提示、优化用户体验的业务系统。

### [Workflow: URL Trigger URL 触发器](https://github.com/Albert-mah/plugin-workflow-url-trigger)

**作者：**[Albert-mah](https://github.com/Albert-mah)

Workflow: URL Trigger 为工作流提供 URL 事件触发能力，可以将外部 HTTP 请求作为工作流入口。

它支持通配符和正则匹配请求地址，并可以将请求参数作为工作流变量，结合 HTTP Response 节点实现 Webhook、API 集成和自动化流程。

### [Workflow: Crypto 加密节点](https://github.com/Albert-mah/plugin-workflow-crypto)

**作者：**[Albert-mah](https://github.com/Albert-mah)

Workflow: Crypto 提供 AES 加密和解密工作流节点。

它支持变量输入，并可以在解密后自动解析 JSON 数据，适合需要与外部系统进行加密数据交换的场景。

### [Workflow: Auth Token 认证令牌](https://github.com/Albert-mah/plugin-workflow-auth-token)

**作者：**[Albert-mah](https://github.com/Albert-mah)

Workflow: Auth Token 可以在工作流中生成真实的 NocoBase 登录 JWT。

它可以用于创建 SSO 自动登录链接和程序化访问令牌，并可结合 URL Trigger 和 Crypto 实现完整的单点登录流程。

## 一起建设 NocoBase 的插件生态

如果你已经开发了 NocoBase 插件，欢迎将它提交到 [Awesome NocoBase](https://github.com/nocobase/awesome-nocobase)。

我们希望让更多用户发现有价值的插件，也让优秀的插件和开发者获得更多关注。

未来，我们也会定期介绍优秀的社区插件及其背后的开发者。

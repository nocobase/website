### 🎉 新特性

- **[client-v2]**

  - 支持表单的提交操作配置字段赋值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
  - 支持嵌入 v2 页面和公开表单 v2 页面 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - v2 管理端新增「安全」父菜单和「Token 策略」设置页；用户中心支持「修改密码」。 ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
  - client-v2 插件管理页面重写为响应式卡片布局，支持分类过滤、搜索、启用/禁用/删除、批量启用以及插件详情弹窗；同时为 client-v1 的插件管理页面补充窄屏响应式布局。 ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
- **[cli]**

  - 添加 API 命令的兼容规则 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
  - 支持 Basic 认证 ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
- **[Office 文件预览]** 将 Office 文件预览插件迁移到 v2（FlowEngine）版本。 ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn
- **[工作流]**

  - 为工作流增加超时控制，设置了超时选项后，运行时间超长的工作流将被自动终止 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
  - 新增管理员 API，用于从头节点或指定节点重新执行已开始的工作流执行。 ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher
- **[IdP: OAuth]** 增加多应用部署中的应用单点登录基础能力 ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile
- **[区块：甘特图]** 新增甘特图区块 v2 支持。 ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx
- **[应用单点登录]** 新增用于应用之间自动登录的 App SSO 插件 by @2013xile
- **[密码策略]** 将密码策略插件迁移到新的 client-v2 管理后台，提供密码策略与已锁定用户两个设置页，并在用户中心的修改密码表单中接入客户端密码规则校验。 by @Molunerfinn
- **[工作流：Webhook 触发器]** 为超时的 Webhook 工作流（同步模式）增加 408 响应状态 by @mytharcher
- **[工作流：子流程]** 支持工作流的超时配置 by @mytharcher
- **[认证：OIDC]** 迁移 `plugin-auth-oidc` 到 v2 管理端,登录按钮、管理员设置表单和自动 SSO 跳转在 v2 下可用。 by @Molunerfinn
- **[工作流：审批]** 支持工作流的超时配置 by @mytharcher
- **[应用监管器]** 新增子应用的 App SSO 配置 by @2013xile
- **[认证：LDAP]** 新增 v2 客户端入口，使 LDAP 认证器在 v2 应用中可正常渲染登录表单和管理设置。 by @Molunerfinn

### 🚀 优化

- **[client-v2]**

  - v2 表格区块新增启用行选择设置项 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh
  - 支持 v2 操作面板操作颜色配置 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh
  - 移除菜单配置中的隐藏选项 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe
- **[client]** 移除菜单项设置中的隐藏选项 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe
- **[cli]** 优化 app upgrade 流程 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos
- **[通知管理]** 通知管理相关插件迁移到 v2 版本。 ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn
- **[AI 员工]** 改进 LLM 的 Base URL 字段，使其在创建和编辑表单中都支持使用全局变量。 ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock
- **[工作流]** 重构工作流异步节点可用性检查 ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher
- **[数据可视化]** 图表区块支持 client-v2。 ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
- **[IP 限制]** 新增 IP 限制插件的 v2 版本。 by @Molunerfinn

### 🐛 修复

- **[client]**

  - 修复顶部导航栏数字徽标背景过宽的问题 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
  - 提高 v1扫描输入组件文件上传上限到 10 MB ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - 修复切换菜单后页面标签页消失的问题 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
  - 修复 v2 子表单中子表格无法添加第二条数据的问题 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 修复 v2 时间字段格式设置后不生效问题 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 修复 v2 移动端日期弹窗使用当前时间而不是表单值的问题 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 修复子表单字段通过联动规则显示后提交仍被过滤的问题 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  - 修复 v2 时间字段格式设置后不生效问题 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 修复 v2 子表单中子表格无法添加第二条数据的问题 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 修复 v2 移动端日期弹窗使用当前时间而不是表单值的问题 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 提高 v1扫描输入组件文件上传上限到 10 MB ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
- **[flow-engine]**

  - 修复前端日志等级不正确的问题。 ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
  - 修复搜索框输入时级联菜单不稳定的问题 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe
  - 修复弹窗中表单提交成功后表格操作联动规则执行错误的问题。 ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
- **[ai]** 将 LangChain 相关依赖锁定到稳定版本，避免 Ollama 模型工具调用异常，并规避存在问题的上游版本 ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
- **[client-v2]**

  - 修复子应用登录页标签直接显示翻译模板的问题，并避免 v2 认证方式编辑抽屉在提交的时候可能遗漏字段的问题。 ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn
  - 通过使用 CSS line-clamp 替代 antd Typography 的 ellipsis 测量，优化插件管理页面的性能。 ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn
  - 修复页面语言元信息，使应用页面跟随当前应用语言，而不是固定标记为英文。 ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
- **[build]**

  - 服务端构建中的文本资源现在会作为文件复制，不再被转换成 JavaScript 模块。 ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  - 修复插件服务端混淆产物在 Node.js 运行时注入浏览器全局变量的问题。 ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
- **[区块：甘特图]** 修复 v2 甘特图 shared 文件夹路径，并添加斑马纹。 ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[授权设置]** 新增授权设置的 client-v2 支持，并支持商业授权逻辑注入 client-v2 插件入口。 ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[工作流：自定义操作事件]**

  - 修复 v2 区块操作菜单重复显示触发工作流的问题 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
  - 自定义操作事件绑定工作流时按当前区块数据表过滤可选工作流。 ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher
  - 修复自定义操作事件表格按钮在多行数据上下文下仍可选择自定义上下文工作流的问题。 ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
- **[数据表：树]** 修复树形数据存在父子环时查询报错不明确的问题 ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
- **[文件管理器]**

  - 优化 PDF 预览失败提示，并补充外部存储 CORS 配置说明。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考文档：[文件预览](docs/docs/cn/file-manager/file-preview/index.md)
  - 优化 PDF 预览失败提示，并补充外部存储 CORS 配置说明。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考文档：[文件预览](docs/docs/cn/file-manager/file-preview/index.md)
  - 使用 PDF.js 安全渲染 PDF 预览，避免通过 iframe 直接加载原始 PDF。 ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
  - 修复文件上传时 Unicode 文件名被错误二次解码的问题，避免生成包含控制字符的对象键。 ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
- **[AI 员工]**

  - 修复引用表格区块删除后 AI 快捷操作按钮上下文变成一个空区块的问题。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
  - 修复表格上下文提示词中错误的数据查询工具名称 ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
- **[工作流：人工处理节点]** 修复工作流人工任务暂存后未持久化已填写表单内容的问题。 ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
- **[plugin-commercial]** 新增商业授权的 client-v2 组件和顶部授权状态入口。 by @jiannx
- **[AI: 知识库]** 将 LangChain 相关依赖锁定到稳定版本，避免 Ollama 模型工具调用异常，并规避存在问题的上游版本 by @cgyrock
- **[迁移管理]** 修复 PostgreSQL 迁移差异计算，避免子表本地列转为继承列时错误生成删除列语句。 by @hongboji
- **[模板打印]** 修复模板打印 PDF 转换报错未正确返回到前端的问题 by @jiannx
- **[认证：OIDC]** 修复 SSO 登录回调收到外部跳转地址时可能泄露 Token 的问题 by @2013xile
- **[工作流：审批]**

  - 修复 `jobs:resume` 接口未被审批节点支持的问题 by @mytharcher
  - 修复审批撤回时提交的业务数据更新，并遵循业务表更新权限控制。 by @mytharcher
  - 修复审批流因非审批节点失败终止后，审批待办记录和统计数字悬空的问题。 by @mytharcher

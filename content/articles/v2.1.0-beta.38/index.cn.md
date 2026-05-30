### 🎉 新特性

- **[cli]** 添加 API 命令的兼容规则 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
- **[client-v2]**

  - 支持嵌入 v2 页面和公开表单 v2 页面 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - client-v2 插件管理页面重写为响应式卡片布局，支持分类过滤、搜索、启用/禁用/删除、批量启用以及插件详情弹窗；同时为 client-v1 的插件管理页面补充窄屏响应式布局。 ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
- **[工作流]**

  - 为工作流增加超时控制，设置了超时选项后，运行时间超长的工作流将被自动终止 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
  - 新增管理员 API，用于从头节点或指定节点重新执行已开始的工作流执行。 ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher
- **[区块：甘特图]** 新增甘特图区块 v2 支持。 ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx
- **[工作流：Webhook 触发器]** 为超时的 Webhook 工作流（同步模式）增加 408 响应状态 by @mytharcher
- **[工作流：子流程]** 支持工作流的超时配置 by @mytharcher
- **[认证：OIDC]** 迁移 `plugin-auth-oidc` 到 v2 管理端,登录按钮、管理员设置表单和自动 SSO 跳转在 v2 下可用。 by @Molunerfinn
- **[工作流：审批]** 支持工作流的超时配置 by @mytharcher
- **[认证：LDAP]** 新增 v2 客户端入口，使 LDAP 认证器在 v2 应用中可正常渲染登录表单和管理设置。 by @Molunerfinn

### 🚀 优化

- **[client-v2]**

  - v2 表格区块新增启用行选择设置项 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh
  - 支持 v2 操作面板操作颜色配置 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh
  - 移除菜单配置中的隐藏选项 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe
- **[client]** 移除菜单项设置中的隐藏选项 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe
- **[cli]** 优化 app upgrade 流程 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos
- **[AI 员工]** 改进 LLM 的 Base URL 字段，使其在创建和编辑表单中都支持使用全局变量。 ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock
- **[IP 限制]** 新增 IP 限制插件的 v2 版本。 by @Molunerfinn

### 🐛 修复

- **[flow-engine]**

  - 修复前端日志等级不正确的问题。 ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
  - 修复搜索框输入时级联菜单不稳定的问题 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe
  - 修复弹窗中表单提交成功后表格操作联动规则执行错误的问题。 ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
- **[ai]** 将 LangChain 相关依赖锁定到稳定版本，避免 Ollama 模型工具调用异常，并规避存在问题的上游版本 ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
- **[client-v2]**

  - 修复子应用登录页标签直接显示翻译模板的问题，并避免 v2 认证方式编辑抽屉在提交的时候可能遗漏字段的问题。 ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn
  - 通过使用 CSS line-clamp 替代 antd Typography 的 ellipsis 测量，优化插件管理页面的性能。 ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn
- **[client]**

  - 修复 v2 时间字段格式设置后不生效问题 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 修复子表单字段通过联动规则显示后提交仍被过滤的问题 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  - 提高 v1扫描输入组件文件上传上限到 10 MB ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - 修复 v2 移动端日期弹窗使用当前时间而不是表单值的问题 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 修复切换菜单后页面标签页消失的问题 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
  - 修复 v2 子表单中子表格无法添加第二条数据的问题 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 提高 v1扫描输入组件文件上传上限到 10 MB ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - 修复 v2 移动端日期弹窗使用当前时间而不是表单值的问题 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 修复 v2 子表单中子表格无法添加第二条数据的问题 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 修复 v2 时间字段格式设置后不生效问题 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
- **[数据表：树]** 修复树形数据存在父子环时查询报错不明确的问题 ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
- **[工作流：自定义操作事件]**

  - 修复自定义操作事件表格按钮在多行数据上下文下仍可选择自定义上下文工作流的问题。 ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
  - 自定义操作事件绑定工作流时按当前区块数据表过滤可选工作流。 ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher
- **[文件管理器]**

  - 优化 PDF 预览失败提示，并补充外部存储 CORS 配置说明。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考文档：[文件预览](docs/docs/cn/file-manager/file-preview/index.md)
  - 优化 PDF 预览失败提示，并补充外部存储 CORS 配置说明。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考文档：[文件预览](docs/docs/cn/file-manager/file-preview/index.md)
  - 修复文件上传时 Unicode 文件名被错误二次解码的问题，避免生成包含控制字符的对象键。 ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
- **[AI: 知识库]** 将 LangChain 相关依赖锁定到稳定版本，避免 Ollama 模型工具调用异常，并规避存在问题的上游版本 by @cgyrock
- **[模板打印]** 修复模板打印 PDF 转换报错未正确返回到前端的问题 by @jiannx

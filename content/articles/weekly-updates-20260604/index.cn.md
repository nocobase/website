汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/cn/blog/v2.0.61)

*发布日期：2026-06-03*

### 🚀 优化

- **[client]** 增强部分内置 RunJS 函数的自动补全支持。([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[undefined]** 更新嵌入 NocoBase 开源插件的使用文档。([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  参考文档：[嵌入 NocoBase](https://docs.nocobase.com/cn/integration/embed/)

### 🐛 修复

- **[flow-engine]**

  - 修复为子表单设置字段值时页面卡死的问题。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - 修复切换 UI 配置模式开关后，弹窗内部存在旧 UI 数据的问题。([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
- **[client]**

  - 修复表格区块中记录操作联动规则行为不正确的问题。([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - 修复移动端选择关系字段数据后不显示的问题。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - 修复通过联动规则由隐藏切换为显示后，字段变为只读的问题。([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** 修复 nginx 模板，使 `.mjs` 静态资源以 JavaScript MIME 类型返回。([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 修复导入纯数字密码值可能失败的问题。([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[AI 员工]** 修复 AI 提供商 Base URL 校验问题。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
- **[Flow engine]**

  - 修复弹窗标签页拖动调整顺序不生效的问题。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - 修复复制模板后修改区块内容可能影响原始区块内容的问题。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[通知：站内信]** 修复站内消息频道时间戳过滤条件中的 SQL 注入风险。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[授权设置]** 修复 pkg 登录检查缓慢或不可达时，许可证设置页面长时间卡住的问题。([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[工作流：JavaScript 节点]** 明确工作流 JavaScript 模块支持模式为非安全模式，不能作为权限边界。([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  参考文档：[工作流 JavaScript 节点](docs/docs/cn/workflow/nodes/javascript.md)
- **[权限控制]** 修复联合角色作为默认角色时，首次登录权限不完整的问题。([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[文件管理器]** 修复本地文件存储路径校验，阻止不安全路径逃逸出配置的存储根目录。([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[密码策略]** 修复密码策略校验纯数字密码值时可能失败的问题。 by @2013xile

### [v2.0.60](https://www.nocobase.com/cn/blog/v2.0.60)

*发布日期：2026-05-29*

### 🚀 优化

- **[AI 员工]** 改进 LLM 的 Base URL 字段，使其在创建和编辑表单中都支持使用全局变量。 ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock

### 🐛 修复

- **[client]** 修复顶部导航栏数字徽标背景过宽的问题 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[AI 员工]** 修复引用表格区块删除后 AI 快捷操作按钮上下文变成一个空区块的问题。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[迁移管理]** 修复 PostgreSQL 迁移差异计算，避免子表本地列转为继承列时错误生成删除列语句。 by @hongboji

### [v2.0.59](https://www.nocobase.com/cn/blog/v2.0.59)

*发布日期：2026-05-28*

### 🐛 修复

* **[ai]** 将 LangChain 相关依赖锁定到稳定版本，避免 Ollama 模型工具调用异常，并规避存在问题的上游版本。([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
* **[flow-engine]** 修复前端日志等级不正确的问题。([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
* **[数据表：树]** 修复树形数据存在父子环时，查询报错信息不明确的问题。([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
* **[AI：知识库]** 将 LangChain 相关依赖锁定到稳定版本，避免 Ollama 模型工具调用异常，并规避存在问题的上游版本。 by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/cn/blog/v2.1.0-beta.44)

*发布日期：2026-06-03*

### 🚀 优化

- **[工作流：审批]** 调整审批触发器和节点配置的验证规则，确保 UI 相关字段存在。 by @mytharcher

### 🐛 修复

- **[client]** 修复移动端选择关系字段数据后不显示的问题。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
- **[client-v2]**

  - 修复菜单联动规则保存时报错的问题。([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - 修复 v2 页面区块上方间距过大的问题。([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
- **[flow-engine]** 修复为子表单设置字段值时页面卡死的问题。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
- **[AI 员工]**

  - 修复 AI 提供商 Base URL 校验问题。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
  - 修复工作流 AI 员工节点调用 `ctx.get` 报错的问题。([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
- **[通知：站内信]** 修复站内消息频道时间戳过滤条件中的 SQL 注入风险。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[操作：复制记录]** 修复复制操作提交失败后未重置按钮状态的问题。([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[日历]** 修复 v2 页面中日历事件未按配置的颜色字段显示颜色的问题。([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
- **[Flow engine]**

  - 修复复制模板后修改区块内容可能影响原始区块内容的问题。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
  - 修复弹窗标签页拖动调整顺序不生效的问题。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/cn/blog/v2.1.0-beta.43)

*发布日期：2026-06-02*

### 🎉 新特性

- **[client-v2]** 新增 `TypedVariableInput` 组件，让邮件插件 v2 的 SMTP 端口和安全模式等字段既能填类型化常量，也能填 `{{ $env.X }}` 变量。 ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn
- **[权限控制]** 将用户与角色权限设置页迁移到 v2。 ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 优化

- **[undefined]** 更新嵌入 NocoBase 插件的开源版使用说明 ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  参考文档：[嵌入 NocoBase](https://docs.nocobase.com/cn/integration/embed/)
- **[client]** 增强部分 runjs 内置函数的自动补全。 ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[cli]** 优化 CLI 更新策略 ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos

### 🐛 修复

- **[client]**

  - 修复刷新页面后区块偶现误提示数据表已删除的问题 ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe
  - 修复表格行操作联动规则不正确的问题。 ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - 修复v2 表单切换字段显示状态后字段变为只读的问题 ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** 修复 nginx 模板，使 `.mjs` 静态资源以 JavaScript MIME 类型返回。 ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 修复导入纯数字密码值可能失败的问题 ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[flow-engine]**

  - 修复切换 UI 配置模式开关后弹窗内部存在旧 UI 数据的问题。 ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
  - 修复鼠标移到关联字段分组时字段搜索内容被清空的问题 ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe
- **[client-v2]** 修复批量更新操作字段赋值配置异常问题 ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh
- **[文件管理器]** 修复本地文件存储路径校验，阻止不安全路径逃逸出配置的存储根目录。 ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[区块：甘特图]** 优化甘特图提示框位置，避免遮挡任务条，并统一任务名称在任务条内外的对齐方式 ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx
- **[权限控制]** 修复联合角色作为默认角色时首次登录权限不完整的问题 ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[授权设置]** 修复许可证设置页面在 pkg 登录检查缓慢或不可达时长时间卡住的问题 ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[工作流：JavaScript 节点]** 明确工作流 JavaScript 模块支持模式为非安全模式，不能作为权限边界 ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  参考文档：[工作流 JavaScript 节点](docs/docs/cn/workflow/nodes/javascript.md)
- **[密码策略]** 修复密码策略校验纯数字密码值时可能失败的问题 by @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/cn/blog/v2.1.0-beta.40)

*发布日期：2026-05-30*

### 🎉 新特性

- **[client-v2]** 支持表单的提交操作配置字段赋值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
- **[Office 文件预览]** 将 Office 文件预览插件迁移到 v2（FlowEngine）版本。 ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn

### 🚀 优化

- **[通知管理]** 通知管理相关插件迁移到 v2 版本。 ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn

### 🐛 修复

- **[client]** 修复顶部导航栏数字徽标背景过宽的问题 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[区块：甘特图]** 修复 v2 甘特图 shared 文件夹路径，并添加斑马纹。 ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[授权设置]** 新增授权设置的 client-v2 支持，并支持商业授权逻辑注入 client-v2 插件入口。 ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[工作流：自定义操作事件]** 修复 v2 区块操作菜单重复显示触发工作流的问题 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
- **[AI 员工]** 修复引用表格区块删除后 AI 快捷操作按钮上下文变成一个空区块的问题。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[plugin-commercial]** 新增商业授权的 client-v2 组件和顶部授权状态入口。 by @jiannx
- **[迁移管理]** 修复 PostgreSQL 迁移差异计算，避免子表本地列转为继承列时错误生成删除列语句。 by @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/cn/blog/v2.1.0-beta.38)

*发布日期：2026-05-29*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/cn/blog/v2.1.0-alpha.45)

*发布日期：2026-05-29*

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

### 🎉 新特性

- **[client-v2]** 为 V2 操作面板和左上角应用切换入口新增可配置的应用和工作区入口能力。 ([#9893](https://github.com/nocobase/nocobase/pull/9893)) by @katherinehhh

- **[AI 员工]** 新增 Mistral AI 作为 AI 服务的大语言模型供应商。 ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock

- **[工作区管理]** 为 V2 操作面板和应用切换入口新增可配置的应用和工作区入口。 by @katherinehhh

### 🚀 优化

- **[cli]**
  - 重构 CLI 的 setup 启动流程以复用 `nb app start`，统一 API base path 的重定向行为，持久化 env 的共享代理默认配置，并在 Docker 代理端口变化时自动重建容器。 ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

  - 改进 Docker CLI 安装体验，支持配置默认的 NocoBase 镜像仓库和变体，修复代理与 `no-nginx` 镜像端口兼容性，并补充 Docker Nginx/Caddy 安装文档。 ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos

  - 支持手动生成 Nginx/Caddy 代理配置，允许 Docker 部署不内置 Nginx 运行，并统一代理与 CDN 相关的运行时配置。 ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos

- **[undefined]** 调整外部存储 PDF 预览的安全说明。 ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
参考文档：[文件预览](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/cn/file-manager/file-preview/index.md)
- **[utils]** 当未配置 `SERVER_REQUEST_WHITELIST` 且服务端对外请求目标存在 SSRF 风险时，新增日志警告。 ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
参考文档：[环境变量](https://docs.nocobase.com/cn/get-started/installation/env), [全局环境变量](https://docs.nocobase.com/cn/api/app/env)
- **[数据源管理]** V2 配置字段中展示外部数据源不支持的字段，并统一备份恢复表单标签样式。 ([#9983](https://github.com/nocobase/nocobase/pull/9983)) by @katherinehhh

- **[UI 布局]** 优化 v2 移动端标签栏，标签过多时可横向滚动，避免图标重叠。 ([#9949](https://github.com/nocobase/nocobase/pull/9949)) by @katherinehhh

- **[AI: 知识库]** 为知识库文档上传增加 ZIP 文件名编码选项，避免使用非 UTF-8 编码创建的 ZIP 压缩包中文件名出现乱码。 by @cgyrock

- **[邮件管理]** 将按部门查看邮件配置移动到邮件通用设置页面。 by @jiannx

- **[应用监管器]** 隐藏 V2 单独的应用入口区块，同时保留内部可用的应用设置页。 by @katherinehhh

### 🐛 修复

- **[cli]** 修复部分 RabbitMQ 服务不允许队列名包含 `:` 和 `@` 时，创建版本事件发布失败的问题。 ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock

- **[client-v2]**
  - 无法通过 ctx.setFormValues 设置多行文本字段值。 ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust

  - 修复 v2 Markdown 渲染和编辑中的 iframe 清理问题。 ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh

  - 修复路由弹窗新建表单丢失预填字段值的问题，例如日历 V2 的开始日期和结束日期。 ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx

  - 修复打开 V2 空 Group 菜单项时显示 404 的问题 ([#9896](https://github.com/nocobase/nocobase/pull/9896)) by @zhangzhonghe

  - 修复 V2 表格数据范围中 URL 查询参数缺失时导致表格数据无法查询的问题。 ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx

  - 修复路由子页面刷新后空白或间距异常的问题 ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe

  - 修复关系字段下拉选择中已选标题过长时显示挤压选择框的问题，过长文本会以省略号展示。 ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh

  - 修复 V2 管理端进入没有可用子菜单页面的分组时显示 404 的问题。 ([#9932](https://github.com/nocobase/nocobase/pull/9932)) by @katherinehhh

  - 修复表格日期时间列在分页或刷新后丢失已配置时分秒显示的问题。 ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh

- **[flow-engine]** 修复切换用户后 ctx.auth.user 值不变的问题。 ([#9964](https://github.com/nocobase/nocobase/pull/9964)) by @gchust

- **[undefined]** 修复非中文版本的版本控制文档不显示专业版标签的问题。 ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock

- **[文件管理器]**
  - 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
参考文档：[本地存储](docs/docs/cn/file-manager/storage/local.md), [安全指南](docs/docs/cn/security/guide.md)
  - 隐藏文件管理器的附件列表接口，请求该接口时返回 404。 ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher

- **[操作：导出记录]**
  - 修复 v2 可导出字段选择关系字段后拖拽导致页面崩溃的问题。 ([#9995](https://github.com/nocobase/nocobase/pull/9995)) by @katherinehhh

  - 修复 XLSX 导出中文本类字段值以公式字符开头时，打开 Excel 后可能被当作公式执行的问题。 ([#9973](https://github.com/nocobase/nocobase/pull/9973)) by @mytharcher

- **[工作流]**
  - 修复工作流执行记录中节点结果可能一直显示加载中的问题。 ([#9991](https://github.com/nocobase/nocobase/pull/9991)) by @mytharcher

  - 减少并发队列处理时工作流调度器不必要的数据库拉取重试。 ([#9953](https://github.com/nocobase/nocobase/pull/9953)) by @mytharcher

- **[备份管理器]**
  - 修复新建备份文件无法上传至云存储的问题。 ([#9981](https://github.com/nocobase/nocobase/pull/9981)) by @gchust

  - 修复 PostgreSQL 和 Kingbase 备份恢复命令在路径或参数包含空格、特殊字符时执行异常的问题。 ([#9946](https://github.com/nocobase/nocobase/pull/9946)) by @cgyrock

- **[AI 员工]**
  - 修复下划线数据库命名环境中 AI checkpoint 清理失败的问题。 ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock

  - 修复 AI 员工工作流节点在循环中前一次工具调用后无法正确恢复后续节点的问题。 ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock

  - 修复清空自定义 Base URL 后，LLM 提供商无法回退到默认 Base URL 的问题。 ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock

  - 修复工作流 AI 员工任务连续调用工具达到图递归限制后执行失败的问题。 ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock

- **[移动端（已废弃）]**
  - 修复 v1 桌面端响应式布局中查看详情和选择字段弹出方式不正确的问题 ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe

  - 修复移动端页面和公开表单在移动设备上无法滚动的问题 ([#9898](https://github.com/nocobase/nocobase/pull/9898)) by @zhangzhonghe

- **[UI 模板]** 修复子表单错误的显示字段模板菜单的问题。 ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust

- **[数据可视化]** 修复图表区块在关闭弹窗时会触发不必要的刷新的问题。 ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust

- **[数据源管理]** 修复 v2 数据表字段管理中，模板保护字段仍可删除，以及继承字段展示、查看和重写行为与 v1 不一致的问题。 ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh

- **[操作：自定义请求]** 修复自定义请求允许运行时选项覆盖已保存请求目标的问题。 ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher

- **[用户认证]** 修复 v2 子应用中 SSO 登录后跳转地址错误的问题 ([#9927](https://github.com/nocobase/nocobase/pull/9927)) by @2013xile

- **[用户]** 移除“用户和权限”新增用户表单中的默认密码。 ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx

- **[版本控制]** 修复部分 RabbitMQ 服务不允许队列名包含 `:` 和 `@` 时，版本控制创建版本失败的问题。 by @cgyrock

- **[数据源：外部 NocoBase]** 修复外部 NocoBase 数据源中附件字段上传和更新异常的问题 by @2013xile

- **[应用单点登录]** 修复 v2 子应用中 App SSO 登录后跳转地址错误的问题 by @2013xile

- **[迁移管理]** 修复迁移 MySQL 非 ASCII 内容时可能出现乱码的问题 by @2013xile

- **[工作流：审批]**
  - 修复审批节点添加 Original application content 区块时报错的问题 by @zhangzhonghe

  - 修复无配置权限时打开审批详情可能报错的问题 by @zhangzhonghe

- **[应用监管器]** 修复子应用访问链接丢失 v2 路径的问题 by @2013xile


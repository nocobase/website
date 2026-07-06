汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.19

*发布日期: 2026-07-03*

### 🐛 修复

- **[cli]** 修复部分 RabbitMQ 服务不允许队列名包含 `:` 和 `@` 时，创建版本事件发布失败的问题。 ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock
- **[client-v2]**

  - 修复 v2 Markdown 渲染和编辑中的 iframe 清理问题。 ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh
  - 修复路由弹窗新建表单丢失预填字段值的问题，例如日历 V2 的开始日期和结束日期。 ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx
  - 修复 V2 表格数据范围中 URL 查询参数缺失时导致表格数据无法查询的问题。 ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx
  - 无法通过 ctx.setFormValues 设置多行文本字段值。 ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust
- **[AI 员工]**

  - 修复下划线数据库命名环境中 AI checkpoint 清理失败的问题。 ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock
  - 修复 AI 员工工作流节点在循环中前一次工具调用后无法正确恢复后续节点的问题。 ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock
- **[文件管理器]** 隐藏文件管理器的附件列表接口，请求该接口时返回 404。 ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher
- **[工作流]** 修复工作流执行记录中节点结果可能一直显示加载中的问题。 ([#9991](https://github.com/nocobase/nocobase/pull/9991)) by @mytharcher
- **[备份管理器]**

  - 修复 PostgreSQL 和 Kingbase 备份恢复命令在路径或参数包含空格、特殊字符时执行异常的问题。 ([#9946](https://github.com/nocobase/nocobase/pull/9946)) by @cgyrock
  - 修复新建备份文件无法上传至云存储的问题。 ([#9981](https://github.com/nocobase/nocobase/pull/9981)) by @gchust
- **[数据可视化]** 修复图表区块在关闭弹窗时会触发不必要的刷新的问题。 ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust
- **[UI 模板]** 修复子表单错误的显示字段模板菜单的问题。 ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust
- **[移动端（已废弃）]** 修复 v1 桌面端响应式布局中查看详情和选择字段弹出方式不正确的问题 ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe
- **[版本控制]** 修复部分 RabbitMQ 服务不允许队列名包含 `:` 和 `@` 时，版本控制创建版本失败的问题。 by @cgyrock
- **[工作流：审批]** 修复无配置权限时打开审批详情可能报错的问题 by @zhangzhonghe

### v2.1.18

*发布日期: 2026-07-02*

### 🚀 优化

- **[cli]** 支持手动生成 Nginx/Caddy 代理配置，允许 Docker 部署不内置 Nginx 运行，并统一代理与 CDN 相关的运行时配置。 ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos
- **[undefined]** 调整外部存储 PDF 预览的安全说明。 ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
  参考文档：[文件预览](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/cn/file-manager/file-preview/index.md)
- **[utils]** 当未配置 `SERVER_REQUEST_WHITELIST` 且服务端对外请求目标存在 SSRF 风险时，新增日志警告。 ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
  参考文档：[环境变量](https://docs.nocobase.com/cn/get-started/installation/env), [全局环境变量](https://docs.nocobase.com/cn/api/app/env)
- **[AI: 知识库]** 为知识库文档上传增加 ZIP 文件名编码选项，避免使用非 UTF-8 编码创建的 ZIP 压缩包中文件名出现乱码。 by @cgyrock

### 🐛 修复

- **[client-v2]** 修复路由子页面刷新后空白或间距异常的问题 ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe
- **[工作流]** 减少并发队列处理时工作流调度器不必要的数据库拉取重试。 ([#9953](https://github.com/nocobase/nocobase/pull/9953)) by @mytharcher
- **[操作：导出记录]** 修复 XLSX 导出中文本类字段值以公式字符开头时，打开 Excel 后可能被当作公式执行的问题。 ([#9973](https://github.com/nocobase/nocobase/pull/9973)) by @mytharcher
- **[AI 员工]** 修复清空自定义 Base URL 后，LLM 提供商无法回退到默认 Base URL 的问题。 ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock
- **[数据源：外部 NocoBase]** 修复外部 NocoBase 数据源中附件字段上传和更新异常的问题 by @2013xile

### v2.1.17

*发布日期: 2026-07-01*

### 🐛 修复

- **[flow-engine]** 修复切换用户后 ctx.auth.user 值不变的问题。 ([#9964](https://github.com/nocobase/nocobase/pull/9964)) by @gchust
- **[移动端（已废弃）]** 修复移动端页面和公开表单在移动设备上无法滚动的问题 ([#9898](https://github.com/nocobase/nocobase/pull/9898)) by @zhangzhonghe

### v2.1.15

*发布日期: 2026-06-30*

### 🐛 修复

- **[undefined]** 修复非中文版本的版本控制文档不显示专业版标签的问题。 ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock
- **[AI 员工]** 修复工作流 AI 员工任务连续调用工具达到图递归限制后执行失败的问题。 ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock
- **[操作：自定义请求]** 修复自定义请求允许运行时选项覆盖已保存请求目标的问题。 ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher
- **[数据源管理]** 修复 v2 数据表字段管理中，模板保护字段仍可删除，以及继承字段展示、查看和重写行为与 v1 不一致的问题。 ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh
- **[迁移管理]** 修复迁移 MySQL 非 ASCII 内容时可能出现乱码的问题 by @2013xile
- **[工作流：审批]** 修复审批节点添加 Original application content 区块时报错的问题 by @zhangzhonghe

### v2.1.14

*发布日期: 2026-06-29*

### 🎉 新特性

- **[AI 员工]** 新增 Mistral AI 作为 AI 服务的大语言模型供应商。 ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock

### 🚀 优化

- **[cli]** 支持 OAuth 设备授权模式 ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos

### 🐛 修复

- **[client-v2]**

  - 修复关系字段下拉选择中已选标题过长时显示挤压选择框的问题，过长文本会以省略号展示。 ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh
  - 修复表格日期时间列在分页或刷新后丢失已配置时分秒显示的问题。 ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh
- **[用户]** 移除“用户和权限”新增用户表单中的默认密码。 ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx
- **[数据源：外部 NocoBase]** 修复 NocoBase 外部数据源在连接配置包含运行时对象时加载失败的问题 by @2013xile
- **[历史记录]** 修复启用记录历史后外部 NocoBase 数据源加载失败的问题 by @2013xile
- **[应用监管器]** 修复 Client V2 应用监管 Applications 标签页注册错误 by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.8

*发布日期: 2026-06-29*

### 🚀 优化

- **[cli]** 支持 OAuth 设备授权模式 ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos
- **[client-v2]** 支持配置 js block 是否显示区块卡片。 ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust
- **[flow-engine]** 让 RunJS 通过资源 API 更新数据后关闭弹窗时，相关数据区块自动刷新 ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust
- **[表单草稿]** 迁移表单草稿插件至 client v2。 ([#9910](https://github.com/nocobase/nocobase/pull/9910)) by @gchust

### 🐛 修复

- **[client-v2]**

  - 修复移动端嵌入页中操作启用纯图标模式但未配置图标时，链接操作文字不可见的问题。 ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh
  - 修复界面配置模式下刷新页面时短暂闪现暂无页面提示的问题。 ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh
  - 修复 v2 表单提交成功后跳转链接无法引用已保存响应结果记录的问题。 ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh
  - 修复移动端嵌入页中操作启用纯图标模式但未配置图标时，链接操作文字不可见的问题。 ([#9919](https://github.com/nocobase/nocobase/pull/9919)) by @katherinehhh
  - 修复 v2 表格行操作按钮导致行高变化的问题。 ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx
  - 修复表格区块配置的拖拽排序字段被删除后运行报错的问题，并支持清空拖拽排序字段配置。 ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx
- **[flow-engine]**

  - 修复移动端半窗内容过长时无法滚动的问题 ([#9871](https://github.com/nocobase/nocobase/pull/9871)) by @zhangzhonghe
  - 修复 runjs 中 ctx.openView 部分参数不生效的问题。 ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust
- **[cli]** cli 支持 pnpm 和 yarn 方式的更新 ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos
- **[client]** 修改了一些文案错误。 ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn
- **[前端流引擎]** 修复 flow surfaces api 无法正确创建移动端页面的问题。 ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust
- **[AI 员工]**

  - 修复 AI 数据源卡片列表在不同视口宽度下不能自适应的问题。 ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock
  - 修复异常工具调用记录在后续对话中重复发送，导致 AI 员工回复失败的问题。 ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock
- **[备份管理器]** 修复 v2 备份管理器设置页标签异常加粗、与其他设置页样式不一致的问题。 ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh
- **[区块：iframe]** 修复普通用户查看 v2 iframe HTML 模式区块时报 403 的问题。 ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx
- **[数据源：外部 NocoBase]** 修复 NocoBase 外部数据源在连接配置包含运行时对象时加载失败的问题 by @2013xile
- **[AI: 知识库]** 修复版本控制和知识库文档列表在内容较长或视口高度不足时的布局溢出问题。 by @cgyrock
- **[迁移管理]** 修复数据库同步表的迁移规则处理问题 by @2013xile
- **[历史记录]**

  - 修复部分数据表的历史记录可能无法保存变更的问题 by @2013xile
  - 修复启用记录历史后外部 NocoBase 数据源加载失败的问题 by @2013xile
- **[应用监管器]** 修复 Client V2 应用监管 Applications 标签页注册错误 by @2013xile
- **[企业微信]** 修复在 Client V2 中启用企业微信插件后切换路由菜单时页面短暂白屏的问题 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.2.0-alpha.6

*发布日期: 2026-07-05*

### 🚀 优化

- **[cli]** 重构 CLI 的 setup 启动流程以复用 `nb app start`，统一 API base path 的重定向行为，持久化 env 的共享代理默认配置，并在 Docker 代理端口变化时自动重建容器。 ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

### v2.2.0-alpha.5

*发布日期: 2026-07-04*

### 🎉 新特性

- **[client-v2]** 为 V2 操作面板和左上角应用切换入口新增可配置的应用和工作区入口能力。 ([#9893](https://github.com/nocobase/nocobase/pull/9893)) by @katherinehhh
- **[工作区管理]** 为 V2 操作面板和应用切换入口新增可配置的应用和工作区入口。 by @katherinehhh

### 🚀 优化

- **[cli]** 改进 Docker CLI 安装体验，支持配置默认的 NocoBase 镜像仓库和变体，修复代理与 `no-nginx` 镜像端口兼容性，并补充 Docker Nginx/Caddy 安装文档。 ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos
- **[undefined]** 调整外部存储 PDF 预览的安全说明。 ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
  参考文档：[文件预览](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/cn/file-manager/file-preview/index.md)
- **[utils]** 当未配置 `SERVER_REQUEST_WHITELIST` 且服务端对外请求目标存在 SSRF 风险时，新增日志警告。 ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
  参考文档：[环境变量](https://docs.nocobase.com/cn/get-started/installation/env), [全局环境变量](https://docs.nocobase.com/cn/api/app/env)
- **[AI 员工]**

  - 在 v2 界面中移除了已废弃的 AI 员工 Datasource 设置入口和上下文选择入口。 ([#9988](https://github.com/nocobase/nocobase/pull/9988)) by @cgyrock
  - 将 AI 员工插件迁移到 client-v2。 ([#9794](https://github.com/nocobase/nocobase/pull/9794)) by @cgyrock
- **[数据源管理]** V2 配置字段中展示外部数据源不支持的字段，并统一备份恢复表单标签样式。 ([#9983](https://github.com/nocobase/nocobase/pull/9983)) by @katherinehhh
- **[用户]** 完善用户插件 client-v2 测试覆盖率。 ([#9975](https://github.com/nocobase/nocobase/pull/9975)) by @jiannx
- **[AI: 知识库]**

  - 为知识库文档上传增加 ZIP 文件名编码选项，避免使用非 UTF-8 编码创建的 ZIP 压缩包中文件名出现乱码。 by @cgyrock
  - 将 AI 知识库设置页迁移到 v2 客户端，并修复知识库和向量存储页面的布局与加载问题。 by @cgyrock
- **[邮件管理]** 将按部门查看邮件配置移动到邮件通用设置页面。 by @jiannx
- **[应用监管器]** 隐藏 V2 单独的应用入口区块，同时保留内部可用的应用设置页。 by @katherinehhh

### 🐛 修复

- **[cli]** 修复部分 RabbitMQ 服务不允许队列名包含 `:` 和 `@` 时，创建版本事件发布失败的问题。 ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock
- **[client-v2]**

  - 修复 v2 Markdown 渲染和编辑中的 iframe 清理问题。 ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh
  - 修复 V2 表格数据范围中 URL 查询参数缺失时导致表格数据无法查询的问题。 ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx
  - 修复打开 V2 空 Group 菜单项时显示 404 的问题 ([#9896](https://github.com/nocobase/nocobase/pull/9896)) by @zhangzhonghe
  - 无法通过 ctx.setFormValues 设置多行文本字段值。 ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust
  - 修复路由弹窗新建表单丢失预填字段值的问题，例如日历 V2 的开始日期和结束日期。 ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx
  - 修复路由子页面刷新后空白或间距异常的问题 ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe
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

  - 修复 AI 员工工作流节点在循环中前一次工具调用后无法正确恢复后续节点的问题。 ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock
  - 修复下划线数据库命名环境中 AI checkpoint 清理失败的问题。 ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock
- **[UI 模板]** 修复子表单错误的显示字段模板菜单的问题。 ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust
- **[文件管理器]** 隐藏文件管理器的附件列表接口，请求该接口时返回 404。 ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher
- **[区块：评论]** 调整新评论区块的默认操作顺序。 ([#9976](https://github.com/nocobase/nocobase/pull/9976)) by @jiannx
- **[数据可视化]** 修复图表区块在关闭弹窗时会触发不必要的刷新的问题。 ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust
- **[移动端（已废弃）]** 修复 v1 桌面端响应式布局中查看详情和选择字段弹出方式不正确的问题 ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe
- **[版本控制]** 修复部分 RabbitMQ 服务不允许队列名包含 `:` 和 `@` 时，版本控制创建版本失败的问题。 by @cgyrock
- **[数据源：外部 NocoBase]** 修复外部 NocoBase 数据源中附件字段上传和更新异常的问题 by @2013xile
- **[工作流：审批]** 修复无配置权限时打开审批详情可能报错的问题 by @zhangzhonghe

### v2.2.0-alpha.4

*发布日期: 2026-07-01*

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

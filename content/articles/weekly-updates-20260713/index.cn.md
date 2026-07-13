汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.23

*发布日期: 2026-07-10*

### 🐛 修复

- **[client-v2]**

  - 修复 v2 扫码录入在 Safari 中选择上传二维码图片时识别失败的问题。 ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  - 修复 `__webpack_public_path__` 以不带尾随 `/` 的形式注入时客户端运行时静态资源基础路径归一化不一致的问题，并补充了该边界场景的测试覆盖。 ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
  - 修复表格区块按钮联动规则翻页后可能存在状态污染。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
- **[app]** 修复 `CDN_BASE_URL` 为空时异步资源错误使用外部脚本地址的问题。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
- **[flow-engine]** 修复 JS bock 中覆盖 ctx.api 会造成 Maximum call stack size exceeded 的问题。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
- **[工作流：延时节点]** 阻止通过 API 为延时节点设置小于 1 的数值时长 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
- **[表单草稿]** 修复表单草稿在连续刷新页面后丢失的问题 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
- **[数据源：主数据库]** 禁止保存无效的多对多关系字段配置 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
- **[数据表：树]** 修复树路径集合创建时将内部字段模型元数据传入集合配置的问题。 ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
- **[工作流]** 修复子流程在目标工作流执行记录创建前失败时父节点可能一直等待的问题 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
- **[前端流引擎]**

  - 修复使用本地 AI agent 配置联动规则可能触发渲染错误。 ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
  - 修复弹窗记录变量无法从外部 NocoBase 数据源解析的问题 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
- **[模板打印]** 修复模板打印权限校验，避免渲染当前角色不可查看的字段和数据范围外的记录。 by @jiannx
- **[工作流：审批]**

  - 支持字符串类型的审批人 ID 添加并使用 by @mytharcher
  - 修复审批表单字段在打印预览中变成单列显示的问题 by @zhangzhonghe
  - 修复审批子表格禁用后内部字段仍可编辑的问题 by @zhangzhonghe

### v2.1.22

*发布日期: 2026-07-09*

### 🐛 修复

- **[client-v2]**

  - 修复筛选表单关系字段显示默认操作符配置的问题 ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  - 修复手机端表格快速编辑和选择字段弹窗底部间距问题 ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
- **[cli]** 修复了 NocoBase CLI 在镜像仓库回退、内置数据库镜像、环境信息显示和提示默认值初始化方面的问题。 ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
- **[用户认证]** 修复重置密码链接打开后进入登录页的问题 ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe

### v2.1.21

*发布日期: 2026-07-08*

### 🎉 新功能

* **[AI 员工]** 新增 OrcaRouter 作为 LLM 提供商。([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

### 🚀 优化

- **[工作流]** 移除条件节点中基础运算引擎的算术运算操作符 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

### 🐛 修复

- **[client-v2]**

  - 修复运行态编辑弹窗切换记录时联动字段状态残留的问题。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  - 修复筛选表单关系字段设置默认值后无法被清空的问题。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
- **[文件管理器]**

  - 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    参考文档：[本地存储](https://docs.nocobase.com/cn/file-manager/storage/local), [安全指南](https://docs.nocobase.com/cn/security/guide)
  - 修复 V2 数据表管理中缺失 Attachment 字段接口的问题，并修复公开表单文件关系字段上传图片时的预检查权限问题。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
- **[数据源管理]** 在 V2 数据表新增字段菜单中隐藏历史的附件字段接口。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
- **[数据可视化]** 修复图表重新渲染后点击交互可能失效的问题 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
- **[迁移管理]** 修复迁移后应用可能卡在修复界面的问题 by @2013xile
- **[应用监管器]** 修复启用独立 JWT 密钥后子应用仍接受主应用 token 的问题 by @2013xile

### v2.1.20

*发布日期: 2026-07-07*

### 🚀 优化

- **[cli]**
  - 改进 Docker CLI 安装体验，支持配置默认的 NocoBase 镜像仓库和变体，修复代理与 `no-nginx` 镜像端口兼容性，并补充 Docker Nginx/Caddy 安装文档。 ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos
  - 重构 CLI 的 setup 启动流程以复用 `nb app start`，统一 API base path 的重定向行为，持久化 env 的共享代理默认配置，并在 Docker 代理端口变化时自动重建容器。 ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

### 🐛 修复

- **[client-v2]**

  - 修复生产环境下 Vditor 静态资源加载路径，改为基于实际生效的 webpack public path 解析插件 CDN 路径。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
  - 修复切换页面时可能出现无法利用快捷编辑切换下拉选项的问题。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
- **[flow-engine]** 修复切换配置模式时弹窗内部配置不一致的问题。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
- **[文件管理器]** 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
  参考文档：[本地存储](docs/docs/cn/file-manager/storage/local.md), [安全指南](docs/docs/cn/security/guide.md)
- **[数据源：外部 MariaDB]** 修复 MySQL、MSSQL 和 MariaDB 外部数据源设置中 Add all collections 无法切换的问题。 by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.13

*发布日期: 2026-07-12*

### 🐛 修复

- **[Redis worker ID 分配器]** 修复未配置 Worker ID Redis 时单机模式无法启动的问题 by @2013xile

### v2.2.0-beta.12

*发布日期: 2026-07-11*

### 🐛 修复

- **[server]** 修复未启用多应用插件时自定义工作区不显示的问题 ([#10055](https://github.com/nocobase/nocobase/pull/10055)) by @2013xile
- **[app]** 修复 Redis 缓存配置忽略专用缓存地址的问题 ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile
- **[Redis worker ID 分配器]** 改进 Redis Worker ID 隔离与故障诊断 by @2013xile

### v2.2.0-beta.11

*发布日期: 2026-07-11*

### 🐛 修复

- **[app]** 修复 `CDN_BASE_URL` 为空时异步资源错误使用外部脚本地址的问题。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
- **[client-v2]**

  - 修复 v2 扫码录入在 Safari 中选择上传二维码图片时识别失败的问题。 ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  - 修复表格区块按钮联动规则翻页后可能存在状态污染。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
  - 修复 `__webpack_public_path__` 以不带尾随 `/` 的形式注入时客户端运行时静态资源基础路径归一化不一致的问题，并补充了该边界场景的测试覆盖。 ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
- **[flow-engine]** 修复 JS bock 中覆盖 ctx.api 会造成 Maximum call stack size exceeded 的问题。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
- **[工作流：延时节点]** 阻止通过 API 为延时节点设置小于 1 的数值时长 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
- **[表单草稿]** 修复表单草稿在连续刷新页面后丢失的问题 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
- **[工作流]** 修复子流程在目标工作流执行记录创建前失败时父节点可能一直等待的问题 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
- **[前端流引擎]**

  - 修复使用本地 AI agent 配置联动规则可能触发渲染错误。 ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
  - 修复弹窗记录变量无法从外部 NocoBase 数据源解析的问题 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
- **[数据源：主数据库]** 禁止保存无效的多对多关系字段配置 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
- **[数据表：树]** 修复树路径集合创建时将内部字段模型元数据传入集合配置的问题。 ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
- **[模板打印]** 修复模板打印权限校验，避免渲染当前角色不可查看的字段和数据范围外的记录。 by @jiannx
- **[工作流：审批]**

  - 支持字符串类型的审批人 ID 添加并使用 by @mytharcher
  - 修复审批表单字段在打印预览中变成单列显示的问题 by @zhangzhonghe
  - 修复审批子表格禁用后内部字段仍可编辑的问题 by @zhangzhonghe

### v2.2.0-beta.10

*发布日期: 2026-07-09*

### 🎉 新特性

- **[AI 员工]** 新增结构化 AI 使用记录，便于统计使用情况 ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile
- **[AI 员工]** 新增 OrcaRouter 作为 LLM 提供商。([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

### 🚀 优化

- **[工作流]** 移除条件节点中基础运算引擎的算术运算操作符 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher
- **[数据可视化]** 改进图表事件脚本，支持安全清理自定义事件处理器 ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile
- **[数据源管理]** 在 v2 主数据源中新建数据表菜单中隐藏已废弃的数据表模板。 ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh

### 🐛 修复

- **[client-v2]**

  - 修复筛选表单关系字段显示默认操作符配置的问题 ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  - 修复手机端表格快速编辑和选择字段弹窗底部间距问题 ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
  - 修复筛选表单关系字段设置默认值后无法被清空的问题。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
  - 修复运行态编辑弹窗切换记录时联动字段状态残留的问题。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  - 修复切换页面时可能出现无法利用快捷编辑切换下拉选项的问题。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
  - 修复生产环境下 Vditor 静态资源加载路径，改为基于实际生效的 webpack public path 解析插件 CDN 路径。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
- **[cli]** 修复了 NocoBase CLI 在镜像仓库回退、内置数据库镜像、环境信息显示和提示默认值初始化方面的问题。 ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
- **[flow-engine]** 修复切换配置模式时弹窗内部配置不一致的问题。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
- **[数据可视化]** 修复图表重新渲染后点击交互可能失效的问题 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
- **[AI 员工]** 修复 V2 公开表单页面触发不必要登录态请求的问题 ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe
- **[用户认证]** 修复重置密码链接打开后进入登录页的问题 ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe
- **[数据源管理]** 在 V2 数据表新增字段菜单中隐藏历史的附件字段接口。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
- **[文件管理器]**

  - 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    参考文档：[本地存储](https://docs.nocobase.com/cn/file-manager/storage/local), [安全指南](https://docs.nocobase.com/cn/security/guide)
  - 修复 v2 数据表管理中缺失 Attachment 字段接口的问题，并修复公开表单文件关系字段上传图片时的预检查权限问题。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
- **[嵌入 NocoBase]** 修复嵌入 NocoBase 页面时 token 污染的问题。 ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust
- **[数据源：外部 MariaDB]** 修复 MySQL、MSSQL 和 MariaDB 外部数据源设置中 Add all collections 无法切换的问题。 by @katherinehhh
- **[迁移管理]** 修复迁移后应用可能卡在修复界面的问题 by @2013xile
- **[应用监管器]** 修复启用独立 JWT 密钥后子应用仍接受主应用 token 的问题 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.2.0-alpha.8

*发布日期: 2026-07-13*

### 🎉 新特性

- **[公开表单]** 在 v1 公开表单中支持创建 v2 的表单，禁止创建 v1 的表单 ([#10045](https://github.com/nocobase/nocobase/pull/10045)) by @zhangzhonghe

### 🚀 优化

- **[工作流]** 工作流 v2 画布中暂不支持的节点现在会保留普通节点卡片操作，并将节点类型显示为暂不支持。 ([#10054](https://github.com/nocobase/nocobase/pull/10054)) by @mytharcher
- **[前端流引擎]** UI 搭建 API 支持多工作区。 ([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust
- **[AI 员工]** 改进 AI 员工工具设置、数据查询约束、关联字段查询，以及异常工具调用的诊断信息保留。 ([#10042](https://github.com/nocobase/nocobase/pull/10042)) by @cgyrock
- **[数据表: SQL]** 非用户可见变更；为已迁移插件补充 client-v2 单元测试覆盖。 ([#9967](https://github.com/nocobase/nocobase/pull/9967)) by @katherinehhh

### 🐛 修复

- **[client-v2]**

  - 修复 v2 工作流赋值编辑器在集合字段名为 nodeName 时产生的控制台报错。 ([#10067](https://github.com/nocobase/nocobase/pull/10067)) by @katherinehhh
  - 修复表格区块按钮联动规则翻页后可能存在状态污染。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
  - 修复工作流 v2 变量编辑器在触发器、筛选条件和字段赋值表单中的变量胶囊回显、禁用态和操作符标签显示不一致的问题。 ([#10041](https://github.com/nocobase/nocobase/pull/10041)) by @Molunerfinn
- **[app]**

  - 修复 Redis 缓存配置忽略专用缓存地址的问题 ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile
  - 修复 `CDN_BASE_URL` 为空时异步资源错误使用外部脚本地址的问题。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
- **[server]** 修复未启用多应用插件时自定义工作区不显示的问题 ([#10055](https://github.com/nocobase/nocobase/pull/10055)) by @2013xile
- **[flow-engine]**

  - 修复单值变量输入框选择变量后仍可继续输入额外文本的问题。 ([#10050](https://github.com/nocobase/nocobase/pull/10050)) by @katherinehhh
  - 修复 JS bock 中覆盖 ctx.api 会造成 Maximum call stack size exceeded 的问题。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
- **[工作流：延时节点]**

  - 修复延时节点的时长输入，并阻止保存小于最小值的数值。 ([#10056](https://github.com/nocobase/nocobase/pull/10056)) by @Molunerfinn
  - 阻止通过 API 为延时节点设置小于 1 的数值时长 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
- **[工作流]**

  - 修复子流程在目标工作流执行记录创建前失败时父节点可能一直等待的问题 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
  - 修复手动执行工作流时，请求有效但未启动执行会返回错误的问题。 ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher
- **[数据源：主数据库]** 禁止保存无效的多对多关系字段配置 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
- **[前端流引擎]** 修复弹窗记录变量无法从外部 NocoBase 数据源解析的问题 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
- **[表单草稿]** 修复表单草稿在连续刷新页面后丢失的问题 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
- **[工作流：聚合查询节点]** 修复验证规则以支持筛选条件为空的情况 ([#10053](https://github.com/nocobase/nocobase/pull/10053)) by @mytharcher
- **[Redis worker ID 分配器]**

  - 修复未配置 Worker ID Redis 时单机模式无法启动的问题 by @2013xile
  - 改进 Redis Worker ID 隔离与故障诊断 by @2013xile
- **[plugin-service-platform]** 恢复服务平台中已授权插件的下载能力。 by @jiannx
- **[模板打印]** 修复模板打印权限校验，避免渲染当前角色不可查看的字段和数据范围外的记录。 by @jiannx
- **[工作流：审批]**

  - 修复 v2 审批子表格在详情中显示异常的问题 by @zhangzhonghe
  - 修复审批人界面默认显示空区块及固定审批人 ID 保存问题 by @zhangzhonghe
  - 修复审批子表格禁用后内部字段仍可编辑的问题 by @zhangzhonghe
  - 支持字符串类型的审批人 ID 添加并使用 by @mytharcher
  - 修复审批表单字段在打印预览中变成单列显示的问题 by @zhangzhonghe
  - 打开审批表单时关闭 Apply new 抽屉 by @zhangzhonghe
  - 修复审批任务卡片不显示审批数据的问题 by @zhangzhonghe

### v2.2.0-alpha.7

*发布日期: 2026-07-09*

### 🎉 新特性

- **[AI 员工]** 新增结构化 AI 使用记录，便于统计使用情况 ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile
- **[工作流：审批]** 为 v2 页面新增审批发起和待办区块 by @zhangzhonghe
- **[AI 员工]** 新增 OrcaRouter 作为 LLM 提供商。([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

### 🚀 优化

- **[client-v2]**

  - 重构 Markdown Vditor 为统一的插件化 Markdown 引擎，并为已有 Markdown 区块和 Vditor 字段插件保留兼容桥。 ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
- **[AI 员工]** 优化 AI 员工网页搜索，减少不必要的模型推理，并更好地使用各 Provider 的思考控制参数。 ([#9996](https://github.com/nocobase/nocobase/pull/9996)) by @cgyrock
- **[数据可视化]** 改进图表事件脚本，支持安全清理自定义事件处理器 ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile
- **[工作流]** 移除条件节点中基础运算引擎的算术运算操作符 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher
- **[数据源管理]** 在 v2 主数据源中新建数据表菜单中隐藏已废弃的数据表模板。 ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh
- **[区块：评论]** 改进评论提交按钮配置，并修复相关的评论和用户表单提交问题。 ([#10002](https://github.com/nocobase/nocobase/pull/10002)) by @jiannx

### 🐛 修复

- **[client-v2]**

  - 修复 `__webpack_public_path__` 以不带尾随 `/` 的形式注入时客户端运行时静态资源基础路径归一化不一致的问题，并补充了该边界场景的测试覆盖。 ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
  - 修复 v2 扫码录入在 Safari 中选择上传二维码图片时识别失败的问题。 ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  - 修复筛选表单关系字段显示默认操作符配置的问题 ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  - 修复手机端表格快速编辑和选择字段弹窗底部间距问题 ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
  - 修复切换页面时可能出现无法利用快捷编辑切换下拉选项的问题。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
  - 修复生产环境下 Vditor 静态资源加载路径，改为基于实际生效的 webpack public path 解析插件 CDN 路径。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
  - 修复运行态编辑弹窗切换记录时联动字段状态残留的问题。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  - 修复筛选表单关系字段设置默认值后无法被清空的问题。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
  - 修复 v2 工作流已执行版本只读状态下仍可修改字段赋值的问题。 ([#10014](https://github.com/nocobase/nocobase/pull/10014)) by @katherinehhh
- **[cli]** 修复了 NocoBase CLI 在镜像仓库回退、内置数据库镜像、环境信息显示和提示默认值初始化方面的问题。 ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
- **[flow-engine]** 修复切换配置模式时弹窗内部配置不一致的问题。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
- **[数据表：树]** 修复树路径集合创建时将内部字段模型元数据传入集合配置的问题。 ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
- **[公开表单]** 修复关闭 UI Editor 后公开表单仍可配置的问题 ([#10036](https://github.com/nocobase/nocobase/pull/10036)) by @zhangzhonghe
- **[前端流引擎]** 修复使用本地 AI agent 配置联动规则可能触发渲染错误。 ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
- **[用户认证]** 修复重置密码链接打开后进入登录页的问题 ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe
- **[数据可视化]** 修复图表重新渲染后点击交互可能失效的问题 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
- **[工作流]**

  - 修复工作流 v2 条件操作数默认保持单行显示，并在所选变量路径过长时正确换行。 ([#10033](https://github.com/nocobase/nocobase/pull/10033)) by @Molunerfinn
  - 修复工作流结果文案未翻译和抄送配置弹窗过宽的问题 ([#9977](https://github.com/nocobase/nocobase/pull/9977)) by @zhangzhonghe
  - 修复 workflow v2 任务中心的显示和详情加载问题 ([#10001](https://github.com/nocobase/nocobase/pull/10001)) by @zhangzhonghe
- **[数据源管理]** 在 V2 数据表新增字段菜单中隐藏历史的附件字段接口。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
- **[文件管理器]**

  - 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    参考文档：[本地存储](https://docs.nocobase.com/cn/file-manager/storage/local), [安全指南](https://docs.nocobase.com/cn/security/guide)
  - 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
    参考文档：[本地存储](docs/docs/cn/file-manager/storage/local.md), [安全指南](docs/docs/cn/security/guide.md)
  - 修复 v2 数据表管理中缺失 Attachment 字段接口的问题，并修复公开表单文件关系字段上传图片时的预检查权限问题。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
- **[嵌入 NocoBase]** 修复嵌入 NocoBase 页面时 token 污染的问题。 ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust
- **[AI 员工]** 修复 V2 公开表单页面触发不必要登录态请求的问题 ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe
- **[AI: 知识库]** 为 AI 知识库工作流创建文档节点增加覆盖选项，支持替换相同标识的已有文档。 by @cgyrock
- **[数据源：外部 MariaDB]** 修复 MySQL、MSSQL 和 MariaDB 外部数据源设置中 Add all collections 无法切换的问题。 by @katherinehhh
- **[plugin-service-platform]** 禁用服务平台的插件下载接口。 by @jiannx
- **[工作流：子流程]** 修复子流程节点配置选择框按工作流标题搜索不生效的问题。 by @mytharcher
- **[迁移管理]** 修复迁移后应用可能卡在修复界面的问题 by @2013xile
- **[工作流：审批]**

  - 修复审批人排序和旧版配置入口显示问题 by @zhangzhonghe
  - 修复配置审批工作流条件时报错的问题 by @zhangzhonghe
  - 修复 v2 审批任务详情弹窗缺少已处理审批信息的问题 by @zhangzhonghe
  - 修复 workflow v2 任务中心审批任务的表单和操作问题 by @zhangzhonghe
- **[应用监管器]** 修复启用独立 JWT 密钥后子应用仍接受主应用 token 的问题 by @2013xile

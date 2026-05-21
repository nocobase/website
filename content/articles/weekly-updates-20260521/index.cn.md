汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/cn/blog/v2.0.55)

*发布日期：2026-05-18*

### 🚀 优化

- **[AI 员工]** 新增向量库写入校验：检测到同名数据表时弹出提示，避免误操作覆盖 ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
- **[AI: 知识库]** 新增向量库写入校验：检测到同名数据表时弹出提示，避免误操作覆盖 by @cgyrock

### 🐛 修复

- **[client]**

  - 修复无法在操作按钮事件流中解析当前弹窗记录变量的问题。 ([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
  - 修复表单提交时子表单里的 js field 值没有被正确设置的问题。 ([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
- **[文件管理器]** 修复文件管理器 `tx-cos` 上传后缺少文件大小元数据的问题。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
- **[数据源：主数据库]** 修复同步字段后，字段选项会写入 schema 的问题 ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
- **[WEB 客户端]** 删除菜单时移除内部区块数据。 ([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
- **[AI 员工]** 修复 AI 员工读取 OSS 存储文件报错问题 ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
- **[操作：导入记录]** 修复导入日期类字段后展示错误的时间的问题 ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
- **[操作：导出记录 Pro]** 修复导出附件 URL 字段提供的附件时的报错 by @mytharcher
- **[操作：导入记录 Pro]** 修复专业版 xlsx 导入的时区处理问题 by @mytharcher

### [v2.0.53](https://www.nocobase.com/cn/blog/v2.0.53)

*发布日期：2026-05-14*

### 🚀 优化

- **[flow-engine]** 关闭事件流配置页面时如果存在未保存的数据则显示未保存的提示信息。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

### 🐛 修复

- **[client]**

  - 修复表格中关联字段显示快捷编辑允许打开编辑弹窗的问题 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  - 修复子表格中关系字段设置为仅展示后刷新不显示或不可点击的问题。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  - 修复 v2 数据区块多选字段显示选项值而非选项标签的问题 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
- **[区块：分步表单]** 修复 v1 分步表单区块设置全高后页面出现滚动条的问题 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/cn/blog/v2.1.0-beta.35)

*发布日期：2026-05-20*

### 🚀 优化

- **[client]** v1 和 v2 应用共用条件判断能力 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
- **[本地化]** 优化 Lina 本地化翻译任务，支持翻译范围、参考语言配置和快捷编辑 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
- **[工作流：审批]** 相关审批现在以时间线卡片展示 by @zhangzhonghe

### 🐛 修复

- **[undefined]** 对齐 Nginx 配置路径 ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
- **[cli-v1]** 修复 create-nocobase-app 项目的开发启动问题，复用已发布应用壳并支持本地插件开发。 ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
- **[client]**

  - 修复菜单徽章值为 0 时仍显示小红点的问题 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  - 修复筛选表单无法使用当前表单变量的问题 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
- **[用户认证]** 修复 WebSocket 鉴权 token 关联到未加载或缺失的 authType 时,服务进程崩溃的问题。 ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
- **[日历]**

  - 修复日历展开更多日程时显示不全的问题 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
  - 修复日历更多事项面板中事项 hover 时未显示手型光标的问题 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
- **[授权设置]** 解决依赖软链接问题 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/cn/blog/v2.1.0-beta.34)

*发布日期：2026-05-19*

### 🎉 新特性

- **[区块：看板]** 为看板插件增加 client-v2 支持 ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 优化

- **[cli]** 将 NocoBase CLI 的安装与管理交互流程迁移到 Inquirer，改进提示体验，并修复相关的安装、技能管理和 Docker 运行时问题。 ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
- **[AI 员工]** 新增向量库写入校验：检测到同名数据表时弹出提示，避免误操作覆盖 ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
- **[通知管理]** 调整队列策略以优化发送性能 ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[工作流：自定义操作事件]** 将 block-workbench 和 workflow-custom-action-trigger 插件迁移到 client v2，并同步其操作面板模型与二维码扫描流程。 ([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
- **[用户认证]** 实现 client-v2 中的认证设置页，并提供可复用的表格、变量输入与表单基础组件。 ([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
- **[AI: 知识库]** 新增向量库写入校验：检测到同名数据表时弹出提示，避免误操作覆盖 by @cgyrock
- **[认证：SAML 2.0]** 为 CAS 和 SAML 认证插件补齐 client-v2 入口，使其能在 v2 登录页和认证器后台设置中正常使用。 by @Molunerfinn

### 🐛 修复

- **[client-v2]**

  - 修复看板插件 v2 路由因客户端未提供 dnd-kit 依赖而加载失败的问题。 ([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
  - v2 公共 Table 组件默认展示分页数量选择器,行为对齐 v1。 ([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
- **[client]**

  - 修复表单提交时子表单里的 js field 值没有被正确设置的问题。 ([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
  - 修复无法在操作按钮事件流中解析当前弹窗记录变量的问题。 ([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
- **[flow-engine]** 修复控制台不正确的错误日志信息。 ([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
- **[AI 员工]**

  - 修复工作流 AI 员工节点指定的操作人角色权限不生效问题 ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  - 修复 AI 员工读取 OSS 存储文件报错问题 ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
- **[API 文档]** 修复 Collection API 文档中的查询参数相互影响问题 ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[数据源：主数据库]** 修复同步字段后，字段选项会写入 schema 的问题 ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
- **[工作流：JavaScript 节点]** 修复生产构建中工作流 JavaScript 节点 QuickJS 运行时包加载失败的问题。 ([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
- **[WEB 客户端]** 删除菜单时移除内部区块数据。 ([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
- **[操作：导入记录]** 修复导入日期类字段后展示错误的时间的问题 ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
- **[操作：导入记录 Pro]** 修复专业版 xlsx 导入的时区处理问题 by @mytharcher
- **[认证：SAML 2.0]** 修复 SAML 自动重定向拦截器在每次页面跳转时重复请求导致应用闪屏、抽屉被重复打开的问题。 by @Molunerfinn
- **[操作：导出记录 Pro]** 修复导出附件 URL 字段提供的附件时的报错 by @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/cn/blog/v2.1.0-beta.33)

*发布日期：2026-05-15*

### 🎉 新特性

- **[Markdown]** Markdown 区块支持 client v2 ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
- **[区块：列表]** 列表区块支持 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx
- **[日历]** 日历插件新增 client v2 支持。 ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
- **[区块：树]** 为树筛选区块新增 client-v2 支持。 ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx

### 🚀 优化

- **[flow-engine]** 关闭事件流配置页面时如果存在未保存的数据则显示未保存的提示信息。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
- **[数据源管理]** 优化数据建模接口，支持用 AI 创建评论表，配置外部数据源的关系字段，配置字段验证规则 ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
- **[区块：网格卡片]** 更新网格卡片插件支持 client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
- **[区块：iframe]** 新增 iframe 区块的 v2 支持。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx
- **[AI 员工]** AI 员工并行会话交互与性能优化 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock

### 🐛 修复

- **[client]**

  - 为表单提交动作补充“提交成功后”设置项。 ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
  - 修复表格中关联字段显示快捷编辑允许打开编辑弹窗的问题 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  - 修复子表格中关系字段设置为仅展示后刷新不显示或不可点击的问题。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  - 修复旧默认值配置无法被移除的问题。 ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  - 修复 v2 数据区块多选字段显示选项值而非选项标签的问题 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
- **[client-v2]**

  - 修复表格中关系字段标题字段选项列表为空的问题 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
  - v2 布局中过滤 v1 菜单后保留空分组 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
- **[flow-engine]** 修复子模型菜单中关系字段子菜单状态不稳定的问题 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
- **[文件管理器]** 修复文件管理器 `tx-cos` 上传后缺少文件大小元数据的问题。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
- **[AI 员工]** 修复 AI 插件启动失败问题 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
- **[区块：分步表单]** 修复 v1 分步表单区块设置全高后页面出现滚动条的问题 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
- **[工作流：Webhook 触发器]** 修复由于验证规则导致创建响应节点失败的问题 by @mytharcher
- **[数据表字段：手写签名]** 移动端签名框显示异常 by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/cn/blog/v2.1.0-alpha.39)

*发布日期：2026-05-20*

### 🎉 新特性

- **[区块：看板]** 为看板插件增加 client-v2 支持 ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 优化

- **[client]** v1 和 v2 应用共用条件判断能力 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
- **[本地化]** 优化 Lina 本地化翻译任务，支持翻译范围、参考语言配置和快捷编辑 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
- **[AI 员工]** 新增向量库写入校验：检测到同名数据表时弹出提示，避免误操作覆盖 ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
- **[通知管理]** 调整队列策略以优化发送性能 ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[工作流：自定义操作事件]** 将 block-workbench 和 workflow-custom-action-trigger 插件迁移到 client v2，并同步其操作面板模型与二维码扫描流程。 ([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
- **[用户认证]** 实现 client-v2 中的认证设置页，并提供可复用的表格、变量输入与表单基础组件。 ([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
- **[AI: 知识库]** 新增向量库写入校验：检测到同名数据表时弹出提示，避免误操作覆盖 by @cgyrock
- **[认证：SAML 2.0]** 为 CAS 和 SAML 认证插件补齐 client-v2 入口，使其能在 v2 登录页和认证器后台设置中正常使用。 by @Molunerfinn
- **[工作流：审批]** 相关审批现在以时间线卡片展示 by @zhangzhonghe

### 🐛 修复

- **[undefined]** 对齐 Nginx 配置路径 ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
- **[cli-v1]** 修复 create-nocobase-app 项目的开发启动问题，复用已发布应用壳并支持本地插件开发。 ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
- **[client]**

  - 修复筛选表单无法使用当前表单变量的问题 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  - 修复菜单徽章值为 0 时仍显示小红点的问题 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
- **[client-v2]**

  - v2 公共 Table 组件默认展示分页数量选择器,行为对齐 v1。 ([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
  - 修复看板插件 v2 路由因客户端未提供 dnd-kit 依赖而加载失败的问题。 ([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
- **[日历]**

  - 修复日历更多事项面板中事项 hover 时未显示手型光标的问题 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
  - 修复日历展开更多日程时显示不全的问题 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
- **[授权设置]** 解决依赖软链接问题 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos
- **[AI 员工]**

  - 修复工作流 AI 员工节点指定的操作人角色权限不生效问题 ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  - 修复 AI 员工读取 OSS 存储文件报错问题 ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
- **[用户认证]** 修复 WebSocket 鉴权 token 关联到未加载或缺失的 authType 时,服务进程崩溃的问题。 ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
- **[API 文档]** 修复 Collection API 文档中的查询参数相互影响问题 ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[数据源：主数据库]** 修复同步字段后，字段选项会写入 schema 的问题 ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
- **[认证：SAML 2.0]** 修复 SAML 自动重定向拦截器在每次页面跳转时重复请求导致应用闪屏、抽屉被重复打开的问题。 by @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/cn/blog/v2.1.0-alpha.38)

*发布日期：2026-05-18*

### 🐛 修复

- **[client]**

  - 修复无法在操作按钮事件流中解析当前弹窗记录变量的问题。 ([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
  - 修复表单提交时子表单里的 js field 值没有被正确设置的问题。 ([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
- **[flow-engine]** 修复控制台不正确的错误日志信息。 ([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
- **[工作流：JavaScript 节点]** 修复生产构建中工作流 JavaScript 节点 QuickJS 运行时包加载失败的问题。 ([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
- **[操作：导入记录]** 修复导入日期类字段后展示错误的时间的问题 ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
- **[操作：导入记录 Pro]** 修复专业版 xlsx 导入的时区处理问题 by @mytharcher
- **[操作：导出记录 Pro]** 修复导出附件 URL 字段提供的附件时的报错 by @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/cn/blog/v2.1.0-alpha.37)

*发布日期：2026-05-17*

### 🐛 修复

- **[WEB 客户端]** 删除菜单时移除内部区块数据。 ([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/cn/blog/v2.1.0-alpha.36)

*发布日期：2026-05-16*

### 🎉 新特性

- **[Markdown]** Markdown 区块支持 client v2 ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
- **[区块：列表]** 列表区块支持 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

### 🚀 优化

- **[flow-engine]** 关闭事件流配置页面时如果存在未保存的数据则显示未保存的提示信息。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
- **[cli]** 将 NocoBase CLI 的安装与管理交互流程迁移到 Inquirer，改进提示体验，并修复相关的安装、技能管理和 Docker 运行时问题。 ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
- **[数据源管理]** 优化数据建模接口，支持用 AI 创建评论表，配置外部数据源的关系字段，配置字段验证规则 ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
- **[区块：网格卡片]** 更新网格卡片插件支持 client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
- **[区块：iframe]** 新增 iframe 区块的 v2 支持。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

### 🐛 修复

- **[client]**

  - 修复子表格中关系字段设置为仅展示后刷新不显示或不可点击的问题。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  - 为表单提交动作补充“提交成功后”设置项。 ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
- **[client-v2]** 修复表格中关系字段标题字段选项列表为空的问题 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
- **[flow-engine]** 修复子模型菜单中关系字段子菜单状态不稳定的问题 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
- **[文件管理器]** 修复文件管理器 `tx-cos` 上传后缺少文件大小元数据的问题。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
- **[数据表字段：手写签名]** 移动端签名框显示异常 by @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/cn/blog/v2.1.0-alpha.35)

*发布日期：2026-05-14*

### 🎉 新特性

- **[undefined]** 新增 AI 员工：本地化工程师 Lina, 辅助完成本地化翻译 ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
  参考文档：[本地化管理](https://docs.nocobase.com/cn/system-management/localization)<br />[Lina：本地化工程师](https://docs.nocobase.com/cn/ai-employees/built-in/lina)<br>[使用 Lina 和本地 HY-MT1.5-1.8B 翻译本地化词条](https://docs.nocobase.com/cn/ai-employees/scenarios/localization-hy-mt)
- **[日历]** 日历插件新增 client v2 支持。 ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
- **[区块：树]** 为树筛选区块新增 client-v2 支持。 ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx
- **[文件存储：S3 (Pro)]** 支持在 v2 文件管理器中通过 S3 Pro 存储上传文件。 by @Molunerfinn

### 🚀 优化

- **[build]** 补充了 `deleteServerFiles` 的回归测试，确保在 Windows 和 POSIX 路径场景下不会误删 `client` 和 `client-v2` 构建产物。 ([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn
- **[client]** 一对多关系表格区块的关联操作中，弹窗选择区块应排除已关联数据 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
- **[AI 员工]** AI 员工并行会话交互与性能优化 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock
- **[文件管理器]** 第三方存储插件现在可以在 v2 的文件管理器设置页注册自定义的存储类型表单。 ([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn
- **[AI: 知识库]** 支持在创建知识库时指定其唯一键 by @cgyrock

### 🐛 修复

- **[client]**

  - 修复表格中关联字段显示快捷编辑允许打开编辑弹窗的问题 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  - 修复 v2 数据区块多选字段显示选项值而非选项标签的问题 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
  - 修复筛选表单有默认值时表格初始化重复请求的问题 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  - 修复旧默认值配置无法被移除的问题。 ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  - 修复字段赋值里关系字段选择字段无法选择常量字段的问题。 ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  - 修复系统设置提交后页面显示为空的问题 ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe
  - 修复表格区块事件流行数据取消选择时设置目标区块数据范围不正确的问题。 ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  - 修复 v2 表格中关系字段修改标题字段时报错的问题 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
  - 修复 V2 联动规则支持字段设置可选项 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
- **[client-v2]**

  - v2 布局中过滤 v1 菜单后保留空分组 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
  - 修复启用插件弹窗后方页面变空白的问题 ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe
  - 修复 v1 后台页面在生产构建下引用 v2 插件模块时崩溃的问题。 ([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn
- **[cli-v1]** 修复通过 create-nocobase-app 创建的应用在开发启动时因 app-dev 客户端路径解析错误导致构建失败的问题。 ([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn
- **[server]** fix(file-manager): 对本地/公开存储中有风险内容的文件强制下载 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
- **[AI 员工]**

  - 修复 AI 插件启动失败问题 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
  - 修复 Ollama 试运行无需 Key 却要求输入的问题 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
- **[区块：分步表单]** 修复 v1 分步表单区块设置全高后页面出现滚动条的问题 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
- **[部门]** 修复 Users & Permissions 设置中添加用户和添加部门按钮翻译相互影响的问题 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
- **[工作流]** 修复：补回 FlowModel 工作流绑定弹窗中操作类事件与自定义操作事件的提示文案 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
- **[Markdown]** 修复 v2 Markdown 区块报错的问题 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe
- **[工作流：Webhook 触发器]** 修复由于验证规则导致创建响应节点失败的问题 by @mytharcher
- **[工作流：审批]**

  - 修复移动端审批表单布局显示不正确的问题 by @zhangzhonghe
  - 修复审批转签时审批记录索引重复的问题。 by @mytharcher
- **[备份管理器]** 修复备份时因为文件无法找到而失败报错的问题。 by @gchust

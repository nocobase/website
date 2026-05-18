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


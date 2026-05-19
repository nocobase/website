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


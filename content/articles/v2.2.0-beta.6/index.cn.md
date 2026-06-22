### 🎉 新特性

- **[cli]** nb init 支持 --hook-script ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos

- **[UI 布局]** 增加对移动端布局的支持 ([#9641](https://github.com/nocobase/nocobase/pull/9641)) by @zhangzhonghe

- **[备份管理器]** 支持 KingBase 主数据库备份和还原 ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile

- **[多工作区]** 新增多工作区插件 by @zhangzhonghe

- **[迁移管理]** 支持 KingBase 主数据库迁移 by @2013xile

### 🚀 优化

- **[client-v2]**
  - 在 UI 字段验证设置中以只读继承规则的形式展示字段级验证规则。 ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh

  - 表单值配置新增覆盖值选项。 ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust

- **[undefined]** 优化 AI 知识库检索和相关文档。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock

- **[前端流引擎]**
  - 利用 flowsurface api 搭建 AI 员工时默认将当前区块添加至用户上下文中。 ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust

  - 开放 runjs 运行环境限制。 ([#9841](https://github.com/nocobase/nocobase/pull/9841)) by @gchust

- **[工作流]** 改进测试用例的稳定性 ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher

- **[权限控制]** 对齐 v2 用户和权限设置页与 v1 的行为，包括分页总数显示、部门树交互、选中样式，以及权限面板内部滚动。 ([#9810](https://github.com/nocobase/nocobase/pull/9810)) by @jiannx

- **[备份管理器]** `dataCategory` 标记为 `'runtime'` 的数据表现在会自动从备份中排除。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock

- **[AI: 知识库]** 改进 AI 知识库文档分段、分段管理、命中测试以及文档工作流节点支持。 by @cgyrock

### 🐛 修复

- **[client-v2]**
  - 修复更改区块配置后界面不刷新的问题。 ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust

  - 修复自定义操作工作流触发按钮将自定义上下文 JSON 放到额外的 `values` 层级或作为序列化字符串提交的问题。 ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher

  - 修复配置固定值或者默认值为关系字段值时不生效的问题。 ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust

  - 修复子表格列事件流执行不正确的问题。 ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust

  - 修复关系字段错误携带`updateAssociationValues` 问题 ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh

  - 修复子表单包含子表格时表单提交报错的问题。 ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust

- **[ai]**
  - 修复 AI 插件中 LangChain 依赖版本解析不兼容的问题。 ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock

  - 将 AI 相关包中的 `@langchain/openai` 锁定为仅允许补丁版本更新。 ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock

- **[app]** 避免在推断插件 public path 时使用无关的 currentScript ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos

- **[auth]** 登录状态响应不再包含加密密码数据 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile

- **[区块：甘特图]** 修复甘特图任务弹窗模板设置无法正确生效或清空的问题。 ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx

- **[操作：打印]** 修复 v2 详情区块为空时打印整页的问题，空详情区块不再打印导航和侧边栏。 ([#9832](https://github.com/nocobase/nocobase/pull/9832)) by @katherinehhh

- **[UI 模板]** 修复 ctx.openview 默认上下文不正确的问题。 ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust

- **[文件管理器]** 修复外部数据源附件 URL 字段上传文件时接口 404 的问题 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile

- **[操作：自定义请求]** 修复 V2 自定义请求操作未配置请求设置时额外弹出错误提示的问题。 ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh

- **[工作流]** 修复工作流调度器在调度异常后的恢复问题。 ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher

- **[AI 员工]** 修复 AI 员工快捷入口触发任务时未携带当前工作上下文附件的问题。 ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock

- **[数据源：外部 NocoBase]** 按上传数据源代理 NocoBase 外部数据源的文件上传和存储接口 by @2013xile

- **[AI: 知识库]**
  - 修复 AI 知识库插件中 LangChain 依赖版本解析不兼容的问题。 by @cgyrock

  - 修复未启用 AI 插件时启用 AI 知识库插件报错不明确的问题。 by @cgyrock

- **[多空间]** 修复认证恢复请求被过期多空间请求头阻断的问题。 by @jiannx

- **[工作流：子流程]** 修复异步子流程在服务重启或内存事件映射丢失后父流程无法继续执行的问题。 by @mytharcher

- **[工作流：审批]** 修复相关审批首次不加载或刷新后时间线不更新的问题 by @zhangzhonghe

- **[应用监管器]** 修复远程 WebSocket 代理响应失败时可能导致服务崩溃的问题 by @2013xile


### 🎉 新特性

- **[ai]** 支持在远程 MCP 客户端的 URL 和请求头中使用当前用户变量。 ([#9828](https://github.com/nocobase/nocobase/pull/9828)) by @cgyrock

### 🚀 优化

- **[client-v2]**
  - 修复 Client V2 插件管理卡片在插件使用共享或历史设置路径时缺少 Settings 入口的问题。 ([#9852](https://github.com/nocobase/nocobase/pull/9852)) by @katherinehhh

  - 调整 v2 系统设置菜单顺序和页面面板高度，使其与设置中心的统一布局保持一致。 ([#9849](https://github.com/nocobase/nocobase/pull/9849)) by @katherinehhh

- **[备份管理器]**
  - 修复版本控制按选中数据表备份时，包含视图或相关数据库对象后还原失败的问题。 ([#9827](https://github.com/nocobase/nocobase/pull/9827)) by @cgyrock

  - 优化备份管理表格样式及长文件名显示。 ([#9864](https://github.com/nocobase/nocobase/pull/9864)) by @katherinehhh

- **[公开表单]** 区分 V1 和 V2 的公开表单列表，并修复 V2 Configure 进入可配置表单详情页的问题。 ([#9851](https://github.com/nocobase/nocobase/pull/9851)) by @katherinehhh

- **[用户数据同步]** 新增用户数据同步设置的新版界面支持 ([#9837](https://github.com/nocobase/nocobase/pull/9837)) by @2013xile

- **[企业微信]** 新增企业微信认证、同步和通知设置的新版界面支持 by @2013xile

- **[钉钉]** 新增钉钉认证、同步和通知设置的新版界面支持 by @2013xile

### 🐛 修复

- **[flow-engine]**
  - 修复调整字段宽度时详情弹窗异常关闭的问题 ([#9850](https://github.com/nocobase/nocobase/pull/9850)) by @zhangzhonghe

  - 修复拖拽字段后区块工具栏可能不重新显示的问题 ([#9848](https://github.com/nocobase/nocobase/pull/9848)) by @zhangzhonghe

- **[client-v2]**
  - 修复联合角色在 v2 版本中无法被变量正确解析的问题。 ([#9611](https://github.com/nocobase/nocobase/pull/9611)) by @gchust

  - 修复筛选表单无法给显示关联表字段赋值的问题 ([#9875](https://github.com/nocobase/nocobase/pull/9875)) by @zhangzhonghe

- **[cli]** source dev 依赖优化 ([#9882](https://github.com/nocobase/nocobase/pull/9882)) by @chenos

- **[ai]** 支持在依赖当前用户的 MCP 配置中使用 NocoBase 请求变量，并避免用户态 MCP 连接失败影响 AI 员工正常对话。 ([#9888](https://github.com/nocobase/nocobase/pull/9888)) by @cgyrock

- **[UI 模板]** 修复关系字段区块模板无法被使用的问题。 ([#9406](https://github.com/nocobase/nocobase/pull/9406)) by @gchust

- **[数据源管理]** 为 v2 数据源中没有主键或记录唯一标识的数据表增加提示和快捷设置。 ([#9872](https://github.com/nocobase/nocobase/pull/9872)) by @katherinehhh

- **[嵌入 NocoBase]** 修复 v2 嵌入页面在 URL token 被移除后刷新会丢失 token 访问状态的问题。 ([#9857](https://github.com/nocobase/nocobase/pull/9857)) by @katherinehhh

- **[工作流：自定义操作事件]**
  - 修复 v2 自定义操作绑定工作流选择器的过滤请求，保证启用状态使用布尔值过滤并能正确列出工作流。 ([#9865](https://github.com/nocobase/nocobase/pull/9865)) by @mytharcher

  - 修复 v2 触发工作流按钮在自定义上下文请求体提交前未解析前端变量的问题 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) by @mytharcher

- **[多空间]** 修复空间设置页面只能加载前 20 条空间记录的问题。 by @jiannx

- **[版本控制]** 修复版本控制按选中数据表备份时，包含视图或相关数据库对象后还原失败的问题。 by @cgyrock

- **[AI: 知识库]** 修复 AI 知识库文档表格和命中测试结果卡片在窄屏或长文件名场景下内容溢出的问题。 by @cgyrock

- **[工作流：审批]** 修复审批动作节点校验：`applyDetail` 或 `approvalUid` 允许传入 `null`，仅在提供字符串引用时才进行处理 by @mytharcher


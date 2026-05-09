### 🎉 新特性

- **[server]** AI 员工可以通过 Bash 命令检索内置文档 ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile

- **[AI 员工]** 工作流 AI 员工节点支持从附件字段加载文件 ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock

- **[文本复制]** 阅读态文本字段支持“启用复制”配置项 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 优化

- **[client]** 支持字段赋值中使用自动编码字段 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

- **[区块：看板]** 优化 v2 详情字段间距一致性，并使看板卡片和列间距更好地适配主题设置。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx

- **[AI 员工]** 优化 Nathan 的 RunJS 编辑工具，并减少长 AI 对话中的卡顿 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile

- **[工作流：审批]** 修复审批表单必填校验的交互问题 by @zhangzhonghe

### 🐛 修复

- **[flow-engine]** 修复 v2 Flow 表单中数据表字段校验提示未翻译的问题 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx

- **[client]**
  - 修复筛选表单无法折叠的问题 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe

  - 修复自定义下拉多选筛选标量字段时报错的问题 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe

  - 修复 AttachmentURL 字段在缺少文件元数据时下载文件名异常的问题。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher

  - 修复 v2 DividerItem 未适配主题的问题 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh

  - 修复 v1 子表格联动规则错误改变字段必填样式的问题 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe

  - 修复表单区块中设置为 `隐藏并保留值` 的字段在页面编辑模式下不显示的问题，并恢复在字段赋值中为这类字段设置值的输入能力 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx

  - 修复 v2 表格批量触发工作流在跳转到其他 tab 后返回原 tab 时选中状态不同步，且返回后可再次勾选记录的问题 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx

- **[client-v2]**
  - 修复字段值配置中选择关系字段报错的问题。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust

  - 修复应用启动后会闪一下 404 页面的问题 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe

- **[server]** 修复子应用 OAuth 发现请求被错误路由为主应用请求的问题 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile

- **[数据源：主数据库]** 修复启用表前缀时导入数据库表后错误使用带前缀表名的问题 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile

- **[通知：站内信]** 修复收到实时站内信后通知列表未及时刷新的问题 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher

- **[数据源管理]** 修复角色权限配置中外部数据源自定义范围允许编辑删除所有数据的问题 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh

- **[AI: MCP 服务器]** 修复 MCP 服务器打包时运行时依赖未包含的问题 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile

- **[前端流引擎]** 修复 AI 搭建的区块转换成引用模板后无法再转换成复制模板。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust

- **[操作：导入记录 Pro]** 修复识别重复检查针对日期字段时总是失败的问题 by @mytharcher

- **[密码策略]** 修复永久锁定用户在服务重启后登录限制可能失效的问题 by @2013xile

- **[工作流：审批]** 修复审批工作流配置中选择记录抽屉被遮挡的问题 by @zhangzhonghe

- **[备份管理器]** 修复 pg 数据库 schema 适配的问题 by @Andrew1989Y


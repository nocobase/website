### 🎉 新特性

- **[client]** 支持配置数据加载方式 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe

- **[flow-engine]** 支持配置 ESM_CDN_BASE_URL 环境变量 ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos

- **[认证：钉钉]** 支持通过 `unionId` 绑定用户 by @2013xile

### 🚀 优化

- **[flow-engine]** 优化 JS model 代码编辑器相关的自动补全和提示。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust

- **[client]**
  - 行内编辑子表格列宽配置方式调整为下拉选择 ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh

  - `ResourceActionProvider` 支持禁用多余的默认 `appends` 参数 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile

- **[acl]** acl 添加 generalFixedParams 方法 ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx

- **[数据表字段：Markdown(Vditor)]** 新增默认编辑模式配置项，支持在组件设置中选择初始编辑状态 ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038

- **[工作流]** 修改工作流子页面的路由路径，将工作流页面都统一在 `/admin/settings/workflow` 路径之下 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher

- **[AI: 知识库]** 优化构建产物，缩小AI知识库插件的包体积 by @cgyrock

- **[多空间]** 多空间权限控制接入acl by @jiannx

- **[认证：钉钉]** 默认使用 `userid` 关联用户，并保持已有认证器使用手机号的兼容性 by @2013xile

### 🐛 修复

- **[client]**
  - 修复开启树表格后需刷新页面才能添加「添加子记录」操作的问题 ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh

  - 修复 Grid 布局中存在占位的问题 ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe

  - 修复子表格行内编辑时列宽缩小时未实时更新，多行文本字段列宽变宽后输入框未随列宽自适应的问题 ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh

  - 修复编辑表单中通过关系字段选择器的快速新增按钮添加数据时会将表单中的数据覆盖的问题。 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust

  - 非树结构表隐藏表格区块 属性里的「启用树表格」和「默认展开所有行」 ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh

  - 修复添加操作弹窗不应该出现表格（添加）菜单的问题。 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust

  - 修复 nanoid 字段新增表单提交后未重新生成默认值的问题 ([#8538](https://github.com/nocobase/nocobase/pull/8538)) by @katherinehhh

  - 修复事件流刷新跨弹窗目标区块时不生效的问题。 ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust

  - 修复筛选相关的已知问题 ([#8514](https://github.com/nocobase/nocobase/pull/8514)) by @zhangzhonghe

  - 修复表单提交后数据区块会重复刷新的问题。 ([#8531](https://github.com/nocobase/nocobase/pull/8531)) by @gchust

  - 修复首次打开弹窗后关闭弹窗导致页面数据错误刷新问题。 ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust

  - 修复多层级对多字段子表单字段联动规则无法使用表单变量赋值的问题。 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust

  - 修复级联组件在设置默认值时数据显示异常的问题 ([#8537](https://github.com/nocobase/nocobase/pull/8537)) by @katherinehhh

  - 修复多级弹窗及跨区块数据变更后不刷新问题。 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust

- **[flow-engine]**
  - 修复子表格（弹窗编辑）中配置 createModelOptions 后列操作删除失效的问题 ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh

  - 修复切换页面后再次打开弹窗提交表单后不刷新的问题。 ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust

  - 修复 JS block 中部分第三方库无法被正确引入的问题。 ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust

  - 修复 runjs 在模块解析阶段对部分 ESM 库误判为 AMD 模块，导致加载逻辑错误的问题。 ([#8536](https://github.com/nocobase/nocobase/pull/8536)) by @gchust

  - 修复外部数据源 filterTargetKey 为单元素数组时 FilterByTK 处理错误 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh

  - 修复子表格（弹窗编辑）中配置 createModelOptions 后列操作删除失效的问题 ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh

- **[数据表字段：附件（URL）]** 修复编辑表单中附件 URL 字段配置显示文件名不生效的问题 ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh

- **[AI 员工]**
  - 修复 LLM 节点发送消息失败的问题 ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile

  - 修复构建后系统无法启动问题 ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock

  - 修复AI建模时自动调用工具时出现的异常 ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock

- **[UI 模板]** 修复将关系字段新增记录表单弹窗保存为模板后再次打开并提交表单时报错的问题。 ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust

- **[操作：导入记录]** 修复导入操作的安全隐患 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher

- **[文件管理器]** 加固本地存储引擎的文件路径处理，以避免访问到上传目录以外的位置 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher

- **[工作流]** 为选择表记录的组件增加容错，以避免表被删除后组件报错 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher

- **[工作流：自定义操作事件]** 修复触发自定义操作工作流时参数和载荷数据不正确的问题 by @mytharcher

- **[多空间]**
  - 空间字段删除read-pretty属性 by @jiannx

  - 添加迁移脚本移除空间字段中 x-ready-pretty by @jiannx

- **[AI: 知识库]** 修复构建后系统无法启动问题 by @cgyrock

- **[操作：导入记录 Pro]** 修复导入结果的统计数字和消息翻译 by @mytharcher

- **[工作流：子流程]** 修复工作流链接的路由路径 by @mytharcher

- **[模板打印]** 修复模板打印按钮模板配置页字段列表显示异常的问题 by @katherinehhh

- **[工作流：审批]**
  - 修复列表 API 加载时由于追加 JSON 字段导致的性能问题（MySQL） by @mytharcher

  - 为删除的工作流增加容错，避免待办列表加载报错 by @mytharcher

  - 修复已有人员范围的工作流禁用后，对用户增加角色时的报错问题 by @mytharcher

- **[邮件管理]** 选中文本时正文不折叠。修复附件下载失败 by @jiannx

- **[企业微信]** 修复用户缺少手机号时不能自动注册的问题 by @2013xile


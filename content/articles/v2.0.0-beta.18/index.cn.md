### 🎉 新特性

- **[flow-engine]** 支持配置 ESM_CDN_BASE_URL 环境变量 ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos

### 🚀 优化

- **[acl]** acl 添加 generalFixedParams 方法 ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx

- **[client]** `ResourceActionProvider` 支持禁用多余的默认 `appends` 参数 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile

- **[认证：钉钉]** 默认使用 `userid` 关联用户，并保持已有认证器使用手机号的兼容性 by @2013xile

### 🐛 修复

- **[client]**
  - 修复事件流刷新跨弹窗目标区块时不生效的问题。 ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust

  - 修复首次打开弹窗后关闭弹窗导致页面数据错误刷新问题。 ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust

  - 修复表单提交后数据区块会重复刷新的问题。 ([#8531](https://github.com/nocobase/nocobase/pull/8531)) by @gchust

  - 修复 nanoid 字段新增表单提交后未重新生成默认值的问题 ([#8538](https://github.com/nocobase/nocobase/pull/8538)) by @katherinehhh

  - 修复级联组件在设置默认值时数据显示异常的问题 ([#8537](https://github.com/nocobase/nocobase/pull/8537)) by @katherinehhh

- **[flow-engine]** 修复 runjs 在模块解析阶段对部分 ESM 库误判为 AMD 模块，导致加载逻辑错误的问题。 ([#8536](https://github.com/nocobase/nocobase/pull/8536)) by @gchust

- **[文件管理器]** 加固本地存储引擎的文件路径处理，以避免访问到上传目录以外的位置 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher

- **[工作流]** 为选择表记录的组件增加容错，以避免表被删除后组件报错 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher

- **[AI 员工]** 修复AI建模时自动调用工具时出现的异常 ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock

- **[操作：导入记录 Pro]** 修复导入结果的统计数字和消息翻译 by @mytharcher

- **[工作流：子流程]** 修复工作流链接的路由路径 by @mytharcher

- **[模板打印]** 修复模板打印按钮模板配置页字段列表显示异常的问题 by @katherinehhh

- **[工作流：审批]**
  - 修复已有人员范围的工作流禁用后，对用户增加角色时的报错问题 by @mytharcher

  - 为删除的工作流增加容错，避免待办列表加载报错 by @mytharcher

- **[企业微信]** 修复用户缺少手机号时不能自动注册的问题 by @2013xile


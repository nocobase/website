### 🎉 新特性

- **[AI 员工]** 为 AI 员工添加调用 sub agents 的能力 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock

- **[AI: MCP 服务器]** 提供通用的数据表查询接口，支持通过 MCP 调用 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile

### 🚀 优化

- **[undefined]**
  - 为 README 添加目录 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765

  - 通过静默解压 LibreOffice 和 Oracle Instant Client, 减少服务器启动时的冗余日志 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925

- **[前端流引擎]** 新增 UI 搭建相关的 api。 ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust

- **[工作流]** 调整启用开关尺寸为小尺寸 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher

- **[AI 员工]** 优化deepseek处理不支持的文件类型时的提示 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock

- **[操作：自定义请求]** 添加自定义请求的操作按钮 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx

- **[工作流：JavaScript 节点]** 将 `isolated-vm` 添加为 JavaScript 节点的默认执行引擎 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
参考文档：[JavaScript 节点](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 修复

- **[server]**
  - 对分发应用状态增加服务模式的检查，以避免非服务模式的实例更新应用状态 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher

  - 支持按 hostname 获取受理应用 ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile

- **[client]**
  - 子表格关系字段保存不成功 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx

  - 字段的子表单不显示数据 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx

  - 修复表格中关联字段的文案首次渲染未正确显示 ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx

  - 修复多级弹窗时表单数据修改后关闭弹窗二次确认消息不正确的问题。 ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust

  - 修复变量表达式包含空格时名称无法正常显示的问题 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher

- **[flow-engine]**
  - 修复弹窗中配置菜单被裁剪的问题 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust

  - 修复配置态 UI 组件宽度太小时无法选中菜单的问题。 ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust

  - 添加设置表单控件和详情控件的js片段 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx

- **[工作流：邮件发送节点]** 修复可使用变量的字段的验证规则 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher

- **[数据表字段：排序]** 修复 field-sort 插件在 scopeKey 未定义时导致的崩溃问题 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765

- **[AI 员工]**
  - 修复 AI 员工无法使用skills的问题 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock

  - 修复禁用getSkill工具后大模型仍然尝试加载技能的问题 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock

  - 修复使用千问大模型时联网搜索行为异常的问题 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock

  - AI 会话接口增加所有权校验 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock

- **[区块：网格卡片]** 修复网格卡片刷新时按钮未刷新问题 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx

- **[工作流]**
  - 修复条件节点错误的验证规则 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher

  - 修复数据表触发器的触发模式不能设置为“新增或更新”的问题 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher

- **[通知：站内信]** 修复站内信消息操作的白名单处理，避非本人免越权操作 ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher

- **[数据源管理]** 优化 MCP 工具命名；精简冗余的接口输出结果，避免消耗大量的 AI 对话上下文 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile

- **[工作流：SQL 节点]** 修复 SQL 节点安全问题 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher

- **[数据可视化]** 图表在使用带变量筛选条件时，首次渲染无法正确解析变量值 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile

- **[工作流：审批]**
  - 为删除的工作流增加容错，避免待办列表加载报错 by @mytharcher

  - 为缺失“提交轮次”数据增加容错 by @mytharcher

  - 修复历史迁移脚本版本限制，以避免在新版本部署后启动报错的问题 by @mytharcher

- **[邮件管理]** 邮件发送后不显示关闭确认 by @jiannx


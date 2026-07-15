### 🎉 新特性

- **[认证：LDAP]** 新增 LDAP 用户数据同步源支持，并支持可选的 AD 部门同步。 by @chenzhizdt

### 🚀 优化

- **[ai]** 降低上传知识库文档解析时主进程的内存占用。 ([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock

- **[undefined]** 文件 URL 现在使用稳定的 NocoBase 访问地址，可在跳转到存储地址前完成权限校验。 ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

- **[前端流引擎]** UI 搭建 api 支持多工作区。 ([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust

- **[文件存储：S3 (Pro)]** S3 Pro 上传现在返回包含永久文件 URL 的已创建文件记录。 by @mytharcher

- **[RabbitMQ 消息队列适配器]** 增强 RabbitMQ 适配器的 channel 管理与错误恢复能力 by @sdp-ncd

### 🐛 修复

- **[client-v2]**
  - 修复 v2 表格固定列开启快速编辑后透出其他列内容的问题。 ([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh

  - 修复 v2 扫描输入在 iOS Chrome 中的摄像头预览布局异常。 ([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh

- **[工作流]**
  - 修复工作流序列化追加关联数据时会包含隐藏字段的问题 ([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher

  - 修复手动执行工作流时，请求有效但未启动执行会返回错误的问题。 ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher

- **[数据表字段：Markdown(Vditor)]** 修复 v1 Markdown 渲染和编辑中的 iframe 清理问题。 ([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh

- **[操作：批量编辑]** 修复 V2 表单包含 `process` 字段时 Markdown 编辑器初始化失败的问题。 ([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh

- **[UI 布局]** 修复子应用中的 Mobile 设置入口错误跳转到主应用的问题。 ([#10075](https://github.com/nocobase/nocobase/pull/10075)) by @katherinehhh

- **[AI 员工]**
  - 修复 AI 工具调用审批会先校验消息所属会话权限后再更新决策的问题。 ([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock

  - 修复 AI 附件处理逻辑，避免信任客户端传入的文件路径或 URL。 ([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock

- **[用户数据同步]** 修复外部部门同步顺序问题，确保父部门后续同步时，已存在的子部门可以正确挂载到父部门下。 ([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt

- **[数据源：外部 NocoBase]**
  - 修复工作流 AI 员工无法读取外部 NocoBase 数据源附件的问题 by @2013xile

  - 修复外部 NocoBase 文件表的文件预览、永久 URL 处理和上传路由问题，包括 S3 Pro 上传场景 by @mytharcher

- **[工作流：审批]** 临时开关开启时，审批提交中的文件关联仅保留当前用户创建的文件。 by @mytharcher


### 🐛 修复

- **[client-v2]**
  - 修复 v2 表格固定列开启快速编辑后透出其他列内容的问题。 ([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh

  - 修复 v2 扫描输入在 iOS Chrome 中的摄像头预览布局异常。 ([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh

- **[app]** 修复 Redis 缓存配置忽略专用缓存地址的问题 ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile

- **[操作：批量编辑]** 修复 V2 表单包含 `process` 字段时 Markdown 编辑器初始化失败的问题。 ([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh

- **[AI 员工]** 修复 AI 附件处理逻辑，避免信任客户端传入的文件路径或 URL。 ([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock

- **[工作流]** 修复手动执行工作流时，请求有效但未启动执行会返回错误的问题。 ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher

- **[Redis worker ID 分配器]**
  - 改进 Redis Worker ID 隔离与故障诊断 by @2013xile

  - 修复未配置 Worker ID Redis 时单机模式无法启动的问题 by @2013xile

- **[工作流：审批]** 临时开关开启时，审批提交中的文件关联仅保留当前用户创建的文件。 by @mytharcher


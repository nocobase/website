### 🎉 新特性

- **[钉钉]** 新增钉钉 Stream 模式组织事件同步支持。 by @chenzhizdt

- **[认证：LDAP]** 新增 LDAP 用户数据同步源支持，并支持可选的 AD 部门同步。 by @chenzhizdt

### 🚀 优化

- **[ai]** 降低上传知识库文档解析时主进程的内存占用。 ([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock

- **[undefined]**
  - 文件 URL 现在使用稳定的 NocoBase 访问地址，可在跳转到存储地址前完成权限校验。 ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

  - 文件 URL 现在使用稳定的 NocoBase 访问地址，可在跳转到存储地址前完成权限校验。 ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

- **[文件存储：S3 (Pro)]** S3 Pro 上传现在返回包含永久文件 URL 的已创建文件记录。 by @mytharcher

- **[RabbitMQ 消息队列适配器]** 增强 RabbitMQ 适配器的 channel 管理与错误恢复能力 by @sdp-ncd

### 🐛 修复

- **[用户数据同步]** 修复外部部门同步顺序问题，确保父部门后续同步时，已存在的子部门可以正确挂载到父部门下。 ([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt

- **[数据表字段：Markdown(Vditor)]** 修复 v1 Markdown 渲染和编辑中的 iframe 清理问题。 ([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh

- **[工作流]** 修复工作流序列化追加关联数据时会包含隐藏字段的问题 ([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher

- **[AI 员工]** 修复 AI 工具调用审批会先校验消息所属会话权限后再更新决策的问题。 ([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock

- **[数据源：外部 NocoBase]**
  - 修复外部 NocoBase 文件表的文件预览、永久 URL 处理和上传路由问题，包括 S3 Pro 上传场景 by @mytharcher

  - 修复工作流 AI 员工无法读取外部 NocoBase 数据源附件的问题 by @2013xile


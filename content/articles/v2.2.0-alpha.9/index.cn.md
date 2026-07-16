### 🎉 新特性

- **[client-v2]** 页面、子页面和弹窗的 Tab 支持配置联动规则 ([#10099](https://github.com/nocobase/nocobase/pull/10099)) by @zhangzhonghe

- **[AI 员工]** 新增可在 JS 区块中触发 AI employee task 的 RunJS API。 ([#10061](https://github.com/nocobase/nocobase/pull/10061)) by @cgyrock

- **[钉钉]** 新增钉钉 Stream 模式组织事件同步支持。 by @chenzhizdt

- **[认证：LDAP]** 新增 LDAP 用户数据同步源支持，并支持可选的 AD 部门同步。 by @chenzhizdt

### 🚀 优化

- **[undefined]**
  - 文件 URL 现在使用稳定的 NocoBase 访问地址，可在跳转到存储地址前完成权限校验。 ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

  - 文件 URL 现在使用稳定的 NocoBase 访问地址，可在跳转到存储地址前完成权限校验。 ([#10103](https://github.com/nocobase/nocobase/pull/10103)) by @mytharcher

  - 文件 URL 现在使用稳定的 NocoBase 访问地址，可在跳转到存储地址前完成权限校验。 ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

  - 更新数据源文档结构、链接和多语言页面。 ([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
参考文档：[数据源](docs/docs/cn/data-sources/index.md)
  - 更新数据源文档结构、链接和多语言页面。 ([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
参考文档：[数据源](docs/docs/cn/data-sources/index.md)
- **[ai]** 降低上传知识库文档解析时主进程的内存占用。 ([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock

- **[工作流：人工处理节点]** 在新版待办中心显示人工任务并引导用户前往旧版页面处理 ([#10085](https://github.com/nocobase/nocobase/pull/10085)) by @zhangzhonghe

- **[文件存储：S3 (Pro)]**
  - S3 Pro 上传现在返回包含永久文件 URL 的已创建文件记录。 by @mytharcher

  - S3 Pro 上传现在返回包含永久文件 URL 的已创建文件记录。 by @mytharcher

- **[RabbitMQ 消息队列适配器]** 增强 RabbitMQ 适配器的 channel 管理与错误恢复能力 by @sdp-ncd

- **[邮件管理]** 将按部门查看邮件配置移动到 V1 邮件通用设置页面，避免服务商凭据保存时覆盖该配置，并将 V2 通用设置排在服务商设置之前。 by @jiannx

### 🐛 修复

- **[client-v2]**
  - 修复自动 SSO 跳转 Provider 在生产构建中无法保持正确鉴权顺序的问题 ([#10100](https://github.com/nocobase/nocobase/pull/10100)) by @jiannx

  - 修正 Urdu 标签，并在系统设置语言列表中新增独立的乌兹别克语选项。 ([#10090](https://github.com/nocobase/nocobase/pull/10090)) by @hongboji

  - 工作流筛选条件现在会保留工作流变量表达式，并在变量元数据无法解析时显示明确的错误提示。 ([#10088](https://github.com/nocobase/nocobase/pull/10088)) by @Molunerfinn

  - 修复 v2 扫描输入在 iOS Chrome 中的摄像头预览布局异常。 ([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh

  - 修复 v2 表格固定列开启快速编辑后透出其他列内容的问题。 ([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh

- **[用户认证]**
  - 修复 v2 认证器管理页面的声明生成错误 ([#10095](https://github.com/nocobase/nocobase/pull/10095)) by @jiannx

  - 修复 v2 认证管理中编辑认证器时已保存设置不回显的问题。 ([#10091](https://github.com/nocobase/nocobase/pull/10091)) by @jiannx

- **[AI 员工]**
  - 修复在 AI 员工聊天输入框粘贴文件后发送报错的问题 ([#10106](https://github.com/nocobase/nocobase/pull/10106)) by @cgyrock

  - 修复 AI 工具调用审批会先校验消息所属会话权限后再更新决策的问题。 ([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock

  - 修复 AI 附件处理逻辑，避免信任客户端传入的文件路径或 URL。 ([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock

- **[数据表字段：Markdown(Vditor)]** 修复 v1 Markdown 渲染和编辑中的 iframe 清理问题。 ([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh

- **[工作流]**
  - 修复工作流序列化追加关联数据时会包含隐藏字段的问题 ([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher

  - 查看已执行工作流时，工作流表单控件现在会正确继承禁用状态。 ([#10079](https://github.com/nocobase/nocobase/pull/10079)) by @Molunerfinn

  - 更新触发器配置后自动刷新工作流画布 ([#10068](https://github.com/nocobase/nocobase/pull/10068)) by @zhangzhonghe

- **[通知管理]** 修复通知接收人选择后用户 ID 保存为文本的问题 ([#10093](https://github.com/nocobase/nocobase/pull/10093)) by @zhangzhonghe

- **[UI 布局]**
  - 修复 Mobile 设置入口丢失当前子应用路径的问题 ([#10078](https://github.com/nocobase/nocobase/pull/10078)) by @zhangzhonghe

  - 修复子应用中的 Mobile 设置入口错误跳转到主应用的问题。 ([#10075](https://github.com/nocobase/nocobase/pull/10075)) by @katherinehhh

- **[工作流：JSON 变量映射]** 修复工作流 JSON 变量映射节点选择循环作用域变量时报错的问题。 ([#10094](https://github.com/nocobase/nocobase/pull/10094)) by @Molunerfinn

- **[用户数据同步]** 修复外部部门同步顺序问题，确保父部门后续同步时，已存在的子部门可以正确挂载到父部门下。 ([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt

- **[操作：批量编辑]** 修复 V2 表单包含 `process` 字段时 Markdown 编辑器初始化失败的问题。 ([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh

- **[验证：TOTP 认证器]** 修复 TOTP 认证器绑定流程，确保临时设置密钥在绑定后被删除，并阻止已验证的验证码被重复使用。 by @jiannx

- **[数据源：外部 NocoBase]**
  - 修复工作流 AI 员工无法读取外部 NocoBase 数据源附件的问题 by @2013xile

  - 修复外部 NocoBase 文件表的文件预览、永久 URL 处理和上传路由问题，包括 S3 Pro 上传场景 by @mytharcher

  - 修复外部 NocoBase 文件表的文件预览、永久 URL 处理和上传路由问题，包括 S3 Pro 上传场景 by @mytharcher

- **[认证：SAML 2.0]** 修复现代客户端中未认证用户的 SAML 自动登录跳转，并保留原始目标路径 by @jiannx

- **[文件存储：S3 (Pro)]** 修复 S3 兼容存储的文件 URL 遗漏配置路径，导致已上传的 Logo 和附件返回 404 的问题 by @mytharcher

- **[认证：OIDC]** 修复 OIDC 自动登录在生产构建中不跳转的问题，并在登录后保留原始现代客户端路径 by @jiannx

- **[工作流：审批]**
  - 修复生产构建后已执行工作流的审批任务标题仍可编辑的问题。 by @Molunerfinn

  - 修复审批工作流手动执行弹窗中申请人字段提前校验及角色名称未翻译的问题。 by @Molunerfinn

  - 修复工作流配置弹窗中的表单操作按钮仍会响应点击的问题 by @zhangzhonghe

  - 允许用户在审批工作流执行后查看操作界面和审批卡片 by @zhangzhonghe

  - 临时开关开启时，审批提交中的文件关联仅保留当前用户创建的文件。 by @mytharcher

  - 修复审批发起人界面的显示与操作问题 by @zhangzhonghe

  - 修复审批申请表单空白及操作按钮缺失或显示错误的问题 by @zhangzhonghe

  - 修复启用审批和通知插件时 V2 页面可能无法打开的问题 by @zhangzhonghe

  - 审批界面无法在 V2 使用时引导用户前往 V1 页面 by @zhangzhonghe

- **[企业微信]** 修复企业微信通知渠道无法保存所选认证器的问题。 by @jiannx


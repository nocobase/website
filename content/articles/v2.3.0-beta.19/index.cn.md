### 🚀 优化

- **[server]** 支持应用运行期间重新绑定雪花 workerId。 ([#11076](https://github.com/nocobase/nocobase/pull/11076)) by @2013xile

- **[AI 员工]** 优化 AI 员工聊天在移动端和窄区块中的使用体验，提供紧凑操作栏、底部选项面板及便于触控的选择器，并在选择页面区块时自动收起选项面板。 ([#11230](https://github.com/nocobase/nocobase/pull/11230)) by @cgyrock

- **[工作流]** 优化工作流执行详情性能：首屏仅加载各节点最新 Job，节点执行记录按需游标分页加载，并精简列表字段。 ([#11094](https://github.com/nocobase/nocobase/pull/11094)) by @mytharcher

- **[钉钉]**
  - 新增钉钉接口调用 QPS 上限配置（默认 20），并对流控错误自动退避重试 by @chenzhizdt

  - 修复文件式安装插件后钉钉 Stream 模式启动失败；全量同步接口调用量降低约 90%；同步撞钉钉调用总量配额时在失败消息中显示配额重置时间 by @chenzhizdt

### 🐛 修复

- **[client-v2]** 修复 V2 字段赋值中多选字段未启用多选、以标量值提交的问题，覆盖提交、更新记录与批量更新操作 ([#11112](https://github.com/nocobase/nocobase/pull/11112)) by @hongboji

- **[工作流：抄送]** 限制工作流任务读取范围，仅允许读取本人任务及支持的关联数据。 ([#11097](https://github.com/nocobase/nocobase/pull/11097)) by @mytharcher

- **[AI 员工]**
  - 为 OpenAI Responses 服务增加可选的“无状态请求”模式，用于规避网关跨 Azure OpenAI 资源路由时的响应条目错误。 ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock

  - 修复了 AI 员工按钮被联动规则隐藏后，开启页面配置时页面卡死的问题 ([#11100](https://github.com/nocobase/nocobase/pull/11100)) by @hongboji
参考文档：[flow-model.md](https://github.com/nocobase/nocobase/blob/fix/plugin-ai-hidden-ai-employee-freeze/packages/core/client/docs/zh-CN/api/flow-engine/flow-model.md#L176-L181)
  - 修复 Qwen/DashScope Endpoint 的向量响应编码兼容问题，避免文档与查询向量维度不一致。此前受影响的知识库需重新向量化。 ([#11074](https://github.com/nocobase/nocobase/pull/11074)) by @cgyrock

- **[用户认证]** 修复认证器选项在认证类型插件加载完成前被渲染，导致应用重载后 LDAP 登录报 "must either provide a buffer via raw or some value" 的问题 ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji


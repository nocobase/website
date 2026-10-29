### 🚀 优化

- **[acl]** NocoBase 2 文档链接改为指向 nocode.docs.nocobase.com ([#11163](https://github.com/nocobase/nocobase/pull/11163)) by @Molunerfinn

- **[AI 员工]** 优化 AI 员工聊天在移动端和窄区块中的使用体验，提供紧凑操作栏、底部选项面板及便于触控的选择器，并在选择页面区块时自动收起选项面板。 ([#11230](https://github.com/nocobase/nocobase/pull/11230)) by @cgyrock

- **[钉钉]** 修复文件式安装插件后钉钉 Stream 模式启动失败；全量同步接口调用量降低约 90%；同步撞钉钉调用总量配额时在失败消息中显示配额重置时间 by @chenzhizdt

### 🐛 修复

- **[client-v2]** 修复 V2 字段赋值中多选字段未启用多选、以标量值提交的问题，覆盖提交、更新记录与批量更新操作 ([#11112](https://github.com/nocobase/nocobase/pull/11112)) by @hongboji

- **[用户认证]** 修复认证器选项在认证类型插件加载完成前被渲染，导致应用重载后 LDAP 登录报 "must either provide a buffer via raw or some value" 的问题 ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji

- **[工作流：抄送]** 限制工作流任务读取范围，仅允许读取本人任务及支持的关联数据。 ([#11097](https://github.com/nocobase/nocobase/pull/11097)) by @mytharcher

- **[AI 员工]** 为 OpenAI Responses 服务增加可选的“无状态请求”模式，用于规避网关跨 Azure OpenAI 资源路由时的响应条目错误。 ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock


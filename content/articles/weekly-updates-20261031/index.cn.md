汇总一周产品更新日志，最新发布可前往[我们的博客](https://nocode.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.36

*发布日期: 2026-10-29*

### 🚀 优化

- **[AI 员工]** 优化 AI 员工聊天在移动端和窄区块中的使用体验，提供紧凑操作栏、底部选项面板及便于触控的选择器，并在选择页面区块时自动收起选项面板。 ([#11230](https://github.com/nocobase/nocobase/pull/11230)) by @cgyrock

### 🐛 修复

- **[飞书 / Lark]** 修复旧版地址(无 `/v` 前缀)下工作流通知节点选择飞书渠道后消息表单不显示；修复新版地址下保存节点时接收人与消息内容丢失 by @chenzhizdt

### v2.2.35

*发布日期: 2026-10-28*

### 🐛 修复

- **[用户认证]** 修复认证器选项在认证类型插件加载完成前被渲染，导致应用重载后 LDAP 登录报 “must either provide a buffer via raw or some value” 的问题 ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji

### v2.2.34

*发布日期: 2026-10-27*

### 🚀 优化

- **[钉钉]** 修复文件式安装插件后钉钉 Stream 模式启动失败；全量同步接口调用量降低约 90%；同步撞钉钉调用总量配额时在失败消息中显示配额重置时间 by @chenzhizdt

### 🐛 修复

- **[AI 员工]** 为 OpenAI Responses 服务增加可选的“无状态请求”模式，用于规避网关跨 Azure OpenAI 资源路由时的响应条目错误。 ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock
- **[飞书 / Lark]** 修复配置 `APP_PUBLIC_PATH` 后飞书 OAuth 回调地址缺少前缀导致授权失败；修复 v2 客户端自动登录不触发及回跳 404 by @chenzhizdt

### v2.2.33

*发布日期: 2026-10-25*

### 🐛 修复

- **[工作流：抄送]** 限制工作流任务读取范围，仅允许读取本人任务及支持的关联数据。 ([#11097](https://github.com/nocobase/nocobase/pull/11097)) by @mytharcher

### v2.2.32

*发布日期: 2026-10-25*

### 🚀 优化

- **[钉钉]** 新增钉钉接口调用 QPS 上限配置（默认 20），并对流控错误自动退避重试 by @chenzhizdt

### 🐛 修复

- **[client-v2]** 修复 V2 字段赋值中多选字段未启用多选、以标量值提交的问题，覆盖提交、更新记录与批量更新操作 ([#11112](https://github.com/nocobase/nocobase/pull/11112)) by @hongboji

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.19

*发布日期: 2026-10-29*

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
  - 修复 Qwen/DashScope Endpoint 的向量响应编码兼容问题，避免文档与查询向量维度不一致。此前受影响的知识库需重新向量化。 ([#11074](https://github.com/nocobase/nocobase/pull/11074)) by @cgyrock
- **[用户认证]** 修复认证器选项在认证类型插件加载完成前被渲染，导致应用重载后 LDAP 登录报 “must either provide a buffer via raw or some value” 的问题 ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.14

*发布日期: 2026-10-29*

### 🚀 优化

- **[acl]** NocoBase 2 文档链接改为指向 nocode.docs.nocobase.com ([#11163](https://github.com/nocobase/nocobase/pull/11163)) by @Molunerfinn
- **[AI 员工]** 优化 AI 员工聊天在移动端和窄区块中的使用体验，提供紧凑操作栏、底部选项面板及便于触控的选择器，并在选择页面区块时自动收起选项面板。 ([#11230](https://github.com/nocobase/nocobase/pull/11230)) by @cgyrock
- **[钉钉]** 修复文件式安装插件后钉钉 Stream 模式启动失败；全量同步接口调用量降低约 90%；同步撞钉钉调用总量配额时在失败消息中显示配额重置时间 by @chenzhizdt

### 🐛 修复

- **[client-v2]** 修复 V2 字段赋值中多选字段未启用多选、以标量值提交的问题，覆盖提交、更新记录与批量更新操作 ([#11112](https://github.com/nocobase/nocobase/pull/11112)) by @hongboji
- **[用户认证]** 修复认证器选项在认证类型插件加载完成前被渲染，导致应用重载后 LDAP 登录报 “must either provide a buffer via raw or some value” 的问题 ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji
- **[工作流：抄送]** 限制工作流任务读取范围，仅允许读取本人任务及支持的关联数据。 ([#11097](https://github.com/nocobase/nocobase/pull/11097)) by @mytharcher
- **[AI 员工]** 为 OpenAI Responses 服务增加可选的“无状态请求”模式，用于规避网关跨 Azure OpenAI 资源路由时的响应条目错误。 ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock

### v2.4.0-alpha.13

*发布日期: 2026-10-24*

### 🚀 优化

- **[server]** 支持应用运行期间重新绑定雪花 workerId。 ([#11076](https://github.com/nocobase/nocobase/pull/11076)) by @2013xile
- **[工作流]** 优化工作流执行详情性能：首屏仅加载各节点最新 Job，节点执行记录按需游标分页加载，并精简列表字段。 ([#11094](https://github.com/nocobase/nocobase/pull/11094)) by @mytharcher
- **[钉钉]** 新增钉钉接口调用 QPS 上限配置（默认 20），并对流控错误自动退避重试 by @chenzhizdt

### 🐛 修复

- **[AI 员工]**

  - 修复了 AI 员工按钮被联动规则隐藏后，开启页面配置时页面卡死的问题 ([#11100](https://github.com/nocobase/nocobase/pull/11100)) by @hongboji
  - 修复 Qwen/DashScope Endpoint 的向量响应编码兼容问题，避免文档与查询向量维度不一致。此前受影响的知识库需重新向量化。 ([#11074](https://github.com/nocobase/nocobase/pull/11074)) by @cgyrock

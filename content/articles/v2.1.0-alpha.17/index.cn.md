### 🎉 新特性

- **[cli]** 重构 nocobase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos

- **[AI 员工]** 完善 AI 员工对上传文档解析能力 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 优化

- **[undefined]**
  - 同步环境变量与集群模式文档的多语言版本，保持与最新中文内容一致。 ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher

  - 文档：新增 get-started 入门页面的阿拉伯语翻译 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765

  - 新增阿拉伯语文档首页翻译 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765

- **[logger]** 请求日志增加 `referer` 信息 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile

- **[client]** 添加表单必填校验开关 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx

- **[工作流：人工处理节点]** 对工作流待办相关表使用简单分页模式，以优化列表性能表现 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher

- **[AI 员工]** AI 员工选择区块后把表单附件填充到发送框附件上传区域 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock

- **[工作流：审批]** 对 `approvals` 和 `approvalRecords` 表使用简单分页模式，以优化列表性能表现 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复单选字段在字段规则配置中可选项为空 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx

  - 修复字段值配置里关系字段组件不正确的问题。 ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust

  - 修复子表格默认值配置不生效的问题。 ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust

- **[utils]** 为服务端发送 HTTP 请求增加安全控制，以避免可能的 SSRF 隐患 ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
参考文档：[环境变量](https://docs.nocobase.com/cn/get-started/installation/env)
- **[工作流：循环节点]** 修复工作流节点的验证规则 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher

- **[通知：站内信]** 修复接收人组件工作不正常的问题 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher

- **[IdP: OAuth]** 修复普通 API 请求的 OAuth 访问 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile

- **[AI 员工]**
  - 修复 ACL 导致聚合查询排序丢失的问题 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile

  - 修复 google-gen-ai 的 LLM 服务 baseURL 配置不生效问题 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock

- **[邮件管理]** 移除邮件发送成功后的表单关闭提示 by @jiannx


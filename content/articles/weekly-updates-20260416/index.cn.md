汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/cn/blog/v2.0.37)

*发布日期：2026-04-14*

### 🚀 优化

- **[undefined]**

  - 为法语 README 添加目录 ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
  - 在 README.zh-CN.md 中添加目录 ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - 新增阿拉伯语文档首页翻译 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765
  - 文档：新增 get-started 入门页面的阿拉伯语翻译 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765
- **[client]** 添加表单必填校验开关 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx

### 🐛 修复

- **[utils]** 为服务端发送 HTTP 请求增加安全控制，以避免可能的 SSRF 隐患 ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
  参考文档：[环境变量](https://docs.nocobase.com/cn/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/cn/blog/v2.0.36)

*发布日期：2026-04-10*

### 🐛 修复

- **[client]** 子表格添加多对多报错 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
- **[flow-engine]** 修复外部数据源多对一字段无法在表格区块中添加 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
- **[通知管理]** 修复站内信通知在工作流场景下的发送性能问题，降低同步发送路径阻塞 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher

### [v2.0.35](https://www.nocobase.com/cn/blog/v2.0.35)

*发布日期：2026-04-09*

### 🐛 修复

- **[client]** 修复子表格的数据选择按钮打开的弹窗中无法正确解析上级项变量值的问题。 ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
- **[数据表字段：代码]** 修正代码字段的 UI 类型 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/cn/blog/v2.1.0-alpha.16)

*发布日期：2026-04-14*

### 🚀 优化

- **[undefined]**

  - 在 README.zh-CN.md 中添加目录 ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - 为法语 README 添加目录 ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
- **[server]** 完善插件管理相关的 Swagger API 文档 ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile

### 🐛 修复

- **[AI 员工]** 修复 AI 员工对话中异常消息不显示问题 ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock
- **[权限控制]** 更新权限管理的 swagger 文档，增强 MCP 服务 ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/cn/blog/v2.1.0-alpha.15)

*发布日期：2026-04-10*

### 🎉 新特性

- **[区块：树]** 新增树筛选区块 ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx
- **[认证：API 密钥]** 添加 `pm list` 和 `generate-api-key` 命令 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos
- **[AI 员工]**

  - 为 AI 员工新增数据聚合查询工具与业务分析报告工具 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile
  - 为 AI 员工增加基于 LLM 的联网搜索工具 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock
- **[迁移管理]** 支持 migration 命令 by @chenos
- **[邮件管理]** gmail 支持邮件别名发送 by @jiannx

### 🐛 修复

- **[flow-engine]** 修复外部数据源多对一字段无法在表格区块中添加 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
- **[client]**

  - 子表格添加多对多报错 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
  - 修复子表格的数据选择按钮打开的弹窗中无法正确解析上级项变量值的问题。 ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
  - 修复批量编辑操作会弹出不正确的未保存确认消息的问题 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  - 修复通过弹窗子表格添加记录后提交表单时会出现错误的二次确认弹窗的问题。 ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
  - 修复 ctx.request 无法覆盖 Authorization 头信息。 ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
- **[data-source-manager]** 修复从数据库同步字段后部分字段类型未正确更新的问题 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
- **[通知管理]** 修复站内信通知在工作流场景下的发送性能问题，降低同步发送路径阻塞 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher
- **[数据表字段：代码]** 修正代码字段的 UI 类型 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile
- **[工作流：HTTP 请求节点]** 清理工作流 HTTP 请求节点的结果结构，避免暴露请求配置；新节点默认仅返回响应数据，并为失败请求增加调试日志。 ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
- **[AI 员工]**

  - 修复中断 AI 员工推理过程会导致服务崩溃的问题 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
  - 修复配置 APP_PUBLIC_PATH 后，子路径访问下 AI 员工上传文档失败的问题 ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock
  - 修复在 Dashscope 上使用用 Deepseek 或 MiniMax 模型报错问题 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock

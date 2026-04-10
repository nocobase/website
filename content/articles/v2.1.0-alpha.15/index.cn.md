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
  - 修复中断AI员工推理过程会导致服务崩溃的问题 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock

  - 修复配置 APP_PUBLIC_PATH 后，子路径访问下 AI 员工上传文档失败的问题 ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock

  - 修复在Dashscope上使用用deepseek或minmax模型报错问题 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock


汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/cn/blog/v2.0.10)

*发布时间：2026-03-04*

### 🐛 修复

- **[AI 员工]** 修复启用知识库后和 AI 员工对话报错问题 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
- **[前端流引擎]** 修复 SQL 删除报错 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
- **[权限控制]** 设置 ACL 元数据时使用的数据库实例不正确 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
- **[工作流：审批]** 修复由于节点信息被类型过滤后，查询节点结果未在审批界面显示的问题 by @mytharcher

### [v2.0.9](https://www.nocobase.com/cn/blog/v2.0.9)

*发布时间：2026-03-03*

### 🐛 修复

- **[client]**

  - 修复默认值组件中不渲染字段组件的问题 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  - 修复切换菜单是数据区块不刷新的问题。 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
- **[database]** 修复 v2 版本的字段自定义正则校验失败 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
- **[flow-engine]** 修复 ctx.exit 无法终止用户定义的事件流执行的问题。 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
- **[工作流：审批]** 补全缺失的参数以避免提交审批时关系数据未被更新和处理 by @mytharcher

### [v2.0.8](https://www.nocobase.com/cn/blog/v2.0.8)

*发布时间：2026-03-01*

### 🎉 新特性

- **[AI 员工]** 更新 AI 对话用户提示词编辑 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 修复

- **[server]** 通过追加 hash 参数解决缓存未更新问题 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
- **[AI 员工]** 修复 AI 数据源配置渲染异常 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
- **[工作流：自定义操作事件]** 修复自定义操作事件作为子流程被调用时卡住的问题 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
- **[工作流：审批]**

  - 在审批操作中过滤关系字段的值，以避免越权的数据操作 by @mytharcher
  - 修复手动执行审批工作流时的报错 by @mytharcher
  - 修复加签和转签后由于缺失 `dataAfter` 字段值导致的加载列表报错问题 by @mytharcher
  - 修复基于 ACL 过滤 appends 参数的问题 by @mytharcher
  - 修复用户没有相关权限时关系字段不应该被创建或更新的权限问题 by @mytharcher

### [v2.0.7](https://www.nocobase.com/cn/blog/v2.0.7)

*发布时间：2026-02-27*

### 🎉 新特性

- **[AI 员工]** 支持通过多个关键词检索内置文档，一次性读取多个文档 ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 优化

- **[client]** 表格支持总结行（summary）的配置 ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
- **[嵌入 NocoBase]** 权限插件提供过滤关系字段值的 API ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

### 🐛 修复

- **[数据可视化]** 修复 i18n 图表插件入口和占位的文案 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
- **[工作流：JavaScript 节点]** 修复 windows 下测试用例无法通过的问题 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
- **[AI 员工]** 修复 AI 对话消息中渲染了 0 的问题 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
- **[模板打印]** 修复未适配 ACL API 变更导致的报错问题 by @mytharcher
- **[工作流：审批]** 在审批操作中过滤关系字段的值，以避免越权的数据操作 by @mytharcher
- **[邮件管理]** 修复图片 contentId 格式解析 by @jiannx

### [v2.0.6](https://www.nocobase.com/cn/blog/v2.0.6)

*发布时间：2026-02-26*

### 🐛 修复

- **[AI 员工]** 修复使用 mysql 数据库时 AI 对话报错问题 ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/cn/blog/v2.1.0-beta.7)

*发布时间：2026-03-04*

### 🎉 新特性

- **[AI 员工]** 更新 AI 对话用户提示词编辑 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 修复

- **[client]**

  - 修复默认值组件中不渲染字段组件的问题 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  - 修复切换菜单是数据区块不刷新的问题。 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
- **[flow-engine]** 修复 ctx.exit 无法终止用户定义的事件流执行的问题。 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
- **[database]** 修复 v2 版本的字段自定义正则校验失败 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
- **[server]** 通过追加 hash 参数解决缓存未更新问题 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
- **[权限控制]** 设置 ACL 元数据时使用的数据库实例不正确 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
- **[AI 员工]**

  - 修复启用知识库后和 AI 员工对话报错问题 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
  - 修复 AI 数据源配置渲染异常 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
- **[前端流引擎]** 修复 SQL 删除报错 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
- **[工作流：自定义操作事件]** 修复自定义操作事件作为子流程被调用时卡住的问题 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
- **[工作流：审批]**

  - 修复由于节点信息被类型过滤后，查询节点结果未在审批界面显示的问题 by @mytharcher
  - 补全缺失的参数以避免提交审批时关系数据未被更新和处理 by @mytharcher
  - 修复手动执行审批工作流时的报错 by @mytharcher
  - 修复加签和转签后由于缺失 `dataAfter` 字段值导致的加载列表报错问题 by @mytharcher
  - 修复用户没有相关权限时关系字段不应该被创建或更新的权限问题 by @mytharcher
  - 在审批操作中过滤关系字段的值，以避免越权的数据操作 by @mytharcher
  - 修复基于 ACL 过滤 appends 参数的问题 by @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/cn/blog/v2.1.0-beta.6)

*发布时间：2026-02-27*

### 🎉 新特性

- **[AI 员工]** 支持通过多个关键词检索内置文档，一次性读取多个文档 ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 优化

- **[client]** 表格支持总结行（summary）的配置 ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
- **[AI 员工]** 更新 AI 对话 user prompt 功能 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
- **[嵌入 NocoBase]** 权限插件提供过滤关系字段值的 API ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

### 🐛 修复

- **[AI 员工]** 修复 AI 对话消息中渲染了 0 的问题 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
- **[数据可视化]** 修复 i18n 图表插件入口和占位的文案 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
- **[工作流：JavaScript 节点]** 修复 windows 下测试用例无法通过的问题 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
- **[模板打印]** 修复未适配 ACL API 变更导致的报错问题 by @mytharcher
- **[工作流：审批]** 在审批操作中过滤关系字段的值，以避免越权的数据操作 by @mytharcher
- **[邮件管理]** 修复图片 contentId 格式解析 by @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/cn/blog/v2.1.0-beta.5)

*发布时间：2026-02-26*

### 🚀 优化

- **[AI 员工]** 更新 AI 对话 user prompt 功能 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

### 🐛 修复

- **[AI 员工]** 修复使用 mysql 数据库时 AI 对话报错问题 ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/cn/blog/v2.1.0-alpha.7)

*发布时间：2026-02-26*

### 🎉 新特性

- **[AI 员工]** 支持通过多个关键词检索内置文档，一次性读取多个文档 ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 优化

- **[AI 员工]** 更新 AI 对话 user prompt 功能 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

### 🐛 修复

- **[client]** 移动端中，先关闭菜单再执行页面跳转 ([#8699](https://github.com/nocobase/nocobase/pull/8699)) by @zhangzhonghe
- **[AI LLM：GigaChat]** 修复 GigaChat 插件在 2.0 中无法使用的问题 ([#8707](https://github.com/nocobase/nocobase/pull/8707)) by @cgyrock
- **[AI 员工]**

  - 修复使用 mysql 数据库时 AI 对话报错问题 ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock
  - 使用 ContentBlock 对象统一 ChatGPT API 文件输入 ([#8696](https://github.com/nocobase/nocobase/pull/8696)) by @cgyrock
  - 修复用户忽略 ai agent 工具执行确认请求直接发送新消息导致的接口错误 ([#8697](https://github.com/nocobase/nocobase/pull/8697)) by @cgyrock
- **[AI: 知识库]** 修复 AI 知识库启动报错问题 by @cgyrock
- **[邮件管理]** 图像查看错误 by @jiannx

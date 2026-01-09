### 🎉 新特性

- **[test]** 为默认任务管理器添加进程级并发控制 ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock
- **[AI 员工]** 支持 Gemini-3 模型，并包含函数调用的思维签名能力 ([#8377](https://github.com/nocobase/nocobase/pull/8377)) by @heziqiang

### 🚀 优化

- **[flow-engine]** GridModel 新增 `rowOrder` 字段以确保行顺序的一致性 ([#8371](https://github.com/nocobase/nocobase/pull/8371)) by @zhangzhonghe
- **[AI 员工]**

  - 支持系统提示词的自定义编辑与自动更新 ([#8378](https://github.com/nocobase/nocobase/pull/8378)) by @heziqiang
  - 优化 AI 在 LLM 服务与模型层面的错误处理 ([#8351](https://github.com/nocobase/nocobase/pull/8351)) by @heziqiang
- **[文件管理器]** 为 OSS 存储引擎添加请求配置项，可用于从服务端获取文件时传递额外的请求参数 ([#8372](https://github.com/nocobase/nocobase/pull/8372)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复关系字段从数据选择器组件切换到选择组件后依然可以点击打开弹窗的问题。 ([#8375](https://github.com/nocobase/nocobase/pull/8375)) by @gchust
  - 修复详情，编辑表单，列表区块翻页后联动规则不重新运行的问题。 ([#8366](https://github.com/nocobase/nocobase/pull/8366)) by @gchust
  - 修复了在字段组件来回切换过程中已配置子表单/子表格中的字段不显示的问题。 ([#8365](https://github.com/nocobase/nocobase/pull/8365)) by @gchust
- **[logger]** 修复打印系统日志时额外错误信息被丢弃的问题 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
- **[区块：模板（已废弃）]** 修复无法进入继承模板( v1 )的编辑页面的问题。 ([#8376](https://github.com/nocobase/nocobase/pull/8376)) by @gchust
- **[工作流]**

  - 为节点执行记录的 Snowflake ID 加入实例 ID 配置，以避免集群下 ID 冲突问题 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
  - 修复工作流抄送节点的详情区块联动规则不生效的问题 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  - 修复工作流删除后执行计划页面崩溃的问题 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
- **[权限控制]** 修复处理关系字段权限时获取数据源不正确的问题 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
- **[数据源：REST API]** 为请求上下文增加容错，避免方法不存在时的报错 by @mytharcher

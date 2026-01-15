汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/cn/blog/v1.9.36)

*发布时间：2026-01-10*

### 🚀 优化

- **[client]** 通过改为使用 webkit 原生 CSS 展示文本省略号，优化插件管理器列表渲染性能 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

### 🐛 修复

- **[文件管理器]** 修复上传至 S3 存储引擎的文件 URL 生成错误的问题 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
- **[文件存储：S3 (Pro)]** 修复文件重命名模式不起作用的问题 by @mytharcher
- **[工作流：审批]** 修复由于缺失 `ValueBlock.Result` 组件注入导致的值区块内容不展示的问题 by @mytharcher

### [v1.9.35](https://www.nocobase.com/cn/blog/v1.9.35)

*发布时间：2026-01-09*

### 🚀 优化

- **[工作流：审批]** 简化查询参数，并提升查询性能 by @mytharcher

### 🐛 修复

- **[工作流：Webhook 触发器]** 修复子应用中 webhook 请求返回 404 错误的问题 by @mytharcher

### [v1.9.34](https://www.nocobase.com/cn/blog/v1.9.34)

*发布时间：2026-01-08*

### 🚀 优化

- **[权限控制]** 完善修改嵌套关系字段时的权限判断逻辑 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 修复

- **[client]**

  - 修复表单区块中外部数据源关系表的关系字段未加载数据的问题 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
  - 修复 `FilterAction` 组件中关系字段展示不对的问题 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
- **[logger]** 修复打印系统日志时额外错误信息被丢弃的问题 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
- **[工作流：循环节点]** 修复条件分支中失败的节点无法将状态传递到上层分支导致的流程错误问题 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
- **[数据源：主数据库]** 视图表元数据需要携带原始字段信息 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
- **[工作流]**

  - 修复工作流抄送节点的详情区块联动规则不生效的问题 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  - 为节点执行记录的 Snowflake ID 加入实例 ID 配置，以避免集群下 ID 冲突问题 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
  - 修复工作流删除后执行计划页面崩溃的问题 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
- **[操作：导入记录]** 修复异步导入xlsx文件触发唯一约束异常时错误信息不正确的问题 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
- **[权限控制]**

  - 允许关系字段使用目标键进行关联 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
  - 修复处理关系字段权限时获取数据源不正确的问题 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
- **[数据源：REST API]** 为请求上下文增加容错，避免方法不存在时的报错 by @mytharcher
- **[操作：导出记录 Pro]** 修复主应用未启用导入/导出专业版插件时，子应用执行异步导入/导出任务报错问题 by @cgyrock
- **[工作流：审批]** 修复筛选字段在待办中心无法正常使用的问题 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/cn/blog/v2.0.0-beta.10)

*发布时间：2026-01-14*

### 🚀 优化

- **[client]** 支持事件流指定执行时机。 ([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
- **[AI 员工]**

  - 优化 AI 员工主入口按钮 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  - 隐藏入口列表中的构建类 AI 员工；<br/> 优化 LLM 接入流程；<br/> 更新 Gemini-3 模型相关文档。 ([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
- **[通知：站内信]** 修复当发送站内信至大量用户时的性能问题 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 修复

- **[client]**

  - input number component does not display value ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos
  - 修复新建表单中级联组件成功提交数据后，级联组件数据未清空 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - 修复提交按钮同时设置二次确认和跳过必填校验时跳过必填校验不生效的问题 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  - 修复关系关联文件表中对一关系字段选择文件弹窗右下角出现提交按钮问题 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  - 修复网格卡片区块设置 layout 无冒号不生效问题 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  - 修复表单中数字输入汉字时没有阻止赋值问题 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
- **[数据表字段：多对多 (数组)]** 修复关联查询时 append 的二级关联表是多对多（数组）时报错的问题 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
- **[多空间]**

  - 关联数据添加时关联空间 by @jiannx
  - 空间选择器颜色跟着主题 by @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/cn/blog/v2.0.0-beta.9)

*发布时间：2026-01-12*

### 🚀 优化

- **[client]** 通过改为使用 webkit 原生 CSS 展示文本省略号，优化插件管理器列表渲染性能 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

### 🐛 修复

- **[文件管理器]** 修复上传至 S3 存储引擎的文件 URL 生成错误的问题 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
- **[工作流]** 修复复制工作流之后节点配置中的界面配置 ID 未被更新的问题 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher
- **[文件存储：S3 (Pro)]** 修复文件重命名模式不起作用的问题 by @mytharcher
- **[模板打印]** 修复配置模板弹窗被遮挡的问题 by @zhangzhonghe
- **[工作流：审批]** 修复由于缺失 `ValueBlock.Result` 组件注入导致的值区块内容不展示的问题 by @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/cn/blog/v2.0.0-beta.8)

*发布时间：2026-01-09*

### 🚀 优化

- **[cli]** 支持通过环境变量配置 CDN 基础地址 ([#8384](https://github.com/nocobase/nocobase/pull/8384)) by @chenos
- **[AI 员工]** 支持 Anthropic 和 Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) by @heziqiang

### 🐛 修复

- **[client]** 修复 targetKey 可选字段的处理逻辑 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
- **[工作流：审批]** 修复错误的参数导致的加载数据错误问题 by @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/cn/blog/v2.0.0-beta.7)

*发布时间：2026-01-09*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/cn/blog/v2.0.0-alpha.64)

*发布时间：2026-01-08*

### 🎉 新特性

- **[AI 员工]** 支持 Gemini-3 模型，并包含函数调用的思维签名能力 ([#8377](https://github.com/nocobase/nocobase/pull/8377)) by @heziqiang

### 🚀 优化

- **[AI 员工]**

  - 优化 AI 在 LLM 服务与模型层面的错误处理 ([#8351](https://github.com/nocobase/nocobase/pull/8351)) by @heziqiang
  - 支持系统提示词的自定义编辑与自动更新 ([#8378](https://github.com/nocobase/nocobase/pull/8378)) by @heziqiang
- **[文件管理器]** 为 OSS 存储引擎添加请求配置项，可用于从服务端获取文件时传递额外的请求参数 ([#8372](https://github.com/nocobase/nocobase/pull/8372)) by @mytharcher

### 🐛 修复

- **[logger]** 修复打印系统日志时额外错误信息被丢弃的问题 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
- **[client]**

  - 修复关系字段从数据选择器组件切换到选择组件后依然可以点击打开弹窗的问题。 ([#8375](https://github.com/nocobase/nocobase/pull/8375)) by @gchust
  - 修复详情，编辑表单，列表区块翻页后联动规则不重新运行的问题。 ([#8366](https://github.com/nocobase/nocobase/pull/8366)) by @gchust
  - 修复了在字段组件来回切换过程中已配置子表单/子表格中的字段不显示的问题。 ([#8365](https://github.com/nocobase/nocobase/pull/8365)) by @gchust
- **[工作流]**

  - 修复工作流抄送节点的详情区块联动规则不生效的问题 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  - 修复工作流删除后执行计划页面崩溃的问题 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
- **[权限控制]** 修复处理关系字段权限时获取数据源不正确的问题 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile

汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/cn/blog/v2.0.26)

*发布时间：2026-03-25*

### 🚀 优化

- **[client]** 优化表单按钮的水平布局 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx

### 🐛 修复

- **[flow-engine]** 表单字段删除时同步状态到字段配置 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
- **[自定义变量]** 公开表单提交数据后报 No permissions ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos

### [v2.0.25](https://www.nocobase.com/cn/blog/v2.0.25)

*发布时间：2026-03-24*

### 🚀 优化

- **[工作流：审批]** 修复加载审批处理记录列表时由于 JSON 字段造成的性能问题 by @mytharcher

### 🐛 修复

- **[server]** 将 Pub-Sub 关闭的时机改为 `beforeStop`，以避免数据库关闭后仍进行了消息发送和处理 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
- **[本地化]** 无权限时不应调用 localizationTexts:missing 接口 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
- **[数据源：外部 Oracle]** 修复 Oracle 数据源加载报错的问题 by @2013xile

### [v2.0.24](https://www.nocobase.com/cn/blog/v2.0.24)

*发布时间：2026-03-22*

### 🐛 修复

- **[resourcer]** 修复外部数据源不能正确加载的问题 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
- **[操作：导入记录 Pro]** 修复“触发工作流”选项不选时仍然触发工作流的问题 by @mytharcher

### [v2.0.23](https://www.nocobase.com/cn/blog/v2.0.23)

*发布时间：2026-03-21*

### 🐛 修复

- **[database]** 当追加关系数据参数有误时，使用警告类型的日志并跳过该字段，避免报错导致无法执行 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
- **[工作流：审批]** 修复 v2 审批表单回退按钮的翻译、节点选择和回退目标问题 by @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/cn/blog/v2.0.22)

*发布时间：2026-03-20*

### 🐛 修复

- **[迁移管理]** 修复上传迁移时，目标环境不存在新建表而抛错导致中断迁移的问题 by @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/cn/blog/v2.0.21)

*发布时间：2026-03-20*

### 🚀 优化

- **[工作流]** 为执行记录列表增加筛选功能 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
- **[工作流：审批]** 当触发器中未配置数据表时，禁止配置审批人的界面 by @mytharcher

### 🐛 修复

- **[resourcer]** 避免 `filterByTk` 参数数组超过 100 个时被自动转换成对象 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
- **[client]** 修复非管理员无法清除关联字段值 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
- **[操作：导入记录 Pro]**

  - 修复同步模式下导入报错的问题 by @mytharcher
  - 修复由于重复读取文件流导致超过约 30 列的文件导入报错的问题 by @mytharcher
- **[工作流：审批]** 修复加签时的并发问题 by @mytharcher

### [v2.0.20](https://www.nocobase.com/cn/blog/v2.0.20)

*发布时间：2026-03-19*

### 🐛 修复

- **[server]** 修复工作进程发送应用生命周期事件导致服务实例停止的问题 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
- **[数据源管理]** 修复 AI 员工创建的数据表总是缺少”创建人“、”修改人“字段的问题 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
- **[操作：导入记录 Pro]** 修复懒加载导致的 SES 错误 by @mytharcher
- **[模板打印]** 修复 SQL 数据表打印报错 by @jiannx
- **[邮件管理]** 修复邮件不存在时页面报错 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/cn/blog/v2.1.0-beta.11)

*发布时间：2026-03-20*

### 🚀 优化

- **[工作流]** 为执行记录列表增加筛选功能 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
- **[工作流：审批]** 当触发器中未配置数据表时，禁止配置审批人的界面 by @mytharcher

### 🐛 修复

- **[server]** 修复工作进程发送应用生命周期事件导致服务实例停止的问题 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
- **[client]** 修复非管理员无法清除关联字段值 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
- **[resourcer]** 避免 `filterByTk` 参数数组超过 100 个时被自动转换成对象 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
- **[操作：导入记录 Pro]**

  - 修复同步模式下导入报错的问题 by @mytharcher
  - 修复由于重复读取文件流导致超过约 30 列的文件导入报错的问题 by @mytharcher
- **[工作流：审批]** 修复加签时的并发问题 by @mytharcher
- **[迁移管理]** 修复上传迁移时，目标环境不存在新建表而抛错导致中断迁移的问题 by @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/cn/blog/v2.1.0-beta.10)

*发布时间：2026-03-19*

### 🎉 新特性

- **[AI 员工]**

  - 支持在子表格弹窗中添加 AI 员工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
  - 定时清除 AI 会话 Checkpoint 数据 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
- **[应用监管器]** 应用列表支持筛选<br />启动和停止增加二次确认<br />应用状态按环境名排序 by @2013xile

### 🚀 优化

- **[server]** 改进 pm add 逻辑 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
- **[undefined]** README.zh-CN.md ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765
- **[client]** 支持关闭弹窗二次确认提示。 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
- **[工作流]** 修复优雅停机时内存中的事件未能完全处理的问题 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
- **[异步任务管理器]** 异步任务增加支持worker发送异常消息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 修复

- **[client]**

  - 修复子表格中的“选择数据”弹窗第二次打开时无法正确加载的问题。 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
  - 修复部分字段的默认值刷新页面后不生效的问题。 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
- **[database]** 修复服务端日期字段校验问题 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
- **[数据源管理]** 修复 AI 员工创建的数据表总是缺少”创建人“、”修改人“字段的问题 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
- **[AI 员工]**

  - 修复 LLM 服务指定的 URL 在调用文本嵌入模型时不生效的问题 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  - 修复 AI 插件升级迁移脚本中可能出现的变量未定义错误 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
- **[本地化]** localizationTexts:missing 接口权限异常 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
- **[操作：导入记录 Pro]**

  - 修复子应用中处理导入后 `beforeStop` 事件未触发的问题 by @mytharcher
  - 修复懒加载导致的 SES 错误 by @mytharcher
  - 修复异步导入出错后异步任务不结束的问题 by @cgyrock
- **[AI: 知识库]** 防止使用中的向量库，向量存储被删除 by @cgyrock
- **[模板打印]** 修复 SQL 数据表打印报错 by @jiannx
- **[邮件管理]** 修复邮件不存在时页面报错 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/cn/blog/v2.1.0-alpha.11)

*发布时间：2026-03-25*

### 🎉 新特性

- **[client]** 新增 JS item 操作 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
- **[AI 员工]** AI 员工增加 SKILLS 能力 ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock
- **[数据源管理]** 支持按需加载 MCP 工具 ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile

### 🚀 优化

- **[flow-engine]** 增强页面搭建相关的 api 的 schema 验证。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[client]** 优化表单按钮的水平布局 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx
- **[app]** 为 client-v1 增加基于 Rsbuild 的开发工作流，并保持本地插件开发与当前 `/v2/` 环境兼容 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn
- **[数据表字段：中国行政区划]** 中国行政区划字段 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
- **[工作流]** 为所以触发器和节点增加验证规则 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher
- **[工作流：审批]** 修复加载审批处理记录列表时由于 JSON 字段造成的性能问题 by @mytharcher

### 🐛 修复

- **[flow-engine]** 表单字段删除时同步状态到字段配置 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
- **[resourcer]** 修复外部数据源不能正确加载的问题 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
- **[database]** 当追加关系数据参数有误时，使用警告类型的日志并跳过该字段，避免报错导致无法执行 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
- **[server]** 将 Pub-Sub 关闭的时机改为 `beforeStop`，以避免数据库关闭后仍进行了消息发送和处理 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
- **[自定义变量]** 公开表单提交数据后报 No permissions ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos
- **[AI 员工]** 修复 core 包中 AI 模块无法通过的测试用例 ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock
- **[本地化]** 无权限时不应调用 localizationTexts:missing 接口 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
- **[操作：导入记录 Pro]** 修复“触发工作流”选项不选时仍然触发工作流的问题 by @mytharcher
- **[数据源：外部 Oracle]** 修复 Oracle 数据源加载报错的问题 by @2013xile
- **[工作流：审批]** 修复 v2 审批表单回退按钮的翻译、节点选择和回退目标问题 by @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/cn/blog/v2.1.0-alpha.10)

*发布时间：2026-03-20*

### 🎉 新特性

- **[IdP: OAuth]** 新增 IdP: OAuth 插件，支持 MCP 服务通过 OAuth 认证 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile
- **[AI 员工]** 定时清除 AI 会话 Checkpoint 数据 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
- **[应用监管器]** 应用列表支持筛选<br />启动和停止增加二次确认<br />应用状态按环境名排序 by @2013xile

### 🚀 优化

- **[server]** 改进 pm add 逻辑 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
- **[client]** 支持关闭弹窗二次确认提示。 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
- **[undefined]** 在保持 v1 不变的前提下，新增 client-v2 独立入口，并使用 rsbuild 独立打包。 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn
- **[工作流]**

  - 修复优雅停机时内存中的事件未能完全处理的问题 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
  - 为执行记录列表增加筛选功能 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
- **[异步任务管理器]** 异步任务增加支持worker发送异常消息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock
- **[工作流：审批]** 当触发器中未配置数据表时，禁止配置审批人的界面 by @mytharcher

### 🐛 修复

- **[client]**

  - 修复非管理员无法清除关联字段值 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
  - 修复子表格中的“选择数据”弹窗第二次打开时无法正确加载的问题。 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
- **[resourcer]** 避免 `filterByTk` 参数数组超过 100 个时被自动转换成对象 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
- **[server]** 修复工作进程发送应用生命周期事件导致服务实例停止的问题 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
- **[数据源管理]** 修复 AI 员工创建的数据表总是缺少”创建人“、”修改人“字段的问题 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
- **[AI 员工]**

  - 修复 LLM 服务指定的 URL 在调用文本嵌入模型时不生效的问题 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  - 修复 AI 插件升级迁移脚本中可能出现的变量未定义错误 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
- **[操作：导入记录 Pro]**

  - 修复由于重复读取文件流导致超过约 30 列的文件导入报错的问题 by @mytharcher
  - 修复同步模式下导入报错的问题 by @mytharcher
  - 修复子应用中处理导入后 `beforeStop` 事件未触发的问题 by @mytharcher
  - 修复异步导入出错后异步任务不结束的问题 by @cgyrock
  - 修复懒加载导致的 SES 错误 by @mytharcher
- **[模板打印]** 修复 SQL 数据表打印报错 by @jiannx
- **[工作流：审批]** 修复加签时的并发问题 by @mytharcher
- **[邮件管理]** 修复邮件不存在时页面报错 by @jiannx
- **[迁移管理]** 修复上传迁移时，目标环境不存在新建表而抛错导致中断迁移的问题 by @Andrew1989Y

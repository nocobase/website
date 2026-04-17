汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/cn/blog/v2.0.19)

*发布时间：2026-03-18*

### 🚀 优化

- **[工作流]** 修复优雅停机时内存中的事件未能完全处理的问题 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher

### 🐛 修复

- **[AI 员工]** 修复 LLM 服务指定的URL在调用文本嵌入模型时不生效的问题 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
- **[操作：导入记录 Pro]** 修复子应用中处理导入后 `beforeStop` 事件未触发的问题 by @mytharcher

### [v2.0.18](https://www.nocobase.com/cn/blog/v2.0.18)

*发布时间：2026-03-17*

### 🎉 新特性

- **[AI 员工]**

  - 定时清除 AI 会话 Checkpoint 数据 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
  - 支持在子表格弹窗中添加 AI 员工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
- **[应用监管器]** 应用列表支持筛选<br />启动和停止增加二次确认<br />应用状态按环境名排序 by @2013xile

### 🚀 优化

- **[server]** 改进 pm add 逻辑 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
- **[client]** 支持关闭弹窗二次确认提示。 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
- **[异步任务管理器]** 异步任务增加支持 worker 发送异常消息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 修复

- **[client]** 修复子表格中的“选择数据”弹窗第二次打开时无法正确加载的问题。 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
- **[AI 员工]** 修复 AI 插件升级迁移脚本中可能出现的变量未定义错误 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
- **[操作：导入记录 Pro]** 修复异步导入出错后异步任务不结束的问题 by @cgyrock

### [v2.0.17](https://www.nocobase.com/cn/blog/v2.0.17)

*发布时间：2026-03-14*

### 🚀 优化

- **[undefined]** README.zh-CN.md ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 修复

- **[client]** 修复部分字段的默认值刷新页面后不生效的问题。 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
- **[database]** 修复服务端日期字段校验问题 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
- **[本地化]** localizationTexts:missing 接口权限异常 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
- **[AI: 知识库]** 防止使用中的向量库，向量存储被删除 by @cgyrock

### [v2.0.16](https://www.nocobase.com/cn/blog/v2.0.16)

*发布时间：2026-03-12*

### 🐛 修复

- **[client]**

  - 修复外部数据源下连接数据区块时不显示可连接字段的问题 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
  - 修复表格区块高度无效 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
  - 修复添加数据区块及刷新页面时会触发两次刷新的问题。 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
- **[UI 模板]** 修复编辑表单区块和详情区块模板报错的问题。 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
- **[表单草稿]** 修复多次打开弹窗时表单草稿数据丢失的问题。 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
- **[本地化]** 页面非编辑状态不提交未找到的词条 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
- **[操作：导入记录 Pro]** 修复导入配置中重复依据字段无法多选 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/cn/blog/v2.1.0-beta.9)

*发布时间：2026-03-12*

### 🐛 修复

- **[client]**

  - 修复表格区块高度无效 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
  - 修复添加数据区块及刷新页面时会触发两次刷新的问题。 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  - 修复外部数据源下连接数据区块时不显示可连接字段的问题 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
- **[UI 模板]** 修复编辑表单区块和详情区块模板报错的问题。 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
- **[表单草稿]** 修复多次打开弹窗时表单草稿数据丢失的问题。 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
- **[本地化]** 页面非编辑状态不提交未找到的词条 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
- **[操作：导入记录 Pro]** 修复导入配置中重复依据字段无法多选 by @jiannx
- **[邮件管理]** 回复和回复全部的收件人调整，修复表格字段添加异常等问题 by @jiannx
- **[迁移管理]** 修复系统表再自定义规则无法选中问题 by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/cn/blog/v2.1.0-alpha.9)

*发布时间：2026-03-14*

### 🎉 新特性

- **[AI 员工]** 支持在子表格弹窗中添加 AI 员工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
- **[AI: MCP 服务器]** 新增 MCP 服务器插件，支持通过 MCP 搭建 NocoBase 系统并支持业务流程。 ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile

### 🚀 优化

- **[undefined]** README.zh-CN.md ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 修复

- **[database]** 修复服务端日期字段校验问题 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
- **[client]**

  - 修复外部数据源下连接数据区块时不显示可连接字段的问题 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
  - 修复添加数据区块及刷新页面时会触发两次刷新的问题。 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  - 修复部分字段的默认值刷新页面后不生效的问题。 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
  - 修复表格区块高度无效 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
- **[本地化]**

  - localizationTexts:missing 接口权限异常 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
  - 页面非编辑状态不提交未找到的词条 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
- **[表单草稿]** 修复多次打开弹窗时表单草稿数据丢失的问题。 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
- **[UI 模板]** 修复编辑表单区块和详情区块模板报错的问题。 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
- **[AI: 知识库]** 防止使用中的向量库，向量存储被删除 by @cgyrock
- **[操作：导入记录 Pro]** 修复导入配置中重复依据字段无法多选 by @jiannx
- **[邮件管理]** 回复和回复全部的收件人调整，修复表格字段添加异常等问题 by @jiannx
- **[迁移管理]** 修复系统表再自定义规则无法选中问题 by @cgyrock

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

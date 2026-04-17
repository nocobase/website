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

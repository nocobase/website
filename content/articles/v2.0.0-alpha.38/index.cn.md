### 🎉 新特性

- **[client]** 支持表格列操作的拖动 ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe
- **[数据可视化]** 新增图表 SQL 数据源 ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

### 🚀 优化

- **[client]** 在 RunJS 脚本上下文中新增对 Day.js 库的支持，便于进行日期和时间的操作。 ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

### 🐛 修复

- **[utils]**

  - 修复筛选按钮报错“Invalid filter item type” ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe
  - 为 intersect 策略增加对象类型支持 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
  - 修复事件流报“Unrecognized operation”的错误 ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe
- **[client]**

  - 修复了表格中行记录数据更新后，行操作按钮的联动规则未重新执行的问题，现在在数据变更时联动规则能够正确重新应用。 ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust
  - 修复代码编辑器中预览代码时如果使用了 jsx 语法会报错的问题 ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust
- **[undefined]** 修复暗黑模式下的插件文档首页样式不正确的问题。 ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust
- **[文件管理器]** 修复表格区块配置字段相关缺陷 ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh
- **[AI 员工]** 在 v1 页面隐藏 AI 员工对话按钮 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock
- **[数据可视化：EChrats]** 修复 ECharts 选项配置 labelType 不生效的问题 by @heziqiang
- **[邮件管理]**

  - 修复草稿问题 by @jiannx
  - 没有时间戳的情况下同步微软邮件已读状态 by @jiannx

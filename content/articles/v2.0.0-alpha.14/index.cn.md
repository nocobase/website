### 🚀 优化

- **[AI 员工]** AI写代码功能优化 ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock

- **[数据源：主数据库]** 重构字段验证规则错误提示的本地化逻辑, 在错误处理插件中处理 ([#7582](https://github.com/nocobase/nocobase/pull/7582)) by @2013xile

### 🐛 修复

- **[database]**
  - 使用 `runSQL` 方法执行 SQL 前先设置 `search_path` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile

  - 修复 `$in` 操作符的值为 `null` 时的报错问题 ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher

- **[client]** 修复标签页图标弹窗被遮挡的问题 ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe

- **[工作流：审批]** 修复提交审批表单中部分变量未被解析的问题 by @mytharcher


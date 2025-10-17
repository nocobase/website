### 🐛 修复

- **[database]** 修复 `$in` 操作符的值为 `null` 时的报错问题 ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher

- **[工作流：审批]**
  - 修复审批提交后数据库报错时事务未正常回滚导致的事务超时问题 by @mytharcher

  - 修复提交审批表单中部分变量未被解析的问题 by @mytharcher


### 🐛 修复

- **[工作流]**
  - 优化工作流待办中心移动端详情处理：使用全宽抽屉并适配审批内容布局。 ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher

  - 为工作流任务状态和 ID 添加联合索引，优化待处理任务的恢复查询。 ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher

  - 修复定时任务（静态模式）在「结束于」之后仍会多执行一次的问题 ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera

- **[通知管理]** 修复工作流用户接收人变量显示“Variable parsing failed”的问题，并统一各工作流节点的用户选择组件。 ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher

- **[工作流：审批]**
  - 优化审批任务详情及远程表单在移动端窄屏下的布局。 by @mytharcher

  - 修复审批人变量显示“Variable parsing failed”的问题，并复用工作流公共用户选择组件。 by @mytharcher


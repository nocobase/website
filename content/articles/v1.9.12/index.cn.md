### 🚀 优化

- **[client]** 为更新记录和删除记录操作按钮添加加载状态，以避免重复请求 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher

- **[异步任务管理器]** 优化异步任务的错误信息，任务失败时将明确提示具体的错误原因 ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher

- **[操作：导入记录 Pro]** 优化异步任务的错误信息，任务失败时将明确提示具体的错误原因 by @mytharcher

- **[工作流：审批]**
  - 修复审批人选择组件，仅允许用户表的主外键可选 by @mytharcher

  - 减少打开审批弹窗时加载的关联数据，以提供更好的性能表现 by @mytharcher

  - 在手动执行（或子流程调用）时，同时支持传入整行数据或仅主键，避免触发器数据中的数据一致性问题 by @mytharcher

### 🐛 修复

- **[异步任务管理器]** 为 `asyncTasks` 数据表增加迁移规则，避免异步任务记录被迁移 ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher

- **[工作流：审批]** 修复语言文件 by @mytharcher


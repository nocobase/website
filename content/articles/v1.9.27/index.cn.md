### 🚀 优化

- **[server]** 优化因应用实例不存在导致获取应用维护状态消息异常的容错机制 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile

- **[错误处理器]** SQL 语法错误时，不对外暴露数据库原始提示，避免暴露数据库类型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile

- **[工作流]** 支持在工作流的复制（版本）过程中，使用已复制的工作流中使用旧的配置信息来生成新的配置 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

### 🐛 修复

- **[工作流]** 修复手动执行时，选择数据组件的加载列表展示不全的问题 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher

- **[数据表：连接外部数据（FDW）]** 修复连接大写表名表时的触发器报错 by @2013xile

- **[工作流：审批]** 修复无关的审批待办任务被错误的修改状态为“未处理”的问题 by @mytharcher


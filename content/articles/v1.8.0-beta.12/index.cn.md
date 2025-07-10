### 🚀 优化

- **[database]** 支持从环境变量配置连接池的选项 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher

- **[工作流]**
  - 排除 JSON 字段加载以改进执行计划列表加载性能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher

  - 为节点测试运行增加日志 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher

- **[多应用管理器]** 多应用管理支持筛选操作 ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh

- **[工作流：审批]** 将时间线中的时间调整为绝对时间 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复表单中的 Markdown 字段未能实时显示 $nForm 变量内容 ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh

  - 修复详情区块中子表格设置背景颜色时样式重复的问题 ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh

  - 工作流人工节点的 UI 配置，设置联动规则不能选择当前表单变量 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe

  - 在连接视图中设置字段显示名称（displayName）未生效的问题 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie

  - 修复 编辑表单中子表格的关系字段设置的默认值覆盖已有数据的问题 ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh

  - 对基于 'x-acl-action' 的表单配置项容错 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher

- **[utils]** 修复使用 Exact day 变量过滤 DateOnly 或 Datetime (without time zone) 字段时筛选错误的问题 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh

- **[工作流]** 修复循环引用导致的报错 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher

- **[密码策略]** 支持永久锁定用户 by @2013xile

- **[工作流：子流程]** 修复集群模式下的问题 by @mytharcher

- **[工作流：审批]**
  - 从申请列表的筛选项中移除不可筛选的字段 by @mytharcher

  - 补充表单的布局配置项 by @mytharcher


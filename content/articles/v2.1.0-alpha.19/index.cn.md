### 🎉 新特性

- **[cli-v1]** 重构 storage path 变量 ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos

- **[日历]** 日历区块 v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx

### 🚀 优化

- **[cli]** 优化 `nb api` 在运行时引导失败时的帮助降级表现，并统一警告信息样式 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile

- **[部门]** 在界面中显示部门表的 `parentId` 外键字段 ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile

### 🐛 修复

- **[client]** 修复页面配置模式下标签页高度和宽度异常的问题 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe

- **[database]** 修复递归树预加载和分组排序初始化中的 SQL 注入风险 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile

- **[工作流：JavaScript 节点]** 修复 `node:vm` 模式下执行脚本的安全问题 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

- **[IdP: OAuth]** 修复服务重启后 OAuth 客户端注册和令牌刷新失败的问题 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile

- **[部门]** 修复部门管理中的部门列表未按 `sort` 字段顺序显示的问题 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile

- **[数据表: SQL]** 修复 SQL 数据表更新时缺少 SQL 校验的问题 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile

- **[数据可视化]** 修复图表区块在聚合查询中排序未使用度量和维度别名的问题 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile


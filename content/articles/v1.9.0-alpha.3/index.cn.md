### 🎉 新特性

- **[数据源：主数据库]** 支持主数据源显示插件定义的表。 ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie

- **[工作流: 日期计算节点]** 支持节点测试执行 by @mytharcher

### 🚀 优化

- **[client]** 颜色选择器：新增四种推荐颜色 ([#7226](https://github.com/nocobase/nocobase/pull/7226)) by @zhangzhonghe

- **[工作流]** 改进比较逻辑以兼容日期值 ([#7237](https://github.com/nocobase/nocobase/pull/7237)) by @mytharcher

### 🐛 修复

- **[client]**
  - 修复 表格中操作列的样式规则未生效问题 ([#7225](https://github.com/nocobase/nocobase/pull/7225)) by @katherinehhh

  - 避免非关系字段在预加载关系字段配置中被选择 ([#7231](https://github.com/nocobase/nocobase/pull/7231)) by @mytharcher

  - 修复错误：Can't resolve 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) by @zhangzhonghe

  - 删除菜单时，没有删除 uiSchemas 表中对应的数据 ([#7232](https://github.com/nocobase/nocobase/pull/7232)) by @zhangzhonghe

- **[database]** 修复外部数据源表设置简单分页模式时的报错问题 ([#7222](https://github.com/nocobase/nocobase/pull/7222)) by @aaaaaajie

- **[数据表字段：排序]** 修复了在复制操作中缺少排序字段的问题 ([#7116](https://github.com/nocobase/nocobase/pull/7116)) by @katherinehhh

- **[工作流：子流程]** 修复接收到召回信号时，待执行的计划不在当前实例时报错问题 by @mytharcher

- **[工作流：审批]**
  - 修复提交审批时的多级关系数据 by @mytharcher

  - 为审批记录列表增加审批已删除的容错 by @mytharcher

- **[邮件管理]** 邮件消息表格性能优化 by @jiannx


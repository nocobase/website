### 🎉 新特性

- **[client]** 支持在页面、页面标签、弹窗、弹窗标签配置浏览器页签标题 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe

- **[工作流：审批]** 为审批相关 API 增加权限控制 by @mytharcher

### 🚀 优化

- **[client]** 筛选表单关系字段使用独立的字段 model ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe

- **[工作流：抄送]** 重构工作流抄送插件以支持 FlowModel 架构，兼容 v1/v2 配置 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 修复

- **[flow-engine]**
  - 修复 JS block 区块中无法创建 Blob 对象的问题。 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust

  - 修复 JS Models 里面的 "ctx.sql" 执行时上下文不正确的问题。 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust

- **[字段组件：掩码]** 修复掩码字段配置弹窗里面无法正确加载全部用户角色的问题。 by @gchust

- **[工作流：审批]** 修复加载详情数据时使用了错误的 id 参数 by @mytharcher


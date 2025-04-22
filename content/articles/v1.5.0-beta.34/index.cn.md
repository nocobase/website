### 🎉 新特性

- **[工作流]** 新增了两种序列号生成规则：定长随机数字和随机字符串 ([#5959](https://github.com/nocobase/nocobase/pull/5959)) by @kennnnnnnnnn

### 🚀 优化

- **[工作流：JSON 计算]** 修改 JSON 解析的节点名称为 JSON 计算，并调整分组 by @mytharcher

### 🐛 修复

- **[client]**
  - 按钮的联动规则因顺序问题导致的不能正常工作 ([#6147](https://github.com/nocobase/nocobase/pull/6147)) by @zhangzhonghe

  - 删除区块或者字段后，布局异常 ([#6139](https://github.com/nocobase/nocobase/pull/6139)) by @zhangzhonghe

  - 子详情中添加关系字段不显示数据 ([#6117](https://github.com/nocobase/nocobase/pull/6117)) by @zhangzhonghe

  - 修复筛选按钮中非筛选字段设置影响同一数据表的其他表格区块的筛选按钮 ([#6121](https://github.com/nocobase/nocobase/pull/6121)) by @katherinehhh

  - 修复切换页面后，不刷新关系字段默认值的问题 ([#6114](https://github.com/nocobase/nocobase/pull/6114)) by @zhangzhonghe

  - 修复切换页面后“数据加载方式”失效的问题 ([#6115](https://github.com/nocobase/nocobase/pull/6115)) by @zhangzhonghe

- **[工作流]** 为“移动”操作可触发工作流增加测试用例 ([#6145](https://github.com/nocobase/nocobase/pull/6145)) by @mytharcher


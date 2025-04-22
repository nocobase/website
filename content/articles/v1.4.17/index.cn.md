### 🎉 新特性

- **[client]** 支持多对多（数组）字段使用“表格中选中的记录”变量 ([#5974](https://github.com/nocobase/nocobase/pull/5974)) by @2013xile

### 🚀 优化

- **[数据源：主数据库]** 新增名称冲突校验，防止用户创建与系统 Collection 同名的 Collection ([#5962](https://github.com/nocobase/nocobase/pull/5962)) by @chareice

- **[工作流]** 避免日期范围变量在除了筛选组件中被误用 ([#5954](https://github.com/nocobase/nocobase/pull/5954)) by @mytharcher

### 🐛 修复

- **[database]**
  - 修复 filterByTk 带 filter 参数无法删除数据的问题 ([#5976](https://github.com/nocobase/nocobase/pull/5976)) by @chareice

  - repository 的 firstOrCreate 和 updateOrCreate 方法缺失 context ([#5973](https://github.com/nocobase/nocobase/pull/5973)) by @chenos

- **[client]**
  - 修复表单中添加对一关系字段时控制台报错 ([#5975](https://github.com/nocobase/nocobase/pull/5975)) by @katherinehhh

  - 修复 子表格中通过多对一字段赋值时，删除行记录后再次选择数据未成功赋值的问题 ([#5958](https://github.com/nocobase/nocobase/pull/5958)) by @katherinehhh

  - 修复因数据包含 children 命名的字段，而导致表格区块报错的问题 ([#5951](https://github.com/nocobase/nocobase/pull/5951)) by @zhangzhonghe

- **[数据源：主数据库]** 修复旧版 unixTimestamp 字段的支持问题 ([#5967](https://github.com/nocobase/nocobase/pull/5967)) by @chareice

- **[工作流]** 修复关系字段子详情区块在人工节点界面配置中报错 ([#5953](https://github.com/nocobase/nocobase/pull/5953)) by @mytharcher


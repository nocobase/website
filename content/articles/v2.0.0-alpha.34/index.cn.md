### 🚀 优化

- **[database]** 对 MariaDB 连接实例增加 `multipleStatements` 选项，以支持一次查询中调用多条语句 ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher

### 🐛 修复

- **[flow-engine]** 修复了表格区块翻页后行操作按钮未正确更新的问题，确保按钮功能与当前页面数据匹配。 ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust

- **[client]**
  - 修复 “Maximum call stack size exceeded” ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe

  - 关系字段标题字段设置超出省略不生效 ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh

  - 更新记录操作按钮的联动规则失效 ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust

- **[database]** 字段名为 snake_case 风格时，索引字段判断不正确的问题 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile

- **[移动端（已废弃）]** 修复移动端的日期字段默认值弹窗无法选中日期的问题 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe


### 🎉 新特性

- **[server]** 重构应用监管器以适配不同场景下的多应用管理需求 ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile

### 🚀 优化

- **[client]**
  - 优化时间日期相关字段赋值界面，使其可选相对时间日期。 ([#8630](https://github.com/nocobase/nocobase/pull/8630)) by @gchust

  - 支持在字段赋值界面中为关系字段指定标题字段。 ([#8624](https://github.com/nocobase/nocobase/pull/8624)) by @gchust

### 🐛 修复

- **[flow-engine]**
  - 修复筛选字段子菜单存在搜索字符时无法被展开的问题。 ([#8604](https://github.com/nocobase/nocobase/pull/8604)) by @gchust

  - 修复子表格（弹窗编辑）中配置 createModelOptions 后列操作删除失效的问题 ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh

- **[client]**
  - 修复关系字段赋值时将对多的关系字段赋值为单一记录时不正确的问题。 ([#8652](https://github.com/nocobase/nocobase/pull/8652)) by @gchust

  - 使用日期选择器解析日期，并添加密码强度验证等 ([#8647](https://github.com/nocobase/nocobase/pull/8647)) by @jiannx

  - 修复表格操作列联动隐藏按钮后出现间隙的问题 ([#8646](https://github.com/nocobase/nocobase/pull/8646)) by @zhangzhonghe

  - 修复 `Action.Modal`（操作弹窗）在某些交互后无法关闭的问题 ([#8642](https://github.com/nocobase/nocobase/pull/8642)) by @mytharcher

  - 修复 markdown item 渲染非法 Liquid 时未正确处理异常的问题 ([#8637](https://github.com/nocobase/nocobase/pull/8637)) by @katherinehhh

  - 修复表单中对多字段属性永远会发起后端解析请求的问题。 ([#8636](https://github.com/nocobase/nocobase/pull/8636)) by @gchust

  - 修复公式字段数值类型未显示数值格式化、日期类型未显示日期格式化配置项的问题 ([#8625](https://github.com/nocobase/nocobase/pull/8625)) by @katherinehhh

  - 修复表单第一项上边框显示不完整的问题 ([#8623](https://github.com/nocobase/nocobase/pull/8623)) by @katherinehhh

  - 非树结构表隐藏表格区块 属性里的「启用树表格」和「默认展开所有行」 ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh

- **[utils]** 修复 `formula.js` 表达式引擎的安全问题 ([#8416](https://github.com/nocobase/nocobase/pull/8416)) by @mytharcher

- **[AI 员工]**
  - 修复AI员工联网搜索后对话框不展示搜索参考链接的问题 ([#8651](https://github.com/nocobase/nocobase/pull/8651)) by @cgyrock

  - 修复openai接口调用传参报错问题 ([#8633](https://github.com/nocobase/nocobase/pull/8633)) by @cgyrock

- **[模板打印]** 字段相同 key 导致渲染错误 by @jiannx

- **[工作流：审批]**
  - 修复审批中的数据被删除后导致的接口报错 by @mytharcher

  - 修复“数据保存前”模式下，审批记录弹窗中审批数据的关系字段不展示的问题 by @mytharcher


### 🎉 新特性

- **[操作：批量编辑]** 批量编辑2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 优化

- **[client]**
  - 优化时间日期相关字段赋值界面，使其可选相对时间日期。 ([#8630](https://github.com/nocobase/nocobase/pull/8630)) by @gchust

  - 支持在字段赋值界面中为关系字段指定标题字段。 ([#8624](https://github.com/nocobase/nocobase/pull/8624)) by @gchust

  - 表格2.0支持拖拽排序 ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx

  - 将字段赋值和默认值相关配置重构为表单级别配置。 ([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos

- **[本地化]** 自动创建i18n缺失的词条 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

### 🐛 修复

- **[flow-engine]** 修复筛选字段子菜单存在搜索字符时无法被展开的问题。 ([#8604](https://github.com/nocobase/nocobase/pull/8604)) by @gchust

- **[client]**
  - 修复关系字段赋值时将对多的关系字段赋值为单一记录时不正确的问题。 ([#8652](https://github.com/nocobase/nocobase/pull/8652)) by @gchust

  - 使用日期选择器解析日期，并添加密码强度验证等 ([#8647](https://github.com/nocobase/nocobase/pull/8647)) by @jiannx

  - 修复表格操作列联动隐藏按钮后出现间隙的问题 ([#8646](https://github.com/nocobase/nocobase/pull/8646)) by @zhangzhonghe

  - 修复 markdown item 渲染非法 Liquid 时未正确处理异常的问题 ([#8637](https://github.com/nocobase/nocobase/pull/8637)) by @katherinehhh

  - 修复表单中对多字段属性永远会发起后端解析请求的问题。 ([#8636](https://github.com/nocobase/nocobase/pull/8636)) by @gchust

  - 修复 `Action.Modal`（操作弹窗）在某些交互后无法关闭的问题 ([#8642](https://github.com/nocobase/nocobase/pull/8642)) by @mytharcher

  - 修复公式字段数值类型未显示数值格式化、日期类型未显示日期格式化配置项的问题 ([#8625](https://github.com/nocobase/nocobase/pull/8625)) by @katherinehhh

  - 修复表单第一项上边框显示不完整的问题 ([#8623](https://github.com/nocobase/nocobase/pull/8623)) by @katherinehhh

  - 修复编辑表单中关系附件字段清空后提交保存无效的问题 ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh

  - 修复表单关系字段组件中标题字段使用外键字段时下拉列表数据展示异常的问题 ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh

  - 修复编辑表单关系字段数据选择器已选数据修改后无法恢复的问题 ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh

  - 修复编辑表单关系字段从可编辑切换到只读模式时字段组件可选项未实时刷新的问题 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh

- **[utils]** 修复 `formula.js` 表达式引擎的安全问题 ([#8416](https://github.com/nocobase/nocobase/pull/8416)) by @mytharcher

- **[AI 员工]**
  - 修复AI员工联网搜索后对话框不展示搜索参考链接的问题 ([#8651](https://github.com/nocobase/nocobase/pull/8651)) by @cgyrock

  - 修复openai接口调用传参报错问题 ([#8633](https://github.com/nocobase/nocobase/pull/8633)) by @cgyrock

- **[文件管理器]** 修复表单中文件类型字段禁用后仍可打开选择弹窗的问题 ([#8617](https://github.com/nocobase/nocobase/pull/8617)) by @katherinehhh


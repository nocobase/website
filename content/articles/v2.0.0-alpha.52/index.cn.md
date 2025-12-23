### 🎉 新特性

- **[client]** 为对多子表单增加允许添加数据、选择已有数据及解除关联的设置项支持 ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh

- **[数据源：REST API]** 在 restful api 数据源配置中新增`接口错误信息转换`配置项 by @cgyrock

### 🚀 优化

- **[auth]** 修复 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile

- **[操作：导入记录]**
  - 导入配置字段支持选择 ID ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh

  - 支持导入字段支持选择 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh

- **[工作流：审批]** 调整获取单个审批单据的 API，并简化代码 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复关系字段选择被子字段 disabled字段限制的问题 ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh

  - 修复 `RemoteSelect` 组件当值为空时错误的加载选项记录的问题 ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher

  - 修复日期筛选字段选“过去”或者“未来”选项时 UI 组件宽度不一致问题。 ([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust

  - 修复筛选表单字段默认标签无法正确多语言翻译的问题。 ([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust

  - 修复 JS block 区块标题描述样式与其它区块样式不一致的问题。 ([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust

  - 修复子表单中嵌套子表格无数据的问题 ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh

  - 修复多行文本不换行问题 ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh

  - 修复筛选表单中关系字段可选数据不正确的问题。 ([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust

  - 修复操作符为包含任何一个和不包含任何一个时可选项字段筛选没有列出所有可选项的问题。 ([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust

  - 修复筛选表单中自定义字段配置无法正确回填及部分配置不生效的问题。 ([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust

  - 修复筛选操作中介于时间筛选值清空后再次触发筛选会报错的问题。 ([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust

  - 修复筛选操作中的 number 字段值未被正确回填的问题。 ([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust

  - 修复筛选表单中部分字段操作符无法正确筛选数据的问题。 ([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust

  - 修复 Checkbox 字段筛选不起作用的问题。 ([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust

- **[flow-engine]**
  - 修复 integer 类型作为可选项时未正确转换的问题 ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos

  - 修复 toggleable 子模型菜单未指定 useModel 时无法切换的问题，自动从 createModelOptions.use 推断 ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe

- **[server]** 修复了导入数据后已触发的工作流未添加到处理队列的问题，确保工作流在导入后能够正常运行 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher

- **[通知：电子邮件]** 修复邮件通知连接限制 ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

- **[数据表字段：公式]** 修复筛选操作和筛选表单中公式字段无法输入值的问题。 ([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust

- **[多空间]** 修复在系统表中创建其他字段 by @jiannx


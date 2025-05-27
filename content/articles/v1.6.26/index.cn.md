### 🎉 新特性

- **[区块：iframe]** Iframe 区块支持配置 allow 属性 ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe

- **[模板打印]** 新增：模板打印中 Option 字段支持 `{ label, value }` 结构的下拉选项。 by @sheldon66

### 🐛 修复

- **[client]**
  - 嵌套的子页面中，鼠标悬浮在“创建区块”按钮时不显示区块列表 ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe

  - 当改变筛选表单的关系字段组件为数据选择器时，没有“允许多选”配置项 ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe

  - 表单字段验证规则违反时错误信息多次显示 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh

  - 子表格中子表单（弹窗）无法配置联动规则的 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh

  - 修复无法在筛选表单中选择一对多字段的子字段作为筛选项的问题 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe

  - 阅读模式下子表格分页栏被遮住 ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh

  - 筛选表单中的表格选择器，样式异常 ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe

- **[database]**
  - 修复多对一关系字段在 MariaDB 下外键为大整数配置了 appends 时无法加载的问题 ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher

  - 修复测试用例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher

- **[数据表字段：附件（URL）]** 联动规则中附件（URL）字段不应支持配置 value ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh

- **[工作流：自定义操作事件]** 触发工作流按钮联动规则不正常 by @katherinehhh


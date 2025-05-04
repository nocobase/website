### 🎉 新特性

- **[client]** 支持二次确认中使用变量 ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh

- **[模板打印]**
  - 文档模板支持动态图片和条形码渲染功能。 by @sheldon66

  - 新增：模板打印中 Option 字段支持 `{ label, value }` 结构的下拉选项。 by @sheldon66

- **[区块：树]** 树结构的筛选区块支持区块联动规则 by @katherinehhh

- **[数据可视化：EChrats]** 条形图支持“y轴反向”设置 by @2013xile

### 🚀 优化

- **[client]** 优化子表格添加按钮样式，并将分页器与按钮排列在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh

- **[文件管理器]** 增加 OSS 存储引擎的超时时间配置项，且默认为 10 分钟 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher

- **[密码策略]** 默认密码过期时间修改为不过期 by @2013xile

### 🐛 修复

- **[database]**
  - 修复测试用例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher

  - 避免文本类型输入数据不是字符串时的报错 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher

- **[client]**
  - 变量选择时，若需要异步加载，则会丢失最后选中的菜单 ([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust

  - 修复无法在筛选表单中选择一对多字段的子字段作为筛选项的问题 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe

  - 子表格中子表单（弹窗）无法配置联动规则的 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh

  - 表单字段验证规则违反时错误信息多次显示 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh

  - 关系字段，在显示关系表下的字段数据时不提交数据 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh

  - missing field property settings in field linkage rules for subform (popup) in subtable ([#6800](https://github.com/nocobase/nocobase/pull/6800)) by @katherinehhh

- **[用户认证]** 不允许修改认证器标识 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile

- **[操作：自定义请求]** 自定义请求成功后返回信息设置为变量未正确显示 ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh


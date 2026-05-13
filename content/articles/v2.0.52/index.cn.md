### 🎉 新特性

- **[client]**
  - v2 增加当前用户语言变量 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh

  - v2 表单中日期字段增加日期范围限制设置项 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh

### 🚀 优化

- **[client]** 一对多关系表格区块的关联操作中，弹窗选择区块应排除已关联数据 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh

- **[部门]** 优化部门列表样式，增加图标并调整间距 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

- **[AI: 知识库]** 支持在创建知识库时指定其唯一键 by @cgyrock

### 🐛 修复

- **[client]**
  - 修复旧默认值配置无法被移除的问题。 ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust

  - 修复字段赋值里关系字段选择字段无法选择常量字段的问题。 ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust

  - 修复表格区块事件流行数据取消选择时设置目标区块数据范围不正确的问题。 ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust

  - 修复筛选表单有默认值时表格初始化重复请求的问题 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe

  - 修复 V2 联动规则支持字段设置可选项 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx

  - 修复 v2 表格中关系字段修改标题字段时报错的问题 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh

  - 修复操作按钮联动规则偶现不生效的问题。 ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust

  - 修复 v2 子表格中的对多关系字段组件列表出现子表格组件的问题 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh

- **[server]** fix(file-manager): 对本地/公开存储中有风险内容的文件强制下载 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher

- **[AI 员工]** 修复 Ollama 试运行无需 Key 却要求输入的问题 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock

- **[可视化数据表管理]** 修复 Graphical interface 自动布局报错 “to do update action, filter or filterByTk is required” ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh

- **[工作流]** 修复：补回 FlowModel 工作流绑定弹窗中操作类事件与自定义操作事件的提示文案 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher

- **[部门]** 修复 Users & Permissions 设置中添加用户和添加部门按钮翻译相互影响的问题 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh

- **[数据表字段：Markdown(Vditor)]** 修复 markdown 字段在表单水平布局时提示信息被遮挡的问题 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh

- **[WEB 客户端]** 修复使用翻译后的路由类型筛选不到数据的问题 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe

- **[工作流：审批]**
  - 修复审批处理设置中显示 JS field 的问题 by @zhangzhonghe

  - 修复移动端审批表单布局显示不正确的问题 by @zhangzhonghe

  - 修复审批转签时审批记录索引重复的问题。 by @mytharcher

- **[备份管理器]** 修复备份时因为文件无法找到而失败报错的问题。 by @gchust


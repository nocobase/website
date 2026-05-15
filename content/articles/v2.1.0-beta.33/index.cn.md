### 🎉 新特性

- **[Markdown]** Markdown 区块支持 client v2 ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx

- **[区块：列表]** 列表区块支持 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

- **[日历]** 日历插件新增 client v2 支持。 ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx

- **[区块：树]** 为树筛选区块新增 client-v2 支持。 ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx

### 🚀 优化

- **[flow-engine]** 关闭事件流配置页面时如果存在未保存的数据则显示未保存的提示信息。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

- **[数据源管理]** 优化数据建模接口，支持用 AI 创建评论表，配置外部数据源的关系字段，配置字段验证规则 ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile

- **[区块：网格卡片]** 更新网格卡片插件支持 client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx

- **[区块：iframe]** 新增 iframe 区块的 v2 支持。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

- **[AI 员工]** AI 员工并行会话交互与性能优化 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock

### 🐛 修复

- **[client]**
  - 为表单提交动作补充“提交成功后”设置项。 ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx

  - 修复表格中关联字段显示快捷编辑允许打开编辑弹窗的问题 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh

  - 修复子表格中关系字段设置为仅展示后刷新不显示或不可点击的问题。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx

  - 修复旧默认值配置无法被移除的问题。 ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust

  - 修复 v2 数据区块多选字段显示选项值而非选项标签的问题 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh

- **[client-v2]**
  - 修复表格中关系字段标题字段选项列表为空的问题 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh

  - v2 布局中过滤 v1 菜单后保留空分组 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe

- **[flow-engine]** 修复子模型菜单中关系字段子菜单状态不稳定的问题 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx

- **[文件管理器]** 修复文件管理器 `tx-cos` 上传后缺少文件大小元数据的问题。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher

- **[AI 员工]** 修复 AI 插件启动失败问题 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock

- **[区块：分步表单]** 修复 v1 分步表单区块设置全高后页面出现滚动条的问题 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh

- **[工作流：Webhook 触发器]** 修复由于验证规则导致创建响应节点失败的问题 by @mytharcher

- **[数据表字段：手写签名]** 移动端签名框显示异常 by @chenzhizdt


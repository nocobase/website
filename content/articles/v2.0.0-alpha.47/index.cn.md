### 🚀 优化

- **[client]**
  - 支持在图表查询初始时选择筛选字段 ([#7933](https://github.com/nocobase/nocobase/pull/7933)) by @heziqiang

  - 对消息内容的变量使用三重括号，以免变量被 Handlerbars 转义 ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher

  - 为更新记录和删除记录操作按钮添加加载状态，以避免重复请求 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher

- **[数据表字段：Markdown(Vditor)]** 调整 Vditor 全屏时内容宽度 ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

### 🐛 修复

- **[client]**
  - 修复非 id 关系字段弹窗详情区块打开报错。 ([#7973](https://github.com/nocobase/nocobase/pull/7973)) by @gchust

  - 修复非 id 关系字段弹窗中关系数据加载错误的问题。 ([#7970](https://github.com/nocobase/nocobase/pull/7970)) by @gchust

  - 修复使用 Iframe 时，导致路由异常的问题 ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe

  - 修复数字字段格式化精度设置无效的问题 ([#7967](https://github.com/nocobase/nocobase/pull/7967)) by @katherinehhh

  - 修复新建 2.0 页面的类型不正确的问题 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) by @zhangzhonghe

  - 修复点击筛选重置按钮时筛选值未清空的问题 ([#7966](https://github.com/nocobase/nocobase/pull/7966)) by @zhangzhonghe

- **[工作流]** 修复由于 provider 误用导致待办总数不展示的问题 ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher

- **[数据可视化]** 解决图表数据查询不支持 ACL 数据范围的问题 ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile

- **[区块：引用]** 修复引用区块会将被引用区块从原始页面中移除的问题。 ([#7969](https://github.com/nocobase/nocobase/pull/7969)) by @gchust

- **[AI 员工]** 修复AI员工生成 SQL 异常输出的问题 ([#7956](https://github.com/nocobase/nocobase/pull/7956)) by @heziqiang

- **[模板打印]** 修复表格行中模板打印操作添加模板失败问题 by @katherinehhh


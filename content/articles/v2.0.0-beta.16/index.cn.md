### 🎉 新特性

- **[client]** 新增子表格（弹窗编辑）字段组件 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh

- **[工作流]** 为移动节点增加 API ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher

### 🚀 优化

- **[client]**
  - 修复单元格更新导致表格整体重渲染 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh

  - 改进对多子表单默认包含一个对象，无需点击 Add New，未填写时不创建记录 ([#8458](https://github.com/nocobase/nocobase/pull/8458)) by @katherinehhh

- **[文件管理器]** 为文件管理器增加可扩展的预览组件 ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher

- **[工作流]** 修改工作流子页面的路由路径，将工作流页面都统一在 `/admin/settings/workflow` 路径之下 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher

### 🐛 修复

- **[client]**
  - 修复筛选区块日期带时间时时间格式重复的问题 ([#8506](https://github.com/nocobase/nocobase/pull/8506)) by @zhangzhonghe

  - 修复多层级对多字段子表单字段联动规则无法使用表单变量赋值的问题。 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust

  - 修复多级弹窗及跨区块数据变更后不刷新问题。 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust

  - 修复编辑表单中配置阅读态子详情数据不能正常显示问题 ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh

  - 修复targetKey 可选字段的处理逻辑 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh

  - 修复编辑态子表格中关系字段 Select 的 filter 参数错误问题 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh

- **[flow-engine]** 修复外部数据源 filterTargetKey 为单元素数组时 FilterByTK 处理错误 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh

- **[AI 员工]** 修复 AI 建模与数据源管理模块中可选字段配置不一致的问题 ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock

- **[邮件管理]** 选中文本时正文不折叠。修复附件下载失败 by @jiannx


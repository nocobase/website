### 🎉 新特性

- **[工作流]** 新增管理员 API，用于从头节点或指定节点重新执行已开始的工作流执行。 ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

### 🚀 优化

- **[client]** 移除菜单项设置中的隐藏选项 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

### 🐛 修复

- **[client]**
  - 修复 v2 移动端日期弹窗使用当前时间而不是表单值的问题 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh

  - 修复 v2 时间字段格式设置后不生效问题 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh

  - 提高v1扫描输入组件文件上传上限 到10MB ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh

  - 修复子表单字段通过联动规则显示后提交仍被过滤的问题 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh

  - 修复 v2 子表单中子表格无法添加第二条数据的问题 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh

  - 修复切换菜单后页面标签页消失的问题 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe

- **[flow-engine]** 修复弹窗中表单提交成功后表格操作联动规则执行错误的问题。 ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust

- **[工作流：自定义操作事件]** 修复自定义操作事件表格按钮在多行数据上下文下仍可选择自定义上下文工作流的问题。 ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher

- **[文件管理器]**
  - 修复文件上传时 Unicode 文件名被错误二次解码的问题，避免生成包含控制字符的对象 key。 ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher

  - 优化 PDF 预览失败提示，并补充外部存储 CORS 配置说明。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
参考文档：[文件预览](docs/docs/cn/file-manager/file-preview/index.md)

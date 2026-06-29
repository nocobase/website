### 🎉 新特性

- **[AI 员工]** 新增 Mistral AI 作为 AI 服务的大语言模型供应商。 ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock

### 🚀 优化

- **[cli]** 支持 OAuth 设备授权模式 ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos

### 🐛 修复

- **[client-v2]**
  - 修复关系字段下拉选择中已选标题过长时显示挤压选择框的问题，过长文本会以省略号展示。 ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh

  - 修复表格日期时间列在分页或刷新后丢失已配置时分秒显示的问题。 ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh

- **[用户]** 移除“用户和权限”新增用户表单中的默认密码。 ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx

- **[数据源：外部 NocoBase]** 修复 NocoBase 外部数据源在连接配置包含运行时对象时加载失败的问题 by @2013xile

- **[历史记录]** 修复启用记录历史后外部 NocoBase 数据源加载失败的问题 by @2013xile

- **[应用监管器]** 修复 Client V2 应用监管 Applications 标签页注册错误 by @2013xile


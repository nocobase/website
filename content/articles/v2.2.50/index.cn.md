### 🚀 优化

- **[AI 员工]** AI 员工对话遇到多层包装的 RangeError 时，服务端日志可显示底层调用栈，方便定位问题。 ([#11640](https://github.com/nocobase/nocobase/pull/11640))

### 🐛 修复

- **[数据源：REST API]**
  - 修复 REST API 数据源插件生成 TypeScript 声明文件时导致发布构建失败的问题。

  - 修复 REST API 数据表字段清空后重新提取可能无法保存、已有字段的显示名称修改可能丢失的问题。

- **[数据源：外部 SQL Server]** SQL Server 外部数据源现在只列出 dbo 架构下的表和视图。


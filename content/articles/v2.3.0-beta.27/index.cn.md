### 🚀 优化

- **[client-v2]** 缩小了移动端横向详情区块的字段间距。 ([#11644](https://github.com/nocobase/nocobase/pull/11644))

- **[AI 员工]** AI 员工对话遇到多层包装的 RangeError 时，服务端日志可显示底层调用栈，方便定位问题。 ([#11640](https://github.com/nocobase/nocobase/pull/11640))

### 🐛 修复

- **[错误处理器]** 保存记录或关联数据时，重复值和非空字段提示会在原文前显示所属数据表的标题。 ([#11638](https://github.com/nocobase/nocobase/pull/11638))

- **[通知：站内信]** 修复在移动端收件箱打开渠道时可能显示其他渠道消息的问题。 ([#11662](https://github.com/nocobase/nocobase/pull/11662))

- **[数据源：REST API]**
  - 修复 REST API 数据源插件生成 TypeScript 声明文件时导致发布构建失败的问题。

  - 修复 REST API 数据表字段清空后重新提取可能无法保存、已有字段的显示名称修改可能丢失的问题。

- **[数据源：外部 SQL Server]** SQL Server 外部数据源现在只列出 dbo 架构下的表和视图。

- **[迁移管理]** PostgreSQL 迁移包现在会排除无关序列，目标库缺少其他表使用的 schema 时也能还原所选表。


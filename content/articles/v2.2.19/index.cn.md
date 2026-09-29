### 🎉 新特性

- **[AI 员工]** 支持将 OpenCode Zen / Go 作为 LLM 服务，自动发送其要求的会话请求头；DeepSeek Flash 系列模型支持图片附件，联网搜索仅对 DeepSeek V4 Pro 开放，避免 Flash 模型静默忽略搜索而返回过时信息 ([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock

### 🚀 优化

- **[client-v2]** 表格列快捷编辑：关系字段支持设置数据范围 ([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 修复

- **[client-v2]** 修复退出登录后换账号登录会显示 404 页面的问题 ([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe

- **[操作：批量更新]** 修复批量更新操作提交数据表选项字段中已不存在的配置值的问题。 ([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx

- **[工作流]** 修复数据库同步时未创建 jobs 状态与 ID 联合索引的问题。 ([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher


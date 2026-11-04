### 🐛 修复

- **[数据源管理]** 修复外部数据源数据表列表在同一字段设置多个筛选条件时查不出数据的问题。 ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang

- **[认证：API 密钥]** 修复系统使用「仅角色并集」时 API 密钥获得创建者其他角色权限的问题，API 密钥现在始终遵循绑定角色的权限和数据范围。 ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang

- **[工作流]** 修复工作流 v2 新增数据和更新数据节点无法配置密码字段赋值的问题。 ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang

- **[通知管理]** 修复工作流通知节点无法搜索或选择第一页之后的通知渠道的问题。 ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang

- **[AI 员工]** 修复 AI 员工读取 JavaScript 区块内容时提示工具执行被中断的问题 ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang


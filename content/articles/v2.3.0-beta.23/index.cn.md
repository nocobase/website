### 🚀 优化

- **[权限控制]** 明确角色检查接口对保留角色值的回退规则及 API 密钥的角色优先级。 ([#11452](https://github.com/nocobase/nocobase/pull/11452)) by @hongboji
参考文档：[OpenAPI: roles:check](https://github.com/nocobase/nocobase/blob/fix/main-issue-10399/packages/plugins/@nocobase/plugin-acl/src/swagger/index.ts)
### 🐛 修复

- **[client]** 关联标签支持设置弹窗方式与大小，并打开点击的记录。 ([#11449](https://github.com/nocobase/nocobase/pull/11449)) by @hongboji

- **[resourcer]** 资源 API 的 filter 查询参数包含无效 JSON 时，现在会返回 HTTP 400，而不再返回空的成功响应。 ([#11465](https://github.com/nocobase/nocobase/pull/11465)) by @hongboji

- **[client-v2]** 清除手动列排序后恢复表格原配置的顺序。 ([#11443](https://github.com/nocobase/nocobase/pull/11443)) by @hongboji

- **[AI 员工]**
  - 修复 JavaScript 编辑器已返回区块内容后，Nathan 仍提示工具调用中断的问题。 ([#11454](https://github.com/nocobase/nocobase/pull/11454)) by @hongboji

  - 禁止通过网页或 API 创建 stdio MCP 服务及修改、删除部署管理的连接，同时保留启停与连接测试。MCP 部署配置改为从 `storage/ai/mcp/servers.json` 加载，不再自动导入 TS/JS 文件。 ([#11461](https://github.com/nocobase/nocobase/pull/11461)) by @cgyrock

- **[日历]** v1 和 v2 日历按所选西班牙语区域显示星期表头。 ([#11446](https://github.com/nocobase/nocobase/pull/11446)) by @hongboji

- **[文件管理器]** 修复启用文件管理器后，树路径重建等插件 CLI 命令加载失败的问题。 ([#11354](https://github.com/nocobase/nocobase/pull/11354)) by @zhouyanliang


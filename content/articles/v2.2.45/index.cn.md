### 🚀 优化

- **[应用监管器]** 应用监管器的“环境”和“代理环境”下拉选项现按名称升序排列，名称中的数字按数值排序，例如 cluster-2 排在 cluster-10 前。 by @hongboji

### 🐛 修复

- **[ai]** 修复 MCP 工具全局权限配置在应用重启后丢失，以及不同应用实例间配置不一致的问题。 ([#11476](https://github.com/nocobase/nocobase/pull/11476)) by @cgyrock

- **[UI 模板]** 修复从打开其他弹窗的操作保存模板后，将模板引用转为复制仍会同步原弹窗修改的问题。 ([#11491](https://github.com/nocobase/nocobase/pull/11491)) by @hongboji

- **[AI 员工]** 禁止通过网页或 API 创建 stdio MCP 服务及修改、删除部署管理的连接，同时保留启停与连接测试。MCP 部署配置改为从 `storage/ai/mcp/servers.json` 加载，不再自动导入 TS/JS 文件。 ([#11461](https://github.com/nocobase/nocobase/pull/11461)) by @cgyrock

- **[模板打印]** 修复升级后模板打印插件因缺少依赖而加载失败的问题。 by @hongboji


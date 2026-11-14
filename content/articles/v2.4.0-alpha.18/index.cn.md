### 🚀 优化

- **[undefined]** 文档明确 exit 和 exitAll 对串行流程及已启动并行流程的影响。 ([#11451](https://github.com/nocobase/nocobase/pull/11451))
参考文档：[RunJS documentation (all supported translations)](https://github.com/nocobase/nocobase/blob/fix/main-issue-8946/docs/docs/cn/runjs/context/exit.md)
- **[权限控制]** 明确角色检查接口对保留角色值的回退规则及 API 密钥的角色优先级。 ([#11452](https://github.com/nocobase/nocobase/pull/11452))
参考文档：[OpenAPI: roles:check](https://github.com/nocobase/nocobase/blob/fix/main-issue-10399/packages/plugins/@nocobase/plugin-acl/src/swagger/index.ts)
- **[应用监管器]** 应用监管器的“环境”和“代理环境”下拉选项现按名称升序排列，名称中的数字按数值排序，例如 cluster-2 排在 cluster-10 前。

### 🐛 修复

- **[resourcer]** 资源 API 的 filter 查询参数包含无效 JSON 时，现在会返回 HTTP 400，而不再返回空的成功响应。 ([#11465](https://github.com/nocobase/nocobase/pull/11465))

- **[ai]** 修复 MCP 工具全局权限配置在应用重启后丢失，以及不同应用实例间配置不一致的问题。 ([#11476](https://github.com/nocobase/nocobase/pull/11476))

- **[client-v2]** 清除手动列排序后恢复表格原配置的顺序。 ([#11443](https://github.com/nocobase/nocobase/pull/11443))

- **[client]** 关联标签支持设置弹窗方式与大小，并打开点击的记录。 ([#11449](https://github.com/nocobase/nocobase/pull/11449))

- **[工作流：抄送]** 将工作流抄送任务标记为已读或未读时，只更新阅读状态和时间，保留原收件人和关联的流程记录。 ([#11516](https://github.com/nocobase/nocobase/pull/11516))

- **[认证：API 密钥]** 删除 API 密钥时，只有当前用户有权删除的密钥才会失效。 ([#11513](https://github.com/nocobase/nocobase/pull/11513))

- **[用户认证]**
  - 找回密码时，已注册和未注册邮箱都会看到相同提示，系统仅向已注册邮箱发送邮件。 ([#11501](https://github.com/nocobase/nocobase/pull/11501))

  - 找回密码邮件优先打开子应用绑定的独立域名。已启用邮件找回的主应用和未绑定域名的子应用，请在升级前设置 `APP_PUBLIC_ORIGIN`。 ([#11496](https://github.com/nocobase/nocobase/pull/11496))
参考文档：[邮件找回域名及升级说明](https://github.com/nocobase/nocobase/blob/f26e6b7705/docs/docs/cn/get-started/installation/env.md#app_public_origin)
- **[自定义变量]** 创建、编辑和删除自定义变量现在需要“允许配置界面”权限。 ([#11528](https://github.com/nocobase/nocobase/pull/11528))

- **[日历]** v1 和 v2 日历按所选西班牙语区域显示星期表头。 ([#11446](https://github.com/nocobase/nocobase/pull/11446))

- **[移动端（已废弃）]** v1 移动端表单提交 UnixTimestamp 字段时，时间格式与 PC 端一致。 ([#11427](https://github.com/nocobase/nocobase/pull/11427))

- **[文件管理器]** 修复启用文件管理器后，树路径重建等插件 CLI 命令加载失败的问题。 ([#11354](https://github.com/nocobase/nocobase/pull/11354))

- **[AI 员工]**
  - 禁止通过网页或 API 创建 stdio MCP 服务及修改、删除部署管理的连接，同时保留启停与连接测试。MCP 部署配置改为从 `storage/ai/mcp/servers.json` 加载，不再自动导入 TS/JS 文件。 ([#11461](https://github.com/nocobase/nocobase/pull/11461))

  - 修复 JavaScript 编辑器已返回区块内容后，Nathan 仍提示工具调用中断的问题。 ([#11454](https://github.com/nocobase/nocobase/pull/11454))

- **[UI 模板]** 修复从打开其他弹窗的操作保存模板后，将模板引用转为复制仍会同步原弹窗修改的问题。 ([#11491](https://github.com/nocobase/nocobase/pull/11491))

- **[模板打印]** 修复升级后模板打印插件因缺少依赖而加载失败的问题。


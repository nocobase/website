### 🚀 优化

- **[应用监管器]** 应用监管器的“环境”和“代理环境”下拉选项现按名称升序排列，名称中的数字按数值排序，例如 cluster-2 排在 cluster-10 前。

### 🐛 修复

- **[ai]** 修复 MCP 工具全局权限配置在应用重启后丢失，以及不同应用实例间配置不一致的问题。 ([#11476](https://github.com/nocobase/nocobase/pull/11476))

- **[移动端（已废弃）]** v1 移动端表单提交 UnixTimestamp 字段时，时间格式与 PC 端一致。 ([#11427](https://github.com/nocobase/nocobase/pull/11427))

- **[用户认证]**
  - 找回密码时，已注册和未注册邮箱都会看到相同提示，系统仅向已注册邮箱发送邮件。 ([#11501](https://github.com/nocobase/nocobase/pull/11501))

  - 找回密码邮件优先打开子应用绑定的独立域名。已启用邮件找回的主应用和未绑定域名的子应用，请在升级前设置 `APP_PUBLIC_ORIGIN`。 ([#11496](https://github.com/nocobase/nocobase/pull/11496))
参考文档：[邮件找回域名及升级说明](https://github.com/nocobase/nocobase/blob/f26e6b7705/docs/docs/cn/get-started/installation/env.md#app_public_origin)
- **[自定义变量]** 创建、编辑和删除自定义变量现在需要“允许配置界面”权限。 ([#11528](https://github.com/nocobase/nocobase/pull/11528))

- **[UI 模板]** 修复从打开其他弹窗的操作保存模板后，将模板引用转为复制仍会同步原弹窗修改的问题。 ([#11491](https://github.com/nocobase/nocobase/pull/11491))

- **[工作流：抄送]** 将工作流抄送任务标记为已读或未读时，只更新阅读状态和时间，保留原收件人和关联的流程记录。 ([#11516](https://github.com/nocobase/nocobase/pull/11516))

- **[认证：API 密钥]** 删除 API 密钥时，只有当前用户有权删除的密钥才会失效。 ([#11513](https://github.com/nocobase/nocobase/pull/11513))

- **[模板打印]** 修复升级后模板打印插件因缺少依赖而加载失败的问题。


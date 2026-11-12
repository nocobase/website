### 🐛 修复

- **[工作流：抄送]** 将工作流抄送任务标记为已读或未读时，只更新阅读状态和时间，保留原收件人和关联的流程记录。 ([#11516](https://github.com/nocobase/nocobase/pull/11516))

- **[自定义变量]** 创建、编辑和删除自定义变量现在需要“允许配置界面”权限。 ([#11528](https://github.com/nocobase/nocobase/pull/11528))

- **[用户认证]**
  - 找回密码邮件优先打开子应用绑定的独立域名。已启用邮件找回的主应用和未绑定域名的子应用，请在升级前设置 `APP_PUBLIC_ORIGIN`。 ([#11496](https://github.com/nocobase/nocobase/pull/11496))
参考文档：[邮件找回域名及升级说明](https://github.com/nocobase/nocobase/blob/f26e6b7705/docs/docs/cn/get-started/installation/env.md#app_public_origin)
  - 找回密码时，已注册和未注册邮箱都会看到相同提示，系统仅向已注册邮箱发送邮件。 ([#11501](https://github.com/nocobase/nocobase/pull/11501))

- **[移动端（已废弃）]** v1 移动端表单提交 UnixTimestamp 字段时，时间格式与 PC 端一致。 ([#11427](https://github.com/nocobase/nocobase/pull/11427))

- **[认证：API 密钥]** 删除 API 密钥时，只有当前用户有权删除的密钥才会失效。 ([#11513](https://github.com/nocobase/nocobase/pull/11513))


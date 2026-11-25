### 🐛 修复

- **[server]** 修复子应用迁移期间其他副本回发停止通知、导致迁移数据库连接关闭的问题。 ([#11699](https://github.com/nocobase/nocobase/pull/11699))

- **[UI 布局]** 修复移动端页面开启 UI 配置后区块不显示的问题。 ([#11709](https://github.com/nocobase/nocobase/pull/11709))

- **[用户认证]** 登录审计记录现在会省略会话 token，并保留用户信息。 ([#11705](https://github.com/nocobase/nocobase/pull/11705))

- **[变量和密钥]** 创建或更新变量和密钥时，审计日志会省略变量值，批量写入同样适用。 ([#11708](https://github.com/nocobase/nocobase/pull/11708))


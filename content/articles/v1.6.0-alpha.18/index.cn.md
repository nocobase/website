### 🎉 新特性

- **[WEB 客户端]** 支持为页面标签页配置权限，和新增路由管理页面 ([#5955](https://github.com/nocobase/nocobase/pull/5955)) by @zhangzhonghe
参考文档：[路由管理器](https://docs-cn.nocobase.com/handbook/routes)
- **[IP 限制]** 支持 IP 限制。 by @sheldon66
参考文档：[IP 限制](https://docs-cn.nocobase.com/handbook/IP-restriction)
### 🚀 优化

- **[server]**
  - 将 AesEncryptor 移至内核 ([#6132](https://github.com/nocobase/nocobase/pull/6132)) by @chenos

  - 1. 添加服务器中间件以提取客户端的 IP 地址。<br />2. 解决当 IP 被阻止时的无限重载问题。<br />3. 在代理中添加 `X-Forwarded-For` HTTP 头，以启用本地调试的转发功能。 ([#6069](https://github.com/nocobase/nocobase/pull/6069)) by @sheldon66

### 🐛 修复

- **[用户认证]** 更新 Token 签发表和 token 策略表的迁移规则。 ([#6107](https://github.com/nocobase/nocobase/pull/6107)) by @sheldon66


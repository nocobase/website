---
title: "NocoBase v1.6.0-alpha.18：支援 IP 限制"
description: "v1.6.0-alpha.18 版本發行說明"
---

### 🎉 新功能

- **[WEB 客戶端]** 支援頁面頁籤的權限配置，並新增路由管理頁面 ([#5955](https://github.com/nocobase/nocobase/pull/5955)) by @zhangzhonghe
參考：[路由](https://docs.nocobase.com/handbook/routes)
- **[IP 限制]** 支援 IP 限制功能。 by @sheldon66
參考：[IP 限制](https://docs.nocobase.com/handbook/IP-restriction)
### 🚀 改進

- **[伺服器]**
  - 將 AesEncryptor 移至核心 ([#6132](https://github.com/nocobase/nocobase/pull/6132)) by @chenos

  - 1. 新增伺服器中間件以提取客戶端 IP 位址。<br />2. 解決 IP 被封鎖時的無限重新載入問題。<br />3. 在代理中新增 `X-Forwarded-For` HTTP 標頭，以啟用本機除錯的轉發功能。 ([#6069](https://github.com/nocobase/nocobase/pull/6069)) by @sheldon66

### 🐛 錯誤修復

- **[認證]** 更新已發行令牌與令牌策略配置的遷移規則。 ([#6107](https://github.com/nocobase/nocobase/pull/6107)) by @sheldon66

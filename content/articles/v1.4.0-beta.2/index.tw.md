---
title: "NocoBase v1.4.0-beta.2：錯誤修復"
description: "v1.4.0-beta.2 版本發布說明"
---

### 🐛 錯誤修復

- **[建置]** 將客戶端建置工具從 `rspack` 回退至 `vite`，以修復執行 create-nocobase-app 指令後 `yarn dev` 回報錯誤的問題 ([#5697](https://github.com/nocobase/nocobase/pull/5697))，作者：@gchust

- **[客戶端]** 修復當欄位較少時，右側固定欄位未正確靠右對齊的問題 ([#5690](https://github.com/nocobase/nocobase/pull/5690))，作者：@katherinehhh

- **[行動版]** 修復在行動版設定頁面中，「指派欄位值」彈窗被遮蔽的問題 ([#5701](https://github.com/nocobase/nocobase/pull/5701))，作者：@zhangzhonghe

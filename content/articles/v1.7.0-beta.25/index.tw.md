---
title: "NocoBase v1.7.0-beta.25：新增 `getFileStream` API 以支援檔案串流"
description: "v1.7.0-beta.25 版本發布說明"
---

### 🎉 新功能

- **[檔案管理]** 功能：新增 `getFileStream` API 以支援檔案串流。([#6741](https://github.com/nocobase/nocobase/pull/6741)) by @sheldon66

### 🚀 改進

- **[客戶端]** 在動作圖示懸停時，以工具提示顯示按鈕標題 ([#6761](https://github.com/nocobase/nocobase/pull/6761)) by @katherinehhh

- **[WeCom]** 更新使用者電子郵件時，優先使用企業郵箱而非個人郵箱 by @2013xile

### 🐛 錯誤修復

- **[檔案儲存：S3(Pro)]** 存取網址過期無效 by @jiannx

- **[範本列印]** 修復：修正權限驗證邏輯，防止未授權操作。by @sheldon66

- **[區塊：樹狀]** 透過外鍵連接後，點擊觸發篩選會導致篩選條件為空 by @zhangzhonghe

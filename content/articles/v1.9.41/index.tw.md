---
title: "NocoBase v1.9.41：修復工作流程連結的路徑"
description: "v1.9.41 版本發行說明"
---

### 🚀 改進

- **[客戶端]** 支援停用 `ResourceActionProvider` 中多餘的預設附加參數 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) - 感謝 @2013xile

### 🐛 錯誤修復

- **[工作流程]** 為集合記錄選取元件加入容錯機制，避免在集合被刪除時拋出錯誤 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) - 感謝 @mytharcher

- **[檔案管理]** 強化本機儲存空間的檔案路徑安全性，避免存取路徑超出文件根目錄 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) - 感謝 @mytharcher

- **[工作流程：子流程]** 修正工作流程連結的路徑 - 感謝 @mytharcher

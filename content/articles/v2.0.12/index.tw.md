---
title: "NocoBase v2.0.12：為跨叢集節點的排程備份添加鎖定"
description: "v2.0.12 版本發布說明"
---

### 🚀 改進項目

- **[Redis 鎖定適配器]** 因主儲存庫中 LockManager 的 API 變更而進行重構，作者：@mytharcher

- **[備份管理器]** 為跨叢集節點的排程備份新增鎖定機制，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - V2 區塊現在僅顯示目前資料來源支援的操作 ([#8803](https://github.com/nocobase/nocobase/pull/8803))，作者：@zhangzhonghe

  - 修復 v2 子頁面返回按鈕的樣式問題 ([#8810](https://github.com/nocobase/nocobase/pull/8810))，作者：@zhangzhonghe

- **[鎖定管理器]** 修復鎖定管理器的競爭條件問題 ([#8734](https://github.com/nocobase/nocobase/pull/8734))，作者：@mytharcher

- **[伺服器端]** 修復非資料庫資料來源在資料查詢時的錯誤問題 ([#8776](https://github.com/nocobase/nocobase/pull/8776))，作者：@cgyrock

- **[存取控制]** 修復 Restful API 資料來源的資料修改錯誤 ([#8788](https://github.com/nocobase/nocobase/pull/8788))，作者：@cgyrock

- **[操作：匯出記錄]** 修復匯出的 Excel 中 belongsToArray 欄位為空白的問題 ([#8787](https://github.com/nocobase/nocobase/pull/8787))，作者：@cgyrock

---
title: "NocoBase v1.9.27：在獲取應用維護訊息時，若缺少應用實例導致錯誤，增加容錯機制"
description: "v1.9.27 版本發行說明"
---

### 🚀 改進

- **[伺服器]** 當缺少應用程式實例導致擷取應用程式維護訊息時發生錯誤，新增容錯機制 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile

- **[錯誤處理器]** SQL 語法錯誤時不暴露原始資料庫錯誤訊息，以避免洩漏資料庫類型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile

- **[工作流程]** 支援在複製工作流程時使用舊版設定建立新工作流程 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

### 🐛 錯誤修復

- **[工作流程]** 修正手動執行時，記錄清單僅顯示一筆記錄的問題 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher

- **[資料表：連接外部資料 (FDW)]** 修正連接大寫名稱資料表時觸發錯誤的問題 by @2013xile

- **[工作流程：審批]** 修正審批動作將不相關審批記錄的狀態錯誤變更為 `UNPROCESSED` 的問題 by @mytharcher

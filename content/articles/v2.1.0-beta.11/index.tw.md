---
title: "NocoBase v2.1.0-beta.11：新增篩選執行清單"
description: "v2.1.0-beta.11 版本發布說明"
---

### 🚀 改進

- **[工作流程]** 新增篩選執行清單 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) - 貢獻者 @mytharcher

- **[工作流程：審批]** 當觸發器中未設定集合時，避免設定審批者 UI - 貢獻者 @mytharcher

### 🐛 錯誤修復

- **[伺服器]** 修復工作者發送的生命週期事件導致執行中應用程式停止的問題 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) - 貢獻者 @mytharcher

- **[客戶端]** 修復非管理員無法清除關聯欄位值的問題 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) - 貢獻者 @jiannx

- **[資源管理器]** 防止 `filterByTk` 參數陣列在超過 100 個項目時自動轉換為物件 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) - 貢獻者 @2013xile

- **[動作：匯入記錄 Pro]**
  - 修復在同步模式下匯入時拋出錯誤的問題 - 貢獻者 @mytharcher

  - 修復因串流被重複讀取，導致超過約 30 個欄位時匯入失敗的問題 - 貢獻者 @mytharcher

- **[工作流程：審批]** 修復新增受託人時的並發問題 - 貢獻者 @mytharcher

- **[遷移管理器]** 修復因目標環境在上傳遷移過程中尚未建立新資料表而導致的遷移中斷問題 - 貢獻者 @Andrew1989Y

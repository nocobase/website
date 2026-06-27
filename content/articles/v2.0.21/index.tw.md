---
title: "NocoBase v2.0.21：新增過濾執行清單"
description: "v2.0.21 版本發布說明"
---

### 🚀 改善

- **[工作流程]** 新增篩選執行清單功能 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) - 貢獻者 @mytharcher

- **[工作流程：審批]** 當觸發器中未設定資料集合時，避免設定審批者介面 - 貢獻者 @mytharcher

### 🐛 錯誤修復

- **[資源管理器]** 防止 `filterByTk` 參數陣列在超過 100 個項目時自動轉換為物件 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) - 貢獻者 @2013xile

- **[客戶端]** 修復非管理員無法清除關聯欄位值的問題 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) - 貢獻者 @jiannx

- **[動作：匯入記錄 Pro]**
  - 修復在同步模式下匯入時拋出錯誤的問題 - 貢獻者 @mytharcher

  - 修復因串流被重複讀取，導致超過約 30 個欄位時匯入失敗的問題 - 貢獻者 @mytharcher

- **[工作流程：審批]** 修復新增受指派者時的並發問題 - 貢獻者 @mytharcher

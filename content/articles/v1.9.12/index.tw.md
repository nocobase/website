---
title: "NocoBase v1.9.12：增強非同步任務的錯誤訊息，為使用者提供任務失敗的具體原因"
description: "v1.9.12 版本發布說明"
---

### 🚀 改進項目

- **[客戶端]** 為更新記錄與刪除記錄的操作按鈕新增載入狀態，避免重複請求 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher

- **[非同步任務管理器]** 強化非同步任務的錯誤訊息，讓使用者能明確了解任務失敗的具體原因 ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher

- **[操作：匯入記錄 Pro]** 強化非同步任務的錯誤訊息，讓使用者能明確了解任務失敗的具體原因 by @mytharcher

- **[工作流：審核]**
  - 修正 AssigneeSelect 中的變數選取，限制僅能選取使用者集合的主鍵或外鍵 by @mytharcher

  - 減少審核彈窗中需載入的關聯資料，以提升效能 by @mytharcher

  - 讓手動執行（或透過子流程節點觸發）的負載能相容於記錄或主鍵格式，避免觸發上下文中的一致性問題 by @mytharcher

### 🐛 錯誤修復

- **[非同步任務管理器]** 為 `asyncTasks` 集合新增遷移規則，避免非同步任務記錄被遷移 ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher

- **[工作流：審核]** 修正語言檔案 by @mytharcher

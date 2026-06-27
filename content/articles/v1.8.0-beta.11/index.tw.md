---
title: "NocoBase v1.8.0-beta.11：支援 `multipart/form-data` 請求"
description: "v1.8.0-beta.11 版本發行說明"
---

### 🎉 新功能

- **[工作流程：HTTP 請求節點]** 支援 `multipart/form-data` 請求 ([#7087](https://github.com/nocobase/nocobase/pull/7087)) - 貢獻者：@shushu992

### 🚀 改進

- **[工作流程]**
  - 優化行動端樣式 ([#7040](https://github.com/nocobase/nocobase/pull/7040)) - 貢獻者：@mytharcher

  - 調整 `getCollectionFieldOptions` 的 API ([#7095](https://github.com/nocobase/nocobase/pull/7095)) - 貢獻者：@mytharcher

- **[公開表單]** 優化公開表單中日期元件的效能 ([#7117](https://github.com/nocobase/nocobase/pull/7117)) - 貢獻者：@zhangzhonghe

- **[工作流程：動作前事件]** 調整變數 API - 貢獻者：@mytharcher

- **[工作流程：審批]** 調整變數 API - 貢獻者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正含時間的日期欄位範圍限制不正確的問題 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) - 貢獻者：@katherinehhh

  - 當 URL 查詢參數變數為空時，資料範圍條件未被移除 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) - 貢獻者：@zhangzhonghe

- **[工作流程]**
  - 修正任務中載入記錄的參數 ([#7123](https://github.com/nocobase/nocobase/pull/7123)) - 貢獻者：@mytharcher

  - 修正對大整數數字執行檢查不正確的問題 ([#7099](https://github.com/nocobase/nocobase/pull/7099)) - 貢獻者：@mytharcher

  - 修正非當前工作流程版本造成的統計資料級聯刪除問題 ([#7103](https://github.com/nocobase/nocobase/pull/7103)) - 貢獻者：@mytharcher

- **[行動端]** 修正行動端彈出視窗的 z-index 問題 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) - 貢獻者：@zhangzhonghe

- **[網頁客戶端]** 修正設定角色選單權限後，頁面下的區塊未顯示的問題 ([#7112](https://github.com/nocobase/nocobase/pull/7112)) - 貢獻者：@aaaaaajie

- **[日曆]** 修正日曆區塊快速建立表單中的日期欄位問題 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) - 貢獻者：@katherinehhh

- **[動作：匯入記錄]** 解決批次匯入使用者名稱與密碼後登入失敗的問題 ([#7076](https://github.com/nocobase/nocobase/pull/7076)) - 貢獻者：@aaaaaajie

- **[工作流程：審批]**
  - 修正審批相關集合被刪除時拋出錯誤的問題 - 貢獻者：@mytharcher

  - 修正行動端樣式 - 貢獻者：@mytharcher

  - 修正觸發器中的申請人變數名稱 - 貢獻者：@mytharcher

  - 僅允許參與者檢視（取得）審批詳情 - 貢獻者：@mytharcher

  - 修正會拋出錯誤的舊版變數 API - 貢獻者：@mytharcher

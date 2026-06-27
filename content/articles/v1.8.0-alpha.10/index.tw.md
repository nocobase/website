---
title: "NocoBase v1.8.0-alpha.10：支援外部資料來源的集合按需載入"
description: "v1.8.0-alpha.10 版本發行說明"
---

### 🎉 新功能

- **[資料來源管理器]** ✨ 支援外部資料來源的集合按需載入 ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie

- **[工作流：HTTP 請求節點]** 支援 `multipart/form-data` 請求 ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992

- **[資料來源：外部 SQL Server]** 支援外部資料來源的集合按需載入 by @aaaaaajie

### 🐛 錯誤修復

- **[客戶端]**
  - 當 URL 查詢參數變數為空時，資料範圍條件未被移除 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe

  - 含時間的日期欄位範圍限制不正確 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh

- **[行動端]** 修復行動端彈出視窗的 z-index 問題 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe

- **[日曆]** 日曆區塊快速建立表單中的日期欄位問題 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh

- **[工作流：審批]**
  - 修復舊版變數 API 拋出錯誤的問題 by @mytharcher

  - 修復行動端樣式 by @mytharcher

  - 修復當審批相關集合被刪除時拋出錯誤的問題 by @mytharcher

- **[郵件管理員]** 附件未顯示 by @jiannx

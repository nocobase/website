---
title: "NocoBase v1.8.23：優化列表 API 計數查詢"
description: "v1.8.23 版本發布說明"
---

### 🚀 功能改進

- **[資料庫]** 優化列表 API 計數查詢，降低資源消耗。([#7453](https://github.com/nocobase/nocobase/pull/7453)) by @aaaaaajie

- **[通知：應用內訊息]** 支援設定應用內訊息通知的自動關閉延遲時間 ([#7472](https://github.com/nocobase/nocobase/pull/7472)) by @mytharcher

- **[工作流：通知節點]** 支援測試通知節點 ([#7470](https://github.com/nocobase/nocobase/pull/7470)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 在編輯表單區塊中切換至標籤元件時，關聯欄位渲染錯誤 ([#7468](https://github.com/nocobase/nocobase/pull/7468)) by @katherinehhh

  - 當選取日期等於最小日期時的時間限制問題 ([#7461](https://github.com/nocobase/nocobase/pull/7461)) by @katherinehhh

- **[行動端]** 行動端無時區的日期欄位無法正確顯示日期時間 ([#7473](https://github.com/nocobase/nocobase/pull/7473)) by @katherinehhh

- **[公開表單]** 使用變數時，公開表單欄位的預設值未生效 ([#7467](https://github.com/nocobase/nocobase/pull/7467)) by @katherinehhh

- **[動作：匯入記錄]** 修正匯入重複資料時顯示的錯誤行號 ([#7440](https://github.com/nocobase/nocobase/pull/7440)) by @aaaaaajie

- **[集合：樹狀結構]** 刪除樹狀集合後，移除與該集合相關的資料庫事件 ([#7459](https://github.com/nocobase/nocobase/pull/7459)) by @2013xile

- **[工作流：自訂動作事件]** 修正自訂動作事件在初始化後無法立即手動執行的問題 by @mytharcher

- **[工作流：子流程]** 修正子流程被恢復並多次執行的問題 by @mytharcher

- **[工作流：審批]** 對於非當前審批人的使用者，流程表格中將不顯示對應的檢視按鈕 by @mytharcher

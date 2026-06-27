---
title: "NocoBase v2.0.0-alpha.48：新增2.0地圖區塊"
description: "v2.0.0-alpha.48 版本發布說明"
---

### 🎉 新功能

- **[區塊：地圖]** 新增 2.0 地圖區塊 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) by @katherinehhh

- **[認證：OIDC]** 支援未認證時自動重新導向至 SSO 網址 by @heziqiang

### 🐛 錯誤修復

- **[客戶端]**
  - 避免開啟預設值設定時拋出錯誤 ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher

  - 解決在關聯樹狀表格區塊中新增子記錄時發生的錯誤 ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh

  - 修正 Markdown 欄位在 HTML 模式下省略顯示的問題 ([#7994](https://github.com/nocobase/nocobase/pull/7994)) by @katherinehhh

  - 修正階層選擇器中搜尋結果不完整的問題 ([#7990](https://github.com/nocobase/nocobase/pull/7990)) by @katherinehhh

  - 修正頁面分頁狀態與路由不對應的問題 ([#7991](https://github.com/nocobase/nocobase/pull/7991)) by @zhangzhonghe

  - 修正遠端選擇器對非物件值無法顯示正確標籤的問題 ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh

- **[資料庫]** 修正：移除僅時間欄位在時間轉換中的 UTC 處理，以防止時區偏移。([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu

- **[工作流程]**
  - 修正已準備好的執行在停止前未送入佇列的問題 ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher

  - 修正部分工作流程任務選單未顯示的問題 ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher

  - 修正任務連結至錯誤頁面的問題 ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher

- **[資料視覺化]** 外部資料來源集合的篩選欄位設定未顯示特定屬性 ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile

- **[資料來源管理器]** 修正資料庫密碼變更時，資料來源密碼更新失敗的問題 ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock

- **[動作：匯入記錄]** 修正樹狀表格中匯入資料時的問題 ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock

- **[工作流程：人工節點]** 修正人工任務計數不正確的問題 ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher

- **[工作流程：審批]**
  - 修正使用者重新提交後，執行上下文中無申請人資料的問題 by @mytharcher

  - 修正使用者提交審批附帶意見後，工作結果中意見為空的問題 by @mytharcher

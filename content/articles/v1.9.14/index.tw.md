---
title: "NocoBase v1.9.14：未認證時支援自動重定向至 SSO URL"
description: "v1.9.14 版本發行說明"
---

### 🎉 新功能

- **[認證：OIDC]** 支援未認證時自動重新導向至 SSO 網址，由 @heziqiang 貢獻

### 🚀 改進

- **[客戶端]** 在訊息內容中使用三層大括號（`{{{` 和 `}}}`）作為變數，避免變數被 Handlebars 跳脫（[#7972](https://github.com/nocobase/nocobase/pull/7972)），由 @mytharcher 貢獻

- **[集合欄位：Markdown(Vditor)]** 調整 vditor 全螢幕內容寬度（[#7974](https://github.com/nocobase/nocobase/pull/7974)），由 @katherinehhh 貢獻

### 🐛 錯誤修復

- **[資料庫]** 修復：移除僅時間欄位在時間轉換中的 UTC 處理，以防止時區導致的偏移。（[#7812](https://github.com/nocobase/nocobase/pull/7812)），由 @ChimingLiu 貢獻

- **[客戶端]** 修復遠端選擇器在非物件值時未顯示正確標籤的問題（[#7975](https://github.com/nocobase/nocobase/pull/7975)），由 @katherinehhh 貢獻

- **[工作流程]**
  - 修復已準備的執行在停止前未發送至佇列的問題（[#7981](https://github.com/nocobase/nocobase/pull/7981)），由 @mytharcher 貢獻

  - 修復任務連結至錯誤頁面的問題（[#7983](https://github.com/nocobase/nocobase/pull/7983)），由 @mytharcher 貢獻

  - 修復部分工作流程任務選單未顯示的問題（[#7980](https://github.com/nocobase/nocobase/pull/7980)），由 @mytharcher 貢獻

  - 修復因提供者誤用導致任務計數未顯示的問題（[#7968](https://github.com/nocobase/nocobase/pull/7968)），由 @mytharcher 貢獻

- **[工作流程：人工節點]** 修復人工任務計數不正確的問題（[#7984](https://github.com/nocobase/nocobase/pull/7984)），由 @mytharcher 貢獻

- **[資料視覺化]**
  - 外部資料來源集合的篩選欄位設定未顯示特定屬性（[#7982](https://github.com/nocobase/nocobase/pull/7982)），由 @2013xile 貢獻

  - 解決圖表查詢未支援 ACL 資料範圍的問題（[#7915](https://github.com/nocobase/nocobase/pull/7915)），由 @2013xile 貢獻

- **[資料來源管理員]** 修正在資料庫密碼變更時，資料來源密碼更新失敗的問題（[#7977](https://github.com/nocobase/nocobase/pull/7977)），由 @cgyrock 貢獻

- **[動作：匯入記錄]** 修正在樹狀表格中匯入資料時的問題（[#7976](https://github.com/nocobase/nocobase/pull/7976)），由 @cgyrock 貢獻

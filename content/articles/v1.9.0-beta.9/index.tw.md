---
title: "NocoBase v1.9.0-beta.9：表格區塊支援新增「欄位設定」按鈕"
description: "v1.9.0-beta.9 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**

  - 表格區塊支援新增「欄位設定」按鈕，可設定欄位順序與顯示狀態 ([#7204](https://github.com/nocobase/nocobase/pull/7204)) by @kerwin612
  - 支援欄位驗證規則 ([#7297](https://github.com/nocobase/nocobase/pull/7297)) by @aaaaaajie
- **[資料來源：主資料來源]**

  - 支援從主資料來源讀取資料表 ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie
  - 支援在主資料來源中顯示由外掛定義的資料表 ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie

### 🚀 改進

- **[客戶端]** 支援在預覽圖片時旋轉 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
- **[snowflake-id]** 將使用自增主鍵但無唯一識別碼的系統資料表 ID 變更為 53 位元的 Snowflake 風格 ID ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile
- **[工作流程]** 將與調度相關的邏輯拆分為獨立的調度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher
- **[RabbitMQ 佇列適配器]** 改善 RabbitMQ 連線處理與訊息處理邏輯 by @sdp-ncd
- **[郵件管理員]**

  - 支援批次同步 by @jiannx
  - 富文字編輯器支援圖片調整大小 by @jiannx

### 🐛 錯誤修復

- **[客戶端]**

  - 修正「欄位設定」按鈕從模態對話框內的資料表載入欄位的問題 ([#7385](https://github.com/nocobase/nocobase/pull/7385)) by @kerwin612
  - 修正側邊欄子選單無法正確高亮的問題 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
- **[工作流程]**

  - 修正因佇列處理不當導致重複執行的問題 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  - 修正綁定工作流程設定中載入關聯欄位上下文時，工作流程列表條件不正確的問題 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
  - 修正基於日期欄位的排程任務在啟動後未觸發的問題 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher
- **[工作流程：迴圈節點]** 修正即使迴圈節點條件未滿足，流程仍錯誤地前進至下一項目的問題 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
- **[郵件管理員]**

  - 垃圾郵件主旨 by @jiannx
  - 垃圾主旨 by @jiannx
  - 富文字編輯器支援軟換行 by @jiannx
  - 支援同一封郵件寄送給多人 by @jiannx
  - 郵件訊息列表最佳化效能 by @jiannx
  - 選取行後，設定「已讀」與「未讀」 by @jiannx
  - 新增 rawId 欄位以進行效能最佳化 by @jiannx
  - HTML 中的 ref 屬性導致渲染異常 by @jiannx
  - 子郵件內容無法被篩選 by @jiannx
  - 支援重新同步 by @jiannx
  - 手動區分轉寄與回覆 by @jiannx

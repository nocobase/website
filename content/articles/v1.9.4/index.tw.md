---
title: "NocoBase v1.9.4：優化關聯欄位操作的權限控制邏輯"
description: "v1.9.4 版本發布說明"
---

### 🚀 改善項目

- **[存取控制]** 優化關聯欄位操作的權限控制邏輯 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile

- **[工作流程：JavaScript]** 修復因上層函式被傳入執行環境而導致的安全性漏洞，防止被利用以取得上層執行環境的存取權限 by @mytharcher

- **[驗證：OIDC]** 增加請求逾時時間 by @2013xile

### 🐛 錯誤修復

- **[伺服器]** 修復啟用服務拆分模式後，工作進程透過訊息佇列發送訊息時會導致錯誤的問題 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher

- **[客戶端]** 修復簡易分頁詳情區塊中下一頁為空的問題 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh

- **[工作流程]**
  - 為工作流程的日誌新增 `workflowId` 作為識別資料 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher

  - 修正在服務拆分模式下，工作流程外掛程式在非工作進程模式時仍會消耗佇列事件的問題 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher

- **[使用者]** 當欄位名稱使用蛇形命名法（snake_case）時，索引重新整理不正確 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile

- **[工作流程：自訂變數]** 修復變數節點中無設定時會拋出錯誤的問題 by @mytharcher

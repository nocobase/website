---
title: "NocoBase v2.0.0-beta.6：簡化查詢參數，提升效能"
description: "v2.0.0-beta.6 版本發布說明"
---

### 🚀 改善

- **[工作流程：審核]** 簡化查詢參數，並提升效能，作者 @mytharcher

### 🐛 錯誤修復

- **[sdk]** 改善令牌共享實作 ([#8357](https://github.com/nocobase/nocobase/pull/8357))，作者 @chenos

- **[client]** 修正在表單區塊中，來自外部資料來源的關聯欄位無法載入關聯資料的問題 ([#8356](https://github.com/nocobase/nocobase/pull/8356))，作者 @katherinehhh

- **[工作流程：迴圈節點]** 修正條件分支中失敗的節點無法將狀態傳遞給上層分支節點的問題 ([#8360](https://github.com/nocobase/nocobase/pull/8360))，作者 @mytharcher

- **[存取控制]** 允許關聯欄位使用目標鍵進行關聯 ([#8352](https://github.com/nocobase/nocobase/pull/8352))，作者 @2013xile

- **[工作流程：Webhook]** 修正向子應用程式的 Webhook URL 發送 POST 請求時拋出 404 錯誤的問題，作者 @mytharcher

- **[電子郵件管理員]** 修正 Outlook 回覆連結偶爾中斷的問題，作者 @jiannx

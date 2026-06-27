---
title: "NocoBase v2.0.0-alpha.63：AI 編輯任務表單中的文字區域自動調整大小"
description: "v2.0.0-alpha.63 版本發布說明"
---

### 🚀 改進項目

- **[客戶端]**
  - 更新儲存格時避免整個表格重新渲染 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) - 作者：@katherinehhh

  - 在 AI 編輯任務表單中自動調整文字區域大小 ([#8350](https://github.com/nocobase/nocobase/pull/8350)) - 作者：@heziqiang

- **[工作流：審批]**
  - 遷移後新增同步對象的修復邏輯 - 作者：@mytharcher

  - 簡化查詢參數並提升效能 - 作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在詳細、列表及表單區塊中，分頁後欄位與操作權限未重新計算的問題 ([#8336](https://github.com/nocobase/nocobase/pull/8336)) - 作者：@gchust

  - 修正來自外部資料來源的關聯欄位在表單區塊中無法載入關聯資料的問題 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) - 作者：@katherinehhh

- **[SDK]** 改善令牌共享實作 ([#8357](https://github.com/nocobase/nocobase/pull/8357)) - 作者：@chenos

- **[存取控制]** 允許關聯欄位使用目標鍵進行關聯 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) - 作者：@2013xile

- **[工作流：循環節點]** 修正條件分支中失敗節點無法將狀態傳遞至上層分支節點的問題 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) - 作者：@mytharcher

- **[工作流：Webhook]** 修正子應用程式中向 Webhook URL 發送 POST 請求時拋出 404 錯誤的問題 - 作者：@mytharcher

- **[工作流：審批]** 修正因缺少依賴而導致的建置錯誤 - 作者：@mytharcher

- **[電子郵件管理員]** 修正 Outlook 回覆連結偶爾中斷的問題 - 作者：@jiannx

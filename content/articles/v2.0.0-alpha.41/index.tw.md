---
title: "NocoBase v2.0.0-alpha.41：新增 AI 員工以配置圖表"
description: "v2.0.0-alpha.41 版本發布說明"
---

### 🎉 新功能

- **[資料視覺化]** 新增 AI 員工用於配置圖表 ([#7815](https://github.com/nocobase/nocobase/pull/7815)) by @heziqiang

### 🚀 改進

- **[流程引擎]**
  - 支援在流程引擎中監聽流程模型樹變更事件。([#7905](https://github.com/nocobase/nocobase/pull/7905)) by @gchust

  - 改善當前記錄變數解析，加快開啟對話框速度 ([#7895](https://github.com/nocobase/nocobase/pull/7895)) by @gchust

  - 優化 runjs 上下文中第三方函式庫的 API 結構，並新增對 Antd 圖示庫的支援。([#7896](https://github.com/nocobase/nocobase/pull/7896)) by @gchust

- **[資料庫]** 重構欄位加密外掛以增強安全性，支援應用程式金鑰生成與輪換，以及每個欄位獨立加密金鑰。([#7769](https://github.com/nocobase/nocobase/pull/7769)) by @cgyrock

- **[集合欄位：加密]** 優化欄位加密外掛，支援使用獨立 IV 進行資料檢索 by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 修復隱藏區塊仍佔據頁面空間的問題。([#7906](https://github.com/nocobase/nocobase/pull/7906)) by @gchust

  - 修復篩選按鈕中的重置按鈕清除預設條件的問題 ([#7903](https://github.com/nocobase/nocobase/pull/7903)) by @zhangzhonghe

  - 修復新增表單中子表單欄位權限檢查不正確的問題 ([#7902](https://github.com/nocobase/nocobase/pull/7902)) by @katherinehhh

- **[伺服器]** 修復服務拆分模式下，未訂閱的佇列訊息無法發佈的問題 ([#7875](https://github.com/nocobase/nocobase/pull/7875)) by @mytharcher

- **[工作流程]**
  - 修復監聽不存在的外部資料來源事件導致的錯誤 ([#7855](https://github.com/nocobase/nocobase/pull/7855)) by @mytharcher

  - 使用 eventQueue 取代共享的 backgroundJob，以防止在服務拆分模式下共享佇列被錯誤消費 ([#7871](https://github.com/nocobase/nocobase/pull/7871)) by @mytharcher

- **[工作流程：人工節點]** 修正應使用的語言套件命名空間，以顯示正確的翻譯內容 ([#7877](https://github.com/nocobase/nocobase/pull/7877)) by @mytharcher

- **[存取控制]** 關聯操作程式碼片段未生效的問題 ([#7876](https://github.com/nocobase/nocobase/pull/7876)) by @2013xile

- **[工作流程：自訂動作事件]** 修復監聽不存在的外部資料來源事件導致的錯誤 by @mytharcher

- **[留言]** 修復留言區塊中引用留言無法顯示的問題 by @katherinehhh

- **[範本列印]** 解析篩選條件中的變數 by @jiannx

- **[工作流程：審批]** 修復多位審批人同時處理審批時可能發生的競爭條件，導致工作流程節點執行超過一次的問題 by @mytharcher

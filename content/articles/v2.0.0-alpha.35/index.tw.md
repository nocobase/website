---
title: "NocoBase v2.0.0-alpha.35：支援流程模型中的延遲操作"
description: "v2.0.0-alpha.35 版本發行說明"
---

### 🚀 改進項目

- **[流程引擎]** 支援流程模型中的延遲操作 ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust

- **[工作流：JavaScript]** 修復因上層函數傳入執行環境而導致的安全性漏洞，防止可能被利用以存取上層執行上下文 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復簡單分頁詳情區塊中下一頁為空的問題 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh

  - 修復表格操作與 jsColumn 寬度未套用的問題 ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh

  - 若透過頁面事件流程設定，區塊的資料範圍無法正常運作 ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust

- **[工作流]** 為工作流程日誌新增 `workflowId` 作為識別資料 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher

- **[工作流：自訂變數]** 修復變數節點無設定時拋出錯誤的問題 by @mytharcher

- **[郵件管理員]** 集合 mailMessages 新增索引 by @jiannx

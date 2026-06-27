---
title: "NocoBase v1.8.7：支援測試執行節點"
description: "v1.8.7 版本發行說明"
---

### 🎉 新功能

- **[工作流：日期計算節點]** 支援測試執行節點，作者：@mytharcher

### 🚀 改進

- **[客戶端]** 顏色選擇器：新增四種推薦顏色 ([#7226](https://github.com/nocobase/nocobase/pull/7226))，作者：@zhangzhonghe

- **[工作流]** 讓日期值的比較更具相容性 ([#7237](https://github.com/nocobase/nocobase/pull/7237))，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 表格操作欄的樣式規則未生效 ([#7225](https://github.com/nocobase/nocobase/pull/7225))，作者：@katherinehhh

  - 刪除選單時，uiSchemas 表格中對應的資料未被刪除 ([#7232](https://github.com/nocobase/nocobase/pull/7232))，作者：@zhangzhonghe

  - 避免在 appends 中選取非關聯欄位 ([#7231](https://github.com/nocobase/nocobase/pull/7231))，作者：@mytharcher

- **[工作流：子流程]** 修正當回呼訊號送達但待執行流程不在當前實例時拋出錯誤的問題，作者：@mytharcher

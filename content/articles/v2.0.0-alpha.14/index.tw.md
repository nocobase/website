---
title: "NocoBase v2.0.0-alpha.14：AI 編碼優化"
description: "v2.0.0-alpha.14 版本發布說明"
---

### 🚀 改進

- **[AI 員工]** AI 編碼優化 ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock

- **[資料來源：主要]** 重構錯誤訊息的本地化邏輯，並在錯誤處理外掛中處理 ([#7582](https://github.com/nocobase/nocobase/pull/7582)) by @2013xile

### 🐛 錯誤修復

- **[資料庫]**
  - 在使用 `runSQL` 方法執行 SQL 語句前設定 `search_path` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile

  - 修復當運算子 `$in` 遇到 `null` 值時拋出錯誤的問題 ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher

- **[客戶端]** 修復分頁圖示彈出視窗被遮擋的問題 ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe

- **[工作流程：審批]** 修復審批提交表單中變數未被解析的問題 by @mytharcher

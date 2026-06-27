---
title: "NocoBase v1.9.37：更新 math.js 版本以支援更多函數"
description: "v1.9.37 版本發布說明"
---

### 🚀 改善項目

- **[評估器]** 更新 math.js 版本以支援更多函式 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) - 感謝 @mytharcher

- **[通知：應用內訊息]** 修正向大量使用者發送應用內訊息時的效能問題 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) - 感謝 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正建立表單提交成功後，級聯選擇資料未清除的問題 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) - 感謝 @katherinehhh

  - 為操作 schema 增加容錯機制，避免點擊操作按鈕時頁面崩潰 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) - 感謝 @mytharcher

  - 修正提交按鈕在啟用確認功能時，跳過必填驗證無效的問題 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) - 感謝 @katherinehhh

- **[集合欄位：多對多（陣列）]** 修正關聯查詢中附加二級多對多（陣列）關聯時發生的錯誤 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) - 感謝 @cgyrock

- **[工作流程]** 修正複製節點中 schema ID 未更新的問題 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) - 感謝 @mytharcher

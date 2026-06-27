---
title: "NocoBase v1.7.0-beta.23：支援自訂請求動作的成功訊息中的回應變數"
description: "v1.7.0-beta.23 版本發行說明"
---

### 🎉 新功能

- **[操作：自訂請求]** 支援在自訂請求操作的成功訊息中使用回應變數 ([#6694](https://github.com/nocobase/nocobase/pull/6694)) - 感謝 @katherinehhh

### 🚀 改進

- **[客戶端]** 調整上傳訊息 ([#6757](https://github.com/nocobase/nocobase/pull/6757)) - 感謝 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 從關聯資料表擷取多對多陣列欄位時，取得不正確的資料 ([#6744](https://github.com/nocobase/nocobase/pull/6744)) - 感謝 @2013xile

  - 當 writableView 為 false 時，僅支援在檢視資料表中匯出操作 ([#6763](https://github.com/nocobase/nocobase/pull/6763)) - 感謝 @katherinehhh

  - 在新增表單的子表單/子表格中顯示關聯欄位時，意外建立關聯資料 ([#6727](https://github.com/nocobase/nocobase/pull/6727)) - 感謝 @katherinehhh

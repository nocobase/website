---
title: "NocoBase v1.4.21：支援詳情區塊中的聯動規則以隱藏（保留值）"
description: "v1.4.21 版本發行說明"
---

### 🚀 改進

- **[客戶端]** 支援在詳細區塊中使用連結規則來隱藏（保留值）([#6031](https://github.com/nocobase/nocobase/pull/6031)) by @katherinehhh

### 🐛 錯誤修復

- **[客戶端]**
  - 解決圖示檔案路徑中缺少公開路徑的問題 ([#6034](https://github.com/nocobase/nocobase/pull/6034)) by @chenos

  - 修復表單連結規則在依賴子表格欄位值時失效的問題 ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe

  - 修復子詳細區塊中「目前記錄」變數的欄位不正確 ([#6030](https://github.com/nocobase/nocobase/pull/6030)) by @zhangzhonghe

- **[備份管理器]** 修復當環境變數 API_BASE_PATH 不是 /api 時備份下載失敗的問題 by @gchust

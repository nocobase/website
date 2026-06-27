---
title: "NocoBase v1.7.15：錯誤修復"
description: "v1.7.15 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) - 由 @mytharcher 貢獻

  - 指派欄位值：無法清除關聯欄位的資料 ([#7086](https://github.com/nocobase/nocobase/pull/7086)) - 由 @zhangzhonghe 貢獻

  - 表格欄位文字對齊功能無法運作 ([#7094](https://github.com/nocobase/nocobase/pull/7094)) - 由 @zhangzhonghe 貢獻

- **[工作流程]** 修正對大整數數字執行檢查時的錯誤 ([#7091](https://github.com/nocobase/nocobase/pull/7091)) - 由 @mytharcher 貢獻

- **[檔案管理]** 修正附件欄位在審核流程中無法更新的問題 ([#7093](https://github.com/nocobase/nocobase/pull/7093)) - 由 @mytharcher 貢獻

- **[工作流程：審核]** 使用比較運算取代隱含邏輯以避免型別問題 - 由 @mytharcher 貢獻

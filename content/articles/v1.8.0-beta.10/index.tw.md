---
title: "NocoBase v1.8.0-beta.10：在節點結果中新增審批記錄變數"
description: "v1.8.0-beta.10 版本發布說明"
---

### 🎉 新功能

- **[工作流：審批]** 在節點結果中新增審批記錄變數，作者 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 表格欄位文字對齊功能無法運作 ([#7094](https://github.com/nocobase/nocobase/pull/7094))，作者 @zhangzhonghe

  - 指派欄位值：無法清除關聯欄位的資料 ([#7086](https://github.com/nocobase/nocobase/pull/7086))，作者 @zhangzhonghe

  - 為每個欄位使用獨立的變數範圍 ([#7012](https://github.com/nocobase/nocobase/pull/7012))，作者 @mytharcher

- **[檔案管理]** 修正在審批流程中無法更新附件欄位的問題 ([#7093](https://github.com/nocobase/nocobase/pull/7093))，作者 @mytharcher

- **[工作流]** 修正對大整數數字執行檢查時不正確的問題 ([#7091](https://github.com/nocobase/nocobase/pull/7091))，作者 @mytharcher

- **[工作流：審批]** 使用比較運算取代隱含邏輯以避免型別問題，作者 @mytharcher

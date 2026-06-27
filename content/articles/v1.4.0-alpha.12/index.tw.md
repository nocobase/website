---
title: "NocoBase v1.4.0-alpha.12：錯誤修復"
description: "v1.4.0-alpha.12 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修復當檔案或屬性為 null 時的檔案類型比對問題 ([#5659](https://github.com/nocobase/nocobase/pull/5659)) - 感謝 @mytharcher

  - 修復子表格刪除資料後分頁計數未更新的問題 ([#5648](https://github.com/nocobase/nocobase/pull/5648)) - 感謝 @katherinehhh

- **[工作流程]** 修復在無分支條件前新增條件後節點消失的問題 ([#5658](https://github.com/nocobase/nocobase/pull/5658)) - 感謝 @mytharcher

- **[行動端]** 在關聯欄位中使用長文字作為標題欄位時的樣式問題 ([#5655](https://github.com/nocobase/nocobase/pull/5655)) - 感謝 @katherinehhh

- **[工作流程：自訂操作事件]** 修復使用外部資料來源的附件 URL 欄位時發生的錯誤 - 感謝 @katherinehhh

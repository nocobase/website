---
title: "NocoBase v1.9.15：錯誤修復"
description: "v1.9.15 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 避免開啟預設值設定時拋出錯誤 ([#7997](https://github.com/nocobase/nocobase/pull/7997)) - 感謝 @mytharcher

  - 解決在關聯樹狀表格區塊中新增子記錄時的錯誤 ([#7989](https://github.com/nocobase/nocobase/pull/7989)) - 感謝 @katherinehhh

- **[部門]** 修復部門關聯欄位無法編輯的問題 ([#7462](https://github.com/nocobase/nocobase/pull/7462)) - 感謝 @heziqiang

- **[集合：樹狀]** 修復因不正確的樹狀父層欄位查詢導致路徑表格更新失敗 ([#8000](https://github.com/nocobase/nocobase/pull/8000)) - 感謝 @2013xile

- **[集合欄位：多對多（陣列）]** 修復子表格中 m2m 陣列欄位無法更新的問題 ([#7998](https://github.com/nocobase/nocobase/pull/7998)) - 感謝 @cgyrock

- **[工作流程：審核]**
  - 修復使用者重新提交後，執行上下文中缺少申請人資料的問題 - 感謝 @mytharcher

  - 修復使用者提交審核意見後，工作結果中註解為空的問題 - 感謝 @mytharcher

---
title: "NocoBase v1.9.0-alpha.17：工作流程改進與修復"
description: "v1.9.0-alpha.17 版本發布說明"
---

### 🚀 改善

- **[工作流程]** 將與調度相關的邏輯拆分為獨立的調度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) - 貢獻者：@mytharcher

### 🐛 錯誤修復

- **[工作流程]**
  - 修正因佇列處理不當導致重複執行的問題 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) - 貢獻者：@mytharcher

  - 修正基於日期欄位的排程任務在啟動後未觸發的問題 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) - 貢獻者：@mytharcher

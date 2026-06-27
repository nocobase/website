---
title: "NocoBase v1.8.27：預覽圖片時支援旋轉"
description: "v1.8.27 版本發行說明"
---

### 🚀 功能改進

- **[客戶端]** 支援預覽圖片時旋轉 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) - @mytharcher

- **[工作流程]** 將與調度相關的邏輯拆分為獨立的調度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) - @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修正側邊欄子選單無法正確高亮的問題 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) - @duannyuuu

- **[工作流程：循環節點]** 修正即使循環節點條件未滿足，流程仍錯誤地前進至下一項的問題 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) - @mytharcher

- **[工作流程]**
  - 修正因佇列處理不當導致重複執行的問題 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) - @mytharcher

  - 修正綁定工作流程配置中，載入關聯欄位上下文時，工作流程列表條件不正確的問題 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) - @mytharcher

  - 修正基於日期欄位的排程任務在啟動後未觸發的問題 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) - @mytharcher

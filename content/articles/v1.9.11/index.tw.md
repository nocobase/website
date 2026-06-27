---
title: "NocoBase v1.9.11：錯誤修復"
description: "v1.9.11 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]** 修正在外部資料來源設定中，belongsTo 欄位介面顯示為多對一而非一對一的問題 ([#7936](https://github.com/nocobase/nocobase/pull/7936)) — 感謝 @cgyrock

- **[工作流程]** 修正更新任務計數時，會意外重設正在填寫表單狀態的問題 ([#7937](https://github.com/nocobase/nocobase/pull/7937)) — 感謝 @mytharcher

- **[集合欄位：多對多（陣列）]** 修正建立/更新關聯資料時，M2M（陣列）欄位的問題 ([#7926](https://github.com/nocobase/nocobase/pull/7926)) — 感謝 @cgyrock

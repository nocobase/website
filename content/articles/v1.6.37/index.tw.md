---
title: "NocoBase v1.6.37：錯誤修復"
description: "v1.6.37 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修正篩選按鈕下拉選單中的欄位順序 ([#6962](https://github.com/nocobase/nocobase/pull/6962))，作者 @zhangzhonghe

  - 子表格關聯變數在清除時改為擷取關聯資料，而非使用表單值 ([#6963](https://github.com/nocobase/nocobase/pull/6963))，作者 @katherinehhh

  - 子表格中的關聯欄位在疊代變數為空值時觸發請求 ([#6969](https://github.com/nocobase/nocobase/pull/6969))，作者 @katherinehhh

- **[主題編輯器]** 隱藏主題切換選項並修正彈出視窗樣式 ([#6964](https://github.com/nocobase/nocobase/pull/6964))，作者 @zhangzhonghe

- **[工作流程：審核]** 修正審核人範圍查詢搭配關聯條件時的錯誤，作者 @mytharcher

---
title: "NocoBase v1.6.22：升級依賴並移除 SQLite 支援"
description: "v1.6.22 版本發行說明"
---

### 🚀 改進

- **[create-nocobase-app]** 升級依賴並移除 SQLite 支援 ([#6708](https://github.com/nocobase/nocobase/pull/6708)) by @chenos

- **[檔案管理器]** 公開 utils API ([#6705](https://github.com/nocobase/nocobase/pull/6705)) by @mytharcher

- **[工作流]** 在變數類型集合中新增日期類型 ([#6717](https://github.com/nocobase/nocobase/pull/6717)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 行動頂部導航欄圖示難以刪除的問題 ([#6734](https://github.com/nocobase/nocobase/pull/6734)) by @zhangzhonghe

  - 透過外鍵連接後，點擊觸發篩選導致篩選條件為空 ([#6634](https://github.com/nocobase/nocobase/pull/6634)) by @zhangzhonghe

  - 篩選按鈕中日期欄位的選擇器切換問題 ([#6695](https://github.com/nocobase/nocobase/pull/6695)) by @katherinehhh

  - 左側選單的摺疊按鈕被工作流程彈出視窗遮擋的問題 ([#6733](https://github.com/nocobase/nocobase/pull/6733)) by @zhangzhonghe

  - 重新開啟聯動規則時缺少動作選項約束 ([#6723](https://github.com/nocobase/nocobase/pull/6723)) by @katherinehhh

  - 無匯出權限時仍顯示匯出按鈕 ([#6689](https://github.com/nocobase/nocobase/pull/6689)) by @katherinehhh

  - 被聯動規則隱藏的必填欄位不應影響表單提交 ([#6709](https://github.com/nocobase/nocobase/pull/6709)) by @zhangzhonghe

- **[伺服器端]** create-migration 錯誤地產生 appVersion ([#6740](https://github.com/nocobase/nocobase/pull/6740)) by @chenos

- **[建置]** 修復 tar 指令拋出的錯誤 ([#6722](https://github.com/nocobase/nocobase/pull/6722)) by @mytharcher

- **[工作流]** 修復在子流程中執行排程事件時拋出的錯誤 ([#6721](https://github.com/nocobase/nocobase/pull/6721)) by @mytharcher

- **[工作流：自訂動作事件]** 支援在多筆記錄模式下執行 by @mytharcher

- **[檔案儲存：S3(Pro)]** 為伺服器端上傳新增 multer 處理邏輯 by @mytharcher

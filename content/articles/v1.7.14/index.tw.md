---
title: "NocoBase v1.7.14：網格卡片區塊操作列為空時自動隱藏"
description: "v1.7.14 版本發行說明"
---

### 🚀 改善

- **[客戶端]** 當網格區塊卡片操作列為空時自動隱藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) - @zhangzhonghe

- **[驗證]** 從 `verifiers:listByUser` API 的回應中移除驗證器選項 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) - @2013xile

### 🐛 錯誤修復

- **[資料庫]** 支援 `updateOrCreate` 與 `firstOrCreate` 中的關聯更新 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) - @chenos

- **[客戶端]**
  - 公開表單欄位預設值中的 URL 查詢參數變數無法運作 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) - @katherinehhh

  - 子表格欄位上的樣式條件未正確套用 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) - @katherinehhh

  - 在篩選表單中透過關聯資料表欄位進行篩選無效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) - @zhangzhonghe

- **[資料表欄位：多對多（陣列）]** 當存在 `updatedBy` 欄位時，更新多對多（陣列）欄位會拋出錯誤 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) - @2013xile

- **[公開表單]** 公開表單：修正在表單提交時的未授權存取問題 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) - @zhangzhonghe

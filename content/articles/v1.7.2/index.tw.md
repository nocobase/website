---
title: "NocoBase v1.7.2：優化處理大型 XLSX 檔案時的效能問題"
description: "v1.7.2 版本發行說明"
---

### 🚀 改進

- **[動作：批次編輯]** 在選取模式下使用 `filterByTk` 取代 `filter` ([#6994](https://github.com/nocobase/nocobase/pull/6994)) by @mytharcher

- **[動作：匯入記錄 Pro]** 最佳化處理大型 XLSX 檔案（高列數/行數資料集）時的效能問題，防止系統當機或無回應。 by @aaaaaajie

### 🐛 錯誤修復

- **[客戶端]**
  - assignedField 元件中缺少欄位標題 ([#6987](https://github.com/nocobase/nocobase/pull/6987)) by @katherinehhh

  - 在移動選單清單中無法選取最後一個選單項目 ([#6997](https://github.com/nocobase/nocobase/pull/6997)) by @zhangzhonghe

- **[工作流程]**
  - 修正切換分類頁籤時篩選條件未更新的問題 ([#6989](https://github.com/nocobase/nocobase/pull/6989)) by @mytharcher

  - 修正工作流程統計資料未自動建立的問題 ([#6993](https://github.com/nocobase/nocobase/pull/6993)) by @mytharcher

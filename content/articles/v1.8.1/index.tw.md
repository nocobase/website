---
title: "NocoBase v1.8.1：錯誤修復"
description: "v1.8.1 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修正表單中關聯欄位集合內的核取方塊顯示不正確的問題 ([#7176](https://github.com/nocobase/nocobase/pull/7176))，由 @zhangzhonghe 提供

  - 修正點擊按鈕無法開啟彈出視窗的問題 ([#7180](https://github.com/nocobase/nocobase/pull/7180))，由 @zhangzhonghe 提供

- **[工作流程：手動節點]** 修正使用變數時拋出錯誤的問題 ([#7177](https://github.com/nocobase/nocobase/pull/7177))，由 @mytharcher 提供

- **[範本列印]** 為 rootDataType 欄位新增遷移腳本，由 @jiannx 提供

- **[工作流程：審核]** 修正當無指定審核者時，已核准的分支未執行的問題，由 @mytharcher 提供

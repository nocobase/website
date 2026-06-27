---
title: "NocoBase v1.9.0-beta.2：錯誤修復"
description: "v1.9.0-beta.2 版本發佈說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修正表單中關聯欄位集合內的核取方塊欄位顯示不正確的問題 ([#7176](https://github.com/nocobase/nocobase/pull/7176)) — 由 @zhangzhonghe 提供

  - 修正點擊按鈕無法開啟彈出視窗的問題 ([#7180](https://github.com/nocobase/nocobase/pull/7180)) — 由 @zhangzhonghe 提供

- **[資料庫]** 修正檢視表的欄位未在區塊中顯示的問題。([#7162](https://github.com/nocobase/nocobase/pull/7162)) — 由 @aaaaaajie 提供

- **[工作流：人工節點]** 修正使用變數時拋出錯誤的問題 ([#7177](https://github.com/nocobase/nocobase/pull/7177)) — 由 @mytharcher 提供

- **[範本列印]** 為 rootDataType 欄位新增遷移腳本 — 由 @jiannx 提供

- **[工作流：審批]** 修正當無指定審核者時，已核准的分支未執行的問題 — 由 @mytharcher 提供

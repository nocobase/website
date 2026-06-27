---
title: "NocoBase v1.8.0-beta.9：網格卡片區塊操作列為空時自動隱藏"
description: "v1.8.0-beta.9 版本發佈說明"
---

### 🚀 改進

- **[客戶端]**
  - 當網格卡片區塊操作列為空時自動隱藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) - @zhangzhonghe

  - Logo 容器寬度根據內容類型自適應（圖片固定 168px，文字自動寬度）([#7075](https://github.com/nocobase/nocobase/pull/7075)) - @Cyx649312038

- **[驗證]** 從 `verifiers:listByUser` API 的回應中移除驗證器選項 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) - @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 子表格中的必填驗證訊息在切換頁面時持續存在 ([#7080](https://github.com/nocobase/nocobase/pull/7080)) - @katherinehhh

  - 子表格欄位上的樣式條件未正確套用 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) - @katherinehhh

  - 金額元件從 mask 切換至 inputNumer 後遺失小數點 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) - @katherinehhh

  - 公開表單欄位預設值中的 URL 查詢參數變數無法運作 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) - @katherinehhh

  - 在篩選表單中透過關聯資料表欄位進行篩選無效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) - @zhangzhonghe

  - 子表格中 Markdown (Vditor) 渲染不正確 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) - @katherinehhh

- **[資料庫]** 支援 updateOrCreate 與 firstOrCreate 中的關聯更新 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) - @chenos

- **[資料表欄位：多對多（陣列）]** 當存在 `updatedBy` 欄位時，更新多對多（陣列）欄位會拋出錯誤 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) - @2013xile

- **[資料表欄位：序號]** 修正基於字串的大整數序號計算 ([#7079](https://github.com/nocobase/nocobase/pull/7079)) - @mytharcher

- **[公開表單]** 公開表單：修正表單提交時的未授權存取問題 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) - @zhangzhonghe

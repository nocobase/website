---
title: "NocoBase v1.3.40-beta：新增跳過 SSL 驗證選項"
description: "v1.3.40-beta 版本發布說明"
---

### 🎉 新功能

- **[認證：OIDC]** 新增允許跳過 SSL 驗證的選項，由 @2013xile 提供

### 🚀 改進

- **[客戶端]** 對未選取的欄位顯示已停用的未勾選核取方塊 ([#5503](https://github.com/nocobase/nocobase/pull/5503))，由 @katherinehhh 提供

### 🐛 錯誤修復

- **[資料庫]** 修正字串運算子「包含」與「不包含」未能正確處理 `null` 值的問題 ([#5509](https://github.com/nocobase/nocobase/pull/5509))，由 @2013xile 提供

- **[客戶端]** 修正連結規則，使其能正確評估 URL 參數變數 ([#5504](https://github.com/nocobase/nocobase/pull/5504))，由 @katherinehhh 提供

- **[區塊：地圖]** 修正因多次呼叫 AMap 的 `load` 方法，導致存在多個地圖時部分地圖顯示錯誤的問題 ([#5490](https://github.com/nocobase/nocobase/pull/5490))，由 @Cyx649312038 提供

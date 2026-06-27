---
title: "NocoBase v2.0.0-alpha.62：改進修改嵌套關聯欄位時的權限檢查"
description: "v2.0.0-alpha.62 版本發布說明"
---

### 🚀 改善項目

- **[存取控制]** 修正修改巢狀關聯欄位時的權限檢查 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) - 貢獻者 @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 修正選用 `targetKey` 的精煉邏輯 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) - 貢獻者 @katherinehhh

  - 修正 `FilterAction` 元件中關聯欄位不正確的問題 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) - 貢獻者 @mytharcher

  - 修正可編輯子表格中關聯欄位 Select 的篩選參數錯誤 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) - 貢獻者 @katherinehhh

- **[流程引擎]** 修正多次開啟彈窗時可能發生狀態污染的問題 ([#8327](https://github.com/nocobase/nocobase/pull/8327)) - 貢獻者 @gchust

- **[資料庫]** 修正 `OptionsParser` 中的物件 `appends`，並增加參數的 `arrayLimit` ([#8328](https://github.com/nocobase/nocobase/pull/8328)) - 貢獻者 @mytharcher

- **[動作：匯入記錄]** 修正非同步 XLSX 匯入觸發唯一約束錯誤時，錯誤訊息不正確的問題 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) - 貢獻者 @cgyrock

- **[資料來源：主要]** 檢視集合的中繼資料應包含來源欄位選項 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) - 貢獻者 @2013xile

- **[動作：匯出記錄 Pro]** 修正當主應用程式未啟用匯入/匯出 Pro 外掛時，子應用程式執行非同步匯入/匯出任務會發生錯誤的問題 - 貢獻者 @cgyrock

- **[工作流程：審批]** 修正任務中心篩選欄位無法正常運作的問題 - 貢獻者 @mytharcher

- **[電子郵件管理員]** 顯示全部回覆按鈕，且資料範圍支援篩選子郵件 - 貢獻者 @jiannx

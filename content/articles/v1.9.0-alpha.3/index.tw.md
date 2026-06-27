---
title: "NocoBase v1.9.0-alpha.3：支援在主資料來源中顯示外掛定義的表格"
description: "v1.9.0-alpha.3 版本發布說明"
---

### 🎉 新功能

- **[資料來源：主要]** 支援在主資料來源中顯示由外掛定義的資料表。([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie

- **[工作流程：日期計算節點]** 支援測試執行節點 by @mytharcher

### 🚀 改進

- **[客戶端]** 顏色選擇器：新增四種推薦顏色 ([#7226](https://github.com/nocobase/nocobase/pull/7226)) by @zhangzhonghe

- **[工作流程]** 讓日期值的比較更具相容性 ([#7237](https://github.com/nocobase/nocobase/pull/7237)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 樣式規則在表格操作欄位中無法生效 ([#7225](https://github.com/nocobase/nocobase/pull/7225)) by @katherinehhh

  - 避免在 appends 中選取非關聯欄位 ([#7231](https://github.com/nocobase/nocobase/pull/7231)) by @mytharcher

  - 修復錯誤：無法解析 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) by @zhangzhonghe

  - 刪除選單時，未一併刪除 uiSchemas 資料表中對應的資料 ([#7232](https://github.com/nocobase/nocobase/pull/7232)) by @zhangzhonghe

- **[資料庫]** 修復為外部資料來源資料表啟用簡單分頁時發生的錯誤 ([#7222](https://github.com/nocobase/nocobase/pull/7222)) by @aaaaaajie

- **[集合欄位：排序]** 複製記錄時缺少排序欄位選項 ([#7116](https://github.com/nocobase/nocobase/pull/7116)) by @katherinehhh

- **[工作流程：子流程]** 修復當回呼訊號到達但待執行程序不在當前實例時拋出的錯誤 by @mytharcher

- **[工作流程：審批]**
  - 修復提交審批時的多層級關聯問題 by @mytharcher

  - 為記錄列表中已刪除的審批新增容錯機制 by @mytharcher

- **[電子郵件管理員]** 優化電子郵件訊息列表的效能 by @jiannx

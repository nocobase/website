---
title: "NocoBase v1.4.11：優化元件配置項目"
description: "v1.4.11 版本發布說明"
---

### 🚀 改進

- **[客戶端]** 讓更多元件支援「溢位內容省略」設定項目 ([#5888](https://github.com/nocobase/nocobase/pull/5888)) by @zhangzhonghe

- **[資料庫]** 在關聯儲存庫中新增 firstOrCreate 與 updateOrCreate 方法 ([#5894](https://github.com/nocobase/nocobase/pull/5894)) by @chareice

### 🐛 錯誤修復

- **[客戶端]**
  - 修復外部資料來源區塊重複請求模板中缺少 x-data-source 參數的問題 ([#5882](https://github.com/nocobase/nocobase/pull/5882)) by @katherinehhh

  - 修復插件中表格的水平捲軸問題 ([#5899](https://github.com/nocobase/nocobase/pull/5899)) by @katherinehhh

  - 修復關聯欄位下拉選單有時會出現多餘「N/A」選項的問題 ([#5878](https://github.com/nocobase/nocobase/pull/5878)) by @zhangzhonghe

  - 修復 PG 檢視表建立問題，解決跨 Schema 選取檢視表時的錯誤 ([#5881](https://github.com/nocobase/nocobase/pull/5881)) by @katherinehhh

  - 修復表單區塊在佈局設為水平時群組樣式的問題 ([#5884](https://github.com/nocobase/nocobase/pull/5884)) by @katherinehhh

- **[使用者管理]**
  - 修復在使用者管理中新增或編輯使用者後，表單未重置的問題 ([#5875](https://github.com/nocobase/nocobase/pull/5875)) by @2013xile

  - 修復在使用者管理中切換頁面或變更每頁筆數後，編輯並提交使用者資料時分頁設定被重置的問題 ([#5893](https://github.com/nocobase/nocobase/pull/5893)) by @2013xile

- **[資料來源管理器]** 修復外部資料來源 Collection 的篩選問題 ([#5890](https://github.com/nocobase/nocobase/pull/5890)) by @chareice

- **[公開表單]** 修復全域主題切換影響公開表單預覽頁面主題的問題 ([#5883](https://github.com/nocobase/nocobase/pull/5883)) by @katherinehhh

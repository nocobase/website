---
title: "NocoBase v1.6.15：為文字欄位新增修剪選項"
description: "v1.6.15 版本發布說明"
---

### 🚀 功能改進

- **[資料庫]**
  - 為文字欄位新增修剪選項 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) - 作者：@mytharcher

  - 為字串欄位新增修剪選項 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) - 作者：@mytharcher

- **[檔案管理]** 為儲存集合的文字欄位新增修剪選項 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) - 作者：@mytharcher

- **[工作流程]** 改善程式碼 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) - 作者：@mytharcher

- **[工作流程：審核]** 支援使用區塊範本作為審核流程表單 - 作者：@mytharcher

### 🐛 錯誤修復

- **[資料庫]** 避免在更新記錄時，若「datetimeNoTz」欄位值未變更仍觸發變更 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) - 作者：@mytharcher

- **[客戶端]**
  - 關聯欄位（選擇型）在暴露關聯集合欄位時顯示「N/A」([#6582](https://github.com/nocobase/nocobase/pull/6582)) - 作者：@katherinehhh

  - 修復當 `SchemaInitializerItem` 包含 `items` 時，`disabled` 屬性失效的問題 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) - 作者：@mytharcher

  - 級聯問題：刪除並重新選取時出現「xxx 的值不能為陣列格式」([#6585](https://github.com/nocobase/nocobase/pull/6585)) - 作者：@katherinehhh

- **[集合欄位：多對多（陣列）]** 透過多對多（陣列）欄位過濾關聯集合中欄位的問題 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) - 作者：@2013xile

- **[公開表單]** 檢視權限包含列表與取得 ([#6607](https://github.com/nocobase/nocobase/pull/6607)) - 作者：@chenos

- **[身份驗證]** `AuthProvider` 中的令牌指派 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) - 作者：@2013xile

- **[工作流程]** 修復同步選項顯示不正確 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) - 作者：@mytharcher

- **[區塊：地圖]** 地圖管理驗證不應允許僅輸入空格 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) - 作者：@katherinehhh

- **[工作流程：審核]**
  - 修復在審核表單中使用客戶端變數的問題 - 作者：@mytharcher

  - 修復當 `endOnReject` 設定為 `true` 時的分支模式 - 作者：@mytharcher

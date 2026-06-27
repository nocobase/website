---
title: "NocoBase v1.7.0-beta.13：支援在審批流程表單中使用區塊模板"
description: "v1.7.0-beta.13 版本發行說明"
---

### 🚀 改善項目

- **[資料庫]**
  - 為文字欄位新增修剪選項 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) - 作者：@mytharcher

  - 為字串欄位新增修剪選項 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) - 作者：@mytharcher

- **[客戶端]** 支援根據版面配置設定表單欄位標籤中冒號的顯示 ([#6561](https://github.com/nocobase/nocobase/pull/6561)) - 作者：@katherinehhh

- **[檔案管理員]** 為儲存集合的文字欄位新增修剪選項 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) - 作者：@mytharcher

- **[工作流程]** 改善程式碼 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) - 作者：@mytharcher

- **[工作流程：審核]** 支援使用區塊範本作為審核流程表單 - 作者：@mytharcher

### 🐛 錯誤修復

- **[資料庫]**
  - 避免在更新記錄時，若「datetimeNoTz」欄位值未變更卻仍被修改 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) - 作者：@mytharcher

  - 刪除一對多記錄時，若同時傳遞 `filter` 與 `filterByTk`，且 `filter` 包含關聯欄位，則 `filterByTk` 會被忽略 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) - 作者：@2013xile

- **[客戶端]**
  - 修復當 `SchemaInitializerItem` 包含 `items` 時，`disabled` 屬性無法正常運作的問題 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) - 作者：@mytharcher

  - 級聯問題：刪除後重新選取時出現「xxx 的值不能為陣列格式」的錯誤 ([#6585](https://github.com/nocobase/nocobase/pull/6585)) - 作者：@katherinehhh

  - 關聯欄位（選擇）在暴露相關集合欄位時顯示為「不適用」([#6582](https://github.com/nocobase/nocobase/pull/6582)) - 作者：@katherinehhh

  - 提交與重新整理按鈕未能正確顯示僅圖示模式 ([#6592](https://github.com/nocobase/nocobase/pull/6592)) - 作者：@katherinehhh

- **[公開表單]** 檢視權限包含列表與取得 ([#6607](https://github.com/nocobase/nocobase/pull/6607)) - 作者：@chenos

- **[驗證]** `AuthProvider` 中的令牌指派 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) - 作者：@2013xile

- **[集合欄位：多對多（陣列）]** 透過多對多（陣列）欄位在關聯集合中進行欄位篩選的問題 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) - 作者：@2013xile

- **[工作流程]** 修復同步選項顯示不正確的問題 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) - 作者：@mytharcher

- **[區塊：地圖]** 地圖管理驗證不應允許僅輸入空白 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) - 作者：@katherinehhh

- **[驗證：OIDC]** 當回呼路徑為字串 'null' 時，發生不正確的重新導向 - 作者：@2013xile

- **[工作流程：審核]**
  - 修正在審核表單中使用客戶端變數的問題 - 作者：@mytharcher

  - 修正在 `endOnReject` 設定為 `true` 時的分支模式 - 作者：@mytharcher

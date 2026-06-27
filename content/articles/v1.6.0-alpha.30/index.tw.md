---
title: "NocoBase v1.6.0-alpha.30：時間欄位支援時間格式"
description: "v1.6.0-alpha.30 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 為選單項目與表格標題新增工具提示設定 ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038

  - 時間欄位支援時間格式 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh

- **[資料視覺化]** 圖表查詢支援 NULLS 排序 ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile

- **[AI 整合]** 新插件：AI 整合 ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
參考：[AI 整合](https://docs.nocobase.com/handbook/ai/service)
- **[驗證]** 支援使用者綁定多種驗證類型，例如簡訊與 TOTP 驗證器，以及在必要場景中進行身分驗證。啟用驗證方法的開發與擴展。([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
參考：[驗證](https://docs.nocobase.com/handbook/verification)
- **[AI 整合 (EE)]** 新插件：AI 整合 (EE) by @2013xile
參考：[AI 整合](https://docs.nocobase.com/handbook/ai/service)
- **[雙重驗證 (2FA)]** 新插件：雙重驗證與驗證：TOTP 驗證器 by @2013xile
參考：[雙重驗證 (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[驗證：TOTP 驗證器](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 改進

- **[客戶端]**
  - 為按鈕新增防抖處理 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038

  - 使選單能根據螢幕寬度自適應 ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe

- **[伺服器]** 升級 koa 至 2.15.4；升級 @koa/cors 至 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile

- **[工作流程]**
  - 允許在資料庫事件中跳過觸發集合工作流程 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher

  - 延遲載入工作結果以提升效能 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

- **[區塊：範本]** 支援從頁面將資料區塊儲存為區塊範本 ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust

- **[工作流程：聚合節點]** 為基於雙精度型別的聚合數字新增四捨五入處理 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

- **[動作：匯入記錄 Pro]** 支援 Pro 匯入按鈕中的進階選項 by @katherinehhh

- **[工作流程：JavaScript]** 支援從絕對路徑引入套件 by @mytharcher

- **[檔案儲存：S3 (Pro)]** 若找不到儲存空間，嘗試重新載入儲存設定 by @jiannx

### 🐛 錯誤修復

- **[客戶端]**
  - 選單標題的自訂翻譯無效 ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe

  - 繼承集合欄位缺少排序設定 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh

  - 篩選表單中時間欄位的格式不正確 ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh

  - 與時區相關的問題導致日期選擇器少了一小時 ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh

  - 附件欄位儲存設定的下拉選單未顯示選項 ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh

  - 隱藏標籤時，子表單元件未與主表單對齊 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh

  - 修復建立檔案集合時拋出的錯誤 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher

  - 解決開啟包含全高區塊的頁面頁籤時的捲軸問題 ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh

  - 載入期間，具有自訂 favicon 的頁面會短暫閃現 NocoBase favicon ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe

  - 在集合繼承的彈窗中，關聯區塊未渲染 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh

  - 在關聯欄位唯讀模式下，懸停時出現「新增」按鈕 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh

- **[認證]** 避免在 WebSocket 授權期間更新 Token。([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66

- **[資料庫]** 修復當關聯欄位中的來源鍵為數字字串時，擷取關聯集合記錄的錯誤 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile

- **[WEB 客戶端]**
  - 將頁面新增至路由表後，頁面顯示為空白 ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe

  - 在路由管理表中新增頁籤頁面未生效 ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe

- **[存取控制]** 在權限管理表中，頁籤頁面名稱為空 ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe

- **[使用者]**
  - 沒有使用者管理權限的使用者檢視自己的個人資料時出現「無權限」錯誤 ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile

  - 在使用者管理中更新系統設定時出現「無權限」錯誤 ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile

  - 使用者權限管理表首次載入時，錯誤 UI 短暫閃現 ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe

- **[AI 整合]** LLM 提供者的預設 `baseURL` 為 `undefined` 的問題 ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile

- **[工作流程]** 修復取得工作時的 ACL ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher

- **[區塊：地圖]** 地圖欄位的設定選項遺失/不可見 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe

- **[行動端]** 頁面錯誤：無法讀取 null 的屬性（讀取 'match'）([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe

- **[區塊：動作面板]** 設定動作面板的高度無效 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe

- **[工作流程：自訂動作事件]**
  - 修復執行後的地區設定與集合可修改問題 by @mytharcher

  - 修復綁定自訂動作工作流程的舊版按鈕遷移問題 by @mytharcher

- **[自訂品牌]** 載入期間，具有自訂 favicon 的頁面會短暫閃現 NocoBase favicon by @zhangzhonghe

- **[動作：匯入記錄 Pro]**
  - 使用額外選項來決定是否觸發工作流程 by @mytharcher

  - 關聯區塊匯入按鈕的重複記錄偵測在欄位下拉選單中未顯示資料 by @katherinehhh

- **[動作：匯出記錄 Pro]**
  - Pro 匯出動作缺少排序參數 by @katherinehhh

  - 移除匯出附件按鈕設定中的「新增區塊」選項 by @katherinehhh

- **[範本列印]** 當同時啟用動作範本列印與備份管理員插件時，從本機還原失敗 by @gchust

- **[工作流程：審批]**
  - 修復舊版區塊的遷移問題 by @mytharcher

  - 修復 `.toJSON()` 導致的錯誤 by @mytharcher

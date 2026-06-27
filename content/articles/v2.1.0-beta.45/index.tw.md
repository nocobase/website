---
title: "NocoBase v2.1.0-beta.45：改進了 CLI 中的託管應用程式和插件管理"
description: "v2.1.0-beta.45 的發行說明"
---

### 🎉 新功能

- **[undefined]** 改進了 CLI 中的受管應用程式與外掛管理，包括支援 appPath 感知的環境處理、外掛匯入、授權外掛同步及相關文件更新。([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
  參考：[CLI 文件](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli)、[快速入門](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[區塊：甘特圖]** 為甘特圖區塊新增預設聚焦於今日的選項。([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx
- **[IdP：OAuth]** 為多應用部署中的應用單一登入新增基礎支援。([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile
- **[應用 SSO]** 新增應用 SSO 外掛，用於應用之間的自動登入。by @2013xile
- **[多空間]** 為多空間外掛新增客戶端 v2 支援，包括空間切換與空間管理。by @jiannx
- **[應用監管]** 為子應用新增應用 SSO 設定。by @2013xile

### 🚀 改進

- **[伺服器]** 現代客戶端現在透過 `/v/` 而非 `/v2/` 提供服務。([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn
- **[ai]** 升級 `xlsx` 版本以避免安全性問題。([#9675](https://github.com/nocobase/nocobase/pull/9675)) by @mytharcher
- **[多關鍵字篩選]** 將多關鍵字篩選遷移至客戶端 v2。([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust
- **[工作流]** 移除工作流歷史記錄交易與工作流執行之間的耦合。([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher
- **[UI 模板]** 將 UI 模板遷移至客戶端 v2。([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust
- **[部門]** 新增 v2 設定頁面，用於管理部門、部門成員及使用者部門指派。([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx
- **[驗證：SAML 2.0]** SAML/CAS 登入重新導向現在遵循現代客戶端前綴。by @Molunerfinn
- **[動作：匯入記錄 Pro]** 升級 `xlsx` 版本以避免安全性問題。by @mytharcher
- **[工作流：子流程]** 移除子流程工作流指令中的工作流歷史記錄交易耦合。by @mytharcher
- **[驗證：OIDC]** OIDC 登入重新導向現在遵循現代客戶端前綴。by @Molunerfinn
- **[工作流：審批]** 移除審批工作流指令中的工作流歷史記錄交易耦合。by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復隱藏的連結欄位仍保留舊值的問題。([#9687](https://github.com/nocobase/nocobase/pull/9687)) by @zhangzhonghe
  - 修復在參照表單模板中儲存樹狀關聯欄位時出現的錯誤。([#9643](https://github.com/nocobase/nocobase/pull/9643)) by @zhangzhonghe
- **[客戶端-v2]**
  - 修復當自訂欄位寬度設為 0 時，v2 表格欄位變為不可見的問題。([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh
  - 調整所有關聯欄位選擇器，將關聯欄位限制為最多兩層。([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx
- **[動作：匯入記錄]** 修復匯入記錄收到重複排序值的問題。([#9684](https://github.com/nocobase/nocobase/pull/9684)) by @2013xile
- **[流程引擎]** 修復將參照模板區塊轉換為複製時導致錯誤的問題。([#9693](https://github.com/nocobase/nocobase/pull/9693)) by @gchust
- **[集合：SQL]** 封鎖 SQL 集合對敏感 PostgreSQL 元資料的存取。([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile
- **[工作流]** 修復在並行工作節點下重複分派工作流執行的問題。([#9673](https://github.com/nocobase/nocobase/pull/9673)) by @mytharcher
- **[區塊：地圖]** 修復在詳細頁面切換文字與地圖顯示模式時，地圖欄位值被錯誤轉換的問題。([#9653](https://github.com/nocobase/nocobase/pull/9653)) by @hongboji
- **[工作流：自訂動作事件]** 修復工作流觸發動作從工作台動作面板按鈕列表中遺失的問題。([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh
- **[AI 員工]**
  - 工作流 AI 員工節點現在可以使用預設模型。([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock
  - 隱藏前端訊息中的原始 LLM 提供者錯誤。([#9678](https://github.com/nocobase/nocobase/pull/9678)) by @cgyrock
- **[資料來源管理器]** 修復 v2 資料來源管理器中的多空間欄位本地化問題。([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx
- **[資料來源：REST API]** 修復因資料來源管理器客戶端-v2 型別宣告不匹配導致的 REST API 資料來源外掛宣告建置失敗問題。by @katherinehhh
- **[密碼政策]** 修復當底層錯誤無狀態碼時，登入失敗以「引數 #1 不支援的型別 undefined」掩蓋真實錯誤的問題。by @Molunerfinn
- **[工作流：審批]** 修復審批表單詳細資料中未顯示自訂欄位標題的問題。by @zhangzhonghe

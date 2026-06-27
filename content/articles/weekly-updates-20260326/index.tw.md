---
title: "每週更新｜AI 員工新增 SKILLS 能力"
description: "這是 NocoBase 在 2026 年 3 月 20 日至 3 月 26 日期間的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/en/blog/v2.0.26)

*發布日期：2026-03-25*

### 🚀 改進

- **[客戶端]** 優化表單操作的水平佈局 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx

### 🐛 錯誤修復

- **[流程引擎]** 當表單欄位被刪除時，同步狀態至欄位配置 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
- **[自訂變數]** 跳過身份驗證通知 ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos

### [v2.0.25](https://www.nocobase.com/en/blog/v2.0.25)

*發布日期：2026-03-24*

### 🚀 改進

- **[工作流：審批]** 修復 JSON 欄位在載入審批記錄列表時導致的效能問題 by @mytharcher

### 🐛 錯誤修復

- **[伺服器]** 將 Pub-Sub 的關閉時機更改為 `beforeStop`，以避免在資料庫關閉後發送或處理訊息 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
- **[本地化]** 防止在權限拒絕時發送 localizationTexts:missing 請求 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
- **[資料來源：外部 Oracle]** 修正在載入 Oracle 外部資料來源時發生的錯誤 by @2013xile

### [v2.0.24](https://www.nocobase.com/en/blog/v2.0.24)

*發布日期：2026-03-22*

### 🐛 錯誤修復

- **[資源管理器]** 修正外部資料來源無法正確載入的問題。 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
- **[操作：匯入記錄 Pro]** 修正在未勾選「觸發工作流」選項時，該選項不生效的問題 by @mytharcher

### [v2.0.23](https://www.nocobase.com/en/blog/v2.0.23)

*發布日期：2026-03-21*

### 🐛 錯誤修復

- **[資料庫]** 當任何附加參數無效時，使用警告而非錯誤 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
- **[工作流：審批]** 修復 v2 審批表單返回按鈕的翻譯、節點選擇和返回目標問題 by @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/en/blog/v2.0.22)

*發布日期：2026-03-20*

### 🐛 錯誤修復

- **[遷移管理器]** 修正在上傳遷移過程中，因目標環境尚未建立新資料表而導致遷移中斷的錯誤。 by @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/en/blog/v2.0.21)

*發布日期：2026-03-20*

### 🚀 改進

- **[工作流]** 新增過濾執行列表 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
- **[工作流：審批]** 當觸發器中未配置集合時，避免配置審批者 UI by @mytharcher

### 🐛 錯誤修復

- **[資源管理器]** 防止 `filterByTk` 參數陣列在超過 100 個項目時自動轉換為物件 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
- **[客戶端]** 修正非管理員無法清除關聯欄位值的問題 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
- **[操作：匯入記錄 Pro]**

  - 修正在同步模式下匯入時拋出錯誤的問題 by @mytharcher
  - 修正因串流被重複讀取，導致超過約 30 個欄位時匯入失敗的問題 by @mytharcher
- **[工作流：審批]** 修正新增受託人時的並發問題 by @mytharcher

### [v2.0.20](https://www.nocobase.com/en/blog/v2.0.20)

*發布日期：2026-03-19*

### 🐛 錯誤修復

- **[伺服器]** 修正工作進程發送的生命週期事件導致服務應用程式停止的問題 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
- **[資料來源管理器]** 修正由 AI 員工建立的集合始終缺少 `createBy` 和 `updateBy` 欄位的問題 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
- **[操作：匯入記錄 Pro]** 修正延遲匯入導致的 SES 錯誤 by @mytharcher
- **[範本列印]** 修正 SQL 集合列印錯誤 by @jiannx
- **[電子郵件管理器]** 修正當電子郵件不存在時的頁面錯誤 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/en/blog/v2.1.0-beta.11)

*發布日期：2026-03-20*

### 🚀 改進

- **[工作流]** 新增過濾執行列表 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
- **[工作流：審批]** 當觸發器中未配置集合時，避免配置審批者 UI by @mytharcher

### 🐛 錯誤修復

- **[伺服器]** 修正工作進程發送的生命週期事件導致服務應用程式停止的問題 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
- **[客戶端]** 修正非管理員無法清除關聯欄位值的問題 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
- **[資源管理器]** 防止 `filterByTk` 參數陣列在超過 100 個項目時自動轉換為物件 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
- **[操作：匯入記錄 Pro]**

  - 修正在同步模式下匯入時拋出錯誤的問題 by @mytharcher
  - 修正因串流被重複讀取，導致超過約 30 個欄位時匯入失敗的問題 by @mytharcher
- **[工作流：審批]** 修正新增受託人時的並發問題 by @mytharcher
- **[遷移管理器]** 修正在上傳遷移過程中，因目標環境尚未建立新資料表而導致遷移中斷的錯誤。 by @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/en/blog/v2.1.0-beta.10)

*發布日期：2026-03-19*

### 🎉 新功能

- **[AI 員工]**

  - 允許在子表格的彈出視窗中新增 AI 員工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
  - 定期清理 AI 對話檢查點資料。 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
- **[應用程式管理員]** 支援在應用程式列表中進行篩選<br />為啟動和停止操作新增確認對話框<br />按環境名稱對應用程式狀態條目進行排序 by @2013xile

### 🚀 改進

- **[伺服器]** 改進 pm add 邏輯 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
- **[未定義]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765
- **[客戶端]** 支援在關閉彈出視窗前顯示確認訊息。 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
- **[工作流]** 修正優雅關閉時未耗盡所有事件的問題 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
- **[非同步任務管理器]** 非同步任務新增支援工作進程發布錯誤訊息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 修正子表格中的「選擇記錄」彈出視窗在第二次開啟時無法正確載入的問題。 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
  - 修正某些欄位的預設值在重新整理頁面後未生效的問題。 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
- **[資料庫]** 修正日期欄位的伺服器端驗證問題 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
- **[資料來源管理器]** 修正由 AI 員工建立的集合始終缺少 `createBy` 和 `updateBy` 欄位的問題 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
- **[AI 員工]**

  - 修正文字嵌入模型呼叫中指定的 LLM 服務 URL 未生效的問題。 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  - 修正 AI 插件升級遷移腳本中潛在的未定義變數錯誤。 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
- **[本地化]** localizationTexts:missing 介面權限異常 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
- **[操作：匯入記錄 Pro]**

  - 修正子應用程式的 `beforeStop` 事件未觸發的問題 by @mytharcher
  - 修正延遲匯入導致的 SES 錯誤 by @mytharcher
  - 修正非同步匯入發生錯誤後，非同步任務未結束的問題 by @cgyrock
- **[AI：知識庫]** 防止正在使用的向量資料庫和向量儲存被刪除。 by @cgyrock
- **[範本列印]** 修正 SQL 集合列印錯誤 by @jiannx
- **[電子郵件管理器]** 修正當電子郵件不存在時的頁面錯誤 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/en/blog/v2.1.0-alpha.11)

*發布日期：2026-03-25*

### 🎉 新功能

- **[客戶端]** 新增 JS 項目操作 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
- **[AI 員工]** 為 AI 員工新增 SKILLS 能力。 ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock
- **[資料來源管理器]** 支援按需載入 MCP 工具 ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile

### 🚀 改進

- **[流程引擎]** 改進 UI 建置 API 的 schema 驗證。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[客戶端]** 優化表單操作的水平佈局 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx
- **[應用程式]** 新增基於 Rsbuild 的 client-v1 開發工作流程，同時保持本地插件開發和當前 `/v2/` 拓撲結構的相容性 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn
- **[集合欄位：中國行政區劃]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
- **[工作流]** 為所有觸發器和節點新增驗證 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher
- **[工作流：審批]** 修復 JSON 欄位在載入審批記錄列表時導致的效能問題 by @mytharcher

### 🐛 錯誤修復

- **[流程引擎]** 當表單欄位被刪除時，同步狀態至欄位配置 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
- **[資源管理器]** 修正外部資料來源無法正確載入的問題。 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
- **[資料庫]** 當任何附加參數無效時，使用警告而非錯誤 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
- **[伺服器]** 將 Pub-Sub 的關閉時機更改為 `beforeStop`，以避免在資料庫關閉後發送或處理訊息 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
- **[自訂變數]** 跳過身份驗證通知 ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos
- **[AI 員工]** 修正核心套件中 ai 模組失敗的測試案例。 ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock
- **[本地化]** 防止在權限拒絕時發送 localizationTexts:missing 請求 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
- **[操作：匯入記錄 Pro]** 修正在未勾選「觸發工作流」選項時，該選項不生效的問題 by @mytharcher
- **[資料來源：外部 Oracle]** 修正在載入 Oracle 外部資料來源時發生的錯誤 by @2013xile
- **[工作流：審批]** 修復 v2 審批表單返回按鈕的翻譯、節點選擇和返回目標問題 by @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/en/blog/v2.1.0-alpha.10)

*發布日期：2026-03-20*

### 🎉 新功能

- **[IdP：OAuth]** 新增 IdP：OAuth 插件，使 MCP 服務能夠透過 OAuth 進行身份驗證 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile
- **[AI 員工]** 定期清理 AI 對話檢查點資料。 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
- **[應用程式管理員]** 支援在應用程式列表中進行篩選<br />為啟動和停止操作新增確認對話框<br />按環境名稱對應用程式狀態條目進行排序 by @2013xile

### 🚀 改進

- **[伺服器]** 改進 pm add 邏輯 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
- **[客戶端]** 支援在關閉彈出視窗前顯示確認訊息。 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
- **[未定義]** 新增專用的 client-v2 入口，並使用 rsbuild 獨立建置，同時保持 v1 不變。 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn
- **[工作流]**

  - 修正優雅關閉時未耗盡所有事件的問題 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
  - 新增過濾執行列表 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
- **[非同步任務管理器]** 非同步任務新增支援工作進程發布錯誤訊息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock
- **[工作流：審批]** 當觸發器中未配置集合時，避免配置審批者 UI by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修正非管理員無法清除關聯欄位值的問題 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
  - 修正子表格中的「選擇記錄」彈出視窗在第二次開啟時無法正確載入的問題。 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
- **[資源管理器]** 防止 `filterByTk` 參數陣列在超過 100 個項目時自動轉換為物件 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
- **[伺服器]** 修正工作進程發送的生命週期事件導致服務應用程式停止的問題 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
- **[資料來源管理器]** 修正由 AI 員工建立的集合始終缺少 `createBy` 和 `updateBy` 欄位的問題 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
- **[AI 員工]**

  - 修正文字嵌入模型呼叫中指定的 LLM 服務 URL 未生效的問題。 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  - 修正 AI 插件升級遷移腳本中潛在的未定義變數錯誤。 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
- **[操作：匯入記錄 Pro]**

  - 修正因串流被重複讀取，導致超過約 30 個欄位時匯入失敗的問題 by @mytharcher
  - 修正在同步模式下匯入時拋出錯誤的問題 by @mytharcher
  - 修正子應用程式的 `beforeStop` 事件未觸發的問題 by @mytharcher
  - 修正非同步匯入發生錯誤後，非同步任務未結束的問題 by @cgyrock
  - 修正延遲匯入導致的 SES 錯誤 by @mytharcher
- **[範本列印]** 修正 SQL 集合列印錯誤 by @jiannx
- **[工作流：審批]** 修正新增受託人時的並發問題 by @mytharcher
- **[電子郵件管理器]** 修正當電子郵件不存在時的頁面錯誤 by @jiannx
- **[遷移管理器]** 修正在上傳遷移過程中，因目標環境尚未建立新資料表而導致遷移中斷的錯誤。 by @Andrew1989Y

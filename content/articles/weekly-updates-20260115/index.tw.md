---
title: "NocoBase 每週更新：支援 Gemini-3 模型"
description: "本週更新包括：支援 Gemini-3 模型及其函式呼叫思考簽章，以及更多內容。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支持續更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：截至目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要提供給測試用戶收集回饋並進一步優化功能。適合想搶先體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/en/blog/v1.9.36)

*發布日期：2026-01-10*

### 🚀 改進

- **[客戶端]** 透過改用原生 webkit css 實現文字省略，提升插件管理員列表的渲染效能 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

### 🐛 錯誤修復

- **[檔案管理]** 修復上傳至 S3 儲存空間的檔案，其檔案 URL 生成不正確的問題 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
- **[檔案儲存：S3(Pro)]** 修復檔案重新命名模式無法運作的問題 by @mytharcher
- **[工作流：審批]** 修復因缺少 `ValueBlock.Result` 元件導致數值區塊無法顯示的問題 by @mytharcher

### [v1.9.35](https://www.nocobase.com/en/blog/v1.9.35)

*發布日期：2026-01-09*

### 🚀 改進

- **[工作流：審批]** 簡化查詢參數，並提升效能 by @mytharcher

### 🐛 錯誤修復

- **[工作流：Webhook]** 修復在子應用程式中向 webhook URL 發送 POST 請求時拋出 404 錯誤的問題 by @mytharcher

### [v1.9.34](https://www.nocobase.com/en/blog/v1.9.34)

*發布日期：2026-01-08*

### 🚀 改進

- **[存取控制]** 改善修改巢狀關聯欄位時的權限檢查 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 錯誤修復

- **[客戶端]**

  - 修復來自外部資料來源的關聯欄位，在表單區塊中無法載入關聯資料的問題 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
  - 修復 `FilterAction` 元件中關聯欄位不正確的問題 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
- **[日誌]** 修復列印系統日誌時，額外的錯誤資訊被丟棄的問題 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
- **[工作流：循環節點]** 修復條件分支中失敗的節點無法將狀態傳遞給上層分支節點的問題 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
- **[資料來源：主資料庫]** 檢視集合元資料應包含來源欄位選項 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
- **[工作流]**

  - 修復工作流抄送節點詳情區塊中的聯動規則問題 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  - 為任務的 Snowflake ID 添加實例 ID，以避免叢集模式下的 ID 衝突問題 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
  - 修復工作流被刪除時，執行頁面崩潰的問題 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
- **[操作：匯入記錄]** 修復非同步 XLSX 匯入期間觸發唯一約束錯誤時，錯誤訊息不正確的問題 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
- **[存取控制]**

  - 允許關聯欄位使用目標鍵進行關聯 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
  - 修復處理關聯欄位權限時，資料來源解析不正確的問題 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
- **[資料來源：REST API]** 為請求上下文添加容錯處理，以避免在方法不存在於上下文中時拋出錯誤 by @mytharcher
- **[操作：匯出記錄 Pro]** 修復當主應用程式未啟用匯入/匯出 Pro 插件時，子應用程式執行非同步匯入/匯出任務出錯的問題 by @cgyrock
- **[工作流：審批]** 修復任務中心中篩選欄位無法正常運作的問題 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/en/blog/v2.0.0-beta.10)

*發布日期：2026-01-14*

### 🚀 改進

- **[客戶端]** 支援指定事件流程的執行時機。([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
- **[AI 員工]**

  - 優化 AI 入口按鈕 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  - 在入口列表中隱藏建構器 AI。<br/>優化 LLM 整合流程。<br/>更新關於 AI 模型 gemini-3 的文件。([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
- **[通知：應用內訊息]** 修復向大量用戶發送應用內訊息時的效能問題 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 數字輸入元件未顯示數值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos
  - 修復在建立表單中成功提交後，級聯選擇資料未被清除的問題 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - 修復提交按鈕在啟用確認功能時，跳過必填驗證不起作用的問題 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  - 解決一對一關聯欄位的檔案選擇彈出視窗中出現提交按鈕的問題 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  - 修復解決網格卡片區塊中佈局設定不生效的問題 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  - 修復在數字欄位中輸入中文字元時防止賦值的問題 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
- **[集合欄位：多對多（陣列）]** 修復在關聯查詢中附加二級多對多（陣列）關係時出錯的問題 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
- **[多空間]**

  - 新增關聯資料時的相關空間 by @jiannx
  - 空間選擇器顏色跟隨主題 by @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/en/blog/v2.0.0-beta.9)

*發布日期：2026-01-12*

### 🚀 改進

- **[客戶端]** 透過改用原生 webkit css 實現文字省略，提升插件管理員列表的渲染效能 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

### 🐛 錯誤修復

- **[檔案管理]** 修復上傳至 S3 儲存空間的檔案，其檔案 URL 生成不正確的問題 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
- **[工作流]** 修復複製節點中 schema ID 未更新的問題 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher
- **[檔案儲存：S3(Pro)]** 修復檔案重新命名模式無法運作的問題 by @mytharcher
- **[範本列印]** 修復配置範本彈出視窗被遮擋的問題 by @zhangzhonghe
- **[工作流：審批]** 修復因缺少 `ValueBlock.Result` 元件導致數值區塊無法顯示的問題 by @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/en/blog/v2.0.0-beta.8)

*發布日期：2026-01-09*

### 🚀 改進

- **[cli]** 支援透過環境變數配置 CDN 基礎 URL ([#8384](https://github.com/nocobase/nocobase/pull/8384)) by @chenos
- **[AI 員工]** 支援 Anthropic 和 Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) by @heziqiang

### 🐛 錯誤修復

- **[客戶端]** 修復可選 targetKey 的精煉邏輯 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
- **[工作流：審批]** 修復因參數錯誤導致載入不正確記錄的問題 by @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/en/blog/v2.0.0-beta.7)

*發布日期：2026-01-09*

### 🎉 新功能

- **[測試]** 為基礎任務管理器添加進程級並發控制 ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock
- **[AI 員工]** 支援具有函數呼叫思維簽章的 Gemini-3 模型 ([#8377](https://github.com/nocobase/nocobase/pull/8377)) by @heziqiang

### 🚀 改進

- **[流程引擎]** 為 GridModel 添加 `rowOrder` 以確保行排序一致 ([#8371](https://github.com/nocobase/nocobase/pull/8371)) by @zhangzhonghe
- **[AI 員工]**

  - 支援系統提示詞的自訂編輯與自動更新 ([#8378](https://github.com/nocobase/nocobase/pull/8378)) by @heziqiang
  - 改善 AI 對 LLM 服務和模型的錯誤處理 ([#8351](https://github.com/nocobase/nocobase/pull/8351)) by @heziqiang
- **[檔案管理]** 為在伺服器端獲取 OSS 檔案添加請求選項，以備需要額外參數或標頭 ([#8372](https://github.com/nocobase/nocobase/pull/8372)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修復關聯欄位從記錄選擇器元件切換為選擇元件後，仍可開啟彈出視窗的問題。([#8375](https://github.com/nocobase/nocobase/pull/8375)) by @gchust
  - 修復詳情區塊、編輯表單區塊和列表區塊在變更分頁後，聯動規則未重新執行的問題。([#8366](https://github.com/nocobase/nocobase/pull/8366)) by @gchust
  - 修復在來回切換欄位元件時，已配置的子表格/子表單欄位無法顯示的問題。([#8365](https://github.com/nocobase/nocobase/pull/8365)) by @gchust
- **[日誌]** 修復列印系統日誌時，額外的錯誤資訊被丟棄的問題 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
- **[區塊：範本（已棄用）]** 修復無法存取繼承範本（v1）編輯頁面的問題。([#8376](https://github.com/nocobase/nocobase/pull/8376)) by @gchust
- **[工作流]**

  - 為任務的 Snowflake ID 添加實例 ID，以避免叢集模式下的 ID 衝突問題 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
  - 修復工作流抄送節點詳情區塊中的聯動規則問題 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  - 修復工作流被刪除時，執行頁面崩潰的問題 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
- **[存取控制]** 修復處理關聯欄位權限時，資料來源解析不正確的問題 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
- **[資料來源：REST API]** 為請求上下文添加容錯處理，以避免在方法不存在於上下文中時拋出錯誤 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/en/blog/v2.0.0-alpha.64)

*發布日期：2026-01-08*

### 🎉 新功能

- **[AI 員工]** 支援具有函數呼叫思維簽章的 Gemini-3 模型 ([#8377](https://github.com/nocobase/nocobase/pull/8377)) by @heziqiang

### 🚀 改進

- **[AI 員工]**

  - 改善 AI 對 LLM 服務和模型的錯誤處理 ([#8351](https://github.com/nocobase/nocobase/pull/8351)) by @heziqiang
  - 支援系統提示詞的自訂編輯與自動更新 ([#8378](https://github.com/nocobase/nocobase/pull/8378)) by @heziqiang
- **[檔案管理]** 為在伺服器端獲取 OSS 檔案添加請求選項，以備需要額外參數或標頭 ([#8372](https://github.com/nocobase/nocobase/pull/8372)) by @mytharcher

### 🐛 錯誤修復

- **[日誌]** 修復列印系統日誌時，額外的錯誤資訊被丟棄的問題 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
- **[客戶端]**

  - 修復關聯欄位從記錄選擇器元件切換為選擇元件後，仍可開啟彈出視窗的問題。([#8375](https://github.com/nocobase/nocobase/pull/8375)) by @gchust
  - 修復詳情區塊、編輯表單區塊和列表區塊在變更分頁後，聯動規則未重新執行的問題。([#8366](https://github.com/nocobase/nocobase/pull/8366)) by @gchust
  - 修復在來回切換欄位元件時，已配置的子表格/子表單欄位無法顯示的問題。([#8365](https://github.com/nocobase/nocobase/pull/8365)) by @gchust
- **[工作流]**

  - 修復工作流抄送節點詳情區塊中的聯動規則問題 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  - 修復工作流被刪除時，執行頁面崩潰的問題 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
- **[存取控制]** 修復處理關聯欄位權限時，資料來源解析不正確的問題 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile

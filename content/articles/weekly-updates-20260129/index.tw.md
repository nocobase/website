---
title: "每週更新｜AI 聊天支援貼上檔案"
description: "這是 NocoBase 在 2026 年 1 月 22 日至 1 月 28 日期間的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.40](https://www.nocobase.com/en/blog/v1.9.40)

*發布日期：2026-01-25*

### 🚀 改進

- **[Office 檔案預覽器]** 在 Microsoft 上新增更多可預覽的檔案類型 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修復表單提交後 nanoid 欄位未重新產生的問題 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  - 修復清除級聯欄位時重複顯示必填驗證訊息的問題 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
- **[database]**

  - 修復重新載入資料表後使用 `empty` 運算子進行篩選時出現錯誤的問題 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
  - 修復：深度更新巢狀關聯 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
- **[檔案管理]** 修復從請求主體獲取的檔案名稱意外成為解碼字串的問題 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
- **[資料來源：主資料庫]** 修復從多對多關聯表區塊刪除記錄時，未遵守關聯欄位 `onDelete: 'restrict'` 約束的問題 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
- **[區塊：iframe]** 修復在 Iframe 中添加聚合變數時出現錯誤的問題 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
- **[工作流：Webhook]** 修復未配置主體解析時，主體資料遺失的問題 by @mytharcher
- **[範本列印]** 修復當角色為聯集時，列印按鈕權限邏輯不正確的問題。 by @jiannx
- **[工作流：審批]**

  - 修復並發導致執行重複恢復的問題 by @mytharcher
  - 修復將審批退回上一節點時，卻退回至起始節點的問題 by @mytharcher
- **[遷移管理器]** 修復因記錄遷移錯誤異常中包含過大的 SQL 語句，可能導致程序凍結的問題 by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.17](https://www.nocobase.com/en/blog/v2.0.0-beta.17)

*發布日期：2026-01-29*

### 🐛 錯誤修復

- **[client]** 修復與篩選相關的已知問題 ([#8514](https://github.com/nocobase/nocobase/pull/8514)) by @zhangzhonghe
- **[AI 員工]** 修復建置後系統無法啟動的問題 ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock
- **[AI：知識庫]** 修復建置後系統無法啟動的問題 by @cgyrock

### [v2.0.0-beta.16](https://www.nocobase.com/en/blog/v2.0.0-beta.16)

*發布日期：2026-01-27*

### 🎉 新功能

- **[client]** 新增子表格（彈窗編輯）欄位元件 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh
- **[工作流]** 新增移動節點的 API ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher

### 🚀 改進

- **[client]**

  - 防止更新單元格時整個表格重新渲染 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh
  - 改進對多子表單，使其初始化時包含一個預設項目，並避免在留空時建立記錄 ([#8458](https://github.com/nocobase/nocobase/pull/8458)) by @katherinehhh
- **[檔案管理]** 為檔案管理器新增可擴展的預覽器 ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher
- **[工作流]** 變更工作流子頁面的路由路徑，使所有工作流頁面位於 `/admin/settings/workflow` 前綴下 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修復篩選 DateTime 值時時間重複的問題 ([#8506](https://github.com/nocobase/nocobase/pull/8506)) by @zhangzhonghe
  - 修復在多重對多子表單欄位的聯動規則中，無法使用表單變數賦值的問題。 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust
  - 修復跨多層彈窗和跨區塊變更後，資料未重新整理的問題。 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust
  - 修復唯讀模式下的子詳情資料在編輯表單中無法正確顯示的問題 ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh
  - 修復可選 targetKey 的精煉邏輯 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
  - 修復可編輯子表格中關聯欄位 Select 的篩選參數不正確的問題 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh
- **[流程引擎]** 修復外部資料來源中，當 filterTargetKey 為單元素陣列時的 FilterByTK 問題 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh
- **[AI 員工]** 修復 AI 建模與資料來源管理之間可選欄位配置不一致的問題 ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock
- **[郵件管理器]** 選取文字時主體不會折疊。修復下載附件失敗的問題 by @jiannx

### [v2.0.0-beta.15](https://www.nocobase.com/en/blog/v2.0.0-beta.15)

*發布日期：2026-01-25*

### 🚀 改進

- **[Office 檔案預覽器]** 在 Microsoft 上新增更多可預覽的檔案類型 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

### 🐛 錯誤修復

- **[database]** 修復重新載入資料表後使用 `empty` 運算子進行篩選時出現錯誤的問題 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
- **[範本列印]** 修復當角色為聯集時，列印按鈕權限邏輯不正確的問題。 by @jiannx
- **[工作流：審批]** 修復在 1.x 審批記錄彈窗中拋出錯誤的問題 by @mytharcher
- **[遷移管理器]** 修復因記錄遷移錯誤異常中包含過大的 SQL 語句，可能導致程序凍結的問題 by @cgyrock

### [v2.0.0-beta.14](https://www.nocobase.com/en/blog/v2.0.0-beta.14)

*發布日期：2026-01-23*

### 🎉 新功能

- **[AI 員工]** 支援在 AI 聊天中貼上檔案 ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang

### 🚀 改進

- **[client]**

  - 改進對多子表單，使其初始化時包含一個預設項目，並避免在留空時建立記錄 ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh
  - 改進子表格中附件欄位的上傳和編輯按鈕，以更好地引導使用者點擊上傳。 ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh
- **[流程引擎]** 改進 runjs 中的 ctx.libs 以支援按需載入，並新增預定義庫：lodash、math 和 formula。 ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust
- **[錯誤處理器]** 清理 SQL 引用錯誤 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile
- **[工作流：審批]** 實作 API 存取控制以防止未經授權的資料操作 by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修復富文字編輯器彈出層被遮擋的問題 ([#8443](https://github.com/nocobase/nocobase/pull/8443)) by @zhangzhonghe
  - 修復篩選 DateTime 值時時間重複的問題 ([#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe
  - 修復表單提交後 nanoid 欄位未重新產生的問題 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  - 修復清除級聯欄位時重複顯示必填驗證訊息的問題 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
  - 篩選列表以移除重複項 ([#8431](https://github.com/nocobase/nocobase/pull/8431)) by @jiannx
  - 修復在 Chrome 144 中配置選單不顯示的問題 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
- **[database]**

  - 修復：深度更新巢狀關聯 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
- **[server]** 修復通用依賴中 `mathjs` 的版本 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
- **[流程引擎]** 修復連續開啟聯動規則配置和事件流配置彈窗後，關閉內嵌彈窗導致錯誤的問題。 ([#8368](https://github.com/nocobase/nocobase/pull/8368)) by @gchust
- **[資料來源：主資料庫]** 修復從多對多關聯表區塊刪除記錄時，未遵守關聯欄位 `onDelete: 'restrict'` 約束的問題 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
- **[非同步任務管理器]** 修復非同步匯入觸發的工作流延遲執行的問題 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
- **[區塊：iframe]** 修復在 Iframe 中添加聚合變數時出現錯誤的問題 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
- **[UI 範本]** 修復參考範本區塊無法透過事件流設定設定資料範圍的問題。 ([#8472](https://github.com/nocobase/nocobase/pull/8472)) by @gchust
- **[檔案管理]** 修復從請求主體獲取的檔案名稱意外成為解碼字串的問題 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
- **[動作：匯入記錄 Pro]** 修復非同步匯入觸發的工作流延遲執行的問題 by @mytharcher
- **[工作流：Webhook]** 修復未配置主體解析時，主體資料遺失的問題 by @mytharcher
- **[範本列印]** 從列印範本配置中移除頁尾按鈕 by @katherinehhh
- **[工作流：審批]**

  - 修復將審批退回上一節點時，卻退回至起始節點的問題 by @mytharcher
  - 修復並發導致執行重複恢復的問題 by @mytharcher
  - 修復審批任務卡片上不顯示欄位的問題 by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.68](https://www.nocobase.com/en/blog/v2.0.0-alpha.68)

*發布日期：2026-01-27*

### 🎉 新功能

- **[工作流]** 新增移動節點的 API ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher

### [v2.0.0-alpha.67](https://www.nocobase.com/en/blog/v2.0.0-alpha.67)

*發布日期：2026-01-26*

### 🎉 新功能

- **[server]** 重構應用程式管理器以支援跨不同場景的多應用管理 ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile
- **[client]** 新增子表格（彈窗編輯）欄位元件 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh
- **[AI 員工]** 支援在 AI 聊天中貼上檔案 ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang

### 🚀 改進

- **[client]**

  - 改進子表格中附件欄位的上傳和編輯按鈕，以更好地引導使用者點擊上傳。 ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh
  - 改進對多子表單，使其初始化時包含一個預設項目，並避免在留空時建立記錄 ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh
- **[流程引擎]** 改進 runjs 中的 ctx.libs 以支援按需載入，並新增預定義庫：lodash、math 和 formula。 ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust
- **[server]** 支援配置 CORS 來源白名單 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
- **[檔案管理]** 為檔案管理器新增可擴展的預覽器 ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher
- **[Office 檔案預覽器]** 在 Microsoft 上新增更多可預覽的檔案類型 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher
- **[錯誤處理器]** 清理 SQL 引用錯誤 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile
- **[動作：匯出記錄]** 根據選取的記錄或資源篩選器改進匯出動作的資料範圍 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh
- **[動作：匯出記錄 Pro]** 根據選取的記錄或資源篩選器改進匯出動作的資料範圍 by @katherinehhh
- **[工作流：審批]** 實作 API 存取控制以防止未經授權的資料操作 by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修復篩選 DateTime 值時時間重複的問題 ([#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe
  - 修復表單提交後 nanoid 欄位未重新產生的問題 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  - 修復富文字編輯器彈出層被遮擋的問題 ([#8443](https://github.com/nocobase/nocobase/pull/8443)) by @zhangzhonghe
  - 篩選列表以移除重複項 ([#8431](https://github.com/nocobase/nocobase/pull/8431)) by @jiannx
  - 修復清除級聯欄位時重複顯示必填驗證訊息的問題 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
  - 修復在 Chrome 144 中配置選單不顯示的問題 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
  - 修復唯讀模式下的子詳情資料在編輯表單中無法正確顯示的問題 ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh
  - 修復「自訂變數」彈出層被遮擋的問題 ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe
  - 修復資料表欄位分組排序設定未生效的問題。 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  - 修復表格「欄位設定」按鈕無效的問題 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  - 修復檔案關聯欄位的選擇器彈窗 z-index 不正確，且彈窗配置無法正確儲存的問題。 ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust
  - 修復在圖形化介面中編輯資料表時的問題 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
- **[database]**

  - 修復重新載入資料表後使用 `empty` 運算子進行篩選時出現錯誤的問題 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
  - 修復：深度更新巢狀關聯 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
- **[server]** 修復通用依賴中 `mathjs` 的版本 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
- **[流程引擎]**

  - 修復連續開啟聯動規則配置和事件流配置彈窗後，關閉內嵌彈窗導致錯誤的問題。 ([#8368](https://github.com/nocobase/nocobase/pull/8368)) by @gchust
  - 修復重複點擊配置選單可能開啟多個配置彈窗的問題。 ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust
  - 修復 runjs 程式碼參數中的變數在執行前被解析的問題。 ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust
  - 修復在資料選擇器的快速建立彈窗中無法選取彈窗變數的問題。 ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust
- **[AI 員工]** 修復 AI 建模與資料來源管理之間可選欄位配置不一致的問題 ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock
- **[資料來源：主資料庫]** 修復從多對多關聯表區塊刪除記錄時，未遵守關聯欄位 `onDelete: 'restrict'` 約束的問題 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
- **[區塊：iframe]** 修復在 Iframe 中添加聚合變數時出現錯誤的問題 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
- **[非同步任務管理器]** 修復非同步匯入觸發的工作流延遲執行的問題 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
- **[檔案管理]** 修復從請求主體獲取的檔案名稱意外成為解碼字串的問題 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
- **[UI 範本]** 修復參考範本區塊無法透過事件流設定設定資料範圍的問題。 ([#8472](https://github.com/nocobase/nocobase/pull/8472)) by @gchust
- **[行動端（已棄用）]** 棄用的行動端外掛（從 2.0 版本開始由 ui-layout 外掛取代）。 ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos
- **[動作：匯入記錄 Pro]** 修復非同步匯入觸發的工作流延遲執行的問題 by @mytharcher
- **[工作流：Webhook]** 修復未配置主體解析時，主體資料遺失的問題 by @mytharcher
- **[範本列印]**

  - 修復當角色為聯集時，列印按鈕權限邏輯不正確的問題。 by @jiannx
  - 從列印範本配置中移除頁尾按鈕 by @katherinehhh
- **[工作流：審批]**

  - 修復審批任務卡片上不顯示欄位的問題 by @zhangzhonghe
  - 修復將審批退回上一節點時，卻退回至起始節點的問題 by @mytharcher
  - 修復並發導致執行重複恢復的問題 by @mytharcher
  - 修復在 1.x 審批記錄彈窗中拋出錯誤的問題 by @mytharcher
- **[郵件管理器]**

  - 修復郵件配置彈窗被遮擋的問題 by @zhangzhonghe
  - 修復多個使用者之間同一信箱中郵件的問題並最佳化效能 by @jiannx
- **[遷移管理器]** 修復因記錄遷移錯誤異常中包含過大的 SQL 語句，可能導致程序凍結的問題 by @cgyrock

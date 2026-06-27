---
title: "NocoBase v2.0.0-alpha.67：新增子表格（彈出編輯）欄位元件"
description: "v2.0.0-alpha.67 版本發布說明"
---

### 🎉 新功能

- **[伺服器]** 重構應用程式管理員，以支援跨不同場景的多應用管理 ([#8043](https://github.com/nocobase/nocobase/pull/8043))，作者 @2013xile

- **[客戶端]** 新增子表格（彈窗編輯）欄位元件 ([#8280](https://github.com/nocobase/nocobase/pull/8280))，作者 @katherinehhh

- **[AI 員工]** 支援在 AI 聊天中貼上檔案 ([#8487](https://github.com/nocobase/nocobase/pull/8487))，作者 @heziqiang

### 🚀 改進

- **[客戶端]**
  - 改進子表格中附件欄位的上傳與編輯按鈕，以更好地引導使用者點擊上傳。([#8474](https://github.com/nocobase/nocobase/pull/8474))，作者 @katherinehhh

  - 改進多對一子表單，使其初始化時包含一個預設項目，並在留空時避免建立記錄 ([#8473](https://github.com/nocobase/nocobase/pull/8473))，作者 @katherinehhh

  - 改進多對一子表單，使其初始化時包含一個預設項目，並在留空時避免建立記錄 ([#8458](https://github.com/nocobase/nocobase/pull/8458))，作者 @katherinehhh

- **[流程引擎]** 改進 runjs 中的 ctx.libs 以支援按需載入，並新增預設函式庫：lodash、math 和 formula。([#8468](https://github.com/nocobase/nocobase/pull/8468))，作者 @gchust

- **[伺服器]** 支援設定 CORS 來源白名單 ([#8454](https://github.com/nocobase/nocobase/pull/8454))，作者 @2013xile

- **[檔案管理員]** 為檔案管理員新增可擴展的預覽器 ([#8501](https://github.com/nocobase/nocobase/pull/8501))，作者 @mytharcher

- **[Office 檔案預覽器]** 在 Microsoft 上新增更多可預覽的檔案類型 ([#8500](https://github.com/nocobase/nocobase/pull/8500))，作者 @mytharcher

- **[錯誤處理器]** 清理 SQL 參考錯誤 ([#8464](https://github.com/nocobase/nocobase/pull/8464))，作者 @2013xile

- **[動作：匯出記錄]** 根據選取的記錄或資源篩選器，改進匯出動作的資料範圍 ([#8442](https://github.com/nocobase/nocobase/pull/8442))，作者 @katherinehhh

- **[動作：匯出記錄 Pro]** 根據選取的記錄或資源篩選器，改進匯出動作的資料範圍，作者 @katherinehhh

- **[工作流：審批]** 實作 API 的存取控制，以防止未經授權的資料操作，作者 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復篩選 DateTime 值時時間重複的問題 ([#8506](https://github.com/nocobase/nocobase/pull/8506))，作者 @zhangzhonghe

  - 修復篩選 DateTime 值時時間重複的問題 ([#8484](https://github.com/nocobase/nocobase/pull/8484))，作者 @zhangzhonghe

  - 修復表單提交後 nanoid 欄位未重新產生的問題 ([#8491](https://github.com/nocobase/nocobase/pull/8491))，作者 @katherinehhh

  - 修復富文本編輯器彈出視窗被遮擋的問題 ([#8443](https://github.com/nocobase/nocobase/pull/8443))，作者 @zhangzhonghe

  - 篩選列表以移除重複項 ([#8431](https://github.com/nocobase/nocobase/pull/8431))，作者 @jiannx

  - 修復清除級聯欄位時重複顯示必填驗證訊息的問題 ([#8476](https://github.com/nocobase/nocobase/pull/8476))，作者 @katherinehhh

  - 修復在 Chrome 144 中設定選單不顯示的問題 ([#8470](https://github.com/nocobase/nocobase/pull/8470))，作者 @zhangzhonghe

  - 修復唯讀模式下的子詳細資料在編輯表單中無法正確顯示的問題 ([#8469](https://github.com/nocobase/nocobase/pull/8469))，作者 @katherinehhh

  - 修復「自訂變數」彈出視窗被遮擋的問題 ([#8463](https://github.com/nocobase/nocobase/pull/8463))，作者 @zhangzhonghe

  - 修復資料表欄位分組排序設定未生效的問題。([#8453](https://github.com/nocobase/nocobase/pull/8453))，作者 @katherinehhh

  - 修復表格「欄位設定」按鈕無效的問題 ([#8441](https://github.com/nocobase/nocobase/pull/8441))，作者 @zhangzhonghe

  - 修復檔案關聯欄位的選擇器彈窗 z-index 不正確，以及彈窗設定無法正確儲存的問題。([#8446](https://github.com/nocobase/nocobase/pull/8446))，作者 @gchust

  - 修復在圖形化介面中編輯資料表時的問題 ([#8451](https://github.com/nocobase/nocobase/pull/8451))，作者 @katherinehhh

- **[資料庫]**
  - 修復重新載入資料表後，使用 `empty` 運算子進行篩選時出現錯誤 ([#8496](https://github.com/nocobase/nocobase/pull/8496))，作者 @2013xile

  - 修復：深度更新巢狀關聯 ([#8492](https://github.com/nocobase/nocobase/pull/8492))，作者 @chenos

  - 修復：深度更新巢狀關聯 ([#8492](https://github.com/nocobase/nocobase/pull/8492))，作者 @chenos

- **[伺服器]** 修復通用依賴中 `mathjs` 的版本 ([#8475](https://github.com/nocobase/nocobase/pull/8475))，作者 @mytharcher

- **[流程引擎]**
  - 修復連續開啟聯動規則設定與事件流程設定彈窗後，關閉內嵌彈窗導致錯誤的問題。([#8368](https://github.com/nocobase/nocobase/pull/8368))，作者 @gchust

  - 修復重複點擊設定選單可能開啟多個設定彈窗的問題。([#8448](https://github.com/nocobase/nocobase/pull/8448))，作者 @gchust

  - 修復 runjs 程式碼參數中的變數在執行前就被解析的問題。([#8445](https://github.com/nocobase/nocobase/pull/8445))，作者 @gchust

  - 修復在資料選擇器的快速建立彈窗中無法選取彈窗變數的問題。([#8450](https://github.com/nocobase/nocobase/pull/8450))，作者 @gchust

- **[AI 員工]** 修復 AI 建模與資料來源管理之間可選欄位設定不一致的問題 ([#8488](https://github.com/nocobase/nocobase/pull/8488))，作者 @cgyrock

- **[資料來源：主要]** 修復從多對多關聯表區塊刪除記錄時，未遵守關聯欄位 `onDelete: 'restrict'` 約束的問題 ([#8493](https://github.com/nocobase/nocobase/pull/8493))，作者 @2013xile

- **[區塊：iframe]** 修復在 Iframe 中新增彙總變數時的錯誤 ([#8482](https://github.com/nocobase/nocobase/pull/8482))，作者 @zhangzhonghe

- **[非同步任務管理器]** 修復非同步匯入觸發的工作流延遲執行的問題 ([#8478](https://github.com/nocobase/nocobase/pull/8478))，作者 @mytharcher

- **[檔案管理員]** 修復從請求主體取得的檔案名稱意外成為解碼字串的問題 ([#8481](https://github.com/nocobase/nocobase/pull/8481))，作者 @mytharcher

- **[UI 模板]** 修復參考模板區塊無法透過事件流程設定資料範圍的問題。([#8472](https://github.com/nocobase/nocobase/pull/8472))，作者 @gchust

- **[行動端（已棄用）]** 棄用行動端外掛（自 2.0 版本起由 ui-layout 外掛取代）。([#8456](https://github.com/nocobase/nocobase/pull/8456))，作者 @chenos

- **[動作：匯入記錄 Pro]** 修復非同步匯入觸發的工作流延遲執行的問題，作者 @mytharcher

- **[工作流：Webhook]** 修復未設定主體解析時，主體資料遺失的問題，作者 @mytharcher

- **[模板列印]**
  - 修復角色聯集時，列印按鈕權限邏輯不正確的問題。作者 @jiannx

  - 從列印模板設定中移除頁尾按鈕，作者 @katherinehhh

- **[工作流：審批]**
  - 修復審批任務卡片上不顯示欄位的問題，作者 @zhangzhonghe

  - 修復將審批退回至上一個節點，但卻退回至起始節點的問題，作者 @mytharcher

  - 修復並發導致執行重複恢復的問題，作者 @mytharcher

  - 修復在 1.x 審批記錄彈窗中拋出錯誤的問題，作者 @mytharcher

- **[電子郵件管理員]**
  - 修復郵件設定彈窗被遮擋的問題，作者 @zhangzhonghe

  - 修復多個使用者之間同一信箱的郵件問題，並最佳化效能，作者 @jiannx

- **[遷移管理員]** 修復因記錄遷移錯誤例外中包含的過大 SQL 陳述式，可能導致的程序凍結問題，作者 @cgyrock

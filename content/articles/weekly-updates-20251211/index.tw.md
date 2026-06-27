---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：在主題編輯器中支援自訂全域樣式，以及在詳細區塊中支援設定預設排序規則等。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/en/blog/v1.9.24)

*發布日期：2025-12-09*

### 🐛 錯誤修復

- **[客戶端]** 修復 `RemoteSelect` 元件在值為 null 時錯誤載入記錄的問題 ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher
- **[集合欄位：序號]** 提升 plugin-field-sequence 在處理修復指令時的穩健性 ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock
- **[通知：電子郵件]** 修復電子郵件通知連線限制問題 ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

### [v1.9.23](https://www.nocobase.com/en/blog/v1.9.23)

*發布日期：2025-12-09*

### 🚀 改進

- **[認證]** 修復 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
- **[操作：匯入記錄]** 允許為匯入欄位選擇 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh

### 🐛 錯誤修復

- **[伺服器]** 修復匯入資料後，觸發的工作流程未加入處理佇列的問題，確保工作流程在匯入後能立即按預期執行 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher

### [v1.9.21](https://www.nocobase.com/en/blog/v1.9.21)

*發布日期：2025-12-07*

### 🚀 改進

- **[審計日誌]** 將唯一識別碼欄位更新為 `text` 類型，以防止大量編輯時識別碼長度溢出 by @2013xile

### 🐛 錯誤修復

- **[工作流程：審批]** 修復在 ACL 範圍變數下載入相關審批時無資料的問題 by @mytharcher

### [v1.9.20](https://www.nocobase.com/en/blog/v1.9.20)

*發布日期：2025-12-05*

### 🎉 新功能

- **[集合欄位：序號]** 資料遷移後自動更新序號欄位 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 改進

- **[遷移管理器]** 資料遷移後自動更新序號欄位 by @cgyrock

### 🐛 錯誤修復

- **[工作流程]** 修復在執行畫布中刪除節點時拋出錯誤的問題 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
- **[工作流程：審批]** 修復在僅聯合角色模式下載入相關審批時拋出錯誤的問題 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/en/blog/v1.9.0-beta.18)

*發布日期：2025-12-09*

### 🎉 新功能

- **[集合欄位：序號]** 資料遷移後自動更新序號欄位 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock
- **[資料來源：REST API]** 在 RESTful API 資料來源配置中新增 `錯誤訊息轉換器` 選項 by @cgyrock
- **[認證：OIDC]** 支援在未認證時自動重新導向至 SSO URL by @heziqiang

### 🚀 改進

- **[認證]** 修復 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
- **[客戶端]**

  - 在 Select 元件中，滑鼠懸停時顯示折疊的選項 ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh
  - 優化子表格的驗證訊息 ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh
  - 為更新記錄和刪除記錄操作按鈕新增載入狀態，避免重複請求 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher
  - 在訊息內容中使用三層大括號（`{{{` 和 `}}}`）作為變數，以避免變數被 Handlebars 跳脫 ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher
- **[操作：匯入記錄]** 允許為匯入欄位選擇 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh
- **[工作流程]** 為 UserSelect 新增「主要」資料來源上下文，以提供一個更通用的元件，可在其他地方使用 ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher
- **[集合欄位：Markdown(Vditor)]** 調整 vditor 全螢幕內容寬度 ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh
- **[非同步任務管理器]** 增強非同步任務的錯誤訊息，為用戶提供任務失敗的具體原因 ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher
- **[操作：匯入記錄 Pro]** 增強非同步任務的錯誤訊息，為用戶提供任務失敗的具體原因 by @mytharcher
- **[工作流程：審批]**

  - 修復 AssigneeSelect 中的變數選擇，限制只能選擇用戶集合的主鍵或外鍵 by @mytharcher
  - 使用通用元件以減少重複程式碼 by @mytharcher
  - 使手動執行（或由子流程節點觸發）的負載與記錄或主鍵相容。避免觸發上下文中的一致性問題。 by @mytharcher
  - 減少審批彈窗中載入的關聯，以提供更好的效能 by @mytharcher
- **[審計日誌]** 將唯一識別碼欄位更新為 `text` 類型，以防止大量編輯時識別碼長度溢出 by @2013xile
- **[遷移管理器]** 資料遷移後自動更新序號欄位 by @cgyrock

### 🐛 錯誤修復

- **[伺服器]** 修復匯入資料後，觸發的工作流程未加入處理佇列的問題，確保工作流程在匯入後能立即按預期執行 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher
- **[acl]** 修復當外部資料來源權限範圍使用與當前用戶相關的變數時，ACL 元資訊不正確的問題 ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile
- **[客戶端]**

  - 修復 Variable.Input 中的延遲載入錯誤，該錯誤會導致變數選項選單錯誤地重新渲染 ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher
  - 解決在關聯樹表區塊中新增子記錄時的錯誤 ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh
  - 修復聯動規則下拉選擇框閃爍的問題 ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe
  - 避免開啟預設值設定時拋出錯誤 ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher
  - 修復使用 Iframe 時的路由問題 ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe
  - 修復遠端選擇元件對於非物件值未顯示正確標籤的問題 ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh
- **[資料庫]** 修復：移除僅時間欄位在時間轉換中的 UTC 處理，以防止時區導致的偏移。 ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu
- **[操作：匯入記錄]**

  - 匯入的欄位與 ACL 設定中設定的欄位不匹配 ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile
  - 修復當匯入的 xlsx 中欄位值為 `null` 時拋出錯誤的問題 ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher
  - 修復在樹表中匯入資料時的問題 ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock
- **[工作流程]**

  - 修復當節點上的任務未定義時，執行頁面拋出錯誤的問題 ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher
  - 修復在執行畫布中刪除節點時拋出錯誤的問題 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
  - 修復訊息發布前佇列關閉的問題 ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher
  - 修復準備好的執行在停止前未發送到佇列的問題 ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher
  - 修復某些工作流程任務選單未顯示的問題 ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher
  - 修復任務連結到錯誤頁面的問題 ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher
  - 修復因提供者使用錯誤導致任務計數未顯示的問題 ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher
- **[多應用管理器]** 日誌級別設定未應用於子應用程式 ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile
- **[存取控制]** 為外部資料來源的關聯操作新增權限檢查中介軟體 ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile
- **[集合欄位：多對多（陣列）]** 修復子表格中的 m2m 陣列欄位無法更新的問題 ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock
- **[主題編輯器]** 在行動裝置上啟用主題切換器 ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe
- **[資料視覺化]**

  - 外部資料來源集合的篩選欄位設定未顯示特定屬性 ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile
  - 解決圖表查詢不支援 ACL 資料範圍的問題 ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile
- **[集合：樹]** 修復因錯誤的樹父欄位查找導致路徑表更新失敗的問題 ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile
- **[工作流程：人工節點]** 修復人工任務計數不正確的問題 ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher
- **[非同步任務管理器]** 為 `asyncTasks` 集合新增遷移規則，避免非同步任務記錄被遷移 ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher
- **[資料來源管理器]** 修復資料庫密碼變更時資料來源密碼更新失敗的問題 ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock
- **[部門]** 修復部門關聯欄位無法編輯的問題 ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang
- **[工作流程：子流程]** 修復當工作流程數量超過 200 時，選取的工作流程顯示「N/A」的問題 by @mytharcher
- **[工作流程：審批]**

  - 修復語言檔案 by @mytharcher
  - 修復在返回分支中，審批記錄未包含在任務結果中的問題 by @mytharcher
  - 修復在 ACL 範圍變數下載入相關審批時無資料的問題 by @mytharcher
  - 修復因 `RemoteSelect` 變更導致獲取 `approvalRecords.reassignee` 時的權限問題 by @mytharcher
  - 修復在開啟模態視窗時重新整理頁面導致列印操作失效的問題 by @mytharcher
  - 新增遷移以避免在新增索引時出現重複記錄錯誤 by @mytharcher
  - 修復在包含順序和會簽的分支中流程不正確的問題 by @mytharcher
  - 修復用戶提交帶有評論的審批後，任務結果中的評論為空的問題 by @mytharcher
  - 修復用戶重新提交後，執行上下文中無申請人資料的問題 by @mytharcher
  - 修復在詳細抽屜中載入記錄相關審批時拋出權限錯誤的問題 by @mytharcher
  - 修復審批人彈出視窗未顯示標題的問題 by @zhangzhonghe
  - 修復在僅聯合角色模式下載入相關審批時拋出錯誤的問題 by @mytharcher
  - 修復列出審批時發生記憶體不足（OOM）的問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/en/blog/v2.0.0-alpha.52)

*發布日期：2025-12-07*

### 🎉 新功能

- **[客戶端]** 為多對多子表單新增新增/選擇/解除關聯設定的支援 ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh
- **[資料來源：REST API]** 在 RESTful API 資料來源配置中新增 `錯誤訊息轉換器` 選項 by @cgyrock

### 🚀 改進

- **[認證]** 修復 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
- **[操作：匯入記錄]**

  - 允許為匯入欄位選擇 ID ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh
  - 允許為匯入欄位選擇 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh
- **[工作流程：審批]** 變更 API 以獲取單個審批項目，並簡化程式碼 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修復防止子項禁用狀態阻止關聯欄位選擇的問題 ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh
  - 修復 `RemoteSelect` 元件在值為 null 時錯誤載入記錄的問題 ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher
  - 修復日期篩選欄位選擇「過去」或「未來」時，UI 元件寬度不一致的問題。 ([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust
  - 修復篩選表單區塊中預設欄位標籤無法正確翻譯為多種語言的問題。 ([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust
  - 修復 JS 區塊的標題和描述樣式與其他區塊不一致的問題。 ([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust
  - 修復子表單中的巢狀子表格未顯示資料的問題 ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh
  - 修復長文字欄位工具提示換行問題 ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh
  - 修復篩選表單區塊中關聯欄位的可選資料不正確的問題。 ([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust
  - 修復對基於選項的欄位使用「是任一」或「都不是」運算子進行篩選時，可選選項未完整列出的問題。 ([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust
  - 修復篩選表單中的自訂欄位配置未正確預填，且某些設定未生效的問題。 ([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust
  - 修復清除時間範圍篩選值並再次觸發篩選時導致錯誤的問題。 ([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust
  - 修復數字欄位值在篩選操作中未正確預填的問題。 ([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust
  - 修復篩選表單中某些欄位運算子無法正確篩選資料的問題。 ([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust
  - 修復對核取方塊欄位進行篩選未生效的問題。 ([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust
- **[流程引擎]**

  - 修復：使用整數類型作為列舉選項時轉換不正確 ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos
  - 修復當省略 `useModel` 時，透過從 `createModelOptions.use` 推斷，導致可切換子模型選單項目失敗的問題 ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe
- **[伺服器]** 修復匯入資料後，觸發的工作流程未加入處理佇列的問題，確保工作流程在匯入後能立即按預期執行 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher
- **[通知：電子郵件]** 修復電子郵件通知連線限制問題 ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx
- **[集合欄位：公式]** 修復公式欄位在篩選操作和篩選表單區塊中無法輸入值的問題。 ([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust
- **[多空間]** 修復在系統集合中建立其他欄位的問題 by @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/en/blog/v2.0.0-alpha.51)

*發布日期：2025-12-07*

### 🎉 新功能

- **[客戶端]**

  - 支援在主題編輯器中自訂全域樣式 ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo
  - 支援在詳情區塊中設定預設排序規則 ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh
  - 支援為數字欄位設定資料類型（選項：double、float、decimal） ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos
- **[集合欄位：序號]** 資料遷移後自動更新序號欄位 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 改進

- **[客戶端]**

  - 修復刪除行後子表格分頁跳轉，並新增對欄位驗證規則的支援 ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh
  - 調整可編輯子表格中的大欄位顯示 ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh
  - 支援對溢出的 JSON 欄位內容使用省略號 ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh
- **[流程引擎]**

  - 為 FlowModelRenderer 新增 useCache 選項 ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe
  - 新增 `removeModelWithSubModels` 方法以遞迴移除模型及其子模型 ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe
- **[區塊：GridCard]** 為網格卡片新增行數配置，並以自動計算取代 pageSize ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh
- **[審計日誌]** 將唯一識別碼欄位更新為 `text` 類型，以防止大量編輯時識別碼長度溢出 by @2013xile
- **[遷移管理器]** 資料遷移後自動更新序號欄位 by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 修復從已移除區塊配置的欄位未從篩選區塊中刪除的問題。 ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust
  - 修復在非配置模式下按鈕隱藏時出現多餘間距的問題 ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh
  - 修復篩選表單區塊中重設按鈕文字無法修改的問題。 ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust
  - 修復對欄位使用 `$in` / `$notIn` 運算子進行篩選時，欄位輸入不支援多值的問題。 ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust
  - 修復新新增的資料區塊未自動出現在篩選表單區塊欄位選單中的問題。 ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust
  - 篩選表單中關聯欄位的配置選單不應顯示快速建立選項。 ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust
  - 修復列表區塊中關聯子表格資料的問題 ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh
  - 修復來自集合設定的數字欄位驗證規則未應用的問題 ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh
  - 修復篩選表單中的欄位受到後端欄位驗證規則限制的問題。 ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust
  - JSON 欄位快速編輯問題 ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh
  - 修復子表格編輯中大欄位顯示問題 ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh
  - 修復在關聯記錄選擇中停用 allowMultiple 時，快速建立拋出錯誤的問題 ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh
  - 修復 JSON 欄位應作為物件提交的問題 ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh
  - 修復無法使用 Enter 鍵觸發篩選操作的問題。 ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust
- **[流程引擎]**

  - 修復切換欄位元件後，前一個元件的配置選項仍保留在選單中的問題。 ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust
  - 在 FlowModelRenderer 中將 useEffect 移至條件返回之前 ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe
  - 修復不支援的關聯欄位出現在篩選操作欄位中的問題。 ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust
- **[acl]** 修復：acl.allow 執行過早 ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos
- **[檔案管理器]**

  - 修復列表和網格卡片區塊中子詳細資料顯示不正確的問題 ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh
  - 修復附件欄位在 readPretty 子表格中未正確顯示的問題 ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh
- **[工作流程]**

  - 修復在執行畫布中刪除節點時拋出錯誤的問題 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
  - 修復當節點上的任務未定義時，執行頁面拋出錯誤的問題 ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher
- **[集合欄位：公式]** 修復公式欄位無法新增到篩選表單區塊的問題。 ([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust
- **[區塊：操作面板]** 優化操作面板區塊在列表佈局中的樣式 ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh
- **[AI 員工]**

  - 解決資料來源角色名稱未編譯的問題 ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang
  - 修復某些當前記錄欄位無法在變數選擇元件中顯示的問題。 ([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust
- **[操作：匯入記錄]** 匯入的欄位與 ACL 設定中設定的欄位不匹配 ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile
- **[存取控制]** 為外部資料來源的關聯操作新增權限檢查中介軟體 ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile
- **[工作流程：審批]**

  - 修復在 ACL 範圍變數下載入相關審批時無資料的問題 by @mytharcher
  - 修復審批人表單中已填寫資料消失的問題 by @mytharcher
  - 修復在詳細抽屜中載入記錄相關審批時拋出權限錯誤的問題 by @mytharcher
  - 修復在包含順序和會簽的分支中流程不正確的問題 by @mytharcher
  - 修復列出審批時發生記憶體不足（OOM）的問題 by @mytharcher
  - 修復在返回分支中，審批記錄未包含在任務結果中的問題 by @mytharcher
  - 修復審批人彈出視窗未顯示標題的問題 by @zhangzhonghe
  - 修復在僅聯合角色模式下載入相關審批時拋出錯誤的問題 by @mytharcher
- **[電子郵件管理器]**

  - 處理異常資料 by @jiannx
  - 未同步 Gmail 排程狀態 by @jiannx

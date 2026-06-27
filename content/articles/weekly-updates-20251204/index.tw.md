---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：在 RESTful API 資料來源配置中新增「錯誤訊息轉換器」選項，允許在審批流程 UI 中選擇顯示快照或最新記錄，以及更多內容。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860-djgsxo.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.19](https://www.nocobase.com/en/blog/v1.9.19)

*發布日期：2025-12-04*

### 🐛 錯誤修復

- **[工作流：審批]**
  - 修復列表審批時發生 OOM 的問題，作者：@mytharcher
  - 修復審批人彈出視窗未顯示標題的問題，作者：@zhangzhonghe

### [v1.9.18](https://www.nocobase.com/en/blog/v1.9.18)

*發布日期：2025-12-04*

### 🐛 錯誤修復

- **[操作：導入記錄]** 導入的欄位與 ACL 設定中的欄位不匹配 ([#8075](https://github.com/nocobase/nocobase/pull/8075))，作者：@2013xile
- **[工作流]** 修復當節點上的任務為 undefined 時，執行頁面拋出錯誤的問題 ([#8066](https://github.com/nocobase/nocobase/pull/8066))，作者：@mytharcher
- **[存取控制]** 為外部資料源的關聯操作添加權限檢查中介軟體 ([#8062](https://github.com/nocobase/nocobase/pull/8062))，作者：@2013xile
- **[工作流：審批]**
  - 修復在詳細資訊抽屜中載入記錄相關審批時拋出權限錯誤的問題，作者：@mytharcher
  - 修復在返回分支中，審批記錄未包含在任務結果中的問題，作者：@mytharcher
  - 修復在包含順序和會簽的分支中，流程不正確的問題，作者：@mytharcher

### [v1.9.17](https://www.nocobase.com/en/blog/v1.9.17)

*發布日期：2025-12-02*

### 🐛 錯誤修復

- **[客戶端]** 修復聯動規則下拉選擇框的閃爍問題 ([#8018](https://github.com/nocobase/nocobase/pull/8018))，作者：@zhangzhonghe
- **[acl]** 修復當外部資料源權限範圍使用當前用戶相關變數時，ACL 元資訊不正確的問題 ([#8013](https://github.com/nocobase/nocobase/pull/8013))，作者：@2013xile
- **[主題編輯器]** 在行動裝置上啟用主題切換器 ([#8046](https://github.com/nocobase/nocobase/pull/8046))，作者：@zhangzhonghe
- **[多應用管理器]** 日誌級別設定未應用於子應用程式 ([#8045](https://github.com/nocobase/nocobase/pull/8045))，作者：@2013xile

### [v1.9.16](https://www.nocobase.com/en/blog/v1.9.16)

*發布日期：2025-12-02*

### 🎉 新功能

- **[資料源：REST API]** 在 RESTful API 資料源配置中新增 `錯誤訊息轉換器` 選項，作者：@cgyrock

### 🚀 改進

- **[客戶端]**
  - 在 Select 元件中，滑鼠懸停時顯示摺疊的選項 ([#8029](https://github.com/nocobase/nocobase/pull/8029))，作者：@katherinehhh
  - 優化子表格的驗證訊息 ([#8001](https://github.com/nocobase/nocobase/pull/8001))，作者：@katherinehhh
- **[工作流]** 為 UserSelect 添加「主」資料源上下文，以提供一個更通用的元件，可在其他地方使用 ([#8010](https://github.com/nocobase/nocobase/pull/8010))，作者：@mytharcher
- **[工作流：審批]** 使用通用元件以減少重複程式碼，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復 Variable.Input 中的延遲載入錯誤，該錯誤會導致變數選項選單不正確地重新渲染 ([#8009](https://github.com/nocobase/nocobase/pull/8009))，作者：@mytharcher
- **[操作：導入記錄]** 修復當導入的 xlsx 檔案中欄位值為 `null` 時拋出錯誤的問題 ([#8037](https://github.com/nocobase/nocobase/pull/8037))，作者：@mytharcher
- **[工作流]** 修復在訊息發布前佇列已關閉的問題 ([#8003](https://github.com/nocobase/nocobase/pull/8003))，作者：@mytharcher
- **[工作流：子流程]** 修復當工作流數量超過 200 時，已選工作流顯示「N/A」的問題，作者：@mytharcher
- **[工作流：審批]**
  - 修復因 `RemoteSelect` 變更導致獲取 `approvalRecords.reassignee` 時的權限問題，作者：@mytharcher
  - 修復在模態框開啟狀態下重新整理頁面時，列印操作無效的問題，作者：@mytharcher

### [v1.9.15](https://www.nocobase.com/en/blog/v1.9.15)

*發布日期：2025-11-28*

### 🐛 錯誤修復

- **[客戶端]**
  - 避免開啟預設值設定時拋出錯誤 ([#7997](https://github.com/nocobase/nocobase/pull/7997))，作者：@mytharcher
  - 解決在關聯樹表區塊中添加子記錄時的錯誤 ([#7989](https://github.com/nocobase/nocobase/pull/7989))，作者：@katherinehhh
- **[部門]** 修復部門關聯欄位無法編輯的問題 ([#7462](https://github.com/nocobase/nocobase/pull/7462))，作者：@heziqiang
- **[集合：樹]** 修復因錯誤的樹父欄位查找導致的路徑表更新失敗 ([#8000](https://github.com/nocobase/nocobase/pull/8000))，作者：@2013xile
- **[集合欄位：多對多（陣列）]** 修復子表格中的 m2m 陣列欄位無法更新的問題 ([#7998](https://github.com/nocobase/nocobase/pull/7998))，作者：@cgyrock
- **[工作流：審批]**
  - 修復用戶重新提交後，執行上下文中沒有申請人資料的問題，作者：@mytharcher
  - 修復用戶提交含評論的審批後，任務結果中的評論為 null 的問題，作者：@mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.50](https://www.nocobase.com/en/blog/v2.0.0-alpha.50)

*發布日期：2025-12-02*

### 🚀 改進

- **[客戶端]**
  - 附件上傳元件支援允許多重設定 ([#8052](https://github.com/nocobase/nocobase/pull/8052))，作者：@katherinehhh
  - 在 Select 元件中，滑鼠懸停時顯示摺疊的選項 ([#8029](https://github.com/nocobase/nocobase/pull/8029))，作者：@katherinehhh
  - 在 Select 元件中，滑鼠懸停時顯示摺疊的選項 ([#8030](https://github.com/nocobase/nocobase/pull/8030))，作者：@katherinehhh
- **[AI 員工]** 在新增 LLM 表單中添加遺失的提供者欄位 ([#8049](https://github.com/nocobase/nocobase/pull/8049))，作者：@heziqiang
- **[工作流]** 為 UserSelect 添加「主」資料源上下文，以提供一個更通用的元件，可在其他地方使用 ([#8010](https://github.com/nocobase/nocobase/pull/8010))，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復在多對多關聯記錄選擇中禁用 allowMultiple 後顯示 N/A 的問題 ([#8050](https://github.com/nocobase/nocobase/pull/8050))，作者：@katherinehhh
  - 修復聯動規則下拉選擇框的閃爍問題 ([#8018](https://github.com/nocobase/nocobase/pull/8018))，作者：@zhangzhonghe
  - 修復在篩選操作中將日期欄位切換為時間欄位時導致渲染錯誤的問題。([#8036](https://github.com/nocobase/nocobase/pull/8036))，作者：@gchust
  - 修復新增評論區塊時出現當前記錄選單的問題。([#8039](https://github.com/nocobase/nocobase/pull/8039))，作者：@gchust
  - 修復在記錄選擇器區塊中刪除記錄失敗的問題 ([#8023](https://github.com/nocobase/nocobase/pull/8023))，作者：@katherinehhh
  - 修復詳細資訊區塊中 JS 欄位預設樣式不正確的問題。([#8031](https://github.com/nocobase/nocobase/pull/8031))，作者：@gchust
  - 修復樹表區塊無法展開子節點的問題 ([#8011](https://github.com/nocobase/nocobase/pull/8011))，作者：@katherinehhh
  - 修復子表格欄位拖曳無效的問題 ([#8026](https://github.com/nocobase/nocobase/pull/8026))，作者：@katherinehhh
  - 修復子表格欄位寬度未套用的問題 ([#8027](https://github.com/nocobase/nocobase/pull/8027))，作者：@katherinehhh
  - 解決在彈出視窗中載入關聯欄位資料時導致錯誤的問題，確保資料顯示和功能更流暢。([#7985](https://github.com/nocobase/nocobase/pull/7985))，作者：@gchust
  - 修復 markdown 顯示欄位彈出樣式問題 ([#8012](https://github.com/nocobase/nocobase/pull/8012))，作者：@katherinehhh
  - 修復編輯和新增操作彈出視窗的預設標題不正確的問題。([#8033](https://github.com/nocobase/nocobase/pull/8033))，作者：@gchust
  - 修復 Variable.Input 中的延遲載入錯誤，該錯誤會導致變數選項選單不正確地重新渲染 ([#8009](https://github.com/nocobase/nocobase/pull/8009))，作者：@mytharcher
  - 修復在由關聯欄位開啟的彈出視窗中，無法正確解析當前彈出記錄變數的問題。([#8019](https://github.com/nocobase/nocobase/pull/8019))，作者：@gchust
- **[acl]** 修復當外部資料源權限範圍使用當前用戶相關變數時，ACL 元資訊不正確的問題 ([#8013](https://github.com/nocobase/nocobase/pull/8013))，作者：@2013xile
- **[流程引擎]**
  - 修復編輯後評論記錄儲存失敗的問題 ([#8035](https://github.com/nocobase/nocobase/pull/8035))，作者：@katherinehhh
  - 修復在彈出視窗內點擊表單提交按鈕關閉彈出視窗時，資料區塊未重新整理的問題。([#8021](https://github.com/nocobase/nocobase/pull/8021))，作者：@gchust
- **[主題編輯器]** 在行動裝置上啟用主題切換器 ([#8046](https://github.com/nocobase/nocobase/pull/8046))，作者：@zhangzhonghe
- **[多應用管理器（已棄用）]** 日誌級別設定未應用於子應用程式 ([#8045](https://github.com/nocobase/nocobase/pull/8045))，作者：@2013xile
- **[資料源管理器]** 修復更新外部資料源密碼時的錯誤 ([#8024](https://github.com/nocobase/nocobase/pull/8024))，作者：@cgyrock
- **[操作：導入記錄]** 修復當導入的 xlsx 檔案中欄位值為 `null` 時拋出錯誤的問題 ([#8037](https://github.com/nocobase/nocobase/pull/8037))，作者：@mytharcher
- **[工作流]** 修復在訊息發布前佇列已關閉的問題 ([#8003](https://github.com/nocobase/nocobase/pull/8003))，作者：@mytharcher
- **[評論]**
  - 修復在評論區塊中刪除記錄失敗的問題，作者：@katherinehhh
  - 修復在非評論集合上使用評論區塊時顯示警告的問題，作者：@katherinehhh
- **[多空間]** 行動裝置支援空間切換，作者：@jiannx
- **[工作流：子流程]** 修復當工作流數量超過 200 時，已選工作流顯示「N/A」的問題，作者：@mytharcher
- **[工作流：審批]**
  - 修復建立審批資訊區塊時拋出錯誤的問題，作者：@mytharcher
  - 添加遷移以避免在添加索引時出現重複記錄錯誤，作者：@mytharcher
  - 修復在模態框開啟狀態下重新整理頁面時，列印操作無效的問題，作者：@mytharcher

### [v2.0.0-alpha.49](https://www.nocobase.com/en/blog/v2.0.0-alpha.49)

*發布日期：2025-11-29*

### 🎉 新功能

- **[工作流：審批]** 允許選擇在審批流程 UI 中顯示快照或最新記錄，作者：@mytharcher

### 🚀 改進

- **[客戶端]** 優化子表格的驗證訊息 ([#8001](https://github.com/nocobase/nocobase/pull/8001))，作者：@katherinehhh
- **[遙測：Prometheus]** 升級 `@opentelemetry/exporter-prometheus`，作者：@2013xile
- **[操作：導入記錄 Pro]** 增強非同步任務的錯誤訊息，為用戶提供任務失敗的具體原因，作者：@mytharcher

### 🐛 錯誤修復

- **[流程引擎]** 修復在詳細資訊區塊中無法正確觸發解析當前記錄變數的問題。([#8004](https://github.com/nocobase/nocobase/pull/8004))，作者：@gchust
- **[客戶端]** 修復複合主鍵的表格區塊選擇和刪除問題 ([#7978](https://github.com/nocobase/nocobase/pull/7978))，作者：@katherinehhh
- **[操作：導出記錄]** 修復可導出欄位列表中缺少系統欄位的問題 ([#8002](https://github.com/nocobase/nocobase/pull/8002))，作者：@katherinehhh
- **[集合：樹]** 修復因錯誤的樹父欄位查找導致的路徑表更新失敗 ([#8000](https://github.com/nocobase/nocobase/pull/8000))，作者：@2013xile
- **[集合欄位：多對多（陣列）]** 修復子表格中的 m2m 陣列欄位無法更新的問題 ([#7998](https://github.com/nocobase/nocobase/pull/7998))，作者：@cgyrock
- **[部門]** 修復部門關聯欄位無法編輯的問題 ([#7462](https://github.com/nocobase/nocobase/pull/7462))，作者：@heziqiang
- **[工作流：審批]** 修復因 `RemoteSelect` 變更導致獲取 `approvalRecords.reassignee` 時的權限問題，作者：@mytharcher

### [v2.0.0-alpha.48](https://www.nocobase.com/en/blog/v2.0.0-alpha.48)

*發布日期：2025-11-28*

### 🎉 新功能

- **[區塊：地圖]** 新增 2.0 地圖區塊 ([#7944](https://github.com/nocobase/nocobase/pull/7944))，作者：@katherinehhh
- **[認證：OIDC]** 支援在未認證時自動重定向到 SSO URL，作者：@heziqiang

### 🐛 錯誤修復

- **[客戶端]**
  - 避免開啟預設值設定時拋出錯誤 ([#7997](https://github.com/nocobase/nocobase/pull/7997))，作者：@mytharcher
  - 解決在關聯樹表區塊中添加子記錄時的錯誤 ([#7989](https://github.com/nocobase/nocobase/pull/7989))，作者：@katherinehhh
  - 修復 markdown 欄位在 HTML 模式下省略時的顯示問題 ([#7994](https://github.com/nocobase/nocobase/pull/7994))，作者：@katherinehhh
  - 修復級聯選擇器中搜尋結果不完整的問題 ([#7990](https://github.com/nocobase/nocobase/pull/7990))，作者：@katherinehhh
  - 修復頁面頁籤狀態與路由不對應的問題 ([#7991](https://github.com/nocobase/nocobase/pull/7991))，作者：@zhangzhonghe
  - 修復遠端選擇器對非物件值未顯示正確標籤的問題 ([#7975](https://github.com/nocobase/nocobase/pull/7975))，作者：@katherinehhh
- **[資料庫]** 修復：移除僅時間欄位在時間轉換中的 UTC 處理，以防止時區引起的偏移。([#7812](https://github.com/nocobase/nocobase/pull/7812))，作者：@ChimingLiu
- **[工作流]**
  - 修復在停止前，準備好的執行未發送到佇列的問題 ([#7981](https://github.com/nocobase/nocobase/pull/7981))，作者：@mytharcher
  - 修復某些工作流任務選單未顯示的問題 ([#7980](https://github.com/nocobase/nocobase/pull/7980))，作者：@mytharcher
  - 修復任務連結到錯誤頁面的問題 ([#7983](https://github.com/nocobase/nocobase/pull/7983))，作者：@mytharcher
- **[資料視覺化]** 外部資料源集合的篩選欄位設定未顯示特定屬性 ([#7982](https://github.com/nocobase/nocobase/pull/7982))，作者：@2013xile
- **[資料源管理器]** 修復資料庫密碼變更時，資料源密碼更新失敗的問題 ([#7977](https://github.com/nocobase/nocobase/pull/7977))，作者：@cgyrock
- **[操作：導入記錄]** 修復在樹表中導入資料時的問題 ([#7976](https://github.com/nocobase/nocobase/pull/7976))，作者：@cgyrock
- **[工作流：人工節點]** 修復人工任務計數不正確的問題 ([#7984](https://github.com/nocobase/nocobase/pull/7984))，作者：@mytharcher
- **[工作流：審批]**
  - 修復用戶重新提交後，執行上下文中沒有申請人資料的問題，作者：@mytharcher
  - 修復用戶提交含評論的審批後，任務結果中的評論為 null 的問題，作者：@mytharcher

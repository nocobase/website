---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援表格欄位排序、未認證時自動重定向至 SSO URL 等。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：截至目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/en/blog/v1.9.14)

*發布日期：2025-11-27*

### 🎉 新功能

- **[認證：OIDC]** 支援在未認證時自動重定向到 SSO URL，由 @heziqiang 提供

### 🚀 改進

- **[客戶端]** 在訊息內容中使用三層花括號（`{{{` 和 `}}}`）作為變數，以避免變數被 Handlebars 跳脫（[#7972](https://github.com/nocobase/nocobase/pull/7972)），由 @mytharcher 提供
- **[集合欄位：Markdown(Vditor)]** 調整 vditor 全螢幕內容寬度（[#7974](https://github.com/nocobase/nocobase/pull/7974)），由 @katherinehhh 提供

### 🐛 錯誤修復

- **[資料庫]** 修復：移除僅時間欄位在時間轉換中的 UTC 處理，以防止時區引起的偏移。（[#7812](https://github.com/nocobase/nocobase/pull/7812)），由 @ChimingLiu 提供
- **[客戶端]** 修復遠端選擇器在非物件值時未顯示正確標籤的問題（[#7975](https://github.com/nocobase/nocobase/pull/7975)），由 @katherinehhh 提供
- **[工作流程]**

  - 修復在停止前，已準備好的執行未發送到佇列的問題（[#7981](https://github.com/nocobase/nocobase/pull/7981)），由 @mytharcher 提供
  - 修復任務連結到錯誤頁面的問題（[#7983](https://github.com/nocobase/nocobase/pull/7983)），由 @mytharcher 提供
  - 修復某些工作流程任務選單未顯示的問題（[#7980](https://github.com/nocobase/nocobase/pull/7980)），由 @mytharcher 提供
  - 修復因提供者使用錯誤導致任務計數未顯示的問題（[#7968](https://github.com/nocobase/nocobase/pull/7968)），由 @mytharcher 提供
- **[工作流程：人工節點]** 修復人工任務計數不正確的問題（[#7984](https://github.com/nocobase/nocobase/pull/7984)），由 @mytharcher 提供
- **[資料視覺化]**

  - 外部資料來源集合的篩選欄位設定未顯示特定屬性（[#7982](https://github.com/nocobase/nocobase/pull/7982)），由 @2013xile 提供
  - 解決圖表查詢不支援 ACL 資料範圍的問題（[#7915](https://github.com/nocobase/nocobase/pull/7915)），由 @2013xile 提供
- **[資料來源管理器]** 修復當資料庫密碼變更時，資料來源密碼更新失敗的問題（[#7977](https://github.com/nocobase/nocobase/pull/7977)），由 @cgyrock 提供
- **[操作：匯入記錄]** 修復在樹狀表格中匯入資料時的問題（[#7976](https://github.com/nocobase/nocobase/pull/7976)），由 @cgyrock 提供

### [v1.9.13](https://www.nocobase.com/en/blog/v1.9.13)

*發布日期：2025-11-25*

### 🐛 錯誤修復

- **[客戶端]** 修復使用 Iframe 時的路由問題（[#7957](https://github.com/nocobase/nocobase/pull/7957)），由 @zhangzhonghe 提供

### [v1.9.12](https://www.nocobase.com/en/blog/v1.9.12)

*發布日期：2025-11-24*

### 🚀 改進

- **[客戶端]** 為更新記錄和刪除記錄操作按鈕添加載入狀態，避免重複請求（[#7964](https://github.com/nocobase/nocobase/pull/7964)），由 @mytharcher 提供
- **[非同步任務管理器]** 增強非同步任務的錯誤訊息，為用戶提供任務失敗的具體原因（[#7796](https://github.com/nocobase/nocobase/pull/7796)），由 @mytharcher 提供
- **[操作：匯入記錄 Pro]** 增強非同步任務的錯誤訊息，為用戶提供任務失敗的具體原因，由 @mytharcher 提供
- **[工作流程：審批]**

  - 修復 AssigneeSelect 中的變數選擇，限制只能選擇用戶集合的主鍵或外鍵，由 @mytharcher 提供
  - 減少審批彈窗中需要載入的關聯，以提供更好的效能，由 @mytharcher 提供
  - 使手動執行（或由子流程節點觸發）的負載與記錄或主鍵相容。避免觸發上下文中的一致性問題。由 @mytharcher 提供

### 🐛 錯誤修復

- **[非同步任務管理器]** 為 `asyncTasks` 集合添加遷移規則，避免非同步任務記錄被遷移（[#7950](https://github.com/nocobase/nocobase/pull/7950)），由 @mytharcher 提供
- **[工作流程：審批]** 修復語言檔案，由 @mytharcher 提供

### [v1.9.11](https://www.nocobase.com/en/blog/v1.9.11)

*發布日期：2025-11-24*

### 🐛 錯誤修復

- **[客戶端]** 修復在外部資料來源配置中，belongsTo 欄位介面顯示為多對一而非一對一的問題（[#7936](https://github.com/nocobase/nocobase/pull/7936)），由 @cgyrock 提供
- **[工作流程]** 修復更新任務計數會意外重置正在填寫的表單狀態的問題（[#7937](https://github.com/nocobase/nocobase/pull/7937)），由 @mytharcher 提供
- **[集合欄位：多對多（陣列）]** 修復在建立/更新關聯資料時 M2M（陣列）欄位的問題（[#7926](https://github.com/nocobase/nocobase/pull/7926)），由 @cgyrock 提供

### [v1.9.10](https://www.nocobase.com/en/blog/v1.9.10)

*發布日期：2025-11-20*

### 🚀 改進

- **[存取控制]** 減少成員角色的預設權限（[#7921](https://github.com/nocobase/nocobase/pull/7921)），由 @2013xile 提供
- **[資料視覺化]** 為插件介面添加俄語支援。（[#7676](https://github.com/nocobase/nocobase/pull/7676)），由 @sembaev-a-a 提供
- **[工作流程：Webhook]** 為回應節點類型添加圖示，由 @mytharcher 提供

### 🐛 錯誤修復

- **[客戶端]** 修復錯誤：無法解析 'antd-mobile' 和 'antd-mobile-icons'（[#7914](https://github.com/nocobase/nocobase/pull/7914)），由 @zhangzhonghe 提供
- **[存取控制]** 支援關聯操作的資料範圍限制。（[#7919](https://github.com/nocobase/nocobase/pull/7919)），由 @2013xile 提供
- **[資料來源：主資料庫]** 修復在重新啟動應用程式前，新新增的一對多欄位無法被選為外鍵的問題。（[#7907](https://github.com/nocobase/nocobase/pull/7907)），由 @cgyrock 提供

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/en/blog/v1.9.0-beta.17)

*發布日期：2025-11-21*

### 🚀 改進

- **[資料庫]** 為 MariaDB 連線實例添加 `multipleStatements` 選項，以支援在單次查詢中調用多個語句（[#7781](https://github.com/nocobase/nocobase/pull/7781)），由 @mytharcher 提供
- **[存取控制]**

  - 減少成員角色的預設權限（[#7921](https://github.com/nocobase/nocobase/pull/7921)），由 @2013xile 提供
  - 優化關聯欄位操作的權限控制邏輯（[#7800](https://github.com/nocobase/nocobase/pull/7800)），由 @2013xile 提供
- **[資料視覺化]** 為插件介面添加俄語支援。（[#7676](https://github.com/nocobase/nocobase/pull/7676)），由 @sembaev-a-a 提供
- **[工作流程]** 支援工作流程中的資料區塊使用合併明細設定選單（[#7771](https://github.com/nocobase/nocobase/pull/7771)），由 @mytharcher 提供
- **[工作流程：Webhook]** 為回應節點類型添加圖示，由 @mytharcher 提供
- **[工作流程：JavaScript]** 修復因上層函數被傳入執行環境而導致的安全漏洞，防止被利用以獲取上層執行上下文，由 @mytharcher 提供
- **[認證：OIDC]** 增加請求超時時間，由 @2013xile 提供
- **[工作流程：審批]** 為委派和新增的審批人添加通知，由 @mytharcher 提供

### 🐛 錯誤修復

- **[客戶端]**

  - 修復在外部資料來源配置中，belongsTo 欄位介面顯示為多對一而非一對一的問題（[#7936](https://github.com/nocobase/nocobase/pull/7936)），由 @cgyrock 提供
  - 修復錯誤：無法解析 'antd-mobile' 和 'antd-mobile-icons'（[#7914](https://github.com/nocobase/nocobase/pull/7914)），由 @zhangzhonghe 提供
  - 修復因拖拽後刪除引用模板，導致重複模板不出現的問題（[#7847](https://github.com/nocobase/nocobase/pull/7847)），由 @zhangzhonghe 提供
  - 修復審批表單的聯動規則不起作用的問題（[#7858](https://github.com/nocobase/nocobase/pull/7858)），由 @zhangzhonghe 提供
  - 修復簡單分頁明細區塊中下一頁為空的問題（[#7784](https://github.com/nocobase/nocobase/pull/7784)），由 @katherinehhh 提供
  - 修復「超出最大調用堆疊大小」（[#7780](https://github.com/nocobase/nocobase/pull/7780)），由 @zhangzhonghe 提供
- **[伺服器]**

  - 修復在服務拆分模式下，已取消訂閱的佇列訊息無法發布的問題（[#7875](https://github.com/nocobase/nocobase/pull/7875)），由 @mytharcher 提供
  - 按應用程式名稱隔離發布-訂閱頻道（[#7762](https://github.com/nocobase/nocobase/pull/7762)），由 @mytharcher 提供
  - 修復啟用服務拆分模式後，工作進程通過訊息佇列發送訊息時導致錯誤的問題（[#7797](https://github.com/nocobase/nocobase/pull/7797)），由 @mytharcher 提供
- **[工具函數]** 啟用交集策略中的物件合併（[#7840](https://github.com/nocobase/nocobase/pull/7840)），由 @chenos 提供
- **[資料庫]** 當欄位名稱使用蛇形命名風格時，索引欄位檢測不正確（[#7776](https://github.com/nocobase/nocobase/pull/7776)），由 @2013xile 提供
- **[集合欄位：多對多（陣列）]** 修復在建立/更新關聯資料時 M2M（陣列）欄位的問題（[#7926](https://github.com/nocobase/nocobase/pull/7926)），由 @cgyrock 提供
- **[資料來源：主資料庫]** 修復在重新啟動應用程式前，新新增的一對多欄位無法被選為外鍵的問題。（[#7907](https://github.com/nocobase/nocobase/pull/7907)），由 @cgyrock 提供
- **[工作流程]**

  - 修復更新任務計數會意外重置正在填寫的表單狀態的問題（[#7937](https://github.com/nocobase/nocobase/pull/7937)），由 @mytharcher 提供
  - 使用 eventQueue 替代共享的 backgroundJob，以防止在服務拆分模式下共享佇列被錯誤消費（[#7871](https://github.com/nocobase/nocobase/pull/7871)），由 @mytharcher 提供
  - 修復在服務拆分模式下，工作流程插件在非工作進程模式時仍消費佇列事件的問題（[#7820](https://github.com/nocobase/nocobase/pull/7820)），由 @mytharcher 提供
  - 修復監聽不存在的資料來源事件導致的錯誤（[#7855](https://github.com/nocobase/nocobase/pull/7855)），由 @mytharcher 提供
  - 修復在服務拆分模式下，手動執行包含中斷節點的工作流程會卡在待處理狀態的問題（[#7767](https://github.com/nocobase/nocobase/pull/7767)），由 @mytharcher 提供
  - 為工作流程日誌添加 `workflowId` 作為身份資料（[#7789](https://github.com/nocobase/nocobase/pull/7789)），由 @mytharcher 提供
  - 解決叢集模式下工作流程調度器無法正確識別空閒狀態，可能導致插件就緒前不必要的佇列事件消費問題（[#7768](https://github.com/nocobase/nocobase/pull/7768)），由 @mytharcher 提供
- **[存取控制]**

  - 支援關聯操作的資料範圍限制。（[#7919](https://github.com/nocobase/nocobase/pull/7919)），由 @2013xile 提供
  - 關聯操作片段未生效的問題（[#7876](https://github.com/nocobase/nocobase/pull/7876)），由 @2013xile 提供
- **[工作流程：人工節點]** 修正應使用的語言檔案命名空間，以顯示正確的翻譯內容（[#7877](https://github.com/nocobase/nocobase/pull/7877)），由 @mytharcher 提供
- **[用戶]** 當欄位名稱使用蛇形命名風格時，索引刷新不正確（[#7785](https://github.com/nocobase/nocobase/pull/7785)），由 @2013xile 提供
- **[行動端（已棄用）]** 修復行動端日期欄位預設值彈窗無法選擇日期的問題（[#7783](https://github.com/nocobase/nocobase/pull/7783)），由 @zhangzhonghe 提供
- **[工作流程：自訂變數]** 修復變數節點無配置時拋出錯誤的問題，由 @mytharcher 提供
- **[工作流程：自訂操作事件]** 修復監聽不存在的資料來源事件導致的錯誤，由 @mytharcher 提供
- **[模板列印]** 解析篩選器中的變數，由 @jiannx 提供
- **[資料視覺化：ECharts]** 修復 Echarts 選項中標籤類型配置不生效的問題。由 @heziqiang 提供
- **[工作流程：審批]**

  - 修復待辦中心審批列表卡片上的日期格式，以顯示完整的日期和時間，由 @mytharcher 提供
  - 修復載入通知頻道的頁面大小不足，導致列表未完全載入的問題，由 @mytharcher 提供
  - 修復在提交審批時查詢審批記錄列表出現的效能問題，由 @mytharcher 提供
  - 修復重新載入關聯資料時，主集合欄位未被排除的問題，由 @mytharcher 提供
  - 修復多個審批人同時處理審批時發生的競爭條件，可能導致工作流程節點執行超過一次的問題，由 @mytharcher 提供
  - 不再支援在並行分支中建立審批節點，以避免流程狀態引起的問題，由 @mytharcher 提供
  - 修復審批表單的聯動規則不起作用的問題，由 @zhangzhonghe 提供
  - 修復重複審批工作流程時拋出錯誤的問題，由 @mytharcher 提供
- **[郵件管理器]**

  - 添加同步日誌，由 @jiannx 提供
  - 同步 Microsoft 郵件讀取狀態時不帶時間戳，由 @jiannx 提供
  - 為 mailMessages 集合添加索引，由 @jiannx 提供
  - 為索引添加遷移，由 @jiannx 提供
  - 修復 Outlook 中保留圖片和同步的問題，由 @jiannx 提供

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/en/blog/v2.0.0-alpha.47)

*發布日期：2025-11-26*

### 🚀 改進

- **[客戶端]**

  - 支援在圖表查詢中初始化選定的篩選欄位（[#7933](https://github.com/nocobase/nocobase/pull/7933)），由 @heziqiang 提供
  - 在訊息內容中使用三層花括號（`{{{` 和 `}}}`）作為變數，以避免變數被 Handlebars 跳脫（[#7972](https://github.com/nocobase/nocobase/pull/7972)），由 @mytharcher 提供
  - 為更新記錄和刪除記錄操作按鈕添加載入狀態，避免重複請求（[#7964](https://github.com/nocobase/nocobase/pull/7964)），由 @mytharcher 提供
- **[集合欄位：Markdown(Vditor)]** 調整 vditor 全螢幕內容寬度（[#7974](https://github.com/nocobase/nocobase/pull/7974)），由 @katherinehhh 提供

### 🐛 錯誤修復

- **[客戶端]**

  - 修復在彈窗中為非 ID 關聯欄位開啟明細區塊時導致錯誤的問題。（[#7973](https://github.com/nocobase/nocobase/pull/7973)），由 @gchust 提供
  - 修復在彈窗中為非 ID 關聯欄位時，關聯資料無法正確載入的問題。（[#7970](https://github.com/nocobase/nocobase/pull/7970)），由 @gchust 提供
  - 修復使用 Iframe 時的路由問題（[#7957](https://github.com/nocobase/nocobase/pull/7957)），由 @zhangzhonghe 提供
  - 修復數值欄位格式精度設定無效的問題（[#7967](https://github.com/nocobase/nocobase/pull/7967)），由 @katherinehhh 提供
  - 修復新版 2.0 頁面中打字錯誤的問題（[#7945](https://github.com/nocobase/nocobase/pull/7945)），由 @zhangzhonghe 提供
  - 修復點擊重置按鈕時篩選值未被清除的問題（[#7966](https://github.com/nocobase/nocobase/pull/7966)），由 @zhangzhonghe 提供
- **[工作流程]** 修復因提供者使用錯誤導致任務計數未顯示的問題（[#7968](https://github.com/nocobase/nocobase/pull/7968)），由 @mytharcher 提供
- **[資料視覺化]** 解決圖表查詢不支援 ACL 資料範圍的問題（[#7915](https://github.com/nocobase/nocobase/pull/7915)），由 @2013xile 提供
- **[區塊：引用]** 修復引用區塊會將被引用區塊從原始頁面移除的問題。（[#7969](https://github.com/nocobase/nocobase/pull/7969)），由 @gchust 提供
- **[AI 員工]** 修復 AI 生成 SQL 輸出時的問題（[#7956](https://github.com/nocobase/nocobase/pull/7956)），由 @heziqiang 提供
- **[模板列印]** 修復在記錄模板列印操作中無法添加模板的問題，由 @katherinehhh 提供

### [v2.0.0-alpha.46](https://www.nocobase.com/en/blog/v2.0.0-alpha.46)

*發布日期：2025-11-24*

### 🚀 改進

- **[流程引擎]** 支援動態切換流程模型類別（[#7952](https://github.com/nocobase/nocobase/pull/7952)），由 @gchust 提供
- **[AI 員工]** AI 員工插件添加升級鉤子（[#7951](https://github.com/nocobase/nocobase/pull/7951)），由 @heziqiang 提供
- **[非同步任務管理器]** 增強非同步任務的錯誤訊息，為用戶提供任務失敗的具體原因（[#7796](https://github.com/nocobase/nocobase/pull/7796)），由 @mytharcher 提供
- **[工作流程：審批]**

  - 使手動執行（或由子流程節點觸發）的負載與記錄或主鍵相容。避免觸發上下文中的一致性問題。由 @mytharcher 提供
  - 減少審批彈窗中需要載入的關聯，以提供更好的效能，由 @mytharcher 提供
  - 修復 AssigneeSelect 中的變數選擇，限制只能選擇用戶集合的主鍵或外鍵，由 @mytharcher 提供

### 🐛 錯誤修復

- **[客戶端]** 修復明細區塊中文字欄位在內容超出寬度時自動換行的問題（[#7955](https://github.com/nocobase/nocobase/pull/7955)），由 @katherinehhh 提供
- **[非同步任務管理器]** 為 `asyncTasks` 集合添加遷移規則，避免非同步任務記錄被遷移（[#7950](https://github.com/nocobase/nocobase/pull/7950)），由 @mytharcher 提供
- **[檔案管理器]** 修復上傳檔案到指定儲存空間而非預設儲存空間的問題（[#7947](https://github.com/nocobase/nocobase/pull/7947)），由 @katherinehhh 提供
- **[工作流程：審批]** 修復語言檔案，由 @mytharcher 提供

### [v2.0.0-alpha.45](https://www.nocobase.com/en/blog/v2.0.0-alpha.45)

*發布日期：2025-11-21*

### 🎉 新功能

- **[客戶端]** 支援表格中的欄位排序（[#7900](https://github.com/nocobase/nocobase/pull/7900)），由 @katherinehhh 提供
- **[工作流程]** 新增「多條件」節點，提供類似 `switch` / `case` 的流程控制（[#7878](https://github.com/nocobase/nocobase/pull/7878)），由 @mytharcher 提供

### 🐛 錯誤修復

- **[客戶端]** 修復在多級聯動中清除值時拋出錯誤的問題（[#7943](https://github.com/nocobase/nocobase/pull/7943)），由 @katherinehhh 提供
- **[資料視覺化]** 修復儲存後圖表區塊未更新的問題（[#7920](https://github.com/nocobase/nocobase/pull/7920)），由 @heziqiang 提供
- **[模板列印]** 修復明細區塊中模板列印操作錯誤的問題，由 @katherinehhh 提供

### [v2.0.0-alpha.44](https://www.nocobase.com/en/blog/v2.0.0-alpha.44)

*發布日期：2025-11-21*

### 🎉 新功能

- **[客戶端]**

  - 為關聯欄位選擇器添加快速建立支援（[#7887](https://github.com/nocobase/nocobase/pull/7887)），由 @katherinehhh 提供
  - 支援樹狀集合關聯欄位的級聯選擇器（[#7846](https://github.com/nocobase/nocobase/pull/7846)），由 @katherinehhh 提供
- **[遙測]** 新增插件：Telemetry，一個基於 OpenTelemetry 的遙測插件，提供 CPU、記憶體和 HTTP 請求指標，並支援 HTTP 匯出，由 @2013xile 提供

### 🚀 改進

- **[遙測]** 支援控制哪些指標被匯出（[#7938](https://github.com/nocobase/nocobase/pull/7938)），由 @2013xile 提供
- **[非同步任務管理器]** 子應用程式的非同步任務應僅在 Workers 中啟動目標子應用程式（[#7927](https://github.com/nocobase/nocobase/pull/7927)），由 @2013xile 提供

### 🐛 錯誤修復

- **[客戶端]**

  - 從非樹狀集合區塊中移除樹狀表格操作（[#7931](https://github.com/nocobase/nocobase/pull/7931)），由 @katherinehhh 提供
  - 修復在外部資料來源配置中，belongsTo 欄位介面顯示為多對一而非一對一的問題（[#7936](https://github.com/nocobase/nocobase/pull/7936)），由 @cgyrock 提供
- **[流程引擎]** 修復明細區塊按鈕中工具列圖示顯示錯位的問題（[#7929](https://github.com/nocobase/nocobase/pull/7929)），由 @zhangzhonghe 提供
- **[工作流程]** 修復更新任務計數會意外重置正在填寫的表單狀態的問題（[#7937](https://github.com/nocobase/nocobase/pull/7937)），由 @mytharcher 提供
- **[集合欄位：多對多（陣列）]** 修復在建立/更新關聯資料時 M2M（陣列）欄位的問題（[#7926](https://github.com/nocobase/nocobase/pull/7926)），由 @cgyrock 提供
- **[操作：匯入記錄 Pro]** 修復上傳器修改匯入選項無效的問題，由 @katherinehhh 提供

### [v2.0.0-alpha.43](https://www.nocobase.com/en/blog/v2.0.0-alpha.43)

*發布日期：2025-11-20*

### 🚀 改進

- **[資料視覺化]** 為插件介面添加俄語支援。（[#7676](https://github.com/nocobase/nocobase/pull/7676)），由 @sembaev-a-a 提供
- **[存取控制]** 減少成員角色的預設權限（[#7921](https://github.com/nocobase/nocobase/pull/7921)），由 @2013xile 提供
- **[工作流程：Webhook]** 為回應節點類型添加圖示，由 @mytharcher 提供

### 🐛 錯誤修復

- **[客戶端]** 修復錯誤：無法解析 'antd-mobile' 和 'antd-mobile-icons'（[#7914](https://github.com/nocobase/nocobase/pull/7914)），由 @zhangzhonghe 提供
- **[流程引擎]** 修復開啟表格區塊的快速編輯表單時導致錯誤的問題。（[#7923](https://github.com/nocobase/nocobase/pull/7923)），由 @gchust 提供
- **[流程引擎]** 確保記錄變數與其個別欄位一起使用時，始終返回完整記錄。（[#7917](https://github.com/nocobase/nocobase/pull/7917)），由 @gchust 提供
- **[資料來源：主資料庫]** 修復在重新啟動應用程式前，新新增的一對多欄位無法被選為外鍵的問題。（[#7907](https://github.com/nocobase/nocobase/pull/7907)），由 @cgyrock 提供
- **[存取控制]** 支援關聯操作的資料範圍限制。（[#7919](https://github.com/nocobase/nocobase/pull/7919)），由 @2013xile 提供

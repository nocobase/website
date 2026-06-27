---
title: "NocoBase v1.9.0-beta.17：新增委派與新增受指派人的通知"
description: "v1.9.0-beta.17 版本發布說明"
---

### 🚀 改進

- **[資料庫]** 為 MariaDB 連線實例新增 `multipleStatements` 選項，以支援在單一查詢中執行多條語句 ([#7781](https://github.com/nocobase/nocobase/pull/7781))，作者 @mytharcher

- **[存取控制]**
  - 降低成員角色的預設權限 ([#7921](https://github.com/nocobase/nocobase/pull/7921))，作者 @2013xile

  - 優化關聯欄位操作的權限控制邏輯 ([#7800](https://github.com/nocobase/nocobase/pull/7800))，作者 @2013xile

- **[資料視覺化]** 為插件介面新增俄語支援。([#7676](https://github.com/nocobase/nocobase/pull/7676))，作者 @sembaev-a-a

- **[工作流程]** 支援工作流程中的資料區塊使用合併詳細設定選單 ([#7771](https://github.com/nocobase/nocobase/pull/7771))，作者 @mytharcher

- **[工作流程：Webhook]** 為回應節點類型新增圖示，作者 @mytharcher

- **[工作流程：JavaScript]** 修復因上層函數被傳入執行環境而導致的安全漏洞，防止被利用以存取上層執行上下文，作者 @mytharcher

- **[驗證：OIDC]** 增加請求超時時間，作者 @2013xile

- **[工作流程：審批]** 為委派與新增的審核人新增通知，作者 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在外部資料來源配置中，belongsTo 欄位介面顯示為多對一而非一對一的問題 ([#7936](https://github.com/nocobase/nocobase/pull/7936))，作者 @cgyrock

  - 修正錯誤：無法解析 'antd-mobile' 與 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914))，作者 @zhangzhonghe

  - 修正因拖曳後刪除已引用模板，導致重複模板不出現的問題 ([#7847](https://github.com/nocobase/nocobase/pull/7847))，作者 @zhangzhonghe

  - 修正審批表單的聯動規則失效的問題 ([#7858](https://github.com/nocobase/nocobase/pull/7858))，作者 @zhangzhonghe

  - 修正簡單分頁詳情區塊中下一頁為空的問題 ([#7784](https://github.com/nocobase/nocobase/pull/7784))，作者 @katherinehhh

  - 修正「超出最大呼叫堆疊大小」錯誤 ([#7780](https://github.com/nocobase/nocobase/pull/7780))，作者 @zhangzhonghe

- **[伺服器端]**
  - 修正服務拆分模式下，已取消訂閱的佇列訊息無法發佈的問題 ([#7875](https://github.com/nocobase/nocobase/pull/7875))，作者 @mytharcher

  - 按應用程式名稱隔離發布-訂閱頻道 ([#7762](https://github.com/nocobase/nocobase/pull/7762))，作者 @mytharcher

  - 修正啟用服務拆分模式後，工作進程透過訊息佇列發送訊息會導致錯誤的問題 ([#7797](https://github.com/nocobase/nocobase/pull/7797))，作者 @mytharcher

- **[工具函式]** 在交集策略中啟用物件合併 ([#7840](https://github.com/nocobase/nocobase/pull/7840))，作者 @chenos

- **[資料庫]** 當欄位名稱使用蛇形命名法時，索引欄位偵測不正確 ([#7776](https://github.com/nocobase/nocobase/pull/7776))，作者 @2013xile

- **[集合欄位：多對多（陣列）]** 修正建立/更新關聯資料時 M2M（陣列）欄位的問題 ([#7926](https://github.com/nocobase/nocobase/pull/7926))，作者 @cgyrock

- **[資料來源：主要]** 修正重新啟動應用程式前，新新增的一對多欄位無法被選為外鍵的問題。([#7907](https://github.com/nocobase/nocobase/pull/7907))，作者 @cgyrock

- **[工作流程]**
  - 修正更新任務計數時會意外重設正在填寫表單狀態的問題 ([#7937](https://github.com/nocobase/nocobase/pull/7937))，作者 @mytharcher

  - 使用 eventQueue 取代共用的 backgroundJob，以防止在服務拆分模式下共用佇列被錯誤消費 ([#7871](https://github.com/nocobase/nocobase/pull/7871))，作者 @mytharcher

  - 修正工作流程插件在服務拆分模式下非工作進程時仍會消費佇列事件的問題 ([#7820](https://github.com/nocobase/nocobase/pull/7820))，作者 @mytharcher

  - 修正監聽不存在的外部資料來源事件導致的錯誤 ([#7855](https://github.com/nocobase/nocobase/pull/7855))，作者 @mytharcher

  - 修正服務拆分模式下，手動執行包含中斷節點的工作流程會卡在待處理狀態的問題 ([#7767](https://github.com/nocobase/nocobase/pull/7767))，作者 @mytharcher

  - 為工作流程日誌新增 `workflowId` 作為識別資料 ([#7789](https://github.com/nocobase/nocobase/pull/7789))，作者 @mytharcher

  - 解決叢集模式下工作流程調度器無法正確識別空閒狀態，可能導致插件就緒前不必要的佇列事件消費問題 ([#7768](https://github.com/nocobase/nocobase/pull/7768))，作者 @mytharcher

- **[存取控制]**
  - 支援關聯操作的資料範圍限制。([#7919](https://github.com/nocobase/nocobase/pull/7919))，作者 @2013xile

  - 關聯操作片段未生效的問題 ([#7876](https://github.com/nocobase/nocobase/pull/7876))，作者 @2013xile

- **[工作流程：人工節點]** 修正應使用的語言套件命名空間，以顯示正確的翻譯內容 ([#7877](https://github.com/nocobase/nocobase/pull/7877))，作者 @mytharcher

- **[使用者]** 當欄位名稱使用蛇形命名法時，索引重新整理不正確 ([#7785](https://github.com/nocobase/nocobase/pull/7785))，作者 @2013xile

- **[行動端（已棄用）]** 修正行動端日期欄位預設值彈窗無法選擇日期的問題 ([#7783](https://github.com/nocobase/nocobase/pull/7783))，作者 @zhangzhonghe

- **[工作流程：自訂變數]** 修正變數節點無配置時拋出錯誤的問題，作者 @mytharcher

- **[工作流程：自訂動作事件]** 修正監聽不存在的外部資料來源事件導致的錯誤，作者 @mytharcher

- **[模板列印]** 解析篩選條件中的變數，作者 @jiannx

- **[資料視覺化：ECharts]** 修正 ECharts 選項中標籤類型配置不生效的問題。作者 @heziqiang

- **[工作流程：審批]**
  - 修正待辦中心審批列表卡片上的日期格式，以顯示完整的日期與時間，作者 @mytharcher

  - 修正載入通知頻道的頁面大小不足，導致列表無法完整載入的問題，作者 @mytharcher

  - 修正查詢審批提交時的審批記錄列表所發生的效能問題，作者 @mytharcher

  - 修正重新載入關聯資料時，未排除主要集合欄位的問題，作者 @mytharcher

  - 修正多位審核人同時處理審批時發生的競爭條件，可能導致工作流程節點被執行超過一次的問題，作者 @mytharcher

  - 不再支援在並行分支中建立審批節點，以避免流程狀態導致的問題，作者 @mytharcher

  - 修正審批表單的聯動規則失效的問題，作者 @zhangzhonghe

  - 修正重複審批工作流程時拋出錯誤的問題，作者 @mytharcher

- **[郵件管理員]**
  - 新增同步日誌，作者 @jiannx

  - 同步 Microsoft 郵件讀取狀態時不帶時間戳，作者 @jiannx

  - 集合 mailMessages 新增索引，作者 @jiannx

  - 為索引新增遷移，作者 @jiannx

  - 修正 Outlook 中保留圖片與同步的問題，作者 @jiannx

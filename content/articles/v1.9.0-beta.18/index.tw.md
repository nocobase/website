---
title: "NocoBase v1.9.0-beta.18：資料遷移後自動更新序號欄位"
description: "v1.9.0-beta.18 版本發行說明"
---

### 🎉 新功能

- **[集合欄位：序號]** 資料遷移後自動更新序號欄位 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

- **[資料來源：REST API]** 在 RESTful API 資料來源設定中新增「錯誤訊息轉換器」選項 by @cgyrock

- **[驗證：OIDC]** 支援未驗證時自動重新導向至 SSO 網址 by @heziqiang

### 🚀 改進

- **[auth]** 修復 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile

- **[client]**
  - 在 Select 元件中，滑鼠懸停時顯示收合選項 ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh

  - 優化子表格的驗證訊息 ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh

  - 為更新記錄與刪除記錄動作按鈕新增載入狀態，避免重複請求 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher

  - 在訊息內容中使用三層大括號（`{{{` 和 `}}}`）作為變數，以避免變數被 Handlebars 跳脫 ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher

- **[動作：匯入記錄]** 允許為匯入欄位選擇 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh

- **[工作流程]** 為 UserSelect 新增「主要」資料來源上下文，以提供更通用的元件，可在其他位置使用 ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher

- **[集合欄位：Markdown(Vditor)]** 調整 Vditor 全螢幕內容寬度 ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

- **[非同步任務管理器]** 增強非同步任務的錯誤訊息，為使用者提供任務失敗的具體原因 ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher

- **[動作：匯入記錄 Pro]** 增強非同步任務的錯誤訊息，為使用者提供任務失敗的具體原因 by @mytharcher

- **[工作流程：審批]**
  - 修正 AssigneeSelect 中的變數選擇，限制僅能選取使用者集合的主鍵或外鍵 by @mytharcher

  - 使用通用元件以減少重複程式碼 by @mytharcher

  - 使手動執行（或由子流程節點觸發）的負載與記錄或主鍵相容。避免觸發上下文中的一致性問題。 by @mytharcher

  - 減少審批彈出視窗中需載入的關聯，以提供更佳效能 by @mytharcher

- **[審計日誌]** 將唯一識別碼欄位更新為 `text` 類型，以防止大量編輯時識別碼長度溢位 by @2013xile

- **[遷移管理器]** 資料遷移後自動更新序號欄位 by @cgyrock

### 🐛 錯誤修復

- **[server]** 修正匯入資料後，觸發的工作流程未加入處理佇列的問題，確保工作流程在匯入後能立即按預期執行 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher

- **[acl]** 修正當外部資料來源權限範圍使用與目前使用者相關的變數時，ACL 元資訊不正確的問題 ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile

- **[client]**
  - 修正 Variable.Input 中的延遲載入錯誤，該錯誤會導致變數選項選單不正確地重新渲染 ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher

  - 解決在關聯樹狀表格區塊中新增子記錄時的錯誤 ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh

  - 修正聯動規則下拉選取框的閃爍問題 ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe

  - 避免開啟預設值設定時拋出錯誤 ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher

  - 修正使用 Iframe 時的路由問題 ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe

  - 修正遠端 Select 在非物件值時未顯示正確標籤的問題 ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh

- **[database]** 修正：移除僅時間欄位在時間轉換中的 UTC 處理，以防止時區導致的偏移。 ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu

- **[動作：匯入記錄]**
  - 匯入的欄位與 ACL 設定中的欄位不符 ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile

  - 修正當匯入的 xlsx 檔案中欄位值為 `null` 時拋出錯誤的問題 ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher

  - 修正樹狀表格中匯入資料的問題 ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock

- **[工作流程]**
  - 修正當節點上的任務未定義時，執行頁面拋出錯誤的問題 ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher

  - 修正當節點被刪除時，執行畫布拋出錯誤的問題 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher

  - 修正佇列在訊息發布前關閉的問題 ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher

  - 修正已準備好的執行在停止前未發送至佇列的問題 ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher

  - 修正部分工作流程任務選單未顯示的問題 ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher

  - 修正任務連結至錯誤頁面的問題 ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher

  - 修正因提供者誤用導致任務計數未顯示的問題 ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher

- **[多應用管理器]** 日誌級別設定未套用至子應用程式 ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile

- **[存取控制]** 為外部資料來源的關聯操作新增權限檢查中介軟體 ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile

- **[集合欄位：多對多（陣列）]** 修正子表格中 m2m 陣列欄位無法更新的問題 ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock

- **[主題編輯器]** 在行動裝置上啟用主題切換器 ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe

- **[資料視覺化]**
  - 外部資料來源集合的篩選欄位設定未顯示特定屬性 ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile

  - 解決圖表查詢不支援 ACL 資料範圍的問題 ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile

- **[集合：樹狀]** 修正因不正確的樹狀父欄位查詢導致路徑表更新失敗的問題 ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile

- **[工作流程：人工節點]** 修正人工任務計數不正確的問題 ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher

- **[非同步任務管理器]** 為 `asyncTasks` 集合新增遷移規則，避免非同步任務記錄被遷移 ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher

- **[資料來源管理器]** 修正資料庫密碼變更時，資料來源密碼更新失敗的問題 ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock

- **[部門]** 修正部門關聯欄位無法編輯的問題 ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang

- **[工作流程：子流程]** 修正當工作流程數量超過 200 時，選取的工作流程顯示「N/A」的問題 by @mytharcher

- **[工作流程：審批]**
  - 修正語言檔案 by @mytharcher

  - 修正返回分支中，審批記錄未包含在任務結果的問題 by @mytharcher

  - 修正使用 ACL 範圍變數載入相關審批時無資料的問題 by @mytharcher

  - 修正因 `RemoteSelect` 變更導致取得 `approvalRecords.reassignee` 時的權限問題 by @mytharcher

  - 修正當頁面重新整理且模態框開啟時，列印動作無法運作的問題 by @mytharcher

  - 新增遷移以避免新增索引時發生重複記錄錯誤 by @mytharcher

  - 修正當分支包含順序與會簽時，流程不正確的問題 by @mytharcher

  - 修正使用者提交含備註的審批後，任務結果中的備註為 null 的問題 by @mytharcher

  - 修正使用者重新提交後，執行上下文中無申請人資料的問題 by @mytharcher

  - 修正於詳細資訊抽屜載入記錄相關審批時拋出權限錯誤的問題 by @mytharcher

  - 修正審批人彈出視窗未顯示標題的問題 by @zhangzhonghe

  - 修正僅聯合角色模式下載入相關審批時拋出錯誤的問題 by @mytharcher

  - 修正列出審批時發生記憶體不足（OOM）的問題 by @mytharcher

---
title: "NocoBase v2.1.0-beta.27：AI 員工可使用 Bash 指令搜尋捆綁文件"
description: "v2.1.0-beta.27 版本發布說明"
---

### 🎉 新功能

- **[伺服器]** AI 員工可使用 Bash 指令搜尋捆綁的文件 ([#9269](https://github.com/nocobase/nocobase/pull/9269)) - @2013xile

- **[AI 員工]** 工作流程 AI 員工節點支援從附件欄位載入檔案。 ([#9402](https://github.com/nocobase/nocobase/pull/9402)) - @cgyrock

- **[文字複製]** 唯讀文字欄位支援「顯示複製按鈕」選項 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) - @katherinehhh

### 🚀 改進

- **[客戶端]** 允許為序號欄位指派欄位值 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) - @mytharcher

- **[區塊：看板]** 改善 v2 詳細欄位間距一致性，並讓看板卡片與欄位間距更適配主題設定。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) - @jiannx

- **[AI 員工]** 改善 Nathan 的 RunJS 編輯工具，並減少長時間 AI 聊天對話中的延遲 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) - @2013xile

- **[工作流程：審批]** 修正審批表單的必填驗證行為 - @zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]** 修正 v2 流程表單中未翻譯的資料表欄位驗證訊息 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) - @jiannx

- **[客戶端]**
  - 修正篩選表單無法收合的問題 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) - @zhangzhonghe

  - 修正使用自訂多選篩選器過濾純量欄位時的錯誤 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) - @zhangzhonghe

  - 修正當檔案中繼資料遺失時，AttachmentURL 欄位下載檔名不正確的問題。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) - @mytharcher

  - 修正 v2 中 DividerItem 適配主題的問題 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) - @katherinehhh

  - 修正 v1 子表格連結規則錯誤變更必填欄位樣式的問題 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) - @zhangzhonghe

  - 修正表單區塊中的「隱藏（保留值）」欄位，使其在 UI 編輯器模式下保持可見，並恢復在欄位指派中為其指派值輸入的支援 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) - @jiannx

  - 修正 v2 表格批次工作流程觸發器，使行選取在分頁間重新導向後保持一致，並能在返回後再次選取行 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) - @jiannx

- **[客戶端-v2]**
  - 修正欄位設定中選取關聯欄位時的錯誤。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) - @gchust

  - 修正應用程式啟動後閃現 404 頁面的問題 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) - @zhangzhonghe

- **[伺服器]** 修正子應用程式的 OAuth 探索請求被路由為主應用程式請求的問題 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) - @2013xile

- **[資料來源：主要]** 修正啟用資料表前綴時，匯入的資料庫表格使用了錯誤的前綴表名 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) - @2013xile

- **[通知：應用內訊息]** 修正收到即時通知後，應用內訊息列表未重新整理的問題 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) - @mytharcher

- **[資料來源管理器]** 防止在外部資料來源的自訂範圍權限中編輯和刪除所有記錄 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) - @katherinehhh

- **[AI：MCP 伺服器]** 修正 MCP 伺服器打包，使其包含執行時期依賴 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) - @2013xile

- **[流程引擎]** 修正 AI 產生的區塊無法從參考範本轉換回重複範本的問題。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) - @gchust

- **[動作：匯入記錄 Pro]** 修正日期欄位的重複檢查始終失敗的問題 - @mytharcher

- **[密碼政策]** 修正服務重啟後，永久鎖定的使用者仍可登入的問題 - @2013xile

- **[工作流程：審批]** 修正審批工作流程設定中，選取記錄抽屜被遮擋的問題 - @zhangzhonghe

- **[備份管理器]** 修正 pg schema 適配問題 - @Andrew1989Y

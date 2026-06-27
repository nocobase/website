---
title: "NocoBase v2.1.0-alpha.35：新增 AI 員工 Localization Engineer Lina，協助在地化翻譯任務"
description: "v2.1.0-alpha.35 版本發行說明"
---

### 🎉 新功能

- **[未分類]** 新增 AI 員工「本地化工程師 Lina」，協助處理本地化翻譯任務 ([#9434](https://github.com/nocobase/nocobase/pull/9434))，由 @2013xile 貢獻
參考：[本地化管理](https://docs.nocobase.com/system-management/localization)<br>[Lina：本地化工程師](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[使用 Lina 與本地 HY-MT1.5-1.8B 翻譯本地化條目](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[日曆]** 為日曆插件新增客戶端 v2 支援。([#9464](https://github.com/nocobase/nocobase/pull/9464))，由 @jiannx 貢獻

- **[區塊：樹狀]** 為樹狀篩選區塊新增客戶端 v2 支援。([#9466](https://github.com/nocobase/nocobase/pull/9466))，由 @jiannx 貢獻

- **[檔案儲存：S3(Pro)]** 支援在 v2 檔案管理器中透過 S3 Pro 儲存上傳檔案。由 @Molunerfinn 貢獻

### 🚀 改進

- **[建置]** 新增回歸測試覆蓋，確保 `deleteServerFiles` 在 Windows 與 POSIX 路徑下不會移除 `client` 與 `client-v2` 的建置產物。([#9318](https://github.com/nocobase/nocobase/pull/9318))，由 @Molunerfinn 貢獻

- **[客戶端]** 在一對多表格區塊的關聯選擇對話框中，排除已關聯的記錄 ([#9448](https://github.com/nocobase/nocobase/pull/9448))，由 @katherinehhh 貢獻

- **[AI 員工]** AI 員工並行對話互動與效能最佳化 ([#9462](https://github.com/nocobase/nocobase/pull/9462))，由 @cgyrock 貢獻

- **[檔案管理器]** 第三方儲存插件現在可以在 v2 檔案管理器設定頁面上註冊自己的儲存類型表單。([#9439](https://github.com/nocobase/nocobase/pull/9439))，由 @Molunerfinn 貢獻

- **[AI：知識庫]** 知識庫的唯一識別碼可在建立時進行設定。由 @cgyrock 貢獻

### 🐛 錯誤修復

- **[客戶端]**
  - 修復防止在表格中開啟關聯欄位的快速編輯 ([#9469](https://github.com/nocobase/nocobase/pull/9469))，由 @katherinehhh 貢獻

  - 修復 v2 資料區塊中的多選欄位應顯示選項標籤而非值 ([#9472](https://github.com/nocobase/nocobase/pull/9472))，由 @katherinehhh 貢獻

  - 修復當篩選表單有預設值時，表格請求重複發送的問題 ([#9423](https://github.com/nocobase/nocobase/pull/9423))，由 @zhangzhonghe 貢獻

  - 修復無法移除舊版預設值設定的問題。([#9470](https://github.com/nocobase/nocobase/pull/9470))，由 @gchust 貢獻

  - 修復無法為關聯欄位的選擇欄位選取選項的問題。([#9088](https://github.com/nocobase/nocobase/pull/9088))，由 @gchust 貢獻

  - 修復提交後系統設定顯示為空的問題 ([#9458](https://github.com/nocobase/nocobase/pull/9458))，由 @zhangzhonghe 貢獻

  - 修正在表格區塊事件流程中取消選取行資料時，目標區塊資料範圍設定錯誤的問題。([#9443](https://github.com/nocobase/nocobase/pull/9443))，由 @gchust 貢獻

  - 修正在 v2 表格區塊中變更關聯欄位標題欄位時發生的錯誤 ([#9451](https://github.com/nocobase/nocobase/pull/9451))，由 @katherinehhh 貢獻

  - 修正 V2 聯動規則以支援設定欄位的可選選項 ([#9399](https://github.com/nocobase/nocobase/pull/9399))，由 @jiannx 貢獻

- **[客戶端 v2]**
  - 在 v2 佈局中篩選 v1 選單後，保留空的群組 ([#9478](https://github.com/nocobase/nocobase/pull/9478))，由 @zhangzhonghe 貢獻

  - 修復在插件啟用對話框後頁面變空白的問題 ([#9455](https://github.com/nocobase/nocobase/pull/9455))，由 @zhangzhonghe 貢獻

  - 修復在生產建置中，當 v1 管理頁面引用 v2 插件模組時會崩潰的問題。([#9460](https://github.com/nocobase/nocobase/pull/9460))，由 @Molunerfinn 貢獻

- **[cli-v1]** 修復使用 create-nocobase-app 建立的應用程式因 app-dev 客戶端路徑解析導致開發啟動失敗的問題。([#9465](https://github.com/nocobase/nocobase/pull/9465))，由 @Molunerfinn 貢獻

- **[伺服器]** 修復(檔案管理器)：強制下載本地/公開儲存中的動態內容檔案 ([#9437](https://github.com/nocobase/nocobase/pull/9437))，由 @mytharcher 貢獻

- **[AI 員工]**
  - 修復 plugin-ai 載入錯誤 ([#9483](https://github.com/nocobase/nocobase/pull/9483))，由 @cgyrock 貢獻

  - 修復 Ollama 測試飛行需要輸入金鑰的問題 ([#9450](https://github.com/nocobase/nocobase/pull/9450))，由 @cgyrock 貢獻

- **[區塊：多步驟表單]** 修復在 v1 步驟表單區塊中啟用全高時的捲軸問題 ([#9468](https://github.com/nocobase/nocobase/pull/9468))，由 @katherinehhh 貢獻

- **[部門]** 修正在「使用者與權限」設定中，「新增使用者」與「新增部門」按鈕的翻譯衝突 ([#9456](https://github.com/nocobase/nocobase/pull/9456))，由 @katherinehhh 貢獻

- **[工作流程]** 修復：在操作與自訂動作事件的 FlowModel 工作流程綁定對話框中，還原輔助文字 ([#9447](https://github.com/nocobase/nocobase/pull/9447))，由 @mytharcher 貢獻

- **[區塊：Markdown]** 修復 v2 Markdown 區塊報錯的問題 ([#9440](https://github.com/nocobase/nocobase/pull/9440))，由 @zhangzhonghe 貢獻

- **[工作流程：Webhook]** 修復建立回應節點時被 `statusCode` 設定驗證攔截的問題。由 @mytharcher 貢獻

- **[工作流程：審批]**
  - 修正在行動裝置上的審批表單佈局。由 @zhangzhonghe 貢獻

  - 修正在委派審批任務時，審批記錄索引重複的問題。由 @mytharcher 貢獻

- **[備份管理器]** 修復當找不到檔案時，備份會失敗並報錯的問題。由 @gchust 貢獻

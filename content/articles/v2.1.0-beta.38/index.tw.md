---
title: "NocoBase v2.1.0-beta.38：新增動態 API 指令相容性防護"
description: "v2.1.0-beta.38 版本發行說明"
---

### 🎉 新功能

- **[cli]** 新增動態 API 指令相容性防護 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) - 感謝 @chenos
- **[client-v2]**

  - 支援內嵌 v2 頁面與公開表單 v2 頁面 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) - 感謝 @zhangzhonghe
  - 將 client-v2 外掛管理頁面重寫為響應式卡片式 UI，包含分類篩選、搜尋、啟用/停用/移除、大量啟用及外掛詳情彈窗；同時讓 client-v1 外掛管理頁面在窄螢幕上具備響應式設計。([#9573](https://github.com/nocobase/nocobase/pull/9573)) - 感謝 @Molunerfinn
- **[工作流程]**

  - 為工作流程新增逾時控制，若設定逾時選項，支援自動中止逾時執行 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) - 感謝 @mytharcher
  - 新增管理員 API，可從起點或指定節點重新執行已啟動的工作流程。([#9569](https://github.com/nocobase/nocobase/pull/9569)) - 感謝 @mytharcher
- **[區塊：甘特圖]** 新增甘特圖區塊的 v2 支援。([#9545](https://github.com/nocobase/nocobase/pull/9545)) - 感謝 @jiannx
- **[工作流程：Webhook]** 為逾時的 Webhook 工作流程（同步模式）新增 408 回應狀態 - 感謝 @mytharcher
- **[工作流程：子流程]** 支援工作流程中的逾時設定 - 感謝 @mytharcher
- **[認證：OIDC]** 將 `plugin-auth-oidc` 遷移至 v2 管理後台；登入按鈕、管理設定表單及 SSO 自動重新導向現已可在 v2 下運作。 - 感謝 @Molunerfinn
- **[工作流程：審核]** 支援工作流程中的逾時設定 - 感謝 @mytharcher
- **[認證：LDAP]** 新增 v2 客戶端入口，使 LDAP 驗證器能在 v2 應用程式中呈現其登入表單及管理設定。 - 感謝 @Molunerfinn

### 🚀 改進

- **[client-v2]**

  - 新增 v2 表格列選取設定 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) - 感謝 @katherinehhh
  - 支援操作面板的操作顏色 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) - 感謝 @katherinehhh
  - 從選單設定中移除「隱藏」選項 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) - 感謝 @zhangzhonghe
- **[client]** 從選單項目設定中移除「隱藏」選項 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) - 感謝 @zhangzhonghe
- **[cli]** 簡化應用程式升級流程 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) - 感謝 @chenos
- **[AI 員工]** 改進 LLM 基礎 URL 欄位，使其在建立和編輯表單中能使用全域範圍變數。([#9615](https://github.com/nocobase/nocobase/pull/9615)) - 感謝 @cgyrock
- **[IP 限制]** 為 IP 限制外掛新增 v2 客戶端。 - 感謝 @Molunerfinn

### 🐛 錯誤修復

- **[流程引擎]**

  - 修正前端日誌層級不正確的問題。([#9577](https://github.com/nocobase/nocobase/pull/9577)) - 感謝 @gchust
  - 修正於搜尋框中輸入時，階層式選單不穩定的問題 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) - 感謝 @zhangzhonghe
  - 修正彈窗中表單成功提交後，表格動作連動規則會錯誤執行的問題。([#9445](https://github.com/nocobase/nocobase/pull/9445)) - 感謝 @gchust
- **[ai]** 將 LangChain 依賴鎖定至穩定版本，以防止 Ollama 工具執行失敗，並避免影響上游發行版本 ([#9604](https://github.com/nocobase/nocobase/pull/9604)) - 感謝 @cgyrock
- **[client-v2]**

  - 修正子應用登入分頁呈現原始翻譯模板的問題，並防止 v2 認證方式編輯抽屜在提交時遺失欄位值。([#9581](https://github.com/nocobase/nocobase/pull/9581)) - 感謝 @Molunerfinn
  - 透過使用 CSS line-clamp 取代 antd Typography 省略號，改善外掛管理頁面效能。([#9593](https://github.com/nocobase/nocobase/pull/9593)) - 感謝 @Molunerfinn
- **[client]**

  - 修正 v2 時間欄位的時間格式保留問題 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) - 感謝 @katherinehhh
  - 修正子表單連動的隱藏狀態同步問題 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) - 感謝 @katherinehhh
  - 提高掃描輸入圖片上傳限制 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) - 感謝 @katherinehhh
  - 修正行動裝置日期選擇器彈出值的同步問題 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) - 感謝 @katherinehhh
  - 修正切換選單後頁面分頁消失的問題 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) - 感謝 @zhangzhonghe
  - 修正子表單中的子表格無法新增第二列的問題 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) - 感謝 @katherinehhh
  - 提高掃描輸入圖片上傳限制 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) - 感謝 @katherinehhh
  - 修正行動裝置日期選擇器彈出值的同步問題 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) - 感謝 @katherinehhh
  - 修正子表單中的子表格無法新增第二列的問題 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) - 感謝 @katherinehhh
  - 修正 v2 時間欄位的時間格式保留問題 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) - 感謝 @katherinehhh
- **[集合：樹狀]** 修正樹狀集合中父子資料循環導致的錯誤 ([#9603](https://github.com/nocobase/nocobase/pull/9603)) - 感謝 @zhangzhonghe
- **[工作流程：自訂動作事件]**

  - 修正自訂動作表格按鈕（含多筆記錄上下文）錯誤地允許選取自訂上下文工作流程的問題。([#9608](https://github.com/nocobase/nocobase/pull/9608)) - 感謝 @mytharcher
  - 根據當前區塊集合篩選自訂動作工作流程的綁定選項。([#9610](https://github.com/nocobase/nocobase/pull/9610)) - 感謝 @mytharcher
- **[檔案管理員]**

  - 改進 PDF 預覽失敗訊息，並記錄外部儲存的 CORS 需求。([#9600](https://github.com/nocobase/nocobase/pull/9600)) - 感謝 @mytharcher
    參考：[檔案預覽](docs/docs/en/file-manager/file-preview/index.md)
  - 改進 PDF 預覽失敗訊息，並記錄外部儲存的 CORS 需求。([#9600](https://github.com/nocobase/nocobase/pull/9600)) - 感謝 @mytharcher
    參考：[檔案預覽](docs/docs/en/file-manager/file-preview/index.md)
  - 修正檔案上傳期間的 Unicode 檔案名稱正規化，以避免產生含有控制字元的物件鍵值。([#9584](https://github.com/nocobase/nocobase/pull/9584)) - 感謝 @mytharcher
- **[AI：知識庫]** 將 LangChain 依賴鎖定至穩定版本，以防止 Ollama 工具執行失敗，並避免影響上游發行版本 - 感謝 @cgyrock
- **[模板列印]** 修正模板列印 PDF 轉換錯誤未能正確回傳至客戶端的問題 - 感謝 @jiannx

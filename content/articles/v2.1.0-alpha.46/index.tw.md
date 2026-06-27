---
title: "NocoBase v2.1.0-alpha.46：將使用者與角色及權限設定頁面遷移至 v2"
description: "v2.1.0-alpha.46 版本發行說明"
---

### 🎉 新功能

- **[client-v2]** 新增 `TypedVariableInput`，讓 v2 郵件外掛中的 SMTP 連接埠與安全模式欄位可接受類型常數或 `{{ $env.X }}` 變數。([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn
- **[存取控制]** 將使用者與角色及權限設定頁面遷移至 v2。([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 改進

- **[server]** 現代化客戶端現在透過 `/v/` 而非 `/v2/` 提供服務。([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn
- **[ai]** 升級 `xlsx` 以避免安全性問題。([#9675](https://github.com/nocobase/nocobase/pull/9675)) by @mytharcher
- **[client]** 增強部分內建 RunJS 函式的自動完成支援。([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[cli]** 改善初始化與自我更新指引。([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos
- **[undefined]** 更新開源外掛的 Embed NocoBase 文件。([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  參考：[Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[部門]** 新增 v2 設定頁面，用於管理部門、部門成員及使用者部門指派。([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx
- **[Auth: SAML 2.0]** SAML/CAS 登入重新導向現在遵循現代化客戶端前綴。by @Molunerfinn
- **[Action: Import records Pro]** 升級 `xlsx` 以避免安全性問題。by @mytharcher
- **[Auth: OIDC]** OIDC 登入重新導向現在遵循現代化客戶端前綴。by @Molunerfinn
- **[Workflow: Approval]** 調整審批觸發器與節點配置的驗證規則，以確保 UI 相關欄位存在。by @mytharcher

### 🐛 錯誤修復

- **[client-v2]**

  - 修復當自訂欄位寬度設為 0 時，v2 表格欄位變為不可見的問題。([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh
  - 調整所有關聯欄位選擇器，將關聯欄位限制為最多兩層。([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx
  - 修復選單聯動規則儲存錯誤。([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - 修復 v2 頁面上區塊上方間距過大的問題。([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
  - 保留已指派的欄位值。([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh
- **[client]**

  - 修復在參照表單範本中儲存樹狀關聯欄位時的錯誤。([#9643](https://github.com/nocobase/nocobase/pull/9643)) by @zhangzhonghe
  - 修復在行動裝置上選取的關聯欄位資料未顯示的問題。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - 修復重新整理頁面後，區塊可能錯誤顯示為已刪除的問題。([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe
  - 修復表格區塊中記錄操作聯動規則行為不正確的問題。([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - 修復欄位被聯動規則隱藏後再次顯示時變成唯讀的問題。([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[flow-engine]**

  - 修復為子表單設定欄位值時頁面卡住的問題。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - 修復切換 UI 配置模式開關後，彈出視窗顯示過時 UI 資料的問題。([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
  - 修復滑鼠懸停在關聯欄位上時，欄位搜尋被清除的問題。([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe
- **[cli]** 修復 nginx 範本，使其以 JavaScript MIME 類型提供 `.mjs` 資源。([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 修復匯入數值型密碼值可能失敗的問題。([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[Collection: SQL]**

  - 封鎖 SQL 集合存取敏感的 PostgreSQL 元資料。([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile
- **[資料來源管理員]** 修復 v2 資料來源管理員中的多空格欄位本地化問題。([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx
- **[AI 員工]**

  - 隱藏前端訊息中的原始 LLM 提供者錯誤。([#9678](https://github.com/nocobase/nocobase/pull/9678)) by @cgyrock
  - 工作流程 AI 員工節點現在可以使用預設模型。([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock
  - 修復 AI 提供者基礎 URL 驗證。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
  - 修復 AI 員工工作流程節點中的 `ctx.get` 錯誤。([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
- **[Action: Duplicate record]** 修復重複記錄提交失敗時，按鈕狀態未重置的問題。([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[Workflow: Custom action event]** 修復工作流程觸發動作在工作台動作面板按鈕清單中遺失的問題。([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh
- **[日曆]** 修復在 v2 頁面中，日曆事件顏色未從設定的顏色欄位渲染的問題。([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
- **[Notification: In-app message]** 修復應用程式內通知頻道時間戳過濾器中的 SQL 注入風險。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[流程引擎]**

  - 修復拖曳彈出視窗分頁以重新排序時無法運作的問題。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - 修復複製範本後修改區塊，可能意外影響原始區塊內容的問題。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[授權設定]** 修復當 pkg 登入檢查緩慢或無法連線時，授權設定頁面可能長時間掛起的問題。([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[存取控制]** 修復當聯合角色為預設角色時，首次登入權限不完整的問題。([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[Block: Gantt]** 改善甘特圖工具提示位置，避免遮蓋任務條，並在任務條內外一致對齊任務標籤。([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx
- **[Workflow: JavaScript]** 說明工作流程 JavaScript 模組支援模式不安全，且非權限邊界。([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  參考：[Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[檔案管理員]** 修復本地檔案儲存路徑驗證，以防止不安全路徑逸出設定的儲存根目錄。([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[密碼政策]**

  - 修復當底層錯誤無狀態碼時，登入失敗會以「argument #1 unsupported type undefined」掩蓋真實錯誤的問題。by @Molunerfinn
  - 修復數值型密碼值可能導致密碼政策驗證失敗的問題。by @2013xile
- **[Data source: REST API]** 修復因資料來源管理員 client-v2 類型宣告不匹配，導致 REST API 資料來源外掛宣告建置失敗的問題。by @katherinehhh

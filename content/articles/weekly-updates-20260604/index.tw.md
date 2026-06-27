---
title: "每週更新｜新增動態 API 指令相容性防護"
description: "這是 NocoBase 從 2026 年 5 月 28 日至 6 月 4 日的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/en/blog/v2.0.61)

*發布日期：2026-06-03*

### 🚀 改進

- **[client]** 增強了部分內建 RunJS 函數的自動完成支援。([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[undefined]** 更新了開源插件的 Embed NocoBase 文件。([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  參考：[Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 錯誤修復

- **[flow-engine]**

  - 修復了為子表單設定欄位值時頁面卡住的問題。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - 修復了切換 UI 配置模式開關後，彈窗顯示過時 UI 資料的問題。([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
- **[client]**

  - 修復了表格區塊中記錄操作聯動規則行為不正確的問題。([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - 修復了在行動裝置上已選的關聯欄位資料未顯示的問題。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - 修復了欄位被聯動規則隱藏後再次顯示時變成唯讀的問題。([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** 修復了 nginx 模板，使其能以 JavaScript MIME 類型提供 `.mjs` 資源。([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 修復了匯入數值型密碼值可能失敗的問題。([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[AI employees]** 修復了 AI 提供者基礎 URL 驗證問題。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
- **[Flow engine]**

  - 修復了拖曳彈窗頁籤重新排序無效的問題。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - 修復了複製區塊模板後修改模板可能意外影響原始區塊內容的問題。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[Notification: In-app message]** 修復了應用內通知頻道時間戳過濾器中的 SQL 注入風險。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[License settings]** 修復了當 pkg 登入檢查緩慢或無法連線時，授權設定頁面可能長時間掛起的問題。([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Workflow: JavaScript]** 說明工作流程 JavaScript 模組支援模式不安全，並非權限邊界。([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  參考：[Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** 修復了當聯合角色為預設角色時，首次登入權限不完整的問題。([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[File manager]** 修復了本地檔案儲存路徑驗證，以防止不安全路徑逃逸配置的儲存根目錄。([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Password policy]** 修復了密碼策略驗證可能對數值型密碼值失敗的問題。by @2013xile

### [v2.0.60](https://www.nocobase.com/en/blog/v2.0.60)

*發布日期：2026-05-29*

### 🚀 改進

- **[AI employees]** 改進了 LLM Base URL 欄位，使其可以在建立和編輯表單中使用全域範圍變數。([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock

### 🐛 錯誤修復

- **[client]** 修復頂部導航欄中徽章的寬度 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[AI employees]** 修復了在引用表格區塊被移除後，AI 快捷按鈕獲取空區塊上下文的問題。([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[Migration manager]** 修復 PostgreSQL 遷移差異，使本地欄位變成繼承欄位時，不會刪除子繼承欄位。by @hongboji

### [v2.0.59](https://www.nocobase.com/en/blog/v2.0.59)

*發布日期：2026-05-28*

### 🐛 錯誤修復

* **[ai]** 將 LangChain 依賴鎖定到穩定版本，以防止 Ollama 模型工具呼叫失敗，並避免影響上游版本。([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
* **[flow-engine]** 修復了前端日誌級別不正確的問題。([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
* **[Collection: Tree]** 修復了樹狀資料中因循環父子關係導致查詢失敗時錯誤訊息不明確的問題。([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
* **[AI: Knowledge base]** 將 LangChain 依賴鎖定到穩定版本，以防止 Ollama 模型工具呼叫失敗，並避免影響上游版本。by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/en/blog/v2.1.0-beta.44)

*發布日期：2026-06-03*

### 🚀 改進

- **[Workflow: Approval]** 調整了審批觸發器和節點配置的驗證規則，以確保 UI 相關欄位存在。by @mytharcher

### 🐛 錯誤修復

- **[client]** 修復了在行動裝置上已選的關聯欄位資料未顯示的問題。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
- **[client-v2]**

  - 修復了選單聯動規則儲存錯誤。([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - 修復了 v2 頁面上區塊上方間距過大的問題。([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
- **[flow-engine]** 修復了為子表單設定欄位值時頁面卡住的問題。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
- **[AI employees]**

  - 修復了 AI 提供者基礎 URL 驗證問題。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
  - 修復了 AI 員工工作流程節點中的 `ctx.get` 錯誤。([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
- **[Notification: In-app message]** 修復了應用內通知頻道時間戳過濾器中的 SQL 注入風險。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[Action: Duplicate record]** 修復了重複記錄提交失敗時按鈕狀態未重置的問題。([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[Calendar]** 修復了在 v2 頁面中，日曆事件顏色未從配置的顏色欄位渲染的問題。([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
- **[Flow engine]**

  - 修復了複製區塊模板後修改模板可能意外影響原始區塊內容的問題。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
  - 修復了拖曳彈窗頁籤重新排序無效的問題。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/en/blog/v2.1.0-beta.43)

*發布日期：2026-06-02*

### 🎉 新功能

- **[client-v2]** 新增 `TypedVariableInput`，使 v2 郵件插件的 SMTP 連接埠和安全模式欄位可以接受類型化常數或 `{{ $env.X }}` 變數。([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn
- **[Access control]** 將使用者和角色與權限設定頁面遷移至 v2。([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 改進

- **[undefined]** 更新開源插件的 Embed NocoBase 文件 ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  參考：[Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** 增強了部分內建 RunJS 函數的自動完成支援。([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[cli]** 改進初始化與自我更新指引 ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos

### 🐛 錯誤修復

- **[client]**

  - 修復了重新整理頁面後區塊可能錯誤顯示為已刪除的問題 ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe
  - 修復了表格區塊中記錄操作聯動規則行為不正確的問題。([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - （聯動規則）修復了欄位被隱藏後再次顯示時變成唯讀的問題 ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** 修復 nginx 模板，使其能以 JavaScript MIME 類型提供 `.mjs` 資源。([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 修復了匯入數值型密碼值可能失敗的問題 ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[flow-engine]**

  - 修復了切換 UI 配置模式開關後，彈窗顯示過時 UI 資料的問題。([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
  - 修復了滑鼠懸停在關聯欄位上時欄位搜尋被清除的問題 ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe
- **[client-v2]** 保留指派欄位值 ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh
- **[File manager]** 修復了本地檔案儲存路徑驗證，以防止不安全路徑逃逸配置的儲存根目錄。([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Block: Gantt]** 改進了甘特圖工具提示的放置位置，避免遮蓋任務條，並使任務標籤在條內外保持一致對齊 ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx
- **[Access control]** 修復了當聯合角色為預設角色時，首次登入權限不完整的問題 ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[License settings]** 修復了當 pkg 登入檢查緩慢或無法連線時，授權設定頁面長時間掛起的問題 ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Workflow: JavaScript]** 說明工作流程 JavaScript 模組支援模式不安全，並非權限邊界 ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  參考：[Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Password policy]** 修復了密碼策略驗證可能對數值型密碼值失敗的問題 by @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/en/blog/v2.1.0-beta.40)

*發布日期：2026-05-30*

### 🎉 新功能

- **[client-v2]** 支援在提交表單操作中指派欄位值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
- **[Office File Previewer]** 將 Office 檔案預覽插件遷移至 v2 (FlowEngine) 客戶端。([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn

### 🚀 改進

- **[Notification manager]** 將通知相關插件遷移至 v2。([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn

### 🐛 錯誤修復

- **[client]** 修復頂部導航欄中徽章的寬度 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[Block: Gantt]** 修復了 v2 甘特圖共享資料夾路徑並新增斑馬紋。([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[License settings]** 為授權設定和商業授權注入新增了 client-v2 支援。([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[Workflow: Custom action event]** 修復 v2 區塊操作選單中重複的「觸發工作流程」選項 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
- **[AI employees]** 修復了在引用表格區塊被移除後，AI 快捷按鈕獲取空區塊上下文的問題。([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[plugin-commercial]** 新增了 client-v2 商業授權元件和頂部欄授權狀態入口。by @jiannx
- **[Migration manager]** 修復 PostgreSQL 遷移差異，使本地欄位變成繼承欄位時，不會刪除子繼承欄位。by @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/en/blog/v2.1.0-beta.38)

*發布日期：2026-05-29*

### 🎉 新功能

- **[cli]** 新增動態 API 命令相容性防護 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
- **[client-v2]**

  - 支援嵌入 v2 頁面和公開表單 v2 頁面 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - 將 client-v2 插件管理頁面重寫為響應式卡片式 UI，包含分類篩選、搜尋、啟用/停用/移除、批量啟用和插件詳情模態框；同時使 client-v1 插件管理頁面在窄螢幕上具有響應式。([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
- **[Workflow]**

  - 為工作流程新增超時控制，支援在設定了超時選項時自動中止超時執行 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
  - 新增管理員 API，可從頭或指定節點重新執行已啟動的工作流程執行。([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher
- **[Block: Gantt]** 新增了甘特圖區塊的 v2 支援。([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx
- **[Workflow: Webhook]** 為超時的 webhook 工作流程（同步模式）新增 408 回應狀態 by @mytharcher
- **[Workflow: Subflow]** 支援工作流程中的超時設定 by @mytharcher
- **[Auth: OIDC]** 將 `plugin-auth-oidc` 遷移至 v2 管理後台；登入按鈕、管理設定表單和 SSO 自動重定向現在可在 v2 下運作。by @Molunerfinn
- **[Workflow: Approval]** 支援工作流程中的超時設定 by @mytharcher
- **[Auth: LDAP]** 新增 v2 客戶端入口，使 LDAP 認證器能在 v2 應用程式上渲染其登入表單和管理設定。by @Molunerfinn

### 🚀 改進

- **[client-v2]**

  - 新增 v2 表格行選取設定 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh
  - 支援操作面板操作顏色 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh
  - 從選單配置中移除「隱藏」選項 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe
- **[client]** 從選單項目設定中移除「隱藏」選項 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe
- **[cli]** 簡化應用程式升級流程 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos
- **[AI employees]** 改進了 LLM Base URL 欄位，使其可以在建立和編輯表單中使用全域範圍變數。([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock
- **[IP restriction]** 為 IP 限制插件新增 v2 客戶端。by @Molunerfinn

### 🐛 錯誤修復

- **[flow-engine]**

  - 修復了前端日誌級別不正確的問題。([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
  - 修復了在搜尋框中輸入時級聯選單不穩定的問題 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe
  - 修復了在彈窗中成功提交表單後，表格操作聯動規則會錯誤執行的問題。([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
- **[ai]** 將 LangChain 依賴鎖定到穩定版本，以防止 Ollama 工具執行失敗，並避免影響上游版本 ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
- **[client-v2]**

  - 修復子應用登入頁籤渲染原始翻譯模板的問題，並防止 v2 認證方式編輯抽屜在提交時丟棄欄位值。([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn
  - 透過使用 CSS line-clamp 替代 antd Typography 省略號來改善插件管理頁面效能。([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn
- **[client]**

  - 修復 v2 時間欄位的保留時間格式 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 修復子表單聯動的同步隱藏狀態 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  - 增加掃描輸入圖片上傳限制 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - 修復同步行動日期選擇器彈出值 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 修復切換選單後頁面頁籤消失的問題 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
  - 修復子表單中的子表格無法新增第二行的問題 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 增加掃描輸入圖片上傳限制 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
- **[Collection: Tree]** 修復樹狀集合中因循環父子資料導致的錯誤 ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
- **[Workflow: Custom action event]**

  - 修復了具有多筆記錄上下文的自訂操作表格按鈕錯誤地允許選取自訂上下文工作流程的問題。([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
  - 根據當前區塊集合過濾自訂操作工作流程綁定選項。([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher
- **[File manager]**

  - 改進了 PDF 預覽失敗訊息，並記錄了外部儲存的 CORS 要求。([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    參考：[File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - 修復了檔案上傳期間的 Unicode 檔案名稱正規化，以避免產生包含控制字元的物件鍵。([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
- **[AI: Knowledge base]** 將 LangChain 依賴鎖定到穩定版本，以防止 Ollama 工具執行失敗，並避免影響上游版本 by @cgyrock
- **[Template print]** 修復了模板列印 PDF 轉換錯誤未正確返回給客戶端的問題 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/en/blog/v2.1.0-alpha.45)

*發布日期：2026-05-29*

### 🎉 新功能

- **[client-v2]**

  - 支援在提交表單操作中指派欄位值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
  - 支援嵌入 v2 頁面和公開表單 v2 頁面 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - 在 v2 管理後台新增「安全性」選單和「Token 策略」設定頁面；使用者中心現在支援「變更密碼」。([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
  - 將 client-v2 插件管理頁面重寫為響應式卡片式 UI，包含分類篩選、搜尋、啟用/停用/移除、批量啟用和插件詳情模態框；同時使 client-v1 插件管理頁面在窄螢幕上具有響應式。([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
- **[cli]**

  - 新增動態 API 命令相容性防護 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
  - 支援基本認證 ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
- **[Office File Previewer]** 將 Office 檔案預覽插件遷移至 v2 (FlowEngine) 客戶端。([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn
- **[Workflow]**

  - 為工作流程新增超時控制，支援在設定了超時選項時自動中止超時執行 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
  - 新增管理員 API，可從頭或指定節點重新執行已啟動的工作流程執行。([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher
- **[IdP: OAuth]** 為多應用部署中的應用單點登入新增基礎支援 ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile
- **[Block: Gantt]** 新增了甘特圖區塊的 v2 支援。([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx
- **[App SSO]** 新增了用於應用程式之間自動登入的 App SSO 插件 by @2013xile
- **[Password policy]** 將 plugin-password-policy 遷移至 client-v2 管理後台外殼，包含「密碼策略 / 鎖定使用者」設定頁面，以及使用者中心變更密碼表單上的客戶端規則強制執行。by @Molunerfinn
- **[Workflow: Webhook]** 為超時的 webhook 工作流程（同步模式）新增 408 回應狀態 by @mytharcher
- **[Workflow: Subflow]** 支援工作流程中的超時設定 by @mytharcher
- **[Auth: OIDC]** 將 `plugin-auth-oidc` 遷移至 v2 管理後台；登入按鈕、管理設定表單和 SSO 自動重定向現在可在 v2 下運作。by @Molunerfinn
- **[Workflow: Approval]** 支援工作流程中的超時設定 by @mytharcher
- **[App supervisor]** 為子應用程式新增了 App SSO 設定 by @2013xile
- **[Auth: LDAP]** 新增 v2 客戶端入口，使 LDAP 認證器能在 v2 應用程式上渲染其登入表單和管理設定。by @Molunerfinn

### 🚀 改進

- **[client-v2]**

  - 新增 v2 表格行選取設定 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh
  - 支援操作面板操作顏色 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh
  - 從選單配置中移除「隱藏」選項 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe
- **[client]** 從選單項目設定中移除「隱藏」選項 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe
- **[cli]** 簡化應用程式升級流程 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos
- **[Notification manager]** 將通知相關插件遷移至 v2。([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn
- **[AI employees]** 改進了 LLM Base URL 欄位，使其可以在建立和編輯表單中使用全域範圍變數。([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock
- **[Workflow]** 重構工作流程非同步節點可用性檢查 ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher
- **[Data visualization]** 為圖表區塊新增了 client v2 支援。([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
- **[IP restriction]** 為 IP 限制插件新增 v2 客戶端。by @Molunerfinn

### 🐛 錯誤修復

- **[client]**

  - 修復頂部導航欄中徽章的寬度 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
  - 增加掃描輸入圖片上傳限制 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - 修復切換選單後頁面頁籤消失的問題 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
  - 修復子表單中的子表格無法新增第二行的問題 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 修復 v2 時間欄位的保留時間格式 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 修復同步行動日期選擇器彈出值 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 修復子表單聯動的同步隱藏狀態 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
- **[flow-engine]**

  - 修復了前端日誌級別不正確的問題。([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
  - 修復了在搜尋框中輸入時級聯選單不穩定的問題 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe
  - 修復了在彈窗中成功提交表單後，表格操作聯動規則會錯誤執行的問題。([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
- **[ai]** 將 LangChain 依賴鎖定到穩定版本，以防止 Ollama 工具執行失敗，並避免影響上游版本 ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
- **[client-v2]**

  - 修復子應用登入頁籤渲染原始翻譯模板的問題，並防止 v2 認證方式編輯抽屜在提交時丟棄欄位值。([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn
  - 透過使用 CSS line-clamp 替代 antd Typography 省略號來改善插件管理頁面效能。([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn
  - 修復了瀏覽器語言元資料，使應用頁面遵循所選的應用語言，而不是標記為英文。([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
- **[build]**

  - 伺服器建置中的文字資源現在作為檔案複製，而不是轉換為 JavaScript 模組。([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  - 修復了插件伺服器混淆輸出，以避免 Node.js 執行時期套件中的瀏覽器全域變數。([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
- **[Block: Gantt]** 修復了 v2 甘特圖共享資料夾路徑並新增斑馬紋。([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[License settings]** 為授權設定和商業授權注入新增了 client-v2 支援。([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[Workflow: Custom action event]**

  - 修復 v2 區塊操作選單中重複的「觸發工作流程」選項 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
  - 根據當前區塊集合過濾自訂操作工作流程綁定選項。([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher
  - 修復了具有多筆記錄上下文的自訂操作表格按鈕錯誤地允許選取自訂上下文工作流程的問題。([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
- **[Collection: Tree]** 修復樹狀集合中因循環父子資料導致的錯誤 ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
- **[File manager]**

  - 改進了 PDF 預覽失敗訊息，並記錄了外部儲存的 CORS 要求。([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    參考：[File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - 使用 PDF.js 安全渲染 PDF 預覽，取代基於 iframe 的原始 PDF 渲染。([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
  - 修復了檔案上傳期間的 Unicode 檔案名稱正規化，以避免產生包含控制字元的物件鍵。([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
- **[AI employees]**

  - 修復了在引用表格區塊被移除後，AI 快捷按鈕獲取空區塊上下文的問題。([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
  - 修復了工作上下文提示中工具名稱的描述不正確 ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
- **[Workflow: Manual node]** 修復了手動工作流程任務的暫存未持久化提交的表單值。([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
- **[plugin-commercial]** 新增了 client-v2 商業授權元件和頂部欄授權狀態入口。by @jiannx
- **[AI: Knowledge base]** 將 LangChain 依賴鎖定到穩定版本，以防止 Ollama 工具執行失敗，並避免影響上游版本 by @cgyrock
- **[Migration manager]** 修復 PostgreSQL 遷移差異，使本地欄位變成繼承欄位時，不會刪除子繼承欄位。by @hongboji
- **[Template print]** 修復了模板列印 PDF 轉換錯誤未正確返回給客戶端的問題 by @jiannx
- **[Auth: OIDC]** 修復了 SSO 登入回調收到外部重定向 URL 時的 Token 洩漏問題 by @2013xile
- **[Workflow: Approval]**

  - 修復了審批節點不支援 `jobs:resume` API 的問題 by @mytharcher
  - 修復了審批撤回以更新已提交的業務資料，同時尊重來源集合更新權限。by @mytharcher
  - 修復了當審批工作流程因非審批節點失敗而終止時，審批待辦事項過時的問題。by @mytharcher

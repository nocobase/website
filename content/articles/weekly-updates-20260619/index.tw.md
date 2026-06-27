---
title: "每週更新｜為 AI 知識庫新增外部向量儲存配置表單"
description: "這是 NocoBase 在 2026 年 6 月 12 日至 6 月 21 日期間的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要用於測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.9](https://www.nocobase.com/en/blog/v2.1.9)

*發布日期：2026-06-20*

### 🚀 改進

- **[client-v2]** 為欄位值設定新增覆蓋值選項。([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust

### 🐛 錯誤修復

- **[client-v2]**

  - 修復了自定義操作工作流觸發按鈕在額外的 `values` 屬性下或作為序列化字串發送自定義上下文 JSON 的問題。([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher
  - 修復了將關聯欄位值配置為固定值或預設值時不生效的問題。([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust
- **[auth]** 登入狀態回應中不再包含加密的密碼資料 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile
- **[app]** 在推斷插件公共路徑時忽略不相關的 currentScript ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos
- **[UI 模板]** 修復了 ctx.openview 的預設上下文不正確的問題。([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust

### [v2.1.8](https://www.nocobase.com/en/blog/v2.1.8)

*發布日期：2026-06-18*

### 🐛 錯誤修復

- **[ai]**

  - 將 AI 套件的 `@langchain/openai` 鎖定在補丁級別更新。([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
  - 修復了 AI 插件不相容的 LangChain 依賴解析問題。([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
- **[AI：知識庫]**

  - 修復了在沒有 AI 插件可用時啟用 AI 知識庫插件時錯誤訊息不明確的問題。by @cgyrock
  - 修復了 AI 知識庫插件不相容的 LangChain 依賴解析問題。by @cgyrock

### [v2.1.7](https://www.nocobase.com/en/blog/v2.1.7)

*發布日期：2026-06-18*

### 🎉 新功能

- **[備份管理器]** 支援以 KingBase 作為主資料庫進行備份和還原 ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
- **[遷移管理器]** 支援以 KingBase 作為主資料庫進行遷移。by @2013xile

### 🚀 改進

- **[AI：知識庫]** 改進了 AI 知識庫的檢索和文件。([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
- **[cli]** 新增環境配置 schema 版本 ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
- **[工作流]** 穩定更新選項測試 ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
- **[檔案管理器]** 改進了 PDF 預覽：跨域 PDF 檔案現在使用瀏覽器原生檢視器，而同源 PDF 檔案繼續使用 PDF.js。([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher
- **[備份管理器]** 其集合 `dataCategory` 標記為 `'runtime'` 的表格現在會自動從備份中排除。([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[AI：知識庫]** 改進了 AI 知識庫的文件分段、分段管理、命中測試和文件工作流節點支援。by @cgyrock

### 🐛 錯誤修復

- **[client-v2]**

  - 修復了當子表單包含子表格時，表單提交會顯示錯誤訊息的問題。([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
  - 修復了子表格列上的事件流會錯誤執行的問題。([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  - 從關聯欄位中移除了意外的 `updateAssociationValues` ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  - 修復了 v2 篩選表單複選框下拉選項中「是/否」未翻譯的問題。([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  - 修復了將區塊儲存為模板後，事件流設定無法更新的問題。([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  - 修復了 v2 表格關聯標題欄位使用時間、僅日期或日期時間欄位時，顯示和格式設定不正確的問題。([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
- **[工作流]** 修復了意外調度錯誤後工作流調度器的恢復問題。([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
- **[檔案管理器]** 修復了上傳檔案到外部資料來源的附件 URL 欄位時出現 404 錯誤的問題 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[操作：自定義請求]** 修復了 V2 自定義請求操作在未配置請求設定時顯示不必要錯誤的問題。([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
- **[AI 員工]**

  - 修復了 AI 員工無法正確填寫子表格資料的問題。([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust
  - 修復了 AI 員工快捷任務觸發器，使其在從快捷設定檔執行任務時包含當前工作上下文中的附件。([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
- **[工作流：自定義操作事件]** 修復了操作面板 v2 觸發工作流按鈕在未綁定工作流時顯示成功並發送請求的問題。([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
- **[流程引擎]** 修復了由 AI 構建時，彈窗中的當前記錄表單和詳情可能包含不正確資料的問題。([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
- **[非同步任務管理器]** 修復了當 `filterByTk` 中缺少任務 ID 時，非同步任務檔案下載錯誤的問題。([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
- **[資料來源：外部 NocoBase]** 通過上傳資料來源代理 NocoBase 外部資料來源的檔案上傳和儲存操作 by @2013xile
- **[多空間]** 修復了空間管理員在沒有使用者電子郵件欄位存取權限時新增使用者時的權限錯誤。by @jiannx
- **[工作流：子流程]** 修復了非同步子流程，使父工作流能夠在工作進程重啟或記憶體事件映射丟失後恢復。by @mytharcher
- **[應用程式監控]** 修復了遠端 WebSocket 代理回應失敗時的崩潰問題 by @2013xile

### [v2.1.5](https://www.nocobase.com/en/blog/v2.1.5)

*發布日期：2026-06-15*

### 🎉 新功能

- **[工作流：郵件節點]** 新增了在工作流郵件節點中發送附件的支援。([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

### 🚀 改進

- **[client-v2]** 表單子表格中的關聯欄位列資料範圍現在支援當前項目變數。([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
- **[undefined]** 統一了版本控制插件的中文文件名稱為「版本控制」。([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
- **[檔案管理器]** 為檔案管理器中帶有嵌入文字的 PDF 預覽新增了可選中文字支援。([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
- **[操作：批次編輯]** 優化了 v2 操作插件的載入方式，並保持遷移後操作按鈕的順序穩定。([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
- **[版本控制]** 將版本控制插件的中文顯示名稱更改為「版本控制」。by @cgyrock

### 🐛 錯誤修復

- **[cli-v1]** 修復了將使用 create-nocobase-app 創建的項目從 2.0 升級到 2.1 後執行 `yarn dev` 時出現的錯誤。([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
- **[client-v2]** 修復了遷移進度未顯示專用進度視圖的問題。([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
- **[flow-engine]** 修復了 v2 單行文字和多行文字欄位中的越南語和中文輸入法輸入問題。([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
- **[server]** 修復了 `pm:enable` 中不安全的插件名稱處理，以防止插件解析期間的本地檔案包含風險。([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
- **[檔案管理器]** 修復了由 pdf.js worker 模組載入異常導致的 PDF 預覽失敗問題。([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
- **[區塊：看板]** 修復了在編輯模式外開啟日曆、甘特圖和看板區塊時，意外持久化隱藏彈窗操作並重複發送刪除請求的問題。([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
- **[操作：匯出記錄 Pro]** 改進了 v2 匯入/匯出 Pro 的處理模式設定和說明提示。by @katherinehhh
- **[遷移管理器]** 修復了匯入大型遷移資料檔案時可能失敗的問題。by @2013xile
- **[模板列印]** 在模板列印開始前拒絕不支援的模板檔案類型。by @2013xile

### [v2.1.4](https://www.nocobase.com/en/blog/v2.1.4)

*發布日期：2026-06-13*

### 🚀 改進

- **[工作流]** 改進了工作流元資料編輯體驗，支援在詳情彈窗中編輯描述，並在複製工作流時自動填充來源工作流元資料。([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher

### 🐛 錯誤修復

- **[操作：匯入記錄]** 將上傳的匯入檔案更改為磁碟儲存，以減少大量資料匯入期間的記憶體壓力。([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[備份管理器]** 修復了備份還原期間可能接受不安全的 PostgreSQL schema 名稱的安全問題。([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[工作流]**

  - 修復了工作流超時處理，使中止的執行及其待處理任務能夠原子化更新。([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - 修復了工作流節點更改後，工作流的最後更新者欄位未更新的問題。([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[操作：匯入記錄 Pro]** 在 Pro 匯入創建非同步任務之前，避免在請求節點中解析大型檔案。by @mytharcher
- **[版本控制]** 調整了版本控制頂部快捷入口的位置，使其在舊版和 v2 管理佈局中都顯示在 UI 編輯器旁邊。by @cgyrock

### [v2.1.3](https://www.nocobase.com/en/blog/v2.1.3)

*發布日期：2026-06-12*

### 🚀 改進

- **[cli]**
  - 標準化應用相容性構建版本 ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - 支援將技能更新到指定版本 ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos

### 🐛 錯誤修復

- **[client]** 修復了水平子表單中欄位過窄無法顯示資料的問題 ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[資料來源管理器]**

  - 修復了 v1 外部資料來源「配置欄位」頁面上因重複重新渲染導致的空白編輯欄位抽屜。([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - 修復了在 v1 資料來源管理器中刪除活動集合分類可能導致「所有集合」標籤頁為空的問題。([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[非同步任務管理器]** 修復了非同步任務工作進程日誌中請求 ID 不正確的問題 ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[工作流：SQL 節點]** 修復了某些 beta 版本使用者跳過 SQL 工作流舊版模板變數遷移的問題。([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[AI 員工]**

  - 修復了工作流 LLM 節點中訊息配置丟失的問題。([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
  - 修復了粘貼到 AI 員工對話框中的附件無法移除的問題。([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
- **[區塊：看板]** 修復了日曆和相關彈窗的 URL 支援。([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[工作流：審批]** 修復了 v2 審批表單中未顯示相關資料的問題 by @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/en/blog/v2.1.2)

*發布日期：2026-06-12*

### 🎉 新功能

- **[AI 員工]** 為 AI 知識庫新增了外部向量儲存配置表單。([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[AI：知識庫]** 為 AI 知識庫新增了外部向量儲存配置表單。by @cgyrock

### 🚀 改進

- **[undefined]**

  - 在 AI 構建器快速入門中新增了版本控制場景 ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    參考：[AI Builder 快速入門](https://docs.nocobase.com/en/ai-builder)
  - 改進了版本控制文件，加入了 AI Builder 自動修訂指南。([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
- **[cli]** 澄清初始化設定用語 ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[操作：匯入記錄]** 改進了匯入和非同步任務錯誤對話框，使長錯誤訊息可以完整閱讀而不破壞佈局。([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[操作：匯入記錄 Pro]** 改進了匯入對話框，使長錯誤訊息保持可讀，並且可以直接從設定選單中選擇 v2 處理模式。by @katherinehhh

### 🐛 錯誤修復

- **[client-v2]** 修復了 v2 頁面在登入後可能持續載入的問題 ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]** nb 需要 Node.js 22 ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[檔案管理器]** 修復了切換到 pdf.js 後 PDF 預覽缺少 CJK/CID 字型文字的問題。([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/en/blog/v2.2.0-beta.5)

*發布日期：2026-06-16*

### 🚀 改進

* **[cli]** 為環境配置新增了 schema 版本記錄。([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
* **[檔案管理器]** 改進了 PDF 預覽：跨域 PDF 檔案現在使用瀏覽器原生預覽，而同源 PDF 檔案繼續使用 PDF.js 渲染。([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher

### 🐛 錯誤修復

* **[client-v2]**
  * 修復了區塊轉換為模板後，事件流設定無法再修改的問題。([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  * 修復了 v2 篩選表單中複選框下拉選項未顯示翻譯文字的問題。([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  * 修復了 v2 表格關聯欄位的標題欄位使用時間、日期或日期時間欄位時，顯示和格式設定不正確的問題。([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
* **[流程引擎]** 修復了 AI 構建期間，彈窗中當前記錄表單和詳情資料不正確的問題。([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
* **[工作流：自定義操作事件]** 修復了操作面板 v2 觸發工作流按鈕在未綁定工作流時仍顯示成功並發送請求的問題。([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
* **[AI 員工]** 修復了 AI 員工無法正確填寫子表格資料的問題。([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/en/blog/v2.2.0-beta.3)

*發布日期：2026-06-15*

### 🎉 新功能

* **[工作流：郵件節點]** 新增了在工作流郵件節點中發送附件的支援。([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher
* **[工作流]** 新增了在工作流中支援資料庫事務範圍的功能。([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
  參考：[資料庫事務](docs/docs/en/workflow/nodes/transaction.md)
* **[工作流：資料庫事務節點]** 新增了一個資料庫事務工作流節點插件。by @mytharcher

### 🚀 改進

* **[client-v2]** 表單子表格中的關聯欄位列現在支援在資料範圍中使用當前項目變數。([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
* **[undefined]** 統一了版本控制插件的中文文件名稱為「版本控制」。([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
* **[檔案管理器]** 為檔案管理器中帶有嵌入文字的 PDF 預覽新增了可選中文字支援。([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
* **[使用者]** 改進了 v2 使用者和權限頁面的佈局，並優化了部門樹狀結構的行為。([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
* **[操作：批次編輯]** 優化了 v2 操作插件的載入方式，並保持遷移後操作按鈕的順序穩定。([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
* **[版本控制]** 將版本控制插件的中文顯示名稱更改為「版本控制」。by @cgyrock

### 🐛 錯誤修復

* **[cli-v1]** 修復了將使用 create-nocobase-app 創建的項目從 2.0 升級到 2.1 後執行 `<span>yarn dev</span>` 時出現的錯誤。([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
* **[flow-engine]** 修復了 v2 單行文字和多行文字欄位中的越南語和中文輸入法輸入問題。([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
* **[client-v2]** 修復了遷移進度未顯示專用進度視圖的問題。([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
* **[server]** 修復了 `<span>pm:enable</span>` 中不安全的插件名稱處理，以避免插件解析期間的本地檔案包含風險。([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
* **[非同步任務管理器]** 修復了下載非同步任務檔案時因缺少 `<span>filterByTk</span>` 導致的資料庫查詢錯誤。([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
* **[檔案管理器]** 修復了由 pdf.js worker 模組載入異常導致的 PDF 預覽失敗問題。([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
* **[區塊：看板]** 修復了在非編輯模式下開啟日曆、甘特圖和看板區塊時，意外持久化隱藏彈窗操作並重複發送刪除請求的問題。([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
* **[操作：匯出記錄 Pro]** 改進了 v2 匯入/匯出 Pro 的處理模式設定和幫助文字。by @katherinehhh
* **[多空間]** 修復了空間管理員在沒有使用者電子郵件欄位權限時無法新增空間使用者的問題。by @jiannx
* **[遷移管理器]** 修復了匯入大型遷移資料檔案時可能失敗的問題。by @2013xile
* **[模板列印]** 在模板列印開始前拒絕不支援的模板檔案類型。by @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/en/blog/v2.2.0-beta.2)

*發布日期：2026-06-13**

### 🎉 新功能

- **[AI 員工]** 為 AI 知識庫新增了外部向量儲存配置表單。([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[AI：知識庫]** 為 AI 知識庫新增了外部向量儲存配置表單。by @cgyrock
- **[郵件管理器]** 將郵件管理器客戶端遷移至 v2。by @jiannx

### 🚀 改進

- **[cli]**

  - 優化了不同版本號格式的相容性檢查。([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - 新增了將技能更新到指定版本的支援。([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos
  - 改進了初始化設定提示的用語。([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[undefined]**

  - 在 AI 構建器概覽頁面新增了版本控制對話場景。([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    參考：[AI Builder 快速入門](https://docs.nocobase.com/en/ai-builder)
  - 改進了版本控制文件，加入了 AI Builder 中自動版本儲存的說明。([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
    參考：[版本控制](docs/docs/en/ops-management/version-control/index.md)
- **[工作流]** 改進了工作流元資料編輯體驗，支援在詳情彈窗中編輯描述，並在複製工作流時自動填充來源工作流元資料。([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher
- **[操作：匯入記錄]** 改進了匯入和非同步任務錯誤詳情對話框，使長錯誤訊息可以完整查看而不破壞佈局。([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[翻譯測試工具]** 為翻譯測試工具新增了 client-v2 設定頁面。([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx
- **[操作：匯入記錄 Pro]** 改進了匯入對話框，使長錯誤訊息可以完整查看，並且可以直接從 v2 設定選單中選擇處理模式。by @katherinehhh

### 🐛 錯誤修復

- **[client]** 修復了水平子表單中欄位過窄無法顯示資料的問題。([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[client-v2]** 修復了 v2 頁面在登入後可能持續載入的問題。([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]** 為 nb 執行環境新增了 Node.js 版本檢測。([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[操作：匯入記錄]** 將上傳的匯入檔案更改為磁碟儲存，以減少大量資料匯入期間的記憶體壓力。([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[非同步任務管理器]** 修復了非同步任務工作進程日誌中請求 ID 不正確的問題。([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[工作流]**

  - 修復了工作流超時處理，使中止的執行及其待處理任務能夠原子化更新。([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - 修復了工作流節點更改後，工作流的最後更新者欄位未更新的問題。([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[資料來源管理器]**

  - 修復了 v1 外部資料來源「配置欄位」頁面上因重複重新渲染導致的空白編輯欄位抽屜。([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - 修復了在 v1 資料來源管理器中刪除當前集合分類可能導致「所有集合」標籤頁為空的問題。([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[備份管理器]** 修復了備份還原期間可能接受不安全的 PostgreSQL schema 名稱的安全問題。([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[工作流：SQL 節點]** 修復了某些 beta 版本使用者跳過 SQL 工作流舊版模板變數遷移的問題。([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[區塊：看板]** 修復了日曆和其他彈窗的 URL 支援。([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[AI 員工]**

  - 修復了粘貼到 AI 員工對話框中的附件無法移除的問題。([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
  - 修復了工作流 LLM 節點中訊息配置丟失的問題。([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
- **[檔案管理器]** 修復了切換到 pdf.js 後某些 PDF 預覽缺少中文/CID 字型文字的問題。([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher
- **[API 文件]** 修復了 API 文件插件宣告檔案構建失敗的問題。([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh
- **[操作：匯入記錄 Pro]** 在 Pro 匯入創建非同步任務之前，避免在請求節點中解析大型檔案。by @mytharcher
- **[版本控制]** 調整了版本控制頂部快捷入口的位置，使其在舊版和 v2 管理佈局中都顯示在 UI 編輯器旁邊。by @cgyrock
- **[工作流：審批]** 修復了 v2 審批表單中未顯示相關資料的問題。by @zhangzhonghe

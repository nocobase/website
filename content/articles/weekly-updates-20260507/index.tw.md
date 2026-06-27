---
title: "每週更新｜為 NocoBase cli 新增一些 API"
description: "這是 2026 年 4 月 30 日至 5 月 7 日期間 NocoBase 功能更新與改進的摘要。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/en/blog/v2.0.49)

*發布日期：2026-05-06*

### 🚀 改進

- **[未定義]** 為手動發布工作流程新增飛書失敗通知 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn

### 🐛 錯誤修復

- **[資料來源：主資料庫]** 防止在載入集合時，若 `fields` 為 `undefined` 導致崩潰 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI 模板]** 修復彈窗模板列表無法正確載入可用模板的問題。([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[AI 員工]** 修復 AI 員工使用 DeepSeek v4 模型時偶發錯誤的問題 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
- **[檔案管理員]** 改進預覽檔案下載的錯誤處理 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
- **[工作流程：審批]** 修復在列出可用審批工作流程的 API 中，篩選器及其他查詢參數現在能正常運作的問題 by @mytharcher

### [v2.0.48](https://www.nocobase.com/en/blog/v2.0.48)

*發布日期：2026-05-04*

### 🐛 錯誤修復

- **[AI 員工]** 修復操作按鈕中 AI 員工列表顯示開發者員工的問題 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
- **[工作流程：審批]**

  - 修復原始應用程式中的檔案未重新載入的問題 by @mytharcher
  - 支援在審批操作中解析部分客戶端變數 by @mytharcher

### [v2.0.47](https://www.nocobase.com/en/blog/v2.0.47)

*發布日期：2026-05-01*

### 🎉 新功能

- **[AI 員工]** LLM 提供者現在支援小米 MIMO 平台 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock

### 🚀 改進

- **[流程引擎]** 改善 v2 頁面上區塊拖曳佈局的行為 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) by @zhangzhonghe
- **[AI 員工]** AI 員工類別調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock
- **[工作流程：審批]** 將從資料庫載入的關聯顯示模式標記為舊版 by @mytharcher

### 🐛 錯誤修復

- **[資料庫]** 修復 SQL Server 外部資料來源的日期時間篩選器可能失敗的問題 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile
- **[客戶端]**

  - 在 v2 表單中，為空的資料範圍變數依賴項保留 null 值。([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx
  - 當行資料變更時重新執行 JS 欄位渲染 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx
  - 修復重新開啟彈窗記錄選擇器後，篩選表單欄位消失的問題 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe
  - 修復 v2 表格區塊中的 JS 欄位儲存格在篩選或重新整理表格資料後可能顯示空白的問題。([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx
- **[流程引擎]** 修復在表單相關變數中可能選取系統隱藏欄位的問題。([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust
- **[操作：匯入記錄]** 修復匯入記錄時失敗行索引不正確的問題 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher
- **[區塊：甘特圖]** 新增甘特圖區塊設定，允許拖曳重新排程。([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx
- **[AI 員工]** 修復 AI 員工 deepSeek V4 整合錯誤 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) by @cgyrock
- **[操作：匯出記錄 Pro]** 修復自動模式無法運作的問題 by @mytharcher
- **[工作流程：審批]**

  - 修復類型錯誤 by @mytharcher
  - 修復審批執行時序，使 `latestExecutionId` 在審批提交後同步更新 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/en/blog/v2.1.0-beta.25)

*發布日期：2026-05-06*

### 🎉 新功能

- **[cli]** 在 API 中新增 release 指令 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
- **[未定義]** 新增印尼語和越南語文件。([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
- **[AI 員工]** LLM 提供者現在支援小米 MIMO 平台 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock
- **[遷移管理員]** 為 nocobase cli 新增一些 API by @Andrew1989Y
- **[備份管理員]** 為 nocobase cli 新增一些 API by @Andrew1989Y

### 🚀 改進

- **[未定義]**

  - 為手動發布工作流程新增飛書失敗通知([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
  - 使西班牙語、葡萄牙語、俄語和德語文件與英文來源保持一致。([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn
  - 使法語文件與中文來源同步。([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn
- **[IdP：OAuth]** OAuth 工作階段現在使用與系統 Token 策略相同的過期設定 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile
- **[區塊：看板]**

  - 減少預設看板欄位寬度。([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx
  - 改善日曆和看板區塊的建立設定。([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx
- **[AI 員工]** AI 員工類別調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock
- **[工作流程：審批]** 將從資料庫載入的關聯顯示模式標記為舊版 by @mytharcher

### 🐛 錯誤修復

- **[未定義]**

  - 修復依賴建置工作流程，使獨立專業外掛程式檢出失敗時會中斷 CI，而不是靜默跳過建置覆蓋。([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn
  - 修復膨脹的翻譯檔案，並使跨語言文件結構保持一致。([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn
- **[cli]** 修復 CLI 布林選項，使其可以透過否定標誌來停用 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
- **[client-v2]**

  - 修復遠端外掛程式載入，使已以 `.js` 結尾的外掛程式 URL 不會被解析為重複的 `.js.js` 路徑。([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
  - 修復在繫結工作流程的設定中 `RemoteSelect` 未渲染的問題 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher
- **[ai]** 修復 AI 員工註冊期間缺少類別欄位設定的問題 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock
- **[流程引擎]** 修復在表單相關變數中可能選取系統隱藏欄位的問題。([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust
- **[客戶端]**

  - 修復 v2 表格區塊中的 JS 欄位儲存格在篩選或重新整理表格資料後可能顯示空白的問題。([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx
  - 在 v2 表單中，為空的資料範圍變數依賴項保留 null 值。([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx
  - 修復重新開啟彈窗記錄選擇器後，篩選表單欄位消失的問題 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe
  - 當行資料變更時重新執行 JS 欄位渲染 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx
- **[資料庫]** 修復 SQL Server 外部資料來源的日期時間篩選器可能失敗的問題 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile
- **[AI 員工]**

  - 修復 AI 員工使用 DeepSeek v4 模型時偶發錯誤的問題 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  - 修復工作流程 AI 員工節點在切換 AI 員工後清除技能的問題 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
  - 修復操作按鈕中 AI 員工列表顯示開發者員工的問題 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
- **[資料來源：主資料庫]** 防止在載入集合時，若 `fields` 為 `undefined` 導致崩潰 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI 模板]** 修復彈窗模板列表無法正確載入可用模板的問題。([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[檔案管理員]** 改進預覽檔案下載的錯誤處理 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
- **[區塊：樹狀]** 修復篩選區塊節點顯示異常的問題 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx
- **[區塊：甘特圖]** 新增甘特圖區塊設定，允許拖曳重新排程。([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx
- **[區塊：看板]** 修復欄位設定浮動層重複顯示的問題 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx
- **[操作：匯入記錄]** 修復匯入記錄時失敗行索引不正確的問題 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher
- **[操作：匯出記錄 Pro]** 修復自動模式無法運作的問題 by @mytharcher
- **[遷移管理員]** 修復 `migration:create` 從非同步任務記錄返回 `taskId` 的問題。 by @Andrew1989Y
- **[工作流程：審批]**

  - 修復在列出可用審批工作流程的 API 中，篩選器及其他查詢參數現在能正常運作的問題 by @mytharcher
  - 修復原始應用程式中的檔案未重新載入的問題 by @mytharcher
  - 修復類型錯誤 by @mytharcher
  - 支援在審批操作中解析部分客戶端變數 by @mytharcher
  - 修復審批執行時序，使 `latestExecutionId` 在審批提交後同步更新 by @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*發布日期：2026-05-06*

### 🚀 改進

- **[未定義]** 為手動發布工作流程新增飛書失敗通知 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
- **[IdP：OAuth]** OAuth 工作階段現在使用與系統 Token 策略相同的過期設定 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile

### 🐛 錯誤修復

- **[client-v2]** 修復遠端外掛程式載入，使已以 `.js` 結尾的外掛程式 URL 不會被解析為重複的 `.js.js` 路徑。([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
- **[cli]** 修復 CLI 布林選項，使其可以透過否定標誌來停用 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
- **[AI 員工]**

  - 修復 AI 員工使用 DeepSeek v4 模型時偶發錯誤的問題 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  - 修復工作流程 AI 員工節點在切換 AI 員工後清除技能的問題 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
- **[資料來源：主資料庫]** 防止在載入集合時，若 `fields` 為 `undefined` 導致崩潰 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI 模板]** 修復彈窗模板列表無法正確載入可用模板的問題。([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[區塊：看板]** 修正在彈窗或次要頁面上下文中，看板關聯區塊使用了未解析的執行時期資源參數的問題。([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
- **[工作流程：審批]** 修復在列出可用審批工作流程的 API 中，篩選器及其他查詢參數現在能正常運作的問題 by @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/en/blog/v2.1.0-alpha.29)

*發布日期：2026-05-04*

### 🐛 錯誤修復

- **[檔案管理員]** 改進預覽檔案下載的錯誤處理 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
- **[工作流程：審批]** 支援在審批操作中解析部分客戶端變數 by @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/en/blog/v2.1.0-alpha.28)

*發布日期：2026-05-04*

### 🐛 錯誤修復

- **[工作流程：審批]** 修復原始應用程式中的檔案未重新載入的問題 by @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/en/blog/v2.1.0-alpha.27)

*發布日期：2026-05-03*

### 🎉 新功能

- **[cli]** 在 API 中新增 release 指令 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
- **[未定義]** 新增印尼語和越南語文件。([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
- **[伺服器]** AI 員工可以使用 Bash 指令搜尋捆綁的文件 ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
- **[AI 員工]** LLM 提供者現在支援小米 MIMO 平台 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock
- **[遷移管理員]** 為 nocobase cli 新增一些 API by @Andrew1989Y
- **[備份管理員]** 為 nocobase cli 新增一些 API by @Andrew1989Y

### 🚀 改進

- **[流程引擎]** 改善 v2 頁面上區塊拖曳佈局的行為 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) by @zhangzhonghe
- **[未定義]**

  - 使西班牙語、葡萄牙語、俄語和德語文件與英文來源保持一致。([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn
  - 使法語文件與中文來源同步。([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn
- **[AI 員工]**

  - 改進 Nathan 的 RunJS 編輯工具，並減少長時間 AI 聊天對話期間的延遲 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile
  - AI 員工類別調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock
- **[區塊：看板]**

  - 減少預設看板欄位寬度。([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx
  - 改善日曆和看板區塊的建立設定。([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx
- **[工作流程：審批]** 將從資料庫載入的關聯顯示模式標記為舊版 by @mytharcher

### 🐛 錯誤修復

- **[未定義]**

  - 修復依賴建置工作流程，使獨立專業外掛程式檢出失敗時會中斷 CI，而不是靜默跳過建置覆蓋。([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn
  - 修復膨脹的翻譯檔案，並使跨語言文件結構保持一致。([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn
- **[client-v2]** 修復在繫結工作流程的設定中 `RemoteSelect` 未渲染的問題 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher
- **[流程引擎]** 修復在表單相關變數中可能選取系統隱藏欄位的問題。([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust
- **[ai]** 修復 AI 員工註冊期間缺少類別欄位設定的問題 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock
- **[客戶端]**

  - 修復 v2 表格區塊中的 JS 欄位儲存格在篩選或重新整理表格資料後可能顯示空白的問題。([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx
  - 修復重新開啟彈窗記錄選擇器後，篩選表單欄位消失的問題 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe
  - 在 v2 表單中，為空的資料範圍變數依賴項保留 null 值。([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx
  - 當行資料變更時重新執行 JS 欄位渲染 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx
- **[資料庫]** 修復 SQL Server 外部資料來源的日期時間篩選器可能失敗的問題 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile
- **[AI 員工]**

  - 修復操作按鈕中 AI 員工列表顯示開發者員工的問題 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
  - 修復 AI 員工 deepSeek V4 整合錯誤 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) by @cgyrock
- **[區塊：甘特圖]** 新增甘特圖區塊設定，允許拖曳重新排程。([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx
- **[區塊：樹狀]** 修復篩選區塊節點顯示異常的問題 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx
- **[操作：匯入記錄]** 修復匯入記錄時失敗行索引不正確的問題 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher
- **[區塊：看板]** 修復欄位設定浮動層重複顯示的問題 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx
- **[操作：匯出記錄 Pro]** 修復自動模式無法運作的問題 by @mytharcher
- **[遷移管理員]** 修復 `migration:create` 從非同步任務記錄返回 `taskId` 的問題。 by @Andrew1989Y
- **[工作流程：審批]**

  - 修復審批執行時序，使 `latestExecutionId` 在審批提交後同步更新 by @mytharcher
  - 修復類型錯誤 by @mytharcher

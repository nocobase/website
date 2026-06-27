---
title: "每週更新｜為AI員工新增基於LLM的網路搜尋工具"
description: "這是NocoBase從2026年4月3日至4月9日的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.34](https://www.nocobase.com/en/blog/v2.0.34)

*發布日期：2026-04-09*

### 🎉 新功能

- **[遷移管理器]** 支援遷移指令 by @chenos

### [v2.0.33](https://www.nocobase.com/en/blog/v2.0.33)

*發布日期：2026-04-08*

### 🎉 新功能

- **[AI 員工]** 為 AI 員工新增基於 LLM 的網路搜尋工具 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在批量編輯操作時，會錯誤顯示未儲存變更確認訊息的問題 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  - 修正在彈窗子表格中建立記錄後提交表單時，會錯誤顯示二次確認彈窗的問題。([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
- **[資料來源管理器]** 修正在從資料庫同步欄位後，部分欄位類型未正確更新的問題 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
- **[AI 員工]** 修正在配置了 APP_PUBLIC_PATH 的子路徑存取下，AI 員工文件上傳失敗的問題。([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock

### [v2.0.32](https://www.nocobase.com/en/blog/v2.0.32)

*發布日期：2026-04-04*

### 🚀 改進

- **[未定義]** 為 README 新增目錄 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765

### 🐛 錯誤修復

- **[客戶端]**

  - 子表單關聯欄位儲存失敗 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  - 欄位的子表單不顯示資料 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  - 修復 ctx.request 無法覆蓋 Authorization 標頭的問題。([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
- **[伺服器]** 新增服務中檢查，避免非服務中的實例更新應用狀態 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
- **[AI 員工]**

  - 修正在 dashscope 上使用 deepseek 或 minmax 模型時的問題 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
  - 修復中止 AI 員工推理會導致服務崩潰的問題 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
- **[工作流：HTTP 請求節點]** 清理工作流請求節點結果以避免暴露請求配置，預設新節點僅返回回應資料，並為失敗請求新增除錯日誌。([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
- **[集合欄位：排序]** 修復(field-sort)：防止 scopeKey 屬性為 undefined 時崩潰 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
- **[區塊：網格卡片]** 修復網格卡片刷新時按鈕未刷新的問題 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
- **[工作流：審批]**

  - 在工作流被刪除時增加容錯處理，避免任務列表載入錯誤 by @mytharcher
  - 為缺少 `latestRound` 的情況增加容錯處理 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.13](https://www.nocobase.com/en/blog/v2.1.0-beta.13)

*發布日期：2026-04-09*

### 🎉 新功能

- **[遷移管理器]** 支援遷移指令 by @chenos

### [v2.1.0-beta.12](https://www.nocobase.com/en/blog/v2.1.0-beta.12)

*發布日期：2026-04-08*

### 🎉 新功能

- **[客戶端]**

  - 為事件流新增 JS 變數 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx
  - 新增 JS 項目操作 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
- **[AI 員工]** 為 AI 員工新增基於 LLM 的網路搜尋工具 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock

### 🚀 改進

- **[未定義]**

  - 為 README 新增目錄 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765
  - 透過靜默處理 LibreOffice 和 Oracle Instant Client 的解壓縮指令，減少伺服器啟動時的日誌噪音 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925
- **[客戶端]**

  - 支援透過 runjs 設定欄位樣式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
  - 優化表單操作的橫向佈局 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx
- **[工作流：JavaScript]** 為 JavaScript 節點新增 `isolated-vm` 作為預設的 JavaScript 執行引擎 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  參考：[JavaScript 節點](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[工作流]**

  - 將啟用開關尺寸改為小型 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher
  - 為頁面大小參數新增變數 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
- **[AI 員工]** 最佳化 deepseek 在處理不支援檔案類型時的提示詞 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
- **[操作：自訂請求]** 為自訂請求新增操作模型 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx
- **[集合欄位：中國行政區劃]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
- **[工作流：子流程]** 新增防禦性邏輯，避免在發生異常時工作流掛起 by @mytharcher
- **[工作流：審批]** 修復載入審批記錄列表時 JSON 欄位導致的效能問題 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在批量編輯操作時，會錯誤顯示未儲存變更確認訊息的問題 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  - 修正在彈窗子表格中建立記錄後提交表單時，會錯誤顯示二次確認彈窗的問題。([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
  - 修復 ctx.request 無法覆蓋 Authorization 標頭的問題。([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
  - 子表單關聯欄位儲存失敗 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  - 欄位的子表單不顯示資料 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  - 修復表格中關聯欄位的複製內容在首次渲染時未正確顯示的問題。([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
  - 修正在修改表單資料後關閉多層彈窗時，顯示錯誤的二次確認訊息的問題。([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
  - 修復變數表達式中的空格導致標籤不顯示的問題 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
  - 修正在彈出視窗中為樹狀表格新增子節點時的異常 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
- **[資料來源管理器]** 修正在從資料庫同步欄位後，部分欄位類型未正確更新的問題 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
- **[伺服器]**

  - 新增服務中檢查，避免非服務中的實例更新應用狀態 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
  - 避免在應用停止後處理同步訊息 ([#8940](https://github.com/nocobase/nocobase/pull/8940)) by @mytharcher
  - 將 Pub-Sub 的關閉時機改為 `beforeStop`，以避免在資料庫關閉後發送或處理訊息 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
- **[流程引擎]**

  - 修復彈窗中被裁剪的設定選單 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
  - 修正在配置狀態下 UI 元件寬度過小時無法選取選單項目的問題。([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
  - 為設定表單項目和詳情項目新增 JS 片段 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx
  - 當表單欄位被刪除時，同步狀態至欄位配置 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
- **[資料庫]** 當任何 appends 參數無效時，使用警告而非錯誤 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
- **[資源管理器]** 修復外部資料來源無法正確載入的問題。([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
- **[AI 員工]**

  - 修正在配置了 APP_PUBLIC_PATH 的子路徑存取下，AI 員工文件上傳失敗的問題。([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock
  - 修正在 dashscope 上使用 deepseek 或 minmax 模型時的問題 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
  - 修復中止 AI 員工推理會導致服務崩潰的問題 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
  - 修復使用 Qwen LLM 時網路搜尋行為異常的問題 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock
  - 為 AI 對話 API 新增所有權驗證 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
  - 調整 AI 對話中工具卡片元件之間的間距 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
- **[工作流：HTTP 請求節點]** 清理工作流請求節點結果以避免暴露請求配置，預設新節點僅返回回應資料，並為失敗請求新增除錯日誌。([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
- **[集合欄位：排序]** 修復(field-sort)：防止 scopeKey 屬性為 undefined 時崩潰 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
- **[區塊：網格卡片]** 修復網格卡片刷新時按鈕未刷新的問題 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
- **[通知：應用內訊息]** 修復應用內訊息更新的操作白名單，防止非擁有者進行未經授權的更新。([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
- **[工作流：SQL 節點]** 修復 SQL 節點的安全問題 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
- **[資料視覺化]**

  - 使用基於變數的篩選器時，圖表在初始渲染時無法正確解析變數值 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile
  - 修復啟用空間插件後根角色圖表資料統計異常的問題 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
- **[操作：匯入記錄]** 修復開啟 plugin-space 後匯入失敗的問題 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
- **[工作流：JavaScript]** 修復安全問題 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
- **[操作：匯出記錄]** 限制多層關聯欄位的匯入匯出配置 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
- **[自訂變數]** 跳過 auth 通知 ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos
- **[本地化]** 防止在權限拒絕時發送 localizationTexts:missing 請求 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
- **[認證]** 修復 acl 以支援自訂狀態篩選參數 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
- **[流程引擎]** 移除從 uiSchema 儲存庫複製的舊事件，以避免觸發時拋出錯誤 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
- **[操作：匯入記錄 Pro]**

  - 限制多層關聯欄位的匯入匯出配置 by @jiannx
  - 修復未勾選「觸發工作流」選項時該選項不生效的問題 by @mytharcher
- **[資料來源：外部 Oracle]** 修復載入 Oracle 外部資料來源時發生的錯誤 by @2013xile
- **[工作流：審批]**

  - 修復舊版遷移的版本限制，以避免在最新版本部署啟動時拋出錯誤 by @mytharcher
  - 在工作流被刪除時增加容錯處理，避免任務列表載入錯誤 by @mytharcher
  - 修復 v2 審批表單返回按鈕中的翻譯、節點選擇和返回目標問題 by @zhangzhonghe
  - 為缺少 `latestRound` 的情況增加容錯處理 by @mytharcher
- **[郵件管理器]**

  - 修復使用範本時簽名被覆蓋的問題 by @jiannx
  - 郵件發送後未顯示關閉確認訊息 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.14](https://www.nocobase.com/en/blog/v2.1.0-alpha.14)

*發布日期：2026-04-07*

### 🎉 新功能

- **[AI 員工]** 為 AI 員工新增呼叫子代理的能力 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock
- **[AI：MCP 伺服器]** 提供通用的資料集合查詢 API，可透過 MCP 呼叫 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile

### 🚀 改進

- **[未定義]**

  - 為 README 新增目錄 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765
  - 透過靜默處理 LibreOffice 和 Oracle Instant Client 的解壓縮指令，減少伺服器啟動時的日誌噪音 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925
- **[流程引擎]** 為 UI 建置新增新的 API。([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust
- **[工作流]** 將啟用開關尺寸改為小型 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher
- **[AI 員工]** 最佳化 deepseek 在處理不支援檔案類型時的提示詞 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
- **[操作：自訂請求]** 為自訂請求新增操作模型 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx
- **[工作流：JavaScript]** 為 JavaScript 節點新增 `isolated-vm` 作為預設的 JavaScript 執行引擎 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  參考：[JavaScript 節點](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 錯誤修復

- **[伺服器]**

  - 新增服務中檢查，避免非服務中的實例更新應用狀態 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
  - 支援透過主機名稱取得目標應用 ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile
- **[客戶端]**

  - 子表單關聯欄位儲存失敗 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  - 欄位的子表單不顯示資料 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  - 修復表格中關聯欄位的複製內容在首次渲染時未正確顯示的問題。([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
  - 修正在修改表單資料後關閉多層彈窗時，顯示錯誤的二次確認訊息的問題。([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
  - 修復變數表達式中的空格導致標籤不顯示的問題 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
- **[流程引擎]**

  - 修復彈窗中被裁剪的設定選單 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
  - 修正在配置狀態下 UI 元件寬度過小時無法選取選單項目的問題。([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
  - 為設定表單項目和詳情項目新增 JS 片段 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx
- **[工作流：郵件發送節點]** 修復變數欄位的驗證 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher
- **[集合欄位：排序]** 修復(field-sort)：防止 scopeKey 屬性為 undefined 時崩潰 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
- **[AI 員工]**

  - 修復 AI 員工無法使用技能的問題 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock
  - 修復在 getSkill 工具被停用後，LLM 仍嘗試載入技能的問題 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock
  - 修復使用 Qwen LLM 時網路搜尋行為異常的問題 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock
  - 為 AI 對話 API 新增所有權驗證 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
- **[區塊：網格卡片]** 修復網格卡片刷新時按鈕未刷新的問題 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
- **[工作流]**

  - 修復條件指令的驗證規則不正確 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher
  - 修復集合觸發器的模式無法設定為「建立或更新」的問題 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher
- **[通知：應用內訊息]** 修復應用內訊息更新的操作白名單，防止非擁有者進行未經授權的更新。([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
- **[資料來源管理器]** 最佳化 MCP 工具命名並減少冗餘 API 回應，以避免過度消耗 AI 對話上下文 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile
- **[工作流：SQL 節點]** 修復 SQL 節點的安全問題 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
- **[資料視覺化]** 使用基於變數的篩選器時，圖表在初始渲染時無法正確解析變數值 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile
- **[工作流：審批]**

  - 在工作流被刪除時增加容錯處理，避免任務列表載入錯誤 by @mytharcher
  - 為缺少 `latestRound` 的情況增加容錯處理 by @mytharcher
  - 修復舊版遷移的版本限制，以避免在最新版本部署啟動時拋出錯誤 by @mytharcher
- **[郵件管理器]** 郵件發送後未顯示關閉確認訊息 by @jiannx

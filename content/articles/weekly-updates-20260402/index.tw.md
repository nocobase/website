---
title: "每週更新｜在事件流程中新增JS變數"
description: "這是NocoBase從2026年3月27日至4月2日的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要搶先體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/en/blog/v2.0.31)

*發布日期：2026-04-01*

### 🚀 改進

- **[AI 員工]** 優化 deepseek 在處理不支援檔案類型時的提示詞 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
- **[工作流]** 將啟用開關尺寸改為小 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復表格中關聯欄位的複製內容在首次渲染時顯示不正確的問題。([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
- **[流程引擎]** 修復彈窗中設定選單被裁剪的問題 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
- **[通知：應用內訊息]** 修復應用內訊息更新的操作白名單，防止非擁有者進行未經授權的更新。([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
- **[AI 員工]** 修復使用通義千問大型語言模型時網頁搜索行為異常的問題 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock

### [v2.0.30](https://www.nocobase.com/en/blog/v2.0.30)

*發布日期：2026-03-30*

### 🚀 改進

- **[工作流：JavaScript]** 為 JavaScript 節點新增 `isolated-vm` 作為預設的 JavaScript 執行引擎 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  參考：[JavaScript 節點](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 錯誤修復

- **[客戶端]** 修正在修改表單資料後關閉多層彈窗時，二次確認訊息不正確的問題。([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
- **[工作流：SQL 節點]** 修復 SQL 節點的安全問題 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
- **[AI 員工]** 為 AI 對話 API 新增所有權驗證 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
- **[工作流：審批]** 修復舊版遷移的版本限制，避免在最新版本部署啟動時拋出錯誤 by @mytharcher

### [v2.0.29](https://www.nocobase.com/en/blog/v2.0.29)

*發布日期：2026-03-30*

### 🚀 改進

- **[未定義]** 透過靜默處理 LibreOffice 和 Oracle Instant Client 的解壓縮指令，減少伺服器啟動時的日誌噪音 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925

### 🐛 錯誤修復

- **[客戶端]** 修復變數表達式中的空格導致標籤不顯示的問題 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
- **[流程引擎]** 修復在配置狀態下，UI 元件寬度過小時無法選取選單項目的問題。([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
- **[資料視覺化]** 使用基於變數的篩選器時，圖表在初始渲染時無法正確解析變數值 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile

### [v2.0.28](https://www.nocobase.com/en/blog/v2.0.28)

*發布日期：2026-03-27*

### 🐛 錯誤修復

- **[操作：匯入記錄]** 修復開啟 plugin-space 後匯入失敗的問題 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
- **[資料視覺化]** 修復啟用空間插件後，根角色圖表資料統計異常的問題 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
- **[工作流：JavaScript]** 修復安全問題 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
- **[AI 員工]** 調整 AI 對話中工具卡片元件之間的間距 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
- **[操作：匯出記錄]** 限制多層關聯欄位的匯入匯出配置 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
- **[操作：匯入記錄 Pro]** 限制多層關聯欄位的匯入匯出配置 by @jiannx

### [v2.0.27](https://www.nocobase.com/en/blog/v2.0.27)

*發布日期：2026-03-26*

### 🚀 改進

- **[工作流]** 為頁面大小參數新增變數 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
- **[工作流：子流程]** 新增防禦性邏輯，避免在發生異常時工作流掛起 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復在彈出視窗中為樹狀表格新增子節點時的異常 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
- **[伺服器]** 避免在應用程式停止後處理同步訊息 ([#8940](https://github.com/nocobase/nocobase/pull/8940)) by @mytharcher
- **[流程引擎]** 移除從 uiSchema 儲存庫複製的舊事件，避免觸發時拋出錯誤 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
- **[認證]** 修復 acl 以支援自訂狀態篩選參數 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
- **[郵件管理員]** 修復使用範本時簽名被覆蓋的問題 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/en/blog/v2.1.0-alpha.13)

*發布日期：2026-03-27*

### 🎉 新功能

- **[客戶端]** 在事件流程中新增 JS 變數 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx

### 🚀 改進

- **[客戶端]** 支援透過 runjs 設定欄位樣式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
- **[流程引擎]** 改進 UI 建置 API 的 schema 驗證。([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[工作流：操作前事件]** 為觸發器和節點新增驗證規則 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
- **[工作流]** 為頁面大小參數新增變數 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
- **[工作流：Webhook]** 為建立觸發器/節點 API 新增驗證 by @mytharcher
- **[工作流：子流程]**

  - 為建立節點 API 新增驗證 by @mytharcher
  - 新增防禦性邏輯，避免在發生異常時工作流掛起 by @mytharcher
- **[工作流：審批]** 為觸發器/節點 API 新增驗證 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復在彈出視窗中為樹狀表格新增子節點時的異常 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
- **[伺服器]** 避免在應用程式停止後處理同步訊息 ([#8940](https://github.com/nocobase/nocobase/pull/8940)) by @mytharcher
- **[操作：匯出記錄]** 限制多層關聯欄位的匯入匯出配置 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
- **[資料視覺化]** 修復啟用空間插件後，根角色圖表資料統計異常的問題 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
- **[操作：匯入記錄]** 修復開啟 plugin-space 後匯入失敗的問題 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
- **[工作流：JavaScript]** 修復安全問題 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
- **[AI 員工]** 調整 AI 對話中工具卡片元件之間的間距 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
- **[流程引擎]** 移除從 uiSchema 儲存庫複製的舊事件，避免觸發時拋出錯誤 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
- **[認證]** 修復 acl 以支援自訂狀態篩選參數 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
- **[操作：匯入記錄 Pro]** 限制多層關聯欄位的匯入匯出配置 by @jiannx
- **[郵件管理員]** 修復使用範本時簽名被覆蓋的問題 by @jiannx

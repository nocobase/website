---
title: "NocoBase v2.1.0-alpha.13：在事件流程中新增 JS 變數"
description: "v2.1.0-alpha.13 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 在事件流程中新增 JS 變數 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) - @jiannx

### 🚀 改進

- **[客戶端]** 支援透過 runjs 設定欄位樣式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) - @jiannx

- **[流程引擎]** 改善 UI 建置 API 的結構驗證 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) - @gchust

- **[工作流：前置事件]** 為觸發器與節點新增驗證規則 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) - @mytharcher

- **[工作流]** 為頁面大小參數新增變數 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) - @mytharcher

- **[工作流：Webhook]** 為建立觸發器/節點 API 新增驗證 - @mytharcher

- **[工作流：子流程]**
  - 為建立節點 API 新增驗證 - @mytharcher

  - 新增防禦性邏輯，避免發生異常時工作流程停滯 - @mytharcher

- **[工作流：審批]** 為觸發器/節點 API 新增驗證 - @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修正於彈出視窗中為樹狀表格新增子節點時發生的異常 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) - @jiannx

- **[伺服器]** 避免在應用程式停止後處理同步訊息 ([#8940](https://github.com/nocobase/nocobase/pull/8940)) - @mytharcher

- **[動作：匯出記錄]** 限制多層關聯欄位的匯入與匯出設定 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) - @jiannx

- **[資料視覺化]** 修正啟用空間插件後，根角色圖表資料統計異常的問題 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) - @jiannx

- **[動作：匯入記錄]** 修正開啟 plugin-space 後匯入失敗的問題 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) - @jiannx

- **[工作流：JavaScript]** 修復安全性問題 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) - @mytharcher

- **[AI 員工]** 調整 AI 對話中工具卡片元件之間的間距 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) - @cgyrock

- **[流程引擎]** 移除從 uiSchema 儲存庫複製的舊事件，以避免觸發時拋出錯誤 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) - @mytharcher

- **[認證]** 修正 acl 以支援自訂狀態篩選參數 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) - @jiannx

- **[動作：匯入記錄 Pro]** 限制多層關聯欄位的匯入與匯出設定 - @jiannx

- **[電子郵件管理員]** 修正使用範本時簽名檔被覆寫的問題 - @jiannx

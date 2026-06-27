---
title: "NocoBase v2.0.27：新增頁面大小參數變數"
description: "v2.0.27 版本發布說明"
---

### 🚀 改進項目

- **[工作流程]** 為頁面大小參數新增變數 ([#8951](https://github.com/nocobase/nocobase/pull/8951))，作者：@mytharcher

- **[工作流程：子流程]** 新增防禦性邏輯，避免發生例外時工作流程停滯，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修正於彈出視窗中為樹狀表格新增子節點時發生的例外 ([#8872](https://github.com/nocobase/nocobase/pull/8872))，作者：@jiannx

- **[伺服器]** 避免應用程式停止後處理同步訊息 ([#8940](https://github.com/nocobase/nocobase/pull/8940))，作者：@mytharcher

- **[流程引擎]** 移除從 uiSchema 儲存庫複製的舊事件，以避免觸發時擲出錯誤 ([#8957](https://github.com/nocobase/nocobase/pull/8957))，作者：@mytharcher

- **[驗證]** 修正 acl 以支援自訂狀態篩選參數 ([#8918](https://github.com/nocobase/nocobase/pull/8918))，作者：@jiannx

- **[電子郵件管理員]** 修正使用範本時簽名被覆寫的問題，作者：@jiannx

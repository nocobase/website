---
title: "NocoBase 每週更新：新增 AI 員工用於配置圖表"
description: "本週更新包括：新增 AI 員工用於配置圖表、優化工具欄樣式以防止圖示被遮擋等。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.8](https://www.nocobase.com/en/blog/v1.9.8)

*發布日期：2025-11-19*

### 🐛 錯誤修復

- **[工作流：自定義操作事件]** 修復監聽不存在的外部資料來源事件導致的錯誤，由 @mytharcher 貢獻
- **[模板列印]** 解析篩選條件中的變數，由 @jiannx 貢獻
- **[工作流：審批]** 修復多個審批人同時處理審批時，因競爭條件導致工作流節點被執行多次的問題，由 @mytharcher 貢獻

### [v1.9.7](https://www.nocobase.com/en/blog/v1.9.7)

*發布日期：2025-11-18*

### 🐛 錯誤修復

- **[客戶端]** 修復審批表單的聯動規則不生效的問題 ([#7858](https://github.com/nocobase/nocobase/pull/7858))，由 @zhangzhonghe 貢獻
- **[伺服器]** 修復在服務拆分模式下，已取消訂閱的佇列訊息無法發布的問題 ([#7875](https://github.com/nocobase/nocobase/pull/7875))，由 @mytharcher 貢獻
- **[工作流]**

  - 修復監聽不存在的外部資料來源事件導致的錯誤 ([#7855](https://github.com/nocobase/nocobase/pull/7855))，由 @mytharcher 貢獻
  - 使用 eventQueue 替代共享的 backgroundJob，以防止在服務拆分模式下共享佇列被錯誤消費 ([#7871](https://github.com/nocobase/nocobase/pull/7871))，由 @mytharcher 貢獻
- **[工作流：人工節點]** 修正語言環境的命名空間，以顯示正確的翻譯內容 ([#7877](https://github.com/nocobase/nocobase/pull/7877))，由 @mytharcher 貢獻
- **[存取控制]** 關聯操作片段未生效的問題 ([#7876](https://github.com/nocobase/nocobase/pull/7876))，由 @2013xile 貢獻
- **[工作流：審批]**

  - 修復載入通知頻道時頁面大小不足，導致列表未完全載入的問題，由 @mytharcher 貢獻
  - 修復審批表單的聯動規則不生效的問題，由 @zhangzhonghe 貢獻
  - 修復待辦中心審批列表卡片上的日期格式，以顯示完整的日期和時間，由 @mytharcher 貢獻
  - 修復提交審批時查詢審批記錄列表出現的性能問題，由 @mytharcher 貢獻

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.42](https://www.nocobase.com/en/blog/v2.0.0-alpha.42)

*發布日期：2025-11-19*

### 🐛 錯誤修復

- **[客戶端]** 修復 JS 區塊中未顯示標題和描述的問題。([#7913](https://github.com/nocobase/nocobase/pull/7913))，由 @gchust 貢獻

### [v2.0.0-alpha.41](https://www.nocobase.com/en/blog/v2.0.0-alpha.41)

*發布日期：2025-11-19*

### 🎉 新功能

- **[資料視覺化]** 新增 AI 員工用於配置圖表 ([#7815](https://github.com/nocobase/nocobase/pull/7815))，由 @heziqiang 貢獻

### 🚀 改進

- **[流程引擎]**

  - 支援在流程引擎中監聽流程模型樹變更事件。([#7905](https://github.com/nocobase/nocobase/pull/7905))，由 @gchust 貢獻
  - 改進當前記錄變數解析，加快開啟對話框的速度 ([#7895](https://github.com/nocobase/nocobase/pull/7895))，由 @gchust 貢獻
  - 優化了 runjs 上下文中第三方庫的 API 結構，並增加了對 Antd 圖示庫的支援。([#7896](https://github.com/nocobase/nocobase/pull/7896))，由 @gchust 貢獻
- **[資料庫]** 重構了欄位加密外掛以增強安全性，支援應用金鑰生成和輪換，以及每個欄位的加密金鑰。([#7769](https://github.com/nocobase/nocobase/pull/7769))，由 @cgyrock 貢獻
- **[集合欄位：加密]** 優化欄位加密外掛，支援使用獨立 IV 進行資料檢索，由 @cgyrock 貢獻

### 🐛 錯誤修復

- **[客戶端]**

  - 修復隱藏區塊仍在頁面上佔用空間的問題。([#7906](https://github.com/nocobase/nocobase/pull/7906))，由 @gchust 貢獻
  - 修復篩選按鈕中的重置按鈕清除了預設條件的問題 ([#7903](https://github.com/nocobase/nocobase/pull/7903))，由 @zhangzhonghe 貢獻
  - 修復新表單中子表單欄位的權限檢查不正確的問題 ([#7902](https://github.com/nocobase/nocobase/pull/7902))，由 @katherinehhh 貢獻
- **[伺服器]** 修復在服務拆分模式下，已取消訂閱的佇列訊息無法發布的問題 ([#7875](https://github.com/nocobase/nocobase/pull/7875))，由 @mytharcher 貢獻
- **[工作流]**

  - 修復監聽不存在的外部資料來源事件導致的錯誤 ([#7855](https://github.com/nocobase/nocobase/pull/7855))，由 @mytharcher 貢獻
  - 使用 eventQueue 替代共享的 backgroundJob，以防止在服務拆分模式下共享佇列被錯誤消費 ([#7871](https://github.com/nocobase/nocobase/pull/7871))，由 @mytharcher 貢獻
- **[工作流：人工節點]** 修正語言環境的命名空間，以顯示正確的翻譯內容 ([#7877](https://github.com/nocobase/nocobase/pull/7877))，由 @mytharcher 貢獻
- **[存取控制]** 關聯操作片段未生效的問題 ([#7876](https://github.com/nocobase/nocobase/pull/7876))，由 @2013xile 貢獻
- **[工作流：自定義操作事件]** 修復監聽不存在的外部資料來源事件導致的錯誤，由 @mytharcher 貢獻
- **[評論]** 修復評論區塊中引用評論無法顯示的問題，由 @katherinehhh 貢獻
- **[模板列印]** 解析篩選條件中的變數，由 @jiannx 貢獻
- **[工作流：審批]** 修復多個審批人同時處理審批時，因競爭條件導致工作流節點被執行多次的問題，由 @mytharcher 貢獻

### [v2.0.0-alpha.40](https://www.nocobase.com/en/blog/v2.0.0-alpha.40)

*發布日期：2025-11-18*

### 🚀 改進

- **[流程引擎]** 優化工具欄樣式，防止圖示被遮擋 ([#7883](https://github.com/nocobase/nocobase/pull/7883))，由 @zhangzhonghe 貢獻

### 🐛 錯誤修復

- **[流程引擎]** 修復登出後重新登入時 ACL 權限資料未重新載入的問題。([#7874](https://github.com/nocobase/nocobase/pull/7874))，由 @gchust 貢獻
- **[客戶端]** 修復表單項目設定中的問題 ([#7867](https://github.com/nocobase/nocobase/pull/7867))，由 @katherinehhh 貢獻
- **[資料視覺化]** 僅在圖表預覽時使用 SQL 資源除錯模式 ([#7893](https://github.com/nocobase/nocobase/pull/7893))，由 @heziqiang 貢獻
- **[多空間]** 多空間關聯用戶，由 @jiannx 貢獻
- **[工作流：審批]**

  - 修復載入通知頻道時頁面大小不足，導致列表未完全載入的問題，由 @mytharcher 貢獻
  - 修復提交審批時查詢審批記錄列表出現的性能問題，由 @mytharcher 貢獻
  - 修復待辦中心審批列表卡片上的日期格式，以顯示完整的日期和時間，由 @mytharcher 貢獻

### [v2.0.0-alpha.39](https://www.nocobase.com/en/blog/v2.0.0-alpha.39)

*發布日期：2025-11-17*

### 🚀 改進

- **[客戶端]** 為行動裝置適配元件 ([#7870](https://github.com/nocobase/nocobase/pull/7870))，由 @zhangzhonghe 貢獻

### 🐛 錯誤修復

- **[客戶端]**

  - 修復預設 JS 欄位配置未使用顯示模式設定的問題。([#7862](https://github.com/nocobase/nocobase/pull/7862))，由 @gchust 貢獻
  - 修復因拖拽後刪除引用模板導致重複模板不顯示的問題 ([#7847](https://github.com/nocobase/nocobase/pull/7847))，由 @zhangzhonghe 貢獻
  - 修復無法在篩選表單區塊模型中設定日期欄位預設值的問題。([#7853](https://github.com/nocobase/nocobase/pull/7853))，由 @gchust 貢獻
  - 修復審批表單的聯動規則不生效的問題 ([#7858](https://github.com/nocobase/nocobase/pull/7858))，由 @zhangzhonghe 貢獻
  - 修復表格區塊中的快速編輯操作無法正確更新資料的問題。([#7845](https://github.com/nocobase/nocobase/pull/7845))，由 @gchust 貢獻
  - 修復富文字欄位無法輸入預設值以及多選欄位預設值無法選擇多個選項的問題。([#7864](https://github.com/nocobase/nocobase/pull/7864))，由 @gchust 貢獻
- **[多應用管理器（已棄用）]** 子應用停止後，發布同步訊息通知其他節點停止對應的子應用 ([#7849](https://github.com/nocobase/nocobase/pull/7849))，由 @2013xile 貢獻
- **[工作流：審批]** 修復審批表單的聯動規則不生效的問題，由 @zhangzhonghe 貢獻
- **[郵件管理器]** ShadowHtml 重新整理錯誤，由 @jiannx 貢獻

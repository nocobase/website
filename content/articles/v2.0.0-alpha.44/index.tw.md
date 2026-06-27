---
title: "NocoBase v2.0.0-alpha.44：支援樹狀集合關聯欄位的級聯選擇器"
description: "v2.0.0-alpha.44 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 為關聯欄位選擇器新增快速建立支援 ([#7887](https://github.com/nocobase/nocobase/pull/7887)) - 感謝 @katherinehhh

  - 支援樹狀集合關聯欄位的級聯選擇器 ([#7846](https://github.com/nocobase/nocobase/pull/7846)) - 感謝 @katherinehhh

- **[遙測]** 新增外掛：Telemetry，一個基於 OpenTelemetry 的遙測外掛，提供 CPU、記憶體及 HTTP 請求指標，並支援 HTTP 匯出功能 - 感謝 @2013xile

### 🚀 改進

- **[遙測]** 支援控制哪些指標被匯出 ([#7938](https://github.com/nocobase/nocobase/pull/7938)) - 感謝 @2013xile

- **[非同步任務管理器]** 子應用程式的非同步任務應僅在 Workers 中啟動目標子應用程式 ([#7927](https://github.com/nocobase/nocobase/pull/7927)) - 感謝 @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 從非樹狀集合區塊中移除樹狀表格操作 ([#7931](https://github.com/nocobase/nocobase/pull/7931)) - 感謝 @katherinehhh

  - 修正在外部資料來源配置中，belongsTo 欄位介面顯示為多對一而非一對一的問題 ([#7936](https://github.com/nocobase/nocobase/pull/7936)) - 感謝 @cgyrock

- **[流程引擎]** 修復詳情區塊按鈕中工具列圖示顯示錯位的問題 ([#7929](https://github.com/nocobase/nocobase/pull/7929)) - 感謝 @zhangzhonghe

- **[工作流]** 修正在更新任務計數時，會意外重設正在填寫表單狀態的問題 ([#7937](https://github.com/nocobase/nocobase/pull/7937)) - 感謝 @mytharcher

- **[集合欄位：多對多（陣列）]** 修正在建立/更新關聯資料時，M2M（陣列）欄位的問題 ([#7926](https://github.com/nocobase/nocobase/pull/7926)) - 感謝 @cgyrock

- **[操作：匯入記錄 Pro]** 修正在上傳器中修改匯入選項無效的問題 - 感謝 @katherinehhh

---
title: "NocoBase v1.6.0-alpha.2：支援在 readPretty 欄位上啟用連結開啟彈出視窗"
description: "v1.6.0-alpha.2 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 支援在 readPretty 欄位上啟用連結開啟彈窗功能 ([#5747](https://github.com/nocobase/nocobase/pull/5747)) - 作者：@katherinehhh

  - 支援在關聯區塊中進行關聯與取消關聯操作 ([#5695](https://github.com/nocobase/nocobase/pull/5695)) - 作者：@katherinehhh

- **[伺服器端]** 新增稽核管理員 ([#5601](https://github.com/nocobase/nocobase/pull/5601)) - 作者：@chenzhizdt

- **[工作流程]** 支援手動觸發工作流程 ([#5664](https://github.com/nocobase/nocobase/pull/5664)) - 作者：@mytharcher

- **[工作流程：前置事件]** 支援手動觸發工作流程 - 作者：@mytharcher

### 🚀 改進

- **[客戶端]**
  - 實作前端元件的按需載入 ([#5647](https://github.com/nocobase/nocobase/pull/5647)) - 作者：@gchust

  - 改善頁面渲染效能，並支援頁面保持活動狀態功能 ([#5515](https://github.com/nocobase/nocobase/pull/5515)) - 作者：@zhangzhonghe

- **[集合欄位：排序]** 新增外掛描述 ([#5720](https://github.com/nocobase/nocobase/pull/5720)) - 作者：@mytharcher

- **[嵌入 NocoBase]** 改善頁面渲染效能 - 作者：@zhangzhonghe

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在第三方資料來源區塊中無法正確使用變數的問題 ([#5782](https://github.com/nocobase/nocobase/pull/5782)) - 作者：@zhangzhonghe

  - 修正區塊範本中關聯欄位值為空的問題。修正在第三方資料來源中，使用變數的區塊資料範圍無法正常運作的問題 ([#5777](https://github.com/nocobase/nocobase/pull/5777)) - 作者：@zhangzhonghe

  - 修正元件動態屬性在延遲載入時無法正常運作的問題 ([#5776](https://github.com/nocobase/nocobase/pull/5776)) - 作者：@gchust

  - 修正開發環境中動態載入鉤子時 React 出現的警告訊息 ([#5758](https://github.com/nocobase/nocobase/pull/5758)) - 作者：@gchust

- **[資料視覺化]** 修正圖表區塊的篩選欄位元件無法渲染的問題 ([#5769](https://github.com/nocobase/nocobase/pull/5769)) - 作者：@2013xile

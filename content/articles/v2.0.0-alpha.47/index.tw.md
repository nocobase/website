---
title: "NocoBase v2.0.0-alpha.47：支援在圖表查詢中初始化選定的篩選欄位"
description: "v2.0.0-alpha.47 版本發行說明"
---

### 🚀 改進

- **[客戶端]**
  - 支援在圖表查詢中初始化已選取的篩選欄位 ([#7933](https://github.com/nocobase/nocobase/pull/7933)) - @heziqiang

  - 在訊息內容中使用三層大括號（`{{{` 和 `}}}`）作為變數，以避免變數被 Handlebars 跳脫 ([#7972](https://github.com/nocobase/nocobase/pull/7972)) - @mytharcher

  - 為更新記錄與刪除記錄的操作按鈕新增載入狀態，避免重複請求 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) - @mytharcher

- **[集合欄位：Markdown(Vditor)]** 調整 vditor 全螢幕內容寬度 ([#7974](https://github.com/nocobase/nocobase/pull/7974)) - @katherinehhh

### 🐛 錯誤修復

- **[客戶端]**
  - 修正了在彈出視窗中開啟非 ID 關聯欄位的詳細區塊時會發生錯誤的問題 ([#7973](https://github.com/nocobase/nocobase/pull/7973)) - @gchust

  - 修正了非 ID 關聯欄位在彈出視窗中無法正確載入關聯資料的問題 ([#7970](https://github.com/nocobase/nocobase/pull/7970)) - @gchust

  - 修正使用 Iframe 時的路由問題 ([#7957](https://github.com/nocobase/nocobase/pull/7957)) - @zhangzhonghe

  - 修正數值欄位格式中精確度設定無效的問題 ([#7967](https://github.com/nocobase/nocobase/pull/7967)) - @katherinehhh

  - 修正新版 2.0 頁面中錯誤的輸入提示 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) - @zhangzhonghe

  - 修正點擊「重設」按鈕時篩選值未被清除的問題 ([#7966](https://github.com/nocobase/nocobase/pull/7966)) - @zhangzhonghe

- **[工作流]** 修正因提供者誤用導致任務計數未顯示的問題 ([#7968](https://github.com/nocobase/nocobase/pull/7968)) - @mytharcher

- **[資料視覺化]** 解決圖表查詢不支援 ACL 資料範圍的問題 ([#7915](https://github.com/nocobase/nocobase/pull/7915)) - @2013xile

- **[區塊：引用]** 修正引用區塊時會將被引用區塊從原始頁面移除的問題 ([#7969](https://github.com/nocobase/nocobase/pull/7969)) - @gchust

- **[AI 員工]** 修正 AI 生成 SQL 輸出時的問題 ([#7956](https://github.com/nocobase/nocobase/pull/7956)) - @heziqiang

- **[範本列印]** 修正記錄範本列印操作中無法新增範本的問題 - @katherinehhh

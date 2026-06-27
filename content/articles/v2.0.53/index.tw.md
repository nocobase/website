---
title: "NocoBase v2.0.53：在關閉事件流程配置頁面時，若存在未儲存的變更，新增確認訊息。"
description: "v2.0.53 版本發行說明"
---

### 🚀 改善

- **[流程引擎]** 在事件流程配置頁面有未儲存資料時關閉頁面，新增未儲存變更確認訊息。([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

### 🐛 錯誤修復

- **[客戶端]**
  - 修復防止在表格中開啟關聯欄位的快速編輯 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh

  - 修復子表格中僅顯示的關聯欄位在重新整理後無法顯示或無法點擊的問題。([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx

  - 修復 v2 資料區塊中的多選欄位應顯示選項標籤而非數值 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh

- **[區塊：多步驟表單]** 修復 v1 步驟表單區塊啟用全高度時的捲軸問題 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh

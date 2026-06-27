---
title: "NocoBase v1.4.24：datePicker 元件輸入唯讀"
description: "v1.4.24 版本發布說明"
---

### 🚀 改善

- **[client]** datePicker 元件輸入唯讀 ([#6061](https://github.com/nocobase/nocobase/pull/6061)) by @Cyx649312038

### 🐛 錯誤修復

- **[client]**
  - 修正表格區塊中彈窗關聯欄位載入不正確的問題 ([#6060](https://github.com/nocobase/nocobase/pull/6060)) by @katherinehhh

  - 修正詳細區塊中子表格的樣式問題 ([#6049](https://github.com/nocobase/nocobase/pull/6049)) by @katherinehhh

  - 修正 readPretty 模式下的數字欄位格式影響編輯模式的問題 ([#6050](https://github.com/nocobase/nocobase/pull/6050)) by @katherinehhh

  - 修正 ant-table 中表格標題儲存格樣式問題 ([#6052](https://github.com/nocobase/nocobase/pull/6052)) by @katherinehhh

- **[database]** 修正使用主鍵初始化排序欄位時的問題 ([#6059](https://github.com/nocobase/nocobase/pull/6059)) by @chareice

- **[資料視覺化]** 在圖表查詢中使用聚合函數但未設定維度時，移除 `LIMIT` 子句 ([#6062](https://github.com/nocobase/nocobase/pull/6062)) by @2013xile

- **[備份管理員]** 修正僅登入子應用程式的使用者備份下載錯誤 by @gchust

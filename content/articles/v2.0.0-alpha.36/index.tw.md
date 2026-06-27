---
title: "NocoBase v2.0.0-alpha.36：優化頁面標籤的工具欄樣式"
description: "v2.0.0-alpha.36 版本發布說明"
---

### 🚀 改善

- **[流程引擎]** 優化頁面頁籤的工具列樣式 ([#7795](https://github.com/nocobase/nocobase/pull/7795)) - 貢獻者：@zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]**
  - 修正當透過使用者介面修改子表單關聯欄位時，變數無法正確解析的問題。([#7799](https://github.com/nocobase/nocobase/pull/7799)) - 貢獻者：@gchust

  - 多主鍵記錄的編輯表單錯誤 ([#7798](https://github.com/nocobase/nocobase/pull/7798)) - 貢獻者：@gchust

  - 修正「開啟檢視」動作的特定設定未生效的問題，確保該動作現在能如預期套用所有指定設定。([#7790](https://github.com/nocobase/nocobase/pull/7790)) - 貢獻者：@gchust

- **[客戶端]**
  - 修正集合選擇器欄位無法正確選取集合的問題 ([#7794](https://github.com/nocobase/nocobase/pull/7794)) - 貢獻者：@katherinehhh

  - 無法隱藏表格區塊的動作欄 ([#7804](https://github.com/nocobase/nocobase/pull/7804)) - 貢獻者：@gchust

  - 支援在 AI 員工的提示詞中選取整個變數物件 ([#7791](https://github.com/nocobase/nocobase/pull/7791)) - 貢獻者：@gchust

- **[使用者]** 當欄位名稱使用蛇形命名法（snake_case）時，索引重新整理不正確 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) - 貢獻者：@2013xile

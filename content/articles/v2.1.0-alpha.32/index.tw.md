---
title: "NocoBase v2.1.0-alpha.32：為 v2 表單中的日期欄位新增日期範圍限制選項"
description: "v2.1.0-alpha.32 版本發布說明"
---

### 🎉 新功能

- **[client]** 在 v2 表單中為日期欄位新增日期範圍限制選項 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh

- **[flow-engine]** 將 `plugin-environment-variables` 遷移至 client-v2，包含基於 React 的設定頁面與全域註冊的 `$env` 執行時期變數；為 `plugin-file-manager` 新增 client-v2 入口，包含基於 React 的儲存設定頁面，以及基於 FlowModel 的上傳欄位、上傳動作與預覽功能。([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🚀 改進

- **[undefined]** 在 nb cli 中支援基於 session 範圍的當前環境變數 ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos

### 🐛 錯誤修復

- **[client]**
  - 修正在新增表單中，關聯欄位的預設值彈窗顯示不正確的問題。([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust

  - 修正 JS 欄位設為唯讀後，無法再編輯 JS 程式碼的問題。([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust

  - 修正 v2 頁面頁籤在儲存設定後未能立即同步的問題 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe

  - 修正子表格欄位指派在欄位聯動規則中無法生效的問題。([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust

- **[集合欄位：Markdown(Vditor)]** 修正 Markdown 欄位提示在水平表單佈局中被隱藏的問題 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh

- **[WEB 客戶端]** 修正使用翻譯後標籤進行路由類型篩選的問題 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe

- **[行動端（已棄用）]** 修正行動端訊息彈窗無法關閉或滾動的問題 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe

- **[工作流：審批]** 修正審批流程設定中出現 JS 欄位的問題 by @zhangzhonghe

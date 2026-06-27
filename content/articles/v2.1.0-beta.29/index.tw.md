---
title: "NocoBase v2.1.0-beta.29：在v2表單中為日期欄位新增日期範圍限制選項"
description: "v2.1.0-beta.29 版本發布說明"
---

### 🎉 新功能

- **[客戶端]** 為 v2 表單中的日期欄位新增日期範圍限制選項 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) - 貢獻者：@katherinehhh

- **[流程引擎]** 將 `plugin-environment-variables` 遷移至 client-v2，包含基於 React 的設定頁面與全域註冊的 `$env` 執行時期變數；為 `plugin-file-manager` 新增 client-v2 入口，包含基於 React 的儲存設定頁面，以及基於 FlowModel 的上傳欄位、上傳動作與預覽功能。([#9413](https://github.com/nocobase/nocobase/pull/9413)) - 貢獻者：@Molunerfinn

### 🐛 錯誤修復

- **[客戶端]**
  - 修復 JS 欄位設為唯讀後，JS 程式碼無法再編輯的問題。([#9404](https://github.com/nocobase/nocobase/pull/9404)) - 貢獻者：@gchust

  - 修復 v2 頁面頁籤在儲存設定後無法立即同步的問題 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) - 貢獻者：@zhangzhonghe

  - 修復欄位聯動規則中子表格欄位指派無效的問題。([#9412](https://github.com/nocobase/nocobase/pull/9412)) - 貢獻者：@gchust

  - 修復新增表單中關聯欄位的預設值彈窗顯示異常的問題。([#9408](https://github.com/nocobase/nocobase/pull/9408)) - 貢獻者：@gchust

- **[集合欄位：Markdown(Vditor)]** 修復在水平表單佈局中 Markdown 欄位提示文字被隱藏的問題 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) - 貢獻者：@katherinehhh

- **[行動端（已棄用）]** 修復行動端訊息彈窗無法關閉或滾動的問題 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) - 貢獻者：@zhangzhonghe

- **[WEB 客戶端]** 修復使用翻譯後標籤進行路由類型篩選的問題 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) - 貢獻者：@zhangzhonghe

- **[工作流：審批]** 修復 JS 欄位出現在審批流程設定中的問題 - 貢獻者：@zhangzhonghe

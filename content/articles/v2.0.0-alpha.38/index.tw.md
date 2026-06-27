---
title: "NocoBase v2.0.0-alpha.38：支援表格欄位操作拖曳"
description: "v2.0.0-alpha.38 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援表格欄位操作的拖曳功能 ([#7842](https://github.com/nocobase/nocobase/pull/7842)) - 作者：@zhangzhonghe

- **[資料視覺化]** 新增圖表 SQL 資料來源 ([#7830](https://github.com/nocobase/nocobase/pull/7830)) - 作者：@heziqiang

### 🚀 改進

- **[客戶端]** 在 RunJS 腳本上下文中新增對 Day.js 函式庫的支援，讓日期與時間操作更便利。 ([#7841](https://github.com/nocobase/nocobase/pull/7841)) - 作者：@gchust

### 🐛 錯誤修復

- **[工具函式]**
  - 修復篩選按鈕上出現「無效的篩選項目類型」錯誤 ([#7838](https://github.com/nocobase/nocobase/pull/7838)) - 作者：@zhangzhonghe

  - 在交集策略中啟用物件合併功能 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) - 作者：@chenos

  - 修復事件流程中出現「無法識別的操作」錯誤 ([#7835](https://github.com/nocobase/nocobase/pull/7835)) - 作者：@zhangzhonghe

- **[客戶端]**
  - 修復表格區塊中行操作按鈕的聯動規則在行資料更新後未重新執行的問題，確保規則現在能在資料變更時正確重新套用。 ([#7832](https://github.com/nocobase/nocobase/pull/7832)) - 作者：@gchust

  - 修復在程式碼編輯器中預覽包含 JSX 語法的程式碼時出現的錯誤 ([#7836](https://github.com/nocobase/nocobase/pull/7836)) - 作者：@gchust

- **[未定義]** 修復深色模式下外掛文件首頁樣式不正確的問題。 ([#7839](https://github.com/nocobase/nocobase/pull/7839)) - 作者：@gchust

- **[檔案管理]** 修復表格區塊欄位配置問題 ([#7843](https://github.com/nocobase/nocobase/pull/7843)) - 作者：@katherinehhh

- **[AI 員工]** 在 v1 頁面上隱藏 AI 員工聊天按鈕 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) - 作者：@cgyrock

- **[資料視覺化：ECharts]** 修復 ECharts 設定中 labelType 的問題 - 作者：@heziqiang

- **[郵件管理]**
  - 修復草稿錯誤 - 作者：@jiannx

  - 同步 Microsoft 郵件讀取狀態時不包含時間戳 - 作者：@jiannx

---
title: "NocoBase v2.1.0-beta.44：修復行動裝置上已選關聯欄位資料未顯示的問題"
description: "v2.1.0-beta.44 版本發行說明"
---

### 🚀 功能改進

- **[工作流：審批]** 調整了審批觸發器與節點配置的驗證規則，確保 UI 相關欄位存在。by @mytharcher

### 🐛 問題修復

- **[客戶端]** 修正在行動裝置上已選關聯欄位資料未顯示的問題。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
- **[客戶端 v2]**

  - 修正選單連動規則儲存錯誤。([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - 修正 v2 頁面區塊上方間距過大的問題。([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
- **[流程引擎]** 修正為子表單設定欄位值時頁面卡住的問題。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
- **[AI 員工]**

  - 修正 AI 提供者基礎 URL 驗證。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
  - 修正 AI 員工工作流節點中 `ctx.get` 錯誤。([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
- **[通知：應用內訊息]** 修正應用內通知頻道時間戳篩選器的 SQL 注入風險。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[操作：複製記錄]** 修正複製記錄提交失敗時按鈕狀態未重置的問題。([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[日曆]** 修正 v2 頁面中日曆事件顏色未從設定的顏色欄位渲染的問題。([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
- **[流程引擎]**

  - 修正複製區塊範本後修改範本可能意外影響原始區塊內容的問題。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
  - 修正拖曳彈出頁籤重新排序無效的問題。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust

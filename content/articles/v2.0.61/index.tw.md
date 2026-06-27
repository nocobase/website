---
title: "NocoBase v2.0.61：增強部分內建 RunJS 函式的自動完成支援"
description: "v2.0.61 版本發布說明"
---

### 🚀 功能改進

- **[client]** 增強了部分內建 RunJS 函式的自動完成支援。([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[undefined]** 更新了開源插件的 Embed NocoBase 文件。([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  參考：[Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 錯誤修復

- **[flow-engine]**

  - 修復了為子表單設定欄位值時頁面卡住的問題。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - 修復了切換 UI 配置模式開關後，彈窗顯示過時 UI 資料的問題。([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
- **[client]**

  - 修復了表格區塊中記錄操作聯動規則行為不正確的問題。([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - 修復了行動端上已選關聯欄位資料未顯示的問題。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - 修復了欄位被聯動規則隱藏後再次顯示時變成唯讀的問題。([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** 修復了 nginx 模板，使其能以 JavaScript MIME 類型提供 `.mjs` 資源。([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 修復了匯入數值型密碼值可能失敗的問題。([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[AI 員工]** 修復了 AI 提供者基礎 URL 驗證問題。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
- **[Flow 引擎]**

  - 修復了拖曳彈窗分頁標籤重新排序無效的問題。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - 修復了複製區塊模板後修改模板，可能意外影響原始區塊內容的問題。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[通知：應用內訊息]** 修復了應用內通知頻道時間戳過濾器的 SQL 注入風險。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[授權設定]** 修復了當 pkg 登入檢查緩慢或無法連線時，授權設定頁面可能長時間卡住的問題。([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[工作流：JavaScript]** 明確說明工作流 JavaScript 模組支援模式不安全，且不構成權限邊界。([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  參考：[Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[存取控制]** 修復了當聯合角色為預設角色時，首次登入權限不完整的問題。([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[檔案管理]** 修復了本地檔案儲存路徑驗證，防止不安全路徑逃逸出設定的儲存根目錄。([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[密碼策略]** 修復了密碼策略驗證對數值型密碼值可能失敗的問題。by @2013xile

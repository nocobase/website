---
title: "NocoBase v2.1.0-beta.43：更新開源插件的嵌入 NocoBase 文件"
description: "v2.1.0-beta.43 版本發行說明"
---

### 🎉 新功能

- **[client-v2]** 新增 `TypedVariableInput`，讓 v2 郵件外掛的 SMTP 連接埠與安全模式欄位可接受類型常數或 `{{ $env.X }}` 變數。（[#9637](https://github.com/nocobase/nocobase/pull/9637)）by @Molunerfinn

- **[存取控制]** 將「使用者」與「角色與權限」設定頁面遷移至 v2。（[#9619](https://github.com/nocobase/nocobase/pull/9619)）by @jiannx

### 🚀 改進

- **[undefined]** 更新開源外掛的「嵌入 NocoBase」文件。（[#9642](https://github.com/nocobase/nocobase/pull/9642)）by @zhangzhonghe
參考：[嵌入 NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** 增強部分內建 RunJS 函式的自動完成支援。（[#9481](https://github.com/nocobase/nocobase/pull/9481)）by @gchust

- **[cli]** 改善初始化與自我更新指引。（[#9633](https://github.com/nocobase/nocobase/pull/9633)）by @chenos

### 🐛 錯誤修復

- **[client]**
  - 修正重新整理頁面後，區塊可能錯誤顯示為已刪除的問題。（[#9662](https://github.com/nocobase/nocobase/pull/9662)）by @zhangzhonghe

  - 修正表格區塊中記錄動作連結規則行為不正確的問題。（[#9652](https://github.com/nocobase/nocobase/pull/9652)）by @gchust

  - （連結規則）修正欄位在隱藏後再次顯示時變成唯讀的問題。（[#9649](https://github.com/nocobase/nocobase/pull/9649)）by @katherinehhh

- **[cli]** 修正 nginx 範本，使其能以 JavaScript MIME 類型提供 `.mjs` 資源。（[#9626](https://github.com/nocobase/nocobase/pull/9626)）by @mytharcher

- **[database]** 修正匯入數值型密碼值可能失敗的問題。（[#9635](https://github.com/nocobase/nocobase/pull/9635)）by @2013xile

- **[流程引擎]**
  - 修正切換 UI 配置模式開關後，彈出視窗顯示過時 UI 資料的問題。（[#9525](https://github.com/nocobase/nocobase/pull/9525)）by @gchust

  - 修正滑鼠懸停在關聯欄位時，欄位搜尋被清除的問題。（[#9646](https://github.com/nocobase/nocobase/pull/9646)）by @zhangzhonghe

- **[client-v2]** 保留指派欄位值。（[#9640](https://github.com/nocobase/nocobase/pull/9640)）by @katherinehhh

- **[檔案管理]** 修正本機檔案儲存路徑驗證，防止不安全路徑逸出設定的儲存根目錄。（[#9628](https://github.com/nocobase/nocobase/pull/9628)）by @mytharcher

- **[區塊：甘特圖]** 改善甘特圖工具提示位置，避免遮蓋任務條，並將任務標籤在條內與條外一致對齊。（[#9638](https://github.com/nocobase/nocobase/pull/9638)）by @jiannx

- **[存取控制]** 修正當聯合角色為預設角色時，首次登入權限不完整的問題。（[#9632](https://github.com/nocobase/nocobase/pull/9632)）by @2013xile

- **[授權設定]** 修正當套件登入檢查緩慢或無法連線時，授權設定頁面長時間卡住的問題。（[#9650](https://github.com/nocobase/nocobase/pull/9650)）by @hongboji

- **[工作流：JavaScript]** 說明工作流 JavaScript 模組支援模式不安全，且不構成權限邊界。（[#9629](https://github.com/nocobase/nocobase/pull/9629)）by @mytharcher
參考：[工作流 JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[密碼政策]** 修正密碼政策驗證可能對數值型密碼值失敗的問題。by @2013xile

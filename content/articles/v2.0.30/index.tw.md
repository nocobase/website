---
title: "NocoBase v2.0.30：為 JavaScript 節點新增 `isolated-vm` 作為預設 JavaScript 執行引擎"
description: "v2.0.30 版本發行說明"
---

### 🚀 改進

- **[工作流程：JavaScript]** 新增 `isolated-vm` 作為 JavaScript 節點的預設 JavaScript 執行引擎 ([#8973](https://github.com/nocobase/nocobase/pull/8973))，作者：@mytharcher
參考：[JavaScript 節點](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 錯誤修復

- **[客戶端]** 修正修改表單資料後關閉多層彈出視窗時，二次確認訊息不正確的問題。([#8944](https://github.com/nocobase/nocobase/pull/8944))，作者：@gchust

- **[工作流程：SQL 節點]** 修復 SQL 節點中的安全性問題 ([#8989](https://github.com/nocobase/nocobase/pull/8989))，作者：@mytharcher

- **[AI 員工]** 為 AI 對話 API 新增所有權驗證 ([#8993](https://github.com/nocobase/nocobase/pull/8993))，作者：@cgyrock

- **[工作流程：審批]** 修復舊版遷移的版本限制，以避免在最新版本部署啟動時拋出錯誤，作者：@mytharcher

---
title: "NocoBase v1.4.0-alpha.20241017164316：工作流節點改進"
description: "v1.4.0-alpha.20241017164316 版本發行說明"
---

### 🎉 新功能

- **[工作流：循環節點]** 為循環節點配置新增更多控制選項 ([#5342](https://github.com/nocobase/nocobase/pull/5342)) by @mytharcher
  參考：[循環節點](https://docs.nocobase.com/handbook/workflow-loop)
- **[工作流]** 為工作流節點新增測試執行按鈕，以及實現測試功能的 API ([#5407](https://github.com/nocobase/nocobase/pull/5407)) by @mytharcher
- **[欄位元件：遮罩]** 新增欄位元件 `mask`，支援將欄位資料顯示為遮罩字串 by @gchust
  參考：[遮罩](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 改進

- **[客戶端]** 允許表格欄位標題重設為預設值 ([#5439](https://github.com/nocobase/nocobase/pull/5439)) by @katherinehhh

### 🐛 錯誤修復

- **[客戶端]** 修正欄位元件選項未正確翻譯的問題 ([#5442](https://github.com/nocobase/nocobase/pull/5442)) by @gchust
- **[工作流：HTTP 請求節點]** 修正請求節點中的舊版錯誤訊息 ([#5443](https://github.com/nocobase/nocobase/pull/5443)) by @mytharcher

---
title: "NocoBase v1.6.0-alpha.8：為所有類型的工作流程待辦事項新增固定的全域入口"
description: "v1.6.0-alpha.8 版本發布說明"
---

### 🎉 新功能

- **[工作流：人工節點]** 為所有類型的工作流待辦事項新增固定的全域入口 ([#5858](https://github.com/nocobase/nocobase/pull/5858)) by @mytharcher

- **[密碼策略]** 新增外掛：密碼策略，用於設定所有使用者的密碼規則與登入鎖定策略 by @2013xile
參考：[密碼策略與使用者鎖定](https://docs.nocobase.com/handbook/password-policy)
### 🚀 改進

- **[客戶端]** 為外掛管理員新增篩選關鍵字「安全性」 ([#5977](https://github.com/nocobase/nocobase/pull/5977)) by @2013xile

- **[工作流：自訂操作事件]** 變更手動執行的 API by @mytharcher

### 🐛 錯誤修復

- **[工作流]** 修復 `WorkflowVariableWrapper` 元件中 `onChange` 無法運作的問題 ([#5964](https://github.com/nocobase/nocobase/pull/5964)) by @mytharcher

---
title: "NocoBase v2.0.8：更新 AI 聊天框用戶提示"
description: "v2.0.8 版本發行說明"
---

### 🎉 新功能

- **[AI 員工]** 更新 AI 聊天框使用者提示 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) @heziqiang

### 🐛 錯誤修復

- **[伺服器]** 透過在資源檔後附加雜湊值來解決快取問題 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) @chenos

- **[AI 員工]** 修復 AI 資料來源設定渲染問題。 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) @cgyrock

- **[工作流程：自訂操作事件]** 修復自訂操作工作流程在作為子流程執行時卡住的問題 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) @mytharcher

- **[工作流程：審核]**
  - 清理審核操作中的關聯值，以避免任何超出權限範圍的資料操作 @mytharcher

  - 修復手動執行審核工作流程時拋出錯誤的問題 @mytharcher

  - 修復因新增或委派時 `dataAfter` 值遺失而導致的錯誤 @mytharcher

  - 修復 `appends` 參數被 ACL 過濾的問題 @mytharcher

  - 修復 ACL 問題：當使用者無權限時，不應建立或更新關聯值 @mytharcher

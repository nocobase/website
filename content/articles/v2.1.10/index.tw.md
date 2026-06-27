---
title: "NocoBase v2.1.10：新增在遠端 MCP 客戶端 URL 和標頭中使用當前使用者變數的支援"
description: "v2.1.10 版本發行說明"
---

### 🎉 新功能

- **[ai]** 新增在遠端 MCP 客戶端 URL 與標頭中使用當前使用者變數的支援。（[#9828](https://github.com/nocobase/nocobase/pull/9828)）by @cgyrock
- **[cli]** 支援安裝鉤子腳本（[#9824](https://github.com/nocobase/nocobase/pull/9824)）by @chenos

### 🚀 改進

- **[client-v2]** 在 UI 欄位驗證設定中，將欄位層級的驗證規則顯示為唯讀的繼承規則。（[#9819](https://github.com/nocobase/nocobase/pull/9819)）by @katherinehhh
- **[流程引擎]** 使用流程表面 API 建構 AI 員工時，預設將當前區塊加入使用者上下文。（[#9840](https://github.com/nocobase/nocobase/pull/9840)）by @gchust

### 🐛 錯誤修復

- **[client-v2]** 修正在區塊設定更新後，區塊未重新整理的問題。（[#9843](https://github.com/nocobase/nocobase/pull/9843)）by @gchust
- **[工作流：自訂操作事件]**

  - 修正自訂上下文觸發工作流程操作，使 v2 操作按鈕在提交前能解析請求負載中的前端變數（[#9853](https://github.com/nocobase/nocobase/pull/9853)）by @mytharcher
  - 修正 v2 自訂操作工作流程綁定選擇器，使已啟用的工作流程能透過布林值正確過濾並列出。（[#9865](https://github.com/nocobase/nocobase/pull/9865)）by @mytharcher
- **[區塊：甘特圖]** 修正甘特圖任務彈出視窗範本設定無法正確套用或清除的問題。（[#9835](https://github.com/nocobase/nocobase/pull/9835)）by @jiannx
- **[工作流：審批]**

  - 修正審批操作節點驗證，允許 `applyDetail` 或 `approvalUid` 為 `null`，並在未提供字串參考時跳過處理 by @mytharcher
  - 修正相關審批無法正確載入或重新整理的問題 by @zhangzhonghe

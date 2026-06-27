---
title: "NocoBase v1.7.0-alpha.1：支援使用結束節點判斷狀態"
description: "v1.7.0-alpha.1 版本發行說明"
---

### 🎉 新功能

- **[工作流程：事件後操作]** 支援使用結束節點來判定狀態 ([#6399](https://github.com/nocobase/nocobase/pull/6399)) - @mytharcher

### 🚀 改進

- **[工作流程]** 修復未登入時 API 回傳 401 錯誤 ([#6412](https://github.com/nocobase/nocobase/pull/6412)) - @mytharcher

- **[郵件管理員]** 在全域中為工具列按鈕使用相同的元素結構與樣式 - @mytharcher

- **[工作流程：審批]** 調整任務中心 UI - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 無法將頁面移動至群組內 ([#6413](https://github.com/nocobase/nocobase/pull/6413)) - @zhangzhonghe

  - 深層選單未顯示圖示 ([#6410](https://github.com/nocobase/nocobase/pull/6410)) - @zhangzhonghe

- **[驗證]** 使用者若無角色，應重新導向至錯誤訊息頁面 ([#6408](https://github.com/nocobase/nocobase/pull/6408)) - @sheldon66

- **[工作流程：自訂操作事件]** 「觸發工作流程」按鈕缺少聯動規則設定 - @katherinehhh

- **[備份管理員]** 備份還原時缺少加密金鑰資料 - @gchust

- **[工作流程：審批]** 避免唯一鍵衝突 - @mytharcher

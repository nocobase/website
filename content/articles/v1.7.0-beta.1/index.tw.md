---
title: "NocoBase v1.7.0-beta.1：相容於歷史按鈕存取控制設定"
description: "v1.7.0-beta.1 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 相容於歷史按鈕存取控制設定 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh

- **[工作流：事件後操作]** 支援使用結束節點判斷狀態 ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher

- **[工作流：回應訊息]** 支援在動作觸發器中使用 by @mytharcher

### 🚀 改進

- **[工作流]** 修復未登入時 API 回傳 401 錯誤 ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher

- **[工作流：人工節點]** 調整工作流任務中心 UI ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher

- **[郵件管理員]** 在工具列按鈕中使用全域一致的元素結構與樣式 by @mytharcher

- **[工作流：審批]** 調整任務中心 UI by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 無法將頁面移動至群組內 ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe

  - 深層選單未顯示圖示 ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe

  - FormDrawer 主題上下文問題 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh

- **[工作流：人工節點]** 避免唯一鍵衝突 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher

- **[資料來源管理員]** 編輯外部資料來源欄位時發生錯誤 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh

- **[驗證]** 使用者無角色時應重新導向至錯誤訊息頁面 ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66

- **[工作流：自訂動作事件]** 「觸發工作流」按鈕缺少連動規則設定 by @katherinehhh

- **[備份管理員]** 備份還原時遺失加密金鑰資料 by @gchust

- **[工作流：審批]** 避免唯一鍵衝突 by @mytharcher

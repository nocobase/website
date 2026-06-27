---
title: "NocoBase v2.0.0-beta.21：支援在表單區塊中設定關聯集合欄位的欄位"
description: "v2.0.0-beta.21 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援在表單區塊中設定關聯集合欄位的欄位 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) - 作者：@katherinehhh

- **[動作：複製記錄]** 新增 2.0 複製動作 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) - 作者：@katherinehhh

- **[工作流程]** 支援在工作流程畫布上透過拖放來複製、貼上及移動節點 ([#8559](https://github.com/nocobase/nocobase/pull/8559)) - 作者：@mytharcher

### 🚀 改進

- **[流程引擎]** 改善 JS 模型程式碼編輯器中的自動完成與程式碼提示 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) - 作者：@gchust

- **[工作流程：審批]** 移除對 JS 欄位的支援 - 作者：@zhangzhonghe

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在非配置模式下可能發生的「讀取隱藏」渲染錯誤 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) - 作者：@gchust

  - 修正子表格（內嵌編輯）在編輯表單切換為唯讀檢視後，仍顯示編輯模式欄位的問題 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) - 作者：@katherinehhh

- **[流程引擎]** 修正使用「複製」模式下的區塊範本時，點擊區塊中的某些動作按鈕會導致彈出空白視窗的問題 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) - 作者：@gchust

- **[區塊：地圖]** 修正地圖區塊中重複出現「另存為範本」設定選項的問題 ([#8584](https://github.com/nocobase/nocobase/pull/8584)) - 作者：@katherinehhh

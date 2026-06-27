---
title: "NocoBase v1.4.17：支援在 m2m 陣列欄位中使用「表格選取記錄」變數"
description: "v1.4.17 版本發行說明"
---

### 🎉 新功能

- **[client]** 支援在多對多陣列欄位中使用「表格選取記錄」變數 ([#5974](https://github.com/nocobase/nocobase/pull/5974)) - @2013xile

### 🚀 改進

- **[undefined]** 預設啟用主題插件 ([#5957](https://github.com/nocobase/nocobase/pull/5957)) - @zhangzhonghe

- **[資料來源：主要]** 新增名稱衝突驗證，防止使用者建立與系統集合同名的集合 ([#5962](https://github.com/nocobase/nocobase/pull/5962)) - @chareice

- **[工作流程]** 避免在大多數地方誤用日期範圍變數，除非是篩選元件 ([#5954](https://github.com/nocobase/nocobase/pull/5954)) - @mytharcher

### 🐛 錯誤修復

- **[database]**
  - 修正在 destroy 動作中，使用 filterByTk 搭配 filter 參數時無法刪除資料的問題 ([#5976](https://github.com/nocobase/nocobase/pull/5976)) - @chareice

  - repository 的 firstOrCreate 與 updateOrCreate 方法遺失上下文 ([#5973](https://github.com/nocobase/nocobase/pull/5973)) - @chenos

- **[client]**
  - 修正在表單中新增一對一關聯欄位時的問題 ([#5975](https://github.com/nocobase/nocobase/pull/5975)) - @katherinehhh

  - 修正子表格中刪除資料後重新選取時，欄位指派異常的問題 ([#5958](https://github.com/nocobase/nocobase/pull/5958)) - @katherinehhh

  - 修正因資料包含名為 'children' 的欄位而導致的表格區塊錯誤 ([#5951](https://github.com/nocobase/nocobase/pull/5951)) - @zhangzhonghe

- **[資料來源：主要]** 修正 unixTimestamp 欄位的舊版相容性問題。([#5967](https://github.com/nocobase/nocobase/pull/5967)) - @chareice

- **[工作流程]** 修正手動節點 UI 設定中子詳細區塊拋出錯誤的問題 ([#5953](https://github.com/nocobase/nocobase/pull/5953)) - @mytharcher

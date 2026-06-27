---
title: "NocoBase v1.3.55：為區塊初始化器使用更精確含義的圖示"
description: "v1.3.55 版本發行說明"
---

### 🚀 改善

- **[客戶端]** 為區塊初始化器使用語意更精確的圖示 ([#5757](https://github.com/nocobase/nocobase/pull/5757))，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正基於圖示變更的 E2E 測試案例 ([#5768](https://github.com/nocobase/nocobase/pull/5768))，作者：@mytharcher

  - 修正選擇欄位在資料為空時顯示空白 ([#5762](https://github.com/nocobase/nocobase/pull/5762))，作者：@katherinehhh

- **[資料庫]** 修正更新 hasOne/belongsTo 關聯值時缺少外鍵的問題 ([#5754](https://github.com/nocobase/nocobase/pull/5754))，作者：@chareice

- **[資料來源管理器]** 修正來源鍵顯示不正確的問題 ([#5771](https://github.com/nocobase/nocobase/pull/5771))，作者：@katherinehhh

- **[工作流程：自訂動作事件]**
  - 允許所有角色在外部資料來源中觸發自訂動作事件，作者：@mytharcher

  - 修正預設資料來源設為主要資料來源，作者：@mytharcher

  - 修正未匹配時資料來源的錯誤，作者：@mytharcher

  - 修正自訂動作觸發器在關聯上未觸發的問題，作者：@mytharcher

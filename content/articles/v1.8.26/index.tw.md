---
title: "NocoBase v1.8.26：支援行事曆標題的語言映射顯示"
description: "v1.8.26 版本發行說明"
---

### 🚀 功能改進

- **[客戶端]** 為工具提示與群組項目標題新增在地化支援 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) - @katherinehhh

- **[日曆]** 支援日曆標題的語言區域對應顯示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) - @katherinehhh

### 🐛 錯誤修復

- **[客戶端]** 修正選單圖示設定彈出視窗被遮擋的問題 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) - @zhangzhonghe

- **[通知：應用程式內訊息]**
  - 修正通知連結解析錯誤的問題 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) - @mytharcher

  - 修正開啟通知彈出視窗時未顯示最新訊息的問題 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) - @mytharcher

- **[工作流程]** 修正工作流程中背景任務佇列的訂閱邏輯錯誤，導致執行訊息處理不當的問題 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) - @mytharcher

- **[工作流程：審核]**
  - 修正從外部資料來源刪除資料時發生錯誤的問題 - @mytharcher

  - 修正審核表單中的公式欄位未自動更新的問題 - @mytharcher

---
title: "NocoBase v1.9.0-alpha.15：為訊息佇列使用標準系統日誌"
description: "v1.9.0-alpha.15 版本發行說明"
---

### 🚀 功能改進

- **[auth]** 支援在用戶名稱中使用「.」([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile
- **[server]** 使用標準系統日誌記錄器處理訊息佇列 ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher
- **[snowflake-id]** 將系統表中使用自動遞增主鍵但無唯一識別碼的 ID 更改為 53 位元的 Snowflake 風格 ID ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile
- **[Calendar]** 支援行事曆標題的語系對應顯示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh
- **[Workflow: Manual node]** 支援在已停用的工作流程中檢視和恢復待處理的手動任務 ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher
- **[Theme editor]** 新增側邊選單顏色自訂功能 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis queue adapter]** 為 Redis 訊息佇列適配器使用標準系統日誌記錄器 by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修復按鈕圖示設定彈出視窗被遮蓋/重疊的問題 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe
  - 修復 Popover 元件被重疊/遮蓋的問題 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe
  - 唯讀的 select/multiselect/date/richtext 在公開表單上仍可編輯 ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh
- **[Workflow]**

  - 修復工作流程中背景任務佇列的訂閱邏輯錯誤，導致執行訊息處理不當的問題 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher
  - 修復與工作流程日誌快取相關的潛在錯誤 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher
- **[Notification: In-app message]** 修復通知連結解析錯誤的問題 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher
- **[Data source: REST API]** 修復 REST API URL 驗證規則 by @katherinehhh
- **[HTTP request encryption]** 修復請求參數不支援原生 URLSearchParams 類型的問題 by @mytharcher
- **[Template print]** 支援 chinaRegions 欄位 by @jiannx
- **[Email manager]** 修復郵件主旨亂碼的問題 by @jiannx

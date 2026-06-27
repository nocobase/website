---
title: "NocoBase v1.9.0-beta.8：新增側邊選單顏色自訂支援"
description: "v1.9.0-beta.8 版本發行說明"
---

### 🚀 功能改進

- **[auth]** 支援在用戶名稱中使用「.」符號 ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile

- **[client]** 為工具提示與群組項目標題新增在地化支援 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh

- **[工作流：人工節點]** 支援在已停用的工作流程中檢視與恢復待處理的人工任務 ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher

- **[日曆]** 支援日曆標題的語系對應顯示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh

- **[主題編輯器]** 新增側邊選單顏色自訂支援 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu

- **[Redis 佇列適配器]** 為 Redis 訊息佇列適配器使用標準系統日誌記錄器 by @mytharcher

### 🐛 錯誤修復

- **[client]**
  - 修正按鈕圖示設定彈出視窗被遮蓋/重疊的問題 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe

  - 修正選單圖示設定彈出視窗被遮蔽的問題 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe

  - 修正 Popover 元件被重疊/遮蓋的問題 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe

- **[通知：應用內訊息]**
  - 修正通知連結解析不正確的問題 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher

  - 修正開啟通知彈出視窗時未顯示最新訊息的問題 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher

- **[工作流]**
  - 修正與工作流程日誌快取相關的潛在錯誤 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher

  - 修正工作流程中背景任務佇列的訂閱邏輯錯誤，導致執行訊息處理不正確的問題 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher

- **[資料來源：REST API]** 修正 REST API URL 驗證規則 by @katherinehhh

- **[HTTP 請求加密]** 修正請求參數不支援原生 URLSearchParams 類型的問題 by @mytharcher

- **[範本列印]** 支援 chinaRegions 欄位 by @jiannx

- **[工作流：審批]**
  - 修正審批表單中的公式欄位未自動更新的問題 by @mytharcher

  - 修正從外部資料來源刪除資料時發生錯誤的問題 by @mytharcher

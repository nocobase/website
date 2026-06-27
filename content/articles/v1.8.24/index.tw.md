---
title: "NocoBase v1.8.24：工作流支援在審批流程中返回任意節點"
description: "v1.8.24 版本發行說明"
---

### 🎉 新功能

- **[工作流：審批]** 支援在審批流程中退回至任意節點，作者：@mytharcher

### 🚀 改善

- **[伺服器]** 使用標準系統日誌記錄訊息佇列 ([#7480](https://github.com/nocobase/nocobase/pull/7480))，作者：@mytharcher

- **[客戶端]** 移除檔案清單中的省略號彈出視窗 ([#7479](https://github.com/nocobase/nocobase/pull/7479))，作者：@mytharcher

- **[工作流]** 優化工作流準備流程，支援使用預載的節點資料 ([#7476](https://github.com/nocobase/nocobase/pull/7476))，作者：@mytharcher

- **[主題編輯器]** 新增側邊選單顏色自訂支援 ([#7483](https://github.com/nocobase/nocobase/pull/7483))，作者：@duannyuuu

- **[Redis 佇列適配器]** 為 Redis 訊息佇列適配器使用標準系統日誌，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復 Popover 元件被重疊/遮蓋的問題 ([#7491](https://github.com/nocobase/nocobase/pull/7491))，作者：@zhangzhonghe

  - 修正連結規則中數值欄位「不為空」檢查不正確的問題 ([#7477](https://github.com/nocobase/nocobase/pull/7477))，作者：@katherinehhh

  - 唯讀的單選/多選/日期/富文字欄位在公開表單中仍可編輯 ([#7484](https://github.com/nocobase/nocobase/pull/7484))，作者：@katherinehhh

- **[工作流]** 修復與工作流日誌快取相關的潛在錯誤 ([#7490](https://github.com/nocobase/nocobase/pull/7490))，作者：@mytharcher

- **[HTTP 請求加密]** 修復請求參數不支援原生 URLSearchParams 類型的問題，作者：@mytharcher

- **[資料來源：REST API]** 修正 REST API URL 驗證規則，作者：@katherinehhh

- **[工作流：審批]** 修復審批完成通知中狀態文字未翻譯的問題，作者：@mytharcher

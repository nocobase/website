---
title: "NocoBase v1.9.0-alpha.16：預覽圖片時支援旋轉"
description: "v1.9.0-alpha.16 版本發布說明"
---

### 🚀 功能改進

- **[客戶端]**
  - 支援在預覽時旋轉圖片 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) - 感謝 @mytharcher

  - 為工具提示與群組項目標題新增在地化支援 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) - 感謝 @katherinehhh

- **[RabbitMQ 佇列適配器]** 改善 RabbitMQ 連線處理與訊息處理邏輯 - 感謝 @sdp-ncd

### 🐛 錯誤修復

- **[客戶端]**
  - 修正側邊欄子選單無法正確高亮的問題 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) - 感謝 @duannyuuu

  - 修正選單圖示設定彈出視窗被遮擋的問題 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) - 感謝 @zhangzhonghe

- **[通知：應用內訊息]** 修正開啟通知彈出視窗時，未顯示最新訊息的問題 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) - 感謝 @mytharcher

- **[工作流程]** 修正綁定工作流程設定中，載入關聯欄位上下文時，工作流程列表條件不正確的問題 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) - 感謝 @mytharcher

- **[工作流程：迴圈節點]** 修正即使迴圈節點條件未滿足，流程仍錯誤地前進至下一項目的問題 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) - 感謝 @mytharcher

- **[工作流程：審批]**
  - 修正從外部資料來源刪除資料時發生錯誤的問題 - 感謝 @mytharcher

  - 修正審批表單中的公式欄位無法自動更新的問題 - 感謝 @mytharcher

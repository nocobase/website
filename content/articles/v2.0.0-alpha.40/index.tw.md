---
title: "NocoBase v2.0.0-alpha.40：優化工具欄樣式，防止圖示被遮擋"
description: "v2.0.0-alpha.40 版本發布說明"
---

### 🚀 功能改進

- **[流程引擎]** 優化工具欄樣式，防止圖示被遮擋 ([#7883](https://github.com/nocobase/nocobase/pull/7883)) - @zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]** 修復登出後重新登入時 ACL 權限資料未重新載入的問題 ([#7874](https://github.com/nocobase/nocobase/pull/7874)) - @gchust

- **[客戶端]** 修復表單項目設定中的問題 ([#7867](https://github.com/nocobase/nocobase/pull/7867)) - @katherinehhh

- **[資料視覺化]** 僅在圖表預覽時使用 SQL 資源除錯模式 ([#7893](https://github.com/nocobase/nocobase/pull/7893)) - @heziqiang

- **[多空間]** 多空間關聯使用者 - @jiannx

- **[工作流：審批]**
  - 修復載入通知頻道時頁面大小不足，導致列表未完整載入的問題 - @mytharcher

  - 修正在提交審批時查詢審批記錄列表所發生的效能問題 - @mytharcher

  - 修正待辦中心審批列表卡片上的日期格式，以顯示完整的日期與時間 - @mytharcher

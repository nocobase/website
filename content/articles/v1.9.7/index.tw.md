---
title: "NocoBase v1.9.7：錯誤修復"
description: "v1.9.7 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]** 修復審批表單連動規則失效的問題 ([#7858](https://github.com/nocobase/nocobase/pull/7858)) - @zhangzhonghe

- **[伺服器]** 修正在服務拆分模式下，已取消訂閱的佇列訊息無法發佈的問題 ([#7875](https://github.com/nocobase/nocobase/pull/7875)) - @mytharcher

- **[工作流程]**
  - 修正因監聽不存在的外部資料來源事件而導致的錯誤 ([#7855](https://github.com/nocobase/nocobase/pull/7855)) - @mytharcher

  - 改用 eventQueue 取代共用的 backgroundJob，以防止在服務拆分模式下共用佇列被錯誤消費 ([#7871](https://github.com/nocobase/nocobase/pull/7871)) - @mytharcher

- **[工作流程：人工節點]** 修正應使用的語言套件命名空間，以顯示正確的翻譯內容 ([#7877](https://github.com/nocobase/nocobase/pull/7877)) - @mytharcher

- **[存取控制]** 修正關聯操作程式碼片段未生效的問題 ([#7876](https://github.com/nocobase/nocobase/pull/7876)) - @2013xile

- **[工作流程：審批]**
  - 修正載入通知頻道時頁面大小不足，導致清單無法完整載入的問題 - @mytharcher

  - 修正審批表單連動規則失效的問題 - @zhangzhonghe

  - 修正待辦中心審批列表卡片上的日期格式，以顯示完整的日期與時間 - @mytharcher

  - 修正提交審批時查詢審批記錄列表所發生的效能問題 - @mytharcher

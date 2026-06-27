---
title: "NocoBase v1.8.0-beta.5：支援篩選更多工作流程欄位"
description: "v1.8.0-beta.5 版本發行說明"
---

### 🚀 功能改進

- **[工作流程]** 支援篩選更多工作流程欄位 ([#6995](https://github.com/nocobase/nocobase/pull/6995)) - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 彈出動作觸發時，Markdown 區塊連結規則未生效 ([#7007](https://github.com/nocobase/nocobase/pull/7007)) - @katherinehhh

  - 唯讀模式下，關聯欄位在懸停時顯示子表格與子表單 ([#7002](https://github.com/nocobase/nocobase/pull/7002)) - @zhangzhonghe

  - 欄位樣式連結規則未生效 ([#7003](https://github.com/nocobase/nocobase/pull/7003)) - @katherinehhh

  - 在賦值元件中設定變數時，缺少欄位標題 ([#7001](https://github.com/nocobase/nocobase/pull/7001)) - @katherinehhh

  - 在模態框內的詳細區塊子表格中切換頁面時，觸發未儲存變更警告 ([#7004](https://github.com/nocobase/nocobase/pull/7004)) - @katherinehhh

- **[非同步任務管理器]** 修復非同步匯入時多次執行的問題 ([#7006](https://github.com/nocobase/nocobase/pull/7006)) - @aaaaaajie

- **[本地化]** 修正空文字導致的錯誤 ([#7010](https://github.com/nocobase/nocobase/pull/7010)) - @2013xile

- **[動作：匯出記錄 Pro]** 修復非同步匯入時多次執行的問題 - @aaaaaajie

- **[工作流程：審批]** 修復委託審批在被他人批准後無法繼續進行的問題 - @mytharcher

---
title: "NocoBase v1.6.18：支援使用變數設定持續時間"
description: "v1.6.18 版本發行說明"
---

### 🚀 改進項目

- **[客戶端]**
  - 為 `Variable.Input` 新增預設類型回退 API ([#6644](https://github.com/nocobase/nocobase/pull/6644)) - @mytharcher

  - 優化未配置頁面的提示訊息 ([#6641](https://github.com/nocobase/nocobase/pull/6641)) - @zhangzhonghe

- **[工作流：延遲節點]** 支援使用變數設定持續時間 ([#6621](https://github.com/nocobase/nocobase/pull/6621)) - @mytharcher

- **[工作流：自訂操作事件]** 為觸發工作流按鈕新增重新整理設定 - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 子表格描述與新增按鈕重疊 ([#6646](https://github.com/nocobase/nocobase/pull/6646)) - @katherinehhh

  - 模態框中水平表單佈局導致的虛線底線 ([#6639](https://github.com/nocobase/nocobase/pull/6639)) - @katherinehhh

- **[檔案儲存：S3(專業版)]** 修正缺少 await 的下一次呼叫 - @jiannx

- **[電子郵件管理員]** 修正缺少 await 的下一次呼叫 - @jiannx

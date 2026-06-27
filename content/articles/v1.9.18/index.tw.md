---
title: "NocoBase v1.9.18：錯誤修復"
description: "v1.9.18 版本發行說明"
---

### 🐛 錯誤修復

- **[動作：匯入記錄]** 匯入的欄位與 ACL 設定中的欄位不符 ([#8075](https://github.com/nocobase/nocobase/pull/8075))，作者 @2013xile

- **[工作流程]** 修復當節點中的任務為 undefined 時，執行頁面拋出錯誤的問題 ([#8066](https://github.com/nocobase/nocobase/pull/8066))，作者 @mytharcher

- **[存取控制]** 為外部資料來源的關聯操作新增權限檢查中介軟體 ([#8062](https://github.com/nocobase/nocobase/pull/8062))，作者 @2013xile

- **[工作流程：審核]**
  - 修復在詳細資料抽屜中載入與記錄相關的審核時，拋出權限錯誤的問題，作者 @mytharcher

  - 修復在返回分支中，審核記錄未包含在任務結果中的問題，作者 @mytharcher

  - 修復當分支搭配順序與會簽時，流程不正確的問題，作者 @mytharcher

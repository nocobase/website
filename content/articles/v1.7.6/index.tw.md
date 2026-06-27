---
title: "NocoBase v1.7.6：錯誤修復"
description: "v1.7.6 版本發行說明"
---

### 🚀 改善

- **[客戶端]** 禁止將群組選單拖曳至自身 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) - @zhangzhonghe

### 🐛 錯誤修復

- **[客戶端]**
  - 修復區塊無法讀取外部資料來源檢視資料的問題 ([#7017](https://github.com/nocobase/nocobase/pull/7017)) - @aaaaaajie

  - 修復篩選區塊參數錯誤問題 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) - @zhangzhonghe

  - 聯動規則中當前物件變數無效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) - @zhangzhonghe

  - 無法使用聯動規則清除子表格的必填欄位指示器 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) - @zhangzhonghe

- **[未定義]** 移除 possibleTypes 的資料庫依賴，強制使用 API 驅動配置 - @aaaaaajie

- **[行動端]** 優化行動端彈窗延遲問題 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) - @zhangzhonghe

- **[資料來源管理器]** 移除 possibleTypes 的資料庫依賴，強制使用 API 驅動配置 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) - @aaaaaajie

- **[動作：匯入記錄]** 修復匯入 XLSX 樹狀表格資料時，批次編輯發生錯誤的問題 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) - @aaaaaajie

- **[工作流程]** 修復工作流程不存在時的 UI 錯誤 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) - @mytharcher

- **[工作流程：JavaScript]** 修復相對路徑的 require 問題 - @mytharcher

- **[工作流程：審核]**
  - 修復工作流程被刪除時拋出的錯誤 - @mytharcher

  - 從快照重新載入檔案關聯以避免 URL 過期 - @mytharcher

  - 修復觸發變數 - @mytharcher

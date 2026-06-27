---
title: "NocoBase v2.0.0-alpha.17：新增表格行點擊事件監聽支援"
description: "v2.0.0-alpha.17 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 新增表格行點擊事件監聽功能，讓使用者在點擊表格中的某一行時，可執行特定操作 ([#7622](https://github.com/nocobase/nocobase/pull/7622))，由 @zhangzhonghe 貢獻

- **[工作流：審批]** 開放 `approvalId` 變數，供審批觸發器使用，由 @mytharcher 貢獻

### 🐛 錯誤修復

- **[流程引擎]** 修正在 antd 元件中翻譯未生效的問題 ([#7621](https://github.com/nocobase/nocobase/pull/7621))，由 @zhangzhonghe 貢獻

- **[資料來源：主資料庫]** 修正建立反向關聯欄位後，多節點間中繼資料未同步的問題 ([#7628](https://github.com/nocobase/nocobase/pull/7628))，由 @mytharcher 貢獻

- **[plugin-demo-platform]** 示範功能支援自動停止應用程式，由 @jiannx 貢獻

- **[多應用]**
  - 多應用遷移未觸發鉤子，由 @jiannx 貢獻

  - 多應用代理支援快取，由 @jiannx 貢獻

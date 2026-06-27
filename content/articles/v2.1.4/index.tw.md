---
title: "NocoBase v2.1.4：將上傳的匯入檔案改為磁碟儲存，以減少大量資料匯入時的記憶體壓力"
description: "v2.1.4 版本發行說明"
---

### 🚀 功能改進

- **[工作流程]** 改善工作流程元資料編輯體驗，支援在詳細資訊彈窗中編輯描述，並在複製工作流程時自動填入來源工作流程的元資料。([#9766](https://github.com/nocobase/nocobase/pull/9766)) @mytharcher

### 🐛 錯誤修復

- **[動作：匯入記錄]** 將上傳的匯入檔案改為磁碟儲存，以減少大量資料匯入時的記憶體壓力。([#9739](https://github.com/nocobase/nocobase/pull/9739)) @mytharcher
- **[備份管理員]** 修復安全性問題，避免在還原備份時接受不安全的 PostgreSQL 結構描述名稱。([#9758](https://github.com/nocobase/nocobase/pull/9758)) @2013xile
- **[工作流程]**

  - 修復工作流程逾時處理，使中止的執行及其待處理任務能夠原子性地更新。([#9768](https://github.com/nocobase/nocobase/pull/9768)) @mytharcher
  - 修復工作流程節點變更後，最後更新者欄位未更新的問題。([#9769](https://github.com/nocobase/nocobase/pull/9769)) @mytharcher
- **[動作：匯入記錄 Pro]** 在 Pro 匯入建立非同步任務之前，避免在請求節點中解析大型檔案。@mytharcher
- **[版本控制]** 調整版本控制頂部捷徑入口的位置，使其在傳統與 v2 管理後台佈局中均顯示於 UI 編輯器旁。@cgyrock

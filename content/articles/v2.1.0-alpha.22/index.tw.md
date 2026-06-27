---
title: "NocoBase v2.1.0-alpha.22：新增檢查節點建立的 API"
description: "v2.1.0-alpha.22 版本發布說明"
---

### 🎉 新功能

- **[工作流程]** 新增檢查節點建立的 API ([#9207](https://github.com/nocobase/nocobase/pull/9207)) - 作者：@mytharcher

### 🚀 改進

- **[CLI]** 在請求日誌與稽核日誌中新增 CLI 請求來源追蹤 ([#9223](https://github.com/nocobase/nocobase/pull/9223)) - 作者：@2013xile

- **[存取控制]** 為 ACL 技能新增一些 API ([#9198](https://github.com/nocobase/nocobase/pull/9198)) - 作者：@Andrew1989Y

- **[工作流程：審核]**
  - 新增審核節點建立的驗證 - 作者：@mytharcher
  - 在審核記錄資料表中新增索引，以提升列表與提交操作的效能 - 作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]** 關聯欄位隱藏排序開關 ([#9220](https://github.com/nocobase/nocobase/pull/9220)) - 作者：@jiannx

- **[資料庫]** 修正小數欄位在啟用驗證時可能拒絕有效數值輸入的問題 ([#9204](https://github.com/nocobase/nocobase/pull/9204)) - 作者：@2013xile

- **[AI 員工]** 修正 AI 員工表單選擇中附件 URL 欄位值遺失的問題 ([#9216](https://github.com/nocobase/nocobase/pull/9216)) - 作者：@cgyrock

- **[使用者]** 修正編輯個人資料中動態設定的欄位無法載入最新使用者資料的問題 ([#9205](https://github.com/nocobase/nocobase/pull/9205)) - 作者：@2013xile

- **[資料來源管理器]** 修正外部資料來源排序欄位上的分組排序無法清除的問題 ([#9203](https://github.com/nocobase/nocobase/pull/9203)) - 作者：@2013xile

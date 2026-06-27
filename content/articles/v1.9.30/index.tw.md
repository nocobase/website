---
title: "NocoBase v1.9.30：改善集合事件中 `changed` 欄位的描述"
description: "v1.9.30 版本發布說明"
---

### 🚀 功能改進

- **[工作流程]** 改善集合事件中 `changed` 欄位的描述 ([#8216](https://github.com/nocobase/nocobase/pull/8216)) - 感謝 @mytharcher

### 🐛 錯誤修復

- **[cli]** license-kit 相容於 DB_PASSWORD 為空的情況 ([#8220](https://github.com/nocobase/nocobase/pull/8220)) - 感謝 @jiannx

- **[資料庫]** 修正主資料來源與外部資料來源之間日期欄位查詢不一致的問題 ([#8181](https://github.com/nocobase/nocobase/pull/8181)) - 感謝 @cgyrock

- **[授權設定]** 修正已授權外掛程式顯示異常的問題 ([#8214](https://github.com/nocobase/nocobase/pull/8214)) - 感謝 @jiannx

- **[工作流程：審核]**
  - 修正審核時導致關聯建立新記錄的問題 - 感謝 @mytharcher

  - 修正審核時導致多對多關聯建立新記錄的問題 - 感謝 @mytharcher

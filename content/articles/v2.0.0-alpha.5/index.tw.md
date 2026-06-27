---
title: "NocoBase v2.0.0-alpha.5：錯誤修復"
description: "v2.0.0-alpha.5 版本發行說明"
---

### 🐛 錯誤修復

- **[伺服器]** 主鍵遷移錯誤 ([#7563](https://github.com/nocobase/nocobase/pull/7563)) by @2013xile

- **[客戶端]**
  - 修正在提交表單後未重新整理資料的問題 ([#7560](https://github.com/nocobase/nocobase/pull/7560)) by @zhangzhonghe

  - 修正 `AssignedField` 元件中缺少動態屬性，導致「建立記錄」或「更新記錄」節點中檔案上傳錯誤的問題 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher

- **[日曆]** 修正日曆區塊中因唯一識別碼導致的資料查詢問題 ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh

- **[區塊：範本（已棄用）]** 修正開啟或關閉模態視窗時，觸發不必要的區塊範本請求問題 ([#7561](https://github.com/nocobase/nocobase/pull/7561)) by @gchust

- **[公開表單]** 修正公開表單中檔案欄位上傳規則不正確的問題 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher

- **[多應用管理員（已棄用）]** 修正多應用程式資料遷移前的連接埠驗證問題 ([#7540](https://github.com/nocobase/nocobase/pull/7540)) by @jiannx

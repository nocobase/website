---
title: "NocoBase v1.9.26：支援 `acl.registerSnippet` API 以合併片段配置"
description: "v1.9.26 版本發行說明"
---

### 🚀 功能改進

- **[acl]** 支援 `acl.registerSnippet` API 以合併片段設定 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) - 感謝 @mytharcher

- **[存取控制]** 禁止將 root 角色指派給使用者 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) - 感謝 @2013xile

### 🐛 錯誤修復

- **[授權設定]**
  - 修復 plugin-license TypeScript 建置異常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) - 感謝 @jiannx

  - 授權最佳化並新增提示資訊 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) - 感謝 @jiannx

- **[檔案管理]** 修正在 OSS 上預覽 `.txt` 檔案時字元編碼錯誤的問題 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) - 感謝 @mytharcher

- **[動作：匯入記錄]** 同步等待匯入觸發的 `afterCreate` 事件完成 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) - 感謝 @2013xile

- **[資料表：連接外部資料 (FDW)]** 修復載入大寫名稱資料表時失敗的問題 - 感謝 @2013xile

- **[資料來源：外部 SQL Server]** 修復 `encrypt` 與 `trustServerCertificate` 選項無法使用的問題 - 感謝 @2013xile

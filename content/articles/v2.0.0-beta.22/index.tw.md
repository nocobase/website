---
title: "NocoBase v2.0.0-beta.22：支援為頁面、頁面分頁、彈出視窗及彈出視窗分頁設定瀏覽器分頁標題"
description: "v2.0.0-beta.22 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援為頁面、頁面分頁、彈窗及彈窗分頁設定瀏覽器分頁標題 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe

- **[工作流：審批]** 為審批 API 新增 ACL 控制 by @mytharcher

### 🚀 改進

- **[客戶端]** 在篩選表單中為關聯欄位使用獨立的欄位模型 ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe

- **[工作流：抄送]** 重構工作流抄送外掛，支援 FlowModel 架構並相容 v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]**
  - 修正在 JS 區塊中無法建立 Blob 物件的問題。([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust

  - 修正 JS 模型中「ctx.sql」執行上下文不正確的問題。([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust

- **[欄位元件：遮罩]** 修正遮罩欄位設定彈窗無法正確載入所有使用者角色的問題。by @gchust

- **[工作流：審批]** 修正載入詳細記錄時 ID 不正確的問題 by @mytharcher

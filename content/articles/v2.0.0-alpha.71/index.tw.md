---
title: "NocoBase v2.0.0-alpha.71：支援可配置區塊高度"
description: "v2.0.0-alpha.71 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 支援為頁面、頁面分頁、彈窗及彈窗分頁設定瀏覽器分頁標題 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) - @zhangzhonghe

  - 支援在表單區塊中設定關聯集合欄位的欄位 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) - @katherinehhh

- **[區塊：網格卡片]** 支援可設定的區塊高度 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) - @katherinehhh

- **[動作：複製記錄]** 新增 2.0 複製動作 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) - @katherinehhh

- **[工作流：審批]** 為審批 API 新增 ACL 控制 - @mytharcher

### 🚀 改進

- **[客戶端]** 在篩選表單中為關聯欄位使用獨立的欄位模型 ([#8511](https://github.com/nocobase/nocobase/pull/8511)) - @zhangzhonghe

- **[工作流：抄送]** 重構工作流抄送外掛以支援 FlowModel 架構，並相容 v1/v2 版本 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) - @zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]**
  - 修正在 JS 模型中「ctx.sql」執行上下文不正確的問題 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) - @gchust

  - 修正在 JS 區塊中無法建立 Blob 物件的問題 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) - @gchust

- **[客戶端]**
  - 修正在 JS 欄位編輯器中點擊「執行」後，表格欄位未重新渲染的問題 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) - @gchust

  - 修正在非配置模式下可能出現的「read hidden」渲染錯誤 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) - @gchust

  - 修正子表格（內聯編輯）在編輯表單切換為唯讀檢視後，仍顯示編輯模式欄位的問題 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) - @katherinehhh

- **[流程引擎]** 修正使用「複製」模式下的區塊範本時，點擊區塊中的動作按鈕導致彈窗空白的問題 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) - @gchust

- **[欄位元件：遮罩]** 修正遮罩欄位設定彈窗無法正確載入所有使用者角色的問題 - @gchust

- **[工作流：審批]** 修正載入詳細記錄時 ID 不正確的問題 - @mytharcher

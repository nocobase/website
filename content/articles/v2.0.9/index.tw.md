---
title: "NocoBase v2.0.9：修復 CollectionField 元件在 DefaultValue 元件中無法渲染的問題"
description: "v2.0.9 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修復 CollectionField 元件在 DefaultValue 元件中無法渲染的問題 ([#8744](https://github.com/nocobase/nocobase/pull/8744))，感謝 @mytharcher

  - 修正在切換選單時資料區塊未重新整理的錯誤 ([#8735](https://github.com/nocobase/nocobase/pull/8735))，感謝 @gchust

- **[資料庫]** 修復 v2 版本中欄位自訂正則檢查失敗的問題 ([#8729](https://github.com/nocobase/nocobase/pull/8729))，感謝 @jiannx

- **[流程引擎]** 修復 ctx.exit 無法終止使用者自訂事件流程執行的問題 ([#8737](https://github.com/nocobase/nocobase/pull/8737))，感謝 @gchust

- **[工作流：審批]** 補上遺漏的參數，避免提交新審批時關聯資料未更新，感謝 @mytharcher

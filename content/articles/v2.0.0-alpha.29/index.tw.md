---
title: "NocoBase v2.0.0-alpha.29：修正 `resourceManager` 的中介軟體順序"
description: "v2.0.0-alpha.29 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修復了當前表單中關聯欄位變數無法正確識別的問題，確保表單中的資料處理準確無誤。([#7726](https://github.com/nocobase/nocobase/pull/7726)) 由 @gchust 貢獻

  - 修復了將陣列作為「toOne」欄位的值或預設值時導致錯誤的問題。這確保了變數解析結果的正確處理，提升了系統穩定性與準確性。([#7735](https://github.com/nocobase/nocobase/pull/7735)) 由 @gchust 貢獻

- **[存取控制]** 修正 `resourceManager` 的中介軟體順序 ([#7728](https://github.com/nocobase/nocobase/pull/7728)) 由 @2013xile 貢獻

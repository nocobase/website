---
title: "NocoBase v1.7.16：錯誤修復"
description: "v1.7.16 版本發布說明"
---

### 🐛 錯誤修復

- **[工作流程]**
  - 修正對大整數數字執行檢查時發生的錯誤 ([#7099](https://github.com/nocobase/nocobase/pull/7099))，由 @mytharcher 提供

  - 修正非當前工作流程版本導致的統計資料串聯刪除問題 ([#7103](https://github.com/nocobase/nocobase/pull/7103))，由 @mytharcher 提供

- **[動作：匯入記錄]** 解決批次匯入使用者名稱與密碼後發生的登入失敗問題 ([#7076](https://github.com/nocobase/nocobase/pull/7076))，由 @aaaaaajie 提供

- **[工作流程：審核]** 僅參與者可檢視（取得）審核詳細資訊，由 @mytharcher 提供

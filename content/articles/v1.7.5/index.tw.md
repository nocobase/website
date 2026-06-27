---
title: "NocoBase v1.7.5：錯誤修復"
description: "v1.7.5 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]** 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) - 感謝 @mytharcher

- **[資料庫]** 修復：在匯入 xlsx 時缺少建立者與更新者欄位 ([#7011](https://github.com/nocobase/nocobase/pull/7011)) - 感謝 @aaaaaajie

- **[工作流程]** 修復在建立或更新模式下，當建立時未變更欄位導致集合事件無法觸發的問題 ([#7015](https://github.com/nocobase/nocobase/pull/7015)) - 感謝 @mytharcher

- **[動作：匯出記錄 Pro]** 修復在附帶條件匯出附件時發生的錯誤。 - 感謝 @aaaaaajie

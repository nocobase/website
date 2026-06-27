---
title: "NocoBase v1.8.16：錯誤修復"
description: "v1.8.16 版本發布說明"
---

### 🚀 改進

- **[通知：應用程式內訊息]** 移除透過 `console.log` 輸出的 SQL 日誌 ([#7368](https://github.com/nocobase/nocobase/pull/7368)) - 感謝 @2013xile

### 🐛 錯誤修復

- **[伺服器]** 部分請求缺少 `ctx.action`，導致稽核日誌中介軟體發生錯誤 ([#7369](https://github.com/nocobase/nocobase/pull/7369)) - 感謝 @2013xile

- **[集合欄位：公式]** 修正因變數型別導致公式輸入無法通過驗證的問題 ([#7373](https://github.com/nocobase/nocobase/pull/7373)) - 感謝 @mytharcher

- **[備份管理員]** 大型檔案備份可能在實際完成前就顯示「成功」 - 感謝 @gchust

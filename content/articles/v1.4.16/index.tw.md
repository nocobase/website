---
title: "NocoBase v1.4.16：錯誤修復"
description: "v1.4.16 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]** 修正 UnixTimestamp 欄位精度轉換問題 ([#5931](https://github.com/nocobase/nocobase/pull/5931)) — 感謝 @chenos

- **[操作：複製記錄]** 修正 o2o 關聯欄位在詳細區塊與表單區塊中未顯示已設定的目標集合欄位問題 ([#5921](https://github.com/nocobase/nocobase/pull/5921)) — 感謝 @katherinehhh

- **[備份管理器]** 修正當 mysqldump 版本低於 8 時發生的備份錯誤 — 感謝 @gchust

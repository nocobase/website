---
title: "NocoBase v1.3.51：錯誤修復"
description: "v1.3.51 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修正欄位權限檢查不受關聯欄位上下文影響的問題 ([#5672](https://github.com/nocobase/nocobase/pull/5672))，作者：@katherinehhh

  - 修正連結規則將空值變更儲存為靜態空值的問題 ([#5667](https://github.com/nocobase/nocobase/pull/5667))，作者：@katherinehhh

- **[集合欄位：多對多（陣列）]** 修正使用多對多（陣列）欄位在關聯集合中擷取記錄時導致錯誤的問題 ([#5661](https://github.com/nocobase/nocobase/pull/5661))，作者：@2013xile

- **[區塊：甘特圖]** 修正甘特圖區塊範本在新增時錯誤呼叫行事曆區塊的問題 ([#5673](https://github.com/nocobase/nocobase/pull/5673))，作者：@katherinehhh

- **[資料視覺化]** 修正雙軸圖表中資料轉換在工具提示上無法運作的問題 ([#5649](https://github.com/nocobase/nocobase/pull/5649))，作者：@2013xile

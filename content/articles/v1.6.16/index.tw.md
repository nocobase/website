---
title: "NocoBase v1.6.16：錯誤修復"
description: "v1.6.16 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 表單欄位的 x-disabled 屬性未生效 ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh

  - 欄位標籤顯示問題，防止因冒號導致文字截斷 ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh

- **[資料庫]** 刪除一對多記錄時，同時傳入 `filter` 與 `filterByTk`，且 `filter` 包含關聯欄位時，`filterByTk` 會被忽略 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile

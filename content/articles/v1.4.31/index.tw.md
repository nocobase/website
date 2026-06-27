---
title: "NocoBase v1.4.31：優化篩選表單中的篩選元件以符合可篩選設定"
description: "v1.4.31 版本發行說明"
---

### 🚀 改進

- **[客戶端]** 優化篩選表單中的篩選元件，使其符合可篩選設定 ([#6110](https://github.com/nocobase/nocobase/pull/6110)) - @katherinehhh

- **[檔案管理]** 允許在刪除檔案（附件）記錄時一併刪除檔案 ([#6127](https://github.com/nocobase/nocobase/pull/6127)) - @mytharcher

### 🐛 錯誤修復

- **[資料庫]**
  - 修復按 uuid 欄位篩選的問題 ([#6138](https://github.com/nocobase/nocobase/pull/6138)) - @chareice

  - 修復更新沒有主鍵的資料表的問題 ([#6124](https://github.com/nocobase/nocobase/pull/6124)) - @chareice

- **[客戶端]**
  - 資料來源管理頁面報錯 ([#6141](https://github.com/nocobase/nocobase/pull/6141)) - @zhangzhonghe

  - 當聯動規則的條件涉及未顯示的關聯欄位時，按鈕的聯動規則失效 ([#6140](https://github.com/nocobase/nocobase/pull/6140)) - @zhangzhonghe

  - 修復關聯欄位快速新增表單中變數顯示不正確的問題 ([#6119](https://github.com/nocobase/nocobase/pull/6119)) - @katherinehhh

  - 快速新增彈出視窗中未顯示內容 ([#6123](https://github.com/nocobase/nocobase/pull/6123)) - @zhangzhonghe

  - 修復關聯欄位區塊未請求資料的問題 ([#6125](https://github.com/nocobase/nocobase/pull/6125)) - @zhangzhonghe

  - 修復子表格/子表單中的聯動規則影響關聯欄位彈出視窗中區塊的問題 ([#5543](https://github.com/nocobase/nocobase/pull/5543)) - @katherinehhh

- **[集合欄位：中國行政區劃]** 修復 chinaRegion 的 ACL 權限問題 ([#6137](https://github.com/nocobase/nocobase/pull/6137)) - @chareice

- **[工作流程]** 修復產生的 SQL 不正確的問題 ([#6128](https://github.com/nocobase/nocobase/pull/6128)) - @mytharcher

- **[集合欄位：多對多（陣列）]** 修復在子表單中更新多對多（陣列）欄位無法運作的問題 ([#6136](https://github.com/nocobase/nocobase/pull/6136)) - @2013xile

- **[行動端]** 修復行動裝置上唯讀模式下拉選單可點擊及文字溢出的問題 ([#6130](https://github.com/nocobase/nocobase/pull/6130)) - @katherinehhh

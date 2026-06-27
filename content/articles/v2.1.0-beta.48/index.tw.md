---
title: "NocoBase v2.1.0-beta.48：為非同步任務管理器頂部欄操作新增 v2 客戶端支援"
description: "v2.1.0-beta.48 版本發行說明"
---

### 🎉 新功能

- **[client-v2]** 支援文字欄位的掃描輸入 ([#9599](https://github.com/nocobase/nocobase/pull/9599)) - 感謝 @katherinehhh
- **[非同步任務管理器]** 為非同步任務管理器的頂部欄操作新增 v2 客戶端支援 ([#9707](https://github.com/nocobase/nocobase/pull/9707)) - 感謝 @jiannx
- **[備份管理器]** 為備份管理器外掛新增 v2 客戶端執行時期支援 ([#9712](https://github.com/nocobase/nocobase/pull/9712)) - 感謝 @katherinehhh
- **[資料來源：外部 NocoBase]** 新增資料來源外掛：外部 NocoBase - 感謝 @2013xile

### 🚀 改進

- **[client-v2]** 新增在 v2 彈出式選擇關聯欄位中停用多重選取的支援 ([#9730](https://github.com/nocobase/nocobase/pull/9730)) - 感謝 @katherinehhh
- **[檔案管理器]** 為檔案管理器新增內部上傳 `subPath` 支援 ([#9731](https://github.com/nocobase/nocobase/pull/9731)) - 感謝 @mytharcher
- **[變數與機密]** 環境變數 (`$env`) 現在可在 v1 執行時期中，透過基於流程引擎的變數選取器選取 ([#9728](https://github.com/nocobase/nocobase/pull/9728)) - 感謝 @Molunerfinn

### 🐛 錯誤修復

- **[database]** 修正在大量更新時，密碼欄位未進行雜湊處理的問題 ([#9736](https://github.com/nocobase/nocobase/pull/9736)) - 感謝 @mytharcher
- **[client]** 修正當彈出式子表格的列操作因聯動規則隱藏時，會導致整個子表格欄位被隱藏的問題 ([#9717](https://github.com/nocobase/nocobase/pull/9717)) - 感謝 @katherinehhh
- **[AI 員工]** 改善 AI 員工的資料查詢提示，使其在使用查詢工具前先載入所需技能 ([#9725](https://github.com/nocobase/nocobase/pull/9725)) - 感謝 @cgyrock
- **[資料來源管理器]** 修正變更標題欄位後，重新開啟 v2 資料來源欄位配置抽屜時，仍顯示舊標題欄位的問題 ([#9720](https://github.com/nocobase/nocobase/pull/9720)) - 感謝 @katherinehhh
- **[區塊：地圖]**

  - 修正啟用地圖外掛後，v2 資料來源管理器的新增欄位選單中缺少地圖幾何欄位的問題 ([#9715](https://github.com/nocobase/nocobase/pull/9715)) - 感謝 @katherinehhh
  - 修正 v1 Google 地圖區塊中 DrawingManager 無法使用的問題 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) - 感謝 @katherinehhh
- **[日曆]** 修正 v2 日曆區塊的詳細資訊抽屜中無法新增詳細資料與編輯區塊的問題 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) - 感謝 @jiannx

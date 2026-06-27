---
title: "NocoBase v2.0.55：儲存至向量資料庫時，重複表格名稱提示"
description: "v2.0.55 版本發行說明"
---

### 🚀 改善

- **[AI 員工]** 儲存至向量資料庫時，若資料表名稱重複則顯示提示 ([#9497](https://github.com/nocobase/nocobase/pull/9497))，作者：@cgyrock

- **[AI：知識庫]** 儲存至向量資料庫時，若資料表名稱重複則顯示提示，作者：@cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在動作按鈕事件流程中，無法解析當前彈窗記錄變數的問題。([#9495](https://github.com/nocobase/nocobase/pull/9495))，作者：@gchust

  - 修正表單提交時，子表單中的 JS 欄位值未正確設定的問題。([#9496](https://github.com/nocobase/nocobase/pull/9496))，作者：@gchust

- **[檔案管理]** 修正檔案管理器 `tx-cos` 上傳時缺少檔案大小元資料的問題。([#9499](https://github.com/nocobase/nocobase/pull/9499))，作者：@mytharcher

- **[資料來源：主要]** 修正同步欄位後，欄位選項被寫入綱要（schema）的問題 ([#9505](https://github.com/nocobase/nocobase/pull/9505))，作者：@2013xile

- **[WEB 客戶端]** 移除選單後清除區塊資料。([#9459](https://github.com/nocobase/nocobase/pull/9459))，作者：@gchust

- **[AI 員工]** 修正 AI 員工 OSS 檔案讀取錯誤 ([#9493](https://github.com/nocobase/nocobase/pull/9493))，作者：@cgyrock

- **[動作：匯入記錄]** 修正匯入日期類別欄位時，日期顯示錯誤的問題 ([#9463](https://github.com/nocobase/nocobase/pull/9463))，作者：@mytharcher

- **[動作：匯出記錄 Pro]** 修正從附件 URL 欄位匯出附件時拋出錯誤的問題，作者：@mytharcher

- **[動作：匯入記錄 Pro]** 修正 Pro 版 xlsx 匯入的時區處理問題，作者：@mytharcher

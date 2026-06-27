---
title: "NocoBase v2.0.33：為 AI 員工新增基於 LLIM 的網路搜尋工具"
description: "v2.0.33 版本發布說明"
---

### 🎉 新功能

- **[AI 員工]** 為 AI 員工新增基於 LLM 的網路搜尋工具 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) - 貢獻者 @cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 修正批次編輯操作時，會錯誤顯示未儲存變更確認訊息的問題 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) - 貢獻者 @gchust

  - 修正透過彈窗子表格新增記錄後提交表單時，會錯誤顯示二次確認彈窗的問題 ([#9035](https://github.com/nocobase/nocobase/pull/9035)) - 貢獻者 @gchust

- **[資料來源管理器]** 修正從資料庫同步欄位後，部分欄位類型未正確更新的問題 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) - 貢獻者 @2013xile

- **[AI 員工]** 修正當設定 APP_PUBLIC_PATH 並以子路徑存取時，AI 員工文件上傳失敗的問題 ([#9034](https://github.com/nocobase/nocobase/pull/9034)) - 貢獻者 @cgyrock

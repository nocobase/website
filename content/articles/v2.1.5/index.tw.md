---
title: "NocoBase v2.1.5：工作流郵件節點新增附件發送支援"
description: "v2.1.5 版本發佈說明"
---

### 🎉 新功能

- **[工作流：郵件節點]** 工作流郵件節點新增支援發送附件功能。([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

### 🚀 改進

- **[client-v2]** 表單子表格中的關聯欄位資料範圍現在支援當前項目變數。([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
- **[undefined]** 統一版本控制插件的中文文檔名稱為「版本控制」。([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
- **[檔案管理]** 檔案管理器中，針對內嵌文字的 PDF 預覽新增可選取文字支援。([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
- **[操作：批次編輯]** 優化 v2 操作插件的載入方式，並保持遷移後操作按鈕的順序穩定。([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
- **[版本控制]** 將版本控制插件的中文顯示名稱更改為「版本控制」。by @cgyrock

### 🐛 錯誤修復

- **[cli-v1]** 修復使用 create-nocobase-app 從 2.0 升級到 2.1 的專案在執行 `yarn dev` 時發生的錯誤。([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
- **[client-v2]** 修復遷移進度未顯示專用進度視圖的問題。([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
- **[流程引擎]** 修復 v2 單行文字與多行文字欄位在越南語及中文輸入法下的輸入問題。([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
- **[伺服器]** 修復 `pm:enable` 中不安全的插件名稱處理，以防止插件解析時的本地檔案包含風險。([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
- **[檔案管理]** 修復因 pdf.js worker 模組載入異常導致的 PDF 預覽失敗問題。([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
- **[區塊：看板]** 修復在編輯模式外開啟日曆、甘特圖與看板區塊時，意外持久化隱藏彈出操作並重複發送刪除請求的問題。([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
- **[操作：匯出記錄 Pro]** 改進 v2 匯入/匯出 Pro 的處理模式設定與說明提示。by @katherinehhh
- **[遷移管理器]** 修復匯入大型遷移資料檔案時可能發生的失敗問題。by @2013xile
- **[範本列印]** 在範本列印開始前拒絕不支援的範本檔案類型。by @2013xile

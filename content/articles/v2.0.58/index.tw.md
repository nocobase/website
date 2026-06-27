---
title: "NocoBase v2.0.58：新增管理員 API，可從頭或指定節點重新執行已啟動的工作流程"
description: "v2.0.58 版本發布說明"
---

### 🎉 新功能

- **[工作流程]** 新增管理員 API，可從頭或指定節點重新執行已啟動的工作流程。([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

### 🚀 改進

- **[客戶端]** 從選單項目設定中移除「隱藏」選項 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

### 🐛 錯誤修復

- **[客戶端]**
  - 修正同步行動日期選擇器彈出值 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh

  - 修正保留 v2 時間欄位的時間格式 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh

  - 提高掃描輸入圖片上傳限制 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh

  - 修正子表單聯動的隱藏狀態同步 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh

  - 修正子表單中的子表格無法新增第二行的問題 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh

  - 修正切換選單後頁面頁籤消失的問題 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe

- **[流程引擎]** 修正彈出視窗中表單成功提交後，表格操作聯動規則會錯誤執行的問題。([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust

- **[工作流程：自訂操作事件]** 修正自訂操作表格按鈕在多重記錄情境下，錯誤允許選取自訂情境工作流程的問題。([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher

- **[檔案管理]**
  - 修正檔案上傳期間的 Unicode 檔名正規化，以避免產生含有控制字元的物件鍵值。([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher

  - 改善 PDF 預覽失敗訊息，並記錄外部儲存的 CORS 需求。([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
參考：[檔案預覽](docs/docs/en/file-manager/file-preview/index.md)

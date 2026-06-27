---
title: "NocoBase v1.8.20：調整工作流程變數 API 以支援預設額外變數列表"
description: "v1.8.20 版本發布說明"
---

### 🚀 功能改進

- **[工作流程]** 調整工作流程變數 API，支援預設額外的變數列表 ([#7439](https://github.com/nocobase/nocobase/pull/7439)) by @mytharcher

- **[工作流程：審批]**
  - 支援在自訂通知中使用與審批相關的變數 by @mytharcher

  - 支援在結束節點終止執行後更新審批狀態 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在特定情境下，於行動版記錄選擇器彈窗中編輯記錄會導致錯誤的問題 ([#7444](https://github.com/nocobase/nocobase/pull/7444)) by @zhangzhonghe

  - 子表格中的附件欄位必填驗證未生效 ([#7431](https://github.com/nocobase/nocobase/pull/7431)) by @katherinehhh

  - 修正當附件 URL 欄位中的網址包含查詢參數時，圖示顯示不正確的問題 ([#7432](https://github.com/nocobase/nocobase/pull/7432)) by @mytharcher

- **[資料庫]**
  - 修正載入更多應用程式內訊息時發生的 MySQL 語法錯誤。([#7438](https://github.com/nocobase/nocobase/pull/7438)) by @aaaaaajie

  - 修正匯出的數字欄位精度問題 ([#7421](https://github.com/nocobase/nocobase/pull/7421)) by @aaaaaajie

- **[未定義]** 修正僅在 MySQL 外部資料來源中依日期欄位篩選的問題 ([#7422](https://github.com/nocobase/nocobase/pull/7422)) by @aaaaaajie

- **[動作：匯入記錄]** 修正當資料表主鍵為單行文字時匯入失敗的問題 ([#7416](https://github.com/nocobase/nocobase/pull/7416)) by @aaaaaajie

- **[工作流程]**
  - 補全自動刪除工作流程執行狀態的選項 ([#7436](https://github.com/nocobase/nocobase/pull/7436)) by @mytharcher

  - 修正工作流程任務中與行動選單相關的問題 ([#7419](https://github.com/nocobase/nocobase/pull/7419)) by @mytharcher

- **[動作：匯入記錄 Pro]** 修正使用字串主鍵進行 xlsx 匯入時，更新結果異常的問題。by @aaaaaajie

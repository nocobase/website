---
title: "NocoBase v1.7.8：新增環境變數以控制審計日誌輸出方式"
description: "v1.7.8 版本發布說明"
---

### 🎉 新功能

- **[稽核日誌]** 新增環境變數 `AUDIT_LOGGER_TRANSPORT`，用於控制稽核日誌的輸出方式，由 @2013xile 提供

### 🚀 改進

- **[日曆]** 支援在日曆區塊中設定每週起始日 ([#7032](https://github.com/nocobase/nocobase/pull/7032))，由 @katherinehhh 提供

- **[集合欄位：多對多（陣列）]** 修正資料表格中顯示多對多（多）欄位時的權限相關錯誤 ([#7028](https://github.com/nocobase/nocobase/pull/7028))，由 @aaaaaajie 提供

### 🐛 錯誤修復

- **[客戶端]**
  - 修正二級彈出表單中設定欄位時的自動關閉問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042))，由 @katherinehhh 提供

  - 修正篩選表單聯動規則中選項欄位無法運作的問題 ([#7035](https://github.com/nocobase/nocobase/pull/7035))，由 @katherinehhh 提供

  - 篩選表單驗證規則導致篩選按鈕失效 ([#6975](https://github.com/nocobase/nocobase/pull/6975))，由 @zhangzhonghe 提供

  - 修正因重複 API 請求導致區塊模板中欄位無法顯示的問題 ([#6985](https://github.com/nocobase/nocobase/pull/6985))，由 @zhangzhonghe 提供

- **[動作：匯入記錄]** 修正涉及關聯欄位時子表格匯入失敗的問題 ([#7039](https://github.com/nocobase/nocobase/pull/7039))，由 @aaaaaajie 提供

- **[資料視覺化]** 圖表中的核取方塊群組欄位應顯示標籤而非原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033))，由 @2013xile 提供

- **[工作流程]** 修正觸發器未正確設定時，手動執行動作會拋出錯誤的問題 ([#7036](https://github.com/nocobase/nocobase/pull/7036))，由 @mytharcher 提供

- **[工作流程：審核]**
  - 避免未定義欄位錯誤，由 @mytharcher 提供

  - 修正重新整理詳細頁面時的 API 錯誤，由 @mytharcher 提供

- **[企業微信]** 在閘道中介軟體中新增回呼路徑檢查，由 @2013xile 提供

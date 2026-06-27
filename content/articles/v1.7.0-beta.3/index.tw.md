---
title: "NocoBase v1.7.0-beta.3：允許為登入按鈕設定自訂提示文字"
description: "v1.7.0-beta.3 版本發布說明"
---

### 🎉 新功能

- **[WeCom]** 允許為登入按鈕設定自訂提示文字，由 @2013xile 提供

### 🚀 改進

- **[資料視覺化]** 將已棄用的 `x-designer` 替換為 `x-settings`（[#6442](https://github.com/nocobase/nocobase/pull/6442)），由 @2013xile 提供

### 🐛 錯誤修復

- **[客戶端]** 修正圖片網址中的特殊字元導致無法顯示的問題（[#6459](https://github.com/nocobase/nocobase/pull/6459)），由 @mytharcher 提供

- **[工作流：人工節點]** 修正遷移過程中拋出的錯誤（[#6445](https://github.com/nocobase/nocobase/pull/6445)），由 @mytharcher 提供

- **[工作流：自訂動作事件]** 移除 E2E 測試案例中的 `only`，由 @mytharcher 提供

- **[工作流：審核]**
  - 修正對外部資料源進行審核時拋出的錯誤，由 @mytharcher 提供

  - 修正審核表單中關聯資料未顯示的問題，由 @mytharcher 提供

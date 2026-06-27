---
title: "NocoBase v1.5.0-beta.18：錯誤修復"
description: "v1.5.0-beta.18 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修復第三方插件中表格儲存格顯示異常的問題 ([#5934](https://github.com/nocobase/nocobase/pull/5934))，由 @zhangzhonghe 貢獻

  - 修復區塊模板管理頁面中刪除按鈕被停用的問題 ([#5922](https://github.com/nocobase/nocobase/pull/5922))，由 @zhangzhonghe 貢獻

- **[驗證]** 修復在驗證設定頁面開啟編輯抽屜時表單欄位為空的問題 ([#5949](https://github.com/nocobase/nocobase/pull/5949))，由 @chenos 貢獻

- **[工作流：自訂動作事件]**
  - 修復在 SQLite 上測試案例失敗的問題，由 @mytharcher 貢獻

  - 修復自訂動作觸發器的測試案例，由 @mytharcher 貢獻

- **[工作流：動作前事件]** 修復請求攔截器的測試案例，由 @mytharcher 貢獻

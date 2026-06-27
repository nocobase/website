---
title: "NocoBase v1.9.0-beta.14：從審批觸發器中暴露 `approvalId` 變數以供使用"
description: "v1.9.0-beta.14 版本說明"
---

### 🎉 新功能

- **[工作流：審批]** 開放 `approvalId` 變數，供審批觸發器使用（作者：@mytharcher）

### 🚀 改進

- **[伺服器]** 優化載入 l10n 資源的方法，避免阻塞事件循環（[#7653](https://github.com/nocobase/nocobase/pull/7653)）（作者：@2013xile）

- **[快取]** 避免因複製布隆過濾器而造成的效能開銷（[#7652](https://github.com/nocobase/nocobase/pull/7652)）（作者：@2013xile）

- **[動作：匯入記錄]** 改善表格標題遺失時的錯誤訊息提示（[#7656](https://github.com/nocobase/nocobase/pull/7656)）（作者：@mytharcher）

### 🐛 錯誤修復

- **[客戶端]** 防止表單項目標籤中的文字斷行（[#7647](https://github.com/nocobase/nocobase/pull/7647)）（作者：@katherinehhh）

- **[工作流]** 修正在應用程式停止時記錄器拋出的錯誤（[#7639](https://github.com/nocobase/nocobase/pull/7639)）（作者：@mytharcher）

- **[工作流：審批]**
  - 修正審批提交後，因資料庫錯誤導致交易未正確回滾而引發的交易超時問題（作者：@mytharcher）
  - 修正新增受託人後，任務計數未更新的問題（作者：@mytharcher）
  - 修正審批提交表單中變數未被解析的問題（作者：@mytharcher）

- **[電子郵件管理員]** 捕捉同步錯誤（作者：@jiannx）

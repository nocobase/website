---
title: "NocoBase v1.8.18：在授權設定中每次複製最新的實例 ID"
description: "v1.8.18 版本發布說明"
---

### 🚀 功能改進

- **[工作流程]** 更新節點選單，改為雙欄佈局顯示選項，以提升資訊密度，讓使用者一次能查看更多選項 ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher

- **[授權設定]** 在授權設定中，每次複製最新的實例 ID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx

### 🐛 錯誤修復

- **[客戶端]**
  - 在聯動規則的空值驗證中，將數字 0 視為空值 ([#7404](https://github.com/nocobase/nocobase/pull/7404)) by @katherinehhh

  - 修正連結按鈕文字斷行的問題 ([#7406](https://github.com/nocobase/nocobase/pull/7406)) by @mytharcher

- **[行動端]** 行動端日期欄位顯示格式不正確 ([#7412](https://github.com/nocobase/nocobase/pull/7412)) by @katherinehhh

- **[Office 檔案預覽器]** 修正上傳檔案至附件 URL 欄位時拋出錯誤的問題 ([#7405](https://github.com/nocobase/nocobase/pull/7405)) by @mytharcher

- **[工作流程]** 修正編輯工作流程分類時拋出錯誤且表單資料消失的問題 ([#7408](https://github.com/nocobase/nocobase/pull/7408)) by @mytharcher

- **[工作流程：郵件節點]** 修正郵件節點可能無法正確恢復執行的問題 ([#7409](https://github.com/nocobase/nocobase/pull/7409)) by @mytharcher

- **[工作流程：自訂操作事件]** 成功對多筆記錄觸發操作後，清除已選取的行 by @mytharcher

- **[範本列印]** 多行資料中單選欄位的列印問題 by @jiannx

- **[工作流程：審批]** 修正審批記錄中載入外部資料來源資料時出現 404 錯誤的問題 by @mytharcher

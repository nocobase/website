---
title: "NocoBase v1.8.17：支援在同一工作流程中的所有審批節點使用一致的工作標題"
description: "v1.8.17 版本發行說明"
---

### 🎉 新功能

- **[工作流：審批]** 支援在同一工作流程中為所有審批節點使用一致的工作標題，由 @mytharcher 提供

### 🚀 改進

- **[認證]** 成功登入後移除 URL 中的 token 參數 ([#7386](https://github.com/nocobase/nocobase/pull/7386))，由 @2013xile 提供

- **[範本列印]** 支援 m2m 陣列欄位，由 @jiannx 提供

### 🐛 錯誤修復

- **[行動端]** 修正行動端審批對話框中表單提交資料不正確的問題 ([#7389](https://github.com/nocobase/nocobase/pull/7389))，由 @zhangzhonghe 提供

- **[工作流]** 修正工作流任務中心頁面標題的翻譯 ([#7392](https://github.com/nocobase/nocobase/pull/7392))，由 @mytharcher 提供

- **[日曆]** 日曆事件項目的工具提示顯示 [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372))，由 @katherinehhh 提供

- **[通知：應用內訊息]** 修正翻譯 ([#7384](https://github.com/nocobase/nocobase/pull/7384))，由 @mytharcher 提供

- **[檔案管理]** 移除檔案上傳大小限制的提示 ([#7391](https://github.com/nocobase/nocobase/pull/7391))，由 @mytharcher 提供

- **[檔案儲存：S3(Pro)]**
  - 棄用有問題的參數 `attachmentField`，由 @mytharcher 提供

  - 修正無法使用 IAM 認證方式上傳檔案的問題，由 @mytharcher 提供

---
title: "NocoBase v2.0.0-beta.9：透過改用原生 WebKit CSS 實現文字省略，提升插件管理員列表渲染效能"
description: "v2.0.0-beta.9 版本發布說明"
---

### 🚀 改進

- **[客戶端]** 將文字省略改為原生 webkit css，以提升插件管理員列表的渲染效能 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) @mytharcher

### 🐛 錯誤修復

- **[檔案管理]** 修正上傳至 S3 儲存空間的檔案，其產生的 URL 不正確的問題 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) @mytharcher

- **[工作流程]** 修正複製節點時，綱要 ID 未更新的問題 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) @mytharcher

- **[檔案儲存：S3(Pro)]** 修正檔案重新命名模式無法運作的問題 @mytharcher

- **[範本列印]** 修正設定範本彈出視窗被遮蔽的問題 @zhangzhonghe

- **[工作流程：審核]** 修正因缺少 `ValueBlock.Result` 元件導致數值區塊無法顯示的問題 @mytharcher

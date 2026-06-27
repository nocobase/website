---
title: "NocoBase v2.1.0-alpha.7：支援以多關鍵字搜尋內建文件，並在單一工具呼叫中閱讀多份文件"
description: "v2.1.0-alpha.7 版本發行說明"
---

### 🎉 新功能

- **[AI 員工]** 支援以多個關鍵字搜尋內建文件，並在單次工具呼叫中讀取多份文件 ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 改進

- **[AI 員工]** 更新 AI 聊天框使用者提示 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

### 🐛 錯誤修復

- **[客戶端]** 在行動裝置上，先關閉選單再執行頁面跳轉 ([#8699](https://github.com/nocobase/nocobase/pull/8699)) by @zhangzhonghe

- **[AI LLM：GigaChat]** 修復 GigaChat 外掛在 2.0 版本中無法運作的問題。([#8707](https://github.com/nocobase/nocobase/pull/8707)) by @cgyrock

- **[AI 員工]**
  - 修復使用 MySQL 資料庫時 AI 對話發生錯誤的問題。([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock

  - 統一使用 ContentBlock 作為 chatGPT API 的檔案輸入 ([#8696](https://github.com/nocobase/nocobase/pull/8696)) by @cgyrock

  - 修復使用者在未確認工具執行情況下發送新訊息時，AI 代理程式發生錯誤的問題 ([#8697](https://github.com/nocobase/nocobase/pull/8697)) by @cgyrock

- **[AI：知識庫]** 修復 AI 知識庫外掛啟動時發生錯誤的問題。by @cgyrock

- **[電子郵件管理員]** 圖片渲染錯誤 by @jiannx

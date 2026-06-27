---
title: "NocoBase v2.1.0-beta.23：為工作流程新增建立者和更新者欄位"
description: "v2.1.0-beta.23 版本發行說明"
---

### 🎉 新功能

- **[工作流]** 為工作流程新增建立者與更新者欄位 ([#9217](https://github.com/nocobase/nocobase/pull/9217)) by @mytharcher

### 🚀 改進

- **[未定義]**
  - 改進 AI Agent 安裝指南，防止 Agent 繞過 `--ui` 精靈，並自動偵測 Node 版本管理器。([#9243](https://github.com/nocobase/nocobase/pull/9243)) by @Molunerfinn

  - 更新 AI 文件，要求 NocoBase 版本 >= 2.1.0-beta.20，並建議使用最新的 beta 版本。([#9252](https://github.com/nocobase/nocobase/pull/9252)) by @Molunerfinn

  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) by @Molunerfinn

- **[client-v2]** 將 client v2 與 client v1 分離，並移除其對 client v1 的依賴 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) by @zhangzhonghe

### 🐛 錯誤修復

- **[未定義]** 修正文件網站中語言切換器產生錯誤網址（例如 `/cn/es/` 而非 `/es/`）的問題。([#9233](https://github.com/nocobase/nocobase/pull/9233)) by @Molunerfinn

- **[客戶端]** 設定彈出視窗的最大高度與滾動保護機制，確保提交區域始終可觸及 ([#9226](https://github.com/nocobase/nocobase/pull/9226)) by @jiannx

- **[資料視覺化]** 修正流程頁面中圖表查詢配置的欄位選擇器為空的問題 ([#9276](https://github.com/nocobase/nocobase/pull/9276)) by @2013xile

- **[認證]** 修正變更密碼後舊工作階段仍保持啟用的問題 ([#9261](https://github.com/nocobase/nocobase/pull/9261)) by @2013xile

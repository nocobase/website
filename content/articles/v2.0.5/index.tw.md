---
title: "NocoBase v2.0.5：修復 GigaChat 插件在 2.0 版本中無法運作的問題"
description: "v2.0.5 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]** 在行動裝置上，先關閉選單再執行頁面跳轉 ([#8699](https://github.com/nocobase/nocobase/pull/8699))，作者：@zhangzhonghe

- **[AI LLM：GigaChat]** 修復 GigaChat 外掛在 2.0 版本中無法運作的問題。([#8707](https://github.com/nocobase/nocobase/pull/8707))，作者：@cgyrock

- **[AI 員工]**
  - 使用 ContentBlock 統一 chatGPT API 的檔案輸入 ([#8696](https://github.com/nocobase/nocobase/pull/8696))，作者：@cgyrock

  - 修復使用者在未確認工具執行時發送新訊息導致 AI 代理程式錯誤的問題 ([#8697](https://github.com/nocobase/nocobase/pull/8697))，作者：@cgyrock

- **[AI：知識庫]** 修復 AI 知識庫外掛啟動時發生的錯誤。作者：@cgyrock

- **[電子郵件管理員]** 圖片渲染錯誤，作者：@jiannx

---
title: "NocoBase v2.1.8：將 `@langchain/openai` 鎖定在修補程式層級更新，以適用於 AI 套件"
description: "v2.1.8 版本發布說明"
---

### 🐛 錯誤修復

- **[AI]**

  - 將 `@langchain/openai` 鎖定為僅接受修補程式層級更新，以確保 AI 套件的穩定性。（[#9829](https://github.com/nocobase/nocobase/pull/9829)）by @cgyrock
  - 修復了 AI 外掛中不相容的 LangChain 相依性解析問題。（[#9831](https://github.com/nocobase/nocobase/pull/9831)）by @cgyrock
- **[AI：知識庫]**

  - 修復了在未啟用 AI 外掛的情況下啟用 AI 知識庫外掛時，錯誤訊息不明確的問題。by @cgyrock
  - 修復了 AI 知識庫外掛中不相容的 LangChain 相依性解析問題。by @cgyrock

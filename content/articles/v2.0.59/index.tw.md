---
title: "NocoBase v2.0.59：錯誤修復"
description: "v2.0.59 版本發行說明"
---

### 🐛 錯誤修復

* **[AI]** 將 LangChain 依賴鎖定至穩定版本，以防止 Ollama 模型工具呼叫失敗，並避免影響上游版本發佈。（[#9604](https://github.com/nocobase/nocobase/pull/9604)）by @cgyrock
* **[流程引擎]** 修正了前端日誌層級不正確的問題。（[#9577](https://github.com/nocobase/nocobase/pull/9577)）by @gchust
* **[資料表：樹狀結構]** 修正了因樹狀資料中父子關係循環導致查詢失敗時，錯誤訊息不明確的問題。（[#9603](https://github.com/nocobase/nocobase/pull/9603)）by @zhangzhonghe
* **[AI：知識庫]** 將 LangChain 依賴鎖定至穩定版本，以防止 Ollama 模型工具呼叫失敗，並避免影響上游版本發佈。by @cgyrock

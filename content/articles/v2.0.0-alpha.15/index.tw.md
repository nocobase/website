---
title: "NocoBase v2.0.0-alpha.15：新增 LLM 提供者"
description: "v2.0.0-alpha.15 版本發行說明"
---

### 🚀 改進

- **[客戶端]** 支援 JS 欄位模型中的關聯欄位 ([#7618](https://github.com/nocobase/nocobase/pull/7618)) - 貢獻者：@gchust

- **[AI 員工]**
  - 將 OpenAI LLM 提供者重構為兩個獨立的提供者，以支援 OpenAI 的 Completions 和 Responses API。([#7615](https://github.com/nocobase/nocobase/pull/7615)) - 貢獻者：@cgyrock

  - 新增 LLM 提供者 Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) - 貢獻者：@ReLaMi96

### 🐛 錯誤修復

- **[工作流程：審批]**
  - 修正在新增審批人後，任務計數未更新的問題 - 貢獻者：@mytharcher

  - 修正在審批提交後，因資料庫錯誤導致交易未正確回滾而引發的交易超時問題 - 貢獻者：@mytharcher

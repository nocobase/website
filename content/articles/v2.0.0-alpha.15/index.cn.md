### 🚀 优化

- **[client]** JS field model 支持关系字段 ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust

- **[AI 员工]**
  - 重构了 OpenAI LLM Provider，将其拆分为两个独立的 Provider，以分别支持 OpenAI 的 Completions 和 Responses API。 ([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock

  - 添加新的 LLM 提供商 Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96

### 🐛 修复

- **[工作流：审批]**
  - 修复加签后待办数字未更新的问题 by @mytharcher

  - 修复审批提交后数据库报错时事务未正常回滚导致的事务超时问题 by @mytharcher


### 🚀 Improvements

- **[client]** support association fields in JS field model ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust

- **[AI employees]**
  - Refactored the OpenAI LLM Provider into two separate providers to support OpenAI's Completions and Responses APIs. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock

  - Add new LLM provider Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96

### 🐛 Bug Fixes

- **[Workflow: Approval]**
  - Fix the issue where task count not updated after added assignee by @mytharcher

  - Fix the transaction timeout issue caused by transactions not rolling back properly when database errors occur after approval submission by @mytharcher


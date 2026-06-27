---
title: "NocoBase v2.1.0-beta.19：移除 LLM 服務配置中的推薦模型"
description: "v2.1.0-beta.19 版本發布說明"
---

### 🚀 改進

- **[AI 員工]**
  - 移除 LLM 服務配置中的推薦模型 ([#9228](https://github.com/nocobase/nocobase/pull/9228)) by @cgyrock

  - 調整 AI 員工指令的技能/工具配置互動 ([#9232](https://github.com/nocobase/nocobase/pull/9232)) by @cgyrock

- **[工作流：JavaScript]** 升級 Docker 映像、CI 工作流程及工作流 JavaScript 沙箱依賴，以支援 Node.js 22。 ([#9245](https://github.com/nocobase/nocobase/pull/9245)) by @Molunerfinn

### 🐛 錯誤修復

- **[AI 員工]**
  - 修正在獲取 AI 員工列表 API 中的錯誤 ([#9241](https://github.com/nocobase/nocobase/pull/9241)) by @cgyrock

  - 優化 Atlas 任務委派行為，並更新 Viz 以使用業務報告工作流程處理報告請求 ([#9229](https://github.com/nocobase/nocobase/pull/9229)) by @2013xile

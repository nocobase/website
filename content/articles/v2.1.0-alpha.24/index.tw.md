---
title: "NocoBase v2.1.0-alpha.24：調整 AI 員工指令的技能/工具配置互動"
description: "v2.1.0-alpha.24 版本發布說明"
---

### 🚀 功能改進

- **[未分類]** 改善 AI 代理安裝指南，防止代理繞過 `--ui` 精靈，並自動偵測 Node 版本管理器。([#9243](https://github.com/nocobase/nocobase/pull/9243))，作者：@Molunerfinn

- **[AI 員工]**
  - 調整 AI 員工指令的技能/工具配置互動方式 ([#9232](https://github.com/nocobase/nocobase/pull/9232))，作者：@cgyrock

  - 移除 LLM 服務配置中的推薦模型 ([#9228](https://github.com/nocobase/nocobase/pull/9228))，作者：@cgyrock

- **[工作流：JavaScript]** 升級 Docker 映像、CI 工作流程及工作流 JavaScript 沙箱依賴，以相容 Node.js 22。([#9245](https://github.com/nocobase/nocobase/pull/9245))，作者：@Molunerfinn

### 🐛 錯誤修復

- **[未分類]** 修正文件網站中語言切換器產生錯誤 URL（例如 `/cn/es/` 而非 `/es/`）的問題。([#9233](https://github.com/nocobase/nocobase/pull/9233))，作者：@Molunerfinn

- **[AI 員工]**
  - 修正擷取 AI 員工清單 API 中的錯誤 ([#9241](https://github.com/nocobase/nocobase/pull/9241))，作者：@cgyrock

  - 優化 Atlas 任務委派行為，並更新 Viz 以使用業務報表工作流程處理報表請求 ([#9229](https://github.com/nocobase/nocobase/pull/9229))，作者：@2013xile

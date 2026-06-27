---
title: "NocoBase v2.0.19：修復優雅關閉時未清空所有事件的問題"
description: "v2.0.19 版本發佈說明"
---

### 🚀 改進

- **[工作流程]** 修正優雅關閉時未清空所有事件的問題 ([#8894](https://github.com/nocobase/nocobase/pull/8894))，作者：@mytharcher

### 🐛 錯誤修復

- **[AI 員工]** 修正文字嵌入模型呼叫中，為 LLM 服務指定的 URL 未生效的問題。([#8892](https://github.com/nocobase/nocobase/pull/8892))，作者：@cgyrock

- **[動作：匯入記錄 Pro]** 修正子應用程式中 `beforeStop` 事件未觸發的問題，作者：@mytharcher

---
title: "NocoBase v2.0.49：改進預覽檔案下載錯誤處理"
description: "v2.0.49 版本發布說明"
---

### 🚀 改善

- **[undefined]** 為手動發布工作流程新增飛書失敗通知 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) - 感謝 @Molunerfinn

### 🐛 錯誤修復

- **[資料來源：主要]** 防止在集合載入期間 `fields` 為 undefined 時發生崩潰 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) - 感謝 @saraTabbane
- **[UI 模板]** 修正彈出模板列表無法正確載入可用模板的問題。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) - 感謝 @gchust
- **[AI 員工]** 修正 AI 員工使用 DeepSeek v4 模型時偶發錯誤的問題 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) - 感謝 @cgyrock
- **[檔案管理員]** 改善預覽檔案下載的錯誤處理 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) - 感謝 @gaston98765
- **[工作流程：審核]** 修正列出可用審核工作流程的 API 中，篩選器及其他查詢參數現在能正常運作的問題 - 感謝 @mytharcher

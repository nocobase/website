---
title: "NocoBase v2.1.0-alpha.30：修復 AI 員工使用 DeepSeek v4 模型時偶發錯誤的問題"
description: "v2.1.0-alpha.30 版本發行說明"
---

### 🚀 改進

- **[undefined]** 為手動發布工作流程新增飛書失敗通知 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) - @Molunerfinn
- **[IdP: OAuth]** OAuth 工作階段現在使用與系統 Token 策略相同的過期設定 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) - @2013xile

### 🐛 錯誤修復

- **[client-v2]** 修正遠端插件載入問題，使已以 `.js` 結尾的插件 URL 不會被解析為重複的 `.js.js` 路徑。([#9336](https://github.com/nocobase/nocobase/pull/9336)) - @Molunerfinn
- **[cli]** 修正 CLI 布林選項，使其可透過否定標誌來停用 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) - @2013xile
- **[AI 員工]**

  - 修正 AI 員工使用 DeepSeek v4 模型時偶爾發生錯誤的問題 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) - @cgyrock
  - 修正工作流程 AI 員工節點在切換 AI 員工後清除技能的問題 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) - @cgyrock
- **[資料來源：主要]** 防止在載入集合時 `fields` 為 `undefined` 導致崩潰 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) - @saraTabbane
- **[UI 模板]** 修正彈出視窗模板列表無法正確載入可用模板的問題。([#9332](https://github.com/nocobase/nocobase/pull/9332)) - @gchust
- **[區塊：看板]** 修正看板關聯區塊在彈出視窗或次要頁面上下文中使用未解析的執行時期資源參數的問題。([#9350](https://github.com/nocobase/nocobase/pull/9350)) - @jiannx
- **[工作流程：審批]** 修正列出可用審批工作流程的 API 中，篩選條件及其他查詢參數現在能正常運作的問題 - @mytharcher

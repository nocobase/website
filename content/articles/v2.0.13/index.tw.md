---
title: "NocoBase v2.0.13：支援觸發工作流程按鈕以配置成功後的流程"
description: "v2.0.13 版本發行說明"
---

### 🎉 新功能

- **[client]** 支援觸發工作流程按鈕以設定成功後續流程 ([#8726](https://github.com/nocobase/nocobase/pull/8726)) by @mytharcher

### 🚀 改進

- **[Workflow]** 在新增選單中顯示所有節點類型，即使無法使用 ([#8828](https://github.com/nocobase/nocobase/pull/8828)) by @mytharcher

- **[AI: 知識庫]** 重構知識庫文件載入邏輯。 by @cgyrock

### 🐛 錯誤修復

- **[client]**
  - 修復 SQL 集合的詳細資料區塊在載入資料時發生錯誤的問題。 ([#8817](https://github.com/nocobase/nocobase/pull/8817)) by @gchust

  - 修復詳細資料區塊中的欄位連結規則在初始渲染時未生效的問題。 ([#8813](https://github.com/nocobase/nocobase/pull/8813)) by @gchust

- **[Office 檔案預覽器]** 將模態框高度調整為適當數值，以顯示更多檔案內容 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) by @mytharcher

- **[UI 模板]** 修復表格區塊中的參考區塊事件流程無法設定行點擊事件流程的問題。 ([#8814](https://github.com/nocobase/nocobase/pull/8814)) by @gchust

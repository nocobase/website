---
title: "NocoBase v2.0.32：為 README 新增目錄"
description: "v2.0.32 版本發布說明"
---

### 🚀 改進

- **[未定義]** 為 README 新增目錄 ([#8878](https://github.com/nocobase/nocobase/pull/8878))，作者：@gaston98765

### 🐛 錯誤修復

- **[客戶端]**
  - 子表單關聯欄位無法儲存 ([#9004](https://github.com/nocobase/nocobase/pull/9004))，作者：@jiannx

  - 欄位的子表單未顯示資料 ([#9008](https://github.com/nocobase/nocobase/pull/9008))，作者：@jiannx

  - 修正 `ctx.request` 無法覆蓋 Authorization 標頭的問題。([#8850](https://github.com/nocobase/nocobase/pull/8850))，作者：@gchust

- **[伺服器端]** 新增服務中檢查，避免應用程式狀態被非服務中的實例更新 ([#8959](https://github.com/nocobase/nocobase/pull/8959))，作者：@mytharcher

- **[AI 員工]**
  - 修正於 dashscope 使用 deepseek 或 minmax 模型時的問題 ([#9033](https://github.com/nocobase/nocobase/pull/9033))，作者：@cgyrock

  - 修正中止 AI 員工推理會導致服務崩潰的問題 ([#9031](https://github.com/nocobase/nocobase/pull/9031))，作者：@cgyrock

- **[工作流：HTTP 請求節點]** 清理工作流請求節點結果以避免暴露請求配置，預設新節點僅返回回應資料，並為失敗請求新增除錯日誌。([#9024](https://github.com/nocobase/nocobase/pull/9024))，作者：@mytharcher

- **[集合欄位：排序]** 修正(field-sort)：防止當 `scopeKey` 屬性為 undefined 時崩潰 ([#9019](https://github.com/nocobase/nocobase/pull/9019))，作者：@gaston98765

- **[區塊：網格卡片]** 修正網格卡片刷新時按鈕未重新整理的問題 ([#9021](https://github.com/nocobase/nocobase/pull/9021))，作者：@jiannx

- **[工作流：審批]**
  - 在工作流刪除時新增容錯處理，避免任務列表載入錯誤，作者：@mytharcher

  - 為缺少 `latestRound` 的情況新增容錯處理，作者：@mytharcher

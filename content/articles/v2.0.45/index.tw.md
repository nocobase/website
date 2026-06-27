---
title: "NocoBase v2.0.45：修復 AI 員工系統提示中變數未生效的問題"
description: "v2.0.45 版本發行說明"
---

### 🚀 改進

- **[工作流程：JavaScript]** 升級 Docker 映像、CI 工作流程及工作流程 JavaScript 沙箱相依套件，以支援 Node.js 22。([#9245](https://github.com/nocobase/nocobase/pull/9245)) 由 @Molunerfinn 貢獻

### 🐛 錯誤修復

- **[AI 員工]** 修復 AI 員工系統提示詞中的變數未生效的問題 ([#9256](https://github.com/nocobase/nocobase/pull/9256)) 由 @cgyrock 貢獻

- **[授權設定]** 更新授權儲存成功訊息 ([#9251](https://github.com/nocobase/nocobase/pull/9251)) 由 @jiannx 貢獻

- **[動作：匯入記錄]** 修復匯入 xlsx 失敗並拋出無標題相符錯誤的問題 ([#9253](https://github.com/nocobase/nocobase/pull/9253)) 由 @mytharcher 貢獻

- **[動作：匯入記錄 Pro]** 修復匯入 xlsx 失敗並拋出無標題相符錯誤的問題 由 @mytharcher 貢獻

- **[AI：知識庫]** 修復刪除知識庫文件時未刪除關聯向量資料的問題 由 @cgyrock 貢獻

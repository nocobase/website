---
title: "NocoBase v2.1.0-alpha.25：支援刪除草稿審批"
description: "v2.1.0-alpha.25 版本發行說明"
---

### 🎉 新功能

- **[工作流：審批]** 支援刪除草稿審批，由 @mytharcher 提供

### 🚀 改進

- **[未定義]** 更新 AI 文件，要求 NocoBase >= 2.1.0-beta.20，並建議使用最新的 beta 版本。([#9252](https://github.com/nocobase/nocobase/pull/9252)) 由 @Molunerfinn 提供

- **[AI 員工]** 更新 AI 員工快捷任務配置，使其使用與工作流 AI 員工節點配置相同的技能設定元件 ([#9246](https://github.com/nocobase/nocobase/pull/9246)) 由 @cgyrock 提供

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在子表格中移除記錄後，重新新增時預設值無法套用的問題。([#9192](https://github.com/nocobase/nocobase/pull/9192)) 由 @gchust 提供

  - 在關聯欄位的選擇彈出框中，過濾非必要的可選區塊 ([#9224](https://github.com/nocobase/nocobase/pull/9224)) 由 @jiannx 提供

- **[動作：匯入記錄]** 修正匯入 xlsx 失敗並拋出「未匹配到標頭」錯誤的問題 ([#9253](https://github.com/nocobase/nocobase/pull/9253)) 由 @mytharcher 提供

- **[授權設定]** 更新授權儲存成功的提示訊息 ([#9251](https://github.com/nocobase/nocobase/pull/9251)) 由 @jiannx 提供

- **[AI 員工]** 修正 AI 員工系統提示詞中的變數未生效的問題 ([#9256](https://github.com/nocobase/nocobase/pull/9256)) 由 @cgyrock 提供

- **[IdP：OAuth]** 修正 OAuth CLI 登入失敗，並限制動態註冊僅限本地回呼 URL ([#9248](https://github.com/nocobase/nocobase/pull/9248)) 由 @2013xile 提供

- **[AI：知識庫]** 修正刪除知識庫文件時未一併刪除關聯向量資料的問題，由 @cgyrock 提供

- **[動作：匯入記錄 Pro]** 修正匯入 xlsx 失敗並拋出「未匹配到標頭」錯誤的問題，由 @mytharcher 提供

---
title: "NocoBase v2.1.0-beta.35：在 v1 和 v2 應用程式之間共享條件評估"
description: "v2.1.0-beta.35 版本說明"
---

### 🚀 功能改進

- **[客戶端]** 在 v1 與 v2 應用程式之間共享條件評估 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) - @zhangzhonghe

- **[本地化]** 改進了 Lina 本地化翻譯任務，新增翻譯範圍、參考語言設定與快速編輯功能 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) - @2013xile

- **[工作流：審批]** 透過時間軸卡片改善相關審批功能 - @zhangzhonghe

### 🐛 錯誤修復

- **[未定義]** 對齊 nginx 設定檔路徑 ([#9528](https://github.com/nocobase/nocobase/pull/9528)) - @chenos

- **[cli-v1]** 修正 create-nocobase-app 開發啟動問題，透過重複使用打包後的應用程式殼層，同時啟用本地插件開發 ([#9471](https://github.com/nocobase/nocobase/pull/9471)) - @Molunerfinn

- **[客戶端]**
  - 修正選單徽章在其數值為 0 時仍顯示圓點的問題 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) - @zhangzhonghe

  - 修正篩選表單無法使用當前表單變數的問題 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) - @zhangzhonghe

- **[認證]** 防止當 WebSocket 認證令牌引用的驗證器所屬的驗證類型插件已卸載或遺失時，伺服器崩潰 ([#9514](https://github.com/nocobase/nocobase/pull/9514)) - @Molunerfinn

- **[日曆]**
  - 修正日曆中「更多」項目無法完整顯示的問題 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) - @zhangzhonghe

  - 修正日曆「更多事件」覆蓋層中事件項目的游標樣式 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) - @jiannx

- **[授權設定]** 解析符號連結的捆綁依賴項 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) - @chenos

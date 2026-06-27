---
title: "NocoBase v2.1.0-alpha.39：為看板插件新增 client-v2 支援"
description: "v2.1.0-alpha.39 版本發布說明"
---

### 🎉 新功能

- **[區塊：看板]** 為看板插件新增 client-v2 支援 ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 改進

- **[客戶端]** 在 v1 與 v2 應用程式之間共享條件評估 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe

- **[本地化]** 改進了 Lina 本地化翻譯任務，新增翻譯範圍、參考語言設定與快速編輯功能 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile

- **[AI 員工]** 儲存至向量資料庫時，若資料表名稱重複則顯示提示 ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock

- **[通知管理員]** 變更佇列策略以優化發送效能 ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher

- **[工作流：自訂動作事件]** 將區塊工作檯與工作流自訂動作觸發器插件遷移至 client v2，包含其動作模型與 QR 掃描流程。([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx

- **[認證]** 在 client-v2 中實作 Authenticators 設定頁面，並提供可重複使用的 client-v2 表格、變數輸入與表單基礎元件。([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn

- **[AI：知識庫]** 儲存至向量資料庫時，若資料表名稱重複則顯示提示 by @cgyrock

- **[認證：SAML 2.0]** 為 CAS 與 SAML 認證插件新增 client-v2 入口，使其能與 v2 登入頁面及 Authenticators 設定搭配運作。 by @Molunerfinn

- **[工作流：審批]** 使用時間軸卡片改善相關審批功能 by @zhangzhonghe

### 🐛 錯誤修復

- **[未定義]** 對齊 nginx 設定檔路徑 ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos

- **[cli-v1]** 修正 create-nocobase-app 開發啟動問題，透過重複使用封裝好的應用程式殼層，同時啟用本地插件開發。([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn

- **[客戶端]**
  - 修正篩選表單無法使用目前表單變數的問題 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe

  - 修正選單徽章在其數值為 0 時仍顯示圓點的問題 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe

- **[client-v2]**
  - 共享的 v2 Table 元件現在預設顯示每頁筆數選擇器，與 v1 行為一致。([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn

  - 修正看板插件 v2 路由因客戶端未提供 dnd-kit 依賴而無法載入的問題。([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx

- **[日曆]**
  - 修正日曆「更多事件」覆蓋層中事件項目的游標樣式 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx

  - 修正日曆更多項目無法完整顯示的問題 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe

- **[授權設定]** 解析符號連結的捆綁依賴 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos

- **[AI 員工]**
  - 修正 AI 員工節點中操作者角色權限未生效的問題 ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock

  - 修正 AI 員工 OSS 檔案讀取錯誤 ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock

- **[認證]** 防止當 WebSocket 認證令牌引用的認證器所屬的認證類型插件已卸載或遺失時，伺服器崩潰。([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn

- **[API 文件]** 修正集合 API 文件，使查詢參數不再互相干擾 ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx

- **[資料來源：主要]** 修正同步欄位後，欄位選項被寫入 schema 的問題 ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile

- **[認證：SAML 2.0]** 修正 SAML 自動重新導向攔截器導致應用程式殼層閃爍，以及在每次導航時重複開啟抽屜的問題。 by @Molunerfinn

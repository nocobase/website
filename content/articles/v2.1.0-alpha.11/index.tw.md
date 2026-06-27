---
title: "NocoBase v2.1.0-alpha.11：新增 JS 項目操作"
description: "v2.1.0-alpha.11 版本發布說明"
---

### 🎉 新功能

- **[客戶端]** 新增 JS 項目操作 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx

- **[AI 員工]** 為 AI 員工新增 SKILLS 能力。 ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock

- **[資料來源管理器]** 支援 MCP 工具的按需載入 ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile

### 🚀 改進

- **[流程引擎]** 改進 UI 建置 API 的 schema 驗證。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust

- **[客戶端]** 優化表單操作的橫向佈局 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx

- **[應用程式]** 新增基於 Rsbuild 的 client-v1 開發工作流程，同時保持本地插件開發與當前 `/v2/` 拓撲結構的相容性 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn

- **[集合欄位：中國行政區劃]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx

- **[工作流程]** 為所有觸發器和節點新增驗證 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher

- **[工作流程：審批]** 修復因 JSON 欄位導致載入審批記錄列表時出現效能問題 by @mytharcher

### 🐛 錯誤修復

- **[流程引擎]** 當表單欄位被刪除時，將狀態同步至欄位配置 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx

- **[資源管理器]** 修復外部資料來源無法正確載入的問題。 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile

- **[資料庫]** 當任何附加參數無效時，使用警告而非錯誤 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher

- **[伺服器]** 將 Pub-Sub 的關閉時機更改為 `beforeStop`，以避免在資料庫關閉後發送或處理訊息 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher

- **[自訂變數]** 跳過身份驗證通知 ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos

- **[AI 員工]** 修復核心套件中 AI 模組的失敗測試案例。 ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock

- **[本地化]** 在權限拒絕時阻止 localizationTexts:missing 請求 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos

- **[操作：匯入記錄 Pro]** 修復未勾選「觸發工作流程」選項時無法運作的問題 by @mytharcher

- **[資料來源：外部 Oracle]** 修復載入 Oracle 外部資料來源時發生的錯誤 by @2013xile

- **[工作流程：審批]** 修復 v2 審批表單返回按鈕的翻譯、節點選擇及返回目標問題 by @zhangzhonghe

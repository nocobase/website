---
title: "NocoBase v2.1.0-beta.25：為 NocoBase cli 新增一些 API"
description: "v2.1.0-beta.25 的發行說明"
---

### 🎉 新功能

- **[cli]** 在 API 中新增 release 指令 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) - @Andrew1989Y

- **[未定義]** 新增印尼文與越南文文件。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) - @Molunerfinn

- **[AI 員工]** LLM 提供者現已支援小米 MIMO 平台 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) - @cgyrock

- **[遷移管理器]** 為 nocobase cli 新增部分 API - @Andrew1989Y

- **[備份管理器]** 為 nocobase cli 新增部分 API - @Andrew1989Y

### 🚀 改進

- **[未定義]**
  - - ([#9349](https://github.com/nocobase/nocobase/pull/9349)) - @Molunerfinn

  - 使西班牙文、葡萄牙文、俄文與德文文件與英文原文保持一致。 ([#9299](https://github.com/nocobase/nocobase/pull/9299)) - @Molunerfinn

  - 同步法文文件與中文原文。 ([#9291](https://github.com/nocobase/nocobase/pull/9291)) - @Molunerfinn

- **[IdP: OAuth]** OAuth 工作階段現在使用與系統 Token 策略相同的過期設定 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) - @2013xile

- **[區塊: 看板]**
  - 縮小看板欄位的預設寬度。 ([#9306](https://github.com/nocobase/nocobase/pull/9306)) - @jiannx

  - 改善行事曆與看板區塊的建立設定。 ([#9294](https://github.com/nocobase/nocobase/pull/9294)) - @jiannx

- **[AI 員工]** AI 員工類別調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) - @cgyrock

- **[工作流: 審批]** 將從資料庫載入的關聯顯示模式標記為舊版 - @mytharcher

### 🐛 錯誤修復

- **[未定義]**
  - 修復依賴與建置工作流程，使獨立專業版外掛程式檢出失敗時能中斷 CI，而非靜默跳過建置覆蓋。 ([#9324](https://github.com/nocobase/nocobase/pull/9324)) - @Molunerfinn

  - 修復過於龐大的翻譯檔案，並使跨語言文件結構保持一致。 ([#9305](https://github.com/nocobase/nocobase/pull/9305)) - @Molunerfinn

- **[cli]** 修復 CLI 布林選項，使其可透過否定標誌來停用 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) - @2013xile

- **[client-v2]**
  - 修復遠端外掛程式載入問題，使已以 `.js` 結尾的外掛程式 URL 不會被解析為重複的 `.js.js` 路徑。 ([#9336](https://github.com/nocobase/nocobase/pull/9336)) - @Molunerfinn

  - 修正在繫結工作流程的設定中，`RemoteSelect` 無法渲染的問題 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) - @mytharcher

- **[ai]** 修正在 AI 員工註冊過程中缺少類別欄位設定的問題 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) - @cgyrock

- **[流程引擎]** 修正表單相關變數中可能選取到系統隱藏欄位的問題。 ([#9302](https://github.com/nocobase/nocobase/pull/9302)) - @gchust

- **[client]**
  - 修正在 v2 表格區塊中，JS 欄位儲存格在篩選或重新整理表格資料後可能顯示空白的問題。 ([#9285](https://github.com/nocobase/nocobase/pull/9285)) - @jiannx

  - 在 v2 表單中，為空的資料範圍變數相依性保留 null 值。 ([#9287](https://github.com/nocobase/nocobase/pull/9287)) - @jiannx

  - 修正在重新開啟彈出記錄選擇器後，篩選表單欄位消失的問題 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) - @zhangzhonghe

  - 當行資料變更時重新執行 JS 欄位渲染 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) - @jiannx

- **[資料庫]** 修正 SQL Server 外部資料來源日期時間篩選可能失敗的問題 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) - @2013xile

- **[AI 員工]**
  - 修復 AI 員工使用 DeepSeek v4 模型時偶發錯誤的問題 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) - @cgyrock

  - 修復工作流 AI 員工節點在切換 AI 員工後清除技能的問題 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) - @cgyrock

  - 修復操作按鈕 AI 員工列表顯示開發者員工的問題 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) - @cgyrock

- **[資料來源: 主要]** 防止在集合載入期間 `fields` 為 undefined 時崩潰 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) - @saraTabbane

- **[UI 模板]** 修正彈出模板列表無法正確載入可用模板的問題。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) - @gchust

- **[檔案管理器]** 改善預覽檔案下載的錯誤處理 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) - @gaston98765

- **[區塊: 樹狀]** 修正篩選區塊節點顯示異常的問題 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) - @jiannx

- **[區塊: 甘特圖]** 新增甘特圖區塊設定，可啟用拖曳重新排程。 ([#9301](https://github.com/nocobase/nocobase/pull/9301)) - @jiannx

- **[區塊: 看板]** 修正欄位設定浮動層重複顯示的問題 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) - @jiannx

- **[操作: 匯入記錄]** 修正匯入記錄時失敗行索引不正確的問題 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) - @mytharcher

- **[操作: 匯出記錄 Pro]** 修正自動模式無法運作的問題 - @mytharcher

- **[遷移管理器]** 修正 `migration:create` 從非同步任務記錄中返回 `taskId` 的問題。 - @Andrew1989Y

- **[工作流: 審批]**
  - 修正篩選及其他查詢參數現在可在列出可用審批工作流程的 API 中運作的問題 - @mytharcher

  - 修正原始應用程式中的檔案未重新載入的問題 - @mytharcher

  - 修正類型錯誤 - @mytharcher

  - 支援在審批動作中解析部分客戶端變數 - @mytharcher

  - 修正審批執行時機，使 `latestExecutionId` 在審批提交後同步 - @mytharcher

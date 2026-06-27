---
title: "NocoBase v2.0.47：LLM 提供者現已支援小米 MIMO 平台"
description: "v2.0.47 版本發行說明"
---

### 🎉 新功能

- **[AI 員工]** LLM 提供者現已支援小米 MIMO 平台 ([#9315](https://github.com/nocobase/nocobase/pull/9315))，感謝 @cgyrock

### 🚀 改進

- **[流程引擎]** 改善 v2 頁面上區塊拖曳佈局的行為 ([#9264](https://github.com/nocobase/nocobase/pull/9264))，感謝 @zhangzhonghe

- **[AI 員工]** AI 員工類別調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274))，感謝 @cgyrock

- **[工作流：審批]** 將從資料庫載入的關聯顯示模式標記為舊版，感謝 @mytharcher

### 🐛 錯誤修復

- **[資料庫]** 修復 SQL Server 外部資料來源日期時間篩選可能失敗的問題 ([#9272](https://github.com/nocobase/nocobase/pull/9272))，感謝 @2013xile

- **[客戶端]**
  - 在 v2 表單中，保留空的資料範圍變數依賴項目的 null 值。([#9287](https://github.com/nocobase/nocobase/pull/9287))，感謝 @jiannx

  - 當行資料變更時，重新執行 JS 欄位渲染 ([#9282](https://github.com/nocobase/nocobase/pull/9282))，感謝 @jiannx

  - 修復重新開啟彈出記錄選擇器後，篩選表單欄位消失的問題 ([#9211](https://github.com/nocobase/nocobase/pull/9211))，感謝 @zhangzhonghe

  - 修復 v2 表格區塊中的 JS 欄位儲存格在篩選或重新整理表格資料後可能顯示空白的問題。([#9285](https://github.com/nocobase/nocobase/pull/9285))，感謝 @jiannx

- **[流程引擎]** 修復在表單相關變數中可能選取系統隱藏欄位的問題。([#9302](https://github.com/nocobase/nocobase/pull/9302))，感謝 @gchust

- **[動作：匯入記錄]** 修正在匯入記錄時，失敗行索引不正確的問題 ([#9277](https://github.com/nocobase/nocobase/pull/9277))，感謝 @mytharcher

- **[區塊：甘特圖]** 新增甘特圖區塊設定，以啟用拖曳重新排程。([#9301](https://github.com/nocobase/nocobase/pull/9301))，感謝 @jiannx

- **[AI 員工]** 修復 AI 員工 deepSeek V4 整合錯誤 ([#9275](https://github.com/nocobase/nocobase/pull/9275))，感謝 @cgyrock

- **[動作：匯出記錄 Pro]** 修復自動模式無法運作的問題，感謝 @mytharcher

- **[工作流：審批]**
  - 修復類型錯誤，感謝 @mytharcher

  - 修復審批執行時機，使 `latestExecutionId` 在審批提交後同步，感謝 @mytharcher

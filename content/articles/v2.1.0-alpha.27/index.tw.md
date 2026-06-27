---
title: "NocoBase v2.1.0-alpha.27：AI 員工可使用 Bash 指令搜尋捆綁文件"
description: "v2.1.0-alpha.27 版本發布說明"
---

### 🎉 新功能

- **[cli]** 在 API 中新增 release 指令 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) - @Andrew1989Y

- **[未定義]** 新增印尼文與越南文文件。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) - @Molunerfinn

- **[server]** AI 員工可透過 Bash 指令搜尋捆綁文件 ([#9269](https://github.com/nocobase/nocobase/pull/9269)) - @2013xile

- **[AI 員工]** LLM 提供者現已支援小米 MIMO 平台 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) - @cgyrock

- **[遷移管理器]** 為 nocobase cli 新增部分 API - @Andrew1989Y

- **[備份管理器]** 為 nocobase cli 新增部分 API - @Andrew1989Y

### 🚀 改進

- **[流程引擎]** 改善 v2 頁面上區塊拖曳佈局的行為 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) - @zhangzhonghe

- **[未定義]**
  - 使西班牙文、葡萄牙文、俄文與德文文件與英文原文保持一致。 ([#9299](https://github.com/nocobase/nocobase/pull/9299)) - @Molunerfinn

  - 同步法文文件與中文原文。 ([#9291](https://github.com/nocobase/nocobase/pull/9291)) - @Molunerfinn

- **[AI 員工]**
  - 改進 Nathan 的 RunJS 編輯工具，並減少長時間 AI 聊天對話中的延遲 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) - @2013xile

  - AI 員工類別調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) - @cgyrock

- **[區塊：看板]**
  - 縮小預設看板欄位寬度。 ([#9306](https://github.com/nocobase/nocobase/pull/9306)) - @jiannx

  - 改善日曆與看板區塊的建立設定。 ([#9294](https://github.com/nocobase/nocobase/pull/9294)) - @jiannx

- **[工作流程：審批]** 將從資料庫載入的關聯顯示模式標記為舊版 - @mytharcher

### 🐛 錯誤修復

- **[未定義]**
  - 修正相依性與建置工作流程，使獨立專業版外掛擷取失敗時能中斷 CI，而非靜默跳過建置覆蓋。 ([#9324](https://github.com/nocobase/nocobase/pull/9324)) - @Molunerfinn

  - 修正過大的翻譯檔案，並使跨語言文件結構保持一致。 ([#9305](https://github.com/nocobase/nocobase/pull/9305)) - @Molunerfinn

- **[client-v2]** 修正 `RemoteSelect` 在繫結工作流程設定中無法渲染的問題 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) - @mytharcher

- **[流程引擎]** 修正表單相關變數中可能選取系統隱藏欄位的問題。 ([#9302](https://github.com/nocobase/nocobase/pull/9302)) - @gchust

- **[ai]** 修正 AI 員工註冊時缺少類別欄位設定的問題 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) - @cgyrock

- **[client]**
  - 修正 v2 表格區塊中的 JS 欄位儲存格在篩選或重新整理表格資料後可能顯示空白的問題。 ([#9285](https://github.com/nocobase/nocobase/pull/9285)) - @jiannx

  - 修正重新開啟彈出記錄選擇器後，篩選表單欄位消失的問題 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) - @zhangzhonghe

  - 在 v2 表單中，為空的資料範圍變數相依性保留 null 值。 ([#9287](https://github.com/nocobase/nocobase/pull/9287)) - @jiannx

  - 當行資料變更時，重新執行 JS 欄位渲染 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) - @jiannx

- **[database]** 修正 SQL Server 外部資料來源日期時間篩選可能失敗的問題 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) - @2013xile

- **[AI 員工]**
  - 修正動作按鈕 AI 員工清單顯示開發人員員工的問題 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) - @cgyrock

  - 修正 AI 員工 deepSeek V4 整合錯誤 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) - @cgyrock

- **[區塊：甘特圖]** 新增甘特圖區塊設定，啟用拖曳重新排程。 ([#9301](https://github.com/nocobase/nocobase/pull/9301)) - @jiannx

- **[區塊：樹狀]** 修正篩選區塊節點顯示異常的問題 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) - @jiannx

- **[動作：匯入記錄]** 修正匯入記錄時失敗行索引不正確的問題 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) - @mytharcher

- **[區塊：看板]** 修正欄位設定浮動層重複顯示的問題 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) - @jiannx

- **[動作：匯出記錄 Pro]** 修正自動模式無法運作的問題 - @mytharcher

- **[遷移管理器]** 修正 `migration:create` 從非同步任務記錄中回傳 `taskId` 的問題。 - @Andrew1989Y

- **[工作流程：審批]**
  - 修正審批執行時機，使 `latestExecutionId` 在審批提交後同步 - @mytharcher

  - 修正型別錯誤 - @mytharcher

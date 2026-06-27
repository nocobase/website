---
title: "NocoBase v2.1.0-alpha.10：排程清理 AI 對話檢查點資料"
description: "v2.1.0-alpha.10 版本發布說明"
---

### 🎉 新功能

- **[IdP: OAuth]** 新增 OAuth 身分提供者外掛，讓 MCP 服務可透過 OAuth 進行驗證 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile

- **[AI 員工]** 排程清理 AI 對話檢查點資料。 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock

- **[應用程式管理員]** 支援在應用程式列表中進行篩選<br />為啟動與停止操作新增確認對話框<br />依環境名稱排序應用程式狀態項目 by @2013xile

### 🚀 改進

- **[伺服器]** 改善 pm add 邏輯 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos

- **[客戶端]** 支援在關閉彈出視窗前顯示確認訊息。 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust

- **[未定義]** 新增專用的 client-v2 入口，並使用 rsbuild 獨立建置，同時保留 v1 不變。 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn

- **[工作流程]**
  - 修正優雅關閉時未耗盡所有事件的問題 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher

  - 新增篩選執行列表功能 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher

- **[非同步任務管理器]** 非同步任務新增支援工作者發送錯誤訊息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

- **[工作流程：審批]** 當觸發器中未設定資料表時，避免設定審批者介面 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正非管理員無法清除關聯欄位值的問題 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx

  - 修正子表格中「選擇記錄」彈出視窗在第二次開啟時無法正確載入的問題。 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust

- **[資源管理器]** 防止 `filterByTk` 參數陣列在超過 100 個項目時自動轉換為物件 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile

- **[伺服器]** 修正工作者發送的生命週期事件導致服務中應用程式停止的問題 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher

- **[資料來源管理器]** 修正由 AI 員工建立的資料表總是缺少 `createBy` 和 `updateBy` 欄位的問題 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock

- **[AI 員工]**
  - 修正文字嵌入模型呼叫中，為 LLM 服務指定的 URL 未生效的問題。 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock

  - 修正 AI 外掛升級遷移腳本中潛在的未定義變數錯誤。 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock

- **[操作：匯入記錄 Pro]**
  - 修正因串流被重複讀取，導致超過約 30 個欄位時匯入失敗的問題 by @mytharcher

  - 修正同步模式匯入時拋出錯誤的問題 by @mytharcher

  - 修正子應用程式中 `beforeStop` 事件未觸發的問題 by @mytharcher

  - 修正非同步匯入發生錯誤後，非同步任務未結束的問題 by @cgyrock

  - 修正延遲匯入導致的 SES 錯誤 by @mytharcher

- **[範本列印]** 修正 SQL 資料表列印錯誤 by @jiannx

- **[工作流程：審批]** 修正新增受指派者時的並發問題 by @mytharcher

- **[電子郵件管理員]** 修正當郵件不存在時的頁面錯誤 by @jiannx

- **[遷移管理員]** 修正因目標環境在上傳遷移過程中尚未建立新資料表而導致的遷移中斷問題。 by @Andrew1989Y

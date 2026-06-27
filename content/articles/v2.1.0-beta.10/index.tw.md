---
title: "NocoBase v2.1.0-beta.10：排程清理 AI 對話檢查點資料"
description: "v2.1.0-beta.10 版本發布說明"
---

### 🎉 新功能

- **[AI 員工]**
  - 允許在子表格的彈出視窗中新增 AI 員工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) - 感謝 @2013xile

  - 排程清理 AI 對話檢查點資料。 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) - 感謝 @cgyrock

- **[應用程式管理員]** 支援在應用程式列表中進行篩選<br />為啟動和停止操作新增確認對話框<br />按環境名稱排序應用程式狀態條目 - 感謝 @2013xile

### 🚀 改進

- **[伺服器]** 改善 pm add 邏輯 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) - 感謝 @chenos

- **[未定義]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) - 感謝 @gaston98765

- **[客戶端]** 支援在關閉彈出視窗前顯示確認訊息。 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) - 感謝 @gchust

- **[工作流程]** 修正優雅關閉時未耗盡所有事件的問題 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) - 感謝 @mytharcher

- **[非同步任務管理器]** 非同步任務新增支援工作人員發送錯誤訊息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) - 感謝 @cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 修正子表格中的「選擇記錄」彈出視窗在第二次開啟時無法正確載入的問題。 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) - 感謝 @gchust

  - 修正重新整理頁面後，部分欄位的預設值未生效的問題。 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) - 感謝 @gchust

- **[資料庫]** 修正日期欄位的伺服器端驗證問題 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) - 感謝 @2013xile

- **[資料來源管理器]** 修正 AI 員工建立的集合總是缺少 `createBy` 和 `updateBy` 欄位的問題 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) - 感謝 @cgyrock

- **[AI 員工]**
  - 修正文字嵌入模型呼叫中，為 LLM 服務指定的 URL 未生效的問題。 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) - 感謝 @cgyrock

  - 修正 AI 外掛升級遷移腳本中潛在的未定義變數錯誤。 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) - 感謝 @cgyrock

- **[本地化]** localizationTexts:缺少介面權限例外 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) - 感謝 @jiannx

- **[操作：匯入記錄 Pro]**
  - 修正子應用程式的 `beforeStop` 事件未觸發的問題 - 感謝 @mytharcher

  - 修正延遲匯入導致的 SES 錯誤 - 感謝 @mytharcher

  - 修正非同步匯入發生錯誤後，非同步任務未結束的問題 - 感謝 @cgyrock

- **[AI：知識庫]** 防止正在使用的向量資料庫和向量儲存被刪除。 - 感謝 @cgyrock

- **[範本列印]** 修正 SQL 集合列印錯誤 - 感謝 @jiannx

- **[電子郵件管理員]** 修正當電子郵件不存在時的頁面錯誤 - 感謝 @jiannx

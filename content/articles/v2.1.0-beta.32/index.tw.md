---
title: "NocoBase v2.1.0-beta.32：新增 AI 員工 Localization Engineer Lina，協助在地化翻譯任務"
description: "v2.1.0-beta.32 版本發行說明"
---

### 🎉 新功能

- **[undefined]** 新增 AI 員工「本地化工程師 Lina」，協助處理本地化翻譯任務 ([#9434](https://github.com/nocobase/nocobase/pull/9434))，作者 @2013xile
參考：[本地化管理](https://docs.nocobase.com/system-management/localization)<br>[Lina：本地化工程師](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[使用 Lina 與本地 HY-MT1.5-1.8B 翻譯本地化條目](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[檔案儲存：S3 (Pro)]** 支援在 v2 檔案管理器中透過 S3 Pro 儲存上傳檔案，作者 @Molunerfinn

### 🚀 改進

- **[建置]** 新增回歸測試覆蓋，確保 `deleteServerFiles` 不會在 Windows 與 POSIX 路徑下誤刪 `client` 及 `client-v2` 的建置產物 ([#9318](https://github.com/nocobase/nocobase/pull/9318))，作者 @Molunerfinn

- **[客戶端]** 在一對多表格區塊的關聯選擇對話框中，排除已關聯的記錄 ([#9448](https://github.com/nocobase/nocobase/pull/9448))，作者 @katherinehhh

- **[檔案管理器]** 第三方儲存插件現在可以在 v2 檔案管理器設定頁面上註冊自己的儲存類型表單 ([#9439](https://github.com/nocobase/nocobase/pull/9439))，作者 @Molunerfinn

- **[AI：知識庫]** 知識庫的唯一識別碼可在建立時進行設定，作者 @cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 修正無法為關聯的選擇欄位選取選項的問題 ([#9088](https://github.com/nocobase/nocobase/pull/9088))，作者 @gchust

  - 修正提交後系統設定顯示為空的問題 ([#9458](https://github.com/nocobase/nocobase/pull/9458))，作者 @zhangzhonghe

  - 修正當篩選表單有預設值時，表格請求重複發送的問題 ([#9423](https://github.com/nocobase/nocobase/pull/9423))，作者 @zhangzhonghe

  - 修正表格區塊事件流程中取消選取行資料時，目標區塊資料範圍設定錯誤的問題 ([#9443](https://github.com/nocobase/nocobase/pull/9443))，作者 @gchust

  - 修正 V2 聯動規則，使其支援設定欄位的可選選項 ([#9399](https://github.com/nocobase/nocobase/pull/9399))，作者 @jiannx

  - 修正 v2 表格區塊中變更關聯欄位標題欄位時的錯誤 ([#9451](https://github.com/nocobase/nocobase/pull/9451))，作者 @katherinehhh

- **[客戶端-v2]**
  - 修正插件啟用對話框後頁面變空白的問題 ([#9455](https://github.com/nocobase/nocobase/pull/9455))，作者 @zhangzhonghe

  - 修正生產建置中，v1 管理頁面因引用 v2 插件模組而崩潰的問題 ([#9460](https://github.com/nocobase/nocobase/pull/9460))，作者 @Molunerfinn

- **[cli-v1]** 修正使用 create-nocobase-app 建立的應用程式因 app-dev 客戶端路徑解析導致開發啟動失敗的問題 ([#9465](https://github.com/nocobase/nocobase/pull/9465))，作者 @Molunerfinn

- **[伺服器]** 修正（檔案管理器）：強制下載本地/公開儲存中的動態內容檔案 ([#9437](https://github.com/nocobase/nocobase/pull/9437))，作者 @mytharcher

- **[部門]** 修正使用者與權限設定中「新增使用者」與「新增部門」按鈕的翻譯衝突 ([#9456](https://github.com/nocobase/nocobase/pull/9456))，作者 @katherinehhh

- **[區塊：Markdown]** 修正 v2 Markdown 區塊報錯的問題 ([#9440](https://github.com/nocobase/nocobase/pull/9440))，作者 @zhangzhonghe

- **[工作流程]** 修正：恢復操作與自訂動作事件之 FlowModel 工作流程綁定對話框中的輔助說明文字 ([#9447](https://github.com/nocobase/nocobase/pull/9447))，作者 @mytharcher

- **[AI 員工]** 修正 Ollama 測試飛行需要輸入金鑰的問題 ([#9450](https://github.com/nocobase/nocobase/pull/9450))，作者 @cgyrock

- **[工作流程：審批]**
  - 修正委派審批任務時，審批記錄索引重複的問題，作者 @mytharcher

  - 修正行動裝置上審批表單的版面配置，作者 @zhangzhonghe

- **[備份管理器]** 修正當找不到檔案時，備份會失敗並報錯的問題，作者 @gchust

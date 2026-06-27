---
title: "NocoBase v2.0.0-alpha.37：適配 2.0 中的 tableoid 欄位"
description: "v2.0.0-alpha.37 版本發行說明"
---

### 🚀 改進項目

- **[客戶端]**
  - 在流程引擎上下文中新增頁面資訊版本 ([#7826](https://github.com/nocobase/nocobase/pull/7826)) - @gchust

  - 強化 Markdown 編輯器 ([#7793](https://github.com/nocobase/nocobase/pull/7793)) - @katherinehhh

  - 適配 2.0 中的 tableoid 欄位 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) - @katherinehhh

- **[資料視覺化]** 更新警示提示與事件代碼模板註解 ([#7814](https://github.com/nocobase/nocobase/pull/7814)) - @heziqiang

- **[存取控制]** 優化關聯欄位操作的權限控制邏輯 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) - @2013xile

- **[認證：OIDC]** 增加請求超時時間 - @2013xile

### 🐛 錯誤修復

- **[伺服器]** 修復啟用服務拆分模式後，工作進程透過訊息佇列發送訊息會導致錯誤的問題 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) - @mytharcher

- **[客戶端]**
  - 當前集合變數不應在篩選元件的變數選擇器中可選 ([#7818](https://github.com/nocobase/nocobase/pull/7818)) - @gchust

  - 修復篩選表單關聯欄位中 'value.replace is not a function' 的錯誤 ([#7824](https://github.com/nocobase/nocobase/pull/7824)) - @zhangzhonghe

  - 修復 onChange 回呼中的錯誤參數 ([#7807](https://github.com/nocobase/nocobase/pull/7807)) - @zhangzhonghe

- **[流程引擎]** 修復事件流程的變更需要重新整理頁面才能生效的問題 ([#7811](https://github.com/nocobase/nocobase/pull/7811)) - @gchust

- **[工作流程]** 修復在服務拆分模式下，工作流程外掛程式在非工作進程模式時仍會消費佇列事件的問題 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) - @mytharcher

- **[工作流程：審批]** 修復重新載入關聯資料時未排除主集合欄位的問題 - @mytharcher

- **[郵件管理]** 修復 Outlook 中保留圖片與同步的問題 - @jiannx

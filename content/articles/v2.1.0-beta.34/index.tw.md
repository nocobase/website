---
title: "NocoBase v2.1.0-beta.34: 為看板插件新增 client-v2 支援"
description: "v2.1.0-beta.34 版本發布說明"
---

### 🎉 新功能

- **[區塊：看板]** 為看板插件新增 client-v2 支援 ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 改進

- **[cli]** 透過將設定與管理工作流程遷移至 Inquirer，改善 NocoBase CLI 提示體驗，並修復相關的安裝、技能及 Docker 執行時期問題。([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos

- **[AI 員工]** 儲存至向量資料庫時，若資料表名稱重複則顯示提示 ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock

- **[通知管理員]** 變更佇列策略以最佳化發送效能 ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher

- **[工作流程：自訂動作事件]** 將區塊工作台與工作流程自訂動作觸發器插件遷移至 client v2，包含其動作模型與 QR 掃描流程。([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx

- **[認證]** 在 client-v2 中實作驗證器設定頁面，並提供可重複使用的 client-v2 表格、變數輸入及表單基礎元件。([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn

- **[AI：知識庫]** 儲存至向量資料庫時，若資料表名稱重複則顯示提示 by @cgyrock

- **[認證：SAML 2.0]** 為 CAS 與 SAML 認證插件新增 client-v2 入口，使其能與 v2 登入頁面及驗證器設定頁面搭配運作。 by @Molunerfinn

### 🐛 錯誤修復

- **[client-v2]**
  - 修復看板插件 v2 路由因客戶端未提供 dnd-kit 相依而無法載入的問題。([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx

  - 共用的 v2 表格元件現在預設顯示每頁筆數選擇器，與 v1 行為一致。([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn

- **[client]**
  - 修正在表單提交過程中，子表單內的 JS 欄位值未正確設定的問題。([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust

  - 修正動作按鈕事件流程中無法解析當前彈窗記錄變數的問題。([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust

- **[流程引擎]** 修正瀏覽器主控台中顯示的錯誤訊息不正確。([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust

- **[AI 員工]**
  - 修正在 AI 員工節點中，操作者角色權限未生效的問題 ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock

  - 修正 AI 員工 OSS 檔案讀取錯誤 ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock

- **[API 文件]** 修正集合 API 文件，使查詢參數不再互相干擾 ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx

- **[資料來源：主要]** 修正同步欄位後，欄位選項被寫入綱要的問題 ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile

- **[工作流程：JavaScript]** 修正工作流程 JavaScript QuickJS 執行時期套件在正式環境建置中的載入問題。([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher

- **[WEB 客戶端]** 移除選單後清除區塊資料。([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust

- **[動作：匯入記錄]** 修正匯入日期類別欄位記錄時顯示錯誤日期的問題 ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher

- **[動作：匯入記錄 Pro]** 修正專業版 xlsx 匯入的時區處理問題 by @mytharcher

- **[認證：SAML 2.0]** 修正 SAML 自動重新導向攔截器導致應用程式外殼閃爍，以及在每次導航時重複開啟抽屜的問題。 by @Molunerfinn

- **[動作：匯出記錄 Pro]** 修正從附件 URL 欄位匯出附件時拋出錯誤的問題 by @mytharcher

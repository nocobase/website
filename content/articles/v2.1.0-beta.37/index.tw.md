---
title: "NocoBase v2.1.0-beta.37：支援基本認證"
description: "v2.1.0-beta.37 版本發行說明"
---

### 🎉 新功能

- **[client-v2]** 在 v2 管理後台新增「安全性」選單與 Token 策略設定頁面；使用者中心現已支援變更密碼。（[#9556](https://github.com/nocobase/nocobase/pull/9556)）by @Molunerfinn

- **[cli]** 支援基本認證（Basic Auth）。（[#9558](https://github.com/nocobase/nocobase/pull/9558)）by @chenos

- **[密碼策略]** 將 plugin-password-policy 遷移至 client-v2 管理外殼，包含「密碼策略 / 鎖定使用者」設定頁面，並在使用者中心變更密碼表單上強制執行客戶端規則。by @Molunerfinn

### 🚀 改進

- **[資料視覺化]** 新增圖表區塊的 client v2 支援。（[#9517](https://github.com/nocobase/nocobase/pull/9517)）by @jiannx

- **[工作流程]** 重構工作流程非同步節點的可用性檢查。（[#9532](https://github.com/nocobase/nocobase/pull/9532)）by @mytharcher

### 🐛 錯誤修復

- **[建置]**
  - 伺服器建置中的文字資產現在會以檔案形式複製，而非轉換為 JavaScript 模組。（[#9565](https://github.com/nocobase/nocobase/pull/9565)）by @Molunerfinn

  - 修正外掛伺服器混淆輸出，避免在 Node.js 執行時期套件中包含瀏覽器全域變數。（[#9559](https://github.com/nocobase/nocobase/pull/9559)）by @Molunerfinn

- **[client-v2]** 修正瀏覽器語言元資料，使應用程式頁面遵循所選的應用程式語言，而非標記為英文。（[#9564](https://github.com/nocobase/nocobase/pull/9564)）by @Molunerfinn

- **[檔案管理]** 使用 PDF.js 安全渲染 PDF 預覽，取代基於 iframe 的原始 PDF 渲染方式。（[#9566](https://github.com/nocobase/nocobase/pull/9566)）by @mytharcher

- **[AI 員工]** 修正工作情境提示中工具名稱的描述錯誤。（[#9567](https://github.com/nocobase/nocobase/pull/9567)）by @cgyrock

- **[工作流程：人工節點]** 修正人工工作流程任務的暫存儲存無法保留已提交的表單值。（[#9554](https://github.com/nocobase/nocobase/pull/9554)）by @mytharcher

- **[認證：OIDC]** 修正 SSO 登入回呼收到外部重新導向 URL 時的 Token 洩漏問題。by @2013xile

- **[工作流程：審核]**
  - 修正審核撤回時，在尊重來源資料集合更新權限的前提下更新已提交的業務資料。by @mytharcher

  - 修正審核節點不支援 `jobs:resume` API 的問題。by @mytharcher

  - 修正當同一審核任務同時發生委派時，審核記錄索引重複的問題。by @mytharcher

  - 修正當審核工作流程因非審核節點失敗而終止時，審核待辦事項未更新的問題。by @mytharcher

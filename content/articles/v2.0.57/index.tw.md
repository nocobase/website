---
title: "NocoBase v2.0.57：修復插件伺服器混淆輸出，避免 Node.js 運行時捆綁包中的瀏覽器全域變數"
description: "v2.0.57 版本發行說明"
---

### 🐛 錯誤修復

- **[建置]** 修正外掛伺服器混淆輸出，避免在 Node.js 執行時期套件中包含瀏覽器全域變數。([#9559](https://github.com/nocobase/nocobase/pull/9559)) 由 @Molunerfinn 提供

- **[工作流：人工節點]** 修正人工工作流程任務的暫存功能，無法保留已提交表單值的問題。([#9554](https://github.com/nocobase/nocobase/pull/9554)) 由 @mytharcher 提供

- **[AI 員工]** 修正工作情境提示中，工具名稱描述不正確的問題。([#9567](https://github.com/nocobase/nocobase/pull/9567)) 由 @cgyrock 提供

- **[檔案管理]** 使用 PDF.js 安全渲染 PDF 預覽，取代基於 iframe 的原始 PDF 渲染方式。([#9566](https://github.com/nocobase/nocobase/pull/9566)) 由 @mytharcher 提供

- **[驗證：OIDC]** 修正 SSO 登入回呼收到外部重新導向 URL 時，可能發生的 Token 洩漏問題。由 @2013xile 提供

- **[工作流：審批]**
  - 修正審批節點不支援 `jobs:resume` API 的問題。由 @mytharcher 提供

  - 修正審批撤回功能，在更新已提交業務資料時，能正確遵循來源資料集的更新權限。由 @mytharcher 提供

  - 修正當審批工作流程因非審批節點失敗而終止時，待辦審批事項未正確清除的問題。由 @mytharcher 提供

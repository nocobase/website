---
title: "NocoBase v2.0.0-alpha.8：改進 plugin-ai 的網路搜尋功能"
description: "v2.0.0-alpha.8 版本發行說明"
---

### 🎉 新功能

- **[AI 員工]** 改善 plugin-ai 的網頁搜尋功能 ([#7580](https://github.com/nocobase/nocobase/pull/7580)) by @cgyrock

### 🚀 改進

- **[客戶端]** 為獲取更準確的檔案 MIME 類型，在客戶端使用 `mime` 套件來偵測檔案 MIME 類型 ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher

- **[流程引擎]**
  - 支援彈出變數 ([#7583](https://github.com/nocobase/nocobase/pull/7583)) by @gchust

  - 透過更豐富的程式碼片段和針對各種情境的上下文感知程式碼補全，增強程式碼編輯體驗 ([#7559](https://github.com/nocobase/nocobase/pull/7559)) by @gchust

  - 標準化自動化工作流程，使其一致地由「beforeRender」事件觸發，確保跨流程的可預測且統一的操作。 ([#7577](https://github.com/nocobase/nocobase/pull/7577)) by @gchust

- **[工作流程]** 在刪除節點時新增 `keepBranch` 選項 ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher

- **[資料視覺化]** 擴充圖表類型；最佳化 UI 與互動體驗。 ([#7581](https://github.com/nocobase/nocobase/pull/7581)) by @heziqiang

- **[工作流程：審批]** 重構分支配置以適應核心變更 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正切換表格分頁時頁面顯示異常的問題 ([#7572](https://github.com/nocobase/nocobase/pull/7572)) by @zhangzhonghe

  - 無法為「更新」和「批量更新」動作設定指派欄位值 ([#7565](https://github.com/nocobase/nocobase/pull/7565)) by @gchust

  - 修正預覽時圖片同時旋轉和縮放導致顯示不正確的問題 ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher

- **[工作流程：審批]** 修正當應用程式未安裝時，因資料表不存在導致遷移腳本錯誤的問題 by @mytharcher

- **[認證：LDAP]** 修正 LDAP 在 Active Directory 中因非 ASCII (UTF-8) DN 導致繫結失敗的問題 by @2013xile

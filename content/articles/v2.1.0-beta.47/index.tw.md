---
title: "NocoBase v2.1.0-beta.47：適配新版版本控制插件"
description: "v2.1.0-beta.47 版本發佈說明"
---

### 🎉 新功能

- **[未定義]** 為 nginx 和 caddy 新增頂層代理指令。([#9721](https://github.com/nocobase/nocobase/pull/9721))，作者：@chenos
- **[備份管理]** 適配新版版本控制插件。([#9563](https://github.com/nocobase/nocobase/pull/9563))，作者：@cgyrock
- **[版本控制]** 新增版本控制插件。作者：@cgyrock

### 🚀 改進

- **[資料來源管理]** 新增 client-v2 資料來源權限管理，並統一相關的權限選擇器抽屜。([#9706](https://github.com/nocobase/nocobase/pull/9706))，作者：@jiannx
- **[集合：連接外部資料 (FDW)]** 改善 V2 集合模板在 SQL 集合與外部資料集合之間的一致性，包括 SQL 確認、外部資料庫伺服器管理及模板排序。([#9711](https://github.com/nocobase/nocobase/pull/9711))，作者：@katherinehhh
- **[模板列印]** 更新列印模板集合元數據，以利版本控制備份分類。作者：@cgyrock
- **[記錄歷史]** 更新記錄歷史集合元數據，以利版本控制備份分類。作者：@cgyrock
- **[工作流：審批]** 更新工作流審批集合元數據，以利版本控制備份分類。作者：@cgyrock
- **[稽核日誌]** 更新稽核日誌記錄器集合元數據，以利版本控制備份分類。作者：@cgyrock
- **[郵件管理]** 更新郵件管理集合元數據，以利版本控制備份分類。作者：@cgyrock
- **[應用程式管理員]** 更新應用程式管理員集合元數據，以利版本控制備份分類。作者：@cgyrock

### 🐛 錯誤修復

- **[client-v2]**

  - 修復在 client-v2 詳細檢視中，JSON 欄位對物件值顯示空白儲存格的問題。([#9714](https://github.com/nocobase/nocobase/pull/9714))，作者：@katherinehhh
  - 修復選項欄位在本地化環境中錯誤翻譯純文字選項標籤的問題。([#9708](https://github.com/nocobase/nocobase/pull/9708))，作者：@katherinehhh
- **[錯誤處理]** 減少對未攜帶 Token 的常規未驗證請求所產生的雜亂錯誤日誌。([#9718](https://github.com/nocobase/nocobase/pull/9718))，作者：@2013xile
- **[區塊：列表]** 修復列表區塊中，當操作依賴於當前記錄時，行操作連結狀態過時的問題。([#9716](https://github.com/nocobase/nocobase/pull/9716))，作者：@katherinehhh
- **[資料來源管理]** 改善 V2 資料來源管理在集合、欄位、同步及資料表載入操作失敗時的錯誤訊息。([#9710](https://github.com/nocobase/nocobase/pull/9710))，作者：@katherinehhh
- **[AI 員工]** 修復 client-v2 圖表設定中缺少 Dara 助理按鈕的問題。([#9696](https://github.com/nocobase/nocobase/pull/9696))，作者：@cgyrock
- **[AI：知識庫]** 修復 S3 知識庫檔案 URL 中路徑遺失的問題。作者：@cgyrock
- **[操作：匯入記錄 Pro]** 修復匯入包含跨串流區塊分割的 UTF-8 共享字串之 XLSX 檔案時出現亂碼的問題。作者：@mytharcher
- **[記錄歷史]** 修復外部資料來源變更時缺少記錄歷史的問題。作者：@2013xile

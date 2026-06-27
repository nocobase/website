---
title: "NocoBase v2.2.0-alpha.1：支援文字欄位的掃描輸入"
description: "v2.2.0-alpha.1 版本發行說明"
---

### 🎉 新功能

- **[client-v2]** 支援文字欄位的掃描輸入 ([#9599](https://github.com/nocobase/nocobase/pull/9599)) - 作者：@katherinehhh
- **[undefined]** 為 nginx 和 caddy 新增頂層代理指令 ([#9721](https://github.com/nocobase/nocobase/pull/9721)) - 作者：@chenos
- **[非同步任務管理器]** 為非同步任務管理器的頂欄操作新增 v2 客戶端支援。([#9707](https://github.com/nocobase/nocobase/pull/9707)) - 作者：@jiannx
- **[備份管理器]**

  - 為備份管理器外掛新增 v2 客戶端執行時期支援。([#9712](https://github.com/nocobase/nocobase/pull/9712)) - 作者：@katherinehhh
  - 適配新版版本控制外掛 ([#9563](https://github.com/nocobase/nocobase/pull/9563)) - 作者：@cgyrock
- **[資料來源：外部 NocoBase]** 新增資料來源外掛：外部 NocoBase - 作者：@2013xile
- **[版本控制]** 新增版本控制外掛 - 作者：@cgyrock

### 🚀 改進

- **[client-v2]**

  - 新增支援在 v2 彈窗選擇關聯欄位中停用多選功能。([#9730](https://github.com/nocobase/nocobase/pull/9730)) - 作者：@katherinehhh
  - 改進當設定的外部資料來源被停用時，v2 區塊的渲染行為，避免渲染錯誤並顯示更清晰的 UI 編輯器佔位符。([#9699](https://github.com/nocobase/nocobase/pull/9699)) - 作者：@katherinehhh
- **[變數與機密]** 環境變數 (`$env`) 現在可在 v1 執行時期中，透過基於流程引擎的變數選取器進行選取。([#9728](https://github.com/nocobase/nocobase/pull/9728)) - 作者：@Molunerfinn
- **[檔案管理器]** 為檔案管理器新增內部上傳的 `subPath` 支援。([#9731](https://github.com/nocobase/nocobase/pull/9731)) - 作者：@mytharcher
- **[資料來源管理器]** 新增 client-v2 資料來源權限管理，並對齊相關的權限選取器抽屜。([#9706](https://github.com/nocobase/nocobase/pull/9706)) - 作者：@jiannx
- **[集合：連接外部資料 (FDW)]** 改善 SQL 集合與外部資料集合的 V2 集合模板對等性，包括 SQL 確認、外部資料庫伺服器管理以及模板排序。([#9711](https://github.com/nocobase/nocobase/pull/9711)) - 作者：@katherinehhh
- **[模板列印]** 更新列印模板集合元資料，以利版本控制備份分類。 - 作者：@cgyrock
- **[記錄歷史]** 更新記錄歷史集合元資料，以利版本控制備份分類。 - 作者：@cgyrock
- **[工作流程：審批]** 更新工作流程審批集合元資料，以利版本控制備份分類。 - 作者：@cgyrock
- **[稽核日誌]** 更新稽核日誌集合元資料，以利版本控制備份分類。 - 作者：@cgyrock
- **[郵件管理器]** 更新郵件管理器集合元資料，以利版本控制備份分類。 - 作者：@cgyrock
- **[應用程式管理員]** 更新應用程式管理員集合元資料，以利版本控制備份分類。 - 作者：@cgyrock

### 🐛 錯誤修復

- **[資料庫]** 修正在大量更新期間，密碼欄位未被雜湊處理的問題。([#9736](https://github.com/nocobase/nocobase/pull/9736)) - 作者：@mytharcher
- **[客戶端]** 修正當彈窗子表格行操作因連結規則被隱藏時，會連帶隱藏整個子表格欄位的問題 ([#9717](https://github.com/nocobase/nocobase/pull/9717)) - 作者：@katherinehhh
- **[client-v2]**

  - 修正 client v2 顯示檢視中的 JSON 欄位，對於物件值會渲染為空白儲存格的問題。([#9714](https://github.com/nocobase/nocobase/pull/9714)) - 作者：@katherinehhh
  - 修正 V2 選項欄位在本地化環境中，錯誤地翻譯純文字選項標籤的問題。([#9708](https://github.com/nocobase/nocobase/pull/9708)) - 作者：@katherinehhh
- **[區塊：地圖]**

  - 修正 v1 Google 地圖區塊中 DrawingManager 不可用的問題 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) - 作者：@katherinehhh
  - 修正啟用地圖外掛後，v2 資料來源管理器的「新增欄位」選單中缺少地圖幾何欄位的問題。([#9715](https://github.com/nocobase/nocobase/pull/9715)) - 作者：@katherinehhh
- **[日曆]** 修正無法在 v2 日曆區塊的詳細資料與編輯抽屜中新增「詳細資料」與「編輯」區塊的問題 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) - 作者：@jiannx
- **[資料來源管理器]**

  - 修正變更標題欄位後，重新開啟 v2 資料來源欄位配置抽屜時，仍顯示舊標題欄位的問題。([#9720](https://github.com/nocobase/nocobase/pull/9720)) - 作者：@katherinehhh
  - 改善 V2 資料來源管理器在集合、欄位、同步及資料表載入操作失敗時的錯誤訊息。([#9710](https://github.com/nocobase/nocobase/pull/9710)) - 作者：@katherinehhh
- **[AI 員工]**

  - 改善 AI 員工的資料查詢提示，使其在使用查詢工具前先載入所需技能。([#9725](https://github.com/nocobase/nocobase/pull/9725)) - 作者：@cgyrock
  - 修正 client-v2 圖表設定中缺少 Dara 助理按鈕的問題。([#9696](https://github.com/nocobase/nocobase/pull/9696)) - 作者：@cgyrock
- **[區塊：列表]** 修正當列表區塊中的行操作依賴於當前記錄時，其連結狀態可能過時的問題。([#9716](https://github.com/nocobase/nocobase/pull/9716)) - 作者：@katherinehhh
- **[錯誤處理器]** 減少對於未攜帶 Token 的一般未認證請求所產生的過多錯誤日誌 ([#9718](https://github.com/nocobase/nocobase/pull/9718)) - 作者：@2013xile
- **[操作：匯入記錄 Pro]** 修正匯入包含跨串流區塊分割的 UTF-8 共享字串之 XLSX 檔案時，出現亂碼的問題。 - 作者：@mytharcher
- **[AI：知識庫]** 修正 S3 知識庫檔案 URL 中缺少路徑的問題。 - 作者：@cgyrock
- **[記錄歷史]** 修正外部資料來源變更的記錄歷史遺失問題 - 作者：@2013xile

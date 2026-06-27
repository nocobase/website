---
title: "NocoBase v2.2.0-beta.6：新增行動版佈局支援"
description: "v2.2.0-beta.6 版本發行說明"
---

### 🎉 新功能

- **[cli]** 支援安裝鉤子腳本 ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos
- **[UI 佈局]** 新增行動版佈局支援 ([#9641](https://github.com/nocobase/nocobase/pull/9641)) by @zhangzhonghe
- **[備份管理器]** 支援 KingBase 作為主資料庫的備份與還原 ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
- **[多入口]** 新增多入口外掛 by @zhangzhonghe
- **[遷移管理器]** 支援 KingBase 作為主資料庫的遷移 by @2013xile

### 🚀 改進

- **[client-v2]**

  - 在 UI 欄位驗證設定中，將欄位層級的驗證規則顯示為唯讀的繼承規則 ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh
  - 為欄位值設定新增覆寫值選項 ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust
- **[undefined]** 改進 AI 知識庫檢索與文件 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
- **[流程引擎]**

  - 使用 Flow Surface API 建構 AI 員工時，預設將當前區塊加入使用者上下文 ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust
  - 開放 runjs 瀏覽器全域變數 ([#9841](https://github.com/nocobase/nocobase/pull/9841)) by @gchust
- **[工作流]** 穩定更新選項測試 ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
- **[存取控制]** 將 v2 的使用者與權限設定頁面對齊 v1 行為，包含分頁總數、部門樹行為、選取樣式及內部權限面板滾動 ([#9810](https://github.com/nocobase/nocobase/pull/9810)) by @jiannx
- **[備份管理器]** 集合中 `dataCategory` 標記為 `'runtime'` 的資料表現在會自動排除於備份之外 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[AI：知識庫]** 改進 AI 知識庫文件分段、分段管理、命中測試及文件工作流節點支援 by @cgyrock

### 🐛 錯誤修復

- **[client-v2]**

  - 修復區塊設定更新後區塊未重新整理的問題 ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust
  - 修復自訂操作工作流觸發按鈕在額外的 `values` 屬性下或作為序列化字串發送自訂上下文 JSON 的問題 ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher
  - 修將關聯欄位值設定為固定值或預設值時無法生效的問題 ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust
  - 修復子表格欄位上的事件流程執行不正確的問題 ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  - 從關聯欄位中移除意外的 updateAssociationValues ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  - 修復當子表單包含子表格時，表單提交會顯示錯誤訊息的問題 ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
- **[ai]**

  - 修復 AI 外掛不相容的 LangChain 依賴解析問題 ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
  - 鎖定 `@langchain/openai` 為 AI 套件的修補程式層級更新 ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
- **[app]** 在推斷外掛公開路徑時忽略不相關的 currentScript ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos
- **[auth]** 加密的密碼資料不再包含於登入狀態回應中 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile
- **[區塊：甘特圖]** 修復甘特圖任務彈出視窗範本設定無法正確套用或清除的問題 ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx
- **[操作：列印]** 修復 v2 詳細區塊列印，使空的詳細區塊不再列印整個頁面 ([#9832](https://github.com/nocobase/nocobase/pull/9832)) by @katherinehhh
- **[UI 範本]** 修復 ctx.openview 的預設上下文不正確的問題 ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust
- **[檔案管理器]** 修復上傳檔案至外部資料來源的附件 URL 欄位時出現 404 錯誤 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[操作：自訂請求]** 修復 V2 自訂請求操作在未設定請求設定時顯示額外錯誤的問題 ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
- **[工作流]** 修復工作流排程器在意外排程錯誤後的恢復問題 ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
- **[AI 員工]** 修復 AI 員工捷徑任務觸發器，使其在從捷徑設定檔執行任務時包含當前工作上下文中的附件 ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
- **[資料來源：外部 NocoBase]** 透過上傳資料來源代理 NocoBase 外部資料來源的檔案上傳與儲存操作 by @2013xile
- **[AI：知識庫]**

  - 修復 AI 知識庫外掛不相容的 LangChain 依賴解析問題 by @cgyrock
  - 修復在未啟用 AI 外掛的情況下啟用 AI 知識庫外掛時，失敗訊息不明確的問題 by @cgyrock
- **[多空間]** 修復因過時的多空間標頭而阻擋驗證恢復請求的問題 by @jiannx
- **[工作流：子流程]** 修復非同步子流程，使父工作流能在工作者重啟或記憶體事件映射遺失後恢復執行 by @mytharcher
- **[工作流：審批]** 修復相關審批無法正確載入或重新整理的問題 by @zhangzhonghe
- **[應用程式監控]** 修復遠端 WebSocket 代理回應失敗時的崩潰問題 by @2013xile

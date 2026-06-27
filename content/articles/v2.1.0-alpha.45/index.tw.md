---
title: "NocoBase v2.1.0-alpha.45：支援提交表單動作中的欄位值指派"
description: "v2.1.0-alpha.45 版本發布說明"
---

### 🎉 新功能

- **[client-v2]**
  - 支援在提交表單動作中指派欄位值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
  - 支援嵌入 v2 頁面與公開表單 v2 頁面 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - 在 v2 管理後台新增「安全」選單與「Token 策略」設定頁面；使用者中心現已支援「變更密碼」功能。 ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
  - 將 client-v2 的 Plugin 管理員頁面重寫為響應式卡片式 UI，包含分類篩選、搜尋、啟用/停用/移除、大量啟用以及 Plugin 詳細資訊模態框；同時讓 client-v1 的 Plugin 管理員頁面在窄螢幕上具備響應式設計。 ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
- **[cli]**
  - 新增動態 API 指令相容性防護 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
  - 支援基本認證 ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
- **[Office 檔案預覽器]** 將 Office 檔案預覽 Plugin 遷移至 v2 (FlowEngine) 客戶端。 ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn
- **[工作流程]**
  - 為工作流程新增逾時控制，若設定逾時選項，支援自動中止逾時執行 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
  - 新增管理員 API，可從頭或指定節點重新執行已啟動的工作流程。 ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher
- **[IdP: OAuth]** 為多應用部署中的應用單一登入新增基礎支援 ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile
- **[區塊: 甘特圖]** 新增甘特圖區塊的 v2 支援。 ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx
- **[應用 SSO]** 新增應用 SSO Plugin，用於應用之間的自動登入 by @2013xile
- **[密碼策略]** 將 plugin-password-policy 遷移至 client-v2 管理後台，包含「密碼策略 / 鎖定使用者」設定頁面，以及在使用者中心變更密碼表單上的客戶端規則強制執行。 by @Molunerfinn
- **[工作流程: Webhook]** 為逾時的 Webhook 工作流程（同步模式）新增 408 回應狀態 by @mytharcher
- **[工作流程: 子流程]** 支援在工作流程中設定逾時 by @mytharcher
- **[Auth: OIDC]** 將 `plugin-auth-oidc` 遷移至 v2 管理後台；登入按鈕、管理員設定表單以及 SSO 自動重新導向現已可在 v2 下運作。 by @Molunerfinn
- **[工作流程: 審批]** 支援在工作流程中設定逾時 by @mytharcher
- **[應用管理員]** 為子應用新增應用 SSO 設定 by @2013xile
- **[Auth: LDAP]** 新增 v2 客戶端入口，使 LDAP 驗證器能在 v2 應用上呈現其登入表單與管理員設定。 by @Molunerfinn

### 🚀 改進

- **[client-v2]**
  - 新增 v2 表格行選取設定 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh
  - 支援動作面板的動作顏色 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh
  - 從選單設定中移除「隱藏」選項 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe
- **[client]** 從選單項目設定中移除「隱藏」選項 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe
- **[cli]** 簡化應用升級流程 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos
- **[通知管理員]** 將通知相關 Plugin 遷移至 v2。 ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn
- **[AI 員工]** 改進 LLM 基礎 URL 欄位，使其能在建立和編輯表單中使用全域範圍變數。 ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock
- **[工作流程]** 重構工作流程非同步節點可用性檢查 ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher
- **[資料視覺化]** 新增圖表區塊的客戶端 v2 支援。 ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
- **[IP 限制]** 為 IP 限制 Plugin 新增 v2 客戶端。 by @Molunerfinn

### 🐛 錯誤修復

- **[client]**
  - 修正頂部導覽列中徽章的寬度 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
  - 提高掃描輸入圖片上傳限制 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - 修正切換選單後頁面分頁消失的問題 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
  - 修正子表單中的子表格無法新增第二行的問題 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 修正 v2 時間欄位保留時間格式的問題 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 修正同步行動版日期選擇器彈出值 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 修正子表單連動的同步隱藏狀態 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  - 修正 v2 時間欄位保留時間格式的問題 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 修正子表單中的子表格無法新增第二行的問題 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 修正同步行動版日期選擇器彈出值 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 提高掃描輸入圖片上傳限制 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
- **[flow-engine]**
  - 修正前端日誌層級不正確的問題。 ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
  - 修正於搜尋框中輸入時，階層式選單不穩定的問題 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe
  - 修正於彈出視窗中成功提交表單後，表格動作連動規則會錯誤執行的問題。 ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
- **[ai]** 將 LangChain 依賴鎖定至穩定版本，以防止 Ollama 工具執行失敗，並避免影響上游發行版本 ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
- **[client-v2]**
  - 修正子應用登入分頁呈現原始翻譯模板的問題，並防止 v2 認證方式編輯抽屜在提交時遺失欄位值。 ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn
  - 透過使用 CSS line-clamp 替代 antd Typography 省略號，改善 Plugin 管理員頁面效能。 ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn
  - 修正瀏覽器語言元資料，使應用頁面跟隨所選的應用程式語言，而非標記為英文。 ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
- **[建置]**
  - 伺服器建置中的文字資產現在以檔案形式複製，而非轉換為 JavaScript 模組。 ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  - 修正 Plugin 伺服器混淆輸出，以避免在 Node.js 執行時期套件中包含瀏覽器全域變數。 ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
- **[區塊: 甘特圖]** 修正 v2 甘特圖共享資料夾路徑，並新增斑馬紋樣式。 ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[授權設定]** 新增授權設定與商業授權注入的 client-v2 支援。 ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[工作流程: 自訂動作事件]**
  - 修正 v2 區塊動作選單中重複的「觸發工作流程」選項 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
  - 根據當前區塊集合篩選自訂動作工作流程綁定選項。 ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher
  - 修正具有多筆記錄上下文的自訂動作表格按鈕，錯誤地允許選取自訂上下文工作流程的問題。 ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
- **[集合: 樹狀]** 修正樹狀集合中因父子資料循環導致的錯誤 ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
- **[檔案管理員]**
  - 改進 PDF 預覽失敗訊息，並記錄外部儲存的 CORS 需求。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    參考資料：[檔案預覽](docs/docs/en/file-manager/file-preview/index.md)
  - 改進 PDF 預覽失敗訊息，並記錄外部儲存的 CORS 需求。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    參考資料：[檔案預覽](docs/docs/en/file-manager/file-preview/index.md)
  - 使用 PDF.js 安全渲染 PDF 預覽，而非基於 iframe 的原始 PDF 渲染。 ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
  - 修正檔案上傳期間的 Unicode 檔案名稱正規化，以避免產生包含控制字元的物件鍵值。 ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
- **[AI 員工]**
  - 修正當參照的表格區塊被移除後，AI 快捷按鈕取得空白區塊上下文的問題。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
  - 修正工作上下文提示中工具名稱的描述不正確 ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
- **[工作流程: 人工節點]** 修正人工工作流程任務的暫存儲存未保留已提交表單值的問題。 ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
- **[plugin-commercial]** 新增 client-v2 商業授權元件與頂部欄授權狀態入口。 by @jiannx
- **[AI: 知識庫]** 將 LangChain 依賴鎖定至穩定版本，以防止 Ollama 工具執行失敗，並避免影響上游發行版本 by @cgyrock
- **[遷移管理員]** 修正 PostgreSQL 遷移差異，使當本地欄位變成繼承時，不會刪除子繼承欄位。 by @hongboji
- **[模板列印]** 修正模板列印 PDF 轉換錯誤未正確回傳至客戶端的問題 by @jiannx
- **[Auth: OIDC]** 修正當 SSO 登入回呼收到外部重新導向 URL 時的 Token 洩漏問題 by @2013xile
- **[工作流程: 審批]**
  - 修正審批節點不支援 `jobs:resume` API 的問題 by @mytharcher
  - 修正審批撤回以更新已提交的業務資料，同時尊重來源集合的更新權限。 by @mytharcher
  - 修正當審批工作流程因非審批節點失敗而終止時，待辦審批項目未更新的問題。 by @mytharcher

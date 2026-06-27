---
title: "NocoBase v2.1.0-beta.16：重構 NocoBase CLI"
description: "v2.1.0-beta.16 版本發行說明"
---

### 🎉 新功能

- **[未分類]** 新增 CI 工作流程，用於檢查遺失的 `plugin-*` 同儕依賴並執行建置，並透過 PR 評論回報結果。([#9058](https://github.com/nocobase/nocobase/pull/9058)) 作者：@Molunerfinn

- **[cli-v1]** 從環境變數解析儲存路徑 ([#9147](https://github.com/nocobase/nocobase/pull/9147)) 作者：@chenos

- **[cli]** 重構 NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) 作者：@chenos

- **[流程引擎]** 為 FlowEngine 新增 `getSubclassesOfAsync` 方法，用於透過 `registerModelLoaders` 中新的 `extends` 欄位來發現非同步註冊的模型類別。([#9065](https://github.com/nocobase/nocobase/pull/9065)) 作者：@Molunerfinn

- **[工作流程]**
  - 新增檢查節點建立的 API ([#9207](https://github.com/nocobase/nocobase/pull/9207)) 作者：@mytharcher

  - 為工作任務新增日誌欄位，以便顯示某些節點的日誌內容進行除錯 ([#9165](https://github.com/nocobase/nocobase/pull/9165)) 作者：@mytharcher

- **[AI 員工]**
  - 工作流程已新增 AI 員工指令 ([#9025](https://github.com/nocobase/nocobase/pull/9025)) 作者：@cgyrock

  - 為 AI 員工新增資料查詢工具與業務分析報表工具 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) 作者：@2013xile

  - 新增 AI 員工呼叫子代理的功能 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) 作者：@cgyrock

  - 為 AI 員工新增 SKILLS 能力。([#8797](https://github.com/nocobase/nocobase/pull/8797)) 作者：@cgyrock

- **[認證：API 金鑰]** 新增 `pm list` 和 `generate-api-key` 指令 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) 作者：@chenos

- **[AI：MCP 伺服器]**
  - 提供通用的資料集合查詢 API，可透過 MCP 呼叫 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) 作者：@2013xile

  - 新增 MCP 伺服器插件，允許建置 NocoBase 系統並支援業務工作流程。([#8824](https://github.com/nocobase/nocobase/pull/8824)) 作者：@2013xile

- **[資料來源管理器]** 支援 MCP 工具的按需載入 ([#8936](https://github.com/nocobase/nocobase/pull/8936)) 作者：@2013xile

- **[IdP：OAuth]** 新增 IdP：OAuth 插件，使 MCP 服務能夠透過 OAuth 進行驗證 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) 作者：@2013xile

### 🚀 改進

- **[cli]**
  - 在請求日誌和稽核日誌中新增 CLI 請求來源追蹤 ([#9223](https://github.com/nocobase/nocobase/pull/9223)) 作者：@2013xile

  - 改進了產生的 API CLI 幫助輸出和 ACL 指令分組 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) 作者：@2013xile

  - 改進了 `nb api` 幫助的後備機制，並統一了執行時期啟動失敗的警告訊息 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) 作者：@2013xile

- **[伺服器]** 改進了插件管理器的 Swagger API 文件 ([#9080](https://github.com/nocobase/nocobase/pull/9080)) 作者：@2013xile

- **[資料庫]** 修復了 AI 業務報表生成和資料查詢行為，以避免圖表輸出格式錯誤、日期時間處理不正確以及缺少多資料來源覆蓋的問題 ([#9078](https://github.com/nocobase/nocobase/pull/9078)) 作者：@2013xile

- **[建置]**
  - 應用程式客戶端生產建置現在基於 Rsbuild 運行，並且建置分析加上宣告排程改進，使得建置瓶頸更容易識別和減少。([#8963](https://github.com/nocobase/nocobase/pull/8963)) 作者：@Molunerfinn

  - 將 `@nocobase/build` 中的客戶端建置管道從 Vite 遷移到 Rsbuild。([#8932](https://github.com/nocobase/nocobase/pull/8932)) 作者：@Molunerfinn

- **[客戶端]** 重構管理員佈局設定和應用程式，以模型主機架構並提供 v1 v2 相容性保護 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) 作者：@zhangzhonghe

- **[流程引擎]**
  - 改進 UI 建置 API 的 schema 驗證。([#8881](https://github.com/nocobase/nocobase/pull/8881)) 作者：@gchust

  - 改進 UI 建置 API 的 schema 驗證。([#8881](https://github.com/nocobase/nocobase/pull/8881)) 作者：@gchust

- **[應用程式]** 新增基於 Rsbuild 的 client-v1 開發工作流程，同時保持本地插件開發和當前 `/v2/` 拓撲結構的相容性 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) 作者：@Molunerfinn

- **[未分類]** 新增專用的 client-v2 入口，並使用 rsbuild 獨立建置，同時保持 v1 不變。([#8743](https://github.com/nocobase/nocobase/pull/8743)) 作者：@Molunerfinn

- **[存取控制]** 為 acl skill 新增一些新的 API ([#9198](https://github.com/nocobase/nocobase/pull/9198)) 作者：@Andrew1989Y

- **[工作流程：自訂操作事件]** 新增對記錄模式（單筆和多筆）觸發的 ACL 控制 ([#9125](https://github.com/nocobase/nocobase/pull/9125)) 作者：@mytharcher

- **[流程引擎]** 為 UI 建置新增新的 API。([#8992](https://github.com/nocobase/nocobase/pull/8992)) 作者：@gchust

- **[工作流程：操作前事件]** 為觸發器和節點新增驗證規則 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) 作者：@mytharcher

- **[工作流程]** 為所有觸發器和節點新增驗證 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) 作者：@mytharcher

- **[工作流程：Webhook]** 為建立觸發器/節點 API 新增驗證 作者：@mytharcher

- **[工作流程：子流程]** 為建立節點 API 新增驗證 作者：@mytharcher

- **[工作流程：審批]**
  - 為審批節點建立新增驗證 作者：@mytharcher

  - 為觸發器/節點 API 新增驗證 作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 關聯欄位隱藏排序開關 ([#9220](https://github.com/nocobase/nocobase/pull/9220)) 作者：@jiannx

  - 修正在切換選單後頁面標題未更新的問題 ([#8864](https://github.com/nocobase/nocobase/pull/8864)) 作者：@zhangzhonghe

- **[cli]** 修復了 Windows 上因授權 URL 過長導致的 CLI OAuth 登入失敗問題 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) 作者：@2013xile

- **[測試]** 修復了插件建置，使得像 `big.js` 這樣帶有點號的伺服器依賴項被打包到 `dist/node_modules` 中。([#8953](https://github.com/nocobase/nocobase/pull/8953)) 作者：@Molunerfinn

- **[伺服器]** 支援透過主機名稱取得目標應用程式 ([#8978](https://github.com/nocobase/nocobase/pull/8978)) 作者：@2013xile

- **[工作流程：聚合節點]** 修復因驗證規則不正確導致聚合節點無法儲存的問題 ([#9208](https://github.com/nocobase/nocobase/pull/9208)) 作者：@mytharcher

- **[AI 員工]**
  - 修復 AI 員工指令中的日誌記錄異常 ([#9180](https://github.com/nocobase/nocobase/pull/9180)) 作者：@cgyrock

  - 修復了 ACL 丟棄聚合查詢排序的問題 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) 作者：@2013xile

  - 修復了 AI 員工對話中錯誤訊息未顯示的問題 ([#9097](https://github.com/nocobase/nocobase/pull/9097)) 作者：@cgyrock

  - 修復 AI 員工無法使用技能的問題 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) 作者：@cgyrock

  - 修復在 getSkill 工具被停用後，LLM 仍嘗試載入技能的問題 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) 作者：@cgyrock

  - 修復核心套件中 ai 模組失敗的測試案例。([#8941](https://github.com/nocobase/nocobase/pull/8941)) 作者：@cgyrock

- **[工作流程：JavaScript]** 修復設定 JavaScript 節點時拋出錯誤的問題 ([#9169](https://github.com/nocobase/nocobase/pull/9169)) 作者：@mytharcher

- **[IdP：OAuth]**
  - 修復了服務重啟後 OAuth 客戶端註冊和令牌刷新失敗的問題 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) 作者：@2013xile

  - 修復了常規 API 請求的 OAuth 存取問題 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) 作者：@2013xile

  - 修復了子應用程式中 MCP OAuth 登入後重定向不正確的問題 ([#9015](https://github.com/nocobase/nocobase/pull/9015)) 作者：@2013xile

- **[工作流程：循環節點]** 修復工作流程節點的驗證 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) 作者：@mytharcher

- **[存取控制]** 為 MCP 伺服器更新 acl swagger ([#9096](https://github.com/nocobase/nocobase/pull/9096)) 作者：@Andrew1989Y

- **[工作流程：郵件節點]** 修復變數欄位的驗證 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) 作者：@mytharcher

- **[工作流程]**
  - 修復條件指令的驗證規則不正確 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) 作者：@mytharcher

  - 修復資料表觸發器的模式無法設定為「建立或更新」的問題 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) 作者：@mytharcher

- **[資料來源管理器]** 優化了 MCP 工具命名並減少了冗餘的 API 回應，以避免過度消耗 AI 對話上下文 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) 作者：@2013xile

- **[AI：MCP 伺服器]**
  - 修復了當輸入 schema 包含 `null` 類型或 `nullable` 標記（對 OpenAI 工具驗證無效）時，從 Swagger 生成的 MCP 工具問題 ([#8994](https://github.com/nocobase/nocobase/pull/8994)) 作者：@2013xile

  - 修復了 MCP 通用 CRUD 工具中，因不相關的轉發標頭導致的驗證不匹配問題 ([#8983](https://github.com/nocobase/nocobase/pull/8983)) 作者：@2013xile

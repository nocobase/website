---
title: "NocoBase v2.1.0：改進 CLI 中的託管應用程式與外掛管理"
description: "v2.1.0 版本發行說明"
---

### 🎉 新功能

- **[未分類]**

  - 為 nginx 和 caddy 新增頂層代理指令 ([#9721](https://github.com/nocobase/nocobase/pull/9721)) - @chenos
  - 改進了 CLI 中的受管應用程式和插件管理，包括支援 appPath 的環境處理、插件導入、授權插件同步及相關文檔更新。([#9655](https://github.com/nocobase/nocobase/pull/9655)) - @chenos
    參考：[CLI 文檔](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli)，[快速入門](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
  - 新增 AI 員工「本地化工程師 Lina」，協助處理本地化翻譯任務 ([#9434](https://github.com/nocobase/nocobase/pull/9434)) - @2013xile
    參考：[本地化管理](https://docs.nocobase.com/system-management/localization)<br>[Lina：本地化工程師](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[使用 Lina 和本地 HY-MT1.5-1.8B 翻譯本地化條目](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
  - 新增印尼語和越南語文檔。([#9303](https://github.com/nocobase/nocobase/pull/9303)) - @Molunerfinn
  - 新增 CI 工作流程，用於檢查缺少的 `plugin-*` peerDependencies 並執行建置，同時在 PR 評論中報告結果。([#9058](https://github.com/nocobase/nocobase/pull/9058)) - @Molunerfinn
- **[client-v2]**

  - 文字欄位支援掃描輸入 ([#9599](https://github.com/nocobase/nocobase/pull/9599)) - @katherinehhh
  - 新增 `TypedVariableInput`，使 v2 郵件插件的 SMTP 連接埠和安全模式欄位可以接受類型常數或 `{{ $env.X }}` 變數。([#9637](https://github.com/nocobase/nocobase/pull/9637)) - @Molunerfinn
  - 提交表單操作支援欄位值賦值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) - @katherinehhh
  - 支援嵌入 v2 頁面和公開表單 v2 頁面 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) - @zhangzhonghe
  - 將 client-v2 插件管理器頁面重寫為響應式卡片式 UI，包含分類篩選、搜尋、啟用/停用/移除、批量啟用及插件詳情模態框；同時讓 client-v1 插件管理器頁面在窄螢幕上具有響應式。([#9573](https://github.com/nocobase/nocobase/pull/9573)) - @Molunerfinn
  - 在 v2 管理後台新增「安全」選單及「Token 策略」設定頁面；使用者中心現在支援修改密碼。([#9556](https://github.com/nocobase/nocobase/pull/9556)) - @Molunerfinn
- **[cli]**

  - 新增動態 API 指令相容性防護 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) - @chenos
  - 支援基本認證 ([#9558](https://github.com/nocobase/nocobase/pull/9558)) - @chenos
  - 新增備份建立與還原指令 ([#9541](https://github.com/nocobase/nocobase/pull/9541)) - @chenos
  - 在 API 中新增 release 指令 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) - @Andrew1989Y
  - 重構 NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) - @chenos
- **[client]**

  - 頁面選單項目支援聯動規則 ([#9304](https://github.com/nocobase/nocobase/pull/9304)) - @zhangzhonghe
  - 在事件流程中新增 JS 變數 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) - @jiannx
  - 新增 JS 項目操作 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) - @jiannx
- **[flow-engine]**

  - 將 `plugin-environment-variables` 遷移至 client-v2，包含基於 React 的設定頁面和全域註冊的 `$env` 執行時期變數；為 `plugin-file-manager` 新增 client-v2 入口，包含基於 React 的儲存配置頁面以及基於 FlowModel 的上傳欄位、上傳操作和預覽功能。([#9413](https://github.com/nocobase/nocobase/pull/9413)) - @Molunerfinn
  - 在 FlowEngine 中新增 `getSubclassesOfAsync`，用於透過 `registerModelLoaders` 中新的 `extends` 欄位發現非同步註冊的模型類別。([#9065](https://github.com/nocobase/nocobase/pull/9065)) - @Molunerfinn
- **[server]** AI 員工可以使用 Bash 指令搜尋捆綁的文檔 ([#9269](https://github.com/nocobase/nocobase/pull/9269)) - @2013xile
- **[cli-v1]** 從環境變數解析儲存路徑 ([#9147](https://github.com/nocobase/nocobase/pull/9147)) - @chenos
- **[非同步任務管理器]** 為非同步任務管理器頂欄操作新增 v2 客戶端支援。([#9707](https://github.com/nocobase/nocobase/pull/9707)) - @jiannx
- **[備份管理器]**

  - 為備份管理器插件新增 v2 客戶端執行時期支援。([#9712](https://github.com/nocobase/nocobase/pull/9712)) - @katherinehhh
  - 適配新版版本控制插件 ([#9563](https://github.com/nocobase/nocobase/pull/9563)) - @cgyrock
- **[區塊：甘特圖]**

  - 甘特圖區塊新增選項，可在開啟時預設聚焦於今天 ([#9692](https://github.com/nocobase/nocobase/pull/9692)) - @jiannx
  - 為甘特圖區塊新增 v2 支援。([#9545](https://github.com/nocobase/nocobase/pull/9545)) - @jiannx
- **[存取控制]** 將「使用者」和「角色與權限」設定頁面遷移至 v2。([#9619](https://github.com/nocobase/nocobase/pull/9619)) - @jiannx
- **[Office 檔案預覽器]** 將 Office 檔案預覽插件遷移至 v2 (FlowEngine) 客戶端。([#9620](https://github.com/nocobase/nocobase/pull/9620)) - @Molunerfinn
- **[工作流]**

  - 為工作流新增逾時控制，若設定了逾時選項，支援自動中止逾時的執行 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) - @mytharcher
  - 為工作流新增「建立者」和「更新者」欄位 ([#9217](https://github.com/nocobase/nocobase/pull/9217)) - @mytharcher
  - 新增檢查節點建立的 API ([#9207](https://github.com/nocobase/nocobase/pull/9207)) - @mytharcher
  - 為 jobs 新增日誌欄位，以便顯示某些節點的日誌內容進行除錯 ([#9165](https://github.com/nocobase/nocobase/pull/9165)) - @mytharcher
- **[IdP：OAuth]**

  - 為多應用部署中的應用單點登入新增基礎支援 ([#9547](https://github.com/nocobase/nocobase/pull/9547)) - @2013xile
  - 新增 IdP：OAuth 插件，使 MCP 服務能夠透過 OAuth 進行認證 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) - @2013xile
- **[主題編輯器]** 主題編輯器現在可在 v2 介面中使用 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) - @zhangzhonghe
- **[區塊：看板]**

  - 為看板插件新增 client-v2 支援 ([#9475](https://github.com/nocobase/nocobase/pull/9475)) - @jiannx
  - 看板區塊 v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) - @jiannx
- **[區塊：Markdown]** 為 Markdown 區塊新增 client-v2 支援 ([#9487](https://github.com/nocobase/nocobase/pull/9487)) - @jiannx
- **[區塊：列表]** 列表區塊支援 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) - @jiannx
- **[日曆]**

  - 為日曆插件新增 client-v2 支援。([#9464](https://github.com/nocobase/nocobase/pull/9464)) - @jiannx
  - 日曆區塊 v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) - @jiannx
- **[區塊：樹]**

  - 為樹狀篩選區塊新增 client-v2 支援。([#9466](https://github.com/nocobase/nocobase/pull/9466)) - @jiannx
  - 新增樹狀篩選區塊 ([#9016](https://github.com/nocobase/nocobase/pull/9016)) - @jiannx
- **[AI 員工]**

  - 工作流 AI 員工節點支援從附件欄位載入檔案。([#9402](https://github.com/nocobase/nocobase/pull/9402)) - @cgyrock
  - 工作流新增了 AI 員工指令 ([#9025](https://github.com/nocobase/nocobase/pull/9025)) - @cgyrock
  - 為 AI 員工新增資料查詢工具和業務分析報告工具 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) - @2013xile
  - 為 AI 員工新增呼叫子代理的能力 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) - @cgyrock
  - 為 AI 員工新增 SKILLS 能力。([#8797](https://github.com/nocobase/nocobase/pull/8797)) - @cgyrock
- **[資料視覺化]** 為區塊插件新增 client-v2 支援 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) - @zhangzhonghe
- **[認證：API 金鑰]** 新增 `pm list` 和 `generate-api-key` 指令 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) - @chenos
- **[AI：MCP 伺服器]**

  - 提供通用的資料集合查詢 API，可透過 MCP 呼叫 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) - @2013xile
  - 新增 MCP 伺服器插件，允許建置 NocoBase 系統並支援業務工作流程。([#8824](https://github.com/nocobase/nocobase/pull/8824)) - @2013xile
- **[資料來源管理器]** 支援按需載入 MCP 工具 ([#8936](https://github.com/nocobase/nocobase/pull/8936)) - @2013xile
- **[集合欄位：代碼]** field-code 支援 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) - @jiannx
- **[資料來源：外部 NocoBase]** 新增資料來源插件：外部 NocoBase - @2013xile
- **[多空間]** 為多空間插件新增 client-v2 支援，包括空間切換和空間管理。 - @jiannx
- **[應用 SSO]** 新增應用 SSO 插件，用於應用程式之間的自動登入 - @2013xile
- **[版本控制]** 新增版本控制插件 - @cgyrock
- **[雙因素認證 (2FA)]** 現在可以從 v2 客戶端綁定、驗證和配置 TOTP 和雙因素認證。 - @Molunerfinn
- **[密碼策略]** 將 plugin-password-policy 遷移至 client-v2 管理後台，包含「密碼策略 / 鎖定使用者」設定頁面，以及在使用者中心修改密碼表單上的客戶端規則強制執行。 - @Molunerfinn
- **[工作流：Webhook]** 為逾時的 Webhook 工作流（同步模式）新增 408 回應狀態 - @mytharcher
- **[工作流：子流程]** 支援在工作流中設定逾時 - @mytharcher
- **[遷移管理器]** 為 nocobase cli 新增一些 API - @Andrew1989Y
- **[檔案儲存：S3(Pro)]** 支援在 v2 檔案管理器中透過 S3 Pro 儲存上傳檔案。 - @Molunerfinn
- **[認證：OIDC]** 將 `plugin-auth-oidc` 遷移至 v2 管理後台；登入按鈕、管理設定表單和 SSO 自動重定向現在可在 v2 下運作。 - @Molunerfinn
- **[工作流：審批]**

  - 支援在工作流中設定逾時 - @mytharcher
  - 支援刪除草稿審批 - @mytharcher
- **[郵件管理器]** Gmail 支援使用別名發送郵件 - @jiannx
- **[應用管理員]** 為子應用程式新增應用 SSO 設定 - @2013xile
- **[認證：LDAP]** 新增 v2 客戶端入口，使 LDAP 認證器能夠在 v2 應用程式上呈現其登入表單和管理設定。 - @Molunerfinn

### 🚀 改進

- **[未分類]**

  - 在 nb cli 中支援會話範圍的當前環境變數 ([#9415](https://github.com/nocobase/nocobase/pull/9415)) - @chenos
  - 使西班牙語、葡萄牙語、俄語和德語文檔與英文原文保持一致。([#9299](https://github.com/nocobase/nocobase/pull/9299)) - @Molunerfinn
  - 同步法語文檔與中文原文。([#9291](https://github.com/nocobase/nocobase/pull/9291)) - @Molunerfinn
  - 更新 AI 文檔，要求 NocoBase >= 2.1.0-beta.20 並推薦使用最新的 beta 版本。([#9252](https://github.com/nocobase/nocobase/pull/9252)) - @Molunerfinn
  - 改進 AI Agent 安裝指南，防止 Agent 繞過 `--ui` 精靈，並自動偵測 Node 版本管理器。([#9243](https://github.com/nocobase/nocobase/pull/9243)) - @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) - @Molunerfinn
  - 新增專用的 client-v2 入口，並使用 rsbuild 獨立建置，同時保持 v1 不變。([#8743](https://github.com/nocobase/nocobase/pull/8743)) - @Molunerfinn
- **[client-v2]**

  - 新增支援在 v2 彈出式選擇關聯欄位中停用多選。([#9730](https://github.com/nocobase/nocobase/pull/9730)) - @katherinehhh
  - 改進了當配置的外部資料來源被停用時 v2 區塊的渲染行為，防止渲染錯誤並顯示更清晰的 UI 編輯器佔位符。([#9699](https://github.com/nocobase/nocobase/pull/9699)) - @katherinehhh
  - 新增 v2 表格行選取設定 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) - @katherinehhh
  - 支援操作面板操作顏色 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) - @katherinehhh
  - 從選單配置中移除「隱藏」選項 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) - @zhangzhonghe
  - 在 v2 佈局中過濾掉 v1 選單，僅顯示 v2 選單 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) - @zhangzhonghe
  - 將 client-v2 與 client-v1 分離，並移除其對 client-v1 的依賴 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) - @zhangzhonghe
- **[server]**

  - 現代客戶端現在透過 `/v/` 而非 `/v2/` 提供服務。([#9674](https://github.com/nocobase/nocobase/pull/9674)) - @Molunerfinn
  - 改進了插件管理器的 swagger API 文檔 ([#9080](https://github.com/nocobase/nocobase/pull/9080)) - @2013xile
- **[cli]**

  - 改進初始化與自我更新指引 ([#9633](https://github.com/nocobase/nocobase/pull/9633)) - @chenos
  - 簡化應用升級流程 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) - @chenos
  - 改進環境認證流程 ([#9546](https://github.com/nocobase/nocobase/pull/9546)) - @chenos
  - 透過將設定和管理工作流程遷移至 Inquirer，改進了 NocoBase CLI 提示體驗，並修復了相關的安裝、技能和 Docker 執行時期問題。([#9452](https://github.com/nocobase/nocobase/pull/9452)) - @chenos
  - 在請求日誌和稽核日誌中新增 CLI 請求來源追蹤 ([#9223](https://github.com/nocobase/nocobase/pull/9223)) - @2013xile
  - 改進了生成的 API CLI 幫助輸出和 ACL 指令分組 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) - @2013xile
  - 改進了 `nb API` 幫助回退，並統一了執行時期啟動失敗的警告訊息 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) - @2013xile
- **[client]**

  - 將 jsonLogic 從 Application v1 遷移至 BaseApplication ([#9522](https://github.com/nocobase/nocobase/pull/9522)) - @zhangzhonghe
  - 支援透過 runjs 設定欄位樣式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) - @jiannx
  - 重構管理佈局設定和應用程式，以模型主機架構為基礎，並具備 v1 v2 相容性防護 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) - @zhangzhonghe
- **[建置]**

  - 新增回歸測試覆蓋，以防止 `deleteServerFiles` 在 Windows 和 POSIX 路徑下移除 `client` 和 `client-v2` 建置產物。([#9318](https://github.com/nocobase/nocobase/pull/9318)) - @Molunerfinn
  - 應用客戶端生產建置現在基於 Rsbuild 執行，並且建置分析與宣告排程的改進使得建置瓶頸更易於識別和減少。([#8963](https://github.com/nocobase/nocobase/pull/8963)) - @Molunerfinn
  - 將 `@nocobase/build` 中的客戶端建置管道從 Vite 遷移至 Rsbuild。([#8932](https://github.com/nocobase/nocobase/pull/8932)) - @Molunerfinn
- **[資料庫]** 修復了 AI 業務報告生成和資料查詢行為，以避免格式錯誤的圖表輸出、不正確的日期時間處理以及缺少多資料來源覆蓋 ([#9078](https://github.com/nocobase/nocobase/pull/9078)) - @2013xile
- **[flow-engine]**

  - 改進 UI 建置 API 的 schema 驗證。([#8881](https://github.com/nocobase/nocobase/pull/8881)) - @gchust
- **[應用程式]** 新增基於 Rsbuild 的 client-v1 開發工作流程，同時保持本地插件開發和當前 `/v2/` 拓撲的相容性 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) - @Molunerfinn
- **[變數與機密]** 環境變數 (`$env`) 現在可以在 v1 執行時期中，透過基於 flow-engine 的變數選擇器選取。([#9728](https://github.com/nocobase/nocobase/pull/9728)) - @Molunerfinn
- **[資料來源管理器]**

  - 新增 client-v2 資料來源權限管理，並對齊相關的權限選擇器抽屜。([#9706](https://github.com/nocobase/nocobase/pull/9706)) - @jiannx
  - 優化資料建模 API，支援使用 AI 建立評論集合、為外部資料來源配置關聯欄位，以及設定欄位驗證規則 ([#9480](https://github.com/nocobase/nocobase/pull/9480)) - @2013xile
- **[集合：連線至外部資料 (FDW)]** 改進了 SQL 集合和外部資料集合的 V2 集合範本對等性，包括 SQL 確認、外部資料庫伺服器管理和範本排序。([#9711](https://github.com/nocobase/nocobase/pull/9711)) - @katherinehhh
- **[多關鍵字篩選]** 將多關鍵字篩選遷移至 client-v2。([#9691](https://github.com/nocobase/nocobase/pull/9691)) - @gchust
- **[工作流]**

  - 從工作流執行中移除了工作流歷史記錄的事務耦合。([#9668](https://github.com/nocobase/nocobase/pull/9668)) - @mytharcher
  - 重構工作流非同步節點可用性檢查 ([#9532](https://github.com/nocobase/nocobase/pull/9532)) - @mytharcher
  - 為所有觸發器和節點新增驗證 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) - @mytharcher
- **[UI 範本]** 將 UI 範本遷移至 client-v2。([#9591](https://github.com/nocobase/nocobase/pull/9591)) - @gchust
- **[部門]** 新增用於管理部門、部門成員和使用者部門分配的 v2 設定頁面。([#9660](https://github.com/nocobase/nocobase/pull/9660)) - @jiannx
- **[通知管理器]** 將與通知相關的插件遷移至 v2。([#9597](https://github.com/nocobase/nocobase/pull/9597)) - @Molunerfinn
- **[資料視覺化]** 為圖表區塊新增 client-v2 支援。([#9517](https://github.com/nocobase/nocobase/pull/9517)) - @jiannx
- **[驗證]** 為驗證插件新增 v2 客戶端（管理設定頁面、使用者中心入口、簡訊 OTP 表單）。([#9515](https://github.com/nocobase/nocobase/pull/9515)) - @Molunerfinn
- **[認證]**

  - 自訂品牌設定現在可在 v2 客戶端中正確運作 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) - @zhangzhonghe
  - 在 client-v2 中實作 Authenticators 設定頁面，並提供可重用的 client-v2 表格、變數輸入和表單基本元件。([#9457](https://github.com/nocobase/nocobase/pull/9457)) - @Molunerfinn
- **[區塊：地圖]** 為地圖插件新增 v2 客戶端支援。([#9511](https://github.com/nocobase/nocobase/pull/9511)) - @jiannx
- **[本地化]** 改進了 Lina 本地化翻譯任務，包含翻譯範圍、參考語言設定和快速編輯 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) - @2013xile
- **[工作流：自訂操作事件]**

  - 將 block-workbench 和 workflow-custom-action-trigger 插件遷移至 client-v2，包括它們的操作模型和 QR 掃描器流程。([#9494](https://github.com/nocobase/nocobase/pull/9494)) - @jiannx
  - 新增對記錄模式觸發的 ACL 控制（單一和多筆） ([#9125](https://github.com/nocobase/nocobase/pull/9125)) - @mytharcher
- **[區塊：iframe]** 為 iframe 區塊新增 v2 支援。([#9485](https://github.com/nocobase/nocobase/pull/9485)) - @jiannx
- **[區塊：GridCard]** 更新網格卡片插件以支援 client-v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) - @jiannx
- **[AI 員工]**

  - AI 員工並行對話互動與效能最佳化 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) - @cgyrock
  - AI 員工支援並行處理多個對話 ([#9344](https://github.com/nocobase/nocobase/pull/9344)) - @cgyrock
  - 改進了 Nathan 的 RunJS 編輯工具，並減少了長時間 AI 聊天對話中的延遲 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) - @2013xile
  - 更新 AI 員工快捷任務配置，使用與工作流 AI 員工節點配置相同的技能設定元件 ([#9246](https://github.com/nocobase/nocobase/pull/9246)) - @cgyrock
  - 調整 AI 員工指令的技能/工具配置互動 ([#9232](https://github.com/nocobase/nocobase/pull/9232)) - @cgyrock
  - 更新 AI 聊天框使用者提示 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) - @heziqiang
  - 更新 AI 聊天框使用者提示 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) - @heziqiang
- **[檔案管理器]** 第三方儲存插件現在可以在 v2 檔案管理器設定頁面上註冊自己的儲存類型表單。([#9439](https://github.com/nocobase/nocobase/pull/9439)) - @Molunerfinn
- **[區塊：看板]**

  - 改進了 v2 詳細欄位間距的一致性，並使看板卡片和欄位間距更好地適應主題設定。([#9390](https://github.com/nocobase/nocobase/pull/9390)) - @jiannx
  - 減少了預設的看板欄寬度。([#9306](https://github.com/nocobase/nocobase/pull/9306)) - @jiannx
  - 改進了日曆和看板區塊建立設定。([#9294](https://github.com/nocobase/nocobase/pull/9294)) - @jiannx
- **[IdP：OAuth]** OAuth 工作階段現在使用與系統 Token 策略相同的過期設定 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) - @2013xile
- **[存取控制]** 為 acl skill 新增新的 API ([#9198](https://github.com/nocobase/nocobase/pull/9198)) - @Andrew1989Y
- **[Flow engine]** 為 UI 建置新增新的 API。([#8992](https://github.com/nocobase/nocobase/pull/8992)) - @gchust
- **[操作：自訂請求]**

  - 為自訂請求新增操作模型 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) - @jiannx
  - 事件串流支援自訂請求 ([#8749](https://github.com/nocobase/nocobase/pull/8749)) - @jiannx
- **[工作流：前置操作事件]** 為觸發器和節點新增驗證規則 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) - @mytharcher
- **[集合欄位：中國行政區劃]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) - @jiannx
- **[認證：SAML 2.0]**

  - SAML/CAS 登入重定向現在遵循現代客戶端前綴。 - @Molunerfinn
  - 為 CAS 和 SAML 認證插件新增 client-v2 入口，使其能與 v2 登入頁面和 Authenticators 設定搭配運作。 - @Molunerfinn
- **[IP 限制]** 為 IP 限制插件新增 v2 客戶端。 - @Molunerfinn
- **[自訂品牌]** 自訂品牌設定現在可在 v2 客戶端中使用 - @zhangzhonghe
- **[工作流：Webhook]** 為建立觸發器/節點 API 新增驗證 - @mytharcher
- **[工作流：子流程]**

  - 從子流程工作流指令中移除了工作流歷史記錄的事務耦合。 - @mytharcher
  - 為建立節點 API 新增驗證 - @mytharcher
- **[範本列印]** 更新列印範本集合元數據，以利版本控制備份分類。 - @cgyrock
- **[認證：OIDC]** OIDC 登入重定向現在遵循現代客戶端前綴。 - @Molunerfinn
- **[記錄歷史]** 更新記錄歷史集合元數據，以利版本控制備份分類。 - @cgyrock
- **[工作流：審批]**

  - 為審批指令新增 `async` 標記，以適配工作流畫布中新的節點建立 API - @mytharcher
  - 從審批工作流指令中移除了工作流歷史記錄的事務耦合。 - @mytharcher
  - 為審批節點建立新增驗證 - @mytharcher
  - 更新工作流審批集合元數據，以利版本控制備份分類。 - @cgyrock
  - 為觸發器/節點 API 新增驗證 - @mytharcher
  - 調整審批觸發器配置和節點配置的驗證規則，以確保 UI 欄位存在 - @mytharcher
- **[稽核日誌]** 更新稽核日誌記錄器集合元數據，以利版本控制備份分類。 - @cgyrock
- **[郵件管理器]** 更新郵件管理器集合元數據，以利版本控制備份分類。 - @cgyrock
- **[應用管理員]** 更新應用管理員集合元數據，以利版本控制備份分類。 - @cgyrock

### 🐛 錯誤修復

- **[未分類]**

  - 對齊 nginx 配置路徑 ([#9528](https://github.com/nocobase/nocobase/pull/9528)) - @chenos
  - 修復了翻譯文檔中的死鏈接，並在文檔建置中預設啟用死鏈接檢測。([#9371](https://github.com/nocobase/nocobase/pull/9371)) - @Molunerfinn
  - 修復依賴與建置工作流程，使獨立的 pro 插件檢出失敗會中斷 CI，而不是靜默跳過建置覆蓋。([#9324](https://github.com/nocobase/nocobase/pull/9324)) - @Molunerfinn
  - 修復了過於龐大的翻譯檔案，並對齊跨語言文檔結構。([#9305](https://github.com/nocobase/nocobase/pull/9305)) - @Molunerfinn
  - 修復了語言切換器在文檔站點生成不正確 URL（例如 `/cn/es/` 而非 `/es/`）的問題。([#9233](https://github.com/nocobase/nocobase/pull/9233)) - @Molunerfinn
- **[client-v2]**

  - 修復了 client-v2 顯示視圖中的 JSON 欄位為物件值渲染空白儲存格的問題。([#9714](https://github.com/nocobase/nocobase/pull/9714)) - @katherinehhh
  - 修復了 V2 選項欄位在本地化環境中錯誤翻譯純選項標籤的問題。([#9708](https://github.com/nocobase/nocobase/pull/9708)) - @katherinehhh
  - 修復了當自訂欄寬設定為 0 時，v2 表格欄位變為不可見的問題。([#9689](https://github.com/nocobase/nocobase/pull/9689)) - @katherinehhh
  - 調整所有關聯欄位選擇器，將關聯欄位限制為最多兩層 ([#9454](https://github.com/nocobase/nocobase/pull/9454)) - @jiannx
  - 修復選單聯動規則儲存錯誤 ([#9666](https://github.com/nocobase/nocobase/pull/9666)) - @zhangzhonghe
  - 修復 v2 頁面上區塊上方間距過大的問題 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) - @zhangzhonghe
  - 保留賦值欄位值 ([#9640](https://github.com/nocobase/nocobase/pull/9640)) - @katherinehhh
  - 修復子應用登入頁籤渲染原始翻譯範本的問題，並防止 v2 認證方法編輯抽屜在提交時丟失欄位值。([#9581](https://github.com/nocobase/nocobase/pull/9581)) - @Molunerfinn
  - 透過使用 CSS line-clamp 替代 antd Typography 省略號，改善插件管理器頁面效能。([#9593](https://github.com/nocobase/nocobase/pull/9593)) - @Molunerfinn
  - 修復瀏覽器語言元數據，使應用頁面遵循所選的應用語言，而不是標記為英文。([#9564](https://github.com/nocobase/nocobase/pull/9564)) - @Molunerfinn
  - 修復不一致的 dnd-kit 依賴註冊。([#9544](https://github.com/nocobase/nocobase/pull/9544)) - @jiannx
  - 修復看板插件 v2 路由因客戶端未提供 dnd-kit 依賴而無法載入的問題。([#9516](https://github.com/nocobase/nocobase/pull/9516)) - @jiannx
  - 共享的 v2 Table 元件現在預設顯示頁面大小選擇器，與 v1 行為一致。([#9512](https://github.com/nocobase/nocobase/pull/9512)) - @Molunerfinn
  - 修復表格區塊中關聯欄位的標題欄位選項列表為空的問題 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) - @katherinehhh
  - 在 v2 佈局中過濾 v1 選單後保留空群組 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) - @zhangzhonghe
  - 修復插件啟用對話框背後頁面變空白的問題 ([#9455](https://github.com/nocobase/nocobase/pull/9455)) - @zhangzhonghe
  - 修復 v1 管理頁面在生產建置中引用 v2 插件模組時崩潰的問題。([#9460](https://github.com/nocobase/nocobase/pull/9460)) - @Molunerfinn
  - 修復在欄位設定中選擇關聯欄位時的錯誤。([#9379](https://github.com/nocobase/nocobase/pull/9379)) - @gchust
  - 修復應用啟動後 404 頁面閃爍的問題 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) - @zhangzhonghe
  - 修復某些 v2 頁面無法載入遠端插件的問題 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) - @zhangzhonghe
  - 修復 v2 頁面區塊拖曳佔位符和放置位置問題 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) - @zhangzhonghe
  - 修復遠端插件載入問題，使已以 `.js` 結尾的插件 URL 不會被解析為重複的 `.js.js` 路徑。([#9336](https://github.com/nocobase/nocobase/pull/9336)) - @Molunerfinn
  - 修復 `RemoteSelect` 在綁定工作流配置中無法渲染的問題 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) - @mytharcher
- **[client]**

  - 修復重新整理頁面後區塊可能錯誤顯示為已刪除的問題 ([#9662](https://github.com/nocobase/nocobase/pull/9662)) - @zhangzhonghe
  - 修復子表單中的子表格無法新增第二行的問題 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) - @katherinehhh
  - 修復 v2 時間欄位的保留時間格式 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) - @katherinehhh
  - 增加掃描輸入圖片上傳限制 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) - @katherinehhh
  - 修同步行動日期選擇器彈出值 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) - @katherinehhh
  - 修復依賴於本地原始插件命名匯出的已建置儲存插件在開發模式下的載入問題。([#9548](https://github.com/nocobase/nocobase/pull/9548)) - @Molunerfinn
  - 修復提交後系統設定顯示為空的問題 ([#9458](https://github.com/nocobase/nocobase/pull/9458)) - @zhangzhonghe
  - 在關聯欄位的選擇彈出框中過濾非必要的可選區塊 ([#9224](https://github.com/nocobase/nocobase/pull/9224)) - @jiannx
  - 修復切換選單後頁面標題未更新的問題 ([#8864](https://github.com/nocobase/nocobase/pull/8864)) - @zhangzhonghe
- **[flow-engine]**

  - 修復懸停在關聯欄位上時欄位搜尋被清除的問題 ([#9646](https://github.com/nocobase/nocobase/pull/9646)) - @zhangzhonghe
  - 修復在搜尋框中輸入時級聯選單不穩定的問題 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) - @zhangzhonghe
  - 修復瀏覽器控制台中不正確的錯誤訊息。([#9502](https://github.com/nocobase/nocobase/pull/9502)) - @gchust
  - 修復子模型選單中不穩定的關聯欄位子選單 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) - @jiannx
  - 為設定表單項目和詳細項目新增 js 片段 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) - @jiannx
- **[建置]**

  - 伺服器建置中的文字資產現在作為檔案複製，而不是轉換為 JavaScript 模組。([#9565](https://github.com/nocobase/nocobase/pull/9565)) - @Molunerfinn
  - 修復當 v1 客戶端程式碼導入另一個插件的 `/client-v2` 入口時，插件建置失敗的問題。([#9436](https://github.com/nocobase/nocobase/pull/9436)) - @Molunerfinn
- **[cli-v1]**

  - 修復 create-nocobase-app 的開發啟動問題，透過重複使用打包的應用外殼，同時啟用本地插件開發。([#9471](https://github.com/nocobase/nocobase/pull/9471)) - @Molunerfinn
  - 修復由 create-nocobase-app 建立的應用程式中，因 app-dev 客戶端路徑解析導致的開發啟動失敗問題。([#9465](https://github.com/nocobase/nocobase/pull/9465)) - @Molunerfinn
- **[server]**

  - 修復子應用 OAuth 發現請求被路由為主應用請求的問題 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) - @2013xile
  - 支援透過主機名稱取得目標應用程式 ([#8978](https://github.com/nocobase/nocobase/pull/8978)) - @2013xile
- **[cli]**

  - 修復 CLI 布林選項，使其可以透過否定標誌停用 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) - @2013xile
  - 修復 Windows 上因授權 URL 過長導致的 CLI OAuth 登入失敗 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) - @2013xile
- **[ai]** 修復 AI 員工註冊期間缺少分類欄位設定的問題 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) - @cgyrock
- **[test]** 修復插件建置，使具有點狀套件名稱（如 `big.js`）的伺服器依賴項被打包到 `dist/node_modules` 中。([#8953](https://github.com/nocobase/nocobase/pull/8953)) - @Molunerfinn
- **[日曆]**

  - 修復在 v2 日曆區塊詳細資訊抽屜中無法新增「詳細」和「編輯」區塊的問題 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) - @jiannx
  - 修復 v2 頁面中日曆事件顏色未從配置的顏色欄位渲染的問題。([#9677](https://github.com/nocobase/nocobase/pull/9677)) - @jiannx
  - 修復日曆「更多事件」覆蓋層中事件項目的游標樣式 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) - @jiannx
  - 不要將日曆操作註冊到其他區塊 ([#9200](https://github.com/nocobase/nocobase/pull/9200)) - @jiannx
- **[AI 員工]**

  - 改進 AI 員工資料查詢提示，以在使用查詢工具前載入所需技能。([#9725](https://github.com/nocobase/nocobase/pull/9725)) - @cgyrock
  - 修復 client-v2 圖表設定中缺少 Dara 助手按鈕的問題。([#9696](https://github.com/nocobase/nocobase/pull/9696)) - @cgyrock
  - 工作流 AI 員工節點可以使用預設模型 ([#9679](https://github.com/nocobase/nocobase/pull/9679)) - @cgyrock
  - 修復 AI 員工工作流節點中的 `ctx.get` 錯誤 ([#9661](https://github.com/nocobase/nocobase/pull/9661)) - @cgyrock
  - 修復 AI 員工存取唯讀知識庫時的錯誤 ([#9538](https://github.com/nocobase/nocobase/pull/9538)) - @cgyrock
  - 修復當串流的工具事件被分割時，AI 工具呼叫卡片未立即出現的問題 ([#9534](https://github.com/nocobase/nocobase/pull/9534)) - @2013xile
  - 修復 AI 員工節點中操作員角色權限未生效的問題 ([#9513](https://github.com/nocobase/nocobase/pull/9513)) - @cgyrock
  - 修復 plugin-ai 載入錯誤 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) - @cgyrock
  - 修復工作流 AI 員工節點在工具分配後未正確結束的問題。([#9381](https://github.com/nocobase/nocobase/pull/9381)) - @cgyrock
  - 修復工作流中 AI 員工節點讀取關聯欄位附件錯誤 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) - @cgyrock
  - 修復工作流 AI 員工節點在切換 AI 員工後清除技能的問題 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) - @cgyrock
  - 修復 AI 員工快捷任務渲染錯誤 ([#9267](https://github.com/nocobase/nocobase/pull/9267)) - @cgyrock
  - 修獲取 AI 員工列表的 API 錯誤 ([#9241](https://github.com/nocobase/nocobase/pull/9241)) - @cgyrock
  - 優化了 Atlas 任務委派行為，並更新 Viz 以使用業務報告工作流程處理報告請求 ([#9229](https://github.com/nocobase/nocobase/pull/9229)) - @2013xile
  - 工作流 AI 員工：UI 調整與錯誤修復。([#9213](https://github.com/nocobase/nocobase/pull/9213)) - @cgyrock
  - 修復 AI 員工指令中的日誌記錄異常 ([#9180](https://github.com/nocobase/nocobase/pull/9180)) - @cgyrock
  - 修復 ACL 丟棄聚合查詢排序的問題 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) - @2013xile
  - 修復 AI 員工對話中未顯示錯誤訊息的問題 ([#9097](https://github.com/nocobase/nocobase/pull/9097)) - @cgyrock
  - 修復 AI 員工無法使用技能的問題 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) - @cgyrock
  - 修復在 getSkill 工具停用後，LLM 仍嘗試載入技能的問題 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) - @cgyrock
  - 修復核心套件中 ai 模組失敗的測試案例。([#8941](https://github.com/nocobase/nocobase/pull/8941)) - @cgyrock
- **[資料來源管理器]**

  - 修復在變更標題欄位後重新開啟 v2 資料來源欄位配置抽屜時，標題欄位顯示過時的問題。([#9720](https://github.com/nocobase/nocobase/pull/9720)) - @katherinehhh
  - 改進了 V2 資料來源管理器在集合、欄位、同步和表格載入操作失敗時的錯誤訊息。([#9710](https://github.com/nocobase/nocobase/pull/9710)) - @katherinehhh
  - 修復 v2 資料來源管理器中的多空間欄位本地化問題。([#9690](https://github.com/nocobase/nocobase/pull/9690)) - @jiannx
  - 優化 MCP 工具命名並減少冗餘的 API 回應，以避免過度消耗 AI 對話上下文 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) - @2013xile
- **[區塊：地圖]** 修復啟用地圖插件後，v2 資料來源管理器「新增欄位」選單中缺少地圖幾何欄位的問題。([#9715](https://github.com/nocobase/nocobase/pull/9715)) - @katherinehhh
- **[集合：SQL]** 阻止 SQL 集合存取敏感的 PostgreSQL 元數據 ([#9683](https://github.com/nocobase/nocobase/pull/9683)) - @2013xile
- **[工作流：自訂操作事件]**

  - 修復工作台操作面板按鈕列表中缺少工作流觸發器操作的問題。([#9682](https://github.com/nocobase/nocobase/pull/9682)) - @katherinehhh
  - 修復 v2 區塊操作選單中重複的「觸發工作流」選項 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) - @zhangzhonghe
  - 根據當前區塊集合篩選自訂操作工作流綁定選項。([#9610](https://github.com/nocobase/nocobase/pull/9610)) - @mytharcher
- **[操作：複製記錄]** 在提交失敗時重設按鈕狀態 ([#9676](https://github.com/nocobase/nocobase/pull/9676)) - @katherinehhh
- **[區塊：甘特圖]**

  - 改進了甘特圖工具提示的放置位置，以避免遮擋任務條，並使任務標籤在條內外一致對齊 ([#9638](https://github.com/nocobase/nocobase/pull/9638)) - @jiannx
  - 修復 v2 甘特圖共享資料夾路徑，並新增斑馬紋。([#9621](https://github.com/nocobase/nocobase/pull/9621)) - @jiannx
- **[授權設定]**

  - 為授權設定和商業授權注入新增 client-v2 支援。([#9555](https://github.com/nocobase/nocobase/pull/9555)) - @jiannx
  - 解析符號連結的捆綁依賴項 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) - @chenos
- **[檔案管理器]** 改進了 PDF 預覽失敗訊息，並記錄了外部儲存的 CORS 要求。([#9600](https://github.com/nocobase/nocobase/pull/9600)) - @mytharcher
  參考：[檔案預覽](docs/docs/en/file-manager/file-preview/index.md)
- **[區塊：iframe]** 修復 iframe 內容未填滿配置區塊高度的問題 ([#9540](https://github.com/nocobase/nocobase/pull/9540)) - @katherinehhh
- **[操作：匯出記錄]** 改善具有許多關聯欄位時的欄位配置效能 ([#9524](https://github.com/nocobase/nocobase/pull/9524)) - @katherinehhh
- **[本地化]** 修復 AI 翻譯任務的內建本地化參考翻譯 ([#9531](https://github.com/nocobase/nocobase/pull/9531)) - @2013xile
- **[認證]** 防止當 WebSocket 認證 Token 引用了一個其認證類型插件已卸載或遺失的認證器時，伺服器崩潰。([#9514](https://github.com/nocobase/nocobase/pull/9514)) - @Molunerfinn
- **[工作流：JavaScript]**

  - 修復生產建置中工作流 JavaScript QuickJS 執行時期套件載入問題。([#9503](https://github.com/nocobase/nocobase/pull/9503)) - @mytharcher
  - 修復配置 JavaScript 節點時拋出錯誤的問題 ([#9169](https://github.com/nocobase/nocobase/pull/9169)) - @mytharcher
- **[區塊：Markdown]** 修復 v2 Markdown 區塊報錯的問題 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) - @zhangzhonghe
- **[區塊：樹]**

  - 改進了樹狀篩選區塊設定，並修復了不支援的關聯、標題欄位回退和搜尋重置行為。([#9426](https://github.com/nocobase/nocobase/pull/9426)) - @jiannx
  - 修復篩選區塊節點顯示異常 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) - @jiannx
- **[行動端 (已棄用)]** 修復行動端訊息彈出視窗無法關閉或滾動的問題 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) - @zhangzhonghe
- **[AI：MCP 伺服器]**

  - 修復 MCP 伺服器打包，使其包含執行時期依賴項 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) - @2013xile
  - 修復 MCP 通用 CRUD 工具中因不相關的轉發標頭導致的認證不匹配問題 ([#8983](https://github.com/nocobase/nocobase/pull/8983)) - @2013xile
  - 修復從 Swagger 生成的 MCP 工具，當輸入 schema 包含 `null` 類型或 `nullable` 標記（這對 OpenAI 工具驗證無效）時的問題 ([#8994](https://github.com/nocobase/nocobase/pull/8994)) - @2013xile
- **[Flow engine]** 修復 AI 生成的區塊無法從參考範本轉換回重複範本的問題。([#9392](https://github.com/nocobase/nocobase/pull/9392)) - @gchust
- **[區塊：看板]**

  - 改進了看板卡片緊湊樣式，並優化了快速建立彈出視窗的範本選擇。([#9370](https://github.com/nocobase/nocobase/pull/9370)) - @jiannx
  - 修復看板關聯區塊在彈出視窗或次要頁面上下文中使用未解析的執行時期資源參數的問題。([#9350](https://github.com/nocobase/nocobase/pull/9350)) - @jiannx
  - 修復欄位配置浮動層重複顯示的問題 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) - @jiannx
- **[操作：自訂請求]** 將 Koa 升級至 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) - @chenos
- **[資料視覺化]** 修復流程頁面上圖表查詢配置中空的欄位選擇器 ([#9276](https://github.com/nocobase/nocobase/pull/9276)) - @2013xile
- **[IdP：OAuth]**

  - 修復 OAuth CLI 登入失敗，並將動態註冊限制為本地回調 URL ([#9248](https://github.com/nocobase/nocobase/pull/9248)) - @2013xile
  - 修復服務重啟後 OAuth 客戶端註冊和 Token 刷新失敗 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) - @2013xile
  - 修復常規 API 請求的 OAuth 存取 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) - @2013xile
  - 修復子應用程式中 MCP OAuth 登入後的重定向不正確 ([#9015](https://github.com/nocobase/nocobase/pull/9015)) - @2013xile
- **[工作流：聚合節點]** 修復因驗證規則不正確導致聚合節點無法儲存的問題 ([#9208](https://github.com/nocobase/nocobase/pull/9208)) - @mytharcher
- **[工作流：循環節點]** 修復工作流節點的驗證 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) - @mytharcher
- **[存取控制]** 為 MCP 伺服器更新 acl swagger ([#9096](https://github.com/nocobase/nocobase/pull/9096)) - @Andrew1989Y
- **[工作流：郵件發送節點]** 修復變數欄位的驗證 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) - @mytharcher
- **[工作流]**

  - 修復條件指令的驗證規則不正確 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) - @mytharcher
  - 修復集合觸發器的模式無法設定為「建立或更新」的問題 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) - @mytharcher
- **[密碼策略]** 修復當底層錯誤沒有狀態碼時，登入失敗會以「argument #1 unsupported type undefined」掩蓋真實錯誤的問題。 - @Molunerfinn
- **[資料來源：REST API]** 修復因資料來源管理器 client-v2 類型宣告不匹配導致的 REST API 資料來源插件宣告建置失敗。 - @katherinehhh
- **[plugin-commercial]** 新增 client-v2 商業授權元件和頂欄授權狀態入口。 - @jiannx
- **[認證：SAML 2.0]** 修復 SAML 自動重定向攔截器在每次導航時閃爍應用外殼並雙重開啟抽屜的問題。 - @Molunerfinn
- **[工作流：Webhook]** 修復因 `statusCode` 配置驗證攔截而無法建立回應節點的問題 - @mytharcher
- **[遷移管理器]** 修復 `migration:create` 從非同步任務記錄返回 `taskId` 的問題。 - @Andrew1989Y
- **[範本列印]** 修復範本列印 PDF 轉換錯誤未正確返回客戶端的問題 - @jiannx
- **[郵件管理器]**

  - 郵件發送後未顯示關閉確認 - @jiannx
  - 修復郵件身份標題顯示 - @jiannx

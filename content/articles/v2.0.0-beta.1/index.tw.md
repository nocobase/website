---
title: "NocoBase v2.0.0-beta.1：支援應用程式進入維護狀態時，由插件定義的維護元件"
description: "v2.0.0-beta.1 版本發行說明"
---

### 🎉 新功能

- **[未分類]** 新增實驗性的「引用區塊」插件，允許透過引用或複製來重用現有區塊。([#7584](https://github.com/nocobase/nocobase/pull/7584)) by @gchust

- **[客戶端]**
  - 支援在應用程式進入維護狀態時，使用插件定義的維護元件 ([#8252](https://github.com/nocobase/nocobase/pull/8252)) by @cgyrock

  - 建立資料表時，可更改預設的 ID 欄位類型 ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock

  - 在多對多子表單中新增新增/選擇/解除關聯設定支援 ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh

  - 支援在主題編輯器中自訂全域樣式 ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo

  - 支援在詳情區塊中設定預設排序規則 ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh

  - 支援為數字欄位設定資料類型（選項：double、float、decimal）([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos

  - 支援表格中的欄位排序 ([#7900](https://github.com/nocobase/nocobase/pull/7900)) by @katherinehhh

  - 為關聯欄位選擇器新增快速建立支援 ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh

  - 支援樹集合關聯欄位的級聯選擇器 ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh

  - 支援拖曳表格欄位操作 ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe

  - 為子表格新增分頁支援 ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

  - 事件流程：引入新的預定義動作，增強事件處理的自訂選項，允許用戶簡化工作流程並提高效率 ([#7672](https://github.com/nocobase/nocobase/pull/7672)) by @zhangzhonghe

  - 新增 2.0 Markdown 區塊 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) by @katherinehhh

  - 支援為子表單設定聯動規則 ([#7640](https://github.com/nocobase/nocobase/pull/7640)) by @zhangzhonghe

  - 新增表格行點擊事件監聽器支援，使用戶能夠在點擊表格中的行時執行特定操作 ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe

  - 新增自訂變數支援 ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe

  - 新增「目前裝置類型」變數 ([#7576](https://github.com/nocobase/nocobase/pull/7576)) by @zhangzhonghe

- **[檔案管理]** 支援檔案重新命名方法配置 ([#8231](https://github.com/nocobase/nocobase/pull/8231)) by @JAVA-LW

- **[工作流]**
  - 在工作流程中新增新的系統變數，包括 `instanceId` 和 `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

  - 新增「多條件」節點，提供類似 `switch` / `case` 的流程控制 ([#7878](https://github.com/nocobase/nocobase/pull/7878)) by @mytharcher

- **[區塊：地圖]** 新增 2.0 地圖區塊 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) by @katherinehhh

- **[資料視覺化]**
  - 新增用於配置圖表的 AI 員工 ([#7815](https://github.com/nocobase/nocobase/pull/7815)) by @heziqiang

  - 新增圖表 SQL 資料源 ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

  - 新增圖表類型「甜甜圈圖」([#7629](https://github.com/nocobase/nocobase/pull/7629)) by @heziqiang

- **[流程引擎]** 支援在 SQL 語句中使用 LiquidJS 模板字串 ([#7667](https://github.com/nocobase/nocobase/pull/7667)) by @2013xile

- **[資料源管理器]**
  - 主資料源現在支援直接從主資料庫讀取資料庫表，並允許修改欄位介面 ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie

  - 主資料源現在支援直接從主資料庫讀取資料庫表，並允許修改欄位介面 ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie

- **[區塊：網格卡片]** 新增 2.0 網格卡片區塊 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) by @katherinehhh

- **[區塊：列表]** 新增 2.0 列表區塊 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) by @katherinehhh

- **[區塊：操作面板]** 新增 2.0 操作面板區塊 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) by @katherinehhh

- **[AI 員工]** 改進 plugin-ai 的網路搜尋功能 ([#7580](https://github.com/nocobase/nocobase/pull/7580)) by @cgyrock

- **[遙測]** 新增插件：Telemetry，一個基於 OpenTelemetry 的遙測插件，提供 CPU、記憶體和 HTTP 請求指標，並支援 HTTP 匯出 by @2013xile

- **[表單草稿]** 表單草稿 by @chenos

- **[檔案儲存：S3(Pro)]** 為 S3 Pro 儲存新增重新命名模式選項 by @mytharcher

- **[工作流：審批]**
  - 允許選擇在審批流程 UI 中顯示快照或最新記錄 by @mytharcher

  - 新增受眾配置，以控制誰可以發起審批 by @mytharcher

- **[郵件管理器]** 郵件管理 2.0 實作 by @jiannx

### 🚀 改進

- **[未分類]**
  - 更新圖表插件的英文文件 ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang

  - 更新圖表概覽文件 ([#7702](https://github.com/nocobase/nocobase/pull/7702)) by @heziqiang

- **[流程引擎]**
  - 在 runjs 環境中支援 `window.location.reload` 方法。([#8316](https://github.com/nocobase/nocobase/pull/8316)) by @gchust

  - 最佳化切換配置模式時的性能問題 ([#8241](https://github.com/nocobase/nocobase/pull/8241)) by @zhangzhonghe

  - 在 runjs 環境中支援 FormData 物件。([#8263](https://github.com/nocobase/nocobase/pull/8263)) by @gchust

  - 支援動態隱藏步驟配置選單 ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust

  - 為 FlowModelRenderer 新增 useCache 選項 ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe

  - 新增 `removeModelWithSubModels` 方法以遞迴移除模型及其子模型 ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe

  - 支援動態切換流程模型類別 ([#7952](https://github.com/nocobase/nocobase/pull/7952)) by @gchust

  - 支援在流程引擎中監聽流程模型樹變更事件。([#7905](https://github.com/nocobase/nocobase/pull/7905)) by @gchust

  - 改進目前記錄變數解析，使開啟對話框更快 ([#7895](https://github.com/nocobase/nocobase/pull/7895)) by @gchust

  - 最佳化 runjs 上下文中第三方函式庫的 API 結構，並新增對 Antd 圖示庫的支援。([#7896](https://github.com/nocobase/nocobase/pull/7896)) by @gchust

  - 最佳化工具列樣式，防止圖示被遮擋 ([#7883](https://github.com/nocobase/nocobase/pull/7883)) by @zhangzhonghe

  - 最佳化頁面頁籤的工具列樣式 ([#7795](https://github.com/nocobase/nocobase/pull/7795)) by @zhangzhonghe

  - 支援流程模型中的延遲操作 ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust

  - 改進了複製 UID 失敗時顯示的錯誤訊息，提供了更清晰的解決問題說明。([#7718](https://github.com/nocobase/nocobase/pull/7718)) by @gchust

  - 支援在流程步驟定義中定義變數上下文 ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust

  - 支援透過在 URL 查詢字串中添加 `skipRunJs=true` 來跳過 runjs 流程步驟。([#7638](https://github.com/nocobase/nocobase/pull/7638)) by @gchust

  - 支援彈出視窗變數 ([#7583](https://github.com/nocobase/nocobase/pull/7583)) by @gchust

  - 標準化自動工作流程，使其一致地由 "beforeRender" 事件觸發，確保跨流程的可預測和統一操作。([#7577](https://github.com/nocobase/nocobase/pull/7577)) by @gchust

  - 透過更豐富的程式碼片段和針對各種場景的上下文感知程式碼補全，增強程式碼編輯體驗 ([#7559](https://github.com/nocobase/nocobase/pull/7559)) by @gchust

  - 最佳化拖放功能 ([#7526](https://github.com/nocobase/nocobase/pull/7526)) by @zhangzhonghe

- **[SDK]** 改進 API 儲存實作 ([#8308](https://github.com/nocobase/nocobase/pull/8308)) by @chenos

- **[客戶端]**
  - 支援 JS 程式碼編輯器的全螢幕模式。([#8294](https://github.com/nocobase/nocobase/pull/8294)) by @gchust

  - 使「新增子項」等同於對應子關聯的「新增」([#8272](https://github.com/nocobase/nocobase/pull/8272)) by @katherinehhh

  - 支援清除顏色欄位的預設值 ([#8268](https://github.com/nocobase/nocobase/pull/8268)) by @katherinehhh

  - 對操作列寬度配置使用選擇器 ([#8218](https://github.com/nocobase/nocobase/pull/8218)) by @katherinehhh

  - 支援表格欄位的自訂列寬 ([#8200](https://github.com/nocobase/nocobase/pull/8200)) by @katherinehhh

  - 將表格列寬更改為使用可選選項 ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh

  - 使用 maxTagCount 改進 recordPicker 樣式 ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh

  - 最佳化配置選項（區塊、欄位、操作）([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh

  - 支援百分比欄位的數字格式化 ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh

  - 修復移除行後子表格分頁跳轉問題，並新增對欄位驗證規則的支援 ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh

  - 調整可編輯子表格中的大欄位顯示 ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh

  - 支援對溢出的 JSON 欄位內容使用省略號 ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh

  - 支援附件上傳元件中的 allowMultiple 設定 ([#8052](https://github.com/nocobase/nocobase/pull/8052)) by @katherinehhh

  - 在 Select 元件中懸停時顯示折疊的選項 ([#8030](https://github.com/nocobase/nocobase/pull/8030)) by @katherinehhh

  - 支援在圖表查詢中初始化選定的篩選欄位 ([#7933](https://github.com/nocobase/nocobase/pull/7933)) by @heziqiang

  - 為行動裝置適配元件 ([#7870](https://github.com/nocobase/nocobase/pull/7870)) by @zhangzhonghe

  - 在 RunJS 腳本上下文中新增對 Day.js 函式庫的支援，使日期和時間操作更簡單。([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

  - 將頁面資訊版本新增至流程引擎上下文 ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust

  - 增強 Markdown 編輯器 ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh

  - 在 2.0 中適配 tableoid 欄位 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh

  - 在 JS 程式碼編輯器中支援 JSX ([#7699](https://github.com/nocobase/nocobase/pull/7699)) by @gchust

  - 在 JS 欄位模型中支援關聯欄位 ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust

- **[伺服器]** 在獲取應用程式維護訊息時，為缺少應用程式實例導致錯誤的情況新增容錯機制 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile

- **[ACL]** 支援 `acl.registerSnippet` API 以合併片段配置 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher

- **[遙測]**
  - 支援控制匯出哪些指標 ([#7938](https://github.com/nocobase/nocobase/pull/7938)) by @2013xile

  - 新增線上子應用程式數量等遙測指標 ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile

- **[資料庫]** 重構欄位加密插件以增強安全性，支援應用程式金鑰生成和輪換，以及每個欄位的加密金鑰。([#7769](https://github.com/nocobase/nocobase/pull/7769)) by @cgyrock

- **[AI 員工]**
  - 改進工作流程中 LLM 節點的 Gemini 相容性。<br/>最佳化 AI 工具 dataSourceQuery 以處理大規模資料。<br/>解決資料建模問題。<br/>新增 AI 建議工具。 ([#8249](https://github.com/nocobase/nocobase/pull/8249)) by @heziqiang

  - 修復 AI 員工在首次編輯提交時無回應的問題<br/>刪除不必要的內建 AI 員工「Avery Form Assistant」<br/>為內建 AI 員工新增預設初始角色權限<br/>改進 AI 員工錯誤處理和輸出行為<br/>新增 AI 存取模態上下文變數的支援<br/>新增 AI 的外部資料源支援<br/>修復 AI 處理大量資料時對話截斷不正確的問題 ([#8191](https://github.com/nocobase/nocobase/pull/8191)) by @heziqiang

  - 啟用了內建 AI 助手系統提示詞的編輯功能。<br/>最佳化了 Nathan AI 助手的系統提示詞。<br/>修復了伺服器讀取靜態檔案失敗的問題。([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang

  - 在新增 LLM 表單中新增遺失的 provider 欄位 ([#8049](https://github.com/nocobase/nocobase/pull/8049)) by @heziqiang

  - AI 員工插件新增升級鉤子 ([#7951](https://github.com/nocobase/nocobase/pull/7951)) by @heziqiang

  - 改進 AI 員工互動邏輯並最佳化任務配置流程 ([#7707](https://github.com/nocobase/nocobase/pull/7707)) by @cgyrock

  - AI 員工可以根據表格區塊元資料自主查詢資料 ([#7703](https://github.com/nocobase/nocobase/pull/7703)) by @cgyrock

  - 最佳化 AI 編碼體驗，包括使用 AI 員工審查、診斷和修復程式碼。([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock

  - 將 OpenAI LLM Provider 重構為兩個獨立的 Provider，以支援 OpenAI 的 Completions 和 Responses API。([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock

  - 新增 LLM Provider Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96

  - AI 編碼最佳化 ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock

  - 在行動版佈局中為聊天框新增最小化按鈕 ([#7595](https://github.com/nocobase/nocobase/pull/7595)) by @cgyrock

- **[UI 模板]**
  - 為詳情區塊新增欄位模板支援。([#8247](https://github.com/nocobase/nocobase/pull/8247)) by @gchust

  - 新增 UI 模板插件，提供重用區塊模板和彈出視窗模板的能力。([#8163](https://github.com/nocobase/nocobase/pull/8163)) by @gchust

- **[工作流]**
  - 在複製 API 中新增原始工作流程實例 ([#8225](https://github.com/nocobase/nocobase/pull/8225)) by @mytharcher

  - 改進集合事件中 `changed` 欄位的描述 ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher

  - 支援在複製的工作流程中使用舊配置建立新配置 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

  - 為處理器準備階段的資料遺失新增容錯邏輯，以避免執行掛起 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher

  - 在工作流程畫布上對關聯資料使用延遲載入以提升效能 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher

  - 完成更新記錄操作按鈕的綁定工作流程配置 ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher

- **[非同步任務管理器]**
  - 透過新增異常捕獲機制來改進清理任務期間的錯誤處理，以防止應用程式崩潰 ([#8215](https://github.com/nocobase/nocobase/pull/8215)) by @mytharcher

  - 子應用程式的非同步任務應僅在 Workers 中啟動目標子應用程式 ([#7927](https://github.com/nocobase/nocobase/pull/7927)) by @2013xile

- **[區塊：操作面板]** 改進配置模式下隱藏區塊、操作和欄位的顯示 ([#8174](https://github.com/nocobase/nocobase/pull/8174)) by @katherinehhh

- **[區塊：列表]** 為表格、列表和網格卡片區塊新增連結按鈕 ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh

- **[錯誤處理器]** 不要在 SQL 語法錯誤時暴露原始資料庫錯誤訊息，以避免洩露資料庫類型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile

- **[區塊：地圖]** 支援文字顯示模式下地圖欄位的文字溢出省略號 ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh

- **[存取控制]** 禁止將 root 角色指派給使用者 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

- **[區塊：網格卡片]**
  - 最佳化網格卡片區塊樣式，實現更緊湊的佈局 ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh

  - 為網格卡片新增行數配置，並將 pageSize 替換為自動計算 ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh

- **[集合欄位：Markdown(Vditor)]** 在 readPretty 模式下，預設停用 Markdown 欄位中的變數解析 ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh

- **[操作：匯入記錄]** 允許為匯入欄位選擇 ID ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh

- **[資料視覺化]**
  - 更新警報提示和事件程式碼模板註解 ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang

  - 新增圖表資料時間格式選項 ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang

  - 在配置圖表選項前新增執行查詢的提示 ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang

  - 點擊全域預覽按鈕時重新整理圖表資料 ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang

  - 更新 plugin-data-vi 2.0，修復一些問題並最佳化 UI。([#7597](https://github.com/nocobase/nocobase/pull/7597)) by @heziqiang

  - 擴展圖表類型；最佳化 UI 和互動體驗。([#7581](https://github.com/nocobase/nocobase/pull/7581)) by @heziqiang

- **[多應用管理器（已棄用）]**
  - 啟用使用佇列的非同步子應用程式啟動 ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile

  - 改進應用程式管理器 ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos

- **[資料源管理器]** 調整欄位類型和介面的列順序，並在進行修改時新增確認步驟。([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile

- **[多空間]** 使用 api.storage 取代 localstorage，權限控制重構與錯誤修復 by @jiannx

- **[操作：匯出記錄 Pro]** 匯入 Pro 和匯出 Pro 操作支援權限控制 by @katherinehhh

- **[遙測：Prometheus]** 升級 `@opentelemetry/exporter-prometheus` by @2013xile

- **[集合欄位：加密]** 最佳化欄位加密插件，支援使用獨立 IV 進行資料檢索 by @cgyrock

- **[工作流：審批]**
  - 在執行結束時，將 `approval.data` 更新為審批記錄的最新版本，以符合「最新」記錄顯示模式 by @mytharcher

  - 更改 API 以獲取單個審批項目，並簡化程式碼 by @mytharcher

- **[遷移管理器]** 改進了遷移檢查、SQL 下載支援、日誌格式化和執行過程可見性 by @cgyrock

### 🐛 錯誤修復

- **[未分類]**
  - 修復深色模式下插件文件首頁樣式不正確的問題。([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust

  - 路由路徑匹配支援新的多個應用程式 ([#7570](https://github.com/nocobase/nocobase/pull/7570)) by @jiannx

  - 修復引用區塊會將被引用區塊從原始頁面移除的問題。([#7969](https://github.com/nocobase/nocobase/pull/7969)) by @gchust

- **[客戶端]**
  - 修復詳情區塊子詳情對話框中資料不正確的問題 ([#8318](https://github.com/nocobase/nocobase/pull/8318)) by @katherinehhh

  - 修復連續開啟聯動規則和事件流程配置彈出視窗後，關閉目前彈出視窗時發生錯誤的問題。([#8312](https://github.com/nocobase/nocobase/pull/8312)) by @gchust

  - 修復連續開啟聯動規則和事件流程配置彈出視窗後，關閉目前彈出視窗時發生錯誤的問題。([#8312](https://github.com/nocobase/nocobase/pull/8312)) by @gchust

  - 修復表格區塊中快速編輯切換的變更需要重新整理頁面才能生效的問題。([#8311](https://github.com/nocobase/nocobase/pull/8311)) by @gchust

  - 修復使用 URL 查詢參數作為資料範圍的區塊，在選單切換時查詢參數變更後未正確重新整理的問題。([#8310](https://github.com/nocobase/nocobase/pull/8310)) by @gchust

  - 修復關聯欄位元件中的權限問題 ([#8243](https://github.com/nocobase/nocobase/pull/8243)) by @katherinehhh

  - 修復詳情區塊分頁時子詳情資料未更新的問題 ([#8305](https://github.com/nocobase/nocobase/pull/8305)) by @katherinehhh

  - 修復編輯表單中切換頁面時巢狀子表格內容未更新的問題 ([#8304](https://github.com/nocobase/nocobase/pull/8304)) by @katherinehhh

  - 修復彈出視窗無法開啟的問題並改善導航穩定性 ([#8287](https://github.com/nocobase/nocobase/pull/8287)) by @zhangzhonghe

  - 修復從 Select 元件切換到 Array Subform 元件時的錯誤 ([#8301](https://github.com/nocobase/nocobase/pull/8301)) by @katherinehhh

  - 禁止透過 JS Field 將關聯欄位新增至表單區塊。([#8296](https://github.com/nocobase/nocobase/pull/8296)) by @gchust

  - 修復記錄更新操作後資料會多次重新整理的問題。([#8299](https://github.com/nocobase/nocobase/pull/8299)) by @gchust

  - 修復子表單中新增的資料被選取的資料覆蓋的問題 ([#8292](https://github.com/nocobase/nocobase/pull/8292)) by @katherinehhh

  - 修復在詳情區塊中編輯記錄後 JS Item 未重新整理的問題。([#8291](https://github.com/nocobase/nocobase/pull/8291)) by @gchust

  - 修復資料選擇器欄位元件彈出視窗中新增的記錄未重新整理的問題。([#8289](https://github.com/nocobase/nocobase/pull/8289)) by @gchust

  - 修復隱藏狀態下 JS 區塊的渲染錯誤。([#8286](https://github.com/nocobase/nocobase/pull/8286)) by @gchust

  - 修復 m2m 欄位的篩選表單區塊設定中拋出錯誤的問題 ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher

  - 修復 m2m 欄位的篩選表單區塊設定中拋出錯誤的問題 ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher

  - 修復刪除關聯欄位後防止區塊錯誤 ([#8273](https://github.com/nocobase/nocobase/pull/8273)) by @katherinehhh

  - 修復篩選表單預設值在初始渲染時未觸發篩選的問題 ([#8232](https://github.com/nocobase/nocobase/pull/8232)) by @zhangzhonghe

  - 修復顯示關聯欄位延遲載入時因無限迴圈導致的堆疊溢位 ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe

  - 處理空的聯動規則以防止錯誤 ([#8239](https://github.com/nocobase/nocobase/pull/8239)) by @zhangzhonghe

  - 修復表格區塊的操作列無法移除的問題。([#8230](https://github.com/nocobase/nocobase/pull/8230)) by @gchust

  - 修復預覽執行將編譯後的 JSX 輸出寫回 stepParams，導致儲存的原始碼被重寫的問題。([#8171](https://github.com/nocobase/nocobase/pull/8171)) by @gchust

  - 修復 S3 Pro 附件上傳錯誤並改進檔案預覽 ([#8211](https://github.com/nocobase/nocobase/pull/8211)) by @katherinehhh

  - 防止調整列寬時行總寬度溢出 ([#8166](https://github.com/nocobase/nocobase/pull/8166)) by @zhangzhonghe

  - 修復為複選框篩選選擇「否」時仍套用「是」篩選的問題。([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust

  - 修復當角色具有建立權限時，建立表單中未顯示提交按鈕的問題 ([#8190](https://github.com/nocobase/nocobase/pull/8190)) by @katherinehhh

  - 防止在未選擇任何項目時提交，導致現有子表格/子表單資料被清除 ([#8172](https://github.com/nocobase/nocobase/pull/8172)) by @katherinehhh

  - 防止在建立表單配置中出現資料範圍設定 ([#8176](https://github.com/nocobase/nocobase/pull/8176)) by @katherinehhh

  - 修復表單區塊中 tableoid 欄位的渲染問題 ([#8177](https://github.com/nocobase/nocobase/pull/8177)) by @katherinehhh

  - 無法儲存頁籤事件流程 ([#8168](https://github.com/nocobase/nocobase/pull/8168)) by @chenos

  - 移除頁籤隱藏後的多餘間距 ([#8167](https://github.com/nocobase/nocobase/pull/8167)) by @chenos

  - 修復關聯記錄選擇器中選項篩選不正確的問題 ([#8151](https://github.com/nocobase/nocobase/pull/8151)) by @katherinehhh

  - 修復當選項欄位存在時關聯欄位下拉選單被停用的問題 ([#8153](https://github.com/nocobase/nocobase/pull/8153)) by @katherinehhh

  - 修切換標籤欄位導致彈出視窗配置遺失的問題。([#8136](https://github.com/nocobase/nocobase/pull/8136)) by @gchust

  - 修復在篩選表單區塊中對單選欄位使用多選運算子時，輸入中文文字會清除現有選項的問題。([#8140](https://github.com/nocobase/nocobase/pull/8140)) by @gchust

  - 修復 `RemoteSelect` 元件在值為 null 時錯誤載入記錄的問題 ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher

  - 修復防止子項禁用狀態阻止關聯欄位選擇的問題 ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh

  - 修復篩選表單區塊中預設欄位標籤無法正確多語言翻譯的問題。([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust

  - 修復日期篩選欄位選擇「過去」或「未來」時 UI 元件寬度不一致的問題。([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust

  - 修復 JS 區塊的標題和描述樣式與其他區塊不一致的問題。([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust

  - 修復長文字欄位工具提示換行問題 ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh

  - 修復對基於選項的欄位使用「是任一」或「不是任一」運算子時，可選選項未完整列出的問題。([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust

  - 修復子表單中的巢狀子表格未顯示資料的問題 ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh

  - 修復清除 between 時間篩選值並再次觸發篩選時導致錯誤的問題。([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust

  - 修復篩選表單區塊中關聯欄位的可選資料不正確的問題。([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust

  - 修復篩選表單中自訂欄位配置未正確預填且某些設定未生效的問題。([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust

  - 修復對 Checkbox 欄位進行篩選未生效的問題。([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust

  - 修復篩選操作中數字欄位值未正確預填的問題。([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust

  - 修復篩選表單中某些欄位運算子無法正確篩選資料的問題。([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust

  - 修復從已移除區塊配置的欄位未從篩選區塊中刪除的問題。([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust

  - 修復非配置模式下按鈕隱藏時出現多餘間距的問題 ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh

  - 修復篩選表單區塊中重設按鈕文字無法修改的問題。([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust

  - 修復使用 $in 或 $notIn 運算子進行欄位篩選時，欄位輸入不支援多值的問題。([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust

  - 修復新增的資料區塊未自動出現在篩選表單區塊欄位選單中的問題。([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust

  - 篩選表單中關聯欄位的配置選單不應顯示快速建立選項。([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust

  - 修復 List 區塊中關聯子表格資料的問題 ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh

  - 修復來自集合設定的數字欄位驗證規則未套用的問題 ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh

  - 修復篩選表單中的欄位受到後端欄位驗證規則限制的問題。([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust

  - 修復子表格編輯中大欄位顯示問題 ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh

  - 修復在關聯記錄選擇器中停用 allowMultiple 時快速建立拋出錯誤的問題 ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh

  - JSON 欄位快速編輯問題 ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh

  - 修復 JSON 欄位應作為物件提交的問題 ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh

  - 修復無法使用 Enter 鍵觸發篩選操作的問題。([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust

  - 修復在多對多關聯記錄選擇器中停用 allowMultiple 後顯示 N/A 的問題 ([#8050](https://github.com/nocobase/nocobase/pull/8050)) by @katherinehhh

  - 修復在記錄選擇器區塊中刪除記錄失敗的問題 ([#8023](https://github.com/nocobase/nocobase/pull/8023)) by @katherinehhh

  - 修復新增評論區塊時出現目前記錄選單的問題。([#8039](https://github.com/nocobase/nocobase/pull/8039)) by @gchust

  - 修復在篩選操作中將日期欄位切換為時間欄位導致渲染錯誤的問題。([#8036](https://github.com/nocobase/nocobase/pull/8036)) by @gchust

  - 修復編輯和新增操作彈出視窗的預設標題不正確的問題。([#8033](https://github.com/nocobase/nocobase/pull/8033)) by @gchust

  - 修復詳情區塊中 JS 欄位的預設樣式不正確的問題。([#8031](https://github.com/nocobase/nocobase/pull/8031)) by @gchust

  - 修復子表格列寬未套用的問題 ([#8027](https://github.com/nocobase/nocobase/pull/8027)) by @katherinehhh

  - 修復子表格列拖曳不起作用的問題 ([#8026](https://github.com/nocobase/nocobase/pull/8026)) by @katherinehhh

  - 修復透過關聯欄位開啟的彈出視窗中，目前彈出記錄變數無法正確解析的問題。([#8019](https://github.com/nocobase/nocobase/pull/8019)) by @gchust

  - 修復 Markdown 顯示欄位彈出樣式問題 ([#8012](https://github.com/nocobase/nocobase/pull/8012)) by @katherinehhh

  - 解決在彈出視窗中載入關聯欄位資料時導致錯誤的問題，確保資料顯示和功能更順暢。([#7985](https://github.com/nocobase/nocobase/pull/7985)) by @gchust

  - 修復樹狀表格區塊無法展開子節點的問題 ([#8011](https://github.com/nocobase/nocobase/pull/8011)) by @katherinehhh

  - 修復複合主鍵表格區塊的選擇和刪除問題 ([#7978](https://github.com/nocobase/nocobase/pull/7978)) by @katherinehhh

  - 修復頁面頁籤狀態和路由不對應的問題 ([#7991](https://github.com/nocobase/nocobase/pull/7991)) by @zhangzhonghe

  - 修復 HTML 模式下 Markdown 欄位省略時的顯示問題 ([#7994](https://github.com/nocobase/nocobase/pull/7994)) by @katherinehhh

  - 修復級聯選擇器中搜尋結果不完整的問題 ([#7990](https://github.com/nocobase/nocobase/pull/7990)) by @katherinehhh

  - 修復為非 ID 關聯欄位在彈出視窗中開啟詳情區塊時導致錯誤的問題。([#7973](https://github.com/nocobase/nocobase/pull/7973)) by @gchust

  - 修復非 ID 關聯欄位的彈出視窗中關聯資料無法正確載入的問題。([#7970](https://github.com/nocobase/nocobase/pull/7970)) by @gchust

  - 修復數字欄位格式精度設定無效的問題 ([#7967](https://github.com/nocobase/nocobase/pull/7967)) by @katherinehhh

  - 修復點擊重設按鈕時篩選值未清除的問題 ([#7966](https://github.com/nocobase/nocobase/pull/7966)) by @zhangzhonghe

  - 修復新的 2.0 頁面中打字錯誤 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) by @zhangzhonghe

  - 修復詳情區塊中文字欄位在內容超出寬度時自動換行的問題 ([#7955](https://github.com/nocobase/nocobase/pull/7955)) by @katherinehhh

  - 修復多級級聯中清除值時拋出錯誤的問題 ([#7943](https://github.com/nocobase/nocobase/pull/7943)) by @katherinehhh

  - 從非樹集合區塊中移除樹表格操作 ([#7931](https://github.com/nocobase/nocobase/pull/7931)) by @katherinehhh

  - 修復 JS 區塊中未顯示標題和描述的問題。([#7913](https://github.com/nocobase/nocobase/pull/7913)) by @gchust

  - 修復隱藏區塊仍在頁面上佔據空間的問題。([#7906](https://github.com/nocobase/nocobase/pull/7906)) by @gchust

  - 修復篩選按鈕中的重設按鈕清除預設條件的問題 ([#7903](https://github.com/nocobase/nocobase/pull/7903)) by @zhangzhonghe

  - 修復新表單中子表單欄位的權限檢查不正確的問題 ([#7902](https://github.com/nocobase/nocobase/pull/7902)) by @katherinehhh

  - 修復表單項目設定中的問題 ([#7867](https://github.com/nocobase/nocobase/pull/7867)) by @katherinehhh

  - 修復富文字欄位無法輸入預設值以及多選欄位預設值無法選擇多個選項的問題。([#7864](https://github.com/nocobase/nocobase/pull/7864)) by @gchust

  - 修復預設 JS 欄位配置未使用顯示模式設定的問題。([#7862](https://github.com/nocobase/nocobase/pull/7862)) by @gchust

  - 修復無法在篩選表單區塊模型中設定日期欄位預設值的問題。([#7853](https://github.com/nocobase/nocobase/pull/7853)) by @gchust

  - 修復表格區塊中的快速編輯操作無法正確更新資料的問題。([#7845](https://github.com/nocobase/nocobase/pull/7845)) by @gchust

  - 修復程式碼編輯器中預覽包含 JSX 語法的程式碼時的錯誤 ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust

  - 修復表格區塊中行操作按鈕的聯動規則在行資料更新後未重新執行的問題，確保規則現在能在變更發生時正確重新套用。([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust

  - 修復篩選表單關聯欄位中的錯誤 'value.replace is not a function' ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe

  - 目前集合變數不應可從篩選元件的變數選擇器中選取 ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust

  - 修復 onChange 回呼中的參數不正確 ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe

  - 無法隱藏表格區塊的操作列 ([#7804](https://github.com/nocobase/nocobase/pull/7804)) by @gchust

  - 修復集合選擇器欄位無法正確選擇集合的問題 ([#7794](https://github.com/nocobase/nocobase/pull/7794)) by @katherinehhh

  - 支援在 AI 員工的提示詞中選擇整個變數物件 ([#7791](https://github.com/nocobase/nocobase/pull/7791)) by @gchust

  - 修復表格操作和 jsColumn 寬度未套用的問題 ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh

  - 如果區塊的資料範圍由頁面事件流程設定，則無法運作 ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust

  - 修復關聯欄位標題欄位省略號未套用的問題 ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh

  - 更新記錄操作的聯動規則不起作用 ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust

  - 修復 Markdown Vditor 欄位必填驗證失敗的問題 ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh

  - 修復變數相關元件中列舉類型的標籤未以正確語言顯示的問題。([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust

  - 修復設定前端驗證後缺少必填欄位指示符的問題 ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh

  - 為篩選表單中的關聯欄位新增資料範圍配置 ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe

  - 修復編輯表單中清除無時區日期時的問題 ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh

  - 修復聯動規則的必填欄位驗證 ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe

  - 修復子表格欄位中的時間格式問題 ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh

  - 解決在篩選器中刪除指定日期時的 Invalid Date 問題 ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh

  - 無法載入目前表單變數的欄位 ([#7745](https://github.com/nocobase/nocobase/pull/7745)) by @gchust

  - 解決將陣列作為值或預設值指派給 "toOne" 欄位時導致錯誤的問題。這確保了變數解析結果的正確處理，提高了系統穩定性和準確性。([#7735](https://github.com/nocobase/nocobase/pull/7735)) by @gchust

  - 解決目前表單中的關聯欄位變數無法被正確識別的問題，確保表單中資料處理的準確性。([#7726](https://github.com/nocobase/nocobase/pull/7726)) by @gchust

  - 修復不可篩選的欄位被錯誤地列在篩選選項中的問題，確保只有適用的欄位出現供選擇。([#7700](https://github.com/nocobase/nocobase/pull/7700)) by @gchust

  - 解決在集合中刪除關聯欄位時的 UI 問題 ([#7706](https://github.com/nocobase/nocobase/pull/7706)) by @katherinehhh

  - 修復子表單聯動規則的已知問題 ([#7698](https://github.com/nocobase/nocobase/pull/7698)) by @zhangzhonghe

  - JS 區塊欄位選單無法在篩選表單區塊中載入 ([#7690](https://github.com/nocobase/nocobase/pull/7690)) by @gchust

  - 解決使用者無法為以唯讀模式顯示的欄位設定預設值的問題。這確保了當欄位不可編輯時，欄位配置更順暢。([#7689](https://github.com/nocobase/nocobase/pull/7689)) by @gchust

  - 修復在彈出視窗內切換頁籤、重新開啟巢狀彈出視窗，然後關閉所有彈出視窗後，URL 未正確更新的問題。([#7630](https://github.com/nocobase/nocobase/pull/7630)) by @gchust

  - 處理 usePlugin 中缺少上下文的問題 ([#7627](https://github.com/nocobase/nocobase/pull/7627)) by @chenos

  - 修復切換表格分頁時頁面顯示異常的問題 ([#7572](https://github.com/nocobase/nocobase/pull/7572)) by @zhangzhonghe

  - 無法為「更新」和「批量更新」操作配置指派欄位值 ([#7565](https://github.com/nocobase/nocobase/pull/7565)) by @gchust

  - 修復提交表單後未重新整理資料的問題 ([#7560](https://github.com/nocobase/nocobase/pull/7560)) by @zhangzhonghe

  - 修復程式碼編輯器中「執行」操作不起作用的問題，確保使用者現在可以正確執行程式碼。([#7547](https://github.com/nocobase/nocobase/pull/7547)) by @gchust

- **[流程引擎]**
  - 修復篩選操作中集合欄位選擇器下拉選單高度不足的問題。([#8288](https://github.com/nocobase/nocobase/pull/8288)) by @gchust

  - 修復彈出視窗頁籤內容不顯示的問題 ([#8281](https://github.com/nocobase/nocobase/pull/8281)) by @zhangzhonghe

  - 修復開啟子頁面時頁面卸載和重新渲染的問題 ([#8276](https://github.com/nocobase/nocobase/pull/8276)) by @zhangzhonghe

  - 修復樹狀表格中新增子記錄的權限檢查問題 ([#8240](https://github.com/nocobase/nocobase/pull/8240)) by @katherinehhh

  - 修復某些區塊彈出記錄相關變數顯示不正確的問題。([#8060](https://github.com/nocobase/nocobase/pull/8060)) by @gchust

  - 修復拖曳操作或頁籤後新增的操作或頁籤不顯示的問題。([#8224](https://github.com/nocobase/nocobase/pull/8224)) by @gchust

  - 外部資料源中的權限檢查問題 ([#8221](https://github.com/nocobase/nocobase/pull/8221)) by @katherinehhh

  - 修復外部資料源操作儘管有權限卻被隱藏的問題 ([#8217](https://github.com/nocobase/nocobase/pull/8217)) by @katherinehhh

  - 修復透過彈出視窗 uid 在重複使用的模態框中提交表單時，區塊資料未重新整理的問題。([#8202](https://github.com/nocobase/nocobase/pull/8202)) by @gchust

  - 修復附件檔案下載不正確的問題 ([#8154](https://github.com/nocobase/nocobase/pull/8154)) by @katherinehhh

  - 修復：使用整數類型作為列舉選項時轉換不正確 ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos

  - 修復當 `useModel` 被省略時，可切換的子模型選單項目失敗的問題，透過從 `createModelOptions.use` 推斷來解決 ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe

  - 修復切換欄位元件後，前一個元件的配置選項仍保留在選單中的問題。([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust

  - 在 FlowModelRenderer 中將 useEffect 移到條件返回之前 ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe

  - 修復不支援的關聯欄位出現在篩選操作欄位中的問題。([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust

  - 修復評論記錄編輯後儲存失敗的問題 ([#8035](https://github.com/nocobase/nocobase/pull/8035)) by @katherinehhh

  - 修復透過點擊彈出視窗內的表單提交按鈕關閉彈出視窗時，資料區塊未重新整理的問題。([#8021](https://github.com/nocobase/nocobase/pull/8021)) by @gchust

  - 修復詳情區塊中目前記錄變數無法正確觸發解析的問題。([#8004](https://github.com/nocobase/nocobase/pull/8004)) by @gchust

  - 修復詳情區塊按鈕中工具列圖示顯示不對齊的問題 ([#7929](https://github.com/nocobase/nocobase/pull/7929)) by @zhangzhonghe

  - 修復開啟表格區塊的快速編輯表單時導致錯誤的問題。([#7923](https://github.com/nocobase/nocobase/pull/7923)) by @gchust

  - 修復登出和登入後 ACL 權限資料未重新載入的問題。([#7874](https://github.com/nocobase/nocobase/pull/7874)) by @gchust

  - 修復事件流程的變更需要重新整理頁面才能生效的問題。([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust

  - 修復透過使用者介面修改子表單關聯欄位時，其中的變數未正確解析的問題。([#7799](https://github.com/nocobase/nocobase/pull/7799)) by @gchust

  - 多主鍵記錄的編輯表單錯誤 ([#7798](https://github.com/nocobase/nocobase/pull/7798)) by @gchust

  - 修復「開啟檢視」操作的某些配置未套用的問題，確保該操作現在能按所有指定配置正常運作。([#7790](https://github.com/nocobase/nocobase/pull/7790)) by @gchust

  - 修復切換頁面後表格區塊中的操作按鈕未正確更新，導致其功能與目前頁面資料不匹配的問題。([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust

  - 當欄位篩選值設定為 false 時，帶有資料範圍的請求不正確 ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust

  - 修復：解決刪除最後一頁資料後的頁面請求參數問題 ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh

  - 無法解析子表單目前物件變數的關聯欄位值 ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust

  - 事件流程的步驟不應顯示在配置選單中 ([#7723](https://github.com/nocobase/nocobase/pull/7723)) by @gchust

  - 在編輯表單內編輯關聯欄位的資料範圍時，目前彈出記錄的上下文選擇不正確 ([#7675](https://github.com/nocobase/nocobase/pull/7675)) by @gchust

  - 解決流程模型定義的流程操作無法配置的問題，確保使用者現在可以按預期自訂流程操作。([#7666](https://github.com/nocobase/nocobase/pull/7666)) by @gchust

  - 修正在 JS 程式碼編輯器中複製或貼上程式碼片段時的錯誤。([#7641](https://github.com/nocobase/nocobase/pull/7641)) by @gchust

  - 修復 antd 元件中翻譯未生效的問題 ([#7621](https://github.com/nocobase/nocobase/pull/7621)) by @zhangzhonghe

  - 無法在引用區塊中取得目前檢視上下文 ([#7620](https://github.com/nocobase/nocobase/pull/7620)) by @gchust

- **[資料庫]**
  - 查詢 m2m 關係時包含 through scope ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile

  - 查詢 m2m 關係時包含 through scope ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile

  - 修復主資料源和外部資料源之間日期欄位查詢不一致的問題 ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock

  - 當查詢具有多個篩選目標鍵的集合時，`filterByTk` 現在支援陣列 ([#7986](https://github.com/nocobase/nocobase/pull/7986)) by @chenos

  - 在使用 `runSQL` 方法執行 SQL 語句之前設定 `search_path` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile

- **[CLI]** license-kit 相容 DB_PASSWORD 為空的情況 ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx

- **[伺服器]**
  - 支援外部資料源的 Snowflake ID（53 位元）欄位 ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile

  - 將 license-kit 更新至最新版本 ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx

  - 複製參考欄位時保留 field.targetKey ([#7599](https://github.com/nocobase/nocobase/pull/7599)) by @chenos

  - 主鍵遷移錯誤 ([#7563](https://github.com/nocobase/nocobase/pull/7563)) by @2013xile

- **[ACL]**
  - 修復當角色為 `root` 時 API `acl.can` 返回 `null` 的問題 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher

  - 修復：acl.allow 執行過早 ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos

- **[工具函式]**
  - 修復篩選按鈕上的「無效的篩選項目類型」錯誤 ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe

  - 修復事件流程中的「無法識別的操作」錯誤 ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe

- **[操作：批量更新]** 修復外部資料源批量更新操作的錯誤。([#8320](https://github.com/nocobase/nocobase/pull/8320)) by @gchust

- **[資料視覺化]**
  - 修復 AI 圓餅圖標籤顯示問題，標準化基於資料集的圓餅圖選項。<br/>限制圖表順序欄位僅為選定欄位。([#8309](https://github.com/nocobase/nocobase/pull/8309)) by @heziqiang

  - 解決 SQL 模式下選擇外部資料源的問題；<br/>解決資料獲取期間圖表區塊載入狀態的問題；<br/>解決空圖表區塊取消配置的問題；([#8169](https://github.com/nocobase/nocobase/pull/8169)) by @heziqiang

  - 修復儲存後圖表區塊未更新的問題 ([#7920](https://github.com/nocobase/nocobase/pull/7920)) by @heziqiang

  - 僅在圖表預覽期間使用 sql 資源除錯模式 ([#7893](https://github.com/nocobase/nocobase/pull/7893)) by @heziqiang

  - 在初始化時使用 sql:runById API 獲取查詢資料 ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang

  - 修復解析變數時的 SQL 查詢問題 ([#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang

  - 修復圖表資料查詢中缺少 orders 參數的問題 ([#7636](https://github.com/nocobase/nocobase/pull/7636)) by @heziqiang

  - 修復因事件註冊超時導致圖表無法顯示的問題 ([#7608](https://github.com/nocobase/nocobase/pull/7608)) by @heziqiang

- **[操作：匯入記錄]**
  - 匯入檔案時的空間驗證 ([#8285](https://github.com/nocobase/nocobase/pull/8285)) by @jiannx

  - 修復匯入操作中拋出錯誤時，錯誤訊息中的行索引始終為 1 的問題 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher

  - 同步等待匯入觸發的 `afterCreate` 事件完成。([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile

  - 解決可匯入欄位中欄位列表顯示的問題 ([#7710](https://github.com/nocobase/nocobase/pull/7710)) by @katherinehhh

- **[檔案管理]**
  - 修復上傳大於 5MB 的檔案到 AWS S3 時拋出錯誤的問題 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) by @mytharcher

  - 修復在 OSS 上預覽 `.txt` 檔案時字元集錯誤的問題 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher

  - 修復 List 和 Grid Card 區塊中子詳情資料顯示不正確的問題 ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh

  - 修復附件欄位在 readPretty 子表格中未正確顯示的問題 ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh

  - 修復將檔案上傳到指定儲存空間而非預設儲存空間的問題 ([#7947](https://github.com/nocobase/nocobase/pull/7947)) by @katherinehhh

  - 修復表格區塊欄位配置問題 ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh

- **[非同步任務管理器]**
  - 修復取消背景任務的語言 ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher

  - 修復取消背景任務的語言 ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher

- **[工作流]**
  - 修復重新整理外部資料源後資料庫事件失效的問題 ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock

  - 修復重新整理外部資料源後資料庫事件失效的問題 ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock

  - 修復刪除非目前工作流程版本時拋出錯誤的問題 ([#8203](https://github.com/nocobase/nocobase/pull/8203)) by @mytharcher

  - 修復記錄列表中僅顯示一條記錄以進行手動執行的問題 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher

  - 修復在綁定工作流程按鈕配置中新增工作流程後，點擊導致應用程式凍結的問題 ([#7541](https://github.com/nocobase/nocobase/pull/7541)) by @mytharcher

- **[UI 模板]**
  - 修復某些舊版彈出視窗在轉換為模板後無法正確重複使用的問題。([#8283](https://github.com/nocobase/nocobase/pull/8283)) by @gchust

  - 修復欄位模板無法套用聯動規則和表單佈局的問題。([#8266](https://github.com/nocobase/nocobase/pull/8266)) by @gchust

  - 修復開啟關聯欄位彈出視窗時錯誤地使用非關聯欄位彈出視窗模板的錯誤。([#8233](https://github.com/nocobase/nocobase/pull/8233)) by @gchust

- **[集合：樹]** 批量建立樹集合節點後更新路徑 ([#8267](https://github.com/nocobase/nocobase/pull/8267)) by @2013xile

- **[AI 員工]**
  - 解決 llm 節點訊息內容未顯示的問題 ([#8257](https://github.com/nocobase/nocobase/pull/8257)) by @heziqiang

  - 解決 AI 訊息換行問題 ([#8096](https://github.com/nocobase/nocobase/pull/8096)) by @heziqiang

  - 解決資料源角色名稱未編譯的問題 ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang

  - 修復某些目前記錄欄位無法在變數選擇元件中顯示的問題。([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust

  - 修復 AI 生成 SQL 輸出時的問題 ([#7956](https://github.com/nocobase/nocobase/pull/7956)) by @heziqiang

  - 在 v1 頁面上隱藏 AI 員工聊天按鈕 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock

  - 最佳化 Gemini 的網路搜尋行為和使用者提示 ([#7720](https://github.com/nocobase/nocobase/pull/7720)) by @cgyrock

  - 修復具有關聯 API 資源的區塊在選取時未獲取相應資料的問題。([#7688](https://github.com/nocobase/nocobase/pull/7688)) by @cgyrock

  - 修復行動版佈局中聊天框的佈局問題 ([#7591](https://github.com/nocobase/nocobase/pull/7591)) by @cgyrock

  - 修復使用 ChatGPT-4o 時 AI 員工資料建模工具中的錯誤。([#7566](https://github.com/nocobase/nocobase/pull/7566)) by @cgyrock

  - 修復 AI 員工權限配置頁面上的錯誤 ([#7548](https://github.com/nocobase/nocobase/pull/7548)) by @2013xile

- **[工作流：人工節點]**
  - 修復取消執行已刪除工作流程時拋出錯誤的問題 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher

  - 修復人工待辦事項列表使用了不正確的 API ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher

- **[集合欄位：序號]**
  - 修復當 field-sequence 修復命令遇到目前環境中不存在的集合時的錯誤。([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock

  - 改進 plugin-field-sequence 在處理修復命令時的穩健性 ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock

- **[部門]** 修復聚合搜尋無法定位使用者的問題 ([#8222](https://github.com/nocobase/nocobase/pull/8222)) by @2013xile

- **[集合欄位：多對多（陣列）]** 修復當目標鍵類型為 Snowflake ID（53 位元）時無法建立多對多（陣列）欄位的問題 ([#8226](https://github.com/nocobase/nocobase/pull/8226)) by @2013xile

- **[授權設定]**
  - 修復已授權插件的異常顯示 ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx

  - 修復 plugin-license ts 建置異常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx

  - 授權最佳化及新增提示資訊 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx

- **[集合欄位：公式]**
  - 修復 BigInt 欄位無法新增到詳情和表單區塊的問題 ([#8201](https://github.com/nocobase/nocobase/pull/8201)) by @katherinehhh

  - 修復篩選操作和篩選表單區塊中的公式欄位無法輸入值的問題。([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust

  - 修復公式欄位無法新增到篩選表單區塊的問題。([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust

- **[區塊：地圖]** 修復選單切換後地圖縮放級別不正確的問題 ([#8193](https://github.com/nocobase/nocobase/pull/8193)) by @katherinehhh

- **[通知：電子郵件]** 修復電子郵件通知連線限制 ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

- **[區塊：操作面板]** 最佳化操作面板區塊列表佈局中的樣式 ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh

- **[資料源管理器]** 修復更新外部資料源密碼時的錯誤 ([#8024](https://github.com/nocobase/nocobase/pull/8024)) by @cgyrock

- **[操作：匯出記錄]**
  - 修復可匯出欄位列表中缺少系統欄位的問題 ([#8002](https://github.com/nocobase/nocobase/pull/8002)) by @katherinehhh

  - 解決匯出操作中可匯出欄位列表顯示的問題 ([#7714](https://github.com/nocobase/nocobase/pull/7714)) by @katherinehhh

- **[流程引擎]**
  - 確保記錄變數與其單個欄位一起使用時始終返回完整記錄。([#7917](https://github.com/nocobase/nocobase/pull/7917)) by @gchust

  - 無法在聯動設定欄位操作中解析變數 ([#7684](https://github.com/nocobase/nocobase/pull/7684)) by @gchust

  - 修復父彈出視窗記錄變數解析不正確的問題。([#7637](https://github.com/nocobase/nocobase/pull/7637)) by @gchust

- **[多應用管理器（已棄用）]**
  - 子應用程式停止後，發布同步訊息以通知其他節點停止相應的子應用程式 ([#7849](https://github.com/nocobase/nocobase/pull/7849)) by @2013xile

  - 子應用程式狀態指標的集合不正確 ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile

  - 修復無法停用舊版 multi-app-manager 的問題 ([#7633](https://github.com/nocobase/nocobase/pull/7633)) by @jiannx

  - 修復多應用程式資料遷移前的連接埠驗證 ([#7540](https://github.com/nocobase/nocobase/pull/7540)) by @jiannx

- **[區塊：網格卡片]** 修復列表和網格卡片區塊之間的資料重複問題 ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh

- **[區塊：模板（已棄用）]** 修復開啟或關閉模態框時觸發不必要的區塊模板請求的問題 ([#7561](https://github.com/nocobase/nocobase/pull/7561)) by @gchust

- **[操作：匯出記錄 Pro]** 修復附件匯出選項「為每條記錄建立一個資料夾」未生效的問題 by @katherinehhh

- **[資料源：外部 PostgreSQL]** 修復重新整理外部資料源後資料庫事件失效的問題 by @cgyrock

- **[操作：匯入記錄 Pro]**
  - 修復唯一性檢查邏輯，當唯一欄位的值為 null 時會拋出錯誤 by @mytharcher

  - 修復上傳者修改匯入選項無效的問題 by @katherinehhh

  - 解決可匯入欄位中欄位列表顯示的問題 by @katherinehhh

- **[集合：連接到外部資料（FDW）]**
  - 修復連接到大寫名稱表格時的觸發器錯誤 by @2013xile

  - 修復載入大寫名稱表格時失敗的問題 by @2013xile

- **[資料源：外部 SQL Server]** 修復 `encrypt` 和 `trustServerCertificate` 選項不可用的問題 by @2013xile

- **[多空間]**
  - 行動裝置支援空間切換 by @jiannx

  - 修復系統集合中其他欄位的建立 by @jiannx

  - 多空間關聯使用者 by @jiannx

- **[HTTP 請求加密]** 在 qs 解析中對陣列格式使用括號 by @chenos

- **[評論]**
  - 修復評論區塊中刪除記錄失敗的問題 by @katherinehhh

  - 修復評論區塊中引用評論顯示失敗的問題 by @katherinehhh

  - 修復在非評論集合上使用評論區塊時顯示警告的問題 by @katherinehhh

- **[模板列印]**
  - 修復詳情區塊中模板列印操作的錯誤 by @katherinehhh

  - 修復在記錄模板列印操作中新增模板失敗的問題 by @katherinehhh

  - 修復模板列印請求無法與外部資料源一起使用的問題 by @katherinehhh

- **[多應用]**
  - 多應用代理支援快取 by @jiannx

  - 多應用遷移未觸發鉤子 by @jiannx

- **[plugin-demo-platform]** 演示支援自動停止應用程式 by @jiannx

- **[資料源：外部 Oracle]** 修復重新整理外部資料源後資料庫事件失效的問題 by @cgyrock

- **[工作流：審批]**
  - 修復審批操作將不相關的審批記錄狀態錯誤地更改為 `UNPROCESSED` 的問題 by @mytharcher

  - 修復審批導致關聯建立新記錄的問題 by @mytharcher

  - 修復相同事務的重複回滾 by @mytharcher

  - 修復當工作流程被刪除時取消執行拋出錯誤的問題 by @mytharcher

  - 修復填寫的資料在受指派人的表單中消失的問題 by @mytharcher

  - 修復審批導致多對多關聯建立新記錄的問題 by @mytharcher

  - 修復建立審批資訊區塊時拋出錯誤的問題 by @mytharcher

- **[郵件管理器]**
  - 處理異常資料 by @jiannx

  - 修復草稿錯誤 by @jiannx

  - 未同步 Gmail 排程狀態 by @jiannx

  - ShadowHtml 重新整理錯誤 by @jiannx

  - 允許修改郵件父 ID by @jiannx

- **[遷移管理器]**
  - 修復遷移過程中資料換行符遺失的問題。 by @cgyrock

  - 修復缺少遷移描述並將目前時間設定為預設值 by @cgyrock

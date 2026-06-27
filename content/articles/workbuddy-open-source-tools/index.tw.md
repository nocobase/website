---
title: "6 個可與 WorkBuddy 搭配使用的開源工具"
description: "探索六個開源工具，包括 NocoBase、Activepieces 和 Twenty，了解它們如何與 WorkBuddy 協作，連接業務系統、自動化工作流程、CRM、專案管理、資料 API 和 BI 分析。"
---

## 什麼是 WorkBuddy？

WorkBuddy 是騰訊推出的職場 AI 工作空間，主要用於企業辦公、文件處理、數據分析與多步驟任務處理。![WorkBuddy-8xxz2q.png](https://static-docs.nocobase.com/WorkBuddy-8xxz2q.png)

與 OpenClaw、Claude Code、Codex 等工具相比，WorkBuddy 的定位不同。OpenClaw 強調開放的 Agent 能力與跨平台技能生態。Claude Code 和 Codex 更適合程式碼生成、開發協作與工程任務。WorkBuddy 則更聚焦於職場場景，可連接微信、QQ、企業微信、飛書、釘釘等常見的通訊協作工具，讓使用者從熟悉的工作入口啟動任務。

如果團隊希望更深入地連接企業業務系統與內部工作流程，WorkBuddy 也可以作為 AI 任務入口與編排層。WorkBuddy 接收指令、拆解任務並回傳結果，而開源工具則提供底層的業務系統、自動化流程、CRM、專案管理、資料 API 與 BI 分析能力。

---

💬 嗨，你正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 驅動無程式碼/低程式碼開發平台，用於建構企業應用、內部工具與各類系統。它完全自託管、基於插件、對開發者友善。→ [在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

本文介紹幾款能與 WorkBuddy 良好搭配的開源工具，我們將探討它們能為企業提供哪些能力，以及與 WorkBuddy 結合後能涵蓋哪些典型場景。

## 1. NocoBase：適合建構 WorkBuddy 可呼叫的自訂業務系統

![NocoBase1-vpe2x5.png](https://static-docs.nocobase.com/NocoBase1-vpe2x5.png)

**官方網站**：[https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**：22.3k

**文件**：[https://docs.nocobase.com/](https://docs.nocobase.com/)

**相關資源**：

CLI：[https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

技能：[https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

WorkBuddy + NocoBase：[https://docs.nocobase.com/en/ai/workbuddy](https://docs.nocobase.com/en/ai/workbuddy)

### 產品介紹

NocoBase 是一個 AI 驅動的開源無程式碼/低程式碼開發平台，用於快速建構企業應用、內部工具與各類業務系統。它支援私有部署，並基於插件化架構，適合企業根據自身業務需求建構 CRM、ERP、審批系統、工單系統、庫存系統、專案管理系統、營運後台等。

![NocoBase2-t4x1fo.png](https://static-docs.nocobase.com/NocoBase2-t4x1fo.png)

對於希望將 WorkBuddy 連接到內部工具的團隊來說，NocoBase 更適合作為業務應用層。它提供穩定的資料結構、權限邊界、流程規則與可呼叫的系統能力。

NocoBase 也圍繞真實業務系統設計其 AI 能力。它支援 AI 員工、AI 技能、CLI、MCP 等。AI 員工可作為系統內的智慧助手，協助資料查詢、內容生成、任務處理等工作。AI 技能幫助外部 Agent 理解 NocoBase 的配置方式以及可操作與不可操作的範圍。CLI 讓 Agent 能透過指令執行安裝、建立、修改等操作。MCP 則為外部 AI 工具連接 NocoBase 提供了更標準的入口。

![NocoBase3-ejtyuu.png](https://static-docs.nocobase.com/NocoBase3-ejtyuu.png)

### 核心優勢

* **資料模型驅動**：NocoBase 支援先定義資料表、欄位與關係，再建構頁面與互動。這使其比單純的表單收集更適合複雜的業務系統。
* **適合私有部署**：企業可將系統部署在自己的伺服器上，更適合對資料安全、權限控制與長期維護有要求的內部系統。
* **完整的權限與工作流程能力**：支援角色權限、欄位權限、資料權限與操作權限。工作流程也能處理審批、通知、資料更新、Webhook、HTTP 請求等流程。
* **靈活的插件架構**：NocoBase 採用基於插件的微核心架構。功能可透過插件擴展，適合需要在標準能力之外自訂業務邏輯的企業。
* **更貼近業務系統的 AI 能力**：NocoBase 支援 AI 員工、AI 技能、知識庫等能力。這些能力可圍繞頁面、資料表、選定記錄與業務規則運作。

### 與 WorkBuddy 的典型使用案例

在許多場景中，WorkBuddy 接收指令、拆解任務並回傳結果，而 NocoBase 則提供具體的業務物件與系統能力，例如客戶、訂單、審批、工單、庫存與專案。

![NocoBase4-ono1dm.png](https://static-docs.nocobase.com/NocoBase4-ono1dm.png)

以下是 3 個常見場景：

**CRM** 企業可使用 NocoBase 建構客戶管理系統，集中維護客戶檔案、跟進狀態、客戶分層、負責人、合約金額等資訊。銷售經理可直接從企業微信或飛書發送指令，請 WorkBuddy 查詢近期新增客戶、長期未跟進的線索與重點客戶。NocoBase 提供客戶資料、權限與篩選邏輯。AI 員工或相關技能可進一步協助整理跟進優先級、生成客戶摘要或建立銷售待辦事項。

**工單管理** 在售後或營運團隊中，NocoBase 可記錄工單狀態、問題類型、優先級、處理人與截止日期。在日常檢查或週報回顧時，團隊可請 WorkBuddy 彙總逾期工單、高優先級問題與待辦事項，然後按負責人、緊急程度或問題類型分類，便於確認處理順序。

**專案管理** 對於管理者而言，審批與專案進度常分散於多個節點。NocoBase 可管理審批流程、專案里程碑、負責人、風險與進度狀態。WorkBuddy 可根據指令提取待審批事項、延遲任務與專案風險，然後按部門、負責人或優先級生成摘要。

## 2. Activepieces：適合將 WorkBuddy 連接到更多自動化工作流程

![Activepieces1-xrlqbe.png](https://static-docs.nocobase.com/Activepieces1-xrlqbe.png)

**官方網站**：[https://www.activepieces.com/](https://www.activepieces.com/)

**GitHub**：[https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

**GitHub Stars**：約 23k

**文件**：[https://www.activepieces.com/docs](https://www.activepieces.com/docs)

### 產品介紹

Activepieces 是一個開源 AI 自動化平台，用於跨工具與系統建構自動化工作流程。它能連接 API、Webhook、資料庫、試算表、電子郵件、CRM、專案管理工具與其他第三方服務，將分散在不同工具中的操作轉化為可重複使用的工作流程。

Activepieces 與 WorkBuddy 搭配良好的場景是：指令從辦公入口啟動，而操作則跨越多個系統執行。WorkBuddy 可接收來自企業微信、飛書、釘釘等工作入口的請求。Activepieces 則執行底層工作流程，例如讀取資料、呼叫 API、同步記錄、發送通知或觸發後續任務。

### 核心優勢

* **強大的跨工具連接能力**：適合連接 API、Webhook、資料庫與第三方應用，減少重複性人工操作。
* **適合將自動化轉化為可重複使用的工作流程**：線索同步、通知推送、試算表更新、任務分配與資料整理等流程可轉化為固定工作流程。
* **支援自託管**：企業可部署在自己的環境中，便於管理金鑰、資料與執行日誌。
* **接近 AI Agent 呼叫工具的方式**：Activepieces 的片段可作為 MCP 伺服器使用，更容易與 Agent 工具結合。

![Activepieces2-6x447z.png](https://static-docs.nocobase.com/Activepieces2-6x447z.png)

### 與 WorkBuddy 的典型使用案例

Activepieces 適合跨系統自動化。例如，網站表單、客戶支援回饋、GitHub Issues 與銷售線索可能分散在不同的工具中。團隊可先使用 Activepieces 配置資料讀取、去重、分類與同步的工作流程。然後，透過 WorkBuddy 的一條簡單指令，例如「整理今天的新線索，按來源與優先級分組」，結果即可回傳到群組聊天、文件或試算表中。

## 3. Twenty：適合建構自託管的 CRM 資料層

![Twenty-tqe8g2.png](https://static-docs.nocobase.com/Twenty-tqe8g2.png)

**官方網站**：[https://twenty.com/](https://twenty.com/)

**GitHub**：[https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

**GitHub Stars**：49k

**文件**：[https://twenty.com/developers](https://twenty.com/developers)

### 產品介紹

Twenty 是一個開源 CRM，官方定位為 Salesforce 的開源替代方案。它適合管理公司、聯絡人、客戶關係、商機、任務、備註與銷售流程。技術團隊也可根據自身業務流程進行自訂。

如果企業希望將客戶資料掌握在自己手中，避免完全依賴封閉的 CRM，Twenty 可作為 WorkBuddy 背後的客戶資料層。客戶記錄、商機與銷售跟進記錄儲存在 Twenty 中，而 WorkBuddy 則從工作入口接收查詢、整理與提醒請求。

### 核心優勢

* **專注於 CRM 場景**：更適合客戶管理、商機跟進、銷售任務與客戶資料整理。
* **開源且可自託管**：企業能更好地控制客戶資料、系統環境與未來自訂。
* **適合技術團隊自訂**：可圍繞企業自身的銷售流程調整物件、欄位與業務結構。
* **更聚焦的業務物件**：與通用型內部工具相比，Twenty 的資料結構更貼近銷售團隊的日常工作。

### 與 WorkBuddy 的典型使用案例

銷售團隊可在 Twenty 中維護客戶檔案、公司資訊、商機階段、跟進記錄與下一步行動。當銷售經理需要查看重點客戶時，不一定需要進入 CRM 後台逐一篩選記錄。他們可以透過 WorkBuddy 發起查詢，例如「找出 7 天未跟進的高價值客戶」、「整理本週新商機」或「列出沒有下一步行動的高價值交易」。

Twenty 儲存並管理銷售資料。WorkBuddy 將查詢結果整理成跟進清單、提醒摘要或週報。這有助於團隊快速識別需要優先處理的客戶與商機，並降低銷售資料停留在 CRM 後台而未能及時檢視的風險。

## 4. Plane：適合讓 WorkBuddy 讀取專案狀態與任務進度

![Plane1-a68yj9.png](https://static-docs.nocobase.com/Plane1-a68yj9.png)

**官方網站**：[https://plane.so/](https://plane.so/)

**GitHub**：[https://github.com/makeplane/plane](https://github.com/makeplane/plane)

**GitHub Stars**：49.8k

**文件**：[https://docs.plane.so/](https://docs.plane.so/)

### 產品介紹

Plane 是一個開源專案管理工具，用於追蹤 Issue、管理週期、維護路線圖，以及儲存專案文件與團隊任務。它更適合產品、工程與專案管理團隊管理發布計劃、任務狀態、專案風險與協作節奏。

Plane 官方也強調團隊與 Agent 之間的協作。在 WorkBuddy 場景中，Plane 可作為專案協作層：專案、任務、負責人、狀態、優先級與發布計劃儲存在 Plane 中，而 WorkBuddy 將這些狀態帶入團隊的日常工作入口。

![Plane2-ojwlpm.png](https://static-docs.nocobase.com/Plane2-ojwlpm.png)

### 核心優勢

* **適合產品與工程協作**：可管理 Issue、週期、路線圖、文件與團隊任務。
* **更清晰的任務狀態**：適合追蹤優先級、負責人、發布計劃與延遲風險。
* **支援自託管**：更適合需要控制專案資料與工程資訊的團隊。
* **適合與 Agent 搭配使用**：Plane 已強調團隊與 Agent 的協作空間，適合圍繞任務進度、專案狀態與知識積累進行組合。

### 與 WorkBuddy 的典型使用案例

產品經理可在飛書中詢問 WorkBuddy：「這個版本中哪些 P0 的 Issue 仍然未關閉？」專案負責人可以問：「本週哪些任務延遲了，被誰卡住了？」工程負責人也可以請 WorkBuddy 按模組整理高優先級的 Issue。

在此場景中，Plane 記錄專案、Issue、路線圖與負責人資訊。WorkBuddy 從工作入口發起查詢，並將結果整理成摘要或提醒。對於任務多、發布週期快、狀態同步需求頻繁的團隊，這種組合可以降低反覆開啟專案後台查看狀態的成本。

## 5. Directus：適合將現有資料庫轉化為可呼叫的資料介面

![Directus1-x5gl6h.png](https://static-docs.nocobase.com/Directus1-x5gl6h.png)

**官方網站**：[https://directus.io/](https://directus.io/)

**GitHub**：[https://github.com/directus/directus](https://github.com/directus/directus)

**GitHub Stars**：34.2k

**文件**：[https://directus.io/docs](https://directus.io/docs)

### 產品介紹

Directus 是一個開源資料平台，可在 SQL 資料庫之上生成管理介面、REST API 與 GraphQL API。它適合已有資料庫但缺乏友善後台、標準介面或統一資料存取層的團隊。

許多企業並不缺乏資料。問題在於資料分散在舊系統、資料庫表格或多個內部應用中。讓 Agent 直接存取資料庫風險相對較高，要求業務人員撰寫 SQL 也不現實。Directus 可以在資料庫與 WorkBuddy 之間增加一個 API 與權限管理層，使現有資料更容易被查詢、整理與呼叫。

### 核心優勢

* **連接現有 SQL 資料庫**：適合將現有資料庫包裝成更易於使用的資料服務。
* **自動生成 API**：可透過 REST、GraphQL 或 SDK 存取資料。
* **提供資料管理介面**：它不僅是 API 層，也可作為資料後台使用。
* **適合漸進式現代化**：企業無需重建整個系統，可先透過 Directus 暴露關鍵資料表。

![Directus2-9ia8ca.png](https://static-docs.nocobase.com/Directus2-9ia8ca.png)

### 與 WorkBuddy 的典型使用案例

例如，企業可能已有客戶資料庫、訂單資料庫、庫存表或內容資產庫，但資料分散在舊系統中，業務人員難以快速查詢。企業可先使用 Directus 連接關鍵資料表，配置權限與 API，然後讓 WorkBuddy 透過介面查詢資料。

員工可從工作入口發起請求，例如「查看今天的新訂單」、「找出庫存低於安全庫存量的產品」或「彙總某客戶最近 3 筆交易」。Directus 提供 API 與權限邊界。WorkBuddy 將自然語言請求轉化為查詢任務，並將結果整理成更易於閱讀的摘要。

## 6. Metabase：適合讓 WorkBuddy 讀取報表與業務指標

![Metabase-uupms9.png](https://static-docs.nocobase.com/Metabase-uupms9.png)

**官方網站**：[https://www.metabase.com/](https://www.metabase.com/)

**GitHub**：[https://github.com/metabase/metabase](https://github.com/metabase/metabase)

**GitHub Stars**：47k

**文件**：[https://www.metabase.com/docs](https://www.metabase.com/docs)

### 產品介紹

Metabase 是一個開源 BI 工具，用於建構資料儀表板、業務報表與自助分析。它能連接資料庫，讓團隊圍繞銷售、營運、產品、財務、客戶支援等資料建構指標系統與儀表板。

如果說 Directus 更適合將資料庫轉化為 API，那麼 Metabase 更適合將資料轉化為業務問題與指標儀表板。與 WorkBuddy 搭配使用時，Metabase 可作為資料分析層，讓管理者透過工作入口獲取關鍵指標與業務摘要。

### 核心優勢

* **適合業務資料分析**：可連接資料庫，建構儀表板、圖表與報表。
* **降低資料查詢門檻**：業務人員可透過視覺化介面查看指標，不一定需要撰寫 SQL。
* **適合管理與營運團隊**：常見場景包括銷售儀表板、渠道分析、用戶增長、工單趨勢與庫存分析。
* **提供 API 能力**：Metabase 提供 API，可用於自動化一些後台任務與資料查詢場景。

### 與 WorkBuddy 的典型使用案例

管理者不一定每天打開 BI 系統瀏覽多個儀表板，但他們通常需要快速了解關鍵變化。例如：「本週銷售收入與上週相比變化如何？」「今天的新註冊用戶來自哪些渠道？」「哪條產品線的工單量增長最快？」「哪些頁面的轉換率下降最明顯？」這使得 Metabase 與 WorkBuddy 的組合非常適合業務資料摘要。

Metabase 連接資料庫，儲存指標與儀表板。WorkBuddy 將這些指標帶入企業微信、飛書或釘釘。使用者可直接從工作入口提問，WorkBuddy 可呼叫相關報表或資料介面，然後回傳結構化的摘要。

## 常見問題

### 1. WorkBuddy 可以直接連接傳統 SaaS、ERP 或 CRM 嗎？

可以，但取決於系統本身是否提供 API、Webhook、插件、MCP 或其他可呼叫的能力。

許多傳統 SaaS、ERP 與 CRM 系統的資料結構與流程規則相對固定。系統可以使用，但其欄位關係、介面能力、權限邊界與審計記錄可能不適合 Agent 直接存取。

對於簡單的查詢、通知或資料同步，傳統系統也可透過 API 或整合平台連接。但如果企業希望靈活地圍繞客戶、訂單、審批、工單、庫存與專案等物件配置資料、權限與工作流程，開源工具或可自託管平台通常更適合作為承載這些能力的層。

### 2. 為什麼選擇開源工具與 WorkBuddy 搭配使用？

開源工具通常更適合需要自託管、資料控制、開放介面與長期擴展性的團隊。

企業可以更好地了解資料儲存在哪裡、系統權限如何配置、介面如何呼叫以及操作日誌如何保留。他們也可以根據自身需求進行二次開發或系統整合。對於涉及客戶資訊、專案資料、訂單記錄、業務指標與內部工作流程的場景，這種控制程度尤其重要。

WorkBuddy 處理工作入口與任務編排。開源工具則承載業務系統、自動化流程、CRM、專案管理、資料 API 與 BI 分析等能力。它們共同將日常的工作入口與具體的業務系統連接起來。

### 3. 如果我們想建構系統級的內部工具，應該先看哪一個？

**NocoBase**。

如果企業想建構 CRM、ERP、工單系統、審批系統、庫存管理、專案管理或營運後台，NocoBase 更適合作為系統級的內部工具平台。它採用資料模型驅動的架構，適合先定義客戶、訂單、工單、審批、庫存與專案等業務物件，然後再配置頁面、權限、工作流程與插件。

同時，NocoBase 已發布 WorkBuddy 整合文件，與此主題直接相關。對於需要管理複雜業務資料、權限邊界與工作流程規則的團隊，NocoBase 提供了比單一 CRM、單一自動化工具或單一 BI 工具更廣泛的覆蓋範圍。

### 4. 如果主要目標是儀表板監控與業務資料分析，應該選擇哪一個？

**Metabase**。

Metabase 更適合連接資料庫、建構儀表板、維護業務指標與生成資料報表。銷售儀表板、渠道分析、用戶增長、工單趨勢、庫存變化與轉換率變化等場景都適合使用 Metabase。

與 WorkBuddy 搭配使用時，管理者可從工作入口查詢關鍵指標，例如「本週銷售收入與上週相比變化如何？」「今天的新用戶主要來自哪些渠道？」「哪條產品線的工單量增長最快？」Metabase 儲存指標與儀表板，而 WorkBuddy 發起查詢並回傳結構化的摘要。

### 5. 如果企業已有資料庫但缺乏統一的查詢入口，該怎麼辦？

許多企業已有客戶資料庫、訂單資料庫、庫存表或內容資產庫，但資料分散在舊系統或內部資料庫中。當業務人員想查詢資料時，通常需要進入多個後台或請技術同事臨時匯出資料。

Directus 可在 SQL 資料庫之上生成管理介面、REST API 與 GraphQL API，這相當於為現有資料庫增加了一個更清晰的資料存取入口。與 WorkBuddy 搭配使用時，員工可從工作入口查詢「今天的新訂單」、「庫存低於安全庫存量的產品」以及「某客戶最近 3 筆交易」等資訊。

### 6. 使用 WorkBuddy 搭配開源工具是否需要技術團隊？

取決於使用深度。

對於簡單的查詢、提醒、資訊整理或報表摘要，業務團隊可以從現有工具的能力開始。但如果 WorkBuddy 需要與內部系統進行可靠的整合，例如呼叫 API、配置權限、設計工作流程、管理金鑰與保留操作日誌，則需要 IT 或開發團隊的參與。

一個更安全的做法是從低風險、高頻率的場景開始，例如客戶跟進清單、專案進度摘要、逾期工單提醒、業務資料儀表板與庫存異常查詢。待工作流程穩定後，再逐步擴展到更複雜的系統操作與跨工具自動化。

### 7. 何時適合選擇 WorkBuddy？

如果團隊主要透過微信、QQ、企業微信、飛書、釘釘等入口進行協作，並希望使用 AI Agent 處理日常辦公任務，例如文件整理、試算表分析、PPT 生成、會議摘要與任務分配，那麼 WorkBuddy 是一個不錯的選擇。

如果企業還希望進一步連接內部工具、CRM、專案管理、資料儀表板、自動化工作流程等系統，則可使用 WorkBuddy 作為任務入口，並搭配 NocoBase、Activepieces、Twenty 等開源工具來增加具體的業務系統與資料能力。

如果這篇文章對你有幫助，歡迎分享給正在關注 AI Agent 的朋友。

**相關閱讀**

* [GitHub Stars 前 6 名的開源 AI 工具，打造更強大的 AI Agent](https://www.nocobase.com/en/blog/6-github-top-open-source-ai-tools-for-ai-agents)
* [5 款可與 Hermes Agent 搭配使用的開源內部工具](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw 與 5 款用於監控業務工作流程的開源工具](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [哪些開源工具能與 OpenCode 良好搭配？5 個值得嘗試的專案](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [使用 Codex 建構內部工具：為開發者準備的 6 個開源專案](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Claude Code 之後：你應該了解的 6 款開源工具](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [企業軟體開發的 10 大開源 AI 與無程式碼工具](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [用於建構內部工具的 8 個開源 AI Agent 平台](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [支援 RBAC、AI 與開放 API 的最佳企業級自託管 CRM](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 款最佳開源工具，取代自訂整合中介軟體](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [用 NocoBase 還是 Airtable 取代 Excel？逐項成本比較](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [從 Excel 資料快速建構 Web 應用程式的 4 種方法](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)

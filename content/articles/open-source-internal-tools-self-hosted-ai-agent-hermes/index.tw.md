---
title: "5 個可與 Hermes Agent 搭配使用的開源內部工具"
description: "了解 NocoBase、Appsmith、Budibase、Directus 和 Baserow 如何與 Hermes Agent 協作，以改善內部工具的建置、配置和維護。"
---

AI Agent 不再只是開發場景的熱門話題。

除了 Claude Code、OpenClaw 等工具，Hermes Agent 近期也開始受到更多關注。

![reddit.png](https://static-docs.nocobase.com/reddit-px26au.png)

[在 Reddit 上](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/)，有使用者提到，在嘗試了包含 OpenClaw、Nanobot、Nanoclaw 在內的幾款 Agent 工具後，最終還是更偏好 Hermes Agent。它保留了實際需要的能力，沒有不必要的開銷。對於本地模型、自託管伺服器、SSH 存取、基於 Telegram 的操作等場景，也符合更輕量、更可控的設定需求。

> 💡延伸閱讀：
>
> [OpenClaw 如何應用在真實業務？推薦 5 款開源工具](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
>
> [使用 Claude Code 後，你需要這 6 款開源工具](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

對於已經在規劃自建業務系統或內部工具的團隊來說，如果希望將 AI Agent 運用在真實的業務系統中，用來處理資料查詢、系統配置、工作流程維護和任務執行，那麼 Hermes Agent 會是一個非常合適的選擇。

內部工具平台為業務系統提供了基礎，而 Hermes 作為一個自託管的 Agent，可以幫助團隊透過自然語言查詢、配置和維護系統，並將可重複的操作捕捉為可重複使用的 Skills。

---

💬 嗨，你正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 無程式碼/低程式碼開發平台，用於建構企業應用程式、內部工具和各種系統。它完全自託管、基於插件、對開發者友好。→[在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

本文將重點介紹 NocoBase、Appsmith、Budibase、Directus 和 Baserow 等內部工具平台，並說明它們如何與 Hermes Agent 在不同場景中搭配使用。

首先，下表列出了本文涵蓋的工具、它們適用的常見業務系統，以及 Hermes Agent 可以增加的能力。


| 工具       | 推薦的業務系統 / 內部工具                                                                                                                                   | Hermes Agent 可以增加的能力                                                                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NocoBase | CRM、ERP、審批系統、工單系統、專案管理、供應商管理、資產管理、營運後台及其他業務系統                                                                                                    | 使用自然語言規劃資料模型、配置頁面和權限、維護工作流程，並將高頻業務模組捕捉為可重複使用的 Skills                                                                                                          |
| Appsmith | 管理後台、資料儀表板、客服後台、審核面板、營運工具、資料庫管理介面                                                                                                                  | 釐清頁面結構、組織查詢和篩選邏輯、解釋元件與資料來源之間的關係，並重複使用常見的管理頁面模板                                                                                                                |
| Budibase | 表單系統、審批流程、員工請求、IT 服務台、營運流程應用程式、內部工作流程工具                                                                                                            | 釐清表單欄位、審批節點和狀態轉換、產生工作流程模板，並捕捉請求處理的 Skills                                                                                                                    |
| Directus | 資料庫後端、API 管理、內容管理系統、結構化資料管理平台、資料營運後端                                                                                                              | 解釋資料結構、組織欄位關係、支援自然語言查詢，並捕捉資料管理和內容維護的工作流程                                                                                                                    |
| Baserow  | 基於表格的資料庫、輕量級 CRM、供應商清單、內容計畫、專案進度表、庫存清單                                                                                                            | 規劃表格結構和檢視、組織篩選規則、產生類別和狀態欄位，並重複使用輕量級應用程式模板                                                                                                                  |

## 1. NocoBase

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-orh9iv.png)

官方網站：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star：22.6k

### 介紹

NocoBase 是一個開源的 AI 無程式碼/低程式碼平台，用於建構企業內部業務系統和管理後台。

其核心是透過資料模型、頁面配置、權限管理、工作流程和插件擴展，幫助團隊建構長期運行的業務系統。這些系統通常會隨著時間而變化：欄位需要調整、頁面需要最佳化、權限需要重新定義，審批和通知工作流程也需要隨著業務變化而更新。

NocoBase 非常適合這些長期系統，而 Hermes Agent 則可以進一步參與系統的建構、配置和維護。

在 AI 能力方面，NocoBase 已經提供了 AI 員工、AI Skills、CLI、MCP 及相關支援。AI 員工可以作為系統內的智慧助手，協助資料查詢、內容生成、任務處理等。AI Skills 幫助外部 Agent 了解 NocoBase 的配置方式以及它們可以操作和不能操作的內容。CLI 讓 Agent 可以透過指令執行安裝、建立、修改等操作。MCP 為外部 AI 工具連接 NocoBase 提供了更標準的入口。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-civede.png)

### 與 Hermes 搭配能做什麼？

Hermes 連接到 NocoBase 後，可以透過 NocoBase Skills 理解 NocoBase 的配置系統，並透過 NocoBase CLI 執行建立、修改、部署等操作。

**1. 使用自然語言建立業務模組**

例如，在建立客戶續約管理模組時，可以先讓 Hermes 組織客戶、合約、續約記錄、跟進任務等資料結構。然後它可以規劃列表頁面、詳情頁面、儀表板和基本權限。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-auh66t.png)

**2. 協助維護權限和工作流程**

例如，如果規則是「業務員只能查看自己擁有的客戶，主管可以查看團隊客戶，財務可以查看合約金額」，Hermes 可以將這個業務描述轉換為更具體的權限和工作流程配置邏輯。

**3. 將高頻操作捕捉為 Skills**

在首次完成 CRM、審批流程或供應商管理模組後，Hermes 可以捕捉欄位命名、頁面結構、權限規則等實務經驗。這些經驗可以在後續建構類似模組時重複使用。

### 任務指令範例

```text
請幫我在 NocoBase 中建立一個客戶續約管理模組。

它需要包含客戶資訊、合約到期日、續約狀態、負責人、跟進記錄和一個審批流程。

權限方面：
業務員只能查看自己擁有的客戶。
業務主管可以查看團隊客戶。
財務可以查看合約金額和付款狀態。
管理員可以查看和編輯所有內容。

工作流程方面：
在合約到期前 30 天自動產生續約提醒。
當續約金額超過 10 萬元時，需要主管和財務審批。
審批通過後，更新續約狀態並產生下一個跟進任務。

完成後，請將此模組的建構過程整理成一個可重複使用的 Skill，以便日後用於建立供應商管理、合約管理或專案管理模組。
```

![NocoBase4-yks1wd.png](https://static-docs.nocobase.com/NocoBase4-yks1wd.png)

### 相關資源

文件：[https://docs.nocobase.com/](https://docs.nocobase.com/)

AI 文件：[https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI：[https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills：[https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

Hermes Agent：[https://docs.nocobase.com/en/ai/hermes-agent](https://docs.nocobase.com/en/ai/hermes-agent)

## 2. Appsmith

![Appsmith1.png](https://static-docs.nocobase.com/Appsmith1-ixuhwg.png)

官方網站：[https://www.appsmith.com/](https://www.appsmith.com/)

GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Star：39.9k

### 介紹

Appsmith 是一個開源的低程式碼平台，主要用於建構內部應用程式，例如管理後台、資料儀表板、客戶支援後台、審核工具和 IT 工具。它可以連接資料庫、API 和第三方服務，並透過拖放元件、查詢配置和 JavaScript 擴展，為內部團隊快速建構介面。

Appsmith 提供了 Appsmith AI，可以為應用程式添加 AI 查詢、文字生成、分類、摘要等功能。它還可以圍繞內部資料建構 AI 互動。Appsmith 也正在開發 Appsmith Agents，旨在將 AI 能力引入團隊日常使用的工具和系統中。

![Appsmith2.png](https://static-docs.nocobase.com/Appsmith2-64xce0.png)

### 與 Hermes 搭配能做什麼？

Appsmith 負責建構特定的頁面和資料操作介面，而 Hermes 則幫助團隊將自然語言需求轉化為更清晰的頁面結構、查詢邏輯和操作規則。

1. 規劃內部管理介面

例如，在建構訂單異常處理面板時，可以先請 Hermes 釐清應該顯示哪些欄位、需要哪些篩選器、需要哪些操作按鈕，以及頁面應如何劃分區塊。然後 Appsmith 再負責具體的介面建構和資料連接。

2. 組織查詢和篩選邏輯

內部工具常見的問題不在於頁面是否存在，而在於頁面背後的資料邏輯是否清晰。Hermes 可以幫助團隊將「我想看哪些訂單」、「異常如何定義」、「哪些記錄應該優先處理」等描述轉換為查詢條件和操作規則。

3. 捕捉管理頁面模板

客戶支援後台、審核面板、營運儀表板和財務查詢頁面經常重複出現。Hermes 可以將常見的欄位、元件佈局、篩選器和操作邏輯捕捉為 Skills，以便日後重複使用類似的頁面。

### 任務指令範例

```text
請幫我規劃一個訂單異常處理面板，後續將在 Appsmith 中建構。

頁面需要顯示異常訂單、客戶名稱、訂單金額、負責人、異常原因、處理狀態和最近一次溝通記錄。

篩選器包括：
地區。
訂單金額。
處理狀態。
負責人。
異常類型。

操作方面：
營運人員可以更新處理狀態。
主管可以批次指派負責人。
財務只能查看訂單金額和付款狀態。

請將頁面結構、資料查詢邏輯和元件佈局整理出來，並捕捉為一個可重複使用的內部工具頁面模板。
```

### 相關資源

文件：[https://docs.appsmith.com/](https://docs.appsmith.com/)

Appsmith AI：[https://docs.appsmith.com/connect-data/reference/appsmith-ai](https://docs.appsmith.com/connect-data/reference/appsmith-ai)

## 3. Budibase

![Budibase1.png](https://static-docs.nocobase.com/Budibase1-py408w.png)

官方網站：[https://budibase.com/](https://budibase.com/)

GitHub：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

GitHub Star：28k

### 介紹

Budibase 是一個開源的營運平台，主要用於建構內部應用程式、自動化工作流程和 AI Agent。它更專注於基於流程的業務場景，例如員工請求、審批處理、IT 服務台、表單路由、資料更新和營運自動化。

Budibase 支援生成程式碼、生成資料庫表格，以及建立由大型語言模型驅動的自動化工作流程。Budibase Agents 也正在開發中，允許團隊透過自然語言定義 Agent 行為，並將其連接到內部資料和 API。

### 與 Hermes 搭配能做什麼？

Budibase 更適合表單、審批和基於工作流程的應用程式。Hermes 可以幫助團隊在工作流程設計的早期階段釐清規則，並在後續捕捉高頻的請求處理方法。

1. 釐清表單和審批流程

對於設備申請、費用報銷、客戶支援、合約審批等流程，Hermes 可以先幫助團隊分解欄位、審批節點、觸發條件和通知規則。然後 Budibase 再負責實際的應用程式建構。

2. 生成工作流程處理模板

許多內部請求遵循固定的處理模式。Hermes 可以將「員工提交請求 -> 主管審批 -> 相關部門處理 -> 更新狀態 -> 通知申請人」等工作流程組織成模板，以便日後快速重複使用。

3. 捕捉操作規則

基於工作流程的應用程式經常需要隨著組織規則的變化而調整。Hermes 可以記錄審批順序、異常處理方法、角色職責和通知規則，將其轉化為可重複使用的 Skills。

![Budibase2.png](https://static-docs.nocobase.com/Budibase2-b8427g.png)

### 任務指令範例

```text
請幫我設計一個員工設備申請流程，後續將在 Budibase 中建構。

流程包括：
員工提交設備申請。
主管審批。
IT 確認庫存。
審批通過後，更新設備狀態。
系統通知申請人領取設備。

表單欄位包括：
申請人。
部門。
設備類型。
用途說明。
預計領取時間。
審批狀態。
處理人。

請將表單欄位、審批節點、狀態轉換和通知規則整理出來，並將此設備申請流程捕捉為一個可重複使用的 Skill。
```

### 相關資源

文件：[https://docs.budibase.com/](https://docs.budibase.com/)

Budibase AI：[https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

## 4. Directus

![Directus1.png](https://static-docs.nocobase.com/Directus1-tqzvl0.png)

官方網站：[https://directus.io/](https://directus.io/)

GitHub：[https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Star：35.9k

### 介紹

Directus 是一個用於管理 SQL 資料庫內容的即時 API 和應用後端。它可以在現有資料庫之上生成 REST / GraphQL API 和管理介面。它支援 PostgreSQL、MySQL、SQLite、OracleDB、MariaDB、MS SQL 等資料庫，以及本地部署、私有部署和雲端服務。

在 AI 能力方面，Directus 提供了 Directus MCP，允許 Claude、ChatGPT 等 AI 工具讀取、建立和管理 Directus 資料。Directus MCP 遵循現有的權限系統，因此 AI 的存取和修改操作需要通過相同的身份驗證和授權層。

![Directus2.png](https://static-docs.nocobase.com/Directus2-92qier.png)

### 與 Hermes 搭配能做什麼？

Directus 更專注於資料後端和 API 管理。當 Hermes 與 Directus 搭配使用時，重點不在於生成頁面，而在於幫助團隊理解資料結構、查詢業務資料，以及捕捉常見的資料管理操作。

1. 解釋資料結構

對於現有的資料庫，業務用戶通常不了解欄位之間的關係。Hermes 可以幫助組織集合、欄位、關係和權限邊界，使資料結構更容易理解。

2. 協助資料查詢和組織

例如，在查詢供應商、合約、付款、內容狀態、客戶記錄等資訊時，Hermes 可以將自然語言需求轉換為更具體的資料查詢邏輯。

3. 捕捉資料管理操作

內容審核、供應商資料維護、客戶資料組織、合約狀態檢查等操作經常重複。Hermes 可以將這些資料操作流程組織成 Skills，以便日後按照相同的規則執行。

### 任務指令範例

```text
請幫我在 Directus 中組織供應商資料結構。

它需要區分：
供應商基本資訊。
聯絡人。
合約記錄。
付款狀態。
合作狀態。
最近一次溝通記錄。

請解釋這些集合應該如何關聯，並組織一個供應商狀態檢查流程。

後續，我希望能夠使用自然語言查詢：
哪些供應商的合約即將到期。
哪些供應商的付款狀態異常。
哪些供應商超過 30 天未更新溝通記錄。

請將此資料組織和查詢方法捕捉為一個可重複使用的 Skill。
```

### 相關資源

文件：[https://directus.io/docs](https://directus.io/docs)

Directus MCP：[https://directus.io/mcp](https://directus.io/mcp)

MCP 文件：[https://directus.io/docs/guides/ai/mcp](https://directus.io/docs/guides/ai/mcp)

## 5. Baserow

![Baserow1.png](https://static-docs.nocobase.com/Baserow1-23hy4e.png)

官方網站：[https://baserow.io/](https://baserow.io/)

GitHub：[https://github.com/baserow/baserow](https://github.com/baserow/baserow)

GitHub Star：4.9k

### 介紹

Baserow 是一個開源的無程式碼平台，可用於建構資料庫、應用程式、自動化和 AI Agent。它常被視為 Airtable 的開源替代方案。它支援雲端和自託管部署，適用於管理結構化資料和輕量級業務應用程式。

Baserow 2.0 引入了 Kuma AI 助手，可以使用自然語言建立資料庫、編寫公式和建構自動化。它還提供了 AI 欄位、自動化建構器、工作區搜尋等功能。

![Baserow2.png](https://static-docs.nocobase.com/Baserow2-1684s9.png)

### 與 Hermes 搭配能做什麼？

Baserow 更適合從基於表格的資料開始建構輕量級應用程式。當與 Baserow 搭配使用時，Hermes 可以幫助團隊從「組織表格」過渡到「捕捉資料管理習慣」。

1. 建立表格結構和檢視

對於客戶清單、供應商清單、內容計畫、專案進度、庫存記錄等使用案例，Hermes 可以先根據業務描述規劃表格結構、欄位和檢視。然後 Baserow 再負責資料管理。

2. 組織篩選器和分類規則

輕量級應用程式通常依賴不同的檢視。Hermes 可以將「待審核」、「合作中」、「即將到期」、「高優先級」等業務規則轉換為篩選條件和檢視設定。

3. 捕捉輕量級應用程式模板

如果團隊經常使用 Baserow 管理類似的業務資料，Hermes 可以將欄位結構、檢視規則和狀態類別捕捉為 Skills，然後在後續建立新表格時重複使用。

### 任務指令範例

```text
請幫我規劃一個供應商管理表格，後續將在 Baserow 中建立。

欄位包括：
供應商名稱。
聯絡人。
聯絡方式。
合作狀態。
合約到期日。
付款狀態。
負責人。
最近溝通時間。
備註。

需要建立三個檢視：
待審核供應商。
合作中供應商。
合約即將到期供應商。

請為每個檢視設計篩選條件，並將此供應商表格結構和檢視規則捕捉為一個可重複使用的 Skill，以便日後更容易建立客戶表格、通路表格或合作夥伴表格。
```

### 相關資源

文件：[https://baserow.io/user-docs](https://baserow.io/user-docs)

Baserow AI：[https://baserow.io/product/baserow-ai](https://baserow.io/product/baserow-ai)

## 常見問題

### 1. 如果這些平台已經有 AI 能力，為什麼還需要 Hermes？

這些平台內建的 AI 通常更擅長完成特定的產品內任務，例如生成頁面、SQL、表單邏輯或元件配置。

Hermes 的價值在於自託管、長期記憶和 Skills 累積。它更適合跨任務和跨對話記住業務規則、權限習慣和系統配置方法。

### 2. 哪些內部工具平台與 Hermes 搭配效果最好？

更適合與 Hermes 搭配的平台是那些需要持續維護的長期運行的業務系統平台，例如 NocoBase、Budibase、Appsmith、Directus 和 Baserow。

其中，NocoBase 更適合維護完整的業務系統。Appsmith 更適合內部介面和資料面板。Budibase 更適合表單和工作流程。Directus 和 Baserow 更適合資料管理場景。

### 3. Hermes Agent 適合什麼樣的團隊？

Hermes 更適合那些已經在使用自託管工具、重視資料安全、需要長期維護業務系統，並且希望 AI 能夠記住配置習慣並捕捉操作經驗的團隊。

### 4. 為什麼自託管的 AI Agent 對企業內部工具很重要？

因為內部工具通常包含敏感的業務資料，例如客戶、訂單、合約、審批、員工和財務資訊。

當 AI Agent 需要存取這些資料並參與系統操作時，團隊會更加關注資料的儲存位置、權限如何控制、操作如何審查以及長期記憶如何管理。自託管的 Agent 更適合需要更強控制力的團隊。

AI Agent 產品很多，但如果你的團隊已經在使用開源的內部工具平台，並且希望以更安全、更可控的方式將 AI Agent 引入企業內部系統，那麼 Hermes Agent 值得一試。如果這篇文章對你有幫助，歡迎分享給正在關注自託管 AI Agent 和內部工具建構的朋友。


**相關閱讀**

* [OpenClaw 與 5 款用於監控業務工作流程的開源工具](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [哪些開源工具能與 OpenCode 良好搭配？推薦 5 個專案](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [使用 Codex 建構內部工具：6 個適合開發者的開源專案](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Claude Code 之後：你應該了解的 6 款開源工具](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [企業軟體開發的十大開源 AI 與無程式碼工具](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [用於建構內部工具的 8 個開源 AI Agent 平台](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [支援 RBAC、AI 和開放 API 的最佳企業級自託管 CRM](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 款最佳開源工具，取代自訂整合中介軟體](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [用 NocoBase 或 Airtable 取代 Excel？逐項成本比較](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [從 Excel 資料快速建構 Web 應用程式的 4 種方法](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [不只是 PostgreSQL：比較 5 個支援外部資料庫的無程式碼/低程式碼平台](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [開源專案管理工具選購指南，2026 版](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)

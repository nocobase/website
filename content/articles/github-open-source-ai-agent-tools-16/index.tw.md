---
title: "GitHub 星數最高的 14 個開源 AI 代理工具"
description: "探索 GitHub 上 14 個用於商業系統、網頁自動化、AI 編碼、知識管理和個人助理的開源 AI 代理工具。"
---

最近我們陸續發佈了幾篇關於**開源 AI Agent 專案**的推薦文章，收到了不少開發者的關注、收藏與回饋。也有不少讀者提到，希望看到更多不同方向、不同場景的 AI Agent 工具盤點。

* [6 個適合與 WorkBuddy 搭配使用的開源工具](https://www.nocobase.com/en/blog/workbuddy-open-source-tools)
* [OpenClaw 如何應用在真實業務？5 個推薦的開源工具](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [OpenCode 可以搭配哪些開源工具？5 個適合 AI Agent 的開源專案](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [不要讓 Codex 從零生成應用：6 個可組合的開源專案](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [使用 Claude Code 之後，你需要這 6 個開源工具](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

在 Reddit 的 [AI Agent](https://www.reddit.com/r/AI_Agents/comments/1sfrb3t/what_are_the_best_tools_and_frameworks_for/) 社群中，開發者也提出了類似的問題：AI Agent 工具和框架越來越多，但難點在於判斷哪些專案適合真實使用場景，哪些專案更多是炒作。

![Reddit-b7cbmq.png](https://static-docs.nocobase.com/Reddit-b7cbmq.png)

這次我們聚焦在 GitHub 官方 [ai-agent](https://github.com/topics/ai-agent) 主題，從星數最高的結果中選取專案，並按照主題頁面的排序進行整理。由於該主題下的專案類型涵蓋範圍很廣，我們排除了一些與 AI Agent 工具關聯度較低、使用場景過於垂直、或更接近資源集合與單一內容生成的專案，最終選出了 14 個更適合本文的開源專案。

---

💬 嘿，你正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 驅動無程式碼/低程式碼開發平台，用於建構企業應用、內部工具和各種系統。它完全自託管、基於插件、對開發者友好。→ [在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

AI Agent 相關專案涵蓋的領域非常廣泛，單純以 Star 數量排名並不能完全說明其實際價值。因此，本文先列出每個專案的基本資訊，包括官方網站、GitHub 倉庫、Star 數量等。然後，從兩個角度介紹每個專案：

* **定位**：主要屬於哪一類 AI Agent 工具，更側重於個人生產力、開發輔助、網頁自動化、知識管理，還是企業業務系統。
* **使用場景**：更適合解決哪些具體問題，更適合個人開發者、團隊協作，還是企業內部落地。

以下是我們選出的 14 個開源 AI Agent 專案。在詳細介紹之前，你可以透過表格快速了解它們的定位。


| 排名 | 工具                 | GitHub Stars | 定位                                                |
| ---- | -------------------- | ------------ | ---------------------------------------------------------- |
| 14   | NocoBase             | 22.7k        | AI 驅動的無程式碼業務系統                        |
| 13   | OpenCLI              | 24.1k        | 網站轉 CLI / 瀏覽器自動化                        |
| 12   | Agent-Reach          | 26.3k        | AI Agent 網路存取 / 資訊檢索                |
| 11   | Google Workspace CLI | 27k          | 生產力套件 CLI / Agent 技能                      |
| 10   | AionUi               | 28.1k        | 本地 AI 協作工作空間 / 多 Agent 管理      |
| 9    | OpenClaude           | 28.6k        | AI 程式碼 Agent / CLI 工具                                 |
| 8    | CopilotKit           | 34.7k        | Agent 前端框架 / 生成式 UI                   |
| 7    | Nanobot              | 44.1k        | 輕量級 AI Agent                                       |
| 6    | SiYuan               | 44.4k        | 自託管知識管理 / 個人知識庫 |
| 5    | CowAgent             | 45.2k        | AI 助手 / Agent 框架                               |
| 4    | Cherry Studio        | 47.2k        | AI 生產力工作室                                     |
| 3    | career-ops           | 52.7k        | AI 求職自動化系統                            |
| 2    | learn-claude-code    | 66.1k        | 類似 Claude Code 的 Agent 框架                             |
| 1    | Hermes Agent         | 191k         | 通用 AI Agent / Agent 框架                           |

## 14. NocoBase

![NocoBase1-8m9930.png](https://static-docs.nocobase.com/NocoBase1-8m9930.png)

官方網站：[https://www.nocobase.com](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars：22.7k

### 專案介紹

NocoBase 是一個開源的 AI 驅動無程式碼/低程式碼平台，用於快速建構需要持續迭代的企業內部業務系統、管理後台和商業應用。

隨著 AI Agent 逐漸進入開發和業務場景，企業需要的不僅是單一任務的自動化，而是一個能夠支援資料、權限、頁面、工作流程和活動日誌的系統環境。這正是 NocoBase 所提供的基礎。

在 NocoBase 中，AI 可以參與應用程式的建構。使用者可以用自然語言描述業務需求，AI 可以協助建立資料模型、配置頁面、編排工作流程，甚至協助插件開發。系統生成後，團隊可以繼續透過無程式碼介面檢查和調整欄位、關聯、頁面、權限和工作流程。

![NocoBase2-0l0hhf.png](https://static-docs.nocobase.com/NocoBase2-0l0hhf.png)

NocoBase 也支援在業務系統中配置 AI 員工。AI 員工可以與頁面資料、業務上下文、工具和知識庫協作，處理資料分析、內容摘要、報告生成、翻譯、非結構化內容提取、表單填寫、工作流程節點處理等任務。這樣一來，AI 不僅協助建構系統，還能持續參與系統運作。

![NocoBase3-xn1trm.png](https://static-docs.nocobase.com/NocoBase3-xn1trm.png)

### 適合場景

NocoBase 適合建構需要資料模型、權限控制、工作流程編排和長期維護的企業內部系統，特別是在以下場景：

* **企業內部業務系統**：CRM 客戶管理、審批系統、工單系統、專案管理系統、營運後台、管理後台等。

![NocoBase4-ngkai4.png](https://static-docs.nocobase.com/NocoBase4-ngkai4.png)

* **輕量級 ERP 和業務管理模組**：採購管理、庫存管理、訂單管理、設備管理、資產管理、檔案管理、客戶跟進等。
* **現有系統的擴展與增強**：對於已有資料庫、ERP、CRM 或其他業務系統的企業，NocoBase 可以協助整合資料、配置頁面、管理權限和編排工作流程。
* **AI Agent 進入業務工作流程的基礎**：NocoBase 為 AI Agent 提供了一個清晰的業務系統環境，業務資料有模型、使用者操作有權限、工作流程轉換有規則，後續維護可以透過無程式碼配置和插件擴展持續進行。

**🔎相關資源**：

CLI：[https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

技能：[https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

官方解決方案庫：[https://www.nocobase.com/en/solutions](https://www.nocobase.com/en/solutions)

## 13. OpenCLI

![OpenCLI-qn3nn7.png](https://static-docs.nocobase.com/OpenCLI-qn3nn7.png)

官方網站：[https://opencli.info](https://opencli.info/)

GitHub：[https://github.com/jackwener/OpenCLI](https://github.com/jackwener/OpenCLI)

GitHub Stars：24.1k

### 專案介紹

OpenCLI 將網站、瀏覽器會話、Electron 應用程式和本地工具轉換為 CLI 介面。原本需要圖形介面的操作可以包裝成命令，讓人類或 AI Agent 呼叫網頁能力、重複使用已登入的瀏覽器會話，並執行導航、點擊、表單填寫和資料提取等自動化操作。

### 適合場景

OpenCLI 適合需要透過網頁完成任務但沒有標準 API 的場景：

* **網頁自動化**：讀取後台頁面、查詢資訊、填寫表單、提取平台資料。
* **Agent 工具介面**：將瀏覽器會話和網頁能力包裝成 AI Agent 可以呼叫的命令。

## 12. Agent-Reach

![Agent-Reach-ew3tec.png](https://static-docs.nocobase.com/Agent-Reach-ew3tec.png)

GitHub：[https://github.com/Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)

GitHub Stars：26.3k

### 專案介紹

Agent-Reach 專注於 AI Agent 的外部資訊存取。透過 CLI 工具，它允許 Agent 讀取和搜尋來自 Twitter、Reddit、YouTube、GitHub、Bilibili 和小紅書等平台的內容，解決資訊檢索、內容閱讀和跨平台研究中的存取問題。

### 適合場景

Agent-Reach 可用於技術趨勢追蹤、競爭對手研究、社交媒體情緒分析、內容主題研究、GitHub 專案整理和跨平台素材收集。它本身不是一個完整的 Agent 平台，而是為 Agent 增加外部資訊存取能力，為後續的分析、摘要和整理提供更豐富的資訊基礎。

## 11. Google Workspace CLI

![Google Workspace CLI-pw1xpm.png](https://static-docs.nocobase.com/Google%20Workspace%20CLI-pw1xpm.png)

GitHub：[https://github.com/googleworkspace/cli](https://github.com/googleworkspace/cli)

GitHub Stars：27k

### 專案介紹

Google Workspace CLI 是 Google Workspace 的命令列工具，涵蓋 Drive、Gmail、Calendar、Sheets、Docs、Chat、Admin 等。透過命令列操作和結構化 JSON 輸出，它將分散在不同生產力應用程式中的能力轉換為更容易呼叫的介面。

### 適合場景

對於重度使用 Google Workspace 的團隊來說，這類工具讓 AI Agent 更容易進入日常辦公工作流程，例如讀取郵件、管理日曆、整理 Drive 檔案、操作 Sheets、生成 Docs 或處理 Chat 訊息。由於涉及工作場所資料和帳戶授權，實際使用時應特別注意 OAuth 範圍、存取邊界和資料安全。

🔎相關資源：

Agent 技能：[https://github.com/googleworkspace/cli/blob/main/docs/skills.md](https://github.com/googleworkspace/cli/blob/main/docs/skills.md)

## 10. AionUi

![AionUi-5b2768.png](https://static-docs.nocobase.com/AionUi-5b2768.png)

官方網站：[https://www.aionui.com](https://www.aionui.com/)

GitHub：[https://github.com/iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi)

GitHub Stars：28.1k

### 專案介紹

AionUi 是一個本地開源 AI 協作應用程式，適用於 OpenClaw、Hermes Agent、Claude Code、Codex、OpenCode 和 Gemini CLI 等 AI CLI 工具。它提供內建 Agent、多 Agent 管理、遠端存取、跨平台使用和自動化任務，更像是一個用於統一管理 AI Agent 和本地工作的桌面工作檯。

### 適合場景

AionUi 適合同時使用多個 AI 程式碼或 Agent 工具的人：

* **多 Agent 管理**：在一個地方管理 Claude Code、Codex、Hermes Agent、OpenCode 和 Gemini CLI 等工具。
* **本地工作檯**：在一個工作空間中處理本地檔案、程式碼任務、網頁操作和遠端存取，減少在多個工具之間切換的需求。

## 9. OpenClaude

![OpenClaude-kw4n93.png](https://static-docs.nocobase.com/OpenClaude-kw4n93.png)

官方網站：[https://openclaude.gitlawb.com](https://openclaude.gitlawb.com/)

GitHub：[https://github.com/Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

GitHub Stars：28.6k

### 專案介紹

OpenClaude 是一個開源的 AI 程式碼 Agent CLI，支援雲端和本地模型提供者，包括與 OpenAI 相容的 API、Gemini、GitHub Models、Codex、Ollama、Atomic Chat 等。它將提示詞、工具、Agent、MCP、斜線命令和串流輸出整合到一個終端優先的工作流程中。

### 適合場景

OpenClaude 主要用於終端開發環境，例如程式碼解釋、檔案修改、測試生成、重構建議和工具呼叫。它靈活、可組合，並支援多種模型選擇，但也需要使用者具備一定的開發經驗，並自行管理模型配置、執行權限和程式碼變更審查。

## 8. CopilotKit

![CopilotKit-gply44.png](https://static-docs.nocobase.com/CopilotKit-gply44.png)

官方網站：[https://docs.copilotkit.ai](https://docs.copilotkit.ai/)

GitHub：[https://github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

GitHub Stars：34.7k

### 專案介紹

CopilotKit 是一個用於 Agent 和生成式 UI 的前端框架，支援 React、Angular、行動裝置、Slack 等介面和平台。它幫助開發者在自己的產品中建構 AI Copilot、Agent 互動、共享狀態和人機協作工作流程，而不是為最終使用者提供一個獨立的應用程式。

### 適合場景

當產品需要在其介面中嵌入 AI Copilot 時，CopilotKit 提供了一個相對完整的前端基礎。例如，它可以讓 AI 理解當前頁面狀態、協助表單填寫、觸發應用內操作、生成 UI 內容或參與業務工作流程。它更像是一個開發框架，適合建構 AI 產品、SaaS 應用程式或內部系統的團隊。

🔎相關資源：

使用 Agent 建構：[https://docs.showcase.copilotkit.ai/build-with-agents](https://docs.showcase.copilotkit.ai/build-with-agents)

## 7. Nanobot

![image-jnwd3y.png](https://static-docs.nocobase.com/image-jnwd3y.png)

官方網站：[https://nanobot.wiki](https://nanobot.wiki/)

GitHub：[https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

GitHub Stars：44.1k

### 專案介紹

Nanobot 是一個輕量級的開源個人 AI Agent，強調真正的使用者所有權。它保持 Agent 核心相對簡單，同時提供 WebUI、聊天頻道、工具、記憶體、MCP、模型路由、自動化、部署等功能。

### 適合場景

它適合個人開發者、小型團隊或想要建構輕量級 AI Agent 的使用者：

* **個人 AI Agent**：連接到 Telegram、Discord、Slack、Email 等入口，處理日常任務和自動化工作流程。
* **Agent 原型開發**：快速建構一個具有工具、記憶體、MCP、模型路由和 WebUI 的可運行 Agent。

## 6. SiYuan

![SiYuan-xlju2b.png](https://static-docs.nocobase.com/SiYuan-xlju2b.png)

官方網站：[https://b3log.org/siyuan](https://b3log.org/siyuan)

GitHub：[https://github.com/siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)

GitHub Stars：44.4k

### 專案介紹

SiYuan 是一個注重隱私、自託管、完全開源的個人知識管理工具，使用 TypeScript 和 Go 編寫。它支援區塊引用、反向連結、Markdown 所見即所得編輯、嵌入式 SQL 查詢、網頁剪藏、PDF 註釋、資料庫、閃卡、AI 寫作、問答等功能。

### 適合場景

在 AI Agent 的背景下，SiYuan 可以被理解為一層知識基礎設施，而不是一個典型的 Agent 框架。它主要用於個人知識管理、研究資料整理、團隊知識積累和本地優先的知識庫建構。當使用者希望 AI 更好地讀取、組織和重複使用長期知識時，這種結構化的知識環境就變得尤為重要。

## 5. CowAgent

![CowAgent-kbrmgq.png](https://static-docs.nocobase.com/CowAgent-kbrmgq.png)

官方網站：[https://cowagent.ai](https://cowagent.ai/)

GitHub：[https://github.com/zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)

GitHub Stars：45.2k

### 專案介紹

CowAgent 是一個開源的 AI 助手和 Agent 框架。它支援任務規劃、工具和技能呼叫、記憶體和知識、自我進化、多模型存取和多頻道存取。它也在 IM 存取和個人助手場景中，基於 chatgpt-on-wechat 的基礎上進行了建構。

### 適合場景

CowAgent 專注於將 AI 助手連接到多個入口和工具環境，例如網頁、伺服器、個人電腦、微信生態系統和其他 IM 平台。它不僅僅是一個聊天機器人，而是旨在透過任務規劃、工具呼叫、記憶體和技能擴展，成為一個長期運行的個人助手或自動化助手。

## 4. Cherry Studio

![Cherry Studio-ykg2qa.png](https://static-docs.nocobase.com/Cherry%20Studio-ykg2qa.png)

官方網站：[https://cherryai.com](https://cherryai.com/)

GitHub：[https://github.com/CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)

GitHub Stars：47.2k

### 專案介紹

Cherry Studio 是一個 AI 生產力工作室，支援智慧聊天、自主 Agent、300+ 助手，以及對多個前沿大型語言模型的統一存取。它更接近一個完整的 AI 工作檯，用於集中管理模型、助手、知識庫和日常 AI 工作流程。

### 適合場景

Cherry Studio 專為日常工作中的高頻 AI 使用而設計：

* **多模型工作檯**：在一個地方管理不同的大型語言模型、助手、知識庫和日常 AI 工作流程。
* **AI 生產力工具**：用於寫作、素材整理、知識庫問答、Agent 使用和團隊協作。

## 3. career-ops

![career-ops-ylaji6.png](https://static-docs.nocobase.com/career-ops-ylaji6.png)

官方網站：[https://career-ops.org](https://career-ops.org/)

GitHub：[https://github.com/santifer/career-ops](https://github.com/santifer/career-ops)

GitHub Stars：52.7k

### 專案介紹

career-ops 是一個基於 Claude Code 的 AI 求職自動化系統。它可以將 AI 程式碼 CLI 轉變為求職管理中心，用於職位評估、履歷生成、求職平台掃描、批次處理、面試準備和機會追蹤。

### 適合場景

career-ops 非常垂直，主要專注於個人求職工作流程。它的價值不僅在於提供一個「求職工具」，更在於展示 AI Agent 如何進入一個明確定義的工作流程，並將職位篩選、素材生成、機會追蹤、面試準備和批次處理分解為可執行的任務鏈。

## 2. learn-claude-code

![learn-claude-code-6gfiw7.png](https://static-docs.nocobase.com/learn-claude-code-6gfiw7.png)

官方網站：[https://learn.shareai.run](https://learn.shareai.run/)

GitHub：[https://github.com/shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)

GitHub Stars：66.1k

### 專案介紹

learn-claude-code 是一個用於學習類似 Claude Code 的 Agent 框架的開源專案。它圍繞「Agent 產品 = 模型 + 框架」的理念建構，解釋了工具、知識、觀察、動作介面、權限邊界、上下文管理、多 Agent 協作等概念。

### 適合場景

learn-claude-code 更像是為開發者提供的系統性學習資料，幫助使用者理解 AI 程式碼 Agent 背後的機制。它涵蓋了 Agent 循環、工具使用、權限、鉤子、記憶體、任務系統、MCP 和多 Agent 協作。它適合個人學習，也可以作為團隊建構 Agent 工程能力的內部培訓資料。

## 1. Hermes Agent

![Hermes Agent-500tav.png](https://static-docs.nocobase.com/Hermes%20Agent-500tav.png)

官方網站：[https://hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/)

GitHub：[https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

GitHub Stars：191k

### 專案介紹

Hermes Agent 是由 Nous Research 建構的自我改進型 AI Agent。它的官方描述是「與你一同成長的 Agent」。它強調 Agent 可以在持續使用中創建和改進技能，記錄和搜尋過去的對話，並逐漸理解使用者的長期偏好和上下文。

### 適合場景

Hermes Agent 適合需要長期運行、長期記憶和技能積累的 Agent 場景：

* **自託管 Agent**：建構一個可以持續運行、記錄歷史對話並重複使用技能的個人或團隊 Agent。
* **長期協作助手**：透過記憶體、技能和工具呼叫，Agent 可以在重複使用中逐漸積累上下文和工作方法。

💡延伸閱讀：[使用 Hermes 提升內部工具效率：5 個推薦的開源專案](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)

🔎相關資源：

技能系統：[https://hermes-agent.nousresearch.com/docs/user-guide/features/skills](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) 技能目錄：[https://github.com/NousResearch/hermes-agent/blob/main/website/docs/reference/skills-catalog.md](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/reference/skills-catalog.md)

## 常見問題

### Q1：我該如何選擇這些工具？

A：你可以先確定你想解決哪一類問題。如果你想提升個人生產力，可以優先考慮 Cherry Studio、Nanobot、Hermes Agent 和 SiYuan。如果你正在開發 AI Agent 或 AI Copilot，可以看看 OpenClaude、CopilotKit 和 learn-claude-code。如果你想讓 Agent 呼叫外部工具和網頁能力，可以看看 OpenCLI、Agent-Reach 和 Google Workspace CLI。如果你在建構企業業務系統並實現工作流程，NocoBase 值得關注。


| 目標                                 | 推薦工具               |
| ------------------------------------ | ------------------------------- |
| 建構企業內部系統    | NocoBase                        |
| 網頁自動化和工具呼叫      | OpenCLI, Agent-Reach            |
| 辦公系統自動化             | Google Workspace CLI            |
| AI 程式碼 / 終端 Agent           | OpenClaude, learn-claude-code   |
| 產品內 AI Copilot                | CopilotKit                      |
| 個人 AI 助手                | Nanobot, Hermes Agent, CowAgent |
| 多模型工作檯                | Cherry Studio                   |
| 知識管理                 | SiYuan                          |
| 垂直 Agent 應用參考 | career-ops                      |

### Q2：非技術團隊可以使用這些 AI Agent 工具嗎？

可以，但取決於工具類型。

**OpenCLI、Agent-Reach、Google Workspace CLI、OpenClaude、CopilotKit 和 learn-claude-code** 等專案更像是 CLI 工具、開發框架或 Agent 工程學習資料。它們需要一定的技術基礎。

**Cherry Studio 和 SiYuan** 等工具具有更友好的介面，業務使用者更容易直接上手。

**NocoBase** 介於兩者之間。非技術使用者可以使用已經建構好的系統和 AI 員工。有一定技術背景的使用者可以更好地配置資料模型、頁面、權限和工作流程。如果有開發資源，團隊還可以透過插件、API、技能和 MCP 對其進行更深度的擴展。

### Q3：企業在使用 AI Agent 時最應該注意什麼？

企業在使用 AI Agent 時，不應只關注模型能力，還需要考慮資料、權限、工作流程和審計。一旦 Agent 進入業務系統，它可能會存取客戶資料、訂單資訊、審批工作流程、合約內容或內部文件。需要明確的邊界。


| 關鍵問題                            | 需要關注的能力                                         |
| ------------------------------------ | ---------------------------------------------------------------- |
| 資料是否可控？                | 自託管、資料庫權限、資料存取範圍            |
| 操作是否可追溯？            | 審計日誌、活動日誌、工作流程記錄                      |
| 權限是否清晰？               | 角色權限、欄位權限、資料範圍控制          |
| 關鍵操作是否需要確認？ | 人工確認節點、審批工作流程、觸發條件 |
| Agent 輸出是否穩定？              | 結構化輸出、重試機制、人工審查                |

NocoBase 等業務系統平台的價值在於，它們將 AI 放置在一個具有權限、工作流程和資料模型的系統環境中，而不是讓 Agent 直接面對分散的資料和不受控制的操作。對於審批、客服、資料輸入和報告生成等場景，人工確認和審計記錄仍然非常重要。

### Q4：多個工具可以組合使用嗎？

可以。AI Agent 生態系統無法由單一工具涵蓋。許多團隊在不同層級使用不同的工具：有些負責建構系統，有些負責呼叫網頁，有些負責編寫程式碼，有些負責知識管理，有些負責前端 AI 互動。


| 組合場景                     | 參考組合                     |
| ---------------------------------------- | ----------------------------------------- |
| 業務系統 + AI 員工            | NocoBase + AI 員工                    |
| 業務系統 + 外部程式碼 Agent  | NocoBase + Claude Code / Codex / OpenCode |
| 網頁操作 + 資訊整理 | OpenCLI + Agent-Reach                     |
| 產品內 AI Copilot                    | CopilotKit + 業務系統 API          |
| 知識庫 + Agent                   | SiYuan + Nanobot / Hermes Agent           |
| 多模型日常工作檯              | Cherry Studio + 各種模型服務    |

## 結論

AI Agent 工具正在迅速分化到不同的方向。有些工具專注於模型呼叫和任務執行，有些專注於網頁自動化和外部資訊存取，有些專注於 AI 程式碼和 Agent 框架，還有一些開始進入企業業務系統和長期流程管理。

對於個人使用者來說，最好從知識管理、個人助手、AI 程式碼或瀏覽器自動化等輕量級場景開始。對於企業團隊來說，更重要的問題是 Agent 能否進入真實的業務工作流程，並在資料、權限、工作流程和審計機制的約束下穩定運行。

**如果這篇文章對你有幫助，歡迎分享給關注開源 AI Agent 工具、AI 自動化和企業內部系統建構的朋友。**

**相關閱讀**：

* **[GitHub Stars 排名前 8 的開源 AI 助手工具](https://www.nocobase.com/en/blog/top-open-source-ai-assistant-tools-github-stars)**
* **[6 個可與 WorkBuddy 搭配使用的開源工具](https://www.nocobase.com/en/blog/workbuddy-open-source-tools)**
* **[GitHub Stars 排名前 6 的開源 AI 工具，打造更強大的 AI Agent](https://www.nocobase.com/en/blog/6-github-top-open-source-ai-tools-for-ai-agents)**
* **[5 個可與 Hermes Agent 搭配使用的開源內部工具](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)**
* **[OpenClaw 與 5 個用於監控業務工作流程的開源工具](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)**
* **[哪些開源工具與 OpenCode 搭配良好？5 個值得嘗試的專案](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)**
* **[使用 Codex 建構內部工具：6 個面向開發者的開源專案](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)**
* **[Claude Code 之後：你應該了解的 6 個開源工具](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)**
* **[企業軟體開發的 10 大開源 AI 和無程式碼工具](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)**
* **[8 個用於建構內部工具的開源 AI Agent 平台](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)**
* **[最佳企業級自託管 CRM：支援 RBAC、AI 和開放 API](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)**
* **[6 個最佳開源工具，取代自訂整合中介軟體](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)**
* **[Airtable vs. NocoBase：從 Excel 遷移的真實成本](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)**

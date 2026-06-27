---
title: "GitHub Stars 排名前 8 的開源 AI 助手工具"
description: "探索八款高星級開源 AI 助手工具，適用於企業系統、桌面工作流程、開發及應用內副駕駛。"
---

過去幾週，我們整理了幾個能與熱門 AI Agent 搭配使用的開源工具：

[💡用了 Claude Code 之後，你需要這 6 個開源工具](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

[💡別讓 Codex 從零生成應用：6 個可組合的開源專案](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)

最近在逛 Reddit 時，我們發現除了 AI Agent，AI Assistant 仍然是許多用戶熱烈討論的主題。相較於強調自主規劃與任務執行的 Agent，Assistant 更像是日常工作的入口，可以服務個人、小型團隊與企業。

在 r/AI_Agents 的一則討論中，有使用者正在尋找一個[真正值得長期使用的個人 AI Assistant](https://www.reddit.com/r/AI_Agents/comments/1t7c020/what_ai_personal_assistants_are_actually_worth/)，希望能幫助管理筆記、任務、行事曆、郵件、提醒與聯絡人等日常資訊。

![Raddit1.png](https://static-docs.nocobase.com/Raddit1-6ez8j5.png)

另一則討論則更聚焦於企業與團隊場景。該使用者經營一家服務代理商，需要為小型企業客戶處理網站內容、郵件與社群媒體工作，因此想了解[哪些 AI Assistant 或 AI 工具](https://www.reddit.com/r/AI_Agents/comments/1qfuity/what_is_the_best_ai_assistant_for_small_businesses/)能符合他們的需求。

![Raddit2.png](https://static-docs.nocobase.com/Raddit2-ouhn35.png)

從這些討論中可以看出，AI Assistant 的需求大致可分為兩類：個人使用與企業或團隊使用。

---

💬 嘿，你正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 驅動無程式碼/低程式碼開發平台，用於建構企業應用、內部工具與各類系統。它完全自託管、基於插件、對開發者友善。→[在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

**個人 AI Assistant**：主要協助個人用戶管理日常資訊並提升生產力，例如整理筆記、跟進任務、管理行事曆、處理郵件、設定提醒、呼叫本地工具，或在桌面與開發環境中提供支援。

**企業 AI Assistant**：更適合團隊與企業使用。它們能連接業務系統、嵌入應用程式介面、處理客戶溝通、支援內容營運、自動化工作流程，並圍繞資料、權限與任務協作提供支援。

基於這個想法，我們收集了 GitHub 的 [ai-assistant](https://github.com/topics/ai-assistant) 主題下排名靠前的高星專案，並選出 8 個值得詳細介紹的開源專案。

以下，我們將分為企業 AI Assistant 與個人 AI Assistant 兩類進行回顧。由於個人 AI Assistant 通常有更直接的桌面、開發工具與日常生產力使用場景，而企業 AI Assistant 則常涉及業務系統、權限流程、資料管理、應用嵌入與團隊協作，因此本文將更側重於企業 AI Assistant。


| 類別                | 專案         | GitHub Stars | 定位                                                                   |
| ----------------------- | --------------- | ------------ | ------------------------------------------------------------------------- |
| 企業 AI Assistant | NocoBase        | 22.7k        | AI 驅動的無程式碼平台，用於建構與維護業務系統 |
| 企業 AI Assistant | NanoClaw        | 29.8k        | 以聊天為入口、容器化運行的 AI Assistant       |
| 企業 AI Assistant | CopilotKit      | 34.3k        | 用於應用內 AI Copilot 與生成式 UI 的前端框架               |
| 企業 AI Assistant | Ruflo           | 58.6k        | 多 Agent 協作與自動化工作流程助手               |
| 個人 AI Assistant   | DeepChat        | 6k           | 連接模型、工具與個人情境的桌面助手       |
| 個人 AI Assistant   | Everywhere      | 6k           | 桌面情境感知 AI Assistant                                        |
| 個人 AI Assistant   | CopilotForXcode | 6.1k         | 適用於 Xcode 的 AI 程式碼助手                                             |
| 個人 AI Assistant   | Leon            | 17.3k        | 開源個人 AI Assistant                                         |

## 企業 AI Assistant

## NocoBase

**網站**： [https://www.nocobase.com/](https://www.nocobase.com/)

**線上 Demo**： [https://demo.nocobase.com/new](https://demo.nocobase.com/new)

**文件**： [https://docs.nocobase.com/](https://docs.nocobase.com/)

**GitHub**： [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**Stars**： 22.7k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-ibmr8j.png)

### 介紹

NocoBase 是一個開源的 AI 驅動無程式碼平台，用於快速建構企業內部業務系統。在 NocoBase 中，使用者可以用自然語言描述業務需求，讓 AI 協助進行資料模型設計、頁面配置、工作流程編排、權限設定、插件管理等。NocoBase 也支援 AI Employee、AI Skills、CLI 等功能，讓 AI 能持續圍繞現有業務系統工作，而非止於一次性應用生成。

這對於企業內部系統尤其重要。許多業務應用並非一次生成就完成，它們通常需要持續調整欄位、權限、工作流程、頁面與資料關係。NocoBase 的價值在於為 AI 提供了一個結構化的系統環境，讓 AI 能在現有的資料模型、權限、工作流程與插件系統中工作。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-8bkkfe.png)

### 核心功能

* **AI 參與業務系統建構**

NocoBase 支援用自然語言描述業務需求，讓 AI 協助建立資料表、欄位、關係、頁面與工作流程的初始版本。例如，使用者可以描述一個客戶管理、工單管理、合約審批或專案儀表板場景。AI 可以先產生系統基礎，團隊再進行審查與調整。

這種方式更適合企業內部系統，因為業務系統通常需要清晰的資料結構、角色權限與工作流程規則。AI 提升建構效率，而人類則確認業務邏輯並控制系統邊界。

🔎相關資源：

CLI： [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills： [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP： [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

* **AI Employee 能持續參與系統運作**

NocoBase 的 AI Employee 能自動使用頁面資料與結構作為上下文，理解業務場景並直接執行任務。它們可以摘要郵件、分析資料、整理非結構化內容並自動填寫表單、設計資料模型，甚至編寫 JavaScript 程式碼。每個 AI Employee 都有獨立的 Skills、工具與知識庫。企業可以建立任意數量的 AI Employee，打造自己的 AI 團隊。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-cebxw6.png)

* **無程式碼能力降低後續維護成本**

許多 AI 生成工具能快速產生程式碼，但後續維護通常依賴開發者。NocoBase 則不同。AI 生成系統後，使用者仍可進入無程式碼介面繼續修改欄位、頁面、選單、動作按鈕、權限與工作流程。

對業務團隊而言，這意味著系統不會停留在一次性展示。每當業務變動，團隊都能在平台內持續調整，無需每次都回到程式碼開發流程。

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-oh4h11.png)

* **適用於企業級資料、權限與工作流程**

當企業 AI Assistant 實際落地時，資料、權限與工作流程是無法迴避的。NocoBase 具備資料模型、角色權限、工作流程、插件擴展與多資料來源等能力，使其成為 AI Assistant 在業務系統中工作的堅實基礎。

例如，AI 可以圍繞客戶、訂單、工單、專案、庫存、合約等業務物件工作。同時，不同角色可以擁有不同的資料存取範圍與操作權限，避免所有人都看到相同資訊或執行相同操作。

* **適合從特定場景開始**

使用 NocoBase 時，不建議一開始就讓 AI 建構完整的 ERP 或複雜企業系統。更好的方式是從一個明確的小場景開始，例如客戶管理、採購申請、設備台帳、售後工單、合約審批、專案儀表板或庫存記錄。

當一個特定場景運作良好後，再逐步擴充欄位、頁面、工作流程與權限。這能讓 AI 生成的結果更貼近業務，也讓團隊後續的審查與維護更容易。

### 適用場景

* [CRM 客戶管理系統](https://www.nocobase.com/en/solutions/all-in-one/crm)
* 審批系統
* [工單系統](https://www.nocobase.com/en/solutions/all-in-one/ticketing)
* [專案管理系統](https://www.nocobase.com/en/solutions/all-in-one/project)
* 輕量級 ERP 模組，如採購、庫存、訂單
* 營運後台與管理後台
* 設備管理、[資產管理](https://www.nocobase.com/en/solutions/all-in-one/asset)與檔案管理
* 客戶跟進與服務管理
* 需要私有化部署的企業內部系統
* 需要權限、工作流程、資料模型與持續調整的業務應用
* 希望結合 AI 與無程式碼能力建構內部系統的團隊

## NanoClaw

**GitHub**： [https://github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

**官方網站**： [https://nanoclaw.dev](https://nanoclaw.dev/)

**Stars**： 29.8k

![NanoClaw1.png](https://static-docs.nocobase.com/NanoClaw1-of21br.png)

### 介紹

NanoClaw 是一個輕量級的 AI Assistant 專案，專注於在容器中運行 Agent，並連接到 WhatsApp、Telegram、Slack、Discord 與 Gmail 等訊息頻道。它更像是一個以聊天為入口、具備容器隔離能力的企業級 AI Assistant，適合希望透過聊天工具呼叫 Agent、處理任務與安排自動化工作流程的使用者。

與一般聊天助手相比，NanoClaw 更強調安全隔離與可控的運行環境。每個 Agent 可以在獨立的容器中運行，減少對主機系統與其他任務的影響。

### 核心功能

* **容器化運行**：Agent 在獨立容器中運行，更容易隔離檔案系統與運行環境。
* **豐富的訊息頻道**：支援 Telegram、Discord、WhatsApp、Slack、Gmail 等入口，適合將 AI Assistant 連接到日常協作工具。
* **輕量且可自訂**：相較於大型 Agent 系統，NanoClaw 強調程式碼結構清晰、易於理解且方便自訂。

![NanoClaw2.png](https://static-docs.nocobase.com/NanoClaw2-vn9die.png)

### 適用場景

* 透過 Telegram、Discord、Slack 等訊息工具呼叫 AI Assistant。
* 為個人或團隊建立自託管的任務處理入口。
* 在更安全、隔離的環境中運行 Agent 任務。

## CopilotKit

**GitHub**： [https://github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

**官方網站**： [https://docs.copilotkit.ai](https://docs.copilotkit.ai/)

**Stars**： 34.4k

![CopilotKit1.png](https://static-docs.nocobase.com/CopilotKit1-hb37we.png)

### 介紹

CopilotKit 是一個用於建構 AI Copilot、生成式 UI 與 Agent 應用的前端框架。它更適合理解為一個用於應用內 AI Assistant 的開發框架。它可以將 Agent 能力嵌入使用者已經在使用的介面中，例如 Web、行動應用、Slack 與 Teams。

它的重點不僅是提供一個聊天視窗。它還支援生成式 UI、共享狀態與人工確認工作流程，適合需要將 AI Assistant 深度整合到產品互動中的團隊。

![CopilotKit2.png](https://static-docs.nocobase.com/CopilotKit2-krgkmy.png)

### 核心功能

* **應用內 Copilot**：將 AI Assistant 直接嵌入現有應用程式中，而非要求使用者切換到獨立的聊天工具。
* **生成式 UI**：Agent 能根據任務狀態與使用者意圖生成或更新 UI 元件。
* **人工確認工作流程**：支援人在迴路（human-in-the-loop），讓使用者在關鍵步驟確認、修改或接管任務。

### 適用場景

* 將 AI Copilot 嵌入 SaaS 產品中。
* 建構能讀取應用狀態、呼叫工具並生成介面的 AI Assistant。
* 需要將 Agent 工作流程整合到 Slack、Teams 或 Web 應用中的團隊。

## Ruflo

**GitHub**： [https://github.com/ruvnet/ruflo](https://github.com/ruvnet/ruflo)

**官方網站**： [https://flo.ruv.io](https://flo.ruv.io/)

**Stars**： 58.6k

![Ruflo1.png](https://static-docs.nocobase.com/Ruflo1-06q7de.png)

### 介紹

Ruflo 是一個專為 Claude Code 與 Codex 設計的多 Agent 協作平台，用於協調多個專業 Agent、自動化工作流程與團隊級任務。它更像是企業 AI Assistant 背後的 Agent 協作基礎，適用於複雜的開發、測試、安全、文件、架構與 DevOps 場景。

其核心價值是將單一 Agent 的能力擴展為多 Agent 協作，讓任務能被拆分、路由、執行與記憶。

### 核心功能

* **多 Agent 協作**：支援多個專業 Agent 在開發、測試、安全、文件等任務上協同工作。
* **專為複雜工作流程設計**：能與 Claude Code / Codex 協作，處理編碼、測試、審計、文件生成等工作流程。
* **插件與記憶能力**：提供插件系統、向量記憶與任務協調能力，適用於更複雜的 Agent 工作環境。

![Ruflo2.png](https://static-docs.nocobase.com/Ruflo2-u9z8jz.png)

### 適用場景

* 多個 Agent 需要協作完成開發任務。
* 團隊希望自動化程式碼審查、測試生成、文件維護、安全掃描等工作流程。
* 團隊需要在 Claude Code 或 Codex 之上擴展更複雜的 Agent 協作能力。

## 個人 AI Assistant

## DeepChat

**GitHub**： [https://github.com/ThinkInAIXYZ/deepchat](https://github.com/ThinkInAIXYZ/deepchat)

**官方網站**： [https://deepchat.thinkinai.xyz](https://deepchat.thinkinai.xyz/)

**Stars**： 6k

![DeepChat.png](https://static-docs.nocobase.com/DeepChat-eap6c8.png)

### 介紹

DeepChat 是一個開源的桌面 AI Assistant 平台，支援多種雲端與本地大型語言模型，並整合了 MCP 工具呼叫、Skills、ACP Agent 整合與遠端控制能力。它更像是一個連接模型、工具與個人情境的桌面助手。

對個人用戶而言，DeepChat 的優勢在於將多模型聊天、本地模型、工具呼叫、搜尋增強與技能工作流程整合到一個桌面應用程式中。

### 核心功能

* **統一的多模型管理**：支援多種模型提供商，包括 OpenAI、Gemini、Anthropic、DeepSeek 與 Ollama。
* **工具與技能支援**：內建 MCP、Skills 與 ACP Agent 整合，可擴展程式碼審查、文件處理、PDF、PPT、試算表等任務能力。
* **遠端控制**：支援透過 Telegram、飛書、QQBot、Discord、微信 iLink 等頻道控制 DeepChat 會話。

## Everywhere

**GitHub**： [https://github.com/Sylinko/Everywhere](https://github.com/Sylinko/Everywhere)

**官方網站**： [https://everywhere.sylinko.com](https://everywhere.sylinko.com/)

**Stars**： 6k

![Everywhere.png](https://static-docs.nocobase.com/Everywhere-hesiph.png)

### 介紹

Everywhere 是一個專注於螢幕情境感知與上下文理解的桌面 AI Assistant。它能感知當前應用程式與螢幕內容，讓使用者在當前工作環境中呼叫 AI 協助，而無需頻繁截圖、複製內容或切換視窗。

它更像是一個桌面情境感知助手，適合個人用戶在閱讀、翻譯、故障排除、摘要與跨應用工作時使用。

### 核心功能

* **螢幕情境感知**：理解當前螢幕與應用環境，減少複製貼上與視窗切換。
* **快速呼叫**：使用快捷鍵在當前場景中呼叫 AI Assistant，更貼近桌面工作流程。
* **支援多種模型與 MCP 工具**：能結合不同的 LLM 與 MCP 工具，在桌面環境中完成更多操作。

## GitHub Copilot for Xcode

**GitHub**： [https://github.com/github/CopilotForXcode](https://github.com/github/CopilotForXcode)

**官方網站**： [https://github.com/github/CopilotForXcode](https://github.com/github/CopilotForXcode)

**Stars**： 6.1k

![GitHub Copilot for Xcode.png](https://static-docs.nocobase.com/GitHub%20Copilot%20for%20Xcode-8j5kvk.png)

### 介紹

GitHub Copilot for Xcode 是一個專為 Xcode 設計的 AI 程式碼助手，主要服務 Swift、Objective-C、iOS 與 macOS 開發場景。它更像是一個直接嵌入 Xcode 的開發者助手，提供程式碼補全、聊天、程式碼審查、Agent Mode 等功能。

對 Apple 生態系的開發者而言，其價值在於將 AI 程式設計輔助帶入原生開發環境，減少在 Xcode 與其他 AI 工具之間來回切換的需求。

### 核心功能

* **原生 Xcode 整合**：專為 Swift、Objective-C、iOS 與 macOS 開發設計，並直接在 Xcode 中使用。
* **程式碼補全與聊天**：支援程式碼建議、Copilot Chat、程式碼審查等功能。
* **Agent Mode**：能理解與修改程式碼庫、搜尋相關檔案、建立檔案並運行 MCP 工具。

## Leon

**GitHub**： [https://github.com/leon-ai/leon](https://github.com/leon-ai/leon)

**官方網站**： [https://getleon.ai](https://getleon.ai/)

**Stars**： 17.3k

![Leon.png](https://static-docs.nocobase.com/Leon-0uz82q.png)

### 介紹

Leon 是一個圍繞工具、上下文、記憶與 Agent 風格執行而建構的開源個人 AI Assistant。它更像是一個可以在本地或伺服器上運行的個人助手，適合重視隱私、控制權與可擴展性的使用者。

與一般聊天助手相比，Leon 強調透過真實工具完成任務，並結合記憶與上下文，使其回答與行動更貼近使用者的真實環境。

### 核心功能

* **明確的個人助手定位**：專為個人任務、語音、自動化、記憶與本地環境設計。
* **支援工具、技能與記憶**：能使用本地工具、技能與分層記憶來完成更具體的任務。
* **平衡本地與遠端模型**：支援本地與遠端 AI 提供商，方便在隱私與能力之間做出選擇。

## 常見問題

## 1. 選擇開源 AI Assistant 時應考慮什麼？

選擇開源 AI Assistant 時，可以關注五個方面：專案是否活躍維護、是否支援你的使用場景、是否能連接到現有工具或系統、是否支援自託管或私有化部署、以及是否有清晰的文件與活躍的社群。

個人用戶可以優先考慮易用性、模型支援、本地工具呼叫與桌面體驗。企業用戶則應更關注權限、資料結構、工作流程自動化、系統整合與長期維護能力。

## 2. 如果想為企業建構內部業務系統，應該選擇哪個 AI Assistant 專案？

如果你的目標是建構企業內部業務系統，例如 CRM、審批系統、工單系統、專案管理、庫存管理與營運後台，可以先看看 **NocoBase**。

NocoBase 更適合支援企業業務資料、權限、工作流程與頁面配置。它不僅能用 AI 協助建構系統，還能在生成後透過無程式碼介面持續調整欄位、頁面、權限與工作流程。對於需要長期維護的企業內部系統，這類結構化平台更可靠。

## 3. 如果只需要一個個人使用的桌面 AI Assistant，應該選哪個？

如果你主要是個人使用，希望從一個桌面應用程式中使用多種模型、處理檔案、呼叫工具與整理資訊，可以先看看 **DeepChat** 或 **Everywhere**。

DeepChat 更適合將多模型、MCP、Skills 與遠端控制能力整合到一個桌面應用程式中。Everywhere 則強調螢幕情境感知與上下文理解，適合閱讀、翻譯、故障排除與摘要網頁或文件。

## 4. 如果我是開發者，想在開發工具中使用 AI Assistant，應該選哪個？

如果你是 Apple 生態系的開發者，主要使用 Xcode 建構 iOS、macOS、Swift 或 Objective-C 專案，可以先看看 **GitHub Copilot for Xcode**。

它更適合做為直接嵌入 Xcode 的開發者助手，提供程式碼補全、聊天、程式碼審查、Agent Mode 等功能。如果你的需求更偏向多 Agent 協作、程式碼審查、測試生成、文件維護與 DevOps 工作流程，也可以看看 **Ruflo**。

## 5. 如果想將 AI Assistant 嵌入自己的產品介面中，應該選哪個？

如果你正在建構 SaaS 產品、Web 應用或內部產品，並希望將 AI Assistant 直接嵌入應用程式介面，可以先看看 **CopilotKit**。

CopilotKit 更適合建構應用內 Copilot。它允許 AI Assistant 讀取應用狀態、呼叫工具、生成介面，並在關鍵步驟加入人工確認工作流程。對於希望為產品添加 AI Copilot、生成式 UI 或 Agent 工作流程的團隊來說，它是一個更合適的選擇。

## 6. 如果想建構一個開源個人 AI Assistant，該如何選擇？

Leon 更偏向個人助手方向，適用於個人任務、語音互動、工具呼叫、記憶與自動化場景。它適合重視隱私、自託管、長期記憶與可擴展性的使用者。如果你想要一個能逐步連接到本地環境與個人工作流程的助手，Leon 比單純的聊天工具更接近這個方向。

## 7. NocoBase 只適用於企業嗎？個人用戶可以使用嗎？

**NocoBase** 不僅適用於企業。個人用戶也可以用它來建構自己的管理系統或知識庫。其開源版本是免費的，對個人用戶也很友善。

例如，個人可以使用 NocoBase 建構知識庫、閱讀日誌、任務管理系統、資源庫、專案儀表板、客戶跟進表、內容主題庫等系統。只要你的需求涉及資料表、欄位、關係、頁面與長期整理，NocoBase 都可以作為一個輕量級的個人管理平台。

**⭐ 如果這篇文章對你有啟發，歡迎分享給同樣對開源 AI 工具與生產力提升感興趣的朋友。**


**相關閱讀**

* [6 個可與 WorkBuddy 搭配使用的開源工具](https://www.nocobase.com/en/blog/workbuddy-open-source-tools)
* [GitHub Stars 最高的 6 個開源 AI 工具，打造更強大的 AI Agent](https://www.nocobase.com/en/blog/6-github-top-open-source-ai-tools-for-ai-agents)
* [5 個可與 Hermes Agent 搭配使用的開源內部工具](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw 與 5 個用於監控業務工作流程的開源工具](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [哪些開源工具能與 OpenCode 良好搭配？5 個值得嘗試的專案](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [使用 Codex 建構內部工具：6 個適合開發者的開源專案](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Claude Code 之後：你應該了解的 6 個開源工具](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [企業軟體開發的 10 大開源 AI 與無程式碼工具](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 個用於建構內部工具的開源 AI Agent 平台](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [支援 RBAC、AI 與開放 API 的最佳企業級自託管 CRM](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 個最佳開源工具，取代自訂整合中介軟體](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [用 NocoBase 或 Airtable 取代 Excel？逐項成本比較](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)

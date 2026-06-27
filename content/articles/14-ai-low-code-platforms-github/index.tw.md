---
title: "14 個值得關注的 GitHub AI 驅動低程式碼平台"
description: "我們整理了 GitHub 上 14 個熱門的 AI 驅動低程式碼平台，涵蓋工作流程、代理、系統建構和智慧資料庫，幫助您打造更智慧、更具擴展性的系統。"
---

📝 注意：本文最後更新於 2026 年 1 月 21 日。我們會定期更新資訊，確保您獲得最新見解！😊

最近我在 Reddit 上看到一則非常直白的評論：

![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

> *「這些無程式碼 AI 平台撐不過一年。如果 AI 真的那麼強大，就不該還得靠拖曳工作流程區塊來建構功能。」*

這個觀點很犀利，但這則評論是八個月前發的。現在回頭看，這些工具並沒有消失。許多工具變得更加成熟，新的專案也不斷出現。

幾天前，我們也回顧了一份 [GitHub 上最受歡迎的開源無程式碼 AI 工具清單](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)。根據星數、社群活躍度和功能成熟度來看，許多專案不僅活躍，而且持續進化，AI 能力也更強大。

有些 Reddit 用戶仍認為，大多數 AI 低程式碼工具都處於早期階段，某些所謂的 AI 代理只是連接到 LLM 的自動化工具。

![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

---

💬 嘿，您正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 驅動無程式碼/低程式碼開發平台，用於建構企業應用程式、內部工具和各種系統。它完全自託管、基於插件且對開發者友好。→[在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

根據我們的觀察，低程式碼生態系統一直在穩步發展。許多平台已經透過資料建模、工作流程邏輯、插件擴展和 AI 驅動協作來支援真實的業務場景。

為了撰寫這篇文章，我們探索了 GitHub 的低程式碼主題，並確定了 14 個已經以實用方式整合 AI 的平台。我們將它們分為三類：業務系統建構工具、代理工作流程工具和基於資料表的應用程式。

在深入細節之前，您可以使用下面的比較表來清楚了解這 14 個工具的定位和 AI 應用方式。👇

**比較表（AI 功能 × 工具定位概覽）**


| 工具       | 類別           | AI 使用方式                           | 工作流程可擴展性     | 支援建模/UI | 表格/資料支援 | 跨領域能力                      |
| ---------- | -------------- | -------------------------------------- | ----------------------- | -------------------- | ------------------ | -------------------------------- |
| NocoBase | 商業應用程式  | AI 生成資料模型、頁面、邏輯 | ✅ 插件 + 自動化 | ✅ 完整              | ✅                 | ⭐ 強（資料 + 系統 + 流程） |
| ToolJet  | 商業應用程式  | AI Copilot 生成頁面/API 腳本 | ⚠️ 輕量流程        | ✅                   | ⚠️               | 中等                           |
| Appsmith | 商業應用程式  | AI 生成 SQL 和表單邏輯        | ⚠️                    | ✅                   | ⚠️               | 中等                           |
| Budibase | 商業應用程式  | AI 填寫欄位、生成表單文字   | ⚠️                    | ✅                   | ⚠️               | 弱                             |
| refine   | 商業應用程式  | AI 生成 CRUD 邏輯和程式碼        | ❌                      | ✅ (程式碼導向)    | ❌                 | 無                               |
| n8n      | 工作流程/代理 | AI 任務、API 呼叫                    | ✅                      | ❌                   | ❌                 | 無                               |
| Dify     | 工作流程/代理 | 代理、知識庫、工具呼叫   | ✅                      | ❌                   | ⚠️               | 無                               |
| Flowise  | 工作流程/代理 | RAG、視覺化 LLM 鏈                 | ⚠️                    | ❌                   | ⚠️               | 無                               |
| Kestra   | 工作流程/代理 | AI 生成 YAML 工作流程            | ✅                      | ❌                   | ❌                 | 無                               |
| Node-RED | 工作流程/IoT   | AI 節點 + 裝置/事件自動化     | ⚠️                    | ❌                   | ❌                 | 無                               |
| Sim      | 工作流程/代理 | 多代理協作工作流程    | ⚠️                    | ❌                   | ❌                 | 無                               |
| NocoDB   | 資料表格    | AI 填充、智慧欄位、洞察        | ⚠️                    | ❌                   | ✅                 | 弱                             |
| Teable   | 資料表格    | AI 聊天和自動生成報告     | ⚠️                    | ❌                   | ✅                 | 弱                             |
| Onlook   | AI UI          | AI 生成 UI/元件/React 程式碼  | ❌                      | ⚠️ (UI 導向)    | ❌                 | 特殊 (UI 導向)             |

## **AI 驅動的商業應用程式建構工具**

這些工具不僅僅使用 AI 來回答問題或觸發工作流程——AI 直接參與建構應用程式本身。

它們幫助使用者快速建立資料模型、表單、頁面、權限和內部業務系統，非常適合 CRM、審批、ERP、管理儀表板和資料輸入平台。

### **NocoBase**

⭐️ 星數：20k

網站：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

**概述**：

NocoBase 最初是一個基於資料模型驅動架構和插件系統的開源低程式碼平台。

在 2.0 版本中，它允許 AI 參與系統建構和日常運作。它可以在平台內編寫和執行 JavaScript 以實現複雜的邏輯和自動化，並且 AI 工作人員可以放置在系統的任何部分，以改善整體體驗。

![noocobase2.png](https://static-docs.nocobase.com/noocobase2-83efsk.png)

**建構階段**

AI 工作人員可以根據自然語言生成資料模型、欄位關係、頁面結構和基本邏輯。曾經需要多個配置步驟的任務現在變得更加簡單。在 AI 的協助下，業務系統可以更快成形，大大提高了開發效率。

![noocobase3.png](https://static-docs.nocobase.com/noocobase3-geirqa.png)

**使用階段**

AI 可以查詢和解釋系統資料，並提供相關的見解或建議，例如填寫表單、總結客戶資訊或支援研究任務。

**目標使用者**：建構業務系統的團隊——內部 IT 團隊、B2B 產品團隊、系統整合商。

**使用案例**：CRM、審批工作流程、專案管理、訂單和資產系統，並透過插件支援自動化和 AI 驅動建模。

### **ToolJet**

⭐️ 星數：37k

網站：[https://www.tooljet.ai/](https://www.tooljet.ai/)

GitHub：[https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

**概述**：ToolJet 長期以來一直是建構內部企業應用程式的高效工具。加入 AI 後，開發流程變得更加高效。AI Copilot 可以根據自然語言生成頁面佈局、元件邏輯和基本互動，這消除了開發人員在元件、腳本和 API 之間來回切換的需要。這種「描述即生成」的工作流程減少了手動設定和腳本編寫工作，並幫助團隊以更專注且更具成本效益的方式建構內部工具。

**目標使用者**：需要快速建立內部儀表板的工程、營運或資料團隊。

**使用案例**：管理面板、內部工具、基於 API 的應用程式，AI 可以幫助編寫 SQL、生成佈局或腳本。

### **Appsmith**

⭐️ 星數：38k

網站：[https://www.appsmith.com/](https://www.appsmith.com/)

GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

**概述**：Appsmith 是一個專為內部工具開發設計的開源低程式碼平台，提供強大的元件系統、可靠的資料來源連接和成熟的 CRUD 功能。引入 AI 後，開發體驗變得更加流暢。AI 可以根據自然語言生成 SQL 查詢、表單驗證邏輯和基本腳本，並能自動完成常見的頁面配置。這減少了在程式碼和元件設定之間切換的需要，加快了內部工具開發速度，同時降低了資料驅動應用程式的門檻。

**目標使用者**：前端開發人員、資料工具建構者、建立 CRUD 系統的團隊。

**使用案例**：查詢儀表板、內部管理工具、資料庫工具——例如自然語言 → AI 生成 SQL → 表格輸出。

### **Budibase**

⭐️ 星數：27k

網站：[https://budibase.com/](https://budibase.com/)

GitHub：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

**概述**：Budibase 是一個專為內部業務應用程式設計的開源低程式碼平台。它專注於資料建模、表單建立和基本工作流程，適合中小型企業需求。加入 AI 後，Budibase 透過協助處理例行任務來增強建構過程。

AI 幫助生成欄位內容、填充資料和建立簡單的頁面佈局，減少了表單設定和資料輸入中的重複性工作。雖然它對複雜邏輯的支援仍然有限，但 AI 使 Budibase 在輕量級系統、內部表單工具和資料輸入應用程式方面更加高效。

**目標使用者**：中小型團隊、輕量級內部系統、無程式碼愛好者。

**使用案例**：表單應用程式、內部辦公工具、資料輸入平台。AI 幫助填寫欄位或建立範例資料，但複雜邏輯支援有限。

### **Refine**

⭐️ 星數：33k

網站：[https://refine.dev/](https://refine.dev/)

GitHub：[https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

**概述**：Refine 是一個基於 React 的框架，用於建構管理面板和內部工具。它很好地處理了常見的 CRUD 流程、路由、權限和資料連接。開發人員可以用自然語言描述介面或功能，AI 會生成佈局、互動和基本程式碼，作為一個可直接使用的 React 專案。

**目標使用者**：需要靈活性而非拖放工具的前端開發人員和技術團隊。

**使用案例**：需要程式碼級控制但開發速度仍然重要的管理儀表板和資料工具。不包含後端建模。

## **AI 工作流程 / 代理編排**

這些工具的與眾不同之處在於，AI 不僅僅是生成內容——它積極參與執行工作流程。AI 可以呼叫工具、觸發動作並驅動業務自動化。

將它們視為 AI 增強的流程引擎或代理執行平台，而不是完整的低程式碼業務系統建構器。

它們擅長自動化和執行，但通常缺乏複雜的資料建模、權限系統或 UI/頁面建構能力。

### **n8n**

⭐️ 星數：157k

網站：[https://n8n.io/](https://n8n.io/)

GitHub：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

**概述**：n8n 是一個開源低程式碼自動化平台，透過視覺化介面連接系統、API 和服務。加入 AI 節點後，n8n 可以讓 LLM 在工作流程中分析資料、生成內容、做出決策和呼叫外部 API，而不僅僅是遵循預設規則。

**目標使用者**：營運團隊、支援工程師、自動化專家、中小企業。

**使用案例**：自動化內容生成、資料同步、電子郵件回覆、AI 輔助決策工作流程
（例如 AI 回覆客戶 → 記錄到資料庫 → 發送電子郵件）。

### **Dify**

⭐️ 星數：119k

網站：[https://dify.ai/](https://dify.ai/)

GitHub：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

**概述**：Dify 是一個用於建構 AI 應用程式和代理的開源平台。它提供模型管理、知識庫、對話編排和工具整合。憑藉這些功能，Dify 支援多步驟推理、API 呼叫、資料存取和視覺化代理工作流程建構，使團隊能夠從對話順利過渡到系統操作。

**目標使用者**：建構 AI 助手、知識機器人或原型產品的產品團隊和開發人員。

**使用案例**：知識庫聊天機器人、自動化工單處理、執行 API 操作的 AI 代理。

### **Flowise**

⭐️ 星數：47k

網站：[https://flowiseai.com/](https://flowiseai.com/)

GitHub：[https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

**概述**：Flowise 是一個用於建構 AI 代理和 LLM 工作流程的開源低程式碼視覺化平台。它提供視覺化建構器、執行追蹤、API 和 SDK 整合以及本地部署。憑藉內建的 AI 功能，Flowise 支援多步驟代理、工具使用和知識檢索。團隊只需拖放連接節點即可設計人機協作和工作流程邏輯。

**目標使用者**：AI 開發人員、原型團隊、早期初創公司。

**使用案例**：知識問答、輕量級聊天機器人、多步驟推理演示——不適合完整的業務系統。

### **Kestra**

⭐️ 星數：23k

網站：[https://kestra.io/](https://kestra.io/)

GitHub：[https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

**概述**：Kestra 是一個用於任務編排和排程的開源平台，專為視覺化工作流程、執行計劃和監控而設計。它支援 AI 輔助的 YAML 工作流程生成、模型呼叫和條件邏輯。使用者可以使用自然語言或範本建立複雜的任務鏈，並透過詳細的日誌追蹤執行情況。

**目標使用者**：資料工程師、後端開發人員、DevOps 團隊。

**使用案例**：AI 生成的排程任務、資料管道、API 任務鏈——專注於後端執行。

### **Node-RED**

⭐️ 星數：22k

網站：[https://nodered.org/](https://nodered.org/)

GitHub：[https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

**概述**：Node-RED 是一個事件驅動的視覺化流程工具，透過節點連接裝置、服務和 API，以建構自動化邏輯和資料管道。該平台提供多種 AI 節點，用於模型推理、內容生成、資訊分析和條件決策。流程可以根據模型輸出執行更靈活的動作。節點還可以與 IoT 裝置、Webhook 或系統事件整合，以建立端到端的處理工作流程。

**目標使用者**：自動化工程師、硬體開發人員、智慧家庭/IoT 團隊。

**使用案例**：攝影機偵測到動作 → AI 做出決策 → 觸發開關；裝置異常 → AI 分析 → 發送警報。

### **Sim**

⭐️ 星數：18k

網站：[https://www.sim.ai/](https://www.sim.ai/)

GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

**概述**：Sim 是一個用於建構多代理協作工作流程的開源平台。它透過視覺化介面組織模型、工具和任務步驟。該平台支援多模型協作、工具呼叫、任務分解和流程執行。代理可以在同一個工作流程中進行通訊、分工並完成推理或操作。使用者可以根據需要配置角色、能力和任務鏈，以生成可執行的多代理系統。

**目標使用者**：建構多角色代理的 AI 團隊、智慧助手初創公司。

**使用案例**：AI 助手、自動化報告生成、智慧任務執行——儘管不如 n8n 或 Dify 成熟。

## **AI + 智慧試算表 / 資料庫工具**

這些工具不專注於工作流程執行或完整的業務系統——它們的核心價值在於讓資料和試算表變得更智慧。

在這裡，AI 主要用於生成、完成、查詢和分析資料——而不是處理複雜的業務邏輯。

它們可以被視為「Airtable / Notion 資料庫的 AI 增強版」，非常適合資料驅動的團隊、內容營運或知識管理——而不是繁重的業務系統或工作流程自動化。

### **NocoDB**

⭐️ 星數：59k

網站：[https://nocodb.com/](https://nocodb.com/)

GitHub：[https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

**概述**：一個開源的 Airtable 替代品，提供欄位配置、檢視管理和基本自動化。其 AI 功能支援內容生成、資料補全、表格分析和智慧建議。

**目標使用者**：管理結構化資料的團隊——營運團隊、內部協作小組、輕量級 CRM 使用者。

**使用案例**：內容儲存庫、客戶表格、庫存管理、團隊協作表。
AI 功能包括欄位建議、內容生成、自動補全以及用於資料分析的智慧洞察。

### **Teable**

⭐️ 星數：20k

網站：[https://teable.ai/](https://teable.ai/)

GitHub：[https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

**概述**：一個類似 Airtable 的資料管理平台，支援欄位類型、檢視和團隊協作。其 AI 功能可以透過對話生成表格內容、處理資料、建立報告和執行基於文字的命令，模型直接在表格內工作。

**目標使用者**：Airtable/Notion 使用者或需要 AI 輔助資料協作的團隊。

**使用案例**：內容管理、輕量級資料倉儲、團隊專案表。
支援對話式資料互動——例如透過自然語言查詢記錄、批量生成表格資料或自動建立報告。

## **不完全符合上述類別的工具**

在研究過程中，我們還發現了一些不完全屬於上述三個主要類別的工具——例如 **Onlook**。

⭐️ 星數：23k

網站：[https://onlook.com/](https://onlook.com/)

GitHub：[https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

Onlook 的不同之處在於，其核心能力是「AI 生成的 UI 介面」。

您可以用自然語言描述一個頁面或提供一個線框圖，平台就會產生頁面結構和元件佈局。它生成 React 程式碼，管理樣式和佈局關係，並提供視覺化編輯，以便您可以優化介面和調整元件層級。該工具專為介面建構而設計，並輔以 AI 輔助設計，介於設計工具和低程式碼前端平台之間。

## **最後的想法**

過去我們透過編寫程式碼來建構系統。然後出現了拖放介面。現在，越來越多的人開始描述系統應該如何運作——然後讓 AI 來幫助建構它。

> *「AI 並沒有消除工作——它只是轉移了工作。」*

真正的挑戰不再是我們是否使用 AI，而是我們能否將 AI 與業務邏輯、資料和工作流程深度整合，並使其成為系統本身的一部分。

AI 正在從一個對話工具轉變為一個建構工具。它還不完美，但方向是明確的。
未來，系統可能不再是「開發」出來的——它們可能是「描述」出來的。而我們將從真實的業務問題開始，而不僅僅是從程式碼編輯器開始。

如果您已經讀到這裡，並且感受到了同樣的轉變，請隨時與其他關心 **AI × 低程式碼** 的人分享這份清單。👍

**相關閱讀：**

* [GitHub 星數最高的 11 個開源無程式碼 AI 工具](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub 星數最高的 18 個開源 AI 代理專案](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)
* [GitHub 星數最高的 20 個開源 AI 專案](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [GitHub 星數最高的 8 個開源 MCP 專案](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [GitHub 星數最高的 7 個開源 Web 應用程式](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [GitHub 星數最高的 40 個開源開發者工具](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [2025 年 GitHub 上成長最快的 15 個開源低程式碼專案](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)

---
title: "GitHub 星數最高的 12 個開源 AI 工作流程專案"
description: "本文根據工作流程主題，回顧了 GitHub 上與 AI 緊密整合的頂尖星標工作流程專案。"
---

📝 備註：本文最後更新於 2026 年 1 月 21 日。我們會定期更新資訊，確保您掌握最新洞察！😊

在討論工作流程與自動化時，像 [n8n](https://n8n.io/)、[Dify](https://dify.ai/zh) 以及知名的商業產品如 [Zapier](https://zapier.com/) 和 [Make](https://www.make.com/en) 等工具，您可能並不陌生。然而，在這篇 GitHub AI 專案總覽中，我們將把焦點拉回 GitHub 上的工作流程專案，並介紹其他值得關注的項目。在這些高星等的工具中，有些規模或許不大，但設計目標更為專注，持續打磨工作流程與 AI 的整合。本文將探討整合了 AI 的[工作流程](https://github.com/topics/workflows)專案，展示它們的獨特功能與使用案例，旨在讓您更清楚地了解 AI 如何增強工作流程工具。

根據專案定位與核心功能，本文將 AI 工作流程工具分為三大類：

*   業務系統平台：NocoBase、Appsmith、OpenProject
*   自動化工作流程引擎：Continue、Mastra、wshobson/agents、Activepieces、Trigger.dev
*   工作流程基礎設施與場景工具：Temporal、Conductor、Dagger、UVDesk

💡 延伸閱讀：[5 個最佳工作流程自動化建構工具](https://www.nocobase.com/en/blog/workflow-automation-tools)

---

💬 嗨，您正在閱讀 NocoBase 部落格。NocoBase 是建構企業應用、內部工具及各類系統時，最具擴展性的 AI 驅動無程式碼/低程式碼開發平台。它完全自託管、基於插件且對開發者友善。→ [在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

## 業務系統平台

這類平台將 AI、工作流程與業務系統整合於同一框架中，實現真實世界的商業應用。

### NocoBase

![NocoBase1.PNG](https://static-docs.nocobase.com/NocoBase1-jw0ize.PNG)

NocoBase 是一個開源、自託管的 AI 無程式碼/低程式碼平台，專為建構業務系統而設計。它圍繞資料模型與插件構建，支援快速建立和自訂複雜的業務系統，同時嵌入 AI 功能以實現更智慧的協作。

GitHub 星等：20.9k

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

官方網站：[https://www.nocobase.com](https://www.nocobase.com)

**AI 功能**

*   AI 員工在業務運營中扮演角色 NocoBase 的 AI 功能以 AI 員工的形式運作，他們能夠讀取資料模型、介面配置和業務上下文。當使用者互動或觸發工作流程時，他們會協助執行任務。這些 AI 員工不僅僅是對話機器人，而是系統中不可或缺的一部分，幫助使用者完成任務。
*   將 AI 員工深度整合至工作流程節點 該平台的工作流程系統包含專門為 AI 員工設計的節點，例如文字與多模態對話以及結構化輸出。這些節點允許 AI 處理工作流程上下文、產生結構化結果並參與決策，將工作流程從基於規則的流程轉變為能夠納入智慧輸入的流程。

![NocoBase2.PNG](https://static-docs.nocobase.com/NocoBase2-m357m3.PNG)

**它可以用來做什麼？**

*   建構具 AI 協作能力的內部業務系統 NocoBase 非常適合建立內部系統，例如 CRM、審批系統或資產管理系統。在這些系統中，AI 員工能夠理解資料結構和上下文，協助完成資訊整理、欄位填寫或內容生成等任務，從而減少重複性的人工工作。

💡 延伸閱讀：[GitHub 星等最高的 10 大開源 AI CRM 專案](https://www.nocobase.com/en/blog/top-10-open-source-ai-crm-projects-with-the-most-github-stars)

![NocoBase3.PNG](https://static-docs.nocobase.com/NocoBase3-x5t14a.PNG)

*   在關鍵決策點利用 AI 增強工作流程 在工作流程執行期間，AI 員工可以在關鍵節點提供協助，例如驗證文字內容、產生結構化輸出或在流程推進前提供判斷。這在不改變底層工作流程結構的情況下，增加了智慧處理能力。

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-l7s91h.png)

*   使用知識庫進行情境感知的工作流程執行 透過存取知識庫和向量資料庫，AI 員工可以檢索並利用歷史文件或業務資料，協助根據相關內容產生輸出。這對於需要歷史資料或政策相關資料的工作流程特別有用，可在自動化過程中提升對上下文的理解。

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-ib2brm.png)

### **Appsmith**

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-bvnvgb.png)

Appsmith 是一個開源的低程式碼應用平台，旨在幫助開發者和團隊快速建立內部工具、業務應用和自動化介面。在 AI 領域，Appsmith 整合了多種大型模型服務及其自身的 Appsmith AI 功能，允許開發者將 AI 能力嵌入應用邏輯和工作流程執行中，從而提升內部流程的智慧化程度。

💡 延伸閱讀：[GitHub 上 5 大開源 AI 內部工具](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)

GitHub 星等：38.7k

GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

官方網站：[https://www.appsmith.com](https://www.appsmith.com)

**AI 功能**

*   原生整合 AI 查詢與模型互動 Appsmith 提供官方的 Appsmith AI 功能，允許使用者直接在應用程式中執行文字生成、分類、摘要、實體提取和圖像分類。使用者還可以上傳檔案為模型提供上下文，使應用程式能夠智慧地處理內容。
*   支援建構智慧助手與可程式化工作流程 使用 Appsmith Agents，使用者可以基於業務資料和後端邏輯建構智慧助手。這些助手可以根據使用者查詢自動檢索後端資料或觸發工作流程，實現 AI 驅動的工作流程操作。

**它可以用來做什麼？**

*   建構智慧業務自動化儀表板 客服或營運團隊可以使用 Appsmith 建立自動化儀表板。透過結合 Appsmith Workflows 和 AI 功能，使用者可以在後台自動發送電子郵件通知、更新資料狀態以及在系統間同步資料，從而提升整體業務效率。
*   增強現有應用程式的分析能力 透過將大型語言模型整合到自訂應用程式中，使用者可以執行文字摘要、分類和語意搜尋等任務。例如，在 Appsmith 內收集的回饋可以由模型進行分析，以產生可行的業務洞察。

### **OpenProject**

![OpenProject.png](https://static-docs.nocobase.com/OpenProject-9rg5c8.png)

OpenProject 是一個開源的網頁專案管理軟體，支援從規劃、任務管理到進度追蹤與協作的完整專案生命週期管理。它同時支援傳統的專案管理方法與敏捷/混合方法，透過工作套件、看板和甘特圖等視圖，幫助團隊清晰地組織工作流程。

GitHub 星等：13.4k

GitHub：[https://github.com/opf/openproject](https://github.com/opf/openproject)

官方網站：[https://www.openproject.org](https://www.openproject.org)

**AI 功能**

*   AI 驅動的專案管理建議與分析 OpenProject 使用大型語言模型提供專案管理建議。透過分析專案資料，此功能提供有助於團隊改善專案執行、及早識別風險並優化流程的洞察。此功能仍在開發中，但重點在於提高工作流程效率，同時自動化例行任務。

**它可以用來做什麼？**

*   提升專案管理效率 OpenProject 將複雜的工作套件、任務依賴關係和團隊分配視覺化，使專案流程更加透明。借助 AI 建議，團隊可以更好地了解專案狀態，並調整計劃以應對潛在風險。
*   智慧文件生成與改進 借助 AI 功能，如自動狀態報告、任務摘要和文字分析，使用者在處理專案文件、會議記錄和規劃摘要時，可以節省大量重複性工作的時間，從而專注於提升內容品質。

## **自動化工作流程引擎**

這類工具以代理或流程執行為核心，更偏向於框架、引擎或需要與現有系統整合的開發者工具。

### **Continue**

![Continue.png](https://static-docs.nocobase.com/Continue-xf8ep9.png)

Continue 是一個開源的 AI 程式設計助手，專為開發者的日常工作流程設計，作為一個智慧協作工具。它專注於編輯器作為主要使用場景，深度整合程式碼上下文、專案結構和歷史修改資料。這使得 AI 在編碼、理解程式碼和執行多步驟任務時，能夠緊密貼合真實的開發工作流程。

GitHub 星等：30.5k

GitHub：[https://github.com/continuedev/continue](https://github.com/continuedev/continue)

官方網站：[https://continue.dev](https://continue.dev)

**AI 功能**

*   基於程式碼上下文的持續協作 Continue 的核心優勢在於其對當前程式碼庫的深入理解。AI 能夠理解檔案結構、函數定義和依賴關係，並根據此上下文提供程式碼建議或執行修改，使其成為開發工作流程中無縫的一部分。
*   多步驟任務執行 Continue 不限於生成單個程式碼片段。它可以根據使用者指令執行一系列操作，例如問題分析、修改多個檔案和提供解釋。這使其成為一個嵌入開發流程中的智慧工作流程執行器。

**它可以用來做什麼？**

*   提升日常開發工作流程效率 Continue 可以協助完成程式碼補全、重構建議和邏輯解釋等任務，減少在切換上下文或搜尋文件上花費的時間，從而獲得更流暢的編碼體驗。
*   協助複雜變更與問題排查 對於需要跨檔案變更或除錯的專案，Continue 可以根據整體程式碼結構提供建議，幫助開發者更有效地實施變更。這使得 AI 成為開發工作流程中不可或缺的一部分，而不僅僅是一個獨立工具。

### **Mastra**

![Mastra.png](https://static-docs.nocobase.com/Mastra-231hhv.png)

Mastra 是一個開源的 TypeScript 框架，專為建構智慧應用程式和代理而設計。它提供了建立多步驟工作流程、管理上下文和記憶、整合大型語言模型以及建構智慧代理的基礎設施，允許開發者以統一的方式定義和編排複雜的 AI 驅動流程。

GitHub 星等：19k

GitHub：[https://github.com/mastra-ai/mastra](https://github.com/mastra-ai/mastra)

官方網站：[https://mastra.ai](https://mastra.ai)

**AI 功能**

*   持久化上下文管理與記憶 Mastra 允許智慧代理隨著時間推移保留上下文，使多步驟任務能夠記住歷史資訊，從而支援更連貫的執行和複雜任務的可重用性。此記憶功能對於長期運行的 AI 工作流程至關重要。

**它可以用來做什麼？**

*   建構具有上下文保留能力的智慧多步驟互動 對於需要持續理解上下文的工作流程，Mastra 使智慧代理能夠在多步驟任務中追蹤先前的狀態。例如，在知識檢索工作流程中，它可以先從資料來源收集資訊，然後利用其記憶執行進一步的任務，如內容生成和摘要。

### **wshobson agents**

![wshobson agents.png](https://static-docs.nocobase.com/wshobson%20agents-mahvoo.png)

wshobson agents 是一個開源的 AI 代理擴展和插件集合，旨在為 AI 代理提供可重複使用的工具能力和任務組件。該專案並非建立一個完整的平台或執行引擎，而是提供標準化的代理組件，幫助開發者在現有的 AI 代理或工作流程系統中快速擴展可執行能力，使代理能夠執行更具體、更結構化的任務。

GitHub 星等：23.4k

GitHub：[https://github.com/wshobson/agents](https://github.com/wshobson/agents)

官方網站：[https://sethhobson.com/](https://sethhobson.com/)

**AI 功能**

*   基於插件的代理工具集 該儲存庫為代理提供了多種工具模組，使它們能夠執行特定任務，如資訊處理、外部服務呼叫和任務協助。這種設計允許代理透過組合插件來擴展其能力，而無需重複實現底層邏輯。

**它可以用來做什麼？**

*   使用可執行能力模組增強 AI 工作流程 在現有的 AI 工作流程或代理編排系統中，您可以整合 wshobson agents 的工具，讓代理在定義的步驟中執行特定任務，例如資料處理或與外部系統互動，從而增強整體流程。
*   建構可組合的代理執行工作流程 透過組合多個代理工具，開發者可以建立結構化的執行工作流程，確保 AI 在多步驟任務中具有更穩定的行為模式。這種方法非常適合需要可預測性和可控性的 AI 自動化場景。

### **Activepieces**

![Activepieces.png](https://static-docs.nocobase.com/Activepieces-lmwl57.png)

Activepieces 是一個開源的自動化平台，旨在幫助團隊以視覺化方式建構和執行工作流程，實現系統和服務之間的無縫連接與協作。隨著平台的發展，Activepieces 整合了 AI 能力，增加了智慧處理和代理功能，從而實現更複雜的自動化邏輯。

GitHub 星等：20k

GitHub：[https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

官方網站：[https://www.activepieces.com](https://www.activepieces.com)

**AI 功能**

*   內建 AI 代理功能，實現更智慧的工作流程 Activepieces 提供內建的 AI 代理能力，可以直接嵌入工作流程中，根據觸發條件或上下文執行任務。這使得工作流程不僅能基於固定規則運行，還能融入 AI 驅動的語言理解、判斷和決策，從而在處理非結構化資訊時更加靈活。

💡 延伸閱讀：[7 個強大的 Zapier 開源替代方案](https://www.nocobase.com/en/blog/zapier-open-source-alternatives)

**它可以用來做什麼？**

*   建構具有智慧決策能力的自動化工作流程 Activepieces 支援傳統的觸發-動作工作流程，並允許整合 AI 代理。透過定義觸發事件和步驟邏輯，使用者可以讓代理分析資料、解讀文字並做出決策，最大限度地減少人工干預。這非常適合客服自動化、電子郵件處理等任務。
*   擴展跨系統自動化能力 Activepieces 提供許多預建的整合組件，允許企業將日曆、文件服務、訊息平台等服務與 AI 能力結合，建立不僅能執行基於規則的任務，還能融入 AI 分析或內容生成的工作流程，從而提高效率並減少重複性工作。

### **Trigger.dev**

![Trigger.png](https://static-docs.nocobase.com/Trigger.dev-ppvc62.png)

Trigger.dev 是一個開源平台，用於編寫和執行 AI 工作流程及後端任務，允許開發者使用標準的非同步程式碼來建構可靠、可擴展且持久的工作流程。它不僅支援常規的工作流程任務，還提供與 AI 相關的能力，使長時間運行的 AI 任務、複雜的任務佇列和智慧代理能夠順利運行。

GitHub 星等：13.1k

GitHub：[https://github.com/triggerdotdev/trigger.dev](https://github.com/triggerdotdev/trigger.dev)

官方網站：[https://trigger.dev](https://trigger.dev)

**AI 功能**

*   支援建構持久化、生產級別的 AI 工作流程 Trigger.dev 被設計為一個用於建構 AI 工作流程和代理的平台。它允許開發者使用標準的非同步程式碼定義任務，並支援無限執行、佇列管理、自動重試和任務可觀測性等功能。這些功能使得長時間運行的 AI 任務變得可行，同時為建構 AI 代理提供了必要的基礎設施。

**它可以用來做什麼？**

*   執行長時間運行的 AI 任務 在 AI 任務需要較長處理時間的場景中，例如圖像生成、影片處理或語意分析，Trigger.dev 幫助開發者在後台運行這些任務，而不會出現超時失敗的風險。其任務管理、佇列控制和自動重試機制確保了複雜 AI 操作的可靠完成。

## **工作流程基礎設施與場景工具**

為穩定運作或特定業務場景提供支援，主要專注於基礎能力或特定情況下的輔助角色。

### **Temporal**

![Temporal.png](https://static-docs.nocobase.com/Temporal-9nl4ir.png)

Temporal 是一個開源的分散式工作流程編排平台，旨在運行持久且可靠的業務流程程式碼。開發者可以使用其 SDK 中熟悉的程式語言定義工作流程邏輯，使流程能夠在服務和節點間穩定運行，同時自動處理故障和恢復。

GitHub 星等：17.2k

GitHub：[https://github.com/temporalio/temporal](https://github.com/temporalio/temporal)

官方網站：[https://temporal.io](https://temporal.io)

**AI 功能**

*   為 AI 代理提供持久化執行支援 Temporal 將工作流程的執行狀態記錄為事件歷史，即使在節點故障或服務中斷的情況下，流程也能從已確認的狀態繼續執行。這種執行模型非常適合長時間運行的 AI 代理場景，在多次模型呼叫或工具操作期間，可以持續保存任務進度和上下文，以支援複雜的 AI 驅動工作流程。

**它可以用來做什麼？**

*   支援複雜、長時間運行的 AI 工作流程 在需要多次模型呼叫和多個步驟的智慧工作流程中，Temporal 通常用於管理任務順序和執行狀態。例如，在 AI 代理場景中，模型推理和工具呼叫可以分解為單獨的步驟，由工作流程進行排程和恢復，確保即使發生中斷，流程也能繼續。
*   AI 工作流程的底層執行基礎 在建構可靠且可擴展的自動化工作流程時，例如多步驟資料分析或模型訓練管線，Temporal 的狀態持久化和重試機制確保了每個流程的持續執行。這些功能使 Temporal 成為生產級後端工作流程系統的核心部分，支援包括 AI 服務呼叫在內的複雜流程。

### **Conductor**

![Conductor.png](https://static-docs.nocobase.com/Conductor-5cw1xs.png)

Conductor 是一個開源的微服務工作流程編排引擎，最初由 Netflix 發布，旨在協調和管理分散式系統中的複雜業務流程。它將工作流程定義為可執行的任務，並編排多個任務和服務呼叫，幫助團隊在高並發和複雜場景中保持工作流程的可控性和可恢復性。

GitHub 星等：31.7k

GitHub：[https://github.com/conductor-oss/conductor](https://github.com/conductor-oss/conductor)

官方網站：[https://conductor-oss.org/](https://conductor-oss.org/)

**AI 功能**

*   為 AI 驅動的工作流程提供穩定的編排與控制層 Conductor 被定位為通用工作流程編排引擎，而非特定領域工具。在 AI 場景中，模型呼叫、推理服務和資料處理通常被封裝為獨立任務，由 Conductor 負責任務排程、狀態管理、失敗重試和補償邏輯，確保 AI 驅動的工作流程可靠執行。

**它可以用來做什麼？**

*   AI 服務與業務系統之間的中介層 Conductor 通常用於橋接業務系統和後端服務。在引入 AI 能力後，它作為一個中介層，將 AI 推理步驟嵌入現有的業務工作流程中，而無需大規模改造系統，逐步將 AI 整合到現有的自動化框架中。

### **Dagger**

![Dagger.png](https://static-docs.nocobase.com/Dagger-wxcy12.png)

Dagger 是一個開源的工作流程引擎，最初設計用於持續整合和交付。其核心思想是將工作流程定義為可組合的程式碼模組。隨著使用案例的擴展，Dagger 已發展到能夠處理資料處理和 AI 任務，成為工程工作流程和 AI 管線的關鍵工具。

GitHub 星等：15.2k

GitHub：[https://github.com/dagger/dagger](https://github.com/dagger/dagger)

官方網站：[https://dagger.io](https://dagger.io)

**AI 功能**

*   將多步驟 AI 工作流程編排為程式碼 Dagger 允許將複雜流程分解為模組化、可組合的任務。對於涉及 AI 呼叫的工作流程，可以清晰地編排資料準備、模型推理和結果處理等任務，使整個 AI 工作流程更易於維護、擴展和延伸。

**它可以用來做什麼？**

*   AI 任務自動化的基礎 在更廣泛的自動化場景中，Dagger 可以作為底層執行工具，將 AI 推理或資料處理任務整合到現有的工程工作流程中，逐步實現自動化和智慧化。

### **UVDesk**

![UVDesk.png](https://static-docs.nocobase.com/UVDesk-2cp9j3.png)

UVDesk 是一個開源的客戶支援和工單管理系統，旨在幫助團隊建立客服中心和支援工作流程。隨著時間的推移，UVDesk 已將 AI 能力整合到客戶支援場景中，提升了工單處理效率和回覆品質，在自動化的基礎上為支援流程增加了智慧化。

GitHub 星等：17k

GitHub：[https://github.com/uvdesk](https://github.com/uvdesk)

官方網站：[https://www.uvdesk.com](https://www.uvdesk.com)

**AI 功能**

*   **基於規則與智慧建議的流程優化** UVDesk 的核心仍然是規則驅動的工單流程，AI 能力作為補充。這些 AI 功能在工單建立或處理過程中提供智慧建議，在不改變核心工作流程結構的情況下，提升關鍵步驟的處理品質。

**它可以用來做什麼？**

*   **建構智慧客戶支援工作流程** 在客戶支援場景中，UVDesk 可以透過工單分配、狀態轉換和通知機制來組織工單流程，並整合 AI 自動回覆或內容建議，以減少重複性的人工任務，提升整體回覆效率。
*   **自動化處理常見問題的流程** 對於常見或標準化的查詢，UVDesk 可以透過結合自動化規則與 AI 內容生成能力，快速產生初步回覆，減少工單進入系統時客戶的等待時間。

感謝您的閱讀。如果這些內容對您有幫助，歡迎與正在探索 AI 自動化與工作流程實踐的團隊分享。

**相關閱讀：**

*   [軟體代理商適用的 6 款開源無程式碼與低程式碼工具](https://www.nocobase.com/en/blog/6-open-source-no-code-low-code-tools-for-software-agencies)
*   [GitHub 星等最高的 10 大開源 AI CRM 專案](https://www.nocobase.com/en/blog/top-10-open-source-ai-crm-projects-with-the-most-github-stars)
*   [如何快速建構一個真實系統來取代 Excel：完整指南](https://www.nocobase.com/en/blog/how-to-quickly-build-a-real-system-to-replace-excel)
*   [GitHub 上 5 大開源 AI 內部工具](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
*   [8 個最佳 Google Sheets 替代方案（規格與定價）](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
*   [用於建構 PoC 的 6 款開源無/低程式碼工具](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
*   [開發者對無程式碼與低程式碼的技術決策指南 (2026)](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
*   [企業級無程式碼/低程式碼平台中 RBAC 的 6 項深入比較](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
*   [GitHub 上值得關注的 14 個 AI 驅動低程式碼平台](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)
*   [GitHub 星等最高的 11 大開源無程式碼 AI 工具](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)

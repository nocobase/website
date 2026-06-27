---
title: "GitHub 上五大開源 AI 內部工具"
description: "回顧五個擁有超過 20k 星標的開源內部工具，並分析其 AI 能力與主要使用案例。"
---

📝 備註：本文最後更新於 2026 年 1 月 21 日。我們會定期更新資訊，確保您掌握最新洞察！😊

先前我們整理了一系列開源 AI 專案資源，包括 [GitHub 上 11 個開源 AI 無程式碼平台的評比](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools) 以及 [多篇 AI 低程式碼工具的摘要](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)。隨著 AI 技術快速發展，越來越多的開源專案開始積極採用 AI 功能。

內部工具領域也出現了類似的轉變。去年我們介紹了許多[出色的開源內部工具專案](https://www.nocobase.com/en/blog/open-source-internal-tools)，到了 2025 年，其中大多數都已加入 AI 功能，讓整個生態系煥然一新。這促使我們製作了一份更新、更有系統的總覽。

😄[如果您是內部工具及其價值的新手，建議先閱讀入門指南。](https://www.nocobase.com/en/blog/top-5-open-source-projects-for-building-internal-tools-in-2024#what-are-the-benefits-of-internal-tools)

在這次更新中，我們從 [GitHub Internal Tools](https://github.com/topics/internal-tools) 主題中，挑選了超過 20k Stars 且社群活躍度高的開源內部工具，並總結了它們的技術特點與理想使用場景。

---

💬 嘿，您正在閱讀 NocoBase 部落格。NocoBase 是建構企業應用程式、內部工具及各類系統時，最具擴展性的 AI 驅動無程式碼/低程式碼開發平台。它完全自託管、基於插件且對開發者友好。→ [在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

我們的目標是幫助您快速了解在 AI 時代，哪些內部工具仍然值得投入，並為正在建構內部系統的技術團隊提供明確方向。

以下是我們將介紹的 5 個開源內部工具的快速預覽。

* **NocoBase**：專為內部工具設計的資料模型驅動無程式碼平台，具有高度可擴展的插件系統。其 AI 代理可協助資料準備、模型建立、圖表建構和程式碼生成。
* **Budibase**：一個低程式碼內部工具建構器，提供整合資料庫、拖放式 UI 建立、自動 CRUD 生成、AI 欄位以及 AI 輔助的資料表設計。
* **Refine**：一個基於 React 的元框架，專為 CRUD 密集型管理系統而建構，現已支援 AI 生成的佈局、結構和程式碼。
* **ToolJet**：一個融合低程式碼與 AI 原生能力的平台，允許使用者透過自然語言生成介面和邏輯。
* **Appsmith**：一個成熟的開源低程式碼平台，可連接多種資料來源，非常適合建構管理儀表板、審批流程和營運工具，現已增強 AI 驅動的操作。

### NO.5 NocoBase

![nocobase.png](https://static-docs.nocobase.com/nocobase-ovk3pi.png)


| GitHub        | [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)           |
| ------------- | -------------------------------------------------------------------------------------- |
| 網站          | [https://www.nocobase.com/](https://www.nocobase.com/)                                 |
| 授權條款      | AGPL-3.0                                                                               |
| GitHub Stars  | 20.5k                                                                                  |
| Forks         | 2.3k                                                                                   |
| Issues        | 129                                                                                    |
| Pull Requests | 125                                                                                    |
| 貢獻者        | 101                                                                                    |
| 最後更新      | 今天更新                                                                               |
| 文件          | [https://v2.docs.nocobase.com/ai-employees](https://v2.docs.nocobase.com/ai-employees) |

**概述**

NocoBase 是一個資料模型驅動的無程式碼開發平台，專為建構內部工具而設計。其基於插件的架構具有高度可擴展性，支援建構管理後台、業務系統、CRM、審批流程以及各種內部應用程式。它提供所見即所得的視覺化介面建構器，並支援複雜的資料關係、權限模型和自訂邏輯，非常適合需要快速交付業務工具的團隊。

在 NocoBase 中，AI 並非一個孤立的模組，而是直接融入資料表、表單、資料模型和工作流程中。AI 員工框架將 AI 整合到業務營運中，實現與模型、表單、資料表和工作流程的協作。內建的 AI 員工類型包括資料清理、結構建模、知識搜尋、圖表生成和程式碼生成，幫助使用者降低資料處理、介面設定和邏輯建構的成本。

**使用場景**

**資料清理（Dex，資料處理專家）**

AI 員工能從非結構化內容（如客戶資料、工單或合約文字）中提取結構化資訊，並可自動填入表單。

![Dex.gif](https://static-docs.nocobase.com/Dex-c4uwn4.gif)

**資料分析（Viz，洞察分析師）**

在潛在客戶、商機或帳戶等頁面上，AI 員工可以分析當前資料集，並自動建立趨勢圖、比較圖、KPI 卡片和簡潔的洞察摘要。

![Viz.gif](https://static-docs.nocobase.com/Viz-demgin.gif)

**前端配置（Nathan，前端工程師）**

在使用 JSBlock、JSField、JSItem、JSColumn、JSAction 或事件流程時，AI 員工可以審查程式碼上下文，並根據自然語言提示生成或優化 JavaScript。

![Nathan.png](https://static-docs.nocobase.com/Nathan-n9ybjn.png)

**資料建模（Orin，資料建模師）**

在建立 CRM、工單系統、庫存管理或專案管理等內部系統時，AI 員工可以協助生成或更新資料表。

![Orin.png](https://static-docs.nocobase.com/Orin-ahkat1.png)

### NO.4 Budibase

![budibase.png](https://static-docs.nocobase.com/budibase-wahysy.png)


| GitHub        | [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| 網站          | [https://budibase.com/](https://budibase.com/)                                                                 |
| 授權條款      | GPL-v3                                                                                                         |
| Stars         | 27.4k                                                                                                          |
| Forks         | 2k                                                                                                             |
| Issues        | 294                                                                                                            |
| Pull Requests | 12                                                                                                             |
| 貢獻者        | 112                                                                                                            |
| 最後更新      | 今天更新                                                                                                       |
| 文件          | [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai) |

**概述**

Budibase 是一個用於建構內部工具的開源低程式碼平台。它支援資料庫連接、多種資料來源、拖放式 UI 建立，以及自動 CRUD 和工作流程生成，適用於建構企業後端、審批流程、表單系統和管理後台。憑藉其內建資料庫、REST API 支援和視覺化建構器，即使沒有豐富前端經驗的團隊也能建立完整的內部應用程式。

Budibase 也已將 AI 整合為平台的原生能力。啟用 Budibase AI 後，使用者可以建立 AI 欄位以進行智慧資料操作，從自然語言生成 JavaScript 邏輯，自動產生資料庫結構，並使用基於 AI 的自動化功能進行資料清理、分類、轉換和生成。

**使用場景**

**智慧資料清理與內容準備**

AI 欄位可以自動清理、標準化和分類資料，適用於客戶回饋、內容審核、工單處理等類似工作流程。

![AI Column.png](https://static-docs.nocobase.com/AI%20Column-imcj5c.png)

**自動生成資料庫結構**

在建構新模組（如客戶管理、合約流程或任務系統）時，Budibase AI 可以根據單一自然語言提示生成合適的資料表結構和範例記錄。

![資料庫表結構.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84-rc0ka3.png)

### NO.3 Refine

![refine-li9il9.png](https://static-docs.nocobase.com/refine-li9il9.png)


| GitHub        | [https://github.com/refinedev/refine](https://github.com/refinedev/refine) |
| ------------- | -------------------------------------------------------------------------- |
| 網站          | [https://refine.dev/](https://refine.dev/)                                 |
| 授權條款      | MIT                                                                        |
| Stars         | 33.5k                                                                      |
| Forks         | 2.9k                                                                       |
| Issues        | 17                                                                         |
| Pull Requests | 11                                                                         |
| 貢獻者        | 311                                                                        |
| 最後更新      | 2 天前                                                                     |
| 文件          | [https://ai.refine.dev/](https://ai.refine.dev/)                           |

**概述**

Refine 是一個開源的 React 元框架，專為 CRUD 密集型網頁應用程式、企業管理系統、儀表板和其他內部 B2B 工具而建構。

Refine AI 將 AI 引入開發工作流程。以自然語言、文件或 API 規格作為輸入，Refine AI 可以生成一個完整的、可供生產環境使用的 React 應用程式骨架，包括 CRUD 頁面、路由、認證、狀態管理和資料擷取。其輸出是乾淨、標準的 React 程式碼，開發者可以自由擴展或修改。

**使用場景**

**生成管理系統**

基於 API 或資料模型，Refine AI 可以建立包含列表、表單和詳細頁面的 CRUD 介面，非常適合快速啟動庫存、訂單或專案管理等系統。

![後台管理系統生成-3eh30p.png](https://static-docs.nocobase.com/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E7%94%9F%E6%88%90-3eh30p.png)

**重構與維護現有程式碼庫**

由於 Refine AI 生成的程式碼遵循企業級模式和最佳實踐，它也可用於將舊系統重構為模組化元件，或在現有專案上快速添加新的業務模組，從而提高開發速度和長期可維護性。

![程式碼重構與維護.png](https://static-docs.nocobase.com/%E4%BB%A3%E7%A0%81%E9%87%8D%E6%9E%84%E4%B8%8E%E7%BB%B4%E6%8A%A4-muoonn.png)

💡 推薦閱讀：[NocoBase vs Refine](https://www.nocobase.com/cn/blog/nocobase-vs-refine)

### NO.2 ToolJet

![ToolJet-4nyv0g.png](https://static-docs.nocobase.com/ToolJet-4nyv0g.png)


| GitHub        | [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| 網站          | [https://tooljet.ai/](https://tooljet.ai/)                                                                   |
| 授權條款      | AGPL-3.0                                                                                                     |
| Stars         | 37k                                                                                                          |
| Forks         | 4.9k                                                                                                         |
| Issues        | 646                                                                                                          |
| Pull Requests | 313                                                                                                          |
| 貢獻者        | 651                                                                                                          |
| 最後更新      | 一天前                                                                                                       |
| 文件          | [https://docs.tooljet.com/docs/build-with-ai/overview](https://docs.tooljet.com/docs/build-with-ai/overview) |

**概述**

ToolJet 是一個開源、低程式碼且 AI 原生的平台，用於建構內部企業工具、儀表板、管理系統和業務應用程式。它提供拖放式視覺化建構器、內建資料庫、廣泛的資料來源和 SaaS 整合，以及內建的權限和協作功能。它專為需要快速交付內部系統的團隊而設計。

在 ToolJet 中，AI 直接融入應用程式建構工作流程。開發者可以用自然語言描述需求，ToolJet 將自動生成初始介面、資料結構和查詢邏輯。

**使用場景**

**使用自然語言生成業務應用程式**

ToolJet 允許團隊透過自然語言描述需求來建立內部工具。它可以從頭開始建構 UI、資料結構和邏輯，或修改現有應用程式。這使得在短時間內產出常見的內部系統（如庫存管理）變得容易。

![自然語言快速生成.png](https://static-docs.nocobase.com/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90-nwf730.png)

**AI 文件助手**

內建的 AI 文件助手可以回答關於元件、功能和整合的問題，幫助使用者更快熟悉 ToolJet。對於沒有前端經驗的團隊，該助手可以降低學習曲線並加速開發。

![AI 文件助手.png](https://static-docs.nocobase.com/AI%20%E6%96%87%E6%A1%A3%E5%8A%A9%E6%89%8B-75vt0c.png)

### NO.1 Appsmith

![appsmith-of0467.png](https://static-docs.nocobase.com/appsmith-of0467.png)


| GitHub        | [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith) |
| ------------- | ---------------------------------------------------------------------------------- |
| 網站          | [https://www.appsmith.com/](https://www.appsmith.com/)                             |
| 授權條款      | Apache-2.0                                                                         |
| Stars         | 38.6k                                                                              |
| Forks         | 4.4k                                                                               |
| Issues        | 4.4k                                                                               |
| Pull Requests | 38                                                                                 |
| 貢獻者        | 335                                                                                |
| 最後更新      | 一天前                                                                             |
| 文件          | [https://www.appsmith.com/ai/low-code](https://www.appsmith.com/ai/low-code)       |

**概述**

Appsmith 是一個開源低程式碼平台，旨在幫助團隊以最少程式碼快速建立內部應用程式。它支援多種資料庫和 API，提供全面的視覺化 UI 元件庫，並允許開發者使用 JavaScript 擴展功能。這使其適用於建構管理系統、資料儀表板、審批工作流程、CRM 和分析工具。

最新版本引入了原生 AI 支援。Appsmith 可以連接 OpenAI、Google AI 和 Anthropic 等主流 LLM，透過 AI 操作實現文字分析、摘要、語意搜尋和分類等功能。

**使用場景**

**借助 AI 加速開發**

Appsmith 的 AI 助手在開發過程中提供上下文相關的支援，提供關於操作、平台功能、查詢建構、JavaScript 邏輯和 UI 自訂的指導。透過側邊欄助手 Appy，開發者可以直接在正在編輯的頁面上獲得相關幫助，減少查閱文件的時間並加快迭代速度。

![借助 AI 提升建構速度.png](https://static-docs.nocobase.com/%E5%80%9F%E5%8A%A9%20AI%20%E6%8F%90%E5%8D%87%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6-76dac4.png)

**將 AI 嵌入內部工作流程**

團隊可以建構 AI 增強的內部工具，例如客戶評論分析儀表板。Appsmith 可以擷取評論資料，在表格中顯示，透過 Appsmith AI 資料來源執行情感分析，並使用 JS Objects 將結果寫回 UI。這使得團隊能夠自動分類回饋並更有效地確定問題的優先級。

![整合 AI 能力.png](https://static-docs.nocobase.com/%E6%95%B4%E5%90%88%20AI%20%E8%83%BD%E5%8A%9B-n2t9w0.png)

💡 推薦閱讀：[NocoBase vs. Appsmith：哪個開源低程式碼平台適合您？](https://www.nocobase.com/en/blog/nocobase-vs-appsmith)

此外，除了上述五個高星等專案外，像 [Yao](https://github.com/YaoApp/yao) 和 [ILLA Builder](https://github.com/illacloud/illa-builder) 等開源工具也保持著強勁的社群活力。[Yao](https://github.com/YaoApp/yao) 提供了一個全端應用程式引擎，能夠快速建構內部系統的模型、工作流程和 API。[ILLA Builder](https://github.com/illacloud/illa-builder) 專注於視覺化介面建構，適合快速建立管理後台和資料工具。這兩個專案也提供基本的 AI 擴展，在團隊建構內部工具時可以作為有用的補充選項。

### 結論

在選擇內部工具時，可以從幾個維度評估解決方案。

1.  AI 功能的成熟度，例如對頁面生成、SQL 或業務邏輯生成、圖表生成以及智慧助手的支援。
2.  社群與生態系統活躍度，包括 Stars、Issues、Commits 和文件更新，這些都標誌著專案的可靠性和長期可持續性。
3.  自託管能力與安全性，這會影響內部部署和資料合規性。
4.  可擴展性與自訂的便利性，這直接影響為適應不斷變化的業務需求而調整系統的長期成本。

我們希望這份指南能提供有用的技術見解，並幫助您在建構內部工具時做出更明智的決策。

隨著生成式 AI 的持續進步，這些開源專案也將不斷演進，隨著時間推移帶來新的能力。

我們期待看到這些工具在未來幫助您的團隊建構更高效、更智慧的內部系統。

**相關閱讀：**

* [GitHub 上 5 大開源 AI 內部工具](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
* [8 個最佳 Google Sheets 替代方案（規格與定價）](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6 個用於建構 PoC 的開源無/低程式碼工具](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [開發者對無程式碼和低程式碼的技術決策指南（2026）](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [企業級無程式碼/低程式碼平台中 RBAC 的 6 項深入比較](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [GitHub 上 14 個值得關注的 AI 驅動低程式碼平台](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)
* [GitHub Stars 最多的 11 個開源無程式碼 AI 工具](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub Stars 最多的 18 個開源 AI 代理專案](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)

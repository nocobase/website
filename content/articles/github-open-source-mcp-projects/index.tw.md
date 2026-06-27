---
title: "GitHub 星數最高的 8 大開源 MCP 專案"
description: "本文介紹 GitHub 上最受歡迎的 8 個開源 MCP 專案，涵蓋 AI 自動化、智慧助手與視覺化工作流程，協助您更快建構強大的 AI 整合系統。"
---

📝 備註：本文最後更新於 2026 年 1 月 21 日。我們會定期更新資訊，確保您掌握最新洞察！😊

「MCP」這個詞在 2025 年初真正開始受到廣泛關注，尤其是在 AI 工具開發社群中。

三月時，一場關於「MCP - 曇花一現還是未來標準？」的激烈辯論點燃了討論。來自 LangChain 和 LangGraph 的核心成員在 X 平台上激烈交鋒，而 GitHub 上與 MCP 相關的專案也開始接連登上趨勢榜。

✨ 查看我們更新的 2026 年 GitHub 開源 AI 專案總整理：[https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)

![MCP - 曇花一現還是未來標準？](https://static-docs.nocobase.com/1-n6gfmb.png)

圖片來源：https://blog.langchain.com/mcp-fad-or-fixture/

**為什麼 MCP 越來越受歡迎？**

核心在於，開發者終於意識到這一點：ChatGPT 可以生成內容，但無法自動擷取網頁；Claude 可以理解 PDF，但無法呼叫 API。雖然模型很強大，但它們缺乏一個封閉的執行迴圈，而工具整合仍然是一個瓶頸。

MCP 旨在解決這個「最後一哩路」問題。它就像模型的 USB-C 連接埠，幫助 AI 統一存取瀏覽器、資料庫、外掛系統等，讓模型不僅能說話，還能採取行動。

![MCP](https://static-docs.nocobase.com/2-hk5wm2.png)

圖片來源：https://norahsakal.com/blog/mcp-vs-api-model-context-protocol-explained/

我們持續追蹤 GitHub 上的優質開源專案，發現許多受 MCP 概念啟發的工具正試圖解決這些問題。有些專注於自動化工作流程，有些則著重於外掛擴展，還有一些在探索多模型協作。

本文總結了 GitHub 上最受歡迎的 [8 個 MCP 專案](https://github.com/topics/mcp)，簡要分析它們的介紹、核心功能、部署與整合方式，以及應用場景，供您實務參考。

💡 也歡迎查看我們先前受歡迎的 GitHub 專案系列文章：

* [GitHub 星數最高的 40 個開源開發者工具](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [2025 年 GitHub 上成長最快的 15 個開源低程式碼專案](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [GitHub 星數最高的 7 個開源網頁應用程式](https://www.nocobase.com/en/blog/github-open-source-web-applications)

---

💬 嘿，您正在閱讀 NocoBase 部落格。NocoBase 是建構企業應用程式、內部工具和各種系統時，最具擴展性的 AI 驅動無程式碼/低程式碼開發平台。它完全自託管、基於外掛且對開發者友善。→ [在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

## 第 1 名：n8n

![n8n](https://static-docs.nocobase.com/3-r88s0s.PNG)

GitHub 星數：124k

GitHub：https://github.com/n8n-io/n8n

網站：https://n8n.io/

![n8n](https://static-docs.nocobase.com/4-jy32yq.png)

**介紹：**

在過去一年中，**n8n** 從一個小眾的開源自動化工具迅速崛起，變得廣受歡迎。它最初定位為 Zapier 和 Make 等平台的開源替代品，支援以視覺化方式連接各種 API 和服務，其靈活性遠超傳統自動化工具。

但 n8n 的價值遠不止於此。它的爆炸性成長源於對開源、自主性和 AI 的綜合需求。隨著 OpenAI、Hugging Face 等模型迅速進入企業應用，n8n 已成為開發者建構 AI 呼叫鏈、智慧代理和商業助手的理想選擇。它可以輕鬆整合第三方模型服務，並透過自訂邏輯將 AI 嵌入業務工作流程，從而驅動實用的智慧自動化。

**核心功能：**

* **視覺化工作流程建構器：** 透過拖放連接節點來建構自動化執行鏈。
* **Webhook 和 API 支援：** 內建 Webhook 節點可接收來自 AI 代理的結構化請求；API 節點可向外部系統發送請求。
* **邏輯與資料處理：** 函數節點支援條件邏輯、迴圈和資料轉換，實現靈活的任務控制。

**部署與整合：**

* **靈活的部署方式：** 支援本地執行、Docker、一鍵安裝和雲端部署，適用於個人或企業環境。
* **強大的系統整合能力：** 超過 500 個內建整合，包括資料庫、第三方 API、GPT、檔案服務等。

**您可以用 n8n 做什麼？**

1. **AI 助手呼叫外部服務：** 在聊天中輸入「明天下午安排一個會議」；n8n 接收請求，提取上下文，發送給 OpenAI，在識別意圖後，自動呼叫 Google 日曆建立事件並返回確認。
2. **企業知識庫問答系統：** 當被問到「我們的產品支援哪些付款方式？」時，n8n 查詢內部文件向量資料庫，提取相關內容，建構上下文，透過模型生成精確答案，並透過 Slack 回覆。
3. **模型生成內容的自動錄入：** 每天觸發 GPT 總結前一天的銷售通話；n8n 處理回應，提取關鍵字、潛在客戶、後續步驟，寫入 CRM，並在群組聊天中發布每日報告摘要。

## 第 2 名：dify

![dify](https://static-docs.nocobase.com/5-uwta9l.PNG)

GitHub 星數：109k

GitHub：https://github.com/langgenius/dify

網站：https://dify.ai/

![dify](https://static-docs.nocobase.com/6-jpb7a7.png)

**介紹：**

**Dify** 是過去一年中另一個快速崛起的開源 AI 應用平台。它最初被定位為「即插即用的 LLM 應用開發框架」，現已發展成為一個支援多種模型和應用形式的 **AI 工作空間** — 讓您無需從頭開始，即可建構聊天機器人、代理工作流程、RAG 系統或 AI 副駕駛。

Dify 提供近乎「即插即用」的解決方案：支援 OpenAI、Claude、Gemini 等主流模型，複雜的上下文設定和變數輸入，並內建資料集、工作流程和外掛 — 讓您像使用低程式碼系統一樣輕鬆建構 LLM 應用程式。

**核心功能：**

* **雙向 MCP 支援：** 可以連接到 MCP 伺服器，或自身作為 MCP 伺服器，直接解決 AI 與系統的指令互動問題。
* **視覺化工作流程建構器：** 拖放即可建立 AI 應用程式和工作流程，使 MCP 任務設計直觀且高效。
* **多模型與工具整合：** 支援全球大型語言模型、外掛整合和 RAG 管道，以擴展 MCP 任務能力。

**部署與整合：** 支援 Docker 和 AWS AMI 一鍵部署，提供 SaaS 版本，適應各種規模的環境，並提供 API 和 Webhook 介面。

**您可以用 Dify 做什麼？**

1. **內部智慧助手：** 上傳公司文件，連接 OpenAI 或 Claude，配置常見問題和變數，快速建構一個了解業務、具備記憶能力的內部助手。前端 SDK 和 API 讓您只需幾行程式碼即可將其嵌入網站或系統。
2. **建構多輪 RAG 應用程式：** Dify 的資料集管理和上下文控制，讓您能快速建構基於向量搜尋的多輪對話系統，無需自行建構向量儲存或調整提示詞。上傳資料、配置模型，即可為支援、知識庫或 AI 副駕駛建構具備記憶能力的問答系統。
3. **透過工作流程編排模型和外掛：** 使用 Dify 工作流程將多個模型呼叫、外掛執行、API 請求串聯起來 — 在視覺化介面中實現複雜的代理邏輯，例如意圖識別 → 資料庫查詢 → 結果處理 → 使用者回應。

## 第 3 名：Open WebUI

![Open WebUI](https://static-docs.nocobase.com/7-uo7z3x.PNG)

GitHub 星數：104k

GitHub：https://github.com/open-webui/open-webui

網站：https://openwebui.com/

![Open WebUI](https://static-docs.nocobase.com/8-6ypb5p.png)

**介紹：**

**Open WebUI** 是一個易於本地部署的 **LLM 聊天介面**，可無縫連接 OpenAI API、LM Studio、Ollama 等後端。它開源、輕量，支援多模型切換、會話上下文、多用戶支援和外掛系統。您可以將其視為「即插即用的 ChatGPT 前端」，或是建構 AI 副駕駛的起點。

Open WebUI 因其易於部署、良好的互動體驗以及為內部 AI 應用程式提供的可擴展性，而受到開發者和團隊的青睞。

**核心功能：**

* **多模型與 API 整合：** 透過統一介面支援 Ollama 和 OpenAI 相容 API，用於 AI 模型請求。
* **外掛框架 (Pipelines)：** 載入自訂 Python 邏輯或外掛，用於任務前/後處理和工具呼叫。
* **本地與遠端 RAG 支援：** 內建推理引擎支援本地文件提取、遠端網頁整合和 RAG 管道建構，用於上下文感知的 AI 任務。

**部署與整合：** 提供 Docker 和 Kubernetes 部署方式，適用於單機或企業叢集，支援 REST API 進行模型和外掛介面呼叫。

**您可以用 Open WebUI 做什麼？**

1. **部署一個私有的 ChatGPT 副本：** 將 Open WebUI 連接到本地部署的 LLM（例如 Llama3、Mistral、Qwen），即可在區域網路上使用完整的 ChatGPT 功能。簡潔的 UI、上下文和多輪對話、一鍵切換模型 — 非常適合內部知識問答或工作助手。
2. **建構開發者團隊的 AI 工具箱：** 集中管理模型配置，統一上下文模板，管理多用戶會話並設定角色。為每個人提供風格一致的 AI 助手，避免環境重複。
3. **用作 LLM 應用程式的互動前端：** 修改 Open WebUI 作為前端外殼，連接後端推理、資料庫和業務系統。外掛機制和 API 支援使其能夠處理問答、搜尋和命令執行，成為一個輕量級的副駕駛門面。

## 第 4 名：Netdata

![Netdata](https://static-docs.nocobase.com/9-18kgep.png)

GitHub 星數：75.2k

GitHub：https://github.com/netdata/netdata

網站：https://www.netdata.cloud/

![Netdata](https://static-docs.nocobase.com/10-akbrty.png)

**介紹：**

**Netdata** 是一個開源、即時的系統監控平台，幾乎無需配置即可提供對伺服器、容器、資料庫和應用程式效能的深入洞察。與傳統監控工具相比，它**輕量、反應極快**，並且擅長高頻資料收集和視覺化。

隨著 LLM 部署和代理工作流程日益複雜，Netdata 正成為許多建構 MCP 系統團隊的「**核心可觀測性元件**」。您不僅可以用它來監控基礎設施資源，還可以視覺化推理延遲、上下文大小、呼叫錯誤等 — 確保您的整個任務鏈保持穩定且可除錯。

**核心功能：**

* **MCP 伺服器能力：** Netdata 代理程式和 Cloud 模組可作為 MCP 伺服器，使 AI 能夠直接與系統監控資料互動。
* **即時監控與異常偵測：** 提供即時效能指標、日誌、警報和自動異常偵測。
* **AI 輔助運維聊天：** 支援透過自然語言查詢基礎設施狀態，實現 AI 驅動的 DevOps 助手。

**部署與整合：**

* 可透過 Docker、套件管理器或自訂腳本輕鬆安裝在伺服器、容器和雲端 VM 上。
* 超過 800 個整合，並提供標準 MCP 介面；AI 代理可以即時查詢監控資料。

**您可以用 Netdata 做什麼？**

1. **即時監控本地 LLM 資源使用情況：** Netdata 可以秒級粒度追蹤 GPU、CPU、記憶體、磁碟等關鍵指標 — 非常適合確保本地模型部署平穩執行。
2. **為 AI 工作流程建構儀表板：** 將 Netdata 嵌入推理服務或代理管道，以視覺化 API 呼叫、回應時間、上下文使用量等。您甚至可以設定自動警報，例如模型長時間掛起或錯誤率突然飆升。
3. **為您的 AI 系統提供一個可觀測的「黑盒子」：** Netdata 詳細的呼叫追蹤和歷史圖表有助於重現故障發生時的確切環境 — 無論是 RAG 鏈路中斷、外掛呼叫失敗還是 GPU 降頻。

## 第 5 名：Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/11-w7o72g.png)

GitHub 星數：63.9k

GitHub：https://github.com/lobehub/lobe-chat

網站：https://lobechat.com/

![Lobe Chat](https://static-docs.nocobase.com/12-o8ky3v.png)

**介紹：**

**Lobe Chat** 是一個開源、視覺設計精美、功能豐富的 LLM 聊天系統。它支援多種模型、對話和外掛 — 完全相容 OpenAI、Claude、Gemini、Ollama 等。與其他工具相比，Lobe Chat 強調使用者體驗和可擴展性，提供對話變數、提示詞模板和角色預設等高階功能。它既適用於個人，也適用於團隊導向的 Copilot 設定。

隨著 MCP 架構在 AI 應用中的興起，Lobe Chat 正成為開發者的「人類互動層」 — 一個用於管理上下文感知、多模型、外掛驅動體驗的前端樞紐。

**核心功能：**

* **多模型與 RAG 支援：** 整合 OpenAI、Claude、Gemini、本地模型，並支援知識庫搜尋以提供上下文感知的回應。
* **MCP 外掛市集：** 內建 MCP 外掛商店，可一鍵匯入工具和代理動作。
* **函數呼叫系統：** 支援透過外掛協定跨模型執行外部函數。

**部署與整合：** 可透過 Docker、Vercel 等方式一鍵私有部署。可輕鬆嵌入應用程式或透過 API 與外部系統整合。

**您可以用 Lobe Chat 做什麼？**

1. **部署您自己的多模型助手：** 連接 Llama3、GPT-4、Claude、Qwen 等 — 無縫切換。配置記憶體、角色、外掛呼叫。比 ChatGPT 更靈活，且完全私有。
2. **建構具有外掛鏈的 AI Copilot：** 透過外掛連接資料庫 API、搜尋引擎或其他工具。助手可以透過自動執行來處理複雜任務，例如「將此試算表匯入 Notion 並總結」。
3. **建立可分享的 AI 應用前端：** Lobe Chat 讓您能夠建構輕量級、可分享的提示詞工具或代理工作流程。分享連結或嵌入頁面 — 非常適合內部工具或面向客戶的微型產品。

## 第 6 名：Glama

![Glama](https://static-docs.nocobase.com/13-4jq2qy.png)

GitHub 星數：63.6k

GitHub：https://github.com/punkpeye/awesome-mcp-servers

網站：https://glama.ai/mcp/servers

![Glama](https://static-docs.nocobase.com/14-p1734h.png)

**介紹：**

與前面的工具不同，**Glama** 是一個專為 MCP 協定建構的開源用戶端。它在單一介面中連接並與多個 MCP 相容服務（如 LobeChat、Open WebUI）互動。它本身不執行模型 — 而是作為一個「**聚合前端**」，您可以在其中像切換 ChatGPT 分頁一樣切換模型、外掛和上下文提供者。

Glama 提供了一種新的「模組化體驗」 — 選擇任何 MCP 相容的後端，附加多個外掛工具，甚至可以混合來自不同供應商的模型。對於開發者和 AI 工程師來說，它是一個用於觀察、測試和編排多個 AI 服務的統一視窗。

**核心功能：**

* **豐富的 MCP 伺服器聚合：** 包括 Kong Konnect、Powerdrill、影刀 RPA、StarTree 等 — 涵蓋閘道器、分析、RPA、資料庫等領域。
* **標準化互動層：** 所有伺服器都遵循模型上下文協定，確保代理指令的格式統一。
* **目標資源搜尋：** 透過關鍵字搜尋快速找到符合您使用案例的工具和服務。

**部署與整合：** 以具有 API 存取的網頁應用程式形式提供。企業用戶可以直接整合到業務系統或資料庫中，透過 MCP 接收任務指令。

**您可以用 Glama 做什麼？**

1. **集中式 MCP 服務儀表板：** 連接多個聊天應用程式（LobeChat、Open WebUI）和外掛伺服器（AI-Plugin Server），然後在共享上下文和使用者體驗之間切換。
2. **測試代理 + 外掛互動：** 快速驗證不同後端如何處理外掛呼叫。例如，查看資料庫外掛是否在不同模型上一致執行，或測試回應變化以最佳化行為。
3. **原型設計 AI Copilot 產品：** 使用 Glama 模擬 AI 產品的前端 — 左側是模型選擇器，中間是聊天，右側是外掛日誌。幾分鐘內即可建立一個可運作的 MCP 迴圈。

## 第 7 名：**RAGFlow**

![RAGFlow](https://static-docs.nocobase.com/15-7kvvqp.png)

GitHub 星數：61.1k

GitHub：https://github.com/infiniflow/ragflow

網站：https://ragflow.io/

![RAGFlow](https://static-docs.nocobase.com/16-dvstzn.png)

**介紹：**

**RAGFlow** 來自 infiniflow 團隊，是一個用於建構檢索增強生成（RAG）系統的開源框架。它強調工程品質，如模組化管道設計、解耦的檢索/生成，以及上下文鏈的可見性/可除錯性。將其視為一個用於**建構穩定、可追蹤且生產級知識問答系統**的管道工具。

與 LangChain 或 LlamaIndex 等通用框架不同，RAGFlow 更專注於「後端基礎設施」 — 針對企業級使用的可重複性、可測試性和可觀測性。

**核心功能：**

* **深度文件解析：** 處理複雜格式（多格式檔案、結構化內容）並為 LLM 提取高品質上下文。
* **知識庫管理：** 建立和管理內部知識庫，具備解析和儲存能力。
* **帶引用的 RAG 生成：** 基於檢索到的知識生成答案，並提供參考支援。

**部署與整合：** 可透過 Docker Compose 使用。易於與外部 LLM 整合。

**您可以用 RAGFlow 做什麼？**

1. **建構模組化的企業問答系統：** 配置每個步驟 — 從文件預處理到嵌入和索引 — 使用可替換的元件。根據您的業務量身定製管道。
2. **有效除錯 RAG 鏈：** 精確定位 RAG 系統失敗的原因 — 是檢索問題？上下文溢出？RAGFlow 的視覺化追蹤工具可幫助您快速隔離和解決問題。
3. **將 RAG 與代理工作流程結合：** 透過 API 或外掛將 RAGFlow 整合到更大的代理系統中（例如透過 Dify 或 Lobe Chat），以建構意圖偵測 → 檢索 → 回應的迴圈。非常適合金融助手、支援代理等。

## 第 8 名：AnythingLLM

![AnythingLLM](https://static-docs.nocobase.com/17-8m9ws2.png)

GitHub 星數：47.1k

GitHub：https://github.com/Mintplex-Labs/anything-llm

網站：https://anythingllm.com/

![AnythingLLM](https://static-docs.nocobase.com/18-2uykf1.png)

**介紹：**

**AnythingLLM** 是一個全端開源應用程式，可用於桌面和 Docker 部署。它結合了 RAG、AI 代理、視覺化/無程式碼代理管道，以及**原生 MCP 相容性**。它支援多種模型和本地/雲端向量儲存，提供多用戶存取，並且可以嵌入 — 非常適合私人和團隊使用案例。

**核心功能：**

* **模型 + 文件互動：** 執行本地模型或連接到 OpenAI/Azure；處理 PDF、Word 文件、CSV 等。
* **具有 MCP 的自訂代理技能：** 使用「技能」擴展代理能力，並透過 MCP 整合自動化工具動作。
* **私有、本地優先架構：** 所有 LLM、向量和儲存元件預設在本地執行。完全控制資料和執行。

**部署與整合：** 可作為桌面應用程式或透過 Docker 使用。提供開發者 API 以進行產品整合。

**您可以用 AnythingLLM 做什麼？**

1. **建構一個私有的 ChatGPT + 知識庫：** 將 PDF 和網站拖入工作區。系統會進行嵌入、索引並附上引用回應 — 無論是雲端還是本地，您都能掌控一切。
2. **執行代理 + MCP 工具鏈：** 在 UI 中配置一個 MCP 伺服器，讓代理呼叫外部工具 — 用於擷取資料、爬取網頁、資料庫操作 — 全部在一個無需程式碼的封閉迴圈中完成。
3. **靈活混合模型和向量資料庫：** 使用 OpenAI、Claude、Gemini 或本地 Ollama。從 LanceDB、PGVector、Pinecone、Milvus、Qdrant 中選擇。將聊天元件嵌入您的前端以實現全端交付。

## 結論

在短短幾個月內，MCP 從一個小眾概念發展成為開發者之間的熱門話題。該標準仍在演進，工具也仍在成熟 — 但越來越多的專案正在證明，AI 不應該只會說話，它應該能夠採取行動。

對於從事 AI 整合和自動化工作的開發者來說，MCP 提供了一個新的視角：僅有智慧是不夠的。真正的價值來自於 AI 能夠連接到真實世界的系統並驅動有意義的行動。

希望這份指南能為您提供新興生態系統的有用快照 — 並可能為您的下一個 AI 建構激發靈感。

**相關閱讀：**

* [GitHub 星數最高的 7 個開源網頁應用程式](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [GitHub 星數最高的 40 個開源開發者工具](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [2025 年 GitHub 上成長最快的 15 個開源低程式碼專案](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [GitHub 星數最高的 11 個開源 CRM 專案](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
* [GitHub 上 11 個頂尖開源管理後台儀表板專案](https://www.nocobase.com/en/blog/top-11-open-source-admin-dashboard-projects-on-github)
* [GitHub 星數最高的 10 個開源工作流程專案](https://www.nocobase.com/en/blog/top-10-open-source-workflows-projects-with-the-most-github-stars)

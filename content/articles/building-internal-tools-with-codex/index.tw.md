---
title: "使用 Codex 建構內部工具：6 個開發者適用的開源專案"
description: "探索 NocoBase、Refine 和 Payload CMS 等開源專案，協助 Codex 打造更穩定且易於維護的內部工具。"
---

## 背景

最近，我在 [Hacker News](https://news.ycombinator.com/item?id=47796469) 上看到一個關於 AI 程式碼代理（Coding Agent）的討論：**讓 AI 從零開始建立一個應用程式，通常不是最可靠的使用方式。**

![HN.png](https://static-docs.nocobase.com/HN-nb8ae5.png)

開發者指出，如果你只是簡單地告訴 AI「幫我建立一個應用程式」，它通常會生成一個 **乍看之下不錯，但底層結構不可靠** 的東西。

AI 擅長提升執行速度，但它在一個清晰的結構內運作時，效果最好。

對於真正的企業內部工具，你首先需要一個可靠的技術基礎，然後再使用程式碼代理來提升開發效率。

在這篇文章中，我們將聚焦於企業內部工具，並推薦幾個能與 Codex 良好配合的開源專案，幫助開發者更有效率地建立內部系統和工具。

---

💬 嘿，你正在閱讀 NocoBase 部落格。NocoBase 是建構企業應用程式、內部工具和各種系統時，最具擴展性的 AI 驅動無程式碼/低程式碼開發平台。它完全自託管、基於插件，且對開發者友好。→ [在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

| 專案        | 最適合的用途                                                                 | 最適合的使用者                                                                 |
| ----------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| NocoBase    | 建構 CRM、工單系統、審批系統、資產管理等內部業務系統                         | 需要快速建構可維護業務系統的開發者                                             |
| Refine      | 建構 React 管理後台、儀表板與 B2B 應用程式                                   | 熟悉 React 並希望完全掌控程式碼的開發者                                        |
| Payload CMS | 建構 TypeScript / Next.js 資料後端與管理系統                                 | 偏好 TypeScript 優先的後端與管理面板的開發者                                   |
| Directus    | 為現有 SQL 資料庫生成 API 與管理面板                                         | 擁有現有資料庫，需要快速建立管理面板和 API 層的團隊                            |
| Supabase    | 為內部工具建構 Postgres 後端                                                  | 需要身份驗證、資料庫、儲存、即時功能與後端函數的開發者                         |
| Windmill    | 將腳本轉換為內部工具、任務和工作流程                                         | 擁有大量內部腳本和自動化任務的技術團隊                                         |

## 1. NocoBase

官方網站：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars：22.4k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-nfhndl.png)

NocoBase 是一個開源的 AI 無程式碼平台，用於建構 CRM、工單系統、審批系統、專案管理、資產管理和營運後台等企業內部系統。

NocoBase 的核心價值 **在於它為內部工具提供了一個完整的系統框架**，包括資料模型、頁面配置、權限控制、工作流程、插件擴展和 AI 能力。對開發者而言，它不僅僅是一個拖放式頁面建構器，更是一個仍可透過程式碼擴展的業務系統基礎設施。

NocoBase 提供了官方的 Codex 文件：[使用 Codex 與 NocoBase 進行建構與開發](https://docs.nocobase.com/en/ai/codex)

連接 Codex 後，Codex 可以使用 [NocoBase 技能](https://docs.nocobase.com/en/ai-builder#nocobase-skills) 和 [CLI](https://docs.nocobase.com/en/api/cli/) 來理解 NocoBase 的配置和開發方式。它可以幫助開發者建立資料表、配置頁面、設計工作流程、設定權限，並進一步透過自然語言處理插件開發、功能擴展和問題排查。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-40774f.png)

**與其要求 Codex 從零開始生成一個內部系統，不如讓 NocoBase 為它提供一個更穩定的系統框架來運作**。最終的結果不是難以維護的一次性程式碼，而是一個在 NocoBase 框架內運行且能持續改進的系統。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-qu1ijq.png)

除了初始建構階段，NocoBase 還提供了 AI 員工功能。AI 員工可以結合業務頁面、資料表和工作流程上下文，協助進行資料整理、資料分析、翻譯、研究、郵件處理、資料建模、圖表配置等工作。換句話說，Codex 更適合幫助開發者建構和擴展系統，而 NocoBase AI 員工則可以在系統上線後參與日常業務運作。

![ai員工填表單-yhms5j.gif](https://static-docs.nocobase.com/ai%E5%91%98%E5%B7%A5%E5%A1%AB%E8%A1%A8%E5%8D%95-yhms5j.gif)

透過配置 LLM 服務、技能、知識庫和快速任務，AI 員工可以更自然地融入實際業務運作，幫助團隊同時提升系統建構和日常使用效率。

### 你可以用 Codex 和 NocoBase 建構什麼

Codex 和 NocoBase 可以幫助開發者更快地建構可維護的企業內部系統，例如：

* CRM
* 工單系統
* 審批系統
* 專案管理
* 資產管理
* 營運後台
* 資料儀表板

Codex 負責處理需求理解、業務結構拆解和實作生成。NocoBase 提供資料模型、權限、頁面、工作流程和插件擴展。開發者不再需要讓 AI 從零開始生成難以維護的程式碼，而是讓 Codex 在 NocoBase 現有的系統框架內進行建構和開發。

### 建議提示詞

#### 安裝 NocoBase

將以下提示詞複製到 Codex 中，以自動安裝和配置 NocoBase：

```text
Help me install the NocoBase CLI and complete initialization: https://docs.nocobase.com/en/ai/ai-quick-start.md Please open and read the link directly.
```

#### 設計一個系統

```text
Help me use the nocobase-dsl-reconciler skill to build a ticket management system, including a dashboard, ticket list, user management, and SLA configuration.
```

#### 實際成果

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-1klco2.png)

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-fhuwo3.png)

### 相關資源

你可以複製這些連結並發送給 Codex 直接使用。

文件：[https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI：[https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

技能：[https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

## 2. Refine

官方網站：[https://refine.dev/](https://refine.dev/)

GitHub：[https://github.com/refinedev/refine](https://github.com/refinedev/refine)

GitHub Stars：34.7k

![Refine1.png](https://static-docs.nocobase.com/Refine1-8qgxcz.png)

Refine 是一個為開發者設計的開源 React 框架。它主要用於建構內部工具、管理後台、儀表板和 B2B 應用程式。它提供了身份驗證、權限控制、路由、資料獲取、狀態管理和國際化等核心功能，適合快速建構 CRUD 密集型應用程式。

Refine 也在加強對 AI 代理場景的支援。它提供了一個專為 AI 生成應用程式設計的工作流程：連接到現有的 REST API 或 Supabase 專案，分析後端結構，並為 AI 代理建立藍圖，使生成的結果更符合實際的資料模型。

這就是 Refine 能與 Codex 良好配合的原因。Codex 不需要從零開始猜測內部工具該如何建構。它可以根據 Refine 的專案結構、資源模型和資料來源配置，生成列表頁面、詳情頁面、編輯頁面、表單、篩選器、權限檢查和 API 呼叫邏輯。

![Refine2.png](https://static-docs.nocobase.com/Refine2-jpcnwg.png)

Refine 還提供了一個 CLI，用於建立資源、管理更新、置換元件以及執行專案任務，例如建構、啟動和開發。對於像 Codex 這樣的程式碼代理來說，這些清晰的命令列入口點更容易自動化，也更適合在現有專案中進行持續迭代。

### 你可以用 Codex 和 Refine 建構什麼

Codex 和 Refine 特別適合在 React 技術棧中快速開發內部管理介面，例如 CRM 後台、訂單管理後台、營運審核平台、客服工作台、資料管理面板和 B2B SaaS 管理入口。

例如，如果你想建構一個訂單管理後台，Codex 可以根據訂單、客戶、產品和付款狀態等資料結構，生成訂單列表、訂單詳情頁面、編輯表單、篩選器、狀態更新按鈕和權限邏輯。Refine 提供了 React 內部工具的基本結構，而 Codex 則加速了特定業務頁面的開發。

這種設定更適合希望完全掌控程式碼的開發者。最終產出是一個 React 專案，而不是鎖定在封閉平台內的配置。你可以稍後繼續使用 Codex 來修改元件、重構邏輯、連接新的 API 或擴展業務模組。

### 建議提示詞

```text
Help me create an order management backend based on Refine, using a REST API as the data source. It should include an order list, order details, an order edit form, customer filters, order status updates, and basic permission control.
```

## 3. Payload CMS

官方網站：[https://payloadcms.com/](https://payloadcms.com/)

GitHub：[https://github.com/payloadcms/payload](https://github.com/payloadcms/payload)

GitHub Stars：42.5k

![Payload CMS1.png](https://static-docs.nocobase.com/Payload%20CMS1-9l7yh9.png)

Payload CMS 是一個開源的全端 Next.js 框架，用於建構 CMS、管理後台、資料驅動應用程式和企業內部工具。它提供了 TypeScript 配置、資料集合、權限控制、管理面板、REST / GraphQL API、鉤子、插件、檔案管理等。

Payload 透過程式碼定義資料模型和業務邏輯。你可以在 TypeScript 中配置集合、欄位、存取控制、鉤子和管理 UI，將內部工具的後端、API 和管理介面保持在一個程式碼庫中。

Payload 也開始支援 AI 代理場景。其官方文件提供了一個 MCP 插件，讓開發者可以控制 AI 能夠使用哪些集合和全域變數進行查找、建立、更新和刪除等操作。開發者也可以定義自己的提示詞、工具和資源。

![Payload CMS2.png](https://static-docs.nocobase.com/Payload%20CMS2-jczl8t.png)

### 你可以用 Codex 和 Payload 建構什麼

Codex 和 Payload 適合快速開發基於 TypeScript / Next.js 的資料後端、內容管理系統、客戶入口網站、訂單後台、資產管理系統和營運管理工具。

![Payload CMS3.png](https://static-docs.nocobase.com/Payload%20CMS3-lejqn0.png)

例如，如果你想建構一個資產管理後台，Codex 可以根據設備、員工、部門、使用記錄、維護記錄和審批狀態等需求，生成 Payload 集合、欄位配置、存取權限和鉤子。Payload 提供了資料管理介面、API 和權限執行。如果之後需要添加更多業務邏輯，你可以繼續使用 Codex 來修改 TypeScript 配置和擴展程式碼。

### 建議提示詞

```text
Help me create an asset management backend based on Payload CMS, including collections for equipment, employees, departments, usage records, and maintenance records. Also configure basic fields, access permissions, Admin Panel display fields, and common hooks.
```

## 4. Directus

官方網站：[https://directus.io/](https://directus.io/)

GitHub：[https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Stars：35.7k

![Directus1.png](https://static-docs.nocobase.com/Directus1-7w23p8.png)

Directus 是一個開源的資料後端平台，可以快速將 PostgreSQL、MySQL、SQLite、MariaDB、MS SQL 和 OracleDB 等 SQL 資料庫轉換為 REST / GraphQL API 和一個可視化管理面板。它適用於建構資料管理後台、內容管理系統、營運後台、客戶資料後端、內部 API 層等專案。

Directus 對現有資料庫特別友好。許多內部工具並非從零開始。業務資料庫可能已經存在，但團隊仍然缺乏一個可用的管理面板、權限管理和 API 層。Directus 可以直接連接到現有的 SQL 資料庫，並在其之上提供資料模型管理、角色權限、檔案管理、自動化工作流程和擴展能力。

Directus 已經提供了一個 MCP 伺服器，允許 Claude、ChatGPT 和 Cursor 等 AI 工具連接到 Directus。AI 可以在現有的權限系統內建立、編輯和管理內容，無需將資料複製到其他地方或繞過 Directus 的權限控制。

![Directus2.png](https://static-docs.nocobase.com/Directus2-otlau7.png)

### 你可以用 Codex 和 Directus 建構什麼

Codex 和 Directus 適合在現有資料庫之上快速建構內部資料後端和 API 層，例如客戶資料管理、訂單資料管理、內容管理、產品目錄管理、營運配置後台和資料審核系統。

這種組合的價值很明確：Directus 連接資料庫、生成 API、提供管理面板並處理權限。Codex 理解業務需求、設計資料結構、編寫擴展邏輯、鉤子、自訂端點、資料腳本和前端整合程式碼。

其優點在於開發者無需重寫現有的資料庫或後端。Directus 提供了資料層和管理面板，而 Codex 加速了業務邏輯和擴展開發。這使得該組合適合那些已經擁有資料庫，但需要快速添加內部工具能力的團隊。

### 建議提示詞

```text
Help me design an internal admin panel for an existing order database based on Directus. It should include four data types: orders, customers, products, and payment records. Also configure basic permissions, list views, status update workflows, and a notification Hook after order status changes.
```

## 5. Supabase

官方網站：[https://supabase.com/](https://supabase.com/)

GitHub：[https://github.com/supabase/supabase](https://github.com/supabase/supabase)

GitHub Stars：103k

Supabase 可能不需要太多介紹。

Supabase 提供了一個官方的 Supabase MCP 伺服器，允許 AI 工具連接到 Supabase 專案，並在允許的權限範圍內進行查詢或操作。Supabase 也為 AI 代理提供了技能，涵蓋資料庫、Auth、Edge Functions、Realtime、Storage、Vectors、Cron、Queues、CLI、MCP、Schema 變更、遷移、RLS 策略、安全審計等。

![Supabase1-rq907o.png](https://static-docs.nocobase.com/Supabase1-rq907o.png)

### 你可以用 Codex 和 Supabase 建構什麼？

Codex 和 Supabase 適合快速建構內部工具的後端層。Supabase 提供資料庫、身份驗證、API、儲存和函數執行環境。Codex 根據業務需求設計 Schema、編寫 SQL、配置 RLS 權限、生成 Edge Functions，並幫助前端呼叫 Supabase API。

例如，如果你想建構一個客戶管理後台，Codex 可以根據客戶、聯絡人、跟進記錄、銷售機會、合約和附件等需求，設計 Postgres 資料表、欄位關係、索引和 RLS 策略。Supabase 提供資料庫、身份驗證、自動 API 和權限執行。之後，如果需要自動分配客戶、同步外部資料或生成 AI 摘要，你可以繼續使用 Codex 來編寫 Edge Functions 或資料庫函數。

### 建議提示詞

```text
Help me design the backend for a customer management system based on Supabase. It should include tables for customers, contacts, opportunities, contracts, follow_ups, and attachments. Please generate SQL migration, basic indexes, RLS policies, authentication and permission design, and an Edge Function for automatically assigning sales owners.
```

## 6. Windmill

官方網站：[https://www.windmill.dev/](https://www.windmill.dev/)

GitHub：[https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

GitHub Stars：16.5k

Windmill 是一個為開發者設計的開源平台。它可以快速將用 Python、TypeScript、Go、Bash、SQL 等語言編寫的腳本轉換為 API、背景任務、工作流程和內部應用程式。它適用於建構自動化工作流程、資料處理任務、營運工具、背景任務管理、內部腳本平台和輕量級管理介面。

![Windmill1-kcvxsb.png](https://static-docs.nocobase.com/Windmill1-kcvxsb.png)

憑藉其 CLI 和內建的 AI 技能，Windmill 讓開發者可以在本地使用 Claude Code 或 Codex，然後透過 `wmill sync push` 部署到遠端工作空間。在這種設定中，Codex 編寫腳本和工作流程邏輯，而 Windmill 負責執行、排程、權限、日誌和可視化操作介面。

### 你可以用 Codex 和 Windmill 建構什麼

Codex 和 Windmill 特別適合將開發者編寫的腳本轉換為整個團隊都可以使用的內部工具。例如資料同步、報表生成、批次匯入匯出、Webhook 處理、排程任務、客戶資料清理、訂單狀態同步、Slack / Email 通知和 AI 資料處理工作流程。

例如，如果你想建構一個每晚同步 CRM 客戶資料並生成異常報告的內部工作流程，Codex 可以幫助編寫用於讀取、清理、比較和報告資料的腳本。Windmill 可以將工作流程配置為排程任務，記錄執行日誌，並提供一個內部頁面，讓團隊可以手動觸發工作流程或查看結果。

### 建議提示詞

```text
Help me create a customer data synchronization workflow based on Windmill: read customer data from PostgreSQL every night, clean duplicate records, identify abnormal emails, generate an exception report, and notify the operations team through Slack. Please write the script in TypeScript and explain how to configure the scheduled task and input parameters.
```

## 總結

像 Codex 這樣的 AI 程式碼代理正在改變開發者建構內部工具的方式。

NocoBase、Refine、Payload、Directus、Supabase 和 Windmill 各自從不同的角度（業務系統、前端框架、資料後端、後端服務、腳本自動化）提供了更清晰的工程基礎。

Codex 的價值在於，它在這些基礎之上提升了開發效率：它幫助你拆解需求、生成程式碼、配置資源、編寫腳本、設計工作流程、處理整合和排查問題。

一個更好的開發方法是：

> 首先選擇合適的開源基礎設施，然後讓 Codex 在一個清晰的結構內完成具體的實作。

以這種方式建構的內部工具更容易維護、擴展和投入實際使用。

**相關閱讀**

* [Claude Code 之後：你應該認識的 6 個開源工具](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [企業軟體開發的十大開源 AI 與無程式碼工具](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [用於建構內部工具的 8 個開源 AI 代理平台](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [支援 RBAC、AI 和開放 API 的最佳企業級自託管 CRM](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 個最佳開源工具，取代自訂整合中介軟體](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [用 NocoBase 或 Airtable 取代 Excel？逐項成本比較](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [從 Excel 資料快速建構 Web 應用程式的 4 種方法](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [不只是 PostgreSQL：比較 5 個支援外部資料庫的無程式碼/低程式碼平台](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [開源專案管理工具選擇指南，2026 版](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [如何使用 PostgreSQL 建構自訂 CRM](https://www.nocobase.com/en/blog/how-to-build-a-custom-crm-with-postgresql)
* [2026 年值得關注的 GitHub 上 20 大 AI 專案：不只是 OpenClaw](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)

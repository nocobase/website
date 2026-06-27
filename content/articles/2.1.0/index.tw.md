---
title: "宣布推出 NocoBase 2.1.0"
description: "NocoBase 2.1 引入了全新的 CLI，讓人類與 AI 代理都能連接並管理應用程式。同時也強化了 AI 建置、技能、AI 外掛開發、AI 員工、多應用協作、版本管理、工作流程以及 2.0 相容性。"
---

NocoBase 2.1 是 **AI 能力、多應用與 2.0 適配** 的重大升級。我們推出了 NocoBase CLI，讓人類與 AI 代理都能輕鬆連接並管理 NocoBase 應用程式。從建立應用程式、AI 輔助建置，到增強的 AI 員工與 AI 開發外掛，涵蓋了從環境入門到系統建置與業務協作的完整流程。我們也強化了多應用功能，讓跨應用程式的互動與協作更加容易。同時，我們新增了版本控制，並持續大幅補齊 2.0 頁面支援與核心能力——現在有更多區塊、欄位、操作與外掛支援 2.0。

## 新功能

### 推出 NocoBase CLI

在此版本中，NocoBase CLI (`nb`) 是普通使用者與 AI 代理連接 NocoBase 的核心入口。

CLI 用於在本地工作區中初始化、連接與管理 NocoBase 應用程式。它涵蓋了以下幾種情境：

- 透過 Docker、npm 或 Git 安裝新的 NocoBase 應用程式，並將其儲存為 CLI 環境
- 連接現有的 NocoBase 應用程式，並將其儲存為 CLI 環境
- 安裝、建立與啟用外掛
- 操作、備份與管理 NocoBase 應用程式

![NocoBase CLI 視覺化精靈](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

無論您是想將 AI 整合到現有系統，還是從頭開始建立一個新的應用程式，都可以透過 CLI 處理初始化與持續管理。

對於團隊而言，CLI 提供了一個標準的入口點，AI 代理可以理解並操作——環境初始化、連接配置與執行時期管理都共享相同的流程。

官方版本還新增了一組與操作相關的指令：

- `nb api`：透過 CLI 呼叫 NocoBase API。
- `nb app`：管理應用程式執行時期狀態：啟動、停止、重啟、日誌與升級。
- `nb backup`：建立備份並下載到本地，或將本地備份檔案還原到目標環境。
- `nb config`：管理 CLI 預設配置。
- `nb db`：管理所選環境的內建資料庫。
- `nb env`：管理 NocoBase 專案環境、當前環境、狀態、詳細資訊與執行時期指令。
- `nb license`：管理商業授權與已授權的外掛。
- `nb plugin`：管理所選 NocoBase 環境的外掛。
- `nb scaffold`：產生 NocoBase 外掛開發脚手架。
- `nb self`：檢查或更新 NocoBase CLI 本身。
- `nb source`：管理本地原始碼專案：下載、開發、建置與測試。

相關文件：

- [使用 CLI 安裝 NocoBase](https://docs.nocobase.com/quickstart/installation/cli)
- [AI 代理整合指南](https://docs.nocobase.com/ai/quick-start)
- [NocoBase CLI 指令參考](https://docs.nocobase.com/api/cli/)

### AI 輔助建置：用對話取代手動配置

AI 輔助建置是此版本的核心體驗之一。您可以用自然語言描述您的業務需求，AI 會協助完成資料建模、頁面配置、權限設定與工作流程編排。

與傳統的低程式碼建置相比，AI 輔助建置有幾個明顯的優勢：

- 更低的入門門檻——您不需要事先熟悉每個配置概念
- 從需求描述到可運作原型的路徑更短
- 資料、UI 與工作流程配置可以由 AI 連續完成

例如：「為我設計一個 CRM 資料模型」、「為我建立一個客戶管理頁面」或「編排一個在訂單建立後自動扣減庫存的工作流程」——這些都可以在 NocoBase 的能力範圍內由 AI 處理。

相關文件：

- [AI 輔助建置快速入門](https://docs.nocobase.com/ai-builder/)

### NocoBase 技能涵蓋完整建置流程

為了幫助 AI 真正理解 NocoBase 的配置系統，此版本提供了一組可以安裝到 AI 代理中的領域知識包——NocoBase 技能。

技能是圍繞 NocoBase 關鍵能力領域組織的標準化知識與操作包裝，幫助 AI 更準確地理解物件模型、配置結構與執行邊界。

我們目前提供 8 項技能，涵蓋完整的建置流程：

- [環境管理](https://docs.nocobase.com/ai-builder/env-bootstrap)——環境檢查、安裝/部署、升級與故障排除
- [資料建模](https://docs.nocobase.com/ai-builder/data-modeling)——建立與管理資料表、欄位與關聯
- [UI 建置](https://docs.nocobase.com/ai-builder/ui-builder)——建立與編輯頁面、區塊、彈出視窗與互動反應
- [工作流程管理](https://docs.nocobase.com/ai-builder/workflow)——建立、編輯、啟用與診斷工作流程
- [權限配置](https://docs.nocobase.com/ai-builder/acl)——管理角色、權限政策、使用者綁定與風險評估
- [解決方案](https://docs.nocobase.com/ai-builder/dsl-reconciler)——從 YAML 批量建置整個業務系統（仍處於測試階段，穩定性有限）
- [外掛管理](https://docs.nocobase.com/ai-builder/plugin-manage)——檢視、啟用與停用外掛
- [發佈管理](https://docs.nocobase.com/ai-builder/publish)——跨環境發佈、備份/還原與遷移

有了技能，AI 可以更準確地理解 NocoBase 的配置系統，並在建置與管理系統時提供更智慧的協助。

**注意**：NocoBase 技能仍在積極改進中。當您安裝並初始化 NocoBase CLI 時，NocoBase 技能也會自動安裝，因此在大多數情況下您不需要單獨安裝它們。

相關文件：

- [NocoBase 技能](https://github.com/nocobase/skills)

### AI 開發外掛

此版本補足了 AI 外掛開發所需的基礎能力，讓 AI 不僅能參與應用程式建置，還能參與自訂外掛開發。

這主要體現在三個方面：

- 統一的 `rsbuild/rspack` 建置管道，整合了外掛開發與前端建置系統
- 針對 AI 開發的 `client-v2` 能力與 `/v/` 路由系統，為下一代客戶端外掛開發做準備
- AI 外掛開發技能，幫助 AI 更好地理解外掛結構、程式碼組織與實作模式

關於 `client-v2` 的準備工作包括：

- `@nocobase/app` 暴露了 `client-v2` 入口
- 核心提供了 `@nocobase/client-v2` 套件，包含基礎元件、工具程式與型別定義
- 每個外掛都有一個 `/src/client-v2` 目錄
- 新增了 `/v/` 路由——仍在積極改進中，可供早期採用者使用
- 核心正在逐步遷移到 V2
- 外掛正在逐步遷移到 V2

統一的建置管道降低了前端外掛開發與除錯的成本。`client-v2` 的逐步推出也為 AI 提供了一個更穩定的目標結構，用於產生與維護外掛程式碼。

在實務上：您可以用自然語言描述一個外掛需求，AI 會協助產生前端與後端程式碼、資料表、API、權限配置與 i18n 內容。

**注意**：AI 外掛開發僅適用於 `client-v2` 風格的新外掛。我們後續會提供從 `client-v1` 外掛遷移到 `client-v2` 的遷移文件與技能，以幫助您將現有外掛帶入新系統。

相關文件：

- [AI 開發外掛快速入門](https://docs.nocobase.com/ai-dev/)
- [外掛開發](https://docs.nocobase.com/plugin-development/)

### AI 員工增強

AI 輔助建置回答的是「如何使用 AI 建置系統」；AI 員工回答的是「如何讓 AI 在系統內工作以解決具體的業務問題」。

AI 員工在之前的版本中就已存在，但在這個版本中，相關能力得到了增強，AI 核心也得到了補齊：

- [MCP 支援](https://docs.nocobase.com/ai-employees/features/mcp)
- [新的 AI 員工圖譜](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas)，扮演團隊領導角色，根據使用者意圖調度其他 AI 員工來完成任務
- [AI 員工工作流程節點](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [基於 LLM 的網路搜尋工具](https://docs.nocobase.com/ai-employees/features/web-search)
- [新的聚合查詢工具與報表產生工具](https://docs.nocobase.com/ai-employees/scenarios/business-report)，用於產生業務分析報告
- [新的本地化工程師 Lina](https://docs.nocobase.com/ai-employees/built-in/lina)，一個來自本地化外掛的內建 AI 員工，用於系統本地化翻譯，支援增量、選擇與完整翻譯範圍

這些改進將 AI 員工在業務系統內的可擴展性、編排能力與執行能力提升到了一個新的水平。AI 員工可以理解當前業務上下文，呼叫技能來執行特定任務，參與自動化工作流程，並結合外部資訊來提供分析與輸出。

官方版本還新增了對 AI 員工從工作流程附件欄位載入檔案以及並行處理多個對話的支援，進一步提高了 AI 員工在實際業務流程中的可用性。

相關文件：

- [AI 員工](https://docs.nocobase.com/ai-employees/)
- [Lina：本地化工程師](https://docs.nocobase.com/ai-employees/built-in/lina)
- [使用 Lina 與本地 HY-MT1.5-1.8B 模型翻譯本地化詞彙](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)

### 版本控制

版本控制幫助您更好地管理應用程式的版本迭代與變更歷史。您可以建立、檢視與還原應用程式的不同版本，從而在開發與運維過程中輕鬆切換版本並從問題中恢復。**注意：此功能需要專業版或更高版本。**

![](https://static-docs.nocobase.com/20260526220510.png)

相關文件：

- [版本控制](https://docs.nocobase.com/ops-management/version-control/)
- [備份管理器](https://docs.nocobase.com/ops-management/backup-manager/)

### 多應用增強

在此版本中，我們對多應用部署進行了一些重要的增強，主要體現在三個方面：

- [新的應用區塊與應用切換器](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher)，讓您可以在頁面上顯示其他子應用程式的入口點，方便使用者在主應用與子應用之間切換。

![](https://static-docs.nocobase.com/202605271403304.png)

- [新的應用單一登入](https://docs.nocobase.com/multi-app/multi-app/app-sso)。當使用者從主應用進入子應用，或在子應用之間切換時，系統會嘗試使用當前已登入的使用者自動登入目標子應用。使用者不再需要在每個子應用中重新輸入憑證。

![](https://static-docs.nocobase.com/202605271406542.png)

- [呼叫子應用 API](https://docs.nocobase.com/multi-app/multi-app/sub-app-api)。在多應用情境中，每個子應用都有自己獨立的 API，透過路徑前綴、參數等方式區分，方便呼叫子應用的 API。

這些增強對於執行多應用部署的使用者來說非常實用，使得跨多個應用程式交換資料與操作更加容易，並提高了多應用系統的整體協作效率。

相關文件：

- [應用區塊與應用切換器](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher)
- [應用單一登入](https://docs.nocobase.com/multi-app/multi-app/app-sso)
- [呼叫子應用 API](https://docs.nocobase.com/multi-app/multi-app/sub-app-api)

### 工作流程增強

此版本增強了工作流程的**可控性與可觀測性**：

- 新增逾時控制——執行時間過長的工作流程會自動終止（子流程也支援逾時配置）
- 新增建立者與更新者欄位
- 為節點任務新增日誌欄位，方便在除錯時檢視節點日誌
- Webhook 觸發器（同步模式）在逾時時回傳 408 回應狀態

相關文件：

- [工作流程](https://docs.nocobase.com/workflow/)

### 手寫簽名欄位

新增手寫簽名欄位，讓您可以在表單中繪製並儲存簽名，適用於審批、確認單、收據等情境。

相關文件：

- [手寫簽名欄位](https://docs.nocobase.com/data-sources/field-signature/)

### JS 項目操作

新增 JS 項目操作，讓您可以透過編寫 JS 在操作中執行自訂邏輯，與事件流程協同工作，以滿足更靈活的互動需求。

相關文件：

- [JS 項目操作](https://docs.nocobase.com/interface-builder/actions/types/js-item)

### 2.0 適配與新功能

除了 AI 之外，此版本繼續將關鍵功能模組遷移到 2.0，同時也為實際業務場景推出了新功能。

新功能

- [手寫簽名欄位](https://docs.nocobase.com/data-sources/field-signature/)
- [JS 項目操作](https://docs.nocobase.com/interface-builder/actions/types/js-item)

2.0 適配

- [自訂請求](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [樹狀過濾區塊](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [日曆區塊](https://docs.nocobase.com/data-sources/calendar/)
- [看板區塊](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
- [甘特圖區塊](https://docs.nocobase.com/plugins/@nocobase/plugin-gantt)
- [列表區塊](https://docs.nocobase.com/interface-builder/blocks/data-blocks/list)
- [網格卡片區塊](https://docs.nocobase.com/interface-builder/blocks/data-blocks/grid-card)
- [地圖區塊](https://docs.nocobase.com/plugins/@nocobase/plugin-map)
- [Markdown 區塊](https://docs.nocobase.com/interface-builder/blocks/other-blocks/markdown)
- [iframe 區塊](https://docs.nocobase.com/integration/embed)
- [圖表區塊 / 資料視覺化](https://docs.nocobase.com/data-visualization)

## 多語言文件

- 新增印尼語與越南語文件

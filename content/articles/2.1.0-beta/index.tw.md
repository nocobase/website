---
title: "隆重推出 NocoBase 2.1-beta"
description: "重大 AI 升級：從 CLI 整合與 AI 輔助建置，到 NocoBase Skills、AI 開發插件，以及增強的 AI 員工——涵蓋建置、擴展與營運業務系統的完整生命週期。借助 AI，更快地建置與運行真實的業務系統。"
---

本文件適用於 NocoBase 2.1.0-beta.24 及更高版本。

這是一次**以 AI 能力為核心**的重大升級。此版本讓您能將 AI 代理引入 NocoBase——涵蓋 CLI 整合、AI 輔助建置、增強的 AI 員工，以及一個 AI 開發插件——貫穿從環境入門到系統建置與業務協作的完整流程。我們也持續完善了 V2 頁面支援與核心功能。

## 新功能

### NocoBase CLI 成為 AI 代理的官方入口

在此版本中，NocoBase CLI (`nb`) 是 AI 代理連接 NocoBase 的核心入口。

CLI 用於在本地工作區中初始化、連接和管理 NocoBase 應用程式。它涵蓋兩種情境：

- 連接到現有的 NocoBase 應用程式，並將其儲存為 CLI 環境
- 透過 Docker、npm 或 Git 安裝新的 NocoBase 應用程式，然後將其儲存為 CLI 環境

![NocoBase CLI 視覺化精靈](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

無論您是想要將 AI 插入現有系統，還是從頭開始建立一個新應用程式，都可以透過 CLI 處理初始化與持續管理。

對於團隊而言，CLI 提供了一個 AI 代理可以理解與操作的標準入口——環境初始化、連接配置與運行時管理都遵循相同的流程。

相關文件：

- [AI 代理整合指南](https://docs.nocobase.com/ai/quick-start)
- [NocoBase CLI 命令參考](https://docs.nocobase.com/api/cli/)

### AI 輔助建置：用對話取代手動配置

AI 輔助建置是此版本的核心體驗之一。您可以用自然語言描述您的業務需求，AI 會協助完成資料建模、頁面配置、權限設定與工作流程編排。

與傳統的低程式碼建置相比，AI 輔助建置有幾個明顯的優勢：

- 更低的入門門檻——您無需事先熟悉每個配置概念
- 從需求描述到可運作原型的路徑更短
- 資料、UI 與工作流程配置可由 AI 持續完成

例如：「為我設計一個 CRM 資料模型」、「為我建立一個客戶管理頁面」，或「編排一個在訂單建立後自動扣減庫存的工作流程」——這些都可以在 NocoBase 的能力範圍內由 AI 處理。

相關文件：

- [AI 輔助建置快速入門](https://docs.nocobase.com/ai-builder/)

### NocoBase Skills 涵蓋完整建置流程

為了幫助 AI 真正理解 NocoBase 的配置系統，此版本提供了一組可安裝到 AI 代理中的領域知識包——NocoBase Skills。

Skills 是圍繞 NocoBase 關鍵能力領域組織的標準化知識與操作包裝，幫助 AI 更準確地理解物件模型、配置結構與執行邊界。

我們目前提供 8 個 Skills，涵蓋完整的建置流程：

- [環境管理](https://docs.nocobase.com/ai-builder/env-bootstrap) — 環境檢查、安裝/部署、升級與故障排除
- [資料建模](https://docs.nocobase.com/ai-builder/data-modeling) — 建立與管理資料表、欄位與關聯
- [UI 建置](https://docs.nocobase.com/ai-builder/ui-builder) — 建立與編輯頁面、區塊、彈出視窗與互動反應
- [工作流程管理](https://docs.nocobase.com/ai-builder/workflow) — 建立、編輯、啟用與診斷工作流程
- [權限配置](https://docs.nocobase.com/ai-builder/acl) — 管理角色、權限策略、使用者綁定與風險評估
- [解決方案](https://docs.nocobase.com/ai-builder/dsl-reconciler) — 從 YAML 批量建置整個業務系統（仍處於 Beta 階段，穩定性有限）
- [插件管理](https://docs.nocobase.com/ai-builder/plugin-manage) — 檢視、啟用與停用插件
- [發布管理](https://docs.nocobase.com/ai-builder/publish) — 跨環境發布、備份/還原與遷移

有了 Skills，AI 可以更準確地理解 NocoBase 的配置系統，並在建置與管理系統時提供更智慧的協助。

**注意**：NocoBase Skills 仍在積極改進中。當您安裝並初始化 NocoBase CLI 時，NocoBase Skills 也會自動安裝，因此在大多數情況下，您無需單獨安裝它們。

相關文件：

- [NocoBase Skills](https://github.com/nocobase/skills)

### AI 開發插件

此版本補足了 AI 插件開發所需的基礎能力，使 AI 不僅能參與應用程式建置，還能參與自訂插件開發。

這主要體現在三個方面：

- 統一的 `rsbuild/rspack` 建置管道，整合了插件開發與前端建置系統
- 針對 AI 開發的 `client-v2` 能力與 `/v2/` 路由系統，為下一代客戶端插件開發做好準備
- AI 插件開發 Skills，幫助 AI 更好地理解插件結構、程式碼組織與實作模式

關於 `client-v2` 的準備工作包括：

- `@nocobase/app` 暴露了 `client-v2` 入口
- 核心提供了 `@nocobase/client-v2` 套件，包含基礎元件、工具程式與型別定義
- 每個插件都有一個 `/src/client-v2` 目錄
- 新增了 `/v2/` 路由
- 核心正在逐步遷移至 V2
- 插件正在逐步遷移至 V2

統一的建置管道降低了前端插件開發與除錯的成本。`client-v2` 的逐步推出也為 AI 生成與維護插件程式碼提供了更穩定的目標結構。

在實際應用中：您可以用自然語言描述一個插件需求，AI 會協助生成前後端程式碼、資料表、API、權限配置與 i18n 內容。

**注意**：AI 插件開發僅適用於 `client-v2` 風格的新插件。我們後續會提供從 `client-v1` 插件遷移到 `client-v2` 的遷移文件與 Skills，以協助您將現有插件帶入新系統。

相關文件：

- [AI 開發插件快速入門](https://docs.nocobase.com/ai-dev/)
- [插件開發](https://docs.nocobase.com/plugin-development/)

### AI 員工增強功能

AI 輔助建置回答的是「我如何使用 AI 來建置系統」；AI 員工回答的是「我如何讓 AI 在系統內部工作，以解決具體的業務問題」。

AI 員工在早期版本中就已存在，但在此版本中，相關能力得到了增強，並且 AI 核心也得到了完善：

- [MCP 支援](https://docs.nocobase.com/ai-employees/features/mcp)
- [新的 AI 員工圖譜](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas)，扮演團隊領導角色，根據使用者意圖調度其他 AI 員工完成任務
- [AI 員工工作流程節點](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [基於 LLM 的網路搜尋工具](https://docs.nocobase.com/ai-employees/features/web-search)
- [新的聚合查詢工具與報表生成工具](https://docs.nocobase.com/ai-employees/scenarios/business-report)，用於產生業務分析報告

這些改進將 AI 員工在業務系統內的可擴展性、編排能力與執行能力提升到了一個新的水平。AI 員工可以理解當前業務上下文，調用技能來執行特定任務，參與自動化工作流程，並結合外部資訊來提供分析與輸出。

如果您的團隊需要將智慧協作、自動化分析與任務執行引入您的業務系統，這也是此次更新中最值得關注的方向之一。

相關文件：

- [AI 員工](https://docs.nocobase.com/ai-employees/)

### 2.0 適配與新功能

除了 AI 之外，此版本繼續將關鍵功能模組遷移到 2.0，同時也為真實業務場景推出了新功能。

新功能

- [手寫簽名欄位](https://docs.nocobase.com/data-sources/field-signature/)
- [JS 項目操作](https://docs.nocobase.com/interface-builder/actions/types/js-item)

2.0 適配

- [自訂請求](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [樹狀過濾區塊](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [日曆區塊](https://docs.nocobase.com/data-sources/calendar/)
- [看板區塊](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)

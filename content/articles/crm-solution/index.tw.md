---
title: "NocoBase CRM 解決方案現已上線 — 歡迎探索"
description: "利用開源無程式碼平台的功能，NocoBase CRM 解決方案整合了客戶管理與流程審批等核心功能。它支援插件擴展，可直接複製到自己的環境中，並提供靈活的業務適配選項。"
---

我們很高興宣布 NocoBase CRM 解決方案正式上線！

作為一個開源的無程式碼平台，NocoBase 已被廣泛用於建構各種商業應用程式。其中，CRM 是最常見的起點之一——因此，讓它成為我們產品線中第一個官方解決方案，自然是順理成章的事。

您現在可以直接在我們的線上展示環境中試用，並輕鬆為您的需求進行複製。

👉 立即試用：[https://www.nocobase.com/en/solutions/crm](https://www.nocobase.com/en/solutions/crm)

<iframe width="679" height="382" src="https://www.youtube.com/embed/rU0xaUYEtYk" title="NocoBase CRM Solution is Now Live" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 為什麼選擇 CRM？

CRM 系統是 NocoBase 最受歡迎的應用場景之一。它們擁有清晰的結構、標準化的流程以及定義明確的資料關係——這使其成為展示 NocoBase 優勢的完美範例：視覺化資料建模、靈活的權限管理、自動化工作流程以及內建圖表。

更重要的是，CRM 是一個經過我們全球用戶群在各種真實場景中驗證過的應用案例。

## CRM 展示版包含哪些內容？

您會看到一個功能完整的 CRM 系統，您可以：

*   管理客戶、聯絡人與組織檔案
*   使用漏斗圖、排名等自訂儀表板
*   直接在平台內處理審批與發送電子郵件
*   設定提醒、自動化工作流程與指派任務
*   自訂欄位、關聯、權限與介面佈局

從資料建模到 UI 設計，再到商業邏輯，一切皆可視覺化配置——無需撰寫程式碼。

## 使用了哪些商業插件？

目前的 CRM 展示版包含了以下商業插件，以提供完整的體驗：

| 插件                                                                                                     | 在 CRM 中的角色                                                                  | 沒有插件時的替代方案                                                                               |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [資料視覺化：ECharts](https://docs.nocobase.com/handbook/data-visualization-echarts)               | 可自訂的圖表（例如：漏斗圖、長條圖、圓餅圖）                                | 使用免費的圖表插件或透過 iframe 區塊嵌入外部圖表                                     |
| 資料表格：評論                                                                                       | 為客戶、聯絡人、工單等添加評論                           | 結合 Markdown (Vditor) 與列表視圖作為替代方案                                                |
| [電子郵件管理員](https://docs.nocobase.com/handbook/email-manager/usage-admin)                              | 在系統內發送與管理電子郵件（支援大量使用）        | 基本功能 (\~50%) 可透過資料表格 + 電子郵件工作流程節點實現；不支援附件                          |
| [備份管理員](https://docs.nocobase.com/handbook/backups)                                              | 備份、還原與分發您的應用程式資料                                | 使用手動資料庫遷移作為替代方案                                                          |
| [工作流程：審批](https://docs.nocobase.com/handbook/workflow/triggers/approval)                        | 支援審批流程（例如：報價單、訂單）                               | 使用帶有聯動規則的狀態欄位；對於複雜工作流程有限                                      |
| [工作流程：JSON 變數映射](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping) | 解析 SQL 結果並將潛在客戶分配給銷售代表                             | 可以使用 SQL 預存程序處理複雜邏輯                                                          |
| [工作流程：JSON 查詢](https://docs.nocobase.com/handbook/workflow/nodes/json-query)                       | 用於潛在客戶分配後任務的高階 JSON 解析                        | SQL 預存程序可作為替代方案                                                      |
| [工作流程：自訂變數](https://docs.nocobase.com/handbook/workflow/nodes/variable)                    | 暫存值（例如：建立服務工單後的客戶 ID） | SQL 預存程序可作為替代方案                                                          |
| [動作：匯出記錄 (Pro)](https://docs.nocobase.com/handbook/action-export-pro)                       | 從任何表格匯出資料                                                   | 使用預設的匯出功能（功能有限）                                                    |
| [動作：匯入記錄 (Pro)](https://docs.nocobase.com/handbook/action-import-pro)                       | 將資料匯入任何表格                                                   | 使用預設的匯入功能作為基本替代方案                                                    |
| [自訂變數](https://docs.nocobase.com/handbook/custom-variables)                                     | 在分頁標籤上顯示數字徽章                                         | ⚠️ 無                                                                                                  |
| [範本列印](https://docs.nocobase.com/handbook/action-template-print)                              | 產生可列印的報價單與訂單                                                | ⚠️ 無                                                                                                  |
| 歷史記錄 (測試版)                                                                                          | 追蹤資料記錄的變更                                                | ⚠️ 無                                                                                                  |

## 如果您尚未購買商業插件怎麼辦？

即使沒有商業插件，您仍然可以使用 NocoBase 的核心功能來建構並執行一個功能完整的 CRM。以下是如何處理一些較進階使用案例的方法：

1.  **複雜邏輯（例如：潛在客戶分配）**

如果您無法使用操作前事件、JSON 解析節點或 JavaScript 節點等功能，您可以將邏輯轉移到 SQL 預存程序中。這種方法可行，但可能會使程式碼庫更難維護，並使未來的遷移變得複雜。

2.  **無歷史記錄的變更追蹤**

如果沒有歷史記錄插件，您可以透過結合操作前事件、查詢節點和 JavaScript 節點來比較欄位值，從而近似實現此功能。然而，這種方法需要手動操作、較為複雜，並且可能影響效能——尤其是在處理大型資料集或頻繁變更時。

3.  **無專用區塊的基本評論功能**

缺少像評論插件這樣的功能？您可以使用列表視圖和 Markdown 欄位來重新建立基本的評論功能。請參考此教學範例：

👉 [使用任務教學插件](https://www.nocobase.com/en/tutorials/task-tutorial-plugin-use)

雖然不那麼無縫，但它涵蓋了大多數基本場景。

4.  **其他功能**

某些功能——例如自訂變數、範本列印或歷史記錄——在沒有相應插件的情況下很難複製。這些可能需要大量的自訂開發或替代方案。

## 複製到您自己的環境

您只需點擊幾下，即可將整個 CRM 系統複製到您自己的 NocoBase 環境中。這是一個堅實的基礎，您可以在此基礎上進行建構——根據您的確切業務需求添加、刪除或自訂任何功能。

閱讀指南：[NocoBase CRM 展示版部署指南](https://www.nocobase.com/en/tutorials/nocobase-crm-demo-deployment-guide)

我們也將發布逐步教學，詳細解釋這個 CRM 是如何建構的。

而這僅僅是開始——更多即用型解決方案即將推出，包括工單系統、專案管理工具等。

**相關閱讀：**

*   [GitHub 上星數最高的十大開源 ERP 和 CRM](https://www.nocobase.com/en/blog/top-10-most-starred-open-source-erp-and-crm-on-github)
*   [GitHub 星數最高的 11 個開源 CRM 專案](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
*   [NocoBase vs Salesforce：誰是您理想的 CRM？](https://www.nocobase.com/en/blog/nocobase-vs-salesforce)
*   [數小時內建構 CRM：您需要了解的頂級無程式碼/低程式碼工具](https://www.nocobase.com/en/blog/low-code-no-code-crm-builder)
*   [4 個頂級自訂 CRM 案例研究（幫助您選擇更靈活的 CRM 解決方案）](https://www.nocobase.com/en/blog/custom-crm-case-studies)
*   [4 款適合小型企業的最佳開源 CRM 軟體：輕量且高效](https://www.nocobase.com/en/blog/the-best-4-crm-software-for-small-businesses)
*   [如何在 NocoBase 中實現 CRM 潛在客戶轉換](https://www.nocobase.com/en/tutorials/how-to-implement-lead-conversion-in-nocobase)
*   [在 NocoBase 中實現 CRM 銷售管道視覺化：潛在客戶狀態進度條與階段管理](https://www.nocobase.com/en/tutorials/nocobase-crm-sales-pipeline-visualization-lead-status-progress-bar)

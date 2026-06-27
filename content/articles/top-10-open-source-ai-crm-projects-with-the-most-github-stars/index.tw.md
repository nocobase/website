---
title: "GitHub 星數最高的十大開源 AI CRM 專案"
description: "GitHub 上最受歡迎的開源 AI CRM 專案一覽，包括原生具備 AI 功能的平台，以及支援靈活整合的專案。"
---

📝 備註：本文最後更新於 2026 年 1 月 21 日。我們會定期更新資訊，確保您掌握最新洞察！😊

## 簡介

您目前使用的是哪一款 CRM？

對大多數團隊而言，答案是基於 SaaS 的 CRM，例如 Salesforce。這些平台功能豐富，擁有成熟的生態系統支持，並在企業中廣泛採用。與此同時，一些技術偏好較強或靈活性需求較高的團隊，已開始關注 [Salesforce 的開源替代方案](https://www.nocobase.com/en/blog/salesforce-open-source-crmalternative)。低程式碼與無程式碼平台讓他們能夠以較低成本與更短的開發週期，建立符合自身工作流程的 CRM。我們先前曾評測過幾個 [GitHub 上星數高的開源 CRM 專案](https://www.nocobase.com/en/blog/github-open-source-crm-projects)，作為 CRM 評估的起點，不過當時 AI 尚未成為這些工具的核心能力。

💡延伸閱讀：[Top 4 Custom CRM Case Studies (Helping You Choose a More Flexible CRM Solution)](https://www.nocobase.com/en/blog/custom-crm-case-studies)

隨著更多工具與系統與 AI 深度整合，開源 CRM 專案也正在演進。CRM 正逐漸從一個以資料輸入與記錄管理為中心的系統，轉變為在業務營運中扮演更主動角色的平台。有些專案已將 AI 作為原生功能，而其他專案則透過擴充套件、外掛程式或 API 連接來結合 AI。

在這篇更新的評測中，我們檢視了 [GitHub CRM 主題](https://github.com/topics/crm) 下星數高的儲存庫，並將其分為兩類：內建 AI 能力的 CRM 與支援 AI 擴充的 CRM。我們總結了它們的 AI 功能與常見使用案例，以協助您了解其能力邊界，並選擇最符合需求的選項。

🎉[NocoBase CRM Solution is Now Live — Ready for You to Explore](https://www.nocobase.com/en/blog/crm-solution)

---

💬嘿，您正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 驅動無程式碼/低程式碼開發平台，用於建構企業應用程式、內部工具與各類系統。它完全自託管、基於外掛程式架構，且對開發者友善。→[在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

如果您想快速了解本文中介紹的工具，以下摘要清楚呈現了每個類別的概況。

**具備原生 AI 能力的 CRM**

* **NocoBase**：一個無程式碼與低程式碼平台，透過其 AI 員工框架，將 AI 深度嵌入資料建模、業務分析與 CRM 工作流程中。
* **Huly Platform**：一個以協作為中心的 workspace，內建即時 AI 轉錄功能，適用於通訊與會議場景。
* **Krayin CRM**：一個專為銷售團隊設計的開源 CRM，包含 AI 驅動的內容生成與應用程式內智慧輔助。

**可擴充或整合 AI 的 CRM**

* **Twenty**：一個現代化、高度可自訂的開源 CRM，可透過 GraphQL 和 REST 整合外部 AI 系統。
* **ERPNext**：一個以 ERP 為中心的平台，透過外掛程式和 API 整合，將 AI 引入 CRM 及更廣泛的業務流程。
* **SuiteCRM**：一個成熟的開源 CRM，可透過擴充套件和第三方服務整合 AI。
* **Monica**：一個個人關係管理工具，可透過 API 呼叫連接外部 AI 服務。
* **Akaunting**：一個會計與業務管理平台，可透過應用程式和 API 整合來增加 AI 能力。
* **Idurar ERP CRM**：一個專為小型團隊設計的 ERP 加 CRM 解決方案，可透過其 API 層整合 AI。
* **Dolibarr**：一個模組化的 CRM 系統，可透過附加模組和基於 API 的整合來支援 AI。

## 原生 AI CRM

### NocoBase

![nocobase1.png](https://static-docs.nocobase.com/nocobase1-voq8jv.png)

官方網站：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars：20.8k

AI 文件：[[https://v2.docs.nocobase.com/cn/ai-employees](https://v2.docs.nocobase.com/cn/ai-employees)]([https://v2.docs.nocobase.com/ai-employees](https://v2.docs.nocobase.com/ai-employees))

**概述**

NocoBase 是一個開源、自託管的 AI 驅動無程式碼與低程式碼開發平台。它採用資料模型驅動與外掛程式導向的架構，讓團隊能快速建立企業級業務系統，包括 CRM 工作流程。

**AI 在系統內部的運作方式**

AI 以「AI 員工」的形式實現，這些智慧代理程式直接嵌入頁面與工作流程中：

* **理解頁面層級的資料上下文**：AI 代理程式能讀取當前檢視關聯的資料表、欄位與記錄，並在充分了解此上下文的情況下採取行動。
* **生成內容並協助執行**：它們能根據業務需求，總結文字、提取資訊、分析資料或自動填寫欄位。
* **加速系統建置**：在設定階段，它們能協助草擬資料模型、頁面佈局與自動化邏輯，從而加快 CRM 的建立速度。

**典型使用案例**

NocoBase 的 AI 代理程式能支援廣泛的 CRM 流程，使系統在資料處理與分析方面更加智慧：

* **資料清理與結構化輸入**：AI 能從非結構化文字（如電子郵件或備註）中提取關鍵細節，並將其轉換為結構化的客戶屬性或業務事件。

![nocobase2.gif](https://static-docs.nocobase.com/nocobase2-3jul27.gif)

* **業務分析與視覺化**：在潛在客戶或商機等頁面上，AI 能直接根據現有資料生成趨勢圖表、比較分析、KPI 卡片與簡潔洞察。

![nocobase3.gif](https://static-docs.nocobase.com/nocobase3-0aik71.gif)

* **多語言翻譯與欄位填入**：AI 能翻譯外語電子郵件或記錄，並將結果寫入相關的 CRM 欄位，確保跨語言資料的一致性。

![nocobase4.gif](https://static-docs.nocobase.com/nocobase4-plcdr3.gif)

### Huly Platform

![Huly Platform.png](https://static-docs.nocobase.com/Huly%20Platform-3s2br9.png)

官方網站：[https://huly.io/](https://huly.io/)

GitHub：[https://github.com/hcengineering/platform](https://github.com/hcengineering/platform)

GitHub Stars：23.9k

AI 文件：[https://docs.huly.io/communication/live-transcription/](https://docs.huly.io/communication/live-transcription/)

**概述**

Huly Platform 是一個開源、全方位的協作與業務管理 workspace。它將專案管理、通訊、虛擬辦公室功能與 CRM 整合在一個統一的環境中。

**AI 在系統內部的運作方式**

其 AI 能力集中於即時轉錄，由內建的助手 Hulia 驅動。在平台上進行語音或視訊會議時，Hulia 會擷取對話內容並即時轉換為文字。這些轉錄稿會儲存為討論的一部分，讓使用者可以像閱讀聊天訊息一樣閱讀、回覆和標記它們。這減少了手動記錄的需求，並簡化了溝通流程。

**典型使用案例**

Huly 非常適合頻繁協作的團隊，例如：

* 在音訊或視訊通話期間自動進行轉錄與會議記錄建立
* 以文字形式分享討論摘要，便於回顧
* 在一個統一的 workspace 中管理專案、溝通與知識

---

### Krayin CRM

![Krayin CRM.png](https://static-docs.nocobase.com/Krayin%20CRM-wo95u4.png)

官方網站：[https://krayincrm.com/](https://krayincrm.com/)

GitHub：[https://github.com/krayin/laravel-crm](https://github.com/krayin/laravel-crm)

GitHub Stars：20.6k

AI 文件：[https://krayincrm.com/ai-crm/](https://krayincrm.com/ai-crm/)

**概述**

Krayin CRM 是一個基於 Laravel 建構的開源系統，提供銷售管道、聯絡人、潛在客戶與活動追蹤等核心 CRM 功能，並具有靈活的外掛程式架構。

**AI 在系統內部的運作方式**

官方 AI 模組整合了大型語言模型，以增強 CRM 工作流程。其用途包括：

* **銷售內容建立與優化** — 生成後續追蹤電子郵件、聯絡人備註、會議摘要等類似內容
* **潛在客戶與聯絡人輔助** — 在詳細資料頁面上提供建議或自動完成資訊
* **更智慧的文字輸入** — 將 AI 驅動的生成與建議嵌入日誌、任務與備註中

這些功能有助於團隊加快工作速度，並提升 CRM 相關寫作的品質。

**典型使用案例**

Krayin 的 AI 能力非常適用於：

* 需要精煉後續追蹤訊息或摘要的銷售團隊
* 希望獲得更豐富聯絡人上下文或 AI 建議備註的客戶經理
* 希望在其 CRM 內部提升寫作效率與整體智慧化的團隊

## 支援 AI 擴充或整合的 CRM

### Twenty

![Twenty.png](https://static-docs.nocobase.com/Twenty-9id6n2.png)

官方網站：[https://twenty.com/](https://twenty.com/)

GitHub：[https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

GitHub Stars：37.3k

**概述**

Twenty 是一個現代化的開源 CRM，被設計為 Salesforce 等系統的高度可自訂替代方案。它讓團隊能完全掌控資料、工作流程與架構，適合希望自託管並深度客製化 CRM 的組織。

**AI 如何整合**

Twenty 提供完整的 GraphQL 和 REST API，使其易於與外部 AI 系統整合。目前已存在一個基於 MCP 的擴充，其中 MCP Server 將 Twenty 的資料與操作暴露給 Claude 等 AI 助手。這使得可以透過自然語言執行查詢、建立、更新與管理 CRM 記錄等操作。

### ERPNext

![ERPNext.png](https://static-docs.nocobase.com/ERPNext-jtmlm0.png)

官方網站：[https://erpnext.com/](https://erpnext.com/)

GitHub：[https://github.com/frappe/erpnext](https://github.com/frappe/erpnext)

GitHub Stars：30.6k

**概述**

ERPNext 是一個開源、全方位的企業管理平台，涵蓋 CRM、銷售、採購、庫存、財務、人力資源等領域。它基於 Frappe Framework 建構，支援廣泛的自訂與模組化擴展，非常適合建構統一業務系統的團隊。

**AI 如何整合**

ERPNext 透過其 API 和外掛程式框架支援 AI。其生態系統現在包含多種基於 Frappe 建構的 AI 擴充，為表單、備註和通訊模組帶來了文字生成、內容優化和智慧輔助等功能。ERPNext 也常被用作應用程式骨幹，將業務資料與外部 AI 服務整合，以實現分析和自動化內容生成。

### SuiteCRM

![SuiteCRM.png](https://static-docs.nocobase.com/SuiteCRM-8wdoh4.png)

官方網站：[https://suitecrm.com/](https://suitecrm.com/)

GitHub：[https://github.com/SuiteCRM/SuiteCRM](https://github.com/SuiteCRM/SuiteCRM)

GitHub Stars：5.2k

**概述**

SuiteCRM 是一個成熟的開源 CRM，提供潛在客戶、聯絡人、客戶、商機與行銷活動等模組。它被偏好或需要自託管 CRM 環境的組織廣泛使用。

**AI 如何整合**

SuiteCRM 提供完整的 REST API 和模組化擴充框架，允許透過外掛程式或自訂開發來整合 AI。官方與社群生態系統都提供擴充，可為 CRM 工作流程增加 AI 生成的內容、智慧建議或自動化分析。業務資料也可以透過 API 連接到外部 AI 服務，以支援更智慧的客戶互動。

### Monica

![Monica.png](https://static-docs.nocobase.com/Monica-bj87me.png)

官方網站：[https://www.monicahq.com/](https://www.monicahq.com/)

GitHub：[https://github.com/monicahq/monica](https://github.com/monicahq/monica)

GitHub Stars：23.8k

**概述**

Monica 是一個開源的個人關係管理工具，幫助個人組織聯絡人、追蹤互動與管理提醒，並高度重視隱私與自託管。

**AI 如何整合**

Monica 主要透過其 REST API 和 Webhooks 與 AI 整合。在大多數工作流程中，使用者將聯絡人或互動資料發送到外部服務，由 AI 處理文字分析或建議，然後再將結果同步回來。AI 能力來自外部工具，而非 Monica 核心本身。

### Akaunting

![Akaunting.png](https://static-docs.nocobase.com/Akaunting-3j2qgv.png)

官方網站：[https://akaunting.com/](https://akaunting.com/)

GitHub：[https://github.com/akaunting/akaunting](https://github.com/akaunting/akaunting)

GitHub Stars：9.4k

**概述**

Akaunting 是一個專為中小型企業建構的開源會計與業務管理平台。它提供會計、發票、費用以及客戶或供應商管理等模組，並透過其應用程式市集支援 CRM 與業務擴充。

**AI 如何整合**

AI 是透過 Akaunting 的 REST API 和擴充框架引入的。在實務上，使用第三方應用程式或外部 AI 服務來分析財務或客戶資料，然後將結果寫回系統。因此，AI 功能是透過整合與擴充來添加，而非內建於核心平台中。

### IDURAR

![IDURAR.png](https://static-docs.nocobase.com/IDURAR-vys5jd.png)

官方網站：[https://www.idurarapp.com/](https://www.idurarapp.com/)

GitHub：[https://github.com/idurar/idurar-erp-crm](https://github.com/idurar/idurar-erp-crm)

GitHub Stars：8.1k

**概述**

IDURAR 是一個結合 ERP 與 CRM 能力的開源業務管理平台。它包括客戶管理、銷售、發票、會計與基本營運功能，專為需要自託管與可自訂系統的小型團隊與開發人員設計。

**AI 如何整合**

IDURAR 提供 API 和可擴展的架構，使其能夠與外部 AI 服務或自訂模組協作。在大多數設定中，AI 在核心系統外部運行，並透過 API 連接來讀取或更新業務資料，從而增強現有工作流程，而無需修改平台本身。整合主要依賴 API 和外部擴充。

### Dolibarr

![Dolibarr.png](https://static-docs.nocobase.com/Dolibarr-1j7qnu.png)

官方網站：[https://www.dolibarr.org/](https://www.dolibarr.org/)

GitHub：[https://github.com/Dolibarr/dolibarr](https://github.com/Dolibarr/dolibarr)

GitHub Stars：6.8k

**概述**

Dolibarr 是一個成熟的開源 ERP 與 CRM 平台，提供客戶與供應商管理、銷售、發票、庫存與會計等模組。其模組化設計與自託管部署使其成為中小型組織的常見選擇。

**AI 如何整合**

Dolibarr 支援 REST API 和基於模組的擴充系統，使其能夠與外部 AI 服務或自訂模組連接。AI 功能通常在核心平台外部處理，並透過 API 讀取或更新資料來與 Dolibarr 互動，從而可以在不更改主系統的情況下添加智慧功能。整合通常是透過模組和 API 連接來完成。

## 結論

在實務上，內建 AI 的 CRM 往往能提供更一致且整合的體驗。由於 AI 是系統架構的一部分，互動、功能與工作流程感覺更為統一。如果您的優先事項是快速採用 AI，或希望 AI 直接支援日常 CRM 任務，那麼具備原生 AI 功能的平台通常是更合適的選擇。

依賴擴充的開源 CRM 通常需要更多技術專業知識，並且最適合希望圍繞特定業務需求自訂系統的團隊。透過外掛程式、功能附加元件或與外部 AI 服務的 API 連接，團隊可以逐步引入 AI 能力。

原生 AI CRM 也支援外掛程式和 API，而可擴充的 CRM 在適當的投入下也能提供良好的 AI 體驗。關鍵在於考量您的業務階段、技術資源與靈活性需求，來決定哪種類型的 CRM 最有意義。

如果您覺得這篇文章有用，歡迎分享給任何對 AI 與 CRM 感興趣的人。

**相關閱讀：**

* [How to Quickly Build a Real System to Replace Excel: A Complete Guide](https://www.nocobase.com/en/blog/how-to-quickly-build-a-real-system-to-replace-excel)
* [Top 5 Open-Source AI Internal Tools on GitHub](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
* [The 8 Best Google Sheets Alternatives (Specs & Pricing)](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6 Open-Source No/Low-Code Tools for Building PoCs](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [A Developer’s Technical Decision Guide to No-Code and Low-Code (2026)](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [6 In-Depth Comparison of RBAC in Enterprise-Grade No-Code/Low-Code Platforms](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [14 AI-Powered Low-Code Platforms on GitHub Worth Watching](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)
* [Top 11 Open Source No-Code AI Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)

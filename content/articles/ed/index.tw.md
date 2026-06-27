---
title: "NocoBase 作為 ED 的技術基礎：從內部系統到商業產品"
description: "ED 以 NocoBase 為技術基礎，將交付週期縮短三分之一，加速測試與上線，並確保內部系統與商業產品皆具備更高的穩定性。"
---

## **簡介**

> 我們旅程中的一個趣聞：在售前過程中，我們經常將 NocoBase 與 AI 結合，以創紀錄的速度交付概念驗證。客戶常常感到驚訝，週一與我們會面後，週三回來就看到一個功能完整的原型。通常的反應是：*「這是什麼魔法？」* 當我們揭曉 NocoBase 時，總會創造出驚喜與好奇的時刻。
>
> **—— Fabio Farzat，ED 執行長**

## **關於 ED**

[ED](https://ed.dev.br/) 是一家總部位於巴西的科技公司，**在 16 個州擁有超過 130 名專業人員**。多年來，該團隊為保險、資本市場、公用事業和公共部門的大型企業交付並支援關鍵任務系統。

![ED.png](https://static-docs.nocobase.com/ED-nvmw2z.png)

在交付方面，ED 持有 **ISO 9001** 認證（涵蓋軟體、專案和基礎設施管理流程），並已達到 **CMMI-DEV 第三級**，反映了國際公認的標準和可持續的工程成熟度。

在組織方面，ED 已連續四年入選巴西「最佳職場」前十名——最高排名第一，目前位居第六。這項認可凸顯了 ED 吸引和留住頂尖人才的能力，確保每個專案的專業性和穩定性。

憑藉其規模、嚴格的品質體系和廣泛的客戶群，ED 被公認為巴西領先的企業技術服務提供商。如今，它正加速推動**現代平台和 AI 驅動解決方案**，以幫助客戶為未來做好準備。

## **痛點與決策**

在日常專案交付中，ED 的工程團隊反覆面臨相同的挑戰：**無止境的 CRUD 和整合開發循環**。無論是內部系統還是客戶專案，他們都需要快速建立資料管理層、產生 API、處理匯入/匯出，同時還要確保安全性和可擴展性。每次都需要從頭開始——耗費大量時間和資源，最終拖慢了創新速度。

為了打破這個循環，ED 編制了一份**企業級需求檢查清單**：

*   **安全性** — 存取控制、資料隔離、合規性保證
*   **效能** — 即使在大規模資料集下也能快速回應
*   **可擴展性** — 靈活適應不同專案和客戶環境
*   **可觀測性** — 透明化運作，便於監控和故障排除

![checklist.png](https://static-docs.nocobase.com/checklist-o8ncyd.png)

他們需要的不僅僅是一個拖曳表格的工具。他們尋找的是一個能夠支援完整資料模型、強制執行強型別和關聯結構，並自動產生 API 的平台。

在評估了多種市場解決方案後，ED 最終選擇了 **NocoBase**。內部概念驗證顯示，NocoBase 不僅滿足清單上的每一項要求，而且在實際使用中提供了更大的靈活性和效率。

## **實施場景**

完成概念驗證後，ED 迅速將 NocoBase 部署到其核心業務系統中，並逐步擴展到多個場景。

### **場景 1：商業產品 – [AssistFlow](https://assistflow.com.br/)**

與大多數僅將 NocoBase 用於內部系統的公司不同，ED 直接在 NocoBase 上建立了一個外部商業平台——**[AssistFlow](https://assistflow.com.br/)**。AssistFlow 使企業能夠快速建立智慧代理，這些代理可在多個社交媒體管道上無縫運行，支援文字、語音、圖片和檔案的多模態互動。除了客戶服務，它還擴展到銷售、人力資源、技術支援等領域。

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow-e60x5d.png)

在這個商業產品中，整個配置模組和管理介面均由 NocoBase 驅動。這意味著團隊無需重新開發前端邏輯，而是可以直接在 NocoBase 中進行建模和配置，為客戶提供靈活且可擴展的管理能力。

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow2-vd4e8i.png)

**AssistFlow 亮點：**

*   **快速上手** — 只需 5 分鐘即可建立並啟動智慧代理，無需編碼
*   **多渠道整合** — 支援 WhatsApp、Teams、Slack、Telegram、Facebook、Instagram、LinkedIn 等
*   **多模態互動** — 處理文字、語音、圖片和檔案，滿足多樣化業務需求
*   **廣泛適用性** — 涵蓋客戶服務、銷售、行銷、人力資源和技術支援
*   **自動化與整合** — 內建 API 可與現有系統無縫連接，簡化工作流程
*   **安全可控** — 支援私有雲部署，滿足企業級安全與合規要求

### **場景 2：專案管理平台**

為支援 ED 客戶交付專案的完整生命週期而建。過去需要多輪開發的任務（如 CRUD 操作和權限邏輯），現在只需透過簡單的資料建模、前端配置和自動產生的 API 即可一步完成。

![專案管理平台](https://static-docs.nocobase.com/Project%20Management%20Platform-o3heh6.png)

### **場景 3：工單系統**

一個完全由 NocoBase 資料層和介面驅動的外部支援和服務請求系統。客戶可以直接提交和追蹤工單，而後端工作流程會自動觸發來處理每個請求。

![工單系統](https://static-docs.nocobase.com/Ticketing%20System-a9un8k.png)

### **場景 4：供應商管理系統**

在此系統中，供應商可以上傳發票，這會自動觸發付款審批工作流程。藉助 NocoBase 的資料建模和工作流程功能，整個過程實現自動化且完全可追溯。

## **成果**

藉助 NocoBase，ED 在交付速度和品質方面都取得了顯著提升：

*   **更短的交付週期** — 過去需要 2-3 次、每次 15 天迭代的模組，現在只需一次迭代即可完成
*   **更快的測試和上線** — 大多數功能只需進行直接功能測試，無需傳統開發中複雜的層級
*   **更高的生產穩定性** — 更順暢的上線過程和更強的團隊信心

ED 的工程師認為，NocoBase 改變了他們的建構方式。視覺化建模、自動化 CRUD、靈活的工作流程和自動產生的 API 使開發人員從重複性工作中解放出來，使他們能夠直接專注於業務成果。品質保證和使用者回饋循環變得更加簡短，使專案能夠更快地投入生產。

如今，NocoBase 已成為 ED 的技術支柱：為內部系統提供動力，構成外部商業產品的基礎，並支援幾乎所有的日常交付。更重要的是，這種「週一開會，週三出原型」的魔法不僅是客戶驚喜和信任的起點，也代表了一種新的交付模式。

## **展望**

對於全球的技術團隊來說，ED 的經驗表明，NocoBase 不僅能滿足企業級需求——安全性、效能、可擴展性和可觀測性——還能實現更快的迭代，將重點從重複性任務轉移到創新和價值創造上。

在巴西，ED 已經用 NocoBase 重塑了其交付模式。接下來，他們希望與 NocoBase 一起，將這種方法帶給更多行業和組織。

**更多客戶案例：**

*   [大規模亞秒級回應：Classact 在 Kubernetes 上運行 NocoBase](https://www.nocobase.com/zh-CN/blog/classact)
*   [BIEL Crystal 的數位工廠：每年驅動 18.5 億個單位](https://www.nocobase.com/zh-CN/blog/bielcrystal)
*   [Distinct HealthCare 如何使用 NocoBase 建立個人化的長期照護系統](https://www.nocobase.com/zh-CN/blog/distinct-healthcare)
*   [SHIMANO 內部的無程式碼之旅](https://www.nocobase.com/zh-CN/blog/shimano)
*   [是什麼讓日本領先的房地產公司從 Salesforce 轉向開源的 NocoBase？](https://www.nocobase.com/zh-CN/blog/century-21)
*   [Second-Brain 如何使用 NocoBase 為金融機構建立 AI 系統](https://www.nocobase.com/zh-CN/blog/second-brain)

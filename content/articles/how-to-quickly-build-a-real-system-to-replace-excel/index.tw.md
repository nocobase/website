---
title: "如何快速建立一個真實系統來取代 Excel：完整指南"
description: "從混亂的 Excel 表格開始，本指南將引導您建立一個結構化、協作且可擴展的業務系統。"
---

📝 備註：本文最後更新於 2026 年 1 月 21 日。我們會定期更新資訊，確保您掌握最新洞察！😊

## 簡介

如果您點進這篇文章，大概已經在問自己一件事：用 Excel 或線上試算表來管理業務，感覺越來越令人沮喪。

我在 Reddit 上也看過許多[類似的討論](https://www.reddit.com/r/googlesheets/comments/1p969rt/how_do_you_develop_a_system_based_on_a_large/)：

![Reddit.png](https://static-docs.nocobase.com/5161a8be-abe9-41e9-a3aa-0ace55c9ad66-02h0xf.png)

在這篇文章中，我將以一個真實的 Excel 試算表為例，展示如何快速將其轉變為一個使用 NocoBase 運作的業務系統。

我們將從最常見的設定之一開始：一個客戶專案試算表。

![Excel.png](https://static-docs.nocobase.com/a04a4520-c0d1-4032-b742-f5ec21a92182-5gfvek.png)

起初，這個試算表只用來記錄基本的客戶和專案資訊。隨著需求增加，欄位也越來越多。

隨著時間推移，它逐漸演變成一個複雜且難以管理的表格。

這是許多依賴 Excel 運作業務的團隊所面臨的現實。

現在，是時候改變這一切了。

---

💬 嘿，您正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 驅動無程式碼/低程式碼開發平台，用於建構企業應用、內部工具和各種系統。它完全自託管、基於插件、對開發者友好。→[在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

## 第一步：拆分資料

Excel 試算表包含十幾個欄位，不同類型的資訊全部混雜在一起。

在 NocoBase 中，第一步是將這個表格「翻譯」成一個更清晰的結構。

我們先來看看 Excel 檔案中的原始欄位：

```Plain
專案 ID
客戶名稱
客戶地區
行業
專案名稱
合約類型
授權席位數
開始日期
目標上線日期
狀態
最新發票金額 (USD)
最新發票日期
付款狀態
負責人
備註
```

這在 Excel 中非常常見。但在一個真實的系統中，資訊應該被拆分到多個結構更清晰的表格中。（您也可以使用 AI 來協助拆分試算表資料。）

**完成這一步後，資料模型如下所示：**

```Plain
客戶
名稱
地區
行業
 → 擁有多個 專案

專案
專案名稱
開始日期
上線日期
狀態
負責人
備註
客戶ID (屬於 客戶)
 → 擁有多個 合約
 → 擁有多個 發票

合約
合約類型
授權席位數
專案ID (屬於 專案)

發票
金額
發票日期
付款狀態
專案ID (屬於 專案)
```

拆分資料的好處顯而易見：

* **更清晰的檢視**

客戶和專案分開管理，但在需要時仍可相互關聯

* **更簡便的工作流程**

合約歸合約，發票歸發票，變更不會影響整個系統

* **精細的存取控制**

銷售團隊查看客戶，財務團隊查看發票

💡 延伸閱讀：[如何設計一個穩固的資料模型](https://www.nocobase.com/en/blog/how-to-create-a-good-data-model)

在 NocoBase 中，您可以請 AI 員工 Orin 為您建立這些表格和欄位。

只需向她提出您的需求。

![Orin.png](https://static-docs.nocobase.com/e3f0627c-51a5-4d97-b603-71e15b4b693e-zfdfg0.png)

她會立即產生所有內容。您只需審查並確認表格和欄位是否正確。

![Orin2.png](https://static-docs.nocobase.com/21348d0d-0382-42f8-ac6d-cd5ceb239900-1p3d7q.png)

此時，所有四個表格及其欄位都已成功建立。

![四個表格及其欄位.png](https://static-docs.nocobase.com/d144b5dd-a594-48b9-8593-d30ceff703ba-ry05j0.png)

💡 要深入了解資料層，您可以探索以下教學和文件：

[資料來源 - NocoBase](https://www.nocobase.com/en/highlights/data-source)

[資料來源 - NocoBase 文件](https://v2.docs.nocobase.com/data-sources)

[Orin 資料建模專家 - NocoBase 文件](https://v2.docs.nocobase.com/ai-employees/built-in/data-modeling)

## 第二步：顯示資料

一旦資料結構清晰分離，下一步就是以更使用者友善的方式呈現資料。

在 Excel 中，您通常只能透過滾動、篩選和凍結欄位來處理資料。

![Excel2.png](https://static-docs.nocobase.com/03d998ab-aa10-40a4-b19b-a5d8f33d8e27-7v6c29.png)

在 NocoBase 中，前端不受這些限制。**每種類型的資料都可以擁有專屬的檢視，並以最合適的格式顯示。**

設定非常簡單。點擊右上角進入編輯模式，然後開始建立幾個頁面。在每個頁面上，您可以新增最適合您要顯示資料的區塊。

![顯示資料.png](https://static-docs.nocobase.com/74569812-9d3a-4be7-a426-18bc1e2d1fd4-apardl.png)

讓我們從客戶表格開始。我們可以使用列表檢視來顯示客戶名稱、地區和行業。

新增一個表格區塊。

![客戶.png](https://static-docs.nocobase.com/af29d457-8063-42e2-b965-3c74fdee2713-4nnpo6.png)

此時還沒有資料。點擊區塊右上角的「操作」，然後選擇「匯入」。

![操作.png](https://static-docs.nocobase.com/483344aa-5a15-443d-a2ee-9e578c3b799a-eyf8q4.png)

然後，按照提示從原始 Excel 檔案匯入資料。

![匯入.png](https://static-docs.nocobase.com/3f1f827b-41d0-4a22-92a7-3be812a52994-sy4c95.png)

匯入後，您將得到一個乾淨且易讀的客戶表格。

![易讀的客戶表格.png](https://static-docs.nocobase.com/d99c63de-82b3-49c2-b58f-f9e78dbc5fb4-wwlvnu.png)

接下來，重複相同流程為其他表格建立檢視。每種類型的資料都有其最佳呈現方式。

例如，我將其設定為點擊客戶名稱時顯示相關的專案。

![相關專案.gif](https://static-docs.nocobase.com/%E8%81%94%E5%8A%A8%E6%95%B0%E6%8D%AE-gj1g6e.gif)

這些檢視帶來了幾個優點：

* 資訊清晰分離，不再混雜
* 每個頁面只顯示當前使用者需要關注的內容
* 比 Excel 表格更具可讀性
* 任何欄位都可以隨時排序、篩選或搜尋
* 跨表格的資料可以連結並互動式探索

一旦您選擇一個資料表，NocoBase 會自動產生一個乾淨、互動式的介面。您可以根據需要進一步調整欄位順序、篩選器和顯示選項。

將 Excel 資料轉換為結構化模型後，資料視覺化變得輕而易舉。

💡 要了解更多關於資料呈現的資訊，請查看我們的教學和文件：

[區塊與操作 - NocoBase](https://www.nocobase.com/en/highlights/block-action)

[UI 建構器 - 文件](https://v2.docs.nocobase.com/interface-builder)

## 第三步：工作流程自動化

有了清晰的資料結構和定義完善的前端檢視，我們現在可以解決 Excel 最大的限制：工作流程完全依賴手動操作。

在 Excel 中，即使是最簡單的業務流程，通常也是這樣：

* 建立一筆記錄，然後發送電子郵件或訊息給某人審批
* 手動將審批結果寫回 Excel
* 如果涉及庫存、合約或財務資料，則需手動在多個工作表之間同步所有內容

在 NocoBase 中，同樣的流程會自動化：

* 提交專案或合約 → **系統自動進入審批工作流程**
* 一旦批准 → **相關資料表會自動更新**

所有這些都可以透過 NocoBase 工作流程來設定。

![工作流程.png](https://static-docs.nocobase.com/23611649-9b43-42d3-b950-4afe930b54e3-xi7ax2.png)

💡 要了解更多關於工作流程的運作方式，您可以探索我們的教學和文件：

[工作流程 - NocoBase](https://www.nocobase.com/en/highlights/workflow)

[工作流程 - NocoBase 文件](https://v2.docs.nocobase.com/workflow)

## 第四步：權限

Excel 最大的限制之一是存取控制。**即使是 Google Sheets 也只提供基本的權限選項。**

在 Excel 中，如果不同部門只需要查看自己的專案，您通常需要維護同一個試算表的多個版本。

在 NocoBase 中，這更容易管理。

對於每個角色，您可以定義：

* **他們可以存取哪些記錄**（行級權限）
* **他們可以看到哪些欄位**（欄位級權限）
* **他們允許執行哪些操作**：檢視、建立、編輯或刪除
* **他們是否可以參與特定的工作流程步驟**
* **他們是否允許匯出資料**

![權限.png](https://static-docs.nocobase.com/b9e40dcd-752c-457f-8aae-dc2b6972d5be-9ycwmu.png)

例如，您可以將系統設定為：

* 銷售團隊只能檢視自己的客戶和專案
* 財務團隊可以檢視所有專案的財務資料和發票，但不能修改專案詳細資訊

**當使用者開啟系統時，他們只會看到他們需要看到的內容，不會看到更多**。這避免了不必要的資訊暴露，並防止意外干擾他人的工作。

💡 要了解更多關於權限設定的資訊，請查看我們的教學和文件：

[權限 - NocoBase](https://www.nocobase.com/en/highlights/permissions)

[使用者與權限 - NocoBase 文件](https://v2.docs.nocobase.com/users-permissions/user)

## 結論

將 Excel 轉變為一個支援協作、自動化和長期成長的真實業務系統，聽起來可能是一項重大工程。

但到了這個階段，有一點應該很清楚了：

* 資料結構並不難組織。AI 可以協助分解，NocoBase AI 員工可以協助建立
* 前端檢視透過視覺化設定建構，無需編寫程式碼即可實現豐富的互動
* 工作流程自動化節省了大量原本花在手動更新上的時間
* 權限管理使系統更安全、更可靠

只需幾個小時的設定，您就可以使用 NocoBase 建立一個符合您需求的業務系統。

您可以在 NocoBase 示範環境中嘗試本文提到的所有功能：[https://nocobase.com/en/demo](https://nocobase.com/en/demo)

**相關閱讀：**

* [GitHub 上排名前 5 的開源 AI 內部工具](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
* [8 個最佳 Google Sheets 替代方案（規格與價格）](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6 個用於建構 PoC 的開源無/低程式碼工具](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [開發者對無程式碼和低程式碼的技術決策指南 (2026)](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [企業級無程式碼/低程式碼平台中 RBAC 的 6 項深入比較](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [GitHub 上值得關注的 14 個 AI 驅動低程式碼平台](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)
* [GitHub 星數最多的前 11 個開源無程式碼 AI 工具](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub 星數最多的前 18 個開源 AI 代理專案](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)

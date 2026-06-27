---
title: "使用 Langflow 和 AstraDB 構建 AI 助手：從架構到與 NocoBase 的整合"
description: "本文展示如何整合 NocoBase、LangFlow 和 AstraDB 來創建 AI 助手，通過數據向量化和語義搜索生成洞察，並利用 RAG 技術優化結果，以增強數據管理和智能檢索能力。"
---

📝 備註：本文最後更新於 2026 年 1 月 23 日。我們會定期更新資訊，確保您掌握最新見解！😊

本部落格由 Leandro Martins 製作，原文發表於 [使用 Langflow 與 AstraDB 打造 AI 助手：從架構到整合 NocoBase](https://leandromartins.hashnode.dev/building-an-ai-assistant-with-langflow-and-astradb-from-architecture-to-integration-with-nocobase)。

## **簡介**

本文旨在示範如何整合 **NocoBase、LangFlow 與 VectorDB** 來建立一個 AI 助手。我將以自己在 **NocoBase** 中開發的系統為基礎，該系統用於管理架構資料，並加入一個 AI 助手，從系統中的資料（例如**應用程式、API 目錄、解決方案設計與故事**）產生洞察。

本文將使用以下技術：

* **NocoBase、PostgreSQL 與 Docker**，需預先配置（本文將說明如何安裝）。
* **LangFlow**，在本機端使用，可透過 Docker 安裝，詳情請見此處。
* **向量資料庫**，在 **AstraDB** 開設帳戶，這將是本文使用的向量資料庫。

---

💬 嘿，您正在閱讀 NocoBase 部落格。NocoBase 是建構企業應用程式、內部工具及各類系統時，最具擴展性的 AI 驅動無程式碼/低程式碼開發平台。它完全自託管、基於插件且對開發者友善。→ [在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

## **架構概覽**

![架構概覽.png](https://static-docs.nocobase.com/c22d65bc1b29655b4384722d666d3a8a.png)

此圖顯示新資料（或更新後的資料）如何被轉換為**嵌入向量**，並儲存在**向量資料庫**中。

1. **使用者 → NocoBase 平台**
   使用者與 NocoBase 平台互動（例如，在集合中新增或更新一筆記錄）。
2. **觸發 CRUD**
   NocoBase 中的 CRUD 動作（建立、讀取、更新、刪除）會觸發一個事件或內部工作流程。
3. **工作流程 (NocoBase)**
   NocoBase 有一個配置好的工作流程來回應資料變更。當它偵測到記錄的建立或修改時，會啟動下一步。
4. **API 流程：載入資料**
   NocoBase 工作流程呼叫 LangFlow 的 API 或外部服務，以傳送將被轉換為嵌入向量的資料。
5. **LangFlow — 資料轉換為嵌入向量**
   LangFlow 接收資料，並使用語言模型將內容轉換為向量（嵌入向量）。這些嵌入向量以數值形式表示文字的意義或上下文，從而實現語意搜尋。
6. **向量資料庫 (AstraDB)**
   然後，嵌入向量被儲存在向量資料庫 (AstraDB) 中，並將每個嵌入向量與原始內容（例如，文件、記錄、文字）關聯起來。

![圖表.png](https://static-docs.nocobase.com/1d2495aef2ffb7901260d028ab3e00fe.png)

此圖也說明了使用者如何對向量資料庫執行語意查詢，並接收相關結果。

1. **使用者 → NocoBase 平台**
   使用者再次與 NocoBase 平台互動，但這次使用的是嵌入式聊天小工具（或其他搜尋介面）。
2. **嵌入式聊天小工具**
   使用者輸入問題或提示。例如：*「顯示關於應用程式 X 的資訊。」* 這個小工具會將請求傳送給 LangFlow，由其處理查詢。
3. **LangFlow — 資料轉換為嵌入向量**
   LangFlow 將使用者的提示轉換為嵌入向量，該向量以向量格式表示搜尋意圖。
4. **向量資料庫 (AstraDB) — 相似度搜尋**
   來自提示的嵌入向量被用來搜尋 AstraDB 中最相似的向量（即語意上最接近的內容）。
5. **在模型中優化搜尋結果**
   基於 AstraDB 回傳的結果，LangFlow 使用 OpenAI 模型（或其他 LLM）優化搜尋結果。
6. **回覆使用者**
   最終結果（文字、文件或生成的回覆）被回傳給 NocoBase 聊天小工具，向使用者顯示回覆。

## **使用 NocoBase 的應用程式**

在本文中，我將使用先前建立的同一個應用程式。這是一個為展示 NocoBase 功能而開發的應用程式，我將在其中實作 AI 助手。下圖說明了助手將如何運作。

其概念是透過提問來獲取功能相關的洞察。可用的功能包括：應用程式、API 目錄、解決方案設計與故事。

![使用 NocoBase 的應用程式.webp](https://static-docs.nocobase.com/6e9829438c1354b2869e7fdf5628735a.webp)

## **什麼是 LangFlow 與 AstraDB？**

LangFlow 是一個由巴西開發者創建的開源工具，提供圖形化介面來建構、視覺化及除錯涉及語言模型的工作流程。基於 LangChain 生態系統，LangFlow 讓開發者能以互動方式輕鬆建立自然語言處理 (NLP) 流程與生成式 AI 應用程式，無需大量編碼即可連接不同元件（如 API 呼叫、文字轉換與商業邏輯）。

![LangFlow 與 AstraDB.png](https://static-docs.nocobase.com/f96b8c2117c91fa90e83e7029edc905d.png)

在本文中，我們將使用 AstraDB 來儲存向量化後的資料。為了更了解向量資料庫，這裡有我寫的一篇[文章](https://medium.com/@leandro.jm/uma-abordagem-agn%C3%B3stica-a-llm-db-vector-e-embedding-para-busca-sem%C3%A2ntica-ac1ed4c4b681)。另外，請記住 LangFlow 允許切換到其他向量資料庫。

**AstraDB**，最初以基於 Apache Cassandra 的分散式資料庫服務聞名，現已擴展其能力以處理非結構化資料儲存與向量搜尋。此向量資料庫功能對於機器學習應用、語意搜尋、推薦系統以及高維度資料任務特別有用。

![AstraDB.png](https://static-docs.nocobase.com/90e95b53095b9bf6a63244bb1b604275.png)

## **安裝 LangFlow**

若要透過 Docker 安裝 **LangFlow**，只需執行以下命令，然後在 **[localhost:7860](http://localhost:7860/)** 存取系統即可：

```
docker run -it --rm -p 7860:7860 langflowai/langflow:latest
```

![安裝 LangFlow.png](https://static-docs.nocobase.com/a89abb9aa32bbc7a577f974b97f4aca1.png)

## **配置 AstraDB**

在 AstraDB 上建立帳戶後，您可以如下所示設定資料庫與集合。

過程非常簡單：

1. 選擇一個**提供者**
2. 選擇一個**區域**
3. 建立**資料庫**

![配置 AstraDB.png](https://static-docs.nocobase.com/a1e061ed6c29b261adb68fe8d8906bce.png)

對於集合，由於它儲存向量化資料，因此配置 Embedding 功能至關重要，該功能對應於負責向量化資料的 LLM 模型。

有多種用於生成嵌入向量的模型，例如 OpenAI、Nvidia 和 Google 的模型。在此情況下，我們將使用 text-embedding-ada-002 模型進行資料轉換。

![配置 AstraDB.png](https://static-docs.nocobase.com/2f94c8c7ef4c4356aae987f3bdeb1e7a.png)

## **將資料載入向量資料庫**

此步驟將要搜尋的資料餵入我們的向量資料庫。

1. LangFlow 工作流程透過 URL 接收資料。
2. 處理文字
3. 使用 text-embedding-ada-002 將其轉換為向量格式
4. 將其儲存在 AstraDB 中已配置的集合裡。

![將資料載入向量資料庫.png](https://static-docs.nocobase.com/b4477ee884a88ee7a3322e7650df3b4c.png)

## **重要事項**

* 需要在負責資料庫連線的元件中定義 AstraDB Token。要產生 Token，只需在 AstraDB 中存取該集合，然後點擊「Generate Token」。下圖顯示了帶有相應按鈕的畫面。

![重要事項.png](https://static-docs.nocobase.com/763d524e462a8ac4454b43e1558cbe3b.png)

* **資料庫概覽**：原始檔案可以在[我的儲存庫](https://github.com/leandro-jm)中找到。
* 對於我們使用的模型，需要添加額度才能存取 OpenAI API。以下文件說明了如何完成此過程。添加額度後，您必須產生一個 Token 並在負責生成嵌入向量的元件中定義它。這裡有一個連結說明了此過程的說明。請記住，有多種模型可用於生成嵌入向量。

若要測試，只需使用 Postman，呼叫可從 LangFlow 中的 API > cURL 取得的 URL。以下是使用 Postman 的請求範例。

![重要事項.png](https://static-docs.nocobase.com/16ae6e4697b7a8349955831370e39e47.png)

## 使用模型進行研究

此步驟負責從向量資料庫檢索資料，並透過 **RAG（檢索增強生成）** 進行優化。

![使用模型進行研究.png](https://static-docs.nocobase.com/aec6663ed0a2f2d8a1a01afb89140dc5.png)

在此階段，也需要在其各自的元件中定義 OpenAI 和 AstraDB 的 Token。原始檔案可以在[我的儲存庫](https://github.com/leandro-jm)中找到。

若要測試，只需使用 LangFlow 中「Playground」標籤頁內提供的聊天功能。

## **在 NocoBase 中配置工作流程**

在此步驟中，我們將在應用程式中建立觸發器，以傳送需要向量化的資料。換句話說，每當插入新資料時，它就會被傳送到 LangFlow API 進行處理。

為此，我們將使用 NocoBase 的工作流程功能。有關工作流程的更多詳細資訊，請存取此[連結](https://docs.nocobase.com/handbook/workflow)。

![在 NocoBase 中配置工作流程.png](https://static-docs.nocobase.com/e035bb1b812c53d6a96e5bcbf900a02d.png)

我們將建立一個工作流程，將資料從我們應用程式的集合傳送到向量化的集合。

**步驟：**

如下所示建立一個新的工作流程，選擇「集合事件」。

![在 NocoBase 中配置工作流程.png](https://static-docs.nocobase.com/4e97564ec88cb1f2721016dbff94023d.png)

如下所示，將**觸發器**定義為在**應用程式**集合中進行插入。

![在 NocoBase 中配置工作流程.png](https://static-docs.nocobase.com/c7f5a312533558914de9053861bde66a.png)

建立一個新的**請求節點**，以傳送應用程式的資料進行向量化。在本文中，我們將使用**標題**和**描述**作為範例，但可以根據業務規則傳送任何資訊。

![在 NocoBase 中配置工作流程.png](https://static-docs.nocobase.com/2da29b9ebb3afe6306f785cb0dcbc7e7.png)

**通知步驟**是可選的，不需要執行。

## **在 NocoBase 中添加聊天小工具**

首先，存取 LangFlow，並從 API 選項複製聊天小工具程式碼，如下圖所示。

![在 NocoBase 中添加聊天小工具.png](https://static-docs.nocobase.com/37bc9b9f48a4803639b54707e5b3fd25.png)

第二步，只需建立一個頁面並添加一個 iframe 元件。有關此元件的更多詳細資訊，您可以查看此[連結](https://docs.nocobase.com/handbook/block-iframe)。

**其中：**

* **模式：** HTML
* **HTML：** 下面的程式碼，根據 LangFlow 中的值替換 **flow\_id** 和 **host\_url**。

![在 NocoBase 中添加聊天小工具.png](https://static-docs.nocobase.com/d03e4e25fd4241263c332f9c00dcf1c3.png)

## **測試聊天功能**

現在，讓我們回到建立的選單，測試我們的助手，並檢查回覆，如下例所示。

![測試聊天功能.png](https://static-docs.nocobase.com/8c43434a510ec2b80a61aca44d939249.png)

## **結論**

在本文中，我們示範了建立一個與 NocoBase、LangFlow 和 AstraDB 整合的 AI 助手，實現了向量化與智慧資料檢索。

透過這種方法，我們能夠實作一個能夠從已註冊資料中產生有價值洞察的助手，並使用 RAG（檢索增強生成）技術來優化搜尋結果。

這僅僅是此架構所能提供的開端。透過小幅調整，即可擴展功能、整合新的 AI 模型並增強使用者體驗。🚀

**相關閱讀：**

* [在 NocoBase 中開發發送 WhatsApp 訊息的插件](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [簡化架構治理：使用 NocoBase 建立應用程式目錄](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [如何備份與還原 NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [如何使用 NocoBase 建立應用程式？](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [如何將 Docker 映像上傳到內網伺服器](https://www.nocobase.com/en/blog/load-docker-image)

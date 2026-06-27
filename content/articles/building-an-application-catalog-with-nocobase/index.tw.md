---
title: "簡化架構治理：使用 NocoBase 建立應用程式目錄"
description: "目標是展示 NocoBase 在無需編碼的情況下開發 Web 應用程式的潛力和簡便性。"
---

📝 備註：本文最後更新於 2026 年 1 月 23 日。我們會定期更新資訊，確保您掌握最新見解！😊

本部落格由 Leandro Martins 製作，原文發表於 [使用 NocoBase 建立應用程式目錄](https://leandromartins.hashnode.dev/simplified-architecture-governance-building-an-application-catalog-with-nocobase#)。

目標是展示 [NocoBase](https://www.nocobase.com/) 在無需編碼的情況下開發網頁應用程式的潛力與簡便性。作為案例研究，我將建立一個應用程式目錄來協助架構治理。此案例將使用 NocoBase 的功能進行建模、安裝、建立資料表、選單、表單、圖表和工作流程。

本文將使用以下技術：NocoBase、Postgres 和 Docker。

---

💬 嘿，您正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 驅動無程式碼/低程式碼開發平台，用於建構企業應用程式、內部工具和各種系統。它完全自託管、基於插件且對開發者友好。→[ 在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

## **什麼是 NocoBase？**

[NocoBase](https://www.nocobase.com/) 是一個用 JavaScript 編寫的開源平台，使用 NodeJS、TypeScript 和 AntDesign，旨在無需編碼即可建立自訂應用程式。它是一個低程式碼後端解決方案，能夠以視覺化方式建立資料表、自訂表單、工作流程自動化和量身打造的介面。

![什麼是 NocoBase？.png](https://static-docs.nocobase.com/0cfdc6c0e72f9088609239bbec1cd515.png)

### **NocoBase 的主要亮點**：

* **活躍的社群**：一個非常活躍的論壇，用於支援插件開發和問題排除。
* **持續審查的程式碼**：透過 GitHub 上的貢獻頻繁更新，擁有超過 13k 顆星。
* **資料庫相容性**：支援主要關聯式資料庫，如 Postgres 和 MySQL。
* **視覺化資料建模**：使用主資料庫插件以視覺化方式定義資料表和資料。
* **豐富的插件庫**：提供多種免費和付費插件，並能夠開發自訂插件。

* **系統內嵌的 AI 員工**：將 AI 能力無縫整合到使用者介面、業務工作流程和資料上下文中，使 AI 能夠在真實企業場景中實際應用。

![NocoBase 的主要亮點.png](https://static-docs.nocobase.com/95c4cc96a72c8e414e5399d7d9b6ee18.png)

## **案例研究概述**

為了展示 NocoBase 的部分功能，我們將建立一個名為 *架構入口網站* 的案例研究。此入口網站旨在組織組織中應用程式的資料，具備以下功能：

* **應用程式目錄**。
* **更新提醒**，例如版本升級和憑證續約。
* **組織系統的 API 目錄**。
* **圖表**，用於深入的資料視覺化。

![案例研究概述.png](https://static-docs.nocobase.com/7391b4a43314b7ec8e84469f6e8d3697.png)

## **開發階段**

### **資料建模**

第一步是規劃並定義我們將在架構入口網站中包含的欄位。以下是一個範例：

```
1. 應用程式目錄

應用程式：
id：唯一識別碼。
name：應用程式名稱。
description：應用程式的詳細描述。
stack：使用的技術。
owner：負責人或團隊。
created_at：建立日期。
last_updated：最後更新日期。

提醒（連結至應用程式）：
id：唯一識別碼。
application_id：應用程式的參考。
type：提醒類型（例如，版本更新、憑證續約）。
description：提醒描述。
scheduled_date：提醒的排程日期。
status：狀態（例如，待處理、已完成）。

2. API 目錄

API：
id：唯一識別碼。
Application_id：對應系統的參考。
name：API 名稱。
description：API 的功能描述。
documentation_url：官方文件的連結。
last_updated：最後更新日期。
version：目前版本。
```

### **安裝 NocoBase**

關於[安裝](https://docs.nocobase.com/welcome/getting-started/installation)和設定，我選擇在本機使用 Docker 版本。其他安裝選項包括 npm 或 Git 原始碼。

以下是 Docker Compose 的 YAML 程式碼。安裝 Docker 後，導航至 YAML 檔案目錄並執行以下命令：

```
docker compose up -d
```

這將在您機器的連接埠 `13000` 上啟動 NocoBase。在網頁瀏覽器中開啟 [`http://localhost:13000`](http://localhost:13000/)。預設憑證為 [`admin@nocobase.com`](mailto:admin@nocobase.com) 和 `admin123`。

```
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:beta
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # 應用程式的密鑰，用於產生使用者令牌等。
      # 如果 APP_KEY 變更，舊令牌也將失效。
      # 可以是任何隨機字串，並確保不會外洩。
      - APP_KEY=your-secret-key
      # 資料庫類型，支援 postgres、mysql、mariadb
      - DB_DIALECT=postgres
      # 資料庫主機，可替換為現有資料庫伺服器的 IP
      - DB_HOST=postgres
      # 資料庫名稱
      - DB_DATABASE=nocobase
      # 資料庫使用者
      - DB_USER=nocobase
      # 資料庫密碼
      - DB_PASSWORD=nocobase
      # 時區
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # 如果使用現有資料庫伺服器，則可省略 postgres 服務
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### **建立資料表和資料**

使用**資料來源管理員**插件，我們可以建立集合（資料表）並定義欄位。過程很簡單，並遵循上述模型。以下是一些參考資料和關於該插件的詳細資訊連結（[在此](https://www.nocobase.com/en/plugins)）。

![建立資料表和資料.png](https://static-docs.nocobase.com/b0bece241dd24b7a80cdc69925bbe739.png)

![建立資料表和資料.png](https://static-docs.nocobase.com/c8b1b649eebf01b952cc88b4a6aadfc6.png)

### **建立選單**

點擊螢幕右側的鉛筆圖示，即可建立頂部和側邊選單，如圖所示。讓我們按照圖示進行複製。

![建立選單.png](https://static-docs.nocobase.com/c501bbd624755efaff7110d7fa5431b2.png)

### **建立表單**

建立表單（CRUD）也非常簡單。NocoBase 使用區塊來建立資料表、表單、詳細資訊、列表、圖表、卡片等。選擇區塊類型後，只需選擇要連結到此區塊的集合（資料表），連結到該集合的元件（區塊）就會神奇地出現。每個區塊都有自己的自訂設定。有關區塊的更多詳細資訊，請參閱此處。

![建立表單.png](https://static-docs.nocobase.com/fe99e76874a89bc15d5e8ae67722053d.png)

### **建立圖表**

建立圖表也很簡單。只需新增一個名為*圖表*的區塊，然後選擇要作為資料來源的集合，如下圖所示。

![建立圖表.png](https://static-docs.nocobase.com/1fc75066b78581b91e1a4966f1718761.png)

選取區塊後，您可以設定圖表屬性。下圖顯示了圖表設定選項，讓您可以定義指標、分組、篩選器、各種圖表類型和標題，以及其他可用屬性。在此，您可以探索所有設定可能性。

![建立圖表.png](https://static-docs.nocobase.com/acab53f9586f3c4fbf6d38ee95be0c17.png)

### **為提醒建立排程工作流程**

NocoBase 允許您建立自動化工作流程，透過事件執行各種類型的任務。三種觸發器類型為：*集合事件、排程事件和操作後事件。* 使用這些觸發器，您可以在系統內建立動作，例如發送通知、將資料插入其他資料表或向外部 API 發出請求。以下是在應用程式內發送通知的工作流程範例。

![工作流程.png](https://static-docs.nocobase.com/e58fb9a4492c7f620f1de94a9d240798.png)

在我們的案例中，我們將建立一個工作流程，在提醒排程的當天發送通知。這將是一個**排程事件**，每天在特定時間執行，如下圖所示。

![工作流程.png](https://static-docs.nocobase.com/a095a620448ce80d7f4d385fe13d3a41.png)

![工作流程.png](https://static-docs.nocobase.com/802cd35254c5fd661543be67d964a52a.png)

除了設定排程之外，您還需要設定工作流程來查詢**提醒**集合，擷取當天的提醒，逐一迴圈處理，併為每個提醒發送通知，如下圖所示。過程很簡單：只需點擊「+」按鈕新增這些動作並進行設定即可。

![工作流程.png](https://static-docs.nocobase.com/7e5534a92af59f2bb4272660bb3ed65f.png)

完成設定後，只需點擊右上角的「開啟」按鈕即可啟動工作流程。若要檢視執行結果，請點擊右上角的「…」並選擇**執行歷史記錄**，如下圖所示。

![工作流程.png](https://static-docs.nocobase.com/1a8dd52681a79e43d484b95d1326df81.png)

## **結論**

如所示範，NocoBase 提供了許多功能來加速應用程式開發。根據規模和需求，它為建構應用程式提供了靈活性，並具備其他功能，例如檔案管理、國際化、行動支援和主題編輯。您甚至可以開發自己的插件，或購買市集中提供的商業插件。

相關閱讀：

* [如何使用 NocoBase 建構應用程式？](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [2025 年頂尖 8 大強大無程式碼開發平台](https://www.nocobase.com/en/blog/top-8-powerful-no-code-development-platforms-in-2024)
* [GitHub 星數最多的 12 大開源無程式碼工具](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [GitHub 星數最多的 15 大開源低程式碼專案](https://www.nocobase.com/en/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
* [開發者適用的 6 大無程式碼工具](https://www.nocobase.com/en/blog/top-6-no-code-tools-for-developers)
* [7 大開源快速開發平台](https://www.nocobase.com/en/blog/rapid-development-platform)

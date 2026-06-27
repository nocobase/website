---
title: "如何使用 NocoBase 构建应用？"
description: "让我们一起探索如何使用 NocoBase 构建宠物追踪应用！"
---

📝 備註：本文最後更新於 2026 年 1 月 23 日。我們會定期更新資訊，確保您掌握最新見解！😊

本部落格由 [Freeman Tech Consulting](https://freemantechconsulting.com/) 的 Don Freeman 製作，原文發表於 [nocodefounders.com](https://www.aidutu.cn/info/link?url=http://nocodefounders.com)。Freeman Tech Consulting 是一家全方位的軟體工程公司，可協助處理無程式碼部署、網頁應用程式開發、雲端基礎架構設計/建置、GRC 管理、資料分析等眾多業務。

## 🌟什麼是 NocoBase？

**NocoBase** 是一個 AI 無程式碼（零程式碼）/低程式碼平台，旨在讓建構資料驅動的應用程式變得簡單。他們提供付費版本，可移除 NocoBase 標誌。它是開源的，因此如果您想貢獻心力，可以輕鬆在 GitHub 上進行。他們提供外掛系統，可在需要時擴展平台功能。

## 🚀 在本機部署 NocoBase

### **在本機執行 NocoBase 需要什麼？**

* **Docker**
* **Docker compose**
* **一個 PostgreSQL 資料庫** 在本部落格中，我們將使用 docker compose 執行一個，但在實際生產環境中，您會希望有一個專用的 PostgreSQL 資料庫

### **在本機執行 NocoBase**

* 在他們的網站上[這裡](https://docs.nocobase.com/welcome/getting-started/installation/docker-compose)有在本機執行 NocoBase 的步驟

首先，建立一個您將在其中工作的目錄。在終端機中切換到該目錄。之後，您需要建立一個 docker compose 檔案。我使用了上述 NocoBase 網站入門指南中的檔案，並稍作修改。

---

💬 嘿，您正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 驅動無程式碼/低程式碼開發平台，用於建構企業應用程式、內部工具和各種系統。它完全自託管、基於外掛且對開發者友好。→[在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

***下面的 docker compose 顯示在本機執行 PostgreSQL 資料庫，但建議在實際生產環境中使用專用資料庫。***

![docker compose.png](https://static-docs.nocobase.com/8c25f1c572a1330beb04376b5053dcd4.png)

在本機目錄中建立此檔案後，執行以下命令來拉取所需的映像檔。

![拉取所需的映像檔.png](https://static-docs.nocobase.com/222cba9fddfe376ee2d031bfb1aa1708.png)

現在執行以下命令來在背景啟動容器。

![啟動容器.png](https://static-docs.nocobase.com/7fc3c0958673e3264b2881c18a5e949d.png)

現在您可以透過 http://localhost:13000 存取 NocoBase

## 🐶 建構 NocoBase 應用程式：寵物追蹤應用程式

![寵物追蹤應用程式.png](https://static-docs.nocobase.com/0960fcf248fce60c67d186aaa5b1e8fe.png)

在這個範例中，我們將建構一個寵物追蹤應用程式 🐕 🐈！這個應用程式將追蹤寵物主人及其寵物的資訊。首先，我們需要為應用程式定義資料模型。這在 NocoBase 中非常簡單。

### **NocoBase 資料模型**

**🔍 尋找資料模型編輯器**

在 NocoBase UI 中，您可以點擊右上角的小齒輪 ⚙️，然後點擊 `資料來源`。這將開啟資料模型編輯器。進入後，您會看到預設的資料來源，應該叫做 main。點擊 main 資料來源的 `設定`。

**建立集合**

現在我們可以在 main 資料來源中建立集合。這些集合將保存我們應用程式的資料。在這個範例中，我們將建立兩個集合：一個用於寵物主人，一個用於寵物。

**寵物主人集合**

在集合畫面上，點擊 `新增集合` 按鈕。然後為集合指定一個 `集合顯示名稱` 為「寵物主人」，以及一個 `集合名稱` 為「petowner」。

現在讓我們為寵物主人集合新增所需的欄位。從集合畫面中，點擊寵物主人集合旁的 `設定欄位`。使用 `新增欄位` 按鈕，您可以為集合新增所需的欄位。寵物主人集合將包含以下欄位。

* **名字** *單行文字欄位介面*
* **姓氏** *單行文字欄位介面*
* **電子郵件** *電子郵件欄位介面*

**寵物集合**

現在我們可以為寵物集合重複這些相同的步驟。寵物集合將包含以下欄位。

* **名稱** *單行文字欄位介面*
* **寵物類型** *多重選擇欄位介面*
* **出生日期** *日期時間欄位介面*

**🔗 將寵物主人集合連結到寵物集合**

要將寵物主人集合連結到寵物集合，請回到**寵物**集合，然後在集合設定畫面下點擊 `新增欄位` 按鈕。找到一對多介面類型。為該關聯指定一個顯示名稱，選擇「pet」作為 `目標集合`，然後選擇「ID」作為 `目標鍵`。

**🥳 資料模型完成了！！！**

資料模型設定就到此為止。以下是我為寵物資料模型提供的範例。

![寵物資料模型.png](https://static-docs.nocobase.com/5b683b9ddaeab7c644512fa7dbdbbeb6.png)

### **建構 NocoBase UI**

**🏠 建立首頁**

現在我們已經完成了資料模型，可以快速建構一個 UI 來與該資料模型互動。回到應用程式的主頁面，您應該會在頁面頂部看到 `新增選單項目`。點擊它，然後點擊 `頁面`。為頁面命名為「首頁」，然後您應該會看到類似這樣的畫面。

![建立首頁.png](https://static-docs.nocobase.com/06081448ef1a5b90c1703905e42bb727.png)

**📜 建立寵物主人列表**

現在我們將新增一個卡片列表，以便與我們的寵物主人集合互動。點擊 `新增區塊` → `網格卡片` → `PetOwner`。這允許我們以網格卡片的形式顯示寵物主人。點擊 `設定欄位` 來新增名字、姓氏和電子郵件欄位。

**➕ 新增寵物主人**

現在我們需要能夠建立寵物主人。點擊區塊右上角的 `設定操作`（**不是**卡片內的 `設定操作`）。然後點擊 `新增`。這會建立一個顯示為「新增」的按鈕。點擊該按鈕來設定新增寵物主人時可以執行的操作。

**🍿 新增寵物主人彈出視窗**

在彈出視窗內，點擊 `新增區塊` → `表單` → `目前集合`。點擊 `設定欄位` 並新增名字、姓氏和電子郵件。這允許您在建立新寵物主人時填入這些值。最後，點擊 `設定操作` → `提交`。點擊彈出視窗外以關閉它。

**➕ 新增寵物**

現在我們已經能夠檢視和建立新的寵物主人，我們需要能夠新增他們的寵物。回到**首頁**，點擊*卡片內部*的 `設定操作`，然後點擊「彈出視窗」。這將在卡片中建立一個名為「彈出視窗」的連結，點擊它。在彈出視窗內，點擊 `新增區塊` → `表單（新增）` → `關聯記錄` → `Pets`。在這個新區塊內，點擊 `設定欄位` 並新增名稱、寵物類型和出生日期。這允許您在建立新寵物時填入這些值。最後，點擊 `設定操作` → `提交`。

**📜 列出現有寵物**

現在，就在這個新區塊下方，點擊 `新增區塊` → `列表` → `關聯記錄` → `Pets`。在這個新區塊內，點擊 `設定欄位` 並新增名稱、寵物類型和出生日期。彈出視窗應該看起來像這樣。我的資料庫中已經有一隻寵物，所以可能看起來略有不同。

![列出現有寵物.png](https://static-docs.nocobase.com/3cfc6fadf38b4f88dcee4478aa1b65cb.png)

點擊彈出視窗外以關閉它。現在我們已經能夠建立和檢視寵物。您的 UI 現在應該看起來像這樣。

![UI.png](https://static-docs.nocobase.com/97149b76b62c72ccc9d484ceffd50208.png)

**🧪 測試一下**

現在點擊橘色的 UI 編輯器按鈕以離開 UI 編輯器。您可以隨意操作 UI 並建立寵物和寵物主人。

這篇部落格缺少許多部分，包括使用者驗證、更複雜的 UI、部署生產環境等。我可能會在後續的部落格中涵蓋這些內容。

💡 閱讀更多：

* [使用 Langflow 和 AstraDB 建構 AI 助手：從架構到與 NocoBase 整合](https://www.nocobase.com/en/blog/building-ai-assistant-langflow-astradb-nocobase)
* [在 NocoBase 中開發用於發送 WhatsApp 訊息的外掛](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [簡化架構治理：使用 NocoBase 建構應用程式目錄](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)

这篇博客来自 [Freeman Tech Consulting](https://freemantechconsulting.com/) 的 Don Freeman，首发于[nocodefounders.com](http://nocodefounders.com/)。Freeman Tech Consulting 是一家全方位服务的软件工程公司，可以帮助进行无代码（零代码）部署、网页应用开发、云基础设施设计/构建、GRC管理、数据分析等多种服务。

## 🌟什么是 NocoBase？

NocoBase 是一个无代码（零代码）/低代码平台，用于轻松构建数据驱动的应用程序。用户可以定义数据模型，然后围绕该模型构建应用程序。该平台提供去除 NocoBase 标志的付费版本。NocoBase 作为开源项目，你可以在 GitHub 上轻松贡献代码。值得一提的是，NocoBase 的插件化架构能够在需要时轻松扩展平台的功能。

## 🚀 本地部署 NocoBase

### **本地运行 NocoBase 需要哪些条件？**

* **Docker**
* **Docker compose**
* **PostgreSQL 数据库**：在本篇博客中，我们将通过 Docker Compose 来运行一个数据库，但在实际的生产环境中，建议使用专用的 PostgreSQL 数据库。

### **如何在本地运行 NocoBase？**

* 你可以在 NocoBase 的[官方文档](https://docs-cn.nocobase.com/welcome/getting-started/installation/docker-compose)上找到在本地运行 NocoBase 的具体步骤。

首先，创建一个工作目录，并在终端中切换到该目录。之后，你需要创建一个 docker compose 文件。我参考了 NocoBase 官网上的入门指南，并调整了细节。

***下面的 docker compose 显示了在本地运行 PostgreSQL 数据库，但建议在实际生产环境中使用专用数据库。***

![docker compose.png](https://static-docs.nocobase.com/8c25f1c572a1330beb04376b5053dcd4.png)

在本地目录中创建好文件后，运行以下命令以拉取所需的镜像：

![pull the needed images.png](https://static-docs.nocobase.com/222cba9fddfe376ee2d031bfb1aa1708.png)

然后运行以下命令以在后台启动容器。

![start the containers.png](https://static-docs.nocobase.com/7fc3c0958673e3264b2881c18a5e949d.png)

现在你可以在 http://localhost:13000 访问 NocoBase。

## 🐶 构建 NocoBase 应用程序：宠物追踪应用程序

![Pet Tracking Application.png](https://static-docs.nocobase.com/0960fcf248fce60c67d186aaa5b1e8fe.png)

在此示例中，我们将构建一个宠物追踪应用程序🐕 🐈！此应用程序将追踪宠物主人及其宠物的信息。首先，我们需要为应用程序定义数据模型，这一操作在 NocoBase 中非常简单。

### **NocoBase 数据模型**

**🔍 找到数据模型编辑器（Data Model Editor）**

在 NocoBase UI 界面中，你可以单击右上角的小齿轮⚙️，然后单击“数据源”。这将打开数据模型编辑器。在那里，你将看到 “main” 的默认数据源。单击主数据源的配置（Configure）。

**创建集合**

现在，我们可以在主数据源中创建集合。这些集合将存储应用程序的数据。在此示例中，我们将创建两个集合。一个用于宠物主人，另一个用于宠物。

**宠物主人集合**

在集合界面上，单击“新建集合”`New Collection`按钮。然后为集合指定一个显示名称`Collection Display Name`“宠物主人”，集合名称`Collection Name`则定为“Pet Owner”。

现在，让我们为宠物主人集合添加所需的字段。在集合界面上，单击 Pet Owner 集合旁边的“配置字段”`Configure Fields`。使用“添加字段”`Add Field`按钮，可以向该集合中添加所需字段。宠物主人集合将包含以下字段：

* 名字（单行文本字段）
* 姓氏（单行文本字段）
* 电子邮件（电子邮件字段）

**宠物集合**

现在我们可以对宠物集合重复上述步骤。宠物集合将包括以下字段：

* 名字（单行文本字段）
* 宠物类型（多项选择字段）
* 出生日期（日期时间字段）

**🔗 将宠物主人集合链接至宠物集合**

要将宠物主人集合与宠物集合关联，请返回宠物集合，然后单击集合配置界面的“添加字段”`Add Field`按钮。找到 “一对多接口” 类型，并为关系指定一个显示名称，选择“宠物”作为目标集合`Target Collection`，并将“ID”设置为目标键`Target Key`。

**🥳 数据模型已完成!!!**

这就是数据模型设置的全部内容。以下是我的宠物数据模型示例。

![pet data model.png](https://static-docs.nocobase.com/5b683b9ddaeab7c644512fa7dbdbbeb6.png)

### **构建 NocoBase UI**

**🏠 创建主页**

现在我们已经完成了数据模型，接下来可以快速构建一个用户界面，来与数据模型进行交互。返回应用程序的主页，顶部可以看到“添加新菜单项”`Add New Menu`。单击它，然后选择页面`page`。为页面命名为“主页”，然后你会看到类似这样的界面。

![Create the Home Page.png](https://static-docs.nocobase.com/06081448ef1a5b90c1703905e42bb727.png)

**📜 创建宠物主人列表**

接下来，我们将添加卡片列表，以便与我们的宠物主人集合进行交互。点击“添加区块”`Add Block` → “网格卡片” `Grid Card`→ `PetOwner`。这将实现以卡片网格的形式展示宠物主人。点击“配置字段”`Configure Fields`，添加名字、姓氏和电子邮件字段。

**➕ 添加宠物主人**

现在我们需要能够创建新的宠物主人。在区块的右上角点击“配置操作”`Configure Action`（注意不是在卡片中的“配置操作”）。然后点击“添加”`Add New`。这将创建一个名为“Add New”的按钮。点击此按钮来配置添加宠物主人的操作。

**🍿 添加新宠物主人弹窗**

在弹窗中，点击“添加区块”`Add Block` → “表单”`Form` → “当前集合”`Current Collection`。点击“配置字段”`Configure Fields`，添加名字、姓氏和电子邮件字段。这将使你在创建新宠物主人时能够填入这些信息。最后，点击“配置操作” `Configure Action`→ “提交”`Submit`。然后点击弹窗外部关闭它。

**➕ 添加新宠物**

现在我们可以查看和创建新宠物主人，接下来需要实现添加宠物的功能。回到主页，在卡片中点击“配置操作”`Configure Action`，然后选择“弹窗”。这将为卡片创建一个名为“弹窗”的链接，点击该链接。在弹窗内，点击“添加区块” `Add Block`→ “表单（添加）`Form (add new)`” → “关联记录” `Associated Records`→ “宠物”`Pets`。在这个新区块中，点击“配置字段”`Configure Fields`，添加名字、宠物类型和出生日期。这将实现在创建新宠物时能够填写这些信息。最后，点击“配置操作” `Configure Action`→ “提交”`Submit`。

**📜 列出现有宠物**

在这个新区块的下方，点击“添加区块”`Add Block` → “列表” `List`→ “关联记录”`Associated Records` → “宠物”`Pets`。在这个新区块中，点击“配置字段”`Configure Fields`，添加名字、宠物类型和出生日期。

弹窗应如下所示。我的数据库中已经有一只宠物，所以它看起来可能略有不同。

![List Existing Pets.png](https://static-docs.nocobase.com/3cfc6fadf38b4f88dcee4478aa1b65cb.png)

点击弹窗外部以关闭它。现在我们可以创建和查看宠物了。你的 UI 界面现在应该类似于以下截图：

![UI.png](https://static-docs.nocobase.com/97149b76b62c72ccc9d484ceffd50208.png)

**🧪 测试**

点击橙色的“UI 编辑器”按钮以退出 UI 编辑模式。您可以尝试操作 UI，创建宠物和宠物主人。

本文遗漏了许多主题，包括用户认证、更复杂的用户界面、生产环境的部署等。我可能会在后续博客中涵盖这些内容。

💡 阅读更多：

* [使用Langflow和AstraDB构建AI助手：从架构设计到与NocoBase的集成](https://www.nocobase.com/cn/blog/building-ai-assistant-langflow-astradb-nocobase)
* [如何在 NocoBase 中开发插件发送 WhatsApp 消息？](https://www.nocobase.com/cn/blog/developing-a-plugin-to-send-whatsapp-messages)
* [简化的架构治理：使用 NocoBase 构建应用程序目录](https://www.nocobase.com/cn/blog/building-an-application-catalog-with-nocobase)

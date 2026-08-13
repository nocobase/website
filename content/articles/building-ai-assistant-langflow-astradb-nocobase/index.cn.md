本文由 Leandro Martins 编写，最初发布于 [Building an AI Assistant with Langflow and AstraDB: From Architecture to Integration with NocoBase](https://leandromartins.hashnode.dev/building-an-ai-assistant-with-langflow-and-astradb-from-architecture-to-integration-with-nocobase)。

## **引言**

本文的目标是演示如何创建一个集成了 **NocoBase、LangFlow 和 VectorDB** 工具的 AI 助手。作为基础，我将使用自己在 **NocoBase** 中开发的系统，该系统用于管理架构数据，通过添加一个 AI 助手来生成来自该系统中数据的洞察，例如 **应用、API 目录、解决方案设计和故事**。

在本文中，我们将使用以下技术：

* **NocoBase、PostgreSQL 和 Docker**（本文中将展示如何安装它们）。
* **LangFlow**，本地运行，可通过 Docker 安装（安装指南在此处）。
* **向量数据库**，通过注册 **AstraDB** 账户实现，本文将使用该数据库作为向量存储。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

## **架构概览**

![Architecture Overview.png](https://static-docs.nocobase.com/c22d65bc1b29655b4384722d666d3a8a.png)

此图展示了新数据（或更新数据）如何被转换为 **嵌入（embeddings）** 并存储到 **向量数据库** 中。

1. **用户 → NocoBase 平台**
   用户与 NocoBase 平台交互（例如在集合中添加或更新记录）。
2. **触发 CRUD 操作**
   NocoBase 中的 CRUD（增删改查）操作会触发事件或内部工作流。
3. **工作流（NocoBase）**
   NocoBase 配置了一个响应数据变更的工作流。当检测到记录创建或修改时，工作流启动下一步。
4. **API 流程：加载数据**
   NocoBase 工作流调用 LangFlow 的 API 或外部服务，发送待转换为嵌入的数据。
5. **LangFlow — 数据转嵌入**
   LangFlow 接收数据，并利用语言模型将内容转换为向量（嵌入）。这些嵌入以数值形式表示文本的语义或上下文，支持语义搜索。
6. **向量数据库（AstraDB）**
   嵌入随后存储到向量数据库（AstraDB）中，每个嵌入与原始内容（如文档、记录、文本）关联。

![diagram.png](https://static-docs.nocobase.com/1d2495aef2ffb7901260d028ab3e00fe.png)

此图还展示了用户如何通过向量数据库进行语义查询并获取相关结果。

1. **用户 → NocoBase 平台**
   用户再次与 NocoBase 平台交互，但此次通过嵌入式聊天小部件（或其他搜索界面）。
2. **嵌入式聊天小部件**
   用户输入问题或指令。例如：*“展示关于应用 X 的信息。”* 小部件向 LangFlow 发送请求以处理查询。
3. **LangFlow — 数据转嵌入**
   LangFlow 将用户指令转换为嵌入，以向量格式表示搜索意图。
4. **向量数据库（AstraDB）— 相似性搜索**
   使用指令的嵌入在 AstraDB 中搜索最相似的向量（即语义最接近的内容）。
5. **在模型中精炼搜索结果**
   根据 AstraDB 返回的结果，LangFlow 使用 OpenAI 模型（或其他 LLM）精炼搜索结果。
6. **响应用户**
   最终结果（文本、文档或生成的回答）返回至 NocoBase 聊天小部件，向用户展示响应。

## **使用 NocoBase 的应用**

本文将沿用先前创建的应用。该应用旨在展示 NocoBase 的功能，并将在其中实现 AI 助手。下图展示了助手的工作方式。

目标是通过提问获取功能相关的洞察。可用功能包括：应用、API 目录、解决方案设计和故事。

![Application Using NocoBase.webp](https://static-docs.nocobase.com/6e9829438c1354b2869e7fdf5628735a.webp)

## **什么是 LangFlow 和 AstraDB？**

**LangFlow** 是一款由巴西开发者创建的开源工具，提供图形化界面以构建、可视化和调试涉及语言模型的工作流。基于 LangChain 生态系统，LangFlow 简化了自然语言处理（NLP）流程和生成式 AI 应用的创建，允许开发者连接不同组件（如 API 调用、文本转换和业务逻辑），而无需大量编码。

![LangFlow and AstraDB.png](https://static-docs.nocobase.com/f96b8c2117c91fa90e83e7029edc905d.png)**AstraDB** 最初是基于 Apache Cassandra 的分布式数据库服务，后扩展至支持非结构化数据存储和向量搜索。其向量数据库功能特别适用于机器学习应用、语义搜索、推荐系统和高维数据处理。

![AstraDB.png](https://static-docs.nocobase.com/90e95b53095b9bf6a63244bb1b604275.png)

## **安装 LangFlow**

通过 Docker 安装 **LangFlow** 只需运行以下命令，然后在 **[localhost:7860](http://localhost:7860/)** 访问系统：

```
docker run -it --rm -p 7860:7860 langflowai/langflow:latest
```

![Installing LangFlow.png](https://static-docs.nocobase.com/a89abb9aa32bbc7a577f974b97f4aca1.png)

## **配置 AstraDB**

在 AstraDB 注册账户后，可按以下步骤配置数据库和集合：

1. 选择 **服务提供商**
2. 选择 **区域**
3. 创建 **数据库**

![Configuring AstraDB.png](https://static-docs.nocobase.com/a1e061ed6c29b261adb68fe8d8906bce.png)

由于集合存储向量化数据，需配置 **Embedding** 功能，即负责向量化的 LLM 模型。可选的嵌入模型包括 OpenAI、Nvidia 和 Google 的模型。本文使用 **text-embedding-ada-002** 进行数据转换。

![Configuring AstraDB.png](https://static-docs.nocobase.com/2f94c8c7ef4c4356aae987f3bdeb1e7a.png)

## **向向量数据库加载数据**

此步骤将待搜索数据输入向量数据库：

1. LangFlow 工作流通过 URL 接收数据。
2. 处理文本。
3. 使用 text-embedding-ada-002 转换为向量。
4. 存储至 AstraDB 的配置集合中。

![Loading Data into the Vector Database.png](https://static-docs.nocobase.com/b4477ee884a88ee7a3322e7650df3b4c.png)

### **关键点**

* 需在数据库连接组件中定义 **AstraDB Token**。生成 Token 需在 AstraDB 集合页面点击 **Generate Token**。

![Important Points.png](https://static-docs.nocobase.com/763d524e462a8ac4454b43e1558cbe3b.png)

* 源文件可在此 [仓库](https://github.com/leandro-jm/) 找到。
* 使用 OpenAI 模型需为其 API 添加额度，并生成 Token 以配置嵌入生成组件。具体流程参考 [此文档](https://platform.openai.com/docs/quickstart)。

通过 Postman 调用 LangFlow 的 API（通过 **API > cURL** 获取 URL）即可测试。下图展示 Postman 请求示例：

![Important Points.png](https://static-docs.nocobase.com/16ae6e4697b7a8349955831370e39e47.png)

## **通过模型执行搜索**

此步骤负责从向量数据库检索数据，并通过 **RAG（检索增强生成）** 精炼结果。

![Conducting Research Using a Model.png](https://static-docs.nocobase.com/aec6663ed0a2f2d8a1a01afb89140dc5.png)

此阶段同样需在组件中定义 OpenAI 和 AstraDB 的 Token。源文件可在此 [仓库](https://github.com/leandro-jm/) 找到。

测试时可通过 LangFlow 的 **Playground** 标签页使用内置聊天功能。

## **在 NocoBase 中配置工作流**

此步骤将在应用中创建触发器，以发送需向量化的数据。即每当插入新数据时，数据将被发送至 LangFlow API 处理。

使用 NocoBase 的 **工作流** 功能实现此目标。工作流详情参考 [此文档](https://docs.nocobase.com/handbook/workflow)。

![Configuring Workflow in NocoBase.png](https://static-docs.nocobase.com/e035bb1b812c53d6a96e5bcbf900a02d.png)

我们将创建一个工作流，将应用集合的数据发送至向量化集合。

**步骤：**

1. 创建新工作流，选择 **集合事件**。
   ![Configuring Workflow in NocoBase.png](https://static-docs.nocobase.com/4e97564ec88cb1f2721016dbff94023d.png)
2. 将 **触发器** 定义为 **应用** 集合的插入操作。
   ![Configuring Workflow in NocoBase.png](https://static-docs.nocobase.com/c7f5a312533558914de9053861bde66a.png)
3. 创建 **请求节点** 以发送应用的向量化数据。本文以 **标题** 和 **描述** 为例，实际可根据业务规则发送任意信息。
   ![Configuring Workflow in NocoBase.png](https://static-docs.nocobase.com/2da29b9ebb3afe6306f785cb0dcbc7e7.png)
4. **通知步骤** 为可选，无需执行。

## **在 NocoBase 中添加聊天小部件**

首先，从 LangFlow 的 **API** 选项中复制聊天小部件代码，如下图所示：

![Adding the Chat Widget in NocoBase.png](https://static-docs.nocobase.com/37bc9b9f48a4803639b54707e5b3fd25.png)

第二步，创建页面并添加 iframe 组件。组件详情参考 [此文档](https://docs.nocobase.com/handbook/block-iframe)。

**配置：**

* **模式：** HTML
* **HTML：** 以下代码，替换 **flow\_id** 和 **host\_url** 为 LangFlow 的值。

![Adding the Chat Widget in NocoBase.png](https://static-docs.nocobase.com/d03e4e25fd4241263c332f9c00dcf1c3.png)

## **测试聊天功能**

返回创建的菜单，测试助手并查看响应，示例如下：

![Testing the Chat.png](https://static-docs.nocobase.com/8c43434a510ec2b80a61aca44d939249.png)

## **结论**

本文演示了如何创建集成 NocoBase、LangFlow 和 AstraDB 的 AI 助手，实现了数据向量化和智能检索。通过此架构，我们能够生成基于注册数据的洞察，并利用 RAG 技术优化搜索结果。

这仅是架构潜力的开端。通过小幅调整，可扩展功能、集成新 AI 模型并提升用户体验。🚀

**相关阅读：**

* [如何在 NocoBase 中开发插件发送 WhatsApp 消息？](https://www.nocobase.com/cn/blog/developing-a-plugin-to-send-whatsapp-messages)
* [简化的架构治理：使用 NocoBase 构建应用程序目录](https://www.nocobase.com/cn/blog/building-an-application-catalog-with-nocobase)
* [如何备份和还原 NocoBase](https://www.nocobase.com/cn/blog/nocobase-backup-restore)
* [如何使用 NocoBase 构建应用程序？](https://www.nocobase.com/cn/blog/build-apps-with-nocobase)
* [如何上传 Docker 镜像到内网服务器](https://www.nocobase.com/cn/blog/load-docker-image)

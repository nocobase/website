MCP 这个词真正被广泛提起，是在 2025 年年初，尤其是在 AI 工具开发圈。3 月，一场围绕 “MCP 是否能成为未来标准协议” 的争论彻底点燃了讨论热度。LangChain 和 LangGraph 的核心成员在 X 上激烈辩论，GitHub 上的 MCP 项目也接连走红。

![MCP - flash in the pan or future standard?](https://static-docs.nocobase.com/1-n6gfmb.png)

图片来源：https://blog.langchain.com/mcp-fad-or-fixture/

**为什么 MCP 会火？**

说到底，是因为开发者终于意识到：ChatGPT 能生成内容，但不会自动抓网页；Claude 能理解 PDF，却调用不了 API。模型虽强，却缺乏执行闭环，工具集成仍是瓶颈。

MCP 想解决的，正是这个“最后一公里”的问题。它像是模型的 USB-C 接口，帮 AI 统一接入浏览器、数据库、插件系统等，让模型不仅会说话，还能动手。

![MCP](https://static-docs.nocobase.com/2-hk5wm2.png)

图片来源：https://norahsakal.com/blog/mcp-vs-api-model-context-protocol-explained/

我们持续关注 GitHub 上优质开源项目，发现许多基于 MCP 理念的工具已在试图解决这类问题。有的专注自动化流程，有的主打插件扩展，还有的探索多模型协作。

这篇文章整理了 [GitHub MCP 话题](https://github.com/topics/mcp)下关注度最高的 8 个项目，从简介、核心功能、部署集成到应用场景进行简要分析，供你在实际项目中参考使用。

💡 也欢迎阅读我们往期最受欢迎的 GitHub 项目系列文章：

* [GitHub 上 Star 数排名前 40 的开发者工具](https://www.nocobase.com/cn/blog/github-open-source-developer-tools)
* [2025年GitHub Star增长最快的15个开源低代码项目](https://www.nocobase.com/cn/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [GitHub 上 Star 数量前 8 的开源 Web 应用项目](https://www.nocobase.com/cn/blog/github-open-source-web-applications)

---

💬 欢迎来到 [NocoBase](https://www.nocobase.com/) 的博客。NocoBase 是一个开源无代码/低代码开发平台，用于构建企业级应用、内部工具和流程系统，支持自托管，插件化设计，开发者友好。→ [在 GitHub 上了解更多](https://github.com/nocobase/nocobase)

---

## No.1: n8n

![n8n](https://static-docs.nocobase.com/3-r88s0s.PNG)

GitHub Star: 124k

GitHub: https://github.com/n8n-io/n8n

Website: https://n8n.io/

![n8n](https://static-docs.nocobase.com/4-jy32yq.png)

**简介**：

过去一年，**n8n** 从一个小众开源自动化工具迅速走红。它最初定位为 Zapier、Make 等平台的开源替代方案，支持可视化地连接各种 API 和服务，灵活度远高于传统自动化工具。

但 n8n 的远不止于此。它的爆火，是开源、自控需求与AI 共同作用的结果。随着 OpenAI、Hugging Face 等模型快速进入企业应用，n8n 成为开发者构建 AI 调用链、智能 Agent 和业务助手的理想选择。它不仅能轻松集成第三方模型服务，更能通过自定义逻辑，将 AI 真正嵌入到业务流程中，驱动实用的自动化智能。

**核心功能**：

* **可视化流程构建**：通过拖拽节点的方式连接服务和操作，构建自动化执行链。
* **Webhook 与 API 支持**：内置 Webhook 节点可接收来自 AI Agent 的结构化请求，API 节点支持向外部系统发送请求。
* **逻辑与数据处理**：通过函数节点实现条件判断、循环处理和数据转换，支持灵活的任务控制。

**部署与集成**：

* **部署方式灵活**：支持本地运行、Docker、一键安装和云端部署，适合个人或企业环境。
* **系统集成能力强**：内置 500+ 集成，支持数据库、第三方 API、GPT、文件服务等

**你可以用 n8n 做什么？**

1. **AI 助手调用外部服务**

在聊天窗口输入“帮我安排明天下午的会议”，n8n 接收请求，提取对话上下文并发送给 OpenAI，模型识别出意图后，n8n 自动调用 Google Calendar 创建日程并回传确认信息。

2. **企业知识库问答系统**

用户提问“我们产品支持哪些支付方式？”，n8n 自动查询内部文档向量库，提取相关内容并拼接成上下文，交给模型生成精准回答，再通过企业微信回复用户。

3. **模型生成内容自动入库**

每天定时触发 GPT 总结昨天的销售聊天记录，n8n 处理返回内容，提取关键词、意向客户、下一步动作等信息，并写入 CRM 系统，同时在群里自动发一份日报摘要。

## No.2: dify

![dify](https://static-docs.nocobase.com/5-uwta9l.PNG)

GitHub Star: 109k

GitHub: https://github.com/langgenius/dify

Website: https://dify.ai/

![dify](https://static-docs.nocobase.com/6-jpb7a7.png)

**简介**：

**Dify** 也是近一年在开源 AI 应用平台中快速蹿红的项目。它一开始的定位是 “开箱即用的 LLM 应用开发框架”，但如今已经成长为一个支持多模型、多应用形态的 **AI 工作台** ——你可以用它搭建聊天机器人、Agent 流程、RAG 系统，甚至是 AI Copilot，无需从零开发。

Dify 提供了几乎“即插即用”的方案：支持调用 OpenAI、Claude、Gemini 等主流模型，支持复杂的上下文设置和变量输入，还内置了数据集、工作流、插件等能力，让你能像搭建低代码系统一样构建 LLM 应用。

**核心功能**：

* **双向 MCP 支持**：既能连接 MCP 服务器，也能作为 MCP 服务器提供服务，直接解决 AI 与系统的指令交互问题。
* **可视化工作流搭建**：通过拖拽方式快速创建 AI 应用和工作流，让 MCP 相关任务流程的设计更直观高效。
* **多模型与工具集成**：支持接入全球大语言模型、集成工具插件及 RAG 管道，为 MCP 任务提供能力扩展基础。

**部署与集成**：支持 Docker 和 AWS AMI 一键部署，同时提供 SaaS 版本，适应不同规模使用环境，提供 API 与 Webhook 接口。

**你可以用 Dify 做什么？**

1. **内部智能助手**

上传公司文档，接入 OpenAI 或 Claude，配置几个常用问题和变量，你就能快速搭建一个懂业务、有记忆的企业内部智能助手。通过 Dify 提供的前端 SDK 和 API，几行代码就能嵌入到你的官网或系统中使用。

2. **构建多轮问答的 RAG 应用**

Dify 内置数据集管理和上下文控制功能，可以快速实现基于向量检索的多轮对话系统。不需要自己搭向量库、不需要调 prompt 逻辑，只需上传资料、配置模型，就能搭好一个带记忆的问答系统，用于客服、知识库或 AI Copilot。

3. **用工作流编排模型和插件调用链**

通过 Dify 的工作流功能，你可以将多个模型调用、插件执行、API 请求串联在一起，实现复杂的 Agent 逻辑。例如，让模型先理解用户意图，再调用数据库接口，再将结果加工后回复用户——整个流程都可以在可视化界面中搭建完成。

## No.3: Open WebUI

![Open WebUI](https://static-docs.nocobase.com/7-uo7z3x.PNG)

GitHub Star: 104k

GitHub: https://github.com/open-webui/open-webui

Website: https://openwebui.com/

![Open WebUI](https://static-docs.nocobase.com/8-6ypb5p.png)

**简介**：

**Open WebUI** 是一款专为本地部署设计的 **LLM 聊天交互界面**，可以与 OpenAI API、LM Studio、Ollama 等后端模型无缝连接。它不仅开源、轻量、支持多模型切换，还提供会话上下文、多用户支持、插件系统等功能。你可以把它理解为“开箱即用的 ChatGPT 前端”，也可以把它作为构建 AI Copilot 的起点。

Open WebUI 因其部署简单、交互体验好、可二次开发，成为不少开发者和团队构建内部 AI 应用的首选工具。

**核心功能**：

* **多模型与 API 集成**：支持 Ollama 等 LLM 运行器及 OpenAI 兼容 API，可通过统一接口接收并处理 AI 模型的操作请求。
* **插件框架（Pipelines）**：可加载自定义 Python 逻辑或功能插件，实现任务前后处理和工具调用。
* **本地与远程 RAG 支持**：内置推理引擎，支持本地文档提取、远程网页集成及 RAG 管道构建，为 AI 任务提供上下文支撑。

**部署与集成**：提供 Docker 和 Kubernetes 部署方案，适合单机开发或企业集群环境，支持通过 REST API 调用模型与插件接口。

**你可以用 Open WebUI 来做什么？**

1. **部署一个 ChatGPT 私有副本**

将 Open WebUI 与本地部署的 LLM（如 Llama3、Mistral、Qwen 等）连接，就能在局域网内使用完整的 ChatGPT 功能。界面简洁，支持上下文、多轮对话，还能一键切换模型，适合公司内部知识问答或日常工作助手。

2. **搭建开发团队的 AI 工具箱**

前端写 prompt、后端调模型，团队成员还要各自复制环境？用 Open WebUI 可以实现集中配置模型、统一上下文模板，并通过角色设定管理多用户的会话环境，快速交付一个对齐风格的 AI 助理给所有人使用。

3. **作为 LLM 应用的交互前端**

如果你正在构建一个基于大模型的业务工具，可以把 Open WebUI 改造成前端壳，与你后端的推理服务、数据库、业务系统对接。借助其插件机制与 API 支持，它能承接问答、搜索、指令执行等一系列交互逻辑，成为一个轻量级的 Copilot 门面。

## No.4: Netdata

![Netdata](https://static-docs.nocobase.com/9-18kgep.png)

GitHub Star: 75.2k

GitHub: https://github.com/netdata/netdata

Website: https://www.netdata.cloud/

![Netdata](https://static-docs.nocobase.com/10-akbrty.png)

**简介**：

**Netdata** 是一个开源、实时的系统监控平台，可以展示服务器、容器、数据库、应用程序等的运行状态，几乎零配置即可启用。相比传统监控工具，它**轻量、响应极快、可嵌入任意系统**，在高频数据采集和可视化方面表现出色。

在大模型部署和 Agent 流水线变得复杂之后，Netdata 正成为许多技术团队在构建 MCP 系统时的“**可观测性核心组件**”。你不仅可以用它监控基础资源，还可以将推理延迟、上下文负载、调用错误等信息可视化，确保整个调用链稳定可控。

**核心功能**：

* **MCP 服务端功能**：Netdata agents 和 Cloud 模块本身即 MCP 服务器，允许 AI 与系统监控数据交互。
* **实时监控与异常检测**：提供实时性能指标、日志、告警和自动异常检测能力。
* **AI 辅助运维对话**：支持通过自然语言访问基础设施状态，实现 AI 驱动的 DevOps 助理功能。

**部署与集成**

* 安装简单，可通过 Docker、包管理器或自主脚本部署在服务器、容器或云主机上。
* 具备 800 + 的集成，提供标准 MCP 接口，AI Agent 可实时请求监控数据。

**你可以用 Netdata 来做什么？**

1. **实时监控大模型运行资源**

Netdata 可以每秒刷新 GPU、CPU、内存、磁盘等关键指标，一眼看出是否出现瓶颈，非常适合部署本地大模型时使用。

2. **构建 AI 工作流的监控面板**

将 Netdata 嵌入你的推理服务或 Agent 调用链中，实时可视化接口调用次数、响应时间、上下文缓存使用情况等指标。你可以设置自动告警机制，第一时间发现异常，比如模型长时间未响应或请求失败率飙升。

3. **给 AI 系统接入可视化“黑匣子”**

Netdata 提供详细的调用轨迹和历史记录图表，帮助你还原问题发生时的上下文状态。无论是 RAG 系统故障、插件连接失败，还是 GPU 降频。

## No.5: Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/11-w7o72g.png)

GitHub Star: 63.9k

GitHub: https://github.com/lobehub/lobe-chat

Website: https://lobechat.com/

![Lobe Chat](https://static-docs.nocobase.com/12-o8ky3v.png)

**简介**：

**Lobe Chat** 是一个开源的、UI 精致、功能强大的 LLM 聊天系统，支持多模型、多会话、多插件，完美适配 OpenAI、Claude、Gemini、Ollama 等主流模型。相比其他工具，Lobe Chat 更强调用户体验和扩展性，提供了对话变量、Prompt 模版、角色预设等高级功能，既适合个人使用，也适合团队打造专属 Copilot。

随着 MCP 架构在各类 AI 应用中的兴起，Lobe Chat 正成为开发者构建**具备上下文感知、多模型调用和插件集成能力的前端入口**，扮演着“**人类交互层**”的关键角色。

**核心功能**：

* **多模型与 RAG 支持**：灵活接入 OpenAI、Claude、Gemini、本地模型，并集成知识库检索与上下文引用。
* **MCP 插件市场支持**：内置 MCP 插件商店，可快速导入 Agent 功能与工具调用接口。
* **功能调用系统**：支持函数调用插件协议，可跨模型触发外部操作流程。

**部署与集成**：支持一键免费部署私有聊天应用，可通过 Docker、Vercel 等方式进行自托管部署，快速搭建服务，支持通过 API 集成外部系统。

**你可以用 Lobe Chat 来做什么？**

1. **一键部署自己的多模型助手**

通过简单配置，你就能将多个本地或云端模型（如 Llama3、Qwen、GPT-4、Claude）接入 Lobe Chat，实现模型随时切换、统一对话体验。支持记忆、角色设定、插件调用——比 ChatGPT 更自由，还能私有部署。

2. **搭建带插件能力的 AI Copilot**

Lobe Chat 支持插件调用链，你可以配置插件连接数据库、搜索引擎、工具 API 等。当用户问“把这份表格导入 Notion 并汇总”时，模型可以自动调用插件完成操作，实现更强的多轮交互与任务执行。

3. **打造可共享的 AI 应用界面**

不只是聊天，Lobe Chat 还能快速构建 Prompt 工具和自定义 Agent 应用。通过分享链接或嵌入页面的方式，把一个智能问答场景快速发布给他人使用，适合内部工具或面向客户的轻量化产品。

## No.6: Glama

![Glama](https://static-docs.nocobase.com/13-4jq2qy.png)

GitHub Star: 63.6k

GitHub: https://github.com/punkpeye/awesome-mcp-servers

Website: https://glama.ai/mcp/servers

![Glama](https://static-docs.nocobase.com/14-p1734h.png)

**简介**：

和前面几个工具不同，**Glama** 是一个面向 MCP 协议的开源客户端，允许你在一个页面中连接并使用多个兼容 MCP 的服务（如上面的 LobeChat 和 Open WebUI）。它不提供模型推理能力，而是作为“**聚合交互前端**”，让你能像用 ChatGPT 一样，在一个界面中切换不同模型、插件和上下文服务。

Glama 提供了一种全新的“拼装式体验”——你可以选择任意支持 MCP 的模型后端，接入多个插件工具，甚至混用不同厂商的模型。对于开发者和 AI 工程师来说，它是观察、测试和协同多个 AI 服务的统一窗口。

**核心功能**：

* **丰富 MCP 服务器聚合**：整合了 Kong Konnect、Powerdrill、YingDao RPA、StarTree 等大量官方 MCP 服务器，覆盖 API 网关、数据分析、RPA 自动化、数据库交互等多元场景。
* **标准化交互支持**：所有聚合的 MCP 服务器均遵循 Model Context Protocol 规范，确保 AI 模型能以统一格式发出操作请求。
* **精准资源检索**：提供搜索功能，可按 MCP 服务器、工具等关键词快速查找所需资源，帮助用户高效匹配适配特定业务场景的 MCP 服务。

**部署与集成**：提供网页版服务与 API 接口，企业用户可直接接入。支持通过接口集成公司业务系统与数据库，基于 MCP 协议接收任务指令。

**你可以用 Glama 来做什么？**

1. **管理多个 MCP 服务的一站式面板**

你可以同时接入多个聊天服务（如 LobeChat、Open WebUI）、多个插件服务器（如 AI-Plugins Server），在一个页面中自由切换它们，统一体验、统一上下文，不再东跳西跳。

2. **快速测试 Agent 与插件协作效果**

使用 Glama，可以直接尝试不同 MCP 后端如何调用插件、如何解析用户请求。比如测试一个数据库插件是否在不同模型服务下都能顺利运行，或比对它们对用户指令的响应差异，便于调优系统表现。

3. **构建“模型集群 + 插件”的产品雏形**

如果你打算搭建自己的 AI Copilot 产品或平台，可以先用 Glama 拼接出一个完整的功能结构原型。比如左边选模型、中间交互、右边显示插件调用日志，一套 MCP 架构的闭环体验即可跑通，为后续定制开发打下基础。

## No.7: **RAGFlow**

![RAGFlow](https://static-docs.nocobase.com/15-7kvvqp.png)

GitHub Star: 61.1k

GitHub: https://github.com/infiniflow/ragflow

Website: https://ragflow.io/

![RAGFlow](https://static-docs.nocobase.com/16-dvstzn.png)

**简介**：

**RAGFlow** 是由 infiniflow 团队开源的一个用于构建 RAG（检索增强生成）系统的开发框架。它强调工程化能力，支持模块化流程编排、检索/生成解耦、上下文链路可视化和可调试性等特性。你可以把它看作是一个专注于**搭建稳定、可控、可追踪的知识问答系统**的流水线工具。

与 LangChain、LlamaIndex 这类通用型框架相比，RAGFlow 更偏向“后端基础设施”，追求可复现、可测试、可观测的 RAG 流程，尤其适合团队内部打造复杂问答系统、AI Copilot 和企业知识搜索等场景。

**核心功能**：

* **深度文档解析**：能处理各类复杂格式数据（如多格式文件、结构化内容等），通过深度理解提取关键信息，为 AI 任务提供高质量上下文。
* **知识库构建与管理**：支持创建专属知识库，可对上传文件进行解析、存储和维护。
* **检索增强生成联动**：与 LLM 集成后，能基于检索到的知识生成带准确引用的回答。

**部署与集成**：提供 Docker Compose 部署方式，可与各类 LLM 集成。

**你可以用 RAGFlow 来做什么？**

1. **搭建模块化的企业知识库问答系统**

RAGFlow 支持对文档预处理、分块策略、嵌入生成、索引结构等每一步进行模块化配置，并支持替换组件、插入自定义节点。你可以精准控制知识库构建流程，打造适配自己业务的 RAG 系统。

2. **构建“可调试”的 RAG 调用链**

调一个 RAG 系统最难的是哪里错了？RAGFlow 内置链路可视化和数据追踪能力，让你清楚知道是哪个检索 query 没命中、哪一轮上下文太长被截断，帮助你快速优化整个回答流程。

3. **组合 Agent + RAG 架构**

你可以将 RAGFlow 作为一个组件集成进更大的 LLM Agent 系统中，例如结合 Dify 或 Lobe Chat，通过插件或 API 调用方式实现复杂意图识别 → 检索 → 回答的三段式闭环。特别适合构建财务助手、客服助手等强业务感知型 Agent。

## No.8: AnythingLLM

![AnythingLLM](https://static-docs.nocobase.com/17-8m9ws2.png)

GitHub Star: 47.1k

GitHub: https://github.com/Mintplex-Labs/anything-llm

Website: https://anythingllm.com/

![AnythingLLM](https://static-docs.nocobase.com/18-2uykf1.png)

**简介**：

**AnythingLLM** 是一个开源的桌面版与 Docker 部署的全栈应用：内置 RAG、AI Agent、可视化/无代码的 Agent 编排，并且**原生兼容 MCP**。它支持多家模型与本地/云端向量库、提供多用户与可嵌入的聊天组件，用来快速把“知识 + 模型 + 工具”拼成可用的 AI 应用，非常适合私有化与团队协作场景。

**核心功能**：

* **多模型与文档交互**：支持本地运行自定义模型或对接云端模型（如 OpenAI、Azure 等），能处理 PDF、Word、CSV 等多种格式文档。
* **自定义 Agent 与技能扩展**：支持通过 Agent Skills 为 AI 助手添加自定义能力，结合 MCP 协议可实现自动化任务执行。
* **本地化交互与隐私保障**：默认在本地运行 LLM、向量数据库及存储组件，AI 指令及数据处理均在本地完成。

**部署与集成**：支持桌面端一键安装，也可通过 Docker 实现自托管部署。提供开发者 API，可与现有产品集成。

**你可以用 AnythingLLM 来做什么？**

1. **搭建私有 ChatGPT + 知识库**

把 PDF/网页等资料拖入“Workspace”，自动切分、嵌入并带引用回答；本地或云端运行，都能给团队一个可控的内部问答入口。

2. **Agent + MCP 工具链落地**

在 UI 里配置 MCP 服务器，让对话中的 Agent 能调用外部工具（如检索、爬取、数据库读写），把“理解 → 获取数据 → 处理 → 回答”串成闭环，无代码就能跑通原型。

3. **多模型/多向量库灵活拼装**

同时接入 OpenAI/Claude/Gemini 及本地 Ollama 等模型；向量库可选 LanceDB、PGVector、Pinecone、Milvus、Qdrant 等，并可将聊天小组件嵌入到你的网页/系统里，实现从后端到前端的完整交付。

## 总结

这几个月，MCP 从一个小众概念变成了开发者们热议的焦点。虽然标准还没完全确定，工具也还在不断完善，但越来越多项目开始用 MCP 让 AI 不只是会说话，而是真的能动手完成任务。

对于正在做 AI 集成和自动化的开发者来说，MCP 提供了一个思路：不仅关注模型的智能，还要让它能连接外部系统，这样才能让 AI 在真实业务场景中真正发挥作用。

希望本文能为你在 AI 项目的整合和开发上，提供一些参考和启发。

**相关阅读：**

* [GitHub 上 Star 数量前 8 的开源 Web 应用项目](https://www.nocobase.com/cn/blog/github-open-source-web-applications)
* [GitHub 上 Star 数排名前 40 的开发者工具](https://www.nocobase.com/cn/blog/github-open-source-developer-tools)
* [2025年GitHub Star增长最快的15个开源低代码项目](https://www.nocobase.com/cn/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [GitHub 上星星数量前 11 的开源 CRM 项目](https://www.nocobase.com/cn/blog/github-open-source-crm-projects)
* [GitHub 上排名前 11 的开源管理后台（Admin Dashboard）项目](https://www.nocobase.com/cn/blog/top-11-open-source-admin-dashboard-projects-on-github)
* [GitHub Star 数量前十的工作流项目](https://www.nocobase.com/cn/blog/top-10-open-source-workflows-projects-with-the-most-github-stars)

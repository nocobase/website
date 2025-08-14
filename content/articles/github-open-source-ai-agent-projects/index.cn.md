大概一个多月前，我在 [Hacker News](https://news.ycombinator.com/item?id=44450160) 上刷到一篇讨论热度很高的文章——[《停止构建 AI Agent》](https://decodingml.substack.com/p/stop-building-ai-agents)。

![Stop Building AI Agents](https://static-docs.nocobase.com/1-472k2u.png)

作者在文中分享了自己的亲身经历：他用 CrewAI 组建了一个“研究小组”——三名 Agent、五个工具，纸面上分工完美无缺。但真正运行时，研究员 Agent 无视爬虫工具，摘要员忘记引用，协调员在处理长文档时直接放弃，原本看似天衣无缝的方案，在实践中却像多米诺骨牌般接连失灵。

下面这张流程图，是作者在经历无数次代理系统的调试与翻车后，总结出的“是否该用 Agent”的经验指南。

![Should I use an Agent](https://static-docs.nocobase.com/2-45bvv4.png)

Image source: https://decodingml.substack.com/p/stop-building-ai-agents

文章提炼出一个重要原则：**Agent 最适合在“人类参与监督”的非稳定型流程中发挥作用**——这种场景下，Agent 的探索能力和创造性往往优于工作流。

* **可用场景**：数据科学助手（自动写 SQL、生成可视化、探索数据趋势）；创意写作伙伴（头脑风暴、文案改进）；代码重构助手（提出优化建议、发现潜在问题）。在这些任务中，人类可随时评估结果并纠正偏差。
* **不建议使用**：企业核心自动化（关键业务流程的稳定性无法交给 LLM 决定）；高风险决策（金融交易、医疗诊断、法律合规等需要确定性逻辑的领域）。

![scenarios](https://static-docs.nocobase.com/3-ba22w7.png)

Image source: https://decodingml.substack.com/p/stop-building-ai-agents

如果看完上面的内容，你依然觉得自己的业务场景适合构建 Agent，那么这篇文章将为你盘点 GitHub 上[ Agent](https://github.com/topics/agent) 话题下 Star 数排名前 18 的开源项目，并从项目概览、核心功能与应用场景三个维度剖析它们的优势与边界，帮助你在合适的场景中发挥 Agent 的最大价值。

---

💬 欢迎来到 [NocoBase](https://www.nocobase.com/) 的博客。NocoBase 是一个开源无代码/低代码开发平台，用于构建企业级应用、内部工具和流程系统，支持自托管，插件化设计，开发者友好。→ [在 GitHub 上了解更多](https://github.com/nocobase/nocobase)

---

💡 也欢迎阅读我们往期最受欢迎的 GitHub 项目系列文章（部分项目会在不同主题中重复出现）：

* [GitHub 上 Star 数量前 20 的开源 AI 项目](https://www.nocobase.com/cn/blog/github-open-source-ai-projects)
* [GitHub 上 Star 数量前 8 的开源 MCP 项目](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects)
* [GitHub 上 Star 数排名前 40 的开发者工具](https://www.nocobase.com/cn/blog/github-open-source-developer-tools)

## No.1: Dify

![Dify](https://static-docs.nocobase.com/4-in2l5n.png)

* GitHub Star: 110k
* GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)
* Website: [https://dify.ai/](https://dify.ai/)

![Dify](https://static-docs.nocobase.com/5-psa2vb.png)

**项目概览：**

**Dify** 是一个开源的 LLM 应用开发平台。它融合了直观可视化界面、RAG 工作流、Agent 能力、模型管理与全链路可观测性，让开发者能够迅速搭建、调试并部署 AI 应用。

**核心功能：**

* **可视化工作流编排**：提供拖拽式构建界面，开发者可以在画布上设计并测试复杂的 AI 流程，包括提示、模型调用与任务串联等。
* **RAG 管道支持**：支持多格式文档（如 PDF、PPT）摄入，自动抽取内容并构建检索管道，实现知识增强生成能力。
* **全模型生态与提示编辑器**：兼容 GPT、Mistral、Llama3 及所有 OpenAI API 兼容模型，一站式管理模型与调优提示，简化模型切换与性能比对流程。

**应用场景：**

* 构建智能客服与 QA 系统
* 对接企业知识库
* 快速部署内容生成工具

## No.2: Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/6-8eachs.png)

* GitHub Star: 64.3k
* GitHub: [https://github.com/lobehub/lobe-chat](https://github.com/lobehub/lobe-chat)
* Website: [https://lobechat.com/](https://lobechat.com/)

![Lobe Chat](https://static-docs.nocobase.com/7-t7pkjl.png)

**项目概览：**

**Lobe Chat** 是一个开源的多模型聊天与应用平台，强调 UX 体验，支持语音、视觉识别、多模态输入、插件市场、移动端适配和多用户管理。

**核心功能：**

* **多模态 & 插件支持**：支持语音对话、图像识别与生成，并通过插件市场扩展功能，满足多样交互需求。
* **智能体指数平台**：通过一个社区驱动的索引，用户可浏览、添加或提交自定义助手，便于扩展和复用。
* **统一模型适配**：提供统一接口与插件化架构，轻松衔接 OpenAI、Anthropic、Gemini、Ollama 等模型服务商，便于平台迁移与模型升级。

**应用场景：**

* 快速搭建高交互、多模态的智能聊天应用
* 部署领域定制助手

## No.3: RAGFlow

![RAGFlow](https://static-docs.nocobase.com/8-p4g4dr.png)

* GitHub Star: 62.1k
* GitHub: [https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)
* Website: [https://ragflow.io/](https://ragflow.io/)

![RAGFlow](https://static-docs.nocobase.com/9-9lvp8h.png)

**项目概览：**

**RAGFlow** 是一款基于深度文档理解的开源 RAG 引擎，旨在为企业与个人提供高质量、可解释的问答与 Agent 服务。它不仅能处理复杂格式文档，还能提供引用性回复与可视化块管理。

**核心功能：**

* **深度文档理解**：擅长解析 PDF、Word、PPT、Excel、图片等非结构化内容，提取可检索信息块，确保生成内容真实、可验证。
* **RAG 问答与引用追踪**：结合向量检索与 LLM，生成带引用的回答，并支持手动调整检索块以优化准确度。
* **灵活部署与集成**：提供 Docker Compose 部署方式，可与各类 LLM 集成。

**应用场景：**

* 构建文档驱动的问答系统与知识助手
* 实施内容审核与引用追踪
* 部署支持复杂文件结构的 RAG 应用

## No.4: OpenHands

![OpenHands](https://static-docs.nocobase.com/10-b9ssqh.png)

* GitHub Star: 62k
* GitHub: https://github.com/All-Hands-AI/OpenHands
* Website: https://all-hands.dev/

![OpenHands](https://static-docs.nocobase.com/11-a2rzhi.png)

**项目概览：**

**OpenHands** 的核心理念是让 AI 能像人类开发者一样“写更少的代码，完成更多工作”，提供代码编辑、命令执行、网页浏览、API 调用等多种能力支持。

作为一个 MIT 开源项目，OpenHands 可以在本地通过 Docker 快速部署，也提供 OpenHands Cloud SaaS 版以便免配置上手，其中 Cloud 版本更提供初始使用额度，适合快速试用。随着版本更新，OpenHands 架构不断完善，逐步实现了通用 Agent 控制器、多 Agent 协同、多交互会话管理、沙箱安全执行等特性，成为一个针对软件开发者的通用 AI 工具平台。

**核心功能：**

* **通用开发者 Agent 能力**：Agent 能执行“修改代码、运行命令、浏览网页、调用 API”等任务，模拟人类开发者的行为路径。
* **多 Agent 协作与会话管理**：系统支持多个 Agent 协同工作，具备会话管理能力（Session、EventStream、AgentController 等），实现任务分工或协同处理复杂需求。
* **安全沙箱机制**：Agent 执行代码和命令时，运行环境由沙箱（如 Docker 容器）隔离，确保执行安全，减少对宿主系统风险。

**应用场景：**

* 辅助开发者完成常规代码任务
* 自动化测试与部署流程
* 快速原型与工具搭建

## No.5: MetaGPT

![MetaGPT](https://static-docs.nocobase.com/12-btl5l3.png)

* GitHub Star: 57.8k
* GitHub: https://github.com/FoundationAgents/MetaGPT
* Website: https://mgx.dev/

![13-2pwtad.png](https://static-docs.nocobase.com/13-2pwtad.png)

**项目概览：**

MetaGPT 是一个多智能体协作框架，强调“软件公司模拟”，将自然语言需求转化为从用户故事、竞品分析到 API 设计、文档编写的一整套流程。其核心理念是“Code = SOP(Team)”——将标准作业程序（SOP）具体化，安排产品经理、架构师、工程师等角色协作完成任务。

![MetaGPT](https://static-docs.nocobase.com/14-8jh7z3.png)

**核心功能：**

* **多角色智能体协作**：内置产品经理、架构师、项目经理、工程师等 AI 智能体，模拟真实团队依照 SOP 协同推进项目。
* **SOP 驱动流程**：通过标准作业程序指导每个 Agent 执行任务，实现任务拆解与结构化执行，减少偏差与幻觉。
* **自然语言编程**：用户只需一句话描述需求，MetaGPT 即可生成对应的用户故事、数据结构、API 接口与架构设计。

**应用场景：**

* 自动生成软件项目开发提案
* 快速构建团队协作原型
* 探索 AI 驱动的软件开发流程优化与自动化研究

## No.6: LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/15-w7easd.png)

* GitHub Star: 56k
* GitHub: [https://github.com/rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)

![LLMs-from-scratch](https://static-docs.nocobase.com/16-68zqun.png)

**项目概览：**

**LLMs-from-scratch **是一个从零实现大型语言模型的教学型项目，帮助开发者理解 LLM 的核心原理与训练过程。

👉 [点击查看 LLMs-from-scratch 的完整介绍与应用场景](https://www.nocobase.com/cn/blog/github-open-source-ai-projects#no15-llms-from-scratch)

## No.7: Huginn

![Huginn](https://static-docs.nocobase.com/17-wzc3ll.png)

* GitHub Star: 47k
* GitHub: https://github.com/huginn/huginn

![Huginn](https://static-docs.nocobase.com/18-orl7h1.png)

**项目概览：**

**Huginn** 是一个开源自动化工具，让用户可在自有服务器上运行 agents，从网络采集信息并基于条件进行触发动作，如邮件通知、关键词监控等。Huginn 的设计初衷有力捍卫了用户对数据的控制权，以其数据可控、自托管、可扩展代理系统特点长期活跃在开源社区。

**核心功能：**

* **自托管 Web 代理平台**：用户可在自己的服务器上部署 agents，自主处理数据与执行任务，确保隐私与可控性。
* **事件—动作规则引擎**：支持配置条件触发 logic，当指定的网络事件发生时，可以自动执行通知、脚本或 HTTP 调用等操作。
* **扩展性 Agents 机制**：内置多种 agents，可通过 Huginn Agent gem 扩展自定义 agent 功能，生态丰富。

**应用场景：**

* 信息监控与提醒
* 数据抓取与自动化流程
* 自定义自动化工具构建

## No.8: Unsloth

![Unsloth](https://static-docs.nocobase.com/19-ihomc8.png)

* GitHub Star: 43.8k
* GitHub: https://github.com/unslothai/unsloth
* Website: https://docs.unsloth.ai/

![Unsloth](https://static-docs.nocobase.com/20-eci5h1.png)

**项目概览：**

**Unsloth** 是一款专为微调 LLM（如 OpenAI gpt-oss、Qwen3、Llama 4）而设计的开源工具，目标是提供更加高效且显存友好的训练流程。其核心代码采用 OpenAI 开发的 Triton 架构，显著提升训练速度并降低显存占用。

**核心功能：**

* **高效显存优化微调**：在主流 LLM 上实现 1.5-2.2× 的微调速度提升，并减少高达 70–80% 的显存使用。
* **易用 Notebook 工作流**：用户只需添加数据集并点击“Run All”即可完成模型微调，便可快速完成模型训练。
* **广泛模型兼容**：支持微调包括 Llama、Gemma、Qwen 等多个 LLM 模型。

**应用场景：**

* 快速微调 LLM 模型用于研究或产品原型验证
* 教育与教学工具：让入门者在免费 GPU 环境中体验模型训练流程
* 高显存节省需求的开发场景，如部署在资源受限设备上

## No.9: Mem0

![Mem0](https://static-docs.nocobase.com/21-uxkki5.png)

* GitHub Star: 38.1k
* GitHub: https://github.com/mem0ai/mem0
* Website: https://mem0.ai/

![Mem0](https://static-docs.nocobase.com/22-bmb2sv.png)

**项目概览：**

**Mem0** 是一款专为 AI Agent 设计的长期记忆管理系统，致力于解决 AI 常见的“遗忘”问题。它通过统一记忆层使智能体能够跨会话、跨应用持续保留用户偏好与历史上下文，实现个性化且连续的交互体验。在 LOCOMO 基准测试中，Mem0 相比 OpenAI Memory，在准确率上提升约 26%，响应延迟降低 91%，且 Token 消耗降低 90%。适合用于客服机器人、AI 助手和自主系统等需要上下文延续的场景。

**核心功能：**

* **多级记忆架构**：支持用户级、会话级、智能体级的多层记忆管理，让信息层次化保存。
* **高性能与高效成本**：显著提高准确率、降低延迟与 Token 消耗，实现更省资源的长期记忆支持。
* **本地化隐私优先**：所有数据可在本地处理与存储，用户对数据拥有完全控制权。

**应用场景：**

* 客服机器人：记住用户偏好、历史问题，提高响应相关性
* AI 助手：跨会话记忆任务和人设，使互动更连贯自然
* 医疗与咨询系统：保留上下文信息以提升服务质量与精准反馈

## No.10: ChatTTS

![ChatTTS](https://static-docs.nocobase.com/23-azdged.png)

* GitHub Star: 37.5k
* GitHub: https://github.com/2noise/ChatTTS
* Website: https://2noise.com/

![ChatTTS](https://static-docs.nocobase.com/24-e17utt.png)

**项目概览：**

**ChatTTS** 是一个专为对话式任务优化的开源文本转语音系统，支持多说话人场景，重点在于表达自然、情绪丰富。为了防止滥用，项目在训练模型中加入少量高频噪音，并压低文件质量，同时计划部署检测机制以加强伦理使用指导。

**核心功能：**

* **对话优化 TTS**：专门优化用于对话场景的语音合成，支持多角色对话和自然节奏表达。
* **细粒度韵律控制**：精确控制语音中的笑声、停顿、插入词等韵律元素，使合成显得更自然生动。

**应用场景：**

* 构建人性化语音机器人或互动对话系统。
* 教育类产品中的角色配音与语言练习工具。
* 语音内容创作与播客自动生成音频辅助工具。

## No.11: Arthas

![Arthas](https://static-docs.nocobase.com/25-1e8yxo.png)

* GitHub Star: 36.6k
* GitHub: https://github.com/alibaba/arthas
* Website: https://arthas.aliyun.com/

![Arthas](https://static-docs.nocobase.com/26-rnqi0c.png)

**项目概览：**

**Arthas** 是阿里巴巴开源的 Java 诊断工具，自发布以来便成为 Java 开发者排查生产环境问题的利器。它的设计初衷是让开发者无需修改代码或重启服务器即可动态 attach 到生产环境应用，执行调试命令、查看栈信息或打断点，极大提升了定位线上问题的效率与安全性。

**核心功能：**

* **动态 Attach 执行**：无需重启或修改代码，直接将 Arthas 注入进生产 JVM 应用，立即调试与监控。
* **命令行交互诊断**：提供像 `stack`, `trace`, `watch`,`monitor` 等命令，通过 CLI 即时查看运行堆栈、方法调用次数及性能指标等诊断信息。

**应用场景：**

* 线上故障快速定位
* 性能瓶颈分析
* 回归测试问题排查

## No.12: AgentGPT

![AgentGPT](https://static-docs.nocobase.com/27-yvq9f7.png)

* GitHub Star: 34.7k
* GitHub: https://github.com/reworkd/AgentGPT
* Website: https://arthas.aliyun.com/

![AgentGPT](https://static-docs.nocobase.com/28-fwguw8.png)

**项目概览：**

**AgentGPT** 是一个开源项目，让用户可以在浏览器中自主配置和部署 AI 代理，无需复杂部署背景。它提供了更友好的界面，通过输入目标即可让代理“思考—执行—学习”，完成任务目标。

**核心功能：**

* **浏览器式代理配置**：用户只需在网页端设置目标与名字，即可启动 Agent 运行，极大降低部署门槛。
* **目标驱动执行**：Agent 会“思考”如何完成设定目标，生成任务子步骤并自动执行、反馈、优化。
* **自动化环境初始化**：内置 CLI 可自动配置环境变量、数据库 (MySQL)、后端 (FastAPI) 和前端 (Next.js)，一键启动运行环境。

**应用场景：**

* 任务型辅助智能体
* 原型验证工具
* 学习与演示平台

## No.13: Cherry Studio

![Cherry Studio](https://static-docs.nocobase.com/29-z4pzy1.png)

* GitHub Star: 31.3k
* GitHub: https://github.com/CherryHQ/cherry-studio
* Website: https://cherry-ai.com/

![Cherry Studio](https://static-docs.nocobase.com/30-qageqb.png)

**项目概览：**

**Cherry Studio **是由 CSDN、GitCode 与华为云 CodeArts IDE 联合打造的一款 AI 编程助手平台，于 2024 年 12 月亮相业界，并迅速吸引关注。其定位是为开发者提供一站式 AI 助手矩阵，支持自然语言交互、项目级代码改写与全栈开发支持。

**核心功能：**

* **AI 助手矩阵**：内置 300+ 行业专属 AI 助手模板，并支持自定义创建，覆盖写作、编程等多个领域。
* **多模型聚合平台**：可自由切换 OpenAI、Gemini 等云端模型与本地模型，并支持多模型对话输出对比。
* **可视化 Agent 编辑**：用户可在“智能体广场”中选择预设助理，也可创建自定义 Agent，并可使用 AI 优化提示词。

**应用场景：**

* 项目级代码助手
* 行业专属解决方案
* 知识驱动的代码生成

## No.14: Khoj

![Khoj](https://static-docs.nocobase.com/31-l08bdf.png)

* GitHub Star: 31.3k
* GitHub: https://github.com/khoj-ai/khoj
* Website: https://khoj.dev/

![Khoj](https://static-docs.nocobase.com/32-x8rb4x.png)

**项目概览：**

**Khoj** 是一款定位为“个人 AI 第二大脑”的开源助手，支持将多源文档整合为知识库，通过语义检索实现内容问答与智能提醒。Khoj 支持通过创建自定义 Agent 来自动执行定时任务、内容推送或即时对话响应。

**核心功能：**

* **多源知识整合**：支持导入 PDF、Markdown、Notion、GitHub 等多种格式内容，构建统一知识库。
* **语义搜索与通知**：基于自然语言检索文档内容，并支持定时推送、邮件提醒等功能。
* **跨平台 Agent 支持**：可在桌面端、Obsidian 插件、Web 端、Emacs、WhatsApp 等多种环境进行交互。

**应用场景：**

* 个人知识管理助手
* 自动提醒系统
* 跨工具集成体验

## No.15: AIHawk

![AIHawk](https://static-docs.nocobase.com/33-dxlkjy.png)

* GitHub Star: 28.6k
* GitHub: https://github.com/feder-cr/Jobs\_Applier\_AI\_Agent\_AIHawk
* Website: https://laboro.co/

![AIHawk](https://static-docs.nocobase.com/34-g4zibv.png)

**项目概览：**

**AIHawk** 是一个 AGPL 授权的开源 AI Agent，专注于自动申请工作职位。它会抓取招聘网站信息，并使用语言模型生成针对性的申请材料，帮助用户高效应聘。

**核心功能：**

* **自动职位申请**：通过爬取招聘网站的信息，自动生成并提交流程优化的申请材料。
* **开源架构可扩展**：核心系统保持开源，方便开发者自定义行为或添加插件。
* **平台化商业延展**：项目演变为 laboro.co 平台，提供托管服务与更多招聘自动化功能。

**应用场景：**

* 求职者自动申请助手
* 招聘流程自动化研究
* 招聘平台集成工具

## No.16: FastGPT

![FastGPT](https://static-docs.nocobase.com/35-xvxjpm.png)

* GitHub Star: 25.5k
* GitHub: https://github.com/labring/FastGPT
* Website: https://fastgpt.io/

![FastGPT](https://static-docs.nocobase.com/36-bu5ifv.png)

**项目概览：**

**FastGPT** 旨在成为一个 “AI Agent 构建平台”，让开发者无需繁琐配置即可使用可视化工作流与知识库构建复杂 AI 应用，简化部署流程。

**核心功能：**

* **可视化工作流编排**：提供拖拽式界面，支持对话节点、HTTP 调用、RPA、条件分支等，帮助开发者像“搭积木”一样组装 AI 应用。
* **知识库与 RAG 支持**：允许导入多格式文件（如 txt、md、pdf 等），支持向量检索与混合检索，实现知识驱动的问答与自动化处理.
* **多模型与接口兼容**：统一接入 OpenAI、Claude 等模型；同时提供 OpenAPI-compatible 接口，便于二次开发与嵌入到现有系统中。

**应用场景：**

* 快速搭建智能问答机器人（如客服助手）。
* 文档分析与自动摘要生成流程。
* 接入外部 API 实现自动化任务处理

## No.17: GPT Researcher

![GPT Researcher](https://static-docs.nocobase.com/37-dzrr44.png)

* GitHub Star: 22.9k
* GitHub: https://github.com/assafelovic/gpt-researcher
* Website: https://gptr.dev/

![GPT Researcher](https://static-docs.nocobase.com/38-34tscx.png)

**项目概览：**

**GPT Researcher** 是一个专注于深度研究任务的 AI Agent 框架，能够自动规划研究流程，爬取信息、生成研究报告，并输出带引用的内容，具备高度报告质量和可定制性。

**核心功能：**

* **并行代理研究**：Planner Agent 生成研究问题，多个 Executor Agents 并行抓取资料与总结，大幅提升效率与确定性。
* **事实性报告输出**：自动整理引用内容，输出结构化、客观、带来源的研究报告。

**应用场景：**

* 快速撰写竞品分析或技术调研报告。
* 自动化生成学术研究线稿或背景资料汇总。
* 构建定制化领域知识代理，用于企业知识汇总。

## No.18: CopilotKit

![CopilotKit](https://static-docs.nocobase.com/39-z4vv5d.png)

* GitHub Star: 22.4k
* GitHub: https://github.com/CopilotKit/CopilotKit
* Website: https://docs.copilotkit.ai/

![CopilotKit](https://static-docs.nocobase.com/40-u5mh13.png)

**项目概览：**

**CopilotKit** 是一个开源框架，旨在帮助开发者将 AI Copilots 无缝集成到应用中，无论是内嵌式聊天、智能文本区，还是完整的 Agent 界面。该项目不仅提供 React UI 组件，还支持 headless 架构，灵活嵌入多种界面。

**核心功能：**

* **React 与 Headless UI 支持**：提供即插即用的 UI 组件，也可支持仅 API 驱动的无界面部署方式。
* **应用上下文连接**：将应用的逻辑、状态与用户上下文无缝对接到 AI Agent，使功能更加贴合用户需求。
* **模型与架构解耦**：支持与任意模型或代理架构独立运作，便于在不影响用户体验的前提下升级 AI 技术栈。

**应用场景：**

* 嵌入式 AI 助手
* 自定义 AI 工具
* 多模态交互体验

## 写在最后

Agent 擅长探索，不擅长遵守规则。

上面介绍的 18 个开源 Agent 项目，既是工具箱，也是提醒：选择合适的场景和设计合理的边界，才是让 Agent 发挥最大价值的关键。

如果这篇文章对你有所启发，欢迎分享给同样在探索 AI Agent 的朋友。👍

**相关阅读：**

* [GitHub 上 Star 数量前 20 的开源 AI 项目](https://www.nocobase.com/cn/blog/github-open-source-ai-projects)
* [GitHub 上 Star 数量前 8 的开源 MCP 项目](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects)
* [GitHub 上 Star 数量前 8 的开源 Web 应用项目](https://www.nocobase.com/cn/blog/github-open-source-web-applications)
* [GitHub 上 Star 数排名前 40 的开发者工具](https://www.nocobase.com/cn/blog/github-open-source-developer-tools)
* [2025年GitHub Star增长最快的15个开源低代码项目](https://www.nocobase.com/cn/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [GitHub 上星星数量前 11 的开源 CRM 项目](https://www.nocobase.com/cn/blog/github-open-source-crm-projects)

## 写在开头

**企业现在实际使用哪些自托管 AI 方案？又是根据什么来选择的？**

在 Reddit 的 [r/OpenSourceeAI](https://www.reddit.com/r/OpenSourceeAI/comments/1uhl061/what_are_companies_actually_using_for_selfhosted/) 里，就有人讨论了这个问题。评论区提到了成本、数据隐私、模型性能和后续维护等因素。也有人指出，企业不一定需要自己部署模型，通过 API 调用模型，再将 AI 接入现有业务系统，同样是一种可行的方案。

![image-uhibfw.png](https://static-docs.nocobase.com/image-uhibfw.png)

实际上，不同企业对 AI 的需求也不一样。有些团队只需要统一的 AI 对话入口，有些希望 AI 能够检索内部文档、连接现有工具，也有些想借助 AI 构建 CRM、采购管理和工单等业务系统。

因此，这篇文章整理了 **10 个支持私有部署的企业 AI 平台及相关开源项目**，按照主要用途进行分类，介绍它们的核心能力、适用场景和许可证，帮助你找到更适合自己需求的工具。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个面向企业应用开发的开源平台，让 AI 参与业务系统的构建和持续改进。欢迎在 [GitHub](https://github.com/nocobase/nocobase) 上了解我们。

---

## 我们怎么挑选

GitHub 上有不少企业 AI 相关项目。这次我们更关注那些专注于具体应用场景、能够在企业环境中实际使用的工具，主要按照三个条件筛选：

- **代码公开，支持私有部署：** 可以在 GitHub 上查看代码，官方提供自托管方案。
- **有明确的企业应用场景：** 涵盖业务系统开发、流程自动化、Agent 开发、知识管理和模型运维等需求。
- **持续维护：** 近期仍有代码更新或版本发布，并提供相关文档。

## 快速对比


| 项目                                                         | 主要作用                                                            | GitHub Stars | 许可证（类型 / 主要限制）                             | 更适合                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------------- | -----------: | ----------------------------------------------------- | ----------------------------------------------- |
| [NocoBase](https://github.com/nocobase/nocobase)             | 借助 Coding Agent 开发业务系统，NocoBase 提供权限、工作流等基础能力 |        24.8k | NocoBase 自有许可，附加条款；Studio 等商业功能需授权  | 构建和长期维护 CRM、采购、工单等业务系统        |
| [Activepieces](https://github.com/activepieces/activepieces) | 可视化连接不同应用，通过工作流和 AI 自动执行任务                    |        23.7k | MIT（核心开源）；企业功能另需授权                     | 希望用较少代码实现跨工具自动化的团队            |
| [Windmill](https://github.com/windmill-labs/windmill)        | API、工作流和内部操作界面                                           |        17.5k | AGPLv3 / Apache-2.0；官方发行版包含专有功能和使用限制 | 需要编写代码、开发内部自动化工具的技术团队      |
| [Sim](https://github.com/simstudioai/sim)                    | 通过可视化方式构建、部署和编排 AI Agent                             |        29.4k | Apache-2.0                                            | 快速搭建并测试 AI Agent 工作流                  |
| [Mastra](https://github.com/mastra-ai/mastra)                | 基于 TypeScript 开发 Agent、工具调用和工作流                        |        28.0k | Apache-2.0（核心）；企业功能另有许可                  | 使用 JavaScript / TypeScript 开发 AI 应用的团队 |
| [MaxKB](https://github.com/1Panel-dev/MaxKB)                 | 基于企业知识库构建 AI 问答助手和 Agent                              |        23.2k | GPL-3.0；修改和分发需遵守相应条款                     | 快速部署企业内部知识问答助手                    |
| [RAGFlow](https://github.com/infiniflow/ragflow)             | 解析复杂文档，提供带引用来源的 RAG 检索问答                         |        94.0k | Apache-2.0                                            | 处理合同、手册、扫描件等复杂文档                |
| [LiteLLM](https://github.com/BerriAI/litellm)                | 统一模型 API，管理密钥、预算、路由和调用记录                        |          60k | 核心 MIT 许可；企业功能有单独授权                     | 多团队共用不同模型并管理调用成本                |
| [MLflow](https://github.com/mlflow/mlflow)                   | 追踪、评测 AI 应用，管理提示词和模型版本                            |        28.8k | Apache-2.0                                            | 需要模型评测、实验管理和版本控制的 AI 工程团队  |
| [Langfuse](https://github.com/langfuse/langfuse)             | 追踪 LLM 和 Agent 执行过程，分析质量、延迟与用量                    |        32.8k | MIT（核心）；`ee` 目录另有许可                        | 监控已上线的 AI 应用并持续优化效果              |

## 1. NocoBase：AI 驱动的企业业务系统开发平台

**项目信息**

- GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)
- GitHub Stars：24.8k
- 许可证：NocoBase 自有许可，基于 Apache-2.0 并包含附加条款；Studio 等商业功能需另行授权
- 部署方式：支持私有部署，应用代码和数据由企业自行管理
- 官网：[https://www.nocobase.com](https://www.nocobase.com)

### 简介

NocoBase 是一个面向企业业务系统的开源开发平台，可以借助 AI 构建和持续改进 CRM、采购管理、工单和 IT 资产管理等应用。它以 [NocoBase Core](https://www.nocobase.com/core/) 为应用底座，提供企业开发所需的通用能力，让 Coding Agent 可以专注于具体业务功能的实现。

此外，NocoBase 还提供用于多 Agent 协同开发的 [Studio](https://www.nocobase.com/studio/)，以及 [NocoCRM](https://www.nocobase.com/solution-crm/)、[NocoITAM](https://www.nocobase.com/solution-itam/) 等现成的 [Solutions](https://www.nocobase.com/solutions/)，支持企业从应用搭建到后续维护和持续迭代。

![NocoBase Studio 中的需求页面：Agent 正在处理供应商评分需求](https://static-docs.nocobase.com/studio-en-req-now-20261111-normal-2x.webp)

### 亮点能力

**1. 让 AI 专注于业务功能开发**

[NocoBase Core](https://www.nocobase.com/core/) 提供数据模型、角色权限、工作流、审批、文件管理等企业应用常用的基础能力，Coding Agent 可以直接在这些能力之上开发具体业务功能。业务代码与 Core 分开维护，既能减少重复开发，也方便后续增加功能、调整业务逻辑和升级底座；下图中的 NocoITAM 便是基于 NocoBase Core 搭建，底层基础能力直接使用 Core。

![image (1)-zrrhx7.png](https://static-docs.nocobase.com/image%20(1)-zrrhx7.png)

**2. 支持 AI 开发与业务协作**

支持使用 Claude Code、Codex 等 Coding Agent 根据业务需求开发和修改应用，也可以通过商业版 [Studio](https://www.nocobase.com/studio/) 组织多个 Agent 完成开发、测试和代码评审，由负责人验收并控制发布。应用上线后，还可以接入业务 Agent，在已有的角色权限和审批规则下查询数据、处理业务任务，减少日常重复操作。

![NocoBase Studio 的验收页面：负责人查看交付报告后决定合并或退回](https://static-docs.nocobase.com/studio-en-req-accept-20261111-normal-2x.webp)

**3. 提供现成应用并支持持续定制**

NocoBase [Solutions](https://www.nocobase.com/solutions/) 提供基于 Core 构建的 NocoCRM、NocoITAM 等现成业务应用，企业可以直接部署使用，也可以根据自身需求继续修改。Coding Agent 能够在已有应用的基础上增加模块、调整界面和业务流程，无需每次从零重新搭建系统。

### 使用场景与团队

NocoBase 适合希望借助 AI 构建和长期维护 CRM、采购、工单、IT 资产管理等业务系统的企业团队，以及为客户开发和交付应用的软件服务商。对于需要同时处理业务数据、角色权限、审批流程和跨部门协作的场景，NocoBase 提供了统一的应用基础，也支持系统随着业务变化持续扩展。

---

## 2. Activepieces：可视化 AI 工作流自动化

**项目信息**

- GitHub：[https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)
- GitHub Stars：23.7k
- 许可证：MIT（社区版）；企业功能需单独授权
- 部署方式：支持 Docker、Kubernetes 自部署及官方云服务
- 官网：[https://www.activepieces.com](https://www.activepieces.com)

### 简介

Activepieces 是一个开源的 AI 自动化平台，可以通过可视化界面连接不同应用，将数据同步、信息处理和通知等重复操作组合成自动化工作流。它提供大量预置集成组件，也支持 AI Agent、模型调用和 MCP，让团队能够在已有业务流程中加入 AI 能力。

Activepieces 的主要特点是搭建门槛较低，业务人员可以通过拖拽节点完成大部分配置，开发人员则可以通过代码扩展特殊功能。

![Activepieces 可视化工作流：触发器与动作节点](https://mintcdn.com/activepieces/iL5rAezyhfVokrkv/images/actions-and-triggers.png?fit=max&auto=format&n=iL5rAezyhfVokrkv&q=85&s=afd84918c34ec13e73ac8f938237fedc)

### 亮点能力

**1. 可视化连接不同业务工具**

通过拖拽节点连接 CRM、邮件、表格、数据库和协作工具，并设置触发条件、条件分支和执行步骤。团队可以将原本分散在不同系统中的操作串联起来，减少重复录入和人工处理。

**2. 在自动化流程中加入 AI Agent**

支持在工作流中调用大语言模型或 AI Agent，完成内容分类、信息提取、文本生成和工具调用等任务。对于需要人工判断的步骤，也可以设置审批或确认环节，让工作流在获得确认后继续执行。

![Activepieces 的 Agent 列表页面](https://mintcdn.com/activepieces/39O5zgDWjZRx93_N/resources/screenshots/agents-list.png?fit=max&auto=format&n=39O5zgDWjZRx93_N&q=85&s=5b147e109d7a347d0c5d281c60f3d18a)

**3. 自定义集成与 MCP 支持**

Activepieces 提供大量预置集成组件（Pieces），也允许开发人员使用 TypeScript 编写自定义组件，连接企业内部系统或特殊 API。它还支持 MCP，可以将部分工具能力提供给其他 AI 客户端调用，扩展自动化流程的使用范围。

![Activepieces AI 能力配置页面：网页搜索、抓取与知识库嵌入](https://mintcdn.com/activepieces/H0ldfKIBwECfz9DC/resources/screenshots/ai-center-capabilities.png?fit=max&auto=format&n=H0ldfKIBwECfz9DC&q=85&s=94bd73bb2cd6278b440faadbd5507595)

### 使用场景与团队

Activepieces 适合希望快速实现跨工具自动化的运营、市场、销售和 IT 团队，尤其适合已有多个业务系统、但不希望投入大量代码开发的企业。它的重点是连接现有工具和执行工作流，客户、订单等核心业务数据仍由相应系统管理。

---

## 3. Windmill：面向开发团队的自动化与内部工具平台

**项目信息**

- GitHub：[https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)
- GitHub Stars：17.5k
- 许可证：核心服务主要采用 AGPLv3，部分 SDK 采用 Apache-2.0；部分功能采用商业许可
- 部署方式：支持 Docker Compose、Kubernetes 自部署及官方云服务
- 官网：[https://www.windmill.dev](https://www.windmill.dev)

### 简介

Windmill 是一个以代码为核心的工作流和内部工具开发平台，可以将 Python、TypeScript、SQL 等脚本转换成 API、自动化任务或内部应用。开发人员可以直接使用已有代码，也可以通过可视化编辑器组合工作流，并为业务人员创建操作界面。它还提供 AI 辅助开发和模型集成能力，适合希望将内部脚本、自动化和 AI 功能统一管理的技术团队。与主要依靠拖拽节点的自动化工具相比，Windmill 更强调代码的灵活性。

### 亮点能力

**1. 将代码直接变成可执行任务**

支持 Python、TypeScript、SQL、Bash 等多种语言，可以将脚本发布为 API、定时任务或工作流步骤。Windmill 会根据脚本参数生成输入界面，并集中管理执行记录，让已有代码更容易被其他系统和团队成员使用。

![Windmill 脚本编辑器：编写 TypeScript 脚本并直接测试](https://raw.githubusercontent.com/windmill-labs/windmill/main/imgs/windmill-editor.png)

**2. 可视化工作流与 AI 集成**

可以将多个脚本、数据库查询和外部 API 组合成工作流，设置条件分支、并行执行、定时触发和错误处理规则。工作流也可以加入模型调用等 AI 步骤，在保留代码控制能力的同时处理文本分析、信息提取等任务。

![Windmill 工作流编辑器：含分支与审批步骤的流程](https://raw.githubusercontent.com/windmill-labs/windmill/main/imgs/windmill-flow.png)

**3. 构建内部业务操作界面**

Windmill 提供应用编辑器，可以基于脚本和数据源创建表单、数据表格、看板和操作按钮。业务人员可以通过界面查询数据或执行后台任务，不需要直接接触脚本，开发人员则可以继续维护底层代码。

![Windmill 应用编辑器：基于代码构建的内部表单应用](https://raw.githubusercontent.com/windmill-labs/windmill/main/imgs/windmill-builder.png)

### 使用场景与团队

Windmill 更适合拥有 Python、TypeScript 或 SQL 开发能力，希望集中管理内部脚本、数据处理和自动化任务的企业。它也适合需要快速开发内部操作工具的技术团队，尤其是已有代码逻辑需要复用的场景。

---

## 4. Sim：可视化 AI Agent 开发平台

**项目信息**

- GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)
- GitHub Stars：29.4k
- 许可证：Apache-2.0
- 部署方式：支持自托管、官方云服务及桌面客户端
- 官网：[https://www.sim.ai](https://www.sim.ai)

### 简介

Sim 是一个开源的 AI Agent 和工作流开发平台，支持通过可视化界面、自然语言和代码构建 AI 应用。它将模型、工具调用、知识库和数据连接集中在一个工作空间中，可以用来搭建从简单问答到多步骤执行的 Agent 工作流。

Sim 也提供测试、执行日志和部署管理能力，方便团队在同一个平台中完成 Agent 的开发与调整。对于希望快速验证 AI 应用想法的团队，可以减少从零搭建 Agent 基础框架的工作。

![Sim 平台界面：左侧对话，右侧可视化工作流编辑器](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-platform.png)

### 亮点能力

**1. 可视化构建 Agent 工作流**

通过连接模型、提示词、工具和条件判断等节点，可以定义 Agent 的处理步骤和执行逻辑。Sim 也支持使用自然语言辅助创建和调整工作流，让团队更方便地修改 Agent 行为，而不需要每次都手动编写代码。

**2. 连接模型、知识库和外部工具**

支持接入不同的大语言模型、数据库、知识库及第三方服务，让 Agent 能够读取数据、检索资料和调用外部工具。团队可以根据任务需要组合这些能力，让 Agent 处理多个步骤，而不局限于普通的聊天问答。

![Sim 中的知识库列表，供 Agent 检索](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-knowledge.png)

**3. 工作流测试与运行管理**

Sim 提供工作流测试、执行日志和运行监控，可以查看各个步骤的输入、输出及执行情况。开发人员能够据此判断问题出在模型响应、工具调用还是工作流配置，并在现有流程上继续修改。

![Sim 中的数据表：Agent 可查询的结构化数据](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-tables.png)

### 使用场景与团队

Sim 适合希望快速构建、测试和部署 AI Agent 的产品团队、创业团队和开发人员，尤其适合需要可视化编排多个 AI 任务的项目。它更关注 Agent 的开发与执行，复杂业务数据和企业应用管理通常需要结合其他系统。

---

## 5. Mastra：基于 TypeScript 的 AI Agent 开发框架

**项目信息**

- GitHub：[https://github.com/mastra-ai/mastra](https://github.com/mastra-ai/mastra)
- GitHub Stars：28.0k
- 许可证：Apache-2.0（核心框架）；企业功能另有许可
- 部署方式：基于 Node.js 和 TypeScript，可部署到自有服务器或云环境
- 官网：[https://mastra.ai](https://mastra.ai)

### 简介

Mastra 是一个开源的 TypeScript AI 开发框架，用于在现有应用中构建 Agent、工具调用和复杂工作流。它提供记忆、评测、运行追踪等能力，开发人员可以通过代码定义 Agent 的行为，并将其集成到已有产品或服务中。他可以让 AI 功能直接成为应用代码的一部分。对于已经使用 JavaScript 或 TypeScript 技术栈的团队，可以继续沿用熟悉的开发、测试和部署方式。

![Mastra Studio 中的知识图谱视图](https://raw.githubusercontent.com/mastra-ai/mastra/main/docs/static/img/knowledge/studio-tree-and-graph.png)

### 亮点能力

**1. 使用 TypeScript 开发 AI Agent**

开发人员可以通过 TypeScript 定义 Agent 的模型、指令和可调用工具，并直接连接现有应用的 API 和业务逻辑。Agent 的代码可以与其他项目代码一起进行类型检查、测试和版本管理，方便长期维护。

**2. 工作流编排与 MCP 集成**

Mastra 支持将多个处理步骤组织成工作流，包括顺序执行、条件分支以及需要明确控制的任务流程。它也支持 MCP，可以接入外部工具和服务，让 Agent 在已有系统中读取信息或执行操作。

![Mastra Studio 中将生产环境追踪记录保存为数据集条目](https://raw.githubusercontent.com/mastra-ai/mastra/main/docs/static/img/guides/build-an-eval-loop/production-trace-ground-truth.png)

**3. Agent 记忆、追踪与评测**

提供 Agent 记忆能力，用于管理对话和任务所需的上下文，并支持追踪模型调用与工具执行过程。开发人员还可以通过评测工具比较不同提示词、模型和 Agent 配置的效果，为后续调整提供依据。

![Mastra Studio 中的实验对比：比较不同模型下 Agent 的输出与评分](https://raw.githubusercontent.com/mastra-ai/mastra/main/docs/static/img/guides/build-an-eval-loop/model-experiment-comparison.png)

### 使用场景与团队

Mastra 适合使用 JavaScript 或 TypeScript 开发产品，并希望在现有应用中加入 AI Agent 的技术团队。与 Sim 等可视化平台相比，它更适合需要深度定制 Agent 逻辑、复用现有代码和自行管理部署流程的开发者。

---

## 6. MaxKB：企业知识库与 AI 智能体平台

**项目信息**

- GitHub：[https://github.com/1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB)
- GitHub Stars：23.2k
- 许可证：GPL-3.0
- 部署方式：支持 Docker 自部署及离线安装
- 官网：[https://maxkb.cn](https://maxkb.cn)

### 简介

MaxKB 是一个开源的企业级 AI 智能体平台，可以将企业文档整理成知识库，并结合大语言模型构建问答助手和 Agent。它提供文档管理、知识检索、工作流和应用集成等能力，让团队不需要从零开发 RAG 系统，就能建立基于内部资料的 AI 应用。

MaxKB 支持连接不同的模型服务，也提供私有部署方式，适合希望自主管理企业知识和 AI 应用的团队。

### 亮点能力

**1. 企业文档与知识库管理**

支持导入不同类型的企业文档，并完成内容分段、向量化和检索配置，让 AI 根据知识库中的资料回答问题。团队可以管理文档内容和检索设置，持续更新知识库，减少员工在多个文件中反复查找信息的时间。

![MaxKB 创建知识库：选择嵌入模型与文档类型](https://docs.maxkb.pro/img/quick_start/creating_a_kb.png)

**2. AI 智能体与工作流开发**

除了知识问答，MaxKB 还支持通过可视化工作流连接知识检索、模型调用和外部工具，构建能够执行多个步骤的 AI 智能体。团队可以根据需求调整任务流程，让 AI 在检索资料之后继续完成信息整理、分析或其他操作。

![MaxKB 可视化工作流：知识检索、条件分支与 AI 对话节点](https://maxkb.pro/images/overview.png)

**3. 多模型接入与应用集成**

支持连接不同的公有云模型和私有化部署模型，企业可以根据数据要求、使用成本和模型效果选择方案。构建好的 AI 应用还可以通过嵌入或 API 方式接入网站和内部系统，让已有业务工具使用知识问答能力。

![MaxKB 添加模型：接入 OpenAI 等模型供应商](https://docs.maxkb.pro/img/quick_start/adding_a_model.png)

### 使用场景与团队

MaxKB 适合需要建立企业内部知识库、产品问答、客服助手和技术支持助手的团队，尤其适合希望通过可视化配置快速部署 AI 知识应用的企业。它比较侧重知识库与问答应用的完整搭建过程，而不是单独提供文档解析组件。

---

## 7. RAGFlow：面向复杂文档的 RAG 引擎

**项目信息**

- GitHub：[https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)
- GitHub Stars：94.0k
- 许可证：Apache-2.0
- 部署方式：支持 Docker Compose 自部署
- 官网：[https://ragflow.io](https://ragflow.io)

### 简介

RAGFlow 是一个开源的 RAG 引擎，重点解决企业复杂文档的解析、检索和问答问题。它可以处理 PDF、扫描件、表格和专业手册等资料，并通过文档理解和检索技术，让 AI 的回答能够关联到具体来源。

RAGFlow 也支持 Agent 和可视化工作流，可以将知识检索与模型调用、外部工具组合起来。相比普通的文档问答工具，它更强调文档解析质量、检索准确性和回答的可追溯性。

### 亮点能力

**1. 复杂文档解析与处理**

支持 PDF、Word、Excel、图片和扫描件等多种格式，可以解析文档中的文字、表格及版面结构。团队可以查看和调整解析后的分段结果，减少复杂文档在提取过程中出现的信息遗漏或结构错误。

![RAGFlow 文档解析结果：PDF 中的表格被识别为独立分段](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/file_chunks.jpg)

**2. 混合检索与可追溯引用**

结合向量检索、关键词检索和重排序等方式，帮助系统找到与问题更相关的文档内容。AI 回答可以附带对应的引用来源，方便用户返回原始资料核对结果，尤其适合对信息准确性要求较高的场景。

![RAGFlow 聊天助手设置：选择模型并关联数据集](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/configure_chat.jpg)

**3. Agent 与工作流集成**

RAGFlow 支持在可视化工作流中组合知识库、模型和工具调用，让 Agent 完成多步骤检索与分析任务。它也提供 API，可以将文档检索和问答能力接入现有业务系统，而不需要所有操作都在 RAGFlow 中完成。

![RAGFlow 的 Agent 模板列表](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/agent_template_list.jpg)

### 使用场景与团队

RAGFlow 适合法务、质量管理、制造业和技术支持等需要处理大量复杂文档的企业，尤其适合合同、维修手册、扫描件和专业技术资料的检索问答。与 MaxKB 相比，它更值得关注的是文档解析和检索能力，选型时可以优先测试实际文档的处理效果。

---

## 8. LiteLLM：统一管理模型调用的 AI 网关

**项目信息**

- GitHub：[https://github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)
- GitHub Stars： 60k
- 许可证：MIT（核心）；企业功能另有许可
- 部署方式：提供 Python SDK 和可自托管的 Proxy Server
- 官网：[https://www.litellm.ai](https://www.litellm.ai)

### 简介

LiteLLM 是一个开源的 LLM 网关，可以通过统一的 API 接口连接不同模型供应商，让多个 AI 应用使用同一套模型调用方式。它支持模型路由、虚拟密钥、预算管理和用量统计，帮助企业集中管理不同模型服务。他可以作为 Python SDK 直接接入应用，也可以部署为独立的代理服务。对于同时使用多家模型供应商的团队，它可以减少接口适配和密钥管理方面的重复工作。

### 亮点能力

**1. 统一模型 API 与路由**

LiteLLM 将不同模型供应商的调用方式统一为兼容 OpenAI 的接口，开发人员可以通过同一套 API 访问多种模型。更换或增加模型时，主要通过网关配置管理供应商与路由策略，减少上层应用的改动。

![LiteLLM 管理后台：统一管理多家供应商的模型](https://docs.litellm.ai/assets/ideal-img/ui_tour_models.a05de57.1280.png)

**2. 密钥、预算和成本管理**

支持为不同团队、用户或应用分配虚拟密钥，不必直接共享模型供应商的真实 API Key。管理员可以配置预算限制、查看调用量和费用统计，控制不同项目的模型支出；预算执行需要正确配置数据库等依赖服务。

![LiteLLM 虚拟密钥页面：按团队分配密钥并设置预算](https://docs.litellm.ai/assets/ideal-img/ui_tour_keys.c36ccf4.1280.png)

**3. 调用稳定性与运行监控**

提供重试、备用模型、负载均衡和缓存等功能，可以在模型服务发生错误时按照配置调整请求处理方式。LiteLLM 也支持连接外部监控和日志工具，帮助团队集中检查模型调用、故障和性能表现。

![LiteLLM 用量页面：请求数、费用与 Token 统计](https://docs.litellm.ai/assets/ideal-img/ui_tour_usage.859eee9.1280.png)

### 使用场景与团队

LiteLLM 适合同时使用多家模型供应商，或者有多个 AI 应用需要统一管理模型访问、密钥和预算的企业技术团队。它主要负责模型调用和管理，可以与现有 Agent 平台、业务系统及 AI 应用开发工具配合使用。

---

## 9. MLflow：AI 应用评测与模型生命周期管理

**项目信息**

- GitHub：[https://github.com/mlflow/mlflow](https://github.com/mlflow/mlflow)
- GitHub Stars：28.8k
- 许可证：Apache-2.0
- 部署方式：支持自行部署 MLflow Tracking Server
- 官网：[https://mlflow.org](https://mlflow.org)

### 简介

MLflow 是一个开源的 AI 工程平台，可以帮助开发团队记录实验、追踪 AI 应用、评测模型并管理模型版本。它既覆盖大语言模型和 Agent 的开发与评测，也支持传统机器学习和深度学习项目的实验跟踪、模型注册和部署管理。

MLflow 的重点是让模型与 AI 应用的开发过程有记录、可比较，并能持续检查更新后的效果，适合需要长期维护多个 AI 项目的团队。

### 亮点能力

**1. AI Agent 执行追踪**

MLflow 可以记录模型请求、工具调用、执行结果和相关运行信息，帮助开发人员查看 Agent 完成任务的具体过程。它基于 OpenTelemetry 提供追踪能力，并支持多种 AI 框架，方便统一分析不同应用中的执行问题。

![MLflow 追踪视图：查看 Agent 执行过程中的各个步骤](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-tracing.png)

**2. 模型、提示词和 Agent 评测**

支持内置及自定义评测指标，可以通过测试数据比较不同模型、提示词和 Agent 配置的表现。开发团队还可以保留提示词版本、测试记录和评测结果，在模型或应用更新前检查质量变化。

![MLflow GenAI 评测：按评测指标查看每条记录的通过情况](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-llm-eval.png)

**3. 模型版本与部署管理**

提供模型注册、实验跟踪和版本管理能力，将模型版本与训练、评测记录关联起来。MLflow 也提供 AI Gateway 和 Agent Server 等能力，支持模型访问管理和 Agent 部署，方便团队管理从开发到运行的过程。

![MLflow 提示词版本对比](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-prompt.png)

### 使用场景与团队

MLflow 适合拥有数据科学、机器学习或 AI 工程团队，需要持续进行模型评测、实验管理和版本控制的企业。对于同时开发传统机器学习模型和 LLM 应用的团队，它可以将不同类型的 AI 工程工作集中管理。

---

## 10. Langfuse：LLM 与 Agent 运行监控平台

**项目信息**

- GitHub：[https://github.com/langfuse/langfuse](https://github.com/langfuse/langfuse)
- GitHub Stars：32.8k
- 许可证：MIT（核心）；部分企业功能另需授权
- 部署方式：支持 Docker Compose、Kubernetes 自部署及 Langfuse Cloud
- 官网：[https://langfuse.com](https://langfuse.com)

### 简介

Langfuse 是一个开源的 LLM 应用监控与评测平台，主要用于追踪大语言模型和 Agent 的运行过程，分析回答质量、响应时间及调用成本。它可以接入已有的 AI 应用，帮助开发团队了解模型实际处理了哪些任务，以及问题出现在什么步骤。

Langfuse 还提供评测、提示词版本管理和使用情况分析能力，适合已经上线 AI 应用、需要持续观察和优化效果的团队。

### 亮点能力

**1. LLM 与 Agent 执行追踪**

Langfuse 可以记录提示词、模型响应、工具调用、执行时间和 Token 用量，并将相关步骤关联成完整的执行记录。开发人员可以通过追踪信息定位回答错误、调用失败或响应缓慢的原因，而不只查看最终输出。

![Langfuse 追踪页面：查看一次执行中各步骤的输入与输出](https://langfuse.com/images/docs/tracing-overview.png)

**2. AI 应用评测与实验**

支持测试数据集、实验和评测功能，可以结合用户反馈、人工评分或自动评测结果，比较不同模型和提示词的效果。团队可以在更新 AI 应用前进行测试，也可以根据真实使用记录持续发现质量问题。

![Langfuse 评分分析：比较不同评测器的得分分布与趋势](https://langfuse.com/images/docs/score-analytics-full-dashboard.png)

**3. 提示词版本与成本管理**

Langfuse 提供集中式提示词管理，可以保存不同版本，并将提示词与实际运行记录关联，方便比较修改前后的效果。平台也提供调用量、延迟和费用分析，帮助团队了解不同模型或任务的资源消耗。

![Langfuse 提示词管理：版本列表与生产环境标签](https://langfuse.com/images/docs/prompt-management.png)

### 使用场景与团队

Langfuse 适合已经部署 AI Agent、客服助手或其他 LLM 应用，需要持续监控回答质量、运行表现和调用成本的开发团队。与覆盖传统机器学习和模型生命周期管理的 MLflow 相比，它更集中于 LLM 应用的可观测性、评测和提示词优化。

## 写在最后

我们之前也介绍过不少热门的开源 AI 平台，其中一些已经拥有十几万甚至几十万 GitHub Stars，功能也越来越丰富。但这次整理的 10 个项目，让我们看到了另一种选择。有些项目的知名度没有那么高，功能也未必覆盖得那么全面，却在企业业务系统开发、流程自动化、知识检索或 AI 应用监控等具体场景中，有着自己的优势。

**GitHub Stars 可以作为参考，但真正选工具时，还是得回到企业自己的需求。一个项目只要能把需要的功能做好，后续也方便使用和维护，就值得花时间了解。**

⭐ 如果这篇文章对你有帮助，欢迎分享给正在探索企业 AI 应用的朋友。

💡 延伸阅读：

- [10 个适合企业使用的开源 AI Agent 平台：从自动化到内部应用](https://www.nocobase.com/zh-CN/blog/open-source-ai-agent-platforms-for-business/)
- [企业内部工具必备：8 大开源 AI Agent 平台对比](https://www.nocobase.com/zh-CN/blog/8-open-source-ai-agent-platforms-for-internal-tools/)
- [10 个适合企业软件开发的开源 AI 无代码工具](https://www.nocobase.com/zh-CN/blog/open-source-ai-no-code-tools-enterprise-software-development/)
- [企业自托管工具推荐：数据完全掌控的 20+ 款软件](https://www.nocobase.com/zh-CN/blog/20-best-self-hosted-tools-for-enterprises/)
- [企业如何在现有系统中引入 AI？](https://www.nocobase.com/zh-CN/blog/add-ai-to-existing-enterprise-systems-with-nocobase/)
- [如何设计 RBAC（基于角色的访问控制）系统](https://www.nocobase.com/zh-CN/blog/how-to-design-rbac-role-based-access-control-system/)
- [GitHub Star 数量前 12 的 AI 工作流项目](https://www.nocobase.com/zh-CN/blog/top-12-ai-workflows-projects-with-the-most-github-stars/)
- [GitHub 上 Stars 最多的 8 个开源 AI Assistant 工具](https://www.nocobase.com/zh-CN/blog/top-open-source-ai-assistant-tools-github-stars/)
- [NocoBase 3 文档：一个需求怎样完成](https://docs.nocobase.com/zh-CN/studio/intro/how-a-request-gets-done/)
- [NocoBase Core 文档](https://docs.nocobase.com/zh-CN/core)

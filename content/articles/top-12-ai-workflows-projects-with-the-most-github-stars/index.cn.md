提到工作流和自动化，无论是开源的 [n8n](https://n8n.io/) 、[Dify](https://dify.ai/zh)，还是一些较为知名的商业化产品，例如 [Zapier](https://zapier.com/)、[Make](https://www.make.com/en)，你可能都不陌生。不过，在这一期 GitHub AI 项目系列盘点中，我们将视角放回到 GitHub 的 [workflow](https://github.com/topics/workflows) 话题本身，发现另一些值得关注的项目。在这些 Star 数排名靠前的工具中，有些规模并不算大，但在能力设计上更加聚焦，持续围绕工作流与 AI 的结合进行打磨。本文重新梳理了这部分与 AI 结合较为紧密的工作流项目，基于它们各自的功能亮点与典型使用场景展开。希望能帮助你更直观地理解，这一轮 AI 加入之后，工作流工具究竟在哪些方面带来了真实的改进。

基于项目定位和能力侧重点的差异，本文在梳理过程中将这些 AI 工作流项目大致分为三类进行介绍：

* 业务系统型平台：NocoBase、Appsmith、OpenProject
* 自动化工作流引擎：Continue、Mastra、wshobson / agents、Activepieces、Trigger.dev
* 工作流基础设施 & 场景型工具：Temporal、Conductor、Dagger、UVDesk

💡 阅读更多：[构建工作流自动化的  5  个最佳工具 ](https://www.nocobase.com/cn/blog/workflow-automation-tools)

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

## **业务系统型平台**

已经将 AI、工作流与业务系统整合在同一体系中，具备直接落地真实业务场景的能力。

### **NocoBase**

![NocoBase1.PNG](https://static-docs.nocobase.com/NocoBase1-jw0ize.PNG)

NocoBase 是一个开源、自托管的 AI 无代码/低代码业务系统平台，它以数据模型驱动、插件化架构为核心，支持快速构建和自定义复杂业务系统，同时通过内嵌 AI 功能使系统具备智能协作能力。

GitHub Stars: 20.9k

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

官网: [https://www.nocobase.com/cn/](https://www.nocobase.com/cn/)

**AI 功能亮点**

* AI 员工作为系统内协作角色参与业务执行 NocoBase 的 AI 能力以 AI 员工的形式存在。这些 AI 员工可以读取系统中的数据模型、界面配置和业务上下文，并在用户操作或工作流触发时参与具体任务执行。它们并非仅用于对话，而是可以作为系统的一部分，与用户共同完成业务操作。
* AI 员工深度集成至工作流节点 NocoBase 的工作流系统提供了与 AI 员工相关的专用节点，包括文本对话、多模态对话以及结构化输出节点。通过这些节点，AI 可以在工作流执行过程中读取上下文信息、生成结构化结果或参与条件判断，使工作流不再局限于固定规则，而具备一定的智能处理能力。

![NocoBase2.PNG](https://static-docs.nocobase.com/NocoBase2-m357m3.PNG)

**可以用来做什么？**

* 构建具备智能协作能力的内部业务系统

NocoBase 适合用于构建 CRM、审批系统、资产管理等内部业务系统。在这些系统中，AI 员工以系统内角色的形式存在，能够理解业务数据结构和页面上下文，协助完成信息整理、字段补全或内容生成等操作，从而减轻人工在系统操作层面的重复性工作负担。

💡 阅读更多：[GitHub 上星星数量前 10 的 AI CRM 开源项目](https://www.nocobase.com/cn/blog/top-10-open-source-ai-crm-projects-with-the-most-github-stars)

![NocoBase3.PNG](https://static-docs.nocobase.com/NocoBase3-x5t14a.PNG)

* 在流程关键节点引入 AI 执行与判断能力

在业务流程运行过程中，NocoBase 的工作流可以在特定节点引入 AI 员工参与执行，例如对文本内容进行理解与校验、生成结构化输出结果，或在流程推进前提供辅助判断。这种方式并不改变原有流程结构，而是在关键步骤增强流程的处理能力，使自动化流程从规则执行过渡到具备一定智能参与。

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-l7s91h.png)

* 基于知识库实现上下文感知的流程执行

借助官方提供的知识库与向量数据库能力，AI 员工可以在工作流执行过程中检索已有文档和业务数据，并基于检索结果生成输出内容。这一能力适用于需要结合历史资料、制度文档或业务知识执行流程的场景，使系统在自动化运行时具备更强的上下文理解和信息整合能力。

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-ib2brm.png)

### **Appsmith**

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-bvnvgb.png)

Appsmith 是一款开源的低代码应用平台，旨在帮助开发者和团队快速构建内部工具、业务应用以及自动化流程界面。在 AI 方向，Appsmith 通过集成多种大模型服务以及 Appsmith AI 功能，开发者能够将 AI 能力融入应用逻辑和工作流执行中，从而提升内部流程智能化水平。

💡 阅读更多：[GitHub Star 数量前 5 的开源 AI 内部工具 ](https://www.nocobase.com/cn/blog/top-5-open-source-ai-internal-tools-on-github)

GitHub Stars: 38.7k

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

官网: [https://www.appsmith.com](https://www.appsmith.com)

**AI 功能亮点**

* 原生集成 AI 查询与模型交互 Appsmith 提供官方支持的 Appsmith AI 功能，可在应用内部直接发起文本生成、分类、摘要、实体抽取以及图像分类等操作，并支持通过上传文件为模型提供上下文，从而让应用具备智能内容处理能力。
* 支持构建智能助手与可编排工作逻辑 通过 Appsmith Agents，用户可以构建基于业务数据和后台逻辑的智能助理。这些智能助理能够根据用户查询调用后台数据或自动触发流程，从而实现“AI 驱动的工作流行为”。

**可以用来做什么？**

* 构建智能业务流程自动化面板 在企业内部，客户服务或运营团队可以利用 Appsmith 构建自动化面板。例如结合 Appsmith Workflows 和 AI 能力，实现自动发送邮件通知、更新数据状态和在后台同步异构系统的数据，提高业务执行效率。
* 增强现有应用的智能分析能力 将 LLM 能力融入自定义应用中后，可以实现对长文本的摘要、分类、语义检索等功能。例如将 Appsmith 内收集的反馈信息传入模型进行分析，从而自动生成可操作的业务洞察。

### **OpenProject**

![OpenProject.png](https://static-docs.nocobase.com/OpenProject-9rg5c8.png)

OpenProject 是一款开源的 Web 项目管理软件，支持团队从项目规划、任务管理、进度跟踪到协作沟通的全生命周期管理。它既支持传统项目管理方法，也支持敏捷与混合方法，通过工作包、看板和甘特图等视图帮助团队清晰组织工作流程。

GitHub Stars: 13.4k

GitHub: [https://github.com/opf/openproject](https://github.com/opf/openproject)

官网: [https://www.openproject.org](https://www.openproject.org)

**AI 功能亮点**

* AI 助力项目管理建议与分析 官方展示了利用大型语言模型为用户提供项目管理建议的能力。这个功能基于对项目数据的理解，向用户展示改善项目执行的信息提示，使团队可在早期识别风险并优化流程。该能力正在开发与测试中，强调在自动化常规任务之余提升工作流程效率。

**可以用来做什么？**

* 提升日常项目管理效率 在大型项目环境中，OpenProject 可以将复杂的工作包、任务依赖和团队成员分工可视化，使整个项目流程更加透明。配合 AI 管理建议功能，团队能够更加直观地掌握项目执行状态，并针对潜在风险调整计划。
* 智能化生成与完善文档内容 通过自动状态报告、任务摘要和文本分析等 AI 功能，用户在处理项目文档、会议记录和计划总结时能够节省大量重复性劳作，让人工编辑过程更聚焦于内容质量提升。

## **自动化工作流引擎**

以 Agent 或流程执行为核心，更偏向框架、引擎或开发者工具，需要与现有系统结合使用。

### **Continue**

![Continue.png](https://static-docs.nocobase.com/Continue-xf8ep9.png)

Continue 是一个开源的 AI 编程助手项目，定位于开发者日常工作流中的智能协作工具。它以编辑器为核心使用场景，通过深度集成代码上下文、项目结构和历史修改记录，使 AI 能够在编码、理解代码和执行多步任务时更贴近真实开发流程。

GitHub Stars: 30.5k

GitHub: [https://github.com/continuedev/continue](https://github.com/continuedev/continue)

官网: [https://continue.dev](https://continue.dev)

**AI 功能亮点**

* 基于代码上下文的持续智能协作 Continue 的核心能力在于对当前代码仓库的深度理解。AI 可以读取文件结构、函数定义和上下游调用关系，在此基础上生成代码建议或执行修改任务，使 AI 不再脱离实际开发上下文。
* 多步骤任务执行能力 官方文档中明确强调，Continue 并非只用于生成单段代码，而是可以在用户指令下执行一系列连续操作，例如分析问题、修改多个文件并给出结果说明。这种能力使其更接近一种嵌入开发流程中的智能工作流执行者。

**可以用来做什么？**

* 提升日常开发工作流效率 在实际开发过程中，Continue 可以协助完成代码补全、重构建议和逻辑解释等任务，减少开发者在文档查阅和上下文切换上的时间成本，使编码流程更加连贯。
* 辅助复杂改动和问题排查 当项目中需要进行跨文件调整或排查潜在问题时，Continue 可以基于整体代码结构提供修改建议，帮助开发者更高效地完成复杂变更。这种能力使 AI 成为开发工作流中的一部分，而不是孤立的工具。

### **Mastra**

![Mastra.png](https://static-docs.nocobase.com/Mastra-231hhv.png)

Mastra 是一个开源的 TypeScript 框架，用于构建具有智能能力的应用与代理。它提供了构建多步骤工作流、管理上下文和记忆、集成大型语言模型以及构建智能代理的基础设施，使开发者可以用统一的方式定义和编排复杂的 AI 驱动流程。

GitHub Stars: 19k

GitHub: [https://github.com/mastra-ai/mastra](https://github.com/mastra-ai/mastra)

官网: [https://mastra.ai](https://mastra.ai)

**AI 功能亮点**

* 长期上下文管理与记忆能力 Mastra 为智能代理提供对上下文的持久管理，使得工作流中的 AI 操作可以记住历史信息，支持更连贯的多步骤执行和更复杂的任务重用。这种记忆能力是实现长时 AI 工作流不可或缺的部分。

**可以用来做什么？**

* 实现带上下文保持的多步智能交互 在需要持续理解上下文的工作流场景中，Mastra 能让智能代理在执行多步任务时持续追踪先前状态。例如，在知识检索与整合流程中，工作流可以先从数据源获取信息，然后让代理基于已有记忆执行进一步的生成和总结任务。

### **wshobson agents**

![wshobson agents.png](https://static-docs.nocobase.com/wshobson%20agents-mahvoo.png)

wshobson agents 是一个开源的 AI Agent 扩展与插件集合项目，目标是为 AI Agent 提供可复用的工具能力与任务组件。该项目并不试图构建完整的平台或执行引擎，而是通过一组标准化的 Agent 组件，帮助开发者在既有的 AI Agent 或工作流体系中，快速扩展可执行能力，使 Agent 能够完成更具体、更结构化的任务。

GitHub Stars: 23.4k

GitHub: [https://github.com/wshobson/agents](https://github.com/wshobson/agents)

官网: [https://sethhobson.com/](https://sethhobson.com/)

**AI 功能亮点**

* 面向 Agent 的插件化工具体系 官方仓库中提供了多种可供 Agent 使用的工具模块，用于执行具体任务，例如信息处理、外部服务调用或任务辅助。这种设计使 Agent 的能力可以通过组合插件进行扩展，而不需要反复实现底层逻辑。

**可以用来做什么？**

* 为 AI 工作流补充可执行能力模块 在已有的 AI 工作流或 Agent 编排体系中，可以引入 wshobson agents 提供的工具组件，让 Agent 在特定步骤中执行明确任务，例如数据处理或外部系统交互，从而增强整体流程的可操作性。
* 构建可组合的 Agent 执行流程 通过将多个 Agent 工具组合使用，开发者可以设计出结构化的执行流程，使 AI 在多步骤任务中具备更稳定的行为模式。这种方式适合用于需要一定确定性和可控性的 AI 自动化场景。

### **Activepieces**

![Activepieces.png](https://static-docs.nocobase.com/Activepieces-lmwl57.png)

Activepieces 是一款开源的自动化流程平台，旨在帮助团队通过可视化的工作流构建与执行功能，在不同系统和服务之间自动连接与协作。随着平台的演进，Activepieces 也引入了 AI 能力，为工作流提供智能化处理与 Agent 功能，从而实现更复杂的自动化逻辑。

GitHub Stars: 20k

GitHub: [https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

官网: [https://www.activepieces.com](https://www.activepieces.com)

**AI 功能亮点**

* 内置 AI Agent 功能提升流程智能化 Activepieces 提供内置的 AI Agent 功能，这些智能实体可被嵌入工作流中，并根据触发条件或上下文执行任务。这意味着工作流不仅能够按照固定规则运行，还能够在关键步骤中由 AI 进行语言理解、判断和下一步决策，使流程在面对非结构化信息时更灵活。

💡 阅读更多：[7 款替代 Zapier 的开源工作流工具推荐](https://www.nocobase.com/cn/blog/zapier-open-source-alternatives)

**可以用来做什么？**

* 构建带智能决策的自动化工作流 在日常业务自动化场景中，Activepieces 不仅支持传统的触发器与动作设计，还可以将 AI Agent 集成到流程中。通过定义触发事件和步骤逻辑，用户可以让 Agent 在必要时分析数据、理解文本意图或作出决策，从而将人工干预降到最低。这样的流程适用于客服自动化、邮件智能处理等场景。
* 扩展跨系统自动化流程的能力 Activepieces 的生态中包含许多预构建的集成组件，可以将不同服务如日历、文档服务、消息平台与 AI 能力组合起来，使业务自动化流程既能执行规则性任务，又能在流程中结合 AI 分析或内容生成能力，从而提高效率并减少重复性工作。

### **Trigger.dev**

![Trigger.png](https://static-docs.nocobase.com/Trigger.dev-ppvc62.png)

Trigger.dev 是一个开源的平台，用于编写和运行AI 工作流与后台任务，目标是让开发者可以使用标准的异步代码来构建可靠、可伸缩且持久的工作流。它不仅支持常规的工作流任务，还提供与 AI 相关的能力，使得长时间运行的 AI 任务、复杂的任务队列和智能代理能够稳定运行。

GitHub Stars: 13.1k

GitHub: [https://github.com/triggerdotdev/trigger.dev](https://github.com/triggerdotdev/trigger.dev)

官网: [https://trigger.dev](https://trigger.dev)

**AI 功能亮点**

* 支持构建持久、生产级 AI 工作流 Trigger.dev 的官方定位明确指出它是一个用于构建 AI 工作流和 AI 代理的平台。它允许开发者用标准的异步代码来定义任务，并支持无超时执行、队列管理、自动重试和任务可观测性等，这些特性让长时间运行的 AI 任务成为可能，同时也为构建 AI Agent 提供了基础设施支持。

**可以用来做什么？**

* 执行长期运行的 AI 任务 在一些需要长时间处理的 AI 使用场景中，例如图片生成、视频处理、语义分析等，Trigger.dev 可以帮助开发者在后台执行这些任务而不会因超时失败。它的任务管理、队列控制及自动重试机制使得这些复杂的 AI 操作可以更可靠地完成。

## **工作流基础设施 & 场景型工具**

为流程的稳定运行或特定业务场景提供支持，更多承担底层能力或单一场景补充的角色。

### **Temporal**

![Temporal.png](https://static-docs.nocobase.com/Temporal-9nl4ir.png)

Temporal 是一个开源的分布式工作流编排平台，主要用于运行持久化和可靠的业务流程代码。开发者可以使用熟悉的编程语言在其 SDK 中定义工作流逻辑，使得流程能够跨服务、跨节点稳定运行并自动处理失败与恢复。

GitHub Stars: 17.2k

GitHub: [https://github.com/temporalio/temporal](https://github.com/temporalio/temporal)

官网: [https://temporal.io](https://temporal.io)

**AI 功能亮点**

* 为 AI Agent 提供持久化执行基础 Temporal 会将工作流的执行状态记录为事件历史，即使在节点故障或服务中断的情况下，流程也可以从已确认的状态继续运行。这种执行模型非常适合需要长时间运行的 AI Agent 场景，在多次模型调用或工具操作过程中，任务进度和上下文都能够被持续保存，用于支撑复杂的 AI 驱动流程。

**可以用来做什么？**

* 支撑复杂、长时间运行的 AI 工作流 在需要多次调用模型并执行多个步骤的智能流程中，Temporal 常用于管理任务顺序和执行状态。例如在 AI Agent 场景下，可以将模型推理和工具调用拆分为不同的活动步骤，由工作流统一调度和恢复，使流程在出现异常时仍然可以继续推进。
* 作为 AI 工作流的底层执行基础 在构建可靠、可扩展的自动化流程时，例如多步骤的数据分析流程或模型训练与评估流水线，Temporal 的状态持久化和重试机制被用来保障每一步流程的连续执行。基于这些特性，Temporal 经常出现在生产级后台工作流体系中，用于承载包含 AI 服务调用在内的复杂流程逻辑。

### Conductor

![Conductor.png](https://static-docs.nocobase.com/Conductor-5cw1xs.png)

Conductor 是一个开源的微服务工作流编排引擎，最初由 Netflix 开源，用于在分布式系统中协调和管理复杂的业务流程。它通过将流程定义为可执行的工作流，统一调度多个任务与服务调用，帮助团队在高并发和高复杂度场景下保持流程的可控性与可恢复性。

GitHub Stars: 31.7k

GitHub: [https://github.com/conductor-oss/conductor](https://github.com/conductor-oss/conductor)

官网:  [https://conductor-oss.org/](https://conductor-oss.org/)

**AI 功能亮点**

* 作为 AI 工作流的稳定编排与控制层 官方文档明确将 Conductor 定位为通用的工作流编排引擎，而非特定领域工具。在 AI 场景中，模型调用、推理服务、数据处理等步骤通常被封装为独立任务，由 Conductor 负责调度顺序 状态管理 失败重试与补偿逻辑，从而为 AI 驱动流程提供可靠的执行保障。

**可以用来做什么？**

* 作为 AI 服务与业务系统之间的中间层 Conductor 常被用于连接业务系统与后端服务。在引入 AI 能力后，它可以作为中间协调层，将 AI 推理步骤嵌入原有业务流程中，而无需对业务系统做大规模重构，使 AI 能力逐步融入既有自动化体系。

### Dagger

![Dagger.png](https://static-docs.nocobase.com/Dagger-wxcy12.png)

Dagger 是一个开源的工作流引擎，最初面向持续集成与持续交付场景设计，核心理念是将工作流定义为可组合的代码模块。随着使用场景的扩展，Dagger 逐渐被用于承载数据处理和 AI 相关任务，成为工程型工作流与 AI 管道的重要基础工具。

GitHub Stars: 15.2k

GitHub: [https://github.com/dagger/dagger](https://github.com/dagger/dagger)

官网: [https://dagger.io](https://dagger.io)

**AI 功能亮点**

* 以代码形式编排多步骤 AI 工作流 Dagger 允许将复杂流程拆分为多个可组合的任务模块。对于包含 AI 调用的流程，可以将数据准备模型运行结果处理等步骤明确编排，使整个 AI 工作流更清晰可维护且易于扩展。

**可以用来做什么？**

* 作为 AI 任务自动化的基础工具 在更广义的自动化场景中，Dagger 可作为底层执行工具，与其他系统配合使用，将 AI 推理或数据处理任务纳入既有工程流程中，逐步实现自动化和智能化。

### UVDesk

![UVDesk.png](https://static-docs.nocobase.com/UVDesk-2cp9j3.png)

UVDesk 是一个开源的客户支持与工单管理系统，主要用于帮助团队构建客服中心和支持流程。随着产品演进，UVDesk 在客服场景中引入了 AI 相关能力，用于提升工单处理效率和响应质量，使支持流程在自动化基础上具备一定的智能化特征。

GitHub Stars: 17k

GitHub: [https://github.com/uvdesk](https://github.com/uvdesk)

官网: [https://www.uvdesk.com](https://www.uvdesk.com)

**AI 功能亮点**

* 基于规则与智能建议的流程优化 UVDesk 的核心仍然是规则驱动的工单流程，而 AI 能力更多作为补充存在，用于在工单创建或处理阶段提供智能建议。这种方式并未改变原有工作流结构，而是在关键节点提升处理质量。

**可以用来做什么？**

* 构建智能化客服工作流 在客户支持场景中，UVDesk 可以通过工单分配、状态流转和通知机制组织客服流程，并在其中引入 AI 自动回复或内容建议功能，减少人工重复操作，提高整体响应效率。
* 处理高频重复问题的自动化流程 对于常见问题或标准化咨询，UVDesk 可以结合自动化规则和 AI 内容生成能力，在工单进入系统后快速给出初步回复，从而缩短用户等待时间。

非常感谢你能够阅读到这里，若这份内容对你有所帮助，欢迎分享给更多正在探索 AI 自动化和工作流实践的团队。

相关阅读：

* [最适合外包交付的 6 个开源无代码与低代码](https://www.nocobase.com/cn/blog/6-open-source-no-code-low-code-tools-for-software-agencies)
* [GitHub 上星星数量前 10 的 AI CRM 开源项目 ](https://www.nocobase.com/cn/blog/top-10-open-source-ai-crm-projects-with-the-most-github-stars)
* [如何快速搭建一个替换 Excel 的系统？（完整指南）](https://www.nocobase.com/cn/blog/how-to-quickly-build-a-real-system-to-replace-excel)
* [GitHub Star 数量前 5 的开源 AI 内部工具](https://www.nocobase.com/cn/blog/top-5-open-source-ai-internal-tools-on-github)
* [8 个最佳 Google Sheets 替代方案（附成本与能力分析）](https://www.nocobase.com/cn/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6个适合做 PoC 的开源无代码/低代码工具推荐](https://www.nocobase.com/cn/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [给开发者的无代码/低代码技术决策指南（2026）](https://www.nocobase.com/cn/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [6 大企业级无代码低代码平台 RBAC 权限体系深度对比](https://www.nocobase.com/cn/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)

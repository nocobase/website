## TL;DR

这 10 个平台大致分为三类：

* NocoBase、Activepieces、Kestra 和 Windmill 更适合把 AI 接入企业数据、自动化和业务流程；
* Coze Studio、Langflow 和 Dify 更适合可视化构建 Agent 与 AI 应用；
* MaxKB、AnythingLLM 和 RAGFlow 更适合企业知识库和 RAG。

如果企业需要管理结构化业务数据、权限和内部应用，可以优先考虑 NocoBase；如果重点是连接多个 SaaS 并自动执行任务，可以考虑 Activepieces；如果主要构建 Agent 和 AI 工作流，可从 Dify、Langflow 或 Coze Studio 开始；如果重点是私有文档问答和复杂知识检索，则更适合 MaxKB、AnythingLLM 或 RAGFlow。

## 写在开头

越来越多企业开始尝试把 AI Agent 用到日常工作中。客户跟进、邮件整理、任务提醒、数据汇总，很多原本需要人工反复处理的工作，都已经有了交给 AI 完成的可能。

![Reddit-uemixv.png](https://static-docs.nocobase.com/Reddit-uemixv.png)

Reddit 的 [r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/1vkc911/small_business_owner_using_chatgpt_where_should_i/) 里，一位小企业主就提到，他平时已经在用 ChatGPT，希望进一步把客户跟进、邮件分类、Proposal 提醒和每周总结交给 AI。继续了解之后，他接触到 n8n、Zapier、API、MCP 和各种 Agent 构建工具。他没有开发背景，也不打算为了几个自动化流程专门学一套技术。更让他犹豫的是，如果花几个星期把这些应用搭建起来，后面是不是还要持续维护，最后反而比原来的工作方式更复杂。

这也是很多企业在选 AI Agent 工具时容易遇到的问题。如果只是直接搜索“AI Agent”，会有很多不同类型的产品：有 LangChain、CrewAI、Haystack 等面向开发者的框架，也有 Agent 构建平台、自动化工具、RAG 平台，以及能够同时管理业务数据、页面、权限和流程的企业应用平台。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

基于企业实际应用的需求，本文整理了 10 个**支持自托管，且已经提供可视化应用、工作流、知识库或业务系统能力的开源 AI Agent 项目**。接下来，我们会依次介绍每个项目的基础信息、值得关注的 AI Agent 能力、业务应用场景，以及更适合什么类型的团队。

> 为了让项目范围更明确，本文选择的项目需要满足几个基本条件：**核心代码公开并保持持续维护、支持自托管、已经提供 Agent、工具调用或 AI 工作流能力，同时具备可视化应用、自动化、知识库或企业业务系统中的至少一类能力。** 文中的项目信息和选型判断主要依据各项目的官网、GitHub 和官方文档整理，不代表统一环境下的性能测试或完整排名。

💡 如果你更关注类似 LangChain、CrewAI 的开发框架，想进一步比较不同 Agent 框架和开发平台，可以参考我们之前的文章：[企业内部工具必备：8 大开源 AI Agent 平台对比](https://www.nocobase.com/cn/blog/8-open-source-ai-agent-platforms-for-internal-tools)。

在开始逐个介绍之前，可以先快速浏览下面这张表，看看不同项目的定位、适用场景和技术门槛。

## 一、企业应用与业务自动化 Agent

### 1. NocoBase

**官网**：[https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**：23.9K

**相关文档**

**AI 员工**：[https://docs.nocobase.com/ai-employees/quick-start](https://docs.nocobase.com/ai-employees/quick-start)

**AI 搭建**：[https://docs.nocobase.com/ai-builder](https://docs.nocobase.com/ai-builder)

NocoBase 是一个开源、自托管的 AI 无代码企业应用平台，主要用于搭建 CRM、工单、IT 管理、审批和其他内部业务系统。它提供数据模型、页面、权限和工作流等企业应用基础能力，同时可以让 AI 参与应用的搭建和后续调整。系统中还可以配置 AI 员工，让 AI 结合当前业务数据、工具和流程完成分析、信息处理和任务执行。

![NocoBase1-d3zdlw.png](https://static-docs.nocobase.com/NocoBase1-d3zdlw.png)

#### 核心 AI 能力

* **AI + 无代码构建：** 可以直接用自然语言描述业务需求，由 AI 创建数据表及关联关系、页面、工作流和角色权限。NocoBase 同时提供无代码门户和 AI 门户两种构建方式，前者方便业务人员继续通过可视化方式调整，后者更适合复杂交互和高度定制的页面。

👉 [AI Portal 搭建快速开始 - NocoBase 文档](https://docs.nocobase.com/cn/ai-builder/ai-portal/)

AI 门户：

![NocoBase2-fbd2y1.png](https://static-docs.nocobase.com/NocoBase2-fbd2y1.png)

无代码门户：

![NocoBase3-hyg550.png](https://static-docs.nocobase.com/NocoBase3-hyg550.png)

* **AI 员工与业务执行：** AI 可以作为具体角色参与日常工作，处理数据分析、邮件整理、信息提取等任务，并调用系统工具和工作流查询数据、填写表单或触发业务流程。

👉 让 AI 员工调用工具，立即查看： [AI 员工使用工具 - NocoBase 文档](https://docs.nocobase.com/cn/ai-employees/features/tools)

![NocoBase4-xxuvt5.png](https://static-docs.nocobase.com/NocoBase4-xxuvt5.png)

* **企业知识库：** AI 员工可以自动或按需检索企业知识库，并根据当前用户角色过滤可访问的内容，让客服、销售或内部助手基于企业自己的知识工作。

👉 进一步了解： [NocoBase AI 知识库文档](https://docs.nocobase.com/cn/ai-employees/knowledge-base/knowledge-base)

![NocoBase5-xtr048.png](https://static-docs.nocobase.com/NocoBase5-xtr048.png)

* **企业权限与执行控制：** AI 员工沿用当前用户的数据权限，涉及数据修改等重要操作还可以要求执行前确认，避免 Agent 获得超出用户本身权限的访问范围。

👉权限和执行控制的具体设置，查看：[ AI 员工角色与权限 - NocoBase 文档](https://docs.nocobase.com/cn/ai-employees/permission)

![NocoBase6-2n7cas.png](https://static-docs.nocobase.com/NocoBase6-2n7cas.png)

#### 业务应用场景

* **CRM：** 根据客户邮件或会议记录整理沟通信息、生成跟进建议，并结合客户、联系人和商机数据辅助销售。

💡 阅读更多：[如何用 AI 和 NocoBase 搭建一套可投入生产的 CRM  ](https://www.nocobase.com/cn/blog/build-production-ready-crm-with-ai-and-nocobase)

![NocoBase7-rhk2ez.png](https://static-docs.nocobase.com/NocoBase7-rhk2ez.png)

* **客服与工单：** 分析用户提交的问题、判断分类和优先级，结合知识库生成回复建议，并参与工单处理流程。

![NocoBase8-12xpon.png](https://static-docs.nocobase.com/NocoBase8-12xpon.png)

* **IT 管理：** 根据员工的自然语言描述识别 IT 请求类型、优先级和处理建议，并结合资产、维修、审批等数据进行处理。

💡 阅读更多： [如何用 AI 和 NocoBase 在 2 小时内搭建一套企业 IT 运维系统 ](https://www.nocobase.com/cn/blog/build-it-operations-system-with-ai-nocobase)

![NocoBase9-1b5gyk.png](https://static-docs.nocobase.com/NocoBase9-1b5gyk.png)

* **企业内部应用：** 在采购、审批、项目管理、运营等系统中配置面向不同岗位的 AI 员工，调用业务数据和工作流完成日常任务。

#### 选型建议

如果团队已经有比较明确的业务需求，比如 CRM、客服工单、IT 管理或审批，希望借助 AI 加快搭建，但又不想让 AI 从零开始写一套业务系统，NocoBase 就非常合适。数据模型、权限、工作流这些业务系统需要的基础能力已经由平台提供，业务团队可以先用无代码和 AI 完成大部分搭建，后续再通过 API、插件继续扩展。它更适合准备长期使用和持续迭代内部系统的团队。

### 2. Activepieces

**官网**：[https://www.activepieces.com/](https://www.activepieces.com/)

**GitHub**：[https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

**GitHub Stars**：24.0K

**相关文档**

**MCP**：[https://www.activepieces.com/docs/mcp/overview](https://www.activepieces.com/docs/mcp/overview)

#### 产品概览

Activepieces 是一个开源、自托管的 AI 自动化平台，主要用于连接企业正在使用的应用、数据和业务流程。它把 AI Agent、自动化流程和数据放在同一个环境中，适合处理销售、客服、运营等需要跨多个工具完成的工作。

💡 阅读更多：[6 个适合搭配 WorkBuddy 使用的开源工具](https://www.nocobase.com/cn/blog/workbuddy-open-source-tools)

![Activepieces1-p5mhpr.png](https://static-docs.nocobase.com/Activepieces1-p5mhpr.png)

#### 核心 AI 能力

* **可视化创建 AI Agent：** 可以为 Agent 设置任务、模型和可调用工具，并直接放入自动化流程中运行。已有流程也可以作为 Agent 的工具继续调用。

![Activepieces2-usoav3.png](https://static-docs.nocobase.com/Activepieces2-usoav3.png)

* **自然语言搭建自动化：** 用户可以直接描述希望完成的工作，由 AI 帮助生成 Agent 或自动化流程，也可以继续通过可视化编辑器加入条件判断、循环和代码执行。
* **连接业务工具：** 平台可以连接 700 多个应用，覆盖 CRM、邮件、协作工具、表格等常用系统。通过 MCP，还可以把平台中的工具和流程提供给其他支持 MCP 的 AI 客户端使用。

![Activepieces3-beqsn8.png](https://static-docs.nocobase.com/Activepieces3-beqsn8.png)

#### 业务应用场景

* **销售线索处理：** 从邮件或表单获取新线索，由 AI 判断客户类型和优先级，更新 CRM，并生成跟进内容。
* **客服流程：** 自动读取客户问题，完成分类、摘要和工单分配，并同步客服系统与 CRM 中的信息。
* **日常运营自动化：** 整理邮件、提取信息、同步表格或数据库，并根据多个系统的数据自动生成日报、周报和业务通知。

#### 选型建议

Activepieces 更适合已经在使用多个 SaaS 工具、但开发资源有限的中小团队或业务部门。销售、市场、客服和运营如果经常需要在几个系统之间搬数据、发消息、做跟进，可以先从可视化流程开始；后续业务变复杂，再补 API 或自定义集成即可。

### 3. Kestra

**官网**：[https://kestra.io/](https://kestra.io/)

**GitHub**：[https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

**GitHub Stars**：28.0K

**相关文档**

**AI Copilot**：[https://kestra.io/docs/ai-tools/ai-copilot](https://kestra.io/docs/ai-tools/ai-copilot)

#### 产品概览

Kestra 是一个开源、自托管的工作流编排平台，主要用于管理数据、AI 和基础设施相关的自动化流程。AI Agent 可以直接作为工作流中的任务运行，根据目标调用工具、执行其他任务或触发已有流程。

![Kestra1-qepx6c.png](https://static-docs.nocobase.com/Kestra1-qepx6c.png)

#### 核心 AI 能力

* **AI Agent 与工作流协同：** 可以通过 AI Copilot 用自然语言生成或修改工作流，也可以把 Agent 直接放进现有流程中，让它调用模型、记忆、工具以及 Kestra 中已有的任务和流程，并根据执行结果决定后续步骤。

![Kestra2-un0lak.png](https://static-docs.nocobase.com/Kestra2-un0lak.png)

* **可视化与代码结合：** 可以通过可视化界面创建和调整流程，复杂需求则可以继续使用 YAML、Python、Docker 和自定义脚本扩展。

![Kestra3-favk4g.png](https://static-docs.nocobase.com/Kestra3-favk4g.png)

* **运行过程可追踪：** Agent 和普通任务使用同一套运行体系，可以统一查看执行状态、日志和失败记录，方便后续排查和维护。

#### 业务应用场景

* **数据处理自动化：** 根据数据状态选择后续步骤，并调用已有流程完成清洗、分析和汇总。
* **IT 与运维流程：** 根据告警或系统事件进行分析，再执行检查、通知或其他后续任务。
* **复杂业务与 AI 流程：** 将模型、工具、审批、数据处理和跨系统任务组合起来，处理需要多个步骤和动态判断的流程。

#### 选型建议

Kestra 更适合已经有一定自动化基础，也有开发、数据或运维人员参与的团队。现有流程开始变长，需要处理任务依赖、失败重试、运行状态和多步骤 AI 判断时，它的编排能力会更有价值。如果只是想快速搭几个简单的业务自动化，小团队未必需要这么完整的一套工作流体系。

### 4. Windmill

**官网**：[https://www.windmill.dev/](https://www.windmill.dev/)

**GitHub**：[https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

**GitHub Stars**：17.7K

**相关文档**

**AI Agent 应用**：[https://www.windmill.dev/use-cases/ai-agents](https://www.windmill.dev/use-cases/ai-agents)

#### 产品概览

Windmill 是一个开源、自托管的开发与自动化平台，可以把脚本、API、工作流和内部应用放在同一个环境中运行。它同时支持可视化编排和 Python、TypeScript、Go、SQL 等代码，更偏向有一定技术基础的团队。

![Windmill1-u4c2db.png](https://static-docs.nocobase.com/Windmill1-u4c2db.png)

#### 核心 AI 能力

* **把 Agent 加入工作流：** AI Agent 可以直接作为流程中的一个步骤运行，并与条件判断、审批、错误处理等节点组合，用来处理需要 AI 判断的任务。

![Windmill2-86jcks.png](https://static-docs.nocobase.com/Windmill2-86jcks.png)

* **调用现有技术资源：** Agent 可以使用 Windmill 中已有的脚本、数据库、API 和其他工作流，也可以连接 MCP 工具，把企业已经积累的代码和内部服务直接接进 Agent。

![Windmill3-jejm47.png](https://static-docs.nocobase.com/Windmill3-jejm47.png)

* **权限、审批和运行记录：** 可以限制 Agent 能访问和执行的资源，在重要操作前加入人工确认，并查看每次运行中的工具调用、输入输出、日志和执行状态。

#### 业务应用场景

* **IT 与运维自动化：** 根据告警或系统状态分析问题，再调用脚本完成检查、处理和通知。
* **数据处理与分析：** 查询数据库或运行现有数据脚本，由 Agent 分析结果并触发后续流程。
* **内部 AI 工具：** 将 Agent、后端脚本和内部应用界面组合起来，搭建数据助手、运营工具或其他内部应用。

#### 选型建议

Windmill 更适合已经有开发、数据或运维人员的团队。公司内部如果本来就有不少脚本、数据库、API 和内部服务，希望直接利用这些现有资源来做 Agent 和自动化，它会比较顺手。对于没有技术人员、主要想靠可视化快速搭几个简单流程的团队，它的开发平台属性可能会显得偏重。

## 二、可视化 AI Agent 构建平台

### 5. Coze Studio

**官网**：[https://www.coze.cn/home](https://www.coze.cn/home)

**GitHub**：[https://github.com/coze-dev/coze-studio](https://github.com/coze-dev/coze-studio)

**GitHub Stars**：21.5K**AI Agent 相关文档：**[https://github.com/coze-dev/coze-studio/wiki/1.-What-is-Coze-Studio](https://github.com/coze-dev/coze-studio/wiki/1.-What-is-Coze-Studio)

#### 产品概览

Coze Studio 是字节跳动开源的一站式 AI Agent 开发平台，重点是通过可视化方式完成 Agent 的创建、调试和部署。用户可以直接组合模型、知识和工具，比较适合快速搭建客服、知识问答、内容助手等 AI 应用。

![Coze1-x3ltv6.png](https://static-docs.nocobase.com/Coze1-x3ltv6.png)

#### 核心 AI 能力

* **可视化搭建 Agent 和工作流：** 可以在界面中配置模型、提示词和工具，也可以通过画布编排多步骤流程，加入条件判断、数据处理等逻辑。

![Coze2-tarjfy.png](https://static-docs.nocobase.com/Coze2-tarjfy.png)

* **RAG 与知识库：** 可以接入企业文档和知识数据，让 Agent 基于指定内容回答问题和处理任务。
* **插件与外部工具：** Agent 可以通过插件调用外部服务，把查询、搜索和数据处理等能力接进执行过程。

![Coze3-abbyw4.png](https://static-docs.nocobase.com/Coze3-abbyw4.png)

* **开发、调试与部署：** Agent 可以在同一个平台中完成创建、测试和部署，减少在多个工具之间来回切换。

#### 业务应用场景

* **智能客服：** 结合知识库回答产品、服务和售后问题，并通过插件查询其他业务信息。
* **企业知识助手：** 基于内部文档和知识库，为员工提供问答、资料查询和信息整理。
* **内容与营销助手：** 结合搜索、内容生成和工作流，完成资料收集、内容整理和初稿生成。

#### 选型建议

如果团队刚开始尝试 AI Agent，主要想快速做出客服、知识问答或内容助手，又没有专门的 AI 开发人员，Coze Studio 会比较容易上手。产品、运营或业务人员可以先通过可视化方式把想法跑起来，后面再根据需要增加知识库、插件和更复杂的流程。

### 6. Langflow

**官网**：[https://www.langflow.org/](https://www.langflow.org/)

**GitHub**：[https://github.com/langflow-ai/langflow](https://github.com/langflow-ai/langflow)

**GitHub Stars**：153.9K

**相关文档**

**Agent**：[https://docs.langflow.org/agents](https://docs.langflow.org/agents)

#### 产品概览

Langflow 是一个开源的可视化 AI 应用构建平台，主要用于搭建 Agent 和 AI 工作流。它采用组件化的方式组合模型、工具、数据和其他 Agent，同时保留 Python 扩展能力，比较适合需要边试边调的 AI 应用开发场景。

![Langflow1-dbxpex.png](https://static-docs.nocobase.com/Langflow1-dbxpex.png)

#### 核心 AI 能力

* **拖拽式构建与多 Agent 组合：** 可以在可视化画布中配置 Agent，并把模型、提示词、工具和其他组件连接成完整流程。组件和流程也都可以作为 Agent 的工具使用，多个 Agent 还可以分工完成检索、分析、整理等任务。
* **MCP 支持：** 可以连接外部 MCP 服务，也可以把 Langflow 中构建的流程提供给其他支持 MCP 的 AI 应用调用。

![Langflow2-p8b1dx.png](https://static-docs.nocobase.com/Langflow2-p8b1dx.png)

* **模型与 Python 扩展：** 可以自由组合不同模型和数据源，遇到现成组件覆盖不到的需求时，再通过自定义 Python 组件接入企业自己的 API 和处理逻辑。

#### 业务应用场景

* **知识与文档应用：** 把内部文档、检索、模型和 Agent 组合起来，用于知识问答、资料分析和信息提取。
* **多 Agent 流程：** 让不同 Agent 分别处理检索、分析、整理等任务，再串成完整流程。
* **AI 应用原型：** 快速验证客服、研究助手、内容生成等想法，再通过 API 接入现有产品。

#### 选型建议

Langflow 更适合有一定技术人员参与、需要频繁尝试不同模型和 Agent 结构的团队。产品或数据人员可以先通过画布把流程搭出来，开发人员再用 Python、自定义组件和 API 补更复杂的部分。它比较适合做原型和持续实验，对完全没有技术人员、只想快速上线固定业务流程的团队来说，上手后期会更依赖开发能力。

### 7. Dify

**官网**：[https://dify.ai/](https://dify.ai/)

**GitHub**：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

**GitHub Stars**：154.0K

**相关文档**

**官方文档**：[https://docs.dify.ai/](https://docs.dify.ai/)

Dify 是一个开源的 AI 应用开发平台，可以用来搭建 Agent、知识助手和更复杂的 AI 工作流。它覆盖了从应用创建、调试到发布和后续运行管理的完整过程，适合希望在同一个平台里持续开发多种 AI 应用的团队。

![Dify1-835tx4.png](https://static-docs.nocobase.com/Dify1-835tx4.png)

#### 核心 AI 能力

* **Agent 与工作流构建：** 可以通过可视化界面配置 Agent 的模型、指令、工具和知识库，也可以用画布编排条件判断、知识检索、工具调用和人工输入等多步骤流程。

![Dify2-9eaiyv.png](https://static-docs.nocobase.com/Dify2-9eaiyv.png)

* **RAG 与知识处理：** 支持从 PDF、PPT 等文档构建知识库，并提供内容清洗、切分、索引和检索测试等处理能力。

![Dify3-xs0trk.png](https://static-docs.nocobase.com/Dify3-xs0trk.png)

* **模型与插件扩展：** 可以接入多个模型提供商，并通过插件增加新的工具、数据源、触发器和 Agent 能力。
* **发布与运行管理：** 搭建完成的应用可以发布为网页应用或 API，同时查看日志、反馈、延迟和调用情况。

#### 业务应用场景

* **智能客服与知识助手：** 结合企业知识库和外部工具，处理客户咨询或员工内部知识查询。
* **业务信息处理：** 将信息提取、分类、分析、生成和工具调用串成完整工作流。
* **AI 应用快速上线：** 将搭建好的 Agent 或工作流发布为应用或 API，再接入已有产品和业务系统。

#### 选型建议

如果团队已经不只是想试一个 Agent，已经准备持续做客服、知识助手、内容处理等多个 AI 应用，Dify 会比较合适。业务和产品人员可以先通过可视化方式完成大部分配置，有开发人员时再继续做插件、API 和更深的系统集成。对于希望把多个 AI 项目放在同一个平台里管理的中小企业或产品团队，它会比单独维护几套工具更省事。

## 三、企业知识与 RAG Agent

### 8. MaxKB

**官网**：[https://maxkb.cn/](https://maxkb.cn/)

**GitHub**：[https://github.com/1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB)

**GitHub Stars**：22.6K

**相关文档**

**官方文档**：[https://maxkb.cn/docs/v2/index.html](https://maxkb.cn/docs/v2/index.html)

#### 产品概览

MaxKB 是一个开源、自托管的企业级智能体平台，比较适合从企业知识库和知识问答开始搭建 AI 应用。除了基础 RAG，它也提供可视化工作流和工具调用能力，可以继续扩展到客服、办公助手等场景。

![MaxKB1-fgub0k.png](https://static-docs.nocobase.com/MaxKB1-fgub0k.png)

#### 核心 AI 能力

* **企业知识库与 RAG：** 支持上传文档、抓取在线内容，并完成分段、向量化和知识检索，用来处理企业内部资料和专业知识问答。
* **可视化工作流与工具调用：** 可以通过画布组合 AI 对话、知识检索、条件判断、表单和文档提取等节点，也可以接入 MCP 服务，让模型调用外部工具。
* **多模型与本地部署：** 可以接入 OpenAI、Claude、Gemini、DeepSeek、通义千问等公共模型，也支持 Ollama、vLLM 等本地模型。
* **接入现有系统：** 搭建完成的智能体可以通过公开链接、嵌入代码或 API 放进网站和内部应用中。

#### 业务应用场景

* **智能客服：** 将产品知识库、常见问题和业务资料接入智能体，用来处理客户咨询。
* **专业知识应用：** 面向金融、教育、研究等场景，基于行业资料完成查询、整理和分析。

#### 选型建议

比较适合**已经积累了大量企业文档和知识资料，希望较快搭建知识型 AI Agent 的团队**。它的可视化工作流和知识库能力上手门槛相对低，同时支持本地部署和本地模型，适合对内部知识使用、数据控制和第三方系统集成有要求的企业。

### 9. AnythingLLM

**官网**：[https://anythingllm.com/](https://anythingllm.com/)

**GitHub**：[https://github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)

**GitHub Stars**：65.4K

**相关文档**

**Agent Flow**：[https://docs.anythingllm.com/agent-flows/overview](https://docs.anythingllm.com/agent-flows/overview)

#### 产品概览

AnythingLLM 是一个开源、本地优先的 AI 应用，主要用来搭建基于私有文档和内部知识的 AI 助手。它提供桌面端和自托管版本，图形界面比较完整，不需要先搭复杂的开发环境就可以开始使用。

![AnythingLLM1-5fia5p.png](https://static-docs.nocobase.com/AnythingLLM1-5fia5p.png)

#### 核心 AI 能力

* **私有文档与 RAG：** 可以把 PDF、Word、文本等资料放入不同工作空间，让 AI 基于指定内容回答问题，并保留引用来源。

![AnythingLLM2-4h817b.png](https://static-docs.nocobase.com/AnythingLLM2-4h817b.png)

* **Agent Flow**：可以通过可视化方式组合网页抓取、API 调用、模型指令和文件读写等步骤，搭建固定、可重复的处理流程。
* **多用户与权限：** 自托管版本支持多用户和权限管理，可以为不同团队成员划分独立的工作空间和知识访问范围。

#### 业务应用场景

* **内部知识与文档助手：** 基于企业制度、产品资料、培训文档、合同和报告进行问答、总结和信息提取。
* **研究与资料整理：** 结合内部文档、网页信息和工具调用，完成资料收集、整理和分析。

#### 选型建议

AnythingLLM 更适合个人、小团队，或者想先在部门内部做私有 AI 助手试点的企业。团队没有专门的 AI 开发人员，也可以比较快地从文档问答和资料整理开始；如果主要目标是把内部知识安全地交给 AI 使用，而不是搭复杂的业务流程，它会更轻量。

### 10. RAGFlow

**官网**：[https://ragflow.io/](https://ragflow.io/)

**GitHub**：[https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)

**GitHub Stars**：89.7K

**相关文档**

**Agent 指南**：[https://github.com/infiniflow/ragflow/tree/main/docs/guides/agent](https://github.com/infiniflow/ragflow/tree/main/docs/guides/agent)

#### 产品概览

RAGFlow 是一个开源的 RAG 与 AI Agent 平台，重点放在复杂文档处理和企业知识检索上。相比普通的知识问答工具，它更适合文档类型复杂、知识量大，而且对检索准确性和引用依据要求较高的场景。

💡 阅读更多：[OpenClaw 如何用于真实业务？推荐 5 个开源工具](https://www.nocobase.com/cn/blog/openclaw-open-source-enterprise-tools)

![AnythingLLM2-lvcqjv.png](https://static-docs.nocobase.com/AnythingLLM2-lvcqjv.png)

#### 核心 AI 能力

* **复杂文档理解：** 可以处理 PDF、Word、PPT、表格、图片和长文档，并从这些非结构化内容中提取可用于检索和分析的信息。
* **高精度 RAG：** 结合向量检索、关键词检索、重排序和元数据过滤，提高知识检索的准确性和可追溯性。
* **Agent 工作流：** 可以通过可视化画布组合检索、模型、条件判断、循环和分类等步骤，也支持多 Agent、规划和反思等更复杂的流程。

![RAGFlow2-3r2pqb.png](https://static-docs.nocobase.com/RAGFlow2-3r2pqb.png)

* **工具与数据源接入：** Agent 可以调用外部工具，也支持 MCP；同时可以从 Confluence、S3、Notion、Google Drive 等来源同步企业知识。

![RAGFlow3-tlomcm.png](https://static-docs.nocobase.com/RAGFlow3-tlomcm.png)

#### 业务应用场景

* **复杂企业知识库：** 面向大量制度、技术手册、报告和专业资料建立统一的知识检索系统。
* **法律与合规分析：** 从法规、合同、案例和内部资料中检索依据，并生成带来源的分析结果。
* **研究与决策支持：** 汇总内部数据和外部资料，由 Agent 完成检索、分析和报告生成。

#### 选型建议

适合知识量大、文档复杂，而且有一定技术资源的团队。法律、制造、技术支持、研究等场景里，如果资料里有大量长文档、表格、图片或专业内容，同时又很在意检索准确性和引用依据，RAGFlow 会更有优势。

## 结语

**很多 AI Agent 产品的功能已经开始互相重叠。可视化工作流、知识库、MCP、工具调用，越来越多平台都能提供。实际使用时，团队更需要考虑这些能力能不能顺利接进现有工作，以及后续会带来多少新的操作和维护成本。**

希望这篇文章能帮你先缩小选择范围，也欢迎分享给正在寻找 AI Agent 工具的朋友或团队！

如果你也想用 AI 和 NocoBase 搭建类似的企业应用，可以参考这些完整案例：

👉 [AI + NocoBase 搭建 CRM](https://www.nocobase.com/cn/blog/build-production-ready-crm-with-ai-and-nocobase)

👉 [AI + NocoBase 搭建企业 IT 运维系统](https://www.nocobase.com/cn/blog/build-it-operations-system-with-ai-nocobase)



**相关阅读**：

* **[如何用 AI 构建可投入生产的工单系统？](https://www.nocobase.com/cn/blog/build-production-ready-ticketing-system-with-ai)**
* **[库存管理系统搭建对比：纯 AI 搭建 vs AI 基于 NocoBase 搭建](https://www.nocobase.com/cn/blog/building-inventory-management-system-vibe-coding-vs-nocobase-ai)**
* **[如何用 AI 和 NocoBase 在 2 小时内搭建一套企业 IT 运维系统](https://www.nocobase.com/cn/blog/build-it-operations-system-with-ai-nocobase)**
* **[NocoBase vs Baserow：灵活数据库与企业级系统](https://www.nocobase.com/cn/blog/nocobase-vs-baserow)**
* **[如何用 AI 和 NocoBase 搭建一套可投入生产的 CRM](https://www.nocobase.com/cn/blog/build-production-ready-crm-with-ai-and-nocobase)**
* **[企业 IT 资产管理系统搭建指南：从需求梳理到落地](https://www.nocobase.com/cn/blog/enterprise-it-asset-management-system-guide)**
* **[7 款 Smartsheet 替代品：适合项目管理与业务流程的工具](https://www.nocobase.com/cn/blog/best-smartsheet-alternatives)**
* **[5 个适合复杂关系模型的开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-complex-relational-models)**
* **[什么是 AI 无代码？AI 时代无代码平台的实用指南](https://www.nocobase.com/cn/blog/what-is-ai-no-code)**
* **[GitHub 上值得关注的 9 个开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-github-9)**
* **[GitHub 上值得关注的 14 个开源 AI Agent 工具](https://www.nocobase.com/cn/blog/github-open-source-ai-agent-tools-16)**
* **[GitHub 上 Stars 最多的 8 个开源 AI Assistant 工具](https://www.nocobase.com/cn/blog/top-open-source-ai-assistant-tools-github-stars)**
* **[6 个适合搭配 WorkBuddy 使用的开源工具](https://www.nocobase.com/cn/blog/workbuddy-open-source-tools)**

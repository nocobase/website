OpenClaw 最开始受到关注，是因为它真切回应了人们对 AI 执行能力的期待。

我们之前写过一篇文章，介绍过一批和 [OpenClaw 类似的开源 AI Agent 项目](https://www.nocobase.com/cn/blog/best-open-source-ai-projects-github-2026)。当时的趋势很明显：AI Agent 正在从聊天窗口走向真实工作流，开始接触更具体的任务执行场景。

不过，最近再看 OpenClaw，它的热度已经没有刚开始那么高了。

相比一些更偏代码生成、流程编排或企业 AI 应用的 Agent 工具，OpenClaw 似乎逐渐淡出了话题中心。

现在还有人在用 OpenClaw 吗？他们到底用它做什么？

![reddit.png](https://static-docs.nocobase.com/reddit-kqsyww.png)

在 [Reddit](https://www.reddit.com/r/OpenClawUseCases/comments/1tikt2f/what_are_you_guys_actually_using_openclaw_for/)  社区里，大家日常到底会把 OpenClaw 用在哪里？从帖子里的分享来看， AI 和新闻追踪、提醒与跟进、定期摘要、后台监控、任务和笔记整理等，都是比较日常的使用方向。评论中也出现了一些更贴近业务的用法，比如财务提醒、客户支持分流、营销助手，以及通过 Telegram 连接 ERP、CRM 和自动化工具，生成每日简报和当日总结。

其实 OpenClaw 的价值不只在于通过聊天软件操作电脑，还可以让它长期盯住那些规律性、周期性、容易被忽略的业务变化。

接下来，我们会介绍几类适合与 OpenClaw 搭配的开源工具，看看它如何更好地进入企业内部流程进行工作。

## 1. NocoBase

**官网**：[https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Star**：22.5k

### 简介

![NocoBase.png](https://static-docs.nocobase.com/NocoBase-t8anfe.png)

NocoBase 是一个开源 AI 无代码 / 低代码平台，非常适合搭建企业内部系统和业务工作台。它不仅可以搭建 CRM、ERP、项目管理这类单一业务系统，也可以承载更复杂的企业内部应用。

支持连接多类数据源，以数据模型组织复杂业务关系；权限控制精确到字段级，工作流、审计日志、插件机制等功能可以帮助团队在同一套平台中管理业务数据、流程规则、操作记录和系统扩展。

在 AI 能力上，NocoBase 不只是生成一次性应用， AI 可以参与系统搭建和日常业务处理。它支持 AI 员工、AI Skills 和 CLI 等能力，可以协助完成数据模型设计、页面配置、工作流编排、权限配置、插件管理等任务。AI 员工还可以参与数据分析、风险监测、审批协同和任务分发，让 AI 在已有业务系统中发挥作用。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-h88kc4.png)

### 适合场景

* **企业内部业务系统**：用于搭建 CRM、ERP、项目管理、资产管理、审批、工单等内部应用，统一管理数据、权限和流程。
* **跨部门协作流程**：用于记录任务、审批、风险、反馈、负责人和处理状态，帮助不同角色围绕同一套业务数据协同。
* **AI 参与的业务工作台**：用于承接客户反馈、异常记录、任务分发、数据分析等需要 AI 与人工共同处理的业务场景；将 OpenClaw 接入飞书、Telegram、WhatsApp 等常用聊天工具后，团队可以直接在聊天入口中发起查询、接收、提醒等任务，并将结果整理到飞书文档、Google Sheets 或其他协作工具中。

例如，在 CRM 场景中，可以直接在飞书里向 OpenClaw 发出指令：查看 NocoBase 里的客户线索，把消费金额 3 万以上的客户筛选出来，并整理成跟进清单。OpenClaw 接收到任务后，可以调用 NocoBase 中的客户数据，提取公司名称、联系人和地区等信息，生成到飞书文档中，方便团队直接查看和分配后续动作。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-olcrz1.png)

**任务说明示例**：

```text
帮我看一下 NocoBase 里的客户线索，把消费金额 3 万以上的客户筛出来，整理成一份今日优先跟进清单，并生成到飞书文档里。

清单里帮我带上公司名称、消费金额、会员等级、联系人和地区，再简单标一下哪些客户最值得优先跟进。
```

### 相关资源

文档：[https://docs.nocobase.com/](https://docs.nocobase.com/)

AI 文档：[https://docs.nocobase.com/cn/ai/](https://docs.nocobase.com/cn/ai/)

CLI：[https://docs.nocobase.com/cn/api/cli/](https://docs.nocobase.com/cn/api/cli/)

Skills：[https://docs.nocobase.com/cn/ai-builder#nocobase-skills](https://docs.nocobase.com/cn/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/cn/ai/mcp/](https://docs.nocobase.com/cn/ai/mcp/)

OpenClaw + NocoBase：[https://docs.nocobase.com/cn/ai/openclaw](https://docs.nocobase.com/cn/ai/openclaw)

## 2. n8n

**官网**：[https://n8n.io/](https://n8n.io/)

**GitHub**：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

**GitHub Star**：190k

![n8n.png](https://static-docs.nocobase.com/n8n-y0bpua.png)

### 简介

n8n 是一个面向技术团队的工作流自动化平台，支持可视化流程搭建、自定义代码、自托管部署和 400+ 集成。它适合连接不同系统、API、数据库和业务工具，把重复性的业务流程变成可持续运行的自动化工作流。

n8n 支持在工作流中接入大语言模型、AI Agent、工具调用和自有数据。团队可以用它搭建邮件摘要、线索处理、内容生成、客服分流、数据查询等 AI 自动化流程，也可以在流程画布上查看和控制 Agent 的执行步骤。

### 适合场景

* **跨系统数据同步**：用于连接 CRM、表单、数据库、邮件、飞书、Slack 等工具，减少人工复制和重复录入。
* **业务流程自动化**：用于处理表单提交、线索分配、工单流转、审批提醒、状态同步等固定流程。
* **AI 工作流编排**：用于把模型调用、数据读取、内容生成、摘要整理和结果写入组合成稳定流程。

例如，销售线索、客户反馈、表单提交、工单分配等流程已经在 n8n 中自动运行时，可以让 OpenClaw 每天检查这些流程有没有失败、有没有数据没有进入下一步、有没有通知发出后没人处理。

![n8n2.jpeg](https://static-docs.nocobase.com/n8n2-2tc3jw.jpeg)

**任务说明示例**：

```text
每天上午 10 点检查 n8n 中与销售线索、客户反馈和项目通知相关的工作流执行记录。

请找出最近 24 小时执行失败、重试后仍未成功、或已触发通知但没有后续处理记录的流程，并整理成今日流程异常清单。
```

### 相关资源

文档：[https://docs.n8n.io/](https://docs.n8n.io/)

AI 文档：[https://docs.n8n.io/advanced-ai/](https://docs.n8n.io/advanced-ai/)

AI 工作流入门：[https://docs.n8n.io/advanced-ai/intro-tutorial/](https://docs.n8n.io/advanced-ai/intro-tutorial/)

AI Workflow Builder：[https://docs.n8n.io/advanced-ai/ai-workflow-builder/](https://docs.n8n.io/advanced-ai/ai-workflow-builder/)

## 3. RAGFlow

**官网**：[https://ragflow.io/](https://ragflow.io/)

**GitHub**：[https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)

**GitHub Star**：81.2k

![RAGFlow.png](https://static-docs.nocobase.com/RAGFlow-ui3t4v.png)

### 简介

RAGFlow 是一个开源 RAG 引擎，适合处理企业内部文档、知识库、客户反馈、工单记录、产品资料和项目资料。它可以将分散资料转化为可检索、可问答、可引用的知识来源，为大语言模型提供更可靠的上下文层。

RAGFlow 融合了 RAG 和 Agent 能力，支持预置 Agent 模板、记忆能力、数据同步、文档解析和知识检索。它还提供面向 OpenClaw 的 Skill，可用于通过 OpenClaw 访问 RAGFlow 数据集。

### 适合场景

* **客户反馈知识库**：用于沉淀客户问题、工单记录、解决方案和高频需求。
* **内部文档问答**：用于查询产品文档、操作手册、制度文件、SOP 和项目资料。
* **知识库缺口识别**：用于发现用户反复提问但文档没有覆盖的问题，并推动 FAQ 或 SOP 更新。

例如，当客户反馈和工单中反复出现某类问题，但知识库或 FAQ 中没有明确答案时，OpenClaw 可以整理出知识库优化清单，提醒文档、客服或产品团队补充内容。

![RAGFlow2.png](https://static-docs.nocobase.com/RAGFlow2-bdoqgz.png)

**任务说明示例**：

```text
每周五下午 3 点检查 RAGFlow 中的客户反馈、工单记录和产品文档。

请找出用户反复提问但知识库没有明确答案的问题，并整理出本周知识库缺口清单，包括建议新增的 FAQ 标题、参考来源和负责团队。
```

### 相关资源

文档：[https://ragflow.io/docs/](https://ragflow.io/docs/)

API 文档：[https://ragflow.io/docs/dev/http_api_reference](https://ragflow.io/docs/dev/http_api_reference)

RAGFlow + OpenClaw：[https://ragflow.io/blog/ragflow-x-openclaw-the-enterprise-aware-claw](https://ragflow.io/blog/ragflow-x-openclaw-the-enterprise-aware-claw)

RAGFlow Skill：[https://clawskills.sh/skills/angusthefuzz-ragflow](https://clawskills.sh/skills/angusthefuzz-ragflow)

## 4. ERPNext

**官网**：[https://frappe.io/erpnext](https://frappe.io/erpnext)

**GitHub**：[https://github.com/frappe/erpnext](https://github.com/frappe/erpnext)

**GitHub Star**：35k

![ERPNext.png](https://static-docs.nocobase.com/ERPNext-idy0ew.png)

### 简介

ERPNext 是一个开源 ERP 系统，覆盖会计、采购、销售、CRM、库存、制造、项目、POS、质量、支持等企业运营模块。它适合记录企业日常运营中的订单、库存、采购、供应商、客户、发票、制造工单和项目成本等数据。

ERPNext 本身更偏标准 ERP 系统，并不以原生 AI Agent 能力作为核心卖点。它的价值在于提供结构化、可追踪的业务数据基础，适合作为后续 AI 分析、异常识别、报表生成和业务问答的数据来源。

### 适合场景

* **库存与采购管理**：用于管理物料、库存、采购订单、供应商交付和库存预警。
* **销售订单管理**：用于跟踪客户订单、发货状态、销售发票和订单履约。
* **制造与项目成本管理**：用于记录制造工单、生产进度、项目成本和资源消耗。

例如，库存低于安全线、采购订单超过预计到货日期、销售订单超过承诺发货日期、重点客户订单异常、退货率突然上升，这些都适合交给 OpenClaw 做定时检查。

**任务说明示例**：

```text
每天上午 10 点检查 ERPNext 中的库存、采购和销售订单数据。

请筛选库存低于安全库存、采购超期未到货、销售订单超期未发货、重点客户订单异常的记录，并生成今日供应链异常清单
```

### 相关资源

文档：[https://docs.erpnext.com/homepage](https://docs.erpnext.com/homepage)

Frappe Framework：[https://github.com/frappe/frappe](https://github.com/frappe/frappe)

Frappe REST API 文档：[https://docs.frappe.io/framework/user/en/api/rest](https://docs.frappe.io/framework/user/en/api/rest)

Frappe JS SDK：[https://github.com/frappe/frappe-js-sdk](https://github.com/frappe/frappe-js-sdk)

## 5. Plane

**官网**：[https://plane.so/](https://plane.so/)

**GitHub**：[https://github.com/makeplane/plane](https://github.com/makeplane/plane)

**GitHub Star**：49.7k

![Plane.png](https://static-docs.nocobase.com/Plane-awve4i.png)

### 简介

Plane 是一个开源项目管理平台，可以作为 Jira、Linear、Monday、ClickUp 的替代方案，用于管理任务、周期、项目文档、产品路线图和团队协作。它适合产品、研发、设计、运营等团队跟踪需求、缺陷、任务、里程碑和项目进度。

Plane 将项目、文档和 AI 工作流放在同一个工作区。Plane AI 可以基于项目、周期和页面中的上下文回答问题，也可以从提示词生成工作结构，帮助团队进行任务分流、进展总结和项目协作。

### 适合场景

* **研发任务管理**：用于跟踪需求、缺陷、任务、周期和版本进度。
* **产品路线图管理**：用于管理产品计划、优先级、里程碑和跨团队协作事项。
* **项目风险检查**：用于识别延期任务、阻塞事项、无人认领任务和长期未更新需求。

例如，项目经理不需要每天逐条查看所有任务，而是让 OpenClaw 每天下午汇总需要关注的项目风险，并推送给负责人。

**任务说明示例**：

```text
每天下午 4 点检查 Plane 中本周活跃项目的 issue 和 cycle。

请找出截止日期临近但没有更新、blocked 超过 48 小时、没有负责人、等待 review 超过 24 小时的任务，并整理成今日项目阻塞摘要。
```

### 相关资源

文档：[https://docs.plane.so/](https://docs.plane.so/)

开发者文档：[https://developers.plane.so/](https://developers.plane.so/)

API 文档：[https://developers.plane.so/api-reference/introduction](https://developers.plane.so/api-reference/introduction)

## FAQ

### 1. 什么样的工作适合交给 OpenClaw ？

适合交给 OpenClaw 的工作，通常有三个特点：有固定检查频率、有明确数据来源、有相对清晰的判断规则。

比如每天检查 CRM 线索是否超时未跟进、ERP 库存是否低于安全线、项目任务是否延期、工单是否堆积、知识库是否缺少高频问题答案、自动化流程是否执行失败。这类任务不一定需要 AI 直接做最终决策，但很适合让 OpenClaw 先发现异常、生成摘要，再推送给负责人处理。

### 2. OpenClaw 适合用在企业内部系统里吗？

在企业内部系统中，OpenClaw 可以定时检查 CRM、ERP、项目管理、知识库、流程自动化工具中的数据变化，把异常、延迟、机会和待处理事项整理出来。这样可以减少人工反复查看多个系统的时间，也能让团队更早发现业务风险。

### 3. 如果企业有很多业务系统，应该用什么工具把它们整合起来？

如果企业已经有很多业务系统，比如 CRM、ERP、项目管理、知识库、表单、工单和数据看板，可以考虑用 NocoBase 搭建一个统一的业务工作台。

NocoBase 可以把来自不同系统的线索、任务、反馈、异常、审批和知识库优化任务整理成结构化数据，并通过页面、权限、工作流和插件体系进行管理。OpenClaw 可以定时检查这些数据，把需要处理的事项推送出来；NocoBase 则承接后续查看、分配、跟进和复盘。

### 4. 企业使用 OpenClaw 搭配开源工具时要注意什么？

需要重点关注权限、数据安全、日志记录和人工确认机制。

OpenClaw 可能会访问业务系统、调用工具、读取数据或触发自动化流程，因此建议先从低风险任务开始，比如状态检查、摘要生成、提醒推送和异常记录。涉及财务审批、客户承诺、合同确认、人事处理等高风险动作时，应保留人工确认环节。

### 5. OpenClaw 最适合从哪个企业场景开始试用？

建议从“低风险、高频率、规则清楚”的场景开始。

例如销售线索跟进提醒、项目延期检查、知识库缺口整理、自动化流程失败监控、库存预警汇总、工单堆积提醒。这些任务不需要 OpenClaw 直接做关键决策，但能明显减少人工巡检成本，也更容易验证效果。

### 6. 企业使用 OpenClaw 搭配开源工具时要注意什么？

企业使用 OpenClaw 时，需要重点关注权限、数据安全、日志记录和人工确认机制。

OpenClaw 可能会访问业务系统、读取数据、调用工具或触发自动化流程，因此建议先从低风险任务开始，比如状态检查、摘要生成、提醒推送和异常记录。涉及财务审批、客户承诺、合同确认、人事处理等高风险动作时，应保留人工确认环节。

可以结合 NocoBase 这类内部工具平台。NocoBase 支持角色权限、数据表权限、操作权限、工作流、审计日志等能力，可以帮助团队控制不同角色能看到什么、能操作什么，以及关键流程是否需要人工审批。OpenClaw 负责发现和提醒，业务系统负责权限控制、流程记录和后续处理。


**相关阅读**：

* **[OpenCode 可以搭配哪些开源工具？5 个适合 AI Agent 的开源项目 - NocoBase](https://www.nocobase.com/cn/blog/opencode-open-source-tools-ai-agents)**
* **[别让 Codex 从零生成应用：6 个可组合的开源项目](https://www.nocobase.com/cn/blog/building-internal-tools-with-codex)**
* **[在用 Claude Code 之后，你需要这 6 个开源工具](https://www.nocobase.com/cn/blog/open-source-tools-after-claude-code)**
* **[10 个适合企业软件开发的开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-enterprise-software-development)**
* **[企业内部工具必备：8大开源 AI Agent 平台对比](https://www.nocobase.com/cn/blog/8-open-source-ai-agent-platforms-for-internal-tools)**
* **[企业级自托管 CRM 推荐（支持 RBAC、AI 和 API）](https://www.nocobase.com/cn/blog/the-best-self-hosted-crm-for-enterprise-teams)**
* **[告别自研中间件：6个开源系统集成工具推荐](https://www.nocobase.com/cn/blog/6-open-source-integration-tools-to-replace-custom-middleware)**
* **[Airtable 与 NocoBase：从Excel迁移的真实成本对比](https://www.nocobase.com/cn/blog/airtable-vs-nocobase-migration-cost-comparison)**
* **[为 Excel 数据快速构建 Web 应用：4 种方法对比](https://www.nocobase.com/cn/blog/excel-to-web-app-4-methods)**
* **[不只 PostgreSQL：5 个支持外部数据库的无代码/低代码平台对比](https://www.nocobase.com/cn/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)**
* **[开源项目管理工具选型指南（2026年最新）](https://www.nocobase.com/cn/blog/open-source-project-management-tool-selection-guide-2026-edition)**

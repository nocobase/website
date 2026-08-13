最近在 Reddit 上看到一句很真实的评论：![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

> *“ 这些做 AI 的无代码平台活不过一年。AI 如果真的这么强大，就不应该还靠拖流程框来实现功能。”*

这种观点虽然很扎心，但事实是这条评论已经是**8 个月前**的事了。而现在回头看，这些工具不仅没有“消失”，反而越做越成熟，新的项目也在不断涌现。

就在几天前，我们还整理过💡[「 GitHub 上最受欢迎的开源无代码 AI 工具」](https://www.nocobase.com/cn/blog/top-11-github-open-source-no-code-ai-tools)，从 Star 数据、社区活跃度和功能成熟度来看，很多工具不仅活得很好，还在持续迭代、不断扩展 AI 能力。

当然，Reddit 上也有人认为“现在的大部分 AI 低代码工具都很早期，有些所谓的 AI Agent 其实只是自动化工具加了个 LLM”。![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

但从我们观察到的情况来看，低代码生态的发展并不弱 —— 很多项目在数据建模、流程逻辑、插件扩展和 AI 协作方面，都已经能支持真实业务场景。

所以这次，我们从 GitHub 的 low-code 话题出发，按照**业务系统搭建、Agent 工作流、以及数据表型应用**三个方向，整理出当前最值得关注、并已实际集成 AI 能力的低代码平台。

在进入详细介绍之前，如果你希望对这 14 个工具的定位与 AI 能力有一个整体概览，这张对比表会更一目了然👇

**综合对比表（AI 能力 × 工具定位总览）**


| 工具     | 主分类       | AI 作用方式                     | 是否可扩展流程    | 是否支持建模/页面 | 是否支持表格/数据 | 是否跨类                |
| -------- | ------------ | ------------------------------- | ----------------- | ----------------- | ----------------- | ----------------------- |
| NocoBase | 业务系统     | AI 生成数据模型、页面、字段逻辑 | ✅（插件+自动化） | ✅（完整）        | ✅                | ⭐ 强（数据+系统+流程） |
| ToolJet  | 业务系统     | AI Copilot 生成页面/API脚本     | ⚠️（轻流程）    | ✅                | ⚠️              | 中                      |
| Appsmith | 业务系统     | AI 生成 SQL、表单逻辑           | ⚠️              | ✅                | ⚠️              | 中                      |
| Budibase | 业务系统     | AI 字段填充、表单文本生成       | ⚠️              | ✅                | ⚠️              | 弱                      |
| refine   | 业务系统     | AI 生成 CRUD 逻辑与代码         | ❌                | ✅（偏代码）      | ❌                | 否                      |
| n8n      | 工作流/Agent | AI 节点执行任务、API调用        | ✅                | ❌                | ❌                | 否                      |
| Dify     | 工作流/Agent | Agent、知识库、工具调用         | ✅                | ❌                | ⚠️              | 否                      |
| Flowise  | 工作流/Agent | RAG、LLM链路可视化              | ⚠️              | ❌                | ⚠️              | 否                      |
| Kestra   | 工作流/Agent | AI 生成流程 YAML                | ✅                | ❌                | ❌                | 否                      |
| Node-RED | 工作流/IoT   | AI 节点 + 设备/事件自动化       | ⚠️              | ❌                | ❌                | 否                      |
| Sim      | 工作流/Agent | 多 Agent 协作流程生成           | ⚠️              | ❌                | ❌                | 否                      |
| NocoDB   | 数据表格     | AI 填充/智能字段/Insights       | ⚠️              | ❌                | ✅                | 弱（数据主导）          |
| Teable   | 数据表格     | AI 会话、自动生成报表           | ⚠️              | ❌                | ✅                | 弱                      |
| Onlook   | AI UI        | AI 生成 UI/组件/React代码       | ❌                | ⚠️（UI为主）    | ❌                | 特殊（UI方向）          |

## **AI + 业务系统搭建类**

这类工具的核心特点是：AI 不只是“帮你回答问题或执行流程”，而是直接参与“应用构建本身”。

它们的重点在于帮助用户更快地创建数据库模型、表单、页面、权限、内部应用系统。

适合用于 CRM、审批流、ERP、管理后台、数据录入系统等需要结构化数据与界面交互的场景。

### **NocoBase**

⭐️ Stars: 20k

官网：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

**定位**：NocoBase 最初是一款开源低代码开发平台，以数据模型驱动和插件架构为核心。 而在 2.0 中，它能够让 AI 直接参与系统构建与运行，在平台内在线编写并执行 JS，完成更复杂的业务脚本与自动化任务，还可以将 AI 员工设置在系统任意位置，帮助提升使用体验。
![noocobase2.png](https://static-docs.nocobase.com/noocobase2-83efsk.png)

**在搭建阶段**

AI 员工能根据自然语言自动生成数据模型、字段关系、页面结构和基础逻辑，原本需要多轮配置的低代码开发流程可以变得更直接、更省心。搭建一个业务系统不再依赖繁琐的操作，而是能在 AI 员工的协助下快速成型，显著提升开发者的构建效率。
![noocobase3.png](https://static-docs.nocobase.com/noocobase3-geirqa.png)

**在使用阶段**

AI 可以基于系统内的数据完成查询、分析和解释，并输出相应的业务结论或操作建议（比如自动填写表单、总结客户信息、客户调研等）。

**面向人群**：需要构建业务系统的团队，如企业内部信息化人员、ToB 产品团队、系统集成商。

**适合场景**：CRM 系统、审批流、项目管理、订单系统等需要结构化数据、权限控制和界面的应用，并可通过插件扩展流程与 AI 自动建模。

### **ToolJet**

⭐️ Stars: 37k

官网：[https://www.tooljet.ai/](https://www.tooljet.ai/)

GitHub：[https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

**定位**：ToolJet 一直是企业内部应用开发的高效工具，而在引入 AI 后，其构建流程的效率得到了进一步提升。AI Copilot 能根据自然语言生成页面结构、组件逻辑与基本交互，不再需要开发者在组件、脚本和 API 之间频繁切换。通过“描述需求 → 自动生成”的方式，ToolJet 在一定程度上减少了手工配置与脚本编写的工作量，使内部工具的构建过程更加集中、顺畅，也有助于团队降低开发与维护成本。

**面向人群**：企业技术团队、运营/数据团队、希望快速搭建管理后台的开发者。

**适合场景**：内部运营工具、后台管理界面、API驱动的数据应用，AI 辅助写 SQL、生成页面布局和逻辑脚本。

### **Appsmith**

⭐️ Stars: 38k

官网：[https://www.appsmith.com/](https://www.appsmith.com/)

GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

**定位**：Appsmith 是一款专注于内部工具构建的开源低代码平台，其核心优势在于稳定的组件体系、数据源连接能力以及较成熟的 CRUD 场景支持。在引入 AI 功能后，Appsmith 的构建体验也得到了进一步的补充。

AI 能根据自然语言生成 SQL 查询、表单校验逻辑与基础脚本，并能自动协助完成常见的页面配置，开发者不必在代码与组件配置之间频繁切换。通过将部分重复性操作交由 AI 辅助完成，Appsmith 可以让内部工具的搭建流程更加高效，也降低了数据类应用的开发门槛。

**面向人群**：前端工程师、数据工具开发人员、需要快速搭建 CRUD 系统的团队。

**适合场景**：查询平台、内部仪表盘、数据库管理工具（例如：输入自然语言 → AI 生成 SQL → 显示表格结果）。

### **Budibase**

⭐️ Stars: 27k

官网：[https://budibase.com/](https://budibase.com/)

GitHub：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

**定位**：Budibase 是一款面向企业内部应用的开源低代码构建平台，重点提供数据建模、表单生成和基础流程等能力，适用于中小规模的业务场景。在加入 AI 功能后，Budibase 主要以辅助性质提升构建体验。

AI 可用于生成字段文本、补充数据内容以及创建基础页面结构，减少在表单配置和数据录入上的重复操作。虽然对复杂业务逻辑的支持仍然有限，但 AI 的介入让 Budibase 在轻量业务系统、内部表单工具和数据录入类应用中都具备更高的效率和可用性。

**面向人群**：中小企业内部团队、轻量业务系统开发者、无代码爱好者。

**适合场景**：表单系统、内部办公应用、数据录入平台，AI 可以自动补充文本字段或生成样例数据，但对复杂逻辑的支持有限。

### **Refine**

⭐️ Stars: 33k

官网：[https://refine.dev/](https://refine.dev/)

GitHub：[https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

**定位**：refine 是一个用于构建后台应用和内部工具的 React 框架，擅长处理常见的 CRUD、路由、权限和数据连接场景。开发者可以直接用自然语言描述界面或功能，由 AI 自动生成页面结构、交互逻辑和基础代码，并保持输出为可直接使用的 React 项目。

**面向人群**：前端开发工程师、需要灵活度而非纯可视化操作的技术团队。

**适合场景**：需要可控代码、又希望提升开发效率的后台管理系统，例如管理面板、数据可视化工具，但不提供完整后端建模能力。

## AI 工作流 / Agent 编排类

这类工具的关键特点在于：AI 不再只是用来生成回答或内容，而是被嵌入到了“流程执行”中，能主动调用工具、触发操作、推动业务自动化。

它们更像“AI增强版的流程引擎”或“Agent 执行平台”，而不是用来搭建完整业务系统的低代码平台。

它们强在自动化与执行力，但通常不具备复杂的数据建模、权限体系、页面构建能力。

### **n8n**

⭐️ Stars: 157k

官网：[https://n8n.io/](https://n8n.io/)

GitHub：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

**定位**：n8n 是一款开源的低代码自动化与工作流平台，擅长把不同系统、API 和服务以可视化方式串联起来，帮助团队快速构建自动化流程。在加入 AI 节点之后，n8n 不再只是执行固定规则的流程，而是能让 LLM 参与判断、生成内容、分析数据，并在流程中调用外部工具或 API。

**面向人群**：运营人员、技术支持、自动化工程师、中小型企业内部团队。

**适合场景**：内容生成自动化、数据同步、邮件回复、AI参与决策的流程自动化（如客服自动回复→写入数据库→发送邮件）。

### **Dify**

⭐️ Stars: 119k

官网：[https://dify.ai/](https://dify.ai/)

GitHub：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

**定位**：Dify 是一个用于构建 AI 应用与 Agent 的开源平台，提供模型管理、知识库、对话编排和工具集成等基础能力。结合了 AI 的 Dify 能让模型在工作流中执行多步骤推理、调用 API、检索外部知识、读写数据，并以可视化方式构建可执行的 Agent 流程，实现从对话到操作的完整链路。

**面向人群**：需要搭建智能客服、企业知识库助手、AI 应用原型的产品团队与开发者。

**适合场景**：基于企业知识库的问答助手、智能工单处理、AI 执行 API 动作的 Agent 服务。

### **Flowise**

⭐️ Stars: 47k

官网：[https://flowiseai.com/](https://flowiseai.com/)

GitHub：[https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

**定位**：Flowise 是一个开源的低代码/可视化平台，用于构建 AI 代理与 LLM 工作流。它提供可视化构建器、执行追踪、API/SDK 集成与本地部署能力。AI 结合后，Flowise 支持多步骤代理系统、工具调用与知识检索，人机协作与流程编排都可通过拖拽节点实现。

**面向人群**：AI 开发者、需要快速 Demo 的团队、初创产品探索阶段。

**适合场景**：知识库问答、简单 AI 机器人、多步骤推理流程原型，但不支持复杂业务逻辑或系统搭建。

### **Kestra**

⭐️ Stars: 23k

官网：[https://kestra.io/](https://kestra.io/)

GitHub：[https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

**定位**：Kestra 是一款开源的任务编排与调度平台，专注于构建可视化工作流、执行计划和监控机制。支持 AI 驱动的 YAML 流程生成、模型调用和条件决策节点，用户可以通过自然语言或配置模板快速生产复杂任务链条，并获得完整的执行追踪与日志分析能力。

**面向人群**：数据工程师、后端开发、DevOps 团队。

**适合场景**：AI 生成定时任务、数据清洗流程、API 调用任务链，偏后端执行型工作流。

### **Node-RED**

⭐️ Stars: 22k

官网：[https://nodered.org/](https://nodered.org/)

GitHub：[https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

**定位**：Node-RED 是一种基于事件的可视化流程工具，通过节点串联设备、服务和 API，构建自动化逻辑与数据流。平台提供了多种 AI 节点，可用于模型推理、内容生成、信息分析和条件判断，流程能根据模型的输出完成更灵活的操作。节点可与 IoT、Webhook 或系统事件对接，形成完整的处理链路。

**面向人群**：自动化工程师、硬件开发人员、智能家居/IoT 开发团队。

**适合场景**：摄像头识别→AI 判断→执行开关操作、设备异常→AI分析→触发告警等场景。

### **Sim**

⭐️ Stars: 18k

官网：[https://www.sim.ai/](https://www.sim.ai/)

GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

**定位**：Sim 是一个用于构建多 Agent 协作流程的开源平台，通过可视化方式组织模型、工具和任务步骤。平台支持多模型协作、工具调用、任务拆解和流程执行，Agent 可在同一工作流中交流、分工和完成推理或操作。用户可根据需求配置角色、能力和任务链条，生成可执行的多 Agent 系统。

**面向人群**：希望构建多角色 AI 代理系统的 AI 团队、智能助理初创公司。

**适合场景**：AI 助手、自动报告生成、智能执行机器人，但生态成熟度仍低于 n8n/Dify。

## **AI + 数据表格 / 数据库智能化类**

这类工具的重点不在流程执行或业务系统，而在“让表格和数据更智能”。

AI 的主要任务是生成、补全、查询、分析，而非执行复杂业务逻辑。

它们更像是“Airtable / Notion Database + AI 能力”的形式，适合数据驱动型团队、内容运营、知识整理，而不是复杂业务系统或流程自动化。

### **NocoDB**

⭐️ Stars: 59k

官网：[https://nocodb.com/](https://nocodb.com/?utm_source=chatgpt.com)

GitHub：[https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb?utm_source=chatgpt.com)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

**定位**：开源版 Airtable，支持字段配置、视图管理和基础自动化。平台提供 AI 辅助能力，可用于生成字段内容、补充数据、分析表格信息和输出智能建议。

**面向人群**：需要管理结构化数据的团队，如数据运营人员、内部项目协作团队、轻 CRM 需求用户。

**适合场景**：内容库、客户表、库存数据管理、团队协作表格。AI 能力主要体现在字段推荐、内容生成、自动补全与智能 Insights（数据分析建议）。

### **Teable**

⭐️ Stars: 20k

官网：[https://teable.ai/](https://teable.ai/)

GitHub：[https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

**定位**：提供类似 Airtable 的数据管理界面，支持字段类型、视图管理和数据协作。平台提供 AI 的能力，可以通过对话生成数据内容、处理表格信息、创建报表和执行文本类指令，模型可直接在表格中完成数据相关操作。

**面向人群**：Notion/Airtable 用户、需要数据协作 + AI 辅助分析的团队。

**适合场景**：内容管理、轻量数据仓库、团队项目表格系统。支持“对话式处理数据”，例如通过自然语言查询记录、批量生成表格内容或自动产出报表。

## **不完全属于以上三类的工具**

在梳理的过程中，我们也发现有部分工具并不完全落在前三类中，例如 **Onlook**。

⭐️ Stars: 23k

官网：[https://onlook.com/](https://onlook.com/)

GitHub：[https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

**Onlook 的特殊之处在于：它把“AI 生成 UI 界面”作为其核心能力。**

通过自然语言或线框描述创建页面结构和组件布局。平台可生成 React 代码、自动处理样式和结构关系，并提供可视化编辑能力，支持在生成基础上进一步调整界面内容和组件层级。这类工具更多服务于「界面搭建 + AI 设计辅助」，介于**设计工具**与**前端开发低代码平台**之间。

## 写在最后

过去我们通过写代码来构建系统，后来是拖拽组件，如今越来越多人开始用自然语言来描述一个系统应该如何运行。

> *“AI doesn’t remove the work — it just moves the work.”*

真正的挑战，已经不局限于“有没有用上 AI”了，而在于我们能不能把 AI 和业务逻辑、数据、流程等真正结合起来，变成系统的一部分。

AI 也在从“对话工具”逐步走向“构建工具”。它们可能还不完美，但方向已经很清晰了——未来的系统，可能不是被“开发”出来的，而是被“描述”出来的。我们也会开始从业务问题出发，而不仅仅是从代码编辑器出发。

如果你看到这里，也认同这种变化正在发生，欢迎把这份榜单分享给同样关注 **AI × 低代码** 的朋友。👍

相关阅读：

* [11 个在 GitHub 上最受欢迎的开源无代码 AI 工具 ](https://www.nocobase.com/cn/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub 上 Star 数量前 18 的开源 AI Agent 项目](https://www.nocobase.com/cn/blog/github-open-source-ai-agent-projects)
* [GitHub 上 Star 数量前 20 的开源 AI 项目](https://www.nocobase.com/cn/blog/github-open-source-ai-projects)
* [GitHub 上 Star 数量前 8 的开源 MCP 项目](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects)
* [GitHub 上 Star 数量前 8 的开源 Web 应用项目](https://www.nocobase.com/cn/blog/github-open-source-web-applications)
* [GitHub 上 Star 数排名前 40 的开发者工具](https://www.nocobase.com/cn/blog/github-open-source-developer-tools)
* [2025年GitHub Star增长最快的15个开源低代码项目](https://www.nocobase.com/cn/blog/github-top15-fastest-growing-open-source-low-code-projects)

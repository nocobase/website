最近在逛 Reddit 的[ r/AI\_Agents ](https://www.reddit.com/r/AI_Agents/comments/1iwsiby/best_lowcode_ai_agent_builder/)版块，有看到一个很真实的问题：

![Reddit1.png](https://static-docs.nocobase.com/image%20(1)-qx24dx.png)

> *“ 有没有真正能让 AI 去执行任务、流程化运行的低代码工具？”*

这个提问看似简单，却戳中了不少开发者的真实痛点—— 现在市面上“支持 AI 的低代码平台”很多，但大多只是加了一个聊天窗口，顶多能生成 SQL 或补表单字段，真正能让 AI 跑流程、调 API、当 Agent 的工具其实并不多。

评论区开始出现分歧，有人直接泼冷水说：

![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

> *“ 这些做 AI 的无代码平台活不过一年。AI 如果真的这么强大，就不应该还靠拖流程框来实现功能。”*

这种观点虽然激烈，但也确实反映了一部分开发者的担忧：**如果 AI 已经这么强，为何我们还需要无代码？这种拖拽式工具是不是早晚会被淘汰？**

事实是 —— 这条评论已经是**8 个月前**的事了。而现在回头看，这些工具不仅没有“消失”，反而越做越成熟，新的项目也在不断涌现。

就在几天前，我们还整理过💡[「 GitHub 上最受欢迎的开源无代码 AI 工具」](https://www.nocobase.com/cn/blog/top-11-github-open-source-no-code-ai-tools)，从 Star 数据、社区活跃度和功能成熟度来看，很多工具不仅活得很好，还在持续迭代、不断扩展 AI 能力。

这也从侧面证明了：无代码 / 低代码 + AI 并不是昙花一现的泡沫，而是在被稳定地使用、试验和进化。

当然，质疑并不是没有价值。因为另一种声音也提醒得很清晰：

![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

> *“ 建议去看看开源的替代方案，大部分低代码 AI 工具还都很早期。*
>
> *但重点是 —— 先想清楚你要解决什么问题，再去选工具。*
>
> *有些所谓的 ‘AI Agent’，其实就是普通自动化上面贴了个 LLM。”*

这句话很难反驳。很多“AI Agent 平台”确实只是把自动化流程接上 LLM，看起来很智能，但本质还是工具。

我们过去也做过不少相关的研究和盘点：💡[「GitHub 上值得关注的 AI Agent 项目」](https://www.nocobase.com/cn/blog/github-open-source-ai-agent-projects)、💡[「优秀的 AI 开源工具」](https://www.nocobase.com/cn/blog/github-open-source-ai-projects)

但是这一次，我们不是在重复讨论“AI 能不能做系统”，而是把视角从无代码自然延伸到了低代码。 我们之前盘点过[无代码 AI 工具](https://www.nocobase.com/cn/blog/top-11-github-open-source-no-code-ai-tools)，无代码强调“让非技术用户也能用 AI”，所以很多无代码工具确实也能让人“不写代码也能调用模型、生成内容”。

而低代码则面向“懂业务、会一点技术的人”，重点是**数据建模、流程逻辑、权限体系、插件扩展**等更接近系统建设的能力。

因此，我们从 [GitHub「low-code」](https://github.com//topics/low-code)话题出发，重点关注以下类型的工具：

* ⭐ 社区热度和维护活跃度较高（Star 数、更新频率、使用反馈）
* 🤖 在官网或文档中明确提供 AI 能力，而不是简单提供“对话式接口”
* 🛠️ 支持本地部署或开放扩展，能够真正用于产品或企业环境

基于这些标准，我们筛选出了14 个当前具备代表性、并已实际集成 AI 能力的低代码开发平台。

它们的方向各不相同，有的用于业务系统搭建，有的强调Agent 工作流，有的专注数据与表格应用。

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

⭐️ Stars: 17k

官网：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

* **定位**：开源低代码平台，核心在于拥有真正可参与工作的 **AI 员工**——不仅能在搭建阶段自动协助建模、生成页面结构，也能在系统使用阶段执行查询、分析数据、回答业务问题，让应用既好搭也会用。
* **面向人群**：需要构建业务系统的团队，如企业内部信息化人员、ToB 产品团队、系统集成商。
* **适合场景**：CRM 系统、审批流、项目管理、订单系统等需要结构化数据、权限控制和界面的应用，并可通过插件扩展流程与 AI 自动建模。

---

### **ToolJet**

⭐️ Stars: 36.8k

官网：[https://www.tooljet.ai/](https://www.tooljet.ai/)

GitHub：[https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

* **定位**：面向企业内部应用的低代码工具，强调“AI Copilot + 可视化 UI + API 连接”。
* **面向人群**：企业技术团队、运营/数据团队、希望快速搭建管理后台的开发者。
* **适合场景**：内部运营工具、后台管理界面、API驱动的数据应用，AI 辅助写 SQL、生成页面布局和逻辑脚本。

---

### **Appsmith**

⭐️ Stars: 38.3k

官网：[https://www.appsmith.com/](https://www.appsmith.com/)

GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

* **定位**：开源内部工具开发平台，提供“Appsmith AI”用于自动生成 SQL、表单逻辑和页面组件配置。
* **面向人群**：前端工程师、数据工具开发人员、需要快速搭建 CRUD 系统的团队。
* **适合场景**：查询平台、内部仪表盘、数据库管理工具（例如：输入自然语言 → AI 生成 SQL → 显示表格结果）。

---

### **Budibase**

⭐️ Stars: 27.2k

官网：[https://budibase.com/](https://budibase.com/)

GitHub：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

* **定位**：用于构建自定义业务应用的平台，支持数据库建模、表单生成和简单流程，同时提供 AI 字段与文本生成能力。
* **面向人群**：中小企业内部团队、轻量业务系统开发者、无代码爱好者。
* **适合场景**：表单系统、内部办公应用、数据录入平台，AI 可以自动补充文本字段或生成样例数据，但对复杂逻辑的支持有限。

---

### **refine**

⭐️ Stars: 33.1k

官网：[https://refine.dev/](https://refine.dev/)

GitHub：[https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

* **定位**：基于 React 的前端开发框架，专注于快速生成 CRUD、权限、界面逻辑，提供 AI 辅助生成代码示例与接口绑定。
* **面向人群**：前端开发工程师、需要灵活度而非纯可视化操作的技术团队。
* **适合场景**：需要可控代码、又希望提升开发效率的后台管理系统，例如管理面板、数据可视化工具，但不提供完整后端建模能力。

## AI 工作流 / Agent 编排类

这类工具的关键特点在于：AI 不再只是用来生成回答或内容，而是被嵌入到了“流程执行”中，能主动调用工具、触发操作、推动业务自动化。

它们更像“AI增强版的流程引擎”或“Agent 执行平台”，而不是用来搭建完整业务系统的低代码平台。

它们强在自动化与执行力，但通常不具备复杂的数据建模、权限体系、页面构建能力。

### **n8n**

⭐️ Stars: 151k

官网：[https://n8n.io/](https://n8n.io/)

GitHub：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

* **定位**：开源工作流自动化平台，可将 AI 节点与 API 流程组合执行。
* **面向人群**：运营人员、技术支持、自动化工程师、中小型企业内部团队。
* **适合场景**：内容生成自动化、数据同步、邮件回复、AI参与决策的流程自动化（如客服自动回复→写入数据库→发送邮件）。

---

### **Dify**

⭐️ Stars: 117k

官网：[https://dify.ai/](https://dify.ai/)

GitHub：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

* **定位**：AI 原生应用与 Agent 工作流平台，支持模型、知识库、记忆与工具调用。
* **面向人群**：需要搭建智能客服、企业知识库助手、AI 应用原型的产品团队与开发者。
* **适合场景**：基于企业知识库的问答助手、智能工单处理、AI 执行 API 动作的 Agent 服务。

---

### **Flowise**

⭐️ Stars: 46k

官网：[https://flowiseai.com/](https://flowiseai.com/)

GitHub：[https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

* **定位**：基于 LangChain 的可视化 AI 流程工具，用于构建 RAG、对话式 Agent。
* **面向人群**：AI 开发者、需要快速 Demo 的团队、初创产品探索阶段。
* **适合场景**：知识库问答、简单 AI 机器人、多步骤推理流程原型，但不支持复杂业务逻辑或系统搭建。

---

### **Kestra**

⭐️ Stars: 22.7k

官网：[https://kestra.io/](https://kestra.io/)

GitHub：[https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

* **定位**：后端任务编排与数据调度平台，支持 AI Copilot 自动生成 workflow。
* **面向人群**：数据工程师、后端开发、DevOps 团队。
* **适合场景**：AI 生成定时任务、数据清洗流程、API 调用任务链，偏后端执行型工作流。

---

### **Node-RED**

⭐️ Stars:22.2k

官网：[https://nodered.org/](https://nodered.org/)

GitHub：[https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

* **定位**：事件驱动可视化流程工具，广泛用于 IoT 与系统集成领域。
* **面向人群**：自动化工程师、硬件开发人员、智能家居/IoT 开发团队。
* **适合场景**：摄像头识别→AI 判断→执行开关操作、设备异常→AI分析→触发告警等场景。

---

### **Sim**

⭐️ Stars: 17.2k

官网：[https://www.sim.ai/](https://www.sim.ai/)

GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

* **定位**：专注多 Agent 协作流程，可视化构建、执行，并支持部署为 API。
* **面向人群**：希望构建多角色 AI 代理系统的 AI 团队、智能助理初创公司。
* **适合场景**：AI 助手、自动报告生成、智能执行机器人，但生态成熟度仍低于 n8n/Dify。

## **AI + 数据表格 / 数据库智能化类**

这类工具的重点不在流程执行或业务系统，而在“让表格和数据更智能”。

AI 的主要任务是生成、补全、查询、分析，而非执行复杂业务逻辑。

它们更像是“Airtable / Notion Database + AI 能力”的形式，适合数据驱动型团队、内容运营、知识整理，而不是复杂业务系统或流程自动化。

### **NocoDB**

⭐️ Stars: 58.4k

官网：[https://nocodb.com/](https://nocodb.com/?utm_source=chatgpt.com)

GitHub：[https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb?utm_source=chatgpt.com)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

* **定位**：开源版 Airtable，支持将任意数据库（MySQL、PostgreSQL 等）转换为可视化表格工具。
* **面向人群**：需要管理结构化数据的团队，如数据运营人员、内部项目协作团队、轻 CRM 需求用户。
* **适合场景**：内容库、客户表、库存数据管理、团队协作表格。AI 能力主要体现在字段推荐、内容生成、自动补全与智能 Insights（数据分析建议）。

---

### **Teable**

⭐️ Stars: 20k

官网：[https://teable.ai/](https://teable.ai/)

GitHub：[https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

* **定位**：基于 PostgreSQL 的协作型表格数据库，结合 AI 会话与智能填充。
* **面向人群**：Notion/Airtable 用户、需要数据协作 + AI 辅助分析的团队。
* **适合场景**：内容管理、轻量数据仓库、团队项目表格系统。支持“对话式处理数据”，例如通过自然语言查询记录、批量生成表格内容或自动产出报表。

---

## **不完全属于以上三类的工具**

在梳理的过程中，我们也发现有部分工具并不完全落在前三类中，例如 **Onlook**。

⭐️ Stars: 22.9k

官网：[https://onlook.com/](https://onlook.com/)

GitHub：[https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

Onlook 的特殊之处在于：它将“AI 生成 UI 界面”作为核心能力。

通过自然语言或线框，AI 可以自动生成页面结构、组件布局、甚至 React 代码。这类工具更多服务于「界面搭建 + AI 设计辅助」，介于设计工具与前端开发低代码平台之间。

## **有些工具不仅属于一个分类 —— 例如 NocoBase**

虽然我们在前文将工具划分为“业务系统搭建类、工作流类、数据表格类”三大方向，但在实际对比中也发现，有一些平台具备跨类能力——**其中最完整、架构最统一的，是 NocoBase。**

与大多数工具不同，NocoBase 的能力体现在：

* 像数据平台一样，它具备数据表结构、字段、视图、API 能力；
* 像内部系统搭建工具一样，它可以生成页面、表单、权限、页面逻辑与关系模型；
* 通过插件和开放架构，它也可以扩展工作流（Workflow）、自动化，甚至嵌入 AI 节点，实现部分流程执行能力。

当然了，也确实存在一些具备“跨类特性”的工具，例如：

* Appsmith、ToolJet、Budibase等在构建界面的同时，也支持“按钮触发 → API → 数据写入”这类轻量流程；
* NocoDB、Teable 这类数据型工具，也开始提供 AI 自动填充、Webhook 触发、规则执行等功能。

但这些工具更多是在原有能力上补了一点 AI 功能，让体验更完整，而不是形成完整的流程引擎或系统能力，扩展性和自由度也有限。

相比之下，NocoBase 并不只是“覆盖多方向”，而是一个真正的**复合型平台**——它从底层的数据建模开始，延伸到页面生成、权限控制，再通过插件扩展到工作流和 AI，这种架构上的一体化能力，是目前开源低代码工具中少见的。

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

## WorkBuddy 是什么？

WorkBuddy 是腾讯推出的全场景职场 AI 智能体桌面工作台，主要面向企业日常办公、文件处理、数据分析和多步骤任务处理等场景。![WorkBuddy-8xxz2q.png](https://static-docs.nocobase.com/WorkBuddy-8xxz2q.png)

和 OpenClaw、Claude Code、Codex 这类工具相比，WorkBuddy 的侧重点不太一样。OpenClaw 更强调开放 Agent 能力和跨平台技能生态，Claude Code、Codex 更适合代码生成、开发协作和工程任务处理；WorkBuddy 则更偏向职场办公场景，可以连接微信、QQ、企业微信、飞书、钉钉等常用办公软件，让用户在熟悉的沟通入口中发起任务。

如果想更深度地连接企业业务系统和内部场景，WorkBuddy 同样适合承担 Agent 入口和任务调度的角色。WorkBuddy 负责接收指令、拆解任务和返回结果；开源工具负责提供具体的业务系统、自动化流程、CRM、项目管理、数据 API 和 BI 分析能力。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---



所以这篇文章会介绍几款适合搭配 WorkBuddy 使用的开源工具，看看它们分别能为企业提供哪些能力，以及在和 WorkBuddy 组合时可以覆盖哪些典型场景。

## 1. NocoBase：适合搭建可被 WorkBuddy 调用的自定义业务系统

![NocoBase1-vpe2x5.png](https://static-docs.nocobase.com/NocoBase1-vpe2x5.png)

**官网**： [https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**： [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**：22.3k

**文档**： [https://docs.nocobase.com/](https://docs.nocobase.com/)

**相关资源**：

CLI：[https://docs.nocobase.com/cn/api/cli/](https://docs.nocobase.com/cn/api/cli/)

Skills：[https://docs.nocobase.com/cn/ai-builder#nocobase-skills](https://docs.nocobase.com/cn/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/cn/ai/mcp/](https://docs.nocobase.com/cn/ai/mcp/)

WorkBuddy + NocoBase：[https://docs.nocobase.com/cn/ai/workbuddy](https://docs.nocobase.com/cn/ai/workbuddy)

### 产品简介

NocoBase 是一个 AI 驱动的开源无代码 / 低代码开发平台，可以快速构建企业级应用、内部工具和各种业务系统。它支持私有化部署，基于插件架构设计，适合企业根据自身业务搭建 CRM、ERP、审批、工单、库存、项目管理、运营后台等系统。

![NocoBase2-t4x1fo.png](https://static-docs.nocobase.com/NocoBase2-t4x1fo.png)

对于希望将 WorkBuddy 接入内部工具的团队来说，NocoBase 更适合作为业务系统层，承载稳定的数据结构、权限边界、流程规则和可调用能力。

NocoBase 也在 AI 能力上做了更贴近业务系统的设计。它支持  AI 员工、AI Skills、CLI 和 MCP 等。AI 员工可以作为系统内的智能助手，参与数据查询、内容生成、任务处理等工作；AI Skills 用于帮助外部 Agent 理解 NocoBase 的配置方式和操作边界；CLI 可以让 Agent 通过命令执行安装、创建、修改等操作；MCP 则为外部 AI 工具连接 NocoBase 提供更标准的入口。

![NocoBase3-ejtyuu.png](https://static-docs.nocobase.com/NocoBase3-ejtyuu.png)

### 核心优势

* **数据模型驱动**：NocoBase 支持先定义数据表、字段和关联关系，再构建页面和交互，更适合复杂业务系统，而不是只做简单表单收集。
* **适合私有化部署**：企业可以将系统部署在自己的服务器中，更适合对数据安全、权限控制和长期维护有要求的内部系统。
* **权限和流程能力完整**：支持角色权限、字段权限、数据权限、操作权限，也可以通过工作流处理审批、通知、数据更新、Webhook、HTTP 请求等流程。
* **插件架构灵活**：NocoBase 采用插件微内核架构，功能可以通过插件扩展，适合企业在标准能力之外继续定制业务逻辑。
* **AI 能力更贴近业务系统**：NocoBase 支持 AI 员工、AI Skills、知识库等能力，可以围绕页面、数据表、选中记录和业务规则展开操作。

### 和 WorkBuddy 搭配的典型使用场景

在很多场景中，WorkBuddy 可以负责接收指令、拆解任务并返回结果，NocoBase 则负责承载具体的业务对象和系统能力，例如客户、订单、审批、工单、库存和项目等数据。

![NocoBase4-ono1dm.png](https://static-docs.nocobase.com/NocoBase4-ono1dm.png)

下面以 3 个常见场景为例：

**CRM** 企业可以用 NocoBase 搭建客户管理系统，统一维护客户资料、跟进状态、客户等级、负责人、合同金额等信息。销售负责人可以直接在企业微信或飞书中发起指令，让 WorkBuddy 查询近期新增客户、长期未跟进线索和重点客户。NocoBase 提供客户数据、权限和筛选逻辑，AI 员工或相关 Skills 可以进一步辅助整理跟进优先级、生成客户摘要或输出销售待办清单。

**工单管理** 在售后或运维团队中，NocoBase 可以记录工单状态、问题类型、优先级、处理人和截止时间。遇到每日排查或周度复盘时，团队可以让 WorkBuddy 汇总逾期工单、高优先级问题和待处理事项，再按负责人、紧急程度或问题类型分类，方便快速确认处理顺序。

**项目管理** 对管理者来说，审批和项目进度往往分散在多个节点中。NocoBase 可以承载审批流程、项目节点、负责人、风险事项和进度状态；WorkBuddy 则可以根据指令提取待审批事项、延期任务和项目风险，并生成按部门、负责人或优先级分类的摘要。

## 2. Activepieces：适合把 WorkBuddy 连接到更多自动化流程

![Activepieces1-xrlqbe.png](https://static-docs.nocobase.com/Activepieces1-xrlqbe.png)

**官网**： [https://www.activepieces.com/](https://www.activepieces.com/)

**GitHub**： [https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

**GitHub Stars**：约 23k

**文档**： [https://www.activepieces.com/docs](https://www.activepieces.com/docs)

### 产品简介

Activepieces 是一个开源 AI 自动化平台，适合搭建跨工具、跨系统的自动化流程。它可以连接 API、Webhook、数据库、表格、邮件、CRM、项目管理工具和其他第三方服务，把分散在不同工具里的操作组合成可复用的 workflow。

Activepieces 和 WorkBuddy 的组合，更适合处理“指令从办公入口发起，动作在多个系统里完成”的场景。WorkBuddy 可以接收用户在企业微信、飞书、钉钉等入口发出的需求，Activepieces 则负责执行背后的流程，比如读取数据、调用接口、同步记录、发送通知或触发后续任务。

### 核心优势

* **跨工具连接能力强**：适合把 API、Webhook、数据库和第三方应用连接起来，减少重复手动操作。
* **适合自动化流程沉淀**：线索同步、通知推送、表格更新、任务分派、数据整理等流程，都可以沉淀成固定 workflow。
* **支持自托管**：企业可以在自己的环境中部署，更容易管理密钥、数据和执行日志。
* **贴近 AI Agent 调用方式**：Activepieces 的 pieces 可以作为 MCP servers 使用，更适合和 Agent 工具形成组合。

![Activepieces2-6x447z.png](https://static-docs.nocobase.com/Activepieces2-6x447z.png)

### 和 WorkBuddy 搭配的典型使用场景

Activepieces 适合处理跨系统自动化。比如官网表单、客服反馈、GitHub Issue、销售线索分散在不同工具里，团队可以先用 Activepieces 配好数据读取、去重、分类和同步流程。之后通过 WorkBuddy 发起一句指令，例如“整理今天新增线索，并按来源和优先级分组”，结果就可以返回到群聊、文档或表格中。

## 3. Twenty：适合搭建可自托管的 CRM 数据层

![Twenty-tqe8g2.png](https://static-docs.nocobase.com/Twenty-tqe8g2.png)

**官网**： [https://twenty.com/](https://twenty.com/)

**GitHub**： [https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

**GitHub Stars**：49k

**文档**： [https://twenty.com/developers](https://twenty.com/developers)

### 产品简介

Twenty 是一个开源 CRM，官方将其定位为 Salesforce 的开源替代方案。它适合管理公司、联系人、客户关系、商机、任务、备注和销售流程，也适合技术团队根据自身业务流程进行定制。

如果企业希望保留客户数据的可控性，又不想完全依赖封闭式 CRM，Twenty 可以作为 WorkBuddy 背后的客户数据层。客户、商机和销售跟进记录沉淀在 Twenty 中，WorkBuddy 则负责在办公入口中接收查询、整理和提醒类需求。

### 核心优势

* **专注 CRM 场景**：更适合客户管理、商机跟进、销售任务和客户资料整理。
* **开源可自托管**：企业可以更好地控制客户数据、系统环境和后续定制空间。
* **适合技术团队定制**：可以围绕企业自己的销售流程调整对象、字段和业务结构。
* **业务对象更集中**：相比通用型内部工具，Twenty 的数据结构更贴近销售团队的日常工作。

### 和 WorkBuddy 搭配的典型使用场景

销售团队可以在 Twenty 中维护客户资料、公司信息、商机阶段、跟进记录和下一步动作。销售负责人需要查看重点客户时，不一定要进入 CRM 后台逐项筛选，可以通过 WorkBuddy 发起查询，比如“找出 7 天没有跟进的高价值客户”“整理本周新增商机”“列出金额较高但没有下一步动作的 Deal”。

Twenty 负责保存和管理销售数据，WorkBuddy 负责把查询结果整理成跟进清单、提醒摘要或周报。这样，团队可以更快发现需要优先处理的客户和商机，也能减少销售数据沉在 CRM 后台却无人及时查看的问题。

## 4. Plane：适合让 WorkBuddy 读取项目状态和任务进展

![Plane1-a68yj9.png](https://static-docs.nocobase.com/Plane1-a68yj9.png)

**官网**： [https://plane.so/](https://plane.so/)

**GitHub**： [https://github.com/makeplane/plane](https://github.com/makeplane/plane)

**GitHub Stars**：49.8k

**文档**： [https://docs.plane.so/](https://docs.plane.so/)

### 产品简介

Plane 是一个开源项目管理工具，适合追踪 Issues、管理 Cycles、维护 Roadmap，并沉淀项目文档和团队任务。它更适合产品、研发、项目管理等团队，用来管理版本计划、任务状态、项目风险和协作节奏。

Plane 官方也强调了 teams and agents 的协作方向。放在 WorkBuddy 的场景里，Plane 可以作为项目协作层：项目、任务、负责人、状态、优先级和版本计划沉淀在 Plane 中，WorkBuddy 则把这些状态带到团队日常办公入口中。

![Plane2-ojwlpm.png](https://static-docs.nocobase.com/Plane2-ojwlpm.png)

### 核心优势

* **适合项目和研发协作**：可以管理 Issues、Cycles、Roadmap、文档和团队任务。
* **任务状态更清晰**：适合追踪优先级、负责人、版本计划和延期风险。
* **支持自托管**：对需要掌握项目数据和研发信息的团队更友好。
* **适合和 Agent 组合**：Plane 本身已经强调 teams and agents 的协作空间，适合围绕任务推进、项目状态和知识沉淀形成组合。

### 和 WorkBuddy 搭配的典型使用场景

产品经理可以在飞书中让 WorkBuddy 查询“这个版本还有哪些 P0 问题没有关闭”；项目负责人可以查询“本周延期的任务有哪些，分别卡在哪个负责人”；研发负责人也可以让 WorkBuddy 按模块整理高优先级 Issue。

在这个场景里，Plane 负责记录项目、Issue、Roadmap 和负责人信息；WorkBuddy 负责从办公入口发起查询，并将结果整理成摘要或提醒。对于任务多、版本节奏快、需要频繁同步状态的团队，这种组合可以减少来回打开项目后台查状态的成本。

## 5. Directus：适合把现有数据库变成可调用的数据接口

![Directus1-x5gl6h.png](https://static-docs.nocobase.com/Directus1-x5gl6h.png)

**官网**： [https://directus.io/](https://directus.io/)

**GitHub**： [https://github.com/directus/directus](https://github.com/directus/directus)

**GitHub Stars**：34.2k

**文档**： [https://directus.io/docs](https://directus.io/docs)

### 产品简介

Directus 是一个开源数据平台，可以在 SQL 数据库之上生成管理界面、REST API 和 GraphQL API。它适合那些已经有数据库，但缺少友好后台、标准接口或统一数据访问层的团队。

很多企业并不是没有数据，而是数据分散在旧系统、数据库表或多个内部应用里。直接让 Agent 访问数据库风险较高，让业务人员写 SQL 也不现实。Directus 可以在数据库和 WorkBuddy 之间增加一层 API 与权限管理，让已有数据更容易被查询、整理和调用。

### 核心优势

* **连接现有 SQL 数据库**：适合把已有数据库包装成更易用的数据服务。
* **自动生成 API**：可以通过 REST、GraphQL 或 SDK 访问数据。
* **提供数据管理界面**：不仅是 API 层，也可以作为数据后台使用。
* **适合渐进式改造**：企业不一定要重做整个系统，可以先把关键数据表通过 Directus 暴露出来。

![Directus2-9ia8ca.png](https://static-docs.nocobase.com/Directus2-9ia8ca.png)

### 和 WorkBuddy 搭配的典型使用场景

比如企业已经有客户数据库、订单数据库、库存表或内容素材库，但这些数据分散在旧系统里，业务人员很难快速查询。企业可以先用 Directus 接入关键数据表，配置权限和 API，再让 WorkBuddy 通过接口查询数据。

员工可以在办公入口中发起指令，例如“查一下今天新增订单”“找出库存低于安全线的商品”“整理某个客户最近 3 次交易记录”。Directus 负责提供 API 和权限边界，WorkBuddy 负责把自然语言需求转成查询任务，并将结果整理成更容易阅读的摘要。

## 6. Metabase：适合让 WorkBuddy 读取报表和业务指标

![Metabase-uupms9.png](https://static-docs.nocobase.com/Metabase-uupms9.png)

**官网**： [https://www.metabase.com/](https://www.metabase.com/)

**GitHub**： [https://github.com/metabase/metabase](https://github.com/metabase/metabase)

**GitHub Stars**：47k

**文档**： [https://www.metabase.com/docs](https://www.metabase.com/docs)

### 产品简介

Metabase 是一个开源 BI 工具，适合搭建数据看板、业务报表和自助分析。它可以连接数据库，让团队围绕销售、运营、产品、财务、客服等数据建立指标体系和 Dashboard。

如果说 Directus 更适合把数据库变成 API，Metabase 更适合把数据变成业务问题和指标看板。和 WorkBuddy 搭配时，Metabase 可以承担数据分析层，让管理者通过办公入口获取关键指标和业务摘要。

### 核心优势

* **适合业务数据分析**：可以连接数据库，搭建 Dashboard、图表和报表。
* **降低数据查询门槛**：业务人员可以通过可视化界面查看指标，不一定要写 SQL。
* **适合管理层和运营团队**：常见场景包括销售看板、渠道分析、用户增长、工单趋势和库存分析。
* **具备 API 能力**：Metabase 提供 API，可用于自动化部分后台任务和数据查询场景。

### 和 WorkBuddy 搭配的典型使用场景

管理者不一定每天打开 BI 系统翻看多个 Dashboard，但通常需要快速了解关键变化。比如“本周销售额和上周相比有什么变化”“今天新增注册用户来自哪些渠道”“哪个产品线的工单量上升最快”“转化率下降最明显的页面是哪几个”。所以 Metabase 和 WorkBuddy 的组合，很适合做经营数据摘要

Metabase 负责连接数据库、沉淀指标和看板；WorkBuddy 负责把这些指标带到企业微信、飞书或钉钉中。用户可以直接在办公入口发起问题，由 WorkBuddy 调用相关报表或数据接口，再返回结构化摘要。

## FAQ

### 1. WorkBuddy 可以直接对接传统 SaaS、ERP 或 CRM 吗？

可以，但取决于系统本身是否开放 API、Webhook、插件、MCP 或其他可调用能力。

很多传统 SaaS、ERP、CRM 的数据结构和流程规则相对固定。系统本身可以使用，但字段关系、接口能力、权限边界和审计记录不一定适合直接开放给 Agent 调用。

如果只是做简单查询、通知或数据同步，传统系统也可以通过 API 或集成平台完成部分对接。但如果企业希望围绕客户、订单、审批、工单、库存、项目等对象灵活配置数据、权限和流程，开源工具或可自托管平台通常更适合作为能力承载层。

### 2. 为什么适合选择开源工具搭配 WorkBuddy？

开源工具通常更适合需要自托管、数据可控、接口开放和长期扩展的团队。

企业可以更清楚地掌握数据存放位置、系统权限、接口调用方式和操作日志，也可以根据自身需求做二次开发或系统集成。对于涉及客户信息、项目数据、订单记录、经营指标和内部流程的场景，这种可控性会更重要。

WorkBuddy 负责办公入口和任务调度，开源工具负责承载业务系统、自动化流程、CRM、项目管理、数据 API、BI 分析等能力。两者配合后，企业可以把日常办公入口和具体业务系统连接起来。

### 3. 如果要搭建系统级内部工具，优先看哪个？

**NocoBase**。

如果企业要搭建 CRM、ERP、工单系统、审批系统、库存管理、项目管理或运营后台，NocoBase 更适合作为系统级内部工具平台。它采用数据模型驱动架构，适合先定义客户、订单、工单、审批、库存、项目等业务对象，再配置页面、权限、工作流和插件能力。

同时，NocoBase 已经公开提供 WorkBuddy 接入文档，和本文主题更直接。对于需要承载复杂业务数据、权限边界和流程规则的团队来说，NocoBase 比单一 CRM、单一自动化工具或单一 BI 工具覆盖面更广。

### 4. 如果主要想做看板监测和经营数据分析，应该选哪个？

**Metabase**。

Metabase 更适合连接数据库、搭建 Dashboard、维护业务指标和生成数据报表。销售看板、渠道分析、用户增长、工单趋势、库存变化、转化率变化等场景，都比较适合放在 Metabase 中管理。

搭配 WorkBuddy 后，管理者可以在办公入口中查询关键指标，例如“本周销售额和上周相比有什么变化”“今天新增用户主要来自哪些渠道”“哪个产品线的工单量上升最快”。Metabase 负责沉淀指标和看板，WorkBuddy 负责发起查询并返回结构化摘要。

### 5. 如果企业已有数据库，但缺少统一查询入口，应该怎么做？

很多企业已经有客户数据库、订单数据库、库存表或内容素材库，但数据分散在旧系统或内部数据库里。业务人员想查数据，往往需要进入多个后台，或者让技术同事临时导出。

Directus 可以在 SQL 数据库之上生成管理界面、REST API 和 GraphQL API，相当于为已有数据库增加一层更清晰的数据访问入口。搭配 WorkBuddy 后，员工可以通过办公入口查询“今天新增订单”“库存低于安全线的商品”“某个客户最近 3 次交易记录”等信息。

### 6. 使用 WorkBuddy 搭配开源工具，需要技术团队参与吗？

需要看使用深度。

如果只是做简单查询、提醒、信息整理或报表摘要，业务团队可以先从现有工具能力开始尝试。但如果要让 WorkBuddy 与内部系统形成稳定配合，例如调用接口、配置权限、设计工作流、管理密钥、保留操作日志，就需要 IT 或开发团队参与。

比较稳妥的方式是先从低风险、高频场景开始，比如客户跟进清单、项目进度摘要、逾期工单提醒、经营数据看板、库存异常查询。流程稳定后，再逐步扩展到更复杂的系统操作和跨工具自动化。

### 7. 什么情况下适合选择 WorkBuddy？

如果团队主要在微信、QQ、企业微信、飞书、钉钉等入口中协作，并且希望用 AI Agent 处理文件整理、表格分析、PPT 生成、会议总结、任务分发等日常办公任务，WorkBuddy 会是比较合适的选择。

如果企业还希望进一步连接内部工具、CRM、项目管理、数据看板、自动化流程等系统，就可以考虑用 WorkBuddy 作为任务入口，再搭配 NocoBase、Activepieces、Twenty这类开源工具，补充具体的业务系统和数据能力。

如果这篇内容对你有帮助，也欢迎分享给正在关注 AI Agent 的朋友。

**相关阅读**：

* **[GitHub 上 Stars 最多的 6 个开源 AI 工具：让 AI Agent 更强大](https://www.nocobase.com/cn/blog/6-github-top-open-source-ai-tools-for-ai-agents)**
* **[用 Hermes 提升内部工具效率：5 个开源项目推荐](https://www.nocobase.com/cn/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)**
* **[OpenClaw 如何用于真实业务？推荐 5 个开源工具](https://www.nocobase.com/cn/blog/openclaw-open-source-enterprise-tools)**
* **[OpenCode 可以搭配哪些开源工具？5 个适合 AI Agent 的开源项目](https://www.nocobase.com/cn/blog/opencode-open-source-tools-ai-agents)**
* **[别让 Codex 从零生成应用：6 个可组合的开源项目](https://www.nocobase.com/cn/blog/building-internal-tools-with-codex)**
* **[在用 Claude Code 之后，你需要这 6 个开源工具](https://www.nocobase.com/cn/blog/open-source-tools-after-claude-code)**
* **[10 个适合企业软件开发的开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-enterprise-software-development)**
* **[企业内部工具必备：8大开源 AI Agent 平台对比](https://www.nocobase.com/cn/blog/8-open-source-ai-agent-platforms-for-internal-tools)**
* **[企业级自托管 CRM 推荐（支持 RBAC、AI 和 API）](https://www.nocobase.com/cn/blog/the-best-self-hosted-crm-for-enterprise-teams)**
* **[告别自研中间件：6个开源系统集成工具推荐](https://www.nocobase.com/cn/blog/6-open-source-integration-tools-to-replace-custom-middleware)**
* **[Airtable 与 NocoBase：从Excel迁移的真实成本对比](https://www.nocobase.com/cn/blog/airtable-vs-nocobase-migration-cost-comparison)**
* **[为 Excel 数据快速构建 Web 应用：4 种方法对比](https://www.nocobase.com/cn/blog/excel-to-web-app-4-methods)**

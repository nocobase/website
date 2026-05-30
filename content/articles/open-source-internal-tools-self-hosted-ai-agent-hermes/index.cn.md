AI Agent 的热度已经不只停留在开发场景。

除了 Claude Code、OpenClaw 这类工具，最近 Hermes Agent 也开始被更多人讨论。

![reddit.png](https://static-docs.nocobase.com/reddit-px26au.png)

[在 Reddit 上](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/)，有用户提到自己试过 OpenClaw、Nanobot、Nanoclaw 等多个 Agent 工具后，最后仍然更喜欢 Hermes Agent。因为它保留了自己真正需要的能力，同时没有太多额外负担；在本地模型、自托管服务器、SSH 访问和 Telegram 操作等场景下，也更符合轻量、可控的使用方式。

> 💡阅读更多：
>
> [OpenClaw 如何用于真实业务？推荐 5 个开源工具 ](https://www.nocobase.com/cn/blog/openclaw-open-source-enterprise-tools)
>
> [在用 Claude Code 之后，你需要这 6 个开源工具](https://www.nocobase.com/cn/blog/open-source-tools-after-claude-code)

对于已经计划搭建自托管的业务系统或内部工具的团队来说，如果 AI Agent 要进入真实业务系统，参与数据查询、系统配置、流程维护和任务执行，Hermes Agent 就非常合适。

内部工具搭建平台负责承载业务系统，Hermes 则作为自托管 Agent，帮助团队用自然语言查询、配置和维护系统，并把高频操作沉淀成可复用的 Skill。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

本文会围绕 NocoBase、Appsmith、Budibase、Directus、Baserow 这类内部工具搭建平台，介绍它们与 Hermes Agent 结合后，分别适合哪些使用方式和场景。

我们先把本文提到的工具、常见业务系统类型，以及 Hermes Agent 可以补充的能力整理成一张表，方便你快速查看。


| 工具     | 推荐搭建的业务系统 / 内部工具                                                    | Hermes Agent 可以补充的能力                                                            |
| -------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| NocoBase | CRM、ERP、审批系统、工单系统、项目管理、供应商管理、资产管理、运营后台等业务系统 | 用自然语言规划数据模型、配置页面和权限、维护工作流，并把高频业务模块沉淀成可复用 Skill |
| Appsmith | 管理后台、数据看板、客服后台、审核面板、运营操作工具、数据库管理界面             | 梳理页面结构、整理查询和筛选逻辑、解释组件与数据源关系，复用常见后台页面模板           |
| Budibase | 表单系统、审批流程、员工请求、IT 服务台、运营流程应用、内部工作流工具            | 梳理表单字段、审批节点和状态流转，生成流程模板，沉淀请求处理 Skill                     |
| Directus | 数据库后台、API 管理、内容管理系统、结构化数据管理平台、数据运营后台             | 解释数据结构、整理字段关系、辅助自然语言查询，沉淀数据管理和内容维护流程               |
| Baserow  | 表格型数据库、轻量 CRM、供应商清单、内容计划、项目进度表、库存清单               | 规划表结构和视图、整理筛选规则、生成分类和状态字段，复用轻量应用模板                   |

## 1. NocoBase

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-orh9iv.png)

官网：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star：22.6k

### 简介

NocoBase 是一个开源 AI 无代码 / 低代码平台，面向企业内部业务系统和管理后台搭建。

它的核心是围绕数据模型、页面配置、权限管理、工作流和插件扩展，帮助团队搭建可以长期运行的业务系统。这类系统通常会持续变化：字段要调整，页面要优化，权限要重新划分，审批和通知流程也会随着业务变化不断补充。

NocoBase 适合承载这类长期维护型系统，Hermes Agent 则可以进一步参与系统的搭建、配置和维护。

在 AI 能力上，NocoBase 已经提供了 AI 员工、AI Skills、CLI 和 MCP 等相关支持。AI 员工可以作为系统内的智能助手，参与数据查询、内容生成、任务处理等工作；AI Skills 用于帮助外部 Agent 理解 NocoBase 的配置方式和操作边界；CLI 可以让 Agent 通过命令执行安装、创建、修改等操作；MCP 则为外部 AI 工具连接 NocoBase 提供更标准的入口。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-civede.png)

### 和 Hermes 结合后可以做什么？

Hermes 接入 NocoBase 后，可以通过 NocoBase Skills 理解配置体系，并通过 NocoBase CLI 执行创建、修改、部署等操作。

**1. 用自然语言创建业务模块**

比如创建客户续约管理模块时，可以让 Hermes 先梳理客户、合同、续约记录、跟进任务等数据结构，再规划列表页、详情页、看板和基础权限。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-auh66t.png)

**2. 辅助维护权限和流程**

例如“销售只能查看自己负责的客户，主管可以查看团队客户，财务可以查看合同金额”，Hermes 可以把这类业务描述整理成更具体的权限和流程配置思路。

**3. 沉淀高频操作 Skill**

第一次完成 CRM、审批流或供应商管理模块后，Hermes 可以把字段命名、页面结构、权限规则等操作经验沉淀下来，后续搭建类似模块时直接复用。

### 任务说明示例

```text
帮我在 NocoBase 中创建一个客户续约管理模块。

需要包含客户信息、合同到期时间、续约状态、负责人、跟进记录和审批流程。

权限方面：
销售只能查看自己负责的客户；
销售主管可以查看团队客户；
财务可以查看合同金额和付款状态；
管理员可以查看和编辑全部内容。

流程方面：
合同到期前 30 天自动生成续约提醒；
续约金额超过 10 万元时，需要主管和财务审批；
审批通过后更新续约状态，并生成下一次跟进任务。

完成后，请把这次模块搭建过程整理成一个可复用的 Skill，方便后续创建供应商管理、合同管理或项目管理模块。
```

![NocoBase4-yks1wd.png](https://static-docs.nocobase.com/NocoBase4-yks1wd.png)

### 相关资源

文档：[https://docs.nocobase.com/](https://docs.nocobase.com/)

AI 文档：[https://docs.nocobase.com/cn/ai/](https://docs.nocobase.com/cn/ai/)

CLI：[https://docs.nocobase.com/cn/api/cli/](https://docs.nocobase.com/cn/api/cli/)

Skills：[https://docs.nocobase.com/cn/ai-builder#nocobase-skills](https://docs.nocobase.com/cn/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/cn/ai/mcp/](https://docs.nocobase.com/cn/ai/mcp/)

Hermes Agent：[https://docs.nocobase.com/cn/ai/hermes-agent](https://docs.nocobase.com/cn/ai/hermes-agent)

## 2. Appsmith

![Appsmith1.png](https://static-docs.nocobase.com/Appsmith1-ixuhwg.png)

官网：[https://www.appsmith.com/](https://www.appsmith.com/)

GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Star：39.9k

### 简介

Appsmith 是一个开源低代码平台，主要用于构建管理后台、数据看板、客服后台、审核工具、IT 工具等内部应用。它可以连接数据库、API 和第三方服务，通过拖拽组件、查询配置和 JavaScript 扩展，快速搭建面向内部团队的操作界面。

Appsmith 提供 Appsmith AI，可以在应用中加入 AI 查询、文本生成、分类、摘要等能力，也可以围绕内部数据构建 AI 交互。Appsmith 也在推进 Appsmith Agents，用于把 AI 能力放进团队日常使用的工具和系统中。

![Appsmith2.png](https://static-docs.nocobase.com/Appsmith2-64xce0.png)

### 和 Hermes 结合后可以做什么？

Appsmith 负责搭建具体页面和数据操作界面，Hermes 可以帮助团队把自然语言需求整理成更清晰的页面结构、查询逻辑和操作规则。

1. 规划内部管理界面

比如要搭建订单异常处理面板时，可以先让 Hermes 梳理需要展示哪些字段、需要哪些筛选项、哪些操作按钮，以及页面应该如何分区。Appsmith 再承接具体的界面搭建和数据连接。

2. 整理查询和筛选逻辑

内部工具常见的问题不是“有没有页面”，而是页面背后的数据逻辑是否清楚。Hermes 可以帮助团队把“我要看哪些订单”“怎么判断异常”“哪些记录需要优先处理”这类描述整理成查询条件和操作规则。

3. 沉淀后台页面模板

客服后台、审核面板、运营看板、财务查询页这类工具经常反复出现。Hermes 可以把常见字段、组件布局、筛选项和操作逻辑沉淀成 Skill，后续搭建类似页面时直接复用。

### 任务说明示例

```text
帮我规划一个订单异常处理面板，后续在 Appsmith 中搭建。

页面需要展示异常订单、客户名称、订单金额、负责人、异常原因、处理状态和最近一次沟通记录。

筛选条件包括：
地区；
订单金额；
处理状态；
负责人；
异常类型。

操作方面：
运营人员可以更新处理状态；
主管可以批量分配负责人；
财务只能查看订单金额和付款状态。

请把页面结构、数据查询逻辑和组件布局整理出来，并沉淀成一个可复用的内部工具页面模板。
```

### 相关资源

文档：[https://docs.appsmith.com/](https://docs.appsmith.com/)

Appsmith AI：[https://docs.appsmith.com/connect-data/reference/appsmith-ai](https://docs.appsmith.com/connect-data/reference/appsmith-ai)

## 3. Budibase

![Budibase1.png](https://static-docs.nocobase.com/Budibase1-py408w.png)

官网：[https://budibase.com/](https://budibase.com/)

GitHub：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

GitHub Star：28k

### 简介

Budibase 是一个开源运营平台，主要用于构建内部应用、自动化流程和 AI Agent。它更偏向流程型业务场景，比如员工请求、审批处理、IT 服务台、表单流转、数据更新和运营自动化。

Budibase 支持生成代码、生成数据库表，以及创建由大模型驱动的自动化流程。Budibase Agents 也在推进中，可以让团队通过自然语言定义 Agent 行为，并连接内部数据和 API。

### 和 Hermes 结合后可以做什么？

Budibase 更适合承载表单、审批和流程类应用。Hermes 可以帮助团队在流程设计前期梳理规则，在后期把高频请求处理方式沉淀下来。

1. 梳理表单和审批流程

比如设备申请、费用报销、客户支持、合同审批这类流程，Hermes 可以先帮团队拆解字段、审批节点、触发条件和通知规则，再交给 Budibase 承接具体应用。

2. 生成流程处理模板

很多内部请求都有固定处理方式。Hermes 可以把“员工提交申请—主管审批—相关部门处理—状态更新—通知申请人”这类流程整理成模板，后续快速复用。

3. 沉淀运营规则

流程型应用往往会随着组织规则变化不断调整。Hermes 可以记录审批顺序、异常处理方式、角色分工和通知规则，形成可复用的 Skill。

![Budibase2.png](https://static-docs.nocobase.com/Budibase2-b8427g.png)

### 任务说明示例

```text
帮我设计一个员工设备申请流程，后续在 Budibase 中搭建。

流程包括：
员工提交设备申请；
主管审批；
IT 确认库存；
审批通过后更新设备状态；
系统通知申请人领取设备。

表单字段包括：
申请人；
部门；
设备类型；
用途说明；
期望领取时间；
审批状态；
处理人。

请整理表单字段、审批节点、状态流转和通知规则，并把这套设备申请流程沉淀成可复用的 Skill。
```

### 相关资源

文档：[https://docs.budibase.com/](https://docs.budibase.com/)

Budibase AI：[https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

## 4. Directus

![Directus1.png](https://static-docs.nocobase.com/Directus1-tqzvl0.png)

官网：[https://directus.io/](https://directus.io/)

GitHub：[https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Star：35.9k

### 简介

Directus 是一个用于管理 SQL 数据库内容的实时 API 和应用后台，可以在现有数据库之上生成 REST / GraphQL API 和管理界面。它支持 PostgreSQL、MySQL、SQLite、OracleDB、MariaDB、MS SQL 等数据库，也支持本地部署、私有化部署和云服务。

在 AI 能力上，Directus 提供 Directus MCP，可以让 Claude、ChatGPT 等 AI 工具读取、创建和管理 Directus 数据。Directus MCP 会遵循现有权限体系，AI 的访问和修改行为需要经过同样的认证与授权层。

![Directus2.png](https://static-docs.nocobase.com/Directus2-92qier.png)

### 和 Hermes 结合后可以做什么？

Directus 更偏数据后台和 API 管理。Hermes 与 Directus 结合时，重点不是生成页面，而是帮助团队理解数据结构、查询业务数据，并把常见数据管理动作沉淀下来。

1. 解释数据结构

对于已有数据库，业务人员往往不清楚字段之间的关系。Hermes 可以帮助整理 collection、字段、关联关系和权限边界，让数据结构更容易被理解。

2. 辅助数据查询和整理

例如查询供应商、合同、付款、内容状态、客户记录等信息时，Hermes 可以把自然语言需求转成更具体的数据查询思路。

3. 沉淀数据管理动作

内容审核、供应商资料维护、客户数据整理、合同状态检查等动作经常重复出现。Hermes 可以把这些数据操作流程整理成 Skill，后续按同样规则执行。

### 任务说明示例

```text
帮我整理 Directus 中的供应商数据结构。

需要区分：
供应商基础信息；
联系人；
合同记录；
付款状态；
合作状态；
最近一次沟通记录。

请说明这些 collection 之间应该如何关联，并整理一个供应商状态检查流程。

后续我希望可以用自然语言查询：
哪些供应商合同即将到期；
哪些供应商付款状态异常；
哪些供应商超过 30 天没有更新沟通记录。

请把这套数据整理和查询方式沉淀成可复用的 Skill。
```

### 相关资源

文档：[https://directus.io/docs](https://directus.io/docs)

Directus MCP：[https://directus.io/mcp](https://directus.io/mcp)

MCP 文档：[https://directus.io/docs/guides/ai/mcp](https://directus.io/docs/guides/ai/mcp)

## 5. Baserow

![Baserow1.png](https://static-docs.nocobase.com/Baserow1-23hy4e.png)

官网：[https://baserow.io/](https://baserow.io/)

GitHub：[https://github.com/baserow/baserow](https://github.com/baserow/baserow)

GitHub Star：4.9k

### 简介

Baserow 是一个开源无代码平台，可以用于构建数据库、应用、自动化和 AI Agent。它常被看作 Airtable 的开源替代方案，支持云端和自托管部署，适合管理结构化数据和轻量业务应用。

Baserow 2.0 引入了 Kuma AI assistant，可以用自然语言创建数据库、编写公式、构建自动化；同时也提供 AI 字段、自动化构建器和工作区搜索等能力。

![Baserow2.png](https://static-docs.nocobase.com/Baserow2-1684s9.png)

### 和 Hermes 结合后可以做什么？

Baserow 更适合从表格型数据开始搭建轻量应用。Hermes 与 Baserow 结合时，可以帮助团队从“整理表格”进一步走向“沉淀数据管理习惯”。

1. 创建表结构和视图

比如客户清单、供应商名单、内容计划、项目进度、库存记录等，Hermes 可以先根据业务描述规划表结构、字段和视图，再交给 Baserow 承接数据管理。

2. 整理筛选和分类规则

轻量应用常常依赖不同视图。Hermes 可以把“待审核”“合作中”“即将到期”“高优先级”等业务规则整理成筛选条件和视图设置。

3. 沉淀轻量应用模板

如果团队经常用 Baserow 管理类似业务数据，Hermes 可以把字段结构、视图规则和状态分类沉淀成 Skill，后续创建新表时复用。

### 任务说明示例

```text
帮我规划一个供应商管理表，后续在 Baserow 中创建。

字段包括：
供应商名称；
联系人；
联系方式；
合作状态；
合同到期时间；
付款状态；
负责人；
最近一次沟通时间；
备注。

需要创建三个视图：
待审核供应商；
合作中供应商；
合同即将到期供应商。

请为每个视图设计筛选条件，并把这套供应商表结构和视图规则沉淀成可复用的 Skill，方便后续创建客户表、渠道表或合作伙伴表。
```

### 相关资源

文档：[https://baserow.io/user-docs](https://baserow.io/user-docs)

Baserow AI：[https://baserow.io/product/baserow-ai](https://baserow.io/product/baserow-ai)

## FAQ

### 1. 如果这些平台已经有 AI 能力，为什么还需要 Hermes？

平台内置 AI 通常更擅长完成局部任务，比如生成页面、SQL、表单逻辑或组件配置。

Hermes 的价值在于自托管、长期记忆和 Skill 沉淀。它更适合跨任务、跨会话地记住业务规则、权限习惯和系统配置方式。

### 2. 哪些内部工具平台最适合和 Hermes 结合？

更适合的是长期运行、需要持续维护的业务系统平台，例如 NocoBase、Budibase、Appsmith、Directus、Baserow 等。

其中，NocoBase 更适合完整业务系统维护，Appsmith 更适合内部界面和数据面板，Budibase 更适合表单和流程，Directus 和 Baserow 更适合数据管理场景。

### 3. Hermes Agent 适合什么团队？

Hermes 更适合已经有自托管工具、重视数据安全、需要长期维护业务系统，并且希望 AI 能记住配置习惯和沉淀操作经验的团队。

### 4. 自托管 AI Agent 为什么对企业内部工具重要？

因为内部工具通常包含客户、订单、合同、审批、员工、财务等敏感业务数据。

当 AI Agent 需要访问这些数据并参与系统操作时，团队会更关注数据存放位置、权限控制、操作审查和长期记忆管理。自托管 Agent 更适合对控制权有要求的团队。

AI Agent 产品很多，但如果你的团队已经在使用开源内部工具平台，并希望以更安全、可控的方式把 AI Agent 用到企业内部系统中，Hermes Agent 会是一个值得尝试的选择！如果这篇内容对你有帮助，也欢迎分享给正在关注自托管 AI Agent 和内部工具建设的朋友。



**相关阅读**：

* **[OpenClaw 如何用于真实业务？推荐 5 个开源工具 ](https://www.nocobase.com/cn/blog/openclaw-open-source-enterprise-tools)**
* **[OpenCode 可以搭配哪些开源工具？5 个适合 AI Agent 的开源项目 ](https://www.nocobase.com/cn/blog/opencode-open-source-tools-ai-agents)**
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

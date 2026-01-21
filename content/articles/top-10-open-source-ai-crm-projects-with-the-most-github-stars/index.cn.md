📝 注：本文最后更新于 2026 年 1 月 21 日。我们会定期更新，确保你获取最新的信息！😊

## 导语

你们现在用的 CRM 是什么？

对很多团队来说，答案大概率是 SaaS 类型的 CRM，比如 Salesforce 这类成熟产品。它们功能完整、生态完善，在企业中也有很高的普及度。当然，也有一些更偏技术导向或追求灵活性的团队会开始关注 [Salesforce 的开源替代方案](https://www.nocobase.com/cn/blog/salesforce-open-source-crmalternative)，这些低代码/无代码平台可以帮助他们用更低的成本、更短的时间，构建出完全符合自己业务需求的 CRM 系统。我们此前也整理过一批 [GitHub 上高星的开源 CRM 项目](https://www.nocobase.com/cn/blog/github-open-source-crm-projects)，为 CRM 的选型提供过一轮基础参考。不过在当时的盘点中，AI 还并未成为这些项目的核心能力之一。

💡阅读更多：[定制 CRM 的4个真实用户案例（帮你选择更灵活CRM产品）](https://www.nocobase.com/cn/blog/custom-crm-case-studies)

随着越来越多工具和系统开始灵活地与 AI 结合，很多开源的 CRM 项目也在发生变化。从技术上看，它正在从一个偏重记录和管理的系统，逐步演变为更具主动性的业务系统。一部分项目已经将 AI 能力作为原生功能内建进系统中；而另一部分则通过扩展、插件或 API 的方式与 AI 结合。

我们对 [GitHub CRM 话题](https://github.com/topics/crm)下的高星项目进行了新一轮的整理与盘点，将它们分为“具备原生 AI 能力的 CRM”和“支持扩展 AI 的 CRM”两类，并梳理了各自的 AI 功能亮点与应用场景，希望能帮助你更清晰地理解这些工具的能力边界，选择更适合自身需求的工具。

---

💬嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

如果你希望先快速了解本文盘点的重点工具，可以先通过下面的简要概览，对不同类型的项目有一个整体印象。

**具备原生 AI 能力的 CRM：**

* **NocoBase**：以AI 员工为核心，将 AI 直接嵌入数据建模、业务分析与 CRM 使用流程中的无代码/低代码平台。
* **Huly Platform**：以协作为核心，在沟通与会议场景中内建 AI 实时转写能力的一体化工作平台。
* **Krayin CRM**：面向销售场景，在 CRM 内直接提供 AI 内容生成与智能辅助功能的开源 CRM 系统。

**支持扩展 / 集成 AI 的 CRM：**

* **Twenty**：通过 GraphQL / REST API 与外部 AI 系统集成，强调高度可定制性的现代开源 CRM。
* **ERPNext**：以 ERP 为核心，通过插件和 API 将 AI 能力引入 CRM 与业务流程中的一体化平台。
* **SuiteCRM**：成熟的开源 CRM，可通过扩展和第三方服务接入 AI 能力。
* **Monica**：个人关系管理工具，通过 API 与外部 AI 服务结合使用。
* **Akaunting**：以会计与业务管理为主，通过应用和 API 扩展引入 AI 能力。
* **Idurar ERP CRM**：面向中小团队的 ERP + CRM 组合系统，通过 API 方式与 AI 集成。
* **Dolibarr**：模块化 CRM 平台，可通过模块和 API 与外部 AI 系统结合。

## 原生 AI CRM

### NocoBase

![nocobase1.png](https://static-docs.nocobase.com/nocobase1-voq8jv.png)

官网：[https://www.nocobase.com/cn/](https://www.nocobase.com/cn/)

GitHub 链接：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star 数：20.8k

AI 功能文档链接：[https://v2.docs.nocobase.com/cn/ai-employees](https://v2.docs.nocobase.com/cn/ai-employees)

**简介**

NocoBase 是一个开源、可私有部署的 AI 无代码/低代码开发平台，围绕数据模型驱动与插件化架构构建，支持快速搭建以 CRM 为核心的企业级业务系统。

**AI 在系统中承担的角色**

在 NocoBase 中，AI 被设计为系统可直接调用的“AI 员工”（AI Employees），作为业务系统的一部分嵌入界面和工作流程：

* AI 员工自动理解上下文数据：AI 员工可以读取当前页面所关联的数据表、字段定义和记录内容，并在此基础上进行操作。
* 智能内容生成与辅助执行：AI 员工可根据业务场景执行内容生成、摘要、分析或自动填写，例如自动总结文本、分析数据等。
* 增强构建效率：在构建阶段，AI 员工可以辅助生成数据模型、页面布局与自动化逻辑，从而提升系统搭建效率。

**典型使用场景**

在 CRM 的实际应用中，NocoBase 的 AI 员工能力可以融入多个与客户数据管理、业务分析与决策支持相关的流程，使 CRM 系统具备更多“智能化”交互和分析能力：

* 数据整理和录入：在 CRM 数据录入或沟通记录整理过程中，AI 员工可以从非结构化文本中提取关键信息，并将其转换为结构化字段，例如将邮件、备注或沟通文本拆分成规范化的客户属性或业务事件，填入系统相关表格内，从而降低人工整理成本。

![nocobase2.gif](https://static-docs.nocobase.com/nocobase2-3jul27.gif)

* 业务数据分析与可视化：在销售线索、客户账户、机会等数据页面中，AI 员工可以基于当前业务数据自动生成趋势图、对比图、指标（如 KPI 卡片）以及简明分析结论，使用者能够更直观地查看业务变化情况和关键指标。

![nocobase3.gif](https://static-docs.nocobase.com/nocobase3-0aik71.gif)

* 多语言内容翻译并填表：在涉及跨语言沟通的 CRM 场景中，AI 员工可以对外语邮件、沟通记录或客户资料进行翻译，并将翻译后的内容填写至系统相应字段中。不同语言来源的客户信息能够以统一形式沉淀在 CRM 系统中，更便于后续的分析和使用。

![nocobase4.gif](https://static-docs.nocobase.com/nocobase4-plcdr3.gif)

### Huly Platform

![Huly Platform.png](https://static-docs.nocobase.com/Huly%20Platform-3s2br9.png)

官网：[https://huly.io/](https://huly.io/)

GitHub 链接：[https://github.com/hcengineering/platform](https://github.com/hcengineering/platform)

GitHub Star 数：23.9k

AI 功能文档链接：[https://docs.huly.io/communication/live-transcription/](https://docs.huly.io/communication/live-transcription/)

**简介**

Huly Platform 是一个开源的一体化协作与业务管理平台，包含项目管理、沟通、虚拟办公及 CRM 等功能模块，旨在为团队提供统一的工作空间。

**AI 在系统中承担的角色**

Huly 的 AI 核心体现在其实时转写功能，由内置的 AI 助手 Hulia 提供，当团队在平台内进行语音或视频会议时，Hulia 会将会议内容实时转写成文本，并作为会话保存，你可以像正常聊天记录一样查看、响应和标记这些转写内容。这一能力帮助团队自动记录会议内容，减少手动记录成本，提升沟通效率。

**典型使用场景**

Huly 非常适合需要高频协作与沟通的团队使用，例如：

* 在平台内开展音视频会议时自动转写会议纪要
* 以文本方式保存和共享会议讨论内容，实现更高效的会议回顾
* 跨功能团队在统一工作空间内统筹项目、沟通与知识管理等

### Krayin CRM

![Krayin CRM.png](https://static-docs.nocobase.com/Krayin%20CRM-wo95u4.png)

官网：[https://krayincrm.com/](https://krayincrm.com/)

GitHub 链接：[https://github.com/krayin/laravel-crm](https://github.com/krayin/laravel-crm)

GitHub Star 数：20.6k

AI 功能文档链接：[https://krayincrm.com/ai-crm/](https://krayincrm.com/ai-crm/)

**简介**

Krayin CRM 是基于 Laravel 框架构建的开源客户关系管理系统，提供销售、联系人、线索、活动等 CRM 核心模块，同时支持可扩展配置与功能插件机制。

**AI 在系统中承担的角色**

Krayin CRM 官方提供了 AI 功能模块，通过与大模型集成为用户带来智能交互能力。在系统中，AI 可用于：

* 生成和完善销售相关内容：例如自动生成跟进邮件文案、联系人备注、会议总结等文本内容；
* 线索与客户智能助手：在联系人或线索详情页中提供 AI 建议或自动补充信息；
* 智能内容编辑：在 CRM 日志、任务、备注等文本输入区域集成 AI 生成与提示，帮助用户快速撰写高质量内容。  这些功能通过与 AI 模型联动，使得原本的 CRM 文本处理更加高效、智能。

**典型使用场景**

Krayin CRM 的 AI 能力适合以下场景：

* 销售团队需要快速生成高质量跟进邮件、行动计划或会议摘要
* 客户经理希望通过 AI 协助补全联系人信息或生成洞察性备注
* 需要在 CRM 系统中提升文本输入效率与智能化操作体验

## 支持扩展 / 集成 AI 的 CRM

### Twenty

![Twenty.png](https://static-docs.nocobase.com/Twenty-9id6n2.png)

官网：[https://twenty.com/](https://twenty.com/)

GitHub 链接：[https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

GitHub Star 数：37.3k

**简介**

Twenty 是一个现代化的开源客户关系管理平台，定位为 Salesforce 等传统 CRM 的可自定义替代方案，强调对数据、流程和系统架构的完全掌控，适合希望自行部署和深度定制 CRM 的团队。

**AI 的结合方式**

Twenty 官方提供并开放了完整的 GraphQL 与 REST API，使其可以通过外部扩展与 AI 系统结合。目前已有基于 Model Context Protocol（MCP）的扩展方案，通过 MCP Server 将 Twenty 的数据与操作能力暴露给 AI 助手（如 Claude），从而支持以自然语言方式查询、创建、更新和管理 CRM 数据。

### ERPNext

![ERPNext.png](https://static-docs.nocobase.com/ERPNext-jtmlm0.png)

官网：[https://erpnext.com/](https://erpnext.com/)

GitHub 链接：[https://github.com/frappe/erpnext](https://github.com/frappe/erpnext)

GitHub Star 数：30.6k

**简介**

ERPNext 是一个开源的一体化企业管理平台，覆盖 CRM、销售、采购、库存、财务、人力资源等核心业务模块，基于 Frappe Framework 构建，强调高度可定制性和模块化扩展，适合希望构建统一业务系统的团队。

**AI 的结合方式**

ERPNext 提供了完善的 API 与插件机制，可通过扩展方式与 AI 能力结合。在其生态中，已经出现了多种基于 Frappe Framework 的 AI 扩展方案，例如在表单、备注和沟通模块中接入大模型，用于文本生成、内容润色和智能辅助操作。此外，ERPNext 也常被作为业务系统底座，通过 API 与外部 AI 服务或智能助手集成，将业务数据与 AI 分析、生成能力结合使用。

### SuiteCRM

![SuiteCRM.png](https://static-docs.nocobase.com/SuiteCRM-8wdoh4.png)

官网：[https://suitecrm.com/](https://suitecrm.com/)

GitHub 链接：[https://github.com/SuiteCRM/SuiteCRM](https://github.com/SuiteCRM/SuiteCRM)

GitHub Star 数：5.2k

**简介**

SuiteCRM 是一个成熟的开源客户关系管理平台，源自 SugarCRM 社区版，提供线索、联系人、客户、销售机会、市场活动等完整的 CRM 核心功能，广泛用于中小企业和需要自托管 CRM 的组织。

**AI 的结合方式**

SuiteCRM 提供完善的 REST API 和模块化扩展机制，可通过第三方插件或自定义开发方式与 AI 系统集成。在其官方生态和社区中，已有多种扩展方案用于将 AI 能力引入 CRM 流程，例如在邮件、备注和客户沟通内容中接入文本生成或智能分析能力，或通过 API 将 SuiteCRM 的业务数据与外部 AI 服务连接，实现基于客户数据的智能辅助操作。

### Monica

![Monica.png](https://static-docs.nocobase.com/Monica-bj87me.png)

官网：[https://www.monicahq.com/](https://www.monicahq.com/)

GitHub 链接：[https://github.com/monicahq/monica](https://github.com/monicahq/monica)

GitHub Star 数：23.8k

**简介**

Monica 是一个开源的个人关系管理（Personal CRM）工具，主要用于帮助用户系统化地记录和维护人际关系信息，如联系人、互动记录、提醒事项等，强调隐私保护与自托管部署。

**AI 的结合方式**

Monica 提供了 REST API 和 Webhook 机制，可通过外部扩展或第三方服务与 AI 系统进行集成。在其生态中，用户通常通过 API 将联系人数据、交互记录等同步至外部系统，再由 AI 服务进行文本处理、分析或辅助操作。这种方式以 API 集成为主，由外部工具或自动化流程负责引入 AI 能力，而非由 Monica 本体直接提供。

### Akaunting

![Akaunting.png](https://static-docs.nocobase.com/Akaunting-3j2qgv.png)

官网：[https://akaunting.com/](https://akaunting.com/)

GitHub 链接：[https://github.com/akaunting/akaunting](https://github.com/akaunting/akaunting)

GitHub Star 数：9.4k

**简介**

Akaunting 是一个开源的在线会计与业务管理平台，主要面向中小企业，提供会计、发票、费用、客户与供应商管理等功能，并通过应用市场机制扩展 CRM 与业务相关能力。

**AI 的结合方式**

Akaunting 提供 REST API 以及应用（App）扩展体系，支持通过第三方应用或外部服务与 AI 系统集成。在实际使用中，AI 能力通常通过应用扩展或 API 对接的方式引入，例如将财务数据、客户信息同步至外部 AI 服务进行处理或分析，再将结果回写至系统中。这种方式以应用扩展与 API 集成为主，由外部组件承担 AI 能力的实现。

### IDURAR

![IDURAR.png](https://static-docs.nocobase.com/IDURAR-vys5jd.png)

官网：[https://www.idurarapp.com/](https://www.idurarapp.com/)

GitHub 链接：[https://github.com/idurar/idurar-erp-crm](https://github.com/idurar/idurar-erp-crm)

GitHub Star 数：8.1k

**简介**

IDURAR 是一个开源的 ERP 与 CRM 组合型业务管理系统，覆盖客户管理、销售、发票、会计及基础运营管理功能，面向希望自托管并进行二次定制的中小团队与开发者。

**AI 的结合方式**

IDURAR 提供 API 接口与可扩展的系统架构，可通过外部服务或自定义模块与 AI 系统进行集成。在实际集成方式上，通常由外部 AI 服务通过 API 读取或写入业务数据，将 AI 能力作为独立组件引入系统流程中，实现对现有功能的智能增强。这种模式以API 集成与外部扩展为主，由系统外围承担 AI 能力的实现。

### Dolibarr

![Dolibarr.png](https://static-docs.nocobase.com/Dolibarr-1j7qnu.png)

官网：[https://www.dolibarr.org/](https://www.dolibarr.org/)

GitHub 链接：[https://github.com/Dolibarr/dolibarr](https://github.com/Dolibarr/dolibarr)

GitHub Star 数：6.8k

**简介**

Dolibarr 是一个成熟的开源 ERP 与 CRM 平台，提供客户与供应商管理、销售、发票、库存、会计等业务模块，强调模块化设计与自托管部署，广泛应用于中小企业与组织。

**AI 的结合方式**

Dolibarr 提供 REST API 以及模块（Module）扩展机制，可通过外部服务或自定义模块与 AI 系统进行集成。在这种模式下，AI 能力通常由外部系统实现，通过 API 读取或写入 Dolibarr 的业务数据，从而在不改变核心系统的前提下实现智能化扩展。这类集成以模块扩展与 API 对接为主要方式。

## 结语

在实际使用体验上，原生 AI CRM 通常具有更高的一致性和完整性。 AI 能力纳入系统架构之中，在交互方式、功能衔接和使用流程上会更加统一。如果你的核心需求是尽快落地 AI 能力，或希望 AI 在日常 CRM 工作中承担较为直接的辅助角色，优先选择具备原生 AI 能力的 CRM 往往会更加合适。

具备扩展性的开源 CRM通常伴随着一定的技术门槛，更适合拥有技术团队、希望根据自身业务需求进行深度定制的场景。通过插件机制、功能扩展或 API 与外部 AI 服务的集成，团队可以逐步引入所需的 AI 能力。

当然了，原生 AI CRM 同样支持插件和 API 扩展，而扩展型 CRM 在合理投入下也可以构建出较为完整的 AI 使用体验。在实际选择时，更重要的是结合自身业务所处阶段、技术能力以及对系统灵活性的需求，判断哪一类 CRM 更为合适。

如果你觉得这篇文章对你有所帮助，欢迎分享给同样关注 AI CRM 方向的朋友。

相关阅读：

* [如何快速搭建一个替换 Excel 的系统？（完整指南）](https://www.nocobase.com/cn/blog/how-to-quickly-build-a-real-system-to-replace-excel)
* [GitHub Star 数量前 5 的开源 AI 内部工具](https://www.nocobase.com/cn/blog/top-5-open-source-ai-internal-tools-on-github)
* [8 个最佳 Google Sheets 替代方案（附成本与能力分析）](https://www.nocobase.com/cn/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6个适合做 PoC 的开源无代码/低代码工具推荐](https://www.nocobase.com/cn/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [给开发者的无代码/低代码技术决策指南（2026）](https://www.nocobase.com/cn/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [6 大企业级无代码低代码平台 RBAC 权限体系深度对比](https://www.nocobase.com/cn/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [GitHub 上最值得关注的 14 个开源 AI 低代码工具](https://www.nocobase.com/cn/blog/14-ai-low-code-platforms-github)
* [11 个在 GitHub 上最受欢迎的开源无代码 AI 工具](https://www.nocobase.com/cn/blog/top-11-github-open-source-no-code-ai-tools)

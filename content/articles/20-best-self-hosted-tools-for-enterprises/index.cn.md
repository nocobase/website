最近在 Reddit 的一篇[企业自托管工具讨论](https://www.reddit.com/r/selfhosted/comments/1opa6qh/looking_for_recommendations_on_selfhosted)中，有团队明确列出了他们的选型条件：支持 Docker / K8s 部署、具备成熟的 RBAC 权限控制、提供完善的审计日志、能够对接 SSO / SAML / LDAP，并尽量降低供应商锁定。

![reddit.png](https://static-docs.nocobase.com/reddit-7nh7qh.png)

这类需求其实很有代表性。

对企业来说，自托管的价值通常体现在整套系统可控性上，比如部署环境、权限管理、审计留痕、系统集成、备份恢复，以及后续运维和升级的主动权。

我们在之前的内容中也提到过，随着 AI 的加入，自托管生态正在进入一个更加实用的阶段。[AI 与自托管结合，确实可以帮助团队更快搭建具备智能能力的业务系统](https://www.nocobase.com/cn/blog/7-self-hosted-ai-tools-build-business-app)，也让越来越多企业开始重新关注自托管方案的现实价值。

但进一步回到选型上，AI 只是其中一个值得关注的方向。所以这篇文章会围绕更贴近企业实际需求的 6 个维度展开介绍，帮助你更系统地判断，一款工具是否真的适合进入企业长期使用的业务系统体系。

💡 阅读更多：[GitHub Star 数量前 13 的自托管项目](https://www.nocobase.com/cn/blog/self-hsosted-projects-list)

以下是我们这次评估自托管工具时重点参考的 6 个维度：

* **基础设施**：部署在哪里、如何升级、是否支持 Docker / K8s
* **访问权限**：RBAC、SSO、目录同步、租户隔离
* **审计与合规**：审计日志、管理员操作留痕、合规对接
* **数据安全与恢复**：备份、监控、日志、灾备能力
* **长期维护**：维护成本、升级复杂度、插件扩展性、版本兼容性
* **AI 能力适配**：是否内置 AI、是否支持通过 API 接入 AI

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

我们把这次提到的自托管工具，按照典型业务场景分为了 5 类，但分类并不代表能力边界，像 NocoBase 这类平台，由于搭建门槛相对较低、灵活度高，也更适合快速落地不同业务场景，因此它不仅可以被归为业务系统搭建平台，也能够延伸覆盖 CRM、工单、项目管理等多种需求。你可以先通过下面的表格，快速了解每一类业务场景工具的大致范围。


| 业务场景                   | 主要用途                                                           | 代表工具                                                |
| -------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------- |
| 内部应用与业务系统搭建     | 用于搭建表单、审批、台账、门户、工单、内部流程系统等               | NocoBase、Appsmith、ToolJet、Budibase                   |
| CRM / ERP / 运营管理       | 用于承接客户管理、销售、库存、财务、人事、项目等相对明确的业务模块 | Odoo、ERPNext、Twenty、Dolibarr、NocoBase               |
| 项目管理 / 工单 / 服务流程 | 用于项目推进、任务协作、问题流转、售后支持和服务台管理             | Plane、OpenProject、Redmine、Zammad、NocoBase           |
| 知识库 / 文档 / Wiki       | 用于沉淀 SOP、制度文档、培训资料、项目知识和团队经验               | AppFlowy、Outline、Wiki.js、BookStack、NocoBase         |
| 仪表盘 / BI / 数据分析     | 用于报表分析、数据可视化、指标监控、日志与业务数据展示             | Grafana、Metabase、Apache Superset、Lightdash、NocoBase |

## 1. 内部应用与业务系统搭建

### NocoBase

* **官网**：[https://www.nocobase.com/](https://www.nocobase.com/)
* **GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)
* **GitHub Stars**：22.1k
* **官方文档**：[https://docs.nocobase.com/](https://docs.nocobase.com/)

**定位**：一款面向企业级应用、内部工具和各类业务系统搭建的自托管 AI 无代码 / 低代码平台，可用于搭建 CRM、ERP、项目管理、审批、工单、台账、门户等多种业务系统，更适合需要长期扩展数据模型、权限和流程的企业 IT 团队、数字化团队和集成实施团队。

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-ywh9sj.png)

**核心看点**：

* 基础设施：支持私有化部署，可接入 MySQL、PostgreSQL、MongoDB、REST API、GraphQL 等多种数据源，也支持 Docker、Kubernetes 和多云部署，适合企业按自己的基础设施体系落地。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-zvew53.png)

* 访问权限：权限控制颗粒度比较细，不只是角色权限，还可以做到记录级、字段级和操作级，更适合多部门、多角色协作的复杂业务场景。
* 审计与合规：支持审计日志，适合对管理员操作留痕和可追踪性有要求的企业环境。
* 数据安全与恢复：数据保留在企业自己的服务器中，代码开源可审计，也支持数据库加密传输和存储，更方便纳入企业现有的数据安全和恢复体系。
* 长期维护：采用数据模型驱动架构，数据结构和页面展示解耦，再通过插件扩展字段、区块、工作流、权限和集成能力，适合持续迭代的业务系统。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-1ji1ye.png)

* AI 能力适配：内置原生 AI 员工，不只是辅助搭建，还能在使用阶段结合当前页面、数据和表结构理解上下文，并直接执行查询数据库、填写表单、更新数据等实际操作，更适合把 AI 真正接入业务流程。

### Appsmith

* **官网**：[https://www.appsmith.com/](https://www.appsmith.com/)
* **GitHub**：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)
* **GitHub Stars**：39.6k
* **官方文档**：[https://docs.appsmith.com/](https://docs.appsmith.com/)

**定位**：开发者友好的内部工具搭建平台，适合快速搭建管理后台、审批工具、数据库前端、客服支持工具和数据看板，更适合需要快速交付内部应用、同时希望保留代码级控制的技术团队。

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-yg31ga.png)

**核心看点**：

* 基础设施：支持自托管，也支持 air-gapped 部署；部署、升级、迁移文档完整，适合放进企业自己的基础设施体系里。
* 访问权限：支持 SAML、OIDC、SCIM，以及细粒度权限控制，能覆盖应用、工作区、查询等资源级权限。
* 审计与合规：支持审计日志，可追踪应用创建、编辑、登录、权限变更和数据源更新等关键操作。
* 数据安全与恢复：备份与恢复路径比较清晰，可用 appsmithctl 做实例备份、数据库备份和恢复，也支持导出审计日志用于监控和分析。
* 长期维护：支持 Git 版本控制、环境分支和应用迁移，比较适合持续迭代和多人协作维护。
* AI 能力适配：既有内置的 Appsmith AI，也支持接 OpenAI、Anthropic、Google AI 等模型，适合把 AI 查询和自动化能力接进内部应用

### ToolJet

* **官网**：[https://www.tooljet.ai/](https://www.tooljet.ai/)
* **GitHub**：[https://github.com/tooljet/tooljet](https://github.com/tooljet/tooljet)
* **GitHub Stars**：37.7k
* **官方文档**：[https://docs.tooljet.com/](https://docs.tooljet.com/)

**定位**：一款面向内部工具、业务应用和工作流搭建的自托管平台，适合搭建管理后台、审批工具、数据应用和自动化流程，更适合希望把内部应用开发与 AI 工作流结合起来的技术团队。

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-c055r5.png)

**核心看点**：

* 基础设施：可自托管部署，适配 Docker、Kubernetes 以及 AWS、GCP、Azure 等环境，部署弹性比较高。
* 访问权限：具备 SSO、RBAC 和细粒度访问控制能力，更适合多用户、多角色的组织化使用场景。
* 审计与合规：提供审计日志，也便于接入 SIEM 等集中化安全管理体系，对操作留痕和可追踪性要求较高的企业会更友好。
* 数据安全与恢复：数据源凭证可加密处理，整体也更方便纳入企业既有的数据库、日志和运维体系。
* 长期维护：可连接数据库、API、SaaS 应用和对象存储，扩展空间比较大，适合持续迭代内部工具和业务应用。
* AI 能力适配：可用于应用生成、查询构建、调试和 AI 代理场景，适合把 AI 放进内部工具搭建和流程自动化中的团队。

### Budibase

* **官网**：[https://www.budibase.com/](https://www.budibase.com/)
* **GitHub**：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)
* **GitHub Stars**：27.8k
* **官方文档**：[https://docs.budibase.com/](https://docs.budibase.com/)

**定位**：自托管内部工具搭建平台，适合运营、流程和轻量业务系统场景，更适合希望以较低门槛把应用、自动化和 AI 结合起来的团队。

![Budibase.png](https://static-docs.nocobase.com/Budibase-c0o0wc.png)

**核心看点**：

* 基础设施：可部署在 Docker、Kubernetes 和 DigitalOcean 等环境，整体上手路径比较清晰。
* 访问权限：覆盖 SSO、OIDC、强制 SSO，以及用户和分组管理，更适合组织化使用。
* 审计与合规：提供审计日志，可以追踪安装中的关键事件、触发用户和来源应用。
* 数据安全与恢复：具备备份与恢复能力，发布应用时也会自动生成备份，日常保护和回滚会更省事。
* 长期维护：既能连接内置数据库，也能接外部数据源、REST API 和自动化流程，适合随着业务变化持续扩展。
* AI 能力适配：可把 AI 用在自动化步骤、文本分类、总结、翻译、文档信息提取和提示词处理等场景里。

## 2. CRM / ERP / 运营管理

> 如果企业希望围绕自身业务流程做更灵活的字段、权限和流程配置，也可以通过业务系统搭建平台搭建对应的 CRM、进销存运营管理系统或其他定制化业务系统。
>
> [⭐CRM 2.0 销售管理系统 - NocoBase - NocoBase](https://www.nocobase.com/cn/solutions/crm-v2)
>
> [How to Build a CRM with Budibase](https://budibase.com/blog/tutorials/how-to-build-a-crm/)

### Odoo

* **官网**：[https://www.odoo.com/](https://www.odoo.com/)
* **GitHub**：[https://github.com/odoo/odoo](https://github.com/odoo/odoo)
* **GitHub Stars**：50k
* **官方文档**：[https://www.odoo.com/documentation/19.0/](https://www.odoo.com/documentation/19.0/)

**定位**：一套模块覆盖非常完整的企业业务套件，可用于 CRM、销售、电商、库存、财务、人力、项目等多类场景，更适合希望尽量用一套系统承接多个业务模块的企业。

![Odoo.png](https://static-docs.nocobase.com/Odoo-ix7ttk.png)

**核心看点**：

* 基础设施：可做本地部署，安装、生产部署和升级路径都比较成熟，适合已经有运维能力、希望长期运行核心业务系统的团队。
* 访问权限：权限体系比较完整，API 调用也会沿用访问权限、记录规则和字段访问控制，适合多角色协作的业务场景。
* 审计与合规：在管理和运维层面提供管理员活动日志、设备登录记录等能力，对操作可追踪性有一定帮助。
* 数据安全与恢复：备份和升级流程比较清晰，云环境里还有每日备份和下载备份能力，整体更适合纳入企业自己的数据保护流程。
* 长期维护：模块化能力很强，既能单模块使用，也能多模块联动；但如果做了较多定制，跨版本升级和兼容性管理会更值得提前规划。
* AI 能力适配：已有原生 AI 应用和 Ask AI，既能配置 OpenAI、Gemini 等模型，也能把 AI 用在问答、内容优化、字段生成等场景里。

### ERPNext

* **官网**：[https://erpnext.com/](https://erpnext.com/)
* **GitHub**：[https://github.com/frappe/erpnext](https://github.com/frappe/erpnext)
* **GitHub Stars**：32.8k
* **官方文档**：[https://docs.erpnext.com/](https://docs.erpnext.com/)

**定位**：开源 ERP，适合承接财务、库存、采购、销售、项目、人事等核心运营模块，更适合中小企业或希望基于开源框架做持续定制的团队。

![ERPNext.png](https://static-docs.nocobase.com/ERPNext-mfqdg8.png)

**核心看点**：

* 基础设施：既能自托管，也有比较成熟的生产环境部署路径；在官方建议里，生产环境更偏向 Docker 化部署。
* 访问权限：角色权限、用户权限、页面与报表权限都比较完整，也可以接 OAuth、LDAP 这类身份体系。
* 审计与合规：自带访问日志、活动日志、错误日志、定时任务日志等运行日志，对排查和留痕比较友好。
* 数据安全与恢复：日志、备份、恢复和快照体系都比较明确，更适合放进长期运行的业务环境里。
* 长期维护：建立在 Frappe Framework 之上，二次开发、表单和流程扩展空间都比较大，适合会持续迭代业务系统的团队。
* AI 能力适配：更适合作为 AI 的业务数据底座和集成对象，REST API 可直接开放数据与方法，便于外部 AI、自动化或智能流程接入。

### Twenty

* **官网**：[https://twenty.com/](https://twenty.com/)
* **GitHub**：[https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)
* **GitHub Stars**：43.7k
* **官方文档**：[https://docs.twenty.com/](https://docs.twenty.com/)

**定位**：现代开源 CRM，适合销售线索、客户关系、流程自动化和可定制 CRM 场景，更适合想自托管现代 CRM、同时看重界面体验和后续扩展能力的团队。

![Twenty.png](https://static-docs.nocobase.com/Twenty-askj2g.png)

**核心看点**：

* 基础设施：自托管路径比较直接，提供 Docker Compose 部署方式，也支持单工作区和多工作区模式。
* 访问权限：具备角色权限体系，也能接 SAML、Google Workspace、Microsoft Entra ID 等 SSO 方案，比较适合组织化使用。
* 审计与合规：在权限收口、SSO 接入和工作区管理上已经比较清晰，但更适合看作现代 CRM 的组织权限能力，而不是重合规型平台。
* 数据安全与恢复：自托管文档里包含备份、恢复和每日备份自动化建议，也能把关键配置放到环境变量里统一管理。
* 长期维护：除了 CRM 本体，也提供 Apps 扩展能力，可延伸到自定义对象、字段、逻辑函数、前端组件和 AI skills，扩展空间比较大。
* AI 能力适配：已经有 AI 工作流、AI actions 和 AI agents，可用于数据补全、分类、摘要、多步骤任务执行；AI Chatbot 也在推进中。

### Dolibarr

* **官网**：[https://www.dolibarr.org/](https://www.dolibarr.org/)
* **GitHub**：[https://github.com/Dolibarr/dolibarr](https://github.com/Dolibarr/dolibarr)
* **GitHub Stars**：7.1k
* **官方文档**：[https://wiki.dolibarr.org/](https://wiki.dolibarr.org/)

**定位**：偏传统、一体化的 ERP + CRM 套件，适合预算有限、希望用较直接方式管理联系人、报价、订单、发票、库存等业务模块的中小企业。

![Dolibarr.png](https://static-docs.nocobase.com/Dolibarr-v9pupn.png)

**核心看点**：

* 基础设施：可自托管，Docker 路径明确，也有较完整的安装和升级说明，适合希望自己掌控部署环境的团队。
* 访问权限：用户、用户组和权限是基础能力，也能接 LDAP、OAuth、HTTP 认证等方式，适合基本的组织权限管理。
* 审计与合规：更偏基础型，重点在用户权限、日志和部分归档类模块；如果企业对合规留痕要求更高，通常还需要额外补强。
* 数据安全与恢复：备份、恢复和迁移步骤写得比较细，数据库和文档文件都能分别处理，适合做基础的数据保护。
* 长期维护：模块化思路比较清楚，也有 REST API、Webhook 和外部系统集成路径，但整体更偏传统 ERP/CRM 的持续维护方式。
* AI 能力适配：原生 AI 不是它的核心主线，但已经有 AI Suite 模块，也能通过内置 REST API 把 AI、自动化平台或外部流程接进来

## 3. 项目管理 / 工单 / 服务流程

> 如果团队希望快速落地项目协作、问题流转或服务支持，可以直接采用成熟的项目管理或工单系统；如果还涉及审批、客户信息、资产台账或跨部门流程联动，也可以通过 业务系统搭建平台搭建相应的工单 / 项目管理系统。
>
> [⭐全面的研发项目管理解决方案 - NocoBase](https://www.nocobase.com/cn/solutions/project-management)
>
> [⭐AI 驱动的智能工单系统 - NocoBase](https://www.nocobase.com/cn/solutions/ticketing-v2)
>
> [How to Build a Trouble Ticketing System | Budibase](https://budibase.com/blog/tutorials/trouble-ticketing-system/)

### Plane

* **官网**：[https://plane.so/](https://plane.so/)
* **GitHub**：[https://github.com/makeplane/plane](https://github.com/makeplane/plane)
* **GitHub Stars**：47.5k
* **官方文档**：[https://docs.plane.so/](https://docs.plane.so/)

**定位**：现代化的项目管理与协作平台，适合产品、研发、项目推进、知识协作和任务流转场景，更适合希望兼顾项目管理体验、自托管能力和后续自动化扩展的团队。

![Plane.png](https://static-docs.nocobase.com/Plane-wvpe7z.png)

**核心看点**：

* 基础设施：可自托管，适配 Docker、Kubernetes 和 air-gapped 场景，也提供 CLI 来处理升级、监控和日常管理。
* 访问权限：具备 SSO、RBAC、SCIM、LDAP 等组织化能力，更适合多团队、多工作区场景。
* 审计与合规：提供审计日志、加密和安全文档，企业版在治理和合规要求上会更完整。
* 数据安全与恢复：有明确的备份与恢复文档，也能通过 CLI 处理备份、监控和日志查看，运维路径比较清晰。
* 长期维护：除了项目和文档本体，也覆盖自动化、审批流和开发者文档，适合持续迭代内部项目管理体系。
* AI 能力适配：AI 已嵌入项目、页面和工作流，可用于结构化任务、生成内容、基于实时数据回答问题，以及让代理在上下文里协同工作。

💡 阅读更多：[5 个 GitHub 上最受欢迎的开源 AI 项目管理工具](https://www.nocobase.com/cn/blog/5-most-popular-open-source-ai-project-management-tools-on-github)

### OpenProject

* **官网**：[https://www.openproject.org/](https://www.openproject.org/)
* **GitHub**：[https://github.com/opf/openproject](https://github.com/opf/openproject)
* **GitHub Stars**：14.8k
* **官方文档**：[https://www.openproject.org/docs/](https://www.openproject.org/docs/)

**定位**：一款偏成熟项目管理方法论的开源平台，适合经典、敏捷或混合型项目管理场景，更适合需要甘特图、任务协同、时间与成本管理的组织。

![OpenProject.png](https://static-docs.nocobase.com/OpenProject-b20v3t.png)

**核心看点**：

* 基础设施：可部署在本地服务器或 Docker 环境中，安装、升级和生产运行文档都比较完整。
* 访问权限：角色和权限体系比较成熟，管理员权限、项目权限和组织权限边界都较清晰。
* 审计与合规：更偏稳健型企业协作平台，日志查看、GDPR、病毒扫描、外部文件存储等管理能力都已有文档路径。
* 数据安全与恢复：备份项写得很细，数据库、配置文件、附件和代码仓库都在建议备份范围内，也可在管理后台直接执行备份。
* 长期维护：版本更新稳定，社区版和企业版路径清楚，适合把项目管理系统作为长期基础设施来维护。
* AI 能力适配：更适合通过 MCP 和 API 把 AI 接进项目环境，目前 AI 相关能力以集成和辅助场景为主。

### Redmine

* **官网**：[https://www.redmine.org/](https://www.redmine.org/)
* **GitHub**：[https://github.com/redmine/redmine](https://github.com/redmine/redmine)
* **GitHub Stars**：5.9k
* **官方文档**：[https://www.redmine.org/projects/redmine/wiki](https://www.redmine.org/projects/redmine/wiki)

**定位**：老牌、稳定、插件生态丰富的项目管理与问题跟踪工具，适合研发协作、问题流转、工时记录和传统项目管理场景，更适合重视稳定性与可定制性的技术团队。

![Redmine.png](https://static-docs.nocobase.com/Redmine-ttw2e5.png)

**核心看点**：

* 基础设施：跨平台、跨数据库，整体部署方式比较传统，适合已有 Ruby on Rails 维护经验的团队。
* 访问权限：角色权限体系是核心能力之一，也能通过工作流对字段做只读、必填等控制。
* 审计与合规：更偏项目管理本身的角色与流程控制，若对企业级审计留痕要求较高，通常需要结合插件或外围系统一起补强。 这一判断基于其官方资料主要强调角色、工作流与插件扩展，而非内建企业审计能力。
* 数据安全与恢复：备份和恢复路径比较明确，重点包括数据库、附件目录和配置文件，升级前也明确建议先备份。
* 长期维护：长期维护优势主要来自成熟社区和插件生态，适合按自己流程慢慢打磨，但升级和插件兼容需要团队自己把握。
* AI 能力适配：原生 AI 不是核心方向，更适合通过 REST API、插件或外部自动化工具把 AI 接进现有流程。

### Zammad

* **官网**：[https://zammad.com/](https://zammad.com/)
* **GitHub**：[https://github.com/zammad/zammad](https://github.com/zammad/zammad)
* **GitHub Stars**：5.5k
* **官方文档**：[https://docs.zammad.org/](https://docs.zammad.org/)

**定位**： 开源客服与工单平台，适合售后支持、客户服务、多渠道工单流转和服务台场景，更适合想把邮件、聊天、电话和知识库集中到一个系统里的团队。

![Zammad.png](https://static-docs.nocobase.com/Zammad-rjc8ml.png)

**核心看点**：

* 基础设施：可自托管，既有 Docker 路径，也有 Helm Chart 和包安装方式，部署形态比较完整。
* 访问权限：角色、组权限和用户权限体系比较清楚，也能接入 Kerberos 等单点登录方式，适合客服组织分层管理。
* 审计与合规：更偏客服流程里的角色管理、会话信息、日志和数据保留配置，适合服务流程管理场景下的留痕与治理。
* 数据安全与恢复：备份与恢复文档很完整，包安装和 Docker 安装各有独立说明，迁移到新主机也有明确步骤。
* 长期维护：除了核心工单能力，也有 REST API、知识库、集成和环境变量配置文档，适合持续运营客服系统。
* AI 能力适配：已引入 AI 功能，可用于摘要、情绪识别、自动路由、写作辅助和 AI agents；模型选择上也保留了较高自主性。

## 4. 知识库 / 文档 / Wiki

### AppFlowy

* **官网**：[https://appflowy.com/](https://appflowy.com/)
* **GitHub**：[https://github.com/AppFlowy-IO/AppFlowy](https://github.com/AppFlowy-IO/AppFlowy)
* **GitHub Stars**：69.4k
* **官方文档**：[https://appflowy.com/docs/](https://appflowy.com/docs/)

**定位**：偏协作工作台形态的开源文档与知识平台，可承接项目、任务、Wiki 和团队协作场景，更适合看重数据掌控、本地部署和本地 AI 的团队。

![AppFlowy.png](https://static-docs.nocobase.com/AppFlowy-82dxuc.png)

**核心看点**：

* 基础设施：可自托管，提供本地部署、云端自托管、AWS EC2、Coolify 等落地路径，更适合希望自己掌握部署环境的团队。
* 访问权限：团队协作和外部认证已经具备，SAML 登录也有单独配置路径；但如果你更在意非常复杂的企业级权限颗粒度，它不是这一组里最强调这一点的产品。
* 审计与合规：更偏数据自主和私有化控制，合规能力主要建立在自托管、数据本地化和认证接入之上。
* 数据安全与恢复：自托管方案强调数据由团队自行掌控，本地部署和私有云部署路径都比较明确，适合放进自己的数据保护体系里。
* 长期维护：开源、可自定义、可长期在自己的基础设施里运行，比较适合作为持续积累知识和协作内容的工作台。
* AI 能力适配：内置 AI 是它很明确的一部分，既能接本地 AI，也能在私有工作区里做文件问答、RAG 检索、内容生成和聊天。

### Outline

* **官网**：[https://www.getoutline.com/](https://www.getoutline.com/)
* **GitHub**：[https://github.com/outline/outline](https://github.com/outline/outline)
* **GitHub Stars**：38k
* **官方文档**：[https://docs.getoutline.com/](https://docs.getoutline.com/)

**定位**：现代团队知识库和 Wiki 的平台，适合内部文档、SOP、项目资料和团队知识沉淀场景，更适合重视写作体验、协作效率和清爽界面的团队。

![Outline.png](https://static-docs.nocobase.com/Outline-72hs1q.png)

**核心看点**：

* 基础设施：既能自托管，也有较完整的安装与配置文档，可运行在 GNU/Linux 和 AWS 等环境中。
* 访问权限：权限边界主要围绕集合、文档、用户和组展开，也可接 OIDC、SAML 等认证方式，比较适合团队级知识管理。
* 审计与合规：文档版本历史和权限体系比较清晰，能形成较好的内容变更留痕；更强的审计日志和 SSO 在更高版本里会更完整。
* 数据安全与恢复：导出、迁移和跨实例转移路径比较清楚，集合和整个工作区都可以导出，JSON 也适合做迁移。
* 长期维护：API、集成和自托管文档都比较成熟，适合把知识库作为长期协作系统持续维护。
* AI 能力适配：已经有 AI Answers，回答会严格受当前用户权限约束，比较适合在企业知识库里做安全范围内的智能问答。

### Wiki.js

* **官网**：[https://js.wiki/](https://js.wiki/)
* **GitHub**：[https://github.com/requarks/wiki](https://github.com/requarks/wiki)
* **GitHub Stars**：28.1k
* **官方文档**：[https://docs.requarks.io/](https://docs.requarks.io/)

**定位**：技术文档和组织知识管理的开源 Wiki，适合制度文档、技术文档、团队知识库和内部站点，更适合看重部署灵活性与传统 Wiki 能力的团队。

![Wiki.png](https://static-docs.nocobase.com/Wiki-9zt795.png)

**核心看点**：

* 基础设施：可运行在 Linux、macOS、Windows，也适配 Docker、Kubernetes 和 Heroku，部署形态比较灵活。
* 访问权限：认证模块很多，可接 LDAP / AD、Keycloak OIDC、SAML 2.0、CAS 等，也能启用 2FA，比较适合组织化登录管理。
* 审计与合规：更偏权限和认证管理本身，若对企业级审计留痕要求较高，通常需要结合外部日志体系一起做。 这是基于其官方资料更强调认证、存储和配置，而不是内建合规套件。
* 数据安全与恢复：除了常规数据库方式，也可以把内容同步到 Git 仓库，适合把文档版本、备份和外部存储结合起来管理。
* 长期维护：配置项、部署文档和升级步骤都比较明确，也支持高可用场景，适合长期运行。
* AI 能力适配：原生 AI 不是核心方向，更适合通过 API、搜索或外部自动化工具把 AI 接进现有 Wiki 体系。 这一点是基于官方资料目前没有突出原生 AI 能力。

### BookStack

* **官网**：[https://www.bookstackapp.com/](https://www.bookstackapp.com/)
* **GitHub**：[https://github.com/BookStackApp/BookStack](https://github.com/BookStackApp/BookStack)
* **GitHub Stars**：18.6k
* **官方文档**：[https://www.bookstackapp.com/docs/](https://www.bookstackapp.com/docs/)

**定位**：简单、直观和易上手的自托管文档 / Wiki 平台，适合 SOP、制度文档、培训手册和内部知识沉淀，更适合希望快速落地、不想引入太复杂系统结构的团队。

![BookStack.png](https://static-docs.nocobase.com/BookStack-pxiqye.png)

**核心看点**：

* 基础设施：提供手动安装、Docker、Ubuntu 脚本和高可用等多种部署路径，整体上手门槛相对友好。
* 访问权限：具备角色权限，也能接 LDAP、OIDC、SAML、第三方 OAuth，并可启用 MFA，适合基础到中等复杂度的组织权限管理。
* 审计与合规：更偏账户安全和权限管理本身，适合一般知识库治理；如果你更看重细粒度审计和强合规流程，通常还要再补外围能力。
* 数据安全与恢复：备份与恢复文档很直接，但主要还是通过命令行处理数据库和文件，没有内建的一键恢复体系。
* 长期维护：项目目标很明确，就是把文档管理做好；升级路径稳，维护逻辑也相对简单，适合长期作为轻量知识库使用。
* AI 能力适配：原生 AI 不是核心能力，更适合通过 API、外部自动化流程或第三方模型把 AI 接到现有文档体系上。 BookStack 当前更强调简单文档平台定位

## 5. 仪表盘 / BI / 数据分析

### Grafana

* **官网**：[https://grafana.com/](https://grafana.com/)
* **GitHub**：[https://github.com/grafana/grafana](https://github.com/grafana/grafana)
* **GitHub Stars**：73.1k
* **官方文档**：[https://grafana.com/docs/grafana/latest/](https://grafana.com/docs/grafana/latest/)

**定位**：一款可以监控、日志、链路追踪和技术指标可视化的平台，适合运维看板、可观测性分析、告警和多数据源统一展示场景，更适合技术团队和平台团队。

![Grafana.png](https://static-docs.nocobase.com/Grafana-2pw44z.png)

**核心看点**：

* 基础设施：可自托管，既能作为本地部署的 Grafana 实例运行，也有成熟的 Kubernetes 管理路径，适合纳入企业现有基础设施体系。
* 访问权限：权限体系比较清楚，覆盖服务器级、组织级、仪表盘和文件夹级权限，适合多团队协作。
* 审计与合规：更偏运维治理和访问控制能力，企业版安全能力会更完整；如果重点是纯业务审计，它不是这组里最强调这一点的产品。
* 数据安全与恢复：备份路径很清楚，配置文件、插件数据和 Grafana 数据库都在官方建议备份范围内。
* 长期维护：插件生态和 API 都很成熟，也能通过 Git Sync、Operator 和 as-code 方式持续维护仪表盘与资源。
* AI 能力适配：原生 AI 目前更偏 Grafana Cloud 里的 Grafana Assistant；自托管场景更适合通过 HTTP API、插件或外部智能运维流程接入。

### Metabase

* **官网**：[https://www.metabase.com/](https://www.metabase.com/)
* **GitHub**：[https://github.com/metabase/metabase](https://github.com/metabase/metabase)
* **GitHub Stars**：46.8k
* **官方文档**：[https://www.metabase.com/docs/latest/](https://www.metabase.com/docs/latest/)

**定位**：易上手的 BI 与嵌入式分析平台，适合运营报表、自助分析、仪表盘和嵌入式数据访问场景，更适合希望让更多非技术用户直接用数据的团队。

![Metabase.png](https://static-docs.nocobase.com/Metabase-bn4fj7.png)

**核心看点**：

* 基础设施：自托管路径成熟，既能独立部署，也有比较清楚的生产环境和升级说明。
* 访问权限：权限体系比较完整，既有集合权限，也有数据权限；行列级安全也能覆盖，但更偏 Pro / Enterprise 场景。
* 审计与合规：更偏数据治理和权限边界控制，尤其适合嵌入分析和多租户数据隔离场景。
* 数据安全与恢复：备份逻辑比较直接，核心是备份应用数据库；升级前后也有明确的恢复和运维思路。
* 长期维护：API、嵌入式分析和版本化文档都比较成熟，适合作为长期运行的数据分析入口。
* AI 能力适配：已经提供 Agent API，可基于 Metabase 的语义层构建无头 agentic BI 应用；同时也能通过 API 和嵌入方式接入外部 AI。

💡 阅读更多：[6 个最佳开源 AI 仪表盘工具](https://www.nocobase.com/cn/blog/6-best-open-source-ai-tools-to-build-dashboards)

### Apache Superset

* **官网**：[https://superset.apache.org/](https://superset.apache.org/)
* **GitHub**：[https://github.com/apache/superset](https://github.com/apache/superset)
* **GitHub Stars**：72.3k
* **官方文档**：[https://superset.apache.org/docs/intro](https://superset.apache.org/docs/intro)

**定位**：面向数据团队的现代 BI 平台，适合多数据源分析、复杂图表、SQL 探索和大规模可视化场景，更适合有分析工程或数据平台能力的团队。

![Apache Superset.png](https://static-docs.nocobase.com/Apache%20Superset-r5rjv8.png)

**核心看点**：

* 基础设施：云原生取向比较明显，Docker Compose 是官方常见运行方式之一，也强调可扩展和面向规模运行。
* 访问权限：权限和认证体系比较强，具备细粒度角色与认证选项，适合多团队和复杂数据访问场景。
* 审计与合规：整体更偏企业级安全配置和访问治理，管理员角色、权限边界和安全配置文档都比较完整。
* 数据安全与恢复：更依赖数据库层和运维体系来做备份与恢复，官方也明确建议把元数据库和相关基础设施交给成熟数据库服务或现有备份策略处理。
* 长期维护：SQL Lab、语义层、扩展框架和 API 都比较成熟，适合长期作为数据探索和可视化平台来维护。
* AI 能力适配：已经可以通过 MCP 接 AI 助手，用自然语言探索数据、建图表、建看板和跑 SQL，也能通过扩展点继续增强 AI 能力。

### Lightdash

* **官网**：[https://www.lightdash.com/](https://www.lightdash.com/)
* **GitHub**：[https://github.com/lightdash/lightdash](https://github.com/lightdash/lightdash)
* **GitHub Stars**：5.7k
* **官方文档**：[https://docs.lightdash.com/](https://docs.lightdash.com/)

**定位**：基于 dbt 的自助分析平台，适合指标口径统一、语义层治理和面向业务团队的自助分析场景，更适合已经在用 dbt 的现代数据团队。

![Lightdash.png](https://static-docs.nocobase.com/Lightdash-j55l3f.png)

**核心看点**：

* 基础设施：可自托管，本地运行路径直接，生产环境也有 Kubernetes 指南；对象存储是自托管的重要组成部分。
* 访问权限：空间权限、角色、SSO、SCIM 和用户属性都比较清楚，也能做基于用户属性的行级过滤。
* 审计与合规：更偏指标治理、权限边界和组织化访问控制，适合强调统一指标口径和业务可见范围的团队。
* 数据安全与恢复：自托管时会把结果文件、导出文件等放到 S3 兼容对象存储里，整体更适合纳入企业现有存储和运维体系。
* 长期维护：和 dbt 结合很深，指标、维度和业务逻辑都能放回 dbt 项目里统一维护，也能通过 CLI、GitHub 集成和 API 持续演进。
* AI 能力适配：AI 已经进入产品主流程，可用于问答、探索数据、构建语义层和让 AI agents 在可信指标体系上工作。

## FAQ

### 如果我只是想要一个 CRM，直接选 CRM 产品就够了吗？

如果你的需求比较明确，主要就是客户管理和销售流程，直接选 CRM 产品通常更省事。

但如果后面还会扩展审批、工单、门户或跨部门流程，就可以提前考虑更灵活的搭建类平台。

### 开发团队比较强，是否更适合选择搭建平台类产品？

通常是的。开发团队越强，越能发挥搭建平台在数据模型、权限、流程和集成上的优势。

如果希望长期迭代内部系统，**NocoBase** 这类**灵活度更高**的平台会更值得优先考虑。

### 如果团队技术能力一般，应该优先考虑哪一类产品？

通常更适合优先考虑 CRM、ERP、工单、Wiki、BI 这类成熟的现成系统。这类产品上线更快、理解成本更低，也更适合先解决单一场景的问题。

### 访问权限做到什么程度，才算适合企业使用？

对企业来说，权限不只是账号登录，还要看角色权限、部门权限、记录级权限、字段级权限，以及是否能接单点登录。

如果系统会承接客户、审批、财务或跨部门协作，权限颗粒度越细越好。像 **NocoBase** 这类平台，权限颗粒度可以做到**记录级、字段级、操作级**，更适合客户、审批、财务和跨部门协作这类复杂场景

### 审计日志和合规能力，是不是只有大企业才需要考虑？

不是。只要系统里开始放客户数据、审批记录或多人协作内容，审计和留痕就已经有意义。

很多产品能提供的是**系统日志、活动记录或内容历史**，适合基础排查；像 **NocoBase** 这类平台则提供**完整的操作审计日志**，更适合需要管理员留痕、责任界定和合规管理的企业环境。

### AI 能力应该怎么看？是有 AI 就一定更值得选吗？

不一定。重要的是 AI 能不能真正接入业务场景，结合数据、权限、页面上下文和流程参与实际使用。

### 我们已经有 ERP / CRM 了，还需要内部工具搭建平台吗？

很多时候仍然需要。ERP 和 CRM 更适合承接标准化模块，但企业里常常还有审批、门户、台账和跨系统流程这类空白场景。

这类需求往往更适合交给内部工具搭建平台比如（**NocoBase、Appsmith**）来补齐。

希望这篇文章能为你梳理思路、提供一些实际参考；如果你身边也有人在关注这类工具，欢迎分享给他们。

相关阅读：

* [为 Excel 数据快速构建 Web 应用：4 种方法对比 ](https://www.nocobase.com/cn/blog/excel-to-web-app-4-methods)
* [不只 PostgreSQL：5 个支持外部数据库的无代码/低代码平台对比](https://www.nocobase.com/cn/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [开源项目管理工具选型指南（2026年最新）](https://www.nocobase.com/cn/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [如何用 PostgreSQL 构建一个自定义 CRM](https://www.nocobase.com/cn/blog/how-to-build-a-custom-crm-with-postgresql)
* [2026 年值得关注的 20 个 GitHub AI 项目：不只有 OpenClaw](https://www.nocobase.com/cn/blog/best-open-source-ai-projects-github-2026)
* [GitHub 上开源 CRM AI 能力深度拆解：NocoBase vs Twenty vs Krayin CRM](https://www.nocobase.com/cn/blog/best-ai-crm-open-source-nocobase-twenty-krayin)
* [GitHub 上 3 款开源 AI ERP 对比：NocoBase、Odoo 与 ERPNext](https://www.nocobase.com/cn/blog/top-3-open-source-erp-with-ai-on-github-nocobase-vs-odoo-vs-erpnext)
* [5 个 GitHub 上最受欢迎的开源 AI 项目管理工具](https://www.nocobase.com/cn/blog/5-most-popular-open-source-ai-project-management-tools-on-github)

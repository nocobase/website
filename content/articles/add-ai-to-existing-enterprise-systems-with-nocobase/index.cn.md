AI 的能力已经进入企业软件的各个环节，从代码生成、数据分析，到 Agent、自动化和业务辅助，越来越多团队开始重新思考现有系统的使用方式。我们之前整理过 [10 个适合企业使用的开源 AI Agent 平台](https://www.nocobase.com/cn/blog/open-source-ai-agent-platforms-for-business)，从自动化、Agent 构建到内部应用，企业已经有了越来越多可选的工具。

但对已经有 CRM、ERP、MES、SaaS 或自研系统的企业来说，真正开始应用 AI 并没有那么简单。现有系统通常已经运行多年，积累了大量数据，也和公司的流程、权限、接口以及员工使用习惯绑定在一起。即使企业希望增加 AI 能力，也很难直接迁移或重建。

最近 [Reddit](https://www.reddit.com/r/CRMSoftware/comments/1vmymee/7_years_on_salesforce_12_employees_upgrade_quote/) 的 r/CRMSoftware 里，一位小企业主分享了自己的经历。

他的公司从 2019 年开始使用 Salesforce，最初只有一个账号，现在已经发展到 12 人。过去 7 年里，他们围绕自己的业务做了大量定制，Salesforce 也逐渐成为公司核心的业务系统。

![intro-salesforce-reddit-post-wasudu.png](https://static-docs.nocobase.com/intro-salesforce-reddit-post-wasudu.png)

随着业务继续增长，他们开始需要更多自动化、跨平台集成、通话记录、财务同步、LLM 集成和表单等能力，也希望进一步尝试 AI Agent、智能分析和 AI 驱动的业务自动化。继续使用 Salesforce，需要升级版本，并为 API、Agentforce 和其他第三方工具增加预算；如果迁移，又要考虑已经建立的自定义对象、非标准工作流、历史数据，以及整个切换过程需要投入的时间和成本。

这种情况在很多企业里都很常见，一边有相对独立的新需求，一边又需要继续使用现有系统里的数据。直接迁移成本不低，完全重做又会增加后续维护的压力。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

我们最近发现一个比较灵活的思路，就是先用 **AI 结合 NocoBase**，把这部分业务单独做成一个新的内部应用。相比完全依赖 AI 从零开发，企业应用还需要考虑数据关系、权限、工作流和后续维护等问题。NocoBase 本身提供了这些企业应用需要的基础能力，AI 可以在这个基础上帮助完成新的应用构建，同时继续使用原有系统中的数据。

这样不需要一开始就处理完整的系统迁移；等新应用逐渐成熟以后，再根据实际需要，把更多数据和业务逐步转移过来。

例如，一家已有库存管理系统的制造企业，团队希望新增一个**移动端盘点应用**，让仓库人员可以在现场完成扫码、数量录入和差异处理，同时继续使用原有的商品、SKU、仓库和库存数据。类似范围清楚、又需要复用现有数据的需求，就很适合借助 **AI 与 NocoBase** 先做成一个独立应用，再根据实际使用逐步扩展。

接下来，我们就以这个场景为例，介绍如何借助 AI 与 NocoBase，把一个相对独立的新需求，做成一个新的内部应用，并逐步加入 AI 分析和自动化能力。

💡 阅读更多：[库存管理系统搭建对比：纯 AI 搭建 vs AI 基于 NocoBase 搭建](https://www.nocobase.com/cn/blog/building-inventory-management-system-vibe-coding-vs-nocobase-ai)

## 01｜选择一个适合独立试点的业务场景

优先选择范围清楚、收益可判断、能够独立试点的业务需求。

1. 范围清楚：业务对象、操作流程和使用人员比较明确，调整这个场景不会同时影响多个核心系统。
2. 收益可判断：应用投入使用以后，可以直接观察处理时间、人工操作、异常数量、业务效率等指标。
3. 能够独立试点：可以先在一个部门、一组人员或一个业务环节中使用，同时继续利用现有系统中的数据。

这家制造企业已经有一套库存管理系统，用来管理商品、SKU、仓库、当前库存和库存变动。

![01-products-inventory-qee4wq.png](https://static-docs.nocobase.com/01-products-inventory-qee4wq.png)

现在新增的需求，是希望仓库人员能够直接在现场完成盘点，包括领取任务、扫码商品、录入实盘数量、记录库存差异，并对异常结果进行复盘。

因此，原有系统和新应用的分工可以先划分清楚：


|        | 应用         | 负责的内容                                             |
| ------ | ------------ | ------------------------------------------------------ |
| 旧系统 | 库存管理系统 | 商品、SKU、仓库、当前库存、库存变动                    |
| 新需求 | 移动盘点应用 | 盘点任务、扫码、实盘数量、库存差异、差异原因、复盘状态 |

移动盘点主要围绕任务领取、扫码、数量录入和差异复核展开，同时需要继续使用原库存系统中的商品和库存数据。试点时，可以先从一个仓库、一组操作人员或一轮盘点任务开始使用，同时继续调用库存管理系统中的基础数据。投入使用后，也可以通过盘点效率、人工操作量、差异处理时间等指标来判断试点效果。

## 02｜借助 AI 与 NocoBase，把新需求做成内部应用

业务范围确定以后，可以先把现有系统、业务规则和新增需求整理出来，再借助 AI 完成应用的初始构建。

例如：

> 我们已经有库存管理系统，用于管理商品、SKU、仓库和当前库存。现在需要增加一个移动盘点应用，让仓库人员可以查看盘点任务、扫码商品、录入实盘数量、记录库存差异，并对异常数据进行复盘。

Coding Agent 可以根据这些需求梳理应用结构，并基于 NocoBase 配置数据模型、页面、角色权限和工作流。业务人员负责确认具体规则，例如谁可以领取任务、库存差异如何处理、由谁负责复核。

移动盘点的主要流程可以整理为：

**盘点任务 → 商品 / SKU → 系统库存 → 实盘数量 → 库存差异 → 差异原因 → 处理状态**

![02-stock-count-flow-innnqy.png](https://static-docs.nocobase.com/02-stock-count-flow-innnqy.png)

仓库人员领取任务后，通过扫码找到对应商品并录入实盘数量；出现库存差异时，记录会进入待复核状态，再由负责人确认原因和处理结果。操作员和复核负责人分别拥有对应的页面和操作权限，提醒、待办等后续动作则可以通过 NocoBase 工作流进行处理。

应用生成以后，字段、页面、布局以及后续的功能调整，都可以继续通过 Coding Agent 在 NocoBase 中修改。

![02-stock-count-app-czqalz.png](https://static-docs.nocobase.com/02-stock-count-app-czqalz.png)

## 03｜继续使用现有系统中的数据

商品、SKU、仓库、当前库存和库存变动仍然由原来的库存管理系统维护。NocoBase 可以通过外部数据库或 API 读取这些数据，并在移动盘点应用中直接使用。

📃 [数据源 - NocoBase](https://www.nocobase.com/cn/highlights/data-source)

![03-nocobase-data-sources-ze3rwy.png](https://static-docs.nocobase.com/03-nocobase-data-sources-ze3rwy.png)

例如，仓库人员盘点“刹车片套装”时，可以同时看到原库存系统里的**当前库存、安全库存和最近库存变动**，再在移动盘点应用中录入**实盘数量、库存差异、差异原因和处理结果**。


| 数据来源     | 盘点时使用的信息                       |
| ------------ | -------------------------------------- |
| 库存管理系统 | 当前库存、安全库存、最近库存变动       |
| 移动盘点应用 | 实盘数量、库存差异、差异原因、处理状态 |

为了避免盘点期间库存持续变化影响结果，可以记录任务开始时的系统库存和对应时间，作为本次盘点的核对基准。日常库存仍然由原有库存管理系统维护。

![03-stock-count-mobile-context-d55czr.png](https://static-docs.nocobase.com/03-stock-count-mobile-context-d55czr.png)

如果最终确认存在库存差异，可以先在移动盘点应用中完成原因记录和复核，再根据原有流程处理库存调整。是否由新应用直接回写，则取决于现有系统开放的接口和权限。

这样，新应用只增加盘点相关的数据和流程，商品、SKU、仓库和库存等基础数据仍然沿用原有系统，也减少了重复维护。

## 04｜应用上线后，让 AI 进一步参与盘点业务

移动盘点应用投入使用后，盘点任务、实盘数量、差异原因和复核结果会持续形成新的业务数据。除了查看单条记录，负责人还需要了解整体盘点进度、长期未处理的任务，以及哪些 SKU 反复出现库存差异。

应用搭建阶段，Coding Agent 主要协助应用构建和调整；应用上线后，NocoBase 的 **AI 员工** 可以基于已有数据参与日常盘点分析等工作。

📃 [AI 员工 - NocoBase 文档](https://docs.nocobase.com/cn/ai-employees)

例如，可以让 AI 员工生成一份盘点概况，汇总完成率、准确率和库存差异，并整理需要优先关注的任务和商品：

![04-ai-stock-count-summary-mhl82t.png](https://static-docs.nocobase.com/04-ai-stock-count-summary-mhl82t.png)

这些结果来自应用中的实际记录，负责人也可以随时返回对应任务核对明细。

对于反复出现差异的 SKU，AI 员工还可以结合实盘结果、差异原因和近期库存变动，整理需要进一步检查的问题。

例如，“刹车片套装”连续几次盘点都出现差异时，可以优先检查近期入库、出库和调拨记录，并确认是否存在重复盘点、时间差异或录入错误。对于暂时无法确认原因的情况，则保留为待复核事项，由负责人继续判断。

在此基础上，还可以为 AI 员工配置相应的**技能和工作流**，继续完成复盘任务创建、负责人提醒和盘点报告生成等后续工作。AI 员工能够查看哪些数据、执行哪些操作，也可以按照实际岗位和权限进行配置。

💡 阅读更多：[使用内置工作流与 AI 员工完成公司背景调研自动化](https://www.nocobase.com/cn/blog/automate-company-background-research-with-workflows-and-ai-employees)

![04-ai-employees-list-ss28yi.png](https://static-docs.nocobase.com/04-ai-employees-list-ss28yi.png)

这样，可以先让 AI 从总结和分析开始，等业务规则和使用方式稳定后，再逐步扩展到更多日常处理工作。

## 05｜验证试点效果

移动盘点应用使用一段时间后，可以根据实际结果判断这套方式是否值得继续，以及下一步适合扩大范围、迁移部分旧模块，还是保持现有分工。

- 人工记录和重复整理是否减少
- 单次盘点所需时间是否缩短
- 库存差异是否更容易发现和处理
- 原有库存数据能否稳定使用
- AI 员工是否已经能够参与日常业务处理
- 新应用是否已经能够稳定承担日常盘点工作

如果这些指标基本达到预期，说明这套方式已经可以在真实业务中使用，后续可以继续沿两个方向推进。

### 将同样的方式扩展到新的业务需求

如果企业还有其他相对独立、同时需要使用现有系统数据的需求，也可以沿用这一套思路：先确定一个明确场景，用 AI 与 NocoBase 建立新的内部应用，继续测试和使用。

每次只处理一个具体需求，应用范围和验证目标都比较清楚，也更容易判断是否值得继续投入。

### 评估是否迁移原系统中的部分模块

随着新应用持续使用，它会逐渐积累自己的数据和业务流程。如果其中一些功能已经能够稳定承担原系统中的工作，就可以进一步评估相关模块是否还有继续保留在旧系统中的必要。

如果移动盘点已经能够稳定覆盖任务分配、盘点、差异处理和复核，也可以进一步评估原库存系统中与盘点相关的数据和流程是否适合转移到 NocoBase。

## 结尾

过去，新的业务需求出现后，团队通常需要在采购 SaaS、改造现有系统和排期开发之间做出选择。这些方式都需要评估成本、协调资源，也常常需要等待一段时间才能验证效果。

如果你已经在使用 CRM、供应链管理或项目管理类 SaaS，又刚好有一个现有工具难以满足的新需求，借助 AI 和 NocoBase，一个范围清楚、已经确认的需求，就可以先用更轻量的方式尝试起来。

- **体验 NocoBase + AI Demo：** [申请在线 Demo](https://demo.nocobase.com/new)
- **自己上手搭建：** [查看 AI Builder 文档](https://docs.nocobase.com/cn/ai-builder)


**相关阅读**：

* **[如何用 AI 和 NocoBase 构建真实业务系统：以汽车租赁管理为例](https://www.nocobase.com/cn/blog/build-car-rental-management-system-with-ai-and-nocobase)**
* **[10 个适合企业使用的开源 AI Agent 平台：从自动化到内部应用](https://www.nocobase.com/cn/blog/open-source-ai-agent-platforms-for-business)**
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

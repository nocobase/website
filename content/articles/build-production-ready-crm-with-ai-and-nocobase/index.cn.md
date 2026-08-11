## TL;DR

AI 可以搭建真正可投入生产的 CRM。借助 NocoBase 提供的数据模型、角色权限、安全审计、工作流等企业应用基础能力，AI 可以从业务需求出发完成 CRM 的搭建，并继续加入自动化和 AI 员工，支持团队在真实业务中长期使用。

## 背景

最近 [Reddit](https://www.reddit.com/r/CRM/comments/1v6aj6g/vibecodinginhouse_crm/) 上有个有意思的讨论：**现在 AI 开发工具已经这么强了，还有没有必要继续购买 Salesforce 或 HubSpot，还是可以直接 Vibe Coding 一个内部 CRM？**

![reddit-t0fg0h.png](https://static-docs.nocobase.com/reddit-t0fg0h.png)

一位实际自己搭过 CRM 的用户提到，AI 很快就能把客户管理、数据看板这些基础功能做出来，但如果系统真的要给团队长期使用，就还需要进一步处理权限、数据隔离、安全以及后续维护等问题。

他提到：“你绝对可以 Vibe Coding 一个 CRM，**但你无法 Vibe Coding 一个一旦面对真实用户、真实数据和真实业务流程还能保持可靠性的企业级 CRM**。编码很简单，但幕后的一切才是最难的。”

![reddit2-9uovy8.png](https://static-docs.nocobase.com/reddit2-9uovy8.png)

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

**确实，AI 可以很快搭建出 CRM 的基本框架，但距离真正投入企业使用，仍有一定距离。**

但现在，我们有了新的解决方案。与其让 AI 从零处理这些企业系统的基础问题（权限、安全、审计、数据模型等），不如为它提供一个已经具备完善能力的应用底座，再让 AI 在底座上进行具体业务的搭建和迭代。

接下来，我们就将介绍如何在一小时左右，结合 AI 与 NocoBase 提供的企业应用基础能力，从自然语言需求出发，搭建一套可以投入生产的 CRM 系统。

![nocobase1-u2p9y7.png](https://static-docs.nocobase.com/nocobase1-u2p9y7.png)

🚀 你也可以在线体验 NocoBase + AI 搭建的应用，查看 AI 搭建的真实效果 ：[https://demo.nocobase.com/new](https://demo.nocobase.com/new)

本文截图均源于 NocoBase 在线 Demo，整套系统从设计到实现，都由 AI Coding Agent 完成。

## 1. 从真实业务需求开始

本文以一家小型 B2B 办公家具公司为例。

公司主要面向企业、设计公司、建筑事务所、酒店、联合办公空间和教育机构提供办公家具及商业空间配套产品，由小型销售团队负责客户开发、项目跟进、报价和成交。

![nocobase2-u9b244.png](https://static-docs.nocobase.com/nocobase2-u9b244.png)

一个典型项目可能从某家设计公司提出办公室改造需求开始。销售人员需要建立企业客户和联系人，创建商机，持续记录会议和邮件沟通，根据项目需求选择会议桌、办公椅、工作站、声学隔断等产品并生成报价，最后通过多轮沟通和商务洽谈完成成交。

主要销售流程为：

**销售线索 → 企业客户 → 商机 → 报价 → 持续跟进 → 成交**

对这支销售团队来说，CRM 需要统一管理企业客户与联系人、销售线索、商机、产品与报价、沟通记录和跟进任务，同时支持销售看板、团队权限、业务自动化和 AI 辅助业务。

### 把业务情况整理成自然语言

将公司的业务、客户类型、团队分工和销售流程直接描述给 AI，重点说明公司销售什么产品、主要服务哪些客户，销售人员如何开发客户和推进项目，一个项目如何从初步接洽走到成交，以及 CRM 需要管理哪些数据和日常工作。团队中的角色分工、需要自动执行的销售规则，以及 AI 员工可以参与的工作，也可以一并告诉 AI，让它先理解这套 CRM 最终要服务怎样的团队和业务。

NocoBase 可以连接不同的大模型完成应用搭建，例如 GPT、Opus、Qwen、DeepSeek 等。不同模型对业务需求的理解、生成速度和最终呈现方式可能会有所不同，可以根据实际效果和使用习惯选择合适的模型。

> **选哪个模型？NocoBase 大模型能力对比**：[https://docs.nocobase.com/cn/ai-builder/ai-portal/model-selection/](https://docs.nocobase.com/cn/ai-builder/ai-portal/model-selection/)

业务需求可以直接这样交给 AI：

```Plain
我经营一家小型 B2B 办公家具公司，主要为企业、设计公司、建筑事务所、酒店和联合办公空间提供办公家具和空间配套产品。

请基于 NocoBase 帮我搭建一套 CRM，用来管理从销售线索到成交的完整过程，包括企业客户和联系人、商机、产品与报价、客户沟通、后续跟进和销售数据看板。

我们的商机通常会经历：初步接洽 → 报价 → 商务洽谈 → 成交。

团队中有销售人员、销售经理和只读用户，后续还需要设置相应的数据权限，加入成交后的自动处理、长期未跟进提醒，以及能够整理客户邮件和会议记录的 AI 员工。

请先根据这些需求梳理 CRM 的主要模块、数据关系、销售流程和用户角色，确认后再基于 NocoBase 开始搭建。
```

权限、自动化和 AI 员工不需要一次全部配置完成。先确认 AI 对客户、联系人、商机、产品和报价等核心业务的理解是否准确，再在已有 CRM 上继续完善即可。

### 确认 AI 对业务的理解

正式搭建前，让 AI 根据需求整理一版简要的 CRM 结构，确认其中包含**客户与联系人、销售线索、商机、产品与报价、沟通与跟进、销售看板、用户角色和业务规则**。

同时确认主要数据关系和销售阶段没有明显偏差。例如，一个企业客户可以关联多个联系人、商机和沟通记录，报价单需要同时关联客户、商机和具体产品。

![nocobase3-q35ehq.png](https://static-docs.nocobase.com/nocobase3-q35ehq.png)

主要销售阶段统一设置为：

**初步接洽 → 报价 → 商务洽谈 → 成交**

确认 AI 已经理解业务后，再让它按照这套需求开始搭建 CRM。

## 2. 让 AI 搭建 CRM，并检查核心业务是否正确

CRM 生成以后，先检查最基础的业务关系，不急于增加权限、自动化或更多页面。重点确认客户、联系人、商机、产品、报价和沟通记录之间是否已经正确关联，能不能顺着实际销售流程完整地串起来。

### 检查客户与联系人

一个企业客户需要集中关联**公司信息、联系人、客户负责人、相关商机、沟通记录和跟进事项**。

![nocobase4-7r08ec.gif](https://static-docs.nocobase.com/nocobase4-7r08ec.gif)

打开客户详情后，销售人员应该能够直接了解这个客户有哪些联系人、当前正在推进哪些项目、最近沟通过什么，以及下一步需要处理什么。

![nocobase5-n5g5y8.png](https://static-docs.nocobase.com/nocobase5-n5g5y8.png)

同时检查一个客户能否关联多个联系人、商机和沟通记录，避免这些信息被生成在互不关联的独立页面中。

![nocobase6-mhsqcg.png](https://static-docs.nocobase.com/nocobase6-mhsqcg.png)

### 检查商机推进

所有正在跟进的项目通过商机统一管理，并按照以下阶段推进：

**初步接洽 → 报价 → 商务洽谈 → 成交**

![nocobase7-jqwuj9.gif](https://static-docs.nocobase.com/nocobase7-jqwuj9.gif)

每个商机需要记录**所属客户、商机负责人、预计金额、预计成交时间和当前阶段**，并能够在商机看板中查看和调整。

![nocobase8-8i0jrs.png](https://static-docs.nocobase.com/nocobase8-8i0jrs.png)

### 检查产品与报价

产品库统一维护**产品编号、产品名称、分类、销售价格和可售状态**。

![nocobase9-cpvrs4.gif](https://static-docs.nocobase.com/nocobase9-cpvrs4.gif)

报价单需要关联**企业客户、具体商机、报价产品、报价金额、有效期和当前状态**，确保销售人员能够从商机进入报价，也能够从客户详情查看相关报价记录。

![10-c23frk.png](https://static-docs.nocobase.com/10-c23frk.png)

![nocobase11-vj57d3.gif](https://static-docs.nocobase.com/nocobase11-vj57d3.gif)

如果客户、商机、产品和报价之间的关系不符合实际业务，直接向 AI 说明具体问题，让它在现有 CRM 中调整。确认核心业务正确后，再继续补充团队使用需要的能力。

如何与 AI Agent 更好的协作搭建，可以参考文档：https://docs.nocobase.com/cn/ai-builder/ai-portal/agent-workflow

## 3. 把基础 CRM 完善成团队真正使用的系统

客户、商机和报价等基础业务跑通后，可以继续把团队分工和销售规则告诉 AI，让它在已有 CRM 的基础上补充权限和自动化，使系统能够支持多人协作和日常业务处理。

### 根据团队分工设置权限

先向 AI 说明团队中有哪些角色，以及每个角色可以查看哪些数据、执行哪些操作：

**销售人员**只能查看和管理自己负责的客户、商机和跟进事项；**销售经理**可以查看团队整体数据、调整负责人并检查销售进展；**只读用户**可以查看相关信息，但不能新增、修改或删除业务数据。

![nocobase12-nlqv77.png](https://static-docs.nocobase.com/nocobase12-nlqv77.png)

AI 可以根据这些要求，直接在已有 CRM 中创建对应角色，并配置数据范围和操作权限。配置完成后，分别以不同角色进入系统，检查各角色能够看到的数据和执行的操作是否符合实际分工。如果权限范围不准确，可以继续告诉 AI 具体需要调整的角色、数据或操作，或者直接在界面调整权限。

![nocobase13-kbz9k5.png](https://static-docs.nocobase.com/nocobase13-kbz9k5.png)

### 把日常销售规则配置成工作流

销售过程中重复发生的业务动作，也可以整理成明确的触发条件和执行结果，交由 AI 在现有 CRM 中配置自动化流程。

![nocobase14-ldai16.png](https://static-docs.nocobase.com/nocobase14-ldai16.png)

例如，当商机进入成交阶段时，系统自动更新客户状态、创建后续任务并分配给对应负责人；当商机连续 7 天没有新的沟通记录时，系统自动提醒销售人员及时跟进。

规则配置完成后，可以通过调整商机阶段、模拟长期未跟进等实际场景，检查自动化能否按预期触发，并正确更新数据、创建任务或发送提醒。

### 配置 AI 员工参与销售工作

CRM 中还可以配置适合销售场景的 AI 员工，让它直接参与日常销售工作。

![nocobase15-7a6j3v.png](https://static-docs.nocobase.com/nocobase15-7a6j3v.png)

比如销售人员完成客户会议后，可以将会议记录或客户邮件交给 AI 员工。AI 员工负责**整理沟通内容、提取重点和下一步行动、生成客户活动记录，并提供后续跟进建议**。

![nocobase16-42loyk.png](https://static-docs.nocobase.com/nocobase16-42loyk.png)

同样的方式还可以用于整理客户背景、总结历史沟通信息和准备跟进内容，让 AI 员工持续承担一部分重复的信息整理工作。

### 根据实际使用继续调整 CRM

CRM 进入实际使用后，销售经理可能希望在看板中增加**当前在跟商机金额、近期预计成交金额、已成交金额、待跟进客户和销售目标完成情况**。

销售人员也可能希望商机看板增加**客户筛选、负责人筛选、预计成交日期和更完整的商机信息**，以便快速找到需要优先处理的项目。

![nocobase17-l67vrb.png](https://static-docs.nocobase.com/nocobase17-l67vrb.png)

将这些反馈继续交给 AI，调整页面布局、信息密度、状态展示、卡片内容、重点数据位置和整体视觉样式。所有修改都直接在已有 CRM 上完成，不需要重新搭建系统。

> **NocoBase AI 搭建**，让 AI 根据自然语言需求设计、搭建和继续调整企业应用：[https://docs.nocobase.com/cn/ai-builder](https://docs.nocobase.com/cn/ai-builder)

## 4. 完整跑一遍真实销售流程

系统基本完成后，按照销售人员日常工作的顺序完整运行一次：

**创建企业客户 → 添加联系人 → 创建商机 → 推进商机阶段 → 记录客户会议 → 创建跟进任务 → 选择产品并生成报价 → 进入商务洽谈 → 商机成交 → 自动执行成交后的业务流程 → 销售看板同步更新**

![nocobase18-h7uo94.png](https://static-docs.nocobase.com/nocobase18-h7uo94.png)

在这条流程中统一检查四个方面：

**业务数据是否连贯**：客户、联系人、商机、报价、沟通记录和跟进任务是否保持正确关联。

**团队权限是否正确**：销售人员、销售经理和只读用户看到的数据及能够执行的操作是否符合实际分工。

**自动化是否正常执行**：商机成交、长期未跟进等场景是否按照设定条件触发，并正确更新数据或创建任务。

**AI 员工是否真正可用**：会议记录和客户邮件能否被正确整理，重点信息、下一步行动和跟进建议能否写入实际销售工作。

完成这条销售流程后，可以确认这套 CRM 已经能够支持一家小型 B2B 销售团队完成客户管理、商机推进、产品报价、持续跟进、团队协作和日常销售处理。

## 结语

Vibe Coding 已经大幅降低了应用从 0 到 1 的门槛，AI 和企业应用平台之间开始出现新的分工：**AI 负责理解业务、生成应用，并根据新的需求持续迭代；NocoBase 这样的企业应用平台，则提供数据管理、权限、工作流、审计等系统长期运行所需要的基础能力。**

如果你已经有一个明确的业务需求，不妨直接从描述它开始。把你的业务、团队和流程告诉 AI，再结合 NocoBase，一步步搭建你真正想要的 CRM。**从需求到一套可以实际使用的业务系统，接下来要做的，可能比你想象中更简单。**

**准备开始了吗？现在就用 [AI + NocoBase](https://docs.nocobase.com/cn/ai-builder)**，搭建你的企业级 AI CRM。

**相关阅读**：

* **[企业 IT 资产管理系统搭建指南：从需求梳理到落地](https://www.nocobase.com/cn/blog/enterprise-it-asset-management-system-guide)**
* **[7 款 Smartsheet 替代品：适合项目管理与业务流程的工具](https://www.nocobase.com/cn/blog/best-smartsheet-alternatives)**
* **[5 个适合复杂关系模型的开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-complex-relational-models)**
* **[什么是 AI 无代码？AI 时代无代码平台的实用指南](https://www.nocobase.com/cn/blog/what-is-ai-no-code)**
* **[GitHub 上值得关注的 9 个开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-github-9)**
* **[GitHub 上值得关注的 14 个开源 AI Agent 工具](https://www.nocobase.com/cn/blog/github-open-source-ai-agent-tools-16)**
* **[GitHub 上 Stars 最多的 8 个开源 AI Assistant 工具](https://www.nocobase.com/cn/blog/top-open-source-ai-assistant-tools-github-stars)**
* **[6 个适合搭配 WorkBuddy 使用的开源工具](https://www.nocobase.com/cn/blog/workbuddy-open-source-tools)**
* **[GitHub 上 Stars 最多的 6 个开源 AI 工具：让 AI Agent 更强大](https://www.nocobase.com/cn/blog/6-github-top-open-source-ai-tools-for-ai-agents)**
* **[用 Hermes 提升内部工具效率：5 个开源项目推荐](https://www.nocobase.com/cn/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)**
* **[OpenClaw 如何用于真实业务？推荐 5 个开源工具](https://www.nocobase.com/cn/blog/openclaw-open-source-enterprise-tools)**
* **[OpenCode 可以搭配哪些开源工具？5 个适合 AI Agent 的开源项目](https://www.nocobase.com/cn/blog/opencode-open-source-tools-ai-agents)**
* **[别让 Codex 从零生成应用：6 个可组合的开源项目](https://www.nocobase.com/cn/blog/building-internal-tools-with-codex)**

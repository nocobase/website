最近，一张 **“Vibe Coding vs. Production Reality”** 的冰山图在 X 和 [Reddit](https://www.reddit.com/r/ClaudeAI/comments/1t3bk3x/vibe_coding_vs_production_reality/) 上引发了不少讨论。水面上是现在各种 AI Coding 工具，水面下却塞满了权限、支付、数据一致性、日志、回滚、监控这些真正上线以后才会遇到的问题。发帖者提到，以前需要一周完成的 PoC，现在可能一个下午就能做出来；但 Demo 能运行，并不意味着它已经是一套可以持续交付和维护的系统。

![0-intro-vibe-coding-vs-production-reality-zbxzta.png](https://static-docs.nocobase.com/0-intro-vibe-coding-vs-production-reality-zbxzta.png)

不同公司的业务流程和管理规则往往高度个性化，即使都是资源管理，背后也可能涉及完全不同的订单、调度、维护、结算和异常逻辑。AI Coding 降低了这些定制需求的实现成本，但业务本身并没有因此变简单。

比如汽车租赁业务，一笔订单并不只是创建以后等待完成。它会占用车辆排期，经过交车、使用和归还；如果客户延迟还车，还会继续影响后续订单和车辆安排。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

类似的企业业务系统均需要长期维护稳定的数据关系、权限和业务规则。如果完全从零让 Coding Agent 构建，这些通用能力同样需要逐项实现和维护。相比之下，有一套现成的应用底座，Coding Agent 就可以把更多工作集中在具体业务的建模、实现和验证上。

NocoBase 正是以 **App Foundation** 为核心，提供数据模型、权限、工作流、界面、API 和运行机制。Coding Agent 基于这些能力完成开发和交付，人负责确认业务目标、拍板方案、验收结果并授权发布。

接下来，我们就以汽车租赁系统为例，从业务建模开始，看看 Coding Agent 如何在 NocoBase 上把一组真实、相互关联的业务需求逐步变成可以持续运行和迭代的应用。

💡 延伸阅读：[库存管理系统搭建对比：纯 AI 搭建 vs AI 基于 NocoBase 搭建](https://www.nocobase.com/cn/blog/building-inventory-management-system-vibe-coding-vs-nocobase-ai)

## 1. 让 Coding Agent 建立完整的业务模型

开始构建前，可以先把汽车租赁的核心需求交给 Coding Agent，让它整理数据模型、业务流程、角色权限和验收标准。

📃 相关文档：[数据建模 - NocoBase 文档](https://docs.nocobase.com/cn/ai-builder/data-modeling)

例如：

> 我们需要管理车辆、客户、门店、员工和租赁订单。车辆涉及保险、维修和违章，订单关联客户、车辆、租赁时间和付款信息。租赁过程包括排期、交车、使用、还车、检查和结算，同时需要处理取消、逾期、维修、违章和欠款等情况。请整理核心数据关系、业务流程、角色权限和关键验收标准。

Coding Agent 可以据此形成一版完整的系统方案：

- 车辆与门店、订单、维修、保险等数据建立关联；
- 订单按照创建、排期、交车、租赁、还车和结算流转；
- 异常情况对应明确的处理规则，并进一步生成可验证的条件，例如车辆不能在同一时间重复分配、维修车辆不能进入新排期、订单完成后需要正确生成应收。

方案确认后，Coding Agent 就可以基于 NocoBase App Foundation，将这些已经确认的业务规则搭建为可运行的应用。

📃 相关文档：[如何让 Claude Code、Codex、Cursor 等 Coding Agent 接入 NocoBase](https://docs.nocobase.com/cn/ai/quick-start)

## 2. Coding Agent 在 NocoBase 上完成系统构建

### 2.1 将业务模型转化为实际工作页面

这些业务模型会进一步形成不同的工作页面，在这套汽车租赁系统中，主要包括：

- **租赁业务台**：处理交车、还车、取消、逾期和未结款；
- **车辆排期**：查看车辆当前和未来的占用情况；
- **车辆调度**：处理不同门店之间的车辆分配；
- **到期与合规管理**：处理保险、证照和维护等到期事项；
- **付款管理**：处理租金、押金、退款和应收；
- **运营看板**：查看订单、车辆、异常和经营数据。

这些页面使用同一套业务数据和关联关系。订单变化后，车辆状态、排期、付款和经营数据也会同步更新。

📃 相关文档：[界面配置 - NocoBase 文档](https://docs.nocobase.com/cn/ai-builder/ui-builder)

### 2.2 沿着一笔订单检查完整业务流程

应用搭建完成后，可以先用一笔订单检查主流程，重点确认订单状态变化后，车辆排期、车辆状态和付款记录是否同步更新。

订单确认车辆和租赁时间后，对应时段需要进入**车辆排期**。已经被订单占用的车辆，不能在重叠时间段再次分配。

![2-2-rental-orders-vxut2h.jpg](https://static-docs.nocobase.com/2-2-rental-orders-vxut2h.jpg)

![2-2-fleet-schedule-phfly8.jpg](https://static-docs.nocobase.com/2-2-fleet-schedule-phfly8.jpg)

到了交车时间，业务人员在**租赁业务台**完成交车，订单进入租赁阶段，车辆状态也同步更新。后续的还车、取消、逾期和未结款仍从这里处理。

![2-2-rental-desk-0h25wk.jpg](https://static-docs.nocobase.com/2-2-rental-desk-0h25wk.jpg)

还车时需要记录实际归还时间、里程和费用。发生逾期时，系统按照既定规则计算相关费用；车辆检查完成后，再根据检查结果更新车辆状态。

![2-2-vehicle-check-in-gyci2l.jpg](https://static-docs.nocobase.com/2-2-vehicle-check-in-gyci2l.jpg)

订单完成后，租金、押金和其他费用进入**付款管理**，保留金额、付款类型、支付方式和当前状态。

![2-2-payment-management-ykgikc.jpg](https://static-docs.nocobase.com/2-2-payment-management-ykgikc.jpg)

至此，一笔租赁业务完成了从订单到结算的完整过程：

**订单 → 排期 → 交车 → 租赁 → 还车 → 结算**

### 2.3 用工作流处理自动规则和跨模块联动

一些规则不需要人工反复处理，可以在满足条件时由工作流自动执行。

📃 相关文档：[工作流管理 - NocoBase 文档](https://docs.nocobase.com/cn/ai-builder/workflow)

这套系统中已经配置了逾期归还、保险和驾驶证到期、车辆维护、订单完成后生成应收，以及预约时间到达后进入提车流程等工作流。

![2-3-workflow-management-m1m1uv.jpg](https://static-docs.nocobase.com/2-3-workflow-management-m1m1uv.jpg)

以违章处理为例。新增违章记录后，系统会根据车辆和违章发生时间查询当时对应的租赁订单，匹配成功后自动建立关联，方便后续确认实际用车客户和责任归属。

这条规则可以表示为：

**新增违章 → 查询对应租赁订单 → 判断是否匹配 → 自动关联订单**

![2-3-violation-workflow-apraux.jpg](https://static-docs.nocobase.com/2-3-violation-workflow-apraux.jpg)

类似的提醒、状态更新和跨模块操作，都可以按照“触发条件—业务判断—执行动作”的方式配置到工作流中，让已经确认的业务规则持续执行。

### 2.4 处理异常、合规与经营分析

订单可以正常流转以后，一些需要人工关注的问题也要有明确的处理入口。

例如，车辆逾期归还后生成待处理任务；保险、驾驶证或维护临近到期时进入**到期与合规管理**；未收款和逾期应收则进入**现金流与账龄分析**。

![2-4-expiry-compliance-9gwqd1.jpg](https://static-docs.nocobase.com/2-4-expiry-compliance-9gwqd1.jpg)

![2-4-overdue-return-details-qss45x.jpg](https://static-docs.nocobase.com/2-4-overdue-return-details-qss45x.jpg)

![2-4-cash-flow-aging-ic9xwt.jpg](https://static-docs.nocobase.com/2-4-cash-flow-aging-ic9xwt.jpg)

这些业务数据积累后，还可以继续用于经营分析。在**单车盈利分析**中，可以将租赁收入与维护、保险等成本放在一起，查看不同车辆的实际收益。

![2-4-vehicle-profitability-gnjljt.jpg](https://static-docs.nocobase.com/2-4-vehicle-profitability-gnjljt.jpg)

订单、车辆、合规和资金数据也会汇总到**运营看板**，方便管理人员查看当前待处理事项、异常情况和关键经营指标。

💡 延伸阅读：[用 NocoBase 搭建可联动的运营仪表盘](https://www.nocobase.com/cn/blog/build-interactive-operations-dashboard-with-nocobase)

![2-4-car-rental-dashboard-zmch8c.jpg](https://static-docs.nocobase.com/2-4-car-rental-dashboard-zmch8c.jpg)

### 2.5 按照验收标准完成测试、验收和发布

系统完成后，可以直接按照 1.3 中确认的验收标准进行测试，检查车辆排期、状态变化、应收生成和异常处理等关键规则是否符合预期。

Coding Agent 执行测试并处理发现的问题，修改后重新验证受影响的流程。关键规则通过后，由人完成验收并授权发布，再由 Coding Agent 执行发布和运行检查。

📃 相关文档：[版本控制 - NocoBase 文档](https://docs.nocobase.com/cn/ai-builder/version-control)

**Coding Agent 实现与测试 → 人验收并授权发布 → Coding Agent 发布并检查运行结果**

这套验收标准也可以继续保留下来。后续系统发生修改时，可以重新运行相同的检查，确认新功能是否影响已有业务规则。

## 3. 系统上线后的使用与迭代

系统上线后，AI 会进入两种不同的工作场景：

- **Coding Agent** 继续处理应用修改、测试和交付；
- **AI 员工** 在运行中的系统内读取业务数据、调用工具并处理具体任务。

两者可以使用相同的模型，但身份、权限和工作范围需要分别管理。

### 3.1 AI 员工基于业务上下文处理日常任务

车辆、订单、排期、付款和合规数据进入系统后，AI 员工可以在授权范围内直接使用这些业务数据。

💡 延伸阅读：[使用内置工作流与 AI 员工完成公司背景调研自动化 - NocoBase](https://www.nocobase.com/cn/blog/automate-company-background-research-with-workflows-and-ai-employees)

例如，在**运营看板**中，可以查询当天需要处理的订单、异常车辆或当前收入情况。

![3-1-ai-assistant-operations-dashboard-dfy58k.png](https://static-docs.nocobase.com/3-1-ai-assistant-operations-dashboard-dfy58k.png)

![3-1-sales-pipeline-revenue-report-rsbbf0.png](https://static-docs.nocobase.com/3-1-sales-pipeline-revenue-report-rsbbf0.png)

在**车辆调度**场景中，可以根据各门店的可用车辆和当前订单给出调度建议，再由业务人员确认。

![3-1-dispatch-assistant-9qg1yy.png](https://static-docs.nocobase.com/3-1-dispatch-assistant-9qg1yy.png)

![3-1-dispatch-available-vehicles-0jnoz4.png](https://static-docs.nocobase.com/3-1-dispatch-available-vehicles-0jnoz4.png)

AI 员工能够读取哪些数据、调用哪些工具，以及是否允许执行具体操作，都由对应的业务权限和工具配置决定。

📃 相关文档：[AI 员工如何控制使用权限和数据访问权限](https://docs.nocobase.com/cn/ai-employees/permission)

### 3.2 在现有系统上继续迭代

系统投入使用后，业务规则仍会变化，例如增加门店、调整价格、修改保险检查方式、接入新的付款方式或增加经营指标。

这些需求可以重新交给 Coding Agent，并直接基于现有的数据模型、页面、权限和工作流进行修改。

例如，业务需要增加“高峰期动态定价”，只需补充适用条件、价格规则和预期结果。Coding Agent 可以基于现有的车辆、订单和定价结构提出修改方案，确认后完成实现和测试，再按照原有的验收和发布流程交付。

这样，后续迭代主要围绕发生变化的业务部分展开，已经确认的数据关系和业务规则可以继续保留。

## 结语

AI + NocoBase 的适用范围并不局限于大型企业系统。对于个人、小团队或业务部门，如果只是想快速做一个内部工具、审批应用、资产台账或简单的运营系统，也可以直接从较小的需求开始，让 Coding Agent 基于现有应用底座完成数据模型、页面和流程。

如果这篇文章对你有帮助，也欢迎分享给正在关注 AI Coding、企业应用或业务系统搭建的朋友。

如果你也想用 AI 和 NocoBase 搭建类似的企业应用，可以参考这些完整案例：

👉 [AI + NocoBase 搭建 CRM](https://www.nocobase.com/cn/blog/build-production-ready-crm-with-ai-and-nocobase)

👉 [AI + NocoBase 搭建企业 IT 运维系统](https://www.nocobase.com/cn/blog/build-it-operations-system-with-ai-nocobase)

在之前的文章中，我们陆续介绍了[如何结合 AI 和 NocoBase 搭建 CRM](https://www.nocobase.com/cn/blog/build-production-ready-crm-with-ai-and-nocobase)、[IT 资产管理](https://www.nocobase.com/cn/blog/enterprise-it-asset-management-system-guide)和[工单系统](https://www.nocobase.com/cn/blog/build-production-ready-ticketing-system-with-ai)，让 AI 将自然语言描述的业务需求转化为可以实际使用的企业应用。

最近在 Reddit 的 [r/AI_Agents](https://www.reddit.com/r/AI_Agents/comments/1w311yz/) 里，一位开发者分享了自己正在做的项目：帮助一家小工厂整理考勤和薪酬数据，并计划接入 AI Agent，让老板可以直接通过 WhatsApp 查询员工出勤、加班情况和异常数据。

![intro-ai-agents-reddit-post-pkc444.png](https://static-docs.nocobase.com/intro-ai-agents-reddit-post-pkc444.png)

但他也有些疑问：Agent 接入后，客户究竟需要哪些功能？哪些只是 Demo 中看起来不错？真正投入使用时，数据质量、查询准确性和使用习惯又会带来哪些挑战？

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

类似的问题也存在于企业经营分析中。当业务数据涉及销售、库存、采购和财务等多个环节时，单独查看某一类数据往往难以支持完整的经营判断。如果数据来源不一致、记录不完整，即使接入了 AI，分析结果也可能受到影响。

这次，我们以一家经营电子设备、办公用品等多品类商品的企业为例。它通过 AI 和 NocoBase 搭建了一套 All-in-one 业务系统，涵盖销售、库存、采购和财务等模块。

基于系统中积累的业务数据，我们将逐步介绍如何利用 AI 进行经营分析，并结合不同业务环节的信息，为企业决策提供参考。

## 01｜明确经营问题，了解现有业务数据

企业的经营决策往往涉及多个部门。销售团队关注客户需求和订单增长，采购部门需要提前安排备货，财务部门则更在意成本、回款和资金使用情况。

有时销售机会不断增加，库存却已经积压；有时订单前景不错，企业仍然需要面对资金压力。

我们准备借助 AI 分析一个企业经营中经常遇到的问题：

**当销售机会增加，企业应该继续扩大采购，还是优先控制库存与资金占用？**

要回答这个问题，我们需要了解未来可能有多少订单、现有库存能否满足需求、已经安排了多少采购，以及企业目前的资金状况能否支持进一步投入。

本次使用的 NocoBase All-in-one 系统包含销售、库存、采购和财务等业务模块，记录了从客户商机、商品库存到采购订单和应收账款的相关信息。

![01-business-overview-dashboard-l39279.png](https://static-docs.nocobase.com/01-business-overview-dashboard-l39279.png)

这些模块为本次经营分析提供了以下数据：


| 业务模块 | 系统中的数据                         | 对经营决策的作用             |
| -------- | ------------------------------------ | ---------------------------- |
| 销售管理 | 客户、销售商机、商机阶段、收入预测   | 了解潜在订单和未来销售需求   |
| 库存管理 | 商品、库存数量、库存变动、补货点     | 查看现有库存及可能的缺货风险 |
| 采购管理 | 采购订单、供应商、采购金额、订单状态 | 了解当前采购安排和资金需求   |
| 财务管理 | 发票、应收账款、费用、预算           | 查看回款情况和经营资金压力   |

不过，系统里有数据，并不意味着 AI 能直接得出可靠的结论。

💡 延伸阅读：[GitHub 上 3 款开源 AI ERP 对比：NocoBase、Odoo 与 ERPNext](https://www.nocobase.com/cn/blog/top-3-open-source-erp-with-ai-on-github-nocobase-vs-odoo-vs-erpnext)

例如，销售商机中的预计成交金额代表潜在收入，最终能否成交还存在不确定性；现有库存需要结合实际需求和已经安排的采购订单来判断；财务模块中的发票金额，也不能直接等同于企业已经收到的款项。

这些信息需要结合具体业务记录进行分析，才能为后续的经营判断提供可靠依据。

## 02｜从销售商机入手，了解未来业务需求

销售机会增加通常是一个积极的信号，但对于企业来说，还需要了解这些机会有多大可能转化为实际订单，以及未来可能产生多少业务需求。

在 NocoBase 的销售管理模块中，可以查看客户商机、预计成交金额、商机阶段以及预计成交时间等信息。

![02-sales-pipeline-dbtmhm.png](https://static-docs.nocobase.com/02-sales-pipeline-dbtmhm.png)

不同阶段的商机，对企业后续的采购安排也有不同的参考价值。

例如，某个客户刚刚表达采购意向，另一个客户已经进入报价或合同谈判阶段。虽然两者都属于潜在销售机会，但距离实际成交还有不同的距离。

对于预计近期成交的商机，企业可以提前关注相关商品的库存和交付能力；而对于仍处于初步接洽阶段的客户，则需要谨慎评估实际需求，避免过早安排大量采购。

除了商机进展，我们还可以通过 NocoBase 的收入预测页面，观察潜在收入在不同时间段的分布情况。

![02-sales-pipeline-d7xrjd.png](https://static-docs.nocobase.com/02-sales-pipeline-d7xrjd.png)

收入预测能够为采购规划提供参考，但最终成交金额、订单数量和交付时间仍可能发生变化。因此，具体的采购数量还需要结合实际订单和商品需求确定。

接下来，我们继续查看库存和采购数据，看看现有的商品储备和采购安排能否满足这些潜在需求。

## 03｜结合库存与采购，评估后续备货需求

### 3.1 让 AI 帮助识别库存风险

在 NocoBase 的库存管理模块中，可以查看不同商品的库存数量、补货点以及历史库存变动记录。

通过商品列表，我们可以初步了解哪些商品的库存接近补货点，哪些商品仍有较多库存。例如，对于库存数量偏低的商品，还需要结合近期销售需求和供应商交货周期，判断是否需要提前补货。

![03-product-inventory-list-uuovuz.png](https://static-docs.nocobase.com/03-product-inventory-list-uuovuz.png)

除了当前库存，历史变动记录也需要关注。通过查看商品的入库、出库和库存调整情况，可以进一步了解库存的变化趋势。例如，某款商品虽然库存充足，但近期出库数量很少，就需要关注是否存在积压的可能。

![03-stock-movement-history-om6a5r.png](https://static-docs.nocobase.com/03-stock-movement-history-om6a5r.png)

当商品种类和库存记录较多时，逐一查看这些数据会比较耗时。于是，我们尝试在 NocoBase 的业务页面中直接向 AI 提出库存分析需求，希望它根据系统中的库存记录，帮助找出可能存在缺货或积压风险的商品。

![03-stock-movement-history-et52lf.png](https://static-docs.nocobase.com/03-stock-movement-history-et52lf.png)

在实际查询过程中，AI 发现系统中存在不同的库存数据来源，需要先确认应该使用哪一份数据，再继续分析。

![03-ai-inventory-data-source-akr8i9.png](https://static-docs.nocobase.com/03-ai-inventory-data-source-akr8i9.png)

同样是库存信息，有些数据记录商品当前的库存数量，有些则保存历史出入库和库存调整记录。如果使用了错误的数据来源，就可能混淆当前库存与历史变动情况，影响后续的分析结果。

而在判断是否需要增加备货时，库存数据也只是其中一部分。企业可能已经向供应商提交了采购订单，只是商品尚未到货。接下来，我们还需要查看现有的采购安排，了解哪些需求已经有相应的采购计划，以及后续可能涉及多少资金。

### 3.2 查看采购安排与后续资金需求

在 NocoBase 的采购管理模块中，可以查看现有采购订单的供应商、采购金额和订单状态，以及采购承诺和供应商支出等信息。

![03-purchase-orders-commitments-zqata0.png](https://static-docs.nocobase.com/03-purchase-orders-commitments-zqata0.png)

这些记录可以帮助企业判断哪些需求已经安排采购。

例如，某款商品当前库存偏低，但对应的采购订单已经在处理中，就需要进一步核对订购数量和预计到货时间，再决定是否追加采购，避免重复下单造成库存积压。

采购涉及的资金同样需要关注。已有采购订单反映了企业当前的采购安排，但订单金额、采购承诺和实际付款之间可能存在差异。要了解后续还需要投入多少资金，还应结合付款记录和供应商的付款条件进行判断。

将现有库存、采购订单和前面了解到的销售需求结合起来，可以帮助企业评估新增采购的必要性，避免在已有采购尚未完成的情况下继续增加不必要的备货。

不过，采购安排还会受到客户回款和经营资金状况的影响。接下来，我们继续查看财务数据。

## 04｜查看财务数据，了解收入与盈利情况

财务方面主要关注三个问题：企业近期的收入情况如何？应收账款和回款进展如何？现有数据是否足以判断盈利情况？

### 4.1 查看发票与应收账款情况

我们先进入 NocoBase 的财务管理模块，查看客户发票及相关应收账款记录，了解企业的开票情况、待收款项和收款进展。

![04-invoices-receivables-mu3cox.png](https://static-docs.nocobase.com/04-invoices-receivables-mu3cox.png)

这些数据与企业的日常资金安排密切相关。

例如，一笔销售订单已经完成交付并开具发票，但客户可能需要一段时间才能付款。如果企业同时需要向供应商支付采购货款，就可能出现采购支出早于客户回款的情况。

因此，查看财务记录时，需要区分发票金额、已确认收入、应收账款和实际回款。对于正在考虑增加采购的企业，了解尚未收回的款项及预计回款时间，有助于判断后续采购是否会带来额外的资金压力。

### 4.2 让 AI 分析收入与盈利情况

接下来，我们尝试让 AI 进一步分析企业的收入和盈利表现。

在 NocoBase 的财务页面中，我们向 AI 提出了收入增长与盈利能力分析需求，希望它利用系统中已有的财务数据，了解企业近期的收入变化，并判断盈利情况是否有所改善。

![04-ai-finance-analysis-cteu81.png](https://static-docs.nocobase.com/04-ai-finance-analysis-cteu81.png)

AI 根据当前能够获取的数据进行了查询，并生成了一份收入增长与盈利能力分析报告。

![04-revenue-profitability-report-vcz83c.png](https://static-docs.nocobase.com/04-revenue-profitability-report-vcz83c.png)

报告提供了收入相关的分析，但在进一步判断盈利能力时，AI 指出了一个数据限制：**现有数据还不足以完整计算利润，因此无法确认收入增长是否带来了盈利改善。**

要准确计算利润，除了收入，还需要了解对应商品或订单的实际成本。例如，采购成本、运输费用、仓储费用以及其他相关支出，都可能影响最终的盈利结果。

即使采购模块已经记录了订单金额，也不能直接将这些金额作为已售商品的成本。还需要确认哪些成本对应已经实现的销售收入，以及相关费用应该如何分摊。

![04-ai-profitability-conclusion-nc0cgz.png](https://static-docs.nocobase.com/04-ai-profitability-conclusion-nc0cgz.png)

如果企业希望进一步了解不同商品或订单的盈利表现，就需要补充相应的成本和费用记录，明确利润计算口径，再结合销售数据进行分析。

## 05｜综合业务数据，让 AI 辅助经营决策

经过前面的分析，我们已经分别了解了潜在销售需求、库存情况、采购安排，以及收入和回款信息。

现在，我们希望 AI 结合这些数据，帮助判断企业下一阶段应该优先关注哪些经营问题。

💡 延伸阅读：[用 NocoBase 搭建可联动的运营仪表盘](https://www.nocobase.com/cn/blog/build-interactive-operations-dashboard-with-nocobase)

在 NocoBase 中，我们向 AI 提出了综合经营分析需求，让它结合销售商机、采购订单、采购承诺及应收账款等数据，评估未来业务需求与资金安排之间的关系。

![05-ai-decision-prompt-jlrdc3.png](https://static-docs.nocobase.com/05-ai-decision-prompt-jlrdc3.png)

AI 根据当前能够获取的数据生成了一份综合经营分析报告。结合销售机会、采购安排和应收账款情况，报告提出了三个主要建议：

- **优先跟进客户回款。** 核实尚未收回的客户款项及预计回款时间，确定需要优先跟进的应收账款，改善资金回收情况。
- **谨慎安排新增采购。** 对照潜在销售需求、现有库存和已经提交的采购订单，判断哪些商品需要提前补货，避免重复采购或过早增加库存。
- **合理安排经营资金。** 结合已有采购承诺、后续付款计划与预计回款时间，评估新增采购可能带来的资金占用，合理安排资金使用。

![05-working-capital-report-ozaqv9.png](https://static-docs.nocobase.com/05-working-capital-report-ozaqv9.png)

这些建议为下一步的经营安排提供了参考，但在执行前，还需要核实相关数据。例如，调整采购计划时，需要核对库存数量、在途订单和预计销售需求；安排客户回款跟进时，则需要确认应收账款金额、到期时间和当前收款进展。

在 NocoBase 中，企业还可以根据实际需要配置相应的业务流程。例如，将待跟进的客户回款分配给对应负责人，记录沟通和收款进展；对于新增采购申请，可以设置审批工作流，并结合角色权限明确不同人员的操作范围。这样，经过核实的分析建议就可以进一步落实到具体的业务安排中，由相关负责人确认并执行。

## 结语

企业经营中的许多问题，很难通过单一指标得到答案。销售增长是否值得增加采购，还需要结合库存、成本、回款和资金安排综合判断。单个指标可以反映业务变化，而不同数据之间的关联，往往能帮助企业发现更值得关注的机会与风险。

借助 NocoBase，企业可以将分散在不同业务系统中的数据接入并关联起来，为 AI 提供更完整的分析依据。随着业务数据持续更新，AI 也能不断参与新的经营分析，帮助团队及时发现变化，让已有数据在日常管理和经营决策中发挥更大的价值。

💡 **将 AI 引入已有的业务系统：** 阅读 [《企业如何在现有系统中引入 AI？》](https://www.nocobase.com/cn/blog/add-ai-to-existing-enterprise-systems-with-nocobase)，了解如何复用现有数据，逐步扩展 AI 应用。

🚀 **亲自体验：** [访问 NocoBase 在线 Demo](https://demo.nocobase.com/new)，探索 AI、业务数据和工作流如何在同一套系统中协同工作。


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

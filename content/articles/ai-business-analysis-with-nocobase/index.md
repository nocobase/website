In previous articles, we introduced [how to build a CRM with AI and NocoBase](https://www.nocobase.com/en/blog/build-production-ready-crm-with-ai-and-nocobase), [IT asset management](https://www.nocobase.com/en/blog/enterprise-it-asset-management-system-guide), and a [ticketing system](https://www.nocobase.com/en/blog/build-production-ready-ticketing-system-with-ai), showing how AI can turn business requirements described in natural language into enterprise applications that can actually be used.

Recently, in Reddit's [r/AI_Agents](https://www.reddit.com/r/AI_Agents/comments/1w311yz/), a developer shared a project they were working on: helping a small factory organize attendance and payroll data, with plans to connect an AI Agent so the owner could query employee attendance, overtime, and exception data directly through WhatsApp.

![intro-ai-agents-reddit-post-pkc444.png](https://static-docs.nocobase.com/intro-ai-agents-reddit-post-pkc444.png)

But they also had questions: once the Agent is connected, which features will the client actually need? Which ones only look good in a demo? And when the system is used in real operations, what challenges will data quality, query accuracy, and user habits create?

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. → [Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

The same questions apply to business analysis. When business data spans sales, inventory, procurement, and finance, looking at only one type of data is often not enough to support a complete management decision. If data sources are inconsistent or records are incomplete, AI analysis can also be affected.

In this article, we use a company that sells multiple categories of electronic devices and office supplies as an example. It built an All-in-one business system with AI and NocoBase, covering sales, inventory, procurement, finance, and other modules.

Using the business data accumulated in the system, we will show step by step how AI can support business analysis and combine information across different business functions to provide input for decision-making.

## 01 | Define the Business Question and Understand the Available Data

Business decisions often involve multiple departments. Sales teams focus on customer demand and order growth, procurement teams need to plan replenishment in advance, and finance teams are more concerned with costs, collections, and the use of working capital.

Sometimes sales opportunities keep increasing while inventory is already building up. In other cases, the order outlook may look positive while the company still faces cash pressure.

We want to use AI to analyze a common business question:

**As sales opportunities increase, should the company keep expanding procurement, or should it prioritize controlling inventory and working-capital usage?**

To answer this question, we need to understand how many orders may be coming, whether current inventory can support the expected demand, how much procurement has already been arranged, and whether the company's current financial position can support additional investment.

The NocoBase All-in-one system used in this example includes sales, inventory, procurement, and finance modules. It records information ranging from customer opportunities and product inventory to purchase orders and accounts receivable.

![01-business-overview-dashboard-l39279.png](https://static-docs.nocobase.com/01-business-overview-dashboard-l39279.png)

These modules provide the following data for this analysis:


| Business module        | Data in the system                                                    | Role in business decisions                                    |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------- |
| Sales management       | Customers, sales opportunities, opportunity stages, revenue forecasts | Understand potential orders and future sales demand           |
| Inventory management   | Products, inventory quantities, inventory movements, reorder points   | Review current inventory and possible stockout risks          |
| Procurement management | Purchase orders, suppliers, purchase amounts, order status            | Understand current procurement plans and funding requirements |
| Finance management     | Invoices, accounts receivable, expenses, budgets                      | Review collections and operating cash pressure                |

However, simply having data in the system does not mean AI can immediately produce a reliable conclusion.

💡 Further reading: [Top 3 Open Source ERP with AI on GitHub: NocoBase vs Odoo vs ERPNext](https://www.nocobase.com/en/blog/top-3-open-source-erp-with-ai-on-github-nocobase-vs-odoo-vs-erpnext)

For example, the expected deal value of a sales opportunity represents potential revenue, but there is still uncertainty about whether the deal will close. Current inventory needs to be assessed together with actual demand and purchase orders that have already been placed. Invoice amounts in the finance module also cannot be treated as cash already collected.

This information needs to be analyzed together with the underlying business records before it can provide a reliable basis for later decisions.

## 02 | Start with Sales Opportunities to Understand Future Demand

An increase in sales opportunities is usually a positive signal, but the company also needs to understand how likely those opportunities are to become actual orders and how much business demand they may generate.

In NocoBase's sales management module, users can review customer opportunities, expected deal values, opportunity stages, and expected closing dates.

![02-sales-pipeline-dbtmhm.png](https://static-docs.nocobase.com/02-sales-pipeline-dbtmhm.png)

Opportunities at different stages have different value for procurement planning.

For example, one customer may have only just expressed purchase intent, while another is already in quotation or contract negotiation. Both count as potential sales opportunities, but they are at different distances from an actual order.

For opportunities expected to close soon, the company can start monitoring the relevant products' inventory and fulfillment capacity in advance. For customers still in early-stage discussions, actual demand needs to be evaluated more cautiously to avoid arranging large purchases too early.

In addition to opportunity progress, NocoBase's revenue forecast page can be used to see how potential revenue is distributed across different time periods.

![02-sales-pipeline-d7xrjd.png](https://static-docs.nocobase.com/02-sales-pipeline-d7xrjd.png)

Revenue forecasts can inform procurement planning, but final deal values, order quantities, and delivery dates may still change. Specific purchase quantities therefore still need to be determined using actual orders and product demand.

Next, we continue with inventory and procurement data to see whether current stock and planned purchases can support this potential demand.

## 03 | Combine Inventory and Procurement to Evaluate Replenishment Needs

### 3.1 Let AI Help Identify Inventory Risks

In NocoBase's inventory management module, users can review inventory quantities, reorder points, and historical inventory movement records for different products.

The product list provides an initial view of which products are approaching their reorder points and which still have relatively high inventory. For products with low inventory, recent sales demand and supplier lead times also need to be considered before deciding whether to replenish early.

![03-product-inventory-list-uuovuz.png](https://static-docs.nocobase.com/03-product-inventory-list-uuovuz.png)

Historical movements also matter. By reviewing receipts, issues, and inventory adjustments, the company can better understand inventory trends. A product may still have plenty of inventory, for example, but if outbound volume has been very low recently, there may be a risk of overstock.

![03-stock-movement-history-om6a5r.png](https://static-docs.nocobase.com/03-stock-movement-history-om6a5r.png)

When there are many products and inventory records, reviewing them one by one can be time-consuming. We therefore tried asking AI directly from the NocoBase business page to analyze the inventory records and help identify products that may face stockout or overstock risks.

![03-stock-movement-history-et52lf.png](https://static-docs.nocobase.com/03-stock-movement-history-et52lf.png)

During the actual query, AI found that the system contained different inventory data sources and first needed to determine which data should be used before continuing the analysis.

![03-ai-inventory-data-source-akr8i9.png](https://static-docs.nocobase.com/03-ai-inventory-data-source-akr8i9.png)

Even within inventory data, some records represent current inventory quantities while others store historical receipts, issues, and inventory adjustments. Using the wrong data source can mix up current inventory with historical movements and affect the analysis that follows.

Inventory data is also only one part of deciding whether more stock needs to be purchased. The company may already have purchase orders with suppliers even if the products have not yet arrived. We therefore also need to review existing procurement arrangements to understand which needs are already covered and how much funding may be required.

### 3.2 Review Procurement Plans and Future Funding Requirements

In NocoBase's procurement management module, users can review suppliers, purchase amounts, and order status for existing purchase orders, along with purchase commitments and supplier spending.

![03-purchase-orders-commitments-zqata0.png](https://static-docs.nocobase.com/03-purchase-orders-commitments-zqata0.png)

These records help the company understand which requirements already have procurement arranged.

For example, a product may currently have low inventory, but if a corresponding purchase order is already being processed, the company should first check the ordered quantity and expected arrival time before placing another order. This helps avoid duplicate purchasing and unnecessary inventory buildup.

The funding involved in procurement also needs attention. Existing purchase orders reflect the company's current procurement arrangements, but order amounts, purchase commitments, and actual payments may differ. To understand how much more funding will be required, payment records and supplier payment terms should also be considered.

Combining current inventory, purchase orders, and the sales demand identified earlier helps the company assess whether additional procurement is necessary, avoiding unnecessary stock increases while existing purchases are still pending.

Procurement decisions are also affected by customer collections and overall working-capital conditions. Next, we turn to the finance data.

## 04 | Review Financial Data to Understand Revenue and Profitability

From a finance perspective, there are three main questions: How has recent revenue performed? What is the status of accounts receivable and collections? And is the available data sufficient to evaluate profitability?

### 4.1 Review Invoices and Accounts Receivable

We first open NocoBase's finance management module and review customer invoices and related accounts-receivable records to understand invoicing, outstanding amounts, and collection progress.

![04-invoices-receivables-mu3cox.png](https://static-docs.nocobase.com/04-invoices-receivables-mu3cox.png)

These records are closely related to day-to-day cash planning.

For example, a sales order may already have been fulfilled and invoiced, but the customer may not pay until later. If the company needs to pay suppliers at the same time, procurement cash outflows may occur before customer collections.

That is why financial analysis needs to distinguish between invoice amounts, recognized revenue, accounts receivable, and cash actually collected. For a company considering additional procurement, understanding outstanding receivables and expected collection dates helps evaluate whether more purchasing will create additional cash pressure.

### 4.2 Let AI Analyze Revenue and Profitability

Next, we ask AI to analyze the company's revenue and profitability in more depth.

On the NocoBase finance page, we asked AI to analyze revenue growth and profitability using the financial data already available in the system, with the goal of understanding recent revenue changes and whether profitability had improved.

![04-ai-finance-analysis-cteu81.png](https://static-docs.nocobase.com/04-ai-finance-analysis-cteu81.png)

AI queried the data it could currently access and generated a revenue-growth and profitability analysis report.

![04-revenue-profitability-report-vcz83c.png](https://static-docs.nocobase.com/04-revenue-profitability-report-vcz83c.png)

The report provided analysis related to revenue, but when it tried to evaluate profitability further, AI identified a data limitation: **the available data was not sufficient to calculate profit completely, so it could not confirm whether revenue growth had actually improved profitability.**

Accurate profit calculation requires not only revenue but also the actual costs associated with the relevant products or orders. Procurement costs, transportation, warehousing, and other related expenses can all affect the final result.

Even if the procurement module already records purchase-order amounts, those amounts cannot simply be treated as the cost of goods sold. The company still needs to identify which costs correspond to realized sales revenue and how related expenses should be allocated.

![04-ai-profitability-conclusion-nc0cgz.png](https://static-docs.nocobase.com/04-ai-profitability-conclusion-nc0cgz.png)

If the company wants to analyze profitability by product or order in more detail, it needs to add the corresponding cost and expense records, define a clear profit-calculation method, and then combine those records with sales data.

## 05 | Combine Business Data and Let AI Support Management Decisions

After the previous analysis, we now have separate views of potential sales demand, inventory, procurement arrangements, revenue, and collections.

We then ask AI to combine these data points and help identify which business issues should receive the most attention in the next stage.

💡 Further reading: [Build an Interactive Operations Dashboard with NocoBase](https://www.nocobase.com/en/blog/build-interactive-operations-dashboard-with-nocobase)

In NocoBase, we asked AI to perform an integrated business analysis using sales opportunities, purchase orders, purchase commitments, accounts receivable, and other available data to evaluate the relationship between future demand and funding arrangements.

![05-ai-decision-prompt-jlrdc3.png](https://static-docs.nocobase.com/05-ai-decision-prompt-jlrdc3.png)

AI generated an integrated business analysis report based on the data it could access. Combining sales opportunities, procurement arrangements, and accounts receivable, the report produced three main recommendations:

- **Prioritize customer collections.** Verify outstanding customer payments and expected collection dates, identify the receivables that need priority follow-up, and improve cash recovery.
- **Plan additional procurement cautiously.** Compare potential sales demand with current inventory and purchase orders already submitted to determine which products actually need early replenishment, avoiding duplicate purchasing or premature inventory buildup.
- **Manage working capital carefully.** Combine existing purchase commitments, upcoming payment plans, and expected collection dates to evaluate the working capital tied up by new purchases and plan the use of funds more reasonably.

![05-working-capital-report-ozaqv9.png](https://static-docs.nocobase.com/05-working-capital-report-ozaqv9.png)

These recommendations provide a reference for the next round of business planning, but the relevant data still needs to be verified before action is taken. When adjusting procurement plans, for example, the company needs to confirm inventory quantities, inbound orders, and expected sales demand. When following up on customer collections, it needs to confirm receivable amounts, due dates, and current collection progress.

In NocoBase, companies can also configure corresponding business processes as needed. Outstanding customer collections can be assigned to responsible staff, with communication and collection progress recorded. New purchase requests can use approval workflows, while role permissions define what different users are allowed to do. This allows verified analysis recommendations to be translated into concrete business actions that are then confirmed and executed by the responsible people.

## Conclusion

Many business questions cannot be answered with a single metric. Whether sales growth justifies more procurement also depends on inventory, costs, collections, and working-capital planning. Individual indicators can reveal changes in the business, while relationships across different data sources often help teams identify the opportunities and risks that deserve more attention.

With NocoBase, companies can connect and relate data distributed across different business systems, giving AI a more complete basis for analysis. As business data continues to update, AI can participate in new analyses over time, helping teams detect changes earlier and make better use of existing data in day-to-day management and decision-making.

💡 **Bring AI into existing business systems:** Read [How to Add AI to Existing Enterprise Systems with NocoBase](https://www.nocobase.com/en/blog/add-ai-to-existing-enterprise-systems-with-nocobase) to learn how to reuse existing data and expand AI applications gradually.

🚀 **Try it yourself:** [Visit the NocoBase online demo](https://demo.nocobase.com/new) to explore how AI, business data, and workflows can work together in the same system.


**Related reading**:

* **[How to Build a Real-World Business System with AI and NocoBase: A Car Rental Management Example](https://www.nocobase.com/en/blog/build-car-rental-management-system-with-ai-and-nocobase)**
* **[10 Open-Source AI Agent Platforms for Business: From Automation to Internal Apps](https://www.nocobase.com/en/blog/open-source-ai-agent-platforms-for-business)**
* **[How to Build a Production-Ready Ticketing System with AI](https://www.nocobase.com/en/blog/build-production-ready-ticketing-system-with-ai)**
* **[Building an Inventory Management System: Vibe Coding vs NocoBase + AI](https://www.nocobase.com/en/blog/building-inventory-management-system-vibe-coding-vs-nocobase-ai)**
* **[How to Build a Production-Ready IT Operations System with AI and NocoBase](https://www.nocobase.com/en/blog/build-it-operations-system-with-ai-nocobase)**
* **[NocoBase vs Baserow: Flexible Databases vs Enterprise Systems](https://www.nocobase.com/en/blog/nocobase-vs-baserow)**
* **[How to Build a Production-Ready CRM with AI and NocoBase](https://www.nocobase.com/en/blog/build-production-ready-crm-with-ai-and-nocobase)**
* **[How to Design an IT Asset Management System: Data Model, Lifecycle, and Workflows](https://www.nocobase.com/en/blog/enterprise-it-asset-management-system-guide)**
* **[How to Choose a Smartsheet Alternative: 7 Tools Compared](https://www.nocobase.com/en/blog/best-smartsheet-alternatives)**
* **[5 Open-Source AI No-Code Tools for Complex Relational Data Models](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-complex-relational-models)**
* **[What Is AI No-Code? A Practical Guide to No-Code Platforms in the AI Era](https://www.nocobase.com/en/blog/what-is-ai-no-code)**
* **[9 Open-Source AI No-Code Tools on GitHub Worth Watching](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-github-9)**
* **[14 Open Source AI Agent Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-ai-agent-tools-16)**

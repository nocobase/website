AI capabilities are entering every part of enterprise software, from code generation and data analysis to Agents, automation, and business assistance. We previously reviewed [10 Open-Source AI Agent Platforms for Business](https://www.nocobase.com/en/blog/open-source-ai-agent-platforms-for-business), covering automation, Agent building, and internal applications. Enterprises now have more options than ever.

But for companies that already rely on CRM, ERP, MES, SaaS, or custom-built systems, actually adopting AI is not that simple. Existing systems often have years of operational history, accumulated data, established processes, permission models, integrations, and user habits. Even when a company wants to add AI capabilities, migrating or rebuilding the entire system is rarely easy.

Recently, in Reddit's [r/CRMSoftware](https://www.reddit.com/r/CRMSoftware/comments/1vmymee/7_years_on_salesforce_12_employees_upgrade_quote/), a small-business owner shared a similar experience.

Their company started using Salesforce in 2019 with only one account and has since grown to a team of 12. Over the past seven years, they have built extensive customizations around their business, and Salesforce has gradually become a core operational system.

![intro-salesforce-reddit-post-wasudu.png](https://static-docs.nocobase.com/intro-salesforce-reddit-post-wasudu.png)

As the business continued to grow, they needed more automation, cross-platform integrations, call logging, financial synchronization, LLM integrations, and forms. They also wanted to explore AI Agents, intelligent analytics, and AI-driven business automation. Continuing with Salesforce would require a plan upgrade and additional budget for APIs, Agentforce, and other third-party tools. Migrating, on the other hand, would mean dealing with custom objects, non-standard workflows, historical data, and the time and cost of the entire transition.

This situation is common in many companies: there are new, relatively independent requirements, but the business still needs to keep using data from existing systems. A full migration is expensive, while rebuilding everything from scratch creates additional maintenance pressure.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. → [Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

A more flexible approach is to use **AI with NocoBase** to turn the new requirement into a separate internal application first. Compared with relying on AI to build everything from scratch, enterprise applications still need stable data relationships, permissions, workflows, and long-term maintainability. NocoBase already provides these foundational capabilities, while AI can help build the new application on top of them and continue using data from the existing system.

This means the company does not need to solve a full-system migration at the beginning. As the new application matures, more data and business processes can be moved over gradually based on actual needs.

For example, imagine a manufacturing company that already has an Inventory Management System but wants to add a **mobile inventory counting app**. Warehouse staff need to scan items, enter actual quantities, and handle discrepancies on site, while continuing to use the existing product, SKU, warehouse, and inventory data. A requirement with a clear scope that still needs to reuse existing data is a good fit for building a separate application with **AI and NocoBase**, then expanding it gradually based on real usage.

Next, we will use this scenario to show how AI and NocoBase can turn a relatively independent new requirement into a new internal application, while gradually adding AI analysis and automation capabilities.

💡 Read more: [Building an Inventory Management System: Vibe Coding vs NocoBase + AI](https://www.nocobase.com/en/blog/building-inventory-management-system-vibe-coding-vs-nocobase-ai)

## 01 | Choose a Business Scenario That Can Be Piloted Independently

Start with a business requirement that has a clear scope, measurable value, and can be piloted independently.

1. **Clear scope**: the business objects, operating process, and users are relatively well defined, and changing this scenario does not affect multiple core systems at once.
2. **Measurable value**: after the application is introduced, the team can directly observe metrics such as processing time, manual work, exception volume, and operational efficiency.
3. **Independent pilot**: the application can first be used by one department, one group of users, or one business process while continuing to reuse data from the existing system.

This manufacturing company already has an Inventory Management System that manages products, SKUs, warehouses, current inventory, and inventory movements.

![01-products-inventory-qee4wq.png](https://static-docs.nocobase.com/01-products-inventory-qee4wq.png)

The new requirement is to let warehouse staff complete inventory counting on site, including claiming tasks, scanning items, entering actual quantities, recording inventory discrepancies, and reviewing exceptions.

The division of responsibilities between the old system and the new application can therefore be defined first:


|                 | Application                   | Responsibilities                                                                                         |
| --------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| Existing system | Inventory Management System   | Products, SKUs, warehouses, current inventory, inventory movements                                       |
| New requirement | Mobile inventory counting app | Counting tasks, scanning, actual quantities, inventory discrepancies, discrepancy reasons, review status |

The mobile inventory counting process mainly covers task claiming, scanning, quantity entry, and discrepancy review, while continuing to use product and inventory data from the existing Inventory Management System. During the pilot, the company can start with one warehouse, one group of operators, or one inventory-counting cycle, while continuing to call the foundational data from the existing system. After launch, the team can evaluate the pilot using metrics such as counting efficiency, manual workload, and discrepancy-handling time.

## 02 | Use AI and NocoBase to Turn the New Requirement into an Internal Application

Once the business scope is clear, the team can organize the existing system, business rules, and new requirements, then use AI to complete the initial application build.

For example:

> We already have an Inventory Management System for products, SKUs, warehouses, and current inventory. We now need a mobile inventory counting app that allows warehouse staff to view counting tasks, scan items, enter actual quantities, record inventory discrepancies, and review exception data.

The Coding Agent can use these requirements to organize the application structure and configure the data model, pages, role permissions, and workflows in NocoBase. Business users are responsible for confirming the specific rules, such as who can claim tasks, how inventory discrepancies should be handled, and who is responsible for review.

The core mobile inventory counting process can be represented as:

**Counting task → Product / SKU → System inventory → Actual quantity → Inventory discrepancy → Discrepancy reason → Processing status**

![02-stock-count-flow-innnqy.png](https://static-docs.nocobase.com/02-stock-count-flow-innnqy.png)

After warehouse staff claim a task, they scan an item to locate the corresponding product and enter the actual quantity. If there is an inventory discrepancy, the record enters a pending-review state, and the responsible person confirms the reason and result. Operators and reviewers have their own pages and permissions, while reminders, pending tasks, and other follow-up actions can be handled through NocoBase workflows.

After the application is generated, fields, pages, layouts, and later functional changes can continue to be modified in NocoBase through the Coding Agent.

![02-stock-count-app-czqalz.png](https://static-docs.nocobase.com/02-stock-count-app-czqalz.png)

## 03 | Continue Using Data from the Existing System

Products, SKUs, warehouses, current inventory, and inventory movements continue to be maintained by the original Inventory Management System. NocoBase can read this data through an external database or API and use it directly inside the mobile inventory counting app.

📃 [Data Sources - NocoBase](https://www.nocobase.com/en/highlights/data-source)

![03-nocobase-data-sources-ze3rwy.png](https://static-docs.nocobase.com/03-nocobase-data-sources-ze3rwy.png)

For example, when warehouse staff count a “brake pad set,” they can see the **current inventory, safety stock, and recent inventory movements** from the original system while entering the **actual quantity, inventory discrepancy, discrepancy reason, and processing result** in the mobile inventory counting app.


| Data source                   | Information used during counting                                              |
| ----------------------------- | ----------------------------------------------------------------------------- |
| Inventory Management System   | Current inventory, safety stock, recent inventory movements                   |
| Mobile inventory counting app | Actual quantity, inventory discrepancy, discrepancy reason, processing status |

To avoid inventory changes during counting from affecting the result, the application can record the system inventory and corresponding timestamp at the start of the task as the baseline for that count. Daily inventory continues to be maintained by the existing Inventory Management System.

![03-stock-count-mobile-context-d55czr.png](https://static-docs.nocobase.com/03-stock-count-mobile-context-d55czr.png)

If an inventory discrepancy is ultimately confirmed, the team can first complete the reason recording and review in the mobile inventory counting app, then handle the inventory adjustment according to the existing process. Whether the new application writes directly back to the original system depends on the APIs and permissions exposed by that system.

In this way, the new application only adds inventory-counting data and processes. Foundational data such as products, SKUs, warehouses, and inventory continues to come from the existing system, reducing duplicate maintenance.

## 04 | After Launch, Let AI Participate Further in Inventory Counting

Once the mobile inventory counting app is in use, counting tasks, actual quantities, discrepancy reasons, and review results will continue to create new business data. Beyond checking individual records, managers also need to understand overall counting progress, long-unprocessed tasks, and which SKUs repeatedly show inventory discrepancies.

During the application-building stage, the Coding Agent mainly helps build and adjust the application. After launch, NocoBase **AI Employees** can use the accumulated data to participate in day-to-day inventory analysis and related work.

📃 [AI Employees - NocoBase Documentation](https://docs.nocobase.com/ai-employees)

For example, an AI Employee can generate an inventory-counting overview that summarizes completion rate, accuracy, and inventory discrepancies, while highlighting tasks and products that need priority attention:

![04-ai-stock-count-summary-mhl82t.png](https://static-docs.nocobase.com/04-ai-stock-count-summary-mhl82t.png)

These results come from actual records in the application, and managers can always return to the corresponding tasks to verify the details.

For SKUs that repeatedly show discrepancies, AI Employees can also combine actual counting results, discrepancy reasons, and recent inventory movements to organize issues that need further investigation.

For example, if a “brake pad set” shows discrepancies across several consecutive counts, the team can prioritize checking recent receipts, issues, and transfers, and confirm whether duplicate counting, timing differences, or data-entry errors are involved. Cases where the cause cannot yet be confirmed can remain pending for further review by the responsible person.

On this basis, AI Employees can also be configured with appropriate **skills and workflows** to create review tasks, send reminders to responsible users, and generate inventory-counting reports. What data an AI Employee can access and which actions it can perform can also be configured according to actual roles and permissions.

💡 Read more: [Automating Company Background Research with Built-in Workflows and AI Employees](https://www.nocobase.com/en/blog/automate-company-background-research-with-workflows-and-ai-employees)

![04-ai-employees-list-ss28yi.png](https://static-docs.nocobase.com/04-ai-employees-list-ss28yi.png)

This allows the company to start by using AI for summaries and analysis, then gradually expand it into more day-to-day operational work once the business rules and usage patterns become stable.

## 05 | Validate the Pilot Results

After the mobile inventory counting app has been used for a period of time, the company can evaluate whether the approach is worth continuing and decide whether to expand the scope, migrate selected modules from the old system, or keep the existing division of responsibilities.

- Has manual recording and repeated data organization decreased?
- Has the time required for each inventory count been reduced?
- Are inventory discrepancies easier to identify and handle?
- Can the existing inventory data be used reliably?
- Can AI Employees already participate in day-to-day business processing?
- Can the new application reliably handle routine inventory-counting work?

If these indicators generally meet expectations, the approach is ready for real business use, and the company can continue in two directions.

### Extend the Same Approach to New Business Requirements

If the company has other relatively independent requirements that also need to use data from existing systems, it can reuse the same approach: define a clear scenario, build a new internal application with AI and NocoBase, then test and use it.

Handling one specific requirement at a time keeps the application scope and validation goals clear and makes it easier to judge whether further investment is worthwhile.

### Evaluate Whether to Migrate Selected Modules from the Existing System

As the new application continues to be used, it will gradually accumulate its own data and business processes. If some functions can already reliably take over work from the existing system, the company can further evaluate whether the corresponding modules still need to remain in the old system.

If the mobile inventory counting app can reliably cover task assignment, counting, discrepancy handling, and review, the company can further assess whether the inventory-counting data and processes in the original Inventory Management System should be moved to NocoBase.

## Conclusion

In the past, when a new business requirement appeared, teams typically had to choose between purchasing SaaS, modifying an existing system, or scheduling custom development. All of these approaches require cost evaluation, resource coordination, and often a waiting period before results can be validated.

If your company already uses CRM, supply chain management, project management SaaS, or similar systems and has a new requirement that the existing tools do not handle well, AI and NocoBase make it possible to start with a smaller, clearly scoped, confirmed requirement and test it in a more lightweight way.

- **Try the NocoBase + AI Demo:** [Request an online demo](https://demo.nocobase.com/new)
- **Build it yourself:** [View the AI Builder documentation](https://docs.nocobase.com/ai-builder)


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

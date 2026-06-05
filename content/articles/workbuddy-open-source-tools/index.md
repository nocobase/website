## What is WorkBuddy?

WorkBuddy is an AI workspace for workplace tasks launched by Tencent. It is mainly designed for enterprise office work, file processing, data analysis, and multi-step task handling.![WorkBuddy-8xxz2q.png](https://static-docs.nocobase.com/WorkBuddy-8xxz2q.png)

Compared with tools like OpenClaw, Claude Code, and Codex, WorkBuddy has a different focus. OpenClaw emphasizes open Agent capabilities and a cross-platform skill ecosystem. Claude Code and Codex are better suited for code generation, development collaboration, and engineering tasks. WorkBuddy is more focused on workplace scenarios. It can connect to common communication and collaboration tools such as WeChat, QQ, WeCom, Feishu, and DingTalk, allowing users to start tasks from familiar work entry points.

If a team wants to connect more deeply with enterprise business systems and internal workflows, WorkBuddy can also serve as the AI task entry point and orchestration layer. WorkBuddy receives instructions, breaks down tasks, and returns results. Open source tools provide the underlying business systems, automation workflows, CRM, project management, data APIs, and BI analytics capabilities.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. →[ Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---



This article introduces several open source tools that work well with WorkBuddy. We will look at what capabilities they can provide for enterprises and what typical scenarios they can cover when combined with WorkBuddy.

## 1. NocoBase: suitable for building custom business systems that WorkBuddy can call

![NocoBase1-vpe2x5.png](https://static-docs.nocobase.com/NocoBase1-vpe2x5.png)

**Official website**: [https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**: 22.3k

**Documentation**: [https://docs.nocobase.com/](https://docs.nocobase.com/)

**Related resources**:

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

WorkBuddy + NocoBase: [https://docs.nocobase.com/en/ai/workbuddy](https://docs.nocobase.com/en/ai/workbuddy)

### Product introduction

NocoBase is an AI-powered open source no-code / low-code development platform for quickly building enterprise applications, internal tools, and various business systems. It supports private deployment and is built on a plugin-based architecture, making it suitable for enterprises to build CRM, ERP, approval systems, ticketing systems, inventory systems, project management systems, operations backends, and other systems based on their own business needs.

![NocoBase2-t4x1fo.png](https://static-docs.nocobase.com/NocoBase2-t4x1fo.png)

For teams that want to connect WorkBuddy to internal tools, NocoBase is better suited as the business application layer. It provides stable data structures, permission boundaries, process rules, and callable system capabilities.

NocoBase also designs its AI capabilities around real business systems. It supports AI Employees, AI Skills, CLI, MCP, and more. AI Employees can act as intelligent assistants inside the system and help with data queries, content generation, task handling, and other work. AI Skills help external Agents understand how NocoBase is configured and what they can and cannot operate on. The CLI lets Agents execute installation, creation, modification, and other operations through commands. MCP provides a more standard entry point for external AI tools to connect to NocoBase.

![NocoBase3-ejtyuu.png](https://static-docs.nocobase.com/NocoBase3-ejtyuu.png)

### Core advantages

* **Data model driven**: NocoBase supports defining data tables, fields, and relationships first, then building pages and interactions. This makes it more suitable for complex business systems than simple form collection.
* **Suitable for private deployment**: Enterprises can deploy the system on their own servers, making it better suited for internal systems with requirements for data security, permission control, and long-term maintenance.
* **Complete permission and workflow capabilities**: It supports role permissions, field permissions, data permissions, and operation permissions. Workflows can also handle approvals, notifications, data updates, Webhooks, HTTP requests, and other processes.
* **Flexible plugin architecture**: NocoBase uses a plugin-based microkernel architecture. Features can be extended through plugins, making it suitable for enterprises that need to customize business logic beyond standard capabilities.
* **AI capabilities closer to business systems**: NocoBase supports AI Employees, AI Skills, knowledge bases, and other capabilities. These can work around pages, data tables, selected records, and business rules.

### Typical use cases with WorkBuddy

In many scenarios, WorkBuddy receives instructions, breaks down tasks, and returns results, while NocoBase provides specific business objects and system capabilities, such as customers, orders, approvals, tickets, inventory, and projects.

![NocoBase4-ono1dm.png](https://static-docs.nocobase.com/NocoBase4-ono1dm.png)

Here are 3 common scenarios:

**CRM** Enterprises can use NocoBase to build a customer management system and centrally maintain customer profiles, follow-up status, customer tiers, owners, contract amounts, and other information. Sales managers can send instructions directly from WeCom or Feishu and ask WorkBuddy to query recently added customers, leads that have not been followed up for a long time, and key customers. NocoBase provides customer data, permissions, and filtering logic. AI Employees or related Skills can further help organize follow-up priorities, generate customer summaries, or create sales to-do lists.

**Ticket management** In after-sales or operations teams, NocoBase can record ticket status, issue type, priority, handler, and deadline. During daily checks or weekly reviews, teams can ask WorkBuddy to summarize overdue tickets, high-priority issues, and pending items, then classify them by owner, urgency, or issue type, making it easier to confirm the handling order.

**Project management** For managers, approvals and project progress are often scattered across multiple nodes. NocoBase can manage approval workflows, project milestones, owners, risks, and progress status. WorkBuddy can extract pending approvals, delayed tasks, and project risks based on instructions, then generate summaries by department, owner, or priority.

## 2. Activepieces: suitable for connecting WorkBuddy to more automation workflows

![Activepieces1-xrlqbe.png](https://static-docs.nocobase.com/Activepieces1-xrlqbe.png)

**Official website**: [https://www.activepieces.com/](https://www.activepieces.com/)

**GitHub**: [https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

**GitHub Stars**: about 23k

**Documentation**: [https://www.activepieces.com/docs](https://www.activepieces.com/docs)

### Product introduction

Activepieces is an open source AI automation platform for building automation workflows across tools and systems. It can connect APIs, Webhooks, databases, spreadsheets, email, CRM, project management tools, and other third-party services, turning operations scattered across different tools into reusable workflows.

Activepieces works well with WorkBuddy in scenarios where instructions start from an office entry point and actions happen across multiple systems. WorkBuddy can receive requests from WeCom, Feishu, DingTalk, and other work entry points. Activepieces then executes the underlying workflow, such as reading data, calling APIs, syncing records, sending notifications, or triggering follow-up tasks.

### Core advantages

* **Strong cross-tool connectivity**: Suitable for connecting APIs, Webhooks, databases, and third-party applications, reducing repetitive manual work.
* **Suitable for turning automation into reusable workflows**: Processes such as lead syncing, notification pushing, spreadsheet updates, task assignment, and data organization can be turned into fixed workflows.
* **Supports self-hosting**: Enterprises can deploy it in their own environment, making it easier to manage keys, data, and execution logs.
* **Close to how AI Agents call tools**: Activepieces pieces can be used as MCP servers, making it easier to combine with Agent tools.

![Activepieces2-6x447z.png](https://static-docs.nocobase.com/Activepieces2-6x447z.png)

### Typical use cases with WorkBuddy

Activepieces is suitable for cross-system automation. For example, website forms, customer support feedback, GitHub Issues, and sales leads may be scattered across different tools. Teams can first use Activepieces to configure workflows for data reading, deduplication, classification, and syncing. Then, with a simple WorkBuddy instruction such as “organize today’s new leads and group them by source and priority,” the result can be returned to a group chat, document, or spreadsheet.

## 3. Twenty: suitable for building a self-hosted CRM data layer

![Twenty-tqe8g2.png](https://static-docs.nocobase.com/Twenty-tqe8g2.png)

**Official website**: [https://twenty.com/](https://twenty.com/)

**GitHub**: [https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

**GitHub Stars**: 49k

**Documentation**: [https://twenty.com/developers](https://twenty.com/developers)

### Product introduction

Twenty is an open source CRM, officially positioned as an open source alternative to Salesforce. It is suitable for managing companies, contacts, customer relationships, opportunities, tasks, notes, and sales processes. Technical teams can also customize it based on their own business processes.

If an enterprise wants to keep customer data under control and avoid relying completely on a closed CRM, Twenty can serve as the customer data layer behind WorkBuddy. Customer records, opportunities, and sales follow-up records are stored in Twenty, while WorkBuddy receives query, organization, and reminder requests from workplace entry points.

### Core advantages

* **Focused on CRM scenarios**: Better suited for customer management, opportunity follow-up, sales tasks, and customer data organization.
* **Open source and self-hostable**: Enterprises can better control customer data, system environments, and future customization.
* **Suitable for technical teams to customize**: Objects, fields, and business structures can be adjusted around the enterprise’s own sales process.
* **More focused business objects**: Compared with general-purpose internal tools, Twenty’s data structure is closer to the daily work of sales teams.

### Typical use cases with WorkBuddy

Sales teams can maintain customer profiles, company information, opportunity stages, follow-up records, and next actions in Twenty. When sales managers need to view key customers, they do not necessarily need to enter the CRM backend and filter records one by one. They can initiate queries through WorkBuddy, such as “find high-value customers who have not been followed up for 7 days,” “organize new opportunities this week,” or “list high-value deals with no next action.”

Twenty stores and manages sales data. WorkBuddy organizes query results into follow-up lists, reminder summaries, or weekly reports. This helps teams quickly identify customers and opportunities that need priority handling, and reduces the risk that sales data stays buried in the CRM backend without timely review.

## 4. Plane: suitable for letting WorkBuddy read project status and task progress

![Plane1-a68yj9.png](https://static-docs.nocobase.com/Plane1-a68yj9.png)

**Official website**: [https://plane.so/](https://plane.so/)

**GitHub**: [https://github.com/makeplane/plane](https://github.com/makeplane/plane)

**GitHub Stars**: 49.8k

**Documentation**: [https://docs.plane.so/](https://docs.plane.so/)

### Product introduction

Plane is an open source project management tool for tracking Issues, managing Cycles, maintaining Roadmaps, and storing project documents and team tasks. It is better suited for product, engineering, and project management teams to manage release plans, task status, project risks, and collaboration rhythm.

Plane also officially emphasizes collaboration between teams and agents. In the WorkBuddy scenario, Plane can serve as the project collaboration layer: projects, tasks, owners, status, priority, and release plans are stored in Plane, while WorkBuddy brings these statuses into the team’s daily work entry points.

![Plane2-ojwlpm.png](https://static-docs.nocobase.com/Plane2-ojwlpm.png)

### Core advantages

* **Suitable for product and engineering collaboration**: It can manage Issues, Cycles, Roadmaps, documents, and team tasks.
* **Clearer task status**: Suitable for tracking priority, owner, release plans, and delay risks.
* **Supports self-hosting**: More suitable for teams that need control over project data and engineering information.
* **Suitable for use with Agents**: Plane already emphasizes the collaboration space for teams and agents, making it suitable for combinations around task progress, project status, and knowledge accumulation.

### Typical use cases with WorkBuddy

Product managers can ask WorkBuddy in Feishu, “Which P0 issues in this release are still open?” Project owners can ask, “Which tasks are delayed this week, and who are they blocked on?” Engineering leads can also ask WorkBuddy to organize high-priority Issues by module.

In this scenario, Plane records projects, Issues, Roadmaps, and owner information. WorkBuddy initiates queries from the workplace entry point and organizes the results into summaries or reminders. For teams with many tasks, fast release cycles, and frequent status synchronization needs, this combination can reduce the cost of repeatedly opening the project backend to check status.

## 5. Directus: suitable for turning existing databases into callable data interfaces

![Directus1-x5gl6h.png](https://static-docs.nocobase.com/Directus1-x5gl6h.png)

**Official website**: [https://directus.io/](https://directus.io/)

**GitHub**: [https://github.com/directus/directus](https://github.com/directus/directus)

**GitHub Stars**: 34.2k

**Documentation**: [https://directus.io/docs](https://directus.io/docs)

### Product introduction

Directus is an open source data platform that can generate a management interface, REST API, and GraphQL API on top of SQL databases. It is suitable for teams that already have databases but lack a user-friendly backend, standard interfaces, or a unified data access layer.

Many enterprises do not lack data. The problem is that data is scattered across legacy systems, database tables, or multiple internal applications. Letting an Agent access a database directly is relatively risky, and asking business users to write SQL is unrealistic. Directus can add an API and permission management layer between the database and WorkBuddy, making existing data easier to query, organize, and call.

### Core advantages

* **Connects to existing SQL databases**: Suitable for wrapping existing databases into easier-to-use data services.
* **Automatically generates APIs**: Data can be accessed through REST, GraphQL, or SDKs.
* **Provides a data management interface**: It is not only an API layer, but can also be used as a data backend.
* **Suitable for progressive modernization**: Enterprises do not need to rebuild the whole system. They can first expose key data tables through Directus.

![Directus2-9ia8ca.png](https://static-docs.nocobase.com/Directus2-9ia8ca.png)

### Typical use cases with WorkBuddy

For example, an enterprise may already have customer databases, order databases, inventory tables, or content asset libraries, but the data is scattered across legacy systems, making it difficult for business users to query quickly. The enterprise can first use Directus to connect key data tables, configure permissions and APIs, and then let WorkBuddy query the data through interfaces.

Employees can initiate requests from workplace entry points, such as “check today’s new orders,” “find products whose inventory is below the safety stock level,” or “summarize the last 3 transactions of a customer.” Directus provides APIs and permission boundaries. WorkBuddy turns natural language requests into query tasks and organizes the results into easier-to-read summaries.

## 6. Metabase: suitable for letting WorkBuddy read reports and business metrics

![Metabase-uupms9.png](https://static-docs.nocobase.com/Metabase-uupms9.png)

**Official website**: [https://www.metabase.com/](https://www.metabase.com/)

**GitHub**: [https://github.com/metabase/metabase](https://github.com/metabase/metabase)

**GitHub Stars**: 47k

**Documentation**: [https://www.metabase.com/docs](https://www.metabase.com/docs)

### Product introduction

Metabase is an open source BI tool for building data dashboards, business reports, and self-service analytics. It can connect to databases, allowing teams to build metric systems and dashboards around sales, operations, product, finance, customer support, and other data.

If Directus is better suited for turning databases into APIs, Metabase is better suited for turning data into business questions and metric dashboards. When used with WorkBuddy, Metabase can serve as the data analytics layer, allowing managers to get key metrics and business summaries through workplace entry points.

### Core advantages

* **Suitable for business data analysis**: It can connect to databases and build dashboards, charts, and reports.
* **Lowers the barrier to data queries**: Business users can view metrics through visual interfaces and do not necessarily need to write SQL.
* **Suitable for management and operations teams**: Common scenarios include sales dashboards, channel analysis, user growth, ticket trends, and inventory analysis.
* **Provides API capabilities**: Metabase provides APIs that can be used to automate some backend tasks and data query scenarios.

### Typical use cases with WorkBuddy

Managers do not necessarily open BI systems every day to browse multiple dashboards, but they usually need to quickly understand key changes. For example, “How did this week’s sales revenue change compared with last week?” “Which channels did today’s new registered users come from?” “Which product line had the fastest increase in ticket volume?” “Which pages had the most obvious drop in conversion rate?” This makes the combination of Metabase and WorkBuddy well suited for business data summaries.

Metabase connects databases and stores metrics and dashboards. WorkBuddy brings these metrics into WeCom, Feishu, or DingTalk. Users can ask questions directly from workplace entry points, and WorkBuddy can call the relevant reports or data interfaces, then return structured summaries.

## FAQ

### 1. Can WorkBuddy directly connect to traditional SaaS, ERP, or CRM?

Yes, but it depends on whether the system itself provides APIs, Webhooks, plugins, MCP, or other callable capabilities.

Many traditional SaaS, ERP, and CRM systems have relatively fixed data structures and process rules. The systems can be used, but their field relationships, interface capabilities, permission boundaries, and audit records may not be suitable for direct Agent access.

For simple queries, notifications, or data synchronization, traditional systems can also be connected through APIs or integration platforms. But if an enterprise wants to flexibly configure data, permissions, and workflows around objects such as customers, orders, approvals, tickets, inventory, and projects, open source tools or self-hostable platforms are usually better suited as the layer that hosts these capabilities.

### 2. Why choose open source tools to use with WorkBuddy?

Open source tools are usually better suited for teams that need self-hosting, data control, open interfaces, and long-term extensibility.

Enterprises can better understand where data is stored, how system permissions are configured, how interfaces are called, and how operation logs are kept. They can also carry out secondary development or system integration based on their own needs. For scenarios involving customer information, project data, order records, business metrics, and internal workflows, this level of control is especially important.

WorkBuddy handles the workplace entry point and task orchestration. Open source tools host capabilities such as business systems, automation workflows, CRM, project management, data APIs, and BI analytics. Together, they connect everyday workplace entry points with specific business systems.

### 3. If we want to build system-level internal tools, which one should we look at first?

**NocoBase**.

If an enterprise wants to build CRM, ERP, ticketing systems, approval systems, inventory management, project management, or operations backends, NocoBase is better suited as a system-level internal tool platform. It uses a data model driven architecture, making it suitable for defining business objects such as customers, orders, tickets, approvals, inventory, and projects first, and then configuring pages, permissions, workflows, and plugins.

At the same time, NocoBase has already published WorkBuddy integration documentation, making it directly relevant to this topic. For teams that need to manage complex business data, permission boundaries, and workflow rules, NocoBase offers broader coverage than a single CRM, a single automation tool, or a single BI tool.

### 4. If the main goal is dashboard monitoring and business data analysis, which one should we choose?

**Metabase**.

Metabase is better suited for connecting databases, building dashboards, maintaining business metrics, and generating data reports. Scenarios such as sales dashboards, channel analysis, user growth, ticket trends, inventory changes, and conversion rate changes are all suitable for Metabase.

When paired with WorkBuddy, managers can query key metrics from workplace entry points, such as “How did this week’s sales revenue change compared with last week?” “Which channels did today’s new users mainly come from?” and “Which product line had the fastest increase in ticket volume?” Metabase stores the metrics and dashboards, while WorkBuddy initiates queries and returns structured summaries.

### 5. What should an enterprise do if it already has databases but lacks a unified query entry point?

Many enterprises already have customer databases, order databases, inventory tables, or content asset libraries, but the data is scattered across legacy systems or internal databases. When business users want to query data, they often need to enter multiple backends or ask technical colleagues to export data temporarily.

Directus can generate a management interface, REST API, and GraphQL API on top of SQL databases, which is equivalent to adding a clearer data access entry point for existing databases. When paired with WorkBuddy, employees can query information such as “today’s new orders,” “products whose inventory is below the safety stock level,” and “the last 3 transactions of a customer” from workplace entry points.

### 6. Does using WorkBuddy with open source tools require technical teams?

It depends on how deeply it is used.

For simple queries, reminders, information organization, or report summaries, business teams can start with the capabilities of existing tools. But if WorkBuddy needs reliable integration with internal systems, such as calling APIs, configuring permissions, designing workflows, managing keys, and keeping operation logs, IT or development teams need to be involved.

A safer approach is to start with low-risk, high-frequency scenarios, such as customer follow-up lists, project progress summaries, overdue ticket reminders, business data dashboards, and inventory exception queries. After the workflow becomes stable, it can gradually expand to more complex system operations and cross-tool automation.

### 7. When is WorkBuddy a good choice?

WorkBuddy is a good fit if a team mainly collaborates through WeChat, QQ, WeCom, Feishu, DingTalk, and similar entry points, and wants to use AI Agents to handle daily office tasks such as file organization, spreadsheet analysis, PPT generation, meeting summaries, and task assignment.

If the enterprise also wants to further connect internal tools, CRM, project management, data dashboards, automation workflows, and other systems, it can use WorkBuddy as the task entry point, and pair it with open source tools such as NocoBase, Activepieces, and Twenty to add specific business systems and data capabilities.

If this article is helpful, feel free to share it with friends who are following AI Agents.


**Related reading**

* [Top 6 Open Source AI Tools by GitHub Stars for Stronger AI Agents](https://www.nocobase.com/en/blog/6-github-top-open-source-ai-tools-for-ai-agents)
* [5 Open-Source Internal Tools to Use with Hermes Agent](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw and 5 Open-Source Tools for Monitoring Business Workflows](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [What Open-Source Tools Work Well with OpenCode? 5 Projects to Try](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Building Internal Tools with Codex: 6 Open-Source Projects for Developers](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [After Claude Code: 6 Open-Source Tools You Should Know](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Open-Source AI And No-Code Tools for Enterprise Software Development](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Open-Source AI Agent Platforms for Building Internal Tools](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [The Best Enterprise-Grade Self-Hosted CRMs with RBAC, AI, and Open API Support](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Best Open-Source Tools to Replace Custom Integration Middleware](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Replace Excel with NocoBase or Airtable? A Cost-by-Cost Comparison](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Ways to Quickly Build Web Apps from Excel Data](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)

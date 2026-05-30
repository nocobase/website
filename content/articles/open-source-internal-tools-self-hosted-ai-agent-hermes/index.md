AI Agents are no longer only popular in development scenarios.

Besides tools like Claude Code and OpenClaw, Hermes Agent has also started getting more attention recently.

![reddit.png](https://static-docs.nocobase.com/reddit-px26au.png)

[On Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/), one user mentioned that after trying several Agent tools, including OpenClaw, Nanobot, and Nanoclaw, they still preferred Hermes Agent in the end. It keeps the capabilities they actually need without unnecessary overhead. For scenarios such as local models, self-hosted servers, SSH access, and Telegram-based operations, it also fits a lighter and more controllable setup.

> 💡Read more:
>
> [How can OpenClaw be used in real business? 5 recommended open source tools](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
>
> [After using Claude Code, you need these 6 open source tools](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

For teams that are already planning to build self-hosted business systems or internal tools, Hermes Agent is a strong fit if the AI Agent needs to be used inside real business systems to handle data queries, system configuration, workflow maintenance, and task execution.

The internal tool platform provides the foundation for the business system, while Hermes works as a self-hosted Agent that helps teams query, configure, and maintain systems with natural language, and capture repeatable operations as reusable Skills.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. →[ Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

This article focuses on internal tool platforms such as NocoBase, Appsmith, Budibase, Directus, and Baserow, and explains how they can be used with Hermes Agent in different scenarios.

First, here is a table of the tools covered in this article, the common business systems they are suited for, and the capabilities Hermes Agent can add.


| Tool     | Recommended business systems / internal tools                                                                                                             | What Hermes Agent can add                                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NocoBase | CRM, ERP, approval systems, ticketing systems, project management, supplier management, asset management, operations backends, and other business systems | Use natural language to plan data models, configure pages and permissions, maintain workflows, and capture high-frequency business modules as reusable Skills |
| Appsmith | Admin panels, data dashboards, customer service backends, review panels, operations tools, database management interfaces                                 | Clarify page structures, organize query and filter logic, explain relationships between components and data sources, and reuse common admin page templates    |
| Budibase | Form systems, approval workflows, employee requests, IT service desks, operations workflow apps, internal workflow tools                                  | Clarify form fields, approval nodes, and status transitions, generate workflow templates, and capture request handling Skills                                 |
| Directus | Database backends, API management, content management systems, structured data management platforms, data operations backends                             | Explain data structures, organize field relationships, support natural language queries, and capture data management and content maintenance workflows        |
| Baserow  | Table-based databases, lightweight CRM, supplier lists, content plans, project progress tables, inventory lists                                           | Plan table structures and views, organize filter rules, generate category and status fields, and reuse lightweight app templates                              |

## 1. NocoBase

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-orh9iv.png)

Official website: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star: 22.6k

### Introduction

NocoBase is an open source AI no-code / low-code platform for building enterprise internal business systems and admin backends.

At its core, NocoBase helps teams build long-running business systems through data models, page configuration, permission management, workflows, and plugin extensions. These systems usually change over time: fields need to be adjusted, pages need to be optimized, permissions need to be redefined, and approval and notification workflows need to be updated as the business changes.

NocoBase is well suited for these long-term systems, while Hermes Agent can further participate in system building, configuration, and maintenance.

In terms of AI capabilities, NocoBase already provides AI Employees, AI Skills, CLI, MCP, and related support. AI Employees can act as intelligent assistants inside the system and help with data queries, content generation, task handling, and more. AI Skills help external Agents understand how NocoBase is configured and what they can and cannot operate on. The CLI lets Agents execute installation, creation, modification, and other operations through commands. MCP provides a more standard entry point for external AI tools to connect to NocoBase.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-civede.png)

### What can it do with Hermes?

After Hermes is connected to NocoBase, it can understand the NocoBase configuration system through NocoBase Skills and execute creation, modification, deployment, and other operations through the NocoBase CLI.

**1. Create business modules with natural language**

For example, when creating a customer renewal management module, you can first let Hermes organize the data structures for customers, contracts, renewal records, follow-up tasks, and more. Then it can plan the list pages, detail pages, dashboards, and basic permissions.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-auh66t.png)

**2. Help maintain permissions and workflows**

For example, if the rule is “sales can only view the customers they own, supervisors can view their team’s customers, and finance can view contract amounts,” Hermes can turn this business description into more specific permission and workflow configuration logic.

**3. Capture high-frequency operations as Skills**

After completing a CRM, approval workflow, or supplier management module for the first time, Hermes can capture practices such as field naming, page structure, and permission rules. These can then be reused when building similar modules later.

### Task instruction example

```text
Help me create a customer renewal management module in NocoBase.

It needs to include customer information, contract expiration date, renewal status, owner, follow-up records, and an approval workflow.

For permissions:
Sales can only view customers they own.
Sales supervisors can view team customers.
Finance can view contract amounts and payment status.
Administrators can view and edit all content.

For workflows:
Automatically generate a renewal reminder 30 days before the contract expires.
When the renewal amount exceeds 100,000 yuan, supervisor and finance approval is required.
After approval, update the renewal status and generate the next follow-up task.

After completion, please organize this module building process into a reusable Skill, so it can be used later to create supplier management, contract management, or project management modules.
```

![NocoBase4-yks1wd.png](https://static-docs.nocobase.com/NocoBase4-yks1wd.png)

### Related resources

Documentation: [https://docs.nocobase.com/](https://docs.nocobase.com/)

AI documentation: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

Hermes Agent: [https://docs.nocobase.com/en/ai/hermes-agent](https://docs.nocobase.com/en/ai/hermes-agent)

## 2. Appsmith

![Appsmith1.png](https://static-docs.nocobase.com/Appsmith1-ixuhwg.png)

Official website: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Star: 39.9k

### Introduction

Appsmith is an open source low-code platform mainly used to build internal apps such as admin panels, data dashboards, customer support backends, review tools, and IT tools. It can connect to databases, APIs, and third-party services, and quickly build interfaces for internal teams through drag-and-drop components, query configuration, and JavaScript extensions.

Appsmith provides Appsmith AI, which can add AI queries, text generation, classification, summarization, and other capabilities to applications. It can also build AI interactions around internal data. Appsmith is also developing Appsmith Agents to bring AI capabilities into the tools and systems teams use every day.

![Appsmith2.png](https://static-docs.nocobase.com/Appsmith2-64xce0.png)

### What can it do with Hermes?

Appsmith builds specific pages and data operation interfaces, while Hermes helps teams turn natural language requirements into clearer page structures, query logic, and operation rules.

1. Plan internal admin interfaces

For example, when building an order exception handling panel, you can first ask Hermes to clarify which fields should be displayed, which filters are needed, which action buttons are required, and how the page should be divided into sections. Appsmith can then handle the specific interface building and data connection.

2. Organize query and filter logic

A common issue with internal tools is not whether a page exists, but whether the data logic behind the page is clear. Hermes can help teams turn descriptions such as “which orders do I want to see,” “how should exceptions be identified,” and “which records should be prioritized” into query conditions and operation rules.

3. Capture admin page templates

Customer support backends, review panels, operations dashboards, and finance query pages often appear repeatedly. Hermes can capture common fields, component layouts, filters, and operation logic as Skills, so similar pages can be reused later.

### Task instruction example

```text
Help me plan an order exception handling panel, which will later be built in Appsmith.

The page needs to display abnormal orders, customer names, order amounts, owners, exception reasons, processing status, and the most recent communication record.

Filters include:
Region.
Order amount.
Processing status.
Owner.
Exception type.

For operations:
Operations staff can update the processing status.
Supervisors can assign owners in batches.
Finance can only view order amounts and payment status.

Please organize the page structure, data query logic, and component layout, and capture them as a reusable internal tool page template.
```

### Related resources

Documentation: [https://docs.appsmith.com/](https://docs.appsmith.com/)

Appsmith AI: [https://docs.appsmith.com/connect-data/reference/appsmith-ai](https://docs.appsmith.com/connect-data/reference/appsmith-ai)

## 3. Budibase

![Budibase1.png](https://static-docs.nocobase.com/Budibase1-py408w.png)

Official website: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

GitHub Star: 28k

### Introduction

Budibase is an open source operations platform mainly used to build internal apps, automation workflows, and AI Agents. It is more focused on process-based business scenarios, such as employee requests, approval handling, IT service desks, form routing, data updates, and operations automation.

Budibase supports generating code, generating database tables, and creating automation workflows powered by large language models. Budibase Agents are also being developed, allowing teams to define Agent behavior through natural language and connect it to internal data and APIs.

### What can it do with Hermes?

Budibase is better suited for forms, approvals, and workflow-based applications. Hermes can help teams clarify rules in the early stage of workflow design and capture high-frequency request handling methods later.

1. Clarify forms and approval workflows

For processes such as equipment requests, expense reimbursement, customer support, and contract approval, Hermes can first help teams break down fields, approval nodes, trigger conditions, and notification rules. Budibase can then handle the actual application building.

2. Generate workflow handling templates

Many internal requests follow fixed handling patterns. Hermes can organize workflows such as “employee submits a request, supervisor approves it, the relevant department handles it, status is updated, and the applicant is notified” into templates for quick reuse later.

3. Capture operations rules

Workflow-based applications often need to change as organizational rules change. Hermes can record approval sequences, exception handling methods, role responsibilities, and notification rules, turning them into reusable Skills.

![Budibase2.png](https://static-docs.nocobase.com/Budibase2-b8427g.png)

### Task instruction example

```text
Help me design an employee equipment request process, which will later be built in Budibase.

The process includes:
The employee submits an equipment request.
The supervisor approves it.
IT confirms inventory.
After approval, the equipment status is updated.
The system notifies the applicant to collect the equipment.

The form fields include:
Applicant.
Department.
Equipment type.
Purpose description.
Expected collection time.
Approval status.
Handler.

Please organize the form fields, approval nodes, status transitions, and notification rules, and capture this equipment request process as a reusable Skill.
```

### Related resources

Documentation: [https://docs.budibase.com/](https://docs.budibase.com/)

Budibase AI: [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

## 4. Directus

![Directus1.png](https://static-docs.nocobase.com/Directus1-tqzvl0.png)

Official website: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Star: 35.9k

### Introduction

Directus is a real-time API and app backend for managing SQL database content. It can generate REST / GraphQL APIs and an admin interface on top of existing databases. It supports PostgreSQL, MySQL, SQLite, OracleDB, MariaDB, MS SQL, and other databases, as well as local deployment, private deployment, and cloud services.

In terms of AI capabilities, Directus provides Directus MCP, which allows AI tools such as Claude and ChatGPT to read, create, and manage Directus data. Directus MCP follows the existing permission system, so AI access and modification actions need to go through the same authentication and authorization layer.

![Directus2.png](https://static-docs.nocobase.com/Directus2-92qier.png)

### What can it do with Hermes?

Directus is more focused on data backends and API management. When Hermes is used with Directus, the focus is not generating pages, but helping teams understand data structures, query business data, and capture common data management actions.

1. Explain data structures

For existing databases, business users often do not understand how fields relate to each other. Hermes can help organize collections, fields, relationships, and permission boundaries, making the data structure easier to understand.

2. Assist with data queries and organization

For example, when querying suppliers, contracts, payments, content status, customer records, and similar information, Hermes can turn natural language requirements into more specific data query logic.

3. Capture data management actions

Actions such as content review, supplier profile maintenance, customer data organization, and contract status checks often repeat. Hermes can organize these data operation processes into Skills, so they can be executed by the same rules later.

### Task instruction example

```text
Help me organize the supplier data structure in Directus.

It needs to distinguish:
Supplier basic information.
Contacts.
Contract records.
Payment status.
Cooperation status.
Most recent communication record.

Please explain how these collections should be related and organize a supplier status checking process.

Later, I hope to use natural language to query:
Which supplier contracts are about to expire.
Which suppliers have abnormal payment status.
Which suppliers have not updated communication records for more than 30 days.

Please capture this data organization and query method as a reusable Skill.
```

### Related resources

Documentation: [https://directus.io/docs](https://directus.io/docs)

Directus MCP: [https://directus.io/mcp](https://directus.io/mcp)

MCP documentation: [https://directus.io/docs/guides/ai/mcp](https://directus.io/docs/guides/ai/mcp)

## 5. Baserow

![Baserow1.png](https://static-docs.nocobase.com/Baserow1-23hy4e.png)

Official website: [https://baserow.io/](https://baserow.io/)

GitHub: [https://github.com/baserow/baserow](https://github.com/baserow/baserow)

GitHub Star: 4.9k

### Introduction

Baserow is an open source no-code platform that can be used to build databases, applications, automations, and AI Agents. It is often seen as an open source alternative to Airtable. It supports both cloud and self-hosted deployment, and is suitable for managing structured data and lightweight business applications.

Baserow 2.0 introduced Kuma AI assistant, which can create databases, write formulas, and build automations with natural language. It also provides AI fields, an automation builder, workspace search, and other capabilities.

![Baserow2.png](https://static-docs.nocobase.com/Baserow2-1684s9.png)

### What can it do with Hermes?

Baserow is better suited for building lightweight apps starting from table-based data. When used with Baserow, Hermes can help teams move from “organizing tables” to “capturing data management habits.”

1. Create table structures and views

For customer lists, supplier lists, content plans, project progress, inventory records, and similar use cases, Hermes can first plan table structures, fields, and views based on business descriptions. Baserow then handles data management.

2. Organize filters and classification rules

Lightweight apps often rely on different views. Hermes can turn business rules such as “pending review,” “in cooperation,” “about to expire,” and “high priority” into filter conditions and view settings.

3. Capture lightweight app templates

If a team often uses Baserow to manage similar business data, Hermes can capture field structures, view rules, and status categories as Skills, then reuse them when creating new tables later.

### Task instruction example

```text
Help me plan a supplier management table, which will later be created in Baserow.

The fields include:
Supplier name.
Contact person.
Contact information.
Cooperation status.
Contract expiration date.
Payment status.
Owner.
Most recent communication time.
Notes.

Three views need to be created:
Suppliers pending review.
Suppliers in cooperation.
Suppliers with contracts about to expire.

Please design filter conditions for each view and capture this supplier table structure and view rules as a reusable Skill, so it will be easier to create customer tables, channel tables, or partner tables later.
```

### Related resources

Documentation: [https://baserow.io/user-docs](https://baserow.io/user-docs)

Baserow AI: [https://baserow.io/product/baserow-ai](https://baserow.io/product/baserow-ai)

## FAQ

### 1. If these platforms already have AI capabilities, why is Hermes still needed?

Built-in AI in these platforms is usually better at completing specific in-product tasks, such as generating pages, SQL, form logic, or component configurations.

The value of Hermes lies in self-hosting, long-term memory, and Skill accumulation. It is better suited for remembering business rules, permission habits, and system configuration methods across tasks and conversations.

### 2. Which internal tool platforms work best with Hermes?

Platforms that are better suited for Hermes are long-running business system platforms that require continuous maintenance, such as NocoBase, Budibase, Appsmith, Directus, and Baserow.

Among them, NocoBase is better suited for maintaining complete business systems. Appsmith is better suited for internal interfaces and data panels. Budibase is better suited for forms and workflows. Directus and Baserow are better suited for data management scenarios.

### 3. What kind of teams is Hermes Agent suitable for?

Hermes is better suited for teams that already use self-hosted tools, value data security, need to maintain business systems over the long term, and want AI to remember configuration habits and capture operational experience.

### 4. Why are self-hosted AI Agents important for enterprise internal tools?

Because internal tools usually contain sensitive business data, such as customers, orders, contracts, approvals, employees, and finance.

When an AI Agent needs to access this data and participate in system operations, teams will pay more attention to where data is stored, how permissions are controlled, how operations are reviewed, and how long-term memory is managed. Self-hosted Agents are better suited for teams that require stronger control.

There are many AI Agent products, but if your team is already using open source internal tool platforms and wants to bring AI Agents into enterprise internal systems in a safer and more controllable way, Hermes Agent is worth trying. If this article is helpful, feel free to share it with friends who are following self-hosted AI Agents and internal tool building.


**Related reading**

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
* [Not Just PostgreSQL: Comparing 5 No-Code/Low-Code Platforms with External Database Support](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Open Source Project Management Tool Selection Guide, 2026 Edition](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)

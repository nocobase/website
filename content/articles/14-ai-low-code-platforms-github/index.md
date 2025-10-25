Recently, while browsing the [r/AI\_Agents](https://www.reddit.com/r/AI_Agents/comments/1iwsiby/best_lowcode_ai_agent_builder/) subreddit on Reddit, I came across a question that felt surprisingly real:

![Reddit1.png](https://static-docs.nocobase.com/image%20(1)-qx24dx.png)

> *“Is there any low-code tool that actually lets AI execute tasks and run workflows?”*

It sounds like a simple question, but it hits a pain point many developers share. There are plenty of “AI-powered low-code platforms” out there, but most of them only add a chat box — maybe they generate some SQL or form fields. **But tools that let AI truly run workflows, call APIs, and function as an agent are still rare.**

Then the comments started to split. Someone bluntly said:

![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

> *“These AI no-code platforms won’t last a year. If AI is really that powerful, it shouldn’t still rely on drag-and-drop flowcharts to work.”*

It’s a harsh take, but it also reflects a real concern: **If AI is already so capable, why do we still need no-code? Are these drag-and-drop tools destined to become obsolete?**

The interesting thing is — that comment was posted **eight months ago**. And today, not only are these tools still around, many have grown more mature, with even more new projects emerging.

Just a few days ago, we compiled 💡[**The Most Popular Open-Source No-Code AI Tools on GitHub**](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)\. Looking at stars, community activity, and feature maturity, many of these tools are not only alive — they’re actively improving and expanding their AI capabilities.
This shows that **no-code/low-code + AI isn’t a short-lived hype — it’s something real, being built, used, and evolving.**

That said, skepticism still matters. Another comment put it clearly:

![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

> *“Look into open-source alternatives — most low-code AI tools are still in their early stages.
> But most importantly: know exactly what problem you’re solving before choosing a tool.
> A lot of so-called ‘AI Agents’ are really just traditional automation with an LLM stuck on top.”*

It’s hard to argue with that. Many “AI agent platforms” do little more than connect automation flows to an LLM — smarter on the surface, but still just tools.

We’ve covered related topics before, like **💡[Noteworthy Open-Source AI Agent Projects](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)** and 💡**[Great Open-Source AI Tools](https://www.nocobase.com/en/blog/github-open-source-ai-projects).**

But this time, instead of asking “Can AI build systems?”, we’re shifting the focus naturally from **no-code** to **low-code**.

No-code is about enabling non-technical users to use AI — you don’t write code, but you can call models or generate content.

**Low-code**, however, is for people who understand the business and know a bit of tech — it focuses on **data modeling, process logic, permission systems, and plugin extensibility**, which are closer to real system building.

So, we looked into the [GitHub “low-code”](https://github.com//topics/low-code) topic and focused on tools that:

* ⭐ Have active communities and good maintenance (stars, updates, feedback)
* 🤖 Clearly provide AI capabilities in their docs, not just a chatbot window
* 🛠️ Support self-hosting or extensions and can actually be used in production environments

Based on this, we shortlisted **14 representative low-code platforms that truly integrate AI.**

They each take different paths — some help build **business systems**, some focus on **agent workflows**, and some specialize in **data and spreadsheet applications.**

Before diving into details, here’s an overview table showing how each of these 14 tools positions AI 👇

**Comparison Table (AI Features × Tool Positioning Overview)**


| Tool     | Category       | How AI is Used                         | Workflow Extensible     | Supports Modeling/UI | Table/Data Support | Cross-domain Capability          |
| -------- | -------------- | -------------------------------------- | ----------------------- | -------------------- | ------------------ | -------------------------------- |
| NocoBase | Business Apps  | AI generates data models, pages, logic | ✅ Plugins + Automation | ✅ Full              | ✅                 | ⭐ Strong (Data + System + Flow) |
| ToolJet  | Business Apps  | AI Copilot generates pages/API scripts | ⚠️ Light Flows        | ✅                   | ⚠️               | Medium                           |
| Appsmith | Business Apps  | AI generates SQL and form logic        | ⚠️                    | ✅                   | ⚠️               | Medium                           |
| Budibase | Business Apps  | AI fills fields, generates form text   | ⚠️                    | ✅                   | ⚠️               | Weak                             |
| refine   | Business Apps  | AI generates CRUD logic and code       | ❌                      | ✅ (code-focused)    | ❌                 | No                               |
| n8n      | Workflow/Agent | AI tasks, API calls                    | ✅                      | ❌                   | ❌                 | No                               |
| Dify     | Workflow/Agent | Agents, knowledge base, tool calling   | ✅                      | ❌                   | ⚠️               | No                               |
| Flowise  | Workflow/Agent | RAG, visual LLM chains                 | ⚠️                    | ❌                   | ⚠️               | No                               |
| Kestra   | Workflow/Agent | AI generates YAML workflows            | ✅                      | ❌                   | ❌                 | No                               |
| Node-RED | Workflow/IoT   | AI nodes + device/event automation     | ⚠️                    | ❌                   | ❌                 | No                               |
| Sim      | Workflow/Agent | Multi-agent collaborative workflows    | ⚠️                    | ❌                   | ❌                 | No                               |
| NocoDB   | Data Tables    | AI fill, smart fields, insights        | ⚠️                    | ❌                   | ✅                 | Weak                             |
| Teable   | Data Tables    | AI chat and auto-generated reports     | ⚠️                    | ❌                   | ✅                 | Weak                             |
| Onlook   | AI UI          | AI generates UI/components/React code  | ❌                      | ⚠️ (UI-focused)    | ❌                 | Special (UI-focused)             |


## **AI-Powered Business Application Builders**

These tools don’t just use AI to answer questions or trigger workflows — **AI is directly involved in building the application itself**.

They help users quickly create **data models, forms, pages, permissions, and internal business systems**, making them ideal for CRM, approvals, ERP, admin dashboards, and data-entry platforms.

### **NocoBase**

⭐ 17k

Website: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

* **Overview**: An open-source low-code platform featuring real **AI agents** that can assist in both building and using applications. AI can help create data models and page layouts during development, and later handle queries, analyze data, or answer business questions.
* **Target users**: Teams building business systems — internal IT teams, B2B product teams, system integrators.
* **Use cases**: CRM, approval workflows, project management, order and asset systems, with plugin support for automation and AI-driven modeling.

---

### **ToolJet**

⭐ 36.8k

Website: [https://www.tooljet.ai/](https://www.tooljet.ai/)

GitHub: [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

* **Overview**: A low-code platform for internal enterprise apps, combining **AI Copilot + visual UI building + API integration**.
* **Target users**: Engineering, operations, or data teams that need internal dashboards fast.
* **Use cases**: Admin panels, internal tools, API-based applications where AI can help write SQL, generate layouts, or scripts.

---

### **Appsmith**

⭐ 38.3k

Website: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

* **Overview**: Open-source internal app builder with **Appsmith AI** for automatic SQL generation, form logic, and component setup.
* **Target users**: Front-end developers, data tool builders, teams creating CRUD systems.
* **Use cases**: Query dashboards, internal admin tools, database utilities — e.g. natural language → AI generates SQL → table output.

---

### **Budibase**

⭐ 27.2k

Website: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

* **Overview**: A platform for building custom business applications with database modeling, form generation, simple workflows, and AI-powered text/field generation.
* **Target users**: Small and medium-sized teams, lightweight internal systems, no-code enthusiasts.
* **Use cases**: Form apps, internal office tools, data-entry platforms. AI helps fill fields or create sample data, but complex logic support is limited.

---

### **refine**

⭐ 33.1k

Website: [https://refine.dev/](https://refine.dev/)

GitHub: [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

* **Overview**: A React-based framework for building frontend admin panels with CRUD, permissions, and UI logic. Provides AI assistance for generating code and API bindings.
* **Target users**: Frontend developers and tech teams that need flexibility rather than drag-and-drop tools.
* **Use cases**: Admin dashboards and data tools where code-level control is required, but development speed is still important. Does not include backend modeling.


## **AI Workflow / Agent Orchestration**

These tools stand out because **AI is not just generating content — it actively participates in executing workflows**. AI can call tools, trigger actions, and drive business automation.

Think of them as **AI-enhanced workflow engines or agent execution platforms**, rather than full low-code business system builders.

They excel at automation and execution, but usually lack complex data modeling, permission systems, or UI/page building capabilities.

### **n8n**

⭐ 151k

Website: [https://n8n.io/](https://n8n.io/)

GitHub: [https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

* **Overview**: Open-source workflow automation platform that lets you combine AI nodes with API workflows.
* **Target users**: Operations teams, support engineers, automation specialists, SMEs.
* **Use cases**: Automated content generation, data sync, email replies, AI-assisted decision workflows
  (e.g. AI replies to a customer → logs to database → sends email).

---

### **Dify**

⭐ 117k

Website: [https://dify.ai/](https://dify.ai/)

GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

* **Overview**: AI-native application and agent workflow platform with support for models, knowledge bases, memory, and tool calling.
* **Target users**: Product teams and developers building AI assistants, knowledge bots, or prototypes.
* **Use cases**: Knowledge-base chatbots, automated ticket handling, AI agents executing API actions.

---

### **Flowise**

⭐ 46k

Website: [https://flowiseai.com/](https://flowiseai.com/)

GitHub: [https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

* **Overview**: Visual AI workflow builder based on LangChain, used to create RAG pipelines and conversational agents.
* **Target users**: AI developers, prototype teams, early-stage startups.
* **Use cases**: Knowledge Q&A, lightweight chatbots, multi-step reasoning demos — not suitable for full business systems.

---

### **Kestra**

⭐ 22.7k

Website: [https://kestra.io/](https://kestra.io/)

GitHub: [https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

* **Overview**: Backend workflow and data orchestration platform with AI Copilot for auto-generating workflows.
* **Target users**: Data engineers, backend developers, DevOps teams.
* **Use cases**: AI-generated scheduled jobs, data pipelines, API task chains — focused on backend execution.

---

### **Node-RED**

⭐ 22.2k

Website: [https://nodered.org/](https://nodered.org/)

GitHub: [https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

* **Overview**: Event-driven visual workflow tool widely used in IoT and system integration.
* **Target users**: Automation engineers, hardware developers, smart home/IoT teams.
* **Use cases**: Camera detects motion → AI makes decision → trigger switch; device anomaly → AI analysis → send alert.

---

### **Sim**

⭐ 17.2k

Website: [https://www.sim.ai/](https://www.sim.ai/)

GitHub: [https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

* **Overview**: Designed for multi-agent collaboration, with visual building, execution, and API deployment.
* **Target users**: AI teams building multi-role agents, intelligent assistant startups.
* **Use cases**: AI assistants, automated report generation, intelligent task execution — though not as mature as n8n or Dify.


## **AI + Smart Spreadsheets / Database Tools**

These tools don’t focus on workflow execution or full business systems — their core value lies in **making data and spreadsheets smarter**.

Here, AI is mainly used for generating, completing, querying, and analyzing data — not for handling complex business logic.

They can be seen as **“Airtable / Notion Database enhanced with AI”**, ideal for data-driven teams, content operations, or knowledge management — rather than heavy business systems or workflow automation.

### **NocoDB**

⭐ 58.4k

Website: [https://nocodb.com/](https://nocodb.com/)

GitHub: [https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

* **Overview**: Open-source Airtable alternative that turns any database (MySQL, PostgreSQL, etc.) into a visual spreadsheet tool.
* **Target users**: Teams managing structured data — operations teams, internal collaboration groups, lightweight CRM users.
* **Use cases**: Content repositories, customer tables, inventory management, team collaboration sheets.
  AI features include field suggestions, content generation, auto-completion, and smart insights for data analysis.

---

### **Teable**

⭐ 20k

Website: [https://teable.ai/](https://teable.ai/)

GitHub: [https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

* **Overview**: A PostgreSQL-based collaborative spreadsheet database with AI chat and smart autofill.
* **Target users**: Airtable/Notion users or teams needing data collaboration with AI-powered assistance.
* **Use cases**: Content management, lightweight data warehouse, team project tables.
  Supports **conversational data interaction** — such as querying records via natural language, generating table data in bulk, or auto-creating reports.


## **Tools That Don’t Fully Fit Into the Above Categories**

During our research, we also found tools that don’t completely fall into any of the three main categories — such as **Onlook**.

⭐ 22.9k

Website: [https://onlook.com/](https://onlook.com/)

GitHub: [https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

**What makes Onlook different is that its core capability is “AI-generated UI interfaces.”**

With natural language or wireframes, AI can automatically generate page layouts, UI components, and even React code. These tools sit between **design platforms** and **frontend low-code development**, focusing on **AI-assisted UI creation**.


## **Tools That Span More Than One Category — Such as NocoBase**

Earlier, we grouped tools into three types — business application builders, workflow/agent tools, and data/table intelligence platforms.
But in practice, some platforms span multiple categories — and **NocoBase is the most complete and architecturally unified among them.**

Unlike most tools, NocoBase brings together capabilities from multiple dimensions:

* **Like a data platform**, it provides database tables, fields, views, and APIs.
* **Like a business system builder**, it can generate pages, forms, permissions, page logic, and relational models.
* **Through plugins and its open architecture**, it can also extend into workflows, automation, and even embed AI nodes to execute parts of a process.

Of course, there are other tools with some cross-category features as well:

* **Appsmith, ToolJet, Budibase** — while mainly UI builders, they also support lightweight flows such as “button click → API → write data”.
* **NocoDB, Teable** — data-centric tools that now include AI autofill, webhook triggers, and basic rule automation.

However, these tools mostly **add small AI features on top of their core functionality**, making the experience smoother — but they do not form full workflow engines or complete system capabilities, and their extensibility is limited.

In contrast, NocoBase is not just “covering more areas”, but a **true hybrid platform** — starting from data modeling at the core, extending to pages and permissions, and further to workflows and AI via plugins. **This level of architectural integration is rare among open-source low-code platforms.**


## **Final Thoughts**

We used to build systems by writing code. Then came drag-and-drop interfaces. Now, more and more people are starting to **describe** how a system should work — and let AI help build it.

> *“AI doesn’t remove the work — it just moves the work.”*

The real challenge is no longer whether we are using AI, but whether we can **deeply integrate AI with business logic, data, and workflows**, and make it a part of the system itself.

AI is moving from a **conversation tool** to a **construction tool**. It isn’t perfect yet, but the direction is clear.
In the future, systems may not be “developed” — they may be **described**. And we will start from real business problems, not just from a code editor.

If you’ve read this far and feel the same shift happening, feel free to share this list with others who care about **AI × low-code**.👍

**Related reading:**

* [Top 11 Open Source No-Code AI Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [Top 18 Open Source AI Agent Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)
* [Top 20 Open Source AI Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 Open Source MCP Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 7 Open Source Web Applications with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [Top 40 Open-source Developer Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 Fastest-Growing Open-Source Low-Code Projects on GitHub in 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)

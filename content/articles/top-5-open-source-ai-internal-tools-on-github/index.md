Previously we compiled a range of open source AI project resources, including a review of [11 open source AI no code platforms on GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools) and [several summaries of AI low code tools](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github). As AI technology advances rapidly, more open source projects are beginning to actively adopt AI capabilities.

A similar shift is happening in the internal tools space. Last year we profiled a number of [outstanding open source internal tool projects](https://www.nocobase.com/en/blog/open-source-internal-tools), and by 2025 most of them have added AI features, making the overall ecosystem feel renewed. This prompted us to create an updated, more systematic overview.

😄[ If you are new to internal tools and the value they bring, you may want to read the introductory guide first.](https://www.nocobase.com/en/blog/top-5-open-source-projects-for-building-internal-tools-in-2024#what-are-the-benefits-of-internal-tools)

In this update, we selected open source internal tools from the [GitHub Internal Tools](https://github.com/topics/internal-tools) topic with more than 20k Stars and strong community traction, and summarized their technical features and ideal use cases.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. →[ Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

Our goal is to help you quickly understand which internal tools remain worth investing in during the AI era, and to provide clear direction for technical teams building their own internal systems.

Here is a quick preview of the 5 open source internal tools we will cover.

* **NocoBase**: a data model driven no code platform designed for internal tools, featuring a highly extensible plugin system. Its AI agents can assist with data preparation, modeling, chart building, and code generation.
* **Budibase**: a low code internal tool builder offering an integrated database, drag and drop UI creation, auto generated CRUD, AI Columns, and AI assisted table design.
* **Refine**: a React based meta framework built for CRUD intensive admin systems, now supporting AI generated layouts, structures, and code.
* **ToolJet**: a platform that blends low code with AI native capabilities, allowing users to generate interfaces and logic through natural language.
* **Appsmith**: a mature open source low code platform that connects to multiple data sources, ideal for building admin dashboards, approval flows, and operations tools, now enhanced with AI driven actions.

### NO.5 NocoBase

![nocobase.png](https://static-docs.nocobase.com/nocobase-ovk3pi.png)


| GitHub        | [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)           |
| ------------- | -------------------------------------------------------------------------------------- |
| Website       | [https://www.nocobase.com/](https://www.nocobase.com/)                                 |
| License       | AGPL-3.0                                                                               |
| GitHub Stars  | 20.5k                                                                                  |
| Forks         | 2.3k                                                                                   |
| Issues        | 129                                                                                    |
| Pull Requests | 125                                                                                    |
| Contributors  | 101                                                                                    |
| Last updated  | updated today                                                                          |
| Documentation | [https://v2.docs.nocobase.com/ai-employees](https://v2.docs.nocobase.com/ai-employees) |

**Overview**

NocoBase is a data model driven no code development platform designed for building internal tools. Its plugin based architecture is highly extensible and supports building admin panels, business systems, CRMs, approval flows, and a wide range of internal applications. It offers a visual WYSIWYG interface builder and supports complex data relationships, permission models, and custom logic, making it ideal for teams that need to deliver business tools quickly.

In NocoBase, AI is not an isolated module. Instead, it is woven directly into tables, forms, data models, and workflows. The AI Employees framework integrates AI into business operations, enabling collaboration with models, forms, tables, and workflows. Built in AI employee types include data cleaning, schema modeling, knowledge search, chart generation, and code generation, helping users lower the cost of data processing, interface setup, and logic construction.

**Use cases**

**Data cleaning (Dex, Data Processing Specialist)**

AI employees extract structured information from unstructured content such as customer data, tickets, or contract text and can automatically populate forms.

![Dex.gif](https://static-docs.nocobase.com/Dex-c4uwn4.gif)

**Data analysis (Viz, Insight Analyst)**

On pages like Leads, Opportunities, or Accounts, AI employees can analyze the current dataset and automatically create trend charts, comparisons, KPI cards, and concise insights.

![Viz.gif](https://static-docs.nocobase.com/Viz-demgin.gif)

**Frontend configuration (Nathan, Frontend Engineer)**

When working with JSBlock, JSField, JSItem, JSColumn, JSAction, or Event Flow, AI employees can review the code context and generate or refine JavaScript based on natural language prompts.

![Nathan.png](https://static-docs.nocobase.com/Nathan-n9ybjn.png)

**Data modeling (Orin, Data Modeler)**

When creating internal systems such as CRMs, ticketing, inventory, or project management, AI employees can help generate or update data tables.

![Orin.png](https://static-docs.nocobase.com/Orin-ahkat1.png)

### NO.4 Budibase

![budibase.png](https://static-docs.nocobase.com/budibase-wahysy.png)


| GitHub        | [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Website       | [https://budibase.com/](https://budibase.com/)                                                                 |
| License       | GPL-v3                                                                                                         |
| Stars         | 27.4k                                                                                                          |
| Forks         | 2k                                                                                                             |
| Issues        | 294                                                                                                            |
| Pull Requests | 12                                                                                                             |
| Contributors  | 112                                                                                                            |
| Last updated  | updated today                                                                                                  |
| Documentation | [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai) |

**Overview**

Budibase is an open source low code platform for building internal tools. It supports database connections, multiple data sources, drag and drop UI creation, and automatic CRUD and workflow generation, making it suitable for building enterprise backends, approval flows, form systems, and admin panels. With its built in database, REST API support, and visual builder, teams without extensive frontend experience can still create complete internal applications.

Budibase has also integrated AI as a native platform capability. With Budibase AI enabled, users can create AI Columns for intelligent data operations, generate JavaScript logic from natural language, automatically produce database schemas, and use AI based automations for cleaning, classifying, transforming, and generating data.

**Use cases**

**Smart data cleaning and content preparation**

AI Columns can automatically clean, normalize, and categorize data, useful for customer feedback, content moderation, ticket processing, and similar workflows.

![AI Column.png](https://static-docs.nocobase.com/AI%20Column-imcj5c.png)

**Auto generating database schemas**

When building new modules such as customer management, contract workflows, or task systems, Budibase AI can generate suitable table structures and example records from a single natural language prompt.

![数据库表结构.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84-rc0ka3.png)

### NO.3 Refine

![refine-li9il9.png](https://static-docs.nocobase.com/refine-li9il9.png)


| GitHub        | [https://github.com/refinedev/refine](https://github.com/refinedev/refine) |
| ------------- | -------------------------------------------------------------------------- |
| Website       | [https://refine.dev/](https://refine.dev/)                                 |
| License       | MIT                                                                        |
| Stars         | 33.5k                                                                      |
| Forks         | 2.9k                                                                       |
| Issues        | 17                                                                         |
| Pull Requests | 11                                                                         |
| Contributors  | 311                                                                        |
| Last updated  | 2 days ago                                                                 |
| Documentation | [https://ai.refine.dev/](https://ai.refine.dev/)                           |

**Overview**

Refine is an open source React meta framework built for CRUD heavy web apps, enterprise admin systems, dashboards, and other internal B2B tools.

Refine AI brings AI into the development workflow. With natural language, documentation, or API specs as input, Refine AI can generate a complete production ready React app scaffold, including CRUD pages, routing, auth, state management, and data fetching. The output is clean, standard React code that developers can extend or adapt freely.

**Use cases**

**Generating admin systems**

Based on APIs or data models, Refine AI can create CRUD interfaces with list, form, and detail pages, making it ideal for quickly bootstrapping systems such as inventory, orders, or project management.

![后台管理系统生成-3eh30p.png](https://static-docs.nocobase.com/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E7%94%9F%E6%88%90-3eh30p.png)

**Refactoring and maintaining existing codebases**

Because Refine AI generates code that follows enterprise grade patterns and best practices, it can also be used to refactor older systems into modular components or to add new business modules quickly on top of an existing project, improving both development speed and long term maintainability.

![代码重构与维护.png](https://static-docs.nocobase.com/%E4%BB%A3%E7%A0%81%E9%87%8D%E6%9E%84%E4%B8%8E%E7%BB%B4%E6%8A%A4-muoonn.png)

💡 Recommended reading: [NocoBase vs Refine](https://www.nocobase.com/cn/blog/nocobase-vs-refine)

### NO.2 ToolJet

![ToolJet-4nyv0g.png](https://static-docs.nocobase.com/ToolJet-4nyv0g.png)


| GitHub        | [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| Website       | [https://tooljet.ai/](https://tooljet.ai/)                                                                   |
| License       | AGPL-3.0                                                                                                     |
| Stars         | 37k                                                                                                          |
| Forks         | 4.9k                                                                                                         |
| Issues        | 646                                                                                                          |
| Pull Requests | 313                                                                                                          |
| Contributors  | 651                                                                                                          |
| Last updated  | one day ago                                                                                                  |
| Documentation | [https://docs.tooljet.com/docs/build-with-ai/overview](https://docs.tooljet.com/docs/build-with-ai/overview) |

**Overview**

ToolJet is an open source, low code and AI native platform for building internal enterprise tools, dashboards, admin systems, and business applications. It offers a drag and drop visual builder, an integrated database, extensive data source and SaaS integrations, and built in permission and collaboration features. It is designed for teams that need to deliver internal systems quickly.

In ToolJet, AI is woven directly into the app building workflow. Developers can describe their requirements in natural language, and ToolJet will generate an initial interface, data structure, and query logic automatically.

**Use cases**

**Generating business apps with natural language**

ToolJet allows teams to create internal tools by describing requirements in natural language. It can build UI, data structures, and logic from scratch or modify existing applications. This makes it easy to produce common internal systems such as inventory management in a short amount of time.

![自然语言快速生成.png](https://static-docs.nocobase.com/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90-nwf730.png)

**AI documentation assistant**

The built in AI documentation assistant answers questions about components, features, and integrations, helping users get familiar with ToolJet more quickly. For teams without frontend experience, the assistant reduces the learning curve and speeds up development.

![AI 文档助手.png](https://static-docs.nocobase.com/AI%20%E6%96%87%E6%A1%A3%E5%8A%A9%E6%89%8B-75vt0c.png)

### NO.1 Appsmith

![appsmith-of0467.png](https://static-docs.nocobase.com/appsmith-of0467.png)


| GitHub        | [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith) |
| ------------- | ---------------------------------------------------------------------------------- |
| Website       | [https://www.appsmith.com/](https://www.appsmith.com/)                             |
| License       | Apache-2.0                                                                         |
| Stars         | 38.6k                                                                              |
| Forks         | 4.4k                                                                               |
| Issues        | 4.4k                                                                               |
| Pull Requests | 38                                                                                 |
| Contributors  | 335                                                                                |
| Last updated  | one day ago                                                                        |
| Documentation | [https://www.appsmith.com/ai/low-code](https://www.appsmith.com/ai/low-code)       |

**Overview**

Appsmith is an open source low code platform built to help teams create internal applications quickly and with minimal code. It supports a wide range of databases and APIs, provides a comprehensive library of visual UI components, and allows developers to extend functionality with JavaScript. This makes it suitable for building admin systems, data dashboards, approval workflows, CRMs, and analytics tools.

The latest release introduces native AI support. Appsmith can connect to leading LLMs such as OpenAI, Google AI, and Anthropic, enabling features like text analysis, summarization, semantic search, and classification powered by AI actions.

**Use cases**

**Accelerating development with AI**

Appsmith’s AI assistant provides contextual support during development, offering guidance on operations, platform features, query building, JavaScript logic, and UI customization. Through the sidebar assistant Appy, developers can get relevant help directly on the page they are editing, reducing documentation lookup time and speeding up iteration.

![借助 AI 提升构建速度.png](https://static-docs.nocobase.com/%E5%80%9F%E5%8A%A9%20AI%20%E6%8F%90%E5%8D%87%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6-76dac4.png)

**Embedding AI into internal workflows**

Teams can build AI augmented internal tools, such as a customer review analysis dashboard. Appsmith can fetch review data, display it in tables, run sentiment analysis via the Appsmith AI datasource, and use JS Objects to write results back into the UI. This enables teams to automatically classify feedback and prioritize issues more efficiently.

![整合 AI 能力.png](https://static-docs.nocobase.com/%E6%95%B4%E5%90%88%20AI%20%E8%83%BD%E5%8A%9B-n2t9w0.png)

💡 Recommended reading: [NocoBase vs. Appsmith: Which Open Source Low-Code Platform is Right for You? ](https://www.nocobase.com/en/blog/nocobase-vs-appsmith)

Additionally, beyond the five major high star projects above, open source tools like [Yao](https://github.com/YaoApp/yao) and [ILLA Builder ](https://github.com/illacloud/illa-builder) also maintain strong community activity. [Yao](https://github.com/YaoApp/yao) provides a full stack application engine that enables rapid construction of models, workflows, and APIs for internal systems. [ILLA Builder ](https://github.com/illacloud/illa-builder) focuses on visual interface building, making it suitable for quickly creating admin panels and data tools. Both projects also offer basic AI extensions and can be useful complementary options when teams are building internal tools.

### Conclusion

When selecting internal tooling, it is helpful to evaluate solutions across several dimensions.

1. The maturity of AI features, such as support for page generation, SQL or business logic generation, chart generation, and intelligent assistants.
2. Community and ecosystem activity, including Stars, Issues, Commits, and documentation updates, all of which signal a project’s reliability and long term sustainability.
3. Self hosting capabilities and security, which influence internal deployment and data compliance.
4. Extensibility and ease of customization, which directly affect the ongoing cost of adapting systems to evolving business needs.

We hope this guide offers useful technical insight and helps you make more informed decisions when building internal tools.

As generative AI continues to advance, these open source projects will keep evolving as well, bringing new capabilities over time.

We look forward to seeing how these tools help your team build more efficient and intelligent internal systems in the future.

**Related reading:**

* [Top 5 Open-Source AI Internal Tools on GitHub ](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
* [The 8 Best Google Sheets Alternatives (Specs & Pricing) ](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6 Open-Source No/Low-Code Tools for Building PoCs ](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [A Developer’s Technical Decision Guide to No-Code and Low-Code (2026) ](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [6 In-Depth Comparison of RBAC in Enterprise-Grade No-Code/Low-Code Platforms](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [14 AI-Powered Low-Code Platforms on GitHub Worth Watching](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)
* [Top 11 Open Source No-Code AI Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [Top 18 Open Source AI Agent Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)

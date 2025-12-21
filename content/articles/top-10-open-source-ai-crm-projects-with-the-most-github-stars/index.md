## Introduction

What CRM are you using today?

For most teams, the answer is a SaaS based CRM such as Salesforce. These platforms are feature rich, supported by mature ecosystems, and widely adopted across enterprises. At the same time, some teams with stronger technical preferences or higher flexibility needs have begun looking into open source alternatives to Salesforce. Low code and no code platforms give them a way to build a CRM tailored to their workflows with lower cost and shorter development cycles. We previously reviewed several high star open source CRM projects on GitHub as a starting point for CRM evaluation, though AI had not yet become a central capability in those tools.

Read more: Four real world custom CRM cases to help you choose a more flexible solution

As more tools and systems integrate more deeply with AI, open source CRM projects are evolving as well. CRM is gradually moving from a system centered on data entry and record management to one that plays a more proactive role in business operations. Some projects now include AI as a native feature, while others combine AI through extensions, plugins, or API connections.

In this updated review, we looked at high star repositories under the GitHub CRM topic and grouped them into two categories: CRMs with built in AI capabilities and CRMs that support AI extensions. We summarize their AI features and common use cases to help you understand their capability boundaries and choose the option that best fits your needs.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. →[ Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

If you want a quick overview of the tools featured in this article, the summary below gives a clear snapshot of each category.

**CRMs with native AI capabilities**

* **NocoBase**: A no code and low code platform that embeds AI deeply into data modeling, business analysis, and CRM workflows through its AI employee framework.
* **Huly Platform**: A collaboration focused workspace with built in real time AI transcription for communication and meeting scenarios.
* **Krayin CRM**: An open source CRM for sales teams that includes AI powered content generation and in app intelligent assistance.

**CRMs that extend or integrate AI**

* **Twenty**: A modern, highly customizable open source CRM that integrates external AI systems via GraphQL and REST.
* **ERPNext**: An ERP centric platform that brings AI into CRM and broader business processes through plugins and API integrations.
* **SuiteCRM**: A mature open source CRM that can incorporate AI through extensions and third party services.
* **Monica**: A personal relationship manager that connects to external AI services through API calls.
* **Akaunting**: An accounting and business management platform that adds AI capabilities through apps and API integrations.
* **Idurar ERP CRM**: An ERP plus CRM solution for small teams that integrates AI through its API layer.
* **Dolibarr**: A modular ERP or CRM system that supports AI through add on modules and API based integrations.


## Native AI CRM

### NocoBase

[Image]

**Official site:**[https://www.nocobase.com/](https://www.nocobase.com/)
**GitHub:**[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)
**GitHub Stars:** 20.8k
**AI docs:**[https://v2.docs.nocobase.com/cn/ai-employees](https://v2.docs.nocobase.com/cn/ai-employees)

**Overview**

NocoBase is an open source, self hosted AI enabled no code and low code development platform. Built around a data model driven and plugin oriented architecture, it allows teams to quickly create enterprise level business systems, including CRM workflows.

**How AI works inside the system**

AI is implemented as “AI Employees,” intelligent agents that are embedded directly into pages and workflows:

* **Understands page level data context**: AI agents can read the tables, fields, and records associated with the current view and act with full awareness of this context.
* **Generates content and assists with execution**: They can summarise text, extract information, analyse data, or auto fill fields based on business needs.
* **Accelerates system building**: During setup, they help draft data models, page layouts, and automation logic, speeding up CRM creation.

**Typical use cases**

NocoBase’s AI agents can support a wide range of CRM processes, making the system more intelligent in data handling and analysis:

* **Data cleaning and structured entry**: AI can extract key details from unstructured text such as emails or notes and turn them into structured customer attributes or business events.
* **Business analysis and visualisation**: On pages like leads or opportunities, AI can generate trend charts, comparisons, KPI cards, and concise insights directly from existing data.
* **Multilingual translation and field population**: AI can translate foreign language emails or records and write the results into the relevant CRM fields, ensuring consistent cross language data.


### Huly Platform

[Image]

**Official site:**[https://huly.io/](https://huly.io/)
**GitHub:**[https://github.com/hcengineering/platform](https://github.com/hcengineering/platform)
**GitHub Stars:** 23.9k
**AI docs:**[https://docs.huly.io/communication/live-transcription/](https://docs.huly.io/communication/live-transcription/)

**Overview**

Huly Platform is an open source, all in one workspace for collaboration and business management. It brings project management, communication, virtual office features, and CRM into a single integrated environment.

**How AI works inside the system**

Its AI capabilities center on real time transcription, powered by the built in assistant Hulia. During voice or video meetings held on the platform, Hulia captures conversations and converts them into text instantly. The transcripts are saved as part of the discussion, allowing users to read, reply, and mark them just like chat messages. This reduces the need for manual note taking and streamlines communication.

**Typical use cases**

Huly is ideal for teams that collaborate frequently, such as:

* Automatic transcription and meeting note creation during audio or video calls
* Sharing discussion summaries in text for easier review
* Managing projects, communication, and knowledge in one unified workspace

---

### Krayin CRM

[Image]

**Official site:**[https://krayincrm.com/](https://krayincrm.com/)
**GitHub:**[https://github.com/krayin/laravel-crm](https://github.com/krayin/laravel-crm)
**GitHub Stars:** 20.6k
**AI docs:**[https://krayincrm.com/ai-crm/](https://krayincrm.com/ai-crm/)

**Overview**

Krayin CRM is an open source system built on Laravel, offering core CRM features such as sales pipelines, contacts, leads, and activity tracking, with a flexible plugin architecture.

**How AI is used in the system**

The official AI module integrates large language models to enhance CRM workflows. It is used for:

* **Sales content creation and refinement** — generating follow up emails, contact notes, meeting summaries, and similar content
* **Lead and contact assistance** — providing suggestions or auto completing information on detail pages
* **Smarter text input** — embedding AI powered generation and suggestions into logs, tasks, and notes

These features help teams work faster and raise the quality of CRM related writing.

**Typical use cases**

Krayin’s AI capabilities work well for:

* Sales teams that need polished follow up messages or summaries
* Account managers who want richer contact context or AI suggested notes
* Teams looking to improve writing efficiency and overall intelligence inside their CRM


## CRMs That Support AI Extensions or Integrations

### Twenty

![Image]

**Official site:**[https://twenty.com/](https://twenty.com/)
**GitHub:**[https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)
**GitHub Stars:** 37.3k

**Overview**

Twenty is a modern open source CRM designed as a highly customizable alternative to systems like Salesforce. It gives teams full control over data, workflows, and architecture, making it suitable for organizations that want to self host and tailor their CRM in depth.

**How AI connects to the system**

Twenty offers full GraphQL and REST APIs, making it easy to integrate with external AI systems. An MCP based extension already exists, where an MCP Server exposes Twenty’s data and operations to AI assistants such as Claude. This enables natural language actions like querying, creating, updating, and managing CRM records.

### ERPNext

![Image]

**Official site:**[https://erpnext.com/](https://erpnext.com/)
**GitHub:**[https://github.com/frappe/erpnext](https://github.com/frappe/erpnext)
**GitHub Stars:** 30.6k

**Overview**

ERPNext is an open source, all in one enterprise management platform that covers CRM, sales, procurement, inventory, finance, HR, and more. Built on the Frappe Framework, it supports extensive customization and modular expansion, making it ideal for teams building a unified business system.

**How AI connects to the system**

ERPNext supports AI through its API and plugin framework. The ecosystem now includes various AI extensions built on Frappe, bringing capabilities such as text generation, content refinement, and smart assistance into forms, notes, and communication modules. ERPNext is also frequently used as an application backbone, integrating business data with external AI services to enable analysis and automated content generation.

### SuiteCRM

![Image]

**Official site:**[https://suitecrm.com/](https://suitecrm.com/)
**GitHub:**[https://github.com/SuiteCRM/SuiteCRM](https://github.com/SuiteCRM/SuiteCRM)
**GitHub Stars:** 5.2k

**Overview**

SuiteCRM is a mature open source CRM offering modules for leads, contacts, accounts, opportunities, and marketing activities. It is widely used by organizations that prefer or require self hosted CRM environments.

**How AI connects to the system**

SuiteCRM provides a full REST API and modular extension framework, allowing integration with AI through plugins or custom development. Both the official and community ecosystems offer extensions that add AI generated content, intelligent suggestions, or automated analysis to CRM workflows. Business data can also be connected to external AI services through the API to support more intelligent customer interactions.

### Monica

![Image]

**Official site:**[https://www.monicahq.com/](https://www.monicahq.com/)
**GitHub:**[https://github.com/monicahq/monica](https://github.com/monicahq/monica)
**GitHub Stars:** 23.8k

**Overview**

Monica is an open source personal relationship management tool that helps individuals organize contacts, track interactions, and manage reminders, with a strong emphasis on privacy and self hosting.

**How AI connects to the system**

Monica integrates with AI mainly through its REST API and Webhooks. In most workflows, users send contact or interaction data to external services, where AI handles text processing, analysis, or suggestions, and the results are then synchronized back. The AI capabilities come from external tools rather than Monica’s core itself.

### Akaunting

![Image]

**Official site:**[https://akaunting.com/](https://akaunting.com/)
**GitHub:**[https://github.com/akaunting/akaunting](https://github.com/akaunting/akaunting)
**GitHub Stars:** 9.4k

**Overview**

Akaunting is an open source accounting and business management platform built for small and medium sized businesses. It offers modules for accounting, invoicing, expenses, and customer or vendor management, and supports CRM and business extensions through its app marketplace.

**How AI connects to the system**

AI is introduced into Akaunting through its REST API and extension framework. In practice, third party apps or external AI services are used to analyze financial or customer data, with results written back to the system. AI functionality is therefore added through integrations and extensions rather than built into the core platform.

### IDURAR

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTIyMGY4MDFmYjA2NDAxODYyZWVmM2I5ZWIyZDcyZDZfMnVJa3dOY2JPUVRhTVN1dmtVTmFkbWp6Uk1NWGtZbGRfVG9rZW46Q3lybWJ1NkFjb1hDbk94VEZmbWNYQUlkbmFjXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**Official site:**[https://www.idurarapp.com/](https://www.idurarapp.com/)

**GitHub link:**[https://github.com/idurar/idurar-erp-crm](https://github.com/idurar/idurar-erp-crm)

**GitHub Stars:** 8.1k

**Overview**

IDURAR is an open source business management platform that combines ERP and CRM capabilities. It includes customer management, sales, invoicing, accounting, and basic operations, and is designed for small teams and developers who need a self hosted and customizable system.

**How AI integrates**

IDURAR offers APIs and an extensible architecture that allow it to work with external AI services or custom built modules. In most setups, AI runs outside the core system and connects through APIs to read or update business data, enhancing existing workflows without modifying the platform itself. Integration relies mainly on APIs and external extensions.

### Dolibarr

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTQ3OTVkNGUyYTgwOTE2Njc3ODAwMDc1NWViZmIwNWNfZXRWd01scHo0cHVtcEFuYUt5SDNtQVpzSk9qblFFRk9fVG9rZW46UUJZVWIyWHhHb1RsSXl4SmlVOWNqTjdZbk9lXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**Official site:**[https://www.dolibarr.org/](https://www.dolibarr.org/)

**GitHub link:**[https://github.com/Dolibarr/dolibarr](https://github.com/Dolibarr/dolibarr)

**GitHub Stars:** 6.8k

**Overview**

Dolibarr is a mature open source ERP and CRM platform with modules for customer and supplier management, sales, invoicing, inventory, and accounting. Its modular design and self hosted deployment make it a common choice for small and medium sized organizations.

**How AI integrates**

Dolibarr supports REST APIs and a module based extension system, making it possible to connect with external AI services or custom modules. AI features are typically handled outside the core platform and interact with Dolibarr by reading or updating data through APIs, allowing intelligent functions to be added without altering the main system. Integration is generally done through modules and API connections.


## Conclusion

In practice, CRMs with built in AI tend to deliver a more consistent and integrated experience. Because AI is part of the system architecture, interactions, features, and workflows feel more unified. If your priority is to adopt AI quickly or to let AI directly support daily CRM tasks, a platform with native AI features is usually the better fit.

Open source CRMs that rely on extensions often require more technical expertise and work best for teams that want to customize their system around specific business needs. With plugins, feature add ons, or API connections to external AI services, teams can introduce AI capabilities step by step.

Native AI CRMs also support plugins and APIs, and extensible CRMs can provide a solid AI experience with the right investment. The key is to consider your business stage, technical resources, and flexibility requirements to decide which type of CRM makes the most sense.

If you found this article useful, feel free to share it with anyone interested in AI and CRM.

## Introduction

In about two months, a Sungrow project team working across several countries built a business application with AI and NocoBase—without writing code manually. The application brought opportunities, technical solutions, and quotations that had been scattered across spreadsheets, other tools, and messaging apps into one place.

Working in a small joint team with NocoBase, the project team built the application around its own processes. AI now also helps employees find information, compare solution versions, and organize materials. Once a technical solution is confirmed, a quotation that previously took hours or even days to prepare can now be generated in minutes.

## About Sungrow

Founded in 1997, Sungrow is a renewable energy company focused on the research and development, manufacturing, sales, and service of renewable energy equipment. Its businesses span solar and wind power, energy storage, electric vehicles and charging, hydrogen, and other areas. By the end of June 2026, Sungrow had installed more than 1,100 GW of power electronic conversion equipment worldwide, placing it among the leading companies in the global renewable energy industry.

![Sungrow](https://static-docs.nocobase.com/20261104-205135-epol8v.jpg)

*Sungrow's official website homepage*

Sungrow operates in more than 100 countries and regions, with four manufacturing bases and seven R&D centers. Working across these markets means navigating different grid standards, product certifications, tariffs, and tax policies. Customers also have different requirements for trade terms, currencies, and payment methods.

A regional team may manage projects in several countries at once, each involving multiple internal processes and stakeholders. Improving how those teams coordinate their work is an important part of Sungrow's efforts to operate more efficiently.

## Why Sungrow Chose NocoBase

Sungrow has a dedicated AI department that promotes AI adoption across the company. The project team was also exploring how to put AI to practical use in its daily work.

It began with a specific need: manage opportunities in one place, then connect the technical solution, quotation, and order processes that follow.

The team already used digital tools, but they could not fully accommodate its workflows. Projects passed through multiple stages and revisions between the initial opportunity and the final quotation. Many people were involved, sometimes in several roles. Information about the same project often ended up in different files and message threads, making it difficult to identify the latest version.

The team needed more detailed control over its business processes and an application that could change as those processes changed. Having AI generate a tool was only part of the answer. Data access and permissions needed clear boundaries, the application had to run reliably, and changes and versions had to remain traceable.

The IT lead evaluated established off-the-shelf software, online collaborative spreadsheets, and application platforms such as NocoBase. The team chose NocoBase because it could reuse core capabilities for data management, permissions, and workflows. AI could then build business-specific functionality on that foundation, with the team reviewing and refining the results.

Access permissions illustrate why this mattered. Whether an employee can see the amount on a particular quotation depends on both their role and whether they belong to the relevant project team. The built-in AI agent operates within those same permissions: it can retrieve only the information that the employee is authorized to see in the application. These rules are managed through NocoBase's existing user, role, and permission system rather than being recreated for AI.

## Business Users Define the Requirements, AI Builds the Application

After agreeing on the initial scope, the project team worked with business teams in the relevant regions to document their processes and requirements. They mapped how opportunities move through each stage, who is responsible, what information must be collected, and how exceptions should be handled.

The team turned those details into requirements documents for AI to implement on NocoBase, then continued adding and adjusting requirements as development progressed. AI generated the data structures, pages, business rules, and dashboards. No one wrote code manually.

![Personal portal in the application built with AI and NocoBase](https://static-docs.nocobase.com/01_%E7%B3%BB%E7%BB%9F%E9%A6%96%E9%A1%B5%20(1)-h8x9ry.jpg)

*Personal portal in the application built with AI and NocoBase*

*Note: All application screenshots in this article come from a test environment. The data shown is test data, and some information has been blurred.*

This approach let the people closest to the business take a direct role in building the application. They defined requirements, clarified business rules, and validated the results. AI handled implementation using NocoBase's underlying capabilities, while the technical team focused on reviewing the application and keeping it running reliably.

> **“Colleagues often come to us and ask, ‘Can we make quotations work this way?’ We tell them, ‘If you can clearly explain what you need, we can build it.’ That's the confidence this platform gives us.”**
>
> — Project team

As the application took shape, the team gained a single place to manage opportunities. Users could view them by country, customer, and project stage, and track responsibility and progress.

![Opportunity dashboard showing opportunities by country, customer, and project stage.png](https://static-docs.nocobase.com/02_%E5%95%86%E6%9C%BA%E7%9C%8B%E6%9D%BF-yu915j.png)

*Opportunity dashboard showing opportunities by country, customer, and project stage*

The application also took over tasks that had previously required manual input or judgment. When someone creates an opportunity, selecting a country automatically fills in the corresponding region. The system determines the project level and, when an EPC contractor is selected, checks its region to establish whether the project is cross-regional.

![Opportunity editing page with automatically populated fields and a change history.png](https://static-docs.nocobase.com/03_%E7%BC%96%E8%BE%91%E5%95%86%E6%9C%BA%EF%BC%88%E6%8A%80%E6%9C%AF%E4%BF%A1%E6%81%AF%EF%BC%89-4geoz4.png)

*Opportunity editing page: fields marked “auto” are populated automatically or synchronized from configuration tables, with changes recorded on the right*

The team also identified places where AI could make the workflow easier. Employees can ask the built-in AI agent questions in natural language, filter business records by specific criteria, and check how individual projects are progressing.

## Managing Complex Configurations and Quotations

For large power plant projects, preparing a quotation is one of the most complex parts of the sales process. It involves much more than selecting products and entering quantities.

First, the team needs a technical configuration sheet. Typically organized into several worksheets by system, it identifies which items are standard or optional and describes the requirements for each. The items are interdependent: changing one specification can affect others, and customizations add more variables. A configuration sheet for a mature project can contain hundreds of items, each with three or four possible values.

There is no single template that works for every market. Temperature and altitude affect equipment selection, while coastal locations may require greater corrosion resistance. Wind loads, snow loads, and fire-resistance requirements also need to be assessed individually. A solution that works in one region may need to be adjusted for another.

Those adjustments require internal review. Can the requested specifications be met? Will they increase costs or affect delivery schedules? The findings are recorded in a deviation sheet and ultimately reflected in the price.

Commercial terms add another set of considerations. The team must specify the currency and exchange rate, applicable trade terms, and who is responsible for local VAT and withholding tax. Prices may need to change when exchange rates move beyond an agreed threshold, while policy changes can also affect quotation terms.

Previously, the team managed much of this work in Excel files and messaging apps. Salespeople, solution engineers, product-line teams, and pricing managers had to confirm details repeatedly. A project could have several configuration sheets and quotation versions, sometimes differing in only one or two places. Whoever prepared the quotation had to verify that the equipment capacity, configuration, and price all matched the correct solution version.

Moving this process into an application was more difficult than it first appeared. The operations team initially thought it could transfer the existing Excel sheets directly. Once it examined the process more closely, however, it uncovered numerous interdependent formulas. The team spent several days clarifying the configuration options and the relationships between them before giving that logic to AI to implement in NocoBase.

Now, the stages of the quotation process are connected. When a configuration sheet is uploaded, the application parses it. Quotations draw on equipment information from the corresponding solution, while prices and commercial terms are calculated and prefilled automatically. The workbench shows which solution version each quotation is based on and which version is currently active.

Once a solution is confirmed, the application can generate a quotation in just a few minutes.

![Solutions and quotations workbench showing version relationships and approval status.png](https://static-docs.nocobase.com/04_%E6%96%B9%E6%A1%88%E4%B8%8E%E6%8A%A5%E4%BB%B7%E5%B7%A5%E4%BD%9C%E5%8F%B0-4ujl02.png)

*Solutions and quotations workbench showing the solution version behind each quotation, the active solution, and quotation approval status*

Quoting standard products is more straightforward. Salespeople choose a model from the product catalog, and the application fills in its specifications. They enter the quantity and unit price to calculate the total, then generate a customer-facing commercial quotation and a draft order. Each business type keeps its own quotation process, but the data stays on the same platform.

AI supports this work by helping employees find and verify information. When a project has multiple solution and quotation versions, users can ask the built-in AI agent to compare them and identify what changed.

Opportunities, technical solutions, quotations, and orders are now connected within one application. Information confirmed at one stage carries through to the next. Once a deal is won, the order amount comes directly from the currently active quotation.

## How Employees Responded to the New Application

After completing the first phase, the project team held an internal training session. Many employees expected another conventional business application, but what they saw challenged those expectations.

One difference was the interface. Sungrow places considerable emphasis on visual details, and some ideas had been difficult to implement on previous platforms. This time, the project team worked with marketing colleagues to refine the homepage layout, branded character, and even the color schemes of individual charts.

The application also includes specialized AI agents for different tasks. Some organize information, others translate content or answer questions using the document repository, and others support strategic analysis. A routing agent directs requests to the appropriate agent.

Employees began to see how AI could fit into the work they do every day.

> **“Users had never imagined they could work this way. It's like not knowing how good it would feel to drive to work until you own a car. After the training, they came to us with many new requests and started thinking about how they actually wanted to work.”**
>
> — Project team, describing feedback from internal training

The project team is reviewing these requests one by one to guide further development. The second phase is already underway. Plans include expanding the document repository into a knowledge base and finding more ways to support daily work through the platform.

## Building Applications Around the Business

For the project team, flexibility is the biggest difference. Off-the-shelf software can meet standardized needs, but adapting it to specialized workflows often requires workarounds or custom development. With NocoBase, the team can keep refining its application around changing business requirements while reusing the same foundation for data, permissions, and workflows.

The team began working with NocoBase in July and completed the first major development phase in September, taking about two months. Using AI and NocoBase, the team built more than ten modules covering opportunities, projects, technical solutions, quotations, orders, management dashboards, a document repository, and AI agents. Each was designed around the team's own processes.

That experience has also influenced what the team wants to do next. It is exploring how to connect existing internal systems to the platform, bring in more business data and processes, and identify additional opportunities to use AI in day-to-day work.

For this team, the first phase is a starting point: it has a working application built around its processes and a way to keep adapting it as its needs change.

**More Customer Stories:**

* [How a Volunteer Fire Department Manages 200 Callouts a Year with NocoBase ](https://www.nocobase.com/customers/polish-volunteer-fire-department-nocobase-case-study/)
* [From Paperwork to Digital Public Services in France](https://www.nocobase.com/customers/astrolab-nocobase/)
* [How to Deliver a Complex OA System in 3 Months with NocoBase](https://www.nocobase.com/customers/deliver-complex-oa-system-nocobase-3-months/)
* [Case Study: Digitizing Medical Manufacturing Workflows with NocoBase](https://www.nocobase.com/customers/medical-device-manufacturer-builds-self-hosted-management-system-with-nocobase/)
* [Software Vendor Boosts Delivery Efficiency by 70% with NocoBase](https://www.nocobase.com/customers/software-vendor-boosts-delivery-efficiency-with-nocobase/)
* [Community Spotlight: Building a Real-World ERP with NocoBase](https://www.nocobase.com/customers/an-erp-built-with-nocobase/)
* [Inside: How an 8-Person Team Delivers at Enterprise Speed](https://www.nocobase.com/customers/shenzhen-chuanglianyun-tech-development-methodology/)
* [Built an AI Multimodal R&D Platform in Days — with NocoBase](https://www.nocobase.com/customers/ai-multimodal-platform/)
* [NocoBase in Russia: Multi-Scenario Digital Solutions in Action](https://www.nocobase.com/customers/nocobase-in-russia/)

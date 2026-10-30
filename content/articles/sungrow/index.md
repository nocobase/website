## Introduction

How long does it take for an industry leader operating in more than 100 countries to bring complex cross-border business processes online?

One overseas team at Sungrow (referred to below as the “project team”) found an answer. Working with the NocoBase team as a small joint group, they used AI and the NocoBase platform to build a business system tailored to their own processes. Without writing a single line of code, they spent about two months moving opportunities, solutions, and quotations that had previously been scattered across different tools, spreadsheets, and group chats into one system. AI also became part of daily work, helping employees search for information, compare solution versions, and organize materials. Quotations that once took hours or even days can now be produced within minutes after a solution is confirmed.

## About Sungrow

Founded in 1997, Sungrow is a globally recognized renewable-energy company focused on the R&D, manufacturing, sales, and service of renewable-energy equipment. Its businesses span solar, wind, energy storage, electric vehicles and charging, hydrogen, and other areas. By the end of June 2026, Sungrow had installed more than 1,100 GW of power electronic conversion equipment worldwide, placing it among the leading companies in the global renewable-energy industry.

![Sungrow official website homepage](https://static-docs.nocobase.com/image-ojgfvf.png)

*Sungrow official website homepage*

Sungrow operates in more than 100 countries and regions, with over 30 overseas subsidiaries, four manufacturing bases, and seven R&D centers. At that scale, the company has to work with very different rules across markets: grid standards and product certifications vary, tariff and tax policies differ, and customers use different trade terms, currencies, and payment methods. A regional team may need to follow projects in several countries at the same time, with many internal steps and long collaboration chains. Sungrow has therefore been looking for ways to improve business operations and efficiency.

## Why Sungrow Chose NocoBase

As AI began changing software development and day-to-day work, new possibilities emerged for improving operations. Sungrow has a dedicated AI department that promotes AI adoption at the company level. The project team was also actively exploring how to bring AI more deeply into its own daily work.

The starting point was a concrete business requirement: manage opportunities in one place, then gradually connect the downstream technical solution, quotation, and order processes.

The project team already had conventional digital tools, but once real business started running through them, they still could not meet the team's needs. On one hand, the business itself is complex: a project passes through many steps and many versions between opportunity and quotation. On the other hand, many people are involved, and each person often plays multiple roles with different needs. Information about the same project was frequently spread across different files and group chats. As versions accumulated, checking which information was current became increasingly time-consuming.

The team needed much finer-grained management and a business system that could keep evolving with the business. Simply asking AI to generate a tool and using it as-is was not enough. Data and permissions needed clear boundaries, the system needed to run reliably, and every change and version needed to remain traceable. The IT lead compared mature off-the-shelf software, online collaborative spreadsheets, and an application foundation like NocoBase. The team ultimately chose NocoBase because common capabilities such as data, permissions, and workflows could be reused directly. AI could then generate the business system on top of that foundation, while the team validated the results and continued iterating.

Permissions are one example. Whether someone can see the amount on a particular quotation depends both on their role and on whether they belong to that project team. The data an AI assistant can retrieve is exactly the same as the data that person is allowed to see on the page. These rules are built on NocoBase's existing user, role, and permission system, so AI does not need to recreate them from scratch.

## Business Users Define the Requirements, AI Builds the System

After deciding on the direction for the first system, the project team coordinated with business teams in the relevant regions and collected their workflows and detailed requirements: how opportunities move through the process, who is responsible at each stage, what information is required, and what exceptions need to be handled.

The team organized these details into requirement documents and gave them to AI to build the system on the NocoBase foundation, adding and adjusting requirements throughout the process. Everything in the system, from data structures and pages to business rules and dashboards, was generated by AI. No one manually wrote a line of code.

![System homepage built with AI + NocoBase - personal portal](https://static-docs.nocobase.com/Group%2045-t1hjfc.png)

*System homepage built with AI + NocoBase - personal portal*

Note: All system screenshots in this article come from a test environment. The data shown is test data, and some information has been blurred.

This approach allows people who understand the business to lead the system-building process directly. They focus on clarifying business rules, defining requirements, and validating the results. AI, together with NocoBase's underlying capabilities, handles the technical implementation, while the technical team focuses on system review and operational reliability.

> **“Colleagues often come to us and ask, ‘Can we make the quotation work this way?’ Our answer is: if you can clearly explain what you want and tell us, we can build it. That is the confidence this platform gives us.”**

> — Project team

As the application gradually took shape, opportunities that had previously been scattered across different places finally had one entry point. The team could view business by country, customer, and project stage, while tracking owners and progress.

![Opportunity dashboard: view opportunities by country, customer, and project stage](https://static-docs.nocobase.com/Group%2044-wai87n.png)

*Opportunity dashboard: view opportunities by country, customer, and project stage*

Rules that used to depend on manual judgment and manual input are now handled by the system. When a new opportunity is created, selecting the country automatically fills in the corresponding region. The project level is determined automatically. Once an EPC is selected, the system checks its region and automatically determines whether the project is cross-regional.

![Edit opportunity: fields marked auto are populated automatically or synchronized from configuration tables, with each change recorded on the right](https://static-docs.nocobase.com/Group%2043-x72kvu.png)

*Edit opportunity: fields marked auto are populated automatically or synchronized from configuration tables, with each change recorded on the right*

When designing the process, the team also considered where AI could improve efficiency. For example, when employees need to understand the current business situation, they can ask the built-in AI assistant in natural language. It can filter platform information by condition and show how far a project has progressed.

## What Really Goes Into a Quotation

Once an opportunity progresses, the next step is quotation. For large power-station projects, this is one of the most complex parts of the process. A quotation is far more than selecting products and entering quantities.

Before a quotation can be created, there must first be a technical configuration sheet. The sheet is usually divided into several worksheets by system, and each item needs to indicate whether it is standard or optional, together with a requirement description. The challenge is not simply the number of items. The items are interconnected, so one change can affect many others. Customized and optional items make the problem even harder. A mature project configuration sheet can easily contain hundreds of configuration items, each with three or four possible values, creating far more combinations than intuition suggests.

Configuration sheets also vary by template. Different regions have different environmental conditions and standards, so there is no single template that works everywhere. Temperature and altitude affect equipment selection. The closer a project is to the coast, the higher the corrosion-resistance requirement. Wind load, snow load, and fire-resistance duration all need to be matched individually. In other words, the same technical solution changes when it is applied in a different region. These changing configuration details also need internal evaluation: can the requirement be met, will costs increase, and will delivery times be affected? The evaluation result is recorded in a deviation sheet and eventually reflected in the price.

Commercial terms follow another set of rules. The team needs to specify the currency and exchange rate, which trade term applies, and who bears local VAT and withholding tax. If exchange rates move beyond an agreed threshold, the price must be adjusted. When policies change, quotation terms need to change as well.

In the past, all of this was handled through Excel and group chats. A quotation had to be confirmed repeatedly among sales, solution engineers, product lines, and pricing managers. A single project might have several configuration sheets and several quotation versions, sometimes differing in only one or two places. The person preparing the quotation had to do more than calculate the price correctly. They also had to repeatedly confirm: which solution version does this quotation correspond to? Are the capacity, configuration, and price all from the same version?

Moving all of this into a system was not easy. The operations team initially thought it would be enough to move the Excel sheets into the system, but once they broke the process down, they found a large number of interdependent formulas underneath. The team spent several days clarifying the options in the configuration sheets and the relationships between them, then handed that logic to AI to implement in NocoBase.

Now the entire chain is connected inside the system.

After a configuration sheet is uploaded, the system parses it. Quotations reference the equipment information from the parsed solution, while prices and commercial terms are calculated and prefilled automatically. The workbench clearly shows which solution version each quotation comes from and which version is currently active.

Once the solution is confirmed, a quotation can now be generated in the system within a few minutes.

![Solutions and quotations workbench. Each quotation shows which solution version it comes from, while the active solution and quotation approval status are visible at a glance](https://static-docs.nocobase.com/image-8j5zpg.png)

*Solutions and quotations workbench. Each quotation shows which solution version it comes from, while the active solution and quotation approval status are visible at a glance*

Quotations for standard products are much simpler. Salespeople select a model from the product catalog, the system automatically fills in the specifications, and entering the quantity and unit price is enough to calculate the total. The system can then generate an external commercial quotation and a draft order. The two business types keep their own quotation methods, but all the data stays on the same platform.

AI's role in quotation work is information organization and verification. When one project has multiple solution and quotation versions, employees can ask the built-in AI assistant to query and compare them and show what changed between versions.

From opportunity to solution, quotation, and order, the entire sales process now runs in one system instead of being scattered across different tools and spreadsheets. Information confirmed in one step continues into the next. After a deal is won, the order amount is taken directly from the currently active quotation.

## Starting to Imagine a New Way of Working

After the first phase of the system was completed, the project team ran an internal training session. Many employees initially assumed this would simply be another ordinary business system. Once they actually saw it, many were surprised by what it could do.

The first surprise was the interface. Sungrow has high standards for detail, and many ideas could not be realized on previous platforms. This time, everything from the homepage layout and IP character to the color palette of each chart was decided only after repeated discussions between the project team and marketing colleagues.

The surprise went beyond the interface. AI in the system is not just a chat box, but a team of AI Employees with clearly divided responsibilities. Some help organize information, some handle translation, some answer questions from the document repository, and others focus on strategic analysis. A “team lead” receives requests and routes them to the appropriate AI Employee.

More importantly, employees began to see AI applied directly to the work they do every day.

> **“Users had never imagined they could work this way. It is like before you owned a car, you never imagined how good it would feel to drive to work. After the training, they gave us many new requests and started thinking about how they actually wanted to work.”**

> — Project team, on feedback from internal training

The project team is now reviewing these requests one by one as directions for future development. Phase two has already begun. The document repository will continue evolving into a knowledge base, and more opportunities to improve daily business work through the platform are already on the roadmap.

## Enterprise Software in the AI Era

Sungrow's story may offer a glimpse of a new form of enterprise software in the AI era.

In the past, companies bought software and often had to adapt their business processes to the software. If they wanted customization, they had to keep making trade-offs between time and development cost.

The project team used an analogy: buying an off-the-shelf system is like buying pre-made fried rice. You can add a few ingredients, but it is still fried rice. What they have now is more like a wok: they can prepare different ingredients depending on what they want to cook.

With AI and NocoBase, the project team took a different path. Collaboration began in July, and the first phase of major development was completed in September, taking about two months. On NocoBase, AI generated more than ten modules, including opportunities, projects, solutions, quotations, orders, management dashboards, a document repository, and AI assistants. Each module was built around the team's own business processes.

The team's thinking changed as well. In the past, the business had to adapt to the system. Now they are starting to consider how to connect their existing internal systems to the platform, bring in more business data and processes, and continue finding places where AI can improve efficiency.

For Sungrow's overseas team, this is only the beginning. Building systems that fit the business with AI and NocoBase may be becoming a new option for more enterprises.

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

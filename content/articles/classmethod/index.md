## Introduction

By moving away from spreadsheets, [Classmethod](https://classmethod.jp/) leveraged NocoBase to create an employee information management platform featuring a clear structure and flexible access controls.

This system has not only streamlined their internal operations, but will also enable them to deliver more effective technical solutions to their clients.

![Classmethod.PNG](https://static-docs.nocobase.com/Classmethod-o0zgj9.PNG)

## About Classmethod

[Classmethod](https://classmethod.jp/) Inc. is one of Japan’s top IT service providers, best known for its comprehensive AWS support—including cost optimization, security, implementation, and ongoing operations.

Beyond AWS, Classmethod also delivers services across cloud adoption, data infrastructure, generative AI solutions, application development, and SaaS integration, working with major platforms such as Google Cloud, Cloudflare, Informatica, and Snowflake.

Many developers may know Classmethod from their well-known tech media site, [DevelopersIO](https://dev.classmethod.jp/). True to their reputation, the team is highly technical, fast-moving, and execution-driven.

## The Challenge of Information Management: When Excel Just Isn’t Enough

As Classmethod’s business has grown, their team structure has become increasingly complex—now with around 500 employees in Japan and more than 850 across the group. The workforce includes not just full-time staff, but also part-timers, side-job collaborators, contractors, and partners, spread across Japan and overseas.

With this growth, Classmethod started looking for better ways to manage their organization:

1. How can they manage employees in different countries and employment types with a single, unified standard?
2. How can processes like onboarding, offboarding, or internal transfers be automated—covering data entry, access permissions, and notifications?
3. How can the company centrally track everyone’s certifications, professional backgrounds, and training records to support smarter job assignments, talent development, and hiring?
4. How can systematic management not only boost operational efficiency, but also provide junior engineers with real-world operations and development experience—while keeping system costs under control?

Now, imagine trying to handle all of this with just Excel or Google Sheets. It’s easy to see how problems would quickly pile up. In fact, these are exactly the pain points Classmethod’s team has faced firsthand:


| **Managing with Excel and Google Sheets**                              | ** Key Challenges**                                                                                                      |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ⚠️ Software license records were kept in Excel                       | ❌ License assignments were often inaccurate—unused accounts still had active licenses                                  |
| ⚠️ Each department managed its own Google Sheet                      | ❌ Audits became slow and burdensome for both users and IT                                                               |
| ⚠️ Data access permissions were tracked in separate spreadsheets     | ❌ Inconsistent data definitions made sharing and managing information difficult, and permissions were easy to get wrong |
| ⚠️ Complex information had to be cross-checked manually with VLOOKUP | ❌ Finding information across departments was difficult, slowing down workflows                                          |
| ⚠️ Every onboarding, transfer, or departure required manual updates  | ❌ Onboarding could take up to 10 business days, creating a poor experience for new hires                                |

Most importantly, as the team grew and processes became more complex, these issues only got worse. Without a centralized and automated system, the burden on the admin team increased—and the entire organization suffered from slower responses and less reliable data.

This is why Classmethod set out to find a more systematic and flexible solution: one that could centralize data management, support business-specific configurations, and enable automation over time.

## System Selection Process

When Classmethod decided to move beyond spreadsheets, the team evaluated a range of tools, including Airtable and NocoDB. These solutions stood out for their ease of use, intuitive interfaces, and some level of extensibility. Ultimately, though, the team chose NocoBase for a few clear reasons: it offered the flexibility, control, and alignment with Classmethod’s needs that other tools couldn’t match.

Here’s what mattered most in their decision:

1. **Flexible, open-source deployment**

As a tech-driven company, Classmethod prefers to run critical systems in their own AWS environment to meet security and compliance requirements. NocoBase is fully open-source and deployable anywhere, without SaaS restrictions.

2. **No per-user fees—ideal for “many viewers, few editors”**

While only a small group enters data, many departments need access. With per-user pricing, costs would escalate quickly. NocoBase’s open-source model avoids this issue entirely.

3. **Fine-grained access control**

NocoBase supports record- and field-level visibility settings for different users—essential for secure, hierarchical data access in an employee management system.

4. **Separation of UI and data structure for custom interfaces**

Different teams need to see different information. With NocoBase, the UI and data model are configured independently, making it easy to create flexible, tailored interfaces.

5. **Built-in workflow engine—no external automation needed**

Business logic like automatically creating accounts for new hires or revoking temporary permissions can be handled entirely with built-in workflows, no need for third-party automation tools or custom scripts.

6. **Automatic API generation for easy integration**

Every new data collection in NocoBase comes with automatically generated APIs, making it much easier for engineering teams to automate scripts and sync data.

In short, NocoBase might not have the longest feature list, but it delivers exactly what Classmethod needs most: security, autonomy, flexibility, and total control over development and operations.

## NocoBase in Action: Early Impact

Once the plan was set, Classmethod quickly deployed and modeled their data with NocoBase. The engineering team rolled out NocoBase in their own AWS environment and set up core data collections reflecting the organization—covering employees, departments, software licenses, company assets, system accounts (like Slack and GitHub), and certifications. Business users could also update fields and adjust the UI layout as needed.

Initial data was imported via CSV, and future updates were automated using Python scripts and NocoBase’s auto-generated APIs. By linking all data through relational fields, the team achieved truly structured information management.

After going live, the new system drove major efficiency gains:

* Data was no longer scattered across different department spreadsheets, which greatly reduced sync issues and version conflicts
* SaaS license management was automated, making IT audits much more efficient
* Tasks like revoking temporary permissions, confirming device assignments, and sending expiry alerts were increasingly automated
* Business teams could tweak fields and interfaces themselves—no more waiting on engineers, and maintenance became much lighter
* Talent data (certifications, training, experience) was now structured, making it easier to manage internal transfers and hiring

![Employee Management.png](https://static-docs.nocobase.com/image_1-93c06z.png)

![Employee Management2.png](https://static-docs.nocobase.com/image_2-i5s50v.png)

Most importantly, this new system sets the stage for future growth. Whether it’s integrating new systems, expanding workflows, or adding AI capabilities, NocoBase offers the flexibility and technical power Classmethod needs to keep evolving.

## Continuous Improvement: Turning Internal Success into Client Value

Classmethod has now fully migrated its day-to-day employee information management to NocoBase and is pushing ahead with automation and integration, such as:

* Triggering approval workflows when new data is added or updated
* Sending notifications to other teams via Slack
* Exporting data to external systems (like Google Sheets or integrated platforms)
* Automatically requesting license renewals before they expire
* Confirming asset ownership (for laptops, security badges, etc.)
* Auto-revoking temporary permissions
* Sending license expiry reminders through automated workflows
* Integrating with large language models via their MCP server

The team is also working to better visualize employee data—such as certifications, job histories, and training records—to improve hiring, talent development, and internal knowledge sharing.

With NocoBase, Classmethod has centralized and automated its HR management, while building up valuable hands-on experience in system development and operations.

As a tech-driven IT services company, Classmethod is committed to turning practical experience into real value for clients. Now, they’re applying these proven practices to client projects—helping more businesses build flexible, controllable systems for today’s complex environments.

As their website puts it: Make technology the core of your business, and drive higher quality and speed with technical excellence and real results.

**Related reading:**

* [How One Furniture Factory Built Its Own ERP—No Coding Needed](https://www.nocobase.com/en/blog/olmon)
* [From Designer to Builder: L&A’s Digital Transformation with NocoBase](https://www.nocobase.com/en/blog/l-a)
* [How KIGLAND Scaled Custom Anime Mask Production with Open-Source Tools](https://www.nocobase.com/en/blog/kigland)
* [How a 400+ Lawyer Firm Streamlines Commission Management with NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [Rapid Development with NocoBase: Driving Digital Transformation in Construction](https://www.nocobase.com/en/blog/rapid-development-with-nocobase)
* [Orchisky’s Smart Manufacturing Upgrade: Why They Chose NocoBase](https://www.nocobase.com/en/blog/Orchisky)

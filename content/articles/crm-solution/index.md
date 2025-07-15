We’re excited to announce the official launch of the NocoBase CRM Solution!

As an open-source no-code platform, NocoBase has been widely used to build all kinds of business applications. Among them, CRM is one of the most common starting points—so it only made sense for us to make it the first official solution in our lineup.

💡 Read More: [Build CRM in Hours: Top No-Code/Low-Code Tools You Need to Know](https://www.nocobase.com/en/blog/low-code-no-code-crm-builder)

You can now try it directly in our live demo environment and easily replicate it for your own needs.  👉 Try it now: [https://www.nocobase.com/en/solutions/crm](https://www.nocobase.com/en/solutions/crm)

<iframe width="679" height="382" src="https://www.youtube.com/embed/rU0xaUYEtYk" title="NocoBase CRM Solution is Now Live" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Why CRM?

CRM systems are one of the most popular use cases for NocoBase. They have a clear structure, standardized workflows, and well-defined data relationships—making them a perfect showcase of NocoBase’s strengths: visual data modeling, flexible permissions, automated workflows, and built-in charts.

Even more importantly, CRM is a use case that’s been validated across a wide range of real-world scenarios by our global user base.

💡 Read More: [Top 4 Custom CRM Case Studies (Helping You Choose a More Flexible CRM Solution)](https://www.nocobase.com/en/blog/custom-crm-case-studies)

## What’s Inside the CRM Demo?

You’ll find a fully functional CRM system where you can:

* Manage customers, contacts, and organizational profiles
* Customize dashboards with funnel charts, rankings, and more
* Handle approvals and send emails directly within the platform
* Set up reminders, automate workflows, and assign tasks
* Tailor fields, relationships, permissions, and interface layouts

From data modeling to UI design to business logic, everything is configured visually—no code required.

💡 Read More:

* [How to Implement CRM Lead Conversion in NocoBase](https://www.nocobase.com/en/tutorials/how-to-implement-lead-conversion-in-nocobase)
* [Implementing CRM Sales Pipeline Visualization in NocoBase: Lead Status Progress Bar & Stage Management](https://www.nocobase.com/en/tutorials/nocobase-crm-sales-pipeline-visualization-lead-status-progress-bar)

## What Commercial Plugins Are Used?

The current CRM Demo includes the following commercial plugins to provide a complete experience:


| Plugin                                                                                                     | Role in CRM                                                                  | Alternative Without Plugin                                                                               |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Data Visualization: ECharts](https://docs.nocobase.com/handbook/data-visualization-echarts)               | Customizable charts (e.g., funnels, bar, pie)                                | Use the free chart plugin or embed external charts via iframe blocks                                     |
| Data Table: Comments                                                                                       | Add comments to customers, contacts, tickets, etc.                           | Combine Markdown (Vditor) with list views as a workaround                                                |
| [Email Manager](https://docs.nocobase.com/handbook/email-manager/usage-admin)                              | Send and manage emails within the system (supports high-volume usage)        | Basic functionality (\~50%) achievable with data tables + email workflow node; attachments not supported |
| [Backups Manager](https://docs.nocobase.com/handbook/backups)                                              | Backup, restore, and distribute your app data                                | Use manual database migration as an alternative                                                          |
| [Workflow: Approval](https://docs.nocobase.com/handbook/workflow/triggers/approval)                        | Supports approval flows (e.g., quotes, orders)                               | Use status fields with linkage rules; limited for complex workflows                                      |
| [Workflow: JSON Variable Mapping](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping) | Parse SQL results and assign leads to sales reps                             | Can use SQL stored procedures for complex logic                                                          |
| [Workflow: JSON Query](https://docs.nocobase.com/handbook/workflow/nodes/json-query)                       | Advanced JSON parsing for tasks after lead assignment                        | SQL stored procedures can be used as an alternative                                                      |
| [Workflow: Custom Variable](https://docs.nocobase.com/handbook/workflow/nodes/variable)                    | Temporarily store values (e.g., customer ID after creating a service ticket) | SQL stored procedures can serve as a workaround                                                          |
| [Action: Export records (Pro)](https://docs.nocobase.com/handbook/action-export-pro)                       | Export data from any table                                                   | Use the default export feature (limited capabilities)                                                    |
| [Action: Import records (Pro)](https://docs.nocobase.com/handbook/action-import-pro)                       | Import data into any table                                                   | Use the default import feature as a basic alternative                                                    |
| [Custom Variable](https://docs.nocobase.com/handbook/custom-variables)                                     | Display numeric badges on tab labels                                         | ⚠️ No                                                                                                  |
| [Template Printing](https://docs.nocobase.com/handbook/action-template-print)                              | Generate printable quotes and orders                                         | ⚠️ No                                                                                                  |
| History (in beta)                                                                                          | Track changes to data records                                                | ⚠️ No                                                                                                  |

## What If You Haven’t Purchased Commercial Plugins?

Even without commercial plugins, you can still build and run a fully functional CRM using NocoBase’s core features. Here’s how to handle some of the more advanced use cases:

1. **Complex Logic (e.g., Lead Assignment)**

If you don’t have access to features like pre-operation events, JSON parsing nodes, or JavaScript nodes, you can shift the logic into SQL stored procedures. This works, but it can make the codebase harder to manage and complicate future migrations.

2. **Change Tracking Without History Logs**

Without the history log plugin, you can approximate this functionality by combining pre-operation events, query nodes, and JavaScript nodes to compare field values. However, this method is manual, complex, and may affect performance—especially for large datasets or frequent changes.

3. **Basic Commenting Without Specialized Blocks**

Missing features like the Comments plugin? You can recreate basic commenting using list views and Markdown fields. Check out this tutorial for an example:

👉 [Using the Task Tutorial Plugin](https://www.nocobase.com/en/tutorials/task-tutorial-plugin-use)

While not as seamless, it covers most basic scenarios.

4. **Other Features**

Some capabilities—like custom variable, template printing, or history logs—are difficult to replicate without the respective plugins. These may require significant custom development or workarounds.

💡 Read More: [4 Best Open Source CRM Software for Small Businesses: Lightweight & Efficient](https://www.nocobase.com/en/blog/the-best-4-crm-software-for-small-businesses)

## Copy It to Your Own Environment

You can copy the entire CRM system into your own NocoBase environment with just a few clicks. It’s a solid foundation to build on—add, remove, or customize any features to fit your exact business needs.

Read the guide: [NocoBase CRM Demo Deployment Guide](https://www.nocobase.com/en/tutorials/nocobase-crm-demo-deployment-guide)

We’ll also be publishing step-by-step tutorials that explain exactly how this CRM was built.

And this is just the start—more ready-to-use solutions are on the way, including ticketing systems, project management tools, and more.

**Related reading:**

* [Top 10 Most-Starred Open-Source ERP and CRM on GitHub](https://www.nocobase.com/en/blog/top-10-most-starred-open-source-erp-and-crm-on-github)
* [Top 11 Open-source CRM Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
* [NocoBase vs Salesforce: who is your ideal CRM?](https://www.nocobase.com/en/blog/nocobase-vs-salesforce)

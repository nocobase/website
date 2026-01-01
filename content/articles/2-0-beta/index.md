After 8 weeks of hard work by the NocoBase team and all contributors, NocoBase 2.0-beta has been released on schedule. This version includes extensive refinements and testing of the new features in NocoBase 2.0, bringing 2.0 into a more stable phase. We welcome early adopters to use this version for production testing and provide timely feedback on any issues or suggestions.

2.0-rc will be released before February 11, 2026, with more comprehensive testing and additional new features. Stay tuned.

## New Features

### AI Employees

We have made significant improvements to AI Employees, including:

- Optimized capabilities of built-in AI Employees
- Support for accessing external data sources
- Support for querying large amounts of data
- Preserving original formatting in conversation content
- Improved error messages

User Manual: [AI Employees](https://v2.docs.nocobase.com/ai-employees)

![](https://static-docs.nocobase.com/20251102121036-2025-11-02-12-10-38.png)

### UI Templates

The 2.0 beta introduces a brand new UI Templates feature. Each template type supports both copying and referencing, including:

- Block Templates
- Field Templates
- Popup Templates

Notably, Popup Templates allow you to save the entire popup content (all tabs and blocks in sub-pages) as a template, significantly reducing repetitive work from version 1.x.

User Manual: [UI Templates](https://v2.docs.nocobase.com/interface-builder/ui-templates)

![](https://static-docs.nocobase.com/edit-popup-select-20251228.png)

### Multi-App 2.0

Multi-App Management is NocoBase's unified application management solution for creating and managing multiple physically isolated NocoBase application instances across one or more runtime environments. Through the App Supervisor, users can create and maintain multiple applications from a unified entry point, meeting the needs of different businesses and scales. NocoBase supports three deployment architectures:

- **Single App**: Deploy only one NocoBase instance where all business functions, data, and users run in the same application.
- **Shared Memory Multi-App**: Multiple applications can run simultaneously within one NocoBase instance. Each application is independent, can connect to its own database, and can be created, started, and stopped individually, but they share the same process and memory space. Users still only need to maintain one NocoBase instance.
- **Multi-Environment Hybrid Deployment**: Deploy one NocoBase as a unified management center, while deploying multiple NocoBase instances as application runtime environments for running business applications. Different applications can run on different nodes or clusters.

User Manual: [Multi-App](https://v2.docs.nocobase.com/multi-app/multi-app)

![](https://static-docs.nocobase.com/202512231215186.png)

### Multi-Space

The Multi-Space plugin enables logical isolation to create multiple independent data spaces within a single application instance, suitable for scenarios like multi-factory or multi-store operations with highly consistent business processes and system configurations.

User Manual: [Multi-Space](https://v2.docs.nocobase.com/multi-app/multi-space)

### Data Visualization 2.0

Version 1.x provided basic data visualization plugins based on Ant Design Charts and ECharts for fundamental data visualization. However, it fell short in handling complex charts, personalized interactions, and data linkage scenarios.

NocoBase 2.0 introduces a brand new data visualization plugin based on ECharts, supporting visual configuration mode as well as SQL and JSON modes. It supports events, making it easy to handle complex charts, multi-chart linkage, and data drill-down scenarios.

Don't worry about SQL and JSON being too complex—AI Employee Nathan is here to help.

User Manual: [Data Visualization](https://v2.docs.nocobase.com/data-visualization)

![](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

### Workflow

#### New "Multi-Condition Branch" Node

Similar to `switch / case` or `if / else if` statements in programming languages. The system evaluates multiple configured conditions in sequence and executes only the branch that satisfies a condition. This node will replace some functionality of the "Parallel Branch" node. We recommend replacing workflows that use both condition and parallel nodes with the new "Multi-Condition Branch" node.

![20251123224209](https://static-docs.nocobase.com/20251123224209.png)

User Manual: [Multi-Condition Branch](https://v2.docs.nocobase.com/workflow/nodes/multi-conditions)

### Approval 2.0

Most block configurations in the Approval plugin have been refactored using FlowEngine, supporting more flexible configuration and usage. Several new features have also been added.

User Manual: [Approval](https://v2.docs.nocobase.com/workflow/triggers/approval)

#### Option to Display Data Snapshot or Latest State in Approval Processing Interface

* **Snapshot**
  During the approval process, the applicant and approvers see the record state as it was when they entered, and after submission, they can only see the records they modified—they won't see updates made by others afterward.
* **Latest**
  During the approval process, the applicant and approvers always see the latest version of the record throughout the process, regardless of the record's state before their action. After the process ends, they will see the final version of the record.

#### Support for Configuring Initiator Data Scope

You can configure user scope-based permissions to determine which users can initiate the approval.

![20251226114623](https://static-docs.nocobase.com/20251226114623.png)

#### In the To-Do Center, Support for Configuring Business Data Fields in "My Initiated" and "My Approvals" List Cards

The "My Initiated" card allows flexible configuration of approval information and business data fields.

![20251231222654](https://static-docs.nocobase.com/20251231222654.png)

The "My Approvals" card allows flexible configuration of approval task and business data fields.

![20251231222815](https://static-docs.nocobase.com/20251231222815.png)

### Email Manager 2.0

The Email Manager plugin has been refactored using FlowEngine, enabling AI Employees to seamlessly participate in email summarization, analysis, and composition. New features like auto-save drafts have also been added.

User Manual: [Email Manager](https://v2.docs.nocobase.com/email-manager)

![](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

### Record History

The Record History plugin tracks data changes by automatically saving snapshots and difference records for create, update, and delete operations, helping users quickly trace data changes and audit operations.

User Manual: [Record History](https://v2.docs.nocobase.com/record-history/)

![](https://static-docs.nocobase.com/202511011346400.png)

---

## Solutions

NocoBase 2.0 provides ready-to-use solution templates for quickly building business systems.

### Intelligent Ticketing System

An AI-driven ticket management platform featuring:

- **Multi-Source Unified Access**: Public forms, customer portal, email parsing, API/Webhook
- **AI Employee Team**: Sam (routing), Grace (replies), Max (knowledge), Lexi (translation)...
- **Full SLA Monitoring**: P0-P3 four-level priority with automatic escalation alerts
- **Knowledge Self-Circulation**: Tickets automatically become knowledge articles after resolution

Solution Documentation: https://v2.docs.nocobase.com/solution/ticket-system/

![ticketing-imgs-2026-01-01-00-46-12](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-46-12.jpg)

### CRM Customer Management (Preview)

> **Version Note**: The current version is based on 1.x with partial frontend UI adapted for 2.0, **for learning and preview only**.

NocoBase CRM is a no-code, flexible, and powerful customer relationship management platform, covering:

- **Customer Management**: Customer information, contacts, customer grading
- **Sales Pipeline**: Lead management, opportunity tracking, sales funnel
- **Order Management**: Quotations, orders, contracts
- **Data Analysis**: Dashboards, reports, data visualization

Solution Documentation: https://v2.docs.nocobase.com/solution/crm/

Live Demo: https://demo.nocobase.com/new

![ticketing-imgs-2026-01-01-00-47-06](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-47-06.jpg)

## 2.0-beta vs 1.x

### Legend

- ✅ Supported: 1.x features adapted in 2.0
- 🆕 New feature: New features in 2.0
- ✨ Enhanced: Features improved compared to 1.0
- 🔄 In progress: Features under development
- 🚀 Optimizing: Supported but needs improvement
- ❌ Not supported: Features not supported in 2.0
- ⚠️ Deprecated: Deprecated features
- P0/P1/P2: Feature priority
  - P0: Coming soon
  - P1: Will be supported before 2.0 official release
  - P2: Will be supported after 2.0 official release

### Interface Builder

#### Routes & Menus


| Category      | Feature           | Status         | Priority | Notes |
| ------------- | ----------------- | -------------- | -------- | ----- |
| Add menu item | Group             | ✅ Supported   | -        | -     |
| Add menu item | Classic page (v1) | ✅ Supported   | -        | -     |
| Add menu item | Modern page (v2)  | 🆕 New feature | -        | -     |
| Add menu item | Link              | ✅ Supported   | -        | -     |

#### Pages


| Category      | Feature            | Status           | Priority | Notes |
| ------------- | ------------------ | ---------------- | -------- | ----- |
| Page settings | Display page title | ✅ Supported     | -        | -     |
| Page settings | Edit page title    | ✅ Supported     | -        | -     |
| Page settings | Enable page tabs   | ✅ Supported     | -        | -     |
| Page settings | Copy embedded link | ❌ Not supported | -        | -     |
| Page settings | Enable page header | ⚠️ Deprecated  | -        | -     |
| Drag layout   | Block drag layout  | ✨ Enhanced      | -        | -     |

#### Add Blocks

##### Data blocks


| Feature         | Status           | Priority | Notes |
| --------------- | ---------------- | -------- | ----- |
| Table           | ✅ Supported     | -        | -     |
| Form (Edit)     | ✅ Supported     | -        | -     |
| Form (Add new)  | ✅ Supported     | -        | -     |
| Details         | ✅ Supported     | -        | -     |
| List            | ✅ Supported     | -        | -     |
| Grid card       | ✅ Supported     | -        | -     |
| Comments        | ✅ Supported     | -        | -     |
| Map             | ✅ Supported     | -        | -     |
| Charts          | ✨ Enhanced      | -        | -     |
| Calendar        | ❌ Not supported | -        | -     |
| Gantt           | ❌ Not supported | -        | -     |
| Kanban          | ❌ Not supported | -        | -     |
| Multi-step form | ❌ Not supported | -        | -     |

##### Filter blocks


| Feature  | Status           | Priority | Notes |
| -------- | ---------------- | -------- | ----- |
| Form     | ✨ Enhanced      | -        | -     |
| Collapse | ❌ Not supported | -        | -     |
| Tree     | ❌ Not supported | -        | -     |

##### Other blocks


| Feature             | Status           | Priority | Notes |
| ------------------- | ---------------- | -------- | ----- |
| Block template      | 🆕 New feature   | -        | -     |
| JS block            | 🆕 New feature   | -        | -     |
| Iframe              | ✅ Supported     | -        | -     |
| Action panel        | ✅ Supported     | -        | -     |
| Markdown            | ✨ Enhanced      | -        | -     |
| Record history      | 🆕 New feature   | -        | -     |
| Email               | ✅ Supported     | -        | -     |
| Workflow > To-Do    | ❌ Not supported | -        | -     |
| Workflow > Approval | 🔄 In progress   | P0       | -     |

#### Tabs


| Category     | Feature  | Status         | Priority | Notes |
| ------------ | -------- | -------------- | -------- | ----- |
| Tab settings | Edit tab | ✅ Supported   | -        | -     |
| Tab settings | Copy UID | 🆕 New feature | -        | -     |
| Tab settings | Delete   | ✅ Supported   | -        | -     |

#### Table Block


| Category                       | Feature                      | Status           | Priority | Notes |
| ------------------------------ | ---------------------------- | ---------------- | -------- | ----- |
| Table settings                 | Title & description          | ✅ Supported     | -        | -     |
| Table settings                 | Block linkage rules          | ✨ Enhanced      | -        | -     |
| Table settings                 | Block height                 | ❌ Not supported | P1       | -     |
| Table settings                 | Enable drag and drop sorting | ❌ Not supported | P1       | -     |
| Table settings                 | Drag and drop sorting field  | ❌ Not supported | P1       | -     |
| Table settings                 | Data loading mode            | ❌ Not supported | P1       | -     |
| Table settings                 | Enable quick edit            | 🆕 New feature   | -        | -     |
| Table settings                 | Show row numbers             | ✅ Supported     | -        | -     |
| Table settings                 | Page size                    | ✅ Supported     | -        | -     |
| Table settings                 | Data scope                   | ✅ Supported     | -        | -     |
| Table settings                 | Default sorting              | ✅ Supported     | -        | -     |
| Table settings                 | Enable tree table            | ✅ Supported     | -        | -     |
| Table settings                 | Expand all rows by default   | ✅ Supported     | -        | -     |
| Table settings                 | Table density                | ✅ Supported     | -        | -     |
| Table settings                 | Save as template             | 🆕 New feature   | -        | -     |
| Table settings                 | Copy UID                     | 🆕 New feature   | -        | -     |
| Table settings                 | Delete                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Add new                      | ✅ Supported     | -        | -     |
| Table actions > Global actions | Delete                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Filter                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Link                         | ✅ Supported     | -        | -     |
| Table actions > Global actions | Popup                        | ✅ Supported     | -        | -     |
| Table actions > Global actions | Refresh                      | ✅ Supported     | -        | -     |
| Table actions > Global actions | Bulk edit                    | ❌ Not supported | P1       | -     |
| Table actions > Global actions | Bulk update                  | ✅ Supported     | -        | -     |
| Table actions > Global actions | Export                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Import                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Custom request               | ❌ Not supported | P2       | -     |
| Table actions > Global actions | Column settings              | ❌ Not supported | -        | -     |
| Table actions > Global actions | AI employees                 | 🆕 New feature   | -        | -     |
| Table actions > Global actions | JS action                    | 🆕 New feature   | -        | -     |
| Table actions > Row actions    | View                         | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Edit                         | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Update record                | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Delete                       | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Popup                        | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Link                         | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Duplicate                    | ❌ Not supported | P2       | -     |
| Table actions > Row actions    | Custom request               | ❌ Not supported | P2       | -     |
| Table actions > Row actions    | AI employees                 | 🆕 New feature   | -        | -     |
| Table actions > Row actions    | JS action                    | 🆕 New feature   | -        | -     |
| Table columns                  | Display collection fields    | ✅ Supported     | -        | -     |
| Table columns                  | Display association fields   | ✅ Supported     | -        | -     |
| Table columns > Other columns  | JS field                     | 🆕 New feature   | -        | -     |
| Table columns > Other columns  | JS column                    | 🆕 New feature   | -        | -     |
| Table columns > Other columns  | Actions                      | ✨ Enhanced      | -        | -     |
| Table column settings          | Column title                 | ✅ Supported     | -        | -     |
| Table column settings          | Tooltip                      | ✅ Supported     | -        | -     |
| Table column settings          | Column width                 | ✨ Enhanced      | -        | -     |
| Table column settings          | Enable quick edit            | 🆕 New feature   | -        | -     |
| Table column settings          | Sortable                     | ✅ Supported     | -        | -     |
| Table column settings          | Fixed                        | ✅ Supported     | -        | -     |
| Table column settings          | Style                        | ❌ Not supported | P2       | -     |
| Table column settings          | Display mode                 | 🆕 New feature   | -        | -     |
| Table column settings          | Display copy button          | ❌ Not supported | -        | -     |
| Table column settings          | Ellipsis on text overflow    | ✨ Enhanced      | -        | -     |
| Table column settings          | Field component              | ✨ Enhanced      | -        | -     |
| Table column settings          | Render mode                  | 🆕 New feature   | -        | -     |
| Table column settings          | Enable click-to-open         | ✨ Enhanced      | -        | -     |
| Table column settings          | Edit popup                   | ✨ Enhanced      | -        | -     |
| Table column settings          | Copy UID                     | 🆕 New feature   | -        | -     |
| Table column settings          | Delete                       | ✅ Supported     | -        | -     |
| Table column settings          | Hide column                  | ⚠️ Deprecated  | -        | -     |
| Table column settings          | Connect data blocks          | ⚠️ Deprecated  | -        | -     |
| Table column settings          | Save as reference template   | ⚠️ Deprecated  | -        | -     |
| Table column settings          | Save as inherited template   | ⚠️ Deprecated  | -        | -     |

#### Add & Edit Form Block


| Category                                     | Feature                               | Status           | Priority | Notes |
| -------------------------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Form settings                                | Title & description                   | ✅ Supported     | -        | -     |
| Form settings                                | Block height                          | ❌ Not supported | P1       | -     |
| Form settings                                | Form data templates                   | ❌ Not supported | -        | -     |
| Form settings                                | Form initial values                   | 🔄 In progress   | P1       | -     |
| Form settings                                | Layout                                | ✅ Supported     | -        | -     |
| Form settings                                | Block linkage rules                   | ✨ Enhanced      | -        | -     |
| Form settings                                | Field linkage rules                   | 🔄 In progress   | P2       | -     |
| Form settings                                | Data scope                            | ✅ Supported     | -        | -     |
| Form settings                                | Enable drafts                         | 🆕 New feature   | -        | -     |
| Form settings                                | Save as template                      | 🆕 New feature   | -        | -     |
| Form settings                                | Convert reference to duplicate        | 🆕 New feature   | -        | -     |
| Form settings                                | Convert reference fields to duplicate | 🆕 New feature   | -        | -     |
| Form settings                                | Copy UID                              | 🆕 New feature   | -        | -     |
| Form settings                                | Delete                                | ✅ Supported     | -        | -     |
| Form settings                                | Save as reference template            | ⚠️ Deprecated  | -        | -     |
| Form settings                                | Save as inherited template            | ⚠️ Deprecated  | -        | -     |
| Form field items                             | Display collection fields             | ✅ Supported     | -        | -     |
| Form field items                             | Display association fields            | ❌ Not supported | P2       | -     |
| Form field items > Others                    | Field template                        | 🆕 New feature   | -        | -     |
| Form field items > Others                    | JS item                               | 🆕 New feature   | -        | -     |
| Form field items > Others                    | Divider                               | ✨ Enhanced      | -        | -     |
| Form field items > Others                    | Markdown                              | ✨ Enhanced      | -        | -     |
| Form field item settings                     | Show label                            | ✅ Supported     | -        | -     |
| Form field item settings                     | Label                                 | ✅ Supported     | -        | -     |
| Form field item settings                     | Tooltip                               | ✅ Supported     | -        | -     |
| Form field item settings                     | Description                           | ✅ Supported     | -        | -     |
| Form field item settings                     | Default value                         | 🚀 Optimizing    | P0       | -     |
| Form field item settings                     | Validation                            | ✨ Enhanced      | -        | -     |
| Form field item settings                     | Required                              | ✅ Supported     | -        | -     |
| Form field item settings                     | Display mode                          | ✨ Enhanced      | -        | -     |
| Form field item settings > SubForm           | Multiple                              | ❌ Not supported | P1       | -     |
| Form field item settings > SubForm           | Field linkage rules                   | 🔄 In progress   | P2       | -     |
| Form field item settings > SubTable          | Field linkage rules                   | ❌ Not supported | P2       | -     |
| Form field item settings > SubForm (Popover) | -                                     | ❌ Not supported | -        | -     |
| Form field item settings                     | Copy UID                              | 🆕 New feature   | -        | -     |
| Form field item settings                     | Delete                                | ✅ Supported     | -        | -     |
| Form actions                                 | Submit                                | 🚀 Optimizing    | P1       | -     |
| Form actions                                 | Trigger workflow                      | ✅ Supported     | -        | -     |
| Form actions                                 | Popup                                 | ❌ Not supported | P1       | -     |
| Form actions                                 | Custom request                        | ❌ Not supported | P2       | -     |
| Form actions                                 | AI employees                          | 🆕 New feature   | -        | -     |
| Form actions                                 | JS action                             | 🆕 New feature   | -        | -     |

#### Details Block


| Category                                                | Feature                    | Status           | Priority | Notes |
| ------------------------------------------------------- | -------------------------- | ---------------- | -------- | ----- |
| Details settings                                        | Title & description        | ✅ Supported     | -        | -     |
| Details settings                                        | Block height               | ❌ Not supported | P1       | -     |
| Details settings                                        | Block linkage rules        | ✨ Enhanced      | -        | -     |
| Details settings                                        | Data loading mode          | ❌ Not supported | P1       | -     |
| Details settings                                        | Layout                     | ✅ Supported     | -        | -     |
| Details settings                                        | Data scope                 | ✅ Supported     | -        | -     |
| Details settings                                        | Default sorting            | ✅ Supported     | -        | -     |
| Details settings                                        | Field linkage rules        | 🚀 Optimizing    | -        | -     |
| Details settings                                        | Save as template           | 🆕 New feature   | -        | -     |
| Details settings                                        | Copy UID                   | 🆕 New feature   | -        | -     |
| Details settings                                        | Delete                     | ✅ Supported     | -        | -     |
| Details settings                                        | Save as reference template | ⚠️ Deprecated  | -        | -     |
| Details settings                                        | Save as inherited template | ⚠️ Deprecated  | -        | -     |
| Details actions                                         | View                       | 🆕 New feature   | -        | -     |
| Details actions                                         | Edit                       | ✅ Supported     | -        | -     |
| Details actions                                         | Open popup                 | ✅ Supported     | -        | -     |
| Details actions                                         | Update record              | ✅ Supported     | -        | -     |
| Details actions                                         | Delete                     | ✅ Supported     | -        | -     |
| Details actions                                         | Link                       | 🆕 New feature   | -        | -     |
| Details actions                                         | Template print             | ✅ Supported     | -        | -     |
| Details actions                                         | Print                      | ❌ Not supported | -        | -     |
| Details actions                                         | Custom request             | ❌ Not supported | P2       | -     |
| Details actions                                         | Trigger workflow           | 🆕 New feature   | -        | -     |
| Details actions                                         | AI employees               | 🆕 New feature   | -        | -     |
| Details actions                                         | JS action                  | 🆕 New feature   | -        | -     |
| Details fields                                          | Display collection fields  | ✅ Supported     | -        | -     |
| Details fields                                          | Display association fields | ✅ Supported     | -        | -     |
| Details fields > Others                                 | Field template             | 🆕 New feature   | -        | -     |
| Details fields > Others                                 | JS field                   | 🆕 New feature   | -        | -     |
| Details fields > Others                                 | JS item                    | 🆕 New feature   | -        | -     |
| Details fields > Others                                 | Divider                    | ✅ Supported     | -        | -     |
| Details fields > Others                                 | Markdown                   | ✨ Enhanced      | -        | -     |
| Details item settings                                   | Show field name            | ✅ Supported     | -        | -     |
| Details item settings                                   | Field name                 | ✅ Supported     | -        | -     |
| Details item settings                                   | Tooltip                    | ✅ Supported     | -        | -     |
| Details item settings                                   | Description                | ✅ Supported     | -        | -     |
| Details item settings                                   | Style                      | ❌ Not supported | P2       | -     |
| Details item settings > Title display (clickable field) | Title field                | ✨ Enhanced      | -        | -     |
| Details item settings > Title display (clickable field) | Style                      | ❌ Not supported | P2       | -     |
| Details item settings > Title display (clickable field) | Display mode               | 🆕 New feature   | -        | -     |
| Details item settings > Title display (clickable field) | Ellipsis on text overflow  | ✅ Supported     | -        | -     |
| Details item settings > Title display (clickable field) | Enable click-to-open       | ✅ Supported     | -        | -     |
| Details item settings > Title display (clickable field) | Popup settings             | ✨ Enhanced      | -        | -     |
| Details item settings > SubTable                        | Page size                  | ✅ Supported     | -        | -     |
| Details item settings > SubTable                        | Set sorting rules          | ❌ Not supported | -        | -     |
| Details item settings > SubTable                        | Enable row numbers         | ❌ Not supported | -        | -     |
| Details item settings > SubTable                        | Linkage rules              | ❌ Not supported | -        | -     |
| Details item settings > SubDetails                      | Linkage rules              | ❌ Not supported | -        | -     |
| Details item settings > SubDetails                      | Layout                     | ❌ Not supported | -        | -     |
| Details item settings > Large text                      | Ellipsis on text overflow  | ✨ Enhanced      | -        | -     |
| Details item settings > Large text                      | Render mode                | ✨ Enhanced      | -        | -     |
| Details item settings > Preview                         | -                          | ✨ Enhanced      | -        | -     |
| Details item settings                                   | Copy UID                   | 🆕 New feature   | -        | -     |
| Details item settings                                   | Delete                     | ✅ Supported     | -        | -     |

#### List Block


| Category                      | Feature                               | Status           | Priority | Notes |
| ----------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| List settings                 | Title & description                   | ✅ Supported     | -        | -     |
| List settings                 | Block height                          | ❌ Not supported | P1       | -     |
| List settings                 | Block linkage rules                   | ✨ Enhanced      | -        | -     |
| List settings                 | Page size                             | ✅ Supported     | -        | -     |
| List settings                 | Data scope                            | ✅ Supported     | -        | -     |
| List settings                 | Default sorting                       | ✅ Supported     | -        | -     |
| List settings                 | Data loading mode                     | ✅ Supported     | -        | -     |
| List settings                 | Layout                                | ✅ Supported     | -        | -     |
| List settings                 | Save as template                      | 🆕 New feature   | -        | -     |
| List settings                 | Convert reference to duplicate        | 🆕 New feature   | -        | -     |
| List settings                 | Convert reference fields to duplicate | 🆕 New feature   | -        | -     |
| List settings                 | Copy UID                              | 🆕 New feature   | -        | -     |
| List settings                 | Delete                                | ✅ Supported     | -        | -     |
| List settings                 | Save as reference template            | ⚠️ Deprecated  | -        | -     |
| List settings                 | Save as inherited template            | ⚠️ Deprecated  | -        | -     |
| List actions > Global actions | Add new                               | ✅ Supported     | -        | -     |
| List actions > Global actions | Delete                                | ✅ Supported     | -        | -     |
| List actions > Global actions | Filter                                | ✅ Supported     | -        | -     |
| List actions > Global actions | Link                                  | 🆕 New feature   | -        | -     |
| List actions > Global actions | Popup                                 | 🆕 New feature   | -        | -     |
| List actions > Global actions | Refresh                               | ✅ Supported     | -        | -     |
| List actions > Global actions | Bulk update                           | 🚀 Optimizing    | -        | -     |
| List actions > Global actions | Export                                | ✅ Supported     | -        | -     |
| List actions > Global actions | Import                                | ✅ Supported     | -        | -     |
| List actions > Global actions | Export attachments                    | 🆕 New feature   | -        | -     |
| List actions > Global actions | Send email                            | 🆕 New feature   | -        | -     |
| List actions > Global actions | Template print                        | 🆕 New feature   | -        | -     |
| List actions > Global actions | Trigger workflow                      | ✅ Supported     | -        | -     |
| List actions > Global actions | Custom request                        | ❌ Not supported | P2       | -     |
| List actions > Global actions | AI employees                          | 🆕 New feature   | -        | -     |
| List actions > Global actions | JS action                             | 🆕 New feature   | -        | -     |
| List actions > Row actions    | View                                  | ✅ Supported     | -        | -     |
| List actions > Row actions    | Delete                                | ✅ Supported     | -        | -     |
| List actions > Row actions    | Edit                                  | ✅ Supported     | -        | -     |
| List actions > Row actions    | Link                                  | ✅ Supported     | -        | -     |
| List actions > Row actions    | Popup                                 | ✅ Supported     | -        | -     |
| List actions > Row actions    | Update record                         | ✅ Supported     | -        | -     |
| List actions > Row actions    | Template print                        | ✅ Supported     | -        | -     |
| List actions > Row actions    | Trigger workflow                      | ✅ Supported     | -        | -     |
| List actions > Row actions    | Custom request                        | ❌ Not supported | P2       | -     |
| List actions > Row actions    | AI employees                          | 🆕 New feature   | -        | -     |
| List actions > Row actions    | JS action                             | 🆕 New feature   | -        | -     |
| List fields                   | Display collection fields             | ✅ Supported     | -        | -     |
| List fields                   | Display association fields            | ✅ Supported     | -        | -     |
| List fields > Others          | JS field                              | 🆕 New feature   | -        | -     |
| List fields > Others          | JS item                               | 🆕 New feature   | -        | -     |
| List fields > Others          | Divider                               | ✅ Supported     | -        | -     |
| List fields > Others          | Markdown                              | 🆕 New feature   | -        | -     |

#### Other Blocks


| Feature               | Status           | Priority | Notes |
| --------------------- | ---------------- | -------- | ----- |
| Grid card block       | ✅ Supported     | -        | -     |
| Comments block        | ✅ Supported     | -        | -     |
| Map block             | ✅ Supported     | -        | -     |
| Charts block          | ✨ Enhanced      | -        | -     |
| Calendar block        | ❌ Not supported | -        | -     |
| Gantt block           | ❌ Not supported | -        | -     |
| Kanban block          | ❌ Not supported | -        | -     |
| Multi-step form block | ❌ Not supported | -        | -     |
| Filter form           | ✨ Enhanced      | -        | -     |
| Filter collapse       | ❌ Not supported | -        | -     |
| Tree filter           | ❌ Not supported | -        | -     |
| Block template        | 🆕 New feature   | -        | -     |
| JS block              | 🆕 New feature   | -        | -     |
| Iframe                | ✅ Supported     | -        | -     |
| Action panel          | ✅ Supported     | -        | -     |
| Markdown              | ✨ Enhanced      | -        | -     |
| Record history        | 🆕 New feature   | -        | -     |
| Mail                  | ✅ Supported     | -        | -     |
| Workflow              | 🔄 In progress   | P0       | -     |

#### Action Panel


| Category              | Feature                   | Status           | Priority | Notes |
| --------------------- | ------------------------- | ---------------- | -------- | ----- |
| Action panel settings | Title & description       | ✅ Supported     | -        | -     |
| Action panel settings | Block height              | ❌ Not supported | P1       | -     |
| Action panel settings | Block linkage rules       | ✨ Enhanced      | -        | -     |
| Action panel settings | Layout                    | ✅ Supported     | -        | -     |
| Action panel settings | Ellipsis on text overflow | ✅ Supported     | -        | -     |
| Action panel settings | Save as template          | 🆕 New feature   | -        | -     |
| Action panel settings | Copy UID                  | 🆕 New feature   | -        | -     |
| Action panel settings | Delete                    | ✅ Supported     | -        | -     |
| Actions               | Popup                     | ✅ Supported     | -        | -     |
| Actions               | Link                      | ✅ Supported     | -        | -     |
| Actions               | Scan QR code              | ✅ Supported     | -        | -     |
| Actions               | Update record             | ❌ Not supported | P2       | -     |
| Actions               | Custom request            | ❌ Not supported | P2       | -     |
| Actions               | Trigger workflow          | ❌ Not supported | P2       | -     |
| Actions               | JS Action                 | 🆕 New feature   | -        | -     |

#### Fields

##### Read-only Mode


| Category           | Feature             | Status           | Priority | Notes |
| ------------------ | ------------------- | ---------------- | -------- | ----- |
| Clickable field    | Text display        | ✅ Supported     | -        | -     |
| Clickable field    | Number display      | ✅ Supported     | -        | -     |
| Clickable field    | Date display        | ✅ Supported     | -        | -     |
| Clickable field    | Time display        | ✅ Supported     | -        | -     |
| Clickable field    | Enum display        | ✅ Supported     | -        | -     |
| Clickable field    | Relation display    | ✅ Supported     | -        | -     |
| Large text display | Rich text display   | ✅ Supported     | -        | -     |
| Large text display | Markdown display    | ✅ Supported     | -        | -     |
| Large text display | Code block display  | ❌ Not supported | P1       | -     |
| Large text display | JSON field          | ✅ Supported     | -        | -     |
| Field display      | URL field           | ✅ Supported     | -        | -     |
| Field display      | Preview field       | ✅ Supported     | -        | -     |
| Field display      | Checkbox field      | ✅ Supported     | -        | -     |
| Field display      | Icon field          | ✅ Supported     | -        | -     |
| Field display      | Color field         | ✅ Supported     | -        | -     |
| Field display      | Formula calculation | ✅ Supported     | -        | -     |
| Field display      | Auto code           | ✅ Supported     | -        | -     |
| Relation field     | SubDetails          | 🔄 In progress   | P0       | -     |
| Relation field     | SubTable            | 🔄 In progress   | P0       | -     |
| Field display      | Map display         | ✅ Supported     | -        | -     |
| Field display      | JS Field            | ✅ Supported     | -        | -     |
| Field display      | TableOID            | ✅ Supported     | -        | -     |
| Field display      | China region        | ❌ Not supported | -        | -     |
| Field display      | QR code             | ❌ Not supported | -        | -     |

##### Edit Mode


| Feature                  | Status           | Priority | Notes |
| ------------------------ | ---------------- | -------- | ----- |
| Single line input        | ✅ Supported     | -        | -     |
| Number input             | ✅ Supported     | -        | -     |
| Percentage input         | ✅ Supported     | -        | -     |
| Password input           | ✅ Supported     | -        | -     |
| NanoID input             | ✅ Supported     | -        | -     |
| Multi-line text input    | ✅ Supported     | -        | -     |
| Rich text editor         | ✅ Supported     | -        | -     |
| Code editor              | ❌ Not supported | -        | -     |
| Markdown editor          | ✅ Supported     | -        | -     |
| JSON input               | ✅ Supported     | -        | -     |
| Selector                 | ✅ Supported     | -        | -     |
| Radio                    | ✅ Supported     | -        | -     |
| Checkbox                 | ✅ Supported     | -        | -     |
| Checkbox group           | ✅ Supported     | -        | -     |
| Date picker              | ✅ Supported     | -        | -     |
| Color picker             | ✅ Supported     | -        | -     |
| Icon picker              | ✅ Supported     | -        | -     |
| Time picker              | ✅ Supported     | -        | -     |
| Record picker (dropdown) | ✅ Supported     | -        | -     |
| Record picker (popup)    | ✅ Supported     | -        | -     |
| Record picker (cascade)  | ✅ Supported     | -        | -     |
| File manager             | ✅ Supported     | -        | -     |
| Collection selector      | 🔄 In progress   | P2       | -     |
| China region             | ❌ Not supported | -        | -     |
| QR code                  | ❌ Not supported | -        | -     |
| Scan to input            | ❌ Not supported | -        | -     |
| SubForm                  | 🚀 Optimizing    | P0       | -     |
| SubTable (simple)        | 🚀 Optimizing    | P0       | -     |
| SubTable (advanced)      | 🔄 In progress   | P1       | -     |
| Map picker               | ✅ Supported     | -        | -     |
| JS Field                 | ✅ Supported     | -        | -     |

#### Actions


| Feature            | Status           | Priority | Notes |
| ------------------ | ---------------- | -------- | ----- |
| Popup              | ✅ Supported     | -        | -     |
| View               | ✅ Supported     | -        | -     |
| Filter             | ✅ Supported     | -        | -     |
| Add                | ✅ Supported     | -        | -     |
| Add sub-record     | ✅ Supported     | -        | -     |
| Link               | ✅ Supported     | -        | -     |
| Edit               | ✅ Supported     | -        | -     |
| Delete             | ✅ Supported     | -        | -     |
| Refresh            | ✅ Supported     | -        | -     |
| Update record      | 🚀 Optimizing    | P1       | -     |
| Submit             | 🚀 Optimizing    | P1       | -     |
| Upload             | ✅ Supported     | -        | -     |
| Trigger workflow   | ✅ Supported     | -        | -     |
| Bulk edit          | ❌ Not supported | P1       | -     |
| Bulk update        | ✅ Supported     | -        | -     |
| Custom request     | ❌ Not supported | -        | -     |
| Copy               | ❌ Not supported | -        | -     |
| Print              | ❌ Not supported | -        | -     |
| Template print     | ✅ Supported     | -        | -     |
| Import             | ✅ Supported     | -        | -     |
| Export             | ✅ Supported     | -        | -     |
| Export attachments | ✅ Supported     | -        | -     |
| Scan QR code       | ❌ Not supported | -        | -     |
| AI employees       | 🆕 New feature   | -        | -     |
| JS Action          | 🆕 New feature   | -        | -     |

#### Advanced Features


| Category             | Feature                    | Status                        | Priority | Notes |
| -------------------- | -------------------------- | ----------------------------- | -------- | ----- |
| UI templates         | Block                      | 🆕 New feature                | -        | -     |
| UI templates         | Popup                      | 🆕 New feature                | -        | -     |
| UI templates         | Field                      | 🆕 New feature                | -        | -     |
| UI templates > Field | Form field                 | 🆕 New feature                | -        | -     |
| UI templates > Field | Details field              | 🆕 New feature                | -        | -     |
| UI templates > Field | Approval field             | 🆕 New feature                | -        | -     |
| UI and permissions   | UI and permissions         | ✨ Enhanced                   | -        | -     |
| Event flow           | Event flow events          | 🆕 New feature, 🚀 Optimizing | P1       | -     |
| Event flow           | Event flow actions         | 🆕 New feature, 🚀 Optimizing | P1       | -     |
| Linkage rules        | Linkage rules              | 🚀 Optimizing                 | P1       | -     |
| Variables            | Current user               | 🚀 Optimizing                 | P1       | -     |
| Variables            | Current role (identifier)  | ✅ Supported                  | -        | -     |
| Variables            | Current space (identifier) | ❌ Not supported              | P1       | -     |
| Variables            | API key                    | ✅ Supported                  | -        | -     |
| Variables            | URL query parameters       | ✅ Supported                  | -        | -     |
| Variables            | Current device             | 🆕 New feature                | -        | -     |
| Variables            | Current record             | ✅ Supported                  | -        | -     |
| Variables            | Current form               | ✅ Supported                  | -        | -     |
| Variables            | Current object             | ❌ Not supported              | P1       | -     |
| Variables            | Current popup              | 🚀 Optimizing                 | P1       | -     |
| Variables            | Current selected records   | ❌ Not supported              | P2       | -     |
| Variables            | Date variables             | 🔄 In progress                | P1       | -     |
| Variables            | Variables and keys         | 🔄 In progress                | P1       | -     |
| JavaScript           | Run JavaScript             | 🆕 New feature                | -        | -     |

### Plugin Status


| Plugin Name                                      | Plugin Status                    | Priority | Notes                                           |
| ------------------------------------------------ | -------------------------------- | -------- | ----------------------------------------------- |
| @nocobase/plugin-action-bulk-edit                | ❌ Not supported                 | P1       | -                                               |
| @nocobase/plugin-action-custom-request           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-action-duplicate                | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-action-print                    | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-block-multi-step-form           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-block-tree                      | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-calendar                        | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-custom-variables                | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-embed                           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-field-china-region              | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-field-code                      | ❌ Not supported                 | P1       | -                                               |
| @nocobase/plugin-field-sort                      | ❌ Not supported                 | -        | Drag and drop sorting of records not supported  |
| @nocobase/plugin-file-previewer-office           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-gantt                           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-kanban                          | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-public-forms                    | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-text-copy                       | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-data-visualization-echarts      | ⚠️ Deprecated                  | -        | Use @nocobase/plugin-data-visualization instead |
| @nocobase/plugin-field-component-mask            | ⚠️ Deprecated                  | -        | -                                               |
| @nocobase/plugin-mobile                          | ⚠️ Deprecated                  | -        | Use @nocobase/plugin-ui-layout instead          |
| @nocobase/plugin-multi-app-manager               | ⚠️ Deprecated                  | -        | Use @nocobase/plugin-app-supervisor instead     |
| @nocobase/plugin-app-supervisor                  | 🆕 New feature                   | P0       | Coming soon                                     |
| @nocobase/plugin-ai                              | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-ai-gigachat                     | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-block-grid-card                 | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-block-list                      | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-block-markdown                  | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-flow-engine                     | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-form-drafts                     | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-multi-space                     | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-record-history                  | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-telemetry                       | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-ui-layout                       | 🆕 New feature, ❌ Not supported | P2       | Planned                                         |
| @nocobase/plugin-ui-templates                    | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-acl                             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-bulk-update              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-export                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-export-pro               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-import                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-import-pro               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-template-print           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-api-doc                         | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-api-keys                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-async-task-manager              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-audit-logger                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-audit-logs                      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth                            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-cas                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-dingtalk                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-ldap                       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-oidc                       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-saml                       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-sms                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-wecom                      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-backup-restore                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-backups                         | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-block-iframe                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-block-template                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-block-tree                      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-block-workbench                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-client                          | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-collection-fdw                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-collection-sql                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-collection-tree                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-comments                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-custom-brand                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mariadb    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mssql      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mysql      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-oracle     | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-postgres   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-kingbase            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-main                | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-manager             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-rest-api            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-visualization              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-departments                     | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-email-manager                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-environment-variables           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-error-handler                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-attachment-url            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-encryption                | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-formula                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-m2m-array                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-markdown-vditor           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-sequence                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-file-manager                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-file-storage-s3-pro             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-graph-collection-manager        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-ip-restriction                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-license                         | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-locale-tester                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-localization                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-lock-adapter-redis              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-logger                          | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-map                             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-migration-manager               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-multi-keyword-filter            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-notification-email              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-notification-in-app-message     | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-notification-manager            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-password-policy                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-pubsub-adapter-redis            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-rabbitmq          | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-redis             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-request-encryption              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-system-settings                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-telemetry-prometheus            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-theme-editor                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-two-factor-authentication       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-ui-schema-storage               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-user-data-sync                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-users                           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-verification                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-verification-totp-authenticator | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workerid-allocator-redis        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-action-trigger         | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-aggregate              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-approval               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-cc                     | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-custom-action-trigger  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-date-calculation       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-delay                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-dynamic-calculation    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-javascript             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-json-query             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-json-variable-mapping  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-loop                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-mailer                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-manual                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-notification           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-parallel               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-request                | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-request-interceptor    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-response-message       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-sql                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-subflow                | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-variable               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-webhook                | ✅ Supported                     | -        | -                                               |

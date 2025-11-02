NocoBase 1.0-alpha was released on April 28, 2024, marking the beginning of our commercial journey.
In the past year or so, we have received feedback from thousands of users, code contributions from developers around the world, and commercial orders from hundreds of companies across more than 50 countries.
We sincerely thank every user, contributor, and paying customer for your trust and support.

During the past six months, while continuously iterating and improving version 1.x, we have also spent significant time thinking, discussing, and developing the next generation of NocoBase.
Now, it’s time to officially introduce **NocoBase 2.0-alpha!**

## AI Employees

The past year has seen rapid advances in AI, with large models showing remarkable-even astonishing-capabilities across many domains.
As heavy AI users ourselves, we’ve brought AI directly into NocoBase 2.0 in the form of **AI Employees** - intelligent colleagues that work inside your system.

AI Employees in NocoBase are **not chatbots**, nor isolated agents.
They are **seamlessly integrated** into your business system, capable of understanding context and executing tasks directly.

* They appear wherever you need them - beside your tables and forms - ready to assist.
* They can summarize emails, analyze data, organize unstructured content and fill forms automatically, design data models, or even write JavaScript code.
* They automatically retrieve contextual data and page structures for intelligent task execution.
* Each has unique skills, tools, and knowledge bases.
* You can create an unlimited number of AI Employees to form your own AI team.

[Learn more about AI Employees](https://develop.v2.docs.nocobase.com/ai-employees)

[Try the Demo](https://demo.nocobase.com/new)

<video controls>
  <source src="https://static-docs.nocobase.com/Meet-Your-AI-Employee-EN.mp4" type="video/mp4">
</video>

## A Brand-New 2.0 Page System

While NocoBase has always been plugin-based, version 1.x had limitations when dealing with dynamic interactions, flexible layouts, or customized logic on the frontend.
It was difficult to achieve such requirements without significant cost.

NocoBase 2.0 introduces a **completely restructured page system** designed to support personalized and complex frontend needs efficiently.

### RUNJS

**RunJS** provides a lightweight way to extend and customize UI logic or styling - without creating plugins or modifying source code.

Within the page designer, you can write JavaScript directly to:

* Customize rendered content (fields, blocks, columns, items, etc.)
* Define custom interactions (button actions, event triggers)
* Combine with contextual data for dynamic behaviors

RunJS is supported in:

* JS block
* JS action
* JS field
* JS item
* Linkage rules
* Event flows

[Learn more about RUNJS](https://develop.v2.docs.nocobase.com/ai-employees)

![20251102213506-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251102213506-2025-11-02-21-35-08.png)

### Event Flow

In NocoBase 1.x, the linkage rule system allowed limited logic orchestration, constrained to a single block.
NocoBase 2.0 introduces **Event Flow**, a major enhancement to frontend logic configuration.

An Event Flow consists of:

* **Trigger events**, such as before render, on click, or value change
* **Trigger conditions**
* **Action steps**, such as showing notifications, refreshing target blocks, or executing JavaScript

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251031093341.png)

### Grid Layout

In version 1.x, blocks and fields used a full-width flexible drag layout, which limited precision and aesthetics.
NocoBase 2.0 introduces a **new grid layout system**, allowing every element to align with grid units for more refined control.

<video controls>
  <source src="https://static-docs.nocobase.com/z-2025-11-02-21.45.55-2025-11-02-21-47-12.mp4" type="video/mp4">
</video>

### Reusable Blocks and Modals

In 1.x, the copy/reference features for blocks were limited and prone to bugs, and entire modals couldn’t be referenced.
NocoBase 2.0 completely redefines this - enabling **flexible referencing and duplication** of both blocks and modals, dramatically reducing configuration effort.

[Learn more about Block References & Copies](https://develop.v2.docs.nocobase.com/ai-employees)
[Learn more about Modal References](https://develop.v2.docs.nocobase.com/ai-employees)

### Enhanced Block Experience

Based on user feedback, NocoBase 2.0 brings many refinements to block components.
For example, tables now support **inline editing** directly within cells - no popup needed.
More improvements are on the way.

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102215026-2025-11-02-21-50-28.png)

### Better Performance

NocoBase 2.0 delivers significantly improved frontend performance compared to 1.x.

## FlowEngine

The new page system in 2.0 is powered by **FlowEngine** - a next-generation low-code frontend engine combining **Models** and **Flows**.
It simplifies frontend logic, enhances reusability, and improves maintainability.
By leveraging Flow’s configurable nature, it brings no-code orchestration to frontend components and business logic.

Developing plugin frontends in 1.x often involved complex challenges. With FlowEngine, these are now greatly simplified.

[Learn more about FlowEngine](https://develop.v2.docs.nocobase.com/flow-engine/what-is-flow-engine)

## Multi-Application and Multi-Space

Version 1.x supported basic multi-application capability, but all apps shared a single process and could not be monitored or managed individually.
NocoBase 2.0 introduces **a completely new Multi-App and Multi-Space architecture**.

* **Multi-App Plugin** *(in development)*
  Enables dynamic creation and management of multiple standalone apps without separate deployments.
  Each app runs as an independent instance with its own database, plugins, and configuration - either in isolated or shared processes.
  The parent app can monitor and manage resource usage and status of sub-apps, ideal for multi-tenant scenarios.
* **Multi-Space Plugin**
  Allows logical isolation within a single instance - perfect for scenarios like multi-branch or multi-factory setups.
  Business logic, workflows, and configurations remain consistent, while data stays completely isolated.

![20251102220714-2025-11-02-22-07-16](https://static-docs.nocobase.com/20251102220714-2025-11-02-22-07-16.png)

[Learn more about Multi-Space](https://develop.v2.docs.nocobase.com/multi-app/multi-space)

## New Data Visualization

The 1.x chart plugin was based on Ant Design Charts and ECharts, suitable for simple cases but limited for complex, interactive, or linked visualizations.
NocoBase 2.0 introduces a **new Data Visualization Plugin** built fully on ECharts, supporting:

* Visual configuration mode
* SQL and JSON modes
* Event-driven interaction
* Multi-chart linkage and drill-down

And if SQL or JSON seems too complex - your AI Employee **Nathan** can help.

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

[Learn more about Data Visualization](https://develop.v2.docs.nocobase.com/multi-app/multi-space)

## Syncing Database Structure & Changing Field Types

In version 1.x, tables and fields could only be created through NocoBase’s Data Source Manager and field types couldn’t be changed afterward.
NocoBase 2.0 now allows:

* Synchronizing existing tables and fields from your main database
* Changing field types after creation

This means you can directly use an existing database schema as your primary data source.

![20251102222325-2025-11-02-22-23-27](https://static-docs.nocobase.com/20251102222325-2025-11-02-22-23-27.png)

## Additional Plugins

### Record History

The Record History plugin automatically tracks data changes - insertions, updates, deletions - saving snapshots and diffs for audit and rollback purposes.

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/202511011346400.png)

[Learn more about Record History](https://develop.v2.docs.nocobase.com/record-history/)

### Form Drafts

The Form Draft plugin automatically saves draft data while users fill out forms, preventing accidental loss.

### New Email Manager

Rebuilt with FlowEngine, the new Email Manager seamlessly integrates AI Employees for summarizing, analyzing, and composing emails.
It also introduces automatic draft saving and other enhancements.

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

[Learn more about Email Manager](https://develop.v2.docs.nocobase.com/email-manager/)

## Upgrading from 1.x to 2.0

Upgrading from 1.x to 2.0 is straightforward - simply follow the [official guide](https://develop.v2.docs.nocobase.com/get-started/upgrading/docker).
However, note that **NocoBase 2.0 is currently in alpha**, so expect some instability.

Thanks to NocoBase’s **decoupled architecture between UI and data**, your existing 1.x applications will remain fully intact.
When creating new pages, you can now choose between **v1** and **v2** types - select v2 to access the new NocoBase 2.0 features.

![20251102222729-2025-11-02-22-27-31](https://static-docs.nocobase.com/20251102222729-2025-11-02-22-27-31.png)

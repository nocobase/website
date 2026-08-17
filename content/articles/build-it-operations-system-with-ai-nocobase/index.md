## Introduction

A recent post in Reddit's [r/sysadmin](https://www.reddit.com/r/sysadmin/comments/1ros5qd/im_honestly_starting_to_forget_how_it_was_before/) described how one user built an ITSM system with AI over a weekend, covering both ticketing and asset management. In actual use, they found it more convenient than many products they had used before.

![Reddit1-wme36d.png](https://static-docs.nocobase.com/Reddit1-wme36d.png)

The comments also raised a different view: AI can quickly generate a Help Desk that looks mature, but that does not mean it already has the data structure, permissions, security, and extensibility required for production use.

![Reddit2-zb0k6t.png](https://static-docs.nocobase.com/Reddit2-zb0k6t.png)

In our previous article, [Enterprise IT Asset Management System Guide: From Requirements to Implementation](https://www.nocobase.com/en/blog/enterprise-it-asset-management-system-guide), we introduced a way to design an IT asset management system: let AI understand and break down business requirements, let NocoBase provide the data, permissions, and automation capabilities, and then have people review and adjust the system against real business rules. **This combines AI's efficiency in understanding requirements and generating systems with the data, permissions, security, workflows, and other foundations that enterprise applications actually need.**

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. → [Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

This time, we will take that approach further and focus more on efficiency. In about two hours, we will use AI and NocoBase to build a more complete IT operations system from scratch. It will cover IT asset inventory, device assignment and return, service catalog and service requests, device approval and delivery, maintenance management, software license management, an AI IT assistant, an operations knowledge base, and dashboards. We will also improve permissions, workflows, and data synchronization so the system can be used in production and continue evolving with business needs.

🚀 Try applications built with NocoBase + AI online and see what AI-assisted application building looks like in practice: [https://demo.nocobase.com/new](https://demo.nocobase.com/new)

All screenshots in this article come from the NocoBase online Demo. The entire system, from design to implementation, was completed by an AI Coding Agent.

## 1. Start by Designing Around the Core Business Process

You are the IT administrator at a mid-sized company. The company has both office-based and remote employees and needs to manage laptops, monitors, phones, printers, servers, network devices, and other office peripherals.

![Reddit2-y79mbx.png](https://static-docs.nocobase.com/Reddit2-y79mbx.png)

Employees regularly request new laptops, monitors, software licenses, VPN or remote-access permissions, and they also report password, MFA, device, and other IT issues. These requirements can eventually involve asset management, service requests, approvals, maintenance, software licenses, a knowledge base, permissions, and dashboards.

But there is no need to put every scenario into the first version. We will start with one of the most common workflows:

> Employee requests a laptop → Manager approves → IT selects a device and completes delivery

### Let AI Understand the Requirements First

Once the business scenario and first-stage scope are clear, give the requirements to AI so it can understand the company's IT work and design the first version around laptop requests and delivery.

You can use the following prompt:

```Plain
Please help me build an internal IT operations system in NocoBase.

The company has both office-based and remote employees and needs to manage laptops,
monitors, phones, printers, servers, network equipment, and other office peripherals.

Common IT requests include new laptop requests, monitor or peripheral requests,
software license requests, VPN / remote access, password or MFA issues,
and meeting-room equipment support.

Devices may go through registration, inventory, available for assignment, assigned to an employee,
in use, under maintenance, returned, reassigned, or retired. Employee requests may require
manager approval before IT completes delivery.

For the first stage, only build:
- Employees;
- Asset inventory;
- Device assignment and return records;
- Service catalog;
- Service requests;
- Laptop request and delivery workflow.

Maintenance, software licenses, operations manuals, reminders, and operational reporting
will be added later. Keep room for them, but do not create them yet.

Regular employees can submit and view their own requests; managers handle requests
that require approval; IT administrators maintain assets and complete device delivery.

Please return first:
1. The core data needed in the first stage;
2. How the data should be related;
3. How a laptop request should move through delivery;
4. Which pages and workflows you plan to create;
5. Which business rules still need confirmation.

Do not create anything yet. Wait for my confirmation before building.
```

### Check AI's Understanding of the Business Rules

Before AI starts creating the system, confirm that it has correctly understood these five key rules:

1. One employee can be associated with multiple devices;
2. One device has a clear current user;
3. The asset's current status and historical assignment records are stored separately;
4. After a service request is approved, the actual device still needs to be delivered;
5. When the device is delivered, the asset information and assignment record are updated together.

The rule most likely to be missed is:

> An approved service request does not mean the device has already been delivered.

For a new laptop request, approval only means the request has been accepted. IT still needs to select an actual device, assign it, update the asset status, and save the assignment record.

If AI treats “request approved” as the end of the workflow, ask it to add the IT processing and device delivery steps before creating the system.

For guidance on collaborating more effectively with an AI Agent, see: [https://docs.nocobase.com/ai-builder/ai-portal/agent-workflow](https://docs.nocobase.com/ai-builder/ai-portal/agent-workflow)

## 2. Build and Check the Core Workflow

After confirming the business rules above, let AI create the first-stage system based on the agreed design. Once it is generated, start from the laptop request workflow and verify step by step that assets, assignment records, service requests, and device delivery work together correctly.

### Check the Asset Inventory

When an employee is preparing to request a laptop, IT first needs to know what devices exist and which ones are currently available. **Start by checking the asset inventory.**

The asset inventory should at minimum record **asset ID, serial number, device category, device name, model, location, current user, warranty expiration date, and current status**.

![Assets1-xhzxsv.png](https://static-docs.nocobase.com/Assets1-xhzxsv.png)

![Assets2-pbnp9u.png](https://static-docs.nocobase.com/Assets2-pbnp9u.png)

You can verify asset status against the following flow:

> In inventory → Available → Assigned → In use → Under maintenance / Retired

Here, “Assigned” means IT has selected and allocated the device, but the employee has not formally started using it yet. After delivery is completed, the status changes to “In use.”

![Asset3-5jxmu9.gif](https://static-docs.nocobase.com/Asset3-5jxmu9.gif)

The asset inventory mainly answers three questions: **what is this device, who is using it and where, and can it still be assigned?**

Check the following points carefully:

1. Asset IDs must be unique to prevent duplicate registration;
2. Devices under maintenance or retired must not appear in the available-device list;
3. Assigned or in-use devices must have a clear current user so the same device is not assigned twice.

Also verify the employee-device relationship. One employee may use multiple devices at the same time, such as a laptop, monitor, and phone, while one device should have only one current user at a given time. The employee detail page should directly show all devices assigned to that employee.

![Assets4-l8s8bg.png](https://static-docs.nocobase.com/Assets4-l8s8bg.png)

After the first-stage system is generated, enter three test devices: one “Available,” one “In use,” and one “Under maintenance.” Then filter for “Available” devices. Only the first device should appear, confirming that the status and filtering rules work.

### Record Every Device Assignment and Return

The asset inventory records who currently uses a device, but past assignments and returns need to be stored separately. Therefore, **the system also needs a dedicated device assignment and return record linked to both the device and the employee**.

Each record should at minimum include the device, assigned employee, assignment time, return time, return condition, operator, and notes.

![returned1-qazyjm.gif](https://static-docs.nocobase.com/returned1-qazyjm.gif)

These two data types serve different purposes: the asset inventory stores the current state of the device, while assignment and return records preserve the history of each device movement.

Next, simulate a complete device lifecycle:

> Assign to Employee A → Employee A returns it → Reassign to Employee B

![returned2-bwa0li.gif](https://static-docs.nocobase.com/returned2-bwa0li.gif)

Afterward, check that:

- The current user on the asset detail page is Employee B;
- Employee A's original assignment and return history is still preserved;
- The device no longer appears in Employee A's current-device list, but does appear in Employee B's list.

![returned3-mbvdxp.png](https://static-docs.nocobase.com/returned3-mbvdxp.png)

![returned4-nyxmt3.png](https://static-docs.nocobase.com/returned4-nyxmt3.png)

## 3. Extend IT Operations Capabilities on Top of the Core Workflow

Once the laptop request and delivery workflow works end to end, the system already has the basic data for assets, service requests, approvals, and device movement. Next, give the follow-up requirements—device maintenance, software licenses, AI assistance, and operations manuals—to AI and let it extend the existing system. Afterward, test each new capability against a real business scenario.

> **NocoBase AI Builder** lets AI design, build, and continue adjusting enterprise applications from natural-language requirements: [https://docs.nocobase.com/ai-builder](https://docs.nocobase.com/ai-builder)

### A Device Breaks — Add Maintenance Management

Devices can fail after delivery. Once maintenance management is added, IT can create a maintenance record for the original device and save the problem description, date sent for repair, service provider, repair cost, maintenance status, and result.

![Maintenance management1-ctwwsd.png](https://static-docs.nocobase.com/Maintenance%20management1-ctwwsd.png)

When a device enters maintenance, the asset status must change as well:

> In use → Under maintenance → In use / Available / Retired

If the repaired device goes back to the same employee, restore its status to “In use.” If it returns to inventory, set it to “Available.” If it can no longer be used, set it to “Retired.”

After creating a test maintenance record, first verify that the linked asset automatically changes to “Under maintenance” and disappears from the available-device list so it cannot be assigned again while being repaired.

![Maintenance management2-sbyqjh.gif](https://static-docs.nocobase.com/Maintenance%20management2-sbyqjh.gif)

When maintenance is complete, separately test the three outcomes—“return to original employee,” “return to inventory,” and “retire device”—and confirm that the asset status matches the maintenance result.

### More Software Requests — Manage Software Licenses

As the number and variety of software products grow, IT needs to know how many seats have been purchased, how many are already in use, when each license renews, and the annual cost. **The system therefore also needs software license management.**

![Software licenses1-91l5of.gif](https://static-docs.nocobase.com/Software%20licenses1-91l5of.gif)

Each software record should store the vendor, total seats, used seats, renewal date, annual cost, and current status. When handling a software request, first check whether seats remain available, then update the used-seat count after activation is completed.

![Software licenses2-zquzcd.gif](https://static-docs.nocobase.com/Software%20licenses2-zquzcd.gif)

**These rules can also be handed to AI and automated through NocoBase Workflow.** For example, notify the owner and create a renewal task when a license is about to expire; if used seats exceed total seats, trigger an overage alert and let AI assist in deciding whether to expand capacity or reclaim accounts.

![Software licenses3-3ngkzc.png](https://static-docs.nocobase.com/Software%20licenses3-3ngkzc.png)

### Employees Cannot Explain the Problem Clearly — Let AI Structure the Request

Employees do not always know which service to choose, and they may not describe an issue in the format IT prefers. For example:

> After resetting my password, I cannot connect to VPN and need access before today's customer call.

![AI1-hfhx6x.png](https://static-docs.nocobase.com/AI1-hfhx6x.png)

Employees can describe the issue in natural language and let AI turn it into a request title, service type, priority, and problem description. The employee can review or edit the result before formally submitting the request.

![AI2-y5vyfx.png](https://static-docs.nocobase.com/AI2-y5vyfx.png)

Use the example above as a test and confirm that the service type, priority, and description produced by AI can still be edited and submitted normally. This way, employees can describe issues in their own words while IT still receives a structured request that can be categorized and processed.

### Repeated Problems — Build an Operations Knowledge Base

Issues involving VPN, MFA, new-laptop setup, and printer failures occur repeatedly. Verified solutions can be organized into operations manuals that record purpose, prerequisites, procedures, validation steps, and exception handling.

![Operation Manual-bcp9qo.gif](https://static-docs.nocobase.com/Operation%20Manual-bcp9qo.gif)

As the knowledge base grows, AI can also help IT find the relevant procedure based on the content of a request.

## 4. Validate the System with a Complete Workflow

### Check Whether Everything Stays in Sync

By this point, the system contains asset, service request, assignment, maintenance, and software-license data. **The operations dashboard can summarize** available devices, devices in use, pending requests, devices under maintenance, license utilization, licenses approaching renewal, and software costs.

![Data dashboard-y7igov.gif](https://static-docs.nocobase.com/Data%20dashboard-y7igov.gif)

The dashboard data comes directly from the asset, service request, maintenance, and license records built earlier.

Change a device status, complete a service request, or add a maintenance record, then confirm that the related dashboard metrics update accordingly. Clicking a metric should also allow users to view the matching details.

### Validate the Full Process from Request to Return

Finally, return to the employee used in the earlier tests and run through the whole process again:

> Request laptop → AI-assisted form filling → Manager approval → IT selects device → Create assignment record → Employee starts using device → Maintenance / Return → Asset status updates → Operations dashboard updates

![Data dashboard-5c3w3l.gif](https://static-docs.nocobase.com/Data%20dashboard-5c3w3l.gif)

After completing the process, verify these points:

1. Are the current user and asset status accurate?
2. Are assignment, return, and maintenance histories fully preserved?
3. Can the service request be traced back to the actual delivered device?
4. Do employee, manager, and IT viewing and operation permissions match the design?
5. Do status updates, reminders, and other automations execute correctly?
6. Can AI-structured requests be edited and submitted normally?
7. Do the related dashboard metrics update with business-state changes?

Once these data and workflow behaviors match the business rules defined earlier, the system can first be released to a small group of users and then adjusted based on real feedback.

## Conclusion

If you already have a clear business scenario, start with the workflow your team knows best. Describe the real requirements, team roles, and handling process directly to AI, then let NocoBase provide the data, permissions, and other enterprise application foundations. Build, check, and adjust as you go. Get the core business process working first, then expand the system gradually based on actual use.

If this article was useful, feel free to share it with others who are exploring how to use AI to build internal enterprise systems.

**Related reading**:

* **[NocoBase vs Baserow: Flexible Databases vs Enterprise Systems](https://www.nocobase.com/en/blog/nocobase-vs-baserow)**
* **[How to Build a Production-Ready CRM with AI and NocoBase](https://www.nocobase.com/en/blog/build-production-ready-crm-with-ai-and-nocobase)**
* **[How to Design an IT Asset Management System: Data Model, Lifecycle, and Workflows](https://www.nocobase.com/en/blog/enterprise-it-asset-management-system-guide)**
* **[How to Choose a Smartsheet Alternative: 7 Tools Compared](https://www.nocobase.com/en/blog/best-smartsheet-alternatives)**
* **[5 Open-Source AI No-Code Tools for Complex Relational Data Models](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-complex-relational-models)**
* **[What Is AI No-Code? A Practical Guide to No-Code Platforms in the AI Era](https://www.nocobase.com/en/blog/what-is-ai-no-code)**
* **[9 Open-Source AI No-Code Tools on GitHub Worth Watching](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-github-9)**
* **[14 Open Source AI Agent Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/github-open-source-ai-agent-tools-16)**
* **[Top 8 Open Source AI Assistant Tools by GitHub Stars](https://www.nocobase.com/en/blog/top-open-source-ai-assistant-tools-github-stars)**
* **[6 Open Source Tools to Use with WorkBuddy](https://www.nocobase.com/en/blog/workbuddy-open-source-tools)**
* **[Top 6 Open Source AI Tools by GitHub Stars for Stronger AI Agents](https://www.nocobase.com/en/blog/6-github-top-open-source-ai-tools-for-ai-agents)**
* **[5 Open-Source Internal Tools to Use with Hermes Agent](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)**
* **[OpenClaw and 5 Open-Source Tools for Monitoring Business Workflows](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)**

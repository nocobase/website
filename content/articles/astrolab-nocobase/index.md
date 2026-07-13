## Introduction

[Astrolab](https://astrolab.co/) is one of NocoBase's partners in Europe, Africa, and the Middle East. The company specialises in technology strategy, intelligent automation, AI, and digital solution delivery.

![Astrolab-1u94vq.png](https://static-docs.nocobase.com/Astrolab-1u94vq.png)

Using NocoBase, Astrolab delivered three production-grade digital public-service platforms for one of France's 13 metropolitan regional governments.

The platforms were delivered under a unified framework approach. They were not isolated tools, but a set of digital public-service systems built on a shared modular architecture. Together, they helped the client move critical administrative processes from paper forms, spreadsheets, and fragmented email workflows to flexible, controlled, and traceable digital services.

## Challenge

A major French metropolitan regional government manages environmental policy, education, economic development, transport, and territorial planning for several million inhabitants. It faced a recurring operational challenge: **multiple critical administrative processes were still handled through paper forms, spreadsheets, and fragmented email workflows.**

Three high-priority public services required urgent digital transformation.

**Environmental Impact Assessment Platform (GIE)**

Companies applying for regional economic-development aid were required to complete a multi-dimensional environmental self-assessment covering carbon impact, energy usage, water consumption, waste management, land usage, and ecological indicators.

The legacy workflow relied heavily on manual validation and duplicate data entry. This created delays, inconsistent evaluations, and limited operational visibility.

**Fleet Vehicle Pooling Management Platform (SID)**

The regional administration operated a shared fleet across multiple departments using manual reservation workflows and spreadsheet tracking. This resulted in reservation conflicts, low vehicle utilisation, poor visibility on fleet performance, uncontrolled fuel and mileage reporting, and limited operational governance.

**Annual Boarding-School Census Platform (EIT)**

The regional education department conducted an annual census across more than 190 public and private institutions.

The previous email-and-paper process led to low response rates, significant manual consolidation work, delayed reporting cycles, and inconsistent or incomplete datasets, directly impacting regional planning.

## Astrolab's Solution

Astrolab delivered three production-grade digital public-service platforms under a unified framework approach, designed around a shared modular architecture and low-code extensibility model powered by NocoBase.

The platforms shared a common foundation including:

* Unified authentication and role management
* Shared workflow orchestration layer
* Centralised audit and logging infrastructure
* Notification and reminder engine
* Dynamic form and data-model management
* API integration framework
* Modular low-code administration capabilities enabling rapid evolution by functional teams

This approach avoided **rebuilding the same common capabilities for each system**. Instead, the delivery team could extend NocoBase's existing capabilities and focus on business processes, data rules, permission boundaries, and system integrations.

The architecture was intentionally designed to accelerate delivery cycles while maintaining enterprise-grade governance, security, scalability, and maintainability. It also allowed functional teams to continue evolving forms, workflows, and management rules after launch.

All deliverables complied with:

* French **DINUM** digital-service standards
* **GDPR** requirements
* French **RGAA** accessibility standards, equivalent to WCAG
* **ANSSI-aligned** security baselines for public-sector systems
* Data hosted on sovereign infrastructure within French territory

### Platform 1: Environmental Impact Assessment Platform (GIE)

The Environmental Impact Assessment Platform supports the environmental self-assessment workflow for companies applying for regional economic-development aid.

Astrolab used NocoBase to build **dynamic adaptive survey workflows**. The questionnaire adapts to company size and industry, while SIRET-based company-data auto-population retrieves company information through French public-service APIs, reducing duplicate data entry and manual verification.

After submission, the platform supports multi-role submission and validation routing. The workflow is connected to regional grant-processing systems, so validated assessment results can be routed into the financial-aid process.

The platform also provides immutable audit history, save-and-resume functionality, and low-code administrative interfaces. Functional teams can rapidly evolve forms and workflows without requiring full redevelopment.

![GIE.png](https://static-docs.nocobase.com/whiteboard_exported_image%20(27)-6uds26.png)

### Platform 2: Fleet Vehicle Pooling Management Platform (SID)

The Fleet Vehicle Pooling Management Platform manages shared vehicle usage across multiple departments of the regional administration.

Astrolab transformed a process previously based on manual reservations and spreadsheet tracking into a real-time vehicle reservation and approval system. Drivers can view available vehicles and submit reservations, while managers and administrators handle approval, notifications, and operational oversight.

The platform provides automated conflict detection, mileage and fuel-consumption tracking, department-level reporting dashboards, Excel and PDF exports, and a mobile-responsive booking experience.

It was built using the modular workflow and data-management capabilities provided through the NocoBase-based architecture. This enables administrators to quickly adjust vehicle rules, approval flows, and reporting logic as operational needs change.

### Platform 3: Annual Boarding-School Census Platform (EIT)

The Annual Boarding-School Census Platform supports the regional education department's yearly census across public and private institutions.

Astrolab used NocoBase to transform the process into an online census platform with dual-stream survey workflows for public and private institutions, smart branching logic, pre-filled historical data, automated reminder notifications, and real-time completion dashboards.

Administrators can monitor progress, validate submitted data through centralised data validation workflows, and use executive reporting and analytics integration to support regional education planning.

Because census questionnaires and reporting structures may change every year, the low-code architecture enables rapid yearly adjustments without major redevelopment cycles.

## Results

After the three platforms entered production, the client achieved significant improvements in operational efficiency, data quality, administrative visibility, governance, and compliance.

The most direct improvement came from the Environmental Impact Assessment Platform. Manual environmental-review cycles were reduced from multiple days to **less than 24 hours median processing time**. Through **12+ live integrations** with public-sector registries and open-data systems, the platform can automatically populate **more than 95% of company profile information**, eliminating duplicate data entry and significantly reducing manual verification workload. Assessment results are also automatically routed into financial-aid processing systems.

In the Fleet Vehicle Pooling Management Platform, real-time reservations, automated conflict detection, and department-level reporting improved daily operations. **Reservation conflicts were reduced by approximately 80%, and vehicle utilisation improved by approximately 25%.** The platform also provides full operational visibility on mileage and fuel consumption by department.

The Annual Boarding-School Census Platform also improved the data collection process. During the first operational cycle, **the response rate increased to more than 90%, and data consolidation was reduced from several weeks to less than 48 hours.** The improved completeness and consistency of the data created a stronger foundation for educational planning.

Beyond efficiency gains, the three platforms strengthened governance and compliance across all targeted processes. The systems provide full traceability across workflows, centralised audit logging, and compliance reporting. There were **zero reported data-breach incidents**, annual penetration testing was successfully completed, and full GDPR compliance was validated by the client governance teams.

In terms of reliability, the platforms achieved **measured service availability exceeding 99.8% across all platforms over a 24-month period**. Under active support and evolution contracts, Astrolab maintained a quarterly feature-release cadence, and all three services continued to be used in production.

## Technical Architecture Overview

Astrolab used NocoBase as the shared foundation for all three platforms, providing core capabilities such as data models, dynamic forms, access control, workflows, audit logs, and administration interfaces.

Around this foundation, the team integrated React.js, NestJS, PostgreSQL, PostGIS, Power BI, custom reporting, government APIs, Docker, CI/CD, and private cloud deployment to meet public-sector production requirements.

The architecture supports data sovereignty, RGPD/GDPR compliance, RBAC, AES-256 encryption, immutable audit history, and zero-downtime deployment, enabling the three platforms to run reliably over the long term.

During delivery, Astrolab also explored AI-assisted development with Claude for custom plugin code. With NocoBase 2.1, AI Agents can now work more naturally with NocoBase documentation and extension mechanisms to build plugins, JS Blocks, and complex business logic.

![nocobase-5gqmlj.png](https://static-docs.nocobase.com/nocobase-5gqmlj.png)

## Summary

Astrolab used NocoBase to reuse foundational capabilities across multiple public-service systems, then extended each platform for its specific operational scenario. The result was a set of production-grade systems designed for long-term use, continuous evolution, and public-sector governance requirements.

This is also the kind of system development approach that deserves more attention in the AI era.

AI can accelerate code generation and development, but real business systems cannot rely on one-time generation alone. They need stable data models, clear permission boundaries, traceable workflows, auditable history, and an architecture that can keep evolving.

This is where NocoBase delivers its value: **it allows both AI and delivery teams to avoid starting from scratch, and instead build, extend, and maintain real applications on a platform that already provides the foundational capabilities required by business systems.**

**More Customer Stories:**

* [How to Deliver a Complex OA System in 3 Months with NocoBase](https://www.nocobase.com/en/blog/deliver-complex-oa-system-nocobase-3-months)
* [Case Study: Digitizing Medical Manufacturing Workflows with NocoBase](https://www.nocobase.com/en/blog/medical-device-manufacturer-builds-self-hosted-management-system-with-nocobase)
* [Software Vendor Boosts Delivery Efficiency by 70% with NocoBase](https://www.nocobase.com/en/blog/software-vendor-boosts-delivery-efficiency-with-nocobase)
* [Community Spotlight: Building a Real-World ERP with NocoBase](https://www.nocobase.com/en/blog/an-erp-built-with-nocobase)
* [Inside: How an 8-Person Team Delivers at Enterprise Speed](https://www.nocobase.com/en/blog/shenzhen-chuanglianyun-tech-development-methodology)
* [Built an AI Multimodal R&D Platform in Days — with NocoBase](https://www.nocobase.com/en/blog/ai-multimodal-platform)
* [NocoBase in Russia: Multi-Scenario Digital Solutions in Action](https://www.nocobase.com/en/blog/nocobase-in-russia)
* [NocoBase Enters German University Classrooms](https://www.nocobase.com/en/blog/university-course)

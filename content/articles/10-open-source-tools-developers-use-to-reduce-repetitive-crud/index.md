📝 Note: This article was last updated on Jan. 21, 2026. We regularly update the information to ensure you have the latest insights! 😊

## Introduction

All business systems inevitably involve CRUD.

If you’ve worked on CRM systems, internal management systems, approval workflows, or admin dashboards, you’re probably familiar with this experience: every project starts from scratch, and the same set of CRUD logic gets implemented all over again.

In enterprise internal environments, different departments, projects, and stages often maintain highly similar systems that remain isolated from one another. The more systems a company has, the more repetitive CRUD accumulates, along with rising maintenance costs.

This problem becomes even more apparent in outsourcing and system integration scenarios. Projects may look similar on the surface but are rarely reusable in practice. Clients often perceive changes as minor, while delivery teams end up paying a much higher price in implementation and maintenance. In many cases, every new client effectively triggers a brand-new CRUD lifecycle.

In this article, we’ll look at different approaches developers use to reduce repetitive CRUD, and introduce open source tools that fit each approach.

💡 Dive deep: [Top 8 Open-Source CRUD Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/crud-projects)

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. →[ Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

## Ways to Reduce Repetitive CRUD

Repetitive CRUD can be addressed at different levels of abstraction.

**1. Write CRUD Faster**

This is the most common approach. Teams use scaffolding, code generation, or template projects to quickly build basic create, read, update, and delete functionality, reducing the time spent writing boilerplate code by hand.

**2. Reduce Repetition in Backend and Admin Interfaces**

Some teams go a step further by extracting common backend capabilities for reuse, such as generic lists, forms, permission management, and basic configuration interfaces. This approach focuses on reducing repetitive work in interfaces and management features, while data structures and business rules are still defined in code. Each project maintains its own models, but the backend implementation becomes more standardized.

**3. Reduce the Cost of Differences Between Projects**

When repetition starts to appear at the level of requirement structure, simply reusing backend code is no longer enough. At this point, some solutions choose to extract fields, relationships, permissions, and workflows out of code, and describe them using configuration or data models. In this model, differences between projects are primarily reflected in model configuration, rather than code structure.

**4. Avoid Repeatedly Delivering Similar Systems**

At this level, data models, permissions, and extension mechanisms evolve around a shared core structure. New requirements feel more like extending an existing system than delivering a new one from scratch. This approach requires higher upfront investment, but it addresses the most fundamental question: why do similar systems always need to be rebuilt again and again?

## Tools by Approach

Below are tools that exemplify each of the four approaches to reducing repetitive CRUD. Rather than a ranked list, they represent different trade-offs at different levels. The right choice depends on your project’s scope, constraints, and long-term goals.

Let’s begin.

## Treating CRUD as a Long-Term System Capability

#### NocoBase

Website: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars: 21k

NocoBase is an open-source, AI-driven no-code/low-code development platform that helps transform enterprise CRUD capabilities from one-off implementations into reusable system capabilities.

By combining data model–driven design with built-in AI assistance, it enables business users and developers to collaboratively build complex business systems while reducing repetitive work, without having to write CRUD code from scratch each time.

![NocoBase1.PNG](https://static-docs.nocobase.com/NocoBase1-w8gcmp.PNG)

**Core capabilities in this approach include:**

* **Data model–driven CRUD**

Define tables, fields, and relationships through a visual interface, and the system automatically generates create, read, update, and delete interfaces and APIs. NocoBase supports direct connections to PostgreSQL, MySQL, and MariaDB, allowing teams to work with existing databases without migrating or reshaping their data.

![NocoBase2.PNG](https://static-docs.nocobase.com/NocoBase2-qica0c.PNG)

* **Configurable frontend interfaces**

Forms, validations, dynamic visibility, and field linkage rules can be configured instead of hard-coded, reducing repeated frontend work when business logic changes.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-f78boi.png)

* **Advanced querying and list views**

Built-in block types support filtering, sorting, pagination, exports, and other common data operations, making complex data views configurable rather than custom-built.

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-uznhdh.png)

* **Fine-grained permission control**

Permissions can be defined at the role, field, and row level, ensuring that CRUD access rules evolve together with the data model.

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-qegojj.png)

* **Workflow integration**

CRUD operations can be embedded into business processes such as approvals, state transitions, and notifications, instead of remaining isolated data actions.

![NocoBase6.png](https://static-docs.nocobase.com/NocoBase6-w400bs.png)

* **Plugin-based extensibility**

When custom logic is required, it can be implemented once as a plugin and reused across multiple systems, avoiding project-specific forks.

**Typical use cases:** Enterprise internal systems that require long-term maintenance, multiple similar projects with ongoing changes, and teams that want non-technical users to participate in system configuration.

#### Odoo

Website: [https://www.odoo.com/](https://www.odoo.com/)

GitHub: [https://github.com/odoo/odoo](https://github.com/odoo/odoo)

GitHub Stars: 48.1k

Odoo addresses repetitive CRUD from a different angle: **standardization through a unified business platform**. Instead of building systems project by project, Odoo provides a comprehensive ERP framework where all applications share the same data model, permission system, and interaction patterns.

From CRM and inventory to accounting and HR, CRUD operations are predefined within a consistent structure, reducing duplication across business domains.

![Odoo.png](https://static-docs.nocobase.com/Odoo-haoe9b.png)

**Key characteristics of this approach include:**

* **Unified CRUD framework**

All modules are built on the same ORM and view system. Once a data model is defined, list, form, and search views are generated automatically.

* **Modular reuse of business logic**

Each module represents a complete CRUD application that can be installed, combined, or extended, minimizing redevelopment when new requirements arise.

* **Built-in data integration**

Since all modules share the same database, CRUD operations naturally link related data across domains, reducing the need for custom integration logic.

* **Automation and rule-based behavior**

Business rules and automation actions can be triggered on data creation or updates, extending CRUD behavior without rewriting core logic.

**Typical use cases:** Small and medium enterprises seeking integrated, standardized business management systems, and teams that prefer out-of-the-box workflows over deep customization.

## Turning CRUD from Code into Configuration

This category focuses on a common idea: instead of writing and maintaining CRUD logic in application code, teams **define data structure, permissions, and behavior declaratively**, and let the platform generate and enforce CRUD consistently.

### Directus

Website: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Stars: 33.8k

Directus turns existing SQL databases into configurable backend systems. Rather than generating application code, it layers a **configuration-driven CRUD and permission system** on top of your database, exposing APIs and admin interfaces that stay in sync with the underlying schema.

In this model, CRUD behavior is no longer scattered across services and controllers. It is defined once, declaratively, and applied consistently.

![Directus.png](https://static-docs.nocobase.com/Directus-1k9u7k.png)

**Key capabilities in this approach:**

* **Automatic CRUD API generation**

After connecting to a database, Directus introspects table structures and generates standard CRUD APIs for each table, supporting both REST and GraphQL. Frontend applications can consume these APIs directly without implementing backend logic.

* **Visual data model management**

Tables, fields, and relationships can be managed through a visual interface. Schema changes are applied directly to the database and immediately reflected in APIs and admin views, without manual migration scripts.

* **Declarative permission control**

CRUD permissions are defined through configuration, down to field-level and row-level rules. The same permission model is enforced across APIs and management interfaces.

* **Instantly usable admin backend**

List and form views are generated automatically for each table, with built-in filtering, sorting, and pagination. This makes Directus suitable for internal tools, admin panels, and rapid prototypes.

**Typical use cases:** Existing databases that need a unified API and permission layer, teams aiming to separate business configuration from application code, and projects that require quick admin interfaces without building a backend from scratch.

### Hasura

Website: [https://hasura.io/](https://hasura.io/)

GitHub: [https://github.com/hasura/graphql-engine](https://github.com/hasura/graphql-engine)

GitHub Stars: 31.9k

Hasura approaches the same problem from a **GraphQL-first perspective**. Instead of building REST endpoints or backend services, teams connect Hasura to an existing database and expose CRUD operations through a single, high-performance GraphQL API.

Here, CRUD logic is expressed as **query structure and permission rules**, not application code.

![Hasura.png](https://static-docs.nocobase.com/Hasura-f48vc6.png)

**Key characteristics of this approach:**

* **Instant GraphQL CRUD APIs**

Once connected to a database, Hasura automatically generates GraphQL queries and mutations for create, read, update, and delete operations on every table.

* **Powerful query composition**

Filtering, pagination, aggregation, and nested relationship queries can be composed in a single GraphQL request, reducing the need for custom endpoints and backend orchestration.

* **Real-time subscriptions**

Based on database change capture, Hasura can push updates to clients in real time when CRUD operations occur, without manually implementing WebSocket infrastructure.

* **Remote schema federation**

CRUD APIs generated by Hasura can be combined with other GraphQL services into a unified API layer, making it suitable as a BFF or API gateway in microservice architectures.

* **Event triggers**

Database-level CRUD events can trigger webhooks, enabling asynchronous business logic such as notifications, synchronization, or post-processing.

**Typical use cases:**

Applications that rely heavily on GraphQL, frontend-driven data access patterns, and teams building BFF layers or data-centric services without maintaining custom backend code.

### Supabase

Website: [https://supabase.com/](https://supabase.com/)

GitHub: [https://github.com/supabase/supabase](https://github.com/supabase/supabase)

GitHub Stars: 95.4k

Supabase packages configuration-driven CRUD into a **full backend platform**. Built on PostgreSQL, it combines database, APIs, authentication, real-time features, and storage into a single system where CRUD capabilities emerge automatically from schema and policy definitions.

In this approach, CRUD behavior is pushed as close to the database as possible.

![Supabase.png](https://static-docs.nocobase.com/Supabase-93lygj.png)

**Key characteristics include:**

* **Automatically generated CRUD APIs**

Once tables are defined, Supabase exposes RESTful CRUD APIs and client SDKs for multiple languages, allowing applications to interact with data using minimal code.

* **Row-level security (RLS)**

CRUD permissions are enforced at the database level using PostgreSQL’s native RLS policies. Authorization logic runs inside the database and cannot be bypassed by the application layer.

* **Real-time data synchronization**

Using PostgreSQL logical replication, Supabase can broadcast insert, update, and delete events to subscribed clients automatically.

* **Built-in authentication**

User authentication is integrated with RLS policies, making it straightforward to implement per-user or multi-tenant CRUD access patterns.

* **Visual table management**

Tables, relationships, and data can be managed through a web interface, lowering the barrier for teams that want database-driven development without heavy SQL usage.

**Typical use cases:** SaaS products that need fast iteration, startups aiming to minimize backend setup, and applications that benefit from real-time data and integrated authentication.

## Reducing Repetition in Backend and Admin Interfaces

This category focuses on **reducing repetitive work in backend and admin interfaces**, rather than redefining how data models or business logic are structured.

CRUD logic still lives in code, but the cost of building and maintaining management UIs is significantly reduced.

### Appsmith

Website: [https://appsmith.com/](https://appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Stars: 38.8k

Appsmith helps developers build CRUD interfaces quickly through a visual, component-based approach. It sits on top of existing data sources and backend logic, focusing on **speeding up admin and internal tool development** rather than changing how systems are modeled.

Compared to tools like Retool, Appsmith is fully open-source and self-hostable, making it suitable for teams with strict data security or deployment requirements.

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-6js1ku.png)

**Key characteristics of this approach:**

* **Visual construction of CRUD interfaces**

Tables, forms, buttons, and charts can be assembled through drag-and-drop. Common CRUD interactions such as inline editing, batch operations, multi-step forms, and file uploads are supported out of the box.

* **Multiple data source integration**

Appsmith can connect to SQL and NoSQL databases, REST and GraphQL APIs, and various SaaS services, allowing a single interface to orchestrate CRUD operations across different systems.

* **JavaScript-based logic extension**

Custom JavaScript can be added to component actions for validation, conditional logic, error handling, and navigation, enabling flexible CRUD behavior without building a full backend UI layer.

* **Layout and theming customization**

Interfaces support responsive layouts and theme customization, making it easier to align internal tools with company branding and usability standards.

* **API exposure**

Built applications can expose actions as APIs, turning manually operated CRUD workflows into callable services when needed.

**Typical use cases:**

Teams building customized internal backends, open-source–first projects that require full control over deployment, organizations with frequently changing internal tools, and environments with high data security requirements.

### AdminJS

Website: [https://adminjs.co/](https://adminjs.co/)

GitHub: [https://github.com/softwarebrothers/adminjs](https://github.com/softwarebrothers/adminjs)

GitHub Stars: 8.9k

AdminJS takes a more **code-centric but automation-focused** approach. Instead of visually assembling interfaces, it generates complete admin backends directly from existing backend models in Node.js applications.

Here, the goal is not to redesign CRUD flows, but to **avoid writing admin interfaces altogether**.

![AdminJS.png](https://static-docs.nocobase.com/AdminJS-csg1n8.png)

**Key characteristics of this approach:**

* **Automatic CRUD interface generation**

Given data model definitions such as TypeORM entities or Prisma schemas, AdminJS generates list views, forms, filters, pagination, and delete actions automatically, without frontend development.

* **Configurable customization layer**

Developers can adjust field visibility, form layouts, validation rules, and actions through configuration, and introduce custom components when necessary.

* **Integrated permission control**

Role-based access control can be defined per resource, with permission logic expressed as functions, allowing dynamic decisions at runtime.

* **Minimal integration cost**

AdminJS can be added to existing Express, Hapi, or NestJS applications with minimal code changes, making it a practical choice for retrofitting admin panels onto mature systems.

**Typical use cases:** Node.js projects with existing backends, teams needing to add management interfaces quickly, and scenarios where automatic generation is preferred over building custom admin UIs.

## Writing CRUD Faster

This category focuses on **accelerating CRUD implementation through code generation**.

CRUD logic is still written and maintained as application code, but scaffolding tools significantly reduce the amount of boilerplate developers need to write by hand.

### Ruby on Rails — Rails Generators

Website: [https://rubyonrails.org/](https://rubyonrails.org/)

GitHub: [https://github.com/rails/rails](https://github.com/rails/rails)

GitHub Stars: 58k

Rails generators are built-in code generation tools that embody Rails’ “convention over configuration” philosophy. By defining data models, developers can generate a complete set of CRUD code with a single command, covering backend logic, database schema, routing, and views.

In this approach, CRUD is still implemented as code, but **the initial setup cost is dramatically reduced**.

![Rails Generators.png](https://static-docs.nocobase.com/Rails%20Generators-cz4prn.png)

**Key characteristics of this approach:**

* **Scaffold-based CRUD generation**

A single command such as `rails generate scaffold Post title:string body:text` generates models, database migrations, controllers with standard CRUD actions, views for listing and editing data, and route definitions.

* **Resource-based routing**

Declaring `resources :posts` automatically creates all standard CRUD routes without manual configuration.

* **Built-in parameter handling**

Strong Parameters enforce explicit field whitelisting for create and update operations, reducing repetitive validation code while improving security.

* **Test integration by default**

Generated scaffolds include basic test files for CRUD operations, encouraging consistent testing practices from the start.

**Typical use cases:**

Teams using the Ruby on Rails stack, projects that need to launch CRUD features quickly, and developers who value convention-driven development and consistent code structure.

### JHipster

Website: [https://www.jhipster.tech/](https://www.jhipster.tech/)

GitHub: [https://github.com/jhipster/generator-jhipster](https://github.com/jhipster/generator-jhipster)

GitHub Stars: 22.3k

JHipster brings the same idea of scaffolding-driven CRUD acceleration to the Java and Spring Boot ecosystem. It generates production-ready applications that include entities, CRUD APIs, security configuration, and frontend interfaces based on predefined standards.

Here, CRUD is accelerated not just by code generation, but by **pre-assembling a full enterprise-grade technology stack**.

![JHipster.png](https://static-docs.nocobase.com/JHipster-3ruve9.png)

**Key characteristics of this approach:**

* **Entity-driven CRUD generation**

Defining entities and fields results in generated JPA entities, repositories, services, REST controllers, and corresponding frontend pages.

* **End-to-end stack integration**

Backend components are built on Spring Boot, Spring Data, and Spring Security, while frontend options include Angular, React, or Vue, all wired together by default.

* **Built-in security model**

Generated CRUD endpoints require authentication by default, with role-based access control configurable through annotations and reflected automatically in frontend behavior.

* **Microservices-ready scaffolding**

Applications can be generated as monoliths or microservices, with infrastructure components such as gateways, service discovery, and configuration services included.

**Typical use cases:** Enterprise Java projects, teams that need standardized project structures, and organizations that want frontend and backend CRUD generation aligned from day one.

### Yeoman

Website: [https://yeoman.io/](https://yeoman.io/)

GitHub: [https://github.com/yeoman/yeoman](https://github.com/yeoman/yeoman)

GitHub Stars: 10.1k

Yeoman is a more general scaffolding framework rather than a CRUD generator itself. It provides the foundation for running and composing Generators, allowing teams to codify how new CRUD projects are initialized across different stacks.

Its value lies in **standardizing project setup**, not in redefining CRUD behavior.

![Yeoman.png](https://static-docs.nocobase.com/Yeoman-n8kalu.png)

**Key characteristics of this approach:**

* **Interactive project scaffolding**

Generators collect configuration through prompts and generate project structures accordingly, covering stack choices, tooling, and dependencies.

* **Extensive generator ecosystem**

Community generators exist for a wide range of CRUD scenarios, including Node.js backends, frontend applications, and full-stack setups. JHipster itself is built on Yeoman.

* **Custom generator support**

Teams can encapsulate their preferred project structure, dependencies, and conventions into custom generators, ensuring consistency across projects.

* **Composable and modular design**

Generators can build on top of one another, enabling reuse of common CRUD scaffolds with business-specific extensions.

**Typical use cases:** Organizations managing multiple technology stacks, teams aiming to unify project initialization, and environments where consistent CRUD project structure matters more than runtime flexibility.

## A Final Note

Reducing repetitive CRUD is ultimately about building reuse at different levels.

From scaffolding and code generation, to configuration-driven platforms and system-level architecture, each approach is effective for certain problems—and limited outside its scope.

Before choosing a tool, it’s worth asking yourself three practical questions:

1. Will this problem show up again in future projects?
2. Is it better to invest more effort upfront, or keep rewriting the same logic later?
3. When the system grows from 10 tables to 100 tables, will this approach still hold up?

Tools are only the entry point. The real dividing line for long-term efficiency is whether you’re building a system capability that can evolve with changing requirements, instead of being rebuilt each time they change.

❤️If you found this article useful, feel free to share it with others who may be facing similar challenges.

Note: This article was written with AI assistance, with human review and additions for viewpoints, data, and examples.

**Related reading:**

* [Top 12 Open-source AI Workflows Projects with the Most GitHub Stars ](https://www.nocobase.com/en/blog/top-12-ai-workflows-projects-with-the-most-github-stars)
* [6 Open-Source No-Code & Low-Code Tools for Software Agencies](https://www.nocobase.com/en/blog/6-open-source-no-code-low-code-tools-for-software-agencies)
* [Top 10 Open-source AI CRM Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/top-10-open-source-ai-crm-projects-with-the-most-github-stars)
* [How to Quickly Build a Real System to Replace Excel: A Complete Guide](https://www.nocobase.com/en/blog/how-to-quickly-build-a-real-system-to-replace-excel)
* [Top 5 Open-Source AI Internal Tools on GitHub](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
* [The 8 Best Google Sheets Alternatives (Specs & Pricing)](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6 Open-Source No/Low-Code Tools for Building PoCs](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [A Developer’s Technical Decision Guide to No-Code and Low-Code (2026)](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [6 In-Depth Comparison of RBAC in Enterprise-Grade No-Code/Low-Code Platforms](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [14 AI-Powered Low-Code Platforms on GitHub Worth Watching](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)

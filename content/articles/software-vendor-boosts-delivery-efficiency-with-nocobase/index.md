## Introduction

This case highlights how NocoBase enhances large enterprise software architectures. Even teams with strong internal development capabilities find that a lightweight, open-source no-code/low-code layer is often the most effective way to handle long-tail customization.

## Industry Context：Petrochemical Digitalization

Digital transformation in the petrochemical sector is defined by one thing: complexity. Processes vary widely, standards are hard to enforce, and business requirements shift constantly.

Factories differ in process routes, equipment scale, organizational models, and safety systems. Even for something as basic as an inspection workflow or a hazard-correction procedure, each enterprise executes it in its own way.

![image.png](https://static-docs.nocobase.com/image-x0wy1r.png)


And in reality, this challenge extends far beyond petrochemicals. Most B2B software vendors encounter the same issues when serving diverse customer environments.

## Challenges

This technology firm (kept anonymous at the client's request) has been serving the petrochemical sector for years.

With strong in-house development and a customer base of hundreds of major petrochemical enterprises worldwide, they are considered a leader in industrial digitalization. They also maintain their own low-code engine, mainly used for workflows and form-driven scenarios.

Through ongoing project delivery, the team realized these challenges were not unique to petrochemicals but common across most B2B software vendors.

1. ### Customization has become unavoidable

Even the best-designed product cannot satisfy every requirement.

In petrochemicals, the differences are even sharper: safety management, hazard workflows, contractor oversight, and work-permit approvals vary significantly across enterprises. As a result, customers frequently request tweaks or fully customized features.

If these needs cannot be met, vendors risk losing the deal.

But adding customization to the core product clutters the codebase and undermines version stability, while building one-off solutions is costly and hard to maintain.

2. ### Limits of their internal low-code platform

They have a clear understanding of what their own low-code engine can and cannot do. It works well for basic workflow and form scenarios, but falls short when advanced data processing or highly flexible interactions are required.

3. ### Fragmented systems and high integration costs

Petrochemical enterprises run numerous systems. Safety & environment, equipment, inspection, DCS, video, and more. Data standards differ, APIs are inconsistent, and connecting these systems often costs far more than building applications themselves.

4. ### R&D capacity spread thin

Project-based delivery and constant patch requests consume valuable development time, making it hard for the team to focus on building core product capabilities.

## Selecting a Better Platform

As project demands grew and their internal low-code engine hit its limits, the team began a systematic evaluation of available low-code platforms. They were looking for a solution that could:

* Operate independently from their core product
* Handle complex, highly variable business scenarios
* Support cross-system data integration
* Reduce front-end and back-end collaboration costs
* Scale sustainably over the long term

After several rounds of testing and comparison, they chose NocoBase.

The key reasons were:

1. **Open-source architecture with full control**

For B2B software vendors, having full ownership of the stack is essential. As requirements evolve, they can modify or extend NocoBase at the code level without being constrained by the platform.

2. **Native support for multiple data sources**

Petrochemical enterprises use many systems with fragmented data. With NocoBase, they can unify external data into a single application layer, enabling consolidated business views and end-to-end workflows.

3. **A robust plugin ecosystem for clean and scalable extensions**

NocoBase’s plugin system allows them to build isolated modules for complex requirements without touching the core product. These extensions follow a standardized, maintainable structure that supports long-term iteration.

4. **Enterprise-grade foundations: permissions, API gateway, multilingual support**

These capabilities make it possible to manage complex role hierarchies, meet strict security expectations, and open the system to external integrations, all within one platform.

## Two Core Use Cases

### Use Case 1

**Extending customer-specific requirements**

NocoBase is ideal for handling one-off customer requests that don’t interfere with the core product but still need to be delivered quickly. For example, adding a small page under an existing menu to support a unique business step.

These requests typically share several traits:

* **Highly personalized** with no chance of reuse
* **Not suitable for inclusion in the core product**, as they complicate version management
* **Custom coding is costly** and difficult to maintain
* Yet customers **require these features to be delivered **(due to acceptance checks, or real operational needs)

With NocoBase, the team established a new delivery approach:

* Build small modules quickly in NocoBase
* Sync users, permissions, and data with the core product
* Seamlessly embed the modules into the original system menus or page layout
* Customers see a consistent interface, while the underlying layers stay fully decoupled

**Results**

* For tasks of similar scope, effort dropped by **roughly 70%**
* No front-end/back-end collaboration is needed; one technical teammate can complete most extensions independently
* Major reduction in disruptions to the core product’s development roadmap

### Use Case 2

**Internal tools**

As the company expanded and processes evolved, internal system needs changed frequently.

Asking the R&D team to build internal tools would slow down core product development, while off-the-shelf SaaS tools rarely match the company’s workflows.

In this context, NocoBase became a “lightweight platform for internal systems”:

* Business teams can configure foundational components themselves
* Most scenarios require no front-end/back-end involvement
* Small modules can be adjusted easily as processes change
* Core R&D capacity remains untouched

**Results**

* The main product team stays focused
* Internal systems can be delivered much faster
* Process management becomes more aligned with real operations
* Overall efficiency increases without adding pressure to the R&D team

## Conclusion

For any B2B software company, true competitiveness comes from two things: a strong core product and healthy project margins.

By adopting NocoBase, the company made its strategic priorities much clearer:

1. **Double down on core R&D**

The core engineering team is no longer tied up by long-tail custom requests and can stay fully focused on high-impact, high-value system upgrades.

2. **Protect project profitability**

Scattered customization work is moved onto NocoBase, where it can be delivered faster and at a lower cost. Significantly improving gross margins in project delivery.

3. **Build cleaner, two-layer architecture**

With a “core system + NocoBase extensions” model, the main product stays stable and uncluttered, and its roadmap remains unaffected by customization projects.

This approach allows the company to maintain long-term product strength while adapting to fast-changing frontline business needs, all at far lower cost and operational burden.

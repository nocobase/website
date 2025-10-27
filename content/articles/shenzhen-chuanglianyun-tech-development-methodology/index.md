## **Introduction**

For many tech teams, writing code feels like the core of progress.

But at **Shenzhen Chuanglianyun Tech**, coding accounts for only about 20% of a project's lifecycle.

The real obstacles to delivery speed lie in everything around it — defining requirements, managing releases, handling operations, and conducting security testing.

This eight-person team has long served clients in the food inspection industry, completing three full projects in just two months — with half the usual manpower and no compromise on quality.

Their secret isn't overtime. It's a structured approach that turns efficiency into a system — powered by the right methods and tools.

Here's how Chuanglianyun built a framework that lets a small team move with enterprise-level speed.

## Code-First vs. Business-First

In the tech world, opinions about low-code platforms often fall into two camps.

Some worry about losing flexibility or facing long-term maintenance issues, while others view them as powerful enablers of efficiency.

But as Chuanglianyun's experience shows, the real difference doesn't lie in the tools — it lies in how teams think about development.

> “Our team began experimenting with low-code back in 2009. We've built numerous low-code projects within the DingTalk ecosystem and even developed our own frameworks. We've always approached low-code with a positive mindset.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

**They discovered a key distinction: some teams express logic through code, while others express it through models or documents.**

The former focuses on **implementation**; the latter focuses on **understanding**.

Chuanglianyun belongs firmly in the latter group.

“Our discussions rarely start with code,” Wu said. “We start from business logic and data structures. Once the data model is set and relationships are clear, the interfaces and workflows naturally fall into place.”

This **business-first** approach helps the team visualize system structure and feasibility early on, making communication with clients much smoother.

For them, coding isn't the goal — it's simply one of many ways to bring business logic to life.

## From Framework to Platform

Chuanglianyun has always followed a **business-first** approach to development — focusing on delivering systems quickly while keeping business logic clear and intuitive.

Over years of project work, the team came to recognize the limitations of two common paths:

* **SaaS low-code platforms:** easy to get started with, but often unable to meet enterprise needs for on-premise deployment, data security, and deep customization.
* **Traditional frameworks:** highly flexible, but expensive to maintain and difficult for teams to collaborate on.

> “Our clients all operate in intranet environments — running systems on external servers simply isn't an option. Some platforms offer private versions, but they can cost tens of thousands of dollars, which is just too high.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

This realization pushed the team to search for a base platform that could balance **self-hosting**, **scalability**, and **flexibility**.

When they discovered **NocoBase** on the [1Panel](https://1panel.pro/#appstore) application marketplace, they decided to give it a try.

![1Panel](https://static-docs.nocobase.com/1280X1280%20(1)-98rrye.png)

It didn't take long to see how well NocoBase aligned with their development philosophy:

* **Data-model–driven:** systems built directly from business logic.
* **Plugin-extensible:** project-level customization with minimal effort.
* **Fully self-hostable:** secure and compliant in any environment.

> “Projects we used to build with other frameworks now take almost no coding to recreate in NocoBase. For a small team like ours, it's a true amplifier.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

## Proven in Practice: A Complete System in Just Two Weeks

Chuanglianyun's **business-logic–driven** approach proved its value in their very first project.

The team needed to build a **sample photo management system** for the food inspection process — including both a backend management panel and a mobile app.

They started by defining data sources and structures directly within the platform. From there, **interfaces were auto-generated**, and **APIs were created simultaneously**.

With documentation instantly available, the app team could begin development in parallel — no need to wait for backend integration.

In under two weeks, the entire system was ready: both the backend and the app went live at the same time, with data automatically synchronized to the client's business system through workflows.

> “In the past, we had to write code, compile, release, and go through endless back-and-forth. Now, with API documentation, collaboration happens in one go.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

This experience reinforced the team's belief: **data-model–driven development** combined with **visual collaboration** not only accelerates delivery but also drastically reduces communication overhead and rework.

From there, they began establishing a **standardized development workflow** built around no-code and low-code platforms.

## Method 1: Keeping Complex Projects Under Control

Most of Chuanglianyun's clients require **full source code delivery**.

In the past, when using traditional frameworks, each feature had to be split into separate modules, libraries, or services. As projects accumulated, managing versions, syncing documentation, and coordinating deployments became increasingly time-consuming and expensive.

> “Engineers tend to abstract common modules, but in delivery-driven projects, that often creates more management overhead instead of reducing it.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

With **NocoBase's plugin-based architecture**, the team now encapsulates each project's custom logic into independent plugins — establishing clear version boundaries and controlled extensibility: *“one project, one plugin.”*

This approach gives every project its own isolated customization space and a fully traceable maintenance path:

* **Clear version isolation:** updates in one project no longer affect others.
* **Simplified maintenance:** fixes and extensions are handled within a single plugin.
* **Higher delivery efficiency:** clients receive clean, easy-to-deploy source code.

The result: a steadier delivery rhythm and a dramatically lighter maintenance workload.

## Method 2: Streamlining Version Updates

In the food inspection industry, nearly all systems must run within clients' **internal networks**.

That means developers can't simply push updates online like typical web projects. Every change involves multiple security layers — connecting to a VPN, passing through a bastion host and internal jump server, and finally reaching the Linux server.

This traditional workflow is **slow, error-prone, and draining to maintain**.

> “In the past, even a small tweak meant logging into the VPN, accessing the bastion host, and manually uploading the code again.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

With **NocoBase**, the systems still run inside the intranet, but updates made through **visual configuration** now take effect directly on the live instance — eliminating the need for repeated remote compilations or manual deployments.

This change not only saves time but also greatly reduces coordination overhead.

What once required multiple teams — development, testing, and operations — now happens almost in a single step.

> “Before, updating a version inside the intranet could take half a day. Now, it takes barely ten minutes to see the results.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

## Method 3: Raising the Bar on Delivery Quality

In software delivery, speed and quality are often seen as opposing goals.

But once development shifts from a traditional **framework-based** approach to a **platform-based** one, the two can actually reinforce each other.

Nearly all of Chuanglianyun's projects must pass rigorous client-side security tests and vulnerability scans. In the past, using traditional frameworks, each scan would surface **five to eight high-risk issues** — often stemming from outdated dependencies or integration mismatches.

> “In the old days, every security test meant a week of patching and retesting.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

After adopting **NocoBase**, the difference was dramatic: their last three security reports each contained only **one high-risk vulnerability**, typically resolved within just a few hours.

Wu noted that this responsiveness not only impressed clients but also gave the team greater confidence in every delivery.

The improvement stemmed from an architectural shift.

With traditional frameworks, integrators must assemble dependencies, front-end and back-end frameworks, permission systems, and logging modules — each introducing potential vulnerabilities.

In a platform-based model, these components are **centrally maintained and updated** by the core team, allowing developers to focus entirely on business logic.

This clear separation of responsibilities brings three major benefits:

* **Reduced vulnerability surface:** fewer risks from mixing self-developed and third-party components.
* **Faster security response:** centralized fixes eliminate the need for individual dependency audits.
* **Consistent quality:** productized experience minimizes repeated pitfalls.

For Chuanglianyun, this shift means spending less time fixing bugs — and more time refining business logic.

## Insights for Vertical Industry Tech Teams

Chuanglianyun's story goes far beyond the food inspection industry.

Their development methodology applies to small teams across many verticals — from manufacturing quality control and medical follow-up systems to government approval workflows and warehouse logistics platforms.

1. **Business-driven, not code-driven**

Express logic through **visual models and documentation**, enabling teams to align early on system structure and feasibility.

This not only reduces the risk of coding errors but also encourages clients to participate in the design process — turning requirements into shared understanding.

2. **Model-first development, parallel execution**

Start with **data modeling** to define the system's core structure, then automatically generate interfaces and APIs.

Front-end, app, and back-end teams can then move forward in parallel — dramatically shortening delivery cycles and improving collaboration consistency.

3. **Standardization as the foundation of quality**

Unify architecture, processes, and delivery standards so that quality assurance happens **in real time**, not after the fact.

This ensures every project is reliable, reusable, and verifiable from day one.

All these methods share a single principle: turning **70–80% of non-coding work** into something **visual, collaborative, and controllable**.

> “Low-code doesn't weaken technology — it empowers developers to focus their efforts where they truly create value.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

## Conclusion

Efficiency is a **systemic capability**.

Within such a framework, developers break free from repetitive work, clients see results faster, and teams continuously build reusable strengths with every delivery.

That's the true competitive edge of a small team.

> “A small team doesn't mean small output — with the right approach, eight people can achieve what eighty would.”  — **Wu Zhengjie, Head of Chuanglianyun Tech**

This is the belief Chuanglianyun hopes to share with more development teams across different industries.


**More Customer Stories:**

* [Built an AI Multimodal R&D Platform in Days — with NocoBase ](https://www.nocobase.com/en/blog/ai-multimodal-platform)
* [NocoBase in Russia: Multi-Scenario Digital Solutions in Action](https://www.nocobase.com/en/blog/nocobase-in-russia)
* [NocoBase Enters German University Classrooms](https://www.nocobase.com/en/blog/university-course)
* [NocoBase as ED’s Technology Foundation: From Internal Systems to Commercial Products](https://www.nocobase.com/en/blog/ed)
* [Sub-Second Response at Scale: Classact Runs NocoBase on Kubernetes](https://www.nocobase.com/en/blog/classact)
* [BIEL Crystal’s Digital Factory: Powering 1.85 Billion Units a Year](https://www.nocobase.com/en/blog/bielcrystal)
* [How Distinct HealthCare Uses NocoBase to Build a Personalized, Long-Term Care System](https://www.nocobase.com/en/blog/distinct-healthcare)
* [What made Japan’s leading real estate firm switch from Salesforce to open-source NocoBase?](https://www.nocobase.com/en/blog/century-21)

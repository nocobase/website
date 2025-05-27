## An AI Startup's Critical Choice

[Second-Brain ]([Second-Brain](http://www.dbl-brain.com/))is an AI startup based in Hong Kong, founded by a team with backgrounds in finance and consulting. They specialize in building AI-driven decision-making systems for enterprises.

![Second-Brain](https://static-docs.nocobase.com/1-esvvr0.PNG)

In B2B enterprise settings, the hardest part of building AI systems isn’t the models themselves—but the messy and fragmented data behind them. Internal policies, workflows, and business records often exist in silos, in inconsistent formats, and sometimes even contradict each other. Without cleaning and structuring this data, AI simply can’t generate meaningful insights.

To enable AI to "understand" an enterprise, Second-Brain's first step is to build a foundational layer that consolidates proprietary enterprise knowledge, including internal rules and regulations, business processes, and external compliance standards.

While developing an AI knowledge system for a banking client, Second-Brain encountered significant delivery challenges:

* Supporting **hundreds of pages** with intricate permission control
* Fully offline deployment with **no access to online services**
* **Tight delivery timeline** with zero compromise on user experience

With a strong focus on AI models and vertical product design, Second-Brain needed a system backbone that was **flexible, self-hosted, and fast to implement**—with powerful support for data modeling and configuration.

## Why NocoBase?

When the project started, Second-Brain carefully looked at several low-code and no-code platforms. This included various SaaS tools and open-source projects from both home and abroad. However, issues with deployment options, licensing, or code control meant they couldn't meet the client's strict needs for offline deployment and information security.

At one point, they even considered going back to a "traditional approach": developing the entire front-end and back-end in-house. This method offered great control and helped protect intellectual property (IP). But with a tight delivery deadline and high client expectations, this path was too costly and risky.

Just as the team was struggling with this decision, they discovered NocoBase.

The team was drawn to NocoBase's architecture and principles: **it doesn't rely on SaaS, offers flexibility, and is customizable, extensible, and deliverable**. Its open-source nature allowed Second-Brain to get a deep understanding of how NocoBase works, helping them quickly address client feedback.

In the end, Second-Brain chose NocoBase as the foundational platform for their system and began building and delivering the project. The real challenge wasn't just picking the tool, but how to use it to build a complex, data-driven AI application system and deliver it quickly.

## Project Implementation: Challenges and Solutions

This project wasn’t just about building a traditional knowledge management platform—it was about creating a reliable, long-term knowledge base that AI could actually understand and use.

The goal was to clean, classify, and model unstructured internal regulations and business rules, then expose them through standardized APIs for AI model access. This required advanced capabilities in data modeling, organization, and interface design.

Because the client operates in the financial industry, security was paramount. **The entire deployment had to run fully offline, and every update had to pass through a physically isolated approval and transfer process.**

Once NocoBase proved technically viable, Second-Brain moved forward with solution architecture and tech selection, eventually winning the bid and driving the project forward.

NocoBase served as the backbone of the system, enabling the team to:

* **Transform regulatory documents and policies into structured**, standardized data that AI models could consume

![Transform regulatory documents and policies into structured, standardized data](https://static-docs.nocobase.com/2-5xor3v.PNG)

* **Power the data infrastructure behind the AI Q&A module**, enabling:
  * Everyday Q&A and policy-related inquiries
  * Business queries spanning multiple datasets
  * Management-facing analyses that deliver structured conclusions

![Power the data infrastructure behind the AI Q&A module](https://static-docs.nocobase.com/3-p8o62u.PNG)

* **Support AI workflows with internal tools** like:Document preprocessing (e.g., converting PDFs, Word files, or images into extractable text)

  ![Document preprocessing](https://static-docs.nocobase.com/4-sdv8mt.png)

  Generating Q&A pairs from curated corpora to enrich fine-tuning datasets.![Generating Q&A pairs](https://static-docs.nocobase.com/5-hb6nly.png)
* **Build a custom ECharts plugin to visualize relationships** between rules and regulations as a knowledge graph.

![ECharts plugin](https://static-docs.nocobase.com/6-qalqnu.png)

## The Plugin Architecture: A Pleasant Surprise

When dealing with strict security requirements, **NocoBase’s plugin-based design proved to be a game-changer for both deployment and collaboration**.

Second-Brain modularized core features into individual plugins—so every time the system needed to be updated, they could submit just the updated plugins for approval. This made it much easier to comply with the client’s review process and dramatically cut down on security scans and testing overhead. It was an ideal fit for financial institutions with tight control over software updates.

The benefits didn’t stop there. **The plugin approach also boosted the team’s development speed.**

It took about two weeks to create the first plugin while figuring out the ideal structure and template. But after that, new plugins could be cloned and customized in a fraction of the time.

They have now developed nearly 20 plugins covering various modules like graph visualization, permission management, and data cleansing. This built up a library of reusable assets for future deliveries.

## Frontline Insights from Real-World Use

Throughout the delivery process, Second-Brain shared several key takeaways from working with NocoBase in production.

**1. Stability**

Even with frequent iterations, NocoBase maintained strong version consistency. **The system never went down due to an upgrade**—a critical factor when working with clients in the financial industry.

> “NocoBase has been impressively consistent across versions. We haven’t run into a single crash during cross-version upgrades—which, honestly, is quite rare.”  — Zhengxing Yang, Technical Lead at Second-Brain

**2. Collaboration**

Second-Brain had a smooth, responsive collaboration with the NocoBase tech team throughout the entire delivery cycle. From bug fixes to feature requests, every response was timely and helpful.

This “open source, but never alone” working model was a key enabler in a high-stakes, high-security project.

While the project is now complete, its tools and approach continue to shape how the client operates today.

## Conclusion

Second-Brain delivered a complex, high-security AI system with a lean team. By relying on NocoBase to handle the system foundation, the team was free to channel their energy into building AI capabilities that truly mattered.

That’s exactly what NocoBase aims to do: **free teams from repetitive system development, so they can focus on high-impact, creative work that drives real business value**.

In industries with strict security demands and complex requirements, this project shows how a truly flexible no-code and low-code platform can redefine what’s possible in enterprise system delivery.

**Related reading:**

* [How the No.1 AI Voice Recorder Brand Built Its Internal Systems](https://www.nocobase.com/en/blog/plaud)
* [Beyond Spreadsheets: Classmethod’s Employee Data Management with NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [How One Furniture Factory Built Its Own ERP—No Coding Needed](https://www.nocobase.com/en/blog/olmon)
* [From Designer to Builder: L&A’s Digital Transformation with NocoBase](https://www.nocobase.com/en/blog/l-a)
* [How KIGLAND Scaled Custom Anime Mask Production with Open-Source Tools](https://www.nocobase.com/en/blog/kigland)
* [How a 400+ Lawyer Firm Streamlines Commission Management with NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)

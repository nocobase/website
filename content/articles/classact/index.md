## **About Classact**

[Classact Co., Ltd](https://www.classact.co.jp/). is an IT infrastructure service provider offering technical support and engineer staffing. It is also among the first companies in Japan to receive Proxmox Gold Partner certification, with extensive experience in virtualization and data centers. While delivering highly available IT solutions to clients, Classact has also been working to streamline its own internal systems and processes to ensure operational efficiency and compliance.

Like many companies, Classact’s digital needs go beyond its technical teams. Departments such as administration, HR, and sales also require reliable systems to manage recruitment, employee operations, training, and information security compliance.

![company.png](https://static-docs.nocobase.com/1-ifaq7k.png)

## **Challenges and Requirements**

Before adopting NocoBase, Classact relied primarily on the open-source tool Exment for internal database management.

![exment.PNG](https://static-docs.nocobase.com/2-x35h8j.PNG)

However, as business operations scaled and data volume grew, Exment’s performance issues began to affect daily use:

* **Slow page loads**: In large datasets, a single page could take 5–10 seconds to load, significantly slowing down workflows.
* **Poor user experience**: Long waiting times led to frequent employee complaints and reduced willingness to use the system.
* **Limited scalability**: The system lacked the flexibility to accommodate growing business needs or support new application scenarios.

At the same time, different teams were experimenting with other tools. Some adopted ClickUp for task management, while Classact also evaluated Airtable and NocoDB.

Through this exploration, Classact clarified its requirements for a new solution:

* **High performance**: Handle hundreds of thousands of records while maintaining fast response times.
* **Flexibility**: Allow departments to quickly tailor applications to their specific needs.
* **Enterprise control**: Support self-hosted and private deployments, ensuring full control of data.

These requirements ultimately led Classact to choose NocoBase as the most suitable solution.

## **Deployment and Validation**

Before going live, Classact first tested NocoBase in a staging environment. The team imported hundreds of thousands of records to simulate real business scenarios, focusing on query and page load performance. The results showed that NocoBase maintained stable performance even with large datasets, fully meeting expectations.

Based on this validation, the company deployed NocoBase on its self-managed Kubernetes cluster to ensure enterprise-grade stability. The technical team also purchased several plugins, which accelerated application development and enabled the rapid rollout of employee operations and training management systems that had previously been stalled.

This deployment and validation approach not only confirmed NocoBase’s reliability in performance and scalability but also allowed Classact to migrate with minimal risk and quickly advance its internal digital transformation.

## **Application Coverage**

After deployment, Classact quickly built and launched a series of applications to support different aspects of internal operations. These applications covered common business processes such as HR, employee services, and asset management, as well as more specialized areas like ISMS compliance and mentoring programs.

![nocobase](https://static-docs.nocobase.com/3-z5vksi.PNG)

![nocobase.PNG](https://static-docs.nocobase.com/4-g1sz0z.PNG)

* **Human Resources Management**

Employee data maintenance, training reports and notifications, recruitment activities (interview records and notifications), role and position assignments, employee representative elections, and professional certification tracking.

* **Employee Services**

Information updates (e.g., address or commuting route), benefit applications, expense reimbursements, equipment and book purchases, business card requests, medical consultations, and reporting for celebrations or condolence events.

* **Asset and Task Management**

Management of internal systems and equipment assets, along with daily task tracking.

* **Learning and Development**

E-learning license management, mentoring program management and reporting to support ongoing employee growth.

* **Information Security and Compliance**

ISMS operations management to meet information security standards.

* **Data Collection and Engagement**

Public forms for collecting candidate information, employee surveys, and internal feedback.

Most enterprise systems only cover a single scenario, forcing organizations to rely on multiple tools to manage different processes in parallel. **NocoBase breaks this limitation, enabling Classact to build and combine applications freely within a single platform.**

With this approach, Classact has created an integrated internal management platform tailored to its needs, with far greater flexibility than traditional solutions.

## **Results**

By adopting NocoBase, Classact achieved significant improvements in both performance and user experience:

* **Performance optimization**: Page load times dropped from 5–10 seconds to just 1–2 seconds, greatly improving daily efficiency.
* **Higher user satisfaction**: Reduced waiting times eased frustration and resistance, leading to consistently positive employee feedback.
* **Visualization**: Charts, flexible filters, and display options made data far more intuitive to analyze.
* **Process optimization**: Workflow features simplified complex business processes even further.

Classact also shared positive feedback on their experience with NocoBase:

> *“What we value most about NocoBase is its stability and scalability. Even with large datasets, it consistently delivers stable performance. The charting features give us intuitive data visualization, the LDAP plugin allows seamless integration with Active Directory, public forms make candidate and employee data collection easy, and the workflow functions have greatly streamlined our internal processes.”*  — **Hidetoshi Honma, CEO of Classact**

## **Conclusion**

Classact’s experience shows that NocoBase not only delivers sub-second response times with datasets in the hundreds of thousands but also, through Kubernetes deployment and its plugin architecture, supports complex multi-department, multi-process needs on a single platform.

Unlike traditional siloed systems, NocoBase provides a model-driven, extensible, and composable architecture. This allows enterprises to continuously evolve their internal systems at lower cost while keeping room for future expansion.


**More Customer Stories:**

* [BIEL Crystal’s Digital Factory: Powering 1.85 Billion Units a Year](https://www.nocobase.com/en/blog/bielcrystal)
* [How Distinct HealthCare Uses NocoBase to Build a Personalized, Long-Term Care System](https://www.nocobase.com/en/blog/distinct-healthcare)
* [A No-Code Journey Inside SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [What made Japan’s leading real estate firm switch from Salesforce to open-source NocoBase?](https://www.nocobase.com/en/blog/century-21)
* [How Second-Brain built an AI system for financial institutions with NocoBase](https://www.nocobase.com/en/blog/second-brain)
* [How the No.1 AI Voice Recorder Brand Built Its Internal Systems](https://www.nocobase.com/en/blog/plaud)

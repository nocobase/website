Sinopec Fifth Construction Co., Ltd., a significant player in the petrochemical industry, is using NocoBase as part of its digital transformation under the leadership of IT director Mr. Dong Ke. Let's dive into the story!

## 1. **Background and Challenge**

Sinopec No.5 Construction Co., Ltd. (after this referred to as SFCC) is the earliest large-scale construction enterprise engaged in petrochemical construction in China. One of the company's main businesses is constructing petrochemical infrastructures, including oil refining, chemical, natural gas, storage, and transportation for domestic and international regions. One typical project SFCC implemented is the new refinery project in Kuwait, which had a contract of up to US\$519 million. After the system is used, Kuwait's oil production will increase by 31.5 million tonnes per year[[1](http://industry.people.com.cn/n1/2019/0410/c413883-31023309.html)].

![petrochemical industry](https://static-docs.nocobase.com/296cb1e212172bd83f826ef2d78610c6.PNG)

As a significant player in petrochemical construction, SFCC is also one of the earliest enterprises in the industry to embrace informatization and digitalization. The technical leader, Mr. Dong Ke, experienced an essential digital transformation period with SFCC.

The digital transformation of traditional industries can be traced back to the mid-90s of the 20th century, with the rapid development of information and automation technology. After decades of development, the market for industry ERP systems continues to mature, and thousands of solutions emerge. Nevertheless, it is still difficult for the petrochemical industry to find a versatile digital software or solution.

This is primarily due to the industry's unique nature. As Mr. Dong said, "(The question is that) software vendors can't understand the specific requirements of the petrochemical industry, while we don't have professional software developers to turn our sophisticated requests into codes."

Consequently, Mr. Dong and his team had to start from scratch, explore various technologies, and try to build the alpha version of the system with Access and VB macro languages. This solution was quite low-cost and quick to get started, which helped SFCC enter the fast lane of digitalization.

At the beginning phase, the solution worked and was cost-effective. As the project moved on to the middle phase, the drawbacks of the Access and VB macro languages began to emerge. Firstly, Access databases are ideal for small to medium-sized database applications. However, performance issues may arise when dealing with large amounts of data or simultaneously accessed by multiple users. Secondly, updating the system to meet rapidly changing business requirements would require a significant amount of manual programming work, leading to increased maintenance costs and the risk of errors.

## 2. **Seeking for alternatives**

The turning point occurred when Mr. Dong sought a new software solution to satisfy the increased requirements of SFCC's new management workbench project. The project aimed to adopt the principles of overall quality management into the digital management system, which integrates the five key factors that affect product quality: personnel, machines, raw materials, methods, and environment.

After years of practice, Mr. Dong Ke prefers in-house development. Since there was no out-of-the-box solution, he turned to open-source projects or development frameworks to minimize the cost and problems of starting from scratch.

He utilized a series of tools to implement the different elements of the system: Ant Design Pro to design system user interfaces, Formily to implement forms management, and the tool G2Plot to present charts and graphs, etc. However, there is still a long way to go to complete the development of an entire system.

Imagine building a house with ready tools: shovels, hammers, bags of cement, and bricks, but you still have to make the entire house brick by brick.

The same applies to software development. Before use, numerous functions need implementation, including user system, privilege management, chart library invocation, and form library referencing...

Just as Mr. Dong continued to explore suitable open-source tools on GitHub, NocoBase caught his eyes with the following highlights:

* Data Model Driven: in line with the logic of system development, where data modeling comes first.
* WYSIWYG Editor: makes it very easy to build forms & pages.
* Plug-and-Play: new plugins can be developed and installed to realize new requirements.

He thought that if his team could develop the SFCC's system based on NocoBase, it would help to solve current pain points and thus significantly reduce the workload and complexity of system development.

Let's revisit the analogy of building a house. Prefabricated components and automated construction equipment have transformed the construction process. Instead of brick by brick, prefabricated house parts can be quickly assembled using automated equipment, leading to precise and efficient construction. This approach significantly reduces the manual labor and time required for building.

![building a house, The image is generated by ChatGPT.](https://static-docs.nocobase.com/a93725c4ef24a8d05c8401f28b521ff5.PNG)

Likewise, NocoBase is a No-code platform that offers pre-made components and automated construction tools for SFCC to build software without coding line by line. Additionally, the technology stack used by NocoBase is well-aligned with SFCC projects, enabling Dong and his team to quickly start using NocoBase for the proof of concept.

Using the WYSIWYG editor, general requirements of SFCC can also be quickly implemented through the no-code part of NocoBase by simple drag-and-drop. For customized functions, Dong’s team can develop new plugins based on dedicated [development documents](https://docs.nocobase.com/development). **The flexibility is enabled by NocoBase's microkernel and plug-in architecture.**

Once they validated the product concepts, Dong's team started building the entire system using NocoBase. Meanwhile, Dong has actively contributed to the NocoBase open-source community for over two years.

## 3. Progress and Result

As NocoBase has grown over the past two years, Mr. Dong is responsible for system innovation and in-house development in SFCC's overseas branches. During this time, he led the team to accomplish the system improvement and promoting of the **Singapore CRISP project**, one of SFCC's critical projects.

NocoBase's ****straightforward**** ****and standard**** API design specifications facilitate the swift input and output of service resources through HTTP RESTful APIs. Additionally, NocoBase can quickly scale out and integrate third-party services, allowing for flexible interaction and scheduling of resources both within and outside the system. As a result, Mr. Dong and his team can efficiently handle data requests and business logic and choose the most suitable interaction mode based on their needs.

Currently, the Human Resource Working Efficiency Management system, part of the Singapore CRISP project, has been developed with NocoBase and runs smoothly.  This case has yielded invaluable best practices that will significantly enhance the success of the company-wide rollout.

### The technical architecture of the system

**NocoBase - The control and application center is a central hub** for building, developing, and managing applications and integrating different systems.

* Authentication plugins: are responsible for authentication and authorization to ensure system security.
* User & Permissions: to manage users and their permissions to ensure that different users have appropriate access.
* Resources APIs: to provide external and internal resource access interfaces and to support RESTful APIs and internal service calls (RPC).
* Data visualization: to visualize data for analysis and decision-making.
* Automated workflow: to automate business processes to improve productivity.
* Applications (business applications): to effectively meet the diverse demands of business scenarios.

**Integrated third-party platforms:**

* Cloudflare Workers: Handles HTTP requests to improve content distribution speed and application response time.
* Lark Integration Platform: Integrates Lark services (an IM application) to achieve collaboration and communication within the company.
* Supabase: Provides database storage and authentication as a back-end service.
* Logto: Responsible for authentication and authorization to ensure system security.

![technical architecture](https://static-docs.nocobase.com/ed5586e6e972ff5beaa41548e55b844e.png)

Mr. Dong shared, "NocoBase's best feature is its one-click configuration mode switching and comprehensive [HTTP API support](https://docs.nocobase.com/handbook/api-doc)."

NocoBase allows developers to click the mode-switching button in the upper right corner to switch from developing to product mode. As a result, developers can build a page within just a few minutes.

Developers can easily integrate NocoBase into their existing systems by interacting with the data via API requests, which allows for customizable and extended data processing capabilities.

For instance, Dong’s team utilizedNocoBase to develop the data dashboards for monitoring human resource efficiency of SFCC.The system was linked to around 60 attendance machines via NocoBase API. Once the raw data was collected via the API, it was processed using automated business process management in NocoBase Workflow and then delivered to the managers' dashboards.

Previously, the total data collection, automatic processing, and visualization cost was more than 1 million CNY (or 140,000 dollars). **Using NocoBase can reduce the cost by 85%.**

![dashboard](https://static-docs.nocobase.com/a54b49b032513b3628ecb24909b0167d.jpeg)

Currently, the other parts of the system development are also making steady progress. Mr. Dong has estimated that it will take a total of 5 months to complete the entire system and go live, which is half a year earlier than the initial planning time of 11 months, **reducing the delivery time by 55%.**

![dashboard](https://static-docs.nocobase.com/3d7ccb4af4f8c5ad8b1c1557ed838533.png)

As a senior front-end developer, Mr. Dong understands the challenge of balancing low code, performance, and flexibility. However, based on his experience, he believes that NocoBase has achieved a good balance among these three features.

Completing the project verification for SFCC, a leading enterprise in the petrochemical industry, was a surprising journey for NocoBase. The product capabilities have not only been enhanced by the real project, but it also demonstrates NocoBase's ability to drive digital transformation for such a complex and in-depth industrial project.

With the [release of NocoBase 1.0](https://www.nocobase.com/en/blog/release-v10), the product team is now focusing on **improving stability and performance,** meeting the expectations of developers like Mr. Dong. The NocoBase product team aims to help SFCC accelerate business rollout in the petrochemical industry and promote overall business efficiency.

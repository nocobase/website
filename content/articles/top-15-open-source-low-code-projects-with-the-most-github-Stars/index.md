📝 Note: This article was last updated on June 11, 2025. We regularly update the information to ensure you have the latest insights! 😊

---

Last week, we published an article titled "[The Top 12 Open-Source No-Code Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)," which received much appreciation. Many friends commented asking why well-known products like n8n and Appsmith were not on the list. The reason is that we based this list on the "no-code" tag on GitHub, while these products were only tagged as "low-code."

In today's article, we will review low-code projects. It's important to note that there is some overlap between no-code and low-code products ([as these concepts do share similarities](https://www.nocobase.com/en/blog/what-is-no-code)). Building on our previous article, we will add three additional dimensions to comprehensively evaluate these projects:

1. Open Source License
2. Number of Active Contributors
3. Acceptance of External PRs

During our exploration of the most popular open-source low-code projects on GitHub, we discovered several compelling tools.

**[NocoBase](https://www.nocobase.com/en/plugins)**, with its highly scalable plugin architecture, enables businesses to quickly build and expand applications.

**[Supervision](https://supervision.roboflow.com/latest/how_to/detect_and_annotate/)** focuses on simplifying the training, deployment, and monitoring of computer vision models, providing efficient data annotation and model optimization tools.

**[Refine](https://refine.dev/)** offers complete control over React code, making it ideal for building and maintaining enterprise-level internal tools, with an emphasis on security and modularity.

**[n8n](https://n8n.io/)** is an open-source workflow automation tool that simplifies complex system integrations and data processing through visual programming.

These tools offer developers a variety of solutions, helping them quickly create powerful applications. Let's take a closer look at these low-code projects now!

## Number 15: NocoBase

![NocoBase.PNG](https://static-docs.nocobase.com/a36b56a8ffa5ad246d884b9ba308b7e7.PNG)


| **GitHub**               | [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase) |
| ------------------------ | ---------------------------------------------------------------------------- |
| **GitHub Stars**         | 15.8k                                                                        |
| **Last GitHub Update**   | Today                                                                        |
| **Open-Source License**  | [AGPL-3.0](https://github.com/nocobase/nocobase/blob/main/LICENSE-AGPL.txt)  |
| **Active Contributors**  | 92                                                                           |
| **Accepts External PRs** | Yes                                                                          |
| **Official Website**     | [https://www.nocobase.com/](https://www.nocobase.com/)                       |
| **Documentation**        | [https://docs.nocobase.com/](https://docs.nocobase.com/)                     |

**Introduction**

NocoBase is an open-source, self-hosted no-code and low-code development platform. While it serves as a no-code/low-code platform, NocoBase is specifically designed for developers. Its plugin-based architecture allows developers to easily add and customize features to meet a variety of complex business needs.

With NocoBase, developers can combine data model-driven design with an intuitive WYSIWYG interface to achieve seamless data management and automated operations.

**Features**

* **Data Model Driven:** Unlike traditional form and table-driven methods, it employs a data model-driven development approach, offering unlimited development capabilities.
* **High Scalability:** All functionalities are provided through plugins using a microkernel architecture, supporting private deployments.
* **WYSIWYG Interface:** Provides an intuitive user interface that simplifies the development of complex systems.
* **Open Source Tech Stack:** Uses mainstream technologies like Node.js and React, ensuring transparency and control.

**Use Cases**

NocoBase is ideal for technical teams that need to quickly develop and deploy complex business systems, especially in data-intensive and dynamic business environments. It is particularly suitable for CRM, ERP, and custom business process management.

🙌 Have a try: [NocoBase Tutorial – Task Management System](https://www.nocobase.com/en/tutorials/task-tutorial-introduction)

## Number **14：**[APIJSON](http://apijson.cn/)

![APIJSON.png](https://static-docs.nocobase.com/21b16219e72354e0ef41a15687ca7ee0.png)


| **GitHub**               | [https://github.com/Tencent/APIJSON](https://github.com/Tencent/APIJSON)                       |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| **GitHub Stars**         | 18k                                                                                            |
| **Last GitHub Update**   | 2 days ago                                                                                     |
| **Open-Source License**  | [Apache 2.0](https://github.com/Tencent/APIJSON?tab=License-1-ov-file#readme)                  |
| **Active Contributors**  | 72                                                                                             |
| **Accepts External PRs** | Yes                                                                                            |
| **Official Website**     | [http://apijson.cn/](http://apijson.cn/)                                                       |
| **Documentation**        | [https://apijsondocs.readthedocs.io/en/latest/](https://apijsondocs.readthedocs.io/en/latest/) |

**Introduction**

APIJSON is an automated ORM library open-sourced by Tencent that provides zero-code backend interfaces and documentation, allowing front-end developers to customize the returned JSON data and structure.

APIJSON is not a traditional low-code platform; it simplifies backend development by automatically creating APIs and documentation without the need for writing backend code. This adheres to low-code principles by reducing the amount of coding required. However, it specializes more in simplifying database interactions through JSON, targeting front-end developers.

**Features**

* **Zero-Code Implementation:** Automates CRUD operations, eliminating the need for manually written backend code or documentation.
* **High Security:** Automatically validates permissions and manages versions to prevent SQL injection.
* **Powerful Flexibility:** Supports a variety of queries, including cross-database joins and nested subqueries.

**Use Cases**

APIJSON is suitable for small to medium-sized front-end and back-end separated projects, such as startups, internal projects, and applications requiring rapid development and iteration, especially those involving complex database operations.

💡 Read More: [Exploring RAD: 5 Best Application Cases](https://www.nocobase.com/en/blog/rapid-application-development-best-application-cases)

## Number 13：Amis

![Amis.png](https://static-docs.nocobase.com/5992e43b289ca49fd0b1817d0aedda2c.png)


| **GitHub**               | [https://github.com/baidu/amis](https://github.com/baidu/amis)               |
| ------------------------ | ---------------------------------------------------------------------------- |
| **GitHub Stars**         | 18.3k                                                                        |
| **Last GitHub Update**   | 3 days ago                                                                   |
| **Open-Source License**  | [Apache 2.0](https://github.com/amplication/amplication/blob/master/LICENSE) |
| **Active Contributors**  | 251                                                                          |
| **Accepts External PRs** | Yes                                                                          |
| **Official Website**     | None                                                                         |
| **Documentation**        | [https://baidu.github.io/amis](https://baidu.github.io/amis)                 |

**Introduction**

AMIS, developed by Baidu, is a low-code front-end framework that rapidly generates complex front-end interfaces through JSON configuration.

Designed to simplify the development of data-intensive applications, AMIS is particularly suited for administrative backends and complex data displays. It embodies the low-code platform ethos by enabling rapid application development through minimal or no-code configurations.

However, the lack of English documentation can be a barrier for non-Chinese speaking developers.

**Features**

* **JSON Driven:** Pages are generated through JSON configurations, streamlining front-end development.
* **Rich Component Library:** Includes a variety of components such as tables, forms, and charts to meet the needs of complex pages.
* **Visual Editing:** Supports visual operations, simplifying the development process.

**Use Cases**

AMIS is ideal for scenarios that require the rapid development of rich, interactive front-end applications, especially in the areas of management backends and complex data visualization.

## Number 12: [kestra](https://kestra.io/)

![kestra.png](https://static-docs.nocobase.com/28f125a0a8b93409eefe69780f12f15c.png)


| **GitHub**               | [https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)  |
| ------------------------ | --------------------------------------------------------------------------- |
| **GitHub Stars**         | 18.5k                                                                       |
| **Last GitHub Update**   | Today                                                                       |
| **Open-Source License**  | [Apache-2.0](https://github.com/kestra-io/kestra?tab=Apache-2.0-1-ov-file#) |
| **Active Contributors**  | 169                                                                         |
| **Accepts External PRs** | Yes                                                                         |
| **Official Website**     | [https://kestra.io/](https://kestra.io/)                                    |
| **Documentation**        | [https://kestra.io/docs](https://kestra.io/docs)                            |

**Introduction**

Kestra is an open-source low-code workflow orchestration platform designed to help developers and data teams easily build, schedule, and manage tasks. It uses YAML-based workflow definitions and provides an intuitive web interface with rich plugin integrations and automated task processing.

Users can configure data flows, triggers, and tasks within Kestra’s UI, leveraging its distributed architecture to handle large-scale data pipelines and business processes. Workflows can be self-hosted and support API calls, allowing enterprises to flexibly scale and manage automation tasks.

**Features**

* **Low-Code Workflow Orchestration**: Define workflows using YAML with a visual management interface.
* **Extensive Plugin Support**: Integrates with databases, cloud storage, APIs, message queues, and more.
* **Flexible Trigger Mechanisms**: Supports scheduled execution, event-driven triggers, and API calls.

**Use Cases**

Kestra is ideal for data engineering and DevOps teams, particularly for ETL workflows, log processing, and automated microservices orchestration.

## Number 11: [teable](https://teable.io/)

![teable.png](https://static-docs.nocobase.com/d93318ae98291f1ec49621f2250b7937.png)


| **GitHub**               | [https://github.com/teableio/teable](https://github.com/teableio/teable) |
| ------------------------ | ------------------------------------------------------------------------ |
| **GitHub Stars**         | 18.6k                                                                    |
| **Last GitHub Update**   | Today                                                                    |
| **Open-Source License**  | [AGPL-3.0](https://github.com/teableio/teable?tab=AGPL-3.0-2-ov-file#)   |
| **Active Contributors**  | 36                                                                       |
| **Accepts External PRs** | Yes                                                                      |
| **Official Website**     | [https://teable.io/](https://teable.io/)                                 |
| **Documentation**        | [https://help.teable.io/](https://help.teable.io/)                       |

**Introduction**

Teable is a no-code platform designed to help teams rapidly build and deploy enterprise-grade database applications. With a spreadsheet-like intuitive interface, it simplifies data management and collaboration workflows.

**Features**

* **Spreadsheet-Like Interface**: Allows users to create and manage complex data structures without coding, improving team collaboration.
* **High Performance & Scalability**: Built on **PostgreSQL**, capable of handling **millions of rows** while ensuring stable performance.
* **Data Security & Deployment Flexibility**: Supports **self-hosting**, giving users full control over their data while offering the convenience of cloud deployment.

**Use Cases**

Teable is perfect for teams that require efficient data management and real-time collaboration, such as CRM systems, event operations management, and content management systems (CMS). Its no-code nature allows non-technical users to easily build applications tailored to business needs.

💡 Read More: [Top 11 Open Source Internal Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/open-source-internal-tools)

## Number 10：[Node-RED](https://nodered.org/)

![Node-RED.png](https://static-docs.nocobase.com/009d6d236d9948212350fed014ebad6c.png)


| **GitHub**               | [https://github.com/node-red/node-red](https://github.com/node-red/node-red)       |
| ------------------------ | ---------------------------------------------------------------------------------- |
| **GitHub Stars**         | 21.3k                                                                              |
| **Last GitHub Update**   | 2 days ago                                                                         |
| **Open-Source License**  | [Apache 2.0](https://github.com/node-red/node-red?tab=Apache-2.0-1-ov-file#readme) |
| **Active Contributors**  | 233                                                                                |
| **Accepts External PRs** | Yes                                                                                |
| **Official Website**     | [https://nodered.org/](https://nodered.org/)                                       |
| **Documentation**        | [https://nodered.org/docs/](https://nodered.org/docs/)                             |

**Introduction**

Node-RED is a low-code programming tool based on Node.js, designed to connect hardware devices, APIs, and online services to create event-driven applications.

**Features**

* **Browser Editor:** Features a browser-based flow editor that simplifies the process of connecting and deploying workflows.
* **Based on Node.js:** Utilizes Node.js's event-driven model, making it suitable for running on edge devices and in cloud environments.
* **Community Driven:** Supports community sharing and reuse of flows, boasting a rich library of modules and online flow repositories.

**Use Cases**

Node-RED is ideal for projects that require the integration of multiple systems and services, such as IoT device control, automated workflows, and various data processing and distribution tasks.

## Number 9：[Budibase](https://budibase.com/)

![budibase.png](https://static-docs.nocobase.com/5d5e2e17f6f419eb6d7353c180febded.png)


| **GitHub**               | [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase) |
| ------------------------ | ---------------------------------------------------------------------------- |
| **GitHub Stars**         | 24.7k                                                                        |
| **Last GitHub Update**   | Today                                                                        |
| **Open-Source License**  | [GPLv3](https://github.com/Budibase/budibase?tab=License-1-ov-file#)         |
| **Active Contributors**  | 106                                                                          |
| **Accepts External PRs** | Yes                                                                          |
| **Official Website**     | [https://budibase.com/](https://budibase.com/)                               |
| **Documentation**        | [https://docs.budibase.com/docs/](https://docs.budibase.com/docs/)           |

**Introduction**

Budibase is an open-source low-code platform designed for rapidly building internal business tools. Users can create custom applications effortlessly by dragging and dropping components, connecting databases, and integrating APIs—without the need for complex coding.

**Features**

* **Visual App Builder** – Offers an intuitive drag-and-drop interface for quickly assembling management dashboards, forms, and other applications.
* **Multi-Data Source Integration** – Supports SQL, NoSQL, REST APIs, Google Sheets, and more for flexible data management.
* **Automation & Access Control** – Built-in workflow automation features, along with user roles and access control to ensure data security.

**Use Cases**

Budibase is ideal for teams looking to quickly develop and deploy internal tools, such as CRM systems, approval workflows, inventory management, and customer support platforms.

## Number 8：**[Supervision](https://supervision.roboflow.com/)**

![Supervision.png](https://static-docs.nocobase.com/26bd0e41647be31e17fce19990a24c5b.png)


| **GitHub**               | [https://github.com/roboflow/supervision](https://github.com/roboflow/supervision)           |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| **GitHub Stars**         | 26.7k                                                                                        |
| **Last GitHub Update**   | Today                                                                                        |
| **Open-Source License**  | [MIT](https://github.com/roboflow/supervision?tab=MIT-1-ov-file#readme)                      |
| **Active Contributors**  | 102                                                                                          |
| **Accepts External PRs** | Yes                                                                                          |
| **Official Website**     | [https://supervision.roboflow.com/](https://supervision.roboflow.com/)                       |
| **Documentation**        | [https://supervision.roboflow.com/0.22.0/how\\\\\\\_to/detect\\\\\\\_and\\\\\\\_annotate/]() |

**Introduction**

Supervision is a platform designed for training, deploying, and monitoring computer vision models, aimed at optimizing model performance and streamlining workflows.

While not strictly marketed as a low-code platform, Supervision focuses on providing tools for training, deploying, and monitoring computer vision models, including features that simplify processes such as data annotation and one-click model training.

This greatly simplifies the development process for users without deep technical expertise, aligning with some low-code platform principles by reducing the amount of code users need to handle directly.

**Features**

* **Data Annotation Tools:** Provides efficient labeling tools to accelerate the data preparation process.
* **Model Training and Deployment:** Supports one-click model training and deployment, requiring no deep technical background.
* **Continuous Monitoring and Optimization:** Monitors model performance in real-time and automatically optimizes to enhance accuracy.

**Use Cases**

Supervision is suitable for businesses and researchers needing to rapidly develop and deploy computer vision applications, particularly in areas like product quality control, security monitoring, and enhancing customer experiences.

## Number 7：**[Refine](https://refine.dev/)**

![Refine.png](https://static-docs.nocobase.com/602ebba38351a43db6f2d3cb58c1ead4.png)


| **GitHub**               | [https://github.com/refinedev/refine](https://github.com/refinedev/refine) |
| ------------------------ | -------------------------------------------------------------------------- |
| **GitHub Stars**         | 31.2k                                                                      |
| **Last GitHub Update**   | 4 days ago                                                                 |
| **Open-Source License**  | [MIT](https://github.com/refinedev/refine?tab=MIT-1-ov-file#readme)        |
| **Active Contributors**  | 287                                                                        |
| **Accepts External PRs** | Yes                                                                        |
| **Official Website**     | [https://refine.dev/](https://refine.dev/)                                 |
| **Documentation**        | [https://refine.dev/docs/](https://refine.dev/docs/)                       |

**Introduction**

Refine is an open-source enterprise-level alternative to Retool, designed for building React-based internal tools, management panels, dashboards, and B2B applications. It combines the benefits of low-code and full-code, offering scalability from startup to long-term maintenance.

**Features**

* **Pure React Code:** Provides a fully controllable open-source solution, avoiding the limitations of a black box.
* **Enterprise-Level Security:** Supports self-hosted deployments and seamlessly integrates with existing authentication providers, supporting complex access control models.
* **Modular Architecture:** Easily integrates with REST and GraphQL APIs, supporting a variety of front-end libraries and frameworks.

**Use Cases**

Refine is ideal for enterprise developers looking to build and maintain highly customized internal applications, especially in scenarios that demand strong customization and high security standards.

💡 Read More: [Open Source CRUD Development Tools: NocoBase vs Refine](https://www.nocobase.com/en/blog/nocobase-vs-refine)

## Number 6：**[ToolJet](https://www.tooljet.com/)**

![ToolJet.png](https://static-docs.nocobase.com/e3775e65b89e89fbbd796bbf5b8a9528.png)


| **GitHub**               | [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) |
| ------------------------ | ------------------------------------------------------------------------ |
| **GitHub Stars**         | 35.8k                                                                    |
| **Last GitHub Update**   | 2 days ago                                                               |
| **Open-Source License**  | [AGPL-3.0](https://github.com/ToolJet/ToolJet#AGPL-3.0-1-ov-file)        |
| **Active Contributors**  | 644                                                                      |
| **Accepts External PRs** | Yes                                                                      |
| **Official Website**     | [https://www.tooljet.com/](https://www.tooljet.com/)                     |
| **Documentation**        | [https://docs.tooljet.com/docs/](https://docs.tooljet.com/docs/)         |

**Introduction**

ToolJet is an open-source low-code platform designed for building business applications. It allows connections to databases, cloud storage, GraphQL, and API endpoints, utilizing a drag-and-drop app builder to create applications.

**Features**

* **Multiple Data Source Connections:** Supports seamless integration with over 50 different applications, databases, and APIs.
* **Visual App Builder:** Provides a drag-and-drop interface to simplify front-end development.
* **Workflow Automation:** Enables automation of complex manual business processes, reducing developer workload.

**Use Cases**

ToolJet is ideal for enterprises that need to quickly build and maintain custom internal tools, especially suited for scenarios with complex integration requirements.

## Number 5：**[Appsmith](https://www.appsmith.com/)**

![Appsmith.png](https://static-docs.nocobase.com/e91120006b296b79e6403fafc7584083.png)


| **GitHub**               | [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)    |
| ------------------------ | ------------------------------------------------------------------------------------- |
| **GitHub Stars**         | 37.2k                                                                                 |
| **Last GitHub Update**  | Today                                                                                 |
| **Open Source License**  | [Apache 2.0](https://github.com/appsmithorg/appsmith?tab=Apache-2.0-1-ov-file#readme) |
| **Active Contributors**  | 334                                                                                   |
| **Accepts External PRs** | Yes                                                                                   |
| **Official Website**     | [https://www.appsmith.com/](https://www.appsmith.com/)                                |
| **Documentation**        | [https://docs.appsmith.com/](https://docs.appsmith.com/)                              |

**Introduction**

Appsmith is an open-source platform for building internal tools, enabling developers to quickly create, deploy, and manage enterprise internal tools using a low-code approach. It supports connections to any database, SaaS tool, or API and offers flexible UI construction options.

**Features**

* **Extensive Integrations:** Supports over 18 native integrations, facilitating easy connection to data sources.
* **Flexible Development Options:** Provides over 45 customizable widgets and a built-in JavaScript editor to meet complex customization needs.
* **Rapid Deployment and Collaboration:** Appsmith features instant preview and one-click deployment capabilities, enabling teams to collaborate and iterate on applications quickly.

**Use Cases**

Appsmith is ideal for enterprises needing to quickly build and maintain internal management dashboards, CRM systems, customer support portals, and other backend applications.

💡 Read More: [NocoBase vs. Appsmith: Which Open Source Low-Code Platform is Right for You?](https://www.nocobase.com/en/blog/nocobase-vs-appsmith)

## Number 4：**[Flowise](https://flowiseai.com/)**

![Flowise.png](https://static-docs.nocobase.com/fdbbdef6595cdd762173f9817f8adabd.png)


| **GitHub**               | [https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)       |
| ------------------------ | ---------------------------------------------------------------------------------- |
| **GitHub Stars**         | 39.9k                                                                              |
| **Last GitHub Update**   | 4 days ago                                                                         |
| **Open-Source License**  | [Apache 2.0](https://github.com/FlowiseAI/Flowise?tab=Apache-2.0-1-ov-file#readme) |
| **Active Contributors**  | 237                                                                                |
| **Accepts External PRs** | Yes                                                                                |
| **Official Website**     | [https://flowiseai.com/](https://flowiseai.com/)                                   |
| **Documentation**        | [https://docs.flowiseai.com/](https://docs.flowiseai.com/)                         |

**Introduction**

Flowise is an open-source low-code tool specifically designed for creating customized large language model (LLM) applications. It enables developers to build complex LLM workflows and AI agents through a simple drag-and-drop interface, accelerating the development process from prototype to production.

**Features**

* **Rapid Iteration:** Supports a low-code approach that speeds up iterations from testing to production.
* **Drag-and-Drop Interface:** Simplifies the creation process of LLM applications, supported by built-in templates and logic.
* **Multimodal Integration:** Facilitates connections to a variety of data sources and APIs, such as databases and cloud services.

**Use Cases**

Flowise is suitable for enterprises that need to quickly develop and deploy AI-driven interactive applications, such as customer service automation, intelligent data analysis, and multilingual support systems.

## Number **3：**[NocoDB](https://nocodb.com/)

![NocoDB.png](https://static-docs.nocobase.com/7acac7be42aef2371755493d8ffc25fb.png)


| **GitHub**                | https://github.com/nocodb/nocodb                                |
| ------------------------- | --------------------------------------------------------------- |
| **GitHub Stars**          | 54.8k                                                           |
| **Last GitHub Update**    | Within one day                                                  |
| **Open Source License**   | [AGPL-3.0](https://github.com/nocodb/nocodb#AGPL-3.0-1-ov-file) |
| **Active Contributors**   | 326                                                             |
| **Accepts External PRs** | Yes                                                             |
| **Official Website**      | https://nocodb.com/                                             |
| **Documentation**         | https://docs.nocodb.com/                                        |

**Introduction**

NocoDB is an open-source alternative to Airtable, capable of transforming any database into a smart spreadsheet for powerful data management and automation.

**Features**

* **Flexible Data Views:** Provides grid, kanban, gallery, form, and calendar views to accommodate various data presentation needs.
* **High Scalability:** Capable of handling millions of rows of data, suitable for large-scale database applications.
* **Robust API Support:** Offers high-throughput APIs to ensure flexible and efficient data operations.

**Use Cases**

NocoDB is ideal for businesses that require data-intensive operations, such as CRM, project management, operations management, and inventory management.

💡 Read More: [NocoBase vs NocoDB: An In-Depth Comparison of Open Source No-Code Tools](https://www.nocobase.com/en/blog/nocobase-vs-nocodb)

## Number 2: Dify

![dify](https://static-docs.nocobase.com/dify-ziw0to.png)


| GitHub               | [https://github.com/langgenius/dify](https://github.com/langgenius/dify)       |
| -------------------- | ------------------------------------------------------------------------------ |
| GitHub Stars         | 103k                                                                           |
| Last GitHub Update   | Today                                                                          |
| Open-Source License  | [Apache License 2.0](https://github.com/langgenius/dify?tab=License-1-ov-file) |
| Active Contributors  | 842                                                                            |
| Accepts External PRs | Yes                                                                            |
| Official Website     | [https://dify.ai/](https://dify.ai/)                                           |
| Documentation        | [https://docs.dify.ai/](https://docs.dify.ai/)                                 |

**Introduction:**

Dify is an open-source AI application development platform supporting local deployment, dedicated to helping developers and teams quickly build, manage, and launch large language model-based AI prototypes and applications.

**Features:**

* **Multi-model integration:** Compatible with mainstream large models like OpenAI, Anthropic, Google Gemini, Moonshot, and Deepseek.
* **Visual workflow configuration:** Build multi-turn conversations and complex logic without coding via the Prompt Flow designer.
* **Embedding and API calling:** Generated AI applications can be deployed to any platform as Web Widgets, APIs, or embedded components.

**Use cases:**

Dify is suitable for developers and enterprises looking to rapidly build AI product prototypes, deploy internal assistants, or create custom AI tools.

## Number 1：**[n8n](https://n8n.io/)**

![n8n.png](https://static-docs.nocobase.com/10a56d828deefc995fe87f19b7938336.png)


| **GitHub**                | https://github.com/n8n-io/n8n                                                         |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **GitHub Stars**          | 61k                                                                                   |
| **Last GitHub Update**    | Within one day                                                                        |
| **Open Source License**   | [Sustainable Use License](https://github.com/n8n-io/n8n?tab=License-1-ov-file#readme) |
| **Active Contributors**   | 450                                                                                   |
| **Accepts External PRs** | Yes                                                                                   |
| **Official Website**      | https://n8n.io/                                                                       |
| **Documentation**         | https://docs.n8n.io/                                                                  |

**Introduction**

n8n is an open-source workflow automation tool that enables technical teams to connect any online service or API through a visual programming interface. It supports highly customizable workflows for automatic data transmission and processing, enhancing the efficiency and automation of business operations.

**Features**

* **Open Source and Extensible:** Users can freely modify and expand functionalities.
* **Diverse Integrations:** Supports integration with over 400 applications.
* **Advanced Automation Capabilities:** Provides sophisticated AI features for complex data operations and interactions.

**Use Cases**

n8n is particularly suited for businesses that need to automate the processing of large volumes of data and integrate multiple systems, such as in automated marketing, customer data analytics, and internal workflow optimization.

💡 Read More: [Top 6 Core App Dashboard Building Tools](https://www.nocobase.com/en/blog/core-app-dashboard-building-tools)

**Related reading:**

* [Top 11 Open Source Internal Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/open-source-internal-tools)
* [Top 8 Open-Source CRUD Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/crud-projects)
* [The Top 12 Open-Source No-Code Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [How to Build Efficient CRUD Apps?](https://www.nocobase.com/en/blog/how-to-build-efficient-crud-apps)
* [Discover Top Tools: Accelerate Web Application Development](https://www.nocobase.com/en/blog/web-application-development)
* [Build CRM in Hours: Top No-Code/Low-Code Tools You Need to Know](https://www.nocobase.com/en/blog/low-code-no-code-crm-builder)

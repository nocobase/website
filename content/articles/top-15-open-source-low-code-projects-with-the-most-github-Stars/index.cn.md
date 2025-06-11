注：本文数据更新于 2025 年 6 月 11 日。我们会定期更新，确保你获取最新的信息！😊

---

上周，我们发布了文章《[GitHub Star 数量前 12 的开源无代码工具](https://www.nocobase.com/cn/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)》，收获了许多喜爱。许多朋友留言问，为什么 n8n、Appsmith 等熟知的产品没有上榜？原因是我们是根据 GitHub 上的 "no-code" 标签来制作这份名单的，而这两款产品只打上了 “low-code” 标签。

今天这篇文章，我们将盘点[低代码](https://github.com/topics/low-code)项目。需要注意的是，无代码产品和低代码产品会有一些重合（[这两个概念确实也有相似之处](https://www.nocobase.com/en/blog/what-is-no-code)）。

同时，在上篇文章的基础上，我们会额外增加三个维度，以全面考量这些项目：

1. 开源协议
2. 活跃提交者的数量
3. 是否接受外部 PR

在探索 GitHub 上最受欢迎的开源低代码项目时，我们发现了一些极具吸引力的工具。

**[NocoBase](https://www.nocobase.com/en/plugins)** 通过其高度可扩展的插件架构，使企业可以快速构建和扩展应用。

**[Supervision](https://supervision.roboflow.com/latest/how_to/detect_and_annotate/)** 专注于简化计算机视觉模型的训练、部署和监控，提供高效的数据注释和模型优化工具。

**[Refine](https://refine.dev/)** 提供完全的 React 代码控制，适合构建和维护企业级内部工具，强调安全性和模块化。

**[n8n](https://n8n.io/)** 是一个开源的工作流自动化工具，通过视觉编程简化复杂的系统集成和数据处理。

这些工具为开发者提供了不同的解决方案，帮助快速创建功能强大的应用。下面就让我们深入了解这些低代码项目吧！

## 第15：[NocoBase](https://www.nocobase.com/)

![NocoBase.PNG](https://static-docs.nocobase.com/a36b56a8ffa5ad246d884b9ba308b7e7.PNG)


| **GitHub**                  | https://github.com/nocobase/nocobase                                        |
| --------------------------- | --------------------------------------------------------------------------- |
| **GitHub Star 数**          | 15.8k                                                                       |
| **GitHub 最近一次更新时间** | 当天                                                                        |
| **开源协议**                | [AGPL-3.0](https://github.com/nocobase/nocobase/blob/main/LICENSE-AGPL.txt) |
| **活跃提交者数量**          | 92                                                                          |
| **是否接受外部PR**          | 是                                                                          |
| **官网**                    | https://www.nocobase.com/                                                   |
| **文档**                    | https://docs.nocobase.com/                                                  |

**简介**

NocoBase 是一个开源、自托管的无代码和低代码开发平台。虽然一个无代码/低代码开发平台，但是 NocoBase 专为开发者设计。

其插件化架构使开发者能够轻松添加和定制功能，满足各种复杂的业务需求。通过 NocoBase，开发者可以将数据模型驱动的设计与直观的 WYSIWYG 界面相结合，实现无缝的数据管理和自动化操作。

**特点**

* **数据模型驱动**：与传统的表单和表格驱动方法不同，采用数据模型驱动开发，提供无上限的开发能力。
* **高可扩展性**：所有功能通过插件提供，采用微内核架构，支持私有部署。
* **WYSIWYG 界面**：直观的操作界面，简化复杂系统的开发。
* **开源技术栈**：使用主流技术栈如 Node.js 和 React，确保透明性和控制力。

**使用场景**

NocoBase 适用于需要快速开发和部署复杂业务系统的技术团队，特别是在数据密集和多变的业务环境中。尤其适用于CRM、ERP和自定义业务流程管理。

🙌 上手实践：[NocoBase 实战教程 —— 任务管理系统](https://www.nocobase.com/cn/tutorials/task-tutorial-introduction)

## 第14：**[APIJSON](http://apijson.cn/)**

![APIJSON.png](https://static-docs.nocobase.com/21b16219e72354e0ef41a15687ca7ee0.png)


| **GitHub**                  | https://github.com/Tencent/APIJSON                                            |
| --------------------------- | ----------------------------------------------------------------------------- |
| **GitHub Star 数**          | 18k                                                                           |
| **GitHub 最近一次更新时间** | 2天前                                                                         |
| **开源协议**                | [Apache 2.0](https://github.com/Tencent/APIJSON?tab=License-1-ov-file#readme) |
| **活跃提交者数量**          | 72                                                                            |
| **是否接受外部PR**          | 是                                                                            |
| **官网**                    | http://apijson.cn/                                                            |
| **文档**                    | https://apijsondocs.readthedocs.io/en/latest/                                 |

**简介**

APIJSON 是一个由腾讯开源的自动化 ORM 库，提供零代码后端接口和文档，允许前端自定义返回的 JSON 数据和结构。

APIJSON 不是传统的低代码平台，它通过自动创建 API 和文档而简化了后端开发，无需编写后端代码，这符合低代码原则，减少了所需编码的数量。然而，它更加专业化，专注于通过 JSON 简化数据库交互，面向前端开发人员。

**特点**

* **零代码实现**：自动化增删改查，无需手写后端代码或文档。
* **高安全性**：自动校验权限和版本管理，防止 SQL 注入。
* **强大的灵活性**：支持各种查询，包括跨库连表和嵌套子查询。

**使用场景**

APIJSON 适用于中小型前后端分离项目，如创业项目、内部项目、以及需要快速开发和迭代的应用，尤其是那些涉及到复杂数据库操作的场合。

💡 阅读更多：[探索 RAD：5 个最佳实践案例解析](https://www.nocobase.com/cn/blog/rapid-application-development-best-application-cases)

## 第13：Amis

![Amis.png](https://static-docs.nocobase.com/5992e43b289ca49fd0b1817d0aedda2c.png)


| **GitHub**                  | https://github.com/baidu/amis                                                |
| --------------------------- | ---------------------------------------------------------------------------- |
| **GitHub Star 数**          | 18.3k                                                                        |
| **GitHub 最近一次更新时间** | 3天前                                                                        |
| **开源协议**                | [Apache 2.0](https://github.com/amplication/amplication/blob/master/LICENSE) |
| **活跃提交者数量**          | 251                                                                          |
| **是否接受外部PR**          | 是                                                                           |
| **官网**                    | 无                                                                           |
| **文档**                    | https://baidu.github.io/amis                                                 |

**简介**

AMIS 是由百度开发的一款低代码前端框架，主要通过 JSON 配置来快速生成复杂的前端界面。

AMIS 的设计目的是简化数据密集型应用的前端开发，特别适用于管理后台和复杂数据展示等场景。这使得它符合低代码平台的特性，即通过最小的代码或无代码配置实现应用的快速开发。

但是没有英文文档，对开发者不太友好。

**特点**

* **JSON 驱动**：通过 JSON 配置生成页面，实现前端开发的高效化。
* **丰富的组件库**：包括表格、表单、图表等多种组件，满足复杂页面需求。
* **可视化编辑**：支持可视化操作，简化开发流程。

**使用场景**

AMIS 适用于需要快速开发丰富、交互式前端应用的场景，特别是在管理后台和复杂数据展示方面。

## 第12：[kestra](https://kestra.io/)

![kestra.png](https://static-docs.nocobase.com/28f125a0a8b93409eefe69780f12f15c.png)


| **GitHub**                  | https://github.com/kestra-io/kestra                                         |
| --------------------------- | --------------------------------------------------------------------------- |
| **GitHub Star 数**          | 18.5k                                                                       |
| **GitHub 最近一次更新时间** | 当天                                                                        |
| **开源协议**                | [Apache-2.0](https://github.com/kestra-io/kestra?tab=Apache-2.0-1-ov-file#) |
| **活跃提交者数量**          | 169                                                                         |
| **是否接受外部PR**          | 是                                                                          |
| **官网**                    | https://kestra.io/                                                          |
| **文档**                    | https://kestra.io/docs                                                      |

**简介**

Kestra 是一个开源的低代码工作流编排平台，旨在帮助开发者和数据团队轻松构建、调度和管理任务。它采用 YAML 进行工作流定义，并提供直观的 Web 界面，支持丰富的集成插件和自动化任务处理。

用户可以在 Kestra 的界面中配置数据流、触发器和任务，并利用其分布式架构来处理大规模数据管道和业务流程。工作流可自托管部署，并支持 API 调用，使企业能够灵活扩展和管理自动化任务。

**特点**

* **低代码工作流编排**：使用 YAML 定义任务流，并提供可视化管理界面。
* **丰富的集成插件**：支持数据库、云存储、API、消息队列等多种服务。
* **灵活的触发机制**：支持定时调度、事件触发和 API 调用。

**使用场景**

Kestra 适用于数据工程和 DevOps 团队，尤其适合构建 ETL 任务、日志处理、自动化微服务编排等场景。

## 第11：[teable](https://teable.io/)

![teable.png](https://static-docs.nocobase.com/d93318ae98291f1ec49621f2250b7937.png)


| **GitHub**                  | https://github.com/teableio/teable                                     |
| --------------------------- | ---------------------------------------------------------------------- |
| **GitHub Star 数**          | 18.6k                                                                  |
| **GitHub 最近一次更新时间** | 当天                                                                   |
| **开源协议**                | [AGPL-3.0](https://github.com/teableio/teable?tab=AGPL-3.0-2-ov-file#) |
| **活跃提交者数量**          | 36                                                                     |
| **是否接受外部PR**          | 是                                                                     |
| **官网**                    | https://teable.io/                                                     |
| **文档**                    | https://help.teable.io/                                                |

**简介**

Teable 是一个旨在帮助团队快速构建和部署企业级数据库应用的无代码平台。它通过类似电子表格的直观界面，简化了数据管理和协作流程。

**特点**

* **电子表格式界面**：无需编码即可创建和管理复杂的数据结构，提升团队协作效率。
* **高性能与可扩展性**：基于 PostgreSQL 构建，支持处理数百万行数据，确保性能稳定。
* **数据安全与部署灵活性**：支持自托管，用户可完全控制数据，兼顾云端的便利性和本地部署的安全性。

**使用场景**

Teable 适用于需要高效数据管理和实时协作的团队，如 CRM 系统、活动运营管理和内容管理系统（CMS）等。其无代码特性使得非技术人员也能轻松上手，快速构建满足业务需求的应用。

💡 阅读更多：[GitHub Star 数量前 11 的开源内部工具](https://www.nocobase.com/cn/blog/open-source-internal-tools)

## **第10：[Node-RED](https://nodered.org/)**

![Node-RED.png](https://static-docs.nocobase.com/009d6d236d9948212350fed014ebad6c.png)


| **GitHub**                  | https://github.com/node-red/node-red                                               |
| --------------------------- | ---------------------------------------------------------------------------------- |
| **GitHub Star 数**          | 21.3k                                                                              |
| **GitHub 最近一次更新时间** | 2天前                                                                              |
| **开源协议**                | [Apache 2.0](https://github.com/node-red/node-red?tab=Apache-2.0-1-ov-file#readme) |
| **活跃提交者数量**          | 233                                                                                |
| **是否接受外部 PR**         | 是                                                                                 |
| **官网**                    | https://nodered.org/                                                               |
| **文档**                    | https://nodered.org/docs/                                                          |

**简介**

Node-RED 是一个基于 Node.js 的低代码编程工具，用于连接硬件设备、API 和在线服务，实现事件驱动的应用。

**特点**

* **浏览器编辑器**：提供基于浏览器的流程编辑器，简化流程的连接和部署。
* **基于 Node.js**：利用 Node.js 的事件驱动模型，适合在边缘设备和云环境运行。
* **社区驱动**：支持社区共享和再利用流程，拥有丰富的模块和在线流程库。

**使用场景**

Node-RED 适用于需要集成多种系统和服务的项目，如物联网(IoT)设备控制、自动化工作流程以及各种数据处理和分发任务。

## 第9：[Budibase](https://budibase.com/)

![budibase.png](https://static-docs.nocobase.com/5d5e2e17f6f419eb6d7353c180febded.png)


| **GitHub**                  | https://github.com/Budibase/budibase                                 |
| --------------------------- | -------------------------------------------------------------------- |
| **GitHub Star 数**          | 24.7k                                                                |
| **GitHub 最近一次更新时间** | 当天                                                                 |
| **开源协议**                | [GPLv3](https://github.com/Budibase/budibase?tab=License-1-ov-file#) |
| **活跃提交者数量**          | 106                                                                  |
| **是否接受外部PR**          | 是                                                                   |
| **官网**                    | https://budibase.com/                                                |
| **文档**                    | https://docs.budibase.com/docs/                                      |

**简介**

Budibase 是一个开源的低代码平台，专为快速构建内部业务工具而设计。用户可以通过拖放组件、连接数据库和 API，轻松创建自定义应用程序，无需复杂编码。

**特点**

* **可视化应用构建**：提供直观的拖放式界面，支持快速搭建管理面板、表单、仪表盘等应用。
* **多数据源集成**：支持 SQL、NoSQL、REST API、Google Sheets 等多种数据源，实现灵活的数据管理。
* **自动化与权限管理**：内置工作流自动化功能，并支持用户角色和访问控制，确保数据安全。

**使用场景**

Budibase 适用于需要快速开发和部署内部工具的团队，如 CRM、审批系统、库存管理、客户支持平台等。

## 第8：**[Supervision](https://supervision.roboflow.com/)**

![Supervision.png](https://static-docs.nocobase.com/26bd0e41647be31e17fce19990a24c5b.png)


| **GitHub**                  | https://github.com/roboflow/supervision                                      |
| --------------------------- | ---------------------------------------------------------------------------- |
| **GitHub Star 数**          | 26.7k                                                                        |
| **GitHub 最近一次更新时间** | 当天                                                                         |
| **开源协议**                | [MIT](https://github.com/roboflow/supervision?tab=MIT-1-ov-file#readme)      |
| **活跃提交者数量**          | 102                                                                          |
| **是否接受外部PR**          | 是                                                                           |
| **官网**                    | https://supervision.roboflow.com/                                            |
| **文档**                    | https://supervision.roboflow.com/0.22.0/how\\\_to/detect\\\_and\\\_annotate/ |

**简介**

Supervision  是一个用于训练、部署和监控计算机视觉模型的平台，旨在优化模型性能和简化工作流程。

Supervision 并没有严格将自己宣传为低代码平台。相反，它专注于提供用于训练、部署和监控计算机视觉模型的工具，其中包括简化流程的功能，如数据标注和一键模型训练。这可以极大地简化对于没有深入技术专业知识的用户的开发过程，符合低代码平台的一些原则，通过减少用户需要直接处理的代码量来实现。

**特点**

* **数据注释工具**：提供高效的标注工具，加速数据准备过程。
* **模型训练和部署**：支持一键式模型训练和部署，无需深厚的技术背景。
* **持续监控与优化**：实时监控模型表现，自动优化以提高准确率。

**使用场景**

适用于需要快速开发和部署计算机视觉应用的企业和研究者，特别是在产品质量控制、安全监控和客户体验增强等领域。

## 第7：**[Refine](https://refine.dev/)**

![Refine.png](https://static-docs.nocobase.com/602ebba38351a43db6f2d3cb58c1ead4.png)


| **GitHub**                  | https://github.com/refinedev/refine                                 |
| --------------------------- | ------------------------------------------------------------------- |
| **GitHub Star 数**          | 31.2k                                                               |
| **GitHub 最近一次更新时间** | 4天前                                                               |
| **开源协议**                | [MIT](https://github.com/refinedev/refine?tab=MIT-1-ov-file#readme) |
| **活跃提交者数量**          | 287                                                                 |
| **是否接受外部 PR**         | 是                                                                  |
| **官网**                    | https://refine.dev/                                                 |
| **文档**                    | https://refine.dev/docs/                                            |

**简介**

Refine 是一个开源的企业级 Retool 替代品，用于构建 React 基础的内部工具、管理面板、仪表盘和 B2B 应用。它结合了低代码和全代码的优点，提供从启动到长期维护的可扩展性。

**特点**

* **纯 React 代码**：提供完全可控的开源解决方案，避免黑盒限制。
* **企业级安全**：支持自托管部署，与现有的身份验证提供者无缝集成，支持复杂的访问控制模型。
* **模块化架构**：轻松集成 REST 和 GraphQL API，支持多种前端库和框架。

**使用场景**

Refine 适合企业开发者构建和维护高度定制的内部应用，特别是那些需要强大自定义和高安全标准的场景。

💡 阅读更多：[开源 CRUD 开发工具：NocoBase 与 Refine 对比](https://www.nocobase.com/cn/blog/nocobase-vs-refine)

## 第6：**[ToolJet](https://www.tooljet.com/)**

![ToolJet.png](https://static-docs.nocobase.com/e3775e65b89e89fbbd796bbf5b8a9528.png)


| **GitHub**                  | https://github.com/ToolJet/ToolJet                                |
| --------------------------- | ----------------------------------------------------------------- |
| **GitHub Star 数**          | 35.8k                                                             |
| **GitHub 最近一次更新时间** | 2天前                                                             |
| **开源协议**                | [AGPL-3.0](https://github.com/ToolJet/ToolJet#AGPL-3.0-1-ov-file) |
| **活跃提交者数量**          | 644                                                               |
| **是否接受外部 PR**         | 是                                                                |
| **官网**                    | https://www.tooljet.com/                                          |
| **文档**                    | https://docs.tooljet.com/docs/                                    |

**简介**

ToolJet 是一个开源低代码平台，用于构建业务应用，可以连接到数据库、云存储、GraphQL、API 端点等，并使用拖放应用构建器来创建应用。

**特点**

* **多数据源连接**：支持与50多种应用、数据库和API的无缝集成。
* **可视化应用构建器**：提供拖放界面，简化前端开发。
* **工作流自动化**：允许自动化复杂的手动业务流程，减少开发者工作量。

**使用场景**

ToolJet 适用于需要快速构建和维护自定义内部工具的企业，尤其适用于具有复杂集成需求的场景。

## 第5：**[Appsmith](https://www.appsmith.com/)**

![Appsmith.png](https://static-docs.nocobase.com/e91120006b296b79e6403fafc7584083.png)


| **GitHub**                  | https://github.com/appsmithorg/appsmith                                               |
| --------------------------- | ------------------------------------------------------------------------------------- |
| **GitHub Star 数**          | 37.2k                                                                                 |
| **GitHub 最近一次更新时间** | 当天                                                                                  |
| **开源协议**                | [Apache 2.0](https://github.com/appsmithorg/appsmith?tab=Apache-2.0-1-ov-file#readme) |
| **活跃提交者数量**          | 334                                                                                   |
| **是否接受外部 PR**         | 是                                                                                    |
| **官网**                    | https://www.appsmith.com/                                                             |
| **文档**                    | https://docs.appsmith.com/                                                            |

**简介**

Appsmith 是一个开源的内部工具构建平台，允许开发者使用低代码方式快速创建、部署和管理企业内部工具。它支持连接到任何数据库、SaaS 工具或 API，并提供灵活的UI构建选项。

**特点**

* **广泛的集成**：支持 18+ 原生集成，轻松连接数据源。
* **灵活的开发选项**：提供 45+ 可定制小部件和内置 JavaScript 编辑器，支持复杂的自定义需求。
* **快速部署与协作**：Appsmith 提供即时预览和一键部署功能，使团队能够快速协作和迭代应用。

**使用场景**

Appsmith 适合于需要快速构建和维护内部管理面板、CRM 系统、客户支持门户和其他后台应用的企业。

💡 阅读更多：[NocoBase 与 Appsmith：哪个开源低代码平台更适合你？](https://www.nocobase.com/cn/blog/nocobase-vs-appsmith)

## 第4：**[Flowise](https://flowiseai.com/)**

![Flowise.png](https://static-docs.nocobase.com/fdbbdef6595cdd762173f9817f8adabd.png)


| **GitHub**                  | https://github.com/FlowiseAI/Flowise                                               |
| --------------------------- | ---------------------------------------------------------------------------------- |
| **GitHub Star 数**          | 39.9k                                                                              |
| **GitHub 最近一次更新时间** | 4天前                                                                              |
| **开源协议**                | [Apache 2.0](https://github.com/FlowiseAI/Flowise?tab=Apache-2.0-1-ov-file#readme) |
| **活跃提交者数量**          | 237                                                                                |
| **是否接受外部 PR**         | 是                                                                                 |
| **官网**                    | https://flowiseai.com/                                                             |
| **文档**                    | https://docs.flowiseai.com/                                                        |

**简介**

Flowise 是一个开源低代码工具，专为开发定制化的大语言模型(LLM)应用而设计。它允许开发者通过简单的拖放界面构建复杂的 LLM 流程和 AI 代理，加速从原型到生产的开发过程

**特点**

* **快速迭代**：支持低代码方法，使从测试到生产的迭代更快。
* **拖放界面**：简化了 LLM 应用的创建过程，支持使用内置模板和逻辑。
* **多模态集成**：支持连接到多种数据源和 API，如数据库和云服务。

**使用场景**

Flowise 适合于需要快速开发和部署AI驱动的交互应用的企业，如客户服务自动化、智能数据分析和多语言支持系统。

## **第3：**[NocoDB](https://nocodb.com/)

![NocoDB.png](https://static-docs.nocobase.com/7acac7be42aef2371755493d8ffc25fb.png)


| **GitHub**                  | https://github.com/nocodb/nocodb                                |
| --------------------------- | --------------------------------------------------------------- |
| **GitHub Star 数**          | 54.8k                                                           |
| **GitHub 最近一次更新时间** | 当天                                                            |
| **开源协议**                | [AGPL-3.0](https://github.com/nocodb/nocodb#AGPL-3.0-1-ov-file) |
| **活跃提交者数量**          | 326                                                             |
| **是否接受外部 PR**         | 是                                                              |
| **官网**                    | https://nocodb.com/                                             |
| **文档**                    | https://docs.nocodb.com/                                        |

**简介**

NocoDB 是 Airtable 的开源替代品，可以将任何数据库转换为智能表格，实现强大的数据管理和自动化。

**特点**

* **灵活的数据视图**：提供网格、看板、画廊、表单和日历视图，以适应不同的数据展示需求。
* **高扩展性**：支持数百万行数据处理，适用于大规模数据库应用。
* **强大的API支持**：提供高吞吐量的 API，确保数据操作的灵活性和效率。

**使用场景**

NocoDB 适用于需要数据密集型操作的企业，如 CRM、项目管理、运营管理和库存管理。

💡 阅读更多：[NocoBase 与 NocoDB：开源无代码工具深度对比](https://www.nocobase.com/cn/blog/nocobase-vs-nocodb)

## 第2：**[Dify](https://dify.ai/)**

![dify](https://static-docs.nocobase.com/dify-ziw0to.png)


| GitHub                      | [https://github.com/langgenius/dify](https://github.com/langgenius/dify)       |
| --------------------------- | ------------------------------------------------------------------------------ |
| **GitHub Star 数**          | 103k                                                                           |
| **GitHub 最近一次更新时间** | 当日                                                                           |
| **开源协议**                | [Apache License 2.0](https://github.com/langgenius/dify?tab=License-1-ov-file) |
| **活跃提交者数量**          | 842                                                                            |
| **是否接受外部 PR**         | 是                                                                             |
| **官网**                    | [https://dify.ai/](https://dify.ai/)                                           |
| **文档**                    | [https://docs.dify.ai/](https://docs.dify.ai/)                                 |

**简介**

Dify 是一款支持本地部署的开源 AI 应用开发平台，专注于帮助开发者和团队快速构建、管理和上线基于大语言模型的 AI 原型与应用。

**特点**

* **支持多模型接入**：兼容 OpenAI、Anthropic、Google Gemini、Moonshot、Deepseek 等主流大模型。
* **可视化流程配置**：通过 Prompt Flow（提示流）设计器，无需编码即可构建多轮对话与复杂逻辑。
* **嵌入与 API 调用**：生成的 AI 应用支持以 Web Widget、API 或内嵌形式部署到任意平台。

**使用场景**

Dify 适用于希望快速构建 AI 产品原型、部署内部助手或打造自定义 AI 工具的开发者与企业。

## 第1：**[n8n](https://n8n.io/)**

![n8n.png](https://static-docs.nocobase.com/10a56d828deefc995fe87f19b7938336.png)


| **GitHub**                  | https://github.com/n8n-io/n8n                                                         |
| --------------------------- | ------------------------------------------------------------------------------------- |
| **GitHub Star 数**          | 106k                                                                                  |
| **GitHub 最近一次更新时间** | 当天                                                                                  |
| **开源协议**                | [Sustainable Use License](https://github.com/n8n-io/n8n?tab=License-1-ov-file#readme) |
| **活跃提交者数量**          | 492                                                                                   |
| **是否接受外部 PR**         | 是                                                                                    |
| **官网**                    | https://n8n.io/                                                                       |
| **文档**                    | https://docs.n8n.io/                                                                  |

**简介**

n8n 是一个开源的工作流自动化工具，使技术团队能够通过视觉编程界面连接任何在线服务或 API。它支持高度定制的工作流，可实现数据的自动传输和处理，增强业务操作的效率和自动化。

**特点**

* **开源和可扩展**：用户可以自由修改和扩展功能。
* **多种集成**：支持 400 多种应用的集成。
* **强大的自动化功能**：提供高级 AI 功能，支持复杂的数据操作和交互。

**使用场景**

n8n 特别适用于需要自动化处理大量数据和集成多个系统的企业，如自动化营销、客户数据分析，以及内部工作流的优化。

💡 阅读更多：[构建工作流自动化的 5 个最佳工具](https://www.nocobase.com/cn/blog/workflow-automation-tools)

**相关阅读：**

* [GitHub Star 数量前 11 的开源内部工具](https://www.nocobase.com/cn/blog/open-source-internal-tools)
* [GitHub 上 Stars 数量最多的 8 个开源 CRUD 项目](https://www.nocobase.com/cn/blog/crud-projects)
* [GitHub Star 数量前 12 的开源无代码工具](https://www.nocobase.com/cn/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [如何构建高效的 CRUD 应用程序？](https://www.nocobase.com/cn/blog/how-to-build-efficient-crud-apps)
* [探索最佳无代码低代码工具：加速 Web 应用开发](https://www.nocobase.com/cn/blog/web-application-development)
* [在数小时内构建 CRM：你需要了解的顶级无代码/低代码工具](https://www.nocobase.com/cn/blog/low-code-no-code-crm-builder)

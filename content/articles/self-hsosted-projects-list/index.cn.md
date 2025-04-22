一个多月前，我们撰写并发布了这篇文章《[终极自托管解决方案指南](https://www.nocobase.com/cn/blog/the-ultimate-guide-to-awesome-self-hosted-solutions)》。在那篇文章里我们深入探讨了云端服务与自托管方案的对比、自托管的潜在挑战、如何选择适合自托管解决方案，并深入介绍了五款涵盖不同场景的优秀自托管产品。

关于自托管的优势，本文就不再赘述。今天这篇文章里，让我们来深入挖掘 GitHub 上优秀的自托管项目！

从 [GitHub 的自托管项分类里](https://github.com/topics/self-hosted)，我们选出了 Star 数量最多的13个项目。这些项目不仅技术成熟，而且社区活跃，可以为你提供强大的支持。

这份清单会根据 GitHub 里的 Star 数量进行排序，希望可以将一些优秀的项目带到你眼前。

（😁如果觉得这篇文章对你有帮助，也可以把它分享给对身边自托管感兴趣的朋友们。）

## **快速浏览 13 个优秀****自托管****项目**

**13.NocoBase——低代码/无代码开发平台**

**12.khoj——人工智能知识管理系统**

**11.changedetection.io——网页变化检测工具**

**10.Dashy——仪表板管理工具**

**9.SiYuan——知识管理和笔记系统**

**8.SigNoz——全栈应用监控和日志分析平台**

**7.ToolJet——低代码开发平台**

**6.Memos——笔记和知识管理系统**

**5.Appsmith——低代码开发平台**

**4.Appwrite——后端即服务 (BaaS) 平台**

**3.Immich——照片和视频管理平台**

**2.Gogs——Git 仓库管理解决方案**

**1.n8n——自动化和工作流工具**

项目清单在依据 GitHub Star 数量进行排序的同时，考虑到项目的活跃度和维护状态，进一步剔除了近三天没有更新的项目，并以表格的形式清晰展现了项目在 GitHub 上值得参考的数据信息。

## No.13：NocoBase

![NocoBase.PNG](https://static-docs.nocobase.com/0bcf0e5b90eaf4ec0754e3a04287bde3.PNG)

**GitHub 数据**


| GitHub                 | [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase) |
| ---------------------- | ---------------------------------------------------------------------------- |
| GitHub Star 数         | 11.6k                                                                        |
| GitHub Fork 数         | 1.3k                                                                         |
| GitHub Issue 数        | 31                                                                           |
| GitHub Pull Request 数 | 41                                                                           |
| GitHub Contributor 数  | 71                                                                           |
| 开源协议               | [AGPL-3.0](https://github.com/nocobase/nocobase/blob/main/LICENSE-AGPL.txt)  |
| 官网                   | [https://www.nocobase.com/](https://www.nocobase.com/)                       |
| 文档                   | [https://docs.nocobase.com/](https://docs.nocobase.com/)                     |

**简介**

NocoBase 是一个开源、自托管的无代码和低代码开发平台。NocoBase 专为开发者设计，其插件化架构使开发者能够轻松添加和定制功能，满足各种复杂的业务需求。

🙌 上手实践：[NocoBase 实战教程 —— 任务管理系统](https://www.nocobase.com/cn/tutorials/task-tutorial-introduction)

**自托管亮点**

* **数据隐私与控制**：NocoBase 允许用户在自己的服务器上运行应用和数据库，支持多种主流数据库接入，包括： MySQL、MariaDB、PostgreSQL、SQL Server、Oracle，以及 API 接入。
* **自定义能力**：作为一个无代码/低代码平台，NocoBase 提供了高度的可定制性，用户可以通过所见即所得界面创建和调整应用程序，基于插件的设计允许无限扩展，满足具体业务需求。
* **维护成本**：长期维护成本低，适合需要快速开发和部署自定义系统且不希望负担大型开发团队的企业。

**应用场景**

* **快速搭建内部工具**：如CRM、项目管理系统、CMS 等。
* **交付客户项目**：使用 NocoBase 搭建满足客户需求的项目。
* **作为企业的基础设施**：连接和集成不同系统，统一数据和管理。

💡 阅读更多：[在数小时内构建 CRM：你需要了解的顶级无代码（零代码）/低代码工具](https://www.nocobase.com/cn/blog/low-code-no-code-crm-builder)

## No.12：khoj

![khoj.PNG](https://static-docs.nocobase.com/1db1a4fa38f101ffc3ad9361d914959e.PNG)

**GitHub 数据**


| GitHub                 | [https://github.com/khoj-ai/khoj](https://github.com/khoj-ai/khoj)  |
| ---------------------- | ------------------------------------------------------------------- |
| GitHub Star 数         | 12.4k                                                               |
| GitHub Fork 数         | 627                                                                 |
| GitHub Issue 数        | 64                                                                  |
| GitHub Pull Request 数 | 3                                                                   |
| GitHub Contributor 数  | 35                                                                  |
| 开源协议               | [AGPL-3.0](https://github.com/khoj-ai/khoj?tab=AGPL-3.0-1-ov-file#) |
| 官网                   | [https://khoj.dev/](https://khoj.dev/)                              |
| 文档                   | [https://docs.khoj.dev/](https://docs.khoj.dev/)                    |

**简介**

Khoj 是一个自托管的人工智能知识管理系统，通过集成在线AI模型，或部署私有的本地大型语言模型，帮助团队和个人组织和管理知识库。

**自托管亮点**

* **数据隐私与控制**：Khoj 自托管在用户服务器上，保证了知识管理数据的完全控制权和隐私，适合对数据安全有高要求的用户。
* **自定义能力**：支持用户根据自身需求自定义知识管理系统的结构和功能，包括文档类型和存储方式。
* **维护成本**：用户需要自行处理软件的安装、配置和维护。

## No.11：changedetection.io

![changedetection.io.png](https://static-docs.nocobase.com/2f5d97b3a0a24963a4971cdf5716120c.png)

**GitHub 数据**


| GitHub                 | [https://github.com/dgtlmoon/changedetection.io](https://github.com/dgtlmoon/changedetection.io) |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| GitHub Star 数         | 16.8k                                                                                            |
| GitHub Fork 数         | 932                                                                                              |
| GitHub Issue 数        | 199                                                                                              |
| GitHub Pull Request 数 | 30                                                                                               |
| GitHub Contributor 数  | 75                                                                                               |
| 开源协议               | [Apache-2.0](https://github.com/dgtlmoon/changedetection.io?tab=Apache-2.0-1-ov-file#)           |
| 官网                   | [https://changedetection.io/](https://changedetection.io/)                                       |
| 文档                   | [https://stedolan.github.io/jq/manual/](https://stedolan.github.io/jq/manual/)                   |

**简介**

changedetection.io 是一个开源的网页变化检测工具，可以监控指定网页的内容变化，并在变化发生时通知用户。

**自托管亮点**

* **数据隐私与控制**：在本地托管 changedetection.io 确保了网页监控数据不被第三方访问，用户完全控制监控数据。
* **自定义能力**：允许对监控规则和通知机制进行详细配置，适合需要高度定制的使用场景。
* **维护成本**：需要用户处理软件更新和问题解决，但降低了长期费用。

## No.10：Dashy

![Dashy.png](https://static-docs.nocobase.com/865a2bdf8e260c7088891c375a864cae.png)

**GitHub 数据**


| GitHub                 | [https://github.com/Lissy93/dashy](https://github.com/Lissy93/dashy) |
| ---------------------- | -------------------------------------------------------------------- |
| GitHub Star 数         | 16.8k                                                                |
| GitHub Fork 数         | 1.3k                                                                 |
| GitHub Issue 数        | 84                                                                   |
| GitHub Pull Request 数 | 2                                                                    |
| GitHub Contributor 数  | 128                                                                  |
| 开源协议               | [MIT](https://github.com/Lissy93/dashy?tab=MIT-1-ov-file#)           |
| 官网                   | [https://dashy.to/](https://dashy.to/)                               |
| 文档                   | [https://dashy.to/docs](https://dashy.to/docs)                       |

**简介**

Dashy 是一个自托管的仪表板管理工具，提供美观且易于管理的界面，用于集中访问各种服务和应用。

💡 阅读更多：[6 个最佳核心应用仪表盘构建工具](https://www.nocobase.com/cn/blog/core-app-dashboard-building-tools)

**自托管亮点**

* **数据隐私与控制**：Dashy 允许用户将所有服务和应用集中在本地仪表板上，确保用户的访问信息和设置不被外部服务干扰。
* **自定义能力**：支持将所有常用服务和应用整合到一个自定义仪表板上，支持多种主题和自定义选项。
* **维护成本**：需要用户处理部署和维护仪表板。

## No.9：siyuan

![siyuan.png](https://static-docs.nocobase.com/0bff73d7aedf97ff6633776323a3d2d9.png)

**GitHub 数据**


| GitHub                 | [https://github.com/siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) |
| ---------------------- | ------------------------------------------------------------------------------ |
| GitHub Star 数         | 18.2k                                                                          |
| GitHub Fork 数         | 1.4k                                                                           |
| GitHub Issue 数        | 371                                                                            |
| GitHub Pull Request 数 | /                                                                              |
| GitHub Contributor 数  | 51                                                                             |
| 开源协议               | [AGPL-3.0](https://github.com/siyuan-note/siyuan?tab=AGPL-3.0-1-ov-file#)      |
| 官网                   | [https://b3log.org/siyuan](https://b3log.org/siyuan)                           |
| 文档                   | /                                                                              |

**简介**

SiYuan 是一个隐私为先、完全开源、自托管的个人知识管理软件，使用TypeScript和Golang编写。

**自托管亮点**

* **数据隐私与控制**：SiYuan 可以在用户自己的服务器上运行，确保笔记和知识库数据的隐私和安全。
* **自定义能力**：支持丰富的文档编辑和组织功能，用户可以通过插件和扩展进行个性化定制。
* **维护成本**：需要用户管理更新和技术支持，但避免了云服务的长期费用。

## No.8：SigNoz

![SigNoz.png](https://static-docs.nocobase.com/47d30d92657261ae879c97ee5ed5f32c.png)

**GitHub 数据**


| GitHub                 | [https://github.com/SigNoz/signoz](https://github.com/SigNoz/signoz) |
| ---------------------- | -------------------------------------------------------------------- |
| GitHub Star 数         | 18.3k                                                                |
| GitHub Fork 数         | 1.2k                                                                 |
| GitHub Issue 数        | 1k                                                                   |
| GitHub Pull Request 数 | 200                                                                  |
| GitHub Contributor 数  | 149                                                                  |
| 开源协议               | [License](https://github.com/SigNoz/signoz?tab=License-1-ov-file#)   |
| 官网                   | [https://signoz.io/](https://signoz.io/)                             |
| 文档                   | [https://signoz.io/docs](https://signoz.io/docs)                     |

**简介**

SigNoz 是一个原生支持 OpenTelemetry 的开源可观测性平台，集成了日志、追踪和指标于一体。

**自托管亮点**

* **数据隐私与控制**：SigNoz 提供了一个本地部署的监控和日志分析解决方案，可以控制数据的存储和访问权限。
* **自定义能力**：允许用户根据需要配置监控仪表板、警报和数据可视化选项，提供强大的定制功能。
* **维护成本**：需要用户处理硬件和软件的维护工作。

## No.7：ToolJet

![ToolJet.png](https://static-docs.nocobase.com/8df0345f3f50a7062f36c108b9925d6d.png)

**GitHub 数据**


| GitHub                 | [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) |
| ---------------------- | ------------------------------------------------------------------------ |
| GitHub Star 数         | 28.6k                                                                    |
| GitHub Fork 数         | 3.5k                                                                     |
| GitHub Issue 数        | 757                                                                      |
| GitHub Pull Request 数 | 179                                                                      |
| GitHub Contributor 数  | 541                                                                      |
| 开源协议               | [AGPL-3.0](https://github.com/ToolJet/ToolJet#AGPL-3.0-1-ov-file)        |
| 官网                   | [https://tooljet.com/](https://tooljet.com/)                             |
| 文档                   | [https://docs.tooljet.com/](https://docs.tooljet.com/)                   |

**简介**

ToolJet 是一个开源的低代码开发平台，支持拖拽式界面构建和多种集成，用于快速创建和部署自定义的Web应用程序。

💡 阅读更多：[探索最佳无代码（零代码）低代码工具：加速 Web 应用开发](https://www.nocobase.com/cn/blog/web-application-development)

**自托管亮点**

* **数据隐私与控制**：用户可以在自己的服务器或私有云上部署平台，确保应用和数据的隐私。
* **自定义能力**：提供了丰富的拖拽式界面构建功能，允许用户根据业务需求定制应用程序。
* **维护成本**：需要用户进行安装和维护。

## No.6：memos

![memos.png](https://static-docs.nocobase.com/e70834be00b9e97913a097a7c2a05dff.png)

**GitHub 数据**


| GitHub                 | [https://github.com/usememos/memos](https://github.com/usememos/memos) |
| ---------------------- | ---------------------------------------------------------------------- |
| GitHub Star 数         | 30k                                                                    |
| GitHub Fork 数         | 2.2k                                                                   |
| GitHub Issue 数        | 30                                                                     |
| GitHub Pull Request 数 | 9                                                                      |
| GitHub Contributor 数  | 239                                                                    |
| 开源协议               | [MIT](https://github.com/usememos/memos?tab=MIT-1-ov-file#)            |
| 官网                   | [https://usememos.com/](https://usememos.com/)                         |
| 文档                   | [https://www.usememos.com/docs](https://www.usememos.com/docs)         |

**简介**

Memos 是一个开源的自托管笔记和知识管理系统，旨在帮助用户记录和组织信息，支持 Markdown 编辑。

**自托管亮点**

Memos 允许用户在自己的服务器上运行，确保笔记和知识数据的安全性。它提供了强大的搜索和标签功能，适合个人或团队使用。

* **数据隐私与控制**：Memos 允许用户在本地服务器上管理笔记和知识库，确保数据不被外部服务访问和管理。
* **自定义能力**：支持自定义笔记本结构、标签和分类，适合各种笔记和知识管理需求。
* **维护成本**：需要用户处理技术支持和维护。

## No.5：Appsmith

![Appsmith.png](https://static-docs.nocobase.com/05c3fd9f686f4433228ed5a17326bd6e.png)

**GitHub 数据**


| GitHub                 | [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith) |
| ---------------------- | ---------------------------------------------------------------------------------- |
| GitHub Star 数         | 32.9k                                                                              |
| GitHub Fork 数         | 3.6k                                                                               |
| GitHub Issue 数        | 3.7k                                                                               |
| GitHub Pull Request 数 | 108                                                                                |
| GitHub Contributor 数  | 315                                                                                |
| 开源协议               | [Apache-2.0](https://github.com/appsmithorg/appsmith#)                             |
| 官网                   | [www.appsmith.com](http://www.appsmith.com)                                        |
| 文档                   | [https://docs.appsmith.com/](https://docs.appsmith.com/)                           |

**简介**

Appsmith 是一个开源的低代码平台，用于快速构建、部署和管理具有企业级安全性和治理的有效软件。

💡 阅读更多：[NocoBase 与 Appsmith：哪个开源低代码平台更适合你？](https://www.nocobase.com/cn/blog/nocobase-vs-appsmith)

**自托管亮点**

* **数据隐私与控制**：Appsmith 允许在用户自己的服务器上托管，确保应用数据和用户信息的隐私和安全。
* **自定义能力**：提供了丰富的低代码开发功能，支持多种数据源集成和自定义界面设计。
* **维护成本**：避免了商业低代码平台的高费用，但需要用户处理自托管的维护和支持。

## No.4：appwrite

![appwrite.png](https://static-docs.nocobase.com/47e06288e9be66b1b1f5e9abb01aa66c.png)

**GitHub 数据**


| GitHub                 | [https://github.com/appwrite/appwrite](https://github.com/appwrite/appwrite)     |
| ---------------------- | -------------------------------------------------------------------------------- |
| GitHub Star 数         | 43.6k                                                                            |
| GitHub Fork 数         | 3.9k                                                                             |
| GitHub Issue 数        | 607                                                                              |
| GitHub Pull Request 数 | 152                                                                              |
| GitHub Contributor 数  | 338                                                                              |
| 开源协议               | [BSD-3-Clause](https://github.com/appwrite/appwrite?tab=BSD-3-Clause-1-ov-file#) |
| 官网                   | [https://appwrite.io/](https://appwrite.io/)                                     |
| 文档                   | [https://appwrite.io/docs](https://appwrite.io/docs)                             |

**简介**

Appwrite 是一个开源的后端即服务 (BaaS) 平台，提供用户认证、数据库、文件存储等功能，帮助开发者快速构建应用程序。

**自托管亮点**

* **数据隐私与控制**：Appwrite 可以在本地服务器上运行，确保所有后端服务和用户数据的安全性和隐私。
* **自定义能力**：提供了多种后端服务功能，包括用户认证、数据库、文件存储等，支持灵活的配置和扩展。
* **维护成本**：避免了云服务的订阅费用，但需要用户进行系统维护和更新。

## No.3：immich

![immich.png](https://static-docs.nocobase.com/f6c8f683762f765e9513f1bf481c3e8a.png)

**GitHub 数据**


| GitHub                 | [https://github.com/immich-app/immich](https://github.com/immich-app/immich) |
| ---------------------- | ---------------------------------------------------------------------------- |
| GitHub Star 数         | 44.1k                                                                        |
| GitHub Fork 数         | 2.2k                                                                         |
| GitHub Issue 数        | 370                                                                          |
| GitHub Pull Request 数 | 60                                                                           |
| GitHub Contributor 数  | 738                                                                          |
| 开源协议               | [AGPL-3.0](https://github.com/immich-app/immich?tab=AGPL-3.0-1-ov-file#)     |
| 官网                   | [https://immich.app/](https://immich.app/)                                   |
| 文档                   | [https://immich.app/docs](https://immich.app/docs)                           |

**简介**

Immich 是一个开源的自托管照片和视频管理平台，提供了照片备份、组织和共享功能。

**自托管亮点**

* **数据隐私与控制**：Immich 允许用户在自己的服务器上管理和存储照片和视频，确保媒体数据的隐私和安全。
* **自定义能力**：提供了自动备份、智能标签等功能，用户可以根据需求进行配置和调整。
* **维护成本**：可以减少外部存储和备份服务的费用，但需要处理服务器和软件维护。

## No.2：Gogs

![Gogs.png](https://static-docs.nocobase.com/64730b4314d0e1b52b1604251b8af7c5.png)

**GitHub 数据**


| GitHub                 | [https://github.com/gogs/gogs](https://github.com/gogs/gogs) |
| ---------------------- | ------------------------------------------------------------ |
| GitHub Star 数         | 44.8k                                                        |
| GitHub Fork 数         | 4.8k                                                         |
| GitHub Issue 数        | 895                                                          |
| GitHub Pull Request 数 | 42                                                           |
| GitHub Contributor 数  | 496                                                          |
| 开源协议               | [MIT](https://github.com/gogs/gogs?tab=MIT-1-ov-file#)       |
| 官网                   | [https://gogs.io/](https://gogs.io/)                         |
| 文档                   | [https://gogs.io/docs](https://gogs.io/docs)                 |

**简介**

Gogs 是一个开源的 Git 服务器，旨在提供一个简单、轻量的自托管 Git 仓库管理解决方案。

**自托管亮点**

* **数据隐私与控制**：Gogs 自托管在本地服务器上，确保 Git 仓库的数据完全由用户控制。
* **自定义能力**：提供了基本的 Git 仓库管理功能，用户可以根据需要进行配置和扩展。
* **维护成本**：Gogs 轻量易用，适合资源有限的环境，但需要用户自行管理和维护。

## No.1：n8n

![n8n.png](https://static-docs.nocobase.com/5269b2f278483c39327cfb72343cc589.png)

**GitHub 数据**


| GitHub                 | [https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)       |
| ---------------------- | -------------------------------------------------------------------- |
| GitHub Star 数         | 45.2k                                                                |
| GitHub Fork 数         | 6.2k                                                                 |
| GitHub Issue 数        | 219                                                                  |
| GitHub Pull Request 数 | 181                                                                  |
| GitHub Contributor 数  | 427                                                                  |
| 开源协议               | [License-1-ov-file](https://github.com/n8n-io/n8n#License-1-ov-file) |
| 官网                   | [https://n8n.io/](https://n8n.io/)                                   |
| 文档                   | [https://docs.n8n.io/](https://docs.n8n.io/)                         |

**简介**

n8n 是一个开源的自动化和工作流工具，允许用户创建复杂的工作流和自动化任务，支持多种集成和触发器。

💡 阅读更多：[⭐️ GitHub Star 数量前十的工作流项目](https://www.nocobase.com/cn/blog/top-10-open-source-workflows-projects-with-the-most-github-stars)

**自托管亮点**

* **数据隐私与控制**：n8n 自托管确保用户的数据和自动化流程完全由自己控制。
* **自定义能力**：支持创建复杂的工作流和集成多种服务，提供灵活的自动化解决方案，满足各种业务需求。
* **维护成本**：减少了对商业自动化平台的依赖和费用，但需要用户处理维护和更新。

## 总结

这份自托管项目清单涵盖了低代码开发平台、知识管理和笔记系统、监控和日志分析工具等类型，希望能够帮助你找到合适的自托管项目，更好地利用其强大的数据控制能力、安全性和定制性！

**相关阅读：**

* [终极自托管解决方案指南](https://www.nocobase.com/cn/blog/the-ultimate-guide-to-awesome-self-hosted-solutions)
* [2024 年五大最佳构建内部工具的开源项目](https://www.nocobase.com/cn/blog/top-5-open-source-projects-for-building-internal-tools-in-2024)
* [GitHub Star 数量前 12 的开源无代码工具](https://www.nocobase.com/cn/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [GitHub 上 Stars 数量最多的 8 个开源 CRUD 项目](https://www.nocobase.com/cn/blog/crud-projects)
* [GitHub Star 数量前 11 的开源内部工具](https://www.nocobase.com/cn/blog/open-source-internal-tools)
* [GitHub Star 数量前 15 的开源低代码项目](https://www.nocobase.com/cn/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)

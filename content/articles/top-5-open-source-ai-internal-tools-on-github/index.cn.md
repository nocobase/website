之前我们整理过很多开源 AI 项目相关的内容，包括 [GitHub 上 11 款开源的 AI 无代码平台](https://www.nocobase.com/cn/blog/top-11-github-open-source-no-code-ai-tools)、以及 [AI 低代码工具的盘点文章](https://www.nocobase.com/cn/blog/14-ai-low-code-platforms-github)。AI 技术的快速演进，我们看到越来越多的开源项目开始主动拥抱 AI。

同样的趋势，也正在发生在内部工具（Internal Tools）领域。去年我们盘点过[一批优秀的开源内部工具](https://www.nocobase.com/cn/blog/open-source-internal-tools)，但进入 2025 年后，这些工具几乎都陆续加入了 AI 能力，整体都已经焕然一新。因此，我们决定重新做一次系统性的更新。

😄[如果您对内部工具的概念及其带来的价值还不太了解，可以先点击这里查看相关介绍。](https://www.nocobase.com/cn/blog/top-5-open-source-projects-for-building-internal-tools-in-2024#%E5%86%85%E9%83%A8%E5%B7%A5%E5%85%B7%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84)

这次，我们从 [GitHub Internal Tools](https://github.com/topics/internal-tools) 话题里重新筛选了 Star 数排名靠前且 GitHub Star 数均超过 20k 的开源内部工具项目，介绍他们的技术信息以及适用场景.

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

希望这份更新能帮助你快速了解哪些开源内部工具在 AI 时代依然值得投入，也为正在自建内部工具的技术团队提供清晰的参考方向。

你可以先快速浏览一下本文会介绍的 5 款开源内部工具：

* **NocoBase**：数据模型驱动的无代码开发平台，非常适合用于搭建内部工具，插件架构高度可扩展，AI 员工可介入数据整理、建模、图表生成、代码生成等场景。
* **Budibase**：低代码内部工具平台，提供数据库、拖拽构建、自动生成 CRUD、AI Column、AI 表结构等能力。
* **Refine**：基于 React 的元框架，适合构建 CRUD 密集型后台系统，并支持通过 AI 自动生成应用结构与代码。
* **ToolJet**：低代码与 AI-native 融合的平台，支持用自然语言生成内部工具的界面与逻辑。
* **Appsmith**：成熟的开源低代码平台，可连接多数据源，适合构建管理后台、仪表盘、审批系统，并已加入多种 AI 操作能力。

### NO.5 nocobase

![nocobase.png](https://static-docs.nocobase.com/nocobase-ovk3pi.png)


| GitHub 地址             | [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)                 |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| 官网                    | [https://www.nocobase.com/cn/](https://www.nocobase.com/cn/)                                 |
| 开源协议                | AGPL-3.0                                                                                     |
| GitHub Star 数          | 20.5k                                                                                        |
| GitHub Fork 数          | 2.3k                                                                                         |
| GitHub Issue 数         | 129                                                                                          |
| GitHub Pull Request 数  | 125                                                                                          |
| GitHub Contributor 数   | 101                                                                                          |
| GitHub 最近一次更新时间 | 当天                                                                                         |
| 相关文档链接            | [https://v2.docs.nocobase.com/cn/ai-employees](https://v2.docs.nocobase.com/cn/ai-employees) |

**工具介绍**

NocoBase 是一个数据模型驱动的无代码开发平台，非常适合用于搭建内部工具，通过插件架构支持高度扩展，可用于创建管理后台、业务系统、CRM、审批流等各种企业内部应用。系统提供所见即所得的界面构建能力，并支持复杂的数据关系、权限体系与自定义逻辑，适合需要快速构建业务工具的团队。

在 NocoBase 中，AI 并不是独立模块，而是与表格、表单、数据模型和工作流深度结合的智能能力。NocoBase 的 AI 员工模块将 AI 能力直接融入业务系统，可以与数据模型、表单、表格和工作流协同工作。官方内置多种 AI 员工类型，包括数据整理、数据建模、知识库搜索、图表生成和代码生成等功能，可以帮助用户以更低的成本完成数据处理、界面配置和逻辑构建。

**适用场景**

**数据整理场景（Dex 数据整理专家）**

在录入客户信息、工单内容、合同条款等场景中，AI 员工可以从非结构化的数据或文件中提取所需的信息整理成结构化的信息，并且可以调用工具将信息填写到表单中。

![Dex.gif](https://static-docs.nocobase.com/Dex-c4uwn4.gif)

**数据分析场景（Viz 洞察分析师）**

在 Leads、Opportunities、Accounts 等业务数据页面中，AI 员工可以读取你当前页面的数据，自动生成趋势图、对比图、KPI 卡和简明结论，让业务分析变得轻松、直观。

![Viz.gif](https://static-docs.nocobase.com/Viz-demgin.gif)

**前端交互配置场景（Nathan 前端工程师）**

在需要编写 JSBlock、JSField、JSItem、JSColumn、JSAction、事件流（Event Flow）等需要写 JavaScript 的场景下，AI 员工可以读取当前代码编辑器中的上下文，根据自然语言需求自动生成或优化前端代码。

![Nathan.png](https://static-docs.nocobase.com/Nathan-n9ybjn.png)

**数据建模场景（Orin 数据建模师）**

在搭建内部系统（CRM、工单、库存、项目管理等）的数据模型时，AI 员工能够帮助你创建或修改数据表。

![Orin.png](https://static-docs.nocobase.com/Orin-ahkat1.png)

### NO.4 budibase

![budibase.png](https://static-docs.nocobase.com/budibase-wahysy.png)


| GitHub 地址             | [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)                                   |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| 官网                    | [https://budibase.com/](https://budibase.com/)                                                                 |
| 开源协议                | GPL-v3                                                                                                         |
| GitHub Star 数          | 27.4k                                                                                                          |
| GitHub Fork 数          | 2k                                                                                                             |
| GitHub Issue 数         | 294                                                                                                            |
| GitHub Pull Request 数  | 12                                                                                                             |
| GitHub Contributor 数   | 112                                                                                                            |
| GitHub 最近一次更新时间 | 当天                                                                                                           |
| 相关文档链接            | [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai) |

**工具介绍**

Budibase 是一个开源低代码内部工具平台，它提供数据库连接、多种数据源支持、拖拽 UI 构建、自动生成 CRUD 界面与工作流功能，适合快速搭建企业后台、审批系统、表单／管理面板等业务系统。其内置数据库 + REST API 连接能力 + 可视化界面构建，使得即便没有深度前端经验，也能构建功能完备的内部应用。

Budibase 已将 AI 能力整合为其平台内置功能之一。通过启用 Budibase AI，用户可以为表格添加 AI Column，用自然语言生成 JavaScript 逻辑，为数据库自动生成表结构，还可通过 AI 自动化动作自动处理文本、分类、清洗、生成数据等。

**适用场景**

**智能数据清洗与内容整理** 使用 AI Column 自动清洗或规范数据，可适用于客户反馈管理、内容审核、工单处理等场景。

![AI Column.png](https://static-docs.nocobase.com/AI%20Column-imcj5c.png)

**自动生成数据库表结构** 当你需要快速搭建新的业务模块，比如客户管理、合同系统或任务管理系统时，可以通过 Budibase AI 一句话生成合适的数据表结构和示例数据。

![数据库表结构.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84-rc0ka3.png)

### NO.3 Refine

![refine-gg18kg.png](https://static-docs.nocobase.com/refine-gg18kg.png)


| GitHub 地址             | [https://github.com/refinedev/refine](https://github.com/refinedev/refine) |
| ----------------------- | -------------------------------------------------------------------------- |
| 官网                    | [https://refine.dev/](https://refine.dev/)                                 |
| 开源协议                | MIT                                                                        |
| GitHub Star 数          | 33.5k                                                                      |
| GitHub Fork 数          | 2.9k                                                                       |
| GitHub Issue 数         | 17                                                                         |
| GitHub Pull Request 数  | 11                                                                         |
| GitHub Contributor 数   | 311                                                                        |
| GitHub 最近一次更新时间 | 2天前                                                                      |
| 相关文档链接            | [https://ai.refine.dev/](https://ai.refine.dev/)                           |

**工具介绍**

Refine 是一个开源的 React 元框架（meta-framework），专为 CRUD 密集型 Web 应用、企业后台、管理面板、Dashboard 和 B2B 内部工具设计。

Refine 推出了 Refine AI —— 将 AI 能力嵌入到内部工具创建流程中。通过 Refine AI，开发者可以用自然语言或文档／API 规范作为输入，自动生成一个基础的、生产级质量的 React 应用结构（包括 CRUD 页面、路由、鉴权、状态管理、数据请求等），输出纯 React 代码，方便进一步定制和开发。

**适用场景**

**后台管理系统生成**

Refine AI 能根据 API 或数据模型自动生成带列表页、表单页、详情页的 CRUD 管理界面，适合库存管理、订单管理、项目管理等内部系统的快速起步。

![后台管理系统生成-3eh30p.png](https://static-docs.nocobase.com/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E7%94%9F%E6%88%90-3eh30p.png)

**代码重构与维护**

Refine AI 的生成机制不仅适合新项目，也可以用在已有项目上。由于其生成代码遵循企业级结构与最佳实践，它能帮助开发者对旧系统进行模块化重构，或者在现有系统基础上快速新增新的业务模块，从而兼顾效率与可维护性。

![代码重构与维护.png](https://static-docs.nocobase.com/%E4%BB%A3%E7%A0%81%E9%87%8D%E6%9E%84%E4%B8%8E%E7%BB%B4%E6%8A%A4-muoonn.png)

💡推荐阅读：[开源 CRUD 开发工具：NocoBase 与 Refine 对比 ](https://www.nocobase.com/cn/blog/nocobase-vs-refine)

### NO.2 ToolJet

![ToolJet-4nyv0g.png](https://static-docs.nocobase.com/ToolJet-4nyv0g.png)


| GitHub 地址             | [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| 官网                    | [https://tooljet.ai/](https://tooljet.ai/)                                                                   |
| 开源协议                | AGPL-3.0                                                                                                     |
| GitHub Star 数          | 37k                                                                                                          |
| GitHub Fork 数          | 4.9k                                                                                                         |
| GitHub Issue 数         | 646                                                                                                          |
| GitHub Pull Request 数  | 313                                                                                                          |
| GitHub Contributor 数   | 651                                                                                                          |
| GitHub 最近一次更新时间 | 一天前                                                                                                       |
| 相关文档链接            | [https://docs.tooljet.com/docs/build-with-ai/overview](https://docs.tooljet.com/docs/build-with-ai/overview) |

**工具介绍**

ToolJet 是一个开源、低代码 + AI-native 平台，用于快速构建企业内部工具、仪表盘、后台管理系统及业务应用。它提供拖拽式可视化界面构建器、内置数据库、多种数据源／API／SaaS 集成能力、以及权限与协作机制，适合希望快速交付内部系统的团队。

在 ToolJet 中，AI 融合到平台构建流程里。你可以用自然语言描述想要的应用，ToolJet 会自动生成初步的 UI、数据结构与查询逻辑。

**适用场景**

**通过自然语言快速生成业务应用**

ToolJet 支持使用自然语言描述需求来构建内部工具，可以从零开始生成应用界面、数据结构和逻辑，也可以对现有应用进行调整或扩展。这使团队能够在短时间内生成如库存管理等常见内部系统，提高开发效率。

![自然语言快速生成.png](https://static-docs.nocobase.com/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90-nwf730.png)

**AI 文档助手加速构建**

ToolJet 内置一个 AI 文档助手，可以回答关于组件、功能、集成方式等平台相关的问题，帮助使用者更快理解并完成构建任务。对于不熟悉 ToolJet 或缺乏前端经验的团队，文档助手能够显著降低学习成本并提升搭建速度。

![AI 文档助手.png](https://static-docs.nocobase.com/AI%20%E6%96%87%E6%A1%A3%E5%8A%A9%E6%89%8B-75vt0c.png)

### NO.1 appsmith

![appsmith-of0467.png](https://static-docs.nocobase.com/appsmith-of0467.png)


| GitHub 地址             | [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith) |
| ----------------------- | ---------------------------------------------------------------------------------- |
| 官网                    | [https://www.appsmith.com/](https://www.appsmith.com/)                             |
| 开源协议                | Apache-2.0                                                                         |
| GitHub Star 数          | 38.6k                                                                              |
| GitHub Fork 数          | 4.4k                                                                               |
| GitHub Issue 数         | 4.4k                                                                               |
| GitHub Pull Request 数  | 38                                                                                 |
| GitHub Contributor 数   | 335                                                                                |
| GitHub 最近一次更新时间 | 一天前                                                                             |
| 相关文档链接            | [https://www.appsmith.com/ai/low-code](https://www.appsmith.com/ai/low-code)       |

**工具介绍**

Appsmith 是一个开源低代码平台，旨在帮助团队以更少代码、更快速度构建内部业务应用。它支持连接多种数据库或 API，提供丰富的可视化 UI 组件，并允许开发者通过 JavaScript 添加自定义逻辑，从而灵活构建管理后台、数据面板、审批系统、CRM、仪表盘等。

最新版本中，Appsmith 加入了 AI 能力 —— 你可以将多种主流 LLM（如 OpenAI、Google AI、Anthropic 等）接入项目，通过 AI actions 实现文本分析、摘要、语义搜索以及文本或图像分类等功能。

**适用场景**

**借助 AI 提升构建速度**

在 Appsmith 中，AI 可以在应用构建的各个阶段提供上下文帮助，包括操作指引、平台能力解释、查询编写支持、JavaScript 逻辑建议以及界面定制提示。开发者在构建内部工具时，通过侧边的帮助入口即可调出 Appy，在当前页面直接获取相关协助，从而减少查文档和试错成本。

![借助 AI 提升构建速度.png](https://static-docs.nocobase.com/%E5%80%9F%E5%8A%A9%20AI%20%E6%8F%90%E5%8D%87%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6-76dac4.png)

**在内部应用中整合 AI 能力**

例如，通过 Appsmith 的数据源、UI 组件和 Appsmith AI，团队可以创建一个用于分析客户评价的应用，并利用情感分类帮助客服人员更快识别负面评论，优先处理关键问题。从数据库查询评价内容、使用表格组件展示数据、接入 Appsmith AI datasource 执行情感分类，以及通过 JS Object 将分类结果回写到界面中，从而形成一个可交互的 AI 增强型内部工具。

![整合 AI 能力.png](https://static-docs.nocobase.com/%E6%95%B4%E5%90%88%20AI%20%E8%83%BD%E5%8A%9B-n2t9w0.png)

💡推荐阅读：[NocoBase 与 Appsmith：哪个开源低代码平台更适合你？](https://www.nocobase.com/cn/blog/nocobase-vs-appsmith)

另外，除了上述五款高星的主流项目，[Yao](https://github.com/YaoApp/yao) 和 [ILLA Builder ](https://github.com/illacloud/illa-builder)这类开源工具也同样具备不错的社区活跃度。[Yao](https://github.com/YaoApp/yao) 以全栈应用引擎的方式，为内部系统提供模型、流程与 API 的快速构建能力；[ILLA Builder](https://github.com/illacloud/illa-builder) 则面向可视化界面搭建，适合在较短时间内完成后台面板和数据工具的搭建。它们同样提供了基础的 AI 扩展能力，可以作为团队在构建内部工具时的补充选择。

### **结语**

选择内部工具时，建议可以从多个维度进行综合评估，例如：

1. AI 功能的成熟度，包括是否具备页面生成、SQL 或业务逻辑生成、图表生成、智能助手等能力；
2. 生态活跃度，如 Star、Issue、Commit 与文档更新频率，都能反映项目的可靠性和可持续性；
3. 自托管能力与安全性，影响企业内部部署和数据合规；
4. 可扩展性与二次开发难度，直接关系到未来业务持续迭代的成本。

希望本文的整理能够为你在自建内部工具时提供可参考的技术判断与选型依据。

随着生成式 AI 的不断演进，这些开源项目也会持续更新迭代，新的能力也会不断涌现。

期待这些工具能帮助你的团队在未来构建更高效、更智能的内部系统。

相关阅读：

* [GitHub Star 数量前 5 的开源 AI 内部工具](https://www.nocobase.com/cn/blog/top-5-open-source-ai-internal-tools-on-github)
* [8 个最佳 Google Sheets 替代方案（附成本与能力分析）](https://www.nocobase.com/cn/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6个适合做 PoC 的开源无代码/低代码工具推荐 ](https://www.nocobase.com/cn/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [给开发者的无代码/低代码技术决策指南（2026）](https://www.nocobase.com/cn/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [6 大企业级无代码低代码平台 RBAC 权限体系深度对比](https://www.nocobase.com/cn/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [GitHub 上最值得关注的 14 个开源 AI 低代码工具 ](https://www.nocobase.com/cn/blog/14-ai-low-code-platforms-github)
* [11 个在 GitHub 上最受欢迎的开源无代码 AI 工具 ](https://www.nocobase.com/cn/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub 上 Star 数量前 18 的开源 AI Agent 项目](https://www.nocobase.com/cn/blog/github-open-source-ai-agent-projects)

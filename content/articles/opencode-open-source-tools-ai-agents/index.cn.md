## 引言

今年，OpenCode 成了最受关注的开源 AI Coding Agent 之一。

![OpenCode.png](https://static-docs.nocobase.com/OpenCode-c2tqyc.png)

它给了开发者更多控制权：你可以选择模型，可以在自己的终端和项目环境里使用，也可以把它接入已有的开发流程，而不是完全依赖某个封闭平台。

[在 Reddit 上的这个用户也分享到](https://www.reddit.com/r/opencodeCLI/comments/1rwbbbh/what_is_your_opinion_on_open_code/)：**他想要选择自己的 AI 工具，他不信任把自己封闭在一个“气泡”里的公司，希望有一个能自由切换供应商的地方。**

![reddit.png](https://static-docs.nocobase.com/reddit-021umn.png)

**这也是 AI 时代开源工具变得越来越重要的原因。**

过去，我们选择开源工具，更多是因为它们免费、可自部署、可修改。现在又多了一层价值：**开源项目更容易被 AI 工具理解、调用和扩展。**

当一个项目有清晰的代码结构、文档、API、CLI 或插件机制时，OpenCode 这样的 AI Agent 就不只是“帮你写几段代码”，而是可以真正参与到项目的安装、配置、集成、扩展和维护中。

所以，如果你正在使用 OpenCode，很多时候并不需要让它从零开始写代码。更好的方式是：基于成熟的开源项目，让 OpenCode 帮你更快完成真实业务场景里的开发工作。

这篇文章会推荐 5 个适合和 OpenCode 搭配使用的开源项目，覆盖业务系统、数据 API、自动化、数据分析、知识库和身份认证等场景。这些项目都是经过验证的 AI 友好的开源项目，欢迎大家体验尝试！

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---




| 你想让 OpenCode 帮你构建什么                      | 推荐项目 |
| ------------------------------------------------- | -------- |
| CRM、工单、审批、资产管理、运营后台，各类内部工具 | NocoBase |
| 数据 API、Headless CMS、内容后台                  | Directus |
| 数据分析、报表、Dashboard                         | Metabase |
| 项目文档、知识库、AI 上下文                       | Outline  |
| SSO、身份认证、访问控制                           | Keycloak |

## 1. NocoBase：业务系统和内部工具

官网：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars： 22.5k

如果你要构建的是 CRM、工单系统、审批系统、资产管理、项目管理、运营后台这类业务系统，NocoBase 是一个非常适合和 OpenCode 搭配的开源项目。NocoBase 是一个 AI + 无代码开发平台，提供经过生产验证的基础设施和所见即所得的无代码界面，让 AI 与人高效协同，既保证开发速度又保证系统可靠性。

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-u2k53a.png)

比如你想搭建一个内部工单系统。OpenCode 可以帮助你：

* 初始化 NocoBase 项目
* 根据需求设计数据模型
* 生成客户、工单、处理人、优先级等数据结构
* 搭建工单系统页面
* 配置状态流转和通知流程工作流
* 开发特殊业务插件
* 对接外部系统 API

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-x5mhwx.png)

而 NocoBase 负责承载系统本身，包括页面、权限、自动化流程和数据关系。这意味着，OpenCode 不需要从零生成整个系统。它可以基于 NocoBase 已有的结构来工作。

这对真实业务系统很重要，因为企业内部系统的需求经常会变化。使用 NocoBase 后，开发者可以让 OpenCode 处理复杂扩展，业务人员也可以在无代码界面里继续调整页面、字段和流程。

同时，由于 NocoBase 本身内置了 AI 员工的功能，业务系统在 NocoBase 里面搭建之后，AI 可以非常好地协同。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-usmzfz.png)

比如直接在系统内生成相关业务的洞察报告，完成后可以直接导出 PDF，或者以 HTML 的形式展示。

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-7e0d9h.png)

相关文档：[OpenCode + NocoBase：开源、自由、不被绑定的 NocoBase 搭建方式](https://docs.nocobase.com/cn/ai/opencode)

OpenCode 通过以下方式与 NocoBase 协同工作：

```text
你（终端 / VS Code / JetBrains / ...）
  │
  └─→ OpenCode
        │
        ├── NocoBase Skills（让 Agent 理解 NocoBase 配置体系）
        │
        └── NocoBase CLI（执行创建、修改、部署等操作）
              │
              └─→ NocoBase 服务（你的业务系统）
```

* NocoBase Skills：领域知识包，让 OpenCode 知道怎么操作 NocoBase
* NocoBase CLI：命令行工具，实际执行数据建模、页面搭建等操作
* NocoBase 服务：你运行中的 NocoBase 实例

### 一键 AI 安装

将下方提示词复制给 OpenCode，它会自动完成 NocoBase CLI 安装、初始化和环境配置：

```text
帮我安装 NocoBase CLI 并完成初始化：https://docs.nocobase.com/cn/ai/ai-quick-start.md （请直接访问链接内容）
```

### 相关资源

文档：[https://docs.nocobase.com/cn/ai/](https://docs.nocobase.com/cn/ai/)

CLI：[https://docs.nocobase.com/cn/api/cli/](https://docs.nocobase.com/cn/api/cli/)

Skills：[https://docs.nocobase.com/cn/ai-builder#nocobase-skills](https://docs.nocobase.com/cn/ai-builder#nocobase-skills)

Mcp：[https://docs.nocobase.com/cn/ai/mcp/](https://docs.nocobase.com/cn/ai/mcp/)

## 2. Directus：数据 API 和内容管理后台

官网：[https://directus.io/](https://directus.io/)

GitHub：[https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Stars：35k

如果你的项目已经有数据库，或者你想快速为一个业务系统搭建数据 API、内容管理后台和权限管理层，Directus 是一个很适合和 OpenCode 搭配的开源项目。

![Directus1.png](https://static-docs.nocobase.com/Directus1-0a1hg8.png)

Directus 的核心能力是：**把 SQL 数据库变成可管理的数据平台**。它可以基于数据库自动生成 REST API 和 GraphQL API，同时提供一个可视化的 Data Studio，让开发者和业务人员都能管理数据、内容、文件和权限。

比如你正在用 OpenCode 开发一个内容驱动的网站、客户门户、产品资料库或内部数据平台。如果完全从零开始，OpenCode 需要帮你生成数据库模型、API 服务、认证逻辑、管理后台、文件管理和权限控制，工作量会很大，后期维护也不轻松。

但如果基于 Directus，Directus 负责提供数据管理、API、权限和后台界面，OpenCode 负责围绕这些能力完成项目开发、集成和扩展。

这种组合很适合内容和数据密集型项目。比如你要搭建一个产品资料库，Directus 可以负责管理产品分类、参数、图片、文档和发布状态；OpenCode 可以基于 Directus API 快速生成前端页面、搜索筛选功能、数据导入脚本和自定义接口。

![Directus2.png](https://static-docs.nocobase.com/Directus2-r78b4m.png)

Directus 和 OpenCode 的结合，最适合这些场景：

* Headless CMS
* 内容管理系统
* 产品资料库
* 客户案例中心
* 多语言内容平台
* 内部数据管理后台
* 数据 API 层
* 文件和媒体资源管理
* 客户门户 / Partner portal
* 移动 App 后端

它和 NocoBase 的区别也比较清楚。

Directus 更适合以数据库和内容 API 为核心的项目，比如内容平台、产品目录、多语言网站、客户门户等。NocoBase 更适合构建完整的业务系统，比如 CRM、工单、审批、资产管理和运营后台，这类系统通常需要更强的数据关系、流程编排、权限控制和页面配置能力。

## 3. Metabase：数据分析和深度报表

官网：[https://www.metabase.com/](https://www.metabase.com/)

GitHub：[https://github.com/metabase/metabase](https://github.com/metabase/metabase)

GitHub Stars：47.4k

如果你正在用 OpenCode 开发一个业务系统、内部工具、运营后台或数据平台，Metabase 是一个很适合搭配使用的开源项目。

![Metabase1.png](https://static-docs.nocobase.com/Metabase1-hwifhf.png)

Metabase 提供了一套开源的数据分析和 BI 能力。它可以连接数据库，让团队通过图表、查询和 Dashboard 分析业务数据。Metabase 可以用自然语言查询数据，并基于指标和权限为团队提供分析能力。

比如你已经有了一个工单系统，里面有客户、工单、负责人、优先级、处理状态、完成时间等数据。OpenCode 不需要再从零写一套报表模块，而是可以帮助你把这些数据接入 Metabase，并快速生成分析能力。

Metabase 负责提供数据分析、图表、Dashboard 和权限体系，OpenCode 负责围绕这些能力完成数据库连接、查询生成、指标设计、系统嵌入和自动化集成。

Metabase 和 OpenCode 的结合，最适合这些场景：

* 业务 Dashboard
* 销售分析
* 客户分析
* 工单效率分析
* IT 资产分析
* 运营数据报表
* 财务指标看板
* 产品使用数据分析
* 管理层报表
* 嵌入式 BI

## 4. Outline：知识库和文档协作

官网：[https://www.getoutline.com/](https://www.getoutline.com/)

GitHub：[https://github.com/outline/outline](https://github.com/outline/outline)

GitHub Stars：38.5k

AI Agent 的效果，很大程度上取决于上下文。

如果一个项目没有清晰文档，Agent 就很容易误解需求。它可能不知道系统规则、业务背景、数据定义、接口说明、部署方式和团队约定。

这也是为什么在 AI 辅助开发里，文档变得越来越重要。文档不只是给人看的，也会成为 AI Agent 的工作上下文。

Outline 是一个开源团队知识库，适合管理内部文档、项目说明、产品规范和团队知识。

![Outline1.png](https://static-docs.nocobase.com/Outline1-yccehc.png)

这类工具容易被忽略，但对长期项目非常重要。

适合场景：

* 团队知识库
* 产品文档
* 项目文档
* 技术说明
* Onboarding 文档
* AI-ready docs
* 内部规范管理

如果你希望 OpenCode 不只是写代码，而是稳定参与项目协作，文档系统会非常重要。

## 5. Keycloak：身份认证和访问控制

官网：[https://www.keycloak.org/](https://www.keycloak.org/)

GitHub：[https://github.com/keycloak/keycloak](https://github.com/keycloak/keycloak)

GitHub Stars：34.5k

如果你正在用 OpenCode 开发一个真实项目，Keycloak 是一个非常值得搭配的开源身份认证工具。如果这些能力都让 OpenCode 从零生成，短期可能可以做出一个简单版本，但安全性、扩展性和维护成本都会成为问题。

![Keycloak1.png](https://static-docs.nocobase.com/Keycloak1-483p2p.png)

Keycloak 提供了一套成熟的开源身份认证和访问管理能力，包括：

* 用户注册和登录
* 单点登录 SSO
* 角色和权限管理
* OAuth 2.0 / OpenID Connect
* 企业账号体系接入
* 第三方身份提供商登录
* 多个内部系统统一认证
* 用户会话和 Token 管理
* 多因素认证

## FAQ

### 1. OpenCode 是什么？

OpenCode 是一个开源 AI Coding Agent。它可以在开发者自己的终端、IDE 或项目目录中工作，帮助开发者阅读代码、修改代码、生成脚本、处理配置和完成开发任务。相比封闭的 AI 编程工具，OpenCode 给开发者更多模型选择、工具集成和工作流控制权。

### 2. 为什么 OpenCode 适合搭配开源项目使用？

因为真实项目通常不只是生成代码，还需要数据模型、API、权限、工作流、报表、文档和身份认证等基础能力。成熟开源项目已经解决了一部分系统基础问题，OpenCode 可以在此基础上完成安装、配置、集成、扩展和二次开发。

### 3. OpenCode 能不能从零构建一个完整应用？

可以，但不一定是最好的方式。对于 demo 或简单工具，从零生成代码可能很快；但对于长期运行的业务系统，更推荐基于成熟的开源项目开始，再让 OpenCode 负责定制和扩展。

### 4. 哪些开源项目适合和 OpenCode 搭配？

这取决于你的项目类型。比如，NocoBase 适合业务系统和内部工具，Directus 适合数据 API 和内容管理，Metabase 适合数据分析和报表，Outline 适合知识库和项目文档，Keycloak 适合身份认证和访问控制。

### 5. OpenCode 和 NocoBase 可以一起做什么？

NocoBase 提供业务系统的基础能力，包括数据模型、页面、权限、工作流、插件和 AI 员工。OpenCode 可以帮助初始化 NocoBase 项目、设计数据模型、搭建页面、配置工作流、开发插件，并对接外部 API。它们适合用来构建 CRM、工单系统、审批系统、资产管理、项目管理和运营后台等系统。

### 6. OpenCode 只适合开发者使用吗？

OpenCode 本身更适合开发者使用。但当它和 NocoBase、Directus、Metabase、Outline、Keycloak 这类工具结合时，最终产出的系统可以被业务人员、运营人员、管理者和团队成员使用，比如通过无代码界面、Dashboard、知识库或统一登录系统完成日常工作。

### 7. 使用 OpenCode 构建真实项目的最佳方式是什么？

更推荐把 OpenCode 作为 Agent 层，把开源项目作为系统层。不要让 OpenCode 从空仓库开始生成所有东西，而是让它基于成熟的开源项目工作，利用已有的数据模型、API、权限、工作流、报表或认证能力，提高开发效率，也降低长期维护成本。

## 总结：选择开源 Agent，也选择开源系统底座

OpenCode 让开发者拥有一个更开放、更可控的 AI 开发工作流。

但 Agent 只是其中一层。

如果你要构建真实项目，还需要一组能够承载长期需求的系统基础。NocoBase、Directus、Metabase、Outline、Keycloak 这些开源项目，分别解决了系统底座、数据 API、分析、文档和身份认证等问题。

对于选择 OpenCode 的开发者来说，这样的开源技术栈更符合初衷：

* 不被单一平台锁定
* 保留对代码和数据的控制权
* 能够私有部署
* 能够持续扩展
* 能够让 AI Agent 真正参与长期项目开发

**相关阅读**：

* **[别让 Codex 从零生成应用：6 个可组合的开源项目](https://www.nocobase.com/cn/blog/building-internal-tools-with-codex)**
* **[在用 Claude Code 之后，你需要这 6 个开源工具](https://www.nocobase.com/cn/blog/open-source-tools-after-claude-code)**
* **[10 个适合企业软件开发的开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-enterprise-software-development)**
* **[企业内部工具必备：8大开源 AI Agent 平台对比](https://www.nocobase.com/cn/blog/8-open-source-ai-agent-platforms-for-internal-tools)**
* **[企业级自托管 CRM 推荐（支持 RBAC、AI 和 API）](https://www.nocobase.com/cn/blog/the-best-self-hosted-crm-for-enterprise-teams)**
* **[告别自研中间件：6个开源系统集成工具推荐](https://www.nocobase.com/cn/blog/6-open-source-integration-tools-to-replace-custom-middleware)**
* **[Airtable 与 NocoBase：从Excel迁移的真实成本对比](https://www.nocobase.com/cn/blog/airtable-vs-nocobase-migration-cost-comparison)**
* **[为 Excel 数据快速构建 Web 应用：4 种方法对比](https://www.nocobase.com/cn/blog/excel-to-web-app-4-methods)**
* **[不只 PostgreSQL：5 个支持外部数据库的无代码/低代码平台对比](https://www.nocobase.com/cn/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)**
* **[开源项目管理工具选型指南（2026年最新）](https://www.nocobase.com/cn/blog/open-source-project-management-tool-selection-guide-2026-edition)**
* **[如何用 PostgreSQL 构建一个自定义 CRM](https://www.nocobase.com/cn/blog/how-to-build-a-custom-crm-with-postgresql)**

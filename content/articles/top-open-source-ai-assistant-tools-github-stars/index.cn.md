前几周，我们围绕一些热度很高的 AI Agent ，整理过一些可以搭配使用的开源工具：

[💡在用 Claude Code 之后，你需要这 6 个开源工具](https://www.nocobase.com/cn/blog/open-source-tools-after-claude-code)

[💡别让 Codex 从零生成应用：6 个可组合的开源项目](https://www.nocobase.com/cn/blog/building-internal-tools-with-codex)

最近我们在逛 Reddit 时发现，除了 AI Agent 以外，AI Assistant 依然是很多用户会主动讨论的话题。相比更强调自主规划和任务执行的 Agent，Assistant 更像一个贴近日常使用场景的工作入口：它可以面向个人，也可以面向小团队和企业。

在 r/AI_Agents 的一条讨论里，有用户想找一款[真正值得长期使用的个人 AI Assistant](https://www.reddit.com/r/AI_Agents/comments/1t7c020/what_ai_personal_assistants_are_actually_worth/)，希望它能帮助管理笔记、任务、日历、邮件、提醒和联系人等日常信息。

![Raddit1.png](https://static-docs.nocobase.com/Raddit1-6ez8j5.png)

另一条更偏向企业和团队场景。用户经营一家服务机构，需要为小企业客户处理网站内容、邮件和社交媒体相关工作，因此想了解[有哪些 AI Assistant 或 AI 工具](https://www.reddit.com/r/AI_Agents/comments/1qfuity/what_is_the_best_ai_assistant_for_small_businesses/)能符合他的需求。

![Raddit2.png](https://static-docs.nocobase.com/Raddit2-ouhn35.png)

从这些讨论里可以看出，大家对 AI Assistant 的需求大致分成两类：一类偏个人使用，一类偏企业和团队场景。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

**个人型 AI Assistant**：主要帮助个人用户管理日常信息、提升工作效率，比如整理笔记、跟进任务、管理日历、处理邮件、设置提醒、调用本地工具，或在桌面和开发环境中提供辅助。

**企业型 AI Assistant**：更适合团队和企业，用来连接业务系统、嵌入应用界面、处理客户沟通、协助内容运营、自动化流程，并围绕数据、权限和任务协作提供支持。

基于这个思路，我们收集整理了 GitHub [ai-assistant](https://github.com/topics/ai-assistant) 话题下排名靠前的高星项目，并从中筛选出 8 个更适合展开介绍的开源项目。

下面会按照企业型 AI Assistant 和个人型 AI Assistant 两类来进行盘点。因为个人型 AI Assistant 的使用场景相对直接，更多围绕桌面、开发工具和日常效率展开；企业型 AI Assistant 往往还涉及业务系统、权限流程、数据管理、应用嵌入和团队协作，所以本文会更侧重介绍企业型 AI Assistant。


| 分类                | 项目            | GitHub Stars | 定位                                       |
| ------------------- | --------------- | ------------ | ------------------------------------------ |
| 企业型 AI Assistant | NocoBase        | 22.7k        | 面向业务系统搭建和维护的 AI + no-code 平台 |
| 企业型 AI Assistant | NanoClaw        | 29.8k        | 消息入口 + 容器化运行的 AI Assistant       |
| 企业型 AI Assistant | CopilotKit      | 34.3k        | 应用内 AI Copilot / Generative UI 前端框架 |
| 企业型 AI Assistant | Ruflo           | 58.6k        | 多 Agent 协作与自动化工作流助手            |
| 个人型 AI Assistant | DeepChat        | 6k           | 连接模型、工具和个人上下文的桌面助手       |
| 个人型 AI Assistant | Everywhere      | 6k           | 桌面上下文感知 AI Assistant                |
| 个人型 AI Assistant | CopilotForXcode | 6.1k         | 面向 Xcode 的 AI coding assistant          |
| 个人型 AI Assistant | Leon            | 17.3k        | 开源个人 AI 助手                           |

## 企业型 AI Assistant

## NocoBase

**网站**：[https://www.nocobase.com/](https://www.nocobase.com/)

**在线 Demo**：[https://demo.nocobase.com/new](https://demo.nocobase.com/new)

**文档**：[https://docs.nocobase.com/](https://docs.nocobase.com/)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**Stars**：22.7k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-ibmr8j.png)

### 简介

NocoBase 是一个开源的 AI + 无代码平台，用于快速构建企业内部业务系统。在 NocoBase 中，用户可以用自然语言描述业务需求，让 AI 协助完成数据模型设计、页面配置、工作流编排、权限配置和插件管理等任务。NocoBase 还支持 AI 员工、AI Skills 和 CLI 等能力，让 AI 可以围绕已有业务系统继续发挥作用，而不是只停留在一次性生成应用的阶段。

这对于企业内部系统尤其重要。很多业务应用并不是一次性生成完就结束，它们往往需要持续调整字段、权限、流程、页面和数据关系。NocoBase 的价值在于，它为 AI 提供了一个结构化的系统环境，让 AI 可以在已有的数据模型、权限、工作流和插件体系中发挥作用。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-8bkkfe.png)

### 核心特点

* **AI 参与业务系统搭建**

NocoBase 支持用自然语言描述业务需求，并让 AI 辅助完成数据表、字段、关系、页面和流程的初步搭建。比如用户可以描述一个客户管理、工单管理、合同审批或项目看板场景，让 AI 先生成系统基础，再由团队继续确认和调整。

这种方式更适合企业内部系统，因为业务系统通常需要明确的数据结构、角色权限和流程规则。AI 负责提高搭建效率，人负责确认业务逻辑和控制系统边界。

🔎相关资源：

CLI：[https://docs.nocobase.com/cn/api/cli/](https://docs.nocobase.com/cn/api/cli/)

Skills：[https://docs.nocobase.com/cn/ai-builder#nocobase-skills](https://docs.nocobase.com/cn/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/cn/ai/mcp/](https://docs.nocobase.com/cn/ai/mcp/)

* **AI 员工可以继续参与系统运行**

NocoBase 的 AI 员工能自动获取页面数据和结构作为上下文，理解业务场景并直接执行任务，比如总结邮件、分析数据、整理非结构化内容并自动填表、设计数据模型，甚至编写 JavaScript 代码。每个 AI 员工都拥有独立的技能、工具和知识库，企业可以创建任意数量的 AI 员工，组成自己的 AI 团队。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-cebxw6.png)

* **无代码能力降低后续维护成本**

很多 AI 生成工具可以快速生成代码，但后续维护往往依赖开发人员。NocoBase 的不同之处在于，AI 生成之后，用户还可以进入无代码界面继续修改字段、页面、菜单、操作按钮、权限和工作流。

对业务团队来说，这意味着系统不会停留在一次性 Demo 阶段。只要业务发生变化，团队可以继续在平台里调整，而不一定每次都重新进入代码开发流程。

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-oh4h11.png)

* **适合承载企业级数据、权限和流程**

企业型 AI Assistant 真正落地时，往往绕不开数据、权限和流程。NocoBase 本身具备数据模型、角色权限、工作流、插件扩展和多数据源等能力，可以作为 AI Assistant 进入业务系统的基础。

例如，AI 可以围绕客户、订单、工单、项目、库存、合同等业务对象工作；同时，不同角色可以有不同的数据访问范围和操作权限，避免所有人看到同样的信息或执行同样的动作。

* **适合从具体场景开始搭建**

使用 NocoBase 时，不建议一开始就让 AI 搭建一个完整 ERP 或复杂企业系统。更好的方式是先从一个明确的小场景开始，例如客户管理、采购申请、设备台账、售后工单、合同审批、项目看板或库存记录。

当一个具体场景跑通后，再逐步扩展字段、页面、流程和权限。这样更容易让 AI 的生成结果贴合业务，也更方便团队后续检查和维护。

### 适合场景

* [CRM 客户管理系统](https://www.nocobase.com/cn/solutions/all-in-one/crm)
* 审批系统
* [工单系统](https://www.nocobase.com/cn/solutions/all-in-one/ticketing)
* [项目管理系统](https://www.nocobase.com/cn/solutions/all-in-one/project)
* 采购、库存、订单等轻量 ERP 模块
* 运营后台和管理后台
* 设备管理、[资产管理](https://www.nocobase.com/cn/solutions/all-in-one/asset)、档案管理
* 客户随访和服务管理
* 需要私有部署的企业内部系统
* 需要权限、流程、数据模型和持续调整的业务应用
* 希望结合 AI 和无代码能力构建内部系统的团队

## NanoClaw

**GitHub**：[https://github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

**官网**：[https://nanoclaw.dev](https://nanoclaw.dev/)

**Stars**：29.8k

![NanoClaw1.png](https://static-docs.nocobase.com/NanoClaw1-of21br.png)

### 简介

NanoClaw 是一个轻量级 AI Assistant 项目，主打通过容器运行 Agent，并连接 WhatsApp、Telegram、Slack、Discord、Gmail 等消息入口。它更像一个“消息入口 + 容器隔离”的企业型 AI Assistant，适合希望通过聊天工具调用 Agent、处理任务和安排自动化流程的用户。

相比普通聊天助手，NanoClaw 更强调安全隔离和可控运行环境。每个 Agent 可以运行在独立容器中，减少对宿主系统和其他任务的影响。

### 核心特点

* **容器化运行**：Agent 运行在独立容器中，便于隔离文件系统和运行环境。
* **消息入口丰富**：支持 Telegram、Discord、WhatsApp、Slack、Gmail 等入口，适合把 AI Assistant 接入日常协作工具。
* **轻量可定制**：相比大型 Agent 系统，NanoClaw 更强调代码结构清晰、易理解、便于按自己的需求调整。

![NanoClaw2.png](https://static-docs.nocobase.com/NanoClaw2-vn9die.png)

### 适合场景

* 通过 Telegram、Discord、Slack 等消息工具调用 AI Assistant。
* 为个人或团队搭建自托管的任务处理入口。
* 在更安全、隔离的环境中运行 Agent 任务。

## CopilotKit

**GitHub**：[https://github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

**官网**：[https://docs.copilotkit.ai](https://docs.copilotkit.ai/)

**Stars**：34.4k

![CopilotKit1.png](https://static-docs.nocobase.com/CopilotKit1-hb37we.png)

### 简介

CopilotKit 是一个用于构建 AI Copilot、生成式 UI 和 Agent 应用的前端框架。它更适合被理解为“应用内 AI Assistant”的开发框架，可以把 Agent 能力嵌入 Web、移动端、Slack、Teams 等用户已经在使用的界面中。

它的重点不只是提供聊天窗口，还包括生成式 UI、共享状态和人工确认流程，适合需要把 AI Assistant 深度接入产品交互的团队。

![CopilotKit2.png](https://static-docs.nocobase.com/CopilotKit2-krgkmy.png)

### 核心特点

* **应用内 Copilot**：可以把 AI Assistant 直接嵌入已有应用，而不是让用户切换到独立聊天工具。
* **生成式 UI**：Agent 可以根据任务状态和用户意图生成或更新界面组件。
* **人工确认流程**：支持 Human-in-the-loop，让用户在关键节点确认、修改或接管任务。

### 适合场景

* SaaS 产品中内置 AI Copilot。
* 构建可以读取应用状态、调用工具、生成界面的 AI Assistant。
* 需要在 Slack、Teams 或 Web 应用中接入 Agent 工作流的团队。

## Ruflo

**GitHub**：[https://github.com/ruvnet/ruflo](https://github.com/ruvnet/ruflo)

**官网**：[https://flo.ruv.io](https://flo.ruv.io/)

**Stars**：58.6k

![Ruflo1.png](https://static-docs.nocobase.com/Ruflo1-06q7de.png)

### 简介

Ruflo 是一个面向 Claude Code 和 Codex 的多 Agent 协作平台，用来协调多个专门 Agent、自动化工作流和团队级任务。它更像企业型 AI Assistant 背后的 Agent 协作底座，适合处理复杂开发、测试、安全、文档、架构和 DevOps 场景。

它的核心价值在于把单个 Agent 的能力扩展为多个 Agent 的协作能力，让任务可以被拆分、路由、执行和记忆。

### 核心特点

* **多 Agent 协作**：支持多个专门 Agent 协同处理开发、测试、安全、文档等任务。
* **面向复杂工作流**：可以配合 Claude Code / Codex 处理代码、测试、审计、文档生成等流程。
* **插件和记忆能力**：提供插件体系、向量记忆和任务协调能力，适合更复杂的 Agent 工作环境。

![Ruflo2.png](https://static-docs.nocobase.com/Ruflo2-u9z8jz.png)

### 适合场景

* 需要多个 Agent 协同完成开发任务。
* 团队希望把代码审查、测试生成、文档维护、安全扫描等流程自动化。
* 需要在 Claude Code 或 Codex 之上扩展更复杂的 Agent 协作能力。

## 个人型 AI Assistant

## DeepChat

**GitHub**：[https://github.com/ThinkInAIXYZ/deepchat](https://github.com/ThinkInAIXYZ/deepchat)

**官网**：[https://deepchat.thinkinai.xyz](https://deepchat.thinkinai.xyz/)

**Stars**：6k

![DeepChat.png](https://static-docs.nocobase.com/DeepChat-eap6c8.png)

### 简介

DeepChat 是一个开源桌面 AI Assistant 平台，支持多种云端和本地大模型，并集成 MCP 工具调用、Skills、ACP Agent 集成和远程控制能力。它更像一个连接模型、工具和个人上下文的桌面助手。

对于个人用户来说，DeepChat 的优势在于可以把多模型聊天、本地模型、工具调用、搜索增强和技能工作流集中在一个桌面应用中使用。

### 核心特点

* **多模型统一管理**：支持 OpenAI、Gemini、Anthropic、DeepSeek、Ollama 等多种模型来源。
* **工具与技能支持**：内置 MCP、Skills 和 ACP Agent 集成，可以扩展代码审查、文档处理、PDF、PPT、表格等任务能力。
* **远程控制**：支持通过 Telegram、飞书、QQBot、Discord、微信 iLink 等渠道控制 DeepChat 会话。

## Everywhere

**GitHub**：[https://github.com/Sylinko/Everywhere](https://github.com/Sylinko/Everywhere)

**官网**：[https://everywhere.sylinko.com](https://everywhere.sylinko.com/)

**Stars**：6k

![Everywhere.png](https://static-docs.nocobase.com/Everywhere-hesiph.png)

### 简介

Everywhere 是一个桌面端 AI Assistant，主打屏幕感知和上下文理解。它可以感知当前应用和屏幕内容，让用户不需要频繁截图、复制、切换窗口，也能在当前工作环境里调用 AI 帮助。

它更像一个“桌面上下文感知助手”，适合个人用户在阅读、翻译、排错、总结和跨应用操作时使用。

### 核心特点

* **屏幕上下文感知**：可以理解当前屏幕和应用环境，减少复制粘贴和窗口切换。
* **快捷调用**：通过快捷键在当前场景中唤起 AI Assistant，更贴近桌面工作流。
* **支持多模型与 MCP 工具**：可以结合不同 LLM 和 MCP 工具，在桌面环境中完成更多操作。

## GitHub Copilot for Xcode

**GitHub**：[https://github.com/github/CopilotForXcode](https://github.com/github/CopilotForXcode)

**官网**：[https://github.com/github/CopilotForXcode](https://github.com/github/CopilotForXcode)

**Stars**：6.1k

![GitHub Copilot for Xcode.png](https://static-docs.nocobase.com/GitHub%20Copilot%20for%20Xcode-8j5kvk.png)

### 简介

GitHub Copilot for Xcode 是面向 Xcode 的 AI coding assistant，主要服务 Swift、Objective-C、iOS 和 macOS 开发场景。它更像一个开发者助手，直接嵌入 Xcode，提供代码补全、聊天、代码审查和 Agent Mode 等能力。

对于 Apple 生态开发者来说，它的价值在于把 AI 编程辅助能力放进原生开发环境，减少在 Xcode 和其他 AI 工具之间来回切换。

### 核心特点

* **Xcode 原生集成**：面向 Swift、Objective-C、iOS 和 macOS 开发，直接在 Xcode 中使用。
* **代码补全与聊天**：支持代码建议、Copilot Chat 和代码审查等功能。
* **Agent Mode**：可以理解并修改代码库，搜索相关文件，创建文件，并运行 MCP 工具。

## Leon

**GitHub**：[https://github.com/leon-ai/leon](https://github.com/leon-ai/leon)

**官网**：[https://getleon.ai](https://getleon.ai/)

**Stars**：17.3k

![Leon.png](https://static-docs.nocobase.com/Leon-0uz82q.png)

### 简介

Leon 是一个开源个人 AI Assistant，围绕工具、上下文、记忆和 Agent 式执行构建。它更像一个可以运行在本地或服务器上的个人助手，适合重视隐私、可控性和可扩展能力的用户。

相比普通聊天助手，Leon 更强调通过真实工具完成任务，并结合记忆和上下文，让回答和行动更贴近用户的实际环境。

### 核心特点

* **个人助手定位清晰**：面向个人任务、语音、自动化、记忆和本地环境。
* **支持工具、技能和记忆**：可以使用本地工具、技能和分层记忆来完成更具体的任务。
* **兼顾本地与远程模型**：支持本地和远程 AI 提供商，方便在隐私和能力之间做取舍。

## FAQ

## 1. 选择开源 AI Assistant 时应该考虑哪些因素？

选择开源 AI Assistant 时，可以重点看五个方面：项目是否持续维护、是否支持你的使用场景、是否能连接已有工具或系统、是否支持自托管或私有部署，以及是否有清晰的文档和社区活跃度。

个人用户可以优先看易用性、模型支持、本地工具调用和桌面体验；企业用户则应重点关注权限、数据结构、流程自动化、系统集成和长期维护能力。

## 2. 如果我想为企业搭建内部业务系统，应该选哪个 AI Assistant 项目？

如果你的目标是为企业搭建 CRM、审批、工单、项目管理、库存管理、运营后台等内部业务系统，可以优先看 **NocoBase**。

NocoBase 更适合承载企业业务数据、权限、流程和页面配置。它不仅能通过 AI 辅助搭建系统，还能在生成后继续通过无代码界面调整字段、页面、权限和工作流。对于需要长期维护的企业内部系统来说，这类结构化平台会更稳。

## 3. 如果我只是个人使用，想要一个桌面 AI Assistant，应该选哪个？

如果你主要是个人使用，希望在桌面端统一使用多个模型、处理文件、调用工具、整理信息，可以优先看 **DeepChat** 或 **Everywhere**。

DeepChat 更适合把多个模型、MCP、Skills 和远程控制能力集中在一个桌面应用里；Everywhere 更强调屏幕感知和上下文理解，适合在阅读、翻译、排错、总结网页或文档时使用。

## 4. 如果我是开发者，想在开发工具里使用 AI Assistant，应该选哪个？

如果你是 Apple 生态开发者，主要使用 Xcode 开发 iOS、macOS、Swift 或 Objective-C 项目，可以看 **GitHub Copilot for Xcode**。

它更适合作为开发者助手，直接嵌入 Xcode，提供代码补全、聊天、代码审查和 Agent Mode 等能力。如果你的需求更偏多 Agent 协作、代码审查、测试生成、文档维护和 DevOps 流程，可以再关注 **Ruflo**。

## 5. 如果我想把 AI Assistant 嵌入自己的产品界面，应该选哪个？

如果你正在做 SaaS、Web 应用或内部产品，想把 AI Assistant 直接嵌入应用界面，可以优先看 **CopilotKit**。

CopilotKit 更适合构建应用内 Copilot。它可以让 AI Assistant 读取应用状态、调用工具、生成界面，并在关键步骤中加入人工确认流程。对于想在产品中加入 AI Copilot、生成式 UI 或 Agent 工作流的团队来说，它会更合适。

## 6. 如果我想搭建一个开源个人 AI Assistant，应该怎么选？

Leon 更偏个人助手方向，适合处理个人任务、语音交互、工具调用、记忆和自动化场景。它适合重视隐私、自托管、长期记忆和可扩展能力的用户。如果你想要一个可以逐步接入本地环境和个人工作流的助手，Leon 会比单纯聊天工具更贴近这个方向。

## 7. NocoBase 只能用于企业吗？个人用户可以用吗？

**NocoBase** 不只适合企业使用，个人用户也可以用它搭建自己的管理系统或知识库。它的开源基础版本是免费的，对个人用户也很友好。

比如个人可以用 NocoBase 搭建知识库、读书记录、任务管理、资料库、项目看板、客户跟进表、内容选题库等系统。只要你的需求涉及数据表、字段、关系、页面和长期整理，NocoBase 都可以作为一个轻量的个人管理平台使用。

**⭐ 如果这篇文章对你有启发，欢迎分享给同样关注开源 AI 工具和效率提升的朋友们～**


**相关阅读**：

* **[6 个适合搭配 WorkBuddy 使用的开源工具 ](https://www.nocobase.com/cn/blog/workbuddy-open-source-tools)**
* **[GitHub 上 Stars 最多的 6 个开源 AI 工具：让 AI Agent 更强大](https://www.nocobase.com/cn/blog/6-github-top-open-source-ai-tools-for-ai-agents)**
* **[用 Hermes 提升内部工具效率：5 个开源项目推荐](https://www.nocobase.com/cn/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)**
* **[OpenClaw 如何用于真实业务？推荐 5 个开源工具](https://www.nocobase.com/cn/blog/openclaw-open-source-enterprise-tools)**
* **[OpenCode 可以搭配哪些开源工具？5 个适合 AI Agent 的开源项目](https://www.nocobase.com/cn/blog/opencode-open-source-tools-ai-agents)**
* **[别让 Codex 从零生成应用：6 个可组合的开源项目](https://www.nocobase.com/cn/blog/building-internal-tools-with-codex)**
* **[在用 Claude Code 之后，你需要这 6 个开源工具](https://www.nocobase.com/cn/blog/open-source-tools-after-claude-code)**
* **[10 个适合企业软件开发的开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-enterprise-software-development)**
* **[企业内部工具必备：8大开源 AI Agent 平台对比](https://www.nocobase.com/cn/blog/8-open-source-ai-agent-platforms-for-internal-tools)**
* **[企业级自托管 CRM 推荐（支持 RBAC、AI 和 API）](https://www.nocobase.com/cn/blog/the-best-self-hosted-crm-for-enterprise-teams)**
* **[告别自研中间件：6个开源系统集成工具推荐](https://www.nocobase.com/cn/blog/6-open-source-integration-tools-to-replace-custom-middleware)**
* **[Airtable 与 NocoBase：从Excel迁移的真实成本对比](https://www.nocobase.com/cn/blog/airtable-vs-nocobase-migration-cost-comparison)**
* **[为 Excel 数据快速构建 Web 应用：4 种方法对比](https://www.nocobase.com/cn/blog/excel-to-web-app-4-methods)**

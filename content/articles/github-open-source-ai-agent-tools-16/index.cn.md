最近我们陆续整理了几篇关于 **AI Agent 开源项目**的推荐文章，收到了不少开发者的关注、收藏和反馈。很多读者也提到，希望继续看到更多不同方向、不同使用场景下的 AI Agent 工具盘点。

* [6 个适合搭配 WorkBuddy 使用的开源工具](https://www.nocobase.com/cn/blog/workbuddy-open-source-tools)
* [OpenClaw 如何用于真实业务？推荐 5 个开源工具](https://www.nocobase.com/cn/blog/openclaw-open-source-enterprise-tools)
* [OpenCode 可以搭配哪些开源工具？5 个适合 AI Agent 的开源项目](https://www.nocobase.com/cn/blog/opencode-open-source-tools-ai-agents)
* [别让 Codex 从零生成应用：6 个可组合的开源项目](https://www.nocobase.com/cn/blog/building-internal-tools-with-codex)
* [在用 Claude Code 之后，你需要这 6 个开源工具](https://www.nocobase.com/cn/blog/open-source-tools-after-claude-code)

在 Reddit 的 [AI Agent](https://www.reddit.com/r/AI_Agents/comments/1sfrb3t/what_are_the_best_tools_and_frameworks_for/) 社区里，也有开发者提出类似的问题：AI Agent 工具和框架越来越多，但真正难的是判断哪些项目适合真实场景，哪些只是看起来热闹。

![Reddit-b7cbmq.png](https://static-docs.nocobase.com/Reddit-b7cbmq.png)

所以这一次，我们聚焦 GitHub 官方 [ai-agent](https://github.com/topics/ai-agent) 话题，从 Star 数靠前的项目中进行筛选，并按照页面顺序从上到下梳理。考虑到该主题下的项目类型较广，我们排除了一些与 AI Agent 工具关联较弱、场景过于垂直，或更偏资料集合/单点内容生成的项目，最终整理出 14 个更适合放入本文介绍的开源项目。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

由于 AI Agent 相关项目覆盖范围很广，单纯按 Star 数排序并不能完全说明它们的实际价值。因此，本文会先整理每个项目的基础信息，包括官网、GitHub 地址、Star 数等，再从两个角度进行介绍：

* **功能定位**：它主要属于哪一类 AI Agent 工具，是偏个人效率、开发辅助、网页自动化、知识管理，还是企业业务系统；
* **使用场景**：它更适合解决哪些具体问题，适合个人开发者、团队协作，还是企业内部落地。

以下是我们筛选出的 14 个值得关注的开源 AI Agent 项目。正式展开介绍前，你可以先通过这张表格快速了解它们的定位。


| 排名 | 工具                 | GitHub Stars | 定位                           |
| ---- | -------------------- | ------------ | ------------------------------ |
| 14   | NocoBase             | 22.7k        | AI + No-code 业务系统          |
| 13   | OpenCLI              | 24.1k        | 网站转 CLI / 浏览器自动化      |
| 12   | Agent-Reach          | 26.3k        | AI Agent 网络访问 / 信息检索   |
| 11   | Google Workspace CLI | 27k          | 办公系统 CLI / Agent Skills    |
| 10   | AionUi               | 28.1k        | 本地 AI Cowork / 多 Agent 管理 |
| 9    | OpenClaude           | 28.6k        | AI Coding Agent / CLI 工具     |
| 8    | CopilotKit           | 34.7k        | Agent 前端框架 / Generative UI |
| 7    | Nanobot              | 44.1k        | 轻量级 AI Agent                |
| 6    | Siyuan               | 44.4k        | 自托管知识管理 / 个人知识库    |
| 5    | CowAgent             | 45.2k        | AI Assistant / Agent Harness   |
| 4    | Cherry Studio        | 47.2k        | AI Productivity Studio         |
| 3    | career-ops           | 52.7k        | AI 求职自动化系统              |
| 2    | learn-claude-code    | 66.1k        | Claude Code-like Agent Harness |
| 1    | Hermes Agent         | 191k         | 通用 AI Agent / Agent Harness  |

## 1. NocoBase

![NocoBase1-8m9930.png](https://static-docs.nocobase.com/NocoBase1-8m9930.png)

官网：[https://www.nocobase.com](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars：22.7k

### 项目介绍

NocoBase 是一个开源的 AI + 无代码/低代码平台，用于快速构建企业内部业务系统、管理后台和各类可持续迭代的业务应用。

随着 AI Agent 逐渐进入开发和业务场景，企业需要的不只是单个任务自动化，还需要一个能够承载数据、权限、页面、流程和操作记录的系统环境。NocoBase 提供的正是这类基础能力。

在 NocoBase 中，AI 可以参与应用搭建。用户可以用自然语言描述业务需求，让 AI 帮助创建数据模型、配置页面、编排工作流，甚至辅助插件开发。系统生成之后，团队还可以继续通过无代码界面检查和调整字段、关系、页面、权限和流程。

![NocoBase2-0l0hhf.png](https://static-docs.nocobase.com/NocoBase2-0l0hhf.png)

同时，NocoBase 也支持在业务系统中配置 AI 员工。AI 员工可以结合页面数据、业务上下文、工具和知识库，参与数据分析、内容总结、报告生成、翻译、非结构化内容提取、表单填写和工作流节点处理等任务。这样，AI 不只参与系统搭建，也可以继续参与系统运行。

![NocoBase3-xn1trm.png](https://static-docs.nocobase.com/NocoBase3-xn1trm.png)

### 适合的场景

NocoBase 适合用于构建需要数据模型、权限控制、流程编排和长期维护的企业内部系统，尤其适合以下几类场景：

* **企业内部业务系统**：CRM 客户管理、审批系统、工单系统、项目管理系统、运营后台和管理后台等。

![NocoBase4-ngkai4.png](https://static-docs.nocobase.com/NocoBase4-ngkai4.png)

* **轻量 ERP 与业务管理模块**：采购管理、库存管理、订单管理、设备管理、资产管理、档案管理、客户随访等。
* **已有系统的扩展与增强**：对于已经有数据库、ERP、CRM 或其他业务系统的企业，可以用 NocoBase 整合数据、配置页面、管理权限和编排流程。
* **AI Agent 进入业务流程的承载平台**：NocoBase 可以为 AI Agent 提供清晰的业务系统环境，让业务数据有模型、用户操作有权限、流程流转有规则，后续也能通过无代码配置和插件扩展持续维护。

**🔎相关资源**：

CLI：[https://docs.nocobase.com/cn/api/cli/](https://docs.nocobase.com/cn/api/cli/)

Skills：[https://docs.nocobase.com/cn/ai-builder#nocobase-skills](https://docs.nocobase.com/cn/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/cn/ai/mcp/](https://docs.nocobase.com/cn/ai/mcp/)

官方解决方案库：[https://www.nocobase.com/cn/solutions](https://www.nocobase.com/cn/solutions)

## 2. OpenCLI

![OpenCLI-qn3nn7.png](https://static-docs.nocobase.com/OpenCLI-qn3nn7.png)

官网：[https://opencli.info](https://opencli.info/)

GitHub：[https://github.com/jackwener/OpenCLI](https://github.com/jackwener/OpenCLI)

GitHub Stars：24.1k

### 项目介绍

OpenCLI 的核心思路是把网站、浏览器会话、Electron 应用和本地工具转换成 CLI 接口。原本需要通过图形界面完成的操作，可以被封装成命令，让人或 AI Agent 调用网页能力、复用已登录的浏览器状态，并执行导航、点击、填写、提取等自动化操作。

### 适合的场景

OpenCLI 适合需要通过网页完成任务、但缺少标准 API 的场景：

* **网页自动化**：读取后台页面、查询信息、填写表单、提取平台数据。
* **Agent 工具接口**：把浏览器会话和网页能力封装成 AI Agent 可调用的命令。

## 3. Agent-Reach

![Agent-Reach-ew3tec.png](https://static-docs.nocobase.com/Agent-Reach-ew3tec.png)

GitHub：[https://github.com/Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)

GitHub Stars：26.3k

### 项目介绍

Agent-Reach 关注的是 AI Agent 的外部信息访问能力。它通过一个 CLI 工具，让 Agent 能够读取和搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书等平台内容，解决 Agent 在信息检索、内容读取和跨平台资料收集中的入口问题。

### 适合的场景

Agent-Reach 可以用于技术趋势观察、竞品研究、社交媒体口碑分析、内容选题调研、GitHub 项目整理和跨平台资料汇总。它本身不是一个完整的 Agent 平台，而是为 Agent 补充外部信息访问能力，让后续分析、总结和整理有更充分的信息来源。

## 4. Google Workspace CLI

![Google Workspace CLI-pw1xpm.png](https://static-docs.nocobase.com/Google%20Workspace%20CLI-pw1xpm.png)

GitHub：[https://github.com/googleworkspace/cli](https://github.com/googleworkspace/cli)

GitHub Stars：27k

### 项目介绍

Google Workspace CLI 是一个面向 Google Workspace 的命令行工具，覆盖 Drive、Gmail、Calendar、Sheets、Docs、Chat、Admin 等能力。它通过命令行和结构化 JSON 输出，把分散在不同办公应用里的能力整理成更容易调用的接口。

### 适合的场景

对于已经深度使用 Google Workspace 的团队来说，这类工具可以让 AI Agent 更容易进入日常办公流程，例如读取邮件、管理日程、整理 Drive 文件、操作 Sheets、生成 Docs 或处理 Chat 消息。由于它涉及办公数据和账号授权，实际使用时需要特别关注 OAuth 权限范围、访问边界和数据安全。

🔎相关资源：

Agent Skills：[https://github.com/googleworkspace/cli/blob/main/docs/skills.md](https://github.com/googleworkspace/cli/blob/main/docs/skills.md)

## 5. AionUi

![AionUi-5b2768.png](https://static-docs.nocobase.com/AionUi-5b2768.png)

官网：[https://www.aionui.com](https://www.aionui.com/)

GitHub：[https://github.com/iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi)

GitHub Stars：28.1k

### 项目介绍

AionUi 是一个本地开源的 AI Cowork 应用，面向 OpenClaw、Hermes Agent、Claude Code、Codex、OpenCode、Gemini CLI 等多种 AI CLI 工具。它提供内置 Agent、多 Agent、远程访问、跨平台使用和自动化任务等能力，更像是一个统一管理 AI Agent 和本地工作的桌面工作台。

### 适合的场景

AionUi 适合同时使用多个 AI Coding 或 Agent 工具的人：

* **多 Agent 管理**：统一管理 Claude Code、Codex、Hermes Agent、OpenCode、Gemini CLI 等工具。
* **本地工作台**：集中处理本地文件、代码任务、网页操作和远程访问，减少在多个工具之间来回切换。

## 6. OpenClaude

![OpenClaude-kw4n93.png](https://static-docs.nocobase.com/OpenClaude-kw4n93.png)

官网：[https://openclaude.gitlawb.com](https://openclaude.gitlawb.com/)

GitHub：[https://github.com/Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

GitHub Stars：28.6k

### 项目介绍

OpenClaude 是一个开源的 AI Coding Agent CLI，支持云端和本地模型提供商，包括 OpenAI-compatible APIs、Gemini、GitHub Models、Codex、Ollama、Atomic Chat 等。它把 prompts、tools、agents、MCP、slash commands 和流式输出整合到一个终端优先的工作流中。

### 适合的场景

OpenClaude 的使用场景主要集中在终端开发环境中，例如代码解释、文件修改、测试生成、重构建议和工具调用。它的特点是灵活、可组合、模型选择空间大，但也要求用户具备一定的开发经验，能够自行管理模型配置、执行权限和代码变更审查。

## 7. CopilotKit

![CopilotKit-gply44.png](https://static-docs.nocobase.com/CopilotKit-gply44.png)

官网：[https://docs.copilotkit.ai](https://docs.copilotkit.ai/)

GitHub：[https://github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

GitHub Stars：34.7k

### 项目介绍

CopilotKit 是一个面向 Agents 和 Generative UI 的前端框架，支持 React、Angular、Mobile、Slack 等界面和平台。它帮助开发者在自己的产品中构建 AI Copilot、Agent 交互、共享状态和人机协作流程，而不是直接提供一个面向终端用户的独立应用。

### 适合的场景

当一个产品需要在界面中嵌入 AI Copilot 时，CopilotKit 可以提供比较完整的前端基础能力。比如让 AI 理解当前页面状态、协助填写表单、触发应用内操作、生成界面内容，或参与某个业务工作流。它更偏开发框架，适合正在构建 AI 产品、SaaS 应用或内部系统的团队。

🔎相关资源：

Build with Agents：[https://docs.showcase.copilotkit.ai/build-with-agents](https://docs.showcase.copilotkit.ai/build-with-agents)

## 8. Nanobot

![image-jnwd3y.png](https://static-docs.nocobase.com/image-jnwd3y.png)

官网：[https://nanobot.wiki](https://nanobot.wiki/)

GitHub：[https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

GitHub Stars：44.1k

### 项目介绍

Nanobot 是一个轻量级开源个人 AI Agent，强调用户可以真正拥有自己的 Agent。它保留了相对简洁的 Agent 核心，同时提供 WebUI、聊天渠道、工具、记忆、MCP、模型路由、自动化和部署等能力。

### 适合的场景

适合个人开发者、小团队或想搭建轻量级 AI Agent 的用户：

* **个人 AI Agent**：接入 Telegram、Discord、Slack、Email 等入口，处理日常任务和自动化流程。
* **Agent 原型开发**：通过工具、记忆、MCP、模型路由和 WebUI 快速搭建可运行的 Agent。

## 9. SiYuan

![SiYuan-xlju2b.png](https://static-docs.nocobase.com/SiYuan-xlju2b.png)

官网：[https://b3log.org/siyuan](https://b3log.org/siyuan)

GitHub：[https://github.com/siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)

GitHub Stars：44.4k

### 项目介绍

SiYuan 是一个隐私优先、自托管、完全开源的个人知识管理软件，使用 TypeScript 和 Go 编写。它支持块级引用、双向链接、Markdown 所见即所得、SQL 查询嵌入、网页剪藏、PDF 标注、数据库、闪卡、AI 写作和问答等能力。

### 适合的场景

SiYuan 放在 AI Agent 语境下，可以理解为一层知识基础设施，而不是典型的 Agent 框架。它主要用于个人知识管理、研究资料整理、团队知识沉淀和本地优先知识库建设；当用户希望 AI 能更好地读取、组织和复用长期知识时，这类结构化知识环境会变得很重要。

## 10. CowAgent

![CowAgent-kbrmgq.png](https://static-docs.nocobase.com/CowAgent-kbrmgq.png)

官网：[https://cowagent.ai](https://cowagent.ai/)

GitHub：[https://github.com/zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)

GitHub Stars：45.2k

### 项目介绍

CowAgent 是一个开源 AI Assistant 和 Agent Harness。它支持任务规划、工具和 Skills 调用、记忆与知识、自我进化、多模型和多渠道接入，并延续了 chatgpt-on-wechat 在 IM 接入和个人助手方向上的基础。

### 适合的场景

CowAgent 的使用重点在于把 AI Assistant 接入多个入口和工具环境，例如网页、服务器、个人电脑、微信生态或其他 IM 平台。它不是单纯的聊天机器人，而是希望在任务规划、工具调用、记忆和 Skills 扩展的基础上，形成一个可以长期运行的个人助理或自动化助手。

## 11. Cherry Studio

![Cherry Studio-ykg2qa.png](https://static-docs.nocobase.com/Cherry%20Studio-ykg2qa.png)

官网：[https://cherryai.com](https://cherryai.com/)

GitHub：[https://github.com/CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)

GitHub Stars：47.2k

### 项目介绍

Cherry Studio 是一个 AI Productivity Studio，支持智能聊天、Autonomous Agents 和 300+ assistants，并统一接入多种前沿大模型。它更接近一个完整的 AI 工作台，用来集中管理模型、助手、知识库和日常 AI 工作流。

### 适合的场景

Cherry Studio 面向的是高频使用 AI 的日常工作场景：

* **多模型工作台**：统一管理不同大模型、助手、知识库和日常 AI 使用流程。
* **AI 生产力工具**：用于写作、资料整理、知识库问答、智能体使用和团队协作。

## 12. career-ops

![career-ops-ylaji6.png](https://static-docs.nocobase.com/career-ops-ylaji6.png)

官网：[https://career-ops.org](https://career-ops.org/)

GitHub：[https://github.com/santifer/career-ops](https://github.com/santifer/career-ops)

GitHub Stars：52.7k

### 项目介绍

career-ops 是一个基于 Claude Code 的 AI 求职自动化系统。它可以把 AI Coding CLI 转换成求职管理中心，用于岗位评估、简历生成、求职门户扫描、批量处理、面试准备和机会跟踪。

### 适合的场景

career-ops 的场景非常垂直，主要围绕个人求职流程展开。它的意义不只是提供一个“找工作工具”，也展示了 AI Agent 如何进入一个明确流程，把职位筛选、材料生成、机会追踪、面试准备和批量处理拆成可执行的任务链。

## 13. learn-claude-code

![learn-claude-code-6gfiw7.png](https://static-docs.nocobase.com/learn-claude-code-6gfiw7.png)

官网：[https://learn.shareai.run](https://learn.shareai.run/)

GitHub：[https://github.com/shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)

GitHub Stars：66.1k

### 项目介绍

learn-claude-code 是一个用于学习 Claude Code 类 Agent Harness 的开源项目。它围绕 “Agent 产品 = Model + Harness” 这一思路，讲解工具、知识、观察、行动接口、权限边界、上下文管理和多 Agent 协作等内容。

### 适合的场景

learn-claude-code 更像一个面向开发者的系统学习材料，可以帮助用户理解 AI Coding Agent 背后的运行机制。它覆盖 agent loop、tool use、permission、hooks、memory、task system、MCP 和 multi-agent 协作等内容，适合个人学习，也适合作为团队内部的 Agent 工程能力培训资料。

## 14. Hermes Agent

![Hermes Agent-500tav.png](https://static-docs.nocobase.com/Hermes%20Agent-500tav.png)

官网：[https://hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/)

GitHub：[https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

GitHub Stars：191k

### 项目介绍

Hermes Agent 是 Nous Research 构建的自改进 AI Agent，官方描述为 “The agent that grows with you”。它强调 Agent 可以在持续使用中创建和改进 skills，记录并搜索过去的对话，并逐步形成对用户长期偏好和上下文的理解。

### 适合的场景

Hermes Agent 适合需要长期运行、长期记忆和 Skills 沉淀的 Agent 场景：

* **自托管 Agent**：用于搭建可以持续运行、记录历史对话并复用技能的个人或团队 Agent。
* **长期协作助手**：通过记忆、skills 和工具调用，让 Agent 在多次使用中逐步积累上下文和工作方式。

💡阅读更多：[用 Hermes 提升内部工具效率：5 个开源项目推荐](https://www.nocobase.com/cn/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)

🔎相关资源：

Skills System：[https://hermes-agent.nousresearch.com/docs/user-guide/features/skills](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) Skills Catalog：[https://github.com/NousResearch/hermes-agent/blob/main/website/docs/reference/skills-catalog.md](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/reference/skills-catalog.md)

## FAQ

### Q1：这些工具应该怎么选？

A可以先看你要解决的问题属于哪一类。如果是想提升个人效率，可以优先看 Cherry Studio、Nanobot、Hermes Agent、SiYuan；如果是开发 AI Agent 或 AI Copilot，可以看 OpenClaude、CopilotKit、learn-claude-code；如果是让 Agent 调用外部工具和网页能力，可以看 OpenCLI、Agent-Reach、Google Workspace CLI；如果是企业业务系统搭建和流程落地，可以重点关注 NocoBase。


| 使用目标               | 推荐工具                        |
| ---------------------- | ------------------------------- |
| 构建企业内部系统       | NocoBase                        |
| 网页自动化与工具调用   | OpenCLI、Agent-Reach            |
| 办公系统自动化         | Google Workspace CLI            |
| AI Coding / 终端 Agent | OpenClaude、learn-claude-code   |
| 产品内 AI Copilot      | CopilotKit                      |
| 个人 AI 助手           | Nanobot、Hermes Agent、CowAgent |
| 多模型工作台           | Cherry Studio                   |
| 知识管理               | SiYuan                          |
| 垂直 Agent 应用参考    | career-ops                      |

### Q2：非技术团队可以使用这些 AI Agent 工具吗？

可以，但要看具体工具类型。

像 **OpenCLI、Agent-Reach、Google Workspace CLI、OpenClaude、CopilotKit、learn-claude-code** 这类项目更偏 CLI、开发框架或 Agent 工程学习，需要一定技术基础；

像 **Cherry Studio、SiYuan** 这类工具界面更友好，业务人员更容易直接上手；

**NocoBase** 介于两者之间，不懂技术也可以使用已经搭好的系统和 AI 员工，有一点技术背景可以更好地配置数据模型、页面、权限和工作流，如果有开发资源，还可以通过插件、API、Skills 和 MCP 做更深度的扩展。

### Q3：企业使用 AI Agent 时，最需要注意什么？

企业使用 AI Agent 时，不能只看模型能力，还要考虑数据、权限、流程和审计。Agent 一旦进入业务系统，就可能接触客户数据、订单信息、审批流程、合同内容或内部文档，这些都需要明确边界。


| 关键问题             | 需要关注的能力                   |
| -------------------- | -------------------------------- |
| 数据是否可控         | 自托管、数据库权限、数据访问范围 |
| 操作是否可追踪       | 审计日志、操作记录、流程记录     |
| 权限是否清晰         | 角色权限、字段权限、数据范围控制 |
| 关键动作是否需要确认 | 人工确认节点、审批流、触发条件   |
| Agent 输出是否稳定   | 结构化输出、重试机制、人工复核   |

NocoBase 这类业务系统平台的价值在于，它可以把 AI 放进有权限、有流程、有数据模型的系统环境中，而不是让 Agent 直接面对零散数据和不可控操作。对于审批、客户服务、数据录入、报告生成等场景，保留人工确认和审计记录仍然非常重要。

### Q4：可以把多个工具组合起来使用吗？

可以。AI Agent 生态本身就不是单一工具能够覆盖所有场景，很多团队会把不同工具放在不同层级使用：有的负责构建系统，有的负责调用网页，有的负责写代码，有的负责知识管理，有的负责前端 AI 交互。


| 组合场景                     | 参考组合                                  |
| ---------------------------- | ----------------------------------------- |
| 业务系统 + AI 员工           | NocoBase + AI 员工                        |
| 业务系统 + 外部 Coding Agent | NocoBase + Claude Code / Codex / OpenCode |
| 网页操作 + 信息整理          | OpenCLI + Agent-Reach                     |
| 产品内 AI Copilot            | CopilotKit + 业务系统 API                 |
| 知识库 + Agent               | SiYuan + Nanobot / Hermes Agent           |
| 多模型日常工作台             | Cherry Studio + 各类模型服务              |

## 结语

AI Agent 工具正在快速分化。有些工具关注模型调用和任务执行，有些关注网页自动化和外部信息访问，有些关注 AI Coding 和 Agent Harness，也有一些开始进入企业业务系统和长期流程管理。

对于个人用户来说，可以先从知识管理、个人助手、AI Coding 或浏览器自动化等轻量场景开始；对于企业团队来说，更重要的是判断 Agent 能否进入真实业务流程，并在数据、权限、流程和审计机制的约束下稳定运行。

**如果这篇文章对你有帮助，欢迎分享给正在关注开源 AI Agent 工具、AI 自动化和企业内部系统建设的朋友。**

**相关阅读**：

* **[GitHub 上 Stars 最多的 8 个开源 AI Assistant 工具](https://www.nocobase.com/cn/blog/top-open-source-ai-assistant-tools-github-stars)**
* **[6 个适合搭配 WorkBuddy 使用的开源工具](https://www.nocobase.com/cn/blog/workbuddy-open-source-tools)**
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

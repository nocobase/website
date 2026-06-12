Recently, we have published several recommendation articles about **open source AI Agent projects**, and they have received attention, saves, and feedback from many developers. Many readers also mentioned that they would like to see more roundups of AI Agent tools across different directions and use cases.

* [6 open source tools suitable for use with WorkBuddy](https://www.nocobase.com/en/blog/workbuddy-open-source-tools)
* [How can OpenClaw be used in real business? 5 recommended open source tools](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Which open source tools can OpenCode be used with? 5 open source projects suitable for AI Agents](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Do not let Codex generate apps from scratch: 6 composable open source projects](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [After using Claude Code, you need these 6 open source tools](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

In Reddit’s [AI Agent](https://www.reddit.com/r/AI_Agents/comments/1sfrb3t/what_are_the_best_tools_and_frameworks_for/) community, developers have raised similar questions: there are more and more AI Agent tools and frameworks, but the hard part is figuring out which projects are suitable for real use cases and which ones are mostly hype.

![Reddit-b7cbmq.png](https://static-docs.nocobase.com/Reddit-b7cbmq.png)

This time, we focus on GitHub’s official [ai-agent](https://github.com/topics/ai-agent) topic. We selected projects from the most-starred results and organized them in the order they appear on the topic page. Since the projects under this topic cover a wide range of types, we excluded some projects that are only loosely related to AI Agent tools, are too vertical in use case, or are closer to resource collections or single-purpose content generation. In the end, we selected 14 open source projects that are more suitable for this article.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. → [Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

AI Agent-related projects cover a broad range of areas, so ranking purely by Star count does not fully explain their practical value. Therefore, this article first lists the basic information for each project, including official website, GitHub repository, Star count, and more. Then, each project is introduced from two angles:

* **Positioning**: What type of AI Agent tool it mainly is, whether it focuses more on personal productivity, development assistance, web automation, knowledge management, or enterprise business systems.
* **Use cases**: What specific problems it is better suited to solve, and whether it is more suitable for individual developers, team collaboration, or implementation inside enterprises.

Below are the 14 open source AI Agent projects we selected. Before the detailed introduction, you can quickly scan their positioning through the table.


| Rank | Tool                 | GitHub Stars | Positioning                                                |
| ---- | -------------------- | ------------ | ---------------------------------------------------------- |
| 14   | NocoBase             | 22.7k        | AI-powered no-code business systems                        |
| 13   | OpenCLI              | 24.1k        | Website-to-CLI / browser automation                        |
| 12   | Agent-Reach          | 26.3k        | AI Agent web access / information retrieval                |
| 11   | Google Workspace CLI | 27k          | Productivity suite CLI / Agent Skills                      |
| 10   | AionUi               | 28.1k        | Local AI coworking workspace / multi-Agent management      |
| 9    | OpenClaude           | 28.6k        | AI Coding Agent / CLI tool                                 |
| 8    | CopilotKit           | 34.7k        | Agent frontend framework / Generative UI                   |
| 7    | Nanobot              | 44.1k        | Lightweight AI Agent                                       |
| 6    | Siyuan               | 44.4k        | Self-hosted knowledge management / personal knowledge base |
| 5    | CowAgent             | 45.2k        | AI Assistant / Agent Harness                               |
| 4    | Cherry Studio        | 47.2k        | AI Productivity Studio                                     |
| 3    | career-ops           | 52.7k        | AI job search automation system                            |
| 2    | learn-claude-code    | 66.1k        | Claude Code-like Agent Harness                             |
| 1    | Hermes Agent         | 191k         | General AI Agent / Agent Harness                           |

## 14. NocoBase

![NocoBase1-8m9930.png](https://static-docs.nocobase.com/NocoBase1-8m9930.png)

Official website: [https://www.nocobase.com](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars: 22.7k

### Project introduction

NocoBase is an open source AI-powered no-code / low-code platform for quickly building enterprise internal business systems, admin panels, and business applications that need continuous iteration.

As AI Agents gradually enter both development and business scenarios, enterprises need more than single-task automation. They need a system environment that can support data, permissions, pages, workflows, and activity logs. This is exactly the foundation NocoBase provides.

In NocoBase, AI can participate in application building. Users can describe business requirements in natural language, and AI can help create data models, configure pages, orchestrate workflows, and even assist with plugin development. After the system is generated, teams can continue checking and adjusting fields, relationships, pages, permissions, and workflows through the no-code interface.

![NocoBase2-0l0hhf.png](https://static-docs.nocobase.com/NocoBase2-0l0hhf.png)

NocoBase also supports configuring AI Employees inside business systems. AI Employees can work with page data, business context, tools, and knowledge bases to handle data analysis, content summaries, report generation, translation, unstructured content extraction, form filling, workflow node processing, and more. In this way, AI does not only help build the system. It can also continue participating in system operations.

![NocoBase3-xn1trm.png](https://static-docs.nocobase.com/NocoBase3-xn1trm.png)

### Suitable scenarios

NocoBase is suitable for building enterprise internal systems that require data models, permission control, workflow orchestration, and long-term maintenance, especially in the following scenarios:

* **Enterprise internal business systems**: CRM customer management, approval systems, ticketing systems, project management systems, operations backends, admin backends, and more.

![NocoBase4-ngkai4.png](https://static-docs.nocobase.com/NocoBase4-ngkai4.png)

* **Lightweight ERP and business management modules**: procurement management, inventory management, order management, equipment management, asset management, archive management, customer follow-up, and more.
* **Extension and enhancement of existing systems**: For enterprises that already have databases, ERP, CRM, or other business systems, NocoBase can help integrate data, configure pages, manage permissions, and orchestrate workflows.
* **A foundation for AI Agents to enter business workflows**: NocoBase provides AI Agents with a clear business system environment, where business data has models, user operations have permissions, workflow transitions have rules, and later maintenance can continue through no-code configuration and plugin extensions.

**🔎Related resources**:

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

Official solution library: [https://www.nocobase.com/en/solutions](https://www.nocobase.com/en/solutions)

## 13. OpenCLI

![OpenCLI-qn3nn7.png](https://static-docs.nocobase.com/OpenCLI-qn3nn7.png)

Official website: [https://opencli.info](https://opencli.info/)

GitHub: [https://github.com/jackwener/OpenCLI](https://github.com/jackwener/OpenCLI)

GitHub Stars: 24.1k

### Project introduction

OpenCLI converts websites, browser sessions, Electron apps, and local tools into CLI interfaces. Operations that originally required graphical interfaces can be wrapped as commands, allowing humans or AI Agents to call web capabilities, reuse logged-in browser sessions, and perform automated actions such as navigation, clicking, form filling, and data extraction.

### Suitable scenarios

OpenCLI is suitable for scenarios where tasks need to be completed through webpages but no standard API is available:

* **Web automation**: Read backend pages, query information, fill out forms, and extract platform data.
* **Agent tool interface**: Wrap browser sessions and web capabilities as commands that AI Agents can call.

## 12. Agent-Reach

![Agent-Reach-ew3tec.png](https://static-docs.nocobase.com/Agent-Reach-ew3tec.png)

GitHub: [https://github.com/Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)

GitHub Stars: 26.3k

### Project introduction

Agent-Reach focuses on external information access for AI Agents. Through a CLI tool, it allows Agents to read and search content from platforms such as Twitter, Reddit, YouTube, GitHub, Bilibili, and Xiaohongshu, solving the access problem in information retrieval, content reading, and cross-platform research.

### Suitable scenarios

Agent-Reach can be used for technology trend tracking, competitor research, social media sentiment analysis, content topic research, GitHub project organization, and cross-platform material collection. It is not a complete Agent platform by itself. Instead, it adds external information access capabilities to Agents, giving later analysis, summarization, and organization a richer information base.

## 11. Google Workspace CLI

![Google Workspace CLI-pw1xpm.png](https://static-docs.nocobase.com/Google%20Workspace%20CLI-pw1xpm.png)

GitHub: [https://github.com/googleworkspace/cli](https://github.com/googleworkspace/cli)

GitHub Stars: 27k

### Project introduction

Google Workspace CLI is a command-line tool for Google Workspace. It covers Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Through command-line operations and structured JSON output, it turns capabilities scattered across different productivity apps into interfaces that are easier to call.

### Suitable scenarios

For teams that heavily use Google Workspace, this type of tool makes it easier for AI Agents to enter daily office workflows, such as reading emails, managing calendars, organizing Drive files, operating Sheets, generating Docs, or processing Chat messages. Since it involves workplace data and account authorization, actual use should pay special attention to OAuth scopes, access boundaries, and data security.

🔎Related resources:

Agent Skills: [https://github.com/googleworkspace/cli/blob/main/docs/skills.md](https://github.com/googleworkspace/cli/blob/main/docs/skills.md)

## 10. AionUi

![AionUi-5b2768.png](https://static-docs.nocobase.com/AionUi-5b2768.png)

Official website: [https://www.aionui.com](https://www.aionui.com/)

GitHub: [https://github.com/iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi)

GitHub Stars: 28.1k

### Project introduction

AionUi is a local open source AI coworking app for AI CLI tools such as OpenClaw, Hermes Agent, Claude Code, Codex, OpenCode, and Gemini CLI. It provides built-in Agents, multi-Agent management, remote access, cross-platform use, and automation tasks, making it more like a desktop workbench for managing AI Agents and local work in one place.

### Suitable scenarios

AionUi is suitable for people who use multiple AI Coding or Agent tools at the same time:

* **Multi-Agent management**: Manage tools such as Claude Code, Codex, Hermes Agent, OpenCode, and Gemini CLI in one place.
* **Local workbench**: Handle local files, coding tasks, web operations, and remote access in one workspace, reducing the need to switch between multiple tools.

## 9. OpenClaude

![OpenClaude-kw4n93.png](https://static-docs.nocobase.com/OpenClaude-kw4n93.png)

Official website: [https://openclaude.gitlawb.com](https://openclaude.gitlawb.com/)

GitHub: [https://github.com/Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

GitHub Stars: 28.6k

### Project introduction

OpenClaude is an open source AI Coding Agent CLI that supports both cloud and local model providers, including OpenAI-compatible APIs, Gemini, GitHub Models, Codex, Ollama, Atomic Chat, and more. It brings prompts, tools, agents, MCP, slash commands, and streaming output into a terminal-first workflow.

### Suitable scenarios

OpenClaude is mainly used in terminal development environments, such as code explanation, file modification, test generation, refactoring suggestions, and tool calling. It is flexible, composable, and supports many model choices, but it also requires users to have some development experience and manage model configuration, execution permissions, and code change review themselves.

## 8. CopilotKit

![CopilotKit-gply44.png](https://static-docs.nocobase.com/CopilotKit-gply44.png)

Official website: [https://docs.copilotkit.ai](https://docs.copilotkit.ai/)

GitHub: [https://github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

GitHub Stars: 34.7k

### Project introduction

CopilotKit is a frontend framework for Agents and Generative UI, supporting React, Angular, mobile, Slack, and other interfaces and platforms. It helps developers build AI Copilots, Agent interactions, shared state, and human-AI collaboration workflows inside their own products, rather than providing a standalone application for end users.

### Suitable scenarios

When a product needs to embed an AI Copilot into its interface, CopilotKit provides a relatively complete frontend foundation. For example, it can let AI understand the current page state, assist with form filling, trigger in-app actions, generate UI content, or participate in a business workflow. It is more of a development framework, suitable for teams building AI products, SaaS applications, or internal systems.

🔎Related resources:

Build with Agents: [https://docs.showcase.copilotkit.ai/build-with-agents](https://docs.showcase.copilotkit.ai/build-with-agents)

## 7. Nanobot

![image-jnwd3y.png](https://static-docs.nocobase.com/image-jnwd3y.png)

Official website: [https://nanobot.wiki](https://nanobot.wiki/)

GitHub: [https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

GitHub Stars: 44.1k

### Project introduction

Nanobot is a lightweight open source personal AI Agent that emphasizes real user ownership. It keeps the Agent core relatively simple while providing WebUI, chat channels, tools, memory, MCP, model routing, automation, deployment, and other capabilities.

### Suitable scenarios

It is suitable for individual developers, small teams, or users who want to build lightweight AI Agents:

* **Personal AI Agent**: Connect to Telegram, Discord, Slack, Email, and other entry points to handle daily tasks and automation workflows.
* **Agent prototype development**: Quickly build a runnable Agent with tools, memory, MCP, model routing, and WebUI.

## 6. SiYuan

![SiYuan-xlju2b.png](https://static-docs.nocobase.com/SiYuan-xlju2b.png)

Official website: [https://b3log.org/siyuan](https://b3log.org/siyuan)

GitHub: [https://github.com/siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)

GitHub Stars: 44.4k

### Project introduction

SiYuan is a privacy-first, self-hosted, fully open source personal knowledge management tool written in TypeScript and Go. It supports block references, backlinks, Markdown WYSIWYG editing, embedded SQL queries, web clipping, PDF annotation, databases, flashcards, AI writing, Q&A, and more.

### Suitable scenarios

In the AI Agent context, SiYuan can be understood as a layer of knowledge infrastructure rather than a typical Agent framework. It is mainly used for personal knowledge management, research material organization, team knowledge accumulation, and local-first knowledge base building. When users want AI to better read, organize, and reuse long-term knowledge, this type of structured knowledge environment becomes especially important.

## 5. CowAgent

![CowAgent-kbrmgq.png](https://static-docs.nocobase.com/CowAgent-kbrmgq.png)

Official website: [https://cowagent.ai](https://cowagent.ai/)

GitHub: [https://github.com/zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)

GitHub Stars: 45.2k

### Project introduction

CowAgent is an open source AI Assistant and Agent Harness. It supports task planning, tool and Skills calling, memory and knowledge, self-evolution, multi-model access, and multi-channel access. It also builds on the foundation of chatgpt-on-wechat in IM access and personal assistant scenarios.

### Suitable scenarios

CowAgent focuses on connecting AI Assistants to multiple entry points and tool environments, such as webpages, servers, personal computers, the WeChat ecosystem, and other IM platforms. It is not just a chatbot. Instead, it aims to become a long-running personal assistant or automation assistant through task planning, tool calling, memory, and Skills extensions.

## 4. Cherry Studio

![Cherry Studio-ykg2qa.png](https://static-docs.nocobase.com/Cherry%20Studio-ykg2qa.png)

Official website: [https://cherryai.com](https://cherryai.com/)

GitHub: [https://github.com/CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)

GitHub Stars: 47.2k

### Project introduction

Cherry Studio is an AI Productivity Studio that supports intelligent chat, Autonomous Agents, 300+ assistants, and unified access to multiple frontier large language models. It is closer to a complete AI workbench for centrally managing models, assistants, knowledge bases, and daily AI workflows.

### Suitable scenarios

Cherry Studio is designed for high-frequency AI use in daily work:

* **Multi-model workbench**: Manage different large language models, assistants, knowledge bases, and daily AI workflows in one place.
* **AI productivity tool**: Use it for writing, material organization, knowledge base Q&A, Agent usage, and team collaboration.

## 3. career-ops

![career-ops-ylaji6.png](https://static-docs.nocobase.com/career-ops-ylaji6.png)

Official website: [https://career-ops.org](https://career-ops.org/)

GitHub: [https://github.com/santifer/career-ops](https://github.com/santifer/career-ops)

GitHub Stars: 52.7k

### Project introduction

career-ops is an AI job search automation system based on Claude Code. It can turn an AI Coding CLI into a job search management center for job evaluation, resume generation, job portal scanning, batch processing, interview preparation, and opportunity tracking.

### Suitable scenarios

career-ops is highly vertical and mainly focuses on personal job search workflows. Its value is not only in providing a “job search tool,” but also in showing how AI Agents can enter a clearly defined workflow and break job filtering, material generation, opportunity tracking, interview preparation, and batch processing into executable task chains.

## 2. learn-claude-code

![learn-claude-code-6gfiw7.png](https://static-docs.nocobase.com/learn-claude-code-6gfiw7.png)

Official website: [https://learn.shareai.run](https://learn.shareai.run/)

GitHub: [https://github.com/shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)

GitHub Stars: 66.1k

### Project introduction

learn-claude-code is an open source project for learning Claude Code-like Agent Harnesses. Built around the idea that “Agent product = Model + Harness,” it explains tools, knowledge, observation, action interfaces, permission boundaries, context management, multi-Agent collaboration, and more.

### Suitable scenarios

learn-claude-code is more like systematic learning material for developers, helping users understand the mechanisms behind AI Coding Agents. It covers agent loop, tool use, permissions, hooks, memory, task systems, MCP, and multi-agent collaboration. It is suitable for individual learning and can also serve as internal training material for teams building Agent engineering capabilities.

## 1. Hermes Agent

![Hermes Agent-500tav.png](https://static-docs.nocobase.com/Hermes%20Agent-500tav.png)

Official website: [https://hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/)

GitHub: [https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

GitHub Stars: 191k

### Project introduction

Hermes Agent is a self-improving AI Agent built by Nous Research. It is officially described as “The agent that grows with you.” It emphasizes that Agents can create and improve skills during continuous use, record and search past conversations, and gradually understand users’ long-term preferences and context.

### Suitable scenarios

Hermes Agent is suitable for Agent scenarios that require long-term operation, long-term memory, and Skills accumulation:

* **Self-hosted Agent**: Build a personal or team Agent that can run continuously, record historical conversations, and reuse skills.
* **Long-term collaboration assistant**: Through memory, skills, and tool calling, the Agent can gradually accumulate context and working methods across repeated use.

💡Read more: [Improve internal tool efficiency with Hermes: 5 recommended open source projects](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)

🔎Related resources:

Skills System: [https://hermes-agent.nousresearch.com/docs/user-guide/features/skills](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) Skills Catalog: [https://github.com/NousResearch/hermes-agent/blob/main/website/docs/reference/skills-catalog.md](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/reference/skills-catalog.md)

## FAQ

### Q1: How should I choose between these tools?

A: You can first identify what type of problem you want to solve. If you want to improve personal productivity, you can prioritize Cherry Studio, Nanobot, Hermes Agent, and SiYuan. If you are developing AI Agents or AI Copilots, you can look at OpenClaude, CopilotKit, and learn-claude-code. If you want Agents to call external tools and web capabilities, you can look at OpenCLI, Agent-Reach, and Google Workspace CLI. If you are building enterprise business systems and implementing workflows, NocoBase is worth focusing on.


| Goal                                 | Recommended tools               |
| ------------------------------------ | ------------------------------- |
| Build enterprise internal systems    | NocoBase                        |
| Web automation and tool calling      | OpenCLI, Agent-Reach            |
| Office system automation             | Google Workspace CLI            |
| AI Coding / terminal Agent           | OpenClaude, learn-claude-code   |
| In-product AI Copilot                | CopilotKit                      |
| Personal AI assistant                | Nanobot, Hermes Agent, CowAgent |
| Multi-model workbench                | Cherry Studio                   |
| Knowledge management                 | SiYuan                          |
| Vertical Agent application reference | career-ops                      |

### Q2: Can non-technical teams use these AI Agent tools?

Yes, but it depends on the type of tool.

Projects such as **OpenCLI, Agent-Reach, Google Workspace CLI, OpenClaude, CopilotKit, and learn-claude-code** are more like CLI tools, development frameworks, or Agent engineering learning materials. They require some technical foundation.

Tools such as **Cherry Studio and SiYuan** have friendlier interfaces and are easier for business users to get started with directly.

**NocoBase** sits between the two. Non-technical users can use systems and AI Employees that have already been built. Users with some technical background can better configure data models, pages, permissions, and workflows. With development resources, teams can also extend it more deeply through plugins, APIs, Skills, and MCP.

### Q3: What should enterprises pay the most attention to when using AI Agents?

When enterprises use AI Agents, they should not focus only on model capabilities. They also need to consider data, permissions, workflows, and auditing. Once an Agent enters a business system, it may access customer data, order information, approval workflows, contract content, or internal documents. Clear boundaries are required.


| Key issue                            | Capabilities to focus on                                         |
| ------------------------------------ | ---------------------------------------------------------------- |
| Is data controllable?                | Self-hosting, database permissions, data access scope            |
| Are operations traceable?            | Audit logs, activity logs, workflow records                      |
| Are permissions clear?               | Role permissions, field permissions, data scope control          |
| Do key actions require confirmation? | Human confirmation nodes, approval workflows, trigger conditions |
| Is Agent output stable?              | Structured output, retry mechanisms, human review                |

The value of business system platforms such as NocoBase is that they place AI inside a system environment with permissions, workflows, and data models, rather than letting Agents directly face scattered data and uncontrolled operations. For scenarios such as approvals, customer service, data entry, and report generation, human confirmation and audit records remain very important.

### Q4: Can multiple tools be combined?

Yes. The AI Agent ecosystem cannot be covered by a single tool. Many teams use different tools at different layers: some are responsible for building systems, some for calling webpages, some for writing code, some for knowledge management, and some for frontend AI interaction.


| Combination scenario                     | Reference combination                     |
| ---------------------------------------- | ----------------------------------------- |
| Business system + AI Employee            | NocoBase + AI Employee                    |
| Business system + external Coding Agent  | NocoBase + Claude Code / Codex / OpenCode |
| Web operation + information organization | OpenCLI + Agent-Reach                     |
| In-product AI Copilot                    | CopilotKit + business system API          |
| Knowledge base + Agent                   | SiYuan + Nanobot / Hermes Agent           |
| Multi-model daily workbench              | Cherry Studio + various model services    |

## Conclusion

AI Agent tools are rapidly branching into different directions. Some tools focus on model calling and task execution, some focus on web automation and external information access, some focus on AI Coding and Agent Harnesses, and some are beginning to enter enterprise business systems and long-term process management.

For individual users, it is better to start with lightweight scenarios such as knowledge management, personal assistants, AI Coding, or browser automation. For enterprise teams, the more important question is whether an Agent can enter real business workflows and run stably under the constraints of data, permissions, workflows, and audit mechanisms.

**If this article is helpful to you, feel free to share it with friends who are following open source AI Agent tools, AI automation, and enterprise internal system building.**

**Related reading**:

* **[Top 8 Open Source AI Assistant Tools by GitHub Stars](https://www.nocobase.com/en/blog/top-open-source-ai-assistant-tools-github-stars)**
* **[6 Open Source Tools to Use with WorkBuddy](https://www.nocobase.com/en/blog/workbuddy-open-source-tools)**
* **[Top 6 Open Source AI Tools by GitHub Stars for Stronger AI Agents](https://www.nocobase.com/en/blog/6-github-top-open-source-ai-tools-for-ai-agents)**
* **[5 Open-Source Internal Tools to Use with Hermes Agent](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)**
* **[OpenClaw and 5 Open-Source Tools for Monitoring Business Workflows](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)**
* **[What Open-Source Tools Work Well with OpenCode? 5 Projects to Try](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)**
* **[Building Internal Tools with Codex: 6 Open-Source Projects for Developers](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)**
* **[After Claude Code: 6 Open-Source Tools You Should Know](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)**
* **[Top 10 Open-Source AI And No-Code Tools for Enterprise Software Development](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)**
* **[8 Open-Source AI Agent Platforms for Building Internal Tools](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)**
* **[The Best Enterprise-Grade Self-Hosted CRMs with RBAC, AI, and Open API Support](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)**
* **[6 Best Open-Source Tools to Replace Custom Integration Middleware](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)**
* **[Airtable vs. NocoBase: The Real Cost of Migrating from Excel](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)**

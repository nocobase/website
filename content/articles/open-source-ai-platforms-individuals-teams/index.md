Recently on Hacker News, we've seen plenty of discussion about self-hosted open source AI platforms.

What's interesting is that while everyone is looking for an AI Platform, their actual needs are quite different. Some just want to run AI models on their own computer. Some want agents that can connect to Slack and internal systems and help the team with daily work. Others are already thinking about how to run several agents at once and keep the cost under control.  
A few of those threads are especially representative:

- [Ask HN: What Does Your Self-Hosted LLM Stack Look Like in 2025?](https://news.ycombinator.com/item?id=44187275): someone wants to know how to combine local models, runtime tools, and hardware into a self-hosted AI environment that actually works.

![Hacker News thread about self-hosted LLM stacks](https://static-docs.nocobase.com/image-bh0zb8.png)

- [Ask HN: Open-source AI Agents building platform?](https://news.ycombinator.com/item?id=42620424): a founder is looking for an open source, self-hostable agent platform that connects to internal systems through Slack, so agents can help with real work instead of every agent being built from scratch.

![Hacker News thread asking for an open source AI agent building platform](https://static-docs.nocobase.com/image-r98fnh.png)

- [Ask HN: Is anyone running multi/always-on agents that don't cost a fortune?](https://news.ycombinator.com/item?id=50391647): others want multiple agents to keep running tasks while keeping costs under control, and want to know whether self-hosting is a better fit.

![Hacker News thread about always-on agents and cost](https://static-docs.nocobase.com/image-6g8shj.png)

Based on these needs, we put together **24 self-hostable open source or source-available AI platforms**, covering AI agents, workflow automation, model serving, knowledge bases, and business system development.

To make it easier to find the right tool, we grouped them into three parts by use case:

1. **Suitable for both individuals and teams (11)**: works for one person and can also scale to a team.
2. **Teams (8)**: better suited to multi-person collaboration, centralized management, and enterprise deployment.
3. **Individuals (5)**: suited to local use, personal development, and everyday AI work.

For each project we cover the main features and who it suits, so you can choose based on your own needs.

Let's look at the 24 projects worth trying.





---

💬 NocoBase is an open source platform for enterprises to build and continuously improve business systems with AI: agents write the business part, NocoBase provides the foundation and workflow, and people set goals and make decisions. This column covers AI and business systems, including open source project roundups like this one.

---





| Project | Best for | What it does | Stars |
| --- | --- | --- | --- |
| NocoBase | Individuals and teams | Build and continuously improve CRM, procurement, ticketing, and other business systems with agents | 25.0k |
| Dify | Individuals and teams | Visually orchestrate agents, workflows, and RAG apps | 161.4k |
| Langflow | Individuals and teams | Drag-and-drop agent and RAG flows | 156.7k |
| n8n | Individuals and teams | Self-hosted workflow automation with AI nodes | 210.9k |
| LobeHub | Individuals and teams | From a personal chat UI to team super-agents | 85.7k |
| Ollama | Individuals and teams | Run open models with one command, with a REST API | 187.5k |
| Open WebUI | Individuals and teams | ChatGPT-style UI with multi-user support and RBAC | 159.0k |
| LibreChat | Individuals and teams | Multi-model, multi-user chat with agents and MCP | 47.3k |
| AnythingLLM | Individuals and teams | Document Q&A and no-code agents, desktop and Docker | 68.4k |
| OpenClaw | Individuals and teams | An agent that connects to messaging channels and executes tasks | 394.7k |
| Khoj | Individuals and teams | Self-hosted AI second brain with knowledge Q&A and scheduled automation | 38.2k |
| Sim | Teams | Collaborative agent and workflow workspace | 30.2k |
| Paperclip | Teams | Approvals, budgets, and projects for agent organizations | 114.7k |
| Buzz | Teams | A workspace where people and agents collaborate in channels | 37.6k |
| Onyx | Teams | AI search and assistant connected to enterprise knowledge | 33.4k |
| vLLM | Teams | Production-grade LLM inference | 97.1k |
| LiteLLM | Teams | One API for 100+ models with budget and key control | 63.5k |
| RAGFlow | Teams | RAG engine with deep document parsing | 94.4k |
| MLflow | Teams | Experiment tracking, model registry, and LLM evaluation | 28.9k |
| Jan | Individuals | 100% offline desktop AI app | 45.8k |
| LocalAI | Individuals | OpenAI-compatible local inference that runs without a GPU | 50.4k |
| Hermes Agent | Individuals | Personal agent with memory and scheduled tasks | 264.3k |
| nanobot | Individuals | Ultra-light self-hosted personal agent framework | 50.2k |
| Cherry Studio | Individuals | Desktop model and agent workbench | 53.6k |

## Part 1: Suitable for both individuals and teams

### 1. NocoBase

![NocoBase Studio approval screen](https://static-docs.nocobase.com/studio-en-req-accept-20261111-normal-2x-2ula22.png)

GitHub Stars: 25.0k

Official website: [++https://www.nocobase.com++](https://www.nocobase.com)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

[NocoBase](https://www.nocobase.com/zh-CN/) is an open source platform for building, running, and continuously improving business systems with AI. Coding agents develop the business features, NocoBase provides the application foundation and development governance, and people set goals, review results, and make key decisions.

Building a CRM, procurement, or ticketing system from scratch with a coding agent usually gets a first version done quickly. The real challenge tends to appear after the system goes live: as requirements keep changing, data structures, roles and permissions, approval flows, and deployment all need ongoing adjustment. Every new feature can touch the existing architecture and make the system harder to maintain. This is the problem NocoBase aims to solve: **how to make an AI-built business system not only launch fast, but also iterate reliably over the long term.**

![NocoBase application foundation and governance](https://static-docs.nocobase.com/image-oxqk94.png)

To that end, NocoBase provides two core parts. [NocoBase Core](https://www.nocobase.com/core/) is the open source application foundation, providing data management, roles and permissions, workflows, approvals, and deployment, so coding agents can focus on specific business features instead of rebuilding the system architecture every time. [NocoBase Studio](https://www.nocobase.com/studio/) goes further and addresses how people and agents develop together. It coordinates multiple agents for development, testing, and review, and brings checks, human acceptance, and release approval into one process, so unconfirmed changes do not go straight to production.

![NocoBase Studio workspace](https://static-docs.nocobase.com/image-mxxyt2.png)

For **individual developers**, the free [Community Edition](https://www.nocobase.com/pricing/) (Apache-2.0) can run on your own laptop or server. You can use Claude Code, Codex, Hermes Agent, or another coding agent to build business features on the architecture Core provides. Without repeatedly handling login, permissions, and admin basics, one person can still build a cleanly structured business system that is easy to maintain and extend later.

For **teams and enterprises**, NocoBase also supports multi-person collaboration and long-term operation. Business agents can use the same roles and permissions as team members, key operations go through approval flows for a person to confirm, and every operation is recorded and traceable. If you need to manage several development projects at once, coordinate multiple agents, or use more complete release approvals and enterprise SSO, you can choose the [Professional Edition](https://www.nocobase.com/pricing/) that includes NocoBase Studio.

### 2. Dify

![Dify interface](https://raw.githubusercontent.com/langgenius/dify/main/images/describe.png)

GitHub Stars: 161.4k

Official website: [https://dify.ai](https://dify.ai)

GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)

Dify is a self-hostable AI application and workflow orchestration platform. Its strength is visual orchestration of agents, workflows, and RAG pipelines on a canvas, with multiple models and one-click publishing as an app or API, which greatly lowers the cost of prototyping and adjusting flows; however, it focuses on the AI orchestration and interface layer and does not replace the underlying business system, so complex data permissions and approval loops still need to be handled by external systems. For individuals, Docker Compose is enough to get started, which suits quickly building and validating AI flows; for teams, workspaces support collaborative iteration, which suits teams that need to orchestrate multi-model capabilities and deliver them as apps or APIs quickly. Internal use is unrestricted, but offering a multi-tenant hosting service requires written authorization, and the frontend logo cannot be removed.

### 3. Langflow

![Langflow interface](https://raw.githubusercontent.com/langflow-ai/langflow/main/docs/static/img/workspace-basic-prompting.png)

GitHub Stars: 156.7k

Official website: [https://www.langflow.org](https://www.langflow.org)

GitHub: [https://github.com/langflow-ai/langflow](https://github.com/langflow-ai/langflow)

Langflow is a self-hostable drag-and-drop tool for building agent and RAG flows. Its strength is turning common components from the LangChain ecosystem into canvas nodes: drag and connect them to get an agent or retrieval flow running, then publish it as an API when needed, saving the time spent writing glue code; however, it solves flow prototyping and orchestration, and business rules such as permissions and approvals must be handled outside it. For individuals, a local pip install or Docker is enough to start, which suits developers who want to validate one flow before deciding whether to write code; for teams, one deployment lets people share and reuse flows, which suits prototype teams that need to try several agent approaches quickly. MIT license, with no additional conditions for commercial use or redistribution.

### 4. n8n

![n8n interface](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-screenshot-readme.png)

GitHub Stars: 210.9k

Official website: [https://n8n.io](https://n8n.io)

GitHub: [https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

n8n is a self-hostable workflow automation tool that, with AI agent nodes, is often described as "Zapier with AI." Its strength is more than 400 ready-made integration nodes that connect CRM, email, databases, and model calls into one automated flow, with code nodes for anything the canvas cannot do; however, it is a workflow engine and does not handle modeling, permissions, or approvals for the business data itself, which must come from the systems it connects. For individuals, one Docker command is enough to start, which suits automating your own toolchain; for teams, it suits internal notifications, data sync, and similar automation. The license is Sustainable Use License 1.0, which is fair-code and source-available, not an OSI-approved open source license: personal use and internal business use are allowed, while offering a hosted service requires a commercial license.

### 5. LobeHub

![LobeHub interface](https://hub-apac-1.lobeobjects.space/images/home/overview-cao-light.webp)

GitHub Stars: 85.7k

Official website: [https://lobehub.com](https://lobehub.com)

GitHub: [https://github.com/lobehub/lobehub](https://github.com/lobehub/lobehub)

LobeHub is an AI agent platform that grew out of the personal chat interface Lobe Chat and now focuses on "super-agents on your team." Its strength is keeping the agent marketplace, multi-model switching, and local deployment while connecting agents to Slack, Discord, Telegram, and other channels, with SSO support such as Auth0, so assistants show up in the chat tools a team already uses; however, it sits at the conversation and assistant layer, and the business data and permission boundaries agents operate within are still decided by external systems. For individuals, one-click deployment gives you a good-looking chat assistant that can connect to multiple model providers; for teams, it suits putting AI assistants into existing collaboration tools with unified login management. The license is the LobeHub Community License (Apache-2.0 with conditions): commercial use is allowed without modifying the source, while distributing modified code requires a commercial license.

### 6. Ollama

![Ollama app](https://files.ollama.com/ollama-app-screenshot.png)

GitHub Stars: 187.5k

Official website: [https://ollama.com](https://ollama.com)

GitHub: [https://github.com/ollama/ollama](https://github.com/ollama/ollama)

Ollama is a tool for downloading and running open models on your own machine. Its strength is pulling and running open models such as Llama, Qwen, and DeepSeek with a single command, plus a REST API and an OpenAI-compatible interface for other applications, making it the first layer of most local AI stacks; however, it only runs models and has no chat UI, multi-user support, or knowledge base, which need frontends such as Open WebUI or LibreChat. For individuals, it suits anyone who wants models on their own computer and no data leaving the machine; for teams, it is often deployed on an internal server as a shared model service for multiple applications. MIT license, with no additional conditions for commercial use.

### 7. Open WebUI

![Open WebUI interface](https://docs.openwebui.com/images/landing/hero.png)

GitHub Stars: 159.0k

Official website: [https://openwebui.com](https://openwebui.com)

GitHub: [https://github.com/open-webui/open-webui](https://github.com/open-webui/open-webui)

Open WebUI is a self-hostable, ChatGPT-style chat interface. Its strength is connecting to Ollama and any OpenAI-compatible API, with built-in multi-user support, RBAC, knowledge bases, tool calling, and model management, making it the most common frontend in the "Ollama plus a frontend" setup; however, it is a conversation entry point, not a business system, and permissions and approvals for agents changing business data need to be designed outside it. For individuals, one Docker command plus Ollama gives you a local ChatGPT; for teams, it suits giving the whole company one model entry point with role-based permissions. The license is the Open WebUI License (BSD-3-style with brand terms): the Open WebUI branding may not be modified or removed, and deployments with no more than 50 direct users in any 30-day period are exempt; beyond that you must keep the branding or sign an enterprise license.

### 8. LibreChat

![LibreChat interface](https://www.librechat.ai/_next/static/media/demo_dark.102d59a6.png)

GitHub Stars: 47.3k

Official website: [https://librechat.ai](https://librechat.ai)

GitHub: [https://github.com/LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat)

LibreChat is a self-hostable multi-model chat interface. Its strength is one interface for OpenAI, Anthropic, Google, and local models such as Ollama, with OAuth2, LDAP, and email login, an Admin Panel for users, groups, and roles, agents shareable with specific users or groups, and MCP tools; however, it has many configuration options, and every model provider or login method means editing config files, so the first deployment takes longer than Open WebUI. For individuals, start from the official Docker Compose, which suits people who want to compare several model providers in one interface; for teams, it suits connecting enterprise directory login and assigning agent and model permissions by group. MIT license, with no additional conditions for commercial use.

### 9. AnythingLLM

![AnythingLLM interface](https://raw.githubusercontent.com/Mintplex-Labs/anythingllm-docs/main/public/images/document-chat/manage-attached-docs.png)

GitHub Stars: 68.4k

Official website: [https://anythingllm.com](https://anythingllm.com)

GitHub: [https://github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)

AnythingLLM is an AI application for document Q&A and no-code agents. Its strength is putting PDFs, web pages, notes, and other documents into a workspace for Q&A, configuring agents and scheduled tasks without code, and offering both a desktop app and a Docker version; however, it is aimed at knowledge Q&A and light automation and does not carry complex business processes. For individuals, the macOS, Windows, and Linux desktop app works right after installation, which suits bringing your own material into Q&A; for teams, the Docker version provides multi-user instances and permission management, which suits sharing a document Q&A library. Multi-user support and permissions exist only in the Docker version; the desktop app is a single-person tool. MIT license.

### 10. OpenClaw

![OpenClaw interface](https://raw.githubusercontent.com/openclaw/openclaw/main/.github/pr-proof/claw-creator/main-chat.png)

GitHub Stars: 394.7k

Official website: [https://openclaw.ai](https://openclaw.ai)

GitHub: [https://github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

OpenClaw is a personal agent that connects to messaging channels and can execute tasks. Its strength is that the same Gateway can run as a personal claw on a laptop or as a shared multiplayer claw, with configuration as the only difference, and the agent actually acts on the host machine rather than only answering questions; however, default tools run directly on the host, so every inbound message must be treated as untrusted input and you need to set the security boundary yourself. For individuals, it suits people who want an assistant that takes action and can be summoned from a chat channel; for teams, a small team can share one instance, but the README asks you to read the security and sandbox guides before sharing it externally. MIT license.

### 11. Khoj

![Khoj interface](https://raw.githubusercontent.com/khoj-ai/khoj/master/documentation/assets/img/khoj_web_app_home.png)

GitHub Stars: 38.2k

Official website: [https://khoj.dev](https://khoj.dev)

GitHub: [https://github.com/khoj-ai/khoj](https://github.com/khoj-ai/khoj)

Khoj is a self-hostable "AI second brain." Its strength is connecting notes, documents, and web pages into one assistant with search, Q&A, and scheduled automation; the README says it scales from an on-device personal AI to a cloud-scale enterprise AI, and there is an on-premises enterprise edition; however, the README does not spell out multi-user details for a self-hosted instance, so check the official docs before deploying, and as of 2026-11-18 the repository's latest push was in 2026-08. For individuals, it suits building a knowledge assistant for yourself first; for teams, those who may expand to a team later can start from the same codebase. AGPL-3.0 license: commercial use is allowed, but you must publish the source of your modifications.

## Part 2: Teams and enterprises

### 12. Sim

![Sim interface](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-platform.png)

GitHub Stars: 30.2k

Official website: [https://www.sim.ai](https://www.sim.ai)

GitHub: [https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

Sim is a collaborative agent and workflow workspace. Its strength is letting several people build, debug, deploy, and monitor agent flows on the same canvas, sitting between an orchestration canvas and a team collaboration tool; however, it handles flow orchestration, and the business data and permissions agents work with are still decided by the systems they connect to. For individuals, one person can install it with Docker and try it; for teams, it suits teams that want several people to maintain a set of agent flows together. Apache-2.0 license.

### 13. Paperclip

![Paperclip interface](https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/pap-3368/desktop-planning-detail.png)

GitHub Stars: 114.7k

Official website: [https://paperclip.ing](https://paperclip.ing)

GitHub: [https://github.com/paperclipai/paperclip](https://github.com/paperclipai/paperclip)

Paperclip is an organization layer for managing multiple agents; the README positions it in one line: "If OpenClaw is an employee, Paperclip is the company." Its strength is setting approval stages and three-level budgets (company / agent / project) for an agent organization, with automatic pause when a limit is exceeded; however, budget enforcement depends on agents reporting their spending, and most connectors are still experimental. For individuals, you can start with one agent; for teams, it suits teams already using multiple agents that want to manage them like a company. MIT license.

### 14. Buzz

![Buzz interface](https://raw.githubusercontent.com/block/buzz/main/docs/assets/screenshots/channel-thread.png)

GitHub Stars: 37.6k

GitHub: [https://github.com/block/buzz](https://github.com/block/buzz)

Buzz is Block's open source "workspace where humans and agents work together in channels, running on your own relay." Its strength is that messages, approvals, and git events are all signed events, so a team can trace who approved what and when; however, the README describes it as "not finished," with mobile and push still in development. For individuals, its shape is a team workspace, so single-person use makes little sense; for teams, it suits engineering teams willing to follow an early project and bring agents into channel collaboration. Apache-2.0 license.

### 15. Onyx

![Onyx interface](https://raw.githubusercontent.com/onyx-dot-app/onyx/main/.github/assets/onyx-chat-use-cases.png)

GitHub Stars: 33.4k

Official website: [https://onyx.app](https://onyx.app)

GitHub: [https://github.com/onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx)

Onyx describes itself in its repository as an "Open Source AI Platform" for AI search and assistance connected to enterprise knowledge sources. Its strength is connecting more than 50 enterprise knowledge sources (documents, tickets, chat records) and reusing the permissions users already have in the source systems, so documents a user cannot see in the source system do not appear in answers; however, SSO, RBAC, and similar features are in the ee directory under the Onyx Enterprise License. For individuals, one person can deploy it with Docker to connect their own material; for teams, it suits building a company-wide knowledge Q&A entry point in your own environment. The core code is MIT (Expat) licensed.

### 16. vLLM

![vLLM architecture](https://raw.githubusercontent.com/vllm-project/vllm/main/docs/assets/design/hierarchy.png)

GitHub Stars: 97.1k

Official website: [https://vllm.ai](https://vllm.ai)

GitHub: [https://github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)

vLLM is a production-grade LLM inference service. Its strength is optimizations such as PagedAttention that let one GPU card handle more concurrent requests, plus an OpenAI-compatible API, so an existing application only needs to change an address to connect; however, it needs GPUs and operations effort, and on a laptop Ollama is a better fit. For individuals, developers with a GPU can use it to run their own model service; for teams, it suits teams building their own model layer to provide unified inference for multiple applications. Apache-2.0 license.

### 17. LiteLLM

![LiteLLM interface](https://docs.litellm.ai/assets/ideal-img/ui_request_logs.8cfa565.1280.png)

GitHub Stars: 63.5k

Official website: [https://www.litellm.ai](https://www.litellm.ai)

GitHub: [https://github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

LiteLLM is a gateway that unifies the APIs of multiple model providers. Its strength is turning more than 100 models into one OpenAI-format API, with budgets, keys, rate limits, and logs so a platform team can control spending by team; however, it only covers the model call layer and does not handle an agent's permissions inside a business system. For individuals, it works as a Python SDK to switch models in code; for teams, it suits platform teams that need a unified model gateway for several internal applications. Core features such as budgets and keys are under MIT, while enterprise features such as SSO are licensed separately in the enterprise directory.

### 18. RAGFlow

![RAGFlow interface](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/agent_list.jpg)

GitHub Stars: 94.4k

Official website: [https://ragflow.io](https://ragflow.io)

GitHub: [https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)

RAGFlow is a RAG engine known for deep document parsing. Its strength is chunking PDFs with complex tables and layouts, with answers that cite traceable positions in the source; however, it solves retrieval quality, not who can ask what, so permissions need to be handled at the integration layer. For individuals, once deployed with Docker it can connect your own material; for teams, it suits connecting contracts, manuals, and reports into Q&A. Apache-2.0 license.

### 19. MLflow

![MLflow tracing view](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-tracing.png)

GitHub Stars: 28.9k

Official website: [https://mlflow.org](https://mlflow.org)

GitHub: [https://github.com/mlflow/mlflow](https://github.com/mlflow/mlflow)

MLflow is a platform for experiment tracking, model registry, and LLM evaluation, a familiar name for machine learning teams. Its strength is that recent versions add tracing for LLM and agent calls, putting agent evaluation and traditional model management in one place; however, it targets data science and platform teams, and business teams rarely touch it directly. For individuals, one person can run experiments locally; for teams, it suits enterprises that already have a data science team and need unified model and agent evaluation management. Apache-2.0 license.

## Part 3: Individuals

### 20. Jan

![Jan desktop app](https://static-docs.nocobase.com/image-6mbodr.png)

GitHub Stars: 45.8k

Official website: [https://jan.ai](https://jan.ai)

GitHub: [https://github.com/janhq/jan](https://github.com/janhq/jan)

Jan is a desktop AI app that runs 100% offline. Its strength is keeping models and conversations entirely on the machine, with a built-in model library and a local API at localhost:1337 so other programs can call local models directly; however, it runs only on the local machine and has no multi-user, team sharing, or server deployment mode. For individuals, it suits people who only want to use it on their own computer and do not want any data to leave the machine; for teams, it offers no team mode, so each person has to install it separately. Apache-2.0 license.

### 21. LocalAI

![LocalAI interface](https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-9-0-ui-activity.png)

GitHub Stars: 50.4k

Official website: [https://localai.io](https://localai.io)

GitHub: [https://github.com/mudler/LocalAI](https://github.com/mudler/LocalAI)

LocalAI is an OpenAI-compatible local inference engine. Its strength is running without a GPU, supporting text, speech, and image models and unifying them into an OpenAI-format API, so an existing program only needs to change an address to switch locally; however, performance depends on hardware, and CPU inference suits small models and low-frequency use. For individuals, it suits building a "local OpenAI" on an old computer or small host; for teams, it is an inference layer rather than a multi-user platform, and vLLM is more common in team settings. MIT license.

### 22. Hermes Agent

![Hermes Agent dashboard](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/website/static/img/dashboard/admin-sessions.png)

GitHub Stars: 264.3k

Official website: [https://hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com)

GitHub: [https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

Hermes Agent is Nous Research's open source personal agent with memory and scheduled tasks. Its strength is long-term memory and tasks that run on a schedule, which can organize material and run scripts on time, and it can also work as a coding agent connected to a development environment such as NocoBase, learning the user's habits the more it is used; however, it is a single-person instance with no concept of multiple users or permissions. For individuals, it suits developers who want a long-term personal assistant; for teams, sharing it means deploying an instance for each person. MIT license.

### 23. nanobot

![nanobot workbench](https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot-workbench.png)

GitHub Stars: 50.2k

Official website: [https://nanobot.wiki](https://nanobot.wiki)

GitHub: [https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

nanobot is an "ultra-lightweight, open source, self-hosted personal AI agent framework." Its strength is a small codebase and clear structure, usable from a browser, a terminal, and a chat app, so developers can read every line before changing it; however, a single instance shares memory, and access to the WebUI grants admin rights. For individuals, it suits developers who want to customize their agent at the source level; for teams, multi-person use requires separate instances, and the project itself does not offer a multi-user mode. MIT license.

### 24. Cherry Studio

![Cherry Studio interface](https://raw.githubusercontent.com/CherryHQ/cherry-studio/main/.github/images/readme/chat-light-en.webp)

GitHub Stars: 53.6k

Official website: [https://cherryai.com](https://cherryai.com)

GitHub: [https://github.com/CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)

Cherry Studio is a desktop AI workbench for Windows, macOS, and Linux. Its strength is connecting multiple model providers in one window and switching at any time, with built-in agents, knowledge bases, and MCP support, so people used to desktop software do not need a browser; however, team capabilities such as centralized model management and shared knowledge bases are in the closed-source Enterprise Edition, and this article covers only the Community Edition. For individuals, it suits everyday users who want to switch models in one interface; for teams, the Community Edition has no team mode. AGPL-3.0 license (Community Edition): commercial use is allowed, but you must publish the source of your modifications.





⭐ If this roundup helps, share it with a colleague who is evaluating tools, and give NocoBase a star on [GitHub](https://github.com/nocobase/nocobase).

## Further reading

- [Top 20 AI Projects on GitHub 2026](/zh-CN/blog/best-open-source-ai-projects-github-2026/)
- [10 Open-Source AI Agent Platforms for Business](/zh-CN/blog/open-source-ai-agent-platforms-for-business/)
- [8 Open-Source AI Agent Platforms for Internal Tools](/zh-CN/blog/8-open-source-ai-agent-platforms-for-internal-tools/)
- [Top 5 Open Source AI Internal Tools on GitHub](/zh-CN/blog/top-5-open-source-ai-internal-tools-on-github/)
- [Add AI to Existing Enterprise Systems with NocoBase](/zh-CN/blog/add-ai-to-existing-enterprise-systems-with-nocobase/)
- [NocoBase Core: the application foundation for building and running business systems](/zh-CN/core/)
- [NocoBase Studio: develop with agents and release in a controlled way](/zh-CN/studio/)
- [NocoBase Solutions: open source business applications](/zh-CN/solutions/)
- [Editions and pricing](/zh-CN/pricing/)
- [NocoBase 3 documentation](https://docs.nocobase.com/zh-CN/)

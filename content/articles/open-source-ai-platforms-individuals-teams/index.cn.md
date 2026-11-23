最近在 Hacker News 上，我们看到不少关于自托管开源 AI 平台的讨论。

有意思的是，虽然大家都在寻找 AI Platform，但实际需求却很不一样。有人只想在自己的电脑上运行 AI 模型，有人希望 Agent 能连接 Slack 和内部系统，帮团队处理日常工作，还有人已经开始考虑如何同时运行多个 Agent，并控制使用成本。其中几条讨论很有代表性：

- [Ask HN: What Does Your Self-Hosted LLM Stack Look Like in 2025?](https://news.ycombinator.com/item?id=44187275)：有人想知道本地模型、运行工具和硬件应该如何搭配，才能搭建一套真正可用的自托管 AI 环境。

![image](https://static-docs.nocobase.com/image-bh0zb8.png)

- [Ask HN: Open-source AI Agents building platform?](https://news.ycombinator.com/item?id=42620424)：一位创业者希望找到一个开源、可自托管的 Agent 平台，通过 Slack 连接内部系统，让 Agent 直接协助完成工作，而不是每个 Agent 都从零开发。

![image](https://static-docs.nocobase.com/image-r98fnh.png)

- [Ask HN: Is anyone running multi/always-on agents that don't cost a fortune?](https://news.ycombinator.com/item?id=50391647)：还有人希望多个 Agent 可以持续执行任务，同时控制运行成本，并了解自托管方案是否更合适。

![image](https://static-docs.nocobase.com/image-6g8shj.png)

基于这些需求，我们整理了 **24 个支持自托管的开源或源码可用 AI 平台**，涵盖 AI Agent、工作流自动化、模型运行、知识库以及业务系统开发等不同方向。

为了让大家更容易找到适合自己的工具，我们按照使用场景把它们分成了三个部分：

1. **个人和企业都适用（11 个）**：既能让个人独立使用，也能扩展到团队场景。
2. **企业（8 个）**：更适合多人协作、统一管理和企业级部署。
3. **个人（5 个）**：适合本地运行、个人开发和日常 AI 工作。

每个项目都会介绍它的主要功能、适用场景，方便你根据自己的需求进行选择。

接下来，就一起看看这 24 个项目中，有哪些值得尝试吧。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个面向企业应用开发的开源平台，让 AI 参与业务系统的构建和持续改进。欢迎在 [GitHub](https://github.com/nocobase/nocobase) 上了解我们。

---


| 项目          | 适合谁     | 做什么                                            | Stars  |
| ------------- | ---------- | ------------------------------------------------- | ------ |
| NocoBase      | 企业和个人 | 用 Agent 开发并持续改进 CRM、采购、工单等业务系统 | 25.0k  |
| Dify          | 企业和个人 | 可视化编排 Agent、工作流与 RAG 应用               | 161.4k |
| Langflow      | 企业和个人 | 拖拽式搭建 Agent 和 RAG 流程                      | 156.7k |
| n8n           | 企业和个人 | 自托管工作流自动化，带 AI 节点                    | 210.9k |
| LobeHub       | 企业和个人 | 从个人聊天界面到团队 super-agents                 | 85.7k  |
| Ollama        | 企业和个人 | 一条命令运行开源模型，提供 REST API               | 187.5k |
| Open WebUI    | 企业和个人 | ChatGPT 式界面，多用户与 RBAC                     | 159.0k |
| LibreChat     | 企业和个人 | 多模型、多用户聊天界面，带 Agent 与 MCP           | 47.3k  |
| AnythingLLM   | 企业和个人 | 文档问答与无代码 Agent，桌面版和 Docker 版        | 68.4k  |
| OpenClaw      | 企业和个人 | 接消息渠道、能执行任务的 Agent                    | 394.7k |
| Khoj          | 企业和个人 | 自托管的 AI 第二大脑，支持知识问答与定时自动化    | 38.2k  |
| Sim           | 企业       | 协作式 Agent 与工作流工作区                       | 30.2k  |
| Paperclip     | 企业       | 给 Agent 组织设审批、预算和项目                   | 114.7k |
| Buzz          | 企业       | 人和 Agent 同在频道里协作的工作区                 | 37.6k  |
| Onyx          | 企业       | 连接企业知识源的 AI 搜索与助手                    | 33.4k  |
| vLLM          | 企业       | 生产级大模型推理服务                              | 97.1k  |
| LiteLLM       | 企业       | 统一 100+ 模型 API，预算与密钥控制                | 63.5k  |
| RAGFlow       | 企业       | 深度文档解析的 RAG 引擎                           | 94.4k  |
| MLflow        | 企业       | 实验跟踪、模型注册与 LLM 评测                     | 28.9k  |
| Jan           | 个人       | 100% 离线的桌面 AI 应用                           | 45.8k  |
| LocalAI       | 个人       | OpenAI 兼容的本地推理，无 GPU 可跑                | 50.4k  |
| Hermes Agent  | 个人       | 带记忆与定时任务的个人 Agent                      | 264.3k |
| nanobot       | 个人       | 超轻量的自托管个人 Agent 框架                     | 50.2k  |
| Cherry Studio | 个人       | 桌面端模型与 Agent 工作台                         | 53.6k  |

## 第一部分：个人和团队两者皆可

### 1. NocoBase

![studio-en-req-accept-20261111-normal-2x](https://static-docs.nocobase.com/studio-en-req-accept-20261111-normal-2x-2ula22.png)

GitHub Stars：25.0k

官网：[https://www.nocobase.com](https://www.nocobase.com)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

[NocoBase](https://www.nocobase.com/zh-CN/) 是一个利用 AI 开发、运行和持续改进业务系统的开源平台。Coding Agent 负责开发业务功能，NocoBase 提供应用底座和开发治理能力，而人负责确定目标、审核结果并作出关键决策。

用 Coding Agent 从零开发一套 CRM、采购或工单系统，第一版通常很快就能完成。但真正的挑战往往出现在系统上线之后：随着需求不断变化，数据结构、角色权限、审批流程和部署方式都需要持续调整。每增加一个功能，都可能牵动原有架构，让系统越来越难维护。NocoBase 希望解决的正是这个问题：**如何让 AI 开发的业务系统不仅能快速上线，还能长期、可靠地迭代。**

![image](https://static-docs.nocobase.com/image-oxqk94.png)

为此，NocoBase 提供了两个核心部分。[NocoBase Core](https://www.nocobase.com/core/) 是开源应用底座，提供数据管理、角色权限、工作流、审批和部署等基础能力，让 Coding Agent 专注于具体业务功能的开发，而不必每次从零构建系统架构。[NocoBase Studio](https://www.nocobase.com/studio/) 则进一步解决人与 Agent 如何协同开发的问题。它可以协调多个 Agent 完成开发、测试和评审，并将检查、人工验收和发布审批纳入统一流程，避免未经确认的修改直接进入生产环境。

![image](https://static-docs.nocobase.com/image-mxxyt2.png)

对**个人开发者**来说，免费的 [Community 版](https://www.nocobase.com/pricing/)（Apache-2.0）就可以在本机或自己的服务器上运行。你可以使用 Claude Code、Codex 或 Hermes Agent 等 Coding Agent，在 Core 提供的架构上开发业务功能。无需反复处理登录、权限和后台管理等基础模块，一个人也能构建结构清晰、方便后续维护和扩展的业务系统。

对**团队与企业**来说，NocoBase 同样适合多人协作和长期运营。业务 Agent 可以与团队成员使用同一套角色和权限体系，关键操作通过审批流程交由人确认，操作过程也有记录可查。如果需要同时管理多个开发项目、协调多个 Agent，或使用更完善的发布审批和企业 SSO 等能力，可以选择包含 NocoBase Studio 的 [Professional 版](https://www.nocobase.com/pricing/)。

### 2. Dify

![Dify 界面截图](https://raw.githubusercontent.com/langgenius/dify/main/images/describe.png)

GitHub Stars：161.4k

官网：[https://dify.ai](https://dify.ai)

GitHub：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

Dify 是一个可自托管的 AI 应用与工作流编排平台。它的特色是在画布上可视化编排 Agent、工作流与 RAG 管道，接入多模型并直接发布为应用或 API，能大幅压低原型试错与流程调整的成本；不过它专注在 AI 编排与接口层，并不替代底层业务系统，复杂的数据权限与审批闭环仍需外部系统承接。对个人而言，用 Docker Compose 即可起步，适合快速搭建与验证 AI 流程；对团队而言，可通过工作区协同迭代，适合需要把多模型能力快速编排并交付为应用或接口的团队。内部使用不受限，但做多租户托管服务需取得书面授权，且前端不可去 Logo。

### 3. Langflow

![Langflow 界面截图](https://raw.githubusercontent.com/langflow-ai/langflow/main/docs/static/img/workspace-basic-prompting.png)

GitHub Stars：156.7k

官网：[https://www.langflow.org](https://www.langflow.org)

GitHub：[https://github.com/langflow-ai/langflow](https://github.com/langflow-ai/langflow)

Langflow 是一个可自托管的拖拽式 Agent 与 RAG 流程搭建工具。它的特色是把 LangChain 生态里的常见组件做成画布上的节点，拖拽连线就能把一条 Agent 或检索流程跑通，再按需发布为 API，省去反复写胶水代码的时间；不过它解决的是流程原型和编排，权限、审批这类业务规则要在它之外另行处理。对个人而言，本机 pip 安装或 Docker 即可起步，适合先把一条流程验证通、再决定是否写代码的开发者；对团队而言，部署一套后可以共享和复用流程，适合需要快速试验多条 Agent 方案的原型团队。MIT 许可，商用和二次分发没有附加条件。

### 4. n8n

![n8n 界面截图](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-screenshot-readme.png)

GitHub Stars：210.9k

官网：[https://n8n.io](https://n8n.io)

GitHub：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

n8n 是一个可自托管的工作流自动化工具，加上 AI Agent 节点后常被当作「带 AI 的 Zapier」。它的特色是 400 多个现成集成节点，把 CRM、邮件、数据库和模型调用串成一条自动化流程，画布做不到的部分用代码节点补上；不过它是工作流引擎，不负责业务数据本身的建模、权限和审批，这些要由被它连接的系统提供。对个人而言，一条 Docker 命令就能起步，适合把自己的工具链自动接起来；对团队而言，适合跑内部通知、数据同步这类自动化。许可证是 Sustainable Use License 1.0，属于 fair-code、源码可见，不是 OSI 认可的开源许可证：允许个人使用和自身内部业务使用，对外提供托管服务需要商业授权。

### 5. LobeHub

![LobeHub 界面截图](https://hub-apac-1.lobeobjects.space/images/home/overview-cao-light.webp)

GitHub Stars：85.7k

官网：[https://lobehub.com](https://lobehub.com)

GitHub：[https://github.com/lobehub/lobehub](https://github.com/lobehub/lobehub)

LobeHub 是一个由个人聊天界面 Lobe Chat 发展而来的 AI Agent 平台，现在主打「团队里的 super-agents」。它的特色是在保留 Agent 市场、多模型切换和本机部署的同时，把 Agent 接进 Slack、Discord、Telegram 等频道，并支持 Auth0 等 SSO，让助手直接出现在团队已有的聊天工具里；不过它定位在对话和助手层，Agent 要操作的业务数据和权限边界仍由外部系统决定。对个人而言，一键部署就能得到一个界面好看、能接多家模型的聊天助手；对团队而言，适合想把 AI 助手放进现有协作工具、并统一登录管理的团队。许可证是 LobeHub Community License（Apache-2.0 加条件）：不改源码可以商用，修改后再分发需要商业许可。

### 6. Ollama

![Ollama 界面截图](https://files.ollama.com/ollama-app-screenshot.png)

GitHub Stars：187.5k

官网：[https://ollama.com](https://ollama.com)

GitHub：[https://github.com/ollama/ollama](https://github.com/ollama/ollama)

Ollama 是一个在本机下载并运行开源模型的工具。它的特色是一条命令就能拉取并运行 Llama、Qwen、DeepSeek 等开源模型，并提供 REST API 和 OpenAI 兼容接口供其他应用调用，是大多数本地 AI 栈的第一层；不过它只负责模型运行，没有聊天界面、多用户和知识库，这些要靠 Open WebUI、LibreChat 这类前端补上。对个人而言，适合任何想把模型放在自己电脑上跑、不希望数据出去的人；对团队而言，常被部署在内部服务器上作为统一的模型服务，供多个应用调用。MIT 许可，商用没有附加条件。

### 7. Open WebUI

![Open WebUI 界面截图](https://docs.openwebui.com/images/landing/hero.png)

GitHub Stars：159.0k

官网：[https://openwebui.com](https://openwebui.com)

GitHub：[https://github.com/open-webui/open-webui](https://github.com/open-webui/open-webui)

Open WebUI 是一个 ChatGPT 式的可自托管聊天界面。它的特色是接 Ollama 和任何 OpenAI 兼容 API，自带多用户、RBAC、知识库、工具调用和模型管理，是「Ollama 加一个前端」里最常见的那个前端；不过它是对话入口，不是业务系统，Agent 要改业务数据时的权限和审批要在它之外设计。对个人而言，Docker 一条命令就能和 Ollama 搭成一套本地 ChatGPT；对团队而言，适合给全公司一个统一的模型入口并按角色分配权限。许可证是 Open WebUI License（BSD-3 式加品牌条款）：不允许修改或去掉 Open WebUI 品牌标识，任意 30 天内直接使用者不超过 50 人可以豁免，超过后要保留品牌或签企业许可。

### 8. LibreChat

![LibreChat 界面截图](https://www.librechat.ai/_next/static/media/demo_dark.102d59a6.png)

GitHub Stars：47.3k

官网：[https://librechat.ai](https://librechat.ai)

GitHub：[https://github.com/LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat)

LibreChat 是一个可自托管的多模型聊天界面。它的特色是一个界面接 OpenAI、Anthropic、Google 以及 Ollama 等本地模型，支持 OAuth2、LDAP 和邮箱登录，Admin Panel 管理用户、组和角色，Agent 可以共享给指定的用户或组，并支持 MCP 工具；不过它的配置项较多，每接一家模型或一种登录方式都要改配置文件，初次部署比 Open WebUI 花时间。对个人而言，建议从官方 Docker Compose 起步，适合想在一个界面里比较多家模型的人；对团队而言，适合要接企业目录登录、按组分配 Agent 和模型权限的团队。MIT 许可，商用没有附加条件。

### 9. AnythingLLM

![AnythingLLM 界面截图](https://raw.githubusercontent.com/Mintplex-Labs/anythingllm-docs/main/public/images/document-chat/manage-attached-docs.png)

GitHub Stars：68.4k

官网：[https://anythingllm.com](https://anythingllm.com)

GitHub：[https://github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)

AnythingLLM 是一个做文档问答和无代码 Agent 的 AI 应用。它的特色是把 PDF、网页、笔记等文档放进工作区就能问答，不写代码就能配置 Agent 和定时任务，并同时提供桌面版和 Docker 版两种形态；不过它面向知识问答和轻量自动化，不承载复杂的业务流程。对个人而言，macOS、Windows、Linux 桌面版安装即用，适合把自己的资料接进问答；对团队而言，Docker 版提供多用户实例和权限管理，适合给团队共享一个文档问答库。多用户和权限只在 Docker 版里有，桌面版是单人工具。MIT 许可。

### 10. OpenClaw

![OpenClaw 界面截图](https://raw.githubusercontent.com/openclaw/openclaw/main/.github/pr-proof/claw-creator/main-chat.png)

GitHub Stars：394.7k

官网：[https://openclaw.ai](https://openclaw.ai)

GitHub：[https://github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

OpenClaw 是一个能接消息渠道、能执行任务的个人 Agent。它的特色是同一个 Gateway 既可以在笔记本上当个人 claw，也可以当共享的多人 claw，差别只在配置，而且 Agent 真的会在宿主机上动手执行任务，而不只是回答问题；不过默认工具直接在宿主机运行，所有入站消息都要当作不可信输入，安全边界要自己配。对个人而言，适合想要一个会动手做事、能从聊天渠道随时唤起的助手的人；对团队而言，小团队可以共享一个实例，但 README 要求对外共享前先读安全与沙箱指南。MIT 许可。

### 11. Khoj

![Khoj 界面截图](https://raw.githubusercontent.com/khoj-ai/khoj/master/documentation/assets/img/khoj_web_app_home.png)

GitHub Stars：38.2k

官网：[https://khoj.dev](https://khoj.dev)

GitHub：[https://github.com/khoj-ai/khoj](https://github.com/khoj-ai/khoj)

Khoj 是一个可自托管的「AI 第二大脑」。它的特色是把笔记、文档和网页接进一个助手，支持搜索、问答和定时自动化，README 写它能从设备上的个人 AI 扩展到云规模的企业 AI，另有 on-premises 企业版；不过自托管实例的多用户细节 README 没有写明，部署前要以官方文档为准，而且截至 2026-11-18 仓库最近一次推送在 2026-08。对个人而言，适合先给自己建一个知识助手；对团队而言，以后可能扩到团队的，可以从同一套代码起步。AGPL-3.0 许可，商用允许，但要求公开你修改后的源码。

## 第二部分：团队和企业

### 12. Sim

![Sim 界面截图](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-platform.png)

GitHub Stars：30.2k

官网：[https://www.sim.ai](https://www.sim.ai)

GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

Sim 是一个协作式的 Agent 与工作流工作区。它的特色是让多人在同一个画布上搭建、调试、部署和监控 Agent 流程，定位介于编排画布和团队协作工具之间；不过它负责流程编排，Agent 操作的业务数据与权限仍由被接入的系统决定。对个人而言，一个人用 Docker 也能装起来试；对团队而言，适合想让多人共同维护一组 Agent 流程的团队。Apache-2.0 许可。

### 13. Paperclip

![Paperclip 界面截图](https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/pap-3368/desktop-planning-detail.png)

GitHub Stars：114.7k

官网：[https://paperclip.ing](https://paperclip.ing)

GitHub：[https://github.com/paperclipai/paperclip](https://github.com/paperclipai/paperclip)

Paperclip 是一个管理多个 Agent 的组织层，README 用一句话定位：「如果 OpenClaw 是一名员工，Paperclip 就是公司。」它的特色是给 Agent 组织设置审批阶段、公司 / Agent / 项目三级预算，超限自动暂停；不过预算执行依赖 Agent 上报花费，大部分连接器仍是实验状态。对个人而言，可以从一个 Agent 起步；对团队而言，适合已经在用多个 Agent、想像管理一家公司那样管理它们的团队。MIT 许可。

### 14. Buzz

![Buzz 界面截图](https://raw.githubusercontent.com/block/buzz/main/docs/assets/screenshots/channel-thread.png)

GitHub Stars：37.6k

GitHub：[https://github.com/block/buzz](https://github.com/block/buzz)

Buzz 是 Block 开源的「人和 Agent 一起在频道里工作的工作区，运行在你自己的 relay 上」。它的特色是消息、审批、git 事件都是签名事件，团队可以回溯谁在什么时候批准了什么；不过 README 自述「未完成」，移动端和推送还在开发。对个人而言，它的形态是团队工作区，单人用意义不大；对团队而言，适合愿意跟进早期项目、想把 Agent 纳入团队频道协作的工程团队。Apache-2.0 许可。

### 15. Onyx

![Onyx 界面截图](https://raw.githubusercontent.com/onyx-dot-app/onyx/main/.github/assets/onyx-chat-use-cases.png)

GitHub Stars：33.4k

官网：[https://onyx.app](https://onyx.app)

GitHub：[https://github.com/onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx)

Onyx 的仓库自述是「Open Source AI Platform」，做连接企业知识源的 AI 搜索与助手。它的特色是连接 50 多个企业知识源（文档、工单、聊天记录），并沿用源系统里用户已有的权限，用户在源系统看不到的文档，问答里也不会出现；不过 SSO、RBAC 等功能在 ee 目录，按 Onyx Enterprise License 使用。对个人而言，一个人也能 Docker 部署来接自己的资料；对团队而言，适合想在自己环境里给全公司建一个知识问答入口的团队。核心代码 MIT（Expat）许可。

### 16. vLLM

![vLLM 界面截图](https://raw.githubusercontent.com/vllm-project/vllm/main/docs/assets/design/hierarchy.png)

GitHub Stars：97.1k

官网：[https://vllm.ai](https://vllm.ai)

GitHub：[https://github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)

vLLM 是一个生产级的大模型推理服务。它的特色是 PagedAttention 等优化让同一张卡上能承载更多并发，并提供 OpenAI 兼容 API，现有应用改一个地址就能接上；不过它需要 GPU 和运维投入，个人在笔记本上更适合用 Ollama。对个人而言，有 GPU 的开发者可以用它跑自己的模型服务；对团队而言，适合要自建模型层、给多个应用提供统一推理服务的团队。Apache-2.0 许可。

### 17. LiteLLM

![LiteLLM 界面截图](https://docs.litellm.ai/assets/ideal-img/ui_request_logs.8cfa565.1280.png)

GitHub Stars：63.5k

官网：[https://www.litellm.ai](https://www.litellm.ai)

GitHub：[https://github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

LiteLLM 是一个统一多家模型 API 的网关。它的特色是把 100 多家模型统一成 OpenAI 格式的 API，并提供预算、密钥、限流和日志，让平台组按团队控制花费；不过它只管模型调用这一层，不涉及 Agent 在业务系统里的权限。对个人而言，可以作为 Python SDK 在代码里切换模型；对团队而言，适合要给内部多个应用做统一模型网关的平台组。预算、密钥等核心功能在 MIT 范围内，SSO 等企业功能在 enterprise 目录另行许可。

### 18. RAGFlow

![RAGFlow 界面截图](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/agent_list.jpg)

GitHub Stars：94.4k

官网：[https://ragflow.io](https://ragflow.io)

GitHub：[https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)

RAGFlow 是一个以深度文档解析为特点的 RAG 引擎。它的特色是对表格、版式复杂的 PDF 做切块，回答带可追溯到原文位置的引用；不过它解决检索质量，不解决谁能问什么，权限要在接入层处理。对个人而言，Docker 部署后可以接自己的资料；对团队而言，适合要把合同、手册、报告接进问答的团队。Apache-2.0 许可。

### 19. MLflow

![MLflow 界面截图](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-tracing.png)

GitHub Stars：28.9k

官网：[https://mlflow.org](https://mlflow.org)

GitHub：[https://github.com/mlflow/mlflow](https://github.com/mlflow/mlflow)

MLflow 是一个做实验跟踪、模型注册和 LLM 评测的平台，是机器学习团队的老面孔。它的特色是近年的版本加入了对 LLM 和 Agent 调用的追踪，可以把 Agent 评测和传统模型管理放在一处；不过它面向数据科学和平台团队，业务团队很少直接接触。对个人而言，一个人做实验也能在本机跑；对团队而言，适合已经有数据科学团队、要统一管理模型和 Agent 评测的企业。Apache-2.0 许可。

## 第三部分：个人

### 20. Jan

![image](https://static-docs.nocobase.com/image-6mbodr.png)

GitHub Stars：45.8k

官网：[https://jan.ai](https://jan.ai)

GitHub：[https://github.com/janhq/jan](https://github.com/janhq/jan)

Jan 是一个 100% 离线运行的桌面 AI 应用。它的特色是模型和对话全部留在本机，内置模型库加上 localhost:1337 的本地 API，可以让其他程序直接调用本机模型；不过它只在本机运行，没有多用户、团队共享和服务端部署模式。对个人而言，适合只想在自己电脑上用、不希望任何数据离开本机的人；对团队而言，它不提供团队模式，多人使用要各自安装。Apache-2.0 许可。

### 21. LocalAI

![LocalAI 界面截图](https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-9-0-ui-activity.png)

GitHub Stars：50.4k

官网：[https://localai.io](https://localai.io)

GitHub：[https://github.com/mudler/LocalAI](https://github.com/mudler/LocalAI)

LocalAI 是一个 OpenAI 兼容的本地推理引擎。它的特色是没有 GPU 也能跑，支持文本、语音和图像模型，并把它们统一成 OpenAI 格式的 API，现有程序改一个地址就能切到本地；不过性能取决于硬件，CPU 推理适合小模型和低频使用。对个人而言，适合想在旧电脑或小主机上自建一个「本地 OpenAI」的人；对团队而言，它是推理层而不是多用户平台，团队场景更常用 vLLM。MIT 许可。

### 22. Hermes Agent

![Hermes Agent 界面截图](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/website/static/img/dashboard/admin-sessions.png)

GitHub Stars：264.3k

官网：[https://hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com)

GitHub：[https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

Hermes Agent 是 Nous Research 开源的带记忆与定时任务的个人 Agent。它的特色是长期记忆和按计划运行的任务，可以定时整理资料、执行脚本，也能作为 Coding Agent 接入 NocoBase 这类开发环境，越用越了解使用者的习惯；不过它是单人实例，没有多用户和权限的概念。对个人而言，适合想要一个长期陪伴的个人助理的开发者；对团队而言，多人共用需要各自部署实例。MIT 许可。

### 23. nanobot

![nanobot 界面截图](https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot-workbench.png)

GitHub Stars：50.2k

官网：[https://nanobot.wiki](https://nanobot.wiki)

GitHub：[https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

nanobot 是一个「超轻量、开源、自托管的个人 AI Agent 框架」。它的特色是代码量小、结构清楚，浏览器、终端和聊天应用三端可用，开发者能读懂每一行再改；不过单个实例共享记忆，WebUI 访问即拥有管理权限。对个人而言，适合想从源码层面定制自己 Agent 的开发者；对团队而言，多人使用需要分实例部署，项目自身不提供多用户模式。MIT 许可。

### 24. Cherry Studio

![Cherry Studio 界面截图](https://raw.githubusercontent.com/CherryHQ/cherry-studio/main/.github/images/readme/chat-light-en.webp)

GitHub Stars：53.6k

官网：[https://cherryai.com](https://cherryai.com)

GitHub：[https://github.com/CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)

Cherry Studio 是 Windows、macOS 和 Linux 上的桌面 AI 工作台。它的特色是在一个窗口里接多家模型并随时切换，内置 Agent、知识库和 MCP 支持，习惯桌面软件的人不用开浏览器；不过集中模型管理、共享知识库等团队能力在闭源的 Enterprise Edition 里，本文只讨论社区版。对个人而言，适合想在一个界面里切换模型的日常使用者；对团队而言，社区版没有团队模式。AGPL-3.0 许可（社区版），商用允许，但要求公开你修改后的源码。

⭐ 如果这篇盘点对你有帮助，欢迎分享给正在选型的同事，也欢迎到 [GitHub](https://github.com/nocobase/nocobase) 给 NocoBase 一个 Star。

## 延伸阅读

- [Top 20 AI Projects on GitHub 2026](/zh-CN/blog/best-open-source-ai-projects-github-2026/)
- [10 Open-Source AI Agent Platforms for Business](/zh-CN/blog/open-source-ai-agent-platforms-for-business/)
- [8 Open-Source AI Agent Platforms for Internal Tools](/zh-CN/blog/8-open-source-ai-agent-platforms-for-internal-tools/)
- [Top 5 Open Source AI Internal Tools on GitHub](/zh-CN/blog/top-5-open-source-ai-internal-tools-on-github/)
- [Add AI to Existing Enterprise Systems with NocoBase](/zh-CN/blog/add-ai-to-existing-enterprise-systems-with-nocobase/)
- [NocoBase Core：构建和运行业务系统的应用底座](/zh-CN/core/)
- [NocoBase Studio：人与 Agent 一起开发、受控发布](/zh-CN/studio/)
- [NocoBase Solutions：开源业务应用](/zh-CN/solutions/)
- [版本与定价](/zh-CN/pricing/)
- [NocoBase 3 文档](https://docs.nocobase.com/zh-CN/)

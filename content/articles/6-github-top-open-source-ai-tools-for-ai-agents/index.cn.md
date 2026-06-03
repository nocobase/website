## 引言

过去一年，开源 AI 工具的数量增长非常快。在 GitHub 上，[ai-tools](https://github.com/topics/ai-tools) 这个话题下已经聚集了大量项目。

![AI tools.png](https://static-docs.nocobase.com/AI%20tools-xtlp52.png)

我们发现很多热门开源 AI 工具都是在增强现有 AI 和 AI Agent 的能力。

它们像是 AI Agent 的“外挂”：有的让 Agent 会操作网页，有的让 Agent 更会写代码，有的让 Agent 能调用外部工具，有的让 AI 输出更稳定，还有的让 AI 能进入真实业务系统。

所以，这篇文章我们从 GitHub `ai-tools` 话题下最受关注的开源项目出发，按 GitHub Stars 排序，一起来看看目前最受欢迎的 6 个开源 AI 工具，以及它们分别增强了 AI 的哪一部分能力。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---



## 我们如何筛选这些工具？

为了让这篇文章尽量客观，我们基于 GitHub 上公开可见的数据进行筛选。

本次筛选主要遵循以下规则：

1. **数据来源**：GitHub Topics `ai-tools`
2. **排序方式**：按 GitHub Stars 从低到高


| 排名 | 工具             | GitHub Stars | 主要方向                | 更适合的场景                                             |
| ---- | ---------------- | ------------ | ----------------------- | -------------------------------------------------------- |
| 6    | NocoBase         | 22.6k        | AI + No-code 业务系统   | 构建 CRM、审批、工单、运营后台等企业内部系统             |
| 5    | OpenCLI          | 23.4k        | AI 工具接口 / CLI       | 把网站、本地工具或浏览器会话封装成 AI Agent 可调用的命令 |
| 4    | OpenClaude       | 28.3k        | AI Coding Agent         | 在终端里使用多模型 AI Coding Agent                       |
| 3    | prompt-optimizer | 30.3k        | Prompt 优化             | 优化、测试和复用 Prompt                                  |
| 2    | cc-switch        | 90k          | AI Coding 工具管理      | 管理 Claude Code、Codex、OpenCode 等 AI Coding 工具配置  |
| 1    | browser-use      | 96.8k        | 浏览器自动化 / AI Agent | 让 AI 操作网页、执行浏览器任务                           |

数据统计时间：2026 年 6 月 3 日。由于 GitHub Stars 会持续变化，实际数据可能与阅读时略有不同。

## NocoBase

**网站**：[https://www.nocobase.com/](https://www.nocobase.com/)

**在线 Demo**：[demo.nocobase.com/new](https://demo.nocobase.com/new)

**文档**：[docs.nocobase.com](https://docs.nocobase.com)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**：22.6k

**开源时间**：2021 年

**开源协议**：Apache-2.0

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-ovnjsn.png)

### 项目介绍

NocoBase 是一个开源的 AI + 无代码平台，用于快速构建企业内部业务系统。

在 NocoBase 中，AI 可以直接参与应用构建。你可以用自然语言描述业务需求，让 AI 帮你创建数据模型、配置页面、编排工作流，甚至辅助插件开发。

这意味着，AI 不只是从零生成一堆代码，而是在一个已经具备数据模型、页面、权限、工作流和插件体系的平台里搭建系统。生成之后，用户还可以继续通过 NocoBase 的无代码界面检查、调整和维护。

### 它解决什么问题？

“如何让 AI 在一个结构化的平台里构建业务系统，而不是在空白项目里临时生成代码。”

在 NocoBase 中，AI 可以基于平台已有的业务系统能力工作，包括数据模型、页面搭建、权限控制、工作流、插件扩展和 AI 员工。这样一来，AI 负责加速搭建，人负责确认业务逻辑、调整细节和控制边界。

对于企业内部系统来说，这种方式更稳妥。它既保留了 AI 的效率，也避免了完全从零生成代码后难以维护的问题。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-4fun82.png)

### 最佳使用方法

NocoBase 最适合用于构建结构清晰、需要持续迭代的企业内部系统。

比较好的使用方式是：

1. **先明确一个具体业务场景**

不要一开始就让 AI “帮我做一个完整 ERP”。更好的方式是从一个具体场景开始，例如客户管理、采购申请、设备台账、售后工单、合同审批或项目看板。

2. **用自然语言让 AI 搭建系统基础**

你可以先描述业务对象、字段关系、页面需求和流程规则，让 AI 在 NocoBase 中创建数据模型、配置页面和编排工作流。比如：

> 帮我搭建一个客户管理系统，包括客户、联系人、商机和跟进记录。客户可以关联多个联系人和商机，商机需要有阶段、金额、预计成交时间和负责人。

3. **在无代码界面中检查和调整**

AI 生成之后，不要直接当成最终结果。可以进入 NocoBase 的可视化界面，检查数据表、字段、关系、页面布局、操作按钮和权限配置是否符合业务实际。

4. **配置权限和流程边界**

对内部系统来说，权限和流程不是可选项。不同角色应该看到不同数据、执行不同操作；涉及审批、通知、状态变更、数据校验的流程，也应该明确规则。

5. **让 AI 参与系统运行**

系统搭建完成后，AI 还可以继续参与业务运行。比如通过 AI 员工完成数据分析、报告生成、翻译、决策辅助、表单填写、工作流节点处理等任务。

6. **持续迭代，而不是一次性生成**

NocoBase 的优势不是“一次生成完”，而是 AI 搭建之后，团队仍然可以用无代码方式继续调整字段、页面、流程和权限。这样更适合真实业务系统的长期变化。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-uxqqph.png)

### 适合的场景

NocoBase 适合这些场景：

* CRM 客户管理系统
* 审批系统
* 工单系统
* 项目管理系统
* 采购、库存、订单等轻量 ERP 模块
* 运营后台和管理后台
* 设备管理、资产管理、档案管理
* 客户随访和服务管理
* 需要私有部署的企业内部系统
* 需要权限、流程、数据模型和持续迭代的业务应用
* 希望 AI 和无代码结合构建系统的团队

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-ex094c.png)

### 使用边界

NocoBase 的核心优势是业务系统构建，但它并不适合所有 AI 工具场景。

需要注意的边界包括：

* **不适合只做一次性 Web 页面**：如果你只是想快速生成一个简单展示页、活动页或一次性 Demo，NocoBase 不是最直接的选择。它更适合构建有数据模型、权限、流程和长期维护需求的业务系统。
* **不适合完全替代专业开发框架**：如果你要构建高度定制的前端交互、复杂消费级产品或面向海量用户的互联网应用，传统开发框架仍然更合适。
* **前期仍然需要业务建模**：NocoBase 可以加快搭建速度，但用户仍然需要理解自己的业务对象、数据关系和流程边界。数据模型设计不好，后续系统也会变复杂。
* **复杂定制需要开发能力**：虽然很多功能可以无代码配置，但涉及深度插件开发、复杂集成或特殊业务逻辑时，仍然需要开发人员参与。

更准确地说，NocoBase 适合用来构建可维护、可扩展、可治理的业务系统。它不是要替代所有 AI 工具，而是为 AI 进入真实业务流程提供一个稳定的系统基础。

### 安装 Prompt

你可以把下面这段 Prompt 复制给 Claude Code、Cursor、Codex、OpenCode 或其他 AI Coding Agent：

```text
Please help me install and initialize NocoBase locally.

Requirements:
1. Open the official GitHub repository:
   https://github.com/nocobase/nocobase

2. Read the official README and follow the AI Agent Access quickstart.

3. Check whether Node.js and npm are installed.

4. Install the NocoBase CLI beta version:
   npm install -g @nocobase/cli@beta

5. Create a new project directory:
   mkdir my-nocobase && cd my-nocobase

6. Initialize NocoBase with UI:
   nb init --ui

7. After initialization, explain what files and directories were created.

8. Start or restart the AI agent session inside this directory.
   For example:
   cd my-nocobase && codex
```

## OpenCLI

**网站**：[https://opencli.info/](https://opencli.info/)

**GitHub**：[https://github.com/jackwener/OpenCLI](https://github.com/jackwener/OpenCLI)

**GitHub Stars**：23.4k

**开源时间**：2026 年 3 月

**开源协议**：Apache-2.0

![OpenCLI.png](https://static-docs.nocobase.com/OpenCLI-nkru1y.png)

### 项目介绍

OpenCLI 是一个把网站、浏览器会话、Electron 应用和本地工具转换成 CLI 接口的开源项目。OpenCLI 可以把界面型工具变成更确定的命令行接口，让人和 AI Agent 都能用命令完成操作。

比如，它可以把一些网站能力封装成命令：

```text
opencli hackernews top --limit 5
opencli bilibili hot --limit 5
```

也可以让 AI Agent 通过 `opencli browser` 操作用户已经登录的 Chrome 页面，完成打开网页、读取页面、点击按钮、填写表单、提取数据等动作。

### 适合的场景

OpenCLI 适合这些场景：

* 把常用网站能力转换成 CLI 命令
* 让 AI Agent 操作已登录的 Chrome 页面
* 给 Agent 提供更稳定的外部工具接口
* 封装内容平台、社区平台、招聘网站、社交平台操作
* 从网页中提取结构化数据
* 把本地 CLI 工具注册给 Agent 使用
* 为重复网页任务创建 adapter
* 让 Claude Code、Cursor 等工具调用外部网站能力

### 安装 Prompt

你可以把下面这段 Prompt 复制给 Claude Code、Cursor、Codex 或其他 AI Coding Agent：

```text
Please help me install and configure OpenCLI locally.

Requirements:
1. Check whether Node.js >= 20 is installed.
2. Install OpenCLI using the official command:
   npm install -g @jackwener/opencli

3. Verify the installation:
   opencli --version

4. Install the OpenCLI Browser Bridge extension for Chrome.
   Prefer the Chrome Web Store installation if available.
   If not, guide me to install it manually from GitHub Releases.

5. Run the environment check:
   opencli doctor

6. If I have multiple Chrome profiles, help me list and rename them:
   opencli profile list
   opencli profile rename <contextId> work
   opencli profile use work

7. Run a simple test command:
   opencli list
   opencli hackernews top --limit 5

8. Explain what each step does.

9. Do not access private pages, send messages, publish content, delete data, or submit forms during the initial test.

10. After setup, explain:
   - How OpenCLI connects to Chrome
   - Where OpenCLI stores local configuration
   - How to safely use it with AI agents
   - What actions should require manual confirmation
```

## OpenClaude

**网站**：[https://openclaude.gitlawb.com/](https://openclaude.gitlawb.com/)

**GitHub**：[https://github.com/Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

**GitHub Stars**：28.3k

**开源时间**：2026 年 3 月

**开源协议**：自定义许可证

### 项目介绍

OpenClaude 是一个开源的 AI Coding Agent CLI。它让开发者可以在终端里使用不同模型和不同服务商完成代码相关任务，而不是被绑定在某一个模型或某一个封闭工具里。

OpenClaude 支持多种模型后端，包括 OpenAI-compatible APIs、Gemini、GitHub Models、Codex、Ollama、Atomic Chat 等。它也支持常见的 coding agent 能力，比如读取文件、修改文件、运行 Bash 命令、搜索代码、调用工具、使用 MCP、执行 slash commands，以及流式输出。

![OpenClaude.png](https://static-docs.nocobase.com/OpenClaude-6f81ig.png)

### 最佳使用方法

OpenClaude 最适合已经习惯终端开发，并且希望更灵活地使用不同模型的开发者。

**适合的场景**

* 在终端里使用 AI Coding Agent
* 用不同模型处理代码任务
* 让 AI 理解和修改本地代码库
* 用 AI 生成测试、文档和重构建议
* 测试 OpenAI-compatible、Gemini、Codex、Ollama 等不同后端
* 将 MCP、Bash、文件工具和代码搜索结合起来
* 构建更开放的 AI coding 工作流
* 对比不同模型在 coding 任务中的效果

更准确地说，OpenClaude 适合作为开发者的 AI coding 工作台。它能帮助你更灵活地使用不同模型处理代码任务，但它仍然需要开发者提供清晰目标、审查结果，并控制执行风险。

### 安装 Prompt

你可以把下面这段 Prompt 复制给 Claude Code、Cursor、Codex 或其他 AI Coding Agent：

```text
Please help me install and configure OpenClaude locally.

Requirements:
1. Check whether Node.js and npm are installed.
2. Install OpenClaude globally using the official command:
   npm install -g @gitlawb/openclaude@latest

3. Verify the installation:
   openclaude --version

4. Start OpenClaude:
   openclaude

5. Help me configure one model provider.
   Prefer OpenAI-compatible setup first.

6. Use environment variables for API keys.
   Do not hardcode or print any API key.

7. If I want to use a local model, help me check whether Ollama is installed.
   If Ollama is available, configure OpenClaude with:
   OPENAI_BASE_URL=http://localhost:11434/v1
   OPENAI_MODEL=qwen2.5-coder:7b

8. Create a small test task:
   - Open a simple local project
   - Ask OpenClaude to explain the project structure
   - Ask it to suggest one small improvement
   - Do not allow it to modify files until I confirm

9. After the test, explain:
   - Which provider is currently active
   - Where the configuration is stored
   - How to switch providers later
   - How to safely review file changes
```

## Prompt Optimizer

**网站**：[always200.com](https://always200.com)

**GitHub**：[https://github.com/linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer)

**GitHub Stars**：30.3k

**开源时间**：2025 年 2 月

**开源协议**：自定义许可证

![Prompt Optimizer.png](https://static-docs.nocobase.com/Prompt%20Optimizer-zpgvc1.png)

### 项目介绍

Prompt Optimizer 是一个开源的 Prompt 优化工具，主要用于帮助用户写出更清晰、更稳定、更容易复用的 Prompt。

### 最佳使用方法

Prompt Optimizer 最适合用于“高频、可复用、对输出质量有要求”的 AI 使用场景。尤其适合内容创作、AI 应用开发、客服回复、代码辅助、图片生成、数据分析说明、知识库问答等场景。

### 安装 Prompt

如果你只是想快速体验，可以直接使用在线版。

如果你想本地部署或私有化使用，可以把下面这段 Prompt 复制给 Claude Code、Cursor、Codex 或其他 AI Coding Agent：

```text
Please help me deploy Prompt Optimizer locally.

Requirements:
1. Open the official GitHub repository:
   https://github.com/linshenkx/prompt-optimizer

2. Read the official README and choose the simplest local deployment method.

3. Prefer Docker deployment if Docker is installed:
   docker run -d -p 8081:80 --restart unless-stopped --name prompt-optimizer linshen/prompt-optimizer

4. If Docker is not installed, help me check whether Node.js and pnpm are available, then guide me through local development setup.

5. After deployment, open the web interface at:
   http://localhost:8081

6. Help me configure at least one AI model provider, such as OpenAI, Gemini, DeepSeek, or a custom OpenAI-compatible API.

7. Do not print or hardcode any API key in the terminal or source code.

8. Explain where the configuration is stored and how to update or remove API keys later.

9. Create a simple test:
   - Input a short prompt: "Help me write a product update email"
   - Optimize it
   - Compare the original and optimized prompt
   - Explain why the optimized version is better or worse

10. Make sure the final setup can be reused later.
```

## CC Switch

**网站**：[https://ccswitch.io](https://ccswitch.io)

**GitHub**：[https://github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch)

**GitHub Stars**：90k

**开源时间**：2025 年 8 月

**开源协议**：MIT

![CC Switch.png](https://static-docs.nocobase.com/CC%20Switch-1fge76.png)

### 项目介绍

CC Switch 是一个跨平台桌面工具，用来统一管理多个 AI Coding / AI CLI 工具的模型供应商、API Key、MCP、Prompt 和 Skills 配置。

它支持的工具包括 Claude Code、Claude Desktop、Codex、Gemini CLI、OpenCode、OpenClaw 和 Hermes。

CC Switch 可以把这些分散的配置集中到一个桌面应用里，让开发者可以通过图形界面管理和切换，而不是反复手动编辑 JSON、TOML 或 `.env` 文件。

### 最佳使用方法

CC Switch 最适合 AI Coding 工具的重度用户，尤其是已经同时使用多个 CLI 工具、多个模型供应商或多个 API Key 的开发者。

CC Switch 适合这些场景：

* 同时使用多个 AI Coding 工具
* 经常切换 Claude Code、Codex、Gemini CLI、OpenCode 等工具
* 需要管理多个模型供应商和 API Key
* 想减少手动编辑配置文件的风险
* 希望统一管理 MCP、Prompt 和 Skills
* 需要在多台设备之间同步 AI 工具配置
* 希望通过桌面界面管理 AI Coding 工作流

### 安装 Prompt

你可以把下面这段 Prompt 直接复制给 Claude Code、Cursor、Codex 或其他 AI Coding Agent：

```text
Please help me install and configure CC Switch on my local machine.

Requirements:
1. Detect my operating system: macOS, Windows, or Linux.
2. Follow the official installation method from the CC Switch GitHub repository.
3. If I am on macOS, prefer installing via Homebrew:
   brew install --cask cc-switch
4. If I am on Windows or Linux, guide me to download the correct installer from GitHub Releases.
5. After installation, help me launch CC Switch.
6. Check whether my existing AI CLI tools are installed, such as Claude Code, Codex, Gemini CLI, OpenCode, or OpenClaw.
7. Help me import the existing configuration if available.
8. Create one test Provider configuration.
9. Explain where CC Switch stores its local data and backups.
10. Do not expose or print any API key in the terminal output.

Official GitHub repository:
farion1231/cc-switch

Official website:
ccswitch.io
```

## browser-use

* **官网**：[https://browser-use.com/](https://browser-use.com/)
* **GitHub**：[https://github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)
* **GitHub Stars**：96.8k
* **开源时间**：2024 年 11 月
* **开源协议**：MIT

![browser-use1.png](https://static-docs.nocobase.com/browser-use1-b7i8fw.png)

### 项目介绍

browser-use 是一个让 AI Agent 操作浏览器的开源工具。

大多数网站原本是为人设计的，而不是为 AI Agent 设计的。AI 想要完成网页任务，通常需要理解页面内容、识别按钮和输入框、点击元素、填写表单、跳转页面，甚至处理多步骤流程。

browser-use 可以浏览器变成 AI Agent 可以使用的执行环境，让 AI 能够像人一样在网页中完成任务。

![browser-use2.gif](https://static-docs.nocobase.com/browser-use2-2uuy81.gif)

### 最佳使用方法

browser-use **最适合放在 AI Agent 工具链中使用**，而不是单独作为一个完整产品使用。

比较适合的方式是：

1. **先定义一个非常具体的网页任务**

例如：登录某个后台，查找最近 7 天的订单，并导出结果。

2. **让 AI Agent 使用 browser-use 操作网**

browser-use 负责打开页面、识别元素、点击按钮、填写内容和读取网页状态。

3. **对关键流程增加限制和校验**

比如不要让 AI 随意提交付款、删除数据或修改生产环境配置。对于高风险操作，最好增加人工确认。

4. **在稳定场景中沉淀为自动化流程**

对于重复性强的网页任务，可以把成功流程保存下来，再逐步优化。

5. **生产环境优先考虑浏览器稳定性**

如果任务涉及大量并发、代理、验证码、浏览器指纹、登录状态管理，就不能只考虑本地运行，还要考虑云端浏览器或托管环境。

**browser-use 适合这些场景**：

* AI Agent 浏览器自动化
* 网页表单填写
* 后台系统自动操作
* 数据采集与信息查询
* 模拟人工网页操作
* 测试 AI Agent 的网页执行能力
* 给现有 Agent 增加 browser action 能力

### 安装 Prompt

你可以把下面这段 Prompt 直接复制给 Claude Code、Cursor、Codex 或其他 AI Coding Agent：

```text
Please help me install and run browser-use locally.

Requirements:
1. Check whether Python 3.11 or above is installed.
2. Use uv to create a clean Python environment.
3. Install browser-use.
4. Install Chromium if it is not available.
5. Create a simple example script that uses browser-use to open a webpage and complete a basic task.
6. Use an environment variable for the LLM API key. Do not hardcode the API key in the script.
7. Add clear comments so I can understand each step.
8. After installation, run the example and help me verify whether browser-use works correctly.

Official GitHub repository:
browser-use/browser-use

Please follow the official quickstart as much as possible.
```

如果你想直接测试一个简单任务，可以把任务改成：

```text
Create a browser-use example that opens the browser-use GitHub repository, finds the current number of GitHub stars, and prints the result.
```

## FAQ

1. **这些开源 AI 工具适合企业使用吗？**

取决于具体工具和使用场景。

像 browser-use、OpenCLI 这类工具更适合做 Agent 自动化和外部工具调用；NocoBase 则更适合构建企业内部业务系统。

2. **browser-use 和 OpenCLI 有什么区别？**

它们都可以增强 AI Agent 操作网页和外部工具的能力，但方式不同。

browser-use 更像是让 AI 直接操作浏览器。AI 会打开网页、读取页面、点击按钮、填写表单，并根据页面状态决定下一步。

OpenCLI 更强调把网站、本地工具或浏览器会话封装成 CLI 命令。这样 AI Agent 可以通过命令调用工具，而不是每次都从网页界面开始操作。

3. **如果想构建企业内部系统，应该选哪类 AI 工具？**

如果目标是构建 CRM、审批系统、工单系统、项目管理、运营后台等企业内部系统，只靠 AI Coding 工具通常还不够。

这类系统往往需要数据模型、权限控制、页面配置、工作流、私有部署和后续维护。AI 可以帮助加速搭建，但系统本身仍然需要一个稳定的业务应用基础。

这也是 NocoBase 这类平台适合的场景。它不是只让 AI 生成代码，而是让 AI 基于数据模型、页面、权限和工作流来构建可维护的业务系统。

## 总结

过去，我们更多关注“AI 能生成什么”。但在真实工作流里，更重要的问题是：AI 能不能操作真实工具？能不能调用外部系统？能不能进入业务流程？生成之后的结果能不能继续维护？

这也是这些开源 AI 工具的价值所在。


**相关阅读**：

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
* **[不只 PostgreSQL：5 个支持外部数据库的无代码/低代码平台对比](https://www.nocobase.com/cn/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)**

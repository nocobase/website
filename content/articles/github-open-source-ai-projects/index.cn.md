2025 年 8 月 5 日，[OpenAI 正式发布了两个开源大模型](https://openai.com/zh-Hans-CN/index/introducing-gpt-oss/)：**gpt-oss-120b 和 gpt-oss-20b**。这是 OpenAI 自 GPT-2之后 ，首次发布开源语言模型。

![OpenAI released two open-source large language models](https://static-docs.nocobase.com/1-zowkui.png)

开源语言模型的阵营，又多了两个重量级新成员。开源本身就是很多开发者在 AI 项目中优先考虑的方向，而 OpenAI 的加入，无疑进一步壮大了开源大模型的阵营。

借此机会，我们也来聊聊开源 AI 项目。无论是接入大模型、构建代理系统，还是做多模态生成、知识问答，GitHub 上已有不少值得关注的开源项目。

我们整理了 GitHub  上 Star 数排名前 20 的 [AI 项目](https://github.com/topics/ai)，按功能维度分类，供你参考使用。

如果你对 MCP 话题感兴趣，也可以看看我们上周发布的这篇文章：[GitHub 上 Star 数量前 8 的开源 MCP 项目](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects)

## 📌 项目导航


| **功能类别**                                    | **项目 Star 数排名** + 名称                                                                                                                                                         | **简要说明**                                                                    |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 💡**智能代理与自动化工作流工具**<br/>           | No.1 AutoGPT<br />No.3 n8n<br />No.4 LangChain<br />No.18 gpt-engineer                                                                                                                | 用于构建多步任务执行、流程编排与自主代理系统的开发框架和工具。                  |
| **🎨 多模态生成 / 提示词工具 / 数据与运维平台** | No.2 Stable Diffusion web UI<br />No.8 Supabase<br />No.9 ComfyUI<br />No.10 Netdata<br />No.11 system-prompts-and-models-of-ai-tools<br />No.12 Deep-Live-Cam<br />No.20 Meilisearch | 覆盖图像生成、提示工程、实时监控与后端数据平台，拓展 AI 工具的应用边界与效率。  |
| **💬 可视化聊天界面与 AI 应用前端**<br/>        | No.5 Dify<br />No.6 Open WebUI<br />No.14 Lobe Chat<br />No.19 ChatGPT                                                                                                                | 提供开源聊天界面或前端工具，支持接入大语言模型并快速搭建对话类应用。            |
| 📚**知识问答 / 文档 RAG 系统**<br/>             | No.13 Glama<br />No.16 RAGFlow                                                                                                                                                        | 支持基于文档的知识检索与问答功能，适合搭建企业知识库与智能客服系统。            |
| 🧠**模型训练 / 微调 / 教学资源**                | No.7: Generative AI for Beginners<br />No.15 LLMs-from-scratch<br />No.17 LLaMA Factory                                                                                               | 包含 LLM 的训练、微调工具及从零构建大模型的学习资料，适合模型开发者入门或进阶。 |

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

## No.1: AutoGPT

![AutoGPT](https://static-docs.nocobase.com/2-5k8uwc.PNG)

* GitHub Star: 177k
* GitHub: https://github.com/Significant-Gravitas/AutoGPT
* Website: https://agpt.co/

![AutoGPT](https://static-docs.nocobase.com/3-5srsox.PNG)

**项目概览：**

2023 年 3 月，由 Toran Bruce Richards 和 Significant Gravitas 发布 **AutoGPT** OSS 项目，率先实现了基于 GPT-4 的自主任务执行模型，在 GitHub 爆红，引发大量衍生项目。随着企业对自动化与 AI 集成需求激增，Auto-GPT 已发展为支持持续运行、可视化构建与多模型接入的完整平台。它正逐步成为开发者构建智能代理、集成 AI 到业务流程中的核心工具。

**核心功能：**

* **无缝集成的低代码构建方式**：界面直观，无需深厚的编码知识，即可快速创建复杂工作流程，并轻松连接各类助手与工具。
* **自主运行与持续代理机制**：Agent 可在云端或托管环境持续运行，无需人工互动。可通过外部触发器（如定时器、Webhook、文件触发等）自动激活 agent，处理长时间或循环流程。
* **智能自动化与高可靠性执行**：通过内置 AI 模型与决策逻辑自动执行重复性任务，减少人为干预。平台提供监控与分析功能，能观察 agent 行为、运行状态、性能指标，保障长期运行稳定性。

**应用场景：**

* **企业自动化工作流管理**：构建与业务系统集成的智能 agent，自动完成客户跟进、报告生成等重复任务。
* **低代码 AI 助手开发**：无需复杂编程，也能快速搭建具备数据处理与内容生成能力的 AI agent。
* **AI 决策支持与系统集成**：连接数据库、模型与外部 API，打造跨系统自动决策流程。

## No.2: Stable Diffusion web UI

![Stable Diffusion web UI](https://static-docs.nocobase.com/4-cdwggu.png)

* GitHub Star: 155k
* GitHub: https://github.com/AUTOMATIC1111/stable-diffusion-webui

![Stable Diffusion web UI](https://static-docs.nocobase.com/5-hujk2y.png)

**项目概览：**

过去两年，Stable Diffusion 带动了开源文生图模型的爆发，而由 AUTOMATIC1111 社区构建的 **Stable Diffusion Web UI** 则成为开发者与创作者使用这些模型的首选工具。它最初只是一个基于 Gradio 的实验性界面，用于加载和调用 Stable Diffusion 模型，后来逐步发展为功能丰富、插件生态完善的图形化生成平台。

该项目在 GitHub 上长期位居 AI 和 AIGC 热门榜单，支持多模型切换、LoRA 微调、图像控制、批量生成、脚本编排等能力。如今，Stable Diffusion Web UI 不仅适合个人图像创作，也广泛应用于 AI 绘画产品原型、图形生成自动化流程等场景，是将 AIGC 工具引入实际工作流的重要桥梁。

**核心功能：**

* **多模型支持与自定义加载**：支持加载多种文生图模型；支持在界面中即时切换 LoRA 微调模型、Checkpoint 主模型和 VAE 图像解码器，无需重启程序；与 Hugging Face、本地模型仓库集成，方便管理与调试。
* **强大的图像生成与控制能力**：提供细致可控的生图工具，支持文本生图、图生图、批量生成、图像修复等，控制参数丰富。
* **插件生态与扩展能力**：社区插件资源丰富，涵盖：UI 改进、模型训练与微调、工作流集成、商业部署适配等。

**应用场景：**

* **创意图像与视觉内容生成**：快速部署 Stable Diffusion Web UI，用于生成角色、封面、品牌素材等视觉内容。
* **AIGC 工具原型开发**：作为底层引擎接入产品，打造创意社区、壁纸生成器等 AI 绘图应用。
* **图像生成自动化与批量处理**：结合脚本与插件，实现漫画分镜、产品图等内容的批量自动化生成。

## No.3: n8n

![n8n](https://static-docs.nocobase.com/6-bril8y.png)

* GitHub Star: 127k
* GitHub: https://github.com/n8n-io/n8n
* Website: https://n8n.io/

![n8n](https://static-docs.nocobase.com/7-lakufi.PNG)

**项目概览：**

n8n 是一个开源自动化平台，支持可视化工作流构建和 AI 工具集成，适合构建自动化助手与多系统协作流程。

👉 [点击查看 n8n 的完整介绍与应用场景](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects#no1-n8n)

## No.4: LangChain

![LangChain](https://static-docs.nocobase.com/8-syau7t.png)

* GitHub Star: 113k
* GitHub: https://github.com/langchain-ai/langchain
* Website: https://python.langchain.com/

![LangChain](https://static-docs.nocobase.com/9-86rxvk.png)

**项目概览：**

自 2022 年底开源以来，**LangChain** 迅速成为构建 LLM 应用的事实标准。它最初由 Harrison Chase 发起，目标是解决“大模型虽强但难以构建复杂应用”的痛点。通过模块化设计，LangChain 提供了对**提示模板、文档检索、工具调用、Agent 执行链路**等功能的高度抽象，让开发者可以像搭积木一样，构建智能问答、聊天机器人、Agent、RAG 系统等高复杂度 LLM 应用。

LangChain 的影响力已远超框架本身。它推动了“AI stack”这一概念的形成，与 LangServe、LangSmith 等配套项目共同构成了 AI 应用从开发、部署到监控的完整工具链。它已被众多初创公司、AI 产品和企业原型广泛采用。

**核心功能：**

* **Prompt 和链式调用框架**：将 LLM 应用拆解为链式结构，支持构建各类调用流程与 Agent，可灵活组合模块及同步 / 异步执行。
* **RAG（检索增强生成）能力**：LangChain 原生支持构建 RAG 系统：内置对向量数据库（FAISS、Pinecone等）的支持，支持长文档切分、嵌入生成与语义检索；可组合成 Chat with Docs、知识库问答、文档助手等场景。
* **Agent 架构与工具集成**：LangChain 提供基于思维链（ReAct）与工具调用（Tool/ToolKit）的 Agent 构建能力，支持自动调用多种工具，可执行复杂目标及多 Agent 协同。

**应用场景：**

* **企业文档问答与知识检索助手**：构建支持 PDF、网页等内容的智能问答系统，实现上下文检索与结构化回答。
* **多轮智能问答与 Agent 助手**：打造具备记忆、工具调用能力的 AI Agent，用于数据分析、内部问答和多工具协作。
* **AI 产品的研发与原型平台**：作为 Prompt 管理与多模型集成框架，助力开发者快速构建 AI 应用原型与流程链路。

## No.5: Dify

![Dify](https://static-docs.nocobase.com/10-ee6wpb.png)

* GitHub Star: 110k
* GitHub: https://github.com/langgenius/dify
* Website: https://dify.ai/

![Dify](https://static-docs.nocobase.com/11-wh7r5e.png)

**项目概览：**

**Dify** 提供一站式工具链，帮助开发者快速构建企业知识问答、AI 表单、垂直智能助手等 RAG 应用，支持本地部署与多模型接入。

👉 [点击查看 Dify 的完整介绍与应用场景](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects#no2-dify)

## No.6: Open WebUI

![Open WebUI](https://static-docs.nocobase.com/12-rdqsdh.png)

* GitHub Star: 105k
* GitHub: https://github.com/open-webui/open-webui
* Website: https://openwebui.com/

![Open WebUI](https://static-docs.nocobase.com/13-co0ddy.png)

**项目概览：**

**Open WebUI** 是本地大模型部署的 Web 前端解决方案，兼具轻量、可扩展与权限控制，适合搭建私有化 AI 助手界面或模型调试平台。

👉 [点击查看 Open WebUI 的完整介绍与应用场景](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects#no3-open-webui)

## No.7: Generative AI for Beginners

![Generative AI for Beginners](https://static-docs.nocobase.com/14-l6h62x.png)

* GitHub Star: 94k
* GitHub: https://github.com/microsoft/generative-ai-for-beginners
* Website: https://microsoft.github.io/generative-ai-for-beginners/

![Generative AI for Beginners](https://static-docs.nocobase.com/15-krn66z.PNG)

**项目概览：**

近两年，生成式 AI 从技术热点走向全民应用，微软也借此推出了面向全球开发者的开源课程 —— **Generative AI for Beginners**。该项目由 Microsoft Cloud Advocates 团队维护，课程内容已发展到第 3 个版本，共 21 课时，系统讲解如何构建文本生成、图像生成、RAG 检索增强、函数调用、代理（Agent）等多种 AI 应用。

## No.8: Supabase

![Supabase](https://static-docs.nocobase.com/16-2vidc1.png)

GitHub Star: 86.6k

GitHub: https://github.com/supabase/supabase

Website: https://supabase.com/

![Supabase](https://static-docs.nocobase.com/17-sag4ho.PNG)

**项目概览：**

Supabase 最初以“Firebase 的开源替代方案”定位推出，仅支持基础的数据库即服务（PostgreSQL + REST API）。然而在过去两年里，随着 BaaS（Backend as a Service）市场和 AI 应用的爆发式增长，Supabase 快速演进为一个覆盖认证、存储、实时订阅、边缘函数等的 **全栈后端平台**，吸引了数十万开发者采用。

它基于 PostgreSQL 构建，提供类 Firebase 的开发体验，却拥有完全的自托管能力和数据控制权，成为 Web3、AI 原生 App、移动应用等现代 Web 应用的理想后端方案。

**核心功能：**

* **基于 PostgreSQL 的即用型数据库平台**：自动生成 RESTful 和 GraphQL API，支持行级安全规则（RLS），实时订阅功能支持数据变更事件监听，支持自定义函数和扩展（如 pgvector、PostGIS）。
* **内置身份认证与用户管理**：提供完整的认证模块，支持多因子验证（MFA），内建用户管理界面与 Access Token 管控，支持权限分组、RBAC、JWT 等机制。
* **文件存储 + CDN 分发**：可上传任意类型文件，自动处理访问权限控制，支持图片处理、文件预签名、存储事件触发器等。

**应用场景：**

* **快速上线 AI MVP 与 Hackathon 项目**：几乎零后端开发门槛，适合快速搭建 AI Web/Mobile 应用原型。
* **AI 应用中的数据与向量存储方案**：支持 pgvector 与权限控制，可作为 RAG、Copilot 等系统的嵌入式数据库。
* **中小团队的 Firebase 自托管替代方案**：提供完整后端能力与自托管选项，满足对数据控制有要求的团队需求。

## No.9: ComfyUI

![ComfyUI](https://static-docs.nocobase.com/18-lxld57.PNG)

GitHub Star: 84.4

GitHub: https://github.com/comfyanonymous/ComfyUI

Website: https://www.comfy.org/

![ComfyUI](https://static-docs.nocobase.com/19-ezesx9.PNG)

**项目概览：**

**ComfyUI** 是一个面向图像生成的开源图形化工作流工具，诞生于 2023 年，由社区开发者主导，专为 Stable Diffusion 模型生态设计。它通过模块化节点系统，将原本复杂的提示词设计、图像控制和模型加载流程可视化，大幅降低 AI 图像创作门槛。

随着 AI 视觉创作需求的增长，ComfyUI 已成为开发者、设计师和创作者构建自定义图像生成流程的重要平台，也被广泛用于训练实验、风格混合、视频生成等高级任务中。

**核心功能：**

* **节点化的图像生成流程编辑器**：以拖拽式的节点方式构建完整图像生成流程，包括模型选择、提示词注入、后处理等，所见即所得。
* **支持多种 Stable Diffusion 模型与扩展插件**：原生兼容 SD 1.x/2.x、SDXL，并支持 LoRA、ControlNet、T2I-Adapter、IP-Adapter 等多种扩展模块。
* **高性能与可复用性设计**：采用优化的执行引擎与缓存机制，支持批量处理、高分辨率输出，流程可保存并复用，便于构建图像生成模板。

**应用场景：**

* **AI 视觉内容创作**：创作者可通过拖拽节点设计风格化图像流程，实现 Prompt 到图像的全流程控制。
* **训练与实验原型搭建**：AI 研究者可用 ComfyUI 搭建自定义训练与测试流程，快速试验模型组合与参数配置。
* **图像与视频生成平台底层引擎**：可作为图像生成 SaaS 或视频合成工具的底层引擎，支持用户自由配置与高效生成。

## No.10: **Netdata**

![Netdata](https://static-docs.nocobase.com/20-syzmq4.PNG)

GitHub Star: 75.3k

GitHub: https://github.com/netdata/netdata

Website: https://www.netdata.cloud/

![Netdata](https://static-docs.nocobase.com/21-sz1mk9.png)

**项目概览：**

**Netdata** 是一个开源实时系统监控工具，在 AI 应用部署场景中常用于追踪 GPU、内存、IO 等资源使用情况，确保大模型推理稳定运行。

👉 [点击查看 Netdata 的完整介绍与应用场景](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects#no4-netdata)

## No.11: system-prompts-and-models-of-ai-tools

![system-prompts-and-models-of-ai-tools](https://static-docs.nocobase.com/22-mm99vt.PNG)

GitHub Star: 73.7k

GitHub: https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools

![system-prompts-and-models-of-ai-tools](https://static-docs.nocobase.com/23-mzyae1.PNG)

**项目概览：**

该项目是一个开源资源库，旨在收集和归档不同 AI 工具（如 ChatGPT、Claude、Perplexity 等）的系统提示词（System Prompts） 与模型调用参数。作为首批系统性整理多家 AI 产品背后提示词的资料库，该项目为研究 Prompt 工程、模型行为分析、AI 产品复现提供了宝贵素材。

**核心功能：**

* **收录多个主流 AI 工具的系统提示词**：包括角色定义、行为约束、语气要求等原始系统提示词。
* **包含模型调用配置与 API 参数**：如使用的模型版本、温度参数、最大 Token 限制等细节。
* **持续更新与社区协作机制**：支持社区贡献与版本更新，推动 prompt 工程透明化。

**应用场景：**

* **AI 产品复现与调试**：开发者可基于提示词还原原有行为，快速复现竞品功能。
* **Prompt 工程研究与教学资料**：作为 LLM 行为研究的真实范例，适合用于课程教学与调优实践。
* **系统提示词设计参考**：为构建自定义 AI 助手、Agent 系统提供高质量参考模板。

## No.12: Deep-Live-Cam

![Deep-Live-Cam](https://static-docs.nocobase.com/24-n2sc8a.png)

GitHub Star: 72.3k

GitHub: https://github.com/hacksider/Deep-Live-Cam

Website: https://deeplivecam.net/

![Deep-Live-Cam](https://static-docs.nocobase.com/25-zaglnj.PNG)

**项目概览：**

**Deep-Live-Cam** 是一个结合 AI 视频处理与实时视觉增强技术的开源项目，旨在通过深度学习模型对实时摄像头画面进行人像优化、美颜、风格迁移等处理。项目定位于“AI 驱动的实时摄像头增强引擎”，主要服务于虚拟主播、视频会议、美颜直播等应用场景。

**核心功能：**

* **实时人像识别与处理**：基于 ONNX/TensorRT 加速的人脸识别、人像分割、背景替换等。
* **内置美颜与滤镜算法**：支持磨皮、美白、大眼、瘦脸等效果，参数可调节。
* **多种风格与滤镜叠加**：集成多种视觉风格模型，可实现动漫化、油画化、Cyberpunk 等特效。

**应用场景：**

* **虚拟直播与主播内容增强**：提供实时美化与特效叠加，提升视觉吸引力。
* **AI 视频会议优化工具**：适用于 Zoom、OBS 等平台的实时画面增强。
* **创意短视频制作平台**：用于搭建可交互、个性化的视频拍摄工具或模板平台。

## No.13: Glama

![Glama](https://static-docs.nocobase.com/26-91i4ng.PNG)

GitHub Star: 64.8k

GitHub: https://github.com/punkpeye/awesome-mcp-servers

Website: https://glama.ai/mcp/servers

![Glama](https://static-docs.nocobase.com/27-io2bza.png)

**项目概览：**

**Glama** 聚焦企业级 AI 应用部署，任意支持 MCP 的模型后端，用于集中管理模型上下文、指令与权限策略，助力构建更可控的 LLM 系统。

👉 [点击查看 Glama 的完整介绍与应用场景](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects#no6-glama)

## No.14: Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/28-peobw3.png)

GitHub Star: 64.1k

GitHub: https://github.com/lobehub/lobe-chat

Website: https://lobechat.com/

![Lobe Chat](https://static-docs.nocobase.com/29-yz65bm.png)

**项目概览：**

**Lobe Chat** 是一个开源的多模型聊天助手平台，主打本地部署与插件扩展，致力于提供类似 ChatGPT 的用户体验。

👉 [点击查看 Lobe Chat 的完整介绍与应用场景](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects#no5-lobe-chat)

## No.15: LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/30-uyen1n.png)

GitHub Star: 62.2k

GitHub: https://github.com/rasbt/LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/31-xurcwa.png)

**项目概览：**

**LLMs-from-scratch** 是一个从零开始训练大语言模型的实战项目，由 Hugging Face 社区成员发起，涵盖从数据准备、分词器构建、模型架构设计，到训练与评估的完整流程，适合希望深入理解大模型底层原理的研究者与开发者。

**核心功能：**

* **逐步构建 Transformer 架构**：从 attention 到位置编码，逐层实现。
* **自定义 tokenizer 与数据 pipeline**：支持从原始文本到训练样本的完整流程。
* **微调与评估支持**：兼容多种开源数据集与模型检查点。

**应用场景：**

* **AI 教学课程或工作坊**：用于教授 LLM 架构与训练流程。
* **自研小型语言模型**：研究者可基于该项目构建适配特定场景的轻量模型。
* **大模型训练过程复现**：方便对比不同设计在训练过程中的效果差异。

## No.16: RAGFlow

![RAGFlow](https://static-docs.nocobase.com/32-1mmw55.png)

GitHub Star: 61.7k

GitHub: https://github.com/infiniflow/ragflow

Website: https://ragflow.io/

![RAGFlow](https://static-docs.nocobase.com/33-nynzcr.png)

**项目概览：**

**RAGFlow** 是一个模块化的 RAG 系统搭建框架，涵盖数据导入、向量检索、Prompt 模板与多模型调用，适合快速构建知识问答系统原型。

👉 [点击查看 RAGFlow 的完整介绍与应用场景](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects#no7-ragflow)

## No.17: LLaMA Factory

![LLaMA Factory](https://static-docs.nocobase.com/34-srl0ci.png)

GitHub Star: 55.6k

GitHub: https://github.com/hiyouga/LLaMA-Factory

Website: https://llamafactory.readthedocs.io/

![LLaMA Factory](https://static-docs.nocobase.com/35-m5ff1m.png)

**项目概览：**

**LLaMA Factory** 是一个专为 Meta LLaMA 系列模型（包括 LLaMA2、LLaMA3）设计的微调与部署工具，集成了 LoRA、QLoRA、Flash Attention 等技术，适用于中小规模的个人或企业在本地高效训练与部署语言模型。

**核心功能：**

* **支持多种训练方式**：LoRA、全参数微调、INT8/4bit 量化微调。
* **自动适配模型结构**：支持多种 Hugging Face 格式的模型。
* **界面友好、部署简单**：可通过 Web UI 启动训练流程。
* **支持推理与导出**：训练完成后可直接用于推理或部署。

**应用场景：**

* **自有数据上的模型微调**：企业使用内部数据快速定制模型。
* **研究与竞赛场景**：支持快速尝试不同训练方法。
* **小模型快速部署**：适合教育与初创团队验证 LLM 能力。

## No.18: gpt-engineer

GitHub Star: 54.6k

GitHub: https://github.com/AntonOsika/gpt-engineer

![gpt-engineer](https://static-docs.nocobase.com/36-i77bm0.png)

**项目概览：**

**gpt-engineer** 旨在让用户用自然语言描述需求，自动生成完整代码结构。它通过对话方式采集需求，然后由 LLM 生成目录、模块和代码，代表“AI 编程助手”领域的重要探索路径。

**核心功能：**

* **用户需求采集流程**：通过 prompt 收集项目结构与开发目标。
* **自动生成项目代码**：从文件结构到代码实现一体化生成。
* **可配置开发风格与提示词**：用户可设定代码风格、语言与框架偏好。
* **可迭代优化机制**：支持循环式修改与调试，模拟开发者反馈过程。

**应用场景：**

* **快速生成项目初始代码框架**：适用于新项目搭建或 Hackathon。
* **AI 编程辅助研究**：探索 AI 如何逐步“理解”开发意图。
* **代码教学与演示工具**：帮助新手理解完整项目如何构建。

## No.19: ChatGPT

![ChatGPT](https://static-docs.nocobase.com/37-mn61ch.png)

GitHub Star: 53.9k

GitHub: https://github.com/lencx/ChatGPT

![ChatGPT](https://static-docs.nocobase.com/38-dik0fz.png)

**项目概览：**

**ChatGPT** 是由 lencx 开发的开源桌面客户端，旨在为 OpenAI 的 ChatGPT 提供跨平台（Windows、macOS、Linux）原生体验。其轻量、界面美观且支持多账户，是使用 OpenAI API 的用户首选桌面方案之一。

**核心功能：**

* **跨平台原生应用**：基于 Tauri 构建，占用资源极低。
* **多账户支持与快捷切换**：适配不同 API Key 使用。
* 支持 Markdown、代码高亮与聊天记录本地保存。

**应用场景：**

* **开发者的 AI 助手客户端**：快速调用 ChatGPT 处理任务。
* **私人知识管理工具**：结合 Markdown 输出记录对话内容。
* **教学与演示工具**：便于展示 ChatGPT 功能或接口测试。

## No.20: Meilisearch

![Meilisearch](https://static-docs.nocobase.com/39-agg8q7.png)

GitHub Star: 52.6k

GitHub: https://github.com/meilisearch/meilisearch

Website: https://www.meilisearch.com/

![Meilisearch](https://static-docs.nocobase.com/40-l9tm6v.png)

**项目概览：**

**Meilisearch** 是一个开源的超高速搜索引擎，专为构建现代 Web 应用而生。它主打即时搜索（如自动补全、模糊匹配）体验，部署简单，配置灵活，适合中小型项目或初创企业作为 Elasticsearch 替代品。

**核心功能：**

* **高性能自然语言搜索**：支持 typo 容错、前缀匹配、权重排序。
* **简单部署与 API 使用**：几分钟内即可搭建完整搜索服务。
* **多语言支持与自定义词库**：适配全球化产品需求。

**应用场景：**

* **网站搜索功能**：为博客、电商、文档站点快速集成搜索。
* **SaaS 产品的嵌入式搜索模块**：提升产品内检索体验。
* **本地知识库/文档库搜索引擎**：结合 RAG 应用构建智能问答。

## 写在最后

希望这篇文章能为你挑选和使用开源 AI 工具提供实用参考。如果你觉得有收获，不妨转发给同样关注 AI 的开发者朋友！

⭐ 我们也会持续关注更多优质项目，一起发现更多灵感与可能性！

**相关阅读：**

* [GitHub 上 Star 数量前 8 的开源 MCP 项目](https://www.nocobase.com/cn/blog/github-open-source-mcp-projects)
* [GitHub 上 Star 数量前 8 的开源 Web 应用项目](https://www.nocobase.com/cn/blog/github-open-source-web-applications)
* [GitHub 上 Star 数排名前 40 的开发者工具](https://www.nocobase.com/cn/blog/github-open-source-developer-tools)
* [2025年GitHub Star增长最快的15个开源低代码项目](https://www.nocobase.com/cn/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [GitHub 上星星数量前 11 的开源 CRM 项目](https://www.nocobase.com/cn/blog/github-open-source-crm-projects)
* [GitHub 上排名前 11 的开源管理后台（Admin Dashboard）项目](https://www.nocobase.com/cn/blog/top-11-open-source-admin-dashboard-projects-on-github)

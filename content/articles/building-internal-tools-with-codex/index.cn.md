## 背景

最近在 [Hacker News](https://news.ycombinator.com/item?id=47796469) 上，看到一条关于 AI Coding Agent 的讨论：**直接让 AI 从零构建应用，并不是最靠谱的使用方式。**

![HN.png](https://static-docs.nocobase.com/HN-nb8ae5.png)

这位开发者提到，如果你只是直接告诉 AI：“帮我构建一个应用”，它往往会生成一个**看起来不错、但结构并不可靠的结果。**

AI 很适合提升执行效率，但前提是它需要在一个清晰的结构里工作。

对于真实的企业内部工具来说，你需要一个可靠的基础框架再配合 Coding Agent 提效。

今天我们就围绕企业内部工具这个场景，推荐一些适合和 Codex 配合使用的开源项目，帮助开发者更高效地搭建内部系统或工具。


| 项目        | 最佳场景                                     | 适合开发者                                             |
| ----------- | -------------------------------------------- | ------------------------------------------------------ |
| NocoBase    | 构建 CRM、工单、审批、资产管理等内部业务系统 | 适合需要快速搭建可维护业务系统的开发者                 |
| Refine      | 构建 React 管理后台、Dashboard 和 B2B 应用   | 适合熟悉 React、希望保留代码控制权的开发者             |
| Payload CMS | 构建 TypeScript / Next.js 数据后台和管理系统 | 适合偏好 TypeScript-first 后端与 Admin Panel 的开发者  |
| Directus    | 为现有 SQL 数据库生成 API 和管理后台         | 适合已有数据库、需要快速补齐后台和 API 层的团队        |
| Supabase    | 构建内部工具的 Postgres 后端                 | 适合需要认证、数据库、存储、实时能力和后端函数的开发者 |
| Windmill    | 将脚本变成内部工具、任务和工作流             | 适合有大量内部脚本和自动化任务的技术团队               |
| n8n         | 编排跨系统自动化流程和 AI workflow           | 适合需要连接多个系统、SaaS 工具和 AI Agent 的团队      |

1. ## NocoBase

官网：[https://www.nocobase.com/](https://www.nocobase.com/?utm_source=chatgpt.com)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase?utm_source=chatgpt.com)

GitHub Stars： 22.4k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-nfhndl.png)

NocoBase 是一个开源的 AI 无代码平台，适合用来构建 CRM、工单系统、审批系统、项目管理、资产管理、运营后台等企业内部业务系统。

NocoBase 的核心价值，**是为内部系统提供一套完整的基础框架**，包括数据模型、页面配置、权限控制、工作流、插件扩展和 AI 能力。对于开发者来说，它不是一个只能拖拽页面的工具，而是一个可以继续通过代码扩展的业务系统基础设施。

NocoBase 官方提供了 Codex 相关文档：[用 Codex 操作 NocoBase，搭建开发两不误](https://docs.nocobase.com/cn/ai/codex)

连接 Codex 后，Codex 可以借助 [NocoBase Skills](https://docs.nocobase.com/cn/ai-builder#nocobase-skills) 和 [CLI](https://docs.nocobase.com/cn/api/cli/) 理解平台的配置方式与开发规则，帮助开发者通过自然语言创建数据表、配置页面、设计工作流、设置权限，并进一步完成插件开发、功能扩展和问题排查。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-40774f.png)

**相比让 Codex 从零生成一个内部系统，NocoBase 提供了更稳定的系统框架**。这样生成出来的不是一套难以维护的一次性代码，而是运行在 NocoBase 体系内的可持续迭代系统。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-qu1ijq.png)

除了搭建阶段，NocoBase 也提供 AI 员工能力。AI 员工可以结合业务页面、数据表和流程上下文工作，协助完成数据整理、数据分析、翻译、研究、邮件处理、数据建模和图表配置等任务。也就是说，Codex 更适合帮助开发者搭建和扩展系统，而 NocoBase AI 员工则可以参与系统上线后的日常业务操作。

![ai员工填表单-yhms5j.gif](https://static-docs.nocobase.com/ai%E5%91%98%E5%B7%A5%E5%A1%AB%E8%A1%A8%E5%8D%95-yhms5j.gif)

通过配置 LLM 服务、Skills、知识库和快捷任务，AI 员工可以更自然地参与到具体业务操作中，帮助团队提升系统搭建和日常使用效率。

### **Codex ****结合 NocoBase ****可以做什么**

Codex 结合 NocoBase，可以帮助开发者更快搭建可维护的企业内部业务系统，例如：

* CRM
* 工单系统
* 审批系统
* 项目管理
* 资产管理
* 运营后台
* 数据看板

Codex 负责理解需求、拆解业务结构和生成实现；NocoBase 负责承载数据模型、权限、页面、工作流和插件扩展。开发者不需要让 AI 从零生成一套难以维护的代码，而是让 Codex 在 NocoBase 已有的系统框架中完成搭建和开发。

### **建议 prompt**

**安装 NocoBase **

将下方提示词复制给 Codex ，即可自动完成 NocoBase 的安装和配置：

```Plain
帮我安装 NocoBase CLI 并完成初始化：https://docs.nocobase.com/cn/ai/ai-quick-start.md （请直接访问链接内容）
```

**设计系统**

```Plain
帮我用 nocobase-dsl-reconciler skill 搭建一个工单管理系统，包含仪表盘、工单列表、用户管理、SLA 配置
```

**实际效果**

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-1klco2.png)

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-fhuwo3.png)

### 相关资源

可以复制发送给 Codex ，方便直接使用

文档：https://docs.nocobase.com/cn/ai/

CLI:：https://docs.nocobase.com/cn/api/cli/

Skills：https://docs.nocobase.com/cn/ai-builder#nocobase-skills

Mcp：https://docs.nocobase.com/cn/ai/mcp/

2. ## Refine

官网：[https://refine.dev/](https://refine.dev/)

GitHub：[https://github.com/refinedev/refine](https://github.com/refinedev/refine)

GitHub Stars：34.7k

![Refine1.png](https://static-docs.nocobase.com/Refine1-8qgxcz.png)

Refine 是一个面向开发者的开源 React 框架，主要用于构建内部工具、管理后台、Dashboard 和 B2B 应用。它提供了认证、权限控制、路由、数据请求、状态管理、国际化等基础能力，适合开发者快速搭建 CRUD 密集型应用。

Refine 现在也在强化 AI Agent 场景。它提供了一套适合 AI 生成应用的流程：连接现有 REST API 或 Supabase 项目，分析后端结构，再为 AI agents 创建 blueprint，让生成结果更贴合真实数据模型。

这也是 Refine 适合和 Codex 结合的原因。Codex 不需要从零猜测一个内部工具应该怎么写，而是可以基于 Refine 的工程结构、资源模型和数据源配置，生成列表页、详情页、编辑页、表单、筛选、权限判断和 API 调用逻辑。

![Refine2.png](https://static-docs.nocobase.com/Refine2-jpcnwg.png)

Refine 还提供 CLI，可以用于创建资源、管理更新、swizzle 组件，以及运行 build、start、dev 等项目任务。对于 Codex 这类 Coding Agent 来说，这类明确的命令行入口更容易被自动化调用，也更适合在现有项目中持续迭代。

### Codex 结合 Refine 可以做什么

Codex 结合 Refine，最适合用来快速开发 React 技术栈下的内部管理界面，比如 CRM 后台、订单管理后台、运营审核平台、客服工作台、数据管理面板和 B2B SaaS 管理端。

比如你要做一个订单管理后台，Codex 可以根据订单、客户、商品、支付状态等数据结构，基于 Refine 生成订单列表、订单详情、编辑表单、筛选条件、状态更新按钮和权限判断逻辑。Refine 负责提供 React 内部工具的基础结构，Codex 负责加速具体业务页面开发。

它更适合希望保留完整代码控制权的开发者。最终交付的是 React 项目，而不是封闭平台里的配置结果。后续你仍然可以继续用 Codex 修改组件、重构逻辑、接入新的 API 或扩展业务模块。

### 建议 prompt

```Plain
帮我基于 Refine 创建一个订单管理后台，使用 REST API 作为数据源，包含订单列表、订单详情、订单编辑表单、客户筛选、订单状态更新和基础权限控制。
```

3. ## Payload CMS

官网：[https://payloadcms.com/](https://payloadcms.com/)

GitHub：[https://github.com/payloadcms/payload](https://github.com/payloadcms/payload)

GitHub Stars：42.5k

![Payload CMS1.png](https://static-docs.nocobase.com/Payload%20CMS1-9l7yh9.png)

Payload CMS 是一个开源的全栈 Next.js 框架，可以用来构建 CMS、管理后台、数据驱动应用和企业内部工具。它提供了 TypeScript 配置、数据集合、权限控制、Admin Panel、REST / GraphQL API、Hooks、插件和文件管理等能力。

Payload 通过代码定义数据模型和业务逻辑。你可以用 TypeScript 配置 collections、fields、access control、hooks 和 admin UI，让内部工具的后端、API 和管理界面保持在同一个代码项目里。

Payload 也已经开始支持 AI Agent 相关场景。官方文档中提供了 MCP Plugin，可以让开发者控制哪些 collections 和 globals 允许 AI 执行 find、create、update、delete 等操作，也可以定义自己的 prompts、tools 和 resources。

![Payload CMS2.png](https://static-docs.nocobase.com/Payload%20CMS2-jczl8t.png)

### Codex 结合 Payload 可以做什么

Codex 结合 Payload，适合用来快速开发 TypeScript / Next.js 技术栈下的数据后台、内容管理系统、客户后台、订单后台、资产管理后台和运营管理工具。

![Payload CMS3.png](https://static-docs.nocobase.com/Payload%20CMS3-lejqn0.png)

比如你要做一个资产管理后台，Codex 可以根据“设备、员工、部门、领用记录、维修记录、审批状态”等需求，生成 Payload collections、字段配置、访问权限和 hooks。Payload 则负责提供数据管理界面、API 和权限执行。后续如果需要增加业务逻辑，也可以继续让 Codex 修改 TypeScript 配置和扩展代码。

### 建议 prompt

```Plain
帮我基于 Payload CMS 创建一个资产管理后台，包含设备、员工、部门、领用记录和维修记录这几个 collections，并配置基础字段、访问权限、Admin Panel 展示字段和常用 hooks。
```

4. ## Directus

官网：[https://directus.io/](https://directus.io/)

GitHub：[https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Stars：35.7k

![Directus1.png](https://static-docs.nocobase.com/Directus1-7w23p8.png)

Directus 是一个开源的数据后台平台，可以把 PostgreSQL、MySQL、SQLite、MariaDB、MS SQL、OracleDB 等 SQL 数据库快速转换成 REST / GraphQL API 和可视化管理后台。它适合用于构建数据管理后台、内容管理系统、运营后台、客户数据后台、内部 API 层等项目。

Directus 的特点是对已有数据库非常友好。很多内部工具不是从零开始，而是已经有一套业务数据库，只是缺少一个好用的后台、权限管理和 API 层。Directus 可以直接连接现有 SQL 数据库，并在上面提供数据模型管理、角色权限、文件管理、自动化流程和扩展能力。

Directus 已经提供 MCP Server，可以让 Claude、ChatGPT、Cursor 等 AI 工具连接到 Directus。AI 可以在现有权限体系下创建、编辑和管理内容，不需要额外复制数据，也不需要绕过 Directus 的权限控制。

![Directus2.png](https://static-docs.nocobase.com/Directus2-otlau7.png)

### Codex 结合 Directus 可以做什么

Codex 结合 Directus，适合用来快速搭建基于现有数据库的内部数据后台和 API 层。比如客户数据管理、订单数据管理、内容管理、产品目录管理、运营配置后台、数据审核后台等。

这套组合的价值在于：Directus 负责连接数据库、生成 API、提供管理后台和权限体系；Codex 负责理解业务需求，设计数据结构，编写扩展逻辑、Hooks、Custom Endpoints、数据脚本和前端调用代码。

这种方式的优势是，开发者不需要重写现有数据库和后端。Directus 提供数据层和管理后台，Codex 负责加速业务逻辑和扩展开发，适合那些已经有数据库、但需要快速补齐内部工具能力的团队。

### 建议 prompt

```Plain
帮我基于 Directus 为现有订单数据库设计一个内部管理后台，包含订单、客户、商品、支付记录四类数据，并配置基础权限、列表视图、状态更新流程和订单状态变更后的通知 Hook。
```

5. ## Supabase

官网：[https://supabase.com/](https://supabase.com/)

GitHub：[https://github.com/supabase/supabase](https://github.com/supabase/supabase)

GitHub Stars：103k

Supabase 应该不需要再过多介绍了。

Supabase 官方提供了 Supabase MCP Server，可以让 AI 工具连接 Supabase 项目，并在权限范围内查询和操作项目。Supabase 也有面向 AI agents 的 skills，覆盖数据库、Auth、Edge Functions、Realtime、Storage、Vectors、Cron、Queues、CLI、MCP、schema changes、migrations、RLS 策略和安全审计等场景。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=N2QxMTliMzNjNjBhNmQ5MDhlNzk0OWQ1OWUzZmNkYjNfbGZUNFdic2IxTGpDVzhXcEh4ZVRMZ2pYOXU4YlRYQkxfVG9rZW46SWJyNGJVODBnb3c2WXh4R0dnSGNCbVRCbkpmXzE3NzkxMjY0NDU6MTc3OTEzMDA0NV9WNA)

### Codex 结合 Supabase 可以做什么？

Codex 结合 Supabase，适合用来快速搭建内部工具的后端部分。Supabase 提供数据库、认证、API、存储和函数运行环境；Codex 负责根据业务需求设计 schema、编写 SQL、配置 RLS 权限、生成 Edge Functions，并帮助前端调用 Supabase API。

比如你要做一个客户管理后台，Codex 可以根据“客户、联系人、跟进记录、销售机会、合同、附件”等需求，设计 Postgres 表结构、字段关系、索引和 RLS 策略。Supabase 则负责提供数据库、认证、自动 API 和权限执行。后续如果需要自动分配客户、同步外部数据、生成 AI 摘要，也可以继续让 Codex 编写 Edge Functions 或数据库函数。

### 建议 prompt

```Plain
帮我基于 Supabase 设计一个客户管理后台的后端，包含 customers、contacts、opportunities、contracts、follow_ups 和 attachments 表。请生成 SQL migration、基础索引、RLS 策略、认证权限设计，以及一个用于自动分配销售负责人的 Edge Function。
```

6. ## Windmill

官网：[https://www.windmill.dev/](https://www.windmill.dev/)

GitHub：[https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

GitHub Stars：16.5k

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MzkxNDE3NTI4M2RiMTk3MmNkNDYxZTgyYzI3YjM4YWVfd0ZDSXhBU1NReGkzb0R2ZElqb1hpQlU0WmRadEdsRnpfVG9rZW46U1dVOWJMekc2bzFMbEZ4UERVb2NPQzVQbjVnXzE3NzkxMjY0NDU6MTc3OTEzMDA0NV9WNA)

Windmill 是一个面向开发者的开源平台，可以把 Python、TypeScript、Go、Bash、SQL 等脚本快速变成 API、后台任务、工作流和内部应用。它适合用来构建自动化流程、数据处理任务、运营工具、后台任务管理、内部脚本平台和轻量级管理界面。

Windmill 可以通过 CLI 和内置 AI skills，在本地使用 Claude Code 或 Codex 开发，然后通过 `wmill sync push` 部署到远程 workspace。也就是说，Codex 可以负责写脚本和工作流逻辑，Windmill 负责运行、调度、权限、日志和可视化操作界面。

### Codex 结合 Windmill 可以做什么

Codex 结合 Windmill，最适合用来把开发者写的脚本快速变成团队可用的内部工具。比如数据同步、报表生成、批量导入导出、Webhook 处理、定时任务、客户数据清洗、订单状态同步、Slack / Email 通知、AI 数据处理流程等。

比如你要做一个“每晚同步 CRM 客户数据并生成异常报告”的内部流程。Codex 可以帮你写数据读取、清洗、比对和报告生成脚本；Windmill 可以把它配置成定时任务，记录执行日志，并提供一个内部页面让团队手动触发或查看结果。

### 建议 prompt

```Plain
帮我基于 Windmill 创建一个客户数据同步流程：每天晚上从 PostgreSQL 读取客户数据，清洗重复记录，识别异常邮箱，生成一份异常报告，并通过 Slack 通知运营团队。请使用 TypeScript 编写脚本，并说明如何配置定时任务和输入参数。
```

## 写在最后

Codex 这类 AI Coding Agent 正在改变开发者构建内部工具的方式。

NocoBase、Refine、Payload、Directus、Supabase、Windmill 这些项目，分别从业务系统、前端框架、数据后台、后端服务、脚本自动化等不同角度，为开发者提供了更清晰的工程基础。

Codex 的价值，是在这些基础之上进一步提升开发效率：帮你拆解需求、生成代码、配置资源、编写脚本、设计工作流、处理集成和排查问题。

更理想的开发方式是：

> 开发者选择合适的开源基础设施，再让 Codex 在明确的结构中完成具体实现。

这样构建出来的内部工具，才更容易维护、扩展和真正投入使用。

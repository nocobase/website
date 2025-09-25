## 引言

> 我们的一个有趣经历是：在售前阶段，我们常常把 NocoBase 与 AI 结合，用极快的速度交付 POC。客户常常惊讶于：周一才刚见面，等到周三回来，就已经能看到一个完整可用的原型。通常他们都会问：“这是什么魔法？”而当我们揭晓是 NocoBase 时，总会引发客户的惊喜与技术上的好奇。
>
> **—— Fabio Farzat，ED CEO**

## 关于 ED

[ED](https://ed.dev.br) 是一家总部位于巴西的科技公司，拥有超过 **130 名专业人员**，团队分布在 **16 个州**，长期为保险、资本市场、公用事业和公共部门等大型企业客户提供关键系统的交付与运营支持。

![ED.png](https://static-docs.nocobase.com/ED-nvmw2z.png)

在交付能力上，ED 通过了 **ISO 9001** 认证（覆盖软件管理、项目管理、基础设施管理流程），并获得了 **CMMI-DEV 三级**认证，这意味着其研发与交付过程符合国际标准，具备可持续扩展的工程成熟度。

在组织建设上，ED 已连续四年入选巴西 “Great Place to Work” Top 10，最高曾排名第 1，目前位列第 6。这让公司能够持续吸引并留住高素质的技术人才，保证了项目交付的专业性与稳定性。

凭借规模化团队、严格的质量体系和广泛的客户基础，ED 已成为巴西市场公认的企业级技术服务提供商，并正在加速探索**现代化平台与 AI 驱动解决方案**，以帮助客户连接未来。

## 痛点与选择

在日常交付中，ED 的研发团队常常遇到同一个问题：**无数次重复的 CRUD 和集成开发**。无论是内部系统还是面向客户的项目，都需要快速搭建数据管理层、生成接口、处理导入导出，还要保证安全与可扩展。每一次都是从零开始，耗费了大量时间与人力，直接拖慢了创新节奏。

为了解决这一困境，ED 整理了一份覆盖**企业级需求**的清单：

* **安全性** —— 访问控制、数据隔离、合规保障；
* **性能** —— 大规模数据下依旧能保持快速响应；
* **可扩展性** —— 能在不同项目和客户环境中灵活适配；
* **可观测性** —— 系统运行透明，便于监控和排错。

![checklist.png](https://static-docs.nocobase.com/checklist-o8ncyd.png)

他们需要的不只是一个能“拖拽建表”的工具，而是一套**能承载完整数据模型、支持强类型和关系结构、并能自动生成 API** 的平台。

在评估多种市面上的方案后，ED 最终选择了 **NocoBase**。内部的概念验证表明，它不仅满足了清单中的所有需求，还在实际使用中表现出了更高的灵活性和效率。

## 落地场景

在完成概念验证后，ED 将 NocoBase 快速引入到核心业务系统中，并逐步扩展到多个场景。

### **场景一：商业产品 [AssistFlow](https://assistflow.com.br/)**

与大多数企业只将 NocoBase 用作内部系统不同，ED 将其直接用于打造对外商用平台 —— **[AssistFlow](https://assistflow.com.br/)**。**AssistFlow** 让企业快速创建智能代理，并在多个社交媒体渠道无缝运行，支持文本、语音、图片、文件等多模态交互。它不仅覆盖客户服务，还延伸到销售、HR、技术支持等场景。

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow-e60x5d.png)

在这款对外的商业产品中，**整个配置模块和管理界面完全运行在 NocoBase 上**。这样，团队无需重新开发前端逻辑，只需在 NocoBase 中完成建模和配置，就能为客户提供灵活可扩展的管理能力。

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow2-vd4e8i.png)

**AssistFlow** 产品亮点包括：

* **快速上手**：仅需 5 分钟即可创建并运行智能代理，无需编程。
* **多渠道接入**：同时支持 WhatsApp、Teams、Slack、Telegram、Facebook、Instagram、LinkedIn 等渠道。
* **多模态交互**：能处理文本、语音、图片和文件，满足不同业务需求。
* **多场景适用**：覆盖客户服务、销售、市场营销、HR 和技术支持等场景。
* **自动化与集成**：内置 API，可与现有业务系统无缝对接，推动流程自动化。
* **安全可控**：支持私有云部署，满足企业级安全与合规要求。

### **场景二：项目管理平台**

用于支持 ED 对客户交付项目的全流程管理。过去需要多轮开发的 CRUD 和权限逻辑，如今可以通过简单的数据建模、前端配置和自动生成 API 一步完成。

![Project Management Platform](https://static-docs.nocobase.com/Project%20Management%20Platform-o3heh6.png)

### **场景三：工单系统**

面向外部的支持与服务单处理系统，完全由 NocoBase 提供数据层与交互界面。客户可以直接提交和跟踪工单，后台工作流则自动触发处理。

![Ticketing System](https://static-docs.nocobase.com/Ticketing%20System-a9un8k.png)

### **场景四：供应商管理系统**

在该系统中，供应商可以上传发票，财务流程会自动触发支付审批。NocoBase 的数据建模与工作流功能让流程自动触发并全程可追踪。

## 成果

借助 NocoBase，ED 在交付速度和质量上都实现了显著提升：

* **交付周期缩短约三分之一**：过去需要 2–3 个 15 天迭代的模块，现在一个迭代即可完成；
* **测试与上线更快**：大多数功能只需直接功能测试，无需传统开发中的复杂测试环节；
* **生产更稳定**：项目上线顺畅，团队信心更高。

ED 工程师们认为，NocoBase 改变了他们的开发方式。可视化建模、自动 CRUD、灵活工作流与自动生成 API，让开发者摆脱了重复劳动，高效直达业务目标。QA 与用户的反馈周期大幅缩短，项目能更快进入生产。

如今，NocoBase 已经成为 ED 的**技术底座**：内部系统依赖它运转，对外商业产品同样建立其上，团队的日常交付几乎都离不开它。更重要的是，这种“周一见面、周三原型”的魔法效率，不只是客户的惊喜和信任起点，更展示了一种全新的交付范式。

## 展望

对全球的技术团队而言，ED 的经验表明：**NocoBase 不仅满足企业级需求（安全、性能、扩展、可观测），还让团队在更短周期内完成迭代，把精力从重复劳动转向创新与价值创造**。

在巴西，ED 已经用它重塑了交付模式；接下来，他们希望与 NocoBase 一起，把这种实践带给更多行业和组织。


**更多 NocoBase 的用户故事：**

* [数十万条数据秒级响应——Classact 在 Kubernetes 上的 NocoBase 应用实践](https://www.nocobase.com/cn/blog/classact)
* [年产量 18.5 亿，伯恩光学背后的数字敏捷工厂](https://www.nocobase.com/cn/blog/bielcrystal)
* [卓正医疗如何用 NocoBase 搭建“家庭医生式”服务体系？](https://www.nocobase.com/cn/blog/distinct-healthcare)
* [在禧玛诺工厂，一位工程师的零代码实践](https://www.nocobase.com/cn/blog/shimano)
* [日本房产中介龙头为何放弃 Salesforce，转向开源平台 NocoBase？](https://www.nocobase.com/cn/blog/century-21)
* [Second-Brain 如何用 NocoBase 为金融企业构建 AI 系统](https://www.nocobase.com/cn/blog/second-brain)

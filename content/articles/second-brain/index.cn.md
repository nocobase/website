## 一家 AI 创业公司的选择难题

[Second-Brain](http://www.dbl-brain.com/) 是一家位于香港的 AI 创业公司，团队背景主要来自金融与咨询行业。他们专注于为企业构建 AI 驱动的决策系统。

![Second-Brain](https://static-docs.nocobase.com/1-esvvr0.PNG)

在 ToB 企业场景中，AI 系统的难点并不在模型调用本身，而在于其背后的数据基础。企业内部的制度、流程与业务数据常常分散在多个体系中，结构混乱、版本不一，甚至存在冲突。如果不加以梳理和建模，AI 就无法做出真正有意义的响应。

为了让 AI 能够“读懂”企业，Second-Brain 的第一步，需要构建一个整合企业规章制度、业务流程和外部法规等企业私有知识的底座。

在为一家银行客户构建 AI 知识系统的项目中，Second-Brain 面临着难度极高的交付挑战：

* 系统需支持**上百个页面**，权限管理复杂；
* 客户要求**纯离线部署**，不能使用任何在线服务；
* 项目需在**短周期内完成交付**，交互体验不能打折。

Second-Brain 聚焦 AI 模型与行业产品设计，产品高度依赖数据建模与参数化配置。他们需要一个**灵活、自托管、可快速交付**的平台，作为整个解决方案的系统底座。

## 为什么最终选择 NocoBase？

在项目启动初期，Second-Brain 曾认真评估过数个低代码与零代码平台。包括国内外多个 SaaS 以及开源项目，但受限于部署方式、许可协议或代码可控性，无法满足客户“离线部署”与“信息安全”的刚性要求。

彼时，他们一度考虑回到“传统方案”——前后端全自研。

这种方式可控性高，也利于保护知识产权。然而面对紧迫的交付周期和客户的高要求，这条路成本过高、风险过大。

就在团队陷入两难时，他们注意到了 NocoBase。

团队看重的是 NocoBase 架构理念——**不依赖 SaaS，不牺牲灵活性，可自定义、可扩展、可交付**。开源特性让 Second-Brain 能深入了解 NocoBase 的运行机制，从而快速响应客户反馈。

最终，Second-Brain 决定采用 NocoBase 作为系统底座，开启项目的搭建与交付工作。真正的挑战不在于工具选型，而在于如何以此构建一套复杂的数据驱动型 AI 应用系统，并在短时间内完成交付。

## 项目实施中的挑战与突破

作为一套 AI 知识系统的底座，该项目并不仅仅是传统的“知识管理平台”。

项目目标是构建一个“长期可用的知识源头”和“AI 可读”的制度体系：将非结构化的内部制度与法规进行清洗、分类与建模，并通过统一接口供 AI 模型调用。这对系统的建模能力、数据组织和接口设计都提出了更高要求。

并且客户作为金融行业机构，对安全要求极高，**部署必须全离线完成，所有更新均需通过物理隔离流程操作。**

在确认了 NocoBase  的可行性后，Second-Brain 以此完成方案设计与技术选型，最终顺利中标并推进交付。

项目中，NocoBase 承载了整个系统的构建工作，包括：

* **结构化整合客户的制度体系与法规文档**，为 AI 模型提供清晰、标准化的数据源；

![Transform regulatory documents and policies into structured, standardized data](https://static-docs.nocobase.com/2-5xor3v.PNG)

* **构建 AI 问答模块的数据基础与接入能力**，支持三类典型应用场景：
  * 日常问答与政策对话；
  * 跨数据表的业务数据查询；
  * 面向管理者的复杂问题分析与结构化结论生成；

![Power the data infrastructure behind the AI Q&A module](https://static-docs.nocobase.com/3-p8o62u.PNG)

* **为内部 AI 流程提供支撑工具**，包括：

  文档类素材的格式转换与内容提取（PDF / Word / 图片转文字），实现自动化预处理；

  ![Document preprocessing](https://static-docs.nocobase.com/4-sdv8mt.png)

  基于语料生成问答对，作为微调样本库的构建方式之一；
  ![Generating Q&A pairs](https://static-docs.nocobase.com/5-hb6nly.png)
* **开发 ECharts 插件实现知识图谱功能**，帮助用户可视化地理解制度间的关联；

![ECharts plugin](https://static-docs.nocobase.com/6-qalqnu.png)

## 插件架构带来的惊喜

在高安全需求下，NocoBase 的**插件架构成为部署与协作的关键突破口**。

Second-Brain 将多个核心能力抽象为插件——在每次系统更新时，只需将插件作为单元传入，既能通过审批，也显著减少扫描时间与测试成本。这种方式尤其适用于对更新流程严格把控的金融客户。

除了部署层面的优势，**插件架构也极大提升了开发效率**。

团队开发第一个插件时花费了约两周时间，用于摸索与建立模板结构；此后，所有插件均可在此基础上快速复制、修改完成。

目前他们已累计开发近 20 个插件，覆盖了图谱展示、权限管理、数据清洗等多个模块，为后续交付积累了可复用的能力资产。

## 来自一线的实践反馈

Second-Brain 在项目交付过程中，也对 NocoBase 提出了不少来自一线的实践反馈。

**一是稳定性。**

在持续迭代的过程中，NocoBase 的版本升级始终保持了良好的兼容性，团队**从未遇到因升级导致系统不可用的情况**。这一点对于服务金融客户而言，至关重要。

> “NocoBase 升级版本中的一致性和持续性做的挺好。截止到目前还没有遇到过跨版本升级系统崩溃的情况，其实这个问题还挺常见的，但是在 NocoBase 上还没有出现过。”
>
> —— Second-Brain 技术负责人 Zhengxing Yang

**二是协作体验。**

Second-Brain 与 NocoBase 技术团队在整个交付周期中保持了高效沟通。从 Bug 修复到功能建议，响应始终及时。这种“开源但不孤立”的协作方式，为高强度、高敏感度的项目环境提供了宝贵的支撑。

项目交付结束，但系统和方法的影响仍在持续。

## 结语

Second-Brain 以最小人力，完成了结构复杂、部署严格的 AI 系统交付。NocoBase 承担了底层系统建设的工作，让团队能够将时间、人力与创造力，投入到更具价值的 AI 能力构建上。

这也是 NocoBase 始终坚持的目标：**帮助更多公司从重复繁重的系统开发中解放出来，把精力放在真正具有创意与业务价值的场景里，实现更大的价值。**

在复杂、高安全性需求的行业里，这个案例或许证明了：真正灵活的无代码 / 低代码平台，正在重塑系统交付的边界。

**相关阅读：**

* [全球第一 AI 录音笔品牌，如何搭建运营与客服系统？](https://www.nocobase.com/cn/blog/plaud)
* [从表格到系统：Classmethod 用 NocoBase 构建全球员工信息管理系统](https://www.nocobase.com/cn/blog/classmethod)
* [一家家具厂，如何用零代码搭建自己的 ERP ？](https://www.nocobase.com/cn/blog/olmon)
* [奥雅的数字化新版图：用 NocoBase 探索精细化管理新可能](https://www.nocobase.com/cn/blog/l-a)
* [如何用开源工具，把“定制动漫面具”做成柔性制造？](https://www.nocobase.com/cn/blog/kigland)
* [超 400 人团队律所，如何用 NocoBase 高效管理律师提成？](https://www.nocobase.com/cn/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)

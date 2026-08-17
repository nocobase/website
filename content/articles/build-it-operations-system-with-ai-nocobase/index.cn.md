## 引言

最近 Reddit 的 [r/sysadmin](https://www.reddit.com/r/sysadmin/comments/1ros5qd/im_honestly_starting_to_forget_how_it_was_before/) 里有个帖子，一位用户说自己用 AI 做 ITSM，一个周末就把工单和资产管理都搭出来了，而且实际用下来，比不少自己过去用过的产品还顺手。

![Reddit1-wme36d.png](https://static-docs.nocobase.com/Reddit1-wme36d.png)

评论区也有不同的看法：AI 确实可以很快生成一个看起来成熟的 Help Desk，但这并不意味着它已经具备用于生产环境的数据结构、权限、安全和扩展能力。

![Reddit2-zb0k6t.png](https://static-docs.nocobase.com/Reddit2-zb0k6t.png)

我们在之前的文章《[企业 IT 资产管理系统搭建指南：从需求梳理到落地](https://www.nocobase.com/cn/blog/enterprise-it-asset-management-system-guide)》分享过 IT 资产管理系统的设计思路。由 AI 理解和拆解业务需求，NocoBase 承载数据、权限和自动化等系统能力，再由人结合真实业务逐项检查和调整。**这样既能发挥 AI 在需求理解和系统生成上的效率优势，也能通过 NocoBase 补足企业应用真正需要的数据、权限、安全和流程等底层能力。**

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

这一次我们会在这个思路上更深入一点，也更偏高效率一些。用 AI 和 NocoBase 在两小时左右，从零搭建出一套更完整的 IT 运维系统，覆盖 IT 资产台账、设备领用与归还、服务目录与服务请求、设备审批与交付、维修管理、软件许可证管理、AI 运维助手、运维知识库和数据看板等核心能力，并进一步完善权限、流程和数据联动，让系统可以投入生产环境，并随着业务需求持续迭代。

🚀 在线体验 NocoBase + AI 搭建的应用，查看 AI 搭建的真实效果：[https://demo.nocobase.com/new](https://demo.nocobase.com/new)

本文截图均源于 NocoBase 在线 Demo，整套系统从设计到实现，都由 AI Coding Agent 完成。

## 1. 从核心业务开始设计系统

你是一家中型公司的 IT 管理员。公司既有办公室员工，也有远程员工，需要管理电脑、显示器、手机、打印机、服务器、网络设备和其他办公外设。

![Reddit2-y79mbx.png](https://static-docs.nocobase.com/Reddit2-y79mbx.png)

员工平时会申请新电脑、显示器、软件许可证、VPN 或远程访问，也会遇到密码、MFA、设备故障等问题。这些需求最终可能涉及资产管理、服务请求、审批、维修、软件许可证、知识库、权限和 Dashboard。

但第一次搭建时，不需要把所有场景一次性放进系统。我们先从一条最常见的业务流程开始：

> 员工申请一台电脑 → 负责人审批 → IT 选择设备并完成交付

### 让 AI 先理解需求

确定业务场景和第一阶段范围后，可以先把需求交给 AI，让它理解公司的 IT 工作，并围绕电脑申请和交付设计第一阶段系统。

可以使用下面这段 Prompt：

```Plain
请帮助我在 NocoBase 中搭建一套企业内部 IT 运维系统。

公司有办公室员工和远程员工，需要管理电脑、显示器、手机、打印机、
服务器、网络设备和其他办公外设。

员工常见的 IT 需求包括新电脑申请、显示器或外设申请、软件许可证申请、
VPN / 远程访问、密码或 MFA 问题，以及会议室设备支持。

设备会经历登记、库存中、可分配、分配给员工、使用、维修、归还、
再次分配或退役。员工申请可能需要负责人审批，再由 IT 完成交付。

第一阶段只搭建：
- 员工；
- 资产台账；
- 设备领用与归还记录；
- 服务目录；
- 服务请求；
- 电脑申请和交付流程。

维修、软件许可证、运维手册、提醒和运营统计以后再加入。
这一阶段只保留扩展空间，暂时不要创建。

普通员工可以提交并查看自己的请求；负责人处理需要审批的请求；
IT 管理员维护资产并完成设备交付。

请先返回：
1. 第一阶段需要哪些核心数据；
2. 数据之间如何关联；
3. 一次电脑申请如何完成交付；
4. 准备创建哪些页面和 Workflow；
5. 还有哪些业务规则需要确认。

先不要创建，等我确认后再开始搭建。
```

### 检查 AI 对业务规则的理解

在 AI 开始创建系统之前，先确认它是否正确理解了下面五个关键的业务规则：

1. 一个员工可以关联多台设备；
2. 一台设备有明确的当前使用人；
3. 资产当前状态和历史领用记录分开保存；
4. 服务请求获批后，还需要完成实际设备交付；
5. 设备交付后，会同步更新资产信息和领用记录。

其中最容易遗漏的是：

> 服务请求获批，不等于设备已经交付。

对于新电脑申请，批准只表示申请已经通过。之后仍然需要由 IT 选择实际设备、完成分配、更新资产状态，并保存本次领用记录。

如果 AI 把“请求已批准”设计成流程终点，应在创建前要求它补充 IT 处理和设备交付步骤。

如何与 AI Agent 更好的协作搭建，可以参考文档：[https://docs.nocobase.com/cn/ai-builder/ai-portal/agent-workflow](https://docs.nocobase.com/cn/ai-builder/ai-portal/agent-workflow)

## 2. 完成核心流程的搭建与检查

确认前面的业务规则后，就可以让 AI 按照刚才的方案开始创建第一阶段系统。等待系统生成后，从员工申请电脑这条流程开始，逐步确认资产、领用记录、服务请求和设备交付之间是否能够正常衔接。

### 检查资产台账

员工准备申请电脑时，IT 首先要知道公司有哪些设备，以及哪些设备当前可以交付。因此，**先从资产台账开始检查。**

资产台账至少记录**资产编号、序列号、设备类别、设备名称、型号、所在位置、当前使用人、保修到期时间和当前状态**。

![Assets1-xhzxsv.png](https://static-docs.nocobase.com/Assets1-xhzxsv.png)

![Assets2-pbnp9u.png](https://static-docs.nocobase.com/Assets2-pbnp9u.png)

资产状态可以按下面的流程进行检查：

> 库存中 → 可分配 → 已分配 → 使用中 → 维修中 / 已退役

其中，“已分配”表示 IT 已经选定并分配设备，但员工尚未正式开始使用；完成交付后，再将状态更新为“使用中”。

![Asset3-5jxmu9.gif](https://static-docs.nocobase.com/Asset3-5jxmu9.gif)

资产台账主要回答三个问题：**这是什么设备、现在由谁在哪里使用、当前还能不能继续分配。**

这里需要重点确认：

1. 资产编号需要保持唯一，避免重复登记；
2. 维修中和已退役的设备不能进入可分配列表；
3. 已分配或使用中的设备必须有明确的当前使用人，避免同一台设备被重复分配。

同时检查员工和设备之间的关系。一名员工可以同时使用电脑、显示器、手机等多台设备，而一台设备在同一时间只应该有一个当前使用人。打开员工详情时，应能直接看到分配给他的全部设备。

![Assets4-l8s8bg.png](https://static-docs.nocobase.com/Assets4-l8s8bg.png)

第一阶段系统生成后，先录入三台测试设备：一台“可分配”、一台“使用中”、一台“维修中”。然后筛选“可分配”设备，结果中应该只出现第一台，用来确认状态和筛选规则是否生效。

### 记录每次设备领用和归还

资产台账只记录设备当前由谁使用，过去的领用和归还情况需要单独保存。因此，**系统还需要单独保存“设备领用与归还记录”，分别关联设备和员工**。

每条记录至少需要保存以下信息：设备、领用员工、领用时间、归还时间、归还情况、经办人以及备注。

![returned1-qazyjm.gif](https://static-docs.nocobase.com/returned1-qazyjm.gif)

这里要区分两种不同的数据用途：资产台账用于记录设备当前的使用状态，而领用与归还记录则用于保存设备每一次流转的历史信息。

接下来，可以模拟一次完整的设备流转：

> 分配给员工 A → 员工 A 归还 → 再次分配给员工 B

![returned2-bwa0li.gif](https://static-docs.nocobase.com/returned2-bwa0li.gif)

完成后检查：

* 资产详情中的当前使用人应更新为员工 B；
* 员工 A 的第一次领用和归还记录仍然保留；
* 员工 A 的当前设备列表中不再显示这台设备，而员工 B 的当前设备列表中可以看到它。

![returned3-mbvdxp.png](https://static-docs.nocobase.com/returned3-mbvdxp.png)

![returned4-nyxmt3.png](https://static-docs.nocobase.com/returned4-nyxmt3.png)

## 3. 在核心流程上继续扩展运维能力

电脑申请和交付流程都跑通之后，系统已经有了资产、服务请求、审批和设备流转等基础数据。接下来，可以把设备维修、软件许可证、AI 辅助和运维手册等后续需求继续交给 AI，让它直接在现有系统上补充修改。完成后，再分别用实际业务检查这些新增能力是否能够正常使用。

> **NocoBase AI 搭建**，让 AI 根据自然语言需求设计、搭建和继续调整企业应用：[https://docs.nocobase.com/cn/ai-builder](https://docs.nocobase.com/cn/ai-builder)

### 设备坏了——加入维修管理

电脑交付后可能出现故障。维修管理加入系统后，IT 可以为原设备创建维修记录，保存故障描述、送修时间、维修供应商、维修费用、维修状态和处理结果。

![Maintenance management1-ctwwsd.png](https://static-docs.nocobase.com/Maintenance%20management1-ctwwsd.png)

设备进入维修后，资产状态也要同步变化：

> 使用中 → 维修中 → 使用中 / 可分配 / 已退役

如果修好后继续交给原员工，资产恢复为“使用中”；如果修好后回到库存，则改为“可分配”；如果设备无法继续使用，则进入“已退役”。

创建一条测试维修记录后，先检查关联资产是否同步进入“维修中”，并确认这台设备已经退出可分配列表，避免维修中的设备再次被分配。

![Maintenance management2-sbyqjh.gif](https://static-docs.nocobase.com/Maintenance%20management2-sbyqjh.gif)

维修完成后，再分别测试“交还原员工”“回到库存”和“设备退役”三种结果，确认资产状态与维修结果保持一致。

### 软件申请多了——管理软件许可证

随着企业使用的软件种类和数量不断增加，IT 需要掌握每项软件购买了多少席位、已经使用多少、何时续费，以及每年的费用。**因此，系统中还需要补充软件许可证管理。**

![Software licenses1-91l5of.gif](https://static-docs.nocobase.com/Software%20licenses1-91l5of.gif)

每项软件记录供应商、总席位、已使用席位、续费日期、年度费用和当前状态。处理软件申请时，先检查是否还有剩余席位，完成开通后再更新已使用数量。

![Software licenses2-zquzcd.gif](https://static-docs.nocobase.com/Software%20licenses2-zquzcd.gif)

**这些规则也可以继续交给 AI，通过 NocoBase Workflow 自动执行**。例如，在许可证即将到期时自动通知负责人并生成续费任务；当已使用席位超过总席位时，自动触发超额预警，并交由 AI 辅助判断是否需要扩容或回收账号。

![Software licenses3-3ngkzc.png](https://static-docs.nocobase.com/Software%20licenses3-3ngkzc.png)

### 员工说不清问题——让 AI 帮忙整理请求

员工不一定知道应该选择哪个服务，也很难按照 IT 的处理习惯描述问题。例如：

> 重置密码后我无法连接VPN，需要在今天的客户通话前获取访问权限。

![AI1-hfhx6x.png](https://static-docs.nocobase.com/AI1-hfhx6x.png)

员工可以直接用自然语言描述问题，再由 AI 整理成请求标题、服务类型、优先级和问题描述。员工确认或修改后，再正式提交请求。

![AI2-y5vyfx.png](https://static-docs.nocobase.com/AI2-y5vyfx.png)

可以直接用上面的问题测试一次，确认 AI 整理后的服务类型、优先级和问题描述可以继续修改并正常提交。这样，员工可以按照自己的习惯描述问题，而 IT 收到的仍是一条可以分类和处理的结构化请求。

### 同类问题反复出现——沉淀运维手册

VPN、MFA、新电脑初始化和打印机故障等问题会反复出现。可以把已经验证过的处理方法整理成运维手册，记录用途、前置检查、操作步骤、验证方式和异常处理。

![Operation Manual-bcp9qo.gif](https://static-docs.nocobase.com/Operation%20Manual-bcp9qo.gif)

随着手册逐步积累，还可以让 AI 根据请求内容帮助 IT 查找相关处理流程。

## 4. 用完整流程验证系统

### 检查是否正确联动

运行到这里，系统已经产生了资产、服务请求、领用、维修和软件许可证等数据。**运营看板可以汇总**可分配设备、使用中设备、待处理请求、维修中设备、许可证使用情况、即将到期的许可证和软件费用。

![Data dashboard-y7igov.gif](https://static-docs.nocobase.com/Data%20dashboard-y7igov.gif)

看板中的数据直接来自前面的资产、服务请求、维修和许可证记录。

修改一台设备的状态、完成一条服务请求或新增一条维修记录后，检查对应的统计数据是否同步变化。点击统计结果时，也应能查看相关明细。

### 从申请到归还完整验证流程

最后，回到前面用于测试的员工，把完整流程再走完一次：

> 申请电脑 → AI 辅助填写 → 负责人审批 → IT 选择设备 → 创建设备领用记录 → 员工开始使用 → 维修 / 归还 → 资产状态更新 → 运营看板同步

![Data dashboard-5c3w3l.gif](https://static-docs.nocobase.com/Data%20dashboard-5c3w3l.gif)

流程走完后，重点确认：

1. 当前使用人和资产状态是否准确；
2. 领用、归还和维修历史是否完整保留；
3. 服务请求是否能够追溯实际交付的设备；
4. 员工、负责人和 IT 的查看及操作权限是否符合设定；
5. 状态更新、提醒等自动化是否正常执行；
6. AI 整理后的请求是否可以修改并正常提交。
7. 运营看板中的相关数据是否随业务状态同步变化；

确认这些数据和流程都符合前面设定的业务规则后，就可以先交给小范围用户试用，再根据实际使用反馈调整页面和流程。

## 结语

如果你已经有一个明确的业务场景，可以先从最熟悉的一条流程开始，把实际需求、团队分工和处理方式直接告诉 AI，再让 NocoBase 承载数据、权限等企业级应用需要的基础设施，一边搭建，一边检查和调整。先让核心业务真正运转起来，再根据实际使用逐步扩展。

如果这篇文章对你有帮助，也欢迎分享给正在尝试用 AI 搭建企业内部系统的朋友。

**相关阅读**：

* **[NocoBase vs Baserow：灵活数据库与企业级系统 ](https://www.nocobase.com/cn/blog/nocobase-vs-baserow)**
* **[如何用 AI 和 NocoBase 搭建一套可投入生产的 CRM](https://www.nocobase.com/cn/blog/build-production-ready-crm-with-ai-and-nocobase)**
* **[企业 IT 资产管理系统搭建指南：从需求梳理到落地](https://www.nocobase.com/cn/blog/enterprise-it-asset-management-system-guide)**
* **[7 款 Smartsheet 替代品：适合项目管理与业务流程的工具](https://www.nocobase.com/cn/blog/best-smartsheet-alternatives)**
* **[5 个适合复杂关系模型的开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-complex-relational-models)**
* **[什么是 AI 无代码？AI 时代无代码平台的实用指南](https://www.nocobase.com/cn/blog/what-is-ai-no-code)**
* **[GitHub 上值得关注的 9 个开源 AI 无代码工具](https://www.nocobase.com/cn/blog/open-source-ai-no-code-tools-github-9)**
* **[GitHub 上值得关注的 14 个开源 AI Agent 工具](https://www.nocobase.com/cn/blog/github-open-source-ai-agent-tools-16)**
* **[GitHub 上 Stars 最多的 8 个开源 AI Assistant 工具](https://www.nocobase.com/cn/blog/top-open-source-ai-assistant-tools-github-stars)**
* **[6 个适合搭配 WorkBuddy 使用的开源工具](https://www.nocobase.com/cn/blog/workbuddy-open-source-tools)**
* **[GitHub 上 Stars 最多的 6 个开源 AI 工具：让 AI Agent 更强大](https://www.nocobase.com/cn/blog/6-github-top-open-source-ai-tools-for-ai-agents)**
* **[用 Hermes 提升内部工具效率：5 个开源项目推荐](https://www.nocobase.com/cn/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)**
* **[OpenClaw 如何用于真实业务？推荐 5 个开源工具](https://www.nocobase.com/cn/blog/openclaw-open-source-enterprise-tools)**

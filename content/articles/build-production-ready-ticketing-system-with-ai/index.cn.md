## TL;DR

AI 可以快速搭出工单系统，但“功能已经生成”不等于“可以投入生产”。

一套能够被团队实际使用的系统，至少需要具备清晰的数据关系、可检查的角色权限和能够追踪执行结果的工作流。本文将通过一个 NocoBase 工单系统案例，展示 AI 如何把自然语言需求转化成应用，并验证这些关键业务基础。

## 如何用 AI 搭建生产级工单系统？

**用 AI 搭一个工单系统好像并不难。但是它真的能投入生产使用吗？**

在 [Reddit](https://www.reddit.com/r/nocode/comments/1uysnen/building_internal_tools_without_engineering_and/) 的 r/nocode 社区里，有位用户分享了自己的困境：他们团队尝试了几款 AI + 无代码工具。搭建出来的应用看起来都不错，可一旦放入真实业务数据，问题便接连出现，甚至很难判断究竟错在哪里。

![reddit1-ygpeth.png](https://static-docs.nocobase.com/reddit1-ygpeth.png)

评论区的一条回复点出了关键：许多 AI 搭建的系统进入复杂业务场景后容易失效，一个重要原因是它们没有**维护应用的完整内部模型，包括谁在使用系统、不同角色的权限、工作如何流转，以及用户最终要完成什么。**

![reddit2-b67anb.png](https://static-docs.nocobase.com/reddit2-b67anb.png)

AI 可以快速生成页面和功能，但要让应用长期稳定运行，底层平台还需要提供清晰的数据模型、关系、权限和工作流能力。否则，随着业务复杂度上升，AI 生成的功能很难继续运行。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

这篇文章我将以工单系统为例，演示如何使用 AI 与 NocoBase 搭建一套具备生产基础的工单系统。

在这个过程中，NocoBase 负责提供数据关系、权限控制和工作流等底层能力；AI 则负责理解业务需求，将自然语言转换成数据结构、页面和功能，并根据后续要求持续调整。

## 第一步：描述业务需求，让 AI 设计系统

在开始搭建之前，我们可以先从实际工作出发，把目前遇到的问题和希望系统解决的事情梳理清楚，再把这些需求用自然语言告诉 AI，让它基于 NocoBase 搭出我们需要的工单系统。

如果暂时不知道该怎么描述，可以先从下面几个角度来整理，以工单系统为例：

* **客户的问题怎么进来**：通常来自哪些渠道，现在是怎么收集和处理的；
* **一个问题进来后怎么处理**：谁来接手、怎么跟进、什么时候算处理完成；
* **什么情况需要特别关注**：比如问题很紧急、长时间没人处理，或者已经拖了很久；

把这些信息梳理清楚后，就可以直接整理成一段自然语言交给 AI。下面是这次我们实际使用的需求描述，也可以作为参考：

> 我们是一家小型软件公司，有 4 名客服。客户平时主要通过邮件和网站上的客服入口反馈问题。
>
> 现在我们用共享邮箱处理这些问题，但问题多起来以后经常会出现遗漏：有时大家都以为别人已经回复了，结果一直没人处理；有的问题来回沟通了几次，也不清楚现在是谁负责；比较紧急的问题有时也会拖很久。
>
> 我希望搭一套客服问题处理系统。客户的问题进来后，可以单独记录，并分配给具体客服；客服可以持续更新处理进度，直到问题解决。对于比较紧急、长时间没人处理或者快要超时的问题，希望系统能够提醒团队及时关注。
>
> 另外，我们还希望有一个总览页面，可以快速看到目前还有多少问题没处理、哪些问题需要优先关注，以及最近解决了多少问题。
>
> 请根据这些实际工作需求，帮我设计并搭建这套系统。

AI 首先将需求拆解成数据结构，在 NocoBase 中创建工单、客户、客服人员、沟通记录和 SLA 规则等数据表，并设置它们之间的关联关系。

在数据模型之上，AI 继续搭建页面。

最终，AI 创建了工单列表、详情页和客服工作台，覆盖工单记录、分配、跟进和总览等基本场景。

![Tickets cn-z1waj5.png](https://static-docs.nocobase.com/Tickets%20cn-z1waj5.png)

![Tickets en-v1b1s0.png](https://static-docs.nocobase.com/Tickets%20en-v1b1s0.png)

![Customer satisfaction cn-k3ztnb.png](https://static-docs.nocobase.com/Customer%20satisfaction%20cn-k3ztnb.png)

![Customer satisfaction cn-4oi068.png](https://static-docs.nocobase.com/Customer%20satisfaction%20cn-4oi068.png)

![SLA & escalations cn-akolqx.png](https://static-docs.nocobase.com/SLA%20%26%20escalations%20cn-akolqx.png)

![SLA & escalations en-0640vb.png](https://static-docs.nocobase.com/SLA%20%26%20escalations%20en-0640vb.png)

至此，我们已经从一段业务描述得到了一套可以运行的工单系统。不过，“功能已经搭出来”和“系统可以投入生产”并不是一回事。

当团队开始共同使用时，还需要继续确认三个问题：**数据之间的关系是否准确，不同成员能否按照权限协作，以及分配、提醒和超时升级等业务规则能否可靠执行。**

## 第二步：解决三个生产使用的核心问题

前面那条 Reddit 评论提到，许多 AI 应用之所以在加入真实数据后开始出错，是因为它们没有形成一套完整的应用内部模型：谁在使用系统、不同成员扮演什么角色、数据之间如何关联、工作要按照什么规则流转。

![reddit3-09lu3o.png](https://static-docs.nocobase.com/reddit3-09lu3o.png)

工单系统已经有了数据表和页面，但当 4 名客服开始共同处理真实问题时，我们还需要继续验证三个核心问题。

### 1. 数据之间的关系是否准确

工单并不是一条孤立的数据。

每张工单都需要关联提出问题的客户、当前负责人、历史沟通记录和适用的 SLA 规则。工单状态变化后，工作台上的统计和待办信息也需要随之更新。

![数据之间的关系1 cn-pwazu5.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB1%20cn-pwazu5.png)

![数据之间的关系1 en-pax4na.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB1%20en-pax4na.png)

如果这些关系没有建立清楚，系统即使看起来功能齐全，实际使用时仍然可能出现问题：更换负责人后找不到之前的处理记录，工单匹配了错误的响应时限，或者总览页面中的数字与实际情况不一致。

在 NocoBase 中，这些关系不是由 AI 临时写进某个页面的逻辑，而是直接定义在数据模型中。以工单表为例，SLA 策略、受理队列、工单类型和提交人被设置为多对一关系；一张工单可以关联多条满意度反馈，也可以关联多个附件、关注人和其他工单。父工单与子工单之间的关系，同样在字段配置中被明确记录。

![数据之间的关系2 cn-m7oxqg.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB2%20cn-m7oxqg.png)

![数据之间的关系2 en-cknbzn.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB2%20en-cknbzn.png)

这些关系会作为 NocoBase 数据模型的一部分，被页面、权限、工作流和统计功能共同使用。用户可以直接在数据源界面中查看每个字段的类型及其关联方式，也可以在业务发生变化时继续调整。

这与从代码开始的 Vibe Coding 方式有所不同。在一个直接生成代码的应用中，数据关系往往需要同时落实到数据库结构、后端模型、接口和页面查询中。关系一旦设计不完整，或者后续只修改了其中一处，就可能产生数据不一致的问题；人工检查时，也需要进入代码和数据库结构才能确认实际实现。

![数据之间的关系2 en-s77c95.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB2%20en-s77c95.png)

![数据之间的关系3 en-fhk0oy.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB3%20en-fhk0oy.png)

NocoBase 已经提供了现成的数据建模能力。AI 只需把业务需求转换成数据表、字段和关联关系，不需要从头编写整套数据层；搭建完成后，人工也可以在同一个界面中直接检查和修改。

### 2. 不同角色能否按照规则协作

当系统只有一个人使用时，权限通常不是问题。一旦整个团队开始协作，就需要明确谁能看到什么、谁能修改什么。

在这个工单系统中，AI 可以直接在 NocoBase 中配置相应的角色和数据权限。

![数据之间的关系3 en-66fjq9.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB3%20en-66fjq9.png)

![规则协作1 en-mi39un.png](https://static-docs.nocobase.com/%E8%A7%84%E5%88%99%E5%8D%8F%E4%BD%9C1%20en-mi39un.png)

这也是使用 NocoBase 搭建与 Vibe Coding 方式的一个重要区别。在一个 AI 生成的应用中，权限规则往往需要分别落实到页面、接口和数据查询中。随着角色和规则增加，配置会变得复杂；人工检查时，也常常需要回到代码或实际运行结果中，才能确认权限是否正确生效。

NocoBase 已经提供了现成的权限管理能力。AI 不需要重新编写一套权限系统，只需根据业务要求，直接配置不同角色能够查看和操作的数据。配置结果也会清晰地呈现在管理界面中，用户可以直接检查每个角色的权限范围，并通过切换身份进一步验证。

![规则协作1 en-y32gir.png](https://static-docs.nocobase.com/%E8%A7%84%E5%88%99%E5%8D%8F%E4%BD%9C1%20en-y32gir.png)

![规则协作2 en-qqc7b4.png](https://static-docs.nocobase.com/%E8%A7%84%E5%88%99%E5%8D%8F%E4%BD%9C2%20en-qqc7b4.png)

### 3. 业务规则能否可靠执行

工单系统中的许多规则，需要由系统持续监测并自动触发。

在工作流管理界面中，每条规则的触发方式、执行模式、启用状态和历史执行次数都可以直接查看。用户不需要进入代码，就能确认哪些规则已经启用、由什么条件触发，以及它们是否真正运行过。

![可靠执行1 cn-r98mzg.png](https://static-docs.nocobase.com/%E5%8F%AF%E9%9D%A0%E6%89%A7%E8%A1%8C1%20cn-r98mzg.png)

![可靠执行1 en-ql1blo.png](https://static-docs.nocobase.com/%E5%8F%AF%E9%9D%A0%E6%89%A7%E8%A1%8C1%20en-ql1blo.png)

执行结果也可以继续向下检查。以“逾期紧急工单升级”为例，系统会遍历符合条件的工单，处理截止时间，并执行通知节点。截图中的一次执行记录显示，向当前负责人的升级通知已经完成，节点返回状态为完成。

![可靠执行1 en-99uaj8.png](https://static-docs.nocobase.com/%E5%8F%AF%E9%9D%A0%E6%89%A7%E8%A1%8C1%20en-99uaj8.png)

![可靠执行2 en-1qjkl8.png](https://static-docs.nocobase.com/%E5%8F%AF%E9%9D%A0%E6%89%A7%E8%A1%8C2%20en-1qjkl8.png)

这使业务规则也不再是隐藏在代码中的一段逻辑。AI 可以直接使用 NocoBase 已有的工作流能力完成配置；人工也可以在界面中查看流程结构、运行状态和具体执行记录，对规则进行检查和验证。

这正是一个内部应用投入实际使用时需要具备的能力：不仅要定义业务流程，还要知道流程是否被触发、执行到了哪一步，以及最终是否成功。

## 第三步：把 AI 能力加入系统

使用 NocoBase 搭建系统的另一个优势是，AI 不只在搭建阶段发挥作用。基础系统搭好后，还可以通过 AI 员工和工作流，让 AI 直接参与工单处理。

在当前的工单系统中，我们让 AI 参与了两个具体环节。

第一个环节是新建工单。

客服不需要一开始就逐个填写工单字段，只需用自然语言描述客户遇到的问题。AI 智能填单会先将这段描述整理为工单标题和问题描述；基本信息填写完成后，还可以继续使用 AI 智能分诊，让 AI 检查并建议问题分类和优先级。

![可靠执行2 en-gzufy5.png](https://static-docs.nocobase.com/%E5%8F%AF%E9%9D%A0%E6%89%A7%E8%A1%8C2%20en-gzufy5.png)

![AI 能力1 en-zu7ek6.png](https://static-docs.nocobase.com/AI%20%E8%83%BD%E5%8A%9B1%20en-zu7ek6.png)

AI 在这里负责把客户的自然语言描述转换成结构化信息，但不会绕过表单直接提交。客服仍然可以检查和修改生成的内容，确认无误后再创建工单。

第二个环节在客服处理工单时。

在工单详情页中，客服可以让 AI 根据当前工单起草下一条客户回复。AI 会读取工单中的客户问题、处理进展和沟通记录，并参考系统匹配到的帮助文章，整理工单情况和回复策略，再生成一份回复草稿。

![AI 能力2 cn-y2m4zv.gif](https://static-docs.nocobase.com/AI%20%E8%83%BD%E5%8A%9B2%20cn-y2m4zv.gif)

![AI 能力2 en-rh0v12.gif](https://static-docs.nocobase.com/AI%20%E8%83%BD%E5%8A%9B2%20en-rh0v12.gif)

更重要的是，AI 并不是脱离系统权限独立运行。NocoBase 可以按角色控制哪些用户能够使用哪些 AI 员工；当 AI 员工调用系统内置的数据查询工具时，系统会应用当前用户的数据权限，只向 AI 返回该用户有权查看的数据。

相关文档：[AI 员工角色与权限 - NocoBase 文档](https://docs.nocobase.com/cn/ai-employees/permission)

![AI 能力3 cn-osutgd.png](https://static-docs.nocobase.com/AI%20%E8%83%BD%E5%8A%9B3%20cn-osutgd.png)

![AI 能力3en-0z3kdr.png](https://static-docs.nocobase.com/AI%20%E8%83%BD%E5%8A%9B3en-0z3kdr.png)

这意味着，普通客服使用 AI 时，AI 不会因为自身能力而自动获得主管才能查看的数据。AI 能访问什么，仍然受到业务系统原有权限边界的约束。

这也是 NocoBase AI 能力与在应用外部临时调用一个大模型的区别：AI 不只是一个附加的聊天入口，而是运行在现有的数据、权限和工作流体系中。它可以参与业务，但不会因此绕过系统原有的管理规则。

## 结语

**回到文章开头的问题：AI 搭出来的工单系统，真的能投入生产使用吗？**

这取决于搭建出的系统背后是否有一套清晰、可检查的业务结构。

在这个案例中，我们先把业务问题和需求告诉 AI。AI 再利用 NocoBase 已有的数据模型、权限和工作流能力，将这些需求转化成一套可以运行的工单系统。

这也是 AI 与 NocoBase 结合的价值：AI 负责理解需求并提高搭建效率，NocoBase 负责提供可管理、可检查的系统基础，而最终的业务规则和上线结果仍然由人来确认。

如果你也有一套依赖表格、共享邮箱或人工提醒维持的内部流程，不妨先从四个问题开始：

* 谁会使用这套系统？
* 系统需要记录哪些业务信息？
* 不同角色可以查看和操作什么？
* 哪些规则需要由系统自动执行？

把这些问题描述清楚，就是让 AI 开始搭建业务系统的第一步。

如果你也想尝试这种方式，可以先让 Coding Agent 接入 NocoBase AI Builder，再直接用自然语言描述自己的业务。

初始化时，可以先给 AI 这段指令：

```Plain
帮我安装 NocoBase CLI 并完成初始化：
https://docs.nocobase.com/cn/ai/ai-quick-start.md
（请直接访问链接内容）
```

完成初始化后，就可以继续提交具体的业务需求，让 AI 基于 NocoBase 已有的数据模型、权限、工作流等能力进行搭建，并在同一套应用中持续修改。

* **体验 NocoBase + AI Demo：** [申请在线 Demo](https://www.nocobase.com/)
* **开始自己搭建：** [查看 AI Builder 文档](https://docs.nocobase.com/cn/ai-builder)

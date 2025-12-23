## 引言

你之所以点开这篇文章，大概率已经开始思考一件事：**用 Excel 或在线表格管理业务，确实有点难受。**

我在 Reddit 上也看到[类似的讨论](https://www.reddit.com/r/googlesheets/comments/1p969rt/how_do_you_develop_a_system_based_on_a_large/)：

![Reddit.png](https://static-docs.nocobase.com/4a656d5a-c242-41d2-a3b9-dad3e5f2f2a1-yc665w.png)

这篇文章会用一个真实的 Excel 表作为例子，为你展示如何在 NocoBase 中把它快速地搭建成一个可用的业务系统。

我们先从这张最常见的客户项目表开始：

![Excel.png](https://static-docs.nocobase.com/a04a4520-c0d1-4032-b742-f5ec21a92182-5gfvek.png)

最早，这张表只是想简单记录一下客户和项目的基本信息，后来要因为信息增加，又在后面继续添加列。

结果一段时间下来，慢慢变成了一个复杂的表格。

这也是很多用 Excle 管理业务系统的现状。下面让我们来做一些改变！

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---



## **第一步：数据拆分**

Excel 表里有十几列，什么信息都塞在一起。

在 NocoBase 里，我们做的第一件事就是把这张表“翻译”成更清晰的结构。

先看一下原本 Excel 的列：

```Plain
Project ID 项目编号
Client Name 客户名称
Client Region 客户地区
Industry 行业
Project Name 项目名称
Contract Type 合同类型
License Seats 账号数量
Start Date 项目开始日期
Target Go Live 计划上线日期
Status 当前状态
Latest Invoice Amount (USD) 最新一张发票金额
Latest Invoice Date 最新一张发票日期
Payment Status 回款状态
Owner 负责人
Notes 备注
```

这在 Excel 里很常见，但在系统里，我们希望把信息拆分成结构更清晰的几张表。（你可以让 AI 帮助拆分你的表格数据。）

**拆分后，数据模型就会变成这样**：

```Plain
Clients（客户）
name
region
industry
 → hasMany Projects

Projects（项目）
project_name
start_date
go_live
status
owner
notes
client_id (belongsTo Clients)
 → hasMany Contracts
 → hasMany Invoices

Contracts（合同）
contract_type
license_seats
project_id (belongsTo Projects)

Invoices（发票）
amount
invoice_date
payment_status
project_id (belongsTo Projects)
```

拆分数据带来的好处非常直接：

* **视图更干净：** 客户和项目，不再混在一起，但是又可以随时联动
* **流程更容易做：** 合同流向合同、发票流向发票，不会牵一发动全身
* **权限能精准控制：** 销售只能看客户，财务只能看发票

💡 扩展阅读：[如何创建良好的数据模型？](https://www.nocobase.com/cn/blog/how-to-create-a-good-data-model)

在 NocoBase 中，你可以让 AI 员工 Orin 直接帮你创建好这些表和字段。

只需要将需求发给她。

![Orin.png](https://static-docs.nocobase.com/e3f0627c-51a5-4d97-b603-71e15b4b693e-zfdfg0.png)

她会立刻帮你生成，你只需要确认她创建的表和字段是否正确即可。

![Orin2.png](https://static-docs.nocobase.com/21348d0d-0382-42f8-ac6d-cd5ceb239900-1p3d7q.png)

四张表和字段，都已经顺利创建完成。

![four tables and their fields.png](https://static-docs.nocobase.com/d144b5dd-a594-48b9-8593-d30ceff703ba-ry05j0.png)

💡 深入了解数据部分，欢迎阅读教程与文档：

[数据源 - NocoBase](https://www.nocobase.com/cn/highlights/data-source)

[数据源 - NocoBase 文档](https://v2.docs.nocobase.com/cn/data-sources)

[Orin 数据建模师 - NocoBase 文档](https://v2.docs.nocobase.com/cn/ai-employees/built-in/data-modeling)

## 第二步：展示数据

当数据结构被拆分得更清楚之后，接下来要做的，就是把这些数据以更友好的方式展示出来。

过去在 Excel 里，你只能靠滚动、筛选、冻结列来展示数据。

![Excel2.png](https://static-docs.nocobase.com/03d998ab-aa10-40a4-b19b-a5d8f33d8e27-7v6c29.png)

在 NocoBase 中，前端页面完全不受这种限制。**每类数据都可以有它专属的视图，并以最适合的方式呈现。**

操作也非常简单，点击右上角进入编辑模式，我们先创建出几个页面。每个页面里可以选择放置适合展示数据的区块。

![Displaying the Data.png](https://static-docs.nocobase.com/74569812-9d3a-4be7-a426-18bc1e2d1fd4-apardl.png)

我们先来配置客户表（Clients）。可以用列表方式呈现客户名称、区域、行业。

添加一个表格区块。

![Clients.png](https://static-docs.nocobase.com/af29d457-8063-42e2-b965-3c74fdee2713-4nnpo6.png)

你会发现，现在还没有数据。点击区块右上角的“操作”，添加“导入”。

![Actions.png](https://static-docs.nocobase.com/483344aa-5a15-443d-a2ee-9e578c3b799a-eyf8q4.png)

现在我们可以根据提示，将我们之前在 Excel 里数据导入。

![Import.png](https://static-docs.nocobase.com/3f1f827b-41d0-4a22-92a7-3be812a52994-sy4c95.png)

导入后，我们有了一个简洁的客户表。

![readable client table.png](https://static-docs.nocobase.com/d99c63de-82b3-49c2-b58f-f9e78dbc5fb4-wwlvnu.png)

接下来，我们再依次按照刚才的操作呈现每个表的视图。不同的数据有他最佳的呈现方式。

比如我设置了点击客户名称就显示对应项目的功能。

![related projects.gif](https://static-docs.nocobase.com/%E8%81%94%E5%8A%A8%E6%95%B0%E6%8D%AE-gj1g6e.gif)

这些视图的好处是：

* 信息不再混在一起
* 每个页面只展示当前用户“需要关注的内容”
* 读起来比 Excel 清爽太多
* 任何字段都可以随时排序、过滤、查询
* 表之间的数据也可以互相联动

只要选好数据表，NocoBase 就会自动生成一个干净、可交互的界面，你还可以继续调整列顺序、筛选条件、显示方式等细节。**把 Excel 的数据模型化之后，信息可视化变得非常轻松。**

💡 更多关于数据展示的细节，可以阅读我们的教程与文档：

[区块和操作 - NocoBase](https://www.nocobase.com/cn/highlights/block-action)

[界面搭建 - 文档](https://v2.docs.nocobase.com/cn/interface-builder)

## **第三步：流程自动化**

当数据结构清晰、前端视图已经成型后，我们来 Excel 里的最大难题：流程完全靠人推动。

在 Excel 里，一个最普通的业务流程通常是这样运转的：

* 做好一条记录后，发邮件或发消息给 A 审批
* 再把审批结果填回 Excel
* 如果涉及库存、合同、金额，还要手动同步到另一张表

在 NocoBase 我们可以做到：

* 提交项目或合同后 → 系统**自动进入审批流**
* 审批通过后 → 系统会**自动更新相关数据表**

这些都可以通过 NocoBase 工作流进行设置。

![Workflow.png](https://static-docs.nocobase.com/23611649-9b43-42d3-b950-4afe930b54e3-xi7ax2.png)

💡 关于工作流如何配置，可以阅读我们的教程与文档：

[工作流 - NocoBase](https://www.nocobase.com/cn/highlights/workflow)

[工作流 - NocoBase 文档](https://v2.docs.nocobase.com/cn/workflow)

## **第四步：权限**

Excel 最大的问题是：**无法设置权限。即使是 Google Sheets 权限设置也很单一。**

在 Excel 中，如果你想实现不同部门只能看到自己的项目，那么你就要同时维护多个表格。

但是在 NocoBase 里，这件事变得非常简单。

你可以为每个角色设置：

* **能看到哪些数据**（行级权限）
* **能看到哪些字段**（字段级权限）
* **能做哪些操作**：查看 / 新建 / 编辑 / 删除
* **能不能操作流程中的某个环节**
* **是否允许导出数据**

![Permissions.png](https://static-docs.nocobase.com/b9e40dcd-752c-457f-8aae-dc2b6972d5be-9ycwmu.png)

举个例子，你可以配置：

* 销售只能看到自己的客户和项目
* 财务可以看所有项目的金额、发票，但不能编辑项目内容

**每个人打开系统看到的，都是他们该看到的内容。** 没有多余信息，也不会误操作别人正在处理的部分。

💡  关于权限如何配置，可以阅读我们的教程与文档：

[权限控制 - NocoBase](https://www.nocobase.com/cn/highlights/permissions)

[用户与权限 - NocoBase 文档](https://v2.docs.nocobase.com/cn/users-permissions/user)

## **总结**

把 Excel 升级成一个真正能协作、能自动化、能持续扩展的业务系统，听上去像一件“大工程”。

但看到这里，你大概已经发现：

* 数据结构其实并不难整理，AI 可以帮你拆分，并在 NocoBase 中由 AI 员工协助创建
* 前端视图是可视化配置，不需要写代码也可以实现各种交互
* 流程自动化能帮你省下大量手动更新的时间
* 权限管理让系统变得更安全、更可靠

**只需要几个小时，你就能在 NocoBase 快速搭建一个属于你的业务系统。**

欢迎在 NocoBase 的 demo 中体验文章中提到的所有功能：[https://nocobase.com/en/demo](https://nocobase.com/en/demo)

**相关阅读：**

* [GitHub Star 数量前 5 的开源 AI 内部工具](https://www.nocobase.com/cn/blog/top-5-open-source-ai-internal-tools-on-github)
* [8 个最佳 Google Sheets 替代方案（附成本与能力分析）](https://www.nocobase.com/cn/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6个适合做 PoC 的开源无代码/低代码工具推荐](https://www.nocobase.com/cn/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [给开发者的无代码/低代码技术决策指南（2026）](https://www.nocobase.com/cn/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [6 大企业级无代码低代码平台 RBAC 权限体系深度对比](https://www.nocobase.com/cn/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [GitHub 上最值得关注的 14 个开源 AI 低代码工具](https://www.nocobase.com/cn/blog/14-ai-low-code-platforms-github)
* [11 个在 GitHub 上最受欢迎的开源无代码 AI 工具](https://www.nocobase.com/cn/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub 上 Star 数量前 18 的开源 AI Agent 项目](https://www.nocobase.com/cn/blog/github-open-source-ai-agent-projects)

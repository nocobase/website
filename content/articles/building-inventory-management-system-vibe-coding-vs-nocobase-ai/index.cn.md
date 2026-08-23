在 [Reddit](https://www.reddit.com/r/InventoryManagement/comments/1s8i5lq/quick_help_to_create_a_warehouse_management/) 的 r/InventoryManagement 上，有人想用 AI 给一家餐厅做一套库存管理应用。

![reddit1-wcwqye.png](https://static-docs.nocobase.com/reddit1-wcwqye.png)

原本看起来只是商品录入、入库和出库，但真正开始做以后，不同库存单位怎么处理？出入库之后数量应该怎样变化？原本几句话就能描述清楚的需求，真正搭建到系统里，需要处理的数据和规则没有想象中那么简单。评论区也有人提醒他，库存管理本身就比表面看起来复杂得多。

![reddit2-ztg7en.png](https://static-docs.nocobase.com/reddit2-ztg7en.png)

这也是现在用 AI 搭建业务系统时很容易遇到的情况。生成几个页面已经越来越快，但是页面背后的数据关系、库存变化、权限、流程，以及需求变化后系统还能不能继续维护都需要再次确认。

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

如果使用同一份库存管理需求，**让 AI 从零生成一套应用，和让 AI 基于 NocoBase 搭建，最终会有什么不同？**

我们分别搭建了两套系统：

* 从空白项目开始，让 AI 直接生成一套独立的库存管理应用；
* 让 AI 基于 NocoBase 的数据模型、权限和工作流搭建同样的系统。

**接下来，我们会从采购、入库、库存流水、盘点以及后续需求调整几个方面比较两种方式在数据关系、业务规则、权限和维护上的具体差异。**

## 1. 同一份 Prompt 能生成什么？

我们给 AI 的需求包含了一套比较完整的库存业务：

> 为一家汽车零部件销售公司搭建库存管理系统，统一管理商品、分类、供应商、采购订单和库存；记录入库、出库、报损和库存调整；能够查看库存变化记录，识别低库存、超储和长期没有出库的商品；支持库存盘点、差异复核和库存调整，并提供管理工作台和相互关联的演示数据。

里面主要有五部分：

**商品和供应商 → 采购 → 库存变化 → 库存风险 → 盘点调整**

一张采购订单里可能有多个商品；商品入库后，库存数量要发生变化，同时还要保存这次入库记录。盘点发现数量不一致时，也不能直接改一个库存数字，还要记录差异、调整原因和确认结果。

**完整 Prompt 如下，后面的两套系统都基于这份需求生成。**

```Plain
我是一家汽车零部件销售公司的库存负责人，目前主要通过表格管理商品、供应商、采购和库存。随着商品越来越多，我们经常遇到库存数量不准确、缺货发现不及时、部分商品长期积压，以及盘点差异难以追溯等问题。
我想建立一套库存管理系统，统一管理商品、分类、供应商、采购订单和库存数据。系统需要记录每一次入库、出库、报损和库存调整，让我能够随时查看商品的当前库存，并了解库存发生变化的原因。
我希望系统能够自动识别缺货、低库存、超储和长期没有出库的商品，根据近期的销售和库存情况提供补货建议，帮助采购人员判断应该采购哪些商品、采购多少以及向哪个供应商采购。
系统还需要支持库存盘点。盘点人员可以记录实际数量，系统自动计算盘盈盘亏；复核完成后，按照差异调整库存，并保留完整记录。
管理人员需要通过一个直观的工作台了解库存总量、库存金额、近期出入库、库存风险和待处理事项。整体设计要清晰、易用，方便库存人员进行日常操作，也方便管理者快速发现问题。
请根据以上实际业务需求，自行规划合理的功能结构、数据关系和页面交互，并准备一些相互关联的示例数据，让这套系统可以直接用于演示完整的库存管理过程。
```

### 第一轮生成结果

我们分别用 Vibe Coding 和 NocoBase + AI 搭建了这套系统。

从页面上看，两边都已经覆盖了商品、采购、出入库、盘点和数据概览等主要功能。实际操作后，两边的完成度差别比较明显。

在这次生成结果中，**NocoBase + AI 已经生成了可以实际操作的数据表、页面和基础业务关系**。商品、供应商、采购订单等数据可以正常录入和关联，第一轮完成后已经比较接近实际使用状态，后续主要是根据真实业务继续调整规则和操作细节。

![NocoBase+AI工作台1-rb9q8w.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%B7%A5%E4%BD%9C%E5%8F%B01-rb9q8w.png)

![NocoBase+AI工作台2-g11hpx.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%B7%A5%E4%BD%9C%E5%8F%B02-g11hpx.png)

**Vibe Coding 版本目前更接近一个前端原型。** 页面上虽然已经呈现了商品、采购、出入库和盘点等功能，但数据还没有真正交互起来，部分按钮和操作也无法完成实际业务。要达到同样的使用状态，还需要继续补充数据存储、接口、业务逻辑和权限等内容。

![Vibe Coding工作台-cyt740.png](https://static-docs.nocobase.com/Vibe%20Coding%E5%B7%A5%E4%BD%9C%E5%8F%B0-cyt740.png)

这种差别和两种方式的起点有关。

Vibe Coding 从空白项目开始，数据库、接口、页面和业务逻辑都需要由 AI 根据当前需求逐步生成。

NocoBase + AI 则是在现有的应用框架里搭建。AI 创建商品、采购订单、库存记录时，数据关系、页面、**权限和工作流**都有现成的能力可以直接使用。

![NocoBase+AI用户-gmtnft.png](https://static-docs.nocobase.com/NocoBase%2BAI%E7%94%A8%E6%88%B7-gmtnft.png)

## 2. 两套库存系统的实际业务对比

我们选择了一条库存管理中很常见的业务链：

**商品和供应商建档 → 创建采购订单 → 商品入库 → 生成库存流水 → 识别低库存 → 发起盘点 → 复核差异 → 调整库存**

### 从商品和采购订单开始

先从最基础的数据开始，创建商品、供应商和采购订单

假设公司从供应商 A 采购三种汽车零部件，一张采购订单中包含：

* 刹车片 100 套；
* 空气滤芯 200 个；
* 火花塞 300 个。

这张订单至少涉及供应商、采购订单、采购明细和商品四类记录。一张订单可以包含多条明细，每条明细再记录商品、数量和单价。

**NocoBase + AI**

![NocoBase+AI供应商1-t1ivu0.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BE%9B%E5%BA%94%E5%95%861-t1ivu0.png)

![NocoBase+AI供应商2-y4gggt.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BE%9B%E5%BA%94%E5%95%862-y4gggt.png)

**Vibe Coding**

![Vibe Coding供应商-zkvvpp.png](https://static-docs.nocobase.com/Vibe%20Coding%E4%BE%9B%E5%BA%94%E5%95%86-zkvvpp.png)

检查一个库存系统时，看到“供应商页面”和“采购订单页面”还不够。

**这些记录能不能互相引用，并在后续入库时继续使用？**

例如，从供应商详情能否查看相关商品和采购记录；打开采购订单后，能否看到每一条商品明细；后续入库时，系统是否还能继续引用这张采购订单中的数据。

**NocoBase + AI**

![NocoBase+AI商品1-7bxt1j.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%95%86%E5%93%811-7bxt1j.png)

![NocoBase+AI商品2-z0vu5z.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%95%86%E5%93%812-z0vu5z.png)

**Vibe Coding**

![Vibe Coding商品-4eca56.png](https://static-docs.nocobase.com/Vibe%20Coding%E5%95%86%E5%93%81-4eca56.png)

从当前生成结果看，两套系统都已经提供了这些业务对象对应的页面。对于 NocoBase + AI，这些业务对象建立在统一的数据模型中；Vibe Coding 则需要由生成的数据库结构和程序逻辑来维持这些关系。

![NocoBase+AI数据源1-ug6h10.png](https://static-docs.nocobase.com/NocoBase%2BAI%E6%95%B0%E6%8D%AE%E6%BA%901-ug6h10.png)

![NocoBase+AI数据源2-v7ialj.png](https://static-docs.nocobase.com/NocoBase%2BAI%E6%95%B0%E6%8D%AE%E6%BA%902-v7ialj.png)

### 采购入库与库存记录

采购订单创建完成后，下一步就是入库。

假设刹车片原有库存 20 套，这次采购入库 100 套。入库后，当前库存应更新为 120 套，同时新增一条入库记录，并关联到对应的采购订单。

这条记录还需要保留入库时间、操作人员等信息。以后再发生出库、报损、退货或盘点调整时，也应继续形成新的库存记录。

因此，我们重点检查三个方面：**库存是否正确更新、是否留下对应记录，以及这条记录能否追溯到原来的采购订单。**

**NocoBase + AI**

![NocoBase+AI库存流水1-qdkohg.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%BA%93%E5%AD%98%E6%B5%81%E6%B0%B41-qdkohg.png)

![NocoBase+AI库存流水2-qcz3bq.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%BA%93%E5%AD%98%E6%B5%81%E6%B0%B42-qcz3bq.png)

**Vibe Coding**

![Vibe Coding出入库-13flun.png](https://static-docs.nocobase.com/Vibe%20Coding%E5%87%BA%E5%85%A5%E5%BA%93-13flun.png)

**库存系统不能只保存最后一个库存数字。入库、出库、报损和调整都需要留下变化记录，后续才能追溯库存结果的来源。**

### 低库存与补货判断

库存发生变化以后，管理人员还需要及时发现哪些商品已经低于安全库存。

例如，某个商品当前库存为 20，安全库存设为 50，系统就应该把它列入低库存商品。如果安全库存调整为 30，风险结果也应该联动变化。

两套第一版都已经生成了库存风险或类似的管理页面。

不过这里依然要看数据来源，这些结果是不是直接来自前面的库存数据。

如果还要进一步生成补货建议，则需要结合当前库存、安全库存、目标库存甚至历史出库情况计算建议数量，并取得对应的供应商信息。

**NocoBase + AI**

![NocoBase+AI低库存1-f7765x.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BD%8E%E5%BA%93%E5%AD%981-f7765x.png)

![NocoBase+AI低库存2-8no5ri.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BD%8E%E5%BA%93%E5%AD%982-8no5ri.png)

![NocoBase+AI低库存3-bp9r2c.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BD%8E%E5%BA%93%E5%AD%983-bp9r2c.png)

**库存风险并不是独立的数据，它来自当前库存、安全库存以及商品、供应商等已有信息。**

### 盘点差异、复核与库存调整

假设系统里某个零部件的库存是 100，仓库人员实际只盘到 96。

盘点人员先录入实际数量，系统计算出差异为 -4。但这时库存还不能直接改成 96。

这 4 件为什么少了，需要先确认。可能是漏记了一次出库，也可能是损耗、录入错误或其他原因。如果盘点人员录完数量就能直接覆盖原库存，后面很难再查清这次变化是怎么产生的。

因此，我们给这套系统增加了一条更具体的规则：

> 盘点人员可以录入实际数量和差异原因，但只有复核人员确认以后，系统才允许正式调整库存。

一笔盘点差异的处理过程是：

**录入实际数量 → 计算差异 -4 → 提交复核 → 确认调整 → 库存变为 96 → 保存调整记录**

这时候，需要检查的内容一下就多了起来：

1. 是否自动计算差异并进入正确状态；
2. 未复核人员能否调整库存；
3. 复核后是否同步更新库存并生成流水；
4. 是否记录人员、时间和原因；
5. 历史盘点结果是否保留。

这类型的需求已经很难只通过“生成一个盘点页面”解决。

在 Vibe Coding 版本里，需要继续处理盘点状态、复核权限、库存更新和调整记录之间的逻辑。例如复核通过以后，程序要修改库存，同时新增调整记录；没有复核权限的账号，则不能执行这一步操作。

![Vibe Coding库存盘点-jgpd1v.png](https://static-docs.nocobase.com/Vibe%20Coding%E5%BA%93%E5%AD%98%E7%9B%98%E7%82%B9-jgpd1v.png)

NocoBase + AI 版本使用现有的数据关系、角色权限和工作流来处理这组规则。盘点记录提交后进入待复核状态，复核人员确认，再更新库存并保存对应的调整记录。

![NocoBase+AI盘点单1-pelxbu.png](https://static-docs.nocobase.com/NocoBase%2BAI%E7%9B%98%E7%82%B9%E5%8D%951-pelxbu.png)

![NocoBase+AI盘点单2-vmxs6h.png](https://static-docs.nocobase.com/NocoBase%2BAI%E7%9B%98%E7%82%B9%E5%8D%952-vmxs6h.png)

## 3. Vibe Coding 和 NocoBase + AI，应该怎么选？

经过前面的采购、入库、库存风险以及盘点等功能对比，可以更直观地看到两种搭建方式的差别。

### 哪些情况更适合 NocoBase + AI？

如果你要搭建的是库存、采购、CRM、IT 管理这类内部业务系统，那么 NocoBase + AI 会更合适。

它的优势主要体现在四点。

**1. AI 生成的不只是页面**

AI 创建的商品、供应商、采购订单、库存流水、盘点单、权限和工作流，都会直接成为 NocoBase 中可以继续使用和修改的业务对象。

**2. 不需要重复开发通用后台能力**

数据关系、权限、表单、工作流等能力已经由 NocoBase 提供。团队可以把更多时间放在库存怎么计算、谁能看哪些仓库、调拨怎么处理这些具体业务规则上。

**3. 后续修改成本更低**

增加字段、调整页面、修改权限或增加流程时，很多变化可以直接基于现有数据模型继续配置，不需要每次都修改前端、接口和数据库代码。

**4. AI 修改的范围更清楚**

AI 主要操作数据模型、字段、页面、权限和工作流这些明确对象。系统越来越复杂以后，也更容易检查一次修改影响了哪些部分。

### 哪些情况更适合 Vibe Coding？

Vibe Coding 的优势主要是开发速度快、自由度高。如果你的项目更关注下面这些需求，可以选择 Vibe Coding：

**1. 项目还处在早期验证阶段。** 当前目标只是尽快做出 Demo、MVP 或一次性原型，不需要考虑复杂的数据关系、权限和长期维护。

**2. 已经有现成的代码项目，需要 AI 直接在原有技术栈中继续开发。** 例如团队已经有自己的前后端项目，只是希望借助 AI 增加页面、接口或业务逻辑。

### 如何让 AI 基于 NocoBase 来进行搭建？

如果你想复现上面的 NocoBase + AI 路径，可以先让 Coding Agent 进入 NocoBase 的 AI Builder 环境，再提交具体业务需求。初始化时可以直接使用下面这段指令：

```Plain
请按照 NocoBase 官方文档，帮我安装 NocoBase CLI 并完成初始化：
https://docs.nocobase.com/ai-builder

后续应用必须基于 NocoBase AI Builder 和 NocoBase Skills 搭建，不要创建独立的 React、Vue 或 Next.js 项目。
```

初始化完成后，再提交前面的库存业务需求，并要求 AI 优先使用 NocoBase 的数据模型、页面、权限和工作流。这样，后续生成和修改都会落在同一套应用结构中。

**如果这篇文章对你有帮助，欢迎分享给正在关注 AI 搭建业务系统的朋友。**

如果你也想实际看看 NocoBase + AI 搭建出来的系统，可以直接申请在线 Demo；如果想自己动手试一遍，也可以从 AI Builder 文档开始搭建。

* **体验 NocoBase + AI Demo：** [申请在线 Demo](https://demo.nocobase.com/new)
* **自己上手搭建：** [查看 AI Builder 文档](https://docs.nocobase.com/cn/ai-builder)



**相关阅读**：

* **[如何用 AI 和 NocoBase 在 2 小时内搭建一套企业 IT 运维系统](https://www.nocobase.com/cn/blog/build-it-operations-system-with-ai-nocobase)**
* **[NocoBase vs Baserow：灵活数据库与企业级系统](https://www.nocobase.com/cn/blog/nocobase-vs-baserow)**
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

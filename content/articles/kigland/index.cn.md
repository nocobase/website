## 引言

在苏州，有一支团队正在悄悄改变个性化制造的方式。他们不做快消品，也不靠规模取胜，却在全球角色扮演爱好者圈子里收获了不少“忠粉”。

![KIGLAND.PNG](https://static-docs.nocobase.com/e8d57071ce452ab9b8ebeb759f6b3b1a.PNG)

他们叫 [KIGLAND](https://www.kigland.cn/zh)，一家专注 2D 风格角色头部面具（也就是：KIGURUMI）定制的工作室——这类产品极具个性化，定制复杂，手工精度要求高，是典型的**小批量、高多样性**制造品。

听起来像是一个小众的手工艺团队？

其实，他们更像一个面向文娱消费品的柔性制造实验室：通过数字化制造、标准化流程与 AI 驱动的供应链创新，**实现定制类产品从“艺术品”向“准工业品”的演进。**

## 从 GitHub Issues 到多维表格

创业初期的 KIGLAND，运作方式颇具极客气质：

* 客户订单用 GitHub Issues 管理
* 制作进度靠某多维表格填写
* 沟通与反馈夹杂在评论、截图、聊天记录中

**早期使用 GitHub Issues 管理订单：**

![GitHub Issues.PNG](https://static-docs.nocobase.com/fdc4f9c72c572fc824f0ad0c82158f14.PNG)

**通过某多维表格产品管理订单：**

![Lark's Base.PNG](https://static-docs.nocobase.com/178e19fde0b964a6b02bd69dfc97c53c.PNG)

> ***“刚开始其实挺顺的，但当我们订单数量涨上来、团队变大，一切就开始失控。”***

他们遇到的挑战，听起来非常熟悉：

1. **资源使用受限**：传统的列表不足以支撑更宽的字段，每个阶段关注范围不一致列表不适合部门场景 。
2. **流程追踪难度大**：Issues 无法结构化属性之外的数据，例如评论等。
3. **数据协作割裂**：传统岗位无法适应 GitHub 研发流程，某多维表格的权限隔离需要更高资源消耗的配置。

随着沟通成本的指数级上升，KIGLAND 决定停下来，找一套真正适合他们的管理系统。

## 寻找“自己能动手改”的系统

KIGLAND 的几位合伙人都是开源社区出身，技术背景不俗，他们想要的不是一个功能繁复的 SaaS，而是一套**能自己掌控的系统**。

> ***“我们要的是能随业务变化而调整的工具，而不是被动迁就平台规则。”***

他们开始尝试各种“类 Airtable”工具，最终选择了 NocoBase。

选择的理由很简单：

* 数据模型灵活，可以适配复杂订单结构
* 插件机制+开放 API，团队可以自己拓展功能
* 界面友好，极低的学习曲线
* 活跃且进化迅速的社区
* 最重要的是：**开源、可自部署、自我掌控**

## 三周上线，打造适配业务的管理系统

用了不到三周时间，KIGLAND 就基于 NocoBase 搭建起了完整的订单管理系统，包括：

* **订单全生命周期管理**：从下单、设计、制作、质检到发货，流程细分到每个小步骤
* **跨岗位协作机制**：销售、设计、生产多个角色协同，权限清晰，流程闭环
* **日志驱动责任机制**：每一步都可追踪记录，问题定位更高效
* **物料与库存管理模块**：支持多种自定义物料分类与关联操作

**通过 NocoBase 管理订单列表：**

![Order list managed in NocoBase.png](https://static-docs.nocobase.com/4b5ac21069bdd25c928403455c2636cd.png)

**通过 NocoBase 管理订单细节：**

![Order details and production steps.png](https://static-docs.nocobase.com/a5b09d907305ae1f594d19b06242d6a6.png)

**通过 NocoBase 管理订单日志：**

![Activity logs and traceability.png](https://static-docs.nocobase.com/4c47d7ee6976759b5923db9624ec5b5d.png)

**订单与日志建立关联：**

![Linking logs to specific orders.png](https://static-docs.nocobase.com/7ed0cd8c3d18698306cedf7969ab1dae.png)

在系统搭建完成后，并保持持续跟随 NocoBase 官方更新。

## 三个季度之后，数据告诉我们答案

> “部署 NocoBase 后，我们从一个手忙脚乱的小型工作室，变成了这个赛道里相对靠前的团队。”

KIGLAND 的成果数据也非常亮眼：

* 📦 订单吞吐能力提升 3 倍
* ❌ 协作错误率下降 80%
* 😊 客户满意度显著提高
* 🔧 技术团队实现功能自研与持续优化

**更重要的是——团队终于从流程中解脱出来，开始有时间真正思考业务成长与用户体验。**

**来自 KIGLAND 用户的真实反馈：**

![customers.png](https://static-docs.nocobase.com/2499e3b040253747de352eca2c9a8913.png)

![customers2.png](https://static-docs.nocobase.com/265a9222e67bb37c77cfd390db76281b.png)

## 继续拓展系统能力

在 NocoBase 的基础上，KIGLAND 正在一步步拓展他们的系统能力，目标是打造真正的**定制化自动工厂**：

* 基于私有部署的 LLM 和 MCP，构建智能化生产调度系统
* 利用订单数据，建立预测性生产模型，实现与供应商的无缝对接与派单
* 打通客户端下单系统，构建完整的端到端标准化定制路径

对 KIGLAND 来说，这不仅是工具升级，更是战略层面的进化。

> ***“在个性化消费制造领域，系统化早已不是加分项，而是业务扩张的基石。”***
>
> ***——KIGLAND 创始人 Remi***

## 写在最后

KIGLAND 的探索告诉我们一个朴素却深刻的事实：

**越是复杂、个性化的业务，越需要底层结构化支撑；越想规模化，就越不能依赖‘人控流程’。**

而他们之所以能快速完成从混乱到高效的转变，NocoBase 是关键的一环——它不是一个现成的系统，而是一套可以共建、共成长的“操作底座”。

**对正在经历数字化转型的团队来说，也许你们要找的不是某个万能模板，而是一个像 NocoBase 这样的“积木系统”——灵活、可靠、能生长。**

* [从表格到系统：Classmethod 用 NocoBase 构建全球员工信息管理系统](https://www.nocobase.com/cn/blog/classmethod)
* [一家家具厂，如何用零代码搭建自己的 ERP ？](https://www.nocobase.com/cn/blog/olmon)
* [奥雅的数字化新版图：用 NocoBase 探索精细化管理新可能](https://www.nocobase.com/cn/blog/l-a)
* [超 400 人团队律所，如何用 NocoBase 高效管理律师提成？](https://www.nocobase.com/cn/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [1周上线，2个月交付！有巢数智如何用 NocoBase 颠覆建筑行业数智化效率](https://www.nocobase.com/cn/blog/rapid-development-with-nocobase)
* [低代码加速智能制造，兰之天的选择是 NocoBase](https://www.nocobase.com/cn/blog/Orchisky)

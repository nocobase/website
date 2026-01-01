经过 NocoBase 团队及所有贡献者 8 个星期的努力，NocoBase 2.0-beta 如期发布。这个版本对 NocoBase 2.0 的大量新特性进行了打磨和测试，使得 2.0 进入更稳定的阶段，欢迎尝鲜用户将该版本用于生产测试，并将遇到的问题和建议及时反馈给我们。

2.0-rc 将于 2026 年 2 月 11 日之前发布，将覆盖更全面的测试及更多新特性，敬请期待。

---

## 新特性

### AI 员工

我们对 AI 员工做了大量改进， 包括：

- 优化内置 AI 员工的能力
- 支持访问外部数据源
- 支持查询大量数据
- 让对话内容保持原始格式
- 优化错误提示

使用手册：[AI 员工](https://v2.docs.nocobase.com/cn/ai-employees)

![](https://static-docs.nocobase.com/20251102121036-2025-11-02-12-10-38.png)

### UI 模板

在 2.0 beta 中带来了全新的 UI 模板功能，每种模板均支持复制和引用，包括：

- 区块模板
- 字段模板
- 弹窗模板

其中，弹窗模板可以将整个弹窗里的内容（子页面中的全部标签页、区块）保存为模板，这大幅减少了在 1.x 中的重复工作。

使用手册：[UI Templates](https://v2.docs.nocobase.com/interface-builder/ui-templates)

![](https://static-docs.nocobase.com/edit-popup-select-20251228.png)

### 多应用 2.0

多应用管理是 NocoBase 提供的统一应用管理方案，用于在一个或多个运行环境中创建和管理多个物理隔离的 NocoBase 应用实例。通过应用监管器 (AppSupervisor)，用户可以在统一入口中创建和维护多个应用，满足不同业务、不同规模阶段的需求。NocoBase 支持以下三种架构部署：

- **单应用**：只部署一个 NocoBase 实例，所有业务功能、数据和用户都运行在同一个应用中。
- **共享内存多应用**：一个 NocoBase 实例中可以同时运行多个应用。每个应用是独立的，可以连接独立的数据库，可以单独创建、启动和停止，但它们共享同一个进程和内存空间，用户仍然只需要维护一个 NocoBase 实例。
- **多环境混合部署**：部署一个 NocoBase 作为统一的管理中心，同时部署多个 NocoBase 作为应用运行环境，用于实际运行业务应用，不同应用可以运行在不同节点或集群。

使用手册：[多应用](https://v2.docs.nocobase.com/cn/multi-app/multi-app)![](https://static-docs.nocobase.com/202512231215186.png)

### 多空间

多空间插件允许在单一应用实例中，通过逻辑隔离实现多个独立的数据空间，适用于业务流程和系统配置高度一致的多工厂或多门店等场景。

使用手册：[多空间](https://v2.docs.nocobase.com/cn/multi-app/multi-space)

### 数据可视化 2.0

1.x 中提供了基础的数据可视化插件，基于 Ant Design Charts 和 Echarts 实现最基本的数据可视化展示，但对于复杂图表、个性化交互、数据联动的场景却无能为力。

NocoBase 2.0 中基于 Echarts 提供了全新的数据可视化插件，支持可视化配置模式和 SQL、JSON 模式，支持事件，可以方便地满足复杂图表、多图表联动、数据下钻等场景。

不需要担心 SQL 和 JSON 过于复杂，有 AI 员工 Nathan 帮你。

使用手册：[数据可视化](https://v2.docs.nocobase.com/cn/data-visualization)

![](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

### 工作流

#### 新增“多条件分支”节点

类似于编程语言中的 `switch / case` 或 `if / else if` 语句。系统将根据配置的多个条件，按顺序逐个判断，仅执行满足某个条件的分支下的流程。该节点将代替“并行分支”的部分功能，建议同时使用条件和并行节点解决此类编排的流程都可以用新的“多条件分支”节点替代。

![20251123224209](https://static-docs.nocobase.com/20251123224209.png)

使用手册：[多条件分支](https://v2.docs.nocobase.com/cn/workflow/nodes/multi-conditions)

### 审批 2.0

审批插件的大部分区块配置使用 FlowEngine 进行了重构，支持更灵活的配置和使用。同时也提供了几个新功能。

使用手册：[审批](https://v2.docs.nocobase.com/cn/workflow/triggers/approval)

#### 允许选择在审批处理界面中展示数据的快照还是最新状态

* **快照**
  在审批流程中，申请人和审批人在进入时看到的记录状态，并且在提交后只能看到自己修改的记录——不会看到其他人之后所做的更新。
* **最新**
  在审批流程中，申请人和审批人在整个流程中始终看到记录的最新版本，无论他们操作之前记录是什么状态。在流程结束后，他们将看到记录的最终版本。

#### 支持配置发起人的数据范围

可以配置基于用户范围的权限，决定哪些用户可以发起该审批。

![20251226114623](https://static-docs.nocobase.com/20251226114623.png)

#### 待办中心里，支持“我发起的”和“我的审批”列表中的卡片配置业务数据字段

“我发起的”卡片，可灵活配置审批信息和业务数据的字段。

![20251231222654](https://static-docs.nocobase.com/20251231222654.png)

“我的审批”卡片，可灵活配置审批任务和业务数据的字段。

![20251231222815](https://static-docs.nocobase.com/20251231222815.png)

### 邮件管理 2.0

邮件管理插件使用 FlowEngine 进行了重构，使 AI 员工可以无缝参与到邮件的总结、分析、撰写中，同时新增了自动保存草稿等功能。

使用手册：
https://v2.docs.nocobase.com/cn/email-manager

![](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

### 数据历史记录

历史记录插件用于追踪数据的变更过程，自动保存新增、修改、删除操作的快照与差异记录，帮助用户快速回溯数据变化、审计操作行为。

使用手册：[数据历史记录](https://v2.docs.nocobase.com/cn/record-history/)

![](https://static-docs.nocobase.com/202511011346400.png)

---

## 解决方案

NocoBase 2.0 提供开箱即用的解决方案模板，以便于快速搭建业务系统。

### 智能工单系统

AI 驱动的工单管理平台，实现：

- **多源统一接入**：公开表单、客户门户、邮件解析、API/Webhook
- **AI 员工团队**：Sam（分流）、Grace（回复）、Max（知识）、Lexi（翻译）...
- **SLA 全程监控**：P0-P3 四级优先级，自动预警升级
- **知识自循环**：工单解决后自动沉淀为知识文章

方案文档：https://v2.docs.nocobase.com/cn/solution/ticket-system/

![ticketing-imgs-2026-01-01-00-46-12](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-46-12.jpg)

### CRM 客户管理（预览版）

> **版本说明**：当前版本基于1.x版本，对部分前端界面进行了2.0适配，**仅供学习预览**。

NocoBase CRM 是一个无代码、灵活且强大的客户关系管理基座，涵盖：

- **客户管理**：客户信息、联系人、客户分级
- **销售管道**：线索管理、商机跟进、销售漏斗
- **订单管理**：报价单、订单、合同
- **数据分析**：仪表板、报表、数据可视化

方案文档：https://v2.docs.nocobase.com/cn/solution/crm/

在线演示：https://demo.nocobase.com/new

![ticketing-imgs-2026-01-01-00-47-06](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-47-06.jpg)

## 2.0-beta vs 1.x

### Legend

- ✅ Supported: 1.x features adapted in 2.0
- 🆕 New feature: New features in 2.0
- ✨ Enhanced: Features improved compared to 1.0
- 🔄 In progress: Features under development
- 🚀 Optimizing: Supported but needs improvement
- ❌ Not supported: Features not supported in 2.0
- ⚠️ Deprecated: Deprecated features
- P0/P1/P2: Feature priority
  - P0: Coming soon
  - P1: Will be supported before 2.0 official release
  - P2: Will be supported after 2.0 official release

### Interface Builder

#### Routes & Menus


| Category      | Feature           | Status         | Priority | Notes |
| ------------- | ----------------- | -------------- | -------- | ----- |
| Add menu item | Group             | ✅ Supported   | -        | -     |
| Add menu item | Classic page (v1) | ✅ Supported   | -        | -     |
| Add menu item | Modern page (v2)  | 🆕 New feature | -        | -     |
| Add menu item | Link              | ✅ Supported   | -        | -     |

#### Pages


| Category      | Feature            | Status           | Priority | Notes |
| ------------- | ------------------ | ---------------- | -------- | ----- |
| Page settings | Display page title | ✅ Supported     | -        | -     |
| Page settings | Edit page title    | ✅ Supported     | -        | -     |
| Page settings | Enable page tabs   | ✅ Supported     | -        | -     |
| Page settings | Copy embedded link | ❌ Not supported | -        | -     |
| Page settings | Enable page header | ⚠️ Deprecated  | -        | -     |
| Drag layout   | Block drag layout  | ✨ Enhanced      | -        | -     |

#### Add Blocks

##### Data blocks


| Feature         | Status           | Priority | Notes |
| --------------- | ---------------- | -------- | ----- |
| Table           | ✅ Supported     | -        | -     |
| Form (Edit)     | ✅ Supported     | -        | -     |
| Form (Add new)  | ✅ Supported     | -        | -     |
| Details         | ✅ Supported     | -        | -     |
| List            | ✅ Supported     | -        | -     |
| Grid card       | ✅ Supported     | -        | -     |
| Comments        | ✅ Supported     | -        | -     |
| Map             | ✅ Supported     | -        | -     |
| Charts          | ✨ Enhanced      | -        | -     |
| Calendar        | ❌ Not supported | -        | -     |
| Gantt           | ❌ Not supported | -        | -     |
| Kanban          | ❌ Not supported | -        | -     |
| Multi-step form | ❌ Not supported | -        | -     |

##### Filter blocks


| Feature  | Status           | Priority | Notes |
| -------- | ---------------- | -------- | ----- |
| Form     | ✨ Enhanced      | -        | -     |
| Collapse | ❌ Not supported | -        | -     |
| Tree     | ❌ Not supported | -        | -     |

##### Other blocks


| Feature             | Status           | Priority | Notes |
| ------------------- | ---------------- | -------- | ----- |
| Block template      | 🆕 New feature   | -        | -     |
| JS block            | 🆕 New feature   | -        | -     |
| Iframe              | ✅ Supported     | -        | -     |
| Action panel        | ✅ Supported     | -        | -     |
| Markdown            | ✨ Enhanced      | -        | -     |
| Record history      | 🆕 New feature   | -        | -     |
| Email               | ✅ Supported     | -        | -     |
| Workflow > To-Do    | ❌ Not supported | -        | -     |
| Workflow > Approval | 🔄 In progress   | P0       | -     |

#### Tabs


| Category     | Feature  | Status         | Priority | Notes |
| ------------ | -------- | -------------- | -------- | ----- |
| Tab settings | Edit tab | ✅ Supported   | -        | -     |
| Tab settings | Copy UID | 🆕 New feature | -        | -     |
| Tab settings | Delete   | ✅ Supported   | -        | -     |

#### Table Block


| Category                       | Feature                      | Status           | Priority | Notes |
| ------------------------------ | ---------------------------- | ---------------- | -------- | ----- |
| Table settings                 | Title & description          | ✅ Supported     | -        | -     |
| Table settings                 | Block linkage rules          | ✨ Enhanced      | -        | -     |
| Table settings                 | Block height                 | ❌ Not supported | P1       | -     |
| Table settings                 | Enable drag and drop sorting | ❌ Not supported | P1       | -     |
| Table settings                 | Drag and drop sorting field  | ❌ Not supported | P1       | -     |
| Table settings                 | Data loading mode            | ❌ Not supported | P1       | -     |
| Table settings                 | Enable quick edit            | 🆕 New feature   | -        | -     |
| Table settings                 | Show row numbers             | ✅ Supported     | -        | -     |
| Table settings                 | Page size                    | ✅ Supported     | -        | -     |
| Table settings                 | Data scope                   | ✅ Supported     | -        | -     |
| Table settings                 | Default sorting              | ✅ Supported     | -        | -     |
| Table settings                 | Enable tree table            | ✅ Supported     | -        | -     |
| Table settings                 | Expand all rows by default   | ✅ Supported     | -        | -     |
| Table settings                 | Table density                | ✅ Supported     | -        | -     |
| Table settings                 | Save as template             | 🆕 New feature   | -        | -     |
| Table settings                 | Copy UID                     | 🆕 New feature   | -        | -     |
| Table settings                 | Delete                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Add new                      | ✅ Supported     | -        | -     |
| Table actions > Global actions | Delete                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Filter                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Link                         | ✅ Supported     | -        | -     |
| Table actions > Global actions | Popup                        | ✅ Supported     | -        | -     |
| Table actions > Global actions | Refresh                      | ✅ Supported     | -        | -     |
| Table actions > Global actions | Bulk edit                    | ❌ Not supported | P1       | -     |
| Table actions > Global actions | Bulk update                  | ✅ Supported     | -        | -     |
| Table actions > Global actions | Export                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Import                       | ✅ Supported     | -        | -     |
| Table actions > Global actions | Custom request               | ❌ Not supported | P2       | -     |
| Table actions > Global actions | Column settings              | ❌ Not supported | -        | -     |
| Table actions > Global actions | AI employees                 | 🆕 New feature   | -        | -     |
| Table actions > Global actions | JS action                    | 🆕 New feature   | -        | -     |
| Table actions > Row actions    | View                         | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Edit                         | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Update record                | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Delete                       | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Popup                        | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Link                         | ✅ Supported     | -        | -     |
| Table actions > Row actions    | Duplicate                    | ❌ Not supported | P2       | -     |
| Table actions > Row actions    | Custom request               | ❌ Not supported | P2       | -     |
| Table actions > Row actions    | AI employees                 | 🆕 New feature   | -        | -     |
| Table actions > Row actions    | JS action                    | 🆕 New feature   | -        | -     |
| Table columns                  | Display collection fields    | ✅ Supported     | -        | -     |
| Table columns                  | Display association fields   | ✅ Supported     | -        | -     |
| Table columns > Other columns  | JS field                     | 🆕 New feature   | -        | -     |
| Table columns > Other columns  | JS column                    | 🆕 New feature   | -        | -     |
| Table columns > Other columns  | Actions                      | ✨ Enhanced      | -        | -     |
| Table column settings          | Column title                 | ✅ Supported     | -        | -     |
| Table column settings          | Tooltip                      | ✅ Supported     | -        | -     |
| Table column settings          | Column width                 | ✨ Enhanced      | -        | -     |
| Table column settings          | Enable quick edit            | 🆕 New feature   | -        | -     |
| Table column settings          | Sortable                     | ✅ Supported     | -        | -     |
| Table column settings          | Fixed                        | ✅ Supported     | -        | -     |
| Table column settings          | Style                        | ❌ Not supported | P2       | -     |
| Table column settings          | Display mode                 | 🆕 New feature   | -        | -     |
| Table column settings          | Display copy button          | ❌ Not supported | -        | -     |
| Table column settings          | Ellipsis on text overflow    | ✨ Enhanced      | -        | -     |
| Table column settings          | Field component              | ✨ Enhanced      | -        | -     |
| Table column settings          | Render mode                  | 🆕 New feature   | -        | -     |
| Table column settings          | Enable click-to-open         | ✨ Enhanced      | -        | -     |
| Table column settings          | Edit popup                   | ✨ Enhanced      | -        | -     |
| Table column settings          | Copy UID                     | 🆕 New feature   | -        | -     |
| Table column settings          | Delete                       | ✅ Supported     | -        | -     |
| Table column settings          | Hide column                  | ⚠️ Deprecated  | -        | -     |
| Table column settings          | Connect data blocks          | ⚠️ Deprecated  | -        | -     |
| Table column settings          | Save as reference template   | ⚠️ Deprecated  | -        | -     |
| Table column settings          | Save as inherited template   | ⚠️ Deprecated  | -        | -     |

#### Add & Edit Form Block


| Category                                     | Feature                               | Status           | Priority | Notes |
| -------------------------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Form settings                                | Title & description                   | ✅ Supported     | -        | -     |
| Form settings                                | Block height                          | ❌ Not supported | P1       | -     |
| Form settings                                | Form data templates                   | ❌ Not supported | -        | -     |
| Form settings                                | Form initial values                   | 🔄 In progress   | P1       | -     |
| Form settings                                | Layout                                | ✅ Supported     | -        | -     |
| Form settings                                | Block linkage rules                   | ✨ Enhanced      | -        | -     |
| Form settings                                | Field linkage rules                   | 🔄 In progress   | P2       | -     |
| Form settings                                | Data scope                            | ✅ Supported     | -        | -     |
| Form settings                                | Enable drafts                         | 🆕 New feature   | -        | -     |
| Form settings                                | Save as template                      | 🆕 New feature   | -        | -     |
| Form settings                                | Convert reference to duplicate        | 🆕 New feature   | -        | -     |
| Form settings                                | Convert reference fields to duplicate | 🆕 New feature   | -        | -     |
| Form settings                                | Copy UID                              | 🆕 New feature   | -        | -     |
| Form settings                                | Delete                                | ✅ Supported     | -        | -     |
| Form settings                                | Save as reference template            | ⚠️ Deprecated  | -        | -     |
| Form settings                                | Save as inherited template            | ⚠️ Deprecated  | -        | -     |
| Form field items                             | Display collection fields             | ✅ Supported     | -        | -     |
| Form field items                             | Display association fields            | ❌ Not supported | P2       | -     |
| Form field items > Others                    | Field template                        | 🆕 New feature   | -        | -     |
| Form field items > Others                    | JS item                               | 🆕 New feature   | -        | -     |
| Form field items > Others                    | Divider                               | ✨ Enhanced      | -        | -     |
| Form field items > Others                    | Markdown                              | ✨ Enhanced      | -        | -     |
| Form field item settings                     | Show label                            | ✅ Supported     | -        | -     |
| Form field item settings                     | Label                                 | ✅ Supported     | -        | -     |
| Form field item settings                     | Tooltip                               | ✅ Supported     | -        | -     |
| Form field item settings                     | Description                           | ✅ Supported     | -        | -     |
| Form field item settings                     | Default value                         | 🚀 Optimizing    | P0       | -     |
| Form field item settings                     | Validation                            | ✨ Enhanced      | -        | -     |
| Form field item settings                     | Required                              | ✅ Supported     | -        | -     |
| Form field item settings                     | Display mode                          | ✨ Enhanced      | -        | -     |
| Form field item settings > SubForm           | Multiple                              | ❌ Not supported | P1       | -     |
| Form field item settings > SubForm           | Field linkage rules                   | 🔄 In progress   | P2       | -     |
| Form field item settings > SubTable          | Field linkage rules                   | ❌ Not supported | P2       | -     |
| Form field item settings > SubForm (Popover) | -                                     | ❌ Not supported | -        | -     |
| Form field item settings                     | Copy UID                              | 🆕 New feature   | -        | -     |
| Form field item settings                     | Delete                                | ✅ Supported     | -        | -     |
| Form actions                                 | Submit                                | 🚀 Optimizing    | P1       | -     |
| Form actions                                 | Trigger workflow                      | ✅ Supported     | -        | -     |
| Form actions                                 | Popup                                 | ❌ Not supported | P1       | -     |
| Form actions                                 | Custom request                        | ❌ Not supported | P2       | -     |
| Form actions                                 | AI employees                          | 🆕 New feature   | -        | -     |
| Form actions                                 | JS action                             | 🆕 New feature   | -        | -     |

#### Details Block


| Category                                                | Feature                    | Status           | Priority | Notes |
| ------------------------------------------------------- | -------------------------- | ---------------- | -------- | ----- |
| Details settings                                        | Title & description        | ✅ Supported     | -        | -     |
| Details settings                                        | Block height               | ❌ Not supported | P1       | -     |
| Details settings                                        | Block linkage rules        | ✨ Enhanced      | -        | -     |
| Details settings                                        | Data loading mode          | ❌ Not supported | P1       | -     |
| Details settings                                        | Layout                     | ✅ Supported     | -        | -     |
| Details settings                                        | Data scope                 | ✅ Supported     | -        | -     |
| Details settings                                        | Default sorting            | ✅ Supported     | -        | -     |
| Details settings                                        | Field linkage rules        | 🚀 Optimizing    | -        | -     |
| Details settings                                        | Save as template           | 🆕 New feature   | -        | -     |
| Details settings                                        | Copy UID                   | 🆕 New feature   | -        | -     |
| Details settings                                        | Delete                     | ✅ Supported     | -        | -     |
| Details settings                                        | Save as reference template | ⚠️ Deprecated  | -        | -     |
| Details settings                                        | Save as inherited template | ⚠️ Deprecated  | -        | -     |
| Details actions                                         | View                       | 🆕 New feature   | -        | -     |
| Details actions                                         | Edit                       | ✅ Supported     | -        | -     |
| Details actions                                         | Open popup                 | ✅ Supported     | -        | -     |
| Details actions                                         | Update record              | ✅ Supported     | -        | -     |
| Details actions                                         | Delete                     | ✅ Supported     | -        | -     |
| Details actions                                         | Link                       | 🆕 New feature   | -        | -     |
| Details actions                                         | Template print             | ✅ Supported     | -        | -     |
| Details actions                                         | Print                      | ❌ Not supported | -        | -     |
| Details actions                                         | Custom request             | ❌ Not supported | P2       | -     |
| Details actions                                         | Trigger workflow           | 🆕 New feature   | -        | -     |
| Details actions                                         | AI employees               | 🆕 New feature   | -        | -     |
| Details actions                                         | JS action                  | 🆕 New feature   | -        | -     |
| Details fields                                          | Display collection fields  | ✅ Supported     | -        | -     |
| Details fields                                          | Display association fields | ✅ Supported     | -        | -     |
| Details fields > Others                                 | Field template             | 🆕 New feature   | -        | -     |
| Details fields > Others                                 | JS field                   | 🆕 New feature   | -        | -     |
| Details fields > Others                                 | JS item                    | 🆕 New feature   | -        | -     |
| Details fields > Others                                 | Divider                    | ✅ Supported     | -        | -     |
| Details fields > Others                                 | Markdown                   | ✨ Enhanced      | -        | -     |
| Details item settings                                   | Show field name            | ✅ Supported     | -        | -     |
| Details item settings                                   | Field name                 | ✅ Supported     | -        | -     |
| Details item settings                                   | Tooltip                    | ✅ Supported     | -        | -     |
| Details item settings                                   | Description                | ✅ Supported     | -        | -     |
| Details item settings                                   | Style                      | ❌ Not supported | P2       | -     |
| Details item settings > Title display (clickable field) | Title field                | ✨ Enhanced      | -        | -     |
| Details item settings > Title display (clickable field) | Style                      | ❌ Not supported | P2       | -     |
| Details item settings > Title display (clickable field) | Display mode               | 🆕 New feature   | -        | -     |
| Details item settings > Title display (clickable field) | Ellipsis on text overflow  | ✅ Supported     | -        | -     |
| Details item settings > Title display (clickable field) | Enable click-to-open       | ✅ Supported     | -        | -     |
| Details item settings > Title display (clickable field) | Popup settings             | ✨ Enhanced      | -        | -     |
| Details item settings > SubTable                        | Page size                  | ✅ Supported     | -        | -     |
| Details item settings > SubTable                        | Set sorting rules          | ❌ Not supported | -        | -     |
| Details item settings > SubTable                        | Enable row numbers         | ❌ Not supported | -        | -     |
| Details item settings > SubTable                        | Linkage rules              | ❌ Not supported | -        | -     |
| Details item settings > SubDetails                      | Linkage rules              | ❌ Not supported | -        | -     |
| Details item settings > SubDetails                      | Layout                     | ❌ Not supported | -        | -     |
| Details item settings > Large text                      | Ellipsis on text overflow  | ✨ Enhanced      | -        | -     |
| Details item settings > Large text                      | Render mode                | ✨ Enhanced      | -        | -     |
| Details item settings > Preview                         | -                          | ✨ Enhanced      | -        | -     |
| Details item settings                                   | Copy UID                   | 🆕 New feature   | -        | -     |
| Details item settings                                   | Delete                     | ✅ Supported     | -        | -     |

#### List Block


| Category                      | Feature                               | Status           | Priority | Notes |
| ----------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| List settings                 | Title & description                   | ✅ Supported     | -        | -     |
| List settings                 | Block height                          | ❌ Not supported | P1       | -     |
| List settings                 | Block linkage rules                   | ✨ Enhanced      | -        | -     |
| List settings                 | Page size                             | ✅ Supported     | -        | -     |
| List settings                 | Data scope                            | ✅ Supported     | -        | -     |
| List settings                 | Default sorting                       | ✅ Supported     | -        | -     |
| List settings                 | Data loading mode                     | ✅ Supported     | -        | -     |
| List settings                 | Layout                                | ✅ Supported     | -        | -     |
| List settings                 | Save as template                      | 🆕 New feature   | -        | -     |
| List settings                 | Convert reference to duplicate        | 🆕 New feature   | -        | -     |
| List settings                 | Convert reference fields to duplicate | 🆕 New feature   | -        | -     |
| List settings                 | Copy UID                              | 🆕 New feature   | -        | -     |
| List settings                 | Delete                                | ✅ Supported     | -        | -     |
| List settings                 | Save as reference template            | ⚠️ Deprecated  | -        | -     |
| List settings                 | Save as inherited template            | ⚠️ Deprecated  | -        | -     |
| List actions > Global actions | Add new                               | ✅ Supported     | -        | -     |
| List actions > Global actions | Delete                                | ✅ Supported     | -        | -     |
| List actions > Global actions | Filter                                | ✅ Supported     | -        | -     |
| List actions > Global actions | Link                                  | 🆕 New feature   | -        | -     |
| List actions > Global actions | Popup                                 | 🆕 New feature   | -        | -     |
| List actions > Global actions | Refresh                               | ✅ Supported     | -        | -     |
| List actions > Global actions | Bulk update                           | 🚀 Optimizing    | -        | -     |
| List actions > Global actions | Export                                | ✅ Supported     | -        | -     |
| List actions > Global actions | Import                                | ✅ Supported     | -        | -     |
| List actions > Global actions | Export attachments                    | 🆕 New feature   | -        | -     |
| List actions > Global actions | Send email                            | 🆕 New feature   | -        | -     |
| List actions > Global actions | Template print                        | 🆕 New feature   | -        | -     |
| List actions > Global actions | Trigger workflow                      | ✅ Supported     | -        | -     |
| List actions > Global actions | Custom request                        | ❌ Not supported | P2       | -     |
| List actions > Global actions | AI employees                          | 🆕 New feature   | -        | -     |
| List actions > Global actions | JS action                             | 🆕 New feature   | -        | -     |
| List actions > Row actions    | View                                  | ✅ Supported     | -        | -     |
| List actions > Row actions    | Delete                                | ✅ Supported     | -        | -     |
| List actions > Row actions    | Edit                                  | ✅ Supported     | -        | -     |
| List actions > Row actions    | Link                                  | ✅ Supported     | -        | -     |
| List actions > Row actions    | Popup                                 | ✅ Supported     | -        | -     |
| List actions > Row actions    | Update record                         | ✅ Supported     | -        | -     |
| List actions > Row actions    | Template print                        | ✅ Supported     | -        | -     |
| List actions > Row actions    | Trigger workflow                      | ✅ Supported     | -        | -     |
| List actions > Row actions    | Custom request                        | ❌ Not supported | P2       | -     |
| List actions > Row actions    | AI employees                          | 🆕 New feature   | -        | -     |
| List actions > Row actions    | JS action                             | 🆕 New feature   | -        | -     |
| List fields                   | Display collection fields             | ✅ Supported     | -        | -     |
| List fields                   | Display association fields            | ✅ Supported     | -        | -     |
| List fields > Others          | JS field                              | 🆕 New feature   | -        | -     |
| List fields > Others          | JS item                               | 🆕 New feature   | -        | -     |
| List fields > Others          | Divider                               | ✅ Supported     | -        | -     |
| List fields > Others          | Markdown                              | 🆕 New feature   | -        | -     |

#### Other Blocks


| Feature               | Status           | Priority | Notes |
| --------------------- | ---------------- | -------- | ----- |
| Grid card block       | ✅ Supported     | -        | -     |
| Comments block        | ✅ Supported     | -        | -     |
| Map block             | ✅ Supported     | -        | -     |
| Charts block          | ✨ Enhanced      | -        | -     |
| Calendar block        | ❌ Not supported | -        | -     |
| Gantt block           | ❌ Not supported | -        | -     |
| Kanban block          | ❌ Not supported | -        | -     |
| Multi-step form block | ❌ Not supported | -        | -     |
| Filter form           | ✨ Enhanced      | -        | -     |
| Filter collapse       | ❌ Not supported | -        | -     |
| Tree filter           | ❌ Not supported | -        | -     |
| Block template        | 🆕 New feature   | -        | -     |
| JS block              | 🆕 New feature   | -        | -     |
| Iframe                | ✅ Supported     | -        | -     |
| Action panel          | ✅ Supported     | -        | -     |
| Markdown              | ✨ Enhanced      | -        | -     |
| Record history        | 🆕 New feature   | -        | -     |
| Mail                  | ✅ Supported     | -        | -     |
| Workflow              | 🔄 In progress   | P0       | -     |

#### Action Panel


| Category              | Feature                   | Status           | Priority | Notes |
| --------------------- | ------------------------- | ---------------- | -------- | ----- |
| Action panel settings | Title & description       | ✅ Supported     | -        | -     |
| Action panel settings | Block height              | ❌ Not supported | P1       | -     |
| Action panel settings | Block linkage rules       | ✨ Enhanced      | -        | -     |
| Action panel settings | Layout                    | ✅ Supported     | -        | -     |
| Action panel settings | Ellipsis on text overflow | ✅ Supported     | -        | -     |
| Action panel settings | Save as template          | 🆕 New feature   | -        | -     |
| Action panel settings | Copy UID                  | 🆕 New feature   | -        | -     |
| Action panel settings | Delete                    | ✅ Supported     | -        | -     |
| Actions               | Popup                     | ✅ Supported     | -        | -     |
| Actions               | Link                      | ✅ Supported     | -        | -     |
| Actions               | Scan QR code              | ✅ Supported     | -        | -     |
| Actions               | Update record             | ❌ Not supported | P2       | -     |
| Actions               | Custom request            | ❌ Not supported | P2       | -     |
| Actions               | Trigger workflow          | ❌ Not supported | P2       | -     |
| Actions               | JS Action                 | 🆕 New feature   | -        | -     |

#### Fields

##### Read-only Mode


| Category           | Feature             | Status           | Priority | Notes |
| ------------------ | ------------------- | ---------------- | -------- | ----- |
| Clickable field    | Text display        | ✅ Supported     | -        | -     |
| Clickable field    | Number display      | ✅ Supported     | -        | -     |
| Clickable field    | Date display        | ✅ Supported     | -        | -     |
| Clickable field    | Time display        | ✅ Supported     | -        | -     |
| Clickable field    | Enum display        | ✅ Supported     | -        | -     |
| Clickable field    | Relation display    | ✅ Supported     | -        | -     |
| Large text display | Rich text display   | ✅ Supported     | -        | -     |
| Large text display | Markdown display    | ✅ Supported     | -        | -     |
| Large text display | Code block display  | ❌ Not supported | P1       | -     |
| Large text display | JSON field          | ✅ Supported     | -        | -     |
| Field display      | URL field           | ✅ Supported     | -        | -     |
| Field display      | Preview field       | ✅ Supported     | -        | -     |
| Field display      | Checkbox field      | ✅ Supported     | -        | -     |
| Field display      | Icon field          | ✅ Supported     | -        | -     |
| Field display      | Color field         | ✅ Supported     | -        | -     |
| Field display      | Formula calculation | ✅ Supported     | -        | -     |
| Field display      | Auto code           | ✅ Supported     | -        | -     |
| Relation field     | SubDetails          | 🔄 In progress   | P0       | -     |
| Relation field     | SubTable            | 🔄 In progress   | P0       | -     |
| Field display      | Map display         | ✅ Supported     | -        | -     |
| Field display      | JS Field            | ✅ Supported     | -        | -     |
| Field display      | TableOID            | ✅ Supported     | -        | -     |
| Field display      | China region        | ❌ Not supported | -        | -     |
| Field display      | QR code             | ❌ Not supported | -        | -     |

##### Edit Mode


| Feature                  | Status           | Priority | Notes |
| ------------------------ | ---------------- | -------- | ----- |
| Single line input        | ✅ Supported     | -        | -     |
| Number input             | ✅ Supported     | -        | -     |
| Percentage input         | ✅ Supported     | -        | -     |
| Password input           | ✅ Supported     | -        | -     |
| NanoID input             | ✅ Supported     | -        | -     |
| Multi-line text input    | ✅ Supported     | -        | -     |
| Rich text editor         | ✅ Supported     | -        | -     |
| Code editor              | ❌ Not supported | -        | -     |
| Markdown editor          | ✅ Supported     | -        | -     |
| JSON input               | ✅ Supported     | -        | -     |
| Selector                 | ✅ Supported     | -        | -     |
| Radio                    | ✅ Supported     | -        | -     |
| Checkbox                 | ✅ Supported     | -        | -     |
| Checkbox group           | ✅ Supported     | -        | -     |
| Date picker              | ✅ Supported     | -        | -     |
| Color picker             | ✅ Supported     | -        | -     |
| Icon picker              | ✅ Supported     | -        | -     |
| Time picker              | ✅ Supported     | -        | -     |
| Record picker (dropdown) | ✅ Supported     | -        | -     |
| Record picker (popup)    | ✅ Supported     | -        | -     |
| Record picker (cascade)  | ✅ Supported     | -        | -     |
| File manager             | ✅ Supported     | -        | -     |
| Collection selector      | 🔄 In progress   | P2       | -     |
| China region             | ❌ Not supported | -        | -     |
| QR code                  | ❌ Not supported | -        | -     |
| Scan to input            | ❌ Not supported | -        | -     |
| SubForm                  | 🚀 Optimizing    | P0       | -     |
| SubTable (simple)        | 🚀 Optimizing    | P0       | -     |
| SubTable (advanced)      | 🔄 In progress   | P1       | -     |
| Map picker               | ✅ Supported     | -        | -     |
| JS Field                 | ✅ Supported     | -        | -     |

#### Actions


| Feature            | Status           | Priority | Notes |
| ------------------ | ---------------- | -------- | ----- |
| Popup              | ✅ Supported     | -        | -     |
| View               | ✅ Supported     | -        | -     |
| Filter             | ✅ Supported     | -        | -     |
| Add                | ✅ Supported     | -        | -     |
| Add sub-record     | ✅ Supported     | -        | -     |
| Link               | ✅ Supported     | -        | -     |
| Edit               | ✅ Supported     | -        | -     |
| Delete             | ✅ Supported     | -        | -     |
| Refresh            | ✅ Supported     | -        | -     |
| Update record      | 🚀 Optimizing    | P1       | -     |
| Submit             | 🚀 Optimizing    | P1       | -     |
| Upload             | ✅ Supported     | -        | -     |
| Trigger workflow   | ✅ Supported     | -        | -     |
| Bulk edit          | ❌ Not supported | P1       | -     |
| Bulk update        | ✅ Supported     | -        | -     |
| Custom request     | ❌ Not supported | -        | -     |
| Copy               | ❌ Not supported | -        | -     |
| Print              | ❌ Not supported | -        | -     |
| Template print     | ✅ Supported     | -        | -     |
| Import             | ✅ Supported     | -        | -     |
| Export             | ✅ Supported     | -        | -     |
| Export attachments | ✅ Supported     | -        | -     |
| Scan QR code       | ❌ Not supported | -        | -     |
| AI employees       | 🆕 New feature   | -        | -     |
| JS Action          | 🆕 New feature   | -        | -     |

#### Advanced Features


| Category             | Feature                    | Status                        | Priority | Notes |
| -------------------- | -------------------------- | ----------------------------- | -------- | ----- |
| UI templates         | Block                      | 🆕 New feature                | -        | -     |
| UI templates         | Popup                      | 🆕 New feature                | -        | -     |
| UI templates         | Field                      | 🆕 New feature                | -        | -     |
| UI templates > Field | Form field                 | 🆕 New feature                | -        | -     |
| UI templates > Field | Details field              | 🆕 New feature                | -        | -     |
| UI templates > Field | Approval field             | 🆕 New feature                | -        | -     |
| UI and permissions   | UI and permissions         | ✨ Enhanced                   | -        | -     |
| Event flow           | Event flow events          | 🆕 New feature, 🚀 Optimizing | P1       | -     |
| Event flow           | Event flow actions         | 🆕 New feature, 🚀 Optimizing | P1       | -     |
| Linkage rules        | Linkage rules              | 🚀 Optimizing                 | P1       | -     |
| Variables            | Current user               | 🚀 Optimizing                 | P1       | -     |
| Variables            | Current role (identifier)  | ✅ Supported                  | -        | -     |
| Variables            | Current space (identifier) | ❌ Not supported              | P1       | -     |
| Variables            | API key                    | ✅ Supported                  | -        | -     |
| Variables            | URL query parameters       | ✅ Supported                  | -        | -     |
| Variables            | Current device             | 🆕 New feature                | -        | -     |
| Variables            | Current record             | ✅ Supported                  | -        | -     |
| Variables            | Current form               | ✅ Supported                  | -        | -     |
| Variables            | Current object             | ❌ Not supported              | P1       | -     |
| Variables            | Current popup              | 🚀 Optimizing                 | P1       | -     |
| Variables            | Current selected records   | ❌ Not supported              | P2       | -     |
| Variables            | Date variables             | 🔄 In progress                | P1       | -     |
| Variables            | Variables and keys         | 🔄 In progress                | P1       | -     |
| JavaScript           | Run JavaScript             | 🆕 New feature                | -        | -     |

### Plugin Status


| Plugin Name                                      | Plugin Status                    | Priority | Notes                                           |
| ------------------------------------------------ | -------------------------------- | -------- | ----------------------------------------------- |
| @nocobase/plugin-action-bulk-edit                | ❌ Not supported                 | P1       | -                                               |
| @nocobase/plugin-action-custom-request           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-action-duplicate                | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-action-print                    | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-block-multi-step-form           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-block-tree                      | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-calendar                        | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-custom-variables                | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-embed                           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-field-china-region              | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-field-code                      | ❌ Not supported                 | P1       | -                                               |
| @nocobase/plugin-field-sort                      | ❌ Not supported                 | -        | Drag and drop sorting of records not supported  |
| @nocobase/plugin-file-previewer-office           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-gantt                           | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-kanban                          | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-public-forms                    | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-text-copy                       | ❌ Not supported                 | -        | -                                               |
| @nocobase/plugin-data-visualization-echarts      | ⚠️ Deprecated                  | -        | Use @nocobase/plugin-data-visualization instead |
| @nocobase/plugin-field-component-mask            | ⚠️ Deprecated                  | -        | -                                               |
| @nocobase/plugin-mobile                          | ⚠️ Deprecated                  | -        | Use @nocobase/plugin-ui-layout instead          |
| @nocobase/plugin-multi-app-manager               | ⚠️ Deprecated                  | -        | Use @nocobase/plugin-app-supervisor instead     |
| @nocobase/plugin-app-supervisor                  | 🆕 New feature                   | P0       | Coming soon                                     |
| @nocobase/plugin-ai                              | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-ai-gigachat                     | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-block-grid-card                 | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-block-list                      | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-block-markdown                  | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-flow-engine                     | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-form-drafts                     | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-multi-space                     | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-record-history                  | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-telemetry                       | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-ui-layout                       | 🆕 New feature, ❌ Not supported | P2       | Planned                                         |
| @nocobase/plugin-ui-templates                    | 🆕 New feature                   | -        | -                                               |
| @nocobase/plugin-acl                             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-bulk-update              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-export                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-export-pro               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-import                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-import-pro               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-action-template-print           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-api-doc                         | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-api-keys                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-async-task-manager              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-audit-logger                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-audit-logs                      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth                            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-cas                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-dingtalk                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-ldap                       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-oidc                       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-saml                       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-sms                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-auth-wecom                      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-backup-restore                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-backups                         | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-block-iframe                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-block-template                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-block-tree                      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-block-workbench                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-client                          | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-collection-fdw                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-collection-sql                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-collection-tree                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-comments                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-custom-brand                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mariadb    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mssql      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mysql      | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-oracle     | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-external-postgres   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-kingbase            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-main                | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-manager             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-source-rest-api            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-data-visualization              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-departments                     | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-email-manager                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-environment-variables           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-error-handler                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-attachment-url            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-encryption                | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-formula                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-m2m-array                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-markdown-vditor           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-field-sequence                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-file-manager                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-file-storage-s3-pro             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-graph-collection-manager        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-ip-restriction                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-license                         | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-locale-tester                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-localization                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-lock-adapter-redis              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-logger                          | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-map                             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-migration-manager               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-multi-keyword-filter            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-notification-email              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-notification-in-app-message     | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-notification-manager            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-password-policy                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-pubsub-adapter-redis            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-rabbitmq          | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-redis             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-request-encryption              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-system-settings                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-telemetry-prometheus            | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-theme-editor                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-two-factor-authentication       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-ui-schema-storage               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-user-data-sync                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-users                           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-verification                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-verification-totp-authenticator | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workerid-allocator-redis        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow                        | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-action-trigger         | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-aggregate              | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-approval               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-cc                     | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-custom-action-trigger  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-date-calculation       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-delay                  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-dynamic-calculation    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-javascript             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-json-query             | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-json-variable-mapping  | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-loop                   | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-mailer                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-manual                 | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-notification           | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-parallel               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-request                | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-request-interceptor    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-response-message       | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-sql                    | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-subflow                | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-variable               | ✅ Supported                     | -        | -                                               |
| @nocobase/plugin-workflow-webhook                | ✅ Supported                     | -        | -                                               |

我们很高兴地宣布，**NocoBase CRM  解决方案已正式上线**！

作为一个开源的无代码开发平台，NocoBase 已经被全世界用户广泛应用于各种业务场景。在用户的实际使用中，我们发现：**CRM 是很多用户上手构建的第一个系统**。

因此，我们将 CRM 作为**第一个官方解决方案**推出，并上线至在线 Demo 环境，供大家直接体验与复制。

立即体验：[https://www.nocobase.com/cn/solutions/crm](https://www.nocobase.com/cn/solutions/crm)

<iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=114857223390547&bvid=BV1hJuHzHEg9&cid=31055940933&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 为什么 CRM 是我们的第一个解决方案？

CRM 作为用户最常用 NocoBase 搭建的系统类型，它结构清晰、流程明确，同时具备表单、流程、权限、图表等多个 NocoBase 核心能力，并且已经在许多客户场景中完整验证能力。

## 你可以在 CRM Demo 中做什么？

体验完整的 CRM 功能，包括：

* 管理客户信息、联系人与机构资料
* 在仪表盘中体验或配置漏斗图、业绩排行等图表
* 在系统内进行审批以及邮件沟通
* 设置日程提醒、自动化流程和任务安排
* 自定义字段、关系、权限与界面布局

从配置数据结构，到界面布局，再到流程逻辑，这一切都是通过 NocoBase 的可视化配置完成，无需写一行代码。

## 使用了哪些商业插件？

当前 CRM Demo 中使用了以下商业插件来实现完整功能。


| 插件名称                                                                                            | 在 CRM 中的作用                                             | 无插件的实现方式                                            |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| [数据可视化：ECharts](https://docs-cn.nocobase.com/handbook/data-visualization-echarts)             | 漏斗图、柱状图、饼图等可视化图表配置                        | 用我们的免费图表、iframe 区块平替                           |
| 数据表：评论                                                                                        | 对客户、联系人、工单等的评论交互                            | 用 Markdown(Vditor) 插件 + 列表来实现                       |
| [邮件管理](https://docs-cn.nocobase.com/handbook/email-manager/usage-admin)                         | 高频使用，全局邮件发送和管理                                | 用数据表 + 邮件节点部分实现 50% 的能力，不过没有附件功能    |
| [备份管理器](https://docs-cn.nocobase.com/handbook/backups)                                         | 应用的备份、还原、分发                                      | 可以用数据库迁移的方式实现                                  |
| [工作流：审批](https://docs-cn.nocobase.com/handbook/workflow/triggers/approval)                    | 报价单、订单的提交审批                                      | 可以用状态字段+联动规则实现，如果流程复杂之后可能会比较困难 |
| [工作流：JSON 变量映射](https://docs-cn.nocobase.com/handbook/workflow/nodes/json-variable-mapping) | 比如“线索处理”，解析 SQL 结果并分发给销售                 | 使用SQL存储过程实现                                         |
| [工作流：JSON 计算](https://docs-cn.nocobase.com/handbook/workflow/nodes/json-query)                | 更灵活强大的 Json 解析节点，比如“线索任务”后对 SQL 的解析 | 使用SQL存储过程实现                                         |
| [工作流：自定义变量](https://docs-cn.nocobase.com/handbook/workflow/nodes/variable)                 | 比如“添加：服务单”后，需要暂存 客户/机器 id               | 使用SQL存储过程实现                                         |
| [操作：导出数据 （Pro）](https://docs-cn.nocobase.com/handbook/action-export-pro)                   | 所有表格的导出操作                                          | 可以采用默认的导入                                          |
| [操作：导入数据 （Pro）](https://docs-cn.nocobase.com/handbook/action-import-pro)                   | 所有表格的导入操作                                          | 可以采用默认的导出方式                                      |
| [自定义变量](https://docs-cn.nocobase.com/handbook/custom-variables)                                | 标签右侧的数字气泡                                          | ⚠️ 暂无                                                   |
| [模板打印](https://docs-cn.nocobase.com/handbook/action-template-print)                             | 报价单、订单打印                                            | ⚠️ 暂无                                                   |
| 历史记录（内测中）                                                                                  | 记录数据的变动日志                                          | ⚠️ 暂无                                                   |

## 如果你还没有购买商业插件怎么办？

在**不启用商业插件的情况下**也能使用核心功能。

1. 对于相对复杂的逻辑，比如筛选合适的销售并分发线索。如果没有操作前事件、JSON 解析节点、JavaScript 节点的情况下，可采用 SQL 数据库内的存储过程来实现复杂逻辑，不过整体的代码管理和后续的迁移会比较困难。
2. 对于没有数据操作日志的用户，可以先采用操作前事件 + 查询节点 + JavaScript 节点（复杂关系字段） 来对比，实现字段的跟踪。不过整体会很繁琐，可能每次变更都需要单独进行字段对比，而且性能开销会比较大。
3. 对于缺少一些特殊区块，比如评论插件的用户，可以采用列表功能来实现，比如我们教程里的方式：[第四章：任务与评论插件](https://www.nocobase.com/cn/tutorials/task-tutorial-plugin-use#422-%E6%96%B9%E6%B3%95%E4%BA%8C%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%84%E8%AE%BA%E8%A1%A8)
4. 其他能力，比如自定义变量、模版打印、历史记录，没有插件的情况下，可能会很难完全实现对应功能。

## 复制到自己的环境

现在你可以直接将这套 CRM 系统复制到自己的环境中。基于这个模版更快速的搭建，增加或删除任意功能，使这个 CRM 完全符合你的业务需求！

阅读教程：[NocoBase CRM Demo 部署指南](https://www.nocobase.com/cn/tutorials/nocobase-crm-demo-deployment-guide)

接下来我们将围绕这个系统完善相关教程，详细拆解这个系统是如何搭建的。

也请大家敬请期待，后续我们将持续推出更多其他的解决方案，如工单、项目管理等。

**相关阅读：**

* [10 个最受开发者喜爱的开源 ERP / CRM 项目（GitHub Star 榜单）](https://www.nocobase.com/cn/blog/top-10-most-starred-open-source-erp-and-crm-on-github)
* [GitHub 上星星数量前 11 的开源 CRM 项目](https://www.nocobase.com/cn/blog/github-open-source-crm-projects)
* [NocoBase vs Salesforce：谁才是你的理想 CRM？](https://www.nocobase.com/cn/blog/nocobase-vs-salesforce)
* [在数小时内构建 CRM：你需要了解的顶级无代码（零代码）/低代码工具](https://www.nocobase.com/cn/blog/low-code-no-code-crm-builder)
* [定制 CRM 的4个真实用户案例（帮你选择更灵活CRM产品）](https://www.nocobase.com/cn/blog/custom-crm-case-studies)
* [适合小型企业的四款开源 CRM 软件：轻量、高效、易上手](https://www.nocobase.com/cn/blog/the-best-4-crm-software-for-small-businesses)
* [如何在 NocoBase 中实现 CRM 的线索转化](https://www.nocobase.com/cn/tutorials/how-to-implement-lead-conversion-in-nocobase)
* [在 NocoBase 中实现 CRM 销售漏斗可视化：线索状态进度条与阶段管理](https://www.nocobase.com/cn/tutorials/nocobase-crm-sales-pipeline-visualization-lead-status-progress-bar)

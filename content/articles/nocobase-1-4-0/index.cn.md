## 主要新特性

### 简化插件的添加和更新流程

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

- 插件列表直接读取本地目录
- 合并插件添加和更新流程
- 界面支持批量激活插件
- 简化商业插件下载和升级流程

参考文档：

- [插件的安装与升级](https://docs-cn.nocobase.com/welcome/getting-started/plugin)
- [发布日志 / 简化插件的添加和更新流程](https://www.nocobase.com/cn/blog/simplify-the-process-of-adding-and-updating-plugins)

### 通知

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

- 站内信：支持用户在 NocoBase 应用内实时接收消息通知；
- 电子邮件：通过电子邮件渠道发送通知，目前只支持 SMTP 传输方式；
- 企微通知：通过企业微信渠道发送通知。

参考手册

- [通知管理](https://docs-cn.nocobase.com/handbook/notification-manager)

### 用户数据同步

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

参考文档：

- [用户数据同步](https://docs-cn.nocobase.com/handbook/user-data-sync)

### 备份管理器

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

参考文档：

- [备份管理器](https://docs-cn.nocobase.com/handbook/backups)

### 公开表单

对外分享公开表单，向匿名用户收集信息。

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

参考文档：

- [公开表单](https://docs-cn.nocobase.com/handbook/public-forms)

### 数据源：人大金仓（KingbaseES）

使用人大金仓（KingbaseES）数据库作为数据源，可以作为主数据库，也可以作为外部数据库使用。

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

参考文档：

- [数据源 ： 人大金仓（KingbaseES）](https://docs-cn.nocobase.com/handbook/data-source-kingbase)

### 数据源：外部 Oracle

使用外部的 Oracle 数据库作为数据源。

![701f8271f153d417e6f25c8ba74c931d.png](https://static-docs.nocobase.com/701f8271f153d417e6f25c8ba74c931d.png)

参考文档：

- [数据源：外部 Oracle](https://docs-cn.nocobase.com/handbook/data-source-external-oracle)

### 数据表字段：附件（URL）

支持 URL 格式的附件

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

参考文档：

- [数据表字段：附件（URL）](https://docs-cn.nocobase.com/handbook/field-attachment-url)

### 字段组件：掩码

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

参考文档：

- [字段组件：掩码](https://docs-cn.nocobase.com/handbook/field-component-mask)

### 工作流：JavaScript

JavaScript 节点允许用户在工作流中执行一段自定义的服务端 JavaScript 脚本。脚本中可以使用流程上游的变量作为参数，并且可以将脚本的返回值提供给下游节点使用。

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

参考文档：

- [工作流节点 - JavaScript](https://docs-cn.nocobase.com/handbook/workflow-javascript)

### 数据可视化：ECharts

新增 ECharts 的图表的支持，支持漏斗图、雷达图等更多图形，并提供更友好的图形配置项。

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

参考文档：

- [数据可视化：ECharts](https://docs-cn.nocobase.com/handbook/data-visualization-echarts)

### 区块：分步表单

将包含很多字段的表单分成多个步骤填写，以减轻用户的负担。

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

参考文档：

- [分步表单](https://docs-cn.nocobase.com/handbook/block-multi-step-from)

### 区块：操作面板

用于放置各种快捷操作，目前支持：

- 链接
- 扫二维码
- 弹窗
- 自定义请求

支持栅格和列表两种布局

![48bd2e280aa887f3e5bd43d6c79d6b46.png](https://static-docs.nocobase.com/48bd2e280aa887f3e5bd43d6c79d6b46.png)

参考文档：

- [操作面板](https://docs-cn.nocobase.com/handbook/block-action-panel)

## 移除的内容

### 废弃备份还原插件

自 NocoBase v0.19 起，我们推出了 `@nocobase/plugin-backup-restore` 插件，用于应用备份和还原。但在实际使用中，体验并不理想，主要存在以下问题：

1. 无法备份和还原数据库字段的默认值、唯一索引等数据库层面的元数据；
2. 数据库的视图、存储过程、函数、触发器等无法进行备份或还原；
3. 每个插件表单需要单独配置 `dumpRules`，并可能需要插件开发者自定义逻辑，否则备份和还原容易失败；
4. 备份分组设计复杂，理解成本较高，选择不当可能导致备份失败或数据丢失；
5. 备份和还原过程发生在应用层，一旦应用无法启动，备份或还原也会失败。

经过慎重考虑，从 v1.4 版本起，我们决定废弃该插件，新的备份方案请查阅参考文档。

参考文档：

- [如何备份和还原 NocoBase](https://www.nocobase.com/cn/blog/nocobase-backup-restore)
